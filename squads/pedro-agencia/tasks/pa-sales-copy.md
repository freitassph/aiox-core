---
task: pa-sales-copy
agent: pa-quill
description: "Produção de copy de vendas de alta conversão — anúncios, páginas de vendas e funis"
inputs: [product-brief, audience-persona, offer, competitors-copy, usp]
outputs: [ads-copy, sales-page-copy, email-sequence, video-scripts, a-b-variants]
elicit: true
---

# Task: Sales Copy de Alta Conversão

## Objetivo
Criar copy de vendas irresistível que move prospects de "talvez" para "onde eu pago?" — aplicando os frameworks dos maiores copywriters da história para maximizar conversão em cada touchpoint.

## Processo de Execução

### Fase 1 — Research Profundo (Dia 1-2)
1. `*audience-research --method voc` — pesquisa de Voice of Customer (reviews, forums, entrevistas)
2. Mapear: desejos profundos, medos existenciais, frustrações com soluções atuais
3. Coletar linguagem literal da audiência — as palavras DELES, não as suas
4. `*offer-anatomy --product "{{product}}"` — dissecar a oferta: o que realmente está sendo vendido?
5. `*competitor-copy-audit --top 5` — auditar copy dos top concorrentes

Entregável: Copy Research Document + Audience Language Swipe

### Fase 2 — Estratégia de Copy (Dia 2-3)
6. `*awareness-level --audience "{{audience}}"` — definir nível de consciência (Schwartz)
7. Escolher mecanismo de abertura: problema, desejo, curiosidade, novidade
8. `*big-idea --format hook` — definir big idea da copy (o gancho irresistível)
9. `*proof-strategy --types testimonials,data,authority` — definir estratégia de prova

Entregável: Copy Strategy Document

### Fase 3 — Copy de Anúncios (Dia 3-4)
10. `*ad-copy --platforms meta,google,tiktok` — criar copy para todos os canais pagos
11. Para cada plataforma: 5 hooks × 3 bodies × 3 CTAs = 45 combinações
12. Formatos: texto curto (15 palavras), médio (50 palavras), longo (150 palavras)
13. `*hook-testing --top 10` — selecionar os 10 hooks mais fortes para teste

Entregável: Ad Copy Library por Plataforma

### Fase 4 — Sales Page / Landing Page (Dia 4-6)
14. `*sales-page --structure AIDA` — estruturar a página de vendas
15. Hero section: headline → subhead → social proof → CTA
16. Body: problema → agitação → solução → mecanismo único → prova → oferta → urgência → garantia → CTA
17. `*headline-variants --count 20` — criar 20 variações de headline para teste
18. FAQ section: responder as 10 objeções mais comuns
19. `*objection-crusher --objections "{{objections}}"` — copy específico por objeção

Entregável: Sales Page Copy Completa (todas as seções)

### Fase 5 — Email Sequence de Vendas (Dia 6-7)
20. `*email-sequence --type sales --length 7-12` — criar sequência de vendas completa
21. Email 1: Lead magnet delivery + first value touch
22. Emails 2-4: Value, story, proof — construindo desire
23. Email 5-7: Hard sell com urgência, bônus, garantia
24. Email 8-10: Objeção crusher, prova social, escassez
25. Email 11-12: Last chance + testimonial final

Entregável: Email Sequence Completa (12 emails)

### Fase 6 — Scripts de Vídeo de Vendas (Dia 7-8)
26. `*vsl-script --length 15-30min` — escrever Video Sales Letter completo
27. Hook (primeiros 15 segundos): por que continuar assistindo?
28. Story: jornada de herói + epifania
29. Teaching: o mecanismo que gera resultados
30. Proof: testemunhos em vídeo, casos de sucesso, dados
31. Offer: apresentar a oferta de forma irresistível
32. Close: múltiplos CTAs com urgência/escassez real

Entregável: VSL Script Completo + Short-form Video Scripts

### Fase 7 — A/B Test Setup (Dia 8)
33. `*ab-test-matrix --elements headline,cta,offer` — planejar testes A/B
34. Priorizar: o que tem maior impacto × o que é mais fácil de testar
35. Definir hipóteses e sample sizes mínimos

Entregável: A/B Test Plan + Variant Copy

## Comandos Disponíveis
- `*audience-research` — Pesquisa deep de Voice of Customer
- `*offer-anatomy` — Dissecar e articular a oferta completa
- `*competitor-copy-audit` — Auditar copy dos concorrentes
- `*ad-copy` — Criar copy para anúncios em múltiplos canais
- `*sales-page` — Escrever página de vendas completa
- `*headline-variants` — Gerar variações de headlines
- `*objection-crusher` — Copy específico para cada objeção
- `*email-sequence` — Criar sequência de emails de vendas
- `*vsl-script` — Escrever Video Sales Letter
- `*ab-test-matrix` — Planejar testes A/B de copy

## Critérios de Conclusão
- [ ] Research de VOC realizado com linguagem literal da audiência
- [ ] Ad copy criada para todos os canais planejados
- [ ] Sales page com todas as seções escritas e revisadas
- [ ] Sequência de email completa (mínimo 7 emails)
- [ ] VSL script com todos os elementos narrativos
- [ ] A/B test plan com hipóteses claras
- [ ] Copy revisada por pa-oracle para brand voice compliance
