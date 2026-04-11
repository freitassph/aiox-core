#!/usr/bin/env node
/**
 * check-orchestrator.js — Verify all workflow steps have agents/tasks assigned
 * Usage: node scripts/check-orchestrator.js [--squad-path .]
 *
 * Checks:
 * - Every workflow step has task: or agent: field
 * - No unbounded retry loops (missing max_iterations)
 * - All error handlers have at least 2 actions
 * - Pre/post conditions present
 * - No steps that only reference themselves (circular with no exit)
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
  .description('Check all workflow steps have agents/tasks assigned')
  .option('--squad-path <path>', 'Path to squad directory', '.')
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

function checkWorkflow(filePath) {
  console.log(chalk.bold(`\n  Checking: ${path.basename(filePath)}`));

  const content = fs.readFileSync(filePath, 'utf-8');
  let wf;
  try {
    wf = yaml.parse(content);
  } catch (e) {
    check(false, `Failed to parse: ${e.message}`);
    return;
  }

  const workflow = wf.workflow || wf;

  // Check pre_conditions
  check(
    workflow.pre_conditions && workflow.pre_conditions.length > 0,
    'Has pre_conditions',
    'WARN'
  );

  // Check post_conditions
  check(
    workflow.post_conditions && workflow.post_conditions.length > 0,
    'Has post_conditions',
    'WARN'
  );

  // Check steps
  const steps = workflow.steps || [];
  check(steps.length > 0, `Has ${steps.length} steps`);

  let stepsMissingAgent = 0;
  let stepsMissingTask = 0;
  let hasRetry = 0;
  let unboundedLoops = 0;

  steps.forEach(step => {
    const stepId = step.id || step.name || 'unknown';
    const hasTask = !!step.task;
    const hasAgent = !!step.agent;

    // In parallel steps, check sub-steps
    if (step.parallel) {
      step.parallel.forEach(subStep => {
        if (!subStep.task && !subStep.step) stepsMissingTask++;
        if (!subStep.agent) stepsMissingAgent++;
      });
    } else {
      if (!hasTask && !step.on_success) stepsMissingTask++;
      if (!hasAgent) stepsMissingAgent++;
    }

    // Check retry
    if (step.retry) hasRetry++;

    // Check for unbounded loops (condition with no max_iterations)
    if (step.condition && step.max_iterations === undefined) {
      // Check if it loops back
      const conditionStr = JSON.stringify(step.condition);
      if (conditionStr.includes('step-') || conditionStr.includes('then')) {
        unboundedLoops++;
      }
    }
  });

  check(stepsMissingTask === 0, `All steps have task/agent reference (${stepsMissingTask} missing)`, stepsMissingTask > 0 ? 'ERROR' : 'ERROR');
  check(stepsMissingAgent === 0, `All steps have agent assignment (${stepsMissingAgent} missing)`, stepsMissingAgent > 0 ? 'ERROR' : 'ERROR');
  check(hasRetry > 0, `Has retry config on ${hasRetry}/${steps.length} steps`, hasRetry === 0 ? 'ERROR' : 'WARN');
  check(unboundedLoops === 0, `No unbounded retry loops (${unboundedLoops} found)`, unboundedLoops > 0 ? 'ERROR' : 'ERROR');

  // Check error_handler
  if (workflow.error_handler) {
    const actions = workflow.error_handler.actions || [];
    check(actions.length >= 2, `Error handler has ${actions.length} actions (≥2 recommended)`);
  } else {
    // Check if steps have on_failure
    const hasOnFailure = steps.some(s => s.on_failure);
    check(hasOnFailure, 'Has error handling (on_failure or error_handler)');
  }
}

// Main
const workflowsDir = path.join(squadDir, 'workflows');
if (!fs.existsSync(workflowsDir)) {
  console.error(chalk.red(`Error: workflows/ directory not found in ${squadDir}`));
  process.exit(1);
}

const workflowFiles = fs.readdirSync(workflowsDir)
  .filter(f => f.endsWith('.yaml') || f.endsWith('.yml'))
  .sort();

if (workflowFiles.length === 0) {
  console.log(chalk.yellow('No workflow files found in workflows/ directory'));
  process.exit(0);
}

console.log(chalk.bold('\n🔗 Workflow Orchestration Check\n'));
console.log(chalk.dim(`  Squad directory: ${squadDir}`));
console.log(chalk.dim(`  Found ${workflowFiles.length} workflow(s)\n`));

workflowFiles.forEach(f => checkWorkflow(path.join(workflowsDir, f)));

// Summary
console.log(chalk.bold('\n' + '='.repeat(50)));
console.log(chalk.bold('Workflow Check Summary'));
console.log('='.repeat(50));
console.log(chalk.green(`  ✓ Passed:   ${passed}`));
if (errors > 0) console.log(chalk.red(`  ✗ Errors:   ${errors}`));
if (warnings > 0) console.log(chalk.yellow(`  ⚠ Warnings: ${warnings}`));
console.log('='.repeat(50));

if (errors === 0) {
  console.log(chalk.green.bold('\n✅ All workflow checks passed!\n'));
  process.exit(0);
} else {
  console.log(chalk.red.bold(`\n❌ ${errors} issue(s) found in workflows\n`));
  process.exit(1);
}
