#!/usr/bin/env node
/**
 * migrate-workflows.js — Add missing required sections to all workflow files
 * Required sections: pre_conditions, post_conditions, error_handler, retry
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SQUAD_DIR = path.dirname(__dirname);
const WORKFLOWS_DIR = path.join(SQUAD_DIR, 'workflows');

function addMissingSections(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLower = content.toLowerCase();
  const requiredSections = ['pre_conditions', 'post_conditions', 'error_handler', 'retry'];
  const missingSections = requiredSections.filter(s => {
    const alt = s.replace('_', '-');
    return !contentLower.includes(s.toLowerCase()) && !contentLower.includes(alt.toLowerCase());
  });
  
  if (missingSections.length === 0) return content; // Already complete
  
  // Parse YAML to understand structure
  let parsed;
  try {
    // Find the YAML block (may have markdown header)
    const yamlMatch = content.match(/^#\s*=+\n([\s\S]*?workflow:[\s\S]*?)(?=\n#|$)/);
    if (yamlMatch) {
      parsed = yaml.load(yamlMatch[1].replace(/^#\s*=+\n/, ''));
    }
  } catch (e) {
    // If parsing fails, we'll still add sections
  }
  
  const workflowName = parsed?.workflow?.name || path.basename(filePath, '.yaml').replace(/-/g, ' ');
  
  // Build missing sections at the YAML level
  // We'll add them as YAML comments/sections at the end of the workflow block
  
  const additions = [];
  
  if (missingSections.some(s => s.includes('pre_conditions'))) {
    additions.push(`
  # Pre-conditions that must be met before workflow execution
  pre_conditions:
    - All required agents are available and activated
    - Target audience and learning objectives defined
    - Budget and timeline constraints validated
    - Stakeholder approval obtained`);
  }
  
  if (missingSections.some(s => s.includes('post_conditions'))) {
    additions.push(`
  # Expected state after successful workflow completion
  post_conditions:
    - All course artifacts generated and reviewed
    - Quality gates passed for each deliverable
    - Launch plan validated and scheduled
    - Success metrics baseline established`);
  }
  
  if (missingSections.some(s => s.includes('error_handler'))) {
    additions.push(`
  # Error handling strategy for this workflow
  error_handler:
    strategy: "fail-fast-with-recovery"
    escalation_path:
      - level_1: "Agent self-corrects and retries"
      - level_2: "Escalate to orchestrator for resolution"
      - level_3: "Pause workflow and request user intervention"
    rollback:
      trigger: "Critical artifact failure or blocker unresolved > 2 attempts"
      action: "Revert to last known good state and re-plan"`);
  }
  
  if (missingSections.some(s => s.includes('retry'))) {
    additions.push(`
  # Retry configuration for task failures
  retry:
    max_attempts: 3
    backoff_strategy: "exponential"
    backoff_base_seconds: 30
    retry_on:
      - "network_error"
      - "agent_timeout"
      - "validation_failure"
    do_not_retry:
      - "validation_error"
      - "permission_denied"
      - "invalid_input"`);
  }
  
  // Find the end of the workflow YAML block and insert before it
  // Look for the last phase or trigger section, then add after it
  const lines = content.split('\n');
  let insertIndex = lines.length;
  
  // Try to find a good insertion point (end of phases or end of workflow definition)
  for (let i = lines.length - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (line.startsWith('phases:') || line.startsWith('trigger:')) {
      // Found a major section, find where it ends
      for (let j = i + 1; j < lines.length; j++) {
        const nextLine = lines[j].trim();
        if (nextLine && !nextLine.startsWith('-') && !nextLine.startsWith('#') && !nextLine.match(/^\s+\w+:/)) {
          // Found end of this section
          insertIndex = j;
          break;
        }
      }
      break;
    }
  }
  
  // Insert the additions
  lines.splice(insertIndex, 0, ...additions.join('').split('\n'));
  
  return lines.join('\n');
}

// Main
console.log('🔧 Workflow Migration: Adding missing required sections\n');

const workflowFiles = fs.readdirSync(WORKFLOWS_DIR).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));

let totalFiles = 0;
let modifiedFiles = 0;

workflowFiles.forEach(wf => {
  const filePath = path.join(WORKFLOWS_DIR, wf);
  const originalContent = fs.readFileSync(filePath, 'utf-8');
  const newContent = addMissingSections(filePath);
  
  totalFiles++;
  if (newContent !== originalContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    modifiedFiles++;
    console.log(`✅ Updated: workflows/${wf}`);
  } else {
    console.log(`⏭️  Already valid: workflows/${wf}`);
  }
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 Migration Summary`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`  Total files:    ${totalFiles}`);
console.log(`  Modified:       ${modifiedFiles}`);
console.log(`  Already valid:  ${totalFiles - modifiedFiles}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

if (modifiedFiles > 0) {
  console.log(`✅ ${modifiedFiles} workflows migrated successfully\n`);
} else {
  console.log(`✅ All workflows already have required sections\n`);
}
