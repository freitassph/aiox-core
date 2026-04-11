---
task: pa-analytics-audit
agent: pa-prism
description: "Auditoria completa de analytics e configuração de measurement plan estratégico"
inputs: [ga4-access, ad-accounts, website-url, business-goals]
outputs: [analytics-audit-report, measurement-plan, tracking-setup, kpi-dashboard]
elicit: true
---

# Task: Auditoria de Analytics e Measurement Plan

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

Realizar uma auditoria técnica abrangente de todo o ecossistema de analytics do cliente — desde a configuração do GA4 até os pixels e conversões em plataformas de anúncios — identificando lacunas de tracking, dados incorretos e oportunidades de mensuração que estão impedindo decisões baseadas em dados confiáveis. A ausência de dados precisos é o maior risco operacional de qualquer campanha digital.

O processo avalia a qualidade dos dados coletados, a completude das conversões rastreadas e a consistência entre plataformas. Configurações incorretas de GA4, eventos duplicados, conversões não rastreadas e atribuição quebrada são problemas comuns que distorcem a percepção de performance e levam a alocações de budget ineficientes — problemas que esta auditoria identifica e corrige.

Ao final, o cliente recebe um measurement plan estratégico alinhado aos `business-goals`, com todas as ferramentas de analytics corretamente configuradas, um KPI dashboard operacional e um protocolo de manutenção para garantir a integridade dos dados ao longo do tempo.

## Processo de Execução

### Fase 1 — Auditoria do Estado Atual (Dia 1)

1. Acessar `ga4-access` e mapear a estrutura de propriedades: contas, propriedades, streams de dados
2. Verificar configuração de Data Streams: web, iOS, Android e suas integrações
3. Auditar Enhanced Measurement: scroll, cliques externos, vídeos, pesquisa no site
4. Revisar configurações de sessão, retenção de dados e filtros de IP internos
5. Verificar integrações ativas: Google Ads, Search Console, BigQuery, Merchant Center
6. Mapear `ad-accounts` conectados e status de vinculação
7. Executar `*ga4-audit --property "{{ga4-access}}" --depth full`

Entregável: `ga4-structure-audit.md` com inventário completo da configuração atual

---

### Fase 2 — Verificação de Qualidade de Dados (Dia 1-2)

1. Analisar relatório de eventos do GA4: identificar eventos com nomenclatura inconsistente
2. Verificar presença de tráfego interno, bots e spam nas propriedades
3. Comparar sessões e usuários entre GA4 e ferramentas de server analytics do `website-url`
4. Identificar discrepâncias entre dados do GA4 e das plataformas de anúncios
5. Verificar duplicação de tags via Google Tag Manager ou código direto
6. Avaliar configuração de cross-domain tracking se aplicável
7. Executar `*data-quality-check --ga4 "{{ga4-access}}" --url "{{website-url}}" --accounts "{{ad-accounts}}"`

Entregável: `data-quality-report.md` com problemas encontrados e impacto na confiabilidade dos dados

---

### Fase 3 — Mapeamento de Gaps de Tracking (Dia 2)

1. Cruzar `business-goals` com eventos atualmente rastreados para identificar lacunas críticas
2. Mapear jornada do usuário no `website-url` e identificar micro e macro-conversões não monitoradas
3. Verificar rastreamento de formulários, cliques em WhatsApp/telefone, downloads e vídeos
4. Auditar pixel do Meta Ads, LinkedIn Insight Tag e demais pixels em `ad-accounts`
5. Verificar se eventos de conversão nas plataformas de anúncios estão corretamente configurados
6. Documentar lista priorizada de gaps por impacto no negócio
7. Executar `*tracking-gap-analysis --goals "{{business-goals}}" --url "{{website-url}}"`

Entregável: `tracking-gaps.md` com lista priorizada de eventos não rastreados e impacto por gap

---

### Fase 4 — Configuração e Correção do GA4 (Dia 2-3)

1. Corrigir problemas críticos identificados: filtros de IP, exclusões de tráfego interno, bot filtering
2. Configurar ou corrigir eventos personalizados para cobrir gaps críticos identificados
3. Implementar nomenclatura padronizada de eventos seguindo convenção `objeto_ação`
4. Configurar conversões no GA4 alinhadas aos objetivos de negócio do cliente
5. Configurar funis de conversão e relatórios de exploração para as jornadas principais
6. Documentar todas as alterações realizadas com justificativa
7. Executar `*ga4-setup --fixes "{{tracking-gaps}}" --conventions snake_case`

Entregável: GA4 corrigido e documentado com registro de todas as alterações em `ga4-changelog.md`

---

### Fase 5 — Configuração de Conversion Tracking (Dia 3-4)

1. Configurar ou corrigir conversões no Google Ads vinculadas às macroconversões do GA4
2. Configurar eventos de conversão no Meta Ads Manager alinhados às conversões do GA4
3. Verificar e configurar conversão melhorada (Enhanced Conversions) no Google Ads
4. Configurar Conversions API do Meta para reduzir gap de atribuição causado por bloqueadores
5. Implementar UTM naming convention padronizado para todas as campanhas em `ad-accounts`
6. Testar e validar o disparo de cada conversão configurada usando ferramentas de debug
7. Executar `*conversion-setup --accounts "{{ad-accounts}}" --conversions "{{tracking-gaps}}"`

Entregável: `tracking-setup.md` com todas as conversões configuradas, testadas e validadas

---

### Fase 6 — Configuração de Dashboard de KPIs (Dia 4)

1. Definir KPIs primários e secundários alinhados aos `business-goals` do cliente
2. Criar dashboard no Looker Studio conectando GA4, Google Ads e Meta Ads
3. Configurar métricas calculadas: ROAS, CAC, LTV estimado, taxa de conversão por etapa
4. Criar visualizações de funil de conversão e jornada do usuário
5. Configurar filtros de data, canal e campanha para análise ad hoc
6. Testar e validar dados no dashboard contra fontes originais
7. Executar `*dashboard-builder --sources ga4,google-ads,meta-ads --kpis "{{business-goals}}"`

Entregável: `kpi-dashboard` (Looker Studio) operacional e validado com dados dos últimos 90 dias

---

### Fase 7 — Measurement Plan Estratégico (Dia 5)

1. Consolidar todos os KPIs, eventos e conversões em documento de measurement plan
2. Definir responsáveis por manutenção de cada ferramenta e cadência de revisão
3. Criar protocolo de QA de dados: verificações semanais e alertas de anomalia
4. Documentar naming conventions e processo de adição de novos eventos
5. Preparar relatório executivo de auditoria com resumo de problemas encontrados e soluções implementadas
6. Apresentar findings, configurações realizadas e measurement plan ao cliente
7. Executar `*measurement-plan --kpis confirmed --protocol maintenance,qa`

Entregável: `measurement-plan.md` completo + `analytics-audit-report.pdf` para apresentação ao cliente

---

## Comandos Disponíveis

- `*ga4-audit` — Auditar estrutura completa de propriedade GA4
- `*data-quality-check` — Verificar qualidade e consistência dos dados entre plataformas
- `*tracking-gap-analysis` — Identificar eventos e conversões não rastreadas
- `*ga4-setup` — Configurar e corrigir eventos, conversões e filtros no GA4
- `*conversion-setup` — Configurar conversion tracking em plataformas de anúncios
- `*dashboard-builder` — Criar dashboard de KPIs no Looker Studio
- `*measurement-plan` — Consolidar KPIs, protocolo de manutenção e QA de dados
- `*utm-generator` — Gerar e padronizar UTM naming convention para todas as campanhas

## Critérios de Conclusão

- [ ] Auditoria completa da estrutura do GA4 documentada com todos os problemas identificados
- [ ] Relatório de qualidade de dados com discrepâncias e impacto na confiabilidade avaliado
- [ ] Lista priorizada de gaps de tracking com impacto por gap documentada
- [ ] GA4 corrigido com eventos padronizados, filtros e conversões configurados
- [ ] Conversion tracking configurado e validado em todas as plataformas de anúncios
- [ ] Conversions API e Enhanced Conversions implementados onde aplicável
- [ ] Dashboard de KPIs operacional conectando GA4 e plataformas de anúncios
- [ ] Measurement plan estratégico completo com responsáveis e cadência de manutenção
- [ ] Relatório executivo de auditoria entregue e apresentado ao cliente
