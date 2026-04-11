#!/usr/bin/env node
/**
 * expand-agent.js — Add required sections to an agent file
 * Usage: node scripts/expand-agent.js <agent-file> <agent-type>
 */

const fs = require('fs');
const path = require('path');

const agentFile = process.argv[2];
if (!agentFile) {
  console.error('Usage: node scripts/expand-agent.js <agent-file>');
  process.exit(1);
}

const agentPath = path.join(__dirname, '..', agentFile);
let content = fs.readFileSync(agentPath, 'utf-8');

// Check which sections are missing
const requiredSections = [
  'core_principles',
  'commands', 
  'dependencies',
  'collaboration',
  'error handling',
  'signature'
];

const contentLower = content.toLowerCase();
const missingSections = requiredSections.filter(section => 
  !contentLower.includes(section.toLowerCase().replace('_', '[- ]?'))
);

console.log(`Processing: ${agentFile}`);
console.log(`Missing sections: ${missingSections.join(', ')}`);
console.log(`Current lines: ${content.split('\n').length}`);

// The script would add sections, but for now just report
console.log('\nManual expansion required - use the patterns from lp-geral-orchestrator.md');
