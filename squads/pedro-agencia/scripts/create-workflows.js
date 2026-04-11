#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const squadDir = path.join(__dirname, '..');

const workflows = [
  {
    id: 'course-creation-pipeline',
    name: 'Course Creation Pipeline',
    description: 'End-to-end course creation from concept to launch',
    steps: [
      { id: 'step-1-discovery', name: 'Discovery & Planning', task: 'curriculum-architect/design-curriculum', agent: 'curriculum-architect' },
      { id: 'step-2-content', name: 'Content Design', task: 'content-designer/design-lesson', agent: 'content-designer' },
      { id: 'step-3-assessment', name: 'Assessment Design', task: 'assessment-designer/create-quiz', agent: 'assessment-designer' },
      { id: 'step-4-engagement', name: 'Engagement Setup', task: 'engagement-strategist/design-onboarding', agent: 'engagement-strategist' },
      { id: 'step-5-platform', name: 'Platform & Delivery', task: 'delivery-coordinator/setup-platform', agent: 'delivery-coordinator' },
      { id: 'step-6-launch', name: 'Launch Preparation', task: 'marketing-amplifier/plan-launch', agent: 'marketing-amplifier' },
    ]
  },
  {
    id: 'evergreen-machine',
    name: 'Evergreen Machine',
    description: 'Automated evergreen course delivery and optimization',
    steps: [
      { id: 'step-1-lead-capture', name: 'Lead Capture & Segmentation', task: 'marketing-amplifier/build-funnel', agent: 'marketing-amplifier' },
      { id: 'step-2-nurture', name: 'Email Nurture Sequence', task: 'marketing-amplifier/build-email-sequence', agent: 'marketing-amplifier' },
      { id: 'step-3-conversion', name: 'Conversion Optimization', task: 'marketing-amplifier/optimize-conversion', agent: 'marketing-amplifier' },
      { id: 'step-4-delivery', name: 'Automated Delivery', task: 'delivery-coordinator/manage-enrollment', agent: 'delivery-coordinator' },
      { id: 'step-5-optimization', name: 'Continuous Optimization', task: 'iteration-analyst/analyze-metrics', agent: 'iteration-analyst' },
    ]
  },
  {
    id: 'cohort-scale-machine',
    name: 'Cohort Scale Machine',
    description: 'Scale cohort-based course delivery efficiently',
    steps: [
      { id: 'step-1-planning', name: 'Cohort Planning', task: 'delivery-coordinator/plan-cohort', agent: 'delivery-coordinator' },
      { id: 'step-2-scheduling', name: 'Session Scheduling', task: 'delivery-coordinator/schedule-sessions', agent: 'delivery-coordinator' },
      { id: 'step-3-enrollment', name: 'Enrollment Management', task: 'delivery-coordinator/manage-enrollment', agent: 'delivery-coordinator' },
      { id: 'step-4-delivery', name: 'Cohort Delivery', task: 'delivery-coordinator/coordinate-team', agent: 'delivery-coordinator' },
      { id: 'step-5-optimization', name: 'Logistics Optimization', task: 'delivery-coordinator/optimize-logistics', agent: 'delivery-coordinator' },
    ]
  },
  {
    id: 'certification-pathway',
    name: 'Certification Pathway',
    description: 'Design and implement certification programs',
    steps: [
      { id: 'step-1-design', name: 'Certification Design', task: 'assessment-designer/design-certification', agent: 'assessment-designer' },
      { id: 'step-2-rubrics', name: 'Rubric Creation', task: 'assessment-designer/create-rubric', agent: 'assessment-designer' },
      { id: 'step-3-tracking', name: 'Progress Tracking Setup', task: 'assessment-designer/setup-tracking', agent: 'assessment-designer' },
      { id: 'step-4-validation', name: 'Assessment Validation', task: 'assessment-designer/measure-satisfaction', agent: 'assessment-designer' },
      { id: 'step-5-implementation', name: 'Certification Implementation', task: 'assessment-designer/implement-formative-assessment', agent: 'assessment-designer' },
    ]
  },
  {
    id: 'alumni-activation-flywheel',
    name: 'Alumni Activation Flywheel',
    description: 'Transform graduates into active community members and advocates',
    steps: [
      { id: 'step-1-graduation', name: 'Graduation & Transition', task: 'community-builder/activate-alumni', agent: 'community-builder' },
      { id: 'step-2-onboarding', name: 'Alumni Onboarding', task: 'community-builder/setup-community', agent: 'community-builder' },
      { id: 'step-3-engagement', name: 'Alumni Engagement', task: 'community-builder/nurture-culture', agent: 'community-builder' },
      { id: 'step-4-leadership', name: 'Leadership Development', task: 'community-builder/identify-leaders', agent: 'community-builder' },
      { id: 'step-5-advocacy', name: 'Advocacy & Referrals', task: 'marketing-amplifier/recruit-affiliates', agent: 'marketing-amplifier' },
    ]
  },
  {
    id: 'partnership-flywheel',
    name: 'Partnership Flywheel',
    description: 'Build and manage strategic partnerships for growth',
    steps: [
      { id: 'step-1-identification', name: 'Partner Identification', task: 'marketing-amplifier/plan-launch', agent: 'marketing-amplifier' },
      { id: 'step-2-outreach', name: 'Outreach & Qualification', task: 'marketing-amplifier/build-funnel', agent: 'marketing-amplifier' },
      { id: 'step-3-negotiation', name: 'Partnership Negotiation', task: 'revenue-optimizer/design-pricing', agent: 'revenue-optimizer' },
      { id: 'step-4-integration', name: 'Partnership Integration', task: 'delivery-coordinator/coordinate-team', agent: 'delivery-coordinator' },
      { id: 'step-5-optimization', name: 'Partnership Optimization', task: 'iteration-analyst/analyze-metrics', agent: 'iteration-analyst' },
    ]
  },
  {
    id: 'live-class-delivery',
    name: 'Live Class Delivery',
    description: 'Deliver engaging live classes with real-time interaction',
    steps: [
      { id: 'step-1-preparation', name: 'Pre-Class Preparation', task: 'content-designer/create-slides', agent: 'content-designer' },
      { id: 'step-2-tech-setup', name: 'Technical Setup', task: 'delivery-coordinator/setup-platform', agent: 'delivery-coordinator' },
      { id: 'step-3-delivery', name: 'Live Delivery', task: 'content-designer/write-script', agent: 'content-designer' },
      { id: 'step-4-interaction', name: 'Student Interaction', task: 'engagement-strategist/plan-touchpoints', agent: 'engagement-strategist' },
      { id: 'step-5-followup', name: 'Post-Class Follow-up', task: 'iteration-analyst/collect-feedback', agent: 'iteration-analyst' },
    ]
  },
  {
    id: 'continuous-improvement-loop',
    name: 'Continuous Improvement Loop',
    description: 'Collect feedback and continuously optimize courses',
    steps: [
      { id: 'step-1-collection', name: 'Data Collection', task: 'iteration-analyst/collect-feedback', agent: 'iteration-analyst' },
      { id: 'step-2-analysis', name: 'Metrics Analysis', task: 'iteration-analyst/analyze-metrics', agent: 'iteration-analyst' },
      { id: 'step-3-identification', name: 'Gap Identification', task: 'iteration-analyst/identify-gaps', agent: 'iteration-analyst' },
      { id: 'step-4-prioritization', name: 'Improvement Prioritization', task: 'iteration-analyst/prioritize-improvements', agent: 'iteration-analyst' },
      { id: 'step-5-implementation', name: 'Change Implementation', task: 'iteration-analyst/implement-changes', agent: 'iteration-analyst' },
      { id: 'step-6-testing', name: 'A/B Testing', task: 'iteration-analyst/run-ab-tests', agent: 'iteration-analyst' },
    ]
  }
];

console.log('🔧 Creating all workflows from scratch...\n');

workflows.forEach(wf => {
  const wfContent = `# ${wf.name}
# Squad: pedro-educacao
# Description: ${wf.description}
workflow:
  id: ${wf.id}
  name: "${wf.name}"
  description: "${wf.description}"
  version: 1.0.0
  tier: S+++

  pre_conditions:
    - "Squad is validated and ready"
    - "Required agents are available"
    - "Input parameters provided"

  steps:
${wf.steps.map((step, idx) => `    - id: ${step.id}
      name: "${step.name}"
      task: edu-${step.task.split('/').pop().replace('.md', '')}
      agent: edu-${step.agent}
      timeout: 120
      retry:
        max_attempts: 3
        backoff: exponential
      on_success: ${idx < wf.steps.length - 1 ? wf.steps[idx + 1].id : 'complete'}
      on_failure: error_handler`).join('\n\n')}

  post_conditions:
    - "All phases completed successfully"
    - "Output artifacts generated"
    - "Quality gates passed"

  error_handler:
    actions:
      - "Log error with context"
      - "Notify orchestrator"
      - "Attempt automatic recovery"
    escalation: "Escalate to human if retry exhausted"
`;

  const wfPath = path.join(squadDir, 'workflows', `${wf.id}.yaml`);
  fs.writeFileSync(wfPath, wfContent);
  console.log(`  ✅ Created: ${wf.id}.yaml`);
});

console.log('\n✅ All workflows created successfully!');
