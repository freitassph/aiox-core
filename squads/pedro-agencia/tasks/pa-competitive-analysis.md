---
task: pa-competitive-analysis
agent: pa-sage
description: "Análise competitiva profunda — inteligência de mercado para vantagem estratégica"
inputs: [market-segment, competitors-list, business-goals]
outputs: [competitive-intelligence-report, opportunity-map, differentiation-strategy]
elicit: true
---

# Task: Análise Competitiva Profunda

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
Construir inteligência competitiva completa que permita decisões estratégicas superiores — identificando pontos cegos dos concorrentes, oportunidades não exploradas e caminhos para liderança de mercado.

## Processo de Execução

### Fase 1 — Mapeamento de Competidores (Dia 1-2)
1. `*competitor-mapping --segment "{{segment}}"` — mapear todos os players
2. Categorizar: diretos, indiretos, substitutos, entrantes potenciais
3. Priorizar top 5-7 para análise profunda
4. Identificar os "dark horses" — concorrentes sub-radarizados

Entregável: Competitive Landscape Map

### Fase 2 — Inteligência Competitiva (Dia 2-5)
Para cada concorrente prioritário:
5. `*competitor-deep-dive --company "{{company}}"` — análise profunda
6. Modelo de negócio e fontes de receita
7. Positioning e messaging: o que comunicam e como
8. Análise de produto/serviço: features, preço, qualidade
9. Análise de marketing: canais, budget estimado, creative approach
10. Análise de vendas: processo, ICP, deal size estimado
11. Análise digital: SEO, paid, social, email, conteúdo

Entregável: Competitor Profiles × 5-7 empresas

### Fase 3 — Benchmarking de Performance (Dia 5-7)
12. `*digital-benchmark --competitors all` — benchmark digital completo
13. Estimativa de tráfego por canal (Similarweb data)
14. Benchmark de SEO: keywords, backlinks, autoridade
15. Análise de paid: volumes estimados, keywords, creative estratégy
16. Social media: engajamento, crescimento, tipo de conteúdo
17. `*pricing-analysis --competitive true` — análise de pricing strategy

Entregável: Performance Benchmark Report

### Fase 4 — Análise de Forças e Fraquezas (Dia 7-8)
18. `*swot-competitive --format matrix` — SWOT competitivo em matriz
19. Para cada concorrente: onde são fortes e onde são vulneráveis
20. Identificar patterns: o que NINGUÉM faz bem no setor
21. Mapear expectativas não atendidas dos clientes (Jobs to be Done)

Entregável: Competitive SWOT Matrix

### Fase 5 — Mapa de Oportunidades (Dia 8-10)
22. `*opportunity-map --dimensions 2` — construir mapa perceptual bi-dimensional
23. Identificar white spaces: territórios não ocupados por nenhum player
24. Avaliar viabilidade de cada oportunidade: atratividade × dificuldade
25. Priorizar top 3 oportunidades estratégicas

Entregável: Opportunity Map + White Space Analysis

### Fase 6 — Estratégia de Diferenciação (Dia 10-12)
26. `*differentiation-strategy --basis "{{basis}}"` — definir base de diferenciação
27. Escolher 1-2 dimensões onde ser claramente superior
28. Construir narrative de posicionamento contra a concorrência
29. Definir quais battlegrounds evitar (onde concorrente é invencível)

Entregável: Differentiation Strategy + Positioning vs Competitors

### Fase 7 — Relatório de Inteligência Competitiva (Dia 12-14)
30. `*competitive-report --format executive` — compilar relatório executivo
31. Incluir: dashboard de monitoring recomendado para acompanhamento contínuo
32. Early warning system: triggers que sinalizam movimentos competitivos importantes

Entregável: Competitive Intelligence Report + Monitoring Dashboard Setup

## Comandos Disponíveis
- `*competitor-mapping` — Mapear todos os players do mercado
- `*competitor-deep-dive` — Análise profunda por concorrente
- `*digital-benchmark` — Benchmark digital completo
- `*pricing-analysis` — Análise de estratégias de pricing
- `*swot-competitive` — SWOT competitivo em matriz
- `*opportunity-map` — Mapa perceptual de oportunidades
- `*differentiation-strategy` — Definir base de diferenciação

## Critérios de Conclusão
- [ ] Todos os concorrentes relevantes mapeados e categorizados
- [ ] Profiles detalhados dos top 5-7 concorrentes
- [ ] Benchmark de performance digital com dados concretos
- [ ] Oportunidades estratégicas identificadas e priorizadas
- [ ] Estratégia de diferenciação clara e defensável
- [ ] Relatório executivo apresentado ao cliente
- [ ] Sistema de monitoramento competitivo configurado
