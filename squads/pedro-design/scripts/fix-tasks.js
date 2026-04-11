#!/usr/bin/env node
/**
 * fix-tasks.js — Add YAML headers and pre-conditions sections to all task files
 * Usage: node fix-tasks.js <squad-dir>
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

// Map of task file -> { agent, type }
const taskInfo = {};
taskFiles.forEach(f => {
  const content = fs.readFileSync(path.join(tasksDir, f), 'utf-8');
  // Extract agent from file content
  let agent = '';
  const agentMatch = content.match(/\*\*Agent:\*\*\s*(.+)/i) || content.match(/agent:\s*(.+)/i);
  if (agentMatch) agent = agentMatch[1].trim();

  // Extract type
  let type = 'Task';
  const typeMatch = content.match(/\*\*Type:\*\*\s*(.+)/i);
  if (typeMatch) type = typeMatch[1].trim();

  // Extract priority
  let priority = 'P1';
  const priorityMatch = content.match(/\*\*Priority:\*\*\s*(.+)/i);
  if (priorityMatch) priority = priorityMatch[1].trim();

  // Extract duration
  let duration = 'TBD';
  const durationMatch = content.match(/\*\*Duration:\*\*\s*(.+)/i) || content.match(/\*\*Time Estimate\*\*\s*\n+\s*(.+)/i);
  if (durationMatch) duration = durationMatch[1].trim();

  taskInfo[f] = { agent, type, priority, duration };
});

let fixed = 0;

taskFiles.forEach(f => {
  const filePath = path.join(tasksDir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  const info = taskInfo[f];

  // Check if already has YAML header (starts with --- followed by YAML content)
  const hasYamlHeader = content.trim().startsWith('---') && content.includes('\nid:');

  // Check for pre-conditions section (case-insensitive, accepts variants)
  const hasPreConditions = /pre[-_ ]?conditions|pr[ée]-requisitos/i.test(content);

  if (!hasYamlHeader || !hasPreConditions) {
    // Build YAML header
    const taskId = f.replace('.md', '');
    const yamlHeader = `---
id: ${taskId}
agent: ${info.agent || 'unknown'}
type: ${info.type || 'Task'}
priority: ${info.priority || 'P1'}
---

`;

    if (!hasYamlHeader) {
      // Check if file starts with --- (as horizontal rule)
      if (content.trim().startsWith('---')) {
        // Replace first --- block with YAML header
        const firstDashIndex = content.indexOf('---');
        const secondDashIndex = content.indexOf('---', firstDashIndex + 3);
        if (secondDashIndex > -1 && secondDashIndex < 200) {
          // Content between --- is likely a title, keep it
          const between = content.substring(firstDashIndex + 3, secondDashIndex).trim();
          const after = content.substring(secondDashIndex + 3).trim();
          content = yamlHeader + (between ? between + '\n\n' : '') + after;
        } else {
          content = yamlHeader + content;
        }
      } else {
        content = yamlHeader + content;
      }
    }

    if (!hasPreConditions) {
      // Add Pre-requisitos section before "Objetivo" or "Purpose" section
      // Find a good insertion point: after the title/intro block, before Purpose/Objetivo
      const purposeMatch = content.match(/^(##\s+(?:Purpose|Objetivo|Objetivos))\s*$/im);
      if (purposeMatch) {
        const insertPos = purposeMatch.index;
        // Find the line before this
        const linesBefore = content.substring(0, insertPos).trimEnd();
        const linesAfter = content.substring(insertPos);

        // Check if there's already a separator before Purpose
        const preConditionsSection = `
## Pré-requisitos

- [ ] Agente executor disponível e contextualizado
- [ ] Inputs necessários coletados
- [ ] Dependências de tasks anteriores resolvidas
- [ ] Ambiente de trabalho configurado

---
`;
        // Find the last --- before the purpose section
        const lastSeparatorBefore = content.lastIndexOf('\n---\n', insertPos);
        if (lastSeparatorBefore > 0) {
          content = content.substring(0, lastSeparatorBefore) + preConditionsSection + '\n' + content.substring(lastSeparatorBefore + 5);
        } else {
          // Find a good insertion point after any initial YAML/metadata
          const firstContentStart = content.search(/\n##\s/);
          if (firstContentStart > -1) {
            content = content.substring(0, firstContentStart) + preConditionsSection + '\n' + content.substring(firstContentStart);
          } else {
            content += preConditionsSection;
          }
        }
      } else {
        // No clear Purpose section found, append at end
        content += `
## Pré-requisitos

- [ ] Agente executor disponível e contextualizado
- [ ] Inputs necessários coletados
- [ ] Dependências de tasks anteriores resolvidas
- [ ] Ambiente de trabalho configurado
`;
      }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${f} (yaml: ${!hasYamlHeader}, pre-conditions: ${!hasPreConditions})`);
  }
});

console.log(`\nFixed ${fixed}/${taskFiles.length} task files`);
