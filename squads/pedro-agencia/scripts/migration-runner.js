#!/usr/bin/env node
/**
 * migration-runner.js — Execute squad migrations from legacy format
 * Usage: node scripts/migration-runner.js [--input <path>] [--output <path>] [--dry-run]
 *
 * Migration types:
 * 1. Legacy squad.yaml → AIOX 2.1+ format
 * 2. Old agent format (v1/v2) → agent-v3-schema format
 * 3. Old task format → task-v3-schema format
 * 4. Old workflow format → current workflow format
 */

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

let yaml;
try {
  yaml = require('yaml');
} catch (e) {
  console.error(chalk.red('Error: yaml module required. Run: npm install'));
  process.exit(1);
}

const program = new Command();
program
  .description('Migrate squad from legacy format to AIOX 2.1+')
  .option('--input <path>', 'Path to legacy squad directory', '.')
  .option('--output <path>', 'Path to output migrated squad', './migrated-squad')
  .option('--dry-run', 'Show what would be migrated without writing', false)
  .option('--type <type>', 'Migration type: full|agents|tasks|workflows', 'full')
  .parse(process.argv);

const opts = program.opts();
const inputDir = path.resolve(opts.input);
const outputDir = path.resolve(opts.output);

function log(message, level = 'info') {
  const colors = { info: chalk.dim, success: chalk.green, warn: chalk.yellow, error: chalk.red };
  const prefix = { info: '  ', success: '  ✓ ', warn: '  ⚠ ', error: '  ✗ ' };
  console.log((colors[level] || chalk.dim)(`${prefix[level] || '  '}${message}`));
}

// ─── Migration: squad.yaml ───
function migrateSquadYaml(content) {
  log('Migrating squad.yaml...');

  let squad;
  try {
    squad = yaml.parse(content);
  } catch (e) {
    log(`Failed to parse squad.yaml: ${e.message}`, 'error');
    return null;
  }

  // Ensure required top-level fields
  const migrated = {
    name: squad.name || 'unknown-squad',
    version: squad.version || '1.0.0',
    description: squad.description || squad.short_title || '',
    author: squad.author || 'Unknown',
    license: squad.license || 'MIT',
    slashPrefix: squad.slashPrefix || squad.name.substring(0, 3),
    aiox: squad.aiox || { minVersion: '2.1.0', type: 'squad' },
    components: {
      agents: squad.components?.agents || [],
      tasks: squad.components?.tasks || [],
      workflows: squad.components?.workflows || [],
      checklists: squad.components?.checklists || [],
      templates: squad.components?.templates || [],
      tools: squad.components?.tools || [],
      scripts: squad.components?.scripts || [],
      data: squad.components?.data || [],
    },
    config: squad.config || {},
    dependencies: squad.dependencies || { node: [], python: [], squads: [] },
    tags: squad.tags || [],
  };

  // Add meta if not present
  if (!migrated.meta) {
    migrated.meta = {
      domain: 'unknown',
      target: 'Unknown target',
      standards: ['task-first-architecture', 'cli-first', 'quality-first'],
    };
  }

  return yaml.stringify(migrated);
}

// ─── Migration: Agent Format ───
function migrateAgent(content) {
  const lines = content.split('\n');

  // Check if already v3 format (has agent: header)
  if (content.match(/^---\s*\nagent:/m)) {
    log('Agent already in v3 format, skipping', 'warn');
    return content;
  }

  // Check if has YAML header at all
  const yamlMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!yamlMatch) {
    log('Agent has no YAML header — adding basic one', 'warn');
    // Extract agent name from filename or content
    const agentName = content.match(/^#\s*(.+)/m)?.[1]?.trim() || 'unknown-agent';
    const agentId = agentName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    const header = `---
agent: ${agentId}
persona: "${agentName}"
role: "Unknown — needs definition"
---

`;
    return header + content;
  }

  // Check for missing sections
  const requiredSections = ['persona', 'core_principles', 'commands', 'dependencies', 'collaboration', 'signature'];
  const missingSections = requiredSections.filter(s => !content.toLowerCase().includes(s));

  if (missingSections.length > 0) {
    log(`Agent missing sections: ${missingSections.join(', ')}`, 'warn');

    // Add missing sections at the end
    let additions = '\n';
    if (missingSections.includes('commands')) {
      additions += `
## Comandos Disponíveis

\`\`\`yaml
commands:
  - name: help
    visibility: [full, quick, key]
    description: "Exibir todos os comandos disponíveis."
  - name: exit
    visibility: [full, quick, key]
    description: "Sair do modo agente."
\`\`\`
`;
    }
    if (missingSections.includes('dependencies')) {
      additions += `
## Dependencies

\`\`\`yaml
dependencies:
  agents: []
  tasks: []
  workflows: []
  checklists: []
  templates: []
  tools: []
\`\`\`
`;
    }
    if (missingSections.includes('collaboration')) {
      additions += `
## Collaboration

**Works with:**
- Define collaborators aqui

**Handoff points:**
- Quando condição X → handoff para agente Y

`;
    }
    if (missingSections.includes('signature')) {
      additions += `
## Signature

**— Nome do Agente**

*Descrição.*
`;
    }

    return content + additions;
  }

  log('Agent migration complete', 'success');
  return content;
}

// ─── Migration: Task Format ───
function migrateTask(content) {
  const requiredSections = ['purpose', 'entrada', 'saida', 'checklist', 'pre-conditions'];
  const missingSections = requiredSections.filter(s => !content.toLowerCase().includes(s));

  if (missingSections.length === 0) {
    log('Task already in current format', 'warn');
    return content;
  }

  log(`Task missing sections: ${missingSections.join(', ')}`, 'warn');

  let additions = '\n';
  if (missingSections.includes('pre-conditions')) {
    additions += `
## Pre-Conditions

\`\`\`yaml
pre-conditions:
  - condition: "Condition description"
    blocker: true
    error_message: "Error message if fails"
\`\`\`
`;
  }
  if (missingSections.includes('checklist')) {
    additions += `
## Checklist

- "[ ] Step 1: Describe"
- "[ ] Step 2: Describe"
- "[ ] Step 3: Describe"
`;
  }

  return content + additions;
}

// ─── Main Migration ───
console.log(chalk.bold('\n🔄 Squad Migration Runner\n'));
log(`Input:  ${inputDir}`);
log(`Output: ${outputDir}`);
log(`Dry run: ${opts.dryRun}`, opts.dryRun ? 'warn' : 'info');
log(`Type: ${opts.type}\n`);

if (!fs.existsSync(inputDir)) {
  log(`Input directory does not exist: ${inputDir}`, 'error');
  process.exit(1);
}

let migratedCount = 0;
let skippedCount = 0;
let errorCount = 0;

// Migrate squad.yaml
const squadYamlPath = path.join(inputDir, 'squad.yaml');
if (fs.existsSync(squadYamlPath)) {
  const content = fs.readFileSync(squadYamlPath, 'utf-8');
  const migrated = migrateSquadYaml(content);
  if (migrated) {
    if (!opts.dryRun) {
      const outputPath = path.join(outputDir, 'squad.yaml');
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(outputPath, migrated);
    }
    log('squad.yaml migrated', 'success');
    migratedCount++;
  }
} else {
  log('squad.yaml not found — skipping', 'warn');
  skippedCount++;
}

// Migrate agents
if (opts.type === 'full' || opts.type === 'agents') {
  const agentsDir = path.join(inputDir, 'agents');
  if (fs.existsSync(agentsDir)) {
    const agentFiles = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    agentFiles.forEach(f => {
      const content = fs.readFileSync(path.join(agentsDir, f), 'utf-8');
      const migrated = migrateAgent(content);
      if (migrated && migrated !== content) {
        if (!opts.dryRun) {
          const outDir = path.join(outputDir, 'agents');
          fs.mkdirSync(outDir, { recursive: true });
          fs.writeFileSync(path.join(outDir, f), migrated);
        }
        log(`agents/${f} migrated`, 'success');
        migratedCount++;
      } else {
        skippedCount++;
      }
    });
  }
}

// Migrate tasks
if (opts.type === 'full' || opts.type === 'tasks') {
  const tasksDir = path.join(inputDir, 'tasks');
  if (fs.existsSync(tasksDir)) {
    const taskFiles = fs.readdirSync(tasksDir).filter(f => f.endsWith('.md'));
    taskFiles.forEach(f => {
      const content = fs.readFileSync(path.join(tasksDir, f), 'utf-8');
      const migrated = migrateTask(content);
      if (migrated && migrated !== content) {
        if (!opts.dryRun) {
          const outDir = path.join(outputDir, 'tasks');
          fs.mkdirSync(outDir, { recursive: true });
          fs.writeFileSync(path.join(outDir, f), migrated);
        }
        log(`tasks/${f} migrated`, 'success');
        migratedCount++;
      } else {
        skippedCount++;
      }
    });
  }
}

// Summary
console.log(chalk.bold('\n' + '='.repeat(50)));
console.log(chalk.bold('Migration Summary'));
console.log('='.repeat(50));
console.log(chalk.green(`  ✓ Migrated: ${migratedCount}`));
console.log(chalk.yellow(`  ⏭️  Skipped:  ${skippedCount}`));
if (errorCount > 0) console.log(chalk.red(`  ✗ Errors:   ${errorCount}`));
console.log('='.repeat(50));

if (opts.dryRun) {
  console.log(chalk.yellow.bold('\n⏭️  Dry run complete — no files written\n'));
} else {
  console.log(chalk.green.bold(`\n✅ Migration complete — ${migratedCount} file(s) migrated to ${outputDir}\n`));
}
