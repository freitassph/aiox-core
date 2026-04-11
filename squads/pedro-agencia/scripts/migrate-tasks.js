#!/usr/bin/env node
/**
 * migrate-tasks.js — Add missing required sections to all task files
 * Required sections: purpose, entrada, saida, checklist, pre-conditions
 */

const fs = require('fs');
const path = require('path');

const TASKS_DIR = path.join(__dirname, '..', 'tasks');

function addMissingSections(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLower = content.toLowerCase();
  const requiredSections = ['purpose', 'entrada', 'saida', 'checklist', 'pre-conditions'];
  const missingSections = requiredSections.filter(s => !contentLower.includes(s));
  
  if (missingSections.length === 0) return content;

  // Find the end of YAML header (second ---)
  const yamlEndMatch = content.match(/^---\n[\s\S]*?\n---\n/);
  if (!yamlEndMatch) return content; // No valid YAML
  
  const yamlEndIndex = yamlEndMatch.index + yamlEndMatch[0].length;
  const afterYaml = content.slice(yamlEndIndex);
  
  // Find first ## header after YAML
  const firstHeaderMatch = afterYaml.match(/\n## /);
  let insertIndex;
  if (firstHeaderMatch) {
    insertIndex = yamlEndIndex + firstHeaderMatch.index;
  } else {
    insertIndex = content.length;
  }
  
  // Build missing sections
  let additions = [];
  
  if (missingSections.includes('purpose')) {
    additions.push(`## Purpose

Execute this task with excellence following S+++ standards.
`);
  }
  
  if (missingSections.includes('entrada')) {
    additions.push(`## Entrada

\`\`\`yaml
input:
  context: {from orchestrator or previous task}
  parameters: {}
\`\`\`
`);
  }
  
  if (missingSections.includes('saida')) {
    additions.push(`## Saida

\`\`\`yaml
output:
  artifacts: []
  status: completed
  next_task: {determined by workflow}
\`\`\`
`);
  }
  
  if (missingSections.includes('checklist')) {
    additions.push(`## Checklist

- [ ] Task objective clearly defined
- [ ] Required inputs available and validated
- [ ] Execution follows established patterns
- [ ] Output artifacts properly formatted
- [ ] Results communicated to user/orchestrator
`);
  }
  
  if (missingSections.includes('pre-conditions')) {
    additions.push(`## Pre-Conditions

- Task agent is activated and ready
- Required context from previous tasks is available
- User has confirmed this task should be executed
`);
  }
  
  content = content.slice(0, insertIndex) + '\n' + additions.join('\n') + content.slice(insertIndex);
  
  return content;
}

// Main
console.log('🔧 Task Migration: Adding missing required sections\n');

const taskFiles = [];
const entries = fs.readdirSync(TASKS_DIR);

entries.forEach(entry => {
  const fullPath = path.join(TASKS_DIR, entry);
  if (fs.statSync(fullPath).isDirectory()) {
    const subFiles = fs.readdirSync(fullPath).filter(f => f.endsWith('.md'));
    subFiles.forEach(f => taskFiles.push(path.join(entry, f)));
  } else if (entry.endsWith('.md')) {
    taskFiles.push(entry);
  }
});

let totalFiles = 0;
let modifiedFiles = 0;

taskFiles.forEach(taskFile => {
  const filePath = path.join(TASKS_DIR, taskFile);
  const originalContent = fs.readFileSync(filePath, 'utf-8');
  const newContent = addMissingSections(filePath);
  
  totalFiles++;
  if (newContent !== originalContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    modifiedFiles++;
    console.log(`✅ Updated: tasks/${taskFile}`);
  }
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 Migration Summary`);
console.log(`  Total: ${totalFiles} | Modified: ${modifiedFiles} | Valid: ${totalFiles - modifiedFiles}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
