---
task: pa-ad-creatives
agent: pa-canvas
description: "Produção de criativos de anúncio para todos os canais — display, social, video e OOH"
inputs: [campaign-concept, creative-brief, ad-copy, media-plan, brand-guidelines]
outputs: [ad-creatives-all-formats, creative-variations, a-b-test-assets]
elicit: true
---

# Task: Ad Creatives Produção

## Objetivo
Criar criativos de anúncio que param o scroll, comunicam a mensagem e convertem — em todos os formatos e plataformas especificados no plano de mídia, com qualidade de agência top tier.

## Processo de Execução

### Fase 1 — Especificações e Planning (Dia 1)
1. `*ad-specs --platforms "{{platforms}}"` — levantar todas as especificações por plataforma
2. Meta Ads: 1:1, 4:5, 9:16, 1.91:1 (estáticos + vídeo + carousel)
3. Google Display: múltiplos tamanhos responsive + formatos HTML5
4. TikTok: 9:16 vertical, 15s/30s/60s
5. LinkedIn: 1.91:1, 1:1 (single image, carousel, video)
6. YouTube: 16:9 (bumper 6s, skip 15s+, non-skip 15s)
7. `*production-schedule --timeline "{{timeline}}"` — criar cronograma de produção

Entregável: Ad Specs Matrix + Production Schedule

### Fase 2 — Hero Creative (Dia 2-4)
8. `*hero-creative --concept "{{concept}}"` — criar criativo principal da campanha
9. Key visual: a imagem que define a campanha
10. Tratamento visual: filtro, composição, tipografia, espaçamento
11. `*hero-variations --formats all` — adaptar para todos os formatos
12. QA visual: contraste, legibilidade, brand compliance

Entregável: Hero Creative em Todos os Formatos

### Fase 3 — Estáticos por Canal (Dia 4-6)
13. `*static-ads --channel meta` — set completo de estáticos para Meta
14. `*static-ads --channel google-display` — set para Google Display
15. `*static-ads --channel linkedin` — set para LinkedIn
16. Para cada canal: mínimo 3 variações de design por formato
17. `*creative-diversity --goal avoid-fatigue` — garantir variedade para evitar ad fatigue

Entregável: Static Ads Completos por Canal

### Fase 4 — Criativos Dinâmicos (Dia 6-7)
18. `*carousel-ads --story-format true` — criar sets de carousel com narrativa
19. Collection ads para e-commerce (se aplicável)
20. `*dynamic-creative --variables headline,image,cta` — elementos para DCO
21. Templates para personalização por audiência/segmento

Entregável: Dynamic Creative Templates + Carousel Sets

### Fase 5 — Criativos em Vídeo (Dia 7-10)
22. `*video-creative-brief --concept "{{concept}}"` — brief detalhado para produção
23. Motion graphics: animar key visual com tipografia dinâmica
24. `*ugc-style --authenticity high` — criativos estilo UGC para TikTok/Reels
25. Story ads: sequência de 3 telas com narrativa
26. Bumper ads (6s): mensagem única e impactante

Entregável: Video Creatives + Motion Graphics + Scripts para UGC

### Fase 6 — A/B Test Assets (Dia 10-11)
27. `*ab-creative-variants --elements hook,visual,cta` — criar variantes para teste
28. Testar: pelo menos 3 hooks diferentes por campanha
29. Testar: image-based vs illustration-based vs typography-heavy
30. `*test-matrix --hypothesis "{{hypothesis}}"` — documentar hipóteses de teste

Entregável: A/B Test Assets (mínimo 6 variantes por campanha)

### Fase 7 — Export e Organização (Dia 11-12)
31. `*asset-export --format production-ready` — exportar em especificações corretas
32. Organizar por: plataforma → formato → variante
33. `*asset-naming --convention standard` — nomear arquivos com convenção clara
34. Criar briefing para team de ads com como usar cada criativo

Entregável: Asset Library Organizada + Export-Ready Files

## Comandos Disponíveis
- `*ad-specs` — Levantar especificações técnicas por plataforma
- `*hero-creative` — Criar criativo principal da campanha
- `*static-ads` — Produzir estáticos completos por canal
- `*carousel-ads` — Criar sets de carousel com narrativa
- `*dynamic-creative` — Elementos para Dynamic Creative Optimization
- `*video-creative-brief` — Brief para produção de vídeo
- `*ugc-style` — Criativos com aparência autêntica de UGC
- `*ab-creative-variants` — Criar variantes para teste A/B
- `*asset-export` — Exportar assets em specs de produção

## Critérios de Conclusão
- [ ] Todos os formatos do media plan cobertos
- [ ] Mínimo 3 variações de design por canal
- [ ] Hero creative aprovado antes de escalar para outros formatos
- [ ] Assets exportados nas specs corretas por plataforma
- [ ] A/B test variants (mínimo 6) prontas para upload
- [ ] Asset library organizada com naming convention
- [ ] Briefing de uso compartilhado com equipe de ads
