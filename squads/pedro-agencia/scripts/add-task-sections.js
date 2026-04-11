#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const squadDir = path.join(__dirname, '..');
const squadConfig = yaml.parse(fs.readFileSync(path.join(squadDir, 'squad.yaml'), 'utf8'));

const tasks = squadConfig.components.tasks || [];

console.log('🔧 Adding missing sections to all tasks...\n');

tasks.forEach(taskFile => {
  const taskPath = path.join(squadDir, 'tasks', taskFile);
  if (!fs.existsSync(taskPath)) {
    console.log(`  ⚠️  Missing: ${taskFile}`);
    return;
  }

  let content = fs.readFileSync(taskPath, 'utf8');
  let changes = [];

  // Check and add missing sections
  const requiredSections = [
    { key: '## Purpose', marker: 'purpose' },
    { key: '## Entrada', marker: 'entrada' },
    { key: '## Saida', marker: 'saida' },
    { key: '## Checklist', marker: 'checklist' },
    { key: '## Pre-Conditions', marker: 'pre-conditions' }
  ];

  const contentLower = content.toLowerCase();
  
  // Find position after YAML header and title
  const yamlEndMatch = content.match(/^---\n[\s\S]*?\n---\n/);
  let insertPosition = yamlEndMatch ? yamlEndMatch.index + yamlEndMatch[0].length : 0;
  
  // Find the title
  const titleMatch = content.substring(insertPosition).match(/^# .+$/m);
  if (titleMatch) {
    insertPosition = insertPosition + titleMatch.index + titleMatch[0].length;
  }

  let additions = '';

  requiredSections.forEach(section => {
    if (!contentLower.includes(section.marker)) {
      switch(section.marker) {
        case 'entrada':
          additions += `\n\n## Entrada\n\n\`\`\`yaml\nentrada:\n  - campo: user_input\n    tipo: string\n    obrigatorio: true\n    descricao: "Input from user for this task"\n\`\`\`\n`;
          break;
        case 'saida':
          additions += `\n\n## Saida\n\n\`\`\`yaml\nsaida:\n  - artifact: task_output\n    tipo: string\n    descricao: "Output artifact from task execution"\n\`\`\`\n`;
          break;
        case 'checklist':
          additions += `\n\n## Checklist\n\n- [ ] Task completed successfully\n- [ ] Output artifact validated\n- [ ] Handoff to next agent ready\n`;
          break;
        case 'pre-conditions':
          additions += `\n\n## Pre-Conditions\n\n- Previous tasks in pipeline completed\n- Required input artifacts available\n- Agent activated and ready\n`;
          break;
      }
      changes.push(section.key);
    }
  });

  if (changes.length > 0) {
    // Insert after title
    content = content.substring(0, insertPosition) + additions + content.substring(insertPosition);
    fs.writeFileSync(taskPath, content);
    console.log(`  ✅ ${taskFile}: Added ${changes.join(', ')}`);
  } else {
    console.log(`  ✓ ${taskFile}: All sections present`);
  }
});

console.log('\n✅ All tasks have been updated!');
