#!/usr/bin/env node
/**
 * Bundle Analyzer — Pedro WebApp Squad
 * Analyzes JavaScript bundle sizes, identifies bloat, and enforces size budgets.
 * Usage: node scripts/bundle-analyzer.js [--stats stats.json] [--budget budget.json] [--output report.md]
 */

const fs = require('fs');
const path = require('path');

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

// Default size budgets (in KB, gzipped)
const DEFAULT_BUDGETS = {
  totalJS: 250,
  totalCSS: 50,
  perChunk: 50,
  perVendorChunk: 100,
  criticalPath: 14,
  fontBudget: 100,
  imageBudget: 200
};

function loadStats(filePath) {
  if (!fs.existsSync(filePath)) {
    log(`\n  [WARN] No stats file at ${filePath}`, 'yellow');
    log('  Run: npx next build --profile && npx webpack-bundle-analyzer stats.json', 'yellow');
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function loadBudgets(filePath) {
  if (filePath && fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  return DEFAULT_BUDGETS;
}

function analyzeBundles(stats, budgets = DEFAULT_BUDGETS) {
  if (!stats) return generateEmptyAnalysis(budgets);

  const modules = stats.modules || [];
  const assets = stats.assets || [];

  // Group by vendor/chunk
  const chunks = {};
  let totalJS = 0;
  let totalCSS = 0;

  assets.forEach(asset => {
    const size = asset.size || 0;
    const name = asset.name || '';

    if (name.endsWith('.js')) {
      totalJS += size;
      const chunkName = name.includes('vendor') ? 'vendor' :
                        name.includes('framework') ? 'framework' :
                        name.includes('main') ? 'main' :
                        name.includes('webpack') ? 'runtime' : 'app';

      if (!chunks[chunkName]) {
        chunks[chunkName] = { name: chunkName, size: 0, files: [] };
      }
      chunks[chunkName].size += size;
      chunks[chunkName].files.push({ name, size });
    } else if (name.endsWith('.css')) {
      totalCSS += size;
    }
  });

  // Find largest modules
  const largestModules = modules
    .filter(m => m.size > 0)
    .sort((a, b) => b.size - a.size)
    .slice(0, 20)
    .map(m => ({
      name: m.name,
      size: m.size,
      sizeKB: (m.size / 1024).toFixed(1),
      gzippedKB: (m.size / 1024 / 2.5).toFixed(1)  // rough estimate
    }));

  // Identify potential bloat
  const bloat = [];
  const knownHeavyPackages = {
    'moment': { suggestion: 'Use date-fns or dayjs instead', typicalSize: 320 },
    'lodash': { suggestion: 'Use lodash-es or individual imports', typicalSize: 70 },
    'react-is': { suggestion: 'Check for duplicate React versions', typicalSize: 10 },
    'core-js': { suggestion: 'Review polyfill configuration', typicalSize: 100 },
    'rxjs': { suggestion: 'Only include if using observables', typicalSize: 140 },
    'antd': { suggestion: 'Consider importing only needed components', typicalSize: 500 },
    '@mui/material': { suggestion: 'Use @mui/icons-material selectively', typicalSize: 300 },
    'axios': { suggestion: 'Consider using native fetch', typicalSize: 15 },
  };

  largestModules.forEach(mod => {
    for (const [pkg, info] of Object.entries(knownHeavyPackages)) {
      if (mod.name.includes(pkg) && mod.size / 1024 > info.typicalSize / 10) {
        bloat.push({
          package: pkg,
          size: mod.sizeKB,
          suggestion: info.suggestion,
          impact: mod.size / 1024 > info.typicalSize ? 'HIGH' : 'MEDIUM'
        });
      }
    }
  });

  // Budget violations
  const violations = [];
  const totalJSKB = totalJS / 1024;
  const totalCSSKB = totalCSS / 1024;

  if (totalJSKB > budgets.totalJS) {
    violations.push({
      item: 'Total JavaScript',
      actual: `${totalJSKB.toFixed(0)}KB`,
      budget: `${budgets.totalJS}KB`,
      overage: `${(totalJSKB - budgets.totalJS).toFixed(0)}KB`,
      severity: totalJSKB > budgets.totalJS * 1.5 ? 'HIGH' : 'MEDIUM'
    });
  }

  if (totalCSSKB > budgets.totalCSS) {
    violations.push({
      item: 'Total CSS',
      actual: `${totalCSSKB.toFixed(0)}KB`,
      budget: `${budgets.totalCSS}KB`,
      overage: `${(totalCSSKB - budgets.totalCSS).toFixed(0)}KB`,
      severity: 'MEDIUM'
    });
  }

  Object.entries(chunks).forEach(([name, chunk]) => {
    const sizeKB = chunk.size / 1024;
    const budget = name === 'vendor' ? budgets.perVendorChunk : budgets.perChunk;
    if (sizeKB > budget) {
      violations.push({
        item: `Chunk: ${name}`,
        actual: `${sizeKB.toFixed(0)}KB`,
        budget: `${budget}KB`,
        overage: `${(sizeKB - budget).toFixed(0)}KB`,
        severity: sizeKB > budget * 1.5 ? 'HIGH' : 'MEDIUM'
      });
    }
  });

  return {
    totalJS: totalJSKB.toFixed(0),
    totalCSS: totalCSSKB.toFixed(0),
    chunks: Object.values(chunks).map(c => ({
      ...c,
      sizeKB: (c.size / 1024).toFixed(0)
    })),
    largestModules,
    bloat,
    violations,
    passedBudgets: violations.length === 0
  };
}

function generateEmptyAnalysis(budgets) {
  return {
    totalJS: 'N/A',
    totalCSS: 'N/A',
    chunks: [],
    largestModules: [],
    bloat: [],
    violations: [],
    passedBudgets: true,
    note: 'No stats file available. Run: npx next build --profile'
  };
}

function generateReport(analysis, budgets = DEFAULT_BUDGETS) {
  return `# Bundle Analysis Report

**Generated:** ${new Date().toISOString()}
**Squad:** pedro-webapp

---

## Size Summary

| Category | Size | Budget | Status |
|----------|------|--------|--------|
| Total JavaScript | ${analysis.totalJS}KB | ${budgets.totalJS}KB | ${typeof analysis.totalJS === 'string' && analysis.totalJS === 'N/A' ? 'N/A' : parseInt(analysis.totalJS) <= budgets.totalJS ? 'PASS' : 'FAIL'} |
| Total CSS | ${analysis.totalCSS}KB | ${budgets.totalCSS}KB | ${typeof analysis.totalCSS === 'string' && analysis.totalCSS === 'N/A' ? 'N/A' : parseInt(analysis.totalCSS) <= budgets.totalCSS ? 'PASS' : 'FAIL'} |

---

## Chunk Breakdown

${analysis.chunks.length > 0 ? `| Chunk | Size | Files |
|-------|------|-------|
${analysis.chunks.map(c => `| ${c.name} | ${c.sizeKB}KB | ${c.files.length} |`).join('\n')}` : 'No chunk data available.'}

---

## ${analysis.violations.length > 0 ? 'Budget Violions' : 'All Budgets Passed'}

${analysis.violations.length > 0 ? `| Item | Actual | Budget | Overage | Severity |
|------|--------|--------|---------|----------|
${analysis.violations.map(v => `| ${v.item} | ${v.actual} | ${v.budget} | ${v.overage} | ${v.severity} |`).join('\n')}` : 'All bundle sizes are within budget.'}

---

## Largest Modules (Top 10)

${analysis.largestModules.length > 0 ? `| Module | Size | Est. Gzipped |
|--------|------|-------------|
${analysis.largestModules.slice(0, 10).map(m => `| ${m.name} | ${m.sizeKB}KB | ${m.gzippedKB}KB |`).join('\n')}` : 'No module data available.'}

---

## Potential Bloat

${analysis.bloat.length > 0 ? analysis.bloat.map(b => `### [${b.impact}] ${b.package} — ${b.size}KB

**Suggestion:** ${b.suggestion}
`).join('\n') : 'No obvious bundle bloat detected.'}

---

## Optimization Recommendations

1. ${analysis.bloat.length > 0 ? `Address ${analysis.bloat.length} bloat issue(s) listed above` : 'Continue monitoring bundle size'}
2. ${analysis.violations.length > 0 ? `Fix ${analysis.violations.length} budget violation(s)` : 'All budgets passing'}
3. Use dynamic imports for route-specific code
4. Review vendor chunk splitting strategy
5. Consider using \`next/dynamic\` for heavy components
6. Audit unused dependencies with \`depcheck\`

---

## Budget Configuration

\`\`\`json
${JSON.stringify(budgets, null, 2)}
\`\`\`

---

*Generated by Pedro WebApp Squad — Bundle Analyzer v1.0*
`;
}

async function main() {
  const args = process.argv.slice(2);
  const statsFlag = args.indexOf('--stats');
  const budgetFlag = args.indexOf('--budget');
  const outputFlag = args.indexOf('--output');

  const statsFile = statsFlag !== -1 ? args[statsFlag + 1] : 'stats.json';
  const budgetFile = budgetFlag !== -1 ? args[budgetFlag + 1] : null;
  const outputFile = outputFlag !== -1 ? args[outputFlag + 1] : 'docs/bundle-report.md';

  log('========================================', 'bold');
  log('  Pedro WebApp — Bundle Analyzer', 'bold');
  log('========================================', 'bold');

  const stats = loadStats(statsFile);
  const budgets = loadBudgets(budgetFile);
  const analysis = analyzeBundles(stats, budgets);

  log(`\n  Total JavaScript: ${analysis.totalJS}KB (budget: ${budgets.totalJS}KB)`,
    typeof analysis.totalJS === 'string' && analysis.totalJS === 'N/A' ? 'yellow' :
    parseInt(analysis.totalJS) <= budgets.totalJS ? 'green' : 'red');
  log(`  Total CSS: ${analysis.totalCSS}KB (budget: ${budgets.totalCSS}KB)`,
    typeof analysis.totalCSS === 'string' && analysis.totalCSS === 'N/A' ? 'yellow' :
    parseInt(analysis.totalCSS) <= budgets.totalCSS ? 'green' : 'red');

  if (analysis.violations.length > 0) {
    log(`\n  ${analysis.violations.length} budget violation(s):`, 'red');
    analysis.violations.forEach(v => {
      log(`    [${v.severity}] ${v.item}: ${v.actual} / ${v.budget} (+${v.overage})`, v.severity === 'HIGH' ? 'red' : 'yellow');
    });
  } else {
    log('\n  All bundle budgets passed', 'green');
  }

  if (analysis.bloat.length > 0) {
    log(`  ${analysis.bloat.length} potential bloat issue(s):`, 'yellow');
    analysis.bloat.forEach(b => log(`    [${b.impact}] ${b.package}: ${b.size}KB`, 'yellow'));
  }

  const report = generateReport(analysis, budgets);
  const outputDir = path.dirname(outputFile);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, report);
  log(`\n  Report saved to ${outputFile}`, 'cyan');
}

main().catch((err) => {
  log(`\n  Error: ${err.message}`, 'red');
  process.exit(1);
});

module.exports = { analyzeBundles, generateReport, DEFAULT_BUDGETS };
