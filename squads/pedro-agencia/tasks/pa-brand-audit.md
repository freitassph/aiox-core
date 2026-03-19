---
task: pa-brand-audit
agent: pa-oracle
description: "Auditoria completa e profunda de marca — diagnóstico de posicionamento, identidade e percepção"
inputs: [brand-name, website, social-channels, existing-materials]
outputs: [brand-audit-report, positioning-gaps, competitive-benchmark, action-plan]
elicit: true
---

# Task: Brand Audit Completo

## Objetivo
Realizar diagnóstico cirúrgico da marca atual — identificando gaps de posicionamento, inconsistências de identidade e oportunidades de fortalecimento que nenhum concorrente explorou.

## Processo de Execução

### Fase 1 — Coleta de Materiais (Dia 1)
1. `*brand-inventory --client "{{client}}"` — inventário de todos os ativos de marca
2. Coletar: logo, paleta, tipografia, tom de voz, messaging, guidelines existentes
3. Mapear todos os touchpoints: site, social, ads, materiais físicos, email
4. Entrevistar stakeholders chave sobre percepção interna da marca

Entregável: Brand Asset Inventory + Stakeholder Insights

### Fase 2 — Análise de Posicionamento (Dia 2-3)
5. `*positioning-analysis --brand "{{brand}}"` — análise de posicionamento atual
6. Mapear propósito, visão, missão, valores — articulados vs praticados
7. Identificar diferenciais reais vs percebidos
8. Verificar consistency em todos os canais

Entregável: Positioning Analysis Document

### Fase 3 — Análise Competitiva (Dia 2-3)
9. `*competitive-brand-analysis --competitors "{{competitors}}"` — análise de marca dos top 5
10. Mapear onde cada concorrente se posiciona no espaço de atributos
11. Identificar white spaces — posicionamentos não ocupados
12. Benchmark visual: design, cor, tipografia, linguagem

Entregável: Competitive Brand Map + White Space Analysis

### Fase 4 — Análise de Audiência (Dia 3-4)
13. `*audience-perception --channels social,reviews,nps` — coletar percepção da audiência
14. Analisar: como a marca é descrita pelo público
15. Identificar: expectativas vs realidade (promise gap)
16. NPS e sentiment analysis de reviews disponíveis

Entregável: Audience Perception Report

### Fase 5 — Análise de Identidade Visual (Dia 4)
17. `*visual-identity-audit --brand "{{brand}}"` — auditoria de identidade visual
18. Análise de consistência: cores, tipografia, logo usage, estilos fotográficos
19. Análise de modernidade: comparar com benchmarks de design do setor
20. Identificar elementos que precisam ser evoluídos

Entregável: Visual Identity Audit Report

### Fase 6 — Análise Verbal (Dia 4-5)
21. `*verbal-identity-audit --channels all` — auditoria de identidade verbal
22. Tom de voz: consistente? diferenciado? autêntico?
23. Taglines e messaging: memorável? unique? ownable?
24. Análise de copy em todos os canais

Entregável: Verbal Identity Audit Report

### Fase 7 — Síntese e Relatório (Dia 5-7)
25. `*brand-health-score --dimensions all` — calcular Brand Health Score
26. Compilar todos os findings em Brand Audit Report
27. Priorizar gaps por impacto no negócio
28. Construir Action Plan com recomendações e timeline

Entregável: Brand Audit Report Completo + Action Plan

## Comandos Disponíveis
- `*brand-inventory` — Inventariar todos os ativos de marca
- `*positioning-analysis` — Analisar posicionamento atual vs ideal
- `*competitive-brand-analysis` — Benchmark de marca com concorrentes
- `*audience-perception` — Analisar percepção da audiência
- `*visual-identity-audit` — Auditar consistência visual
- `*verbal-identity-audit` — Auditar identidade verbal e tom de voz
- `*brand-health-score` — Calcular score de saúde da marca

## Critérios de Conclusão
- [ ] Inventário completo de todos os ativos de marca
- [ ] Análise de posicionamento vs top 5 concorrentes
- [ ] Percepção de audiência coletada e analisada
- [ ] Brand Health Score calculado e documentado
- [ ] Gaps priorizados por impacto no negócio
- [ ] Action Plan com timeline e responsáveis
- [ ] Relatório apresentado e aprovado pelo cliente
