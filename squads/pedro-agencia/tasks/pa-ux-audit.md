---
task: pa-ux-audit
agent: pa-nexus
description: "Auditoria completa de UX/CRO — diagnóstico de experiência digital e oportunidades de conversão"
inputs: [website-url, analytics-data, heatmaps, session-recordings, conversion-goals]
outputs: [ux-audit-report, cro-opportunities, priority-fixes, ab-test-roadmap]
elicit: true
---

# Task: UX Audit e CRO Analysis

## Objetivo
Identificar todos os pontos de fricção, vazamentos de conversão e oportunidades de otimização na experiência digital — com priorização por impacto e esforço para maximizar o ROI das melhorias.

## Processo de Execução

### Fase 1 — Coleta de Dados (Dia 1-2)
1. `*analytics-deep-dive --ga4 true` — análise profunda de GA4: funil, comportamento, saídas
2. Heatmaps: análise de cliques, scroll depth, mouse movement
3. Session recordings: assistir 50+ gravações de sessões reais
4. `*form-analysis --conversion-rate true` — analisar todos os formulários
5. `*speed-audit --tools pagespeed,gtmetrix` — auditoria de performance e velocidade

Entregável: Quantitative Data Analysis + Session Insights

### Fase 2 — Heuristic Evaluation (Dia 2-3)
6. `*heuristic-review --framework nielsen` — avaliação heurística completa (10 heurísticas de Nielsen)
7. Consistência: visual, interacional, linguagem, feedback
8. Visibilidade: status do sistema, hierarquia, scannability
9. Controle: undo/redo, navegação, erros
10. `*cognitive-load-analysis --pages all` — análise de carga cognitiva por página

Entregável: Heuristic Evaluation Report com Severidade (1-4)

### Fase 3 — Análise de Funil (Dia 3-4)
11. `*funnel-analysis --steps all` — mapear e analisar cada passo do funil
12. Drop-off rate por etapa: onde os usuários abandonam
13. `*micro-conversion-tracking --events all` — micro-conversões que indicam intenção
14. Comparativo: tráfego orgânico × pago × direto × email (comportamento diferente)
15. `*segmented-analysis --device,traffic-source` — análise segmentada por device e fonte

Entregável: Funnel Analysis com Drop-off por Etapa

### Fase 4 — Análise de Experiência Qualitativa (Dia 4-5)
16. `*user-journey-mapping --persona "{{persona}}"` — mapear jornada real do usuário
17. Pain points emocionais e funcionais em cada touchpoint
18. Jobs to be Done: o que o usuário realmente tenta realizar
19. `*trust-signals-audit --credibility true` — auditar sinais de credibilidade e confiança
20. `*social-proof-analysis --placement,visibility` — análise de prova social e posicionamento

Entregável: User Journey Map + Pain Points Prioritizados

### Fase 5 — CRO Opportunity Analysis (Dia 5-6)
21. `*cro-opportunities --framework PIE` — listar oportunidades de CRO com score PIE
22. Potential × Importance × Ease (1-10 cada)
23. Categorizar: quick wins, projetos médios, grandes reformas
24. `*revenue-impact --opportunities all` — calcular impacto potencial de cada oportunidade
25. Priorizar top 20 oportunidades para o roadmap

Entregável: CRO Opportunity List com Score PIE + Revenue Impact

### Fase 6 — Roadmap de Testes (Dia 6-7)
26. `*ab-test-roadmap --quarter Q1` — criar roadmap de testes A/B para o trimestre
27. Para cada teste: hipótese, métrica primária, sample size, duração
28. Sequência de testes: do mais impactante para o menos impactante
29. `*test-prioritization --iceberg true` — priorizar testes visíveis e invisíveis

Entregável: A/B Test Roadmap com Hipóteses Documentadas

### Fase 7 — Relatório e Apresentação (Dia 7-8)
30. `*ux-audit-report --format executive` — compilar relatório executivo
31. Executive summary: 3 problemas críticos + impacto potencial
32. Quick wins: o que implementar imediatamente (< 1 semana)
33. Presenting to client: workshop colaborativo de priorização

Entregável: UX Audit Report + Apresentação ao Cliente

## Comandos Disponíveis
- `*analytics-deep-dive` — Análise profunda de dados de analytics
- `*heuristic-review` — Avaliação heurística baseada em Nielsen
- `*funnel-analysis` — Análise detalhada de funil de conversão
- `*user-journey-mapping` — Mapeamento de jornada real do usuário
- `*trust-signals-audit` — Auditoria de credibilidade e confiança
- `*cro-opportunities` — Lista de oportunidades de CRO com score PIE
- `*ab-test-roadmap` — Roadmap de testes A/B do trimestre
- `*revenue-impact` — Cálculo de impacto potencial de receita

## Critérios de Conclusão
- [ ] Mínimo 50 session recordings analisadas
- [ ] Heuristic evaluation completa com severidade
- [ ] Funnel analysis com drop-off por etapa documentado
- [ ] Top 20 oportunidades CRO com score PIE
- [ ] A/B test roadmap do trimestre com hipóteses
- [ ] Quick wins listados e atribuídos para implementação imediata
- [ ] Relatório apresentado ao cliente com aprovação de prioridades
