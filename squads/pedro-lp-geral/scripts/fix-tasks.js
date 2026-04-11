#!/usr/bin/env node
/**
 * fix-tasks.js — Add required sections to all tasks
 */

const fs = require('fs');
const path = require('path');

const tasksDir = path.join(__dirname, '..', 'tasks');
const taskFiles = fs.readdirSync(tasksDir).filter(f => f.endsWith('.md'));

const requiredSections = {
  'purpose': '## Purpose\nDescribe the purpose and goal of this task.',
  'entrada': '## Entrada\n```yaml\nentrada:\n  - campo: input_name\n    tipo: string\n    obrigatorio: true\n    descricao: "Description of input"\n```',
  'saida': '## Saida\n```yaml\nsaida:\n  - deliverable: output_name\n    formato: markdown\n    descricao: "Description of output"\n```',
  'checklist': '## Checklist\n```\n□ Item 1\n□ Item 2\n□ Item 3\n□ Item 4\n□ Item 5\n```',
  'pre-conditions': '## Pre-conditions\n```\n- Condition 1 that must be met\n- Condition 2 that must be met\n```'
};

taskFiles.forEach(taskFile => {
  const taskPath = path.join(tasksDir, taskFile);
  let content = fs.readFileSync(taskPath, 'utf-8');
  const contentLower = content.toLowerCase();
  
  // Find the YAML header end
  const headerEndMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!headerEndMatch) {
    console.log(`⚠️  ${taskFile}: No YAML header found, skipping`);
    return;
  }
  
  let insertPos = headerEndMatch.index + headerEndMatch[0].length;
  
  // Add missing sections after the header
  let additions = [];
  for (const [sectionKey, sectionContent] of Object.entries(requiredSections)) {
    if (!contentLower.includes(sectionKey.toLowerCase().replace('-', '[- ]?'))) {
      additions.push(sectionContent);
    }
  }
  
  if (additions.length > 0) {
    const newContent = content.slice(0, insertPos) + '\n\n' + additions.join('\n\n---\n\n') + '\n\n' + content.slice(insertPos);
    fs.writeFileSync(taskPath, newContent, 'utf-8');
    console.log(`✓ ${taskFile}: Added ${additions.length} missing sections`);
  } else {
    console.log(`✓ ${taskFile}: All required sections present`);
  }
});

console.log('\n✅ All tasks updated!');
