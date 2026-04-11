#!/usr/bin/env node
/**
 * migrate-agents.js — Add missing required sections to all agent files
 */

const fs = require('fs');
const path = require('path');

const AGENTS_DIR = path.join(__dirname, '..', 'agents');
const requiredSections = ['persona', 'core_principles', 'commands', 'dependencies', 'collaboration', 'error handling', 'signature'];

function addMissingSections(filePath, agentName) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLower = content.toLowerCase().replace(/[_\s]+/g, ' ');
  const missingSections = requiredSections.filter(s => !contentLower.includes(s.toLowerCase().replace(/[_\s]+/g, ' ')));
  
  if (missingSections.length === 0) return content;
  
  // Find the end of the YAML header
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) return content;
  
  const yamlEnd = yamlMatch.index + yamlMatch[0].length;
  const afterYaml = content.slice(yamlEnd);
  
  // Build missing sections
  let additions = [];
  
  if (missingSections.some(s => s.includes('core_principles'))) {
    additions.push(`## Core Principles

1. **Excellence First**: Every deliverable meets S+++ standards
2. **Evidence-Based**: Decisions backed by data and research
3. **AI-Native**: Leverage AI capabilities at every opportunity
4. **User-Centric**: Always optimize for end-user experience
5. **Iterative Improvement**: Continuous refinement based on feedback
`);
  }
  
  if (missingSections.some(s => s.includes('commands'))) {
    additions.push(`## Commands

| Command | Description |
|---------|-------------|
| \`*${agentName} help\` | Show available commands |
| \`*${agentName} execute\` | Execute primary task |
| \`*${agentName} status\` | Show current status |
| \`*guide\` | Show comprehensive usage instructions |
| \`*exit\` | Exit agent persona |
`);
  }
  
  if (missingSections.some(s => s.includes('dependencies'))) {
    additions.push(`## Dependencies

- tasks: Refer to squad.yaml for task list
- templates: Standard output templates
- checklists: Quality validation checklists
- data: Reference data and frameworks
`);
  }
  
  if (missingSections.some(s => s.includes('collaboration'))) {
    additions.push(`## Collaboration

- Works with orchestrator for pipeline coordination
- Hands off artifacts to downstream agents
- Receives context from upstream agents
- Escalates blockers to orchestrator
`);
  }
  
  if (missingSections.some(s => s.includes('error handling'))) {
    additions.push(`## Error Handling

1. **Self-Correction**: Attempt to resolve issues autonomously
2. **Retry**: Re-execute failed operations (max 3 attempts)
3. **Escalate**: Notify orchestrator if unresolved
4. **Pause**: Halt pipeline if critical blocker found
`);
  }
  
  if (missingSections.some(s => s.includes('signature'))) {
    additions.push(`## Signature

*"Delivering excellence, one artifact at a time."*
`);
  }
  
  // Find insertion point: after YAML header, before first major content section
  // Look for first ## header after YAML
  const firstHeaderMatch = afterYaml.match(/\n## /);
  let insertIndex;
  if (firstHeaderMatch) {
    insertIndex = yamlEnd + firstHeaderMatch.index;
  } else {
    // Append at end
    insertIndex = content.length;
  }
  
  // Insert
  content = content.slice(0, insertIndex) + '\n' + additions.join('\n') + content.slice(insertIndex);
  
  return content;
}

// Main
console.log('🔧 Agent Migration: Adding missing required sections\n');

const agentFiles = fs.readdirSync(AGENTS_DIR).filter(f => f.endsWith('.md'));

let totalFiles = 0;
let modifiedFiles = 0;

agentFiles.forEach(agentFile => {
  const filePath = path.join(AGENTS_DIR, agentFile);
  const originalContent = fs.readFileSync(filePath, 'utf-8');
  const agentName = agentFile.replace('.md', '');
  const newContent = addMissingSections(filePath, agentName);
  
  totalFiles++;
  if (newContent !== originalContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    modifiedFiles++;
    console.log(`✅ Updated: agents/${agentFile}`);
  } else {
    console.log(`⏭️  Already valid: agents/${agentFile}`);
  }
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 Migration Summary`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`  Total files:    ${totalFiles}`);
console.log(`  Modified:       ${modifiedFiles}`);
console.log(`  Already valid:  ${totalFiles - modifiedFiles}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
