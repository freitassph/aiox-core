# 🏥 Medical Landing Squad — S+++ Tier

> Squad especializado em landing pages e sites médicos de **altíssima conversão** — com design "Clinical Luxury" (Atomic Design Brad Frost), copy humanizada CFM-compliant e performance técnica impecável.

---

## Overview

Medical Landing Squad é um squad AIOX Tier S+++ especializado na criação de landing pages médicas de altíssima qualidade. Este squad segue o framework AIOX com CLI First, Agent Authority, e Story-Driven Development.

**Directory structure:**
```
pedro-lp-medica/
├── agents/          # 13 agentes especializados
├── tasks/           # 8 tasks com acceptance criteria
├── workflows/       # 3 workflows (full, design sprint, quick launch)
├── checklists/      # 5 checklists de qualidade e compliance
├── templates/       # 4 templates reutilizáveis
├── config/          # Coding standards, tech stack, source tree
├── scripts/         # Quality gates, validation, audit scripts
└── package.json     # Dependencies e scripts de automação
```

**CLI Commands:**
```bash
npm run validate        # Valida estrutura do squad
npm run count-lines     # Conta linhas de agentes (min 400)
npm run quality-gate    # Executa 7 quality gates
npm run check-workflows # Verifica integridade de workflows
npm run audit           # Audit completo (validate + count + quality + workflows)
npm run full-audit      # Audit + build-and-audit
```

**Dependencies:** yaml, zod, chalk, commander, glob

---

## O que este squad entrega

Sites médicos que são **genuinamente extraordinários**: mais sofisticados que a maioria dos sites corporativos, mais acolhedores que a média da área médica, e em perfeita conformidade com CFM, CONAR e LGPD.

**Taxa de conversão alvo:** > 4% (tráfego orgânico) / > 8% (tráfego pago)
**Conformidade:** 100% CFM Resolução 2.336/2023 + LGPD Art. 11
**Design tier:** S+++ — Clinical Luxury (beyond Apple, adapted for medical trust)
**Performance:** Lighthouse Mobile ≥ 90 | CWV Verde | LCP < 2.5s

---

## Sistema de Design: Clinical Luxury

Baseado na metodologia **Atomic Design de Brad Frost**, o sistema "Clinical Luxury" é:
- **5 níveis:** Átomos → Moléculas → Organismos → Templates → Páginas
- **Design tokens OKLCH:** CSS Color Level 4, perceptualmente uniforme
- **Tipografia variável:** Fraunces (display) + Plus Jakarta Sans (headings) + Inter (body)
- **Motion purposeful:** "Breath of the System" — calmo, médico, confiável
- **Acessibilidade nativa:** WCAG 2.1 AA em todos os componentes

---

## Squad Composition

| Agente | Persona | Especialidade |
|--------|---------|--------------|
| `medical-prd-architect` | Camila Santos | PRDs, briefing, patient journey |
| `medical-briefing-strategist` | Dra. Ana Claudia | Marketing médico, estratégia CFM/CONAR |
| `cfm-compliance-sentinel` | Dr. Eduardo Leal | CFM 2.336/2023, LGPD Art. 11, CONAR |
| `medical-design-system` | Valentina Cruz | Design tokens, Clinical Luxury System |
| `medical-atomic-design-architect` | Bruno Nakamura | Atomic Design, component specs |
| `medical-ui-artisan` | Felipe Torres | Next.js + Tailwind v4, implementação S+++ |
| `medical-ux-architect` | Beatriz Ramos | Patient-centered UX, flows, wireframes |
| `medical-copywriter` | Marina Silveira | Copy humanizada CFM-compliant |
| `medical-content-curator` | Isabela Nunes | Conteúdo educativo baseado em evidências |
| `medical-seo-specialist` | Rafael Alves | SEO local, E-E-A-T, Schema.org healthcare |
| `medical-frontend-builder` | Thiago Azevedo | Next.js, Schema, LGPD, performance |
| `medical-integration-engineer` | Lucas Cunha | Agendamento, WhatsApp, GA4, LGPD CMP |
| `medical-cro-optimizer` | Leonardo Pimentel | CRO ético, A/B testing, funil |
| `medical-qa-auditor` | Renata Fonseca | QA CFM/LGPD/WCAG, técnico |
| `medical-deployment-agent` | Gabriel Matos | Vercel, CI/CD, monitoramento |

---

## Workflows Disponíveis

| Workflow | Duração | Uso |
|----------|---------|-----|
| `medical-landing-primary` | 3-4 semanas | Projeto completo do zero |
| `medical-design-sprint` | 5 dias | Redesign ou design system |
| `medical-quick-launch` | 1 semana | MVP rápido com template |

---

## Tasks Disponíveis

| Task | Agente | Output |
|------|--------|--------|
| `medical-briefing-task` | PRD Architect | Briefing completo |
| `medical-design-tokens-task` | Design System | `styles/tokens.css` |
| `medical-atomic-components-task` | Atomic Architect | Component specs |
| `medical-copy-framework-task` | Copywriter | Copy CFM-aprovada |
| `medical-compliance-audit-task` | CFM Sentinel | Compliance Clearance |
| `medical-seo-strategy-task` | SEO Specialist | Keywords + schema |
| `medical-build-landing-task` | UI Artisan | Site implementado |
| `medical-landing-primary-task` | Orquestrador | Projeto completo |

---

## Checklists

| Checklist | Quando usar |
|-----------|-------------|
| `cfm-2336-2023-checklist` | Antes de publicar qualquer copy |
| `lgpd-health-data-checklist` | Antes do go-live |
| `design-quality-s-tier-checklist` | Revisão de cada componente/seção |
| `launch-readiness-checklist` | 48h antes do lançamento |
| `accessibility-wcag21-medical-checklist` | QA de acessibilidade |

---

## Templates

| Template | Uso |
|----------|-----|
| `medical-briefing-template` | Coleta de informações do cliente |
| `landing-page-sections-template` | Estrutura seção por seção |
| `copy-framework-by-specialty-template` | Copy por especialidade médica |
| `design-tokens-template.yaml` | Base para novos tokens |

---

## Tech Stack

```
Next.js 15+      → Framework (App Router, Server Components)
Tailwind CSS v4  → Styling (CSS-first, OKLCH, container queries)
TypeScript 5+    → strict mode obrigatório
Framer Motion 12 → Animações
Zod + RHF 8     → Forms + validação
next/image       → AVIF/WebP, lazy, blur
next/font        → Variable fonts, zero FOUT
Resend           → Email transacional
Vercel           → Hosting, CDN, preview deploys
Playwright       → E2E + accessibility testing
GA4              → Analytics (consent-gated)
Sentry           → Error tracking
```

---

## Conformidade Legal

| Regulamentação | Status |
|---------------|--------|
| CFM Resolução 2.336/2023 | ✅ Cobertura completa |
| CONAR Guidelines Healthcare | ✅ Cobertura completa |
| LGPD Art. 11 (dados sensíveis de saúde) | ✅ Cobertura completa |
| WCAG 2.1 Level AA | ✅ Implementado em todos componentes |
| Schema.org Healthcare Markup | ✅ MedicalBusiness + Physician |
| Core Web Vitals | ✅ Targets: LCP < 2.5s, CLS = 0, INP < 200ms |

---

## Início Rápido

```bash
# Ativar o squad completo
@medical — inicia o fluxo de trabalho

# Ativar agente específico
@medical-design-system
@medical-copywriter
@cfm-compliance-sentinel

# Executar workflow completo
*execute medical-landing-primary

# Design sprint (5 dias)
*execute medical-design-sprint
```

---

*Synkra AIOX Medical Landing Squad v2.0*
*S+++ Tier Design • CFM/LGPD Compliant • Brad Frost Atomic Design*
*Última atualização: 2026-03-18*
