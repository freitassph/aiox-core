#!/usr/bin/env node
/**
 * quality-gate-runner.js — Execute all 7 quality gates and produce score
 * Usage: node scripts/quality-gate-runner.js [--squad-path .]
 *
 * Quality Gates:
 * 1. Schema Compliance — All components follow their schemas
 * 2. Agent Completeness — All agents ≥400 lines with all sections
 * 3. Task Coverage — All tasks have required sections
 * 4. Workflow Integrity — Workflows have pre/post conditions, error handling
 * 5. Documentation Completeness — README + component docs
 * 6. Cross-Reference Validation — No orphan references
 * 7. Constitution Alignment — Alignment with AIOX principles
 */

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

let yaml;
try {
  yaml = require('yaml');
} catch (e) {
  yaml = null;
}

const program = new Command();
program
  .description('Execute all 7 quality gates and produce overall score')
  .option('--squad-path <path>', 'Path to squad directory', '.')
  .parse(process.argv);

const opts = program.opts();
const squadDir = path.resolve(opts.squadPath);

const gateResults = [];

function check(condition, message) {
  return { passed: condition, message };
}

function loadSquadYaml() {
  const raw = fs.readFileSync(path.join(squadDir, 'squad.yaml'), 'utf-8');
  if (!yaml) return null;
  return yaml.parse(raw);
}

function fileExists(relPath) {
  return fs.existsSync(path.join(squadDir, relPath));
}

function readFile(relPath) {
  const fullPath = path.join(squadDir, relPath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, 'utf-8');
}

function extractYamlHeader(content) {
  if (!content) return null;
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match || !yaml) return null;
  try { return yaml.parse(match[1]); } catch (e) { return null; }
}

function countLines(relPath) {
  const content = readFile(relPath);
  if (!content) return 0;
  return content.split('\n').length;
}

// ─── GATE 1: Schema Compliance ───
function gate1SchemaCompliance() {
  console.log(chalk.bold('\n🔷 Gate 1: Schema Compliance'));
  const checks = [];
  const squadYaml = loadSquadYaml();

  checks.push(check(!!squadYaml, 'squad.yaml parses'));
  if (squadYaml) {
    checks.push(check(!!squadYaml.name, 'Has name field'));
    checks.push(check(!!squadYaml.version, 'Has version field'));
    checks.push(check(!!squadYaml.description, 'Has description field'));
    checks.push(check(!!squadYaml.author, 'Has author field'));
    checks.push(check(!!squadYaml.components, 'Has components section'));
    checks.push(check(!!squadYaml.components?.agents?.length, 'Has agents listed'));
    checks.push(check(!!squadYaml.components?.tasks?.length, 'Has tasks listed'));
    checks.push(check(!!squadYaml.components?.workflows?.length, 'Has workflows listed'));
    checks.push(check(!!squadYaml.components?.checklists?.length, 'Has checklists listed'));
    checks.push(check(!!squadYaml.components?.templates?.length, 'Has templates listed'));
    checks.push(check(!!squadYaml.config, 'Has config section'));
    checks.push(check(!!squadYaml.tags?.length, 'Has tags'));
  }

  const score = checks.filter(c => c.passed).length / checks.length * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Schema Compliance', score, checks };
}

// ─── GATE 2: Agent Completeness ───
function gate2AgentCompleteness() {
  console.log(chalk.bold('\n🔶 Gate 2: Agent Completeness'));
  const checks = [];
  const squadYaml = loadSquadYaml();
  const agents = squadYaml?.components?.agents || [];

  agents.forEach(agent => {
    const content = readFile(`agents/${agent}`);
    const lines = content ? content.split('\n').length : 0;
    const passes = lines >= 400;
    checks.push(check(passes, `${agent}: ${lines} lines ${passes ? '≥400 ✅' : '<400 ❌'}`));
  });

  const score = checks.filter(c => c.passed).length / Math.max(checks.length, 1) * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Agent Completeness', score, checks };
}

// ─── GATE 3: Task Coverage ───
function gate3TaskCoverage() {
  console.log(chalk.bold('\n🔵 Gate 3: Task Coverage'));
  const checks = [];
  const squadYaml = loadSquadYaml();
  const tasks = squadYaml?.components?.tasks || [];
  const requiredSections = ['purpose', 'entrada', 'saida', 'checklist', 'pre-conditions'];

  tasks.forEach(task => {
    const content = readFile(`tasks/${task}`);
    if (!content) {
      checks.push(check(false, `${task}: file missing`));
      return;
    }
    const contentLower = content.toLowerCase();
    const hasAllSections = requiredSections.every(s => contentLower.includes(s));
    checks.push(check(hasAllSections, `${task}: all required sections ${hasAllSections ? 'present ✅' : 'missing ❌'}`));
  });

  const score = checks.filter(c => c.passed).length / Math.max(checks.length, 1) * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Task Coverage', score, checks };
}

// ─── GATE 4: Workflow Integrity ───
function gate4WorkflowIntegrity() {
  console.log(chalk.bold('\n🟢 Gate 4: Workflow Integrity'));
  const checks = [];
  const squadYaml = loadSquadYaml();
  const workflows = squadYaml?.components?.workflows || [];

  workflows.forEach(wf => {
    const content = readFile(`workflows/${wf}`);
    if (!content) {
      checks.push(check(false, `${wf}: file missing`));
      return;
    }
    const contentLower = content.toLowerCase();
    checks.push(check(contentLower.includes('pre_conditions') || contentLower.includes('pre-conditions'), `${wf}: has pre_conditions`));
    checks.push(check(contentLower.includes('post_conditions') || contentLower.includes('post-conditions'), `${wf}: has post_conditions`));
    checks.push(check(contentLower.includes('steps'), `${wf}: has steps`));
    checks.push(check(contentLower.includes('error_handler') || contentLower.includes('on_failure'), `${wf}: has error handling`));
    checks.push(check(contentLower.includes('retry') || contentLower.includes('retry_on'), `${wf}: has retry logic`));
  });

  const score = checks.filter(c => c.passed).length / Math.max(checks.length, 1) * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Workflow Integrity', score, checks };
}

// ─── GATE 5: Documentation Completeness ───
function gate5Documentation() {
  console.log(chalk.bold('\n🟡 Gate 5: Documentation Completeness'));
  const checks = [];

  const readmeContent = readFile('README.md');
  checks.push(check(!!readmeContent, 'README.md exists'));
  if (readmeContent) {
    const lineCount = readmeContent.split('\n').length;
    checks.push(check(lineCount >= 100, `README.md has ${lineCount} lines (≥100 required)`));
    checks.push(check(readmeContent.includes('##'), 'README.md has section headers'));
    checks.push(check(readmeContent.includes('Overview') || readmeContent.includes('overview'), 'README.md has overview section'));
  }

  const squadYaml = loadSquadYaml();
  if (squadYaml) {
    const components = ['agents', 'tasks', 'workflows', 'checklists', 'templates'];
    components.forEach(comp => {
      const items = squadYaml.components?.[comp] || [];
      items.forEach(item => {
        const dir = comp.replace(/s$/, ''); // workflows → workflow, etc.
        const relPath = `${dir}/${item}`;
        if (fileExists(relPath)) {
          const lines = countLines(relPath);
          checks.push(check(lines >= 10, `${item} has ${lines} lines (≥10 minimum)`));
        }
      });
    });
  }

  const score = checks.filter(c => c.passed).length / Math.max(checks.length, 1) * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Documentation', score, checks };
}

// ─── GATE 6: Cross-Reference Validation ───
function gate6CrossReference() {
  console.log(chalk.bold('\n🟣 Gate 6: Cross-Reference Validation'));
  const checks = [];
  const squadYaml = loadSquadYaml();

  if (squadYaml) {
    // Check all declared components exist
    const componentDirs = { agents: 'agents', tasks: 'tasks', workflows: 'workflows', checklists: 'checklists', templates: 'templates' };
    Object.entries(componentDirs).forEach(([section, dir]) => {
      const items = squadYaml.components?.[section] || [];
      items.forEach(item => {
        checks.push(check(fileExists(`${dir}/${item}`), `${dir}/${item} declared and exists`));
      });
    });

    // Check config file references
    const configFiles = squadYaml.config || {};
    Object.entries(configFiles).forEach(([key, relPath]) => {
      if (typeof relPath === 'string') {
        checks.push(check(fileExists(relPath), `config.${key} → ${relPath} exists`));
      }
    });
  }

  const score = checks.filter(c => c.passed).length / Math.max(checks.length, 1) * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Cross-Reference', score, checks };
}

// ─── GATE 7: Constitution Alignment ───
function gate7ConstitutionAlignment() {
  console.log(chalk.bold('\n⚪ Gate 7: Constitution Alignment'));
  const checks = [];
  const readmeContent = readFile('README.md');
  const squadYaml = loadSquadYaml();

  // CLI First
  checks.push(check(
    readmeContent?.toLowerCase().includes('command') || readmeContent?.toLowerCase().includes('cli'),
    'CLI First: README mentions CLI commands'
  ));

  // Agent Authority
  if (squadYaml) {
    const agents = squadYaml.components?.agents || [];
    checks.push(check(agents.length >= 3, 'Agent Authority: Has ≥3 specialized agents'));
  }

  // Story-Driven
  checks.push(check(
    readmeContent?.includes('task') || readmeContent?.includes('workflow'),
    'Story-Driven: Has task/workflow structure'
  ));

  // No Invention
  checks.push(check(
    !!squadYaml?.dependencies || !!squadYaml?.requires,
    'No Invention: Has explicit dependencies'
  ));

  // Quality First
  checks.push(check(
    fileExists('checklists') && fs.readdirSync(path.join(squadDir, 'checklists')).length >= 1,
    'Quality First: Has quality checklists'
  ));

  // Absolute Imports
  checks.push(check(
    readmeContent?.includes('structure') || readmeContent?.includes('directory'),
    'Absolute Imports: Documents directory structure'
  ));

  const score = checks.filter(c => c.passed).length / Math.max(checks.length, 1) * 100;
  console.log(chalk.dim(`  ${checks.filter(c => c.passed).length}/${checks.length} checks passed`));
  return { name: 'Constitution Alignment', score, checks };
}

// ─── Execute All Gates ───
console.log(chalk.bold('🏛️  Quality Gate Runner'));
console.log(chalk.dim(`  Squad directory: ${squadDir}`));
console.log(chalk.dim('  Running 7 quality gates...\n'));

try {
  gateResults.push(gate1SchemaCompliance());
  gateResults.push(gate2AgentCompleteness());
  gateResults.push(gate3TaskCoverage());
  gateResults.push(gate4WorkflowIntegrity());
  gateResults.push(gate5Documentation());
  gateResults.push(gate6CrossReference());
  gateResults.push(gate7ConstitutionAlignment());
} catch (e) {
  console.error(chalk.red(`\nError running quality gates: ${e.message}`));
  process.exit(1);
}

// ─── Summary ───
console.log(chalk.bold('\n' + '='.repeat(60)));
console.log(chalk.bold('🏛️  Quality Gate Results'));
console.log('='.repeat(60));

const weights = {
  'Schema Compliance': 0.15,
  'Agent Completeness': 0.30,
  'Task Coverage': 0.15,
  'Workflow Integrity': 0.15,
  'Documentation': 0.10,
  'Cross-Reference': 0.10,
  'Constitution Alignment': 0.05
};

let overallScore = 0;

gateResults.forEach(gate => {
  const weight = weights[gate.name] || 0.1;
  const weighted = gate.score * weight;
  overallScore += weighted;

  const color = gate.score >= 95 ? chalk.green : gate.score >= 80 ? chalk.yellow : chalk.red;
  const icon = gate.score >= 95 ? '✅' : gate.score >= 80 ? '⚠️ ' : '❌';
  console.log(color(
    `  ${icon} ${gate.name.padEnd(25)} ${String(Math.round(gate.score)).padStart(3)}%  (weight: ${weight})`
  ));
});

console.log('='.repeat(60));
const overallColor = overallScore >= 95 ? chalk.green.bold : overallScore >= 80 ? chalk.yellow.bold : chalk.red.bold;
const overallIcon = overallScore >= 95 ? '✅' : overallScore >= 80 ? '⚠️ ' : '❌';
console.log(overallColor(`  ${overallIcon} OVERALL SCORE: ${Math.round(overallScore)}/100`));
console.log('='.repeat(60));

if (overallScore >= 95) {
  console.log(chalk.green.bold('\n✅ All quality gates passed! Squad is Tier S+++\n'));
  process.exit(0);
} else if (overallScore >= 80) {
  console.log(chalk.yellow.bold(`\n⚠️  Score ${overallScore}/100 — Needs improvement to reach Tier S+++\n`));
  process.exit(1);
} else {
  console.log(chalk.red.bold(`\n❌ Score ${overallScore}/100 — Far from Tier S+++ standard\n`));
  process.exit(1);
}
