---
checklist: campaign-performance-review
agent: pa-prism
description: "Checklist de revisão de performance de campanha — dados, otimização e decisões baseadas em métricas"
---

# Checklist: Campaign Performance Review

## Como usar

Execute este checklist periodicamente durante a vida de qualquer campanha — semanalmente para campanhas ativas, ao final de cada fase de otimização, ou antes de relatórios ao cliente.
**O pa-prism é o responsável pela integridade analítica.** Nenhuma decisão de campanha é tomada sem dados que a sustentem.

**Princípio:** Opiniões são gratuitas. Dados são decisivos. Toda otimização nasce de uma análise rigorosa.

---

## 🔴 SEÇÃO 1: Data Integrity — Dados confiáveis antes de tudo

### Tracking Verification
- [ ] Todos os pixels disparando corretamente (Meta, Google, TikTok, LinkedIn verificados via Pixel Helper)
- [ ] GA4 recebendo dados sem lacunas temporais inexplicáveis
- [ ] Conversões sendo registradas com latência aceitável (< 24h)
- [ ] UTMs consistentes em todos os links — nenhuma campanha sem rastreamento
- [ ] Nenhuma duplicação de conversões entre plataformas
- [ ] Cross-domain tracking funcionando (se aplicável)
- [ ] Enhanced conversions ativas (quando configuradas)
- [ ] Server-side tracking operacional (se implementado)

### Data Quality Checks
- [ ] Sem picos ou quedas anômalas sem explicação identificada
- [ ] Período de análise claramente definido (sem sobreposição de datas)
- [ ] Atribuição consistente (não misturar modelos diferentes no mesmo relatório)
- [ ] Moeda e fuso horário padronizados em todas as fontes
- [ ] Dados de diferentes plataformas reconciliados (discrepâncias < 15% explicadas)
- [ ] Bot traffic filtrada ou identificada
- [ ] Dados de teste excluídos das análises

### Dashboard & Reporting Setup
- [ ] Dashboard atualizado com dados mais recentes
- [ ] Visualizações corretas para stakeholders (sem métricas irrelevantes)
- [ ] Alertas de anomalia configurados e funcionando
- [ ] Dados exportáveis para análise ad-hoc
- [ ] Versão anterior do dashboard arquivada para comparação

---

## 🔴 SEÇÃO 2: Performance Against Goals — Estamos entregando?

### KPIs Primários
- [ ] KPIs primários medidos contra as metas definidas no brief
- [ ] Variação vs. baseline calculada e documentada
- [ ] Trend direction identificada (melhorando, estável, piorando)
- [ ] Pace vs. target projetado (no ritmo atual, bateremos a meta?)

### KPIs Secundários (Health Metrics)
- [ ] CPM analisado vs. benchmarks do setor
- [ ] CPC trend documentada (subindo, descendo, estável)
- [ ] CTR por placement e por criativo
- [ ] Taxa de conversão da landing page
- [ ] Frequência média por audiência (alerta se > 4)
- [ ] Reach e impressões vs. plano de mídia
- [ ] Share of voice (quando benchmark disponível)

### ROI & Efficiency
- [ ] ROAS calculado e vs. target (mínimo 4x conforme standard do squad)
- [ ] CPA/CPL vs. budget e metas do cliente
- [ ] Custo por resultado por segmento de audiência
- [ ] Budget utilization rate (% do budget gasto no período)
- [ ] Forecast de resultados com budget restante

---

## 🔴 SEÇÃO 3: Creative Performance — O que funciona e o que não funciona

### Por Criativo
- [ ] Ranking de criativos por CTR (top performers e underperformers identificados)
- [ ] Ranking de criativos por taxa de conversão
- [ ] Fatigue identificado (queda de CTR com aumento de frequência)
- [ ] Creative diversity verificada (não depender de 1 único criativo para > 50% dos resultados)
- [ ] Formatos com melhor performance por plataforma documentados

### Por Conceito/Mensagem
- [ ] Mensagens/conceitos testados comparados entre si
- [ ] Winner de A/B tests determinado com significância estatística
- [ ] Insights criativos documentados para próxima rodada de produção
- [ ] Elementos de criativo vencedores identificados (cor, headline, CTA, formato)

### Recommendations
- [ ] Underperformers pausados ou com budget reduzido
- [ ] Winners escalados com budget adicional
- [ ] Novas variações criativas briefadas para testar
- [ ] Frequência de refresh criativo definida

---

## 🔴 SEÇÃO 4: Audience Performance — Para quem estamos convertendo?

### Por Segmento
- [ ] Performance por faixa etária documentada
- [ ] Performance por gênero documentada
- [ ] Performance por localização documentada
- [ ] Performance por dispositivo (mobile vs. desktop)
- [ ] Performance por placement (feed, stories, search, display, etc.)

### Audiences Analysis
- [ ] Lookalike audiences comparadas por performance
- [ ] Custom audiences (remarketing, lista de clientes) analisadas
- [ ] Audiences com CPA acima da média identificadas para ajuste
- [ ] Novas audiências oportunidades identificadas
- [ ] Audience overlap verificado (evitar sobreposição excessiva)

### Funnel Analysis
- [ ] Impressões → Cliques: taxa de passagem
- [ ] Cliques → Landing page view: taxa de carregamento
- [ ] Landing page view → Conversão: taxa de conversão
- [ ] Quedas anormais no funil identificadas e investigadas
- [ ] Tempo médio para conversão documentado

---

## 🔴 SEÇÃO 5: Budget & Spend — O dinheiro está bem aplicado?

### Budget Allocation
- [ ] Spend real vs. planned por canal documentado
- [ ] Variação de allocation explicada (desvio justificado)
- [ ] Budget pacing: no ritmo correto para gastar 100% no período
- [ ] Sem budget desperdiçado em canais/audiências com ROI negativo comprovado
- [ ] Budget realocado para performers (documentar a realocação)

### Cost Analysis
- [ ] Custo por resultado por canal comparado
- [ ] Eficiência de cada canal avaliada (custo + volume + qualidade)
- [ ] Oportunidades de realocação identificadas
- [ ] Sazonalidade de custo considerada (CPM mais alto em períodos competitivos)

### Billing & Account Health
- [ ] Contas de anúncio com saldo suficiente
- [ ] Sem restrições ou pendências nas contas
- [ ] Faturas e pagamentos em dia
- [ ] Créditos promocionais ou cupons aplicados (se disponíveis)

---

## 🟡 SEÇÃO 6: Optimization Actions — O que fizemos e o que faremos

### Otimizações Realizadas (Período Anterior)
- [ ] Lista de todas as otimizações feitas desde a última review
- [ ] Impacto de cada otimização medido e documentado
- [ ] Otimizações que não funcionaram identificadas e revertidas
- [ ] Aprendizados das otimizações registrados

### Otimizações Planejadas (Próximo Período)
- [ ] Ações de otimização propostas com justificativa baseada em dados
- [ ] Impacto esperado de cada ação estimado
- [ ] Responsável e prazo para cada otimização definidos
- [ ] Riscos de cada otimização avaliados

### Testing Roadmap
- [ ] Tests em andamento documentados com status
- [ ] Novos tests propostos com hipótese e métrica de sucesso
- [ ] Significância estatística verificada antes de concluir tests
- [ ] Learnings de tests anteriores aplicados

---

## 🟡 SEÇÃO 7: Competitive & Market Context

### Competitive Landscape
- [ ] Movimentos de concorrentes monitorados (novas campanhas, mensagens)
- [ ] Mudanças no auction landscape documentadas
- [ ] Novos entrantes ou ameaças identificadas
- [ ] Oportunidades de diferenciação identificadas

### Platform Changes
- [ ] Atualizações de plataforma que impactam a campanha (algorithm changes, new features)
- [ ] Novos formats ou placements disponíveis para teste
- [ ] Policy changes que afetam targeting ou criativos
- [ ] Beta programs ou early access avaliados para adoção

---

## ✅ Assinatura da Review

### Análise
- [ ] **pa-prism (Analytics Lead):** Análise completa de performance
  - Nome: ___________
  - Data: ___________

- [ ] **pa-profit (Performance Lead):** Otimizações validadas
  - Nome: ___________
  - Data: ___________

### Decisões Tomadas
| Decisão | Justificativa (dados) | Responsável | Prazo |
|---------|----------------------|-------------|-------|
| | | | |
| | | | |
| | | | |

### Próxima Review
- Data prevista: ___________
- Tipo: [Semanal / Quinzenal / Mensal / Ad-hoc]
- Foco especial: ___________

---

*Checklist version 1.0 | Squad Pedro Agência | pa-prism*
*Números não mentem, mas podem ser mal interpretados. Rigor analítico é não negociável.*
