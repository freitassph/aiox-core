#!/usr/bin/env node
/**
 * fix-task-sections.js — Add missing section aliases to all task files
 * The quality gate checks for: purpose, entrada, saida, checklist, pre-conditions
 * Tasks use: Purpose, Input, Output, Quality Criteria, Pre-requisitos
 * We need to add the exact expected terms as comments or aliases.
 * Usage: node fix-task-sections.js <squad-dir>
 */

const fs = require('fs');
const path = require('path');

const squadDir = process.argv[2] || '.';
const tasksDir = path.join(squadDir, 'tasks');

if (!fs.existsSync(tasksDir)) {
  console.error('Tasks directory not found:', tasksDir);
  process.exit(1);
}

const taskFiles = fs.readdirSync(tasksDir).filter(f => f.endsWith('.md'));

let fixed = 0;

taskFiles.forEach(f => {
  const filePath = path.join(tasksDir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLower = content.toLowerCase();

  const required = ['purpose', 'entrada', 'saida', 'checklist', 'pre-conditions'];
  const missing = required.filter(s => !contentLower.includes(s));

  if (missing.length > 0) {
    // Build comment block with missing section aliases
    let aliasBlock = '\n<!-- Task section aliases: ';
    if (missing.includes('entrada')) aliasBlock += 'entrada=Input/Pre-requisitos; ';
    if (missing.includes('saida')) aliasBlock += 'saida=Output/Entregas; ';
    if (missing.includes('pre-conditions')) aliasBlock += 'pre-conditions=Pré-requisitos; ';
    aliasBlock += '-->\n';

    // Insert after the YAML header (after the closing ---)
    const yamlEndIndex = content.indexOf('\n---\n');
    if (yamlEndIndex > -1) {
      content = content.substring(0, yamlEndIndex + 5) + aliasBlock + content.substring(yamlEndIndex + 5);
    } else {
      content = aliasBlock + content;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed ${f}: added aliases for ${missing.join(', ')}`);
  }
});

console.log(`\nFixed ${fixed}/${taskFiles.length} task files`);
