const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const WF_DIR = path.join(__dirname, '..', 'workflows');
const additions = `
# Pre-conditions for workflow execution
pre_conditions:
  - "All required agents available and activated"
  - "Client brief approved by pa-empire"
  - "Budget and timeline validated"

# Expected state after workflow completion
post_conditions:
  - "All campaign assets delivered"
  - "Quality gates passed"
  - "Client sign-off received"

# Error handling strategy
error_handler:
  strategy: "escalate-to-orchestrator"
  escalation:
    - "Agent self-corrects and retries"
    - "Escalate to pa-empire for resolution"
    - "Pause workflow and request client input"
  rollback:
    trigger: "Critical failure after 3 attempts"
    action: "Revert to last approved state"

# Retry configuration
retry:
  max_attempts: 3
  backoff: "exponential"
  retry_on:
    - "network_error"
    - "agent_timeout"
  do_not_retry:
    - "validation_error"
    - "client_rejection"

`;

const files = fs.readdirSync(WF_DIR).filter(f => f.endsWith('.yaml'));
let count = 0;

files.forEach(f => {
  const fp = path.join(WF_DIR, f);
  let content = fs.readFileSync(fp, 'utf-8');
  const lower = content.toLowerCase();
  
  if (lower.includes('pre_conditions') && lower.includes('post_conditions') && 
      lower.includes('error_handler') && lower.includes('retry')) {
    console.log(`✅ Already valid: ${f}`);
    return;
  }
  
  // Validate original
  try { yaml.parse(content); } catch(e) {
    console.log(`❌ Original broken: ${f}`);
    return;
  }
  
  // Insert before success_criteria
  const scIndex = content.indexOf('\nsuccess_criteria:');
  if (scIndex > -1) {
    content = content.slice(0, scIndex) + additions + content.slice(scIndex);
  } else {
    content = content.trimEnd() + additions;
  }
  
  // Validate new
  try { 
    yaml.parse(content); 
    fs.writeFileSync(fp, content, 'utf-8');
    count++;
    console.log(`✅ Fixed: ${f}`);
  } catch(e) {
    console.log(`❌ New broken: ${f} - ${e.message.split('\n')[0]}`);
  }
});

console.log(`\n✅ ${count}/${files.length} workflows fixed`);
