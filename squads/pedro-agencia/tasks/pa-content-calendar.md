---
task: pa-content-calendar
agent: pa-chronicle
description: "Criação e gestão de calendário editorial multi-canal para 90 dias"
inputs: [content-strategy, brand-voice, seo-briefs, social-strategy, audience-personas]
outputs: [editorial-calendar-90d, content-briefs, repurposing-plan, production-schedule]
elicit: true
---

# Task: Content Calendar — Calendário Editorial 90 Dias

## Objetivo

Transformar a estratégia de conteúdo em um calendário editorial operacional que a equipe pode executar sem depender de decisões de última hora. Um bom calendário não é apenas uma planilha com datas — é um sistema de produção que garante consistência de volume, qualidade, diversidade de formatos e alinhamento estratégico ao longo do tempo.

O calendário de 90 dias é construído com visibilidade suficiente para planejar produção, mas flexível o bastante para absorver oportunidades de conteúdo relevante que surgem no dia a dia. Cada peça está conectada a um pilar estratégico, a uma persona, a uma fase do funil e a um canal de distribuição — eliminando conteúdo genérico que desperdiça esforço de produção.

O sistema de repurposing multiplica o impacto de cada asset produzido: um artigo longo vira carrossel no Instagram, thread no LinkedIn, roteiro de vídeo curto no TikTok e script de podcast. A equipe produz menos e publica mais, com coerência de mensagem em todos os canais.

## Processo de Execução

### Fase 1 — Audit do Conteúdo Existente (Dia 1, 2h)

1. Inventariar todo conteúdo existente — blog, social, vídeo, email, materiais ricos: `*content-inventory --brand-strategy "{{content-strategy}}" --channels "all" --export "existing-content.json"`
2. Classificar conteúdo por performance e relevância atual — o que reutilizar, atualizar ou aposentar: `*content-classification --inventory "existing-content.json" --criteria "performance,relevance,freshness" --export "content-status.json"`
3. Identificar conteúdo evergreen com potencial de repurposing imediato: `*evergreen-identification --inventory "existing-content.json" --status "content-status.json" --export "repurposing-candidates.json"`
4. Mapear gaps de cobertura vs pilares da content strategy: `*coverage-gaps --strategy "{{content-strategy}}" --inventory "existing-content.json" --export "coverage-gaps.json"`
5. Listar datas sazonais, eventos do setor e momentos de marca relevantes nos próximos 90 dias: `*seasonal-calendar --industry "{{content-strategy}}" --period 90d --export "seasonal-dates.yaml"`

Entregável: `content-audit-snapshot.md` com inventário classificado, gaps de cobertura e oportunidades de repurposing.

---

### Fase 2 — Definição de Pillar Themes (Dia 1, 1-2h)

1. Confirmar e detalhar os content pillars para o trimestre baseados na strategy: `*pillar-themes --strategy "{{content-strategy}}" --seo-briefs "{{seo-briefs}}" --period Q1 --export "pillar-themes.yaml"`
2. Definir proporção de conteúdo por pilar no mix do calendário: `*pillar-mix --themes "pillar-themes.yaml" --social-strategy "{{social-strategy}}" --export "pillar-distribution.yaml"`
3. Estabelecer temas mensais como âncoras temáticas para cada mês: `*monthly-themes --pillars "pillar-themes.yaml" --seasonal "seasonal-dates.yaml" --export "monthly-themes.yaml"`
4. Mapear keywords SEO prioritárias para os pilares do trimestre: `*seo-pillar-mapping --seo-briefs "{{seo-briefs}}" --pillars "pillar-themes.yaml" --export "seo-content-targets.yaml"`
5. Definir conteúdo âncora por mês — o asset de maior investimento e impacto de cada período: `*anchor-content --monthly-themes "monthly-themes.yaml" --resources "{{content-strategy}}" --export "anchor-content-plan.yaml"`

Entregável: `pillar-themes.yaml` com temas por pilar, distribuição mensal e keywords SEO mapeadas.

---

### Fase 3 — Channel Mapping (Dia 1-2, 2h)

1. Definir cadência de publicação por canal baseada na social strategy e capacidade de produção: `*publication-cadence --social-strategy "{{social-strategy}}" --resources "{{content-strategy}}" --export "cadence.yaml"`
2. Mapear quais formatos de conteúdo vão para quais canais — distribuição cross-channel: `*channel-format-map --social-strategy "{{social-strategy}}" --content-strategy "{{content-strategy}}" --export "channel-map.yaml"`
3. Definir lead time de produção por formato e canal — quanto antes cada peça precisa estar pronta: `*lead-times --formats "channel-map.yaml" --export "production-lead-times.yaml"`
4. Estabelecer protocolo de cross-posting — o que vai para todos os canais vs exclusivo: `*crosspost-rules --channel-map "channel-map.yaml" --brand-voice "{{brand-voice}}" --export "crosspost-protocol.yaml"`
5. Definir janelas de publicação por canal — horários e dias com melhor performance histórica: `*optimal-timing --social-strategy "{{social-strategy}}" --channels "channel-map.yaml" --export "publishing-windows.yaml"`

Entregável: `channel-map.yaml` com cadência, formatos, lead times e janelas de publicação por canal.

---

### Fase 4 — Calendar Build (Dia 2-3, 4-5h)

1. Construir estrutura base do calendário de 90 dias com semanas temáticas: `*calendar-scaffold --monthly-themes "monthly-themes.yaml" --cadence "cadence.yaml" --period 90d --export "calendar-base.yaml"`
2. Alocar conteúdo âncora e conteúdo SEO principal nas datas estratégicas: `*anchor-allocation --calendar "calendar-base.yaml" --anchor-content "anchor-content-plan.yaml" --seo-targets "seo-content-targets.yaml" --export "calendar-v1.yaml"`
3. Preencher conteúdo de social media por canal seguindo mix e cadência: `*social-content-fill --calendar "calendar-v1.yaml" --channel-map "channel-map.yaml" --pillar-distribution "pillar-distribution.yaml" --export "calendar-v2.yaml"`
4. Inserir conteúdo sazonal e de datas comemorativas relevantes: `*seasonal-insertion --calendar "calendar-v2.yaml" --seasonal "seasonal-dates.yaml" --export "calendar-v3.yaml"`
5. Distribuir email marketing e newsletter no calendário: `*email-scheduling --calendar "calendar-v3.yaml" --email-strategy "{{content-strategy}}" --export "calendar-v4.yaml"`
6. Revisar distribuição de carga — identificar semanas sobrecarregadas e redistribuir: `*workload-balance --calendar "calendar-v4.yaml" --lead-times "production-lead-times.yaml" --export "calendar-final.yaml"`
7. Exportar calendário em múltiplos formatos — planilha, Notion, Trello, visual: `*calendar-export --calendar "calendar-final.yaml" --formats "xlsx,notion,visual" --export "editorial-calendar-90d"`

Entregável: `editorial-calendar-90d.xlsx` com todas as peças agendadas, responsáveis, status e canais.

---

### Fase 5 — Brief Writing (Dia 3-4, 4-5h)

1. Criar briefs detalhados para os 10 conteúdos âncora e de maior impacto do trimestre: `*brief-anchor --content "anchor-content-plan.yaml" --seo-briefs "{{seo-briefs}}" --voice "{{brand-voice}}" --export "anchor-briefs.md"`
2. Criar briefs de conteúdo SEO — keyword targeting, search intent, estrutura, fontes: `*brief-seo --seo-targets "seo-content-targets.yaml" --briefs "{{seo-briefs}}" --voice "{{brand-voice}}" --export "seo-briefs-complete.md"`
3. Criar briefs de social media — objective, hook, formato, CTA, hashtags, referência visual: `*brief-social --calendar "calendar-final.yaml" --channel-map "channel-map.yaml" --voice "{{brand-voice}}" --export "social-briefs.md"`
4. Criar template de brief padronizado para conteúdos recorrentes que a equipe preenche: `*brief-template --types "blog,reel,carrossel,email,podcast" --voice "{{brand-voice}}" --export "brief-templates.yaml"`
5. Documentar referências de estilo e exemplos de conteúdo aprovado por formato: `*style-references --voice "{{brand-voice}}" --top-content "existing-content.json" --export "style-guide-social.md"`

Entregável: `content-briefs.md` com briefs completos para os conteúdos principais e templates para recorrentes.

---

### Fase 6 — Repurposing System (Dia 4, 2-3h)

1. Definir regras de repurposing por formato âncora — o que cada tipo de conteúdo pode gerar: `*repurposing-rules --formats "channel-map.yaml" --export "repurposing-matrix.yaml"`
2. Criar plano de repurposing para os conteúdos âncora do trimestre: `*repurposing-plan --anchor-content "anchor-content-plan.yaml" --matrix "repurposing-matrix.yaml" --export "repurposing-plan.yaml"`
3. Documentar processo de adaptação por formato — como transformar sem apenas copiar: `*adaptation-guide --formats "repurposing-matrix.yaml" --voice "{{brand-voice}}" --export "adaptation-guide.md"`
4. Mapear repurposing de conteúdo evergreen identificado — reativar assets com update mínimo: `*evergreen-repurposing --candidates "repurposing-candidates.json" --calendar "calendar-final.yaml" --export "evergreen-plan.yaml"`
5. Criar production schedule com datas de criação, revisão e publicação por peça: `*production-schedule --calendar "calendar-final.yaml" --lead-times "production-lead-times.yaml" --export "production-schedule.xlsx"`
6. Compilar deliverables finais em pacote de entrega ao cliente: `*deliverable-compile --all-data "." --template "content-calendar-package" --export "content-calendar-complete.pdf"`

Entregável: `repurposing-plan.yaml` e `production-schedule.xlsx` — sistema de reaproveitamento e cronograma de produção.

---

## Comandos Disponíveis

- `*content-inventory` — Inventário completo do conteúdo existente
- `*pillar-themes` — Definição de temas por pilar para o trimestre
- `*monthly-themes` — Estabelecimento de temas mensais âncora
- `*calendar-scaffold` — Estrutura base do calendário 90 dias
- `*workload-balance` — Balanceamento de carga de produção
- `*calendar-export` — Exportação em múltiplos formatos
- `*brief-anchor` — Criação de briefs para conteúdos âncora
- `*brief-seo` — Criação de briefs de conteúdo SEO
- `*repurposing-rules` — Definição de regras de repurposing por formato
- `*production-schedule` — Cronograma de produção com datas e responsáveis

## Critérios de Conclusão

- [ ] Audit do conteúdo existente completo com classificação por performance e relevância
- [ ] Gaps de cobertura vs pilares estratégicos mapeados
- [ ] Pillar themes e temas mensais definidos para os 90 dias
- [ ] Keywords SEO alocadas nos pilares do calendário
- [ ] Cadência de publicação definida por canal com janelas de horário
- [ ] Calendário de 90 dias completo com todas as peças e responsáveis
- [ ] Briefs detalhados para conteúdos âncora e SEO prioritários
- [ ] Templates de brief padronizados para conteúdos recorrentes
- [ ] Sistema de repurposing documentado com matriz por formato
- [ ] Production schedule com datas de criação e revisão por peça
