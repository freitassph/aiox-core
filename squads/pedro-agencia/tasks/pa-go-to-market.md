---
task: pa-go-to-market
agent: pa-launch
description: "Plano completo de go-to-market para lançamento de produto ou serviço"
inputs: [product-brief, audience, competitive-landscape, budget, timeline]
outputs: [gtm-strategy, launch-plan, channel-strategy, messaging-framework, launch-metrics]
elicit: true
---

# Task: Plano de Go-to-Market

## Objetivo

Desenvolver um plano de go-to-market completo que coordene todas as dimensões de um lançamento bem-sucedido: posicionamento, mensagens, canais, sequência de ativação e métricas de sucesso. Um lançamento sem GTM estruturado é um produto à procura de mercado — o GTM inverte essa equação, definindo exatamente quem vai comprar, por que vai comprar, como vai descobrir e qual é o caminho até a primeira transação.

O processo começa com a validação do product-market fit e do posicionamento antes de definir qualquer canal ou tática. Posicionamento errado gera desperdício de budget independente de quão bom seja o produto ou a execução criativa. Por isso, o framework de mensagens é construído sobre evidências do `competitive-landscape` e do comportamento real do `audience` — não sobre suposições internas sobre o que o produto deveria significar.

O resultado é um plano de lançamento com sequência clara de ativação pré-lançamento, lançamento e sustentação — coordenando marketing, vendas e produto de forma integrada dentro do `timeline` e do `budget` disponíveis, com métricas definidas que permitem avaliar o sucesso do lançamento em tempo real e pivotar rapidamente quando necessário.

## Processo de Execução

### Fase 1 — Validação de Product-Market Fit (Dia 1)

1. Analisar `product-brief` para extrair proposta de valor, diferenciais e casos de uso primários
2. Mapear `competitive-landscape` para identificar posições ocupadas e espaços em aberto
3. Avaliar evidências de PMF existentes: entrevistas, beta users, NPS, churn, usage patterns
4. Identificar o job-to-be-done central que o produto resolve melhor que qualquer alternativa
5. Definir hipótese de PMF: para quem, em que situação e por que este produto é a melhor solução
6. Listar premissas críticas que precisam ser verdadeiras para o lançamento ter sucesso
7. Executar `*pmf-assessment --product "{{product-brief}}" --competitors "{{competitive-landscape}}"`

Entregável: `pmf-assessment.md` com hipótese de PMF, diferenciais validados e premissas críticas

---

### Fase 2 — ICP e Jornada do Comprador (Dia 1-2)

1. Segmentar `audience` para identificar o ICP de lançamento: quem compra mais rápido e gera mais valor
2. Mapear os perfis de comprador por papel: champion, decisor, influenciador, usuário
3. Documentar jornada do comprador: trigger de busca, canais de descoberta, critérios de avaliação, objeções
4. Identificar o timing ideal de compra: quando o pain está mais agudo, quando o budget está disponível
5. Definir o evento de ativação: o que transforma um prospect em comprador no momento do lançamento
6. Mapear influenciadores de decisão externos: analistas, peers, comunidades, mídia especializada
7. Executar `*buyer-journey --audience "{{audience}}" --product "{{product-brief}}" --stages awareness,consideration,decision`

Entregável: `buyer-journey.md` com ICP de lançamento, personas, jornada e evento de ativação

---

### Fase 3 — Estratégia de Posicionamento (Dia 2)

1. Criar positioning statement formal: para quem, categoria, diferencial e prova
2. Desenvolver messaging framework: headline, tagline, elevator pitch, long-form narrative
3. Criar mensagens específicas por persona e por etapa da jornada
4. Desenvolver proof points: dados, casos de uso, depoimentos ou resultados de beta que sustentam claims
5. Criar biblioteca de objeções com respostas estruturadas e baseadas em evidência
6. Validar mensagens contra o `competitive-landscape`: diferenciar do que está no mercado
7. Executar `*positioning-strategy --product "{{product-brief}}" --icp "{{buyer-journey}}" --competitors "{{competitive-landscape}}"`

Entregável: `messaging-framework.md` com positioning statement, mensagens por persona e proof points

---

### Fase 4 — Mix de Canais de Lançamento (Dia 2-3)

1. Mapear canais onde o ICP de lançamento está presente e receptivo por etapa da jornada
2. Selecionar canais prioritários para pré-lançamento (geração de expectativa e lista de espera)
3. Selecionar canais de lançamento (ativação máxima no dia/semana de lançamento)
4. Selecionar canais de sustentação (aquisição contínua pós-lançamento)
5. Alocar `budget` entre canais por fase com projeções de resultado por canal
6. Definir parceiros de distribuição: publishers, influenciadores, integradores, afiliados
7. Executar `*channel-strategy --budget "{{budget}}" --icp "{{buyer-journey}}" --phases pre-launch,launch,sustain`

Entregável: `channel-strategy.md` com mix por fase, alocação de budget e parceiros de distribuição

---

### Fase 5 — Sequência de Lançamento (Dia 3-4)

1. Construir timeline de lançamento a partir do `timeline` fornecido com marcos e dependências
2. Definir fase de pré-lançamento (D-30 a D-1): teaser, lista de espera, early access, press kit
3. Definir semana de lançamento (D0 a D+7): ativação de todos os canais, PR, eventos, email blast
4. Definir fase de sustentação (D+8 em diante): otimização, content marketing, retargeting, referral
5. Criar checklist de lançamento com responsáveis e prazos por atividade
6. Definir critérios de go/no-go para cada marco: o que precisa estar pronto para avançar
7. Executar `*launch-sequence --timeline "{{timeline}}" --phases pre-launch,launch,post-launch`

Entregável: `launch-plan.md` com timeline detalhado, checklist por fase e critérios de go/no-go

---

### Fase 6 — Métricas e Painel de Lançamento (Dia 4-5)

1. Definir métricas de sucesso do lançamento: conversões, receita, CAC, ativação de produto
2. Criar metas por semana para as primeiras 4 semanas pós-lançamento
3. Definir métricas de alerta precoce: sinais de que o lançamento não está performando
4. Estabelecer protocolo de otimização em tempo real durante a semana de lançamento
5. Criar dashboard de acompanhamento do lançamento com dados em tempo real
6. Definir critério de sucesso para declarar o lançamento bem-sucedido (benchmark vs. meta)
7. Executar `*launch-metrics --goals primary,secondary --cadence daily,weekly --alerts early-warning`

Entregável: `launch-metrics.md` com KPIs, metas por semana, alertas e protocolo de otimização

---

## Comandos Disponíveis

- `*pmf-assessment` — Avaliar evidências de product-market fit e identificar diferenciais
- `*buyer-journey` — Mapear ICP de lançamento, personas e jornada do comprador
- `*positioning-strategy` — Desenvolver positioning statement e messaging framework
- `*channel-strategy` — Selecionar canais e alocar budget por fase do lançamento
- `*launch-sequence` — Construir timeline e checklist de lançamento com marcos e dependências
- `*launch-metrics` — Definir KPIs, metas e protocolo de otimização em tempo real
- `*pr-strategy` — Desenvolver estratégia de relações públicas e assessoria de imprensa para o lançamento
- `*referral-program` — Criar programa de indicação para amplificar lançamento organicamente

## Critérios de Conclusão

- [ ] Avaliação de PMF documentada com hipótese validada e premissas críticas listadas
- [ ] ICP de lançamento definido com jornada do comprador e evento de ativação mapeados
- [ ] Messaging framework completo com positioning statement, mensagens por persona e proof points
- [ ] Objeções documentadas com respostas estruturadas e baseadas em evidência
- [ ] Mix de canais definido por fase com alocação de budget e parceiros de distribuição
- [ ] Timeline de lançamento com sequência pré-lançamento, lançamento e sustentação
- [ ] Checklist de lançamento com responsáveis, prazos e critérios de go/no-go
- [ ] Métricas de sucesso definidas com metas por semana e protocolo de otimização
- [ ] GTM strategy consolidada em documento executivo pronto para apresentação ao cliente
