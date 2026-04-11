#!/usr/bin/env node
/**
 * Build & Audit — Pedro Sistema Agente Squad
 * Orchestrates the full system build pipeline with quality gates.
 * Usage: node scripts/build-and-audit.js [--stage stage] [--agent agent]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const STAGES = [
  'lint',
  'typecheck',
  'test',
  'build',
  'audit',
  'deploy'
];

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function runStage(stage) {
  const commands = {
    lint: 'npm run lint',
    typecheck: 'npm run typecheck',
    test: 'npm test',
    build: 'npm run build',
    audit: 'npm audit --production',
    deploy: 'npm run deploy'
  };

  const cmd = commands[stage];
  if (!cmd) {
    log(`Unknown stage: ${stage}`, 'red');
    process.exit(1);
  }

  log(`\n${COLORS.bold}[${stage.toUpperCase()}]${COLORS.reset} Running: ${cmd}`, 'cyan');

  try {
    const output = execSync(cmd, {
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, CI: 'true' }
    });
    log(`  [PASS] ${stage} completed successfully`, 'green');
    return { stage, status: 'pass', output };
  } catch (error) {
    log(`  [FAIL] ${stage} failed`, 'red');
    if (error.stdout) console.log(error.stdout);
    if (error.stderr) console.error(error.stderr);
    return { stage, status: 'fail', error: error.message };
  }
}

function checkProjectStructure() {
  log('\n[STRUCTURE] Checking project structure...', 'cyan');

  const requiredDirs = [
    'src',
    'src/app',
    'src/components',
    'src/lib',
    'tests',
    'docs'
  ];

  const requiredFiles = [
    'package.json',
    'tsconfig.json',
    '.env.example',
    'README.md'
  ];

  let allPresent = true;

  for (const dir of requiredDirs) {
    if (!fs.existsSync(dir)) {
      log(`  [WARN] Missing directory: ${dir}`, 'yellow');
      allPresent = false;
    }
  }

  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      log(`  [WARN] Missing file: ${file}`, 'yellow');
      allPresent = false;
    }
  }

  if (allPresent) {
    log('  [PASS] Project structure validated', 'green');
  }
  return allPresent;
}

function generateReport(results) {
  const passed = results.filter(r => r.status === 'pass').length;
  const failed = results.filter(r => r.status === 'fail').length;

  const report = {
    squad: 'pedro-sistema-agente',
    tool: 'build-and-audit',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    summary: { total: results.length, passed, failed, successRate: `${((passed / results.length) * 100).toFixed(0)}%` },
    results: results.map(r => ({
      stage: r.stage,
      status: r.status,
      ...(r.error ? { error: r.error } : {})
    }))
  };

  const reportPath = 'docs/BUILD-REPORT.md';
  const markdown = `# Build & Audit Report

Generated: ${report.timestamp}

## Summary

| Metric | Value |
|--------|-------|
| Total Stages | ${report.summary.total} |
| Passed | ${report.summary.passed} |
| Failed | ${report.summary.failed} |
| Success Rate | ${report.summary.successRate} |

## Results

${results.map(r => `- **${r.stage}**: ${r.status === 'pass' ? 'PASS' : 'FAIL'}`).join('\n')}

## Status: ${failed === 0 ? 'ALL GATES PASSED' : 'GATES FAILED'}

${failed > 0 ? `Failed stages need to be resolved before deployment.\n` : 'System is ready for deployment.'}
`;

  fs.writeFileSync(reportPath, markdown);
  log(`\n  Report saved to ${reportPath}`, 'cyan');

  return report;
}

async function main() {
  const args = process.argv.slice(2);
  const stageFlag = args.indexOf('--stage');
  const targetStage = stageFlag !== -1 ? args[stageFlag + 1] : null;

  log('========================================', 'bold');
  log('  Pedro Sistema Agente — Build & Audit', 'bold');
  log('========================================', 'bold');

  checkProjectStructure();

  const stagesToRun = targetStage ? [targetStage] : STAGES;
  const results = [];

  for (const stage of stagesToRun) {
    const result = runStage(stage);
    results.push(result);

    if (result.status === 'fail' && !targetStage) {
      log(`\n  Pipeline halted at ${stage}. Fix issues and re-run.`, 'red');
      generateReport(results);
      process.exit(1);
    }
  }

  const report = generateReport(results);

  if (report.summary.failed === 0) {
    log('\n  All quality gates passed!', 'green');
    log('  System is ready for deployment.', 'green');
  } else {
    log(`\n  ${report.summary.failed} gate(s) failed. Review and retry.`, 'red');
    process.exit(1);
  }
}

main().catch((err) => {
  log(`\n  Unexpected error: ${err.message}`, 'red');
  process.exit(1);
});

module.exports = { runStage, checkProjectStructure, generateReport };
