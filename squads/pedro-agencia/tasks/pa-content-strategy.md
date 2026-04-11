---
task: pa-content-strategy
agent: pa-chronicle
description: "Estratégia mestra de conteúdo — propósito, pilares, formatos e distribuição"
inputs: [business-goals, audience, brand-strategy, competitive-analysis]
outputs: [content-strategy-doc, content-pillars, channel-strategy, production-model, measurement-plan]
elicit: true
---

# Task: Content Strategy — Estratégia Mestra de Conteúdo

## Purpose

Execute this task with excellence following S+++ standards.

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

Desenvolver uma estratégia de conteúdo que conecta cada asset publicado a um objetivo de negócio mensurável — porque conteúdo sem estratégia é só barulho. A estratégia define por que a marca produz conteúdo, para quem, o que diz, onde e como. Essas cinco perguntas, respondidas com rigor, eliminam a produção de conteúdo por hábito e introduzem intenção em cada decisão editorial.

A estratégia é construída sobre o entendimento profundo das necessidades de conteúdo da audiência em cada estágio da jornada — não sobre o que a empresa quer falar, mas sobre o que o cliente precisa ouvir para avançar em direção à decisão de compra. Isso inverte a lógica de muitas estratégias de conteúdo que são centradas na marca em vez de serem centradas no cliente.

O modelo de produção resultante é desenhado para ser executável com os recursos reais do cliente — não um plano aspiracional que colapsa na primeira semana de operação. A estratégia inclui priorização clara de onde investir primeiro, critérios de sucesso objetivos e um ciclo de melhoria contínua baseado em dados.

## Processo de Execução

### Fase 1 — Business Alignment (Dia 1, 2h)

1. Mapear objetivos de negócio em outcomes de conteúdo mensuráveis: `*business-to-content-mapping --goals "{{business-goals}}" --export "business-content-alignment.yaml"`
2. Definir o papel do conteúdo no modelo de negócio — aquisição, retenção, receita, brand: `*content-role-definition --goals "{{business-goals}}" --brand-strategy "{{brand-strategy}}" --export "content-role.yaml"`
3. Estabelecer restrições de produção — budget, equipe disponível, ferramentas existentes: `*resource-mapping --business-goals "{{business-goals}}" --export "production-constraints.yaml"`
4. Definir horizonte estratégico e marcos de sucesso para 3, 6 e 12 meses: `*strategic-horizons --goals "{{business-goals}}" --export "success-milestones.yaml"`
5. Alinhar expectativas de ROI — como o conteúdo será avaliado e em que prazo: `*roi-framework --goals "{{business-goals}}" --content-role "content-role.yaml" --export "content-roi-model.yaml"`

Entregável: `business-alignment.md` com objetivos de negócio traduzidos em outcomes de conteúdo, papel do conteúdo e modelo de ROI.

---

### Fase 2 — Audience Content Needs (Dia 1-2, 3h)

1. Construir mapa de perguntas e dúvidas da audiência por estágio da jornada: `*audience-questions --audience "{{audience}}" --export "audience-questions.yaml"`
2. Identificar fontes de conteúdo que a audiência já consome — referências, formatos preferidos: `*content-consumption-habits --audience "{{audience}}" --export "consumption-habits.yaml"`
3. Definir momentos de descoberta — como e onde a audiência encontra novo conteúdo: `*discovery-mapping --audience "{{audience}}" --export "discovery-channels.yaml"`
4. Mapear barreiras de conteúdo — o que impede a audiência de consumir e se engajar: `*content-barriers --audience "{{audience}}" --brand-strategy "{{brand-strategy}}" --export "content-barriers.yaml"`
5. Identificar tipos de conteúdo que mais influenciam decisões de compra no setor: `*purchase-influence-content --audience "{{audience}}" --competitive "{{competitive-analysis}}" --export "influential-content-types.yaml"`
6. Definir content personas — variações de necessidade de conteúdo dentro da audiência principal: `*content-personas --audience "{{audience}}" --export "content-personas.yaml"`

Entregável: `audience-content-needs.md` com mapa de perguntas por jornada, hábitos de consumo, canais de descoberta e content personas.

---

### Fase 3 — Competitor Content Audit (Dia 2, 2-3h)

1. Mapear presença de conteúdo dos concorrentes — canais, formatos, volume, frequência: `*competitor-content-presence --competitive "{{competitive-analysis}}" --export "competitor-presence.json"`
2. Identificar os conteúdos com maior performance de cada concorrente: `*competitor-top-content --competitive "{{competitive-analysis}}" --period 12m --export "competitor-best-content.json"`
3. Analisar lacunas na cobertura dos concorrentes — tópicos não cobertos ou mal servidos: `*competitor-content-gaps --presence "competitor-presence.json" --audience "audience-questions.yaml" --export "whitespace-map.json"`
4. Avaliar qualidade e profundidade do conteúdo dos concorrentes por tópico: `*competitor-quality-audit --top-content "competitor-best-content.json" --export "quality-benchmark.json"`
5. Identificar formatos e ângulos únicos que diferenciam do mercado: `*differentiation-opportunities --gaps "whitespace-map.json" --brand-strategy "{{brand-strategy}}" --export "content-differentiation.yaml"`
6. Calcular share of voice editorial — quanto espaço a marca ocupa vs concorrentes no conteúdo: `*editorial-sov --competitive "{{competitive-analysis}}" --export "editorial-sov.yaml"`

Entregável: `competitor-content-analysis.md` com mapa de presença, gaps, whitespace e oportunidades de diferenciação.

---

### Fase 4 — Pillar Strategy (Dia 2-3, 3h)

1. Definir conteúdo com base nos interesses da audiência e objetivos do negócio: `*pillar-definition --audience-needs "audience-content-needs.md" --business-alignment "business-alignment.md" --brand-strategy "{{brand-strategy}}" --export "content-pillars.yaml"`
2. Para cada pilar, definir a perspectiva única da marca — o ponto de vista proprietário: `*pillar-pov --pillars "content-pillars.yaml" --brand-strategy "{{brand-strategy}}" --export "pillar-pov.yaml"`
3. Mapear tópicos e subtópicos por pilar — a biblioteca de conteúdo potencial: `*topic-mapping --pillars "content-pillars.yaml" --audience-questions "audience-questions.yaml" --export "topic-library.yaml"`
4. Definir o flagship content por pilar — o ativo de conteúdo definitivo de cada área: `*flagship-content --pillars "content-pillars.yaml" --differentiation "content-differentiation.yaml" --export "flagship-plan.yaml"`
5. Estabelecer a voz e tom específicos por pilar — dentro da identidade de marca: `*pillar-voice --pillars "content-pillars.yaml" --brand-strategy "{{brand-strategy}}" --export "pillar-voices.yaml"`
6. Priorizar pilares para início — onde investir primeiro com base em impacto e viabilidade: `*pillar-prioritization --pillars "content-pillars.yaml" --constraints "production-constraints.yaml" --export "pillar-priorities.yaml"`

Entregável: `content-pillars.md` com pilares definidos, perspectiva única, tópicos mapeados e flagship content por pilar.

---

### Fase 5 — Channel & Distribution Strategy (Dia 3, 2-3h)

1. Selecionar canais de distribuição baseados em onde a audiência está e objetivos de negócio: `*channel-selection --discovery "discovery-channels.yaml" --goals "{{business-goals}}" --pillars "content-pillars.yaml" --export "channel-strategy.yaml"`
2. Definir papel de cada canal no ecossistema de conteúdo — owned, earned, paid: `*channel-roles --channels "channel-strategy.yaml" --content-role "content-role.yaml" --export "channel-roles.yaml"`
3. Estabelecer content hub — onde vive o conteúdo principal e como os outros canais alimentam: `*hub-spoke-model --channels "channel-strategy.yaml" --brand-strategy "{{brand-strategy}}" --export "hub-spoke.yaml"`
4. Definir estratégia de distribuição e amplificação por tipo de conteúdo: `*distribution-strategy --channel-roles "channel-roles.yaml" --pillars "pillar-priorities.yaml" --export "distribution-plan.yaml"`
5. Criar protocolo de SEO para conteúdo — como cada peça é otimizada para busca orgânica: `*content-seo-protocol --pillars "content-pillars.yaml" --distribution "distribution-plan.yaml" --export "content-seo-rules.yaml"`
6. Definir estratégia de email como canal de distribuição — newsletter, nurture, reativação: `*email-distribution --channel-roles "channel-roles.yaml" --audience "content-personas.yaml" --export "email-distribution.yaml"`

Entregável: `channel-strategy.md` com ecossistema de canais, papéis, hub-and-spoke model e protocolo de distribuição.

---

### Fase 6 — Production Model & Measurement (Dia 4, 2-3h)

1. Definir modelo de produção sustentável — papéis, fluxos de aprovação, ferramentas: `*production-model --constraints "production-constraints.yaml" --channels "channel-strategy.yaml" --export "production-model.yaml"`
2. Criar templates e padrões de qualidade por formato de conteúdo: `*quality-standards --brand-strategy "{{brand-strategy}}" --formats "channel-strategy.yaml" --export "quality-standards.yaml"`
3. Definir workflow editorial — da ideação ao publish, com pontos de decisão e aprovação: `*editorial-workflow --production "production-model.yaml" --export "editorial-workflow.yaml"`
4. Estabelecer KPIs de conteúdo por objetivo e canal — awareness, engajamento, conversão: `*content-kpis --business-alignment "business-alignment.md" --channels "channel-strategy.yaml" --export "content-kpis.yaml"`
5. Criar plano de mensuração — como, quando e por quem as métricas são coletadas e analisadas: `*measurement-plan --kpis "content-kpis.yaml" --export "measurement-plan.yaml"`
6. Compilar estratégia completa em Content Strategy Document master: `*strategy-compile --all-data "." --template "content-strategy-master" --export "content-strategy-complete.pdf"`

Entregável: `production-model.yaml`, `measurement-plan.yaml` e `content-strategy-complete.pdf` — estratégia mestra completa.

---

## Comandos Disponíveis

- `*business-to-content-mapping` — Tradução de objetivos de negócio em outcomes de conteúdo
- `*content-role-definition` — Definição do papel do conteúdo no modelo de negócio
- `*audience-questions` — Mapeamento de perguntas da audiência por jornada
- `*pillar-definition` — Definição de content pillars estratégicos
- `*pillar-pov` — Definição da perspectiva única da marca por pilar
- `*channel-selection` — Seleção de canais por fit com audiência e objetivos
- `*hub-spoke-model` — Estruturação do modelo hub-and-spoke de distribuição
- `*production-model` — Modelagem de processo de produção sustentável
- `*content-kpis` — Definição de KPIs por objetivo e canal
- `*strategy-compile` — Compilação do documento master de estratégia

## Critérios de Conclusão

- [ ] Business alignment completo com objetivos traduzidos em outcomes de conteúdo
- [ ] Modelo de ROI de conteúdo definido com métricas de avaliação
- [ ] Mapa de necessidades de conteúdo da audiência por estágio da jornada
- [ ] Content personas definidas com variações de necessidade
- [ ] Competitor content audit completo com whitespace e diferenciação mapeados
- [ ] Content pillars definidos com perspectiva única, tópicos e flagship content
- [ ] Canais selecionados com papéis claros e hub-and-spoke model estruturado
- [ ] Protocolo de SEO e distribuição definido por tipo de conteúdo
- [ ] Modelo de produção documentado com workflow editorial e padrões de qualidade
- [ ] KPIs e plano de mensuração estabelecidos com cadência de análise
