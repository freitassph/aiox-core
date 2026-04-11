---
task: pdg-design-microinteractions
agent: pdg-ux-designer
description: "Design de microinterações — hover, click, loading, success, error states"
inputs: [component-list, design-system, platform]
outputs: [microinteraction-specs, timing-curves, state-diagrams, implementation-guide]
elicit: true
---

## Purpose

Design detailed microinteractions for interface components — defining behavior, timing, easing curves, transitions, and visual feedback for every state and action to elevate perceived quality and usability.

## Pre-Conditions

- [ ] Component list available and reviewed
- [ ] Design system accessible and understood
- [ ] Target platform identified
- [ ] pdg-ux-designer agent activated
- [ ] Dependency tasks (design-system, component audit) completed

# Task: Design Microinteractions

## Entrada
- `component-list`: List of all UI components requiring microinteraction design
- `design-system`: Existing design system with tokens, colors, typography
- `platform`: Target platform: web, iOS, Android, desktop

## Saida
- `microinteraction-specs`: Detailed specifications for every component interaction and state
- `timing-curves`: Defined timing scale and easing curve system
- `state-diagrams`: State diagrams and flow maps for complex components
- `implementation-guide`: Complete implementation guide with CSS animations, JS triggers, and code examples

## Checklist
- [ ] Component inventory completed with current states audited
- [ ] Missing states identified for all components
- [ ] Interactions categorized by type (trigger-based, system-driven, user-driven)
- [ ] Components prioritized by impact and frequency
- [ ] Timing scale defined (fast, normal, slow, deliberate)
- [ ] Easing curves defined and named
- [ ] Motion principles established
- [ ] Motion tokens created and documented
- [ ] Button interactions fully specified (hover, press, loading, success)
- [ ] Input interactions fully specified (focus, validation, clear)
- [ ] Feedback interactions fully specified (toast, banner, error, success)
- [ ] Navigation interactions fully specified (tabs, menu, accordion)
- [ ] Data interactions fully specified (skeleton, count-up, sort)
- [ ] State diagrams created for complex components
- [ ] Transitions mapped with trigger and animation
- [ ] Edge cases defined (loading interaction, rapid clicks, offline)
- [ ] CSS animations written for each microinteraction
- [ ] JS triggers and event handlers defined
- [ ] Reduced motion behavior specified
- [ ] Performance guidelines documented
- [ ] Implementation guide complete with code and visual specs
- [ ] Accessibility validated (focus, screen reader, reduced motion)

## Objetivo
Projetar microinterações detalhadas para componentes de interface — definindo comportamento, timing, curvas de easing, transições e feedback visual para cada estado e ação. Microinterações bem desenhadas elevam significativamente a percepção de qualidade do produto e melhoram a usabilidade ao fornecer feedback claro e imediato.

## Processo de Execução

### Phase 1 — Inventário de Componentes
1. `{*audit-components}` — Listar todos os componentes da component list e seus estados atuais
2. `{*identify-missing-states}` — Identificar estados faltantes: default, hover, active/pressed, focus, disabled, loading, success, error
3. `{*categorize-interactions}` — Categorizar tipos de interação: trigger-based (hover, click), system-driven (loading, success), user-driven (drag, scroll)
4. `{*prioritize-by-impact}` — Priorizar componentes por frequência de uso e impacto na experiência

Entregável: Component State Inventory

### Phase 2 — Definição do Sistema de Movimento
1. `{*define-timing-scale}` — Definir escala de timing: fast (100ms), normal (200ms), slow (350ms), deliberate (500ms)
2. `{*define-easing-curves}` — Definir curvas de easing: ease-out (entrada), ease-in (saída), ease-in-out (bidirecional), spring (elástico)
3. `{*establish-motion-principles}` — Estabelecer princípios de movimento: natural, purposeful, responsive, non-distracting
4. `{*create-motion-tokens}` — Criar tokens de movimento reutilizáveis (duration, easing, delay)

Entregável: Motion System Definition

### Phase 3 — Design de Microinterações por Componente
1. `{*spec-button-interactions}` — Especificar microinterações de Button: hover scale, press depression, ripple, loading spinner, success check
2. `{*spec-input-interactions}` — Especificar Input interactions: focus ring, validation flash, character counter animation, clear button
3. `{*spec-feedback-interactions}` — Especificar Feedback interactions: toast slide-in/out, banner expand, error shake, success confetti
4. `{*spec-navigation-interactions}` — Especificar Navigation interactions: tab underline slide, menu open/close, accordion expand
5. `{*spec-data-interactions}` — Especificar Data interactions: skeleton pulse, number count-up, chart transition, table sort animation

Entregável: Microinteraction Specifications

### Phase 4 — Diagramas de Estado
1. `{*create-state-diagrams}` — Criar diagrama de estados para cada componente complexo
2. `{*map-transitions}` — Mapear todas as transições possíveis entre estados com trigger e animation
3. `{*define-edge-cases}` — Definir comportamento em edge cases: interaction during loading, rapid clicks, offline state
4. `{*create-flow-maps}` — Criar flow maps de interação para sequências multi-step

Entregável: State Diagrams + Flow Maps

### Phase 5 — Guia de Implementação
1. `{*write-css-animations}` — Escrever CSS animations/keyframes para cada microinteração
2. `{*define-js-triggers}` — Definir event handlers e triggers em JavaScript para cada interação
3. `{*create-reduced-motion}` — Especificar comportamento com prefers-reduced-motion ativado
4. `{*write-performance-guidelines}` — Escrever guidelines de performance: GPU-accelerated properties, will-change, debouncing
5. `{*create-implementation-guide}` — Compilar guia completo com código, specs visuais e comportamento

Entregável: Implementation Guide

### Phase 6 — Validação
1. Revisar todas as microinterações para consistência com o motion system
2. Validar que cada estado tem feedback visual claro
3. Verificar acessibilidade: focus visible, screen reader announcements, reduced motion
4. Confirmar que timings e easings seguem os tokens definidos
5. Testar mentalmente edge cases e validar comportamentos definidos

Entregável: Validated Microinteraction Package

## Comandos Disponíveis
- `{*audit-components}` — Audita componentes e estados atuais
- `{*identify-missing-states}` — Identifica estados faltantes
- `{*define-timing-scale}` — Define escala de timing para animações
- `{*define-easing-curves}` — Define curvas de easing
- `{*spec-button-interactions}` — Especifica microinterações de Button
- `{*spec-input-interactions}` — Especifica interações de Input
- `{*create-state-diagrams}` — Cria diagramas de estados
- `{*write-css-animations}` — Escreve CSS animations
- `{*create-reduced-motion}` — Especifica comportamento reduced motion

## Critérios de Conclusão
- [ ] Inventário completo de componentes e estados
- [ ] Estados faltantes identificados e listados
- [ ] Componentes categorizados por tipo de interação
- [ ] Escala de timing definida (fast, normal, slow, deliberate)
- [ ] Curvas de easing definidas e nomeadas
- [ ] Princípios de movimento estabelecidos
- [ ] Motion tokens criados e documentados
- [ ] Microinterações especificadas para TODOS os componentes da lista
- [ ] Button interactions completas (hover, press, loading, success)
- [ ] Input interactions completas (focus, validation, clear)
- [ ] Feedback interactions completas (toast, banner, error, success)
- [ ] Navigation interactions completas (tabs, menu, accordion)
- [ ] Data interactions completas (skeleton, count-up, sort)
- [ ] State diagrams criados para componentes complexos
- [ ] Transições mapeadas com trigger e animation
- [ ] Edge cases definidos (loading interaction, rapid clicks, offline)
- [ ] CSS animations escritas para cada microinteração
- [ ] JS triggers e event handlers definidos
- [ ] Reduced motion behavior especificada
- [ ] Performance guidelines documentadas
- [ ] Implementation guide completo com código e specs visuais
- [ ] Acessibilidade validada (focus, screen reader, reduced motion)
- [ ] Package validado e pronto para handoff
