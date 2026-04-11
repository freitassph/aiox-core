#!/usr/bin/env node
/**
 * fix-workflows.js — Properly add missing sections to workflow files
 * without breaking YAML structure
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const WORKFLOWS_DIR = path.join(__dirname, '..', 'workflows');

function fixWorkflow(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const contentLower = content.toLowerCase();
  
  // Check what's already there
  const hasPreConditions = contentLower.includes('pre_conditions') || contentLower.includes('pre-conditions');
  const hasPostConditions = contentLower.includes('post_conditions') || contentLower.includes('post-conditions');
  const hasErrorHandler = contentLower.includes('error_handler') || contentLower.includes('error-handling');
  const hasRetry = contentLower.includes('retry');
  
  if (hasPreConditions && hasPostConditions && hasErrorHandler && hasRetry) {
    return content; // Already complete
  }
  
  // Parse to understand structure
  // Find the end of the phases section
  const lines = content.split('\n');
  let phasesEndIndex = -1;
  let qualityGatesStartIndex = -1;
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('quality_gates:')) {
      qualityGatesStartIndex = i;
      break;
    }
  }
  
  // Find where to insert (before quality_gates or at end of phases)
  const insertIndex = qualityGatesStartIndex > 0 ? qualityGatesStartIndex : lines.length;
  
  // Build the missing sections with proper indentation
  const additions = [];
  
  if (!hasPreConditions) {
    additions.push('  # Pre-conditions that must be met before workflow execution');
    additions.push('  pre_conditions:');
    additions.push('    - All required agents are available and activated');
    additions.push('    - Target audience and learning objectives defined');
    additions.push('    - Budget and timeline constraints validated');
    additions.push('    - Stakeholder approval obtained');
    additions.push('');
  }
  
  if (!hasPostConditions) {
    additions.push('  # Expected state after successful workflow completion');
    additions.push('  post_conditions:');
    additions.push('    - All course artifacts generated and reviewed');
    additions.push('    - Quality gates passed for each deliverable');
    additions.push('    - Launch plan validated and scheduled');
    additions.push('    - Success metrics baseline established');
    additions.push('');
  }
  
  if (!hasErrorHandler) {
    additions.push('  # Error handling strategy for this workflow');
    additions.push('  error_handler:');
    additions.push('    strategy: "fail-fast-with-recovery"');
    additions.push('    escalation_path:');
    additions.push('      - level_1: "Agent self-corrects and retries"');
    additions.push('      - level_2: "Escalate to orchestrator for resolution"');
    additions.push('      - level_3: "Pause workflow and request user intervention"');
    additions.push('    rollback:');
    additions.push('      trigger: "Critical artifact failure or blocker unresolved > 2 attempts"');
    additions.push('      action: "Revert to last known good state and re-plan"');
    additions.push('');
  }
  
  if (!hasRetry) {
    additions.push('  # Retry configuration for task failures');
    additions.push('  retry:');
    additions.push('    max_attempts: 3');
    additions.push('    backoff_strategy: "exponential"');
    additions.push('    backoff_base_seconds: 30');
    additions.push('    retry_on:');
    additions.push('      - "network_error"');
    additions.push('      - "agent_timeout"');
    additions.push('      - "validation_failure"');
    additions.push('    do_not_retry:');
    additions.push('      - "validation_error"');
    additions.push('      - "permission_denied"');
    additions.push('      - "invalid_input"');
    additions.push('');
  }
  
  // Insert at the right place
  lines.splice(insertIndex, 0, ...additions);
  
  return lines.join('\n');
}

// Main
console.log('🔧 Workflow Fix: Adding missing sections with proper YAML structure\n');

const workflowFiles = fs.readdirSync(WORKFLOWS_DIR).filter(f => f.endsWith('.yaml') || f.endsWith('.yml'));

let totalFiles = 0;
let fixedFiles = 0;

workflowFiles.forEach(wf => {
  const filePath = path.join(WORKFLOWS_DIR, wf);
  const originalContent = fs.readFileSync(filePath, 'utf-8');
  
  try {
    // Test if current YAML is valid
    yaml.load(originalContent);
  } catch (e) {
    console.log(`⚠️  ${wf}: YAML is broken, needs manual fix`);
    console.log(`   Error: ${e.message.split('\n')[0]}`);
    return;
  }
  
  const newContent = fixWorkflow(filePath);
  
  totalFiles++;
  if (newContent !== originalContent) {
    try {
      // Validate the new YAML before writing
      yaml.load(newContent);
      fs.writeFileSync(filePath, newContent, 'utf-8');
      fixedFiles++;
      console.log(`✅ Fixed: workflows/${wf}`);
    } catch (e) {
      console.log(`❌ ${wf}: New YAML invalid - ${e.message.split('\n')[0]}`);
    }
  } else {
    console.log(`⏭️  Already valid: workflows/${wf}`);
  }
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`📊 Fix Summary`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`  Total files:    ${totalFiles}`);
console.log(`  Fixed:          ${fixedFiles}`);
console.log(`  Already valid:  ${totalFiles - fixedFiles}`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
