#!/usr/bin/env node
/**
 * build-and-audit.js — Full build + audit pipeline
 * Usage: node scripts/build-and-audit.js [--squad-path .]
 *
 * Runs:
 * 1. Health check (quick)
 * 2. Squad validation (schema)
 * 3. Agent line count (quality)
 * 4. Quality gate runner (7 gates)
 * 5. Workflow orchestration check
 * 6. Final score and report
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();
program
  .description('Full build and audit pipeline')
  .option('--squad-path <path>', 'Path to squad directory', '.')
  .option('--verbose', 'Show verbose output', false)
  .parse(process.argv);

const opts = program.opts();
const squadDir = path.resolve(opts.squadPath);
const scriptsDir = path.join(squadDir, 'scripts');

const results = {};
let totalScore = 0;
let stagesRun = 0;

function runStage(name, scriptFile, weight) {
  console.log(chalk.bold(`\n${'─'.repeat(60)}`));
  console.log(chalk.bold(`🔨 Stage: ${name}`));
  console.log(chalk.bold('─'.repeat(60)));

  const scriptPath = path.join(scriptsDir, scriptFile);
  if (!fs.existsSync(scriptPath)) {
    console.log(chalk.yellow(`  ⏭️  Skipping — ${scriptFile} not found`));
    results[name] = { status: 'skipped', score: null };
    return;
  }

  try {
    const output = execSync(`node "${scriptPath}" --squad-path "${squadDir}"`, {
      encoding: 'utf-8',
      stdio: opts.verbose ? 'inherit' : 'pipe'
    });

    // Try to extract score from output
    const scoreMatch = output?.match(/(\d+)\/100|SCORE:?\s*(\d+)/i);
    const score = scoreMatch ? parseInt(scoreMatch[1] || scoreMatch[2], 10) : null;

    results[name] = { status: 'passed', score, script: scriptFile };
    if (score !== null) totalScore += score * weight;
    stagesRun++;

    console.log(chalk.green(`  ✅ ${name} passed`));
  } catch (e) {
    results[name] = { status: 'failed', score: 0, script: scriptFile, error: e.message };
    if (e.stdout && opts.verbose) console.log(e.stdout);
    if (e.stderr && opts.verbose) console.error(e.stderr);
    console.log(chalk.red(`  ❌ ${name} failed`));
  }
}

console.log(chalk.bold('🏗️  Build & Audit Pipeline'));
console.log(chalk.dim(`  Squad directory: ${squadDir}`));
console.log(chalk.dim('  Stages: 5\n'));

// Run all stages
runStage('Health Check', 'health-check.js', 0.1);
runStage('Schema Validation', 'validate-squad.js', 0.2);
runStage('Agent Line Count', 'agent-line-counter.js', 0.3);
runStage('Quality Gates', 'quality-gate-runner.js', 0.3);
runStage('Workflow Check', 'check-orchestrator.js', 0.1);

// Final report
console.log(chalk.bold('\n\n' + '='.repeat(60)));
console.log(chalk.bold('📊 Final Audit Report'));
console.log('='.repeat(60));

const weights = {
  'Health Check': 0.1,
  'Schema Validation': 0.2,
  'Agent Line Count': 0.3,
  'Quality Gates': 0.3,
  'Workflow Check': 0.1
};

Object.entries(results).forEach(([name, result]) => {
  const weight = weights[name] || 0.1;
  const icon = result.status === 'passed' ? '✅' : result.status === 'skipped' ? '⏭️ ' : '❌';
  const color = result.status === 'passed' ? chalk.green : result.status === 'skipped' ? chalk.yellow : chalk.red;
  const scoreStr = result.score !== null ? `${result.score}/100` : 'N/A';
  console.log(color(`  ${icon} ${name.padEnd(25)} ${scoreStr.padStart(6)}  (weight: ${weight})`));
});

console.log('='.repeat(60));
const avgScore = stagesRun > 0 ? Math.round(totalScore) : 0;
const color = avgScore >= 95 ? chalk.green.bold : avgScore >= 80 ? chalk.yellow.bold : chalk.red.bold;
const icon = avgScore >= 95 ? '✅' : avgScore >= 80 ? '⚠️ ' : '❌';
console.log(color(`  ${icon} FINAL SCORE: ${avgScore}/100`));
console.log('='.repeat(60));

// Check for failures
const failures = Object.entries(results).filter(([, r]) => r.status === 'failed');
if (failures.length > 0) {
  console.log(chalk.bold.red('\n❌ Pipeline completed with failures:'));
  failures.forEach(([name, result]) => {
    console.log(chalk.red(`  - ${name}: ${result.error || 'unknown error'}`));
  });
  process.exit(1);
}

console.log(chalk.green.bold(`\n✅ Pipeline completed successfully! Score: ${avgScore}/100\n`));
process.exit(avgScore >= 80 ? 0 : 1);
