---
task: pa-campaign-full
agent: pa-empire
description: "Orquestra uma campanha completa 360° do briefing ao relatório final"
inputs: [client-brief, budget, timeline, objectives]
outputs: [campaign-strategy, creative-assets, media-plan, launch-report]
elicit: true
---

# Task: Campanha Completa 360°

## Objetivo
Criar e executar uma campanha de marketing integrada com todos os agentes do squad.

## Processo de Orquestração

### Fase 1 — Briefing e Estratégia (Semana 1)
**pa-empire** recebe o brief e orquestra:

1. **pa-oracle:** `*positioning-review --campaign "{{campaign}}"` — valida posicionamento
2. **pa-sage:** `*business-diagnosis --focus campaign-readiness` — alinha com objetivos de negócio
3. **pa-prism:** `*baseline-measurement --channels "{{channels}}"` — coleta baseline de métricas

Entregável: Campaign Strategy Document

### Fase 2 — Criação (Semana 2-3)
**pa-genesis** lidera com:

4. **pa-genesis:** `*campaign-concept --brief "{{brief}}"` — 3 direções criativas
5. **pa-quill:** `*campaign-copy --direction "{{approved}}"` — copy completa por canal
6. **pa-canvas:** `*campaign-visual --direction "{{approved}}"` — sistema visual
7. **pa-frame:** `*video-brief --campaign "{{campaign}}"` — briefing de vídeos (se aplicável)
8. **pa-nexus:** `*landing-page-design --campaign "{{campaign}}"` — LP da campanha

Entregável: Creative Kit completo

### Fase 3 — Distribuição (Semana 3)
**pa-empire** coordena a distribuição:

9. **pa-compass:** `*media-plan --budget "{{budget}}" --period "{{period}}"` — plano de mídia
10. **pa-profit:** `*campaign-setup --channels "{{paid_channels}}"` — setup de mídia paga
11. **pa-pulse:** `*campaign-social --platforms "{{platforms}}"` — estratégia social
12. **pa-inbox:** `*launch-campaign --product "{{product}}" --date "{{launch_date}}"` — email sequence
13. **pa-vertex:** `*on-page-optimization --pages "{{landing_pages}}"` — SEO da campanha
14. **pa-aegis:** `*media-pitch --story "{{story}}" --campaign "{{campaign}}"` — PR da campanha

Entregável: Campaign Live em todos os canais

### Fase 4 — Monitoramento (Duração da campanha)
**pa-prism:** `*campaign-analytics --period "{{period}}"` — relatório semanal

### Fase 5 — Relatório Final (Pós-campanha)
**pa-prism + pa-empire:** Compilam o relatório final com:
- Resultados vs. KPIs
- ROI por canal
- Insights e aprendizados
- Recomendações para próxima campanha

## Critérios de Conclusão
- [ ] Todos os criativos aprovados pelo cliente antes do go-live
- [ ] Tracking configurado (UTMs, pixels, eventos) antes do lançamento
- [ ] Todos os canais ao vivo dentro do prazo
- [ ] Relatório final entregue em 5 dias úteis após o fim da campanha
- [ ] Aprendizados documentados para próximas campanhas
