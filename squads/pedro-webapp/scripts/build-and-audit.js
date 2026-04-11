#!/usr/bin/env node
/**
 * Build & Audit — Pedro WebApp Squad
 * Orchestrates the full webapp build pipeline with quality gates.
 * Usage: node scripts/build-and-audit.js [--stage stage] [--output report.md]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const STAGES = [
  'lint',
  'typecheck',
  'test',
  'build',
  'lighthouse',
  'security',
  'bundle',
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

function runStage(stage, projectDir = '.') {
  const commands = {
    lint: 'npx eslint . --max-warnings 0',
    typecheck: 'npx tsc --noEmit',
    test: 'npx vitest run --coverage',
    build: 'npx next build',
    lighthouse: 'npx lighthouse http://localhost:3000 --output=json --output-path=lighthouse-report.json --quiet',
    security: 'npm audit --production --json',
    bundle: 'npx webpack-bundle-analyzer --mode static stats.json',
    deploy: 'npx vercel --prod --yes'
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
      cwd: projectDir,
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

function checkProjectStructure(projectDir = '.') {
  log('\n[STRUCTURE] Checking project structure...', 'cyan');

  const requiredDirs = ['src', 'src/app', 'src/components', 'src/lib', 'tests', 'public'];
  const requiredFiles = ['package.json', 'tsconfig.json', '.env.example', 'README.md', 'next.config.js'];

  let allPresent = true;

  for (const dir of requiredDirs) {
    if (!fs.existsSync(path.join(projectDir, dir))) {
      log(`  [WARN] Missing directory: ${dir}`, 'yellow');
      allPresent = false;
    }
  }

  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(projectDir, file))) {
      log(`  [WARN] Missing file: ${file}`, 'yellow');
      allPresent = false;
    }
  }

  // Check TypeScript strict mode
  try {
    const tsConfig = JSON.parse(fs.readFileSync(path.join(projectDir, 'tsconfig.json'), 'utf-8'));
    const strict = tsConfig.compilerOptions?.strict;
    if (strict) {
      log('  [PASS] TypeScript strict mode enabled', 'green');
    } else {
      log('  [WARN] TypeScript strict mode not enabled', 'yellow');
      allPresent = false;
    }
  } catch {
    log('  [WARN] Could not parse tsconfig.json', 'yellow');
  }

  if (allPresent) {
    log('  [PASS] Project structure validated', 'green');
  }
  return allPresent;
}

function analyzeLighthouseReport(projectDir = '.') {
  const reportPath = path.join(projectDir, 'lighthouse-report.json');
  if (!fs.existsSync(reportPath)) return null;

  const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  const categories = report.categories || {};

  const scores = {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    'best-practices': Math.round((categories['best-practices']?.score || 0) * 100),
    seo: Math.round((categories.seo?.score || 0) * 100)
  };

  return scores;
}

function generateReport(results, projectDir = '.') {
  const passed = results.filter(r => r.status === 'pass').length;
  const failed = results.filter(r => r.status === 'fail').length;

  const lighthouseScores = analyzeLighthouseReport(projectDir);

  const report = {
    squad: 'pedro-webapp',
    tool: 'build-and-audit',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    summary: {
      total: results.length,
      passed,
      failed,
      successRate: `${((passed / results.length) * 100).toFixed(0)}%`
    },
    results: results.map(r => ({
      stage: r.stage,
      status: r.status,
      ...(r.error ? { error: r.error } : {})
    })),
    lighthouse: lighthouseScores
  };

  const reportPath = path.join(projectDir, 'docs', 'BUILD-REPORT.md');
  const outputDir = path.dirname(reportPath);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const markdown = `# Build & Audit Report

Generated: ${report.timestamp}

## Summary

| Metric | Value |
|--------|-------|
| Total Stages | ${report.summary.total} |
| Passed | ${report.summary.passed} |
| Failed | ${report.summary.failed} |
| Success Rate | ${report.summary.successRate} |

${lighthouseScores ? `
## Lighthouse Scores

| Category | Score | Target |
|----------|-------|--------|
| Performance | ${lighthouseScores.performance} | >= 95 |
| Accessibility | ${lighthouseScores.accessibility} | >= 95 |
| Best Practices | ${lighthouseScores['best-practices']} | >= 100 |
| SEO | ${lighthouseScores.seo} | >= 100 |
` : ''}

## Results

${results.map(r => `- **${r.stage}**: ${r.status === 'pass' ? 'PASS' : 'FAIL'}`).join('\n')}

## Status: ${failed === 0 ? 'ALL GATES PASSED' : 'GATES FAILED'}

${failed > 0 ? `Failed stages need to be resolved before deployment.\n` : 'WebApp is ready for deployment.'}

---

*Generated by Pedro WebApp Squad — Build & Audit v1.0*
`;

  fs.writeFileSync(reportPath, markdown);
  log(`\n  Report saved to ${reportPath}`, 'cyan');

  return report;
}

async function main() {
  const args = process.argv.slice(2);
  const stageFlag = args.indexOf('--stage');
  const targetStage = stageFlag !== -1 ? args[stageFlag + 1] : null;
  const outputFlag = args.indexOf('--output');
  const outputFile = outputFlag !== -1 ? args[outputFlag + 1] : null;

  log('========================================', 'bold');
  log('  Pedro WebApp — Build & Audit', 'bold');
  log('========================================', 'bold');

  const projectDir = '.';
  checkProjectStructure(projectDir);

  const stagesToRun = targetStage ? [targetStage] : STAGES;
  const results = [];

  for (const stage of stagesToRun) {
    const result = runStage(stage, projectDir);
    results.push(result);

    if (result.status === 'fail' && !targetStage) {
      log(`\n  Pipeline halted at ${stage}. Fix issues and re-run.`, 'red');
      generateReport(results, projectDir);
      process.exit(1);
    }
  }

  const report = generateReport(results, projectDir);

  if (report.summary.failed === 0) {
    log('\n  All quality gates passed!', 'green');
    log('  WebApp is ready for deployment.', 'green');
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
