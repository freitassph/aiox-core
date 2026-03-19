---
task: pa-content-copy
agent: pa-quill
description: "Produção de copy de conteúdo — artigos, posts, newsletters e conteúdo editorial"
inputs: [content-strategy, editorial-calendar, brand-voice, seo-briefs, audience-personas]
outputs: [articles, social-posts, newsletters, scripts, thought-leadership-pieces]
elicit: true
---

# Task: Content Copy Produção

## Objetivo
Produzir conteúdo editorial de alto impacto que constrói autoridade, gera tráfego orgânico, engaja a audiência e nutre leads — com qualidade que supera qualquer concorrente no mercado.

## Processo de Execução

### Fase 1 — Briefing e Planejamento (Dia 1)
1. `*content-brief-review --calendar "{{calendar}}"` — revisar e completar briefs de conteúdo
2. Priorizar peças por impacto: SEO traffic potential × brand authority × sales enablement
3. Definir: ângulos únicos para cada peça (não o óbvio)
4. `*angle-discovery --topic "{{topic}}"` — encontrar o ângulo não-óbvio para cada tema

Entregável: Content Production Queue Priorizada + Ângulos por Peça

### Fase 2 — Artigos SEO (por artigo)
5. `*article-outline --topic "{{topic}}" --keyword "{{keyword}}"` — criar outline completo
6. Estrutura H1-H3 com target keywords naturalmente inseridas
7. `*article-writing --length 1500-3000 --depth expert` — escrever artigo completo
8. Elementos obrigatórios: definição clara, exemplos práticos, data points, CTAs
9. `*article-optimization --seo true` — otimização SEO: meta, alt texts, internal links
10. `*article-enhancement --visuals brief` — briefar visuals para pa-canvas

Entregável: SEO Article Completo (por peça planejada)

### Fase 3 — Conteúdo de Social Media (semanal)
11. `*social-content-production --platforms "{{platforms}}"` — produzir batch de posts
12. LinkedIn: thought leadership + data + POV forte
13. Instagram: caption com story + hook + CTA + hashtags estratégicos
14. Twitter/X: threads educacionais + hot takes + reply strategy
15. TikTok: scripts de 30-60s com hook nos primeiros 3 segundos
16. `*content-repurposing --source article` — transformar artigos em posts × formatos

Entregável: Social Content Batch (7-14 dias de conteúdo)

### Fase 4 — Newsletter/Email Editorial (por envio)
17. `*newsletter-writing --format "{{format}}"` — escrever newsletter completa
18. Subject line: 5 opções para A/B test (curiosidade × utilidade × emoção)
19. Pre-header: complementa subject, adiciona context
20. Body: um tema principal, 3 insights, 1 call-to-action claro
21. `*newsletter-curation --sources trusted` — curar conteúdo externo relevante

Entregável: Newsletter Completa por Envio Planejado

### Fase 5 — Thought Leadership (mensal)
22. `*thought-leadership-brief --topic "{{topic}}"` — definir posicionamento de autoridade
23. Long-form essays: 2000-5000 palavras de perspectiva única
24. Industry reports: análise de dados com insights proprietários
25. Manifestos: declarações de posição sobre temas do setor
26. `*ghost-writing --voice "{{voice}}"` — escrever no tom exato do líder/marca

Entregável: Thought Leadership Pieces (formato longo)

### Fase 6 — Scripts de Conteúdo em Vídeo
27. `*video-script-content --format educational` — scripts para conteúdo educacional
28. YouTube: scripts de 8-15 minutos com estrutura clara
29. Reels/Shorts: scripts de 30-60s com hook, conteúdo, CTA
30. Podcast: roteiros de entrevista + key talking points
31. Webinar: deck de apresentação + script de facilitação

Entregável: Video Scripts por Formato e Canal

### Fase 7 — QA e Brand Voice Check (por lote)
32. `*brand-voice-check --guidelines "{{guidelines}}"` — verificar consistência de voz
33. Fact-check: todos os dados, citações e referências verificados
34. SEO check: keywords, densidade, technical SEO compliant
35. Readability: Flesch score appropriado para audiência

Entregável: Conteúdo QA-Approved + Publicação-Ready

## Comandos Disponíveis
- `*content-brief-review` — Revisar e completar briefs de conteúdo
- `*angle-discovery` — Encontrar ângulo não-óbvio para cada tema
- `*article-writing` — Escrever artigo completo com profundidade
- `*article-optimization` — Otimização SEO completa do artigo
- `*social-content-production` — Produzir batch de posts por plataforma
- `*content-repurposing` — Transformar uma peça em múltiplos formatos
- `*newsletter-writing` — Escrever newsletter/email editorial
- `*thought-leadership-brief` — Definir e escrever thought leadership
- `*ghost-writing` — Escrever no tom exato de uma voz específica
- `*video-script-content` — Scripts para conteúdo em vídeo
- `*brand-voice-check` — Verificar consistência de brand voice

## Critérios de Conclusão
- [ ] Todos os artigos do calendário escritos e otimizados
- [ ] Social content 14 dias à frente sempre em estoque
- [ ] Newsletters escritas e agendadas com antecedência
- [ ] Brand voice consistente em todas as peças
- [ ] Todos os dados fact-checked antes da publicação
- [ ] SEO compliance verificado por pa-vertex
