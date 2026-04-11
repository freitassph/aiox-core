---
task: pa-growth-sprint
agent: pa-rocket
description: "Sprint de growth de 30/60/90 dias com experimentos estruturados e métricas de resultado"
inputs: [product-data, current-metrics, growth-goals]
outputs: [growth-strategy, experiment-backlog, sprint-results]
elicit: true
---

# Task: Growth Sprint

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
Executar um sprint estruturado de growth com hipóteses, experimentos e resultados mensuráveis.

## Processo de Execução

### Fase 1 — Diagnóstico (Dias 1-5)
**pa-rocket** executa:
1. `*growth-audit --product "{{product}}" --data "{{data}}"` — diagnóstico AARRR
2. `*pmf-audit --product "{{product}}"` — avaliação de product-market fit
3. `*north-star --product "{{product}}" --goal "{{goal}}"` — definição da North Star Metric

**pa-prism** suporta com:
4. `*funnel-analysis --steps "{{funnel}}"` — análise do funil atual
5. `*cohort-analysis --metric retention --period 90d` — análise de retenção

Entregável: Growth Audit Report + Baseline de métricas

### Fase 2 — Backlog de Experimentos (Dias 5-7)
**pa-rocket:**
6. `*experiment-backlog --focus "{{focus}}" --budget "{{budget}}"` — lista de 20+ experimentos
7. Priorização ICE: Impact, Confidence, Ease (score 1-10 cada)
8. Seleção dos top 5-10 para o sprint

Entregável: Experiment Backlog priorizado

### Fase 3 — Execução (Dias 8 até fim do sprint)
Para cada experimento selecionado:

**pa-rocket** define:
- Hipótese clara: "Se X, então Y porque Z"
- Métrica primária e secundárias
- Sample size mínimo e duração

Agentes executores:
- **pa-profit:** Experimentos de ads pagos
- **pa-pulse:** Experimentos de social media
- **pa-inbox:** Experimentos de email
- **pa-nexus:** Experimentos de CRO/UX
- **pa-vertex:** Experimentos de SEO

**pa-prism:** Monitora resultados semanalmente

### Fase 4 — Análise e Aprendizados (Últimos 3 dias)
**pa-rocket + pa-prism:**
9. Análise de cada experimento (stat. sig.? efeito? side effects?)
10. Experiment Log atualizado (wins + losses + aprendizados)
11. Recomendações para próximo sprint

## Critérios de Conclusão
- [ ] North Star Metric definida e acordada com cliente
- [ ] Pelo menos 5 experimentos executados durante o sprint
- [ ] Cada experimento com resultados documentados no Experiment Log
- [ ] ROI do sprint calculado (crescimento gerado vs. investimento)
- [ ] Backlog do próximo sprint já priorizado
