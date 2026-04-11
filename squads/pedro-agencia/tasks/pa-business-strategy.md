---
task: pa-business-strategy
agent: pa-sage
description: "Diagnóstico estratégico completo e construção de estratégia de negócio de alto impacto"
inputs: [business-data, financials, market-data, objectives]
outputs: [strategic-diagnosis, growth-strategy, implementation-roadmap, financial-projections]
elicit: true
---

# Task: Business Strategy Completo

## Purpose

Execute this task with excellence following S+++ standards.

## Entrada

```yaml
input:
  context: {from orchestrator or previous task}
  parameters: {}
```

## Saida

```yaml
output:
  artifacts: []
  status: completed
  next_task: {determined by workflow}
```

## Checklist

- [ ] Task objective clearly defined
- [ ] Required inputs available and validated
- [ ] Execution follows established patterns
- [ ] Output artifacts properly formatted
- [ ] Results communicated to user/orchestrator

## Pre-Conditions

- Task agent is activated and ready
- Required context from previous tasks is available
- User has confirmed this task should be executed

## Objetivo
Realizar diagnóstico estratégico profundo e construir estratégia de crescimento baseada em dados — identificando as alavancas de maior impacto e construindo um roadmap de implementação rigoroso.

## Processo de Execução

### Fase 1 — Diagnóstico de Negócio (Semana 1)
1. `*business-diagnosis --data "{{data}}"` — diagnóstico completo do modelo de negócio
2. Análise de unit economics: CAC, LTV, LTV:CAC, Payback Period, churn
3. Análise de P&L: margens brutas, operacionais, EBITDA por linha de produto/serviço
4. Mapeamento da cadeia de valor: onde está o verdadeiro diferencial
5. `*runway-analysis --financials "{{financials}}"` — análise de runway e burn rate

Entregável: Business Diagnosis Report com Unit Economics

### Fase 2 — Análise de Mercado (Semana 1)
6. `*market-sizing --segment "{{segment}}"` — TAM/SAM/SOM analysis
7. Análise de forças: Porter's Five Forces
8. Mapeamento do ecossistema: players, parceiros, disruptores
9. Tendências macro: tecnológicas, regulatórias, comportamentais
10. `*competitive-moat --analysis deep` — análise de moat competitivo

Entregável: Market Analysis + Competitive Moat Assessment

### Fase 3 — Análise SWOT Estratégica (Semana 1-2)
11. `*swot-analysis --strategic true` — SWOT conectado à estratégia
12. Strengths: recursos únicos e capacidades defensáveis
13. Weaknesses: vulnerabilidades críticas vs aceitáveis
14. Opportunities: por onde o mercado vai crescer
15. Threats: o que pode destruir o negócio nos próximos 3 anos

Entregável: SWOT Estratégico com Implicações

### Fase 4 — Definição de Estratégia (Semana 2)
16. `*strategy-options --framework growth-matrix` — explorar opções estratégicas
17. Análise de Ansoff: penetração, desenvolvimento de produto/mercado, diversificação
18. Escolha de estratégia genérica: diferenciação, custo ou nicho
19. `*growth-levers --prioritized true` — identificar e priorizar alavancas de crescimento
20. Definir Strategic Bets: 3-5 apostas estratégicas de longo prazo

Entregável: Growth Strategy Document + Strategic Bets

### Fase 5 — Roadmap de Implementação (Semana 2-3)
21. `*roadmap --horizon 90d-1y-3y` — construir roadmap em 3 horizontes
22. Quick Wins (0-90 dias): impacto imediato com esforço baixo
23. Mid-term (90 dias - 1 ano): iniciativas de alto impacto
24. Long-term (1-3 anos): transformações estruturais
25. `*resource-requirements --initiatives all` — mapear recursos necessários

Entregável: Strategic Roadmap 3 Horizontes + Resource Plan

### Fase 6 — Projeções Financeiras (Semana 3)
26. `*financial-projections --scenarios 3` — construir 3 cenários: pessimista, base, otimista
27. Projeção de receita por canal/produto por 24 meses
28. Projeção de custos e investimentos necessários
29. Break-even analysis e milestone financeiro

Entregável: Financial Model (Excel/Sheets) com 3 Cenários

### Fase 7 — Apresentação Executiva (Semana 3-4)
30. `*executive-deck --format c-suite` — criar apresentação executiva
31. Estrutura: Diagnóstico → Oportunidade → Estratégia → Roadmap → ROI
32. Facilitação de workshop de alinhamento estratégico

Entregável: Executive Strategy Deck + Workshop Facilitado

## Comandos Disponíveis
- `*business-diagnosis` — Diagnóstico completo do modelo de negócio
- `*runway-analysis` — Análise de runway e burn rate
- `*market-sizing` — TAM/SAM/SOM por segmento
- `*competitive-moat` — Análise de vantagem competitiva defensável
- `*swot-analysis` — SWOT estratégico conectado à ação
- `*strategy-options` — Explorar opções estratégicas
- `*growth-levers` — Identificar e priorizar alavancas de crescimento
- `*roadmap` — Construir roadmap em múltiplos horizontes
- `*financial-projections` — Projeções financeiras em múltiplos cenários
- `*executive-deck` — Criar apresentação executiva

## Critérios de Conclusão
- [ ] Unit economics calculados e documentados
- [ ] TAM/SAM/SOM mapeados para o segmento
- [ ] Strategic Bets definidos e alinhados com liderança
- [ ] Roadmap de 3 horizontes aprovado
- [ ] Projeções financeiras em 3 cenários
- [ ] Apresentação executiva aprovada e apresentada
- [ ] Workshop de alinhamento estratégico facilitado
