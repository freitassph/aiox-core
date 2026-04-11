---
task: Design UI Screen
responsavel: "@pdg-ux-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - screen: Nome/tipo da tela (dashboard, checkout, onboarding, etc.)
  - context: Produto, marca, usuário-alvo
  - existing_ds: Design system existente (URL Figma ou "none")
  - states: Estados que devem ser cobertos
Saida: |
  - screens.fig: Telas no Figma com todos os estados
  - ux-spec.md: Especificações de comportamento e interação
  - accessibility-notes.md: Notas de acessibilidade
Checklist:
  - "[ ] User goal da tela entendido"
  - "[ ] Fluxo de entrada e saída mapeado"
  - "[ ] Wireframe low-fi validado"
  - "[ ] Grid e sistema aplicados"
  - "[ ] Estado default"
  - "[ ] Estado loading"
  - "[ ] Estado vazio (empty state)"
  - "[ ] Estado de erro"
  - "[ ] Estado de sucesso"
  - "[ ] Responsivo: mobile, tablet, desktop"
  - "[ ] Accessibility notes documentadas"
  - "[ ] Especificação de interação escrita"
  - "[ ] Handoff para pdg-frontend-designer"
---

## Purpose

Design a complete product screen with all states (default, loading, empty, error, success), responsive layouts for mobile/tablet/desktop, and detailed interaction specifications for handoff to development.

## Pre-Conditions

- [ ] Screen type and user goal defined
- [ ] Product context and target user identified
- [ ] Existing design system available (or confirmed none)
- [ ] pdg-ux-designer agent activated
- [ ] Upstream tasks (wireframes, user flow) completed

# *design-ui-screen

Design completo de uma tela de produto com todos os estados, responsividade e especificações de interação.

## Uso

```
*design-ui-screen --screen "dashboard principal" --context "SaaS de gestão de projetos" --existing_ds figma.com/xxx
*design-ui-screen --screen "checkout em 3 passos" --context "e-commerce de moda" --states "default,loading,error,success"
*design-ui-screen --screen "tela de onboarding" --context "app mobile de finanças pessoais"
```

## States Coverage

Por padrão, toda tela é entregue com:
- **Default** — conteúdo normal
- **Loading** — skeleton screens (não spinners)
- **Empty** — zero content com instrução de próximos passos
- **Error** — mensagem específica com ação de recuperação
- **Success** — confirmação visual clara

## Breakpoints

Por padrão, toda tela é entregue em:
- **Mobile** — 390px (iPhone 14)
- **Tablet** — 768px (iPad)
- **Desktop** — 1280px (padrão)

## UX Spec Format

```markdown
# Screen: [Nome]

## User Goal
[O que o usuário está tentando realizar nesta tela]

## Components
| Componente | Estado | Comportamento |
|------------|--------|---------------|

## Interactions
- Tap/Click [elemento] → [resultado]
- Focus [elemento] → [resultado]
- Scroll → [resultado]

## Accessibility
- Focus order: [sequência com Tab]
- Screen reader announcements: [o que é anunciado]
- ARIA roles: [roles não-padrão usados]
```
