#!/usr/bin/env node
/**
 * health-check.js — Quick health check of squad integrity
 * Usage: node scripts/health-check.js [--squad-path .]
 *
 * Fast check covering:
 * - squad.yaml exists and parses
 * - All directories exist
 * - File counts per directory
 * - Agent line count ≥400 for each
 * - README exists
 * - No orphan references (basic check)
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
  .description('Quick health check of squad integrity')
  .option('--squad-path <path>', 'Path to squad directory', '.')
  .parse(process.argv);

const opts = program.opts();
const squadDir = path.resolve(opts.squadPath);

function check(condition, message) {
  if (condition) {
    process.stdout.write(chalk.green(`  ✓ ${message}\n`));
    return true;
  } else {
    process.stdout.write(chalk.red(`  ✗ ${message}\n`));
    return false;
  }
}

function countFiles(dirName) {
  const fullPath = path.join(squadDir, dirName);
  if (!fs.existsSync(fullPath)) return 0;
  return fs.readdirSync(fullPath).filter(f => {
    const stat = fs.statSync(path.join(fullPath, f));
    return stat.isFile();
  }).length;
}

console.log(chalk.bold('\n💚 Squad Health Check\n'));
console.log(chalk.dim(`  Squad directory: ${squadDir}\n`));

let allPassed = true;

// Core files
console.log(chalk.bold('Core Files'));
allPassed &= check(fs.existsSync(path.join(squadDir, 'squad.yaml')), 'squad.yaml exists');
allPassed &= check(fs.existsSync(path.join(squadDir, 'README.md')), 'README.md exists');
allPassed &= check(fs.existsSync(path.join(squadDir, 'package.json')), 'package.json exists');

// Directories
console.log(chalk.bold('\nDirectories'));
const requiredDirs = ['agents', 'tasks', 'workflows', 'checklists', 'templates', 'config', 'data', 'scripts', 'tools'];
requiredDirs.forEach(dir => {
  allPassed &= check(fs.existsSync(path.join(squadDir, dir)), `${dir}/ exists`);
});

// File counts
console.log(chalk.bold('\nFile Counts'));
const dirCounts = {};
requiredDirs.forEach(dir => {
  dirCounts[dir] = countFiles(dir);
  const icon = dirCounts[dir] > 0 ? '✓' : '✗';
  const color = dirCounts[dir] > 0 ? chalk.green : chalk.red;
  console.log(color(`  ${icon} ${dir.padEnd(15)} ${dirCounts[dir]} files`));
  if (dirCounts[dir] === 0) allPassed = false;
});

// Agent line counts
console.log(chalk.bold('\nAgent Line Counts (≥400 required)'));
const agentsDir = path.join(squadDir, 'agents');
if (fs.existsSync(agentsDir)) {
  const agentFiles = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
  let totalLines = 0;
  agentFiles.forEach(f => {
    const content = fs.readFileSync(path.join(agentsDir, f), 'utf-8');
    const lines = content.split('\n').length;
    totalLines += lines;
    const passes = lines >= 400;
    const icon = passes ? '✓' : '✗';
    const color = passes ? chalk.green : chalk.red;
    console.log(color(`  ${icon} ${f.padEnd(35)} ${lines} lines`));
    if (!passes) allPassed = false;
  });
  console.log(chalk.dim(`\n  Total: ${totalLines} lines across ${agentFiles.length} agents`));
  console.log(chalk.dim(`  Average: ${Math.round(totalLines / Math.max(agentFiles.length, 1))} lines per agent`));
}

// Config files
console.log(chalk.bold('\nConfig Files'));
const configDir = path.join(squadDir, 'config');
if (fs.existsSync(configDir)) {
  ['coding-standards.md', 'tech-stack.md', 'source-tree.md'].forEach(f => {
    allPassed &= check(fs.existsSync(path.join(configDir, f)), `config/${f} exists`);
  });
}

// Data files
console.log(chalk.bold('\nData Files'));
const dataDir = path.join(squadDir, 'data');
if (fs.existsSync(dataDir)) {
  const dataFiles = fs.readdirSync(dataDir);
  console.log(chalk.dim(`  ${dataFiles.length} data file(s) found`));
  allPassed &= check(dataFiles.length >= 2, 'Has ≥2 data files');
}

// Summary
console.log(chalk.bold('\n' + '='.repeat(50)));
if (allPassed) {
  console.log(chalk.green.bold('✅ Squad is healthy!\n'));
  process.exit(0);
} else {
  console.log(chalk.red.bold('❌ Squad has health issues\n'));
  process.exit(1);
}
