#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const squadDir = path.join(__dirname, '..');

// Read squad.yaml
const squadConfig = yaml.parse(fs.readFileSync(path.join(squadDir, 'squad.yaml'), 'utf8'));

// Fix agents
const agents = squadConfig.components.agents || [];
console.log(`🔧 Fixing ${agents.length} agent files...\n`);

agents.forEach(agentFile => {
  const agentPath = path.join(squadDir, 'agents', agentFile);
  if (!fs.existsSync(agentPath)) {
    console.log(`  ⚠️  Missing: ${agentFile}`);
    return;
  }

  let content = fs.readFileSync(agentPath, 'utf8');
  
  // Check if already has valid YAML header
  if (content.match(/^---\nagent:/m) || content.match(/^---\ntask: null/m)) {
    console.log(`  ✓ Already valid: ${agentFile}`);
    return;
  }

  const agentName = agentFile.replace('.md', '');
  
  // Create YAML header for agents
  const yamlHeader = `---
agent: edu-${agentName}
persona: "${agentName}"
role: "Education ${agentName}"
squad: pedro-educacao
---
`;

  // Check if file starts with ---
  if (content.startsWith('---\n')) {
    // Find the closing ---
    const secondDashIndex = content.indexOf('\n---\n', 4);
    if (secondDashIndex !== -1) {
      // Replace the empty YAML block
      content = yamlHeader + content.substring(secondDashIndex + 4);
    } else {
      // Just prepend
      content = yamlHeader + '\n' + content;
    }
  } else {
    // Prepend YAML header
    content = yamlHeader + '\n' + content;
  }
  
  fs.writeFileSync(agentPath, content);
  console.log(`  ✅ Fixed: ${agentFile}`);
});

// Fix tasks
const tasks = squadConfig.components.tasks || [];
console.log(`\n🔧 Fixing ${tasks.length} task files...\n`);

tasks.forEach(taskFile => {
  const taskPath = path.join(squadDir, 'tasks', taskFile);
  if (!fs.existsSync(taskPath)) {
    console.log(`  ⚠️  Missing: ${taskFile}`);
    return;
  }

  let content = fs.readFileSync(taskPath, 'utf8');
  
  // Check if already has valid YAML header
  if (content.match(/^---\ntask:/m) && content.match(/responsavel:/m)) {
    console.log(`  ✓ Already valid: ${taskFile}`);
    return;
  }

  const taskName = taskFile.replace('.md', '').split('/').pop();
  const agentName = taskFile.split('/')[0];
  
  // Create YAML header for tasks
  const yamlHeader = `---
task: edu-${taskName}
responsavel: "@edu-${agentName}"
responsavel_type: Agent
atomic_layer: Task
elicit: true
---
`;

  // Check if file starts with ---
  if (content.startsWith('---\n')) {
    // Find the closing ---
    const secondDashIndex = content.indexOf('\n---\n', 4);
    if (secondDashIndex !== -1) {
      // Replace the empty YAML block
      content = yamlHeader + content.substring(secondDashIndex + 4);
    } else {
      // Just prepend
      content = yamlHeader + '\n' + content;
    }
  } else {
    // Prepend YAML header
    content = yamlHeader + '\n' + content;
  }
  
  fs.writeFileSync(taskPath, content);
  console.log(`  ✅ Fixed: ${taskFile}`);
});

console.log('\n✅ All YAML headers have been fixed!');
