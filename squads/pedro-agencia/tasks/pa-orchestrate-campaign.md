---
task: pa-orchestrate-campaign
agent: pa-empire
description: "Orquestra uma campanha completa de ponta a ponta como CEO da agência"
inputs: [client-brief, budget, timeline, objectives, target-audience]
outputs: [campaign-strategy, resource-plan, kpi-matrix, launch-report]
elicit: true
---

# Task: Orquestrar Campanha Completa

## Objetivo
Atuar como CEO e orquestrador-chefe de uma campanha de marketing integrada 360°, garantindo excelência em cada entrega e alinhamento estratégico entre todos os agentes.

## Processo de Execução

### Fase 1 — War Room (Dia 1)
**pa-empire** executa:
1. `*brief-intake --client "{{client}}" --budget "{{budget}}"` — validar e expandir brief
2. `*kpi-matrix --objectives "{{objectives}}"` — definir KPIs por canal e prazo
3. `*resource-allocation --timeline "{{timeline}}"` — alocar agentes e responsabilidades
4. `*risk-assessment --campaign "{{campaign}}"` — identificar e mitigar riscos

Entregável: Campaign War Room Document + KPI Matrix + Resource Plan

### Fase 2 — Briefing de Equipe (Dia 1-2)
**pa-empire** coordena:
5. Brief estratégico para **pa-oracle** (brand fit)
6. Brief estratégico para **pa-genesis** (direção criativa)
7. Brief estratégico para **pa-quill** (copy strategy)
8. Brief estratégico para **pa-profit** (mídia paga)
9. Brief estratégico para **pa-prism** (analytics setup)

Entregável: Agent Brief Documents × 5+ agentes

### Fase 3 — Aprovação de Estratégia (Dia 3-5)
10. `*strategy-review --agents all` — compilar estratégias dos agentes
11. Apresentação ao cliente: posicionamento, conceito criativo, plano de mídia
12. `*approval-gate --stakeholders "{{stakeholders}}"` — coletar aprovações

Entregável: Approved Campaign Strategy Deck

### Fase 4 — Acompanhamento de Produção (Semana 2-3)
13. Daily standup virtual com todos os agentes
14. `*milestone-check --week {{week}}` — verificar entregas vs cronograma
15. Resolve blockers em < 4 horas
16. Apresentações de progresso ao cliente 2x/semana

Entregável: Weekly Progress Reports + Client Updates

### Fase 5 — Go-Live e Monitoramento
17. `*launch-checklist` — verificar 100% dos itens antes do go-live
18. `*launch-command --date "{{date}}"` — coordenar ativação simultânea de todos os canais
19. War Room de monitoramento das primeiras 48h
20. `*performance-alert --threshold 20%` — alertas de anomalia automáticos

Entregável: Launch Report + Real-time Dashboard

### Fase 6 — Relatório Final
21. `*campaign-debrief` — compilar resultados de todos os agentes
22. ROI analysis por canal e total
23. Learnings e recomendações documentadas
24. Apresentação final ao cliente

Entregável: Final Campaign Report + Client Presentation

## Comandos Disponíveis
- `*brief-intake` — Processar e expandir brief recebido
- `*kpi-matrix` — Construir matriz de KPIs por objetivo e canal
- `*resource-allocation` — Alocar agentes e responsabilidades
- `*risk-assessment` — Mapear e mitigar riscos da campanha
- `*strategy-review` — Revisar estratégias consolidadas dos agentes
- `*approval-gate` — Gerenciar processo de aprovação com cliente
- `*milestone-check` — Verificar entregas vs cronograma
- `*launch-checklist` — Checklist completo pré-lançamento
- `*launch-command` — Coordenar lançamento simultâneo em todos os canais
- `*performance-alert` — Configurar alertas de anomalia
- `*campaign-debrief` — Compilar relatório final da campanha

## Critérios de Conclusão
- [ ] Brief validado e aprovado por todos os stakeholders
- [ ] KPIs definidos com targets específicos por canal
- [ ] Todos os agentes briefados com responsabilidades claras
- [ ] Estratégia aprovada pelo cliente antes da produção
- [ ] 100% das entregas on-time e on-brief
- [ ] Tracking funcionando antes do go-live
- [ ] Relatório final entregue em D+5 pós-campanha
- [ ] Learnings documentados para próximas campanhas
