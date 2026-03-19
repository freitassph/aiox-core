---
task: pa-sales-strategy
agent: pa-catalyst
description: "Estratégia completa de vendas e desenvolvimento de negócios — processo, ICP e playbook"
inputs: [product-info, target-market, pricing, current-metrics, growth-goals]
outputs: [sales-strategy, icp-definition, sales-playbook, outreach-sequences, pipeline-setup]
elicit: true
---

# Task: Estratégia de Vendas e Desenvolvimento de Negócios

## Objetivo

Construir uma estratégia de vendas end-to-end que transforme o potencial de crescimento definido em `growth-goals` em um processo comercial estruturado, replicável e escalável. O ponto de partida é o entendimento profundo de quem são os clientes que geram mais valor — não apenas quem compra, mas quem fica, expande e indica — para construir um Ideal Customer Profile (ICP) que guie toda a estratégia de aquisição.

A estratégia integra análise de mercado, design do processo de vendas, desenvolvimento de playbook e configuração de pipeline de forma coerente. Cada etapa do processo de vendas é mapeada com as ações específicas do vendedor, os sinais de qualificação do prospect e os critérios objetivos de avanço de etapa — eliminando a dependência de intuição individual e criando um processo que qualquer membro da equipe pode executar com consistência.

O resultado é uma máquina de vendas documentada: ICP claro, processo definido por etapa, sequências de outreach testáveis, pipeline configurado e métricas de acompanhamento que permitem identificar gargalos e otimizar a conversão em cada etapa do funil comercial.

## Processo de Execução

### Fase 1 — Dimensionamento de Mercado (Dia 1)

1. Analisar `target-market` para calcular TAM (Total Addressable Market), SAM e SOM
2. Segmentar o mercado por vertical, porte de empresa, geografia e maturidade digital
3. Identificar os segmentos com maior propensão a compra e menor custo de aquisição
4. Analisar `current-metrics` para identificar de onde vêm os melhores clientes atuais
5. Mapear sazonalidade e ciclos de compra por segmento de mercado
6. Executar `*market-sizing --market "{{target-market}}" --product "{{product-info}}" --current-data "{{current-metrics}}"`

Entregável: `market-analysis.md` com TAM/SAM/SOM, segmentação e oportunidades prioritárias

---

### Fase 2 — Definição do ICP (Dia 1-2)

1. Analisar base de clientes atual via `current-metrics`: LTV, churn, NPS, tempo de fechamento
2. Identificar características comuns dos top 20% clientes que geram 80% da receita
3. Definir ICP firmográfico: porte, segmento, faturamento, número de funcionários, maturidade
4. Definir ICP comportamental: dores, objetivos, gatilhos de compra, objeções comuns
5. Mapear perfis de compradores (personas): decisor, influenciador, usuário final, bloqueador
6. Documentar sinais de qualificação: o que torna um lead um ICP confirmado
7. Executar `*icp-builder --clients "{{current-metrics}}" --market "{{target-market}}"`

Entregável: `icp-definition.md` com ICP firmográfico, comportamental, personas e sinais de qualificação

---

### Fase 3 — Proposta de Valor e Posicionamento (Dia 2)

1. Analisar `product-info` e `pricing` para mapear benefícios funcionais e emocionais por persona
2. Desenvolver value proposition canvas: ganhos entregues, dores aliviadas, produto como solução
3. Mapear ROI esperado por ICP: economia, receita adicional, eficiência, redução de risco
4. Criar mensagens de valor diferenciadas por persona e por etapa do funil
5. Desenvolver objeções comuns e respostas estruturadas baseadas em evidência
6. Executar `*value-prop --product "{{product-info}}" --pricing "{{pricing}}" --icp "{{icp-definition}}"`

Entregável: `value-proposition.md` com mensagens por persona, ROI calculado e handlers de objeções

---

### Fase 4 — Design do Processo de Vendas (Dia 2-3)

1. Mapear etapas do processo de vendas do primeiro contato ao contrato assinado
2. Definir critérios objetivos de entrada e saída para cada etapa do pipeline
3. Documentar ações específicas do vendedor em cada etapa com templates e scripts
4. Definir duração máxima em cada etapa antes de acionar protocolo de recuperação
5. Criar SLAs de resposta e follow-up por canal de entrada (inbound vs. outbound)
6. Mapear integrações com marketing: MQLs, SQLs, handoff de leads e feedback loop
7. Executar `*sales-process-design --stages discovery,proposal,negotiation,close --icp "{{icp-definition}}"`

Entregável: `sales-process.md` com etapas, critérios, ações e SLAs por stage do pipeline

---

### Fase 5 — Estratégia de Outreach (Dia 3-4)

1. Definir canais de outreach prioritários por ICP: email, LinkedIn, telefone, WhatsApp
2. Criar sequências de outreach por canal: cadência, intervalo, número de tentativas
3. Desenvolver templates de mensagem para cada touchpoint da sequência (cold, follow-up, breakup)
4. Criar scripts de cold call com abertura, discovery e next step definidos
5. Desenvolver mensagens de LinkedIn personalizadas por vertical e persona
6. Criar playbook de personalização: como usar insights do prospect em cada mensagem
7. Executar `*outreach-sequences --channels email,linkedin,phone --icp "{{icp-definition}}" --touches 7`

Entregável: `outreach-sequences.md` com sequências completas por canal, templates e scripts

---

### Fase 6 — Configuração de Pipeline (Dia 4)

1. Configurar stages do pipeline no CRM alinhados ao processo de vendas definido
2. Criar campos obrigatórios por stage: informações mínimas para avanço de etapa
3. Configurar automações: alertas de SLA, follow-up automático, notificações de atividade
4. Criar views e filtros para gerenciamento de pipeline por vendedor e gestor
5. Configurar relatórios de funil, taxa de conversão por etapa e velocity de pipeline
6. Documentar processo de entrada de novos leads e protocolo de atualização diária
7. Executar `*pipeline-setup --crm active --stages "{{sales-process}}" --automations sla,followup`

Entregável: `pipeline-setup.md` + CRM configurado com stages, campos, automações e relatórios

---

### Fase 7 — Métricas e Sales Playbook (Dia 5)

1. Definir métricas primárias do processo de vendas: taxa de conversão, deal velocity, win rate
2. Calcular metas derivadas dos `growth-goals`: deals necessários por mês, atividades por deal
3. Criar dashboard de vendas com funil, pipeline health e forecast de receita
4. Consolidar tudo no `sales-playbook`: ICP, processo, mensagens, objections, métricas
5. Definir cadência de revisão do playbook e processo de atualização com novos aprendizados
6. Preparar apresentação executiva da estratégia completa para o cliente
7. Executar `*sales-playbook-builder --components icp,process,outreach,pipeline,metrics`

Entregável: `sales-playbook.md` completo + `sales-strategy.pdf` para apresentação executiva

---

## Comandos Disponíveis

- `*market-sizing` — Calcular TAM/SAM/SOM e segmentar mercado por oportunidade
- `*icp-builder` — Construir ICP firmográfico e comportamental a partir de dados de clientes
- `*value-prop` — Desenvolver proposta de valor e mensagens por persona
- `*sales-process-design` — Desenhar etapas, critérios e ações do processo de vendas
- `*outreach-sequences` — Criar sequências de cadência e templates por canal
- `*pipeline-setup` — Configurar CRM com stages, campos e automações
- `*sales-playbook-builder` — Consolidar todos os componentes no playbook final
- `*forecast-model` — Calcular metas de atividade e projeção de receita por meta de crescimento

## Critérios de Conclusão

- [ ] Dimensionamento de mercado completo com TAM/SAM/SOM e segmentos priorizados
- [ ] ICP definido com critérios firmográficos, comportamentais e sinais de qualificação
- [ ] Personas de compradores mapeadas com dores, objetivos e gatilhos de decisão
- [ ] Proposta de valor desenvolvida por persona com ROI calculado e handlers de objeções
- [ ] Processo de vendas desenhado com stages, critérios objetivos e ações por etapa
- [ ] Sequências de outreach criadas para todos os canais prioritários com templates completos
- [ ] Pipeline configurado no CRM com automações e relatórios de funil
- [ ] Dashboard de vendas com métricas de conversão, velocity e forecast operacional
- [ ] Sales playbook completo e apresentação executiva da estratégia entregues ao cliente
