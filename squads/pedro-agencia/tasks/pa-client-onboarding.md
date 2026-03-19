---
task: pa-client-onboarding
agent: pa-empire
description: "Conduz o onboarding completo de um novo cliente da assinatura ao primeiro relatório"
inputs: [contract-signed, client-info, objectives, current-state]
outputs: [strategic-plan-90d, analytics-setup, success-plan, first-deliverables]
elicit: true
---

# Task: Client Onboarding Completo

## Objetivo
Garantir que cada novo cliente da agência seja integrado de forma impecável — com diagnóstico profundo, estratégia sólida e clareza total sobre o que será entregue e quando.

## Processo de Execução

### Fase 1 — Kickoff (Dia 1)
**pa-empire** executa:
1. `*kickoff-prep --client "{{client}}"` — preparar materiais e agenda
2. Conduzir kickoff meeting: objetivos, expectativas, constraints, success metrics
3. `*brief-collection --format structured` — coletar brief completo estruturado
4. Definir canais de comunicação, frequência de reuniões, formato de relatórios

Entregável: Project Brief + Communication Protocol + Team Introductions

### Fase 2 — Diagnóstico Paralelo (Dias 2-5)
**pa-empire** orquestra em paralelo:

**pa-sage:**
5. `*business-diagnosis --client "{{client}}"` — diagnóstico estratégico completo
6. Análise de unit economics, competitive landscape, growth opportunities

**pa-oracle:**
7. `*brand-audit --depth full` — auditoria completa de marca e posicionamento
8. Benchmark com principais concorrentes diretos e indiretos

**pa-prism:**
9. `*analytics-setup --channels all` — configurar GA4, pixels, UTMs
10. `*baseline-collection --period 12m` — coletar histórico de 12 meses

Entregável: Audit Reports × 3 + Analytics Live

### Fase 3 — Diagnóstico de Canais (Dias 3-7)
Em paralelo com Fase 2:

**pa-vertex:**
11. `*seo-audit --site "{{site}}"` — auditoria técnica de SEO

**pa-profit:**
12. `*paid-audit --accounts all` — auditoria de campanhas pagas existentes

**pa-pulse:**
13. `*social-audit --channels all` — auditoria de presença em social media

**pa-inbox:**
14. `*email-audit --platform "{{platform}}"` — auditoria de email marketing

Entregável: Channel Audit Reports × 4

### Fase 4 — Síntese Estratégica (Dia 8-10)
15. `*synthesis --inputs all-audits` — sintetizar diagnósticos em plano estratégico
16. Definir prioridades por impacto e esforço
17. Construir roadmap de 90 dias com milestones
18. `*budget-recommendation --channels "{{channels}}"` — recomendar alocação de budget

Entregável: Strategic Plan 90 Days + Priority Roadmap

### Fase 5 — Aprovação (Dia 10-12)
19. Apresentação do Plano Estratégico ao cliente
20. Coleta de feedback e ajustes
21. `*approval-gate --deliverable strategic-plan` — aprovação formal
22. Definição final de KPIs e targets por canal

Entregável: Approved Strategic Plan

### Fase 6 — Briefing da Equipe (Dia 12-14)
23. `*team-briefing --plan strategic-plan` — briefar todos os agentes
24. Definir responsáveis, entregáveis e prazos por agente
25. Configurar ferramentas e acessos necessários

Entregável: Agent Briefs + Delivery Calendar

### Fase 7 — Success Plan (Dia 14)
**pa-anchor:**
26. `*success-plan --client "{{client}}"` — criar Customer Success Plan
27. Configurar touchpoints mensais e trimestrais
28. Definir health score e alertas de churn

Entregável: Success Plan + Touchpoint Calendar + Health Score Setup

## Comandos Disponíveis
- `*kickoff-prep` — Preparar materiais e agenda de kickoff
- `*brief-collection` — Coletar brief estruturado completo
- `*synthesis` — Sintetizar diagnósticos em plano estratégico
- `*approval-gate` — Gerenciar aprovação com cliente
- `*team-briefing` — Briefar equipe de agentes
- `*budget-recommendation` — Recomendar alocação de budget

## Critérios de Conclusão
- [ ] Kickoff realizado e aprovado pelo cliente
- [ ] Analytics configurado e baseline coletado (semana 1)
- [ ] Todos os diagnósticos entregues dentro do prazo
- [ ] Strategic Plan aprovado pelo cliente
- [ ] Equipe briefada com responsabilidades e prazos
- [ ] Success Plan ativo e touchpoints agendados
- [ ] Primeiro relatório entregue na semana 3
- [ ] NPS de onboarding >= 9/10
