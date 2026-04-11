---
task: pa-pr-strategy
agent: pa-aegis
description: "Estratégia completa de PR e comunicação — narrativa, media relations e gestão de crise"
inputs: [brand-strategy, news-angle, target-media, spokesperson, objectives]
outputs: [pr-strategy, press-kit, media-list, story-angles, crisis-protocol]
elicit: true
---

# Task: PR Strategy — Estratégia de Relações Públicas e Comunicação

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

Construir uma estratégia de PR que gera cobertura editorial genuína — não apenas comunicados de imprensa enviados ao vazio. A cobertura conquistada (earned media) tem credibilidade que nenhum anúncio compra, mas ela é resultado de um trabalho sistemático de construção de relacionamento com jornalistas, posicionamento de narrativa e criação de angles que são genuinamente noticiáveis para as publicações-alvo.

A estratégia parte de uma narrativa de marca diferenciada que conecta a história da empresa às conversas que já estão acontecendo na mídia — em vez de tentar criar uma conversa do zero. Isso aumenta dramaticamente as chances de cobertura porque posiciona a marca como uma voz relevante em temas que os editores já estão cobrindo.

O protocolo de gestão de crise não é um documento que fica na gaveta — é um sistema testado que garante que a marca responde com velocidade, consistência e controle em qualquer cenário adverso. Em tempos de crise, os primeiros 24 horas definem a narrativa para semanas. A estratégia define exatamente o que fazer em cada hora desse período crítico.

## Processo de Execução

### Fase 1 — Narrative Development (Dia 1-2, 3-4h)

1. Auditar narrativa atual da marca — como é percebida hoje vs como quer ser percebida: `*narrative-audit --brand-strategy "{{brand-strategy}}" --current-coverage "{{news-angle}}" --export "narrative-gap.yaml"`
2. Identificar as conversas dominantes no setor — temas que a mídia já cobre intensamente: `*media-conversation-mapping --industry "{{brand-strategy}}" --target-media "{{target-media}}" --export "media-conversations.yaml"`
3. Definir o ponto de vista único da marca em cada conversa dominante: `*brand-pov --conversations "media-conversations.yaml" --brand-strategy "{{brand-strategy}}" --export "brand-pov.yaml"`
4. Construir a narrativa master da empresa — a história que conecta origem, presente e visão: `*master-narrative --brand-strategy "{{brand-strategy}}" --pov "brand-pov.yaml" --objectives "{{objectives}}" --export "master-narrative.md"`
5. Identificar o proof pool — dados, cases, estudos, resultados que sustentam a narrativa: `*proof-mapping --narrative "master-narrative.md" --brand-strategy "{{brand-strategy}}" --export "proof-pool.yaml"`
6. Desenvolver mensagens-chave por audiência — imprensa, investidores, parceiros, clientes: `*key-messages --narrative "master-narrative.md" --audiences "press,investors,partners,customers" --export "key-messages.yaml"`
7. Criar elevator pitch de PR — 30 segundos que capturam o angle mais noticiável da marca: `*pr-elevator-pitch --narrative "master-narrative.md" --news-angle "{{news-angle}}" --export "pr-pitch.md"`

Entregável: `master-narrative.md` com narrativa da empresa, POV por tema, mensagens-chave e proof pool.

---

### Fase 2 — Media Landscape Mapping (Dia 2, 2-3h)

1. Mapear o ecossistema de mídia relevante — veículos, podcasts, newsletters, influenciadores B2B: `*media-ecosystem --target-media "{{target-media}}" --brand-strategy "{{brand-strategy}}" --export "media-map.json"`
2. Classificar veículos por tier — nacionais de grande alcance, especializados, regionais, digitais: `*media-tier-classification --ecosystem "media-map.json" --objectives "{{objectives}}" --export "media-tiers.yaml"`
3. Identificar jornalistas e editores específicos que cobrem os temas da narrativa: `*journalist-mapping --media-tiers "media-tiers.yaml" --conversations "media-conversations.yaml" --export "journalist-database.yaml"`
4. Pesquisar histórico de cobertura dos jornalistas-alvo — o que publicaram, ângulos preferidos, fontes usadas: `*journalist-research --journalists "journalist-database.yaml" --period 12m --export "journalist-profiles.yaml"`
5. Identificar oportunidades de timing — calendário editorial, temas de pauta recorrentes: `*editorial-calendar-intel --journalists "journalist-profiles.yaml" --media-tiers "media-tiers.yaml" --export "timing-opportunities.yaml"`
6. Mapear concorrentes na mídia — quais estão aparecendo, onde e com qual narrativa: `*competitor-media-presence --brand-strategy "{{brand-strategy}}" --media-map "media-map.json" --export "competitor-coverage.yaml"`

Entregável: `media-list.yaml` com database de jornalistas, profiles, veículos por tier e oportunidades de timing.

---

### Fase 3 — Press Kit Creation (Dia 2-3, 3h)

1. Redigir company boilerplate em múltiplos comprimentos — 50, 100, 200 palavras: `*boilerplate --narrative "master-narrative.md" --brand-strategy "{{brand-strategy}}" --lengths "50,100,200" --export "boilerplate.md"`
2. Criar fact sheet da empresa — dados, marcos, números-chave em formato escaneável: `*fact-sheet --brand-strategy "{{brand-strategy}}" --proof "proof-pool.yaml" --export "fact-sheet.md"`
3. Redigir bios de porta-vozes em tom jornalístico — credenciais, perspectiva, ângulo de especialista: `*spokesperson-bios --spokesperson "{{spokesperson}}" --narrative "master-narrative.md" --export "bios.md"`
4. Criar FAQ para jornalistas — perguntas difíceis antecipadas com respostas aprovadas: `*press-faq --narrative "master-narrative.md" --key-messages "key-messages.yaml" --export "press-faq.md"`
5. Selecionar e formatar proof points visuais — infográficos, dados, timeline da empresa: `*visual-press-assets --proof "proof-pool.yaml" --brand-strategy "{{brand-strategy}}" --export "visual-assets-spec.yaml"`
6. Compilar press kit completo em formato digital — PDF + landing page de imprensa: `*press-kit-compile --all-assets "." --export "press-kit-complete"`

Entregável: `press-kit-complete/` com boilerplate, fact sheet, bios, FAQ e assets visuais — pronto para envio imediato.

---

### Fase 4 — Story Angle Development (Dia 3, 3h)

1. Desenvolver 10 story angles diferenciados baseados na narrativa e nas conversas da mídia: `*story-angles --narrative "master-narrative.md" --conversations "media-conversations.yaml" --objectives "{{objectives}}" --export "story-angles.yaml"`
2. Para cada angle, definir: headline, lead, data points, porta-voz, timing ideal: `*angle-development --angles "story-angles.yaml" --proof "proof-pool.yaml" --spokesperson "{{spokesperson}}" --export "angle-briefs.yaml"`
3. Classificar angles por urgência e newsworthiness — breaking news vs evergreen vs embargado: `*angle-classification --angles "angle-briefs.yaml" --timing "timing-opportunities.yaml" --export "angle-priorities.yaml"`
4. Criar pitch templates por tipo de angle e veículo — formato varia para newsletter vs TV vs podcast: `*pitch-templates --angles "angle-priorities.yaml" --media-tiers "media-tiers.yaml" --export "pitch-templates.yaml"`
5. Desenvolver exclusive angles para veículos tier-1 — exclusividades aumentam taxa de publicação: `*exclusive-angles --angles "angle-priorities.yaml" --tier1-media "media-tiers.yaml" --export "exclusive-pitches.yaml"`
6. Criar calendário de pitching — quando fazer cada pitch baseado em timing e newsworthiness: `*pitch-calendar --angles "angle-priorities.yaml" --timing "timing-opportunities.yaml" --export "pitch-calendar.yaml"`

Entregável: `story-angles.yaml` com 10 angles desenvolvidos, pitch templates e calendário de pitching.

---

### Fase 5 — Outreach Strategy (Dia 3-4, 2h)

1. Definir sequência de outreach por tier de mídia — quem abordar primeiro e como: `*outreach-sequence --media-tiers "media-tiers.yaml" --pitch-calendar "pitch-calendar.yaml" --export "outreach-sequence.yaml"`
2. Criar protocolo de follow-up — cadência, tom, limite de tentativas por jornalista: `*followup-protocol --journalists "journalist-profiles.yaml" --export "followup-rules.yaml"`
3. Definir estratégia de relacionamento de longo prazo com jornalistas-chave: `*relationship-strategy --journalists "journalist-profiles.yaml" --tier1 true --export "relationship-plan.yaml"`
4. Estabelecer protocolo de embargo — como gerenciar releases em tempo controlado: `*embargo-protocol --angles "exclusive-pitches.yaml" --export "embargo-rules.yaml"`
5. Criar sistema de tracking de resultados — cobertura conquistada, AVE, mensagens transmitidas: `*coverage-tracking --media-list "media-list.yaml" --export "tracking-system.yaml"`
6. Definir metas de PR por período — número de matérias, reach estimado, tier mínimo: `*pr-kpis --objectives "{{objectives}}" --media-map "media-map.json" --export "pr-kpis.yaml"`

Entregável: `pr-outreach-strategy.md` com sequência de outreach, protocolo de relacionamento e sistema de tracking.

---

### Fase 6 — Crisis Protocol (Dia 4, 2-3h)

1. Mapear cenários de crise de alta probabilidade para o perfil do negócio: `*crisis-scenarios --brand-strategy "{{brand-strategy}}" --industry "{{objectives}}" --export "crisis-scenarios.yaml"`
2. Criar risk matrix — probabilidade vs impacto de cada cenário: `*crisis-risk-matrix --scenarios "crisis-scenarios.yaml" --export "risk-matrix.yaml"`
3. Definir processo de decisão em crise — quem ativa, quem aprova, quem fala: `*crisis-governance --spokesperson "{{spokesperson}}" --brand-strategy "{{brand-strategy}}" --export "crisis-governance.yaml"`
4. Redigir dark posts — comunicados pré-aprovados para os 5 cenários mais prováveis: `*dark-posts --scenarios "crisis-scenarios.yaml" --key-messages "key-messages.yaml" --export "dark-posts.md"`
5. Criar timeline de resposta para primeiras 24 horas de crise — hora a hora: `*crisis-timeline-24h --governance "crisis-governance.yaml" --export "crisis-timeline.yaml"`
6. Definir protocolo de social media em crise — o que postar, pausar, monitorar: `*social-crisis-rules --governance "crisis-governance.yaml" --export "social-crisis-protocol.yaml"`
7. Compilar o Crisis Playbook completo e o PR Strategy Document master: `*strategy-compile --all-data "." --template "pr-strategy-master" --export "pr-strategy-complete.pdf"`

Entregável: `crisis-protocol.md` com risk matrix, dark posts, timeline de 24h e `pr-strategy-complete.pdf`.

---

## Comandos Disponíveis

- `*narrative-audit` — Auditoria da narrativa atual vs desejada
- `*media-conversation-mapping` — Mapeamento das conversas dominantes na mídia
- `*master-narrative` — Construção da narrativa master da empresa
- `*journalist-mapping` — Mapeamento de jornalistas por tema de cobertura
- `*story-angles` — Desenvolvimento de angles noticiáveis
- `*pitch-templates` — Criação de templates de pitch por tipo e veículo
- `*press-kit-compile` — Compilação do press kit completo
- `*crisis-scenarios` — Mapeamento de cenários de crise
- `*dark-posts` — Redação de comunicados pré-aprovados por cenário
- `*strategy-compile` — Compilação do documento master de PR

## Critérios de Conclusão

- [ ] Narrativa master da empresa construída com POV por tema e proof pool
- [ ] Mensagens-chave definidas por audiência (imprensa, investidores, parceiros, clientes)
- [ ] Database de jornalistas com profiles e histórico de cobertura
- [ ] Veículos classificados em tiers com oportunidades de timing mapeadas
- [ ] Press kit completo com boilerplate, fact sheet, bios e FAQ
- [ ] Mínimo 10 story angles desenvolvidos com pitch templates
- [ ] Calendário de pitching definido com sequência de outreach por tier
- [ ] Protocolo de relacionamento de longo prazo com jornalistas tier-1
- [ ] Risk matrix de crise com cenários de alta probabilidade mapeados
- [ ] Crisis protocol completo com dark posts e timeline de 24 horas
