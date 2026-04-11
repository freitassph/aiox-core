---
task: pa-media-plan
agent: pa-compass
description: "Plano de mídia estratégico completo com mix de canais e alocação de budget"
inputs: [business-goals, budget, audience, campaign-brief, competitors]
outputs: [media-plan, channel-mix, budget-allocation, reach-frequency-projections, buying-strategy]
elicit: true
---

# Task: Plano de Mídia Estratégico

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

## Checklist

- [ ] Task objective clearly defined
- [ ] Required inputs available and validated
- [ ] Execution follows established patterns
- [ ] Output artifacts properly formatted
- [ ] Results communicated to user/orchestrator

## Pre-Conditions

- Task agent is activated and ready
- Required context from previous tasks is available
- User has confirmed this task should be executed

## Objetivo

Desenvolver um plano de mídia completo e orientado a resultados que defina com precisão onde, quando e como os recursos de comunicação serão investidos para maximizar o impacto junto ao público-alvo. O plano deve partir dos objetivos de negócio e traduzi-los em estratégias de mídia acionáveis, com alocação de budget justificada e projeções de alcance e frequência realistas.

O processo integra análise competitiva, comportamento de consumo de mídia do público-alvo e benchmarks de mercado para construir um mix de canais equilibrado entre performance de curto prazo e construção de marca de longo prazo. Cada canal selecionado deve ter justificativa clara baseada em dados e objetivos mensuráveis.

O output final entregue é um documento executivo que pode ser apresentado diretamente ao cliente, com recomendações estratégicas, cronograma de compra de mídia, projeções de resultados e plano de otimização contínua — eliminando qualquer ambiguidade sobre o que será executado, quanto custará e quais resultados são esperados.

## Processo de Execução

### Fase 1 — Análise de Mercado e Competidores (Dia 1)

1. Revisar o `campaign-brief` e `business-goals` para extrair objetivos primários e secundários
2. Mapear o landscape competitivo a partir de `competitors`: canais usados, mensagens, sazonalidade
3. Identificar oportunidades de mídia não exploradas pelos concorrentes
4. Levantar benchmarks de CPM, CPC e CPL por canal no segmento
5. Documentar insights de mercado em `market-analysis.md`
6. Executar `*review-brief --source "{{campaign-brief}}" --extract objectives,kpis,constraints`

Entregável: `market-analysis.md` com landscape competitivo e oportunidades identificadas

---

### Fase 2 — Análise de Consumo de Mídia do Público-Alvo (Dia 1-2)

1. Analisar `audience` para construir perfil de consumo de mídia: plataformas, horários, dispositivos
2. Cruzar dados demográficos e psicográficos com hábitos de consumo de conteúdo
3. Identificar momentos de maior receptividade — contexto, mindset e jornada de compra
4. Mapear touchpoints prioritários por etapa do funil (awareness, consideration, conversion)
5. Validar hipóteses com dados de ferramentas de pesquisa de audiência disponíveis
6. Executar `*audience-media-map --audience "{{audience}}" --depth full`

Entregável: `audience-media-profile.md` com hábitos de consumo e touchpoints por funil

---

### Fase 3 — Estratégia de Canais (Dia 2-3)

1. Selecionar canais primários (60-70% do budget) com maior potencial de resultado para os KPIs definidos
2. Selecionar canais secundários (20-30%) para amplificação e remarketing
3. Definir canais experimentais (5-10%) para testes e aprendizado
4. Justificar cada canal com dados de audiência, benchmarks e objetivos específicos
5. Definir papel estratégico de cada canal na jornada do consumidor
6. Executar `*channel-strategy --goals "{{business-goals}}" --audience "{{audience}}" --budget "{{budget}}"`

Entregável: `channel-strategy.md` com mix de canais justificado e papel de cada um no funil

---

### Fase 4 — Alocação de Budget (Dia 3)

1. Distribuir `budget` entre canais conforme prioridade estratégica e potencial de ROI
2. Separar budget entre mídia paga, produção de conteúdo e ferramentas/tecnologia
3. Definir alocação por fase da campanha (pré-lançamento, lançamento, sustentação)
4. Calcular projeções de alcance, frequência e CPM esperado por canal
5. Criar cenários de budget: conservador, moderado e agressivo
6. Executar `*budget-allocator --total "{{budget}}" --channels "{{channel-mix}}" --scenarios 3`

Entregável: `budget-allocation.xlsx` com distribuição detalhada, projeções e três cenários

---

### Fase 5 — Estratégia de Compra de Mídia (Dia 4)

1. Definir modalidades de compra por canal: programática, direta, CPM, CPC, CPL, CPA
2. Estabelecer floor prices, tetos de lance e regras de otimização por canal
3. Definir targeting técnico: segmentação, exclusões, listas de remarketing, lookalikes
4. Criar calendário de compra de mídia com datas de ativação, pausa e ajuste
5. Documentar especificações técnicas de formatos por canal (dimensões, durações, specs)
6. Executar `*buying-strategy --channels "{{channel-mix}}" --format programmatic,direct`

Entregável: `buying-strategy.md` com modalidades, targeting e especificações técnicas

---

### Fase 6 — Plano de Mensuração (Dia 4-5)

1. Definir KPIs primários e secundários por canal alinhados aos `business-goals`
2. Estabelecer metas de performance para cada KPI com baseline e target
3. Definir cadência de relatórios: diário (performance), semanal (otimização), mensal (estratégico)
4. Especificar eventos de conversão e atribuição por canal
5. Criar template de dashboard de acompanhamento para o cliente
6. Consolidar tudo no `media-plan` final e preparar apresentação executiva
7. Executar `*measurement-plan --kpis "{{business-goals}}" --channels "{{channel-mix}}"`

Entregável: `media-plan.pdf` completo com measurement plan, dashboard template e apresentação

---

## Comandos Disponíveis

- `*review-brief` — Extrair objetivos, KPIs e restrições do campaign brief
- `*audience-media-map` — Mapear hábitos de consumo de mídia do público-alvo
- `*channel-strategy` — Recomendar mix de canais com justificativa baseada em dados
- `*budget-allocator` — Distribuir budget entre canais com projeções e cenários
- `*buying-strategy` — Definir modalidades de compra e especificações técnicas
- `*measurement-plan` — Criar plano de mensuração com KPIs e cadência de relatórios
- `*benchmark-report` — Buscar benchmarks de CPM/CPC/CPL por canal e segmento
- `*scenario-builder` — Criar cenários de budget e projeções de resultado

## Critérios de Conclusão

- [ ] Análise competitiva de mídia documentada com oportunidades identificadas
- [ ] Perfil de consumo de mídia do público-alvo mapeado por funil e touchpoint
- [ ] Mix de canais definido com papel estratégico e justificativa para cada canal
- [ ] Budget alocado com distribuição detalhada e três cenários (conservador, moderado, agressivo)
- [ ] Projeções de alcance e frequência calculadas para cada canal selecionado
- [ ] Estratégia de compra de mídia com targeting técnico e especificações de formato
- [ ] Plano de mensuração com KPIs, metas e cadência de relatórios
- [ ] Documento final `media-plan.pdf` aprovado e pronto para apresentação ao cliente
