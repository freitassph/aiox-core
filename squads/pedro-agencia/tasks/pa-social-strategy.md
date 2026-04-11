---
task: pa-social-strategy
agent: pa-pulse
description: "Estratégia completa de social media — plataformas, conteúdo, crescimento e engajamento"
inputs: [brand-strategy, audience-personas, business-goals, current-channels]
outputs: [social-strategy, platform-playbooks, content-mix, growth-plan, engagement-protocol]
elicit: true
---

# Task: Social Strategy — Estratégia de Social Media Completa

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

Construir uma estratégia de social media que vai além de frequência de posts e formatos — ela define como a marca se comporta, cresce e converte em cada plataforma de forma coerente com seus objetivos de negócio. Cada plataforma recebe uma abordagem própria porque o comportamento do usuário, o algoritmo e o tipo de conteúdo que performa variam radicalmente entre elas.

A estratégia parte de dados reais dos canais atuais e de benchmark competitivo para definir onde investir energia — sem dispersar esforços em plataformas que não entregam retorno para o perfil do negócio. A alocação de recursos é uma decisão estratégica central, não uma suposição.

O engagement protocol não é apenas um SLA de resposta, mas um sistema que transforma interações em oportunidades de negócio, construção de comunidade e geração de prova social. O resultado é uma equipe de social media que sabe exatamente o que fazer em cada situação — da publicação ao crise management.

## Processo de Execução

### Fase 1 — Social Audit (Dia 1, 3h)

1. Exportar métricas de todos os canais atuais — crescimento, alcance, engajamento, conversão: `*channel-audit --channels "{{current-channels}}" --period 12m --export "channel-metrics.json"`
2. Identificar conteúdos top performers por canal — o quê performou e por quê: `*top-content-analysis --channels "{{current-channels}}" --top-percentile 10 --export "top-content.json"`
3. Analisar perfil da audiência atual em cada canal — dados demográficos, comportamento, horários: `*audience-insights --channels "{{current-channels}}" --export "audience-data.json"`
4. Mapear consistência de voz e visual nos canais atuais — gaps e inconsistências: `*brand-consistency-audit --channels "{{current-channels}}" --brand-strategy "{{brand-strategy}}" --export "consistency-report.json"`
5. Avaliar perfil de social media dos concorrentes — presença, crescimento, engajamento: `*competitor-social-audit --brand-strategy "{{brand-strategy}}" --channels "{{current-channels}}" --export "competitor-social.json"`
6. Calcular share of voice por canal vs concorrentes: `*share-of-voice --competitor-data "competitor-social.json" --channels "{{current-channels}}" --export "sov-report.json"`

Entregável: `social-audit-report.md` com diagnóstico completo dos canais, benchmark competitivo e oportunidades identificadas.

---

### Fase 2 — Platform Strategy (Dia 1-2, 3h)

1. Cruzar presença das personas com canais disponíveis — onde a audiência realmente está: `*audience-platform-mapping --personas "{{audience-personas}}" --platforms "instagram,linkedin,tiktok,youtube,x,pinterest,threads" --export "platform-fit.json"`
2. Avaliar fit de cada plataforma com os objetivos de negócio e tipo de conteúdo da marca: `*platform-business-fit --goals "{{business-goals}}" --brand-strategy "{{brand-strategy}}" --platform-data "platform-fit.json" --export "platform-scores.json"`
3. Definir plataformas primárias (foco máximo), secundárias (presença ativa) e terciárias (mínimo): `*platform-prioritization --scores "platform-scores.json" --resource-constraints "{{business-goals}}" --export "platform-tiers.yaml"`
4. Para cada plataforma primária, definir objetivo específico — awareness, consideração, conversão, comunidade: `*platform-objectives --tiers "platform-tiers.yaml" --goals "{{business-goals}}" --export "platform-objectives.yaml"`
5. Definir KPIs por plataforma e frequência de publicação alvo: `*platform-kpis --objectives "platform-objectives.yaml" --benchmarks-industry true --export "platform-kpis.yaml"`
6. Estabelecer tom e comportamento específico por plataforma dentro da identidade da marca: `*platform-voice --platforms "platform-tiers.yaml" --brand-strategy "{{brand-strategy}}" --export "platform-voices.yaml"`

Entregável: `platform-strategy.md` com hierarquia de plataformas, objetivos por canal, KPIs e personalidade de cada perfil.

---

### Fase 3 — Content Strategy (Dia 2, 3-4h)

1. Definir content pillars de social media alinhados aos pilares de marca e objetivos: `*content-pillars --brand-strategy "{{brand-strategy}}" --platform-objectives "platform-objectives.yaml" --export "social-pillars.yaml"`
2. Criar content mix por plataforma — proporção de cada tipo de conteúdo: `*content-mix --pillars "social-pillars.yaml" --platforms "platform-tiers.yaml" --export "content-mix.yaml"`
3. Definir formatos de conteúdo por plataforma — Reels, Carrossel, Story, Live, Thread, etc.: `*format-strategy --platforms "platform-tiers.yaml" --top-content "top-content.json" --export "format-guide.yaml"`
4. Estabelecer série e formatos recorrentes que constroem audiência fiel: `*recurring-formats --pillars "social-pillars.yaml" --audience "audience-data.json" --export "series-concepts.yaml"`
5. Criar briefing visual de social media — paleta, tipografia, templates por formato: `*visual-brief --brand-strategy "{{brand-strategy}}" --formats "format-guide.yaml" --export "visual-social-brief.yaml"`
6. Definir protocolo de hashtag por plataforma — branded, niche, trending: `*hashtag-strategy --platforms "platform-tiers.yaml" --personas "{{audience-personas}}" --export "hashtag-protocol.yaml"`
7. Estabelecer política de conteúdo gerado por usuário (UGC) — repost, curadoria, incentivo: `*ugc-protocol --brand-strategy "{{brand-strategy}}" --goals "{{business-goals}}" --export "ugc-policy.yaml"`

Entregável: `content-mix.yaml` e `content-strategy.md` com pillars, mix por plataforma, formatos e briefing visual.

---

### Fase 4 — Community Building & Engagement (Dia 2-3, 2h)

1. Definir persona da marca como membro da comunidade — como interage, com quem, com que frequência: `*community-persona --brand-strategy "{{brand-strategy}}" --platforms "platform-tiers.yaml" --export "community-persona.yaml"`
2. Criar engagement protocol — SLA de resposta, tom por tipo de interação, escalonamento: `*engagement-protocol --community-persona "community-persona.yaml" --platforms "platform-tiers.yaml" --export "engagement-protocol.yaml"`
3. Definir estratégia de proactive engagement — perfis a seguir, conversas a entrar, hashtags a monitorar: `*proactive-engagement --platforms "platform-tiers.yaml" --personas "{{audience-personas}}" --export "proactive-plan.yaml"`
4. Criar plano de construção de comunidade — grupos, chats, eventos, colaborações: `*community-building-plan --goals "{{business-goals}}" --platforms "platform-tiers.yaml" --export "community-plan.yaml"`
5. Estabelecer protocolo de gestão de crise em social media — cenários, respostas, escalonamento: `*crisis-protocol --brand-strategy "{{brand-strategy}}" --export "social-crisis-protocol.yaml"`

Entregável: `engagement-protocol.md` com SLAs, protocolos de resposta, estratégia proativa e gestão de crise.

---

### Fase 5 — Paid Social Strategy (Dia 3, 2h)

1. Definir papel do paid social em relação ao orgânico — complementaridade e integração: `*paid-organic-integration --platform-objectives "platform-objectives.yaml" --goals "{{business-goals}}" --export "paid-strategy.yaml"`
2. Definir objetivos e formatos de anúncio por funil — awareness, consideração, conversão, retenção: `*paid-funnel-strategy --goals "{{business-goals}}" --personas "{{audience-personas}}" --export "paid-funnel.yaml"`
3. Estabelecer estratégia de audience targeting — custom audiences, lookalikes, interesses: `*targeting-strategy --personas "{{audience-personas}}" --platforms "platform-tiers.yaml" --export "targeting-spec.yaml"`
4. Definir protocolo de boosting de conteúdo orgânico — critérios para promover posts: `*boost-protocol --top-content "top-content.json" --kpis "platform-kpis.yaml" --export "boost-protocol.yaml"`
5. Criar framework de budget allocation por plataforma e objetivo: `*budget-framework --paid-funnel "paid-funnel.yaml" --goals "{{business-goals}}" --export "budget-framework.yaml"`

Entregável: `paid-social-strategy.md` com integração orgânico-pago, targeting, budget framework e critérios de boost.

---

### Fase 6 — Analytics & Growth Plan (Dia 3-4, 2h)

1. Configurar tracking e atribuição de social media — UTMs, parâmetros de conversão: `*analytics-setup --platforms "platform-tiers.yaml" --goals "{{business-goals}}" --export "analytics-config.yaml"`
2. Criar dashboard de social media — métricas operacionais diárias e estratégicas mensais: `*social-dashboard --kpis "platform-kpis.yaml" --platforms "platform-tiers.yaml" --export "dashboard-spec.yaml"`
3. Definir plano de crescimento por plataforma — táticas de crescimento de seguidores qualificados: `*growth-plan --platforms "platform-tiers.yaml" --objectives "platform-objectives.yaml" --export "growth-plan.yaml"`
4. Estabelecer cadência de revisão e otimização da estratégia — semanal, mensal, trimestral: `*review-cadence --strategy "." --export "review-calendar.yaml"`
5. Compilar strategy document completo e platform playbooks individuais: `*strategy-compile --all-data "." --template "social-strategy-master" --export "social-strategy-complete.pdf"`

Entregável: `growth-plan.yaml` e `social-strategy-complete.pdf` — estratégia completa com playbooks por plataforma.

---

## Comandos Disponíveis

- `*channel-audit` — Auditoria de métricas dos canais atuais
- `*competitor-social-audit` — Análise de social media dos concorrentes
- `*platform-prioritization` — Priorização de plataformas por fit e objetivos
- `*content-pillars` — Definição de pilares de conteúdo para social
- `*content-mix` — Definição do mix de conteúdo por plataforma
- `*engagement-protocol` — Criação de protocolo de engajamento e SLAs
- `*crisis-protocol` — Protocolo de gestão de crise em social media
- `*growth-plan` — Plano de crescimento por plataforma
- `*paid-funnel-strategy` — Estratégia de paid social por funil
- `*strategy-compile` — Compilação do documento master de estratégia

## Critérios de Conclusão

- [ ] Social audit completo com métricas históricas e benchmark competitivo
- [ ] Plataformas priorizadas em tiers com justificativa e objetivos por canal
- [ ] KPIs definidos por plataforma com benchmarks do setor
- [ ] Content pillars e mix de conteúdo definidos por plataforma
- [ ] Formatos e séries recorrentes estabelecidos com briefing visual
- [ ] Engagement protocol com SLAs, tom de resposta e protocolo de crise
- [ ] Estratégia de paid social integrada ao orgânico com budget framework
- [ ] Growth plan por plataforma com táticas de crescimento qualificado
- [ ] Dashboard de analytics configurado com métricas operacionais e estratégicas
- [ ] Platform playbooks individuais e documento master compilados
