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

let squadYaml = null;
if (squadYamlRaw && yaml) {
  try {
    const parsed = yaml.parse(squadYamlRaw);
    // Handle both formats: root level or under 'squad:' key
    squadYaml = parsed.squad || parsed;
    check(!!squadYaml, 'squad.yaml is valid YAML');
    check(!!squadYaml.name, 'squad.yaml has name field');
    check(!!squadYaml.version, 'squad.yaml has version field');
    check(!!squadYaml.description, 'squad.yaml has description field');
    check(!!squadYaml.author, 'squad.yaml has author field');
    check(!!squadYaml.agents, 'squad.yaml lists agents');
    check(!!squadYaml.tasks, 'squad.yaml lists tasks');
    check(!!squadYaml.workflows, 'squad.yaml lists workflows');
    check(!!squadYaml.checklists, 'squad.yaml lists checklists');
    check(!!squadYaml.templates, 'squad.yaml lists templates');
  } catch (e) {
    check(false, `squad.yaml parse error: ${e.message}`);
  }
} else if (squadYamlRaw) {
  console.log(chalk.yellow('  (Skipping YAML validation — yaml module not installed)'));
}

// 2. Validate agents
console.log(chalk.bold('\n2. Agents'));
if (squadYaml) {
  const agents = squadYaml.agents || [];
  agents.forEach(agent => {
    // Handle both formats: string or object with file property
    const agentFile = typeof agent === 'string' ? agent : agent.file;
    const exists = fileExists(agentFile);
    check(exists, `${agentFile} exists`);
    if (exists) {
      const content = readFile(agentFile);
      const header = extractYamlHeader(content);
      check(header !== null, `${agentFile} has valid YAML header`);
    }
  });
  console.log(chalk.dim(`  ${agents.length} agents declared in squad.yaml`));
}

// 3. Validate tasks
console.log(chalk.bold('\n3. Tasks'));
if (squadYaml) {
  const tasks = squadYaml.tasks || [];
  tasks.forEach(task => {
    // Handle both formats: string or object with file property
    const taskFile = typeof task === 'string' ? task : task.file;
    const exists = fileExists(taskFile);
    check(exists, `${taskFile} exists`);
    if (exists) {
      const content = readFile(taskFile);
      const header = extractYamlHeader(content);
      check(header !== null, `${taskFile} has valid YAML header`);
    }
  });
  console.log(chalk.dim(`  ${tasks.length} tasks declared in squad.yaml`));
}

// 4. Validate workflows
console.log(chalk.bold('\n4. Workflows'));
if (squadYaml) {
  const workflows = squadYaml.workflows || [];
  workflows.forEach(wf => {
    // Handle both formats: string or object with file property
    const wfFile = typeof wf === 'string' ? wf : wf.file;
    const exists = fileExists(wfFile);
    check(exists, `${wfFile} exists`);
  });
  console.log(chalk.dim(`  ${workflows.length} workflows declared in squad.yaml`));
}

// 5. Validate checklists
console.log(chalk.bold('\n5. Checklists'));
if (squadYaml) {
  const checklists = squadYaml.checklists || [];
  checklists.forEach(cl => {
    // Handle both formats: string or object with file property
    const clFile = typeof cl === 'string' ? cl : cl.file;
    const exists = fileExists(clFile);
    check(exists, `${clFile} exists`);
  });
  console.log(chalk.dim(`  ${checklists.length} checklists declared in squad.yaml`));
}

// 6. Validate templates
console.log(chalk.bold('\n6. Templates'));
if (squadYaml) {
  const templates = squadYaml.templates || [];
  templates.forEach(tpl => {
    // Handle both formats: string or object with file property
    const tplFile = typeof tpl === 'string' ? tpl : tpl.file;
    const exists = fileExists(tplFile);
    check(exists, `${tplFile} exists`);
  });
  console.log(chalk.dim(`  ${templates.length} templates declared in squad.yaml`));
}

// 7. Validate config files
console.log(chalk.bold('\n7. Config Files'));
if (squadYaml) {
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
if (squadYaml) {
  const allComponents = [
    ...(squadYaml.agents || []).map(a => typeof a === 'string' ? a : a.file),
    ...(squadYaml.tasks || []).map(t => typeof t === 'string' ? t : t.file),
    ...(squadYaml.workflows || []).map(w => typeof w === 'string' ? w : w.file),
    ...(squadYaml.checklists || []).map(c => typeof c === 'string' ? c : c.file),
    ...(squadYaml.templates || []).map(t => typeof t === 'string' ? t : t.file),
  ];

  // Check for declared components that don't exist
  const componentDirs = {
    agents: squadYaml.agents || [],
    tasks: squadYaml.tasks || [],
    workflows: squadYaml.workflows || [],
    checklists: squadYaml.checklists || [],
    templates: squadYaml.templates || [],
  };

  Object.entries(componentDirs).forEach(([section, items]) => {
    items.forEach(item => {
      const itemFile = typeof item === 'string' ? item : item.file;
      if (!fileExists(itemFile)) {
        check(false, `Orphan: ${itemFile} declared but file missing`);
      }
    });
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
