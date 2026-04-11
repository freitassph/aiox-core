#!/usr/bin/env node
/**
 * agent-line-counter.js — Count lines in all agent files, detect fillers
 * Usage: node scripts/agent-line-counter.js [--squad-path .] [--min-lines 400]
 *
 * Checks:
 * - Each agent meets minimum line count
 * - Content density (no excessive whitespace/comments)
 * - All required sections present
 */

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const chalk = require('chalk');

const program = new Command();
program
  .description('Count lines in all agent files and detect filler content')
  .option('--squad-path <path>', 'Path to squad directory', '.')
  .option('--min-lines <n>', 'Minimum line count per agent', '400')
  .parse(process.argv);

const opts = program.opts();
const squadDir = path.resolve(opts.squadPath);
const minLines = parseInt(opts.minLines, 10) || 400;

const requiredSections = [
  'persona',
  'core_principles',
  'commands',
  'dependencies',
  'collaboration',
  'error handling',
  'signature'
];

function analyzeAgent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const totalLines = lines.length;

  // Count substantive lines (non-empty, non-YAML-header, non-comment-only)
  let substantiveLines = 0;
  let inYamlHeader = false;
  let yamlHeaderEnded = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Track YAML header
    if (trimmed === '---') {
      if (!inYamlHeader && !yamlHeaderEnded) {
        inYamlHeader = true;
        continue;
      } else if (inYamlHeader) {
        inYamlHeader = false;
        yamlHeaderEnded = true;
        continue;
      }
    }

    if (inYamlHeader) continue; // Don't count YAML header lines

    // Count as substantive if not empty and not just a separator
    if (trimmed.length > 0 && !trimmed.startsWith('---') && trimmed !== '_') {
      substantiveLines++;
    }
  }

  // Check required sections (case-insensitive)
  const contentLower = content.toLowerCase();
  const foundSections = requiredSections.filter(section =>
    contentLower.includes(section.toLowerCase())
  );
  const missingSections = requiredSections.filter(section =>
    !contentLower.includes(section.toLowerCase())
  );

  // Calculate content density
  const contentDensity = totalLines > 0 ? (substantiveLines / totalLines * 100) : 0;

  // Check for filler patterns
  const fillerPatterns = [
    { pattern: /\.\.\./g, name: 'ellipsis placeholders' },
    { pattern: /\{\{[A-Z_]+\}\}/g, name: 'unfilled placeholders' },
    { pattern: /TBD|TODO|FIXME|PLACEHOLDER/gi, name: 'TODO/FIXME markers' },
    { pattern: /^<!--.*?-->$/gm, name: 'HTML comment lines' },
  ];

  const fillerCounts = fillerPatterns.map(fp => ({
    name: fp.name,
    count: (content.match(fp.pattern) || []).length
  }));

  const totalFillers = fillerCounts.reduce((sum, f) => sum + f.count, 0);
  const fillerRatio = totalLines > 0 ? (totalFillers / totalLines * 100) : 0;

  return {
    file: path.basename(filePath),
    totalLines,
    substantiveLines,
    contentDensity: contentDensity.toFixed(1),
    foundSections: foundSections.length,
    missingSections,
    fillerCounts,
    totalFillers,
    fillerRatio: fillerRatio.toFixed(1),
    passes: totalLines >= minLines && missingSections.length === 0 && fillerRatio < 7
  };
}

// Main
const agentsDir = path.join(squadDir, 'agents');
if (!fs.existsSync(agentsDir)) {
  console.error(chalk.red(`Error: agents/ directory not found in ${squadDir}`));
  process.exit(1);
}

const agentFiles = fs.readdirSync(agentsDir)
  .filter(f => f.endsWith('.md'))
  .sort();

if (agentFiles.length === 0) {
  console.log(chalk.yellow('No agent files found in agents/ directory'));
  process.exit(0);
}

console.log(chalk.bold('\n📏 Agent Line Counter\n'));
console.log(chalk.dim(`  Squad directory: ${squadDir}`));
console.log(chalk.dim(`  Minimum line count: ${minLines}\n`));

const results = agentFiles.map(f => analyzeAgent(path.join(agentsDir, f)));

// Table header
console.log(chalk.bold(
  '  ' + 'File'.padEnd(35) +
  'Lines'.padStart(8) +
  'Density'.padStart(10) +
  'Sections'.padStart(10) +
  'Fillers'.padStart(8) +
  '  Status'
));
console.log(chalk.dim('  ' + '─'.repeat(85)));

let totalLines = 0;
let passingCount = 0;
let failingFiles = [];

results.forEach(r => {
  totalLines += r.totalLines;
  if (r.passes) {
    passingCount++;
    console.log(chalk.green(
      '  ' + r.file.padEnd(35) +
      String(r.totalLines).padStart(8) +
      `${r.contentDensity}%`.padStart(10) +
      `${r.foundSections}/${requiredSections.length}`.padStart(10) +
      String(r.totalFillers).padStart(8) +
      '  ✅ PASS'
    ));
  } else {
    const reasons = [];
    if (r.totalLines < minLines) reasons.push(`${r.totalLines}/${minLines} lines`);
    if (r.missingSections.length > 0) reasons.push(`missing: ${r.missingSections.join(', ')}`);
    if (parseFloat(r.fillerRatio) >= 5) reasons.push(`filler: ${r.fillerRatio}%`);
    failingFiles.push({ file: r.file, reasons });

    console.log(chalk.red(
      '  ' + r.file.padEnd(35) +
      String(r.totalLines).padStart(8) +
      `${r.contentDensity}%`.padStart(10) +
      `${r.foundSections}/${requiredSections.length}`.padStart(10) +
      String(r.totalFillers).padStart(8) +
      `  ❌ FAIL (${reasons.join('; ')})`
    ));
  }
});

// Summary
console.log(chalk.bold('\n' + '='.repeat(50)));
console.log(chalk.bold('Summary'));
console.log('='.repeat(50));
console.log(chalk.dim(`  Total agents:       ${agentFiles.length}`));
console.log(chalk.green(`  Passing:            ${passingCount}`));
console.log(chalk.red(`  Failing:            ${agentFiles.length - passingCount}`));
console.log(chalk.dim(`  Total lines:        ${totalLines}`));
console.log(chalk.dim(`  Average per agent:  ${Math.round(totalLines / agentFiles.length)}`));
console.log('='.repeat(50));

if (failingFiles.length > 0) {
  console.log(chalk.bold.yellow('\n⚠️  Failing files detail:'));
  failingFiles.forEach(f => {
    console.log(chalk.yellow(`\n  ${f.file}:`));
    f.reasons.forEach(r => console.log(chalk.yellow(`    - ${r}`)));
  });
}

if (passingCount === agentFiles.length) {
  console.log(chalk.green.bold('\n✅ All agents meet the minimum standard!\n'));
  process.exit(0);
} else {
  console.log(chalk.red.bold(`\n❌ ${agentFiles.length - passingCount} agent(s) need expansion\n`));
  process.exit(1);
}
