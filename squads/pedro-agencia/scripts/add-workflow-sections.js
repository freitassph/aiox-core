#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const squadDir = path.join(__dirname, '..');
const squadConfig = yaml.parse(fs.readFileSync(path.join(squadDir, 'squad.yaml'), 'utf8'));

const workflows = squadConfig.components.workflows || [];

console.log('🔧 Adding missing sections to all workflows...\n');

workflows.forEach(wfFile => {
  const wfPath = path.join(squadDir, 'workflows', wfFile);
  if (!fs.existsSync(wfPath)) {
    console.log(`  ⚠️  Missing: ${wfFile}`);
    return;
  }

  try {
    let content = fs.readFileSync(wfPath, 'utf8');
    let wfData = yaml.parse(content);
    let changes = [];

    // Add missing fields
    if (!wfData.workflow.pre_conditions && !wfData.workflow.preconditions) {
      wfData.workflow.pre_conditions = [
        'Squad is validated and ready',
        'Required agents are available',
        'Input parameters provided'
      ];
      changes.push('pre_conditions');
    }

    if (!wfData.workflow.post_conditions && !wfData.workflow.postconditions) {
      wfData.workflow.post_conditions = [
        'All phases completed successfully',
        'Output artifacts generated',
        'Quality gates passed'
      ];
      changes.push('post_conditions');
    }

    if (!wfData.workflow.steps) {
      // Convert phases to steps if steps doesn't exist
      wfData.workflow.steps = (wfData.workflow.phases || []).map((phase, idx) => ({
        step: idx + 1,
        name: phase.name,
        task: phase.tasks?.[0]?.id || 'unknown',
        agent: phase.tasks?.[0]?.agent || 'unknown',
        pre_conditions: phase.exit_criteria || [],
        retry: {
          max_attempts: 3,
          backoff: 'exponential'
        }
      }));
      changes.push('steps');
    }

    if (!wfData.workflow.error_handler && !wfData.workflow.on_failure) {
      wfData.workflow.error_handler = {
        actions: [
          'Log error with context',
          'Notify orchestrator',
          'Attempt automatic recovery'
        ],
        escalation: 'Escalate to human if retry exhausted'
      };
      changes.push('error_handler');
    }

    // Add retry to steps if missing
    if (wfData.workflow.steps) {
      wfData.workflow.steps.forEach(step => {
        if (!step.retry) {
          step.retry = {
            max_attempts: 3,
            backoff: 'exponential'
          };
        }
      });
    }

    if (changes.length > 0) {
      // Write back the updated YAML
      const yamlStr = yaml.stringify(wfData);
      fs.writeFileSync(wfPath, yamlStr);
      console.log(`  ✅ ${wfFile}: Added ${changes.join(', ')}`);
    } else {
      console.log(`  ✓ ${wfFile}: All sections present`);
    }
  } catch (err) {
    console.log(`  ❌ ${wfFile}: Error parsing YAML - ${err.message}`);
  }
});

console.log('\n✅ All workflows have been updated!');
