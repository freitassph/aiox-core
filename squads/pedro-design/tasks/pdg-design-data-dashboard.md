---
task: pdg-design-data-dashboard
agent: pdg-data-viz-specialist
description: "Design de dashboard de dados completo — KPIs, charts, layout e acessibilidade"
inputs: [data-source, kpi-list, audience, platform]
outputs: [dashboard-wireframe, visualizations, design-spec, accessibility-report]
elicit: true
---
## Purpose

Complete this design task

## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed

## Entrada

- Task brief and requirements

## Saida

- Completed deliverables

## Checklist

- [ ] Deliverable completed
- [ ] Quality reviewed



# Task: Design Data Dashboard

## Objetivo
Criar o design completo de um dashboard de dados — desde os wireframes de layout até as visualizações individuais, especificações de implementação e relatório de acessibilidade. O dashboard deve comunicar informações complexas de forma clara, permitir tomada de decisão rápida e ser acessível para todos os usuários.

## Processo de Execução

### Phase 1 — Entendimento de Dados e Audiência
1. `{*analyze-data-sources}` — Analisar fontes de dados disponíveis: APIs, databases, spreadsheets, real-time streams
2. `{*prioritize-kpis}` — Priorizar KPIs por: impacto na decisão, frequência de consulta, relevância para audiência
3. `{*define-user-personas}` — Definir personas de usuários do dashboard: executor, analista, decisor
4. `{*map-use-cases}` — Mapear casos de uso primários e secundários para o dashboard

Entregável: Dashboard Requirements Document

### Phase 2 — Arquitetura de Informação
1. `{*define-information-hierarchy}` — Definir hierarquia de informação: KPIs no topo, detalhes abaixo, contexto ao fundo
2. `{*create-layout-grid}` — Criar grid de layout responsivo (mobile, tablet, desktop, widescreen)
3. `{*design-navigation}` — Design do sistema de navegação: filtros, date pickers, drill-down paths
4. `{*create-wireframe}` — Criar wireframe de baixa fidelidade com posicionamento de todos os elementos

Entregável: Dashboard Wireframe

### Phase 3 — Design das Visualizações
1. `{*select-chart-types}` — Selecionar tipo de gráfico ideal para cada métrica (bar, line, area, scatter, donut, heatmap)
2. `{*design-kpi-cards}` — Design dos cards de KPI: valor, delta, sparkline, status indicator
3. `{*design-data-tables}` — Design de tabelas de dados: column headers, sorting, pagination, row hover
4. `{*design-filters}` — Design do sistema de filtros e controles interativos
5. `{*define-color-coding}` — Definir código de cores para status: positivo, negativo, alerta, neutro
6. `{*create-empty-states}` — Design de estados vazios para cada tipo de visualização

Entregável: Visualization Design Package

### Phase 4 — Sistema Visual do Dashboard
1. `{*apply-design-system}` — Aplicar design system existente ou criar tokens específicos para dashboard
2. `{*define-typography}` — Definir escala tipográfica: KPI numbers, labels, annotations, tooltips
3. `{*create-component-states}` — Criar todos os estados de componentes: default, hover, loading, error, no-data
4. `{*define-annotation-system}` — Definir sistema de anotações: benchmarks, targets, thresholds, markers
5. `{*create-tooltip-design}` — Design de tooltips e popovers de detalhes

Entregável: Dashboard Visual System

### Phase 5 — Especificação de Design
1. `{*write-interaction-specs}` — Escrever especificações de interação para cada componente
2. `{*define-responsive-rules}` — Definir regras responsivas: o que muda em cada breakpoint
3. `{*specify-data-formats}` — Especificar formatos de dados: decimais, porcentagens, abreviações (1.2K, 3M)
4. `{*define-update-behavior}` — Definir comportamento de atualização: auto-refresh, manual, push notifications
5. `{*create-handoff-package}` — Preparar package completo para desenvolvimento (specs, assets, tokens)

Entregável: Design Specification Document

### Phase 6 — Acessibilidade e Validação
1. `{*check-color-contrast}` — Verificar contraste de cor de todos os elementos textuais e data-driven
2. `{*check-screen-reader}` — Validar compatibilidade com screen readers: ARIA labels, reading order, data tables
3. `{*check-keyboard-nav}` — Verificar navegação por teclado: focus order, shortcuts, skip links
4. `{*check-colorblind-safety}` — Validar para tipos de daltonismo: deuteranopia, protanopia, tritanopia
5. `{*generate-accessibility-report}` — Gerar relatório de acessibilidade com issues e recomendações

Entregável: Accessibility Report

## Comandos Disponíveis
- `{*analyze-data-sources}` — Analisa fontes de dados disponíveis
- `{*prioritize-kpis}` — Prioriza KPIs por impacto e relevância
- `{*define-information-hierarchy}` — Define hierarquia de informação no dashboard
- `{*create-wireframe}` — Cria wireframe de baixa fidelidade
- `{*select-chart-types}` — Seleciona tipo de gráfico ideal para cada métrica
- `{*design-kpi-cards}` — Design dos cards de KPI
- `{*write-interaction-specs}` — Escreve especificações de interação
- `{*check-color-contrast}` — Verifica contraste de cor
- `{*check-screen-reader}` — Valida compatibilidade com screen readers
- `{*check-colorblind-safety}` — Valida para daltonismo

## Critérios de Conclusão
- [ ] Requirements document com KPIs priorizados e personas definidas
- [ ] Casos de uso mapeados (primários e secundários)
- [ ] Wireframe de dashboard com layout completo
- [ ] Grid responsivo definido para 4+ breakpoints
- [ ] Sistema de navegação e filtros projetado
- [ ] Tipo de gráfico selecionado e justificado para cada métrica
- [ ] KPI cards projetados com valor, delta e sparkline
- [ ] Tabelas de dados com sorting e paginação
- [ ] Sistema de cores para status definido
- [ ] Empty states criados para cada tipo de visualização
- [ ] Escala tipográfica definida
- [ ] Todos os estados de componentes criados (default, hover, loading, error, no-data)
- [ ] Sistema de anotações definido (targets, thresholds)
- [ ] Tooltips e popovers projetados
- [ ] Especificações de interação escritas
- [ ] Regras responsivas documentadas
- [ ] Formatos de dados especificados
- [ ] Color contrast validado (WCAG AA mínimo)
- [ ] Screen reader compatibility verificada
- [ ] Keyboard navigation testada
- [ ] Colorblind safety validada
- [ ] Accessibility report gerado com issues e recomendações
- [ ] Handoff package preparado para desenvolvimento
