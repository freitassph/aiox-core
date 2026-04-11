#!/usr/bin/env node
/**
 * convert-yaml-to-md.js - Convert .yaml agent and task files to .md with YAML headers
 */

const fs = require('fs');
const path = require('path');

const squadDir = path.resolve(__dirname, '..');

function convertFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check if file already has a YAML header (starts with ---)
  if (content.trim().startsWith('---')) {
    return; // Already has YAML header
  }
  
  // Find where the YAML ends (second ---)
  const yamlEndMatch = content.match(/^---$/m);
  if (!yamlEndMatch) {
    console.log(`  ⚠️  No YAML header found in ${path.basename(filePath)}, skipping`);
    return;
  }
  
  // The entire file is YAML - wrap it in a YAML header
  const mdContent = `---\n${content}\n---\n`;
  
  // Write to .md file
  const mdPath = filePath.replace('.yaml', '.md');
  fs.writeFileSync(mdPath, mdContent, 'utf-8');
  console.log(`  ✅ Converted ${path.basename(filePath)} → ${path.basename(mdPath)}`);
}

// Convert agents
console.log('\n🔄 Converting agent files...');
const agentsDir = path.join(squadDir, 'agents');
if (fs.existsSync(agentsDir)) {
  const agentFiles = fs.readdirSync(agentsDir).filter(f => f.endsWith('.yaml'));
  agentFiles.forEach(f => convertFile(path.join(agentsDir, f)));
}

// Convert tasks
console.log('\n🔄 Converting task files...');
const tasksDir = path.join(squadDir, 'tasks');
if (fs.existsSync(tasksDir)) {
  const taskFiles = fs.readdirSync(tasksDir).filter(f => f.endsWith('.yaml'));
  taskFiles.forEach(f => convertFile(path.join(tasksDir, f)));
}

console.log('\n✅ Conversion complete!\n');
