#!/usr/bin/env node

/**
 * Audit script for pedro-educacao squad
 * Validates structure, YAML files, agent definitions, and cross-references
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SQUAD_DIR = path.dirname(__dirname);
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';

let errors = [];
let warnings = [];
let passed = [];

function log(prefix, color, msg) {
  console.log(`${color}${BOLD}${prefix}${RESET} ${msg}`);
}

function check(description, condition, detail = '') {
  if (condition) {
    passed.push(description);
    log('✅', GREEN, description);
    if (detail) console.log(`   ${detail}`);
  } else {
    errors.push(description);
    log('❌', RED, description);
    if (detail) console.log(`   ${RED}${detail}${RESET}`);
  }
}

function warn(description, detail = '') {
  warnings.push(description);
  log('⚠️ ', YELLOW, description);
  if (detail) console.log(`   ${detail}`);
}

function section(name) {
  console.log(`\n${BLUE}${BOLD}━━━ ${name} ${'━'.repeat(60 - name.length)}${RESET}`);
}

// Load squad.yaml
section('1. Squad Configuration');
let squadConfig;
try {
  const squadYaml = fs.readFileSync(path.join(SQUAD_DIR, 'squad.yaml'), 'utf8');
  squadConfig = yaml.load(squadYaml);
  check('squad.yaml is valid YAML', true);
} catch (e) {
  check('squad.yaml is valid YAML', false, e.message);
  process.exit(1);
}

check('Has name', squadConfig.name, `Name: ${squadConfig.name}`);
check('Has version', squadConfig.version, `Version: ${squadConfig.version}`);
check('Has description', squadConfig.description);
check('Has author', squadConfig.author, `Author: ${squadConfig.author}`);
check('Has AIOX config', squadConfig.aiox);
check('Has components', squadConfig.components);
check('Has config section', squadConfig.config);

// Check required directories
section('2. Directory Structure');
const requiredDirs = ['agents', 'tasks', 'workflows', 'checklists', 'templates', 'tools', 'scripts', 'data', 'config'];
requiredDirs.forEach(dir => {
  const dirPath = path.join(SQUAD_DIR, dir);
  const exists = fs.existsSync(dirPath);
  check(`Directory exists: ${dir}/`, exists);
});

// Check agents
section('3. Agent Files');
if (squadConfig.components && squadConfig.components.agents) {
  const agentFiles = squadConfig.components.agents;
  agentFiles.forEach(agentFile => {
    const agentPath = path.join(SQUAD_DIR, 'agents', agentFile);
    const exists = fs.existsSync(agentPath);
    check(`Agent file exists: agents/${agentFile}`, exists);
    
    if (exists) {
      const content = fs.readFileSync(agentPath, 'utf8');
      check(`  - Has content`, content.length > 100, `${content.length} chars`);
      
      // Check for required sections
      const hasRole = content.toLowerCase().includes('role') || content.includes('#');
      if (!hasRole) {
        warn(`  - agents/${agentFile} may be missing role definition`);
      }
    }
  });
}

// Check tasks
section('4. Task Files');
if (squadConfig.components && squadConfig.components.tasks) {
  const taskFiles = squadConfig.components.tasks;
  taskFiles.forEach(taskFile => {
    const taskPath = path.join(SQUAD_DIR, 'tasks', taskFile);
    const exists = fs.existsSync(taskPath);
    if (!exists) {
      warn(`Task file missing: tasks/${taskFile}`);
    } else {
      const content = fs.readFileSync(taskPath, 'utf8');
      check(`Task file exists: tasks/${taskFile}`, true, `${content.length} chars`);
    }
  });
}

// Check workflows
section('5. Workflow Files');
if (squadConfig.components && squadConfig.components.workflows) {
  const workflowFiles = squadConfig.components.workflows;
  workflowFiles.forEach(wf => {
    const wfPath = path.join(SQUAD_DIR, 'workflows', wf);
    const exists = fs.existsSync(wfPath);
    if (!exists) {
      warn(`Workflow file missing: workflows/${wf}`);
    } else {
      try {
        if (wf.endsWith('.yaml') || wf.endsWith('.yml')) {
          const content = fs.readFileSync(wfPath, 'utf8');
          yaml.load(content);
          check(`Workflow valid YAML: workflows/${wf}`, true);
        } else {
          check(`Workflow file exists: workflows/${wf}`, true);
        }
      } catch (e) {
        check(`Workflow valid YAML: workflows/${wf}`, false, e.message);
      }
    }
  });
}

// Check checklists
section('6. Checklist Files');
if (squadConfig.components && squadConfig.components.checklists) {
  const checklistFiles = squadConfig.components.checklists;
  checklistFiles.forEach(cl => {
    const clPath = path.join(SQUAD_DIR, 'checklists', cl);
    const exists = fs.existsSync(clPath);
    if (!exists) {
      warn(`Checklist file missing: checklists/${cl}`);
    } else {
      const content = fs.readFileSync(clPath, 'utf8');
      check(`Checklist exists: checklists/${cl}`, true, `${content.length} chars`);
    }
  });
}

// Check templates
section('7. Template Files');
if (squadConfig.components && squadConfig.components.templates) {
  const templateFiles = squadConfig.components.templates;
  templateFiles.forEach(tpl => {
    const tplPath = path.join(SQUAD_DIR, 'templates', tpl);
    const exists = fs.existsSync(tplPath);
    if (!exists) {
      warn(`Template file missing: templates/${tpl}`);
    } else {
      const content = fs.readFileSync(tplPath, 'utf8');
      check(`Template exists: templates/${tpl}`, true, `${content.length} chars`);
    }
  });
}

// Check config references
section('8. Configuration References');
if (squadConfig.config) {
  if (squadConfig.config['coding-standards']) {
    const refPath = path.resolve(SQUAD_DIR, squadConfig.config['coding-standards']);
    const exists = fs.existsSync(refPath);
    check(`Coding standards reference exists`, exists, `${squadConfig.config['coding-standards']} -> ${refPath}`);
  }
  
  if (squadConfig.config['tech-stack']) {
    const techStackPath = path.resolve(SQUAD_DIR, squadConfig.config['tech-stack']);
    const exists = fs.existsSync(techStackPath);
    check(`Tech stack file exists`, exists, squadConfig.config['tech-stack']);
  }
}

// Check README
section('9. Documentation');
const readmePath = path.join(SQUAD_DIR, 'README.md');
if (fs.existsSync(readmePath)) {
  const readme = fs.readFileSync(readmePath, 'utf8');
  check('README.md exists', true, `${readme.length} chars`);
  check('README has description', readme.length > 50);
} else {
  check('README.md exists', false);
}

// Check for broken references in tasks
section('10. Task-Agent Cross-Reference');
if (squadConfig.components && squadConfig.components.tasks) {
  const tasksWithAgents = {};
  
  squadConfig.components.tasks.forEach(taskPath => {
    const agentName = taskPath.split('/')[0];
    if (!tasksWithAgents[agentName]) {
      tasksWithAgents[agentName] = [];
    }
    tasksWithAgents[agentName].push(taskPath);
  });
  
  Object.entries(tasksWithAgents).forEach(([agent, tasks]) => {
    const agentFile = squadConfig.components.agents.find(a => a.includes(agent));
    if (!agentFile) {
      warn(`No agent defined for tasks in: ${agent}/`);
    } else {
      check(`Agent exists for ${tasks.length} tasks: ${agent}/`, true);
    }
  });
}

// Summary
console.log(`\n${BOLD}${'━'.repeat(70)}${RESET}`);
console.log(`${BOLD}📊 AUDIT SUMMARY${RESET}`);
console.log(`${'━'.repeat(70)}`);
console.log(`${GREEN}✅ Passed: ${passed.length}${RESET}`);
console.log(`${RED}❌ Errors: ${errors.length}${RESET}`);
console.log(`${YELLOW}⚠️  Warnings: ${warnings.length}${RESET}`);
console.log(`${'━'.repeat(70)}`);

if (errors.length === 0 && warnings.length === 0) {
  console.log(`\n${GREEN}${BOLD}🎉 PERFECT SCORE: 100/100 - All checks passed!${RESET}\n`);
  process.exit(0);
} else if (errors.length === 0) {
  const score = Math.round((passed.length / (passed.length + warnings.length)) * 100);
  console.log(`\n${YELLOW}${BOLD}Score: ${score}/100 - ${warnings.length} warnings (non-critical)${RESET}\n`);
  process.exit(0);
} else {
  const score = Math.round((passed.length / (passed.length + errors.length + warnings.length)) * 100);
  console.log(`\n${RED}${BOLD}Score: ${score}/100 - ${errors.length} errors need fixing${RESET}\n`);
  
  if (errors.length > 0) {
    console.log(`${BOLD}Errors to fix:${RESET}`);
    errors.forEach((err, i) => console.log(`  ${i + 1}. ${err}`));
    console.log('');
  }
  
  process.exit(1);
}
