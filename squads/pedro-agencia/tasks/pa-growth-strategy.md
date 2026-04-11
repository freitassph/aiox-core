---
task: pa-growth-strategy
agent: pa-rocket
description: "Construção de estratégia de growth completa com frameworks AARRR e North Star"
inputs: [business-data, current-metrics, product-data, growth-goals]
outputs: [growth-strategy, north-star-metric, experiment-backlog, growth-roadmap]
elicit: true
---

# Task: Estratégia de Growth Completa — AARRR e North Star

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

Construir a estratégia de crescimento completa do negócio a partir de fundamentos sólidos — diagnóstico honesto do funil AARRR, validação de product-market fit, definição da North Star Metric e construção de um backlog de experimentos priorizados que guia o crescimento dos próximos 90-180 dias.

A estratégia de growth não é um plano de marketing. É o documento que define como o negócio vai crescer de forma sustentável e lucrativa — identificando os alavancadores de crescimento com maior leverage, eliminando os gargalos que mais travam a progressão do usuário pelo funil e criando uma cultura de experimentação baseada em dados.

O pa-rocket opera como Chief Growth Officer: usa dados reais do negócio (não suposições), aplica frameworks de growth de empresas como Dropbox, Slack, Airbnb e Duolingo, e entrega uma estratégia executável com prioridades claras — não um documento bonito que fica na gaveta. Cada recomendação tem hipótese testável, métrica de sucesso e critério de decisão.

## Processo de Execução

### Fase 1 — Growth Audit AARRR (Dia 1-3)

1. `*growth-audit --framework aarrr --data "{{business_data}}"` — auditoria completa do funil AARRR
2. Para cada etapa do framework, analisar métricas atuais e benchmarks:

**Acquisition (Aquisição):**
- Canais ativos: quantos usuários chegam por canal por mês
- CAC por canal: quanto custa adquirir um usuário/lead por fonte
- Qualidade por canal: taxa de ativação por canal de origem
- Rácio de eficiência: LTV/CAC por canal (meta: > 3x)

**Activation (Ativação):**
- Taxa de ativação: % de novos usuários que completam o "momento AHA"
- Time-to-value: quanto tempo leva do cadastro até o primeiro valor percebido
- Onboarding completion rate: % completam o onboarding
- Day-1 retention: % retornam no dia seguinte ao cadastro

**Retention (Retenção):**
- D7, D14, D30 retention rates (benchmark por indústria)
- Cohort analysis: retenção de coortes mensais nos últimos 6 meses (tendência)
- Churn rate mensal: % de usuários/clientes que cancelam ou param de usar
- NPS e CSAT: indicadores de satisfação correlacionados com retenção

**Revenue (Receita):**
- ARPU (Average Revenue Per User) e tendência
- LTV (Customer Lifetime Value) por cohort e por canal de aquisição
- Payback period: meses para recuperar o CAC
- Expansion revenue: upsell, cross-sell, upgrades de plano

**Referral (Indicação):**
- Viral coefficient (K): média de novos usuários por usuário ativo
- NPS Promoters: % de promotores que efetivamente indicam
- Referral program performance: se existir, quantas aquisições gera

3. `*funnel-visualization --steps all` — mapear o funil visualmente com taxas de conversão em cada etapa
4. Identificar: onde o maior volume é perdido (gargalo principal)
5. `*cohort-analysis --metric retention --period 6m` — análise de retenção por coorte
6. Verificar: retenção está melhorando, piorando ou estável nas coortes mais recentes?

Entregável: Growth Audit Report com Score por Etapa AARRR + Funil Visualizado + Cohort Analysis

---

### Fase 2 — PMF Assessment (Dia 3-4)

7. `*pmf-audit --product "{{product}}" --data "{{product_data}}"` — avaliação de product-market fit
8. Framework de avaliação de PMF (múltiplos sinais):

**Sinal 1 — Sean Ellis Test:**
- Pergunta: "Como você se sentiria se não pudesse mais usar este produto?"
- Meta: > 40% responde "Muito desapontado"
- < 40% indica que PMF ainda não foi atingido → growth acelerado sem PMF = burn

**Sinal 2 — Retention Curve:**
- Plote a curva de retenção das coortes
- PMF: curva se "aplana" em um nível não-zero (ex: estabiliza em 20%+)
- Sem PMF: curva vai a zero — todos os usuários abandonam eventualmente

**Sinal 3 — Net Promoter Score:**
- NPS > 50: forte indicador de PMF
- NPS > 70: product-market fit excepcional (Slack, Apple nível)
- NPS < 30: PMF ainda em construção

**Sinal 4 — Organic Growth:**
- % de novos usuários que vieram por indicação ou descoberta orgânica
- > 30% orgânico: sinal forte de PMF
- 100% dependência de paid: PMF questionável

9. `*pmf-score --signals "{{pmf_signals}}"` — calcular score de PMF composto
10. Decisão de estratégia baseada em PMF score:
    - PMF confirmado (score > 7): acelerar aquisição, escalar canais
    - PMF em construção (score 4-6): investir em retention e activation, cuidado com escala
    - PMF não confirmado (score < 4): focar 100% em produto e usuários existentes antes de crescer

Entregável: PMF Assessment Report + Score Composto + Recomendação Estratégica

---

### Fase 3 — Definição da North Star Metric (Dia 4-5)

11. `*north-star --product "{{product}}" --goal "{{growth_goal}}"` — definir North Star Metric (NSM)
12. A NSM é a métrica que melhor captura o valor entregue ao cliente E ao negócio simultaneamente

**Framework de escolha da NSM:**
- Representa valor para o usuário (não apenas para o negócio)
- Correlacionada com retenção e receita de longo prazo
- Mensurável e monitorável em tempo real
- Movimentável pela equipe de produto e growth

**Exemplos de NSM por tipo de negócio:**
- SaaS B2B: "Número de empresas com 3+ usuários ativos por semana"
- E-commerce: "Número de compradores que fizeram 2+ pedidos no mês"
- Marketplace: "GMV de transações completadas com sucesso por semana"
- App de conteúdo: "Usuários que consumiram 3+ peças de conteúdo esta semana"
- Fintech: "Usuários que realizaram 1+ transação nos últimos 30 dias"

13. Validar NSM contra critérios:
    - [ ] É uma métrica, não uma meta (mensurável, não subjetivo)
    - [ ] Reflete valor real entregue ao usuário
    - [ ] Correlaciona com LTV e retenção (validar com dados)
    - [ ] A equipe pode influenciá-la diretamente
    - [ ] Sobe quando o negócio está crescendo saudavelmente
14. `*leading-indicators --nsm "{{nsm}}"` — definir leading indicators da NSM
15. NSM é uma lagging metric — as leading indicators são o que a equipe move no dia a dia

Entregável: North Star Metric Definida + Validação + 3-5 Leading Indicators

---

### Fase 4 — Identificação de Growth Levers (Dia 5-6)

16. `*growth-levers --audit "{{audit_data}}" --nsm "{{nsm}}"` — identificar alavancadores de crescimento
17. Mapear Growth Levers por estágio do funil:

**Acquisition Levers:**
- Canal X tem CAC 3x menor que os demais → escalar canal X
- SEO orgânico em keywords de alta intenção com 0 competição → oportunidade
- Referral program inativo → potencial de viral coefficient
- Parcerias com produtos complementares → acesso a audiência qualificada

**Activation Levers:**
- 60% dos usuários abandona no passo 3 do onboarding → simplificar
- Usuários que completam feature X têm retenção D30 de 60% vs. 20% da média → foco na feature X
- Time-to-value de 7 dias → reduzir para 24h → impacto direto em activation

**Retention Levers:**
- Usuários que formam hábito semanal têm churn 5x menor → criar loops de hábito
- Segmento de clientes A tem retenção 2x maior que segmento B → entender diferença
- Feature Y aumenta session frequency em 40% → expandir descoberta da feature Y

**Revenue Levers:**
- Upsell de plano: apenas 10% dos elegíveis foram convidados → oportunidade
- Pricing: teste de preço pode revelar elasticidade não explorada
- Annual vs. monthly: annual reduz churn em 80% → incentivar migração

**Referral Levers:**
- K-factor de 0.15 → potencial para 0.5+ com programa de indicação bem desenhado
- Promoters (NPS 9-10) não estão sendo ativamente ativados como advogados

18. `*lever-prioritization --impact high --effort low` — priorizar levers por impacto e esforço

Entregável: Growth Levers Map com Priorização por Impacto/Esforço

---

### Fase 5 — Backlog de Experimentos (Dia 6-7)

19. `*experiment-backlog --levers "{{priority_levers}}" --count 30` — gerar backlog de 20-30 experimentos
20. Formato padrão para cada experimento:
    ```
    ID: EXP-001
    Hipótese: "Se adicionarmos um modal de boas-vindas personalizado no Day 1,
               então a activation rate vai aumentar de 35% para 50%,
               porque usuários que entendem o próximo passo têm 2x mais chance de completá-lo."
    Lever: Activation
    Métrica primária: Activation Rate (D1)
    Métrica secundária: D7 Retention
    Sample size mínimo: 500 usuários por variante
    Duração estimada: 14 dias
    Esforço de implementação: Médio (2-3 dias de dev)
    ```
21. `*ice-scoring --experiments "{{backlog}}"` — aplicar ICE scoring em todos os experimentos
    - Impact (1-10): quanto pode mover a North Star Metric
    - Confidence (1-10): quanta evidência existe de que vai funcionar
    - Ease (1-10): facilidade de implementação
    - ICE Score = (Impact + Confidence + Ease) / 3
22. `*experiment-selection --top 10 --sprint-length 30d` — selecionar top 10 para primeiro sprint
23. Verificar diversidade: experimentos em diferentes etapas do funil, diferentes tipos (product, marketing, pricing)
24. `*quick-wins --timeline 7d` — identificar quick wins executáveis em menos de 7 dias
25. Quick wins: mudanças de copy, reordenação de elementos, correção de bugs de UX com alto impacto

Entregável: Backlog de 20-30 Experimentos com ICE Score + Top 10 Selecionados + Quick Wins

---

### Fase 6 — Roadmap de Growth 90-180 Dias (Dia 7-8)

26. `*growth-roadmap --period 180d --experiments "{{selected_experiments}}"` — construir roadmap de growth
27. Estrutura do roadmap por mês:

**Mês 1 — Foundation:**
- Semana 1-2: Quick wins + Instrumentação de tracking (se lacunas)
- Semana 3-4: Primeiros 3-5 experimentos de activation (maior alavanca identificada)
- Meta: baseline de todas as métricas AARRR estabelecido e monitorado

**Mês 2 — Acceleration:**
- Experimentos de maior esforço com maior impacto potencial
- Escalar canais de aquisição com melhor CAC (após validação de activation)
- Lançar ou otimizar referral program
- Meta: North Star Metric crescendo W/W

**Mês 3 — Scale:**
- Escalar experimentos que funcionaram (winning variants viram features permanentes)
- Expandir canais que se provaram eficientes
- Iniciar experimentos de revenue expansion (upsell, pricing)
- Meta: crescimento composto estabelecido e previsível

28. `*growth-team-charter --roles "{{team}}"` — definir papéis e responsabilidades do time de growth
29. Defina: quem executa os experimentos, quem analisa os resultados, quem decide lançar vs. pausar
30. `*growth-cadence --weekly-review true` — estabelecer cadência de reuniões e reviews
    - Weekly Growth Review: resultados da semana, experimentos em andamento, próximas ações
    - Monthly Growth Report: performance vs. metas, learnings do mês, ajuste de prioridades
31. `*growth-metrics-dashboard --nsm "{{nsm}}" --leading "{{leading_indicators}}"` — spec de dashboard
32. Dashboard deve mostrar em tempo real: NSM atual, tendência D7/D30, leading indicators, experimentos ativos

Entregável: Growth Roadmap 180 Dias + Team Charter + Cadência + Dashboard Spec

---

## Comandos Disponíveis

- `*growth-audit` — Auditoria completa do funil AARRR com métricas
- `*funnel-visualization` — Visualização do funil com taxas de conversão
- `*cohort-analysis` — Análise de retenção por coorte
- `*pmf-audit` — Avaliação de product-market fit (múltiplos sinais)
- `*pmf-score` — Calcular score de PMF composto
- `*north-star` — Definir North Star Metric
- `*leading-indicators` — Definir leading indicators da NSM
- `*growth-levers` — Identificar alavancadores de crescimento por etapa
- `*lever-prioritization` — Priorizar levers por impacto e esforço
- `*experiment-backlog` — Gerar backlog de experimentos
- `*ice-scoring` — Aplicar ICE scoring no backlog
- `*experiment-selection` — Selecionar top experimentos para o sprint
- `*quick-wins` — Identificar quick wins de curto prazo
- `*growth-roadmap` — Construir roadmap de growth 90-180 dias
- `*growth-team-charter` — Definir papéis e responsabilidades
- `*growth-cadence` — Estabelecer cadência de reviews
- `*growth-metrics-dashboard` — Spec de dashboard de growth

## Critérios de Conclusão

- [ ] Auditoria AARRR completa com métricas reais documentadas por etapa
- [ ] Funil visualizado com taxas de conversão e volume por estágio
- [ ] Cohort analysis dos últimos 6 meses com tendência de retenção identificada
- [ ] PMF Assessment concluído com score composto e recomendação estratégica
- [ ] North Star Metric definida e validada contra todos os 5 critérios
- [ ] 3-5 Leading Indicators da NSM identificados e monitoráveis
- [ ] Growth Levers mapeados com priorização por impacto e esforço
- [ ] Backlog com mínimo 20 experimentos no formato padrão (hipótese, métrica, sample size)
- [ ] ICE Score aplicado em todos os experimentos
- [ ] Top 10 experimentos selecionados para primeiro sprint de 30 dias
- [ ] Quick wins identificados e executáveis em menos de 7 dias
- [ ] Growth Roadmap de 180 dias com metas mensais definidas
- [ ] Team charter com papéis e responsabilidades documentados
- [ ] Cadência de growth reviews estabelecida (weekly + monthly)
- [ ] Spec do dashboard com NSM e leading indicators em tempo real
