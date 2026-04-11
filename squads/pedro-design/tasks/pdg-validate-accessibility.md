---
task: pdg-validate-accessibility
agent: pdg-auditor
description: "Auditoria completa de acessibilidade — WCAG 2.1 AA, colorblind, screen reader"
inputs: [design-files, platform, wcag-level]
outputs: [accessibility-report, violations-list, remediation-guide, compliance-certificate]
elicit: true
---

## Purpose

Perform a complete accessibility audit of digital design — verifying WCAG 2.1 compliance at the specified level (A, AA, or AAA), validating usability for colorblind users, and ensuring screen reader compatibility, producing a detailed report with violations, prioritization, and a remediation guide.

## Pre-Conditions

- [ ] Design files accessible and complete
- [ ] Target platform identified (web, iOS, Android)
- [ ] WCAG compliance level specified (A, AA, or AAA)
- [ ] pdg-auditor agent activated
- [ ] Design implementation stable and ready for audit

# Task: Validate Accessibility

## Entrada
- `design-files`: Design files to be audited (screens, components, flows)
- `platform`: Target platform: web, iOS, Android (determines specific guidelines)
- `wcag-level`: Target WCAG compliance level: A, AA, or AAA

## Saida
- `accessibility-report`: Complete audit report with all criteria tested and results
- `violations-list`: Full list of violations with WCAG criterion, severity, location, and evidence
- `remediation-guide`: Fix guide with before/after examples for each violation
- `compliance-certificate`: Conformity certificate (or non-conformity) with detailed score

## Objetivo
Realizar auditoria completa de acessibilidade de design digital — verificando conformidade com WCAG 2.1 no nível especificado (A, AA ou AAA), validando usabilidade para pessoas com daltonismo, e garantindo compatibilidade com screen readers. O resultado é um relatório detalhado com violações, priorização e guia de correção.

## Processo de Execução

### Phase 1 — Configuração da Auditoria
1. `{*define-scope}` — Definir escopo da auditoria: páginas/telas, componentes, fluxos a serem testados
2. `{*set-wcag-level}` — Configurar nível WCAG alvo (A, AA ou AAA) e critérios aplicáveis
3. `{*identify-platform}` — Identificar plataforma (web, iOS, Android) e guidelines específicas
4. `{*create-audit-plan}` — Criar plano de auditoria com checklist de critérios por tipo de teste

Entregável: Audit Plan

### Phase 2 — Análise de Cor e Contraste
1. `{*check-text-contrast}` — Verificar contraste de texto normal e large text contra background (WCAG 1.4.3)
2. `{*check-ui-contrast}` — Verificar contraste de elementos de UI: borders, icons, focus indicators (WCAG 1.4.11)
3. `{*check-color-dependency}` — Verificar se cor é o único meio de transmitir informação (WCAG 1.4.1)
4. `{*simulate-colorblindness}` — Simular visão com deuteranopia, protanopia, tritanopia e verificar legibilidade
5. `{*check-text-alternatives}` — Verificar que informações em cor têm alternativa textual ou visual

Entregável: Color & Contrast Analysis

### Phase 3 — Análise Tipográfica e de Legibilidade
1. `{*check-font-scaling}` — Verificar se tipografia escala corretamente até 200% sem perda de conteúdo
2. `{*check-line-spacing}` — Verificar line height (1.5x body), paragraph spacing (2x), letter spacing (0.12x)
3. `{*check-text-reflow}` — Verificar reflow de texto em zoom e telas menores (WCAG 1.4.10)
4. `{*check-heading-hierarchy}` — Verificar hierarquia de headings: lógica, sequencial, sem saltos
5. `{*check-language-attributes}` — Verificar lang attributes e language declarations

Entregável: Typography & Readability Analysis

### Phase 4 — Análise de Navegação e Interação
1. `{*check-keyboard-access}` — Verificar que todas as funções são acessíveis por teclado (WCAG 2.1.1)
2. `{*check-focus-order}` — Verificar ordem de foco lógica e significativa (WCAG 2.4.3)
3. `{*check-focus-visible}` — Verificar indicador de foco visível e com contraste suficiente (WCAG 2.4.7)
4. `{*check-skip-links}` — Verificar existência de skip navigation links
5. `{*check-touch-targets}` — Verificar tamanho mínimo de touch targets (44x44px WCAG 2.5.5 / 24px AAA)
6. `{*check-motion-gestures}` — Verificar que motion gestures têm alternativa simples (WCAG 2.5.1)

Entregável: Navigation & Interaction Analysis

### Phase 5 — Análise de Screen Reader
1. `{*check-alt-text}` — Verificar alt text em todas as imagens: descritivo, conciso, funcional
2. `{*check-aria-roles}` — Verificar ARIA roles e properties: semântica correta, não redundante
3. `{*check-live-regions}` — Verificar live regions para conteúdo dinâmico: toasts, loading, errors
4. `{*check-form-labels}` — Verificar labels de formulários associados corretamente aos inputs
5. `{*check-table-headers}` — Verificar headers de tabelas de dados e tables de layout
6. `{*test-reading-order}` — Testar ordem de leitura com screen reader virtual

Entregável: Screen Reader Compatibility Analysis

### Phase 6 — Relatório e Certificado
1. `{*compile-violations}` — Compilar lista completa de violações com: critério WCAG, severidade, localização, evidência
2. `{*prioritize-fixes}` — Priorizar correções: critical (blocker), major, minor, cosmetic
3. `{*write-remediation-guide}` — Escrever guia de correção com exemplos before/after para cada violação
4. `{*calculate-compliance-score}` — Calcular score de conformidade: % de critérios passados por nível
5. `{*generate-certificate}` — Gerar certificado de conformidade (ou não-conformidade) com detalhes
6. `{*generate-report}` — Compilar relatório final completo

Entregável: Accessibility Report + Compliance Certificate

## Comandos Disponíveis
- `{*define-scope}` — Define escopo da auditoria
- `{*check-text-contrast}` — Verifica contraste de texto
- `{*check-ui-contrast}` — Verifica contraste de elementos de UI
- `{*simulate-colorblindness}` — Simula daltonismo
- `{*check-font-scaling}` — Verifica escala de tipografia
- `{*check-keyboard-access}` — Verifica acesso por teclado
- `{*check-focus-order}` — Verifica ordem de foco
- `{*check-alt-text}` — Verifica alt text de imagens
- `{*check-aria-roles}` — Verifica ARIA roles
- `{*compile-violations}` — Compila lista de violações
- `{*calculate-compliance-score}` — Calcula score de conformidade
- `{*generate-certificate}` — Gera certificado de conformidade

## Critérios de Conclusão
- [ ] Escopo da auditoria definido e documentado
- [ ] Nível WCAG configurado (A, AA ou AAA)
- [ ] Plano de auditoria criado com checklist
- [ ] Contraste de texto verificado (normal e large)
- [ ] Contraste de elementos de UI verificado
- [ ] Dependência exclusiva de cor verificada
- [ ] Simulação de daltonismo executada (3 tipos)
- [ ] Font scaling verificado até 200%
- [ ] Line height e spacing verificados
- [ ] Heading hierarchy verificada
- [ ] Keyboard access verificado
- [ ] Focus order e focus visible verificados
- [ ] Skip links verificados
- [ ] Touch targets verificados
- [ ] Alt text verificado em todas as imagens
- [ ] ARIA roles verificados
- [ ] Live regions verificadas
- [ ] Form labels verificados
- [ ] Table headers verificados
- [ ] Reading order testado
- [ ] Lista completa de violações compilada
- [ ] Violações priorizadas por severidade
- [ ] Guia de correção com exemplos before/after
- [ ] Score de conformidade calculado
- [ ] Certificado de conformidade gerado
- [ ] Relatório final completo compilado
