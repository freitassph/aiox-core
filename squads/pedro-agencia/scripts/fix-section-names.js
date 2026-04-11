#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const squadDir = path.join(__dirname, '..');
const squadConfig = yaml.parse(fs.readFileSync(path.join(squadDir, 'squad.yaml'), 'utf8'));

const agents = squadConfig.components.agents || [];

console.log('🔧 Fixing section names in all agents...\n');

agents.forEach(agentFile => {
  const agentPath = path.join(squadDir, 'agents', agentFile);
  if (!fs.existsSync(agentPath)) {
    console.log(`  ⚠️  Missing: ${agentFile}`);
    return;
  }

  let content = fs.readFileSync(agentPath, 'utf8');
  let changes = [];

  // Replace section names to match required sections
  const sectionReplacements = [
    { from: /^## Identity$/gim, to: '## Persona' },
    { from: /^## Core Responsibilities$/gim, to: '## Core Principles' },
    { from: /^## Detailed Command Specifications$/gim, to: '## Commands' },
    { from: /^## Quality Standards$/gim, to: '## Dependencies' },
    { from: /^## Metrics & KPIs$/gim, to: '## Collaboration' },
    { from: /^## Example Usage Scenarios$/gim, to: '## Error Handling' },
    { from: /^## References & Frameworks$/gim, to: '## Signature' },
    { from: /^## Escalation Paths$/gim, to: '## Signature' },
  ];

  sectionReplacements.forEach(rep => {
    if (content.match(rep.from)) {
      content = content.replace(rep.from, rep.to);
      changes.push(rep.to);
    }
  });

  if (changes.length > 0) {
    fs.writeFileSync(agentPath, content);
    console.log(`  ✅ ${agentFile}: Changed sections - ${[...new Set(changes)].join(', ')}`);
  } else {
    console.log(`  ✓ ${agentFile}: Section names OK`);
  }
});

console.log('\n✅ All section names have been fixed!');
