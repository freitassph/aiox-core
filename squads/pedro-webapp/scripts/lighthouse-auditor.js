#!/usr/bin/env node
/**
 * Lighthouse Auditor — Pedro WebApp Squad
 * Runs comprehensive Lighthouse audits and enforces quality thresholds.
 * Usage: node scripts/lighthouse-auditor.js [--url url] [--output report.md] [--threshold 95]
 */

const { execSync } = require('child_process');
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

// Quality thresholds for pedro-webapp squad
const QUALITY_THRESHOLDS = {
  performance: 95,
  accessibility: 95,
  'best-practices': 100,
  seo: 100,
  pwa: 80
};

// Core Web Vitals thresholds
const CWV_THRESHOLDS = {
  lcp: { good: 2500, needsImprovement: 4000 },    // ms
  fid: { good: 100, needsImprovement: 300 },       // ms
  cls: { good: 0.1, needsImprovement: 0.25 },      // score
  inp: { good: 200, needsImprovement: 500 },       // ms
  ttfb: { good: 800, needsImprovement: 1800 }      // ms
};

// Pages to audit
const DEFAULT_PAGES = [
  { path: '/', name: 'Homepage', critical: true },
  { path: '/pricing', name: 'Pricing Page', critical: true },
  { path: '/app', name: 'App Dashboard', critical: true },
  { path: '/about', name: 'About Page', critical: false },
  { path: '/blog', name: 'Blog Listing', critical: false },
];

function runLighthouse(url, outputDir) {
  const outputFile = path.join(outputDir, `lighthouse-${Date.now()}.json`);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const cmd = `npx lighthouse ${url} --output=json --output-path=${outputFile} --quiet --chrome-flags="--headless"`;

  try {
    execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'], timeout: 120000 });
    return JSON.parse(fs.readFileSync(outputFile, 'utf-8'));
  } catch (error) {
    log(`  [ERROR] Lighthouse failed for ${url}`, 'red');
    if (error.stderr) console.error(error.stderr);
    return null;
  }
}

function analyzeReport(report) {
  if (!report) return null;

  const categories = report.categories || {};
  const audits = report.audits || {};

  const scores = {};
  for (const [key, category] of Object.entries(categories)) {
    scores[key] = Math.round((category.score || 0) * 100);
  }

  // Core Web Vitals
  const cwv = {
    lcp: audits['largest-contentful-paint']?.numericValue || 0,
    fid: audits['max-potential-fid']?.numericValue || 0,
    cls: audits['cumulative-layout-shift']?.numericValue || 0,
    ttfb: audits['server-response-time']?.numericValue || 0
  };

  // Opportunities (things that could improve performance)
  const opportunities = (audits['opportunities']?.details?.items || [])
    .map(item => ({
      title: item.label || 'Optimization opportunity',
      savings: item.overallSavingsMs || item.overallSavingsBytes || 0,
      unit: item.overallSavingsMs ? 'ms' : 'bytes'
    }))
    .filter(o => o.savings > 0)
    .sort((a, b) => b.savings - a.savings)
    .slice(0, 5);

  // Diagnostics (informational)
  const diagnostics = (audits['diagnostics']?.details?.items || [])
    .filter(item => item.score !== null && item.score < 1)
    .slice(0, 10);

  return { scores, cwv, opportunities, diagnostics };
}

function checkThresholds(scores, thresholds = QUALITY_THRESHOLDS) {
  const results = [];
  for (const [category, threshold] of Object.entries(thresholds)) {
    const score = scores[category] ?? 0;
    const passed = score >= threshold;
    results.push({
      category,
      score,
      threshold,
      passed,
      delta: score - threshold
    });
  }
  return results;
}

function checkCWV(cwv, thresholds = CWV_THRESHOLDS) {
  const results = [];
  for (const [metric, value] of Object.entries(cwv)) {
    const t = thresholds[metric];
    if (!t) continue;

    let rating;
    if (value <= t.good) rating = 'GOOD';
    else if (value <= t.needsImprovement) rating = 'NEEDS IMPROVEMENT';
    else rating = 'POOR';

    results.push({ metric, value, good: t.good, needsImprovement: t.needsImprovement, rating });
  }
  return results;
}

function generateReport(allResults, baseUrl) {
  let markdown = `# Lighthouse Audit Report

**Generated:** ${new Date().toISOString()}
**Base URL:** ${baseUrl}
**Thresholds:** Performance >= ${QUALITY_THRESHOLDS.performance}, Accessibility >= ${QUALITY_THRESHOLDS.accessibility}, Best Practices >= ${QUALITY_THRESHOLDS['best-practices']}, SEO >= ${QUALITY_THRESHOLDS.seo}

---

## Summary

| Page | Performance | Accessibility | Best Practices | SEO | Status |
|------|------------|---------------|----------------|-----|--------|
`;

  let allPassed = true;

  allResults.forEach(({ page, analysis }) => {
    if (!analysis) {
      markdown += `| ${page.name} | N/A | N/A | N/A | N/A | FAILED |\n`;
      allPassed = false;
      return;
    }

    const thresholdResults = checkThresholds(analysis.scores);
    const passed = thresholdResults.every(r => r.passed);
    if (!passed) allPassed = false;

    const statusIcon = passed ? 'PASS' : 'FAIL';
    markdown += `| ${page.name} | ${analysis.scores.performance} | ${analysis.scores.accessibility} | ${analysis.scores['best-practices']} | ${analysis.scores.seo} | ${statusIcon} |\n`;
  });

  // Detailed results per page
  allResults.forEach(({ page, analysis }) => {
    if (!analysis) return;

    markdown += `\n---\n\n### ${page.name} (${page.path})\n\n`;

    // CWV
    const cwvResults = checkCWV(analysis.cwv);
    markdown += `#### Core Web Vitals\n\n| Metric | Value | Good | Needs Improvement | Rating |\n|--------|-------|------|-------------------|--------|\n`;
    cwvResults.forEach(cwv => {
      const valueDisplay = cwv.metric === 'cls' ? cwv.value.toFixed(3) : `${Math.round(cwv.value)}ms`;
      const ratingIcon = cwv.rating === 'GOOD' ? '🟢' : cwv.rating === 'NEEDS IMPROVEMENT' ? '🟡' : '🔴';
      markdown += `| ${cwv.metric.toUpperCase()} | ${valueDisplay} | ${cwv.good}${cwv.metric === 'cls' ? '' : 'ms'} | ${cwv.needsImprovement}${cwv.metric === 'cls' ? '' : 'ms'} | ${ratingIcon} ${cwv.rating} |\n`;
    });

    // Opportunities
    if (analysis.opportunities.length > 0) {
      markdown += `\n#### Top Optimization Opportunities\n\n`;
      analysis.opportunities.forEach(opp => {
        markdown += `- **${opp.title}**: Save ${opp.unit === 'ms' ? `${opp.savings}ms` : `${(opp.savings / 1024).toFixed(0)}KB`}\n`;
      });
    }
  });

  markdown += `\n---\n\n## Recommendation\n\n${allPassed ? 'All pages pass quality thresholds. Ship it!' : 'Some pages need attention before deployment. Fix failures and re-run.'}\n\n---\n\n*Generated by Pedro WebApp Squad — Lighthouse Auditor v1.0*\n`;

  return markdown;
}

async function main() {
  const args = process.argv.slice(2);
  const urlFlag = args.indexOf('--url');
  const outputFlag = args.indexOf('--output');
  const pagesFlag = args.indexOf('--pages');

  const baseUrl = urlFlag !== -1 ? args[urlFlag + 1] : 'http://localhost:3000';
  const outputFile = outputFlag !== -1 ? args[outputFlag + 1] : 'docs/lighthouse-report.md';
  const pagesFile = pagesFlag !== -1 ? args[pagesFlag + 1] : null;

  log('========================================', 'bold');
  log('  Pedro WebApp — Lighthouse Auditor', 'bold');
  log('========================================', 'bold');

  const pages = pagesFile && fs.existsSync(pagesFile)
    ? JSON.parse(fs.readFileSync(pagesFile, 'utf-8'))
    : DEFAULT_PAGES;

  const outputDir = path.dirname(outputFile);
  const lighthouseOutputDir = path.join(outputDir, 'lighthouse-results');

  log(`\n  Auditing ${pages.length} page(s) at ${baseUrl}\n`, 'cyan');

  const allResults = [];

  for (const page of pages) {
    const url = `${baseUrl}${page.path}`;
    log(`  Auditing: ${page.name} (${url})`, page.critical ? 'bold' : 'reset');

    const rawReport = runLighthouse(url, lighthouseOutputDir);
    const analysis = analyzeReport(rawReport);

    if (analysis) {
      const thresholdResults = checkThresholds(analysis.scores);
      const passed = thresholdResults.every(r => r.passed);

      log(`    Performance: ${analysis.scores.performance} (target: ${QUALITY_THRESHOLDS.performance})`,
        analysis.scores.performance >= QUALITY_THRESHOLDS.performance ? 'green' : 'red');
      log(`    Accessibility: ${analysis.scores.accessibility} (target: ${QUALITY_THRESHOLDS.accessibility})`,
        analysis.scores.accessibility >= QUALITY_THRESHOLDS.accessibility ? 'green' : 'red');
      log(`    SEO: ${analysis.scores.seo} (target: ${QUALITY_THRESHOLDS.seo})`,
        analysis.scores.seo >= QUALITY_THRESHOLDS.seo ? 'green' : 'red');

      if (!passed && page.critical) {
        log(`    [FAIL] ${page.name} does not meet quality thresholds`, 'red');
      } else {
        log(`    [PASS] ${page.name} meets quality thresholds`, 'green');
      }
    } else {
      log(`    [FAIL] Could not analyze ${page.name}`, 'red');
    }

    allResults.push({ page, analysis });
  }

  const report = generateReport(allResults, baseUrl);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, report);
  log(`\n  Report saved to ${outputFile}`, 'cyan');

  const failed = allResults.filter(r => !r.analysis || !checkThresholds(r.analysis.scores).every(x => x.passed));
  if (failed.length > 0) {
    log(`\n  ${failed.length} page(s) need attention before deployment.`, 'red');
    process.exit(1);
  } else {
    log('\n  All pages pass quality thresholds!', 'green');
  }
}

main().catch((err) => {
  log(`\n  Unexpected error: ${err.message}`, 'red');
  process.exit(1);
});

module.exports = { runLighthouse, analyzeReport, checkThresholds, checkCWV, generateReport, QUALITY_THRESHOLDS, CWV_THRESHOLDS };
