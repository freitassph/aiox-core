---
task: pa-seo-strategy
agent: pa-vertex
description: "Estratégia completa de SEO — keyword strategy, content plan e link building"
inputs: [seo-audit, business-goals, audience, competitors]
outputs: [keyword-strategy, content-seo-plan, link-building-strategy, traffic-projections]
elicit: true
---

# Task: SEO Strategy — Estratégia Orgânica Completa

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

Construir uma estratégia de SEO orientada a negócio que transforma os dados do audit em um plano de crescimento orgânico sustentável. A estratégia cobre as três dimensões do SEO moderno — técnico, conteúdo e autoridade — com foco em resultados mensuráveis alinhados aos objetivos de negócio do cliente.

A keyword strategy não é uma lista de palavras-chave, mas uma arquitetura de intenções de busca mapeada à jornada do cliente. Cada cluster de keywords conecta-se a um estágio do funil, a uma persona específica e a um formato de conteúdo otimizado para conversão — não apenas para tráfego.

O plano de link building é construído sobre relações reais e conteúdo linkável genuíno, não sobre táticas de volume que comprometem a autoridade de longo prazo. A estratégia é apresentada com projeções de tráfego baseadas em dados históricos do mercado, dando ao cliente expectativas realistas e uma base para calcular ROI da iniciativa.

## Processo de Execução

### Fase 1 — Keyword Research Aprofundado (Dia 1-2, 4-5h)

1. Definir seed keywords a partir dos objetivos de negócio e produtos/serviços: `*seed-keywords --business-goals "{{business-goals}}" --audience "{{audience}}" --export "seeds.txt"`
2. Expandir universo de keywords com variações semânticas, LSI e long-tail: `*keyword-expansion --seeds "seeds.txt" --tools "semrush,ahrefs,gsc" --export "keyword-universe.json"`
3. Cruzar com dados reais do GSC — queries com impressões mas sem cliques: `*gsc-keyword-import --audit-data "{{seo-audit}}" --export "current-queries.json"`
4. Filtrar e qualificar por volume, dificuldade e CPC (intent comercial): `*keyword-qualify --universe "keyword-universe.json" --filter-volume 50 --export "qualified-keywords.json"`
5. Classificar keywords por intenção — informacional, navegacional, comercial, transacional: `*intent-classify --keywords "qualified-keywords.json" --export "intent-map.json"`
6. Mapear keywords à jornada do cliente — TOFU/MOFU/BOFU: `*funnel-mapping --keywords "intent-map.json" --audience "{{audience}}" --export "funnel-keyword-map.json"`
7. Identificar featured snippet e SERP feature opportunities: `*serp-features-audit --keywords "qualified-keywords.json" --competitors "{{competitors}}" --export "serp-opportunities.json"`
8. Calcular keyword difficulty real considerando força do domínio atual: `*realistic-difficulty --keywords "qualified-keywords.json" --audit-data "{{seo-audit}}" --export "winnable-keywords.json"`

Entregável: `keyword-strategy.xlsx` com universo qualificado, classificado por intenção, funil e dificuldade real.

---

### Fase 2 — Topic Clusters & Site Architecture (Dia 2, 3h)

1. Agrupar keywords em topic clusters baseados em relações semânticas: `*cluster-builder --keywords "winnable-keywords.json" --method semantic --export "topic-clusters.json"`
2. Definir pillar pages por cluster — escopo, formato, objetivo de conversão: `*pillar-definition --clusters "topic-clusters.json" --business-goals "{{business-goals}}" --export "pillars.yaml"`
3. Mapear supporting content por pillar — sub-tópicos, keywords de cauda longa: `*supporting-content-map --pillars "pillars.yaml" --keywords "winnable-keywords.json" --export "content-map.json"`
4. Desenhar arquitetura de links internos ideal para distribuição de autoridade: `*internal-link-architecture --content-map "content-map.json" --audit-data "{{seo-audit}}" --export "link-architecture.yaml"`
5. Identificar páginas atuais que encaixam em cada cluster vs gaps a criar: `*content-gap-mapping --content-map "content-map.json" --audit-data "{{seo-audit}}" --export "gap-analysis.json"`
6. Priorizar clusters por potencial de tráfego e alinhamento estratégico: `*cluster-prioritization --clusters "topic-clusters.json" --potential-model "traffic-volume-x-conversion" --export "cluster-priorities.json"`

Entregável: `topic-cluster-architecture.md` com mapa visual de clusters, pillar pages e estrutura de linking.

---

### Fase 3 — Content Gap Analysis (Dia 2-3, 2-3h)

1. Identificar todo conteúdo dos concorrentes ranqueado para keywords alvo: `*competitor-content-map --competitors "{{competitors}}" --keywords "winnable-keywords.json" --export "competitor-content.json"`
2. Classificar gaps por tipo — tópico ausente, formato inferior, intent mismatch: `*gap-classification --competitor-content "competitor-content.json" --audit-data "{{seo-audit}}" --export "gap-types.json"`
3. Analisar ângulos únicos disponíveis — perspectivas não cobertas pelos concorrentes: `*unique-angle-analysis --gaps "gap-types.json" --audience "{{audience}}" --export "angles.json"`
4. Identificar oportunidades de conteúdo data-driven — estudos, surveys, relatórios originais: `*data-content-opportunities --industry "{{business-goals}}" --export "data-opportunities.json"`
5. Mapear formatos de conteúdo mais linkados no nicho — para atrair backlinks naturais: `*linkable-content-formats --competitors "{{competitors}}" --export "linkable-formats.json"`
6. Priorizar gaps a fechar nos primeiros 90 dias baseado em impacto esperado: `*gap-prioritization --gaps "gap-types.json" --cluster-priorities "cluster-priorities.json" --export "priority-gaps.json"`

Entregável: `content-gap-analysis.md` com oportunidades priorizadas e ângulos únicos para cada gap.

---

### Fase 4 — Link Building Strategy (Dia 3, 3h)

1. Definir link building personas — tipos de sites que linkam naturalmente para o conteúdo: `*link-persona-definition --industry "{{business-goals}}" --content-map "content-map.json" --export "link-personas.yaml"`
2. Identificar oportunidades de link por tática — guest post, digital PR, resource pages, broken link: `*link-opportunities --personas "link-personas.yaml" --audit-data "{{seo-audit}}" --export "link-opportunities.json"`
3. Mapear domínios de alta autoridade no nicho com potencial de parceria: `*authority-domains --industry "{{business-goals}}" --competitors "{{competitors}}" --export "target-domains.json"`
4. Criar link building outreach plan — sequência de contato, templates, volume mensal: `*outreach-plan --opportunities "link-opportunities.json" --monthly-volume 20 --export "outreach-plan.yaml"`
5. Definir conteúdo linkável a criar — formatos que atraem links naturalmente: `*linkable-assets-plan --formats "linkable-formats.json" --gaps "priority-gaps.json" --export "linkable-assets.yaml"`
6. Estabelecer métricas de link building — DR mínimo, relevância topical, cadência mensal: `*link-kpis --strategy-goals "{{business-goals}}" --baseline "{{seo-audit}}" --export "link-kpis.yaml"`

Entregável: `link-building-strategy.md` com tática por mês, volume de outreach, métricas e responsáveis.

---

### Fase 5 — On-Page & Technical Strategy (Dia 3-4, 2h)

1. Definir template de otimização on-page por tipo de página — pillar, supporting, landing, blog: `*onpage-templates --page-types "pillar,supporting,landing,blog" --best-practices 2024 --export "onpage-templates.yaml"`
2. Criar protocolo de keyword targeting — primária, secundárias, LSI, placement rules: `*keyword-placement-protocol --audit-data "{{seo-audit}}" --export "placement-protocol.md"`
3. Definir estratégia de featured snippets — formatos, estruturação, targets: `*snippet-strategy --opportunities "serp-opportunities.json" --export "snippet-playbook.md"`
4. Estabelecer protocolo de schema markup por tipo de conteúdo: `*schema-protocol --content-types "{{content-map.json}}" --export "schema-protocol.yaml"`
5. Definir prioridades técnicas de implementação baseadas no audit: `*technical-priorities --audit-data "{{seo-audit}}" --impact-model "traffic" --export "technical-roadmap.yaml"`

Entregável: `onpage-seo-playbook.md` com protocolo completo de otimização para cada tipo de página.

---

### Fase 6 — Measurement & Traffic Projections (Dia 4, 2h)

1. Definir KPIs de SEO alinhados a objetivos de negócio — não apenas rankings: `*kpi-definition --business-goals "{{business-goals}}" --export "seo-kpis.yaml"`
2. Construir modelo de projeção de tráfego por cluster/fase: `*traffic-model --clusters "cluster-priorities.json" --audit-data "{{seo-audit}}" --industry-benchmarks true --export "traffic-projections.json"`
3. Calcular projeção de conversões e receita baseada em tráfego orgânico: `*conversion-projections --traffic "traffic-projections.json" --audience "{{audience}}" --export "revenue-projections.json"`
4. Configurar dashboard de acompanhamento — métricas semanais, mensais, trimestrais: `*reporting-dashboard --kpis "seo-kpis.yaml" --connect-gsc "gsc" --connect-ga4 "ga4" --export "dashboard-config.yaml"`
5. Criar cadência de revisão estratégica — quando e como ajustar a estratégia: `*review-cadence --strategy-doc "." --export "review-protocol.md"`
6. Compilar estratégia completa em documento master: `*strategy-compile --all-data "." --template "seo-strategy-master" --export "seo-strategy-complete.pdf"`

Entregável: `traffic-projections.md` e `seo-strategy-complete.pdf` — documento master da estratégia.

---

## Comandos Disponíveis

- `*seed-keywords` — Definição de keywords semente por objetivo de negócio
- `*keyword-expansion` — Expansão semântica do universo de keywords
- `*intent-classify` — Classificação de keywords por intenção de busca
- `*cluster-builder` — Agrupamento em topic clusters semânticos
- `*pillar-definition` — Definição de pillar pages por cluster
- `*gap-classification` — Classificação de gaps de conteúdo
- `*link-opportunities` — Identificação de oportunidades de link building
- `*traffic-model` — Modelagem de projeção de tráfego orgânico
- `*kpi-definition` — Definição de KPIs alinhados ao negócio
- `*strategy-compile` — Compilação do documento master de estratégia

## Critérios de Conclusão

- [ ] Keyword research completo com universo qualificado e classificado por intenção
- [ ] Funnel keyword map conectando termos a estágios da jornada do cliente
- [ ] Topic clusters definidos com pillar pages e supporting content mapeados
- [ ] Arquitetura de links internos desenhada para cada cluster
- [ ] Content gap analysis com oportunidades priorizadas e ângulos únicos
- [ ] Link building strategy com táticas, volume mensal e métricas
- [ ] On-page playbook com protocolo de otimização por tipo de página
- [ ] Projeções de tráfego por fase com intervalos de confiança
- [ ] KPIs definidos e dashboard de acompanhamento configurado
- [ ] Documento master de estratégia compilado e pronto para apresentação
