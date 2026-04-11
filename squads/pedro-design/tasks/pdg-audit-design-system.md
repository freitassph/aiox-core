---
task: pdg-audit-design-system
agent: pdg-auditor
description: "Auditoria de design system — consistência, cobertura, tokens, componentes"
inputs: [design-system, component-library, usage-data]
outputs: [audit-report, consistency-score, coverage-map, improvement-backlog]
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



# Task: Audit Design System

## Objetivo
Realizar auditoria completa de um design system — avaliando consistência visual entre componentes, cobertura de casos de uso, qualidade dos design tokens, integridade da component library e adoção pela equipe. O resultado é um relatório detalhado com score de consistência, mapa de cobertura e backlog priorizado de melhorias.

## Processo de Execução

### Phase 1 — Mapeamento do Design System
1. `{*inventory-components}` — Inventariar todos os componentes da library: nome, variante, status (stable, beta, deprecated)
2. `{*inventory-tokens}` — Inventariar design tokens: color, typography, spacing, radius, shadow, motion
3. `{*map-documentation}` — Mapear documentação existente: README, usage guidelines, code examples, Figma descriptions
4. `{*analyze-usage-data}` — Analisar dados de uso: componentes mais/menos usados, duplicações, workarounds

Entregável: Design System Inventory

### Phase 2 — Análise de Consistência Visual
1. `{*check-color-consistency}` — Verificar consistência de cores: tokens vs. hardcoded values, duplicações, naming conflicts
2. `{*check-typography-consistency}` — Verificar consistência tipográfica: font families, sizes, weights, line heights
3. `{*check-spacing-consistency}` — Verificar consistência de espaçamento: uso de tokens vs. valores arbitrários
4. `{*check-border-radius}` — Verificar consistência de border radius: tokens definidos vs. valores espalhados
5. `{*check-shadow-consistency}` — Verificar consistência de sombras: elevation system, token usage
6. `{*detect-visual-drift}` — Detectar drift visual entre componentes que deveriam seguir o mesmo padrão

Entregável: Visual Consistency Analysis

### Phase 3 — Análise da Component Library
1. `{*check-component-api}` — Verificar consistência de APIs de componentes: props naming, variant patterns, defaults
2. `{*check-state-coverage}` — Verificar cobertura de estados por componente: default, hover, focus, active, disabled, loading, error
3. `{*check-accessibility}` — Verificar acessibilidade de cada componente: ARIA, keyboard nav, focus management
4. `{*check-responsive}` — Verificar comportamento responsivo: breakpoints, fluid sizing, mobile patterns
5. `{*check-composition}` — Verificar composabilidade: componentes funcionam juntos? Há padrões de composição claros?
6. `{*identify-duplicates}` — Identificar componentes duplicados ou com funcionalidade sobreposta

Entregável: Component Library Analysis

### Phase 4 — Análise de Tokens
1. `{*check-token-structure}` — Verificar estrutura de tokens: primitivos, semânticos, component-level — hierarquia clara?
2. `{*check-token-naming}` — Verificar naming convention: consistente, descritiva, escalável?
3. `{*check-token-coverage}` — Verificar se todos os valores visuais são cobertos por tokens ou se há hardcoded values
4. `{*check-token-sync}` — Verificar sync entre tokens do Figma e tokens do código (CSS/JS)
5. `{*check-dark-mode}` — Verificar suporte a dark mode nos tokens: valores definidos para ambos os modes?

Entregável: Token Analysis

### Phase 5 — Análise de Documentação e Adoção
1. `{*audit-documentation-quality}` — Auditar qualidade da documentação: completeness, accuracy, code examples, visual examples
2. `{*analyze-adoption-metrics}` — Analisar métricas de adoção: % de uso do DS vs. custom code, equipes adotando
3. `{*identify-pain-points}` — Identificar pain points da equipe: componentes faltando, bugs, dificuldade de uso
4. `{*check-versioning}` — Verificar sistema de versionamento: changelog, breaking changes, migration guides
5. `{*evaluate-governance}` — Avaliar governança: processo para adicionar componentes, review, deprecation

Entregável: Adoption & Documentation Analysis

### Phase 6 — Relatório e Backlog
1. `{*calculate-consistency-score}` — Calcular score de consistência geral do design system (0-100)
2. `{*generate-coverage-map}` — Gerar mapa de cobertura: quais casos de uso estão cobertos e quais têm gaps
3. `{*prioritize-improvements}` — Priorizar backlog de melhorias por: impacto, esforço, dependências
4. `{*write-executive-summary}` — Escrever resumo executivo com findings principais e recomendações
5. `{*compile-audit-report}` — Compilar relatório completo de auditoria com todas as análises
6. `{*create-improvement-backlog}` — Criar backlog estruturado de melhorias com tickets sugeridos

Entregável: Audit Report + Coverage Map + Improvement Backlog

## Comandos Disponíveis
- `{*inventory-components}` — Inventaria todos os componentes
- `{*inventory-tokens}` — Inventaria design tokens
- `{*analyze-usage-data}` — Analisa dados de uso do design system
- `{*check-color-consistency}` — Verifica consistência de cores
- `{*check-component-api}` — Verifica consistência de APIs
- `{*check-state-coverage}` — Verifica cobertura de estados
- `{*check-token-structure}` — Verifica estrutura de tokens
- `{*check-token-sync}` — Verifica sync Figma ↔ código
- `{*audit-documentation-quality}` — Audita qualidade da documentação
- `{*calculate-consistency-score}` — Calcula score de consistência
- `{*generate-coverage-map}` — Gera mapa de cobertura
- `{*prioritize-improvements}` — Prioriza backlog de melhorias

## Critérios de Conclusão
- [ ] Inventário completo de componentes com status
- [ ] Inventário completo de design tokens
- [ ] Documentação mapeada e avaliada
- [ ] Dados de uso analisados com padrões identificados
- [ ] Consistência de cores verificada (tokens vs. hardcoded)
- [ ] Consistência tipográfica verificada
- [ ] Consistência de espaçamento verificada
- [ ] Consistência de border radius verificada
- [ ] Consistência de sombras verificada
- [ ] Visual drift detectado e documentado
- [ ] APIs de componentes auditadas
- [ ] Cobertura de estados verificada por componente
- [ ] Acessibilidade de componentes auditada
- [ ] Comportamento responsivo verificado
- [ ] Composabilidade avaliada
- [ ] Componentes duplicados identificados
- [ ] Estrutura de tokens avaliada (primitive → semantic → component)
- [ ] Naming convention de tokens auditada
- [ ] Coverage de tokens verificada (hardcoded values identificados)
- [ ] Sync Figma ↔ código verificado
- [ ] Dark mode support nos tokens verificado
- [ ] Qualidade da documentação auditada
- [ ] Métricas de adoção analisadas
- [ ] Pain points da equipe identificados
- [ ] Versionamento e changelog verificados
- [ ] Governança avaliada
- [ ] Score de consistência calculado (0-100)
- [ ] Mapa de cobertura gerado com gaps identificados
- [ ] Backlog de melhorias priorizado
- [ ] Resumo executivo escrito
- [ ] Relatório completo compilado
- [ ] Improvement backlog estruturado com tickets sugeridos
