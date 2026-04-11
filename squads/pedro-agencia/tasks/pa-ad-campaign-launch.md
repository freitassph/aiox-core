---
task: pa-ad-campaign-launch
agent: pa-profit
description: "Setup e lançamento de campanhas pagas em todos os canais"
inputs: [paid-strategy, creative-assets, tracking-setup, budget]
outputs: [campaigns-live, tracking-verified, launch-report, optimization-plan]
elicit: true
---

# Task: Setup e Lançamento de Campanhas Pagas

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

## Pre-Conditions

- Task agent is activated and ready
- Required context from previous tasks is available
- User has confirmed this task should be executed

## Objetivo

Executar o setup técnico completo e o lançamento coordenado de campanhas pagas em todos os canais definidos na estratégia de mídia — garantindo que estrutura de campanhas, audiências, criativos, tracking e bid strategies estejam configurados corretamente antes de um único centavo ser investido.

O lançamento de uma campanha paga é uma operação cirúrgica que determina os resultados das próximas semanas ou meses. Erros de configuração no momento do launch — tracking quebrado, audiências erradas, criativos com texto excessivo, bid strategies inadequadas — podem desperdiçar budget significativo antes que qualquer otimização seja possível. Este processo garante zero tolerância para erros de setup.

O pa-profit atua como um Traffic Manager senior: segue uma sequência estrita de verificações, cria a estrutura de campanhas de acordo com a estratégia aprovada, verifica cada pixel de tracking antes de ativar os anúncios e monitora ativamente as primeiras 48 horas para identificar e corrigir anomalias antes que se tornem problemas de budget.

## Processo de Execução

### Fase 1 — Setup de Estrutura de Campanhas (Dia 1-2)

1. `*campaign-structure --strategy "{{paid_strategy}}" --channels "{{channels}}"` — criar estrutura de campanhas
2. Naming convention obrigatório:
    ```
    [CLIENTE]-[CANAL]-[OBJETIVO]-[AUDIÊNCIA]-[CRIATIVO]-[DATA]
    Exemplo: ACME-META-LEAD-LAL1-VIDEO-2026Q1
    ```
3. Estrutura hierárquica por plataforma:

**Meta Ads:**
- Campaign: objetivo (Lead Generation, Conversions, Awareness)
- Ad Set: audiência + placement + budget (CBO ou ABO)
- Ad: criativo + copy + CTA específico

**Google Ads:**
- Campaign: rede (Search, Display, YouTube, Shopping) + objetivo
- Ad Group: cluster de keywords ou audience segment
- Ad: headline + descriptions + assets (extensions)

**TikTok Ads:**
- Campaign: objetivo (Traffic, Conversions, Reach)
- Ad Group: audiência + placement + budget + schedule
- Ad: criativo + copy + CTA

**LinkedIn Ads:**
- Campaign Group: objetivo geral (awareness, consideration, conversions)
- Campaign: audience segment + format + budget
- Ad: criativo + headline + CTA

4. `*campaign-settings --campaigns all` — configurar settings iniciais de cada campanha
5. Configurar: orçamento diário vs. lifetime, schedule, delivery type, bid strategy inicial
6. `*ad-set-configuration --audiences "{{audience_segments}}"` — configurar ad sets com audiências da estratégia
7. Aplicar todas as exclusões de audiência definidas na estratégia para evitar overlap

Entregável: Campaign Structure Document + Naming Convention Applied + Campaigns Created (Draft)

---

### Fase 2 — Configuração de Audiências (Dia 2)

8. `*audience-setup --cold "{{cold_segments}}"` — criar audiências de prospecting (cold)
    - Lookalike audiences: fazer upload de lista de compradores/convertidos
    - Interest-based: configurar targeting por interesse por plataforma
    - Behavioral: comportamentos de compra, uso de dispositivo, etc.
    - LinkedIn: cargo, seniority, indústria, tamanho de empresa, grupos
9. `*custom-audience-create --sources pixel,crm,engagement` — criar custom audiences
    - Pixel-based: visitantes do site por URL, tempo, eventos
    - Customer list: upload de CRM (email hash, telefone)
    - Engagement: video views, form interactions, page engagement
    - Meta: Instant Experience, Lead Form interactions
10. `*retargeting-setup --segments warm,hot` — configurar audiências de retargeting
    - Warm: visitantes 30-60 dias, engajadores de conteúdo, leads não convertidos
    - Hot: visitantes de pricing/produto 7-14 dias, cart abandonment, leads qualificados
11. `*audience-validation --sizes all` — validar tamanho de todas as audiências
12. Verificar: audiências com menos de 1000 usuários não são confiáveis para otimização
13. `*exclusion-setup --strategy no-overlap` — aplicar todas as exclusões entre audiências
14. Crítico: excluir compradores/convertidos de campanhas de prospecting
15. Excluir audiências quentes das campanhas frias para evitar impressões duplicadas

Entregável: Todas as Audiências Criadas e Validadas + Exclusões Configuradas

---

### Fase 3 — Upload e Configuração de Criativos (Dia 2-3)

16. `*creative-upload --assets "{{creative_assets}}"` — upload e organização de criativos
17. Verificar especificações técnicas antes do upload:
    - Meta: texto < 20% da imagem (evitar redução de alcance), formatos corretos por placement
    - Google: Character limits (headlines 30 chars, descriptions 90 chars)
    - TikTok: vídeo 9:16, resolução mínima 540x960, duração 5-60s
    - LinkedIn: imagem mínima 1200x627, tamanho máximo 5MB
18. `*ad-copy-setup --headlines "{{headlines}}" --descriptions "{{descriptions}}"` — configurar copy dos anúncios
19. Cada ad set deve ter pelo menos 3-5 criativos para permitir otimização interna
20. `*responsive-ads-setup --google true` — configurar Responsive Search Ads no Google
    - 15 headlines únicas e variadas (algoritmo combina automaticamente)
    - 4 descriptions complementares
    - Pinning estratégico: headline com keyword no position 1
21. `*dynamic-creative-setup --meta true` — ativar Dynamic Creative no Meta (se aplicável)
    - Testar: múltiplos hooks de imagem/vídeo contra múltiplos textos e CTAs
    - O algoritmo encontra a combinação vencedora automaticamente
22. `*creative-review --criteria brand,copy,specs` — revisão final de todos os criativos
23. Verificar: brand compliance, copy sem erros, CTAs corretos, links de destino corretos

Entregável: Todos os Criativos Carregados + Configurados + Revisados

---

### Fase 4 — Verificação de Tracking (Dia 3)

24. `*tracking-verification --platforms "{{platforms}}"` — verificação completa de tracking
25. Esta fase é BLOQUEADORA — nenhuma campanha ativa sem tracking 100% funcional
26. Google Tag Manager:
    - `*gtm-audit --events "{{conversion_events}}"` — verificar todos os eventos no GTM Preview
    - Testar: cada evento de conversão manualmente no fluxo real
    - Confirmar: dados chegando no GA4 e Google Ads
27. Meta Pixel:
    - `*pixel-verification --tool events-manager` — verificar via Events Manager
    - Confirmar: PageView, ViewContent, AddToCart, Purchase (ou Lead, CompleteRegistration)
    - Meta Pixel Helper Chrome Extension: verificar sem erros no site
28. Conversions API (CAPI):
    - Verificar se CAPI está configurado e enviando server-side events
    - Event Match Quality Score: mínimo 6.0 para otimização eficiente
29. `*utm-verification --campaigns all` — verificar UTMs de todos os anúncios
    - Fazer clique de teste em cada anúncio e verificar UTMs na URL de destino
    - Confirmar que sessões aparecem corretamente segmentadas no GA4
30. `*conversion-action-setup --google "{{conversions}}"` — verificar conversion actions no Google Ads
31. `*landing-page-test --urls all` — testar todos os landing pages de destino
32. Verificar: páginas carregam corretamente, formulários funcionam, mobile experience

Entregável: Tracking Verification Report — TODOS os eventos confirmados funcionando

---

### Fase 5 — Launch e Ativação (Dia 3-4)

33. `*pre-launch-checklist --campaigns all` — checklist final antes de ativar
34. Pre-launch checklist obrigatório:
    - [ ] Todos os criativos aprovados pelas plataformas
    - [ ] Tracking verificado em 100% dos fluxos de conversão
    - [ ] Budget diário configurado corretamente por campanha
    - [ ] Bid strategies configuradas para fase de aprendizado
    - [ ] Audiências criadas com tamanhos adequados
    - [ ] Exclusões de audiência configuradas
    - [ ] UTMs verificados em todos os anúncios
    - [ ] Landing pages funcionando em mobile e desktop
    - [ ] Schedules de veiculação configurados (timezone correto)
    - [ ] Limite de frequência configurado (quando aplicável)
35. `*phased-launch --order "{{channel_priority}}"` — lançamento em fases (não tudo ao mesmo tempo)
36. Ordem recomendada de lançamento:
    - Fase A: Google Search (captura demanda existente — menor risco)
    - Fase B: Meta Retargeting (audiência quente — mais eficiente)
    - Fase C: Meta Prospecting (maior volume, maior risco)
    - Fase D: Canais complementares (TikTok, LinkedIn, YouTube)
37. `*activation-log --timestamp true` — registrar horário exato de ativação por campanha
38. `*initial-budget-check --hours 2` — verificar gasto após 2 horas de veiculação
39. Verificar: impressões estão sendo servidas, CTR parece razoável, sem alertas de qualidade

Entregável: Todas as Campanhas Ativas + Activation Log + Budget Check Report

---

### Fase 6 — Monitoramento das Primeiras 48 Horas (Dia 4-5)

40. `*monitoring-schedule --frequency 6h` — definir cronograma de monitoramento nas primeiras 48h
41. Checkpoints das primeiras 48h:

**2 horas após launch:**
42. `*budget-pace-check --threshold 110%` — verificar se orçamento está sendo gasto normalmente
43. Alertas: se CTR < 0.5% (Meta) ou < 1% (Google Search), investigar criativos/copy
44. Verificar: anúncios aprovados pelas plataformas (alguns levam até 24h para aprovação)

**24 horas:**
45. `*performance-snapshot --metrics ctr,cpc,cpm,impressions` — snapshot de performance
46. Comparar CPM real vs. estimado na estratégia — desvio > 30% indica targeting issue
47. Verificar distribuição de impressões: algum ad set consumindo budget desproporcional?
48. `*creative-performance --winners-losers` — identificar criativos com melhor e pior performance
49. Pausar criativos com CTR < 50% da média do conjunto

**48 horas:**
50. `*learning-phase-check --campaigns all` — verificar status de aprendizado dos algoritmos
51. Meta: idealmente "Learning" não "Learning Limited" (precisa de 50 conversions/semana)
52. Google: verificar se Smart Bidding tem dados suficientes para otimizar
53. `*first-conversions-report --source platform,analytics` — verificar primeiras conversões registradas
54. Cruzar dados: conversões na plataforma vs. conversões no GA4 vs. CRM
55. `*early-optimization --adjustments "{{adjustments}}"` — aplicar primeiros ajustes se necessário

Entregável: 48h Performance Report + Optimization Actions Log

---

### Fase 7 — Launch Report e Plano de Otimização (Dia 5-6)

56. `*launch-report --period first-48h` — relatório de lançamento completo
57. Launch report deve incluir:
    - Budget total investido por canal
    - Impressões, cliques, CTR, CPC, CPM por campanha
    - Conversões registradas (por plataforma e por GA4)
    - CPA atual vs. CPA meta
    - Status de aprendizado das campanhas
    - Issues encontrados e ações tomadas
    - Observações qualitativas sobre performance de criativos
58. `*optimization-plan --week 1 --data "{{launch_data}}"` — plano de otimização semana 1
59. Definir: o que monitorar diariamente, triggers de otimização, próximas ações planejadas
60. Regras de otimização semana 1:
    - NÃO alterar campanhas em learning (primeiros 7 dias com < 50 conversões)
    - Pausar criativos com CTR < 50% da média após 1000+ impressões
    - Adicionar negative keywords no Google após 48h de dados de search terms
    - Expandir budget em 20% máximo por semana em campanhas com CPA < meta

Entregável: Launch Report + Optimization Plan Semana 1

---

## Comandos Disponíveis

- `*campaign-structure` — Criar estrutura de campanhas com naming convention
- `*campaign-settings` — Configurar settings iniciais de cada campanha
- `*ad-set-configuration` — Configurar ad sets com audiências
- `*audience-setup` — Criar audiências de prospecting (cold)
- `*custom-audience-create` — Criar custom audiences (pixel, CRM, engagement)
- `*retargeting-setup` — Configurar audiências de retargeting warm e hot
- `*audience-validation` — Validar tamanho de todas as audiências
- `*exclusion-setup` — Aplicar exclusões entre audiências
- `*creative-upload` — Upload e organização de criativos
- `*ad-copy-setup` — Configurar headlines e descriptions dos anúncios
- `*responsive-ads-setup` — Configurar Responsive Search Ads
- `*dynamic-creative-setup` — Ativar Dynamic Creative no Meta
- `*creative-review` — Revisão final de criativos
- `*tracking-verification` — Verificação completa de tracking
- `*gtm-audit` — Auditoria de eventos no Google Tag Manager
- `*pixel-verification` — Verificar Meta Pixel via Events Manager
- `*utm-verification` — Verificar UTMs em todos os anúncios
- `*landing-page-test` — Testar todos os landing pages de destino
- `*pre-launch-checklist` — Checklist final antes de ativar
- `*phased-launch` — Lançamento em fases por prioridade
- `*activation-log` — Registrar ativação de campanhas
- `*budget-pace-check` — Verificar pacing de budget
- `*performance-snapshot` — Snapshot de métricas de performance
- `*creative-performance` — Identificar winners e losers de criativos
- `*learning-phase-check` — Verificar status de aprendizado
- `*first-conversions-report` — Relatório de primeiras conversões
- `*early-optimization` — Aplicar ajustes iniciais baseados em dados
- `*launch-report` — Relatório completo de lançamento
- `*optimization-plan` — Plano de otimização semana 1

## Critérios de Conclusão

- [ ] Estrutura de campanhas criada com naming convention aplicado em 100% dos itens
- [ ] Todas as audiências (cold, warm, hot) criadas e validadas com tamanho adequado
- [ ] Exclusões de audiência configuradas eliminando overlap entre segmentos
- [ ] Todos os criativos carregados, aprovados e configurados em cada ad set
- [ ] Tracking verificado: pixel, GTM, CAPI e UTMs — 100% funcionando
- [ ] Conversions API Event Match Quality Score >= 6.0 (Meta)
- [ ] Landing pages testadas em mobile e desktop sem erros
- [ ] Pre-launch checklist 100% concluído antes da ativação
- [ ] Lançamento em fases executado com activation log registrado
- [ ] Monitoramento 2h, 24h e 48h executado com ajustes documentados
- [ ] Primeiras conversões cruzadas: plataforma vs. GA4 vs. CRM
- [ ] Launch report entregue com performance das primeiras 48h
- [ ] Plano de otimização semana 1 documentado e compartilhado com o cliente
