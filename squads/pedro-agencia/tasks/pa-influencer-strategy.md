---
task: pa-influencer-strategy
agent: pa-network
description: "Estratégia e execução de influencer marketing e parcerias estratégicas"
inputs: [campaign-brief, budget, audience, brand-values, objectives]
outputs: [influencer-strategy, partner-shortlist, outreach-scripts, contract-brief, performance-tracking]
elicit: true
---

# Task: Estratégia de Influencer Marketing e Parcerias

## Objetivo

Desenvolver uma estratégia completa de influencer marketing que conecte a marca às vozes certas para amplificar mensagens autênticas junto ao público-alvo. O processo vai além da busca por seguidores — identifica criadores com alto alinhamento de valores, alta taxa de engajamento real e capacidade comprovada de gerar conversão para categorias similares ao produto ou serviço em questão.

A estratégia contempla diferentes camadas de influência: macro-influenciadores para alcance e credibilidade, micro-influenciadores para engajamento profundo e nano-influenciadores para autenticidade hiperlocal. O mix ideal é determinado pelo `budget`, pelos `objectives` e pelo comportamento específico do `audience`, sempre evitando parcerias que possam contradizer os `brand-values`.

O resultado é um ecossistema de parcerias estruturado com processos claros de discovery, vetting, negociação, briefing e mensuração — permitindo que a agência execute campanhas de influencer marketing com eficiência, controle e resultados previsíveis, escalando o que funciona e descartando o que não performa.

## Processo de Execução

### Fase 1 — Análise de Fit de Audiência (Dia 1)

1. Analisar `audience` para identificar perfis de influenciadores que ela segue e consome
2. Mapear categorias de conteúdo com maior ressonância para o público-alvo
3. Identificar plataformas prioritárias por tipo de audiência e objetivo
4. Definir critérios de fit: demografia da audiência, taxa de engajamento mínima, categorias aceitas e excluídas
5. Alinhar critérios com `brand-values` para criar filtros de vetting
6. Executar `*audience-fit-analysis --audience "{{audience}}" --brand-values "{{brand-values}}"`

Entregável: `audience-fit-criteria.md` com perfil de influenciador ideal e filtros de seleção

---

### Fase 2 — Discovery de Influenciadores (Dia 1-2)

1. Executar busca por influenciadores usando critérios definidos na Fase 1
2. Categorizar por tier: mega (1M+), macro (100K-1M), micro (10K-100K), nano (1K-10K)
3. Levantar lista inicial com 30-50 perfis por tier relevante para a campanha
4. Documentar métricas básicas: seguidores, taxa de engajamento, plataformas, nicho
5. Verificar histórico de parcerias comerciais e categorias já anunciadas
6. Executar `*influencer-discovery --niche "{{campaign-brief}}" --tiers micro,macro --platforms all`

Entregável: `discovery-longlist.md` com lista inicial de 30-50 perfis categorizada por tier

---

### Fase 3 — Processo de Vetting (Dia 2-3)

1. Aplicar análise de autenticidade: fake followers, engagement quality, audience demographics
2. Verificar alinhamento de valores: histórico de posicionamentos, causas apoiadas, polêmicas
3. Avaliar qualidade criativa: consistência, produção, storytelling, fit com a marca
4. Analisar performance de campanhas pagas anteriores: disclosure, entrega, resultados
5. Cruzar audience overlap entre influenciadores para evitar supersaturação
6. Reduzir lista para shortlist com 8-15 perfis mais qualificados
7. Executar `*influencer-vetting --longlist "{{discovery-longlist}}" --filters authenticity,values,creative`

Entregável: `partner-shortlist.md` com 8-15 perfis qualificados e scorecard por critério

---

### Fase 4 — Estrutura de Parceria (Dia 3)

1. Definir modelo de parceria para cada tier: gifting, fee fixo, success fee, long-term ambassador
2. Calcular distribuição de budget entre influenciadores conforme tier e objetivos
3. Definir escopo de entrega por parceria: número de posts, formatos, prazo, aprovações
4. Estabelecer regras de exclusividade, categoria e período de embargo
5. Definir direitos de uso de conteúdo: reshare, anúncios, período de licença
6. Documentar estrutura em `contract-brief.md` para base de negociação
7. Executar `*partnership-structure --budget "{{budget}}" --shortlist "{{partner-shortlist}}"`

Entregável: `contract-brief.md` com modelo de parceria, escopo e termos por tier

---

### Fase 5 — Criação de Scripts de Outreach (Dia 3-4)

1. Criar scripts personalizados de primeiro contato por tier e plataforma de abordagem
2. Desenvolver email de proposta com positioning da marca, benefícios e próximos passos
3. Criar scripts de follow-up para 3 tentativas de contato
4. Desenvolver template de briefing criativo por tipo de conteúdo (post, stories, reels, vídeo)
5. Preparar FAQ de negociação com respostas para objeções comuns
6. Executar `*outreach-scripts --tone "{{brand-values}}" --tiers micro,macro --platforms email,dm`

Entregável: `outreach-scripts.md` com scripts de contato, proposta, follow-up e FAQ

---

### Fase 6 — Gestão de Campanha (Execução)

1. Executar outreach em ordem de prioridade do shortlist
2. Gerenciar negociações e aprovações de contrato com base no `contract-brief`
3. Enviar briefings criativos aprovados e acompanhar prazos de entrega
4. Revisar conteúdo antes da publicação: alinhamento com brief, disclosure #ad/#parceria
5. Monitorar publicações em tempo real e intervir em casos de desvio
6. Executar `*campaign-manager --partners confirmed --status active`

Entregável: Campanhas publicadas e monitoradas com registro de entregas por influenciador

---

### Fase 7 — Mensuração e Relatório (Pós-campanha)

1. Coletar métricas de performance por influenciador: alcance, impressões, engajamento, cliques
2. Calcular CPE (custo por engajamento) e CPM real por parceria
3. Medir conversões atribuídas via UTMs, códigos de desconto e landing pages dedicadas
4. Comparar performance real com projeções e identificar top performers
5. Gerar relatório consolidado com aprendizados e recomendações para próximas campanhas
6. Atualizar `performance-tracking` com dados para benchmarking futuro
7. Executar `*performance-report --campaign "{{campaign-brief}}" --metrics reach,engagement,conversion`

Entregável: `performance-tracking.md` com resultados consolidados, aprendizados e recomendações

---

## Comandos Disponíveis

- `*audience-fit-analysis` — Analisar fit de audiência e definir critérios de seleção de influenciadores
- `*influencer-discovery` — Buscar perfis por nicho, tier e plataforma
- `*influencer-vetting` — Aplicar análise de autenticidade, valores e performance
- `*partnership-structure` — Definir modelo de parceria e distribuição de budget
- `*outreach-scripts` — Criar scripts de contato e briefing criativo
- `*campaign-manager` — Gerenciar execução, aprovações e entregas da campanha
- `*performance-report` — Consolidar métricas e gerar relatório de resultados
- `*benchmark-influencer` — Buscar benchmarks de engajamento e CPE por nicho e tier

## Critérios de Conclusão

- [ ] Critérios de fit de audiência definidos e alinhados com brand-values
- [ ] Longlist de 30-50 influenciadores descobertos e categorizados por tier
- [ ] Vetting completo aplicado com scorecard documentado por critério
- [ ] Shortlist de 8-15 perfis qualificados pronta para outreach
- [ ] Estrutura de parceria definida com modelo contratual por tier
- [ ] Scripts de outreach criados para todos os tiers e plataformas de abordagem
- [ ] Briefings criativos desenvolvidos por tipo de conteúdo
- [ ] Sistema de tracking configurado com UTMs e mecanismos de atribuição
- [ ] Relatório de performance entregue com aprendizados e recomendações documentadas
