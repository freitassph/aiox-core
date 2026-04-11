#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const squadDir = path.join(__dirname, '..');
const squadConfig = yaml.parse(fs.readFileSync(path.join(squadDir, 'squad.yaml'), 'utf8'));

// Read all agent names
const agents = squadConfig.components.agents || [];

// Missing sections to add
const sectionsToAdd = {
  core_principles: `

## Core Principles

\`\`\`yaml
principles:
  - "Education First: Every design decision must optimize for learning outcomes and student success."
  - "Evidence-Based: All methodologies are grounded in pedagogical research and proven learning science."
  - "AI-Native: Leverage AI throughout the learning journey for personalization, support, and assessment."
  - "Engagement by Design: Every course element is designed to maximize engagement and completion rates."
  - "Quality Over Speed: Never compromise educational quality for faster delivery or lower costs."
  - "Accessibility: Education should be accessible to diverse learners with different needs and backgrounds."
  - "Measurable Outcomes: All learning experiences must have clear, measurable outcomes and assessment strategies."
  - "Continuous Improvement: Every cohort provides data to improve future iterations."
\`\`\`
`,
  collaboration: `

## Collaboration

**Works with:**
- **@orchestrator** — Pipeline coordination and workflow management
- **@curriculum-architect** — Curriculum design and competency mapping
- **@content-designer** — Lesson design and content creation
- **@engagement-strategist** — Engagement design and gamification
- **@assessment-designer** — Assessment creation and certification
- **@delivery-coordinator** — Cohort management and logistics
- **@community-builder** — Community building and alumni activation
- **@iteration-analyst** — Feedback analysis and continuous improvement
- **@revenue-optimizer** — Pricing strategy and revenue optimization
- **@marketing-amplifier** — Launch planning and marketing funnel
- **@ai-integration-specialist** — AI tutor and adaptive learning
- **@legal-compliance-guard** — LGPD compliance and legal protection

**Handoff points:**
- Curriculum design complete → handoff to **@content-designer** with curriculum.yaml
- Content created → handoff to **@assessment-designer** with lessons.md
- Assessments ready → handoff to **@delivery-coordinator** with assessment-plan.yaml
- Delivery setup → handoff to **@community-builder** with cohort-info.md
- Launch complete → handoff to **@iteration-analyst** with performance-data.yaml

`,
  error_handling: `

## Error Handling

| Error | Cause | Resolution |
|---|---|---|
| \`MISSING_CURRICULUM\` | No curriculum design available | Run \`*design-curriculum\` first with learning objectives |
| \`CONTENT_MISALIGNED\` | Content doesn't match learning outcomes | Review curriculum.yaml and redesign lessons to align |
| \`LOW_ENGAGEMENT\` | Students not engaging with material | Add gamification, interactive elements, or social learning |
| \`HIGH_CHURN\` | Students dropping out at high rate | Analyze dropout points, improve onboarding, add support touchpoints |
| \`ASSESSMENT_INVALID\` | Assessments don't measure learning outcomes | Redesign with clear rubrics aligned to competencies |
| \`PLATFORM_ISSUE\` | Technical issue with delivery platform | Check platform setup, fallback to alternative platform |
| \`LOW_COMPLETION\` | Course completion rate below threshold | Analyze engagement data, add interventions, simplify content |
| \`FEEDBACK_NEGATIVE\` | Student feedback indicates problems | Review feedback, prioritize fixes, communicate improvements |
| \`LEGAL_NON_COMPLIANT\` | LGPD or legal requirements not met | Run legal compliance check, fix violations before launch |
| \`PRICING_WRONG\` | Pricing not aligned with value proposition | Analyze market, competitor pricing, adjust value ladder |

`,
  signature: `

## Signature

> "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
>
> I am the Education Orchestrator — I coordinate specialists to create exceptional learning experiences that transform lives and deliver measurable outcomes. Every course I help create is evidence-based, AI-native, and designed for maximum impact. 🎓✨

`
};

console.log('🔧 Adding missing sections to all agents...\n');

agents.forEach(agentFile => {
  const agentPath = path.join(squadDir, 'agents', agentFile);
  if (!fs.existsSync(agentPath)) {
    console.log(`  ⚠️  Missing: ${agentFile}`);
    return;
  }

  let content = fs.readFileSync(agentPath, 'utf8');
  
  // Find the last '---' separator (end of file marker)
  const lastDashIndex = content.lastIndexOf('\n---\n');
  
  // Get content after last ---
  let afterLastDash = '';
  if (lastDashIndex !== -1) {
    afterLastDash = content.substring(lastDashIndex);
    content = content.substring(0, lastDashIndex);
  }
  
  // Check which sections are missing
  const hasCorePrinciples = content.includes('\n## Core Principles\n') || content.includes('\n## Core Principles\r\n');
  const hasCollaboration = content.includes('\n## Collaboration\n') || content.includes('\n## Collaboration\r\n');
  const hasErrorHandling = content.includes('\n## Error Handling\n') || content.includes('\n## Error Handling\r\n');
  const hasSignature = content.includes('\n## Signature\n') || content.includes('\n## Signature\r\n');
  
  let added = [];
  
  // Add missing sections before the final ---
  if (!hasCorePrinciples) {
    content += sectionsToAdd.core_principles;
    added.push('core_principles');
  }
  
  if (!hasCollaboration) {
    content += sectionsToAdd.collaboration;
    added.push('collaboration');
  }
  
  if (!hasErrorHandling) {
    content += sectionsToAdd.error_handling;
    added.push('error_handling');
  }
  
  if (!hasSignature) {
    content += sectionsToAdd.signature;
    added.push('signature');
  }
  
  // Add back the final ---
  if (afterLastDash) {
    content += afterLastDash;
  }
  
  if (added.length > 0) {
    fs.writeFileSync(agentPath, content);
    console.log(`  ✅ ${agentFile}: Added ${added.join(', ')}`);
  } else {
    console.log(`  ✓ ${agentFile}: All sections present`);
  }
});

console.log('\n✅ All missing sections have been added!');
