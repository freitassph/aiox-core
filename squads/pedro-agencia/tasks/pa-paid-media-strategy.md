---
task: pa-paid-media-strategy
agent: pa-profit
description: "Estratégia completa de mídia paga — Google, Meta, TikTok, LinkedIn"
inputs: [business-goals, budget, audience, competitors, historical-data]
outputs: [paid-strategy, channel-mix, audience-strategy, creative-brief-paid, measurement-plan]
elicit: true
---

# Task: Estratégia Completa de Mídia Paga

## Objetivo

Construir a estratégia de mídia paga completa que define como, onde e para quem investir o budget de performance marketing — com foco em eficiência de custo por resultado, escala sustentável e atribuição clara de cada canal ao funil de conversão.

A estratégia de mídia paga é o documento que governa todos os investimentos em performance durante uma campanha ou trimestre. Ela não é um plano de execução — é o mapa estratégico que justifica cada decisão de alocação, define as audiências por intenção e estágio do funil, especifica as metas de eficiência por canal e cria o framework de otimização contínua.

O pa-profit opera como um Head of Performance Marketing: analisa dados históricos, benchmarks de indústria, comportamento dos concorrentes e algoritmos das plataformas para construir uma estratégia que maximiza ROAS e minimiza CAC. Cada centavo do budget tem uma justificativa estratégica documentada.

## Processo de Execução

### Fase 1 — Auditoria de Contas e Dados Históricos (Dia 1-2)

1. `*account-audit --platforms "{{platforms}}" --period 90d` — auditoria completa de contas existentes
2. Para cada plataforma ativa, analisar:
    - Performance histórica: CTR, CPC, CPM, CVR, CPA, ROAS dos últimos 90 dias
    - Estrutura de campanhas: naming convention, grupos, segmentações existentes
    - Qualidade das audiências: tamanho, overlap, CPAs por segmento
    - Criativos: winners vs. fatigue, CTR histórico por formato
    - Budget pacing: underspend ou overspend por período
3. `*benchmark-research --industry "{{industry}}" --channels "{{channels}}"` — benchmarks de mercado
    - Benchmarks de CTR por plataforma e indústria
    - CPC médio por keyword cluster (Google)
    - CPM médio por audience type (Meta, TikTok)
    - CVR médio de landing page por segmento
4. `*competitor-ad-audit --competitors "{{competitors}}"` — analisar estratégia de anúncios de concorrentes
    - Meta Ad Library: criativos ativos, frequência estimada, ângulos de mensagem
    - Google Auction Insights: share of voice, impression share, overlap rate
    - SEMrush/SpyFu: keywords de busca paga, landing pages de destino
5. `*historical-analysis --data "{{historical_data}}"` — análise profunda dos dados do cliente
    - Melhores campanhas: o que gerou o melhor CAC/ROAS e por quê
    - Piores campanhas: onde o budget foi ineficiente e o que causou
    - Sazonalidade: períodos de alta e baixa performance

Entregável: Account Audit Report + Benchmark Report + Competitor Intelligence

---

### Fase 2 — Channel Strategy e Mix de Canais (Dia 2-3)

6. `*channel-mix --budget "{{budget}}" --goals "{{business_goals}}"` — definir mix de canais
7. Framework de alocação por objetivo:

**Objetivo: Geração de Leads (B2B)**
- Google Search: 40-50% (captura demanda existente, alta intenção)
- LinkedIn: 25-35% (alcance de decisores, targeting profissional)
- Meta: 15-20% (retargeting e lookalike de conversores)
- YouTube: 10-15% (brand awareness e video prospecting)

**Objetivo: E-commerce / DTC**
- Meta + Instagram: 40-50% (prospecting + retargeting)
- Google Shopping: 20-30% (captura demanda de produto)
- TikTok: 15-20% (awareness em audiências jovens)
- Google Search: 10-15% (branded + competitor keywords)

**Objetivo: SaaS / Trial**
- Google Search: 35-45% (keywords de problema + solução)
- Meta: 25-35% (lookalike de trial converters)
- LinkedIn: 15-20% (targeting por cargo e empresa)
- Retargeting unificado: 10-15% cross-channel

8. `*channel-rationale --mix "{{channel_mix}}"` — documentar justificativa estratégica de cada canal
9. Definir: fase do funil por canal (TOFU, MOFU, BOFU), role (awareness, consideration, conversion)

Entregável: Channel Mix Document + Strategic Rationale por Canal

---

### Fase 3 — Arquitetura de Audiências (Dia 3-4)

10. `*audience-architecture --persona "{{audience}}" --channels "{{channels}}"` — mapear audiências por canal e estágio
11. Framework de audiências por temperatura:

**Cold (Topo do Funil — Prospecting):**
- Lookalike 1-3% de compradores/conversores recentes
- Interest-based targeting por comportamento e categoria
- Demographic + contextual targeting (Google Display/YouTube)
- LinkedIn: cargo + indústria + tamanho de empresa (B2B)

**Warm (Meio do Funil — Retargeting):**
- Visitantes do site (últimos 30-60 dias, sem conversão)
- Engajadores de conteúdo (video views 50%+, Instagram saves)
- Leads que não converteram (email list via custom audiences)
- Abandonment: carrinho, formulário, checkout

**Hot (Fundo do Funil — High Intent):**
- Visitantes de pricing page ou produto (últimos 7-14 dias)
- Adicionaram ao carrinho sem comprar
- Leads qualificados não fechados (CRM sync)
- Branded keywords (Google Search)

12. `*audience-sizing --segments all` — validar tamanho de cada audiência (mínimo 1000 usuários)
13. `*audience-exclusions --strategy no-overlap` — definir exclusões para evitar overlap entre segmentos
14. `*custom-audience-setup --sources pixel,crm,email` — spec de custom audiences a criar

Entregável: Audience Architecture Document + Audience Sizing + Exclusion Strategy

---

### Fase 4 — Estratégia de Lance e Budget Pacing (Dia 4-5)

15. `*bid-strategy --goals "{{goals}}" --phase launch` — definir estratégias de lance por fase
16. Fase de lançamento (primeiros 30 dias): modo de aprendizado do algoritmo
    - Meta: Cost Cap ou Bid Cap — controle maior no início
    - Google: Maximize Conversions com target CPA manual inicialmente
    - TikTok: Cost Cap por conversão
    - LinkedIn: Manual CPC para awareness, automated para conversões
17. Fase de escala (após 50+ conversões por grupo): abrir para otimização algorítmica
    - Meta: Target Cost ou Lowest Cost com orçamento maior
    - Google: Target CPA ou Target ROAS (após dados suficientes)
18. `*budget-pacing --monthly "{{budget}}" --channels "{{channels}}"` — plano de pacing de budget
    - Distribuição por dia da semana (baseado em dados históricos de performance)
    - Sazonalidade intra-mensal: começo vs. fim do mês
    - Regras de aceleração: quando escalar budget se CPA < meta
    - Regras de redução: quando pausar ou cortar se CPA > meta * 1.3
19. `*efficiency-targets --cpa "{{target_cpa}}" --roas "{{target_roas}}"` — metas de eficiência
20. Definir: CPA máximo aceitável, ROAS mínimo por canal, frequência máxima por audiência

Entregável: Bid Strategy Playbook + Budget Pacing Plan + Efficiency Targets

---

### Fase 5 — Estratégia Criativa para Paid (Dia 5-6)

21. `*creative-brief-paid --channels "{{channels}}" --audience cold,warm,hot` — brief criativo para ads
22. Framework de criativos por estágio do funil:

**TOFU (Prospecting):**
- Objetivo: parar o scroll, gerar awareness
- Formatos: vídeo 6-30s, UGC-style, carousel storytelling
- Mensagem: problema identificável + promessa de resultado
- Hook: primeiros 3s devem comunicar quem é o público ("Se você é X...")

**MOFU (Retargeting warm):**
- Objetivo: aprofundar consideração, endereçar objeções
- Formatos: video testimonial, before/after, case study, comparison
- Mensagem: social proof + diferenciação vs. alternativas
- CTA: "Saiba mais", "Ver demonstração", "Ler caso de sucesso"

**BOFU (Retargeting hot):**
- Objetivo: converter agora, urgência e oferta
- Formatos: estático com oferta clara, dynamic product ads, countdown
- Mensagem: oferta específica + urgência + garantia + CTA direto
- CTA: "Comprar agora", "Garantir minha vaga", "Começar hoje"

23. `*creative-testing-plan --variants "{{ad_count}}"` — plano de teste de criativos
24. Regra: mínimo 3-5 criativos por audience/objective para encontrar o winner
25. Testar: hook, formato (vídeo vs. imagem), ângulo de mensagem, CTA, oferta

Entregável: Creative Brief Completo por Estágio + Creative Testing Plan

---

### Fase 6 — Plano de Mensuração e Atribuição (Dia 6-7)

26. `*measurement-plan --channels "{{channels}}" --conversions "{{conversion_events}}"` — plano de mensuração
27. Definir todos os eventos de conversão a rastrear:
    - Macro-conversões: compra, lead form, trial signup, contato
    - Micro-conversões: scroll depth, time on site, video view, add to cart
28. `*attribution-model --business "{{business_type}}"` — definir modelo de atribuição
    - E-commerce: Data-driven attribution (Google) + 7d click 1d view (Meta)
    - B2B lead gen: First touch + Last touch analysis, UTM-based
    - SaaS trial: Multi-touch attribution com CRM sync
29. `*tracking-spec --platforms "{{platforms}}"` — spec técnico de tracking
    - Google Tag Manager: events a implementar
    - Meta Pixel: standard events + custom events
    - TikTok Pixel: events a mapear
    - LinkedIn Insight Tag: conversion tracking
    - UTM taxonomy: estrutura de parâmetros para todos os canais
30. `*reporting-dashboard --kpis "{{kpis}}"` — spec de dashboard de acompanhamento
31. Dashboard deve mostrar diariamente: spend, impressions, clicks, conversions, CPA, ROAS, frequência
32. Alertas automáticos: CPA > meta * 1.3 → notificar; budget pace > 110% → notificar

Entregável: Measurement Plan + Attribution Model Document + Tracking Spec + Dashboard Spec

---

## Comandos Disponíveis

- `*account-audit` — Auditoria completa de contas por plataforma
- `*benchmark-research` — Benchmarks de indústria por canal
- `*competitor-ad-audit` — Análise de estratégia de ads de concorrentes
- `*historical-analysis` — Análise profunda de dados históricos
- `*channel-mix` — Definir mix e alocação de canais
- `*channel-rationale` — Documentar justificativa estratégica por canal
- `*audience-architecture` — Mapear audiências por canal e temperatura
- `*audience-sizing` — Validar tamanho de cada audiência
- `*audience-exclusions` — Estratégia de exclusões anti-overlap
- `*custom-audience-setup` — Spec de custom audiences
- `*bid-strategy` — Estratégias de lance por fase (launch/scale)
- `*budget-pacing` — Plano de pacing de budget com regras de aceleração/redução
- `*efficiency-targets` — Definir metas de CPA, ROAS e frequência
- `*creative-brief-paid` — Brief criativo por estágio do funil
- `*creative-testing-plan` — Plano de teste de criativos
- `*measurement-plan` — Plano completo de mensuração
- `*attribution-model` — Definir modelo de atribuição por tipo de negócio
- `*tracking-spec` — Especificação técnica de tracking
- `*reporting-dashboard` — Spec de dashboard de acompanhamento

## Critérios de Conclusão

- [ ] Auditoria de contas existentes com análise de 90 dias de performance
- [ ] Benchmarks de indústria documentados por canal e métrica
- [ ] Competitive intelligence com criativos e keywords de concorrentes
- [ ] Channel mix definido com alocação percentual e justificativa estratégica
- [ ] Arquitetura de audiências completa (cold, warm, hot) por canal
- [ ] Exclusões de audiência configuradas para eliminar overlap
- [ ] Bid strategy definida para fase de lançamento e fase de escala
- [ ] Metas de eficiência estabelecidas: CPA máximo, ROAS mínimo por canal
- [ ] Creative brief elaborado para cada estágio do funil (TOFU, MOFU, BOFU)
- [ ] Plano de teste de criativos com mínimo 3 variantes por objetivo
- [ ] Measurement plan com todos os eventos de conversão mapeados
- [ ] UTM taxonomy definida e documentada para todos os canais
- [ ] Spec de dashboard com KPIs diários e alertas automáticos
