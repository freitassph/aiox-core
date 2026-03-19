---
task: pa-content-engine
agent: pa-chronicle
description: "Ativa o motor de conteúdo completo — do planejamento à publicação em todos os canais"
inputs: [brand-strategy, keyword-research, audience-personas]
outputs: [content-strategy, editorial-calendar, published-content, analytics-report]
elicit: true
---

# Task: Content Engine Completo

## Objetivo
Criar e operacionalizar o motor de conteúdo que gera tráfego, autoridade e leads de forma contínua.

## Processo de Execução

### Fase 1 — Auditoria e Estratégia (Semana 1)
**pa-chronicle:**
1. `*content-audit --site "{{site}}"` — inventário do conteúdo existente
2. `*content-strategy --brand "{{brand}}" --goals "{{goals}}"` — estratégia mestra

**pa-vertex:**
3. `*keyword-research --topic "{{topic}}" --market "{{market}}"` — pesquisa de keywords
4. `*topic-clusters --niche "{{niche}}"` — arquitetura de clusters

Entregável: Content Strategy + Keyword Map

### Fase 2 — Arquitetura (Semana 2)
**pa-chronicle:**
5. `*content-hub-design --domain "{{domain}}" --topics "{{topics}}"` — arquitetura de hub
6. `*editorial-policy --brand "{{brand}}"` — guidelines editoriais

**pa-vertex:**
7. `*content-gap-analysis --site "{{site}}" --competitors "{{competitors}}"` — gap de conteúdo

Entregável: Content Hub Architecture + Content Gap Report

### Fase 3 — Calendário e Briefs (Semana 2-3)
**pa-chronicle:**
8. `*editorial-calendar --period quarterly --channels blog|social|email|video` — calendário 90 dias
9. Criação de content briefs para cada peça prioritária

Entregável: Editorial Calendar + 10 Content Briefs

### Fase 4 — Produção (Contínuo)
**pa-quill:** Produz copy de todos os artigos e conteúdos
**pa-canvas:** Cria assets visuais (thumbnails, infográficos, carrosséis)
**pa-frame:** Produz vídeos (quando no brief)
**pa-pulse:** Adapta para cada plataforma de social

**pa-vertex:** Valida otimização on-page de cada peça antes da publicação

### Fase 5 — Distribuição (Contínuo)
**pa-inbox:** Distribui via newsletter
**pa-pulse:** Distribui via social media
**pa-chronicle:** Gerencia o repurposing (1 peça → múltiplos formatos)
**pa-network:** Amplifica via influencers quando aplicável

### Fase 6 — Analytics (Mensal)
**pa-prism:** `*content-analytics --period monthly` — relatório de performance
**pa-chronicle:** Ajusta calendário baseado em dados

## Critérios de Conclusão
- [ ] Content Strategy document aprovado pelo cliente
- [ ] Calendário editorial de 90 dias publicado e acessível ao time
- [ ] Primeiras 4 peças publicadas com otimização completa
- [ ] Analytics configurado no GA4 com eventos de conteúdo
- [ ] Relatório mensal automatizado configurado
- [ ] Repurposing pipeline funcionando (1 artigo → 5+ formatos)
