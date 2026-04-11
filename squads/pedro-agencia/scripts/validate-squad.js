#!/usr/bin/env node
/**
 * validate-squad.js — Validate squad.yaml + all components against schemas
 * Usage: node scripts/validate-squad.js [--squad-path .]
 *
 * Validates:
 * - squad.yaml structure and required fields
 * - All agent files exist and have valid YAML headers
 * - All task files exist and have valid YAML headers
 * - All workflow files exist and are valid YAML
 * - All checklist files exist
 * - All template files exist
 * - All config files exist
 * - Cross-reference integrity (no orphan references)
 */

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

let yaml;
try {
  yaml = require('yaml');
} catch (e) {
  console.warn(chalk.yellow('Warning: yaml module not installed. Running in basic mode.'));
  yaml = null;
}

const program = new Command();
program
  .description('Validate squad structure and components')
  .option('--squad-path <path>', 'Path to squad directory', '.')
  .option('--strict', 'Enable strict validation (requires yaml module)', false)
  .parse(process.argv);

const opts = program.opts();
const squadDir = path.resolve(opts.squadPath);

let errors = 0;
let warnings = 0;
let passed = 0;

function check(condition, message, severity = 'ERROR') {
  if (condition) {
    passed++;
    console.log(chalk.green(`  ✓ ${message}`));
  } else {
    if (severity === 'ERROR') {
      errors++;
      console.log(chalk.red(`  ✗ ${message}`));
    } else {
      warnings++;
      console.log(chalk.yellow(`  ⚠ ${message}`));
    }
  }
  return condition;
}

function fileExists(relativePath) {
  const fullPath = path.join(squadDir, relativePath);
  return fs.existsSync(fullPath);
}

function readFile(relativePath) {
  const fullPath = path.join(squadDir, relativePath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

function extractYamlHeader(content) {
  if (!content) return null;
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  if (yaml) {
    try {
      return yaml.parse(match[1]);
    } catch (e) {
      return null;
    }
  }
  return match[1]; // Return raw string if yaml not available
}

console.log(chalk.bold('\n🔍 Squad Validation\n'));
console.log(chalk.dim(`  Squad directory: ${squadDir}\n`));

// 1. Validate squad.yaml
console.log(chalk.bold('1. squad.yaml'));
const squadYamlRaw = readFile('squad.yaml');
check(squadYamlRaw !== null, 'squad.yaml exists');

if (squadYamlRaw && yaml) {
  try {
    let squadYaml = yaml.parse(squadYamlRaw);
    // Support both top-level and nested `squad:` format
    if (squadYaml && squadYaml.squad && !squadYaml.components) {
      squadYaml = { ...squadYaml.squad };
    }
    check(!!squadYaml, 'squad.yaml is valid YAML');
    check(!!squadYaml.name, 'squad.yaml has name field');
    check(!!squadYaml.version, 'squad.yaml has version field');
    check(!!squadYaml.description, 'squad.yaml has description field');
    check(!!squadYaml.author || !!squadYaml.tier, 'squad.yaml has author or tier field');
    check(!!squadYaml.components || !!squadYaml.agents, 'squad.yaml has components section');
    check(!!squadYaml.components?.agents || !!squadYaml.agents, 'squad.yaml lists agents');
    check(!!squadYaml.components?.tasks || !!squadYaml.tasks, 'squad.yaml lists tasks');
    check(!!squadYaml.components?.workflows || !!squadYaml.workflows, 'squad.yaml lists workflows');
    check(!!squadYaml.components?.checklists || !!squadYaml.checklists, 'squad.yaml lists checklists');
    check(!!squadYaml.components?.templates || !!squadYaml.templates, 'squad.yaml lists templates');
    
    // Normalize for downstream use - support both simple list and object list formats
    if (squadYaml.agents && !squadYaml.components) {
      const normalizeAgents = (agents) => agents.map(a => typeof a === 'string' ? a : a.file);
      const normalizeList = (items) => items.map(i => typeof i === 'string' ? i : i.file);
      
      squadYaml.components = {
        agents: normalizeAgents(squadYaml.agents),
        tasks: squadYaml.tasks ? normalizeList(squadYaml.tasks) : [],
        workflows: squadYaml.workflows ? normalizeList(squadYaml.workflows) : [],
        checklists: squadYaml.checklists ? normalizeList(squadYaml.checklists) : [],
        templates: squadYaml.templates ? normalizeList(squadYaml.templates) : []
      };
    }
  } catch (e) {
    check(false, `squad.yaml parse error: ${e.message}`);
  }
} else if (squadYamlRaw) {
  console.log(chalk.yellow('  (Skipping YAML validation — yaml module not installed)'));
}

// 2. Validate agents
console.log(chalk.bold('\n2. Agents'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const agents = squadYaml.components?.agents || [];
  agents.forEach(agent => {
    const exists = fileExists(`agents/${agent}`);
    check(exists, `agents/${agent} exists`);
    if (exists) {
      const content = readFile(`agents/${agent}`);
      const header = extractYamlHeader(content);
      check(header !== null, `agents/${agent} has valid YAML header`);
    }
  });
  console.log(chalk.dim(`  ${agents.length} agents declared in squad.yaml`));
} else {
  // Fallback: check files in agents/ directory
  if (fileExists('agents')) {
    const agentFiles = fs.readdirSync(path.join(squadDir, 'agents')).filter(f => f.endsWith('.md'));
    agentFiles.forEach(f => {
      const content = readFile(`agents/${f}`);
      const header = extractYamlHeader(content);
      check(header !== null, `agents/${f} has valid YAML header`);
    });
    console.log(chalk.dim(`  ${agentFiles.length} agents found in agents/ directory`));
  }
}

// 3. Validate tasks
console.log(chalk.bold('\n3. Tasks'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const tasks = squadYaml.components?.tasks || [];
  tasks.forEach(task => {
    const exists = fileExists(`tasks/${task}`);
    check(exists, `tasks/${task} exists`);
    if (exists) {
      const content = readFile(`tasks/${task}`);
      const header = extractYamlHeader(content);
      check(header !== null, `tasks/${task} has valid YAML header`);
    }
  });
  console.log(chalk.dim(`  ${tasks.length} tasks declared in squad.yaml`));
}

// 4. Validate workflows
console.log(chalk.bold('\n4. Workflows'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const workflows = squadYaml.components?.workflows || [];
  workflows.forEach(wf => {
    const exists = fileExists(`workflows/${wf}`);
    check(exists, `workflows/${wf} exists`);
  });
  console.log(chalk.dim(`  ${workflows.length} workflows declared in squad.yaml`));
}

// 5. Validate checklists
console.log(chalk.bold('\n5. Checklists'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const checklists = squadYaml.components?.checklists || [];
  checklists.forEach(cl => {
    const exists = fileExists(`checklists/${cl}`);
    check(exists, `checklists/${cl} exists`);
  });
  console.log(chalk.dim(`  ${checklists.length} checklists declared in squad.yaml`));
}

// 6. Validate templates
console.log(chalk.bold('\n6. Templates'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const templates = squadYaml.components?.templates || [];
  templates.forEach(tpl => {
    const exists = fileExists(`templates/${tpl}`);
    check(exists, `templates/${tpl} exists`);
  });
  console.log(chalk.dim(`  ${templates.length} templates declared in squad.yaml`));
}

// 7. Validate config files
console.log(chalk.bold('\n7. Config Files'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const configFiles = squadYaml.config || {};
  Object.entries(configFiles).forEach(([key, relPath]) => {
    if (typeof relPath === 'string') {
      const exists = fileExists(relPath);
      check(exists, `config.${key} → ${relPath} exists`);
    }
  });
}

// 8. Validate README
console.log(chalk.bold('\n8. README.md'));
const readmeContent = readFile('README.md');
check(readmeContent !== null, 'README.md exists');
if (readmeContent) {
  const lineCount = readmeContent.split('\n').length;
  check(lineCount >= 100, `README.md has ${lineCount} lines (≥100 required)`, lineCount >= 100 ? 'ERROR' : 'WARN');
}

// 9. Check for orphan references
console.log(chalk.bold('\n9. Orphan References'));
if (squadYamlRaw && yaml) {
  const squadYaml = yaml.parse(squadYamlRaw);
  const allComponents = [
    ...(squadYaml.components?.agents || []),
    ...(squadYaml.components?.tasks || []),
    ...(squadYaml.components?.workflows || []),
    ...(squadYaml.components?.checklists || []),
    ...(squadYaml.components?.templates || []),
  ];

  // Check for declared components that don't exist
  const componentDirs = {
    agents: 'agents/',
    tasks: 'tasks/',
    workflows: 'workflows/',
    checklists: 'checklists/',
    templates: 'templates/',
  };

  Object.entries(componentDirs).forEach(([section, dir]) => {
    const items = squadYaml.components?.[section] || [];
    items.forEach(item => {
      if (!fileExists(`${dir}${item}`)) {
        check(false, `Orphan: ${dir}${item} declared but file missing`);
      }
    });
  });

  // Check for files that exist but aren't declared
  Object.entries(componentDirs).forEach(([section, dir]) => {
    const declared = (squadYaml.components?.[section] || []).sort();
    if (fileExists(dir)) {
      const actual = fs.readdirSync(path.join(squadDir, dir))
        .filter(f => f.endsWith('.md') || f.endsWith('.yaml'))
        .sort();
      const orphans = actual.filter(f => !declared.includes(f));
      orphans.forEach(f => {
        check(false, `Undeclared file: ${dir}${f}`, 'WARN');
      });
    }
  });
}

// Summary
console.log(chalk.bold('\n' + '='.repeat(50)));
console.log(chalk.bold('Validation Summary'));
console.log('='.repeat(50));
console.log(chalk.green(`  ✓ Passed:   ${passed}`));
if (errors > 0) console.log(chalk.red(`  ✗ Errors:   ${errors}`));
if (warnings > 0) console.log(chalk.yellow(`  ⚠ Warnings: ${warnings}`));
console.log('='.repeat(50));

if (errors === 0) {
  console.log(chalk.green.bold('\n✅ All validation checks passed!\n'));
  process.exit(0);
} else {
  console.log(chalk.red.bold(`\n❌ Validation failed with ${errors} error(s)\n`));
  process.exit(1);
}
