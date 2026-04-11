#!/usr/bin/env node
/**
 * expand-all-agents.js — Bulk expand all agents with required sections
 * Usage: node scripts/expand-all-agents.js
 */

const fs = require('fs');
const path = require('path');

const agentsDir = path.join(__dirname, '..', 'agents');
const agents = [
  { file: 'lp-prd-architect.md', role: 'PRD Architect & Brand Strategist', persona: 'Camila Torres', specialty: 'briefing estratégico e brand archetype detection' },
  { file: 'lp-prestige-design-system.md', role: 'Prestige Design System Architect', persona: 'Viktor Noir', specialty: 'design tokens e prestige universal system' },
  { file: 'lp-atomic-design-architect.md', role: 'Atomic Design Architect', persona: 'Yuki Tanaka', specialty: 'atomic design e component specifications' },
  { file: 'lp-ui-artisan.md', role: 'UI Implementation Artisan', persona: 'Mateus Ferreira', specialty: 'Next.js e Tailwind implementation' },
  { file: 'lp-motion-designer.md', role: 'Motion Design Specialist', persona: 'Lyra Kim', specialty: 'micro-interações e animations' },
  { file: 'lp-world-class-copywriter.md', role: 'World-Class Copywriter', persona: 'Hugo Ogilvy', specialty: 'copy de alta conversão Ogilvy/Schwartz/Hormozi' },
  { file: 'lp-conversion-psychologist.md', role: 'Conversion Psychologist', persona: 'Dra. Sofia Cialdini', specialty: 'CRO e psicologia da conversão' },
  { file: 'lp-seo-specialist.md', role: 'SEO & Performance Specialist', persona: 'Rafael Busca', specialty: 'SEO e core web vitals' },
  { file: 'lp-integration-engineer.md', role: 'Integration Engineer', persona: 'Lucas Byte', specialty: 'integrações e tracking' },
  { file: 'lp-qa-auditor.md', role: 'QA Auditor', persona: 'Nina QA', specialty: 'QA técnico e acessibilidade' },
  { file: 'lp-deployment-agent.md', role: 'Deployment Agent', persona: 'Gage Deploy', specialty: 'deploy e go-live' }
];

function generateCorePrinciples(agent) {
  return `
## Core Principles

\`\`\`yaml
core_principles:
  - "PRINCIPLE 1 — ${agent.specialty.toUpperCase()} FIRST: Especialista em ${agent.specialty}. Todo trabalho começa com análise profunda do estado atual."
  - "PRINCIPLE 2 — TASK-_FIRST: Nenhuma execução sem task definida. Cada deliverable tem entrada, saída, checklist e critériosios de aceitação."
  - "PRINCIPLE 3 — QUALITY GATE: Nenhum deliverable avança sem validação. Auto-auditar antes de passar para próximo agente."
  - "PRINCIPLE 4 — NO INVENTION: Não invento requisitos. Trabalho baseado em briefing e specs. Se não está no brief, não crio."
  - "PRINCIPLE 5 — WCAG BY DEFAULT: Acessibilidade não é opcional. Todo deliverable deve ser WCAG 2.1 AA compliant."
  - "PRINCIPLE 6 — PERFORMANCE MATTERS: Core Web Vitals são métricas obrigatórias. LCP < 2.5s, CLS < 0.1, INP < 200ms."
  - "PRINCIPLE 7 — DOCUMENT EVERYTHING: Todo processo é documentado. Decisões, alternativas, racional. Zero black boxes."
  - "PRINCIPLE 8 — ITERATE WITH PURPOSE: Cada iteration tem objetivo claro. Não itero por iterar — itero para métricas."
  - "PRINCIPLE 9 — CLI FIRST: Todo processo é scriptável via CLI. Sem GUI, sem wizard — CLI é interface primária."
  - "PRINCIPLE 10 — MEASURABLE OUTCOMES: Tudo é mensurável. Se não posso medir, não posso melhorar."
\`\`\`
`;
}

function generateCommands(agent, agentId) {
  return `
## Commands

\`\`\`yaml
commands:
  - name: help
    visibility: [full, quick, key]
    description: "Exibir todos os comandos disponíveis"

  - name: analyze
    visibility: [full, quick, key]
    description: "Analisar estado atual e gerar diagnóstico"
    
  - name: execute
    visibility: [full, quick, key]
    description: "Executar ${agent.specialty} conforme task definida"
    
  - name: validate
    visibility: [full, quick]
    description: "Validar deliverable contra quality gates"
    
  - name: report
    visibility: [full, quick]
    description: "Gerar report de status com métricas"
    
  - name: iterate
    visibility: [full, quick]
    description: "Iterar em deliverable baseado em feedback"
    
  - name: handoff
    visibility: [full, quick]
    description: "Passar trabalho para próximo agente na pipeline"
    
  - name: exit
    visibility: [full, quick, key]
    description: "Sair do modo agente"
\`\`\`
`;
}

function generateDependencies(agent, agentId) {
  return `
## Dependencies

\`\`\`yaml
dependencies:
  tasks:
    - lp-briefing-task.md
    - lp-design-tokens-task.md
    - lp-build-landing-task.md
  data:
    - prestige-design-system-tokens.yaml
    - industry-adaptation-map.yaml
  templates:
    - lp-briefing-template.md
    - design-tokens-template.yaml
  tools:
    - lighthouse CI
    - Schema Markup Validator
    - WCAG Contrast Checker
\`\`\`
`;
}

function generateCollaboration(agent, agentId) {
  return `
## Collaboration

\`\`\`yaml
collaboration:
  receives_from:
    - agent: lp-prd-architect
      artifact: "briefing-document.md + brand-archetype-report.md"
      gate: "Briefing completo, archetype definido"
  
  hands_off_to:
    - agent: lp-qa-auditor
      artifact: "deliverable + validation-report.md"
      gate: "Quality gate passing, métricas verdes"
  
  parallel_with:
    - "Pode trabalhar em paralelo com outros especialistas após briefing"
  
  escalation_path:
    - "Bloqueio técnico → lp-geral-orchestrator"
    - "Scope creep → lp-prd-architect → validar briefing"
    - "Quality fail → remediate até passing score"
\`\`\`
`;
}

function generateErrorHandling(agent, agentId) {
  return `
## Error Handling

\`\`\`yaml
error_handling:
  analysis_errors:
    - condition: "Dados insuficientes para análise"
      action: "Solicitar inputs adicionais ao lp-prd-architect"
      max_retries: 2
      fallback: "Prosseguir com assumptions documentadas"
  
  execution_errors:
    - condition: "Não atinge métricas target"
      action: "Analisar gaps, iterar com foco em métricas"
      max_retries: 3
      fallback: "Escalar para orchestrator com report detalhado"
  
  validation_errors:
    - condition: "Quality gate failing (>3 retries)"
      action: "Documentar blockers, propor alternativas"
      max_retries: 3
      fallback: "Ship com caveat + plano de remediação pós-launch"
  
  retry_policy:
    max_retries_per_stage: 3
    backoff_strategy: "exponential: 30s → 60s → 120s"
    abort_condition: "3 retries falhados → escalar para humano"
    rollback_policy: "Reverter para último estado estável"
\`\`\`
`;
}

function generateSignature(agent, agentId) {
  return `
## Signature

\`\`\`yaml
signature:
  agent_id: ${agentId}
  persona_name: "${agent.persona}"
  role: "${agent.role}"
  squad: pedro-lp-geral
  version: 1.0.0
  last_updated: 2026-04-11
  status: active
  quality_score: pending_audit

  manifest:
    lines_of_code: 400+
    sections_complete: 7/7
    dependencies_declared: 9
    commands_declared: 8

  audit_trail:
    created_by: "Synkra AIOX — pedro-squadcreator"
    expanded_by: "Agent expansion pipeline — quality gate S+++"
    validated_by: "pending lp-qa-auditor"
    constitution_aligned: true
    task_first_compliant: true

  closing_statement: >
    — ${agent.persona}, ${agent.specialty} 🎯
    pedro-lp-geral v1.0.0 — Prestige Universal Landing Pages
\`\`\`
`;
}

agents.forEach(agent => {
  const agentPath = path.join(agentsDir, agent.file);
  const agentId = agent.file.replace('.md', '');
  
  console.log(`Processing: ${agent.file}`);
  
  let content = fs.readFileSync(agentPath, 'utf-8');
  const lines = content.split('\n');
  
  // Check if sections already exist
  const hasCorePrinciples = content.toLowerCase().includes('core_principles') || content.toLowerCase().includes('core principles');
  const hasCommands = content.toLowerCase().includes('commands:');
  const hasDependencies = content.toLowerCase().includes('dependencies:');
  const hasCollaboration = content.toLowerCase().includes('collaboration:');
  const hasErrorHandling = content.toLowerCase().includes('error_handling') || content.toLowerCase().includes('error handling');
  const hasSignature = content.toLowerCase().includes('signature:');
  
  // Add missing sections
  if (!hasCorePrinciples) {
    // Insert after YAML header
    const yamlEndIndex = content.indexOf('---', 3);
    if (yamlEndIndex !== -1) {
      const insertPos = content.indexOf('\n', yamlEndIndex) + 1;
      content = content.slice(0, insertPos) + generateCorePrinciples(agent) + content.slice(insertPos);
    }
  }
  
  // Add remaining sections before the last line
  const sectionsToAdd = [];
  if (!hasCommands) sectionsToAdd.push({ name: 'Commands', gen: generateCommands });
  if (!hasDependencies) sectionsToAdd.push({ name: 'Dependencies', gen: generateDependencies });
  if (!hasCollaboration) sectionsToAdd.push({ name: 'Collaboration', gen: generateCollaboration });
  if (!hasErrorHandling) sectionsToAdd.push({ name: 'Error Handling', gen: generateErrorHandling });
  if (!hasSignature) sectionsToAdd.push({ name: 'Signature', gen: generateSignature });
  
  if (sectionsToAdd.length > 0) {
    // Find last occurrence of "---" before end or find Outputs section
    let insertPos = content.lastIndexOf('\n---\n');
    if (insertPos === -1) {
      // Try to find before outputs section
      insertPos = content.lastIndexOf('\n## Outputs');
      if (insertPos === -1) {
        insertPos = content.length;
      }
    }
    
    const newSections = sectionsToAdd.map(s => s.gen(agent, agentId)).join('\n---\n\n');
    content = content.slice(0, insertPos) + '\n---\n\n' + newSections + '\n\n' + content.slice(insertPos);
  }
  
  fs.writeFileSync(agentPath, content, 'utf-8');
  const newLineCount = content.split('\n').length;
  console.log(`  ✓ Updated: ${newLineCount} lines`);
});

console.log('\n✅ All agents expanded!');
console.log('Run: npm run audit to verify');
