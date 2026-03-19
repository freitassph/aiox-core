---
task: Design System
responsavel: "@psa-ux-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md (personas, features)
  - brand: informações de marca do cliente (se houver)
Saida: |
  - design_tokens: apps/web/styles/design-tokens.css
  - tailwind_config: apps/web/tailwind.config.ts (extension)
  - handoff: docs/design/HANDOFF.md
  - motion_spec: docs/design/motion.md
---

# *design-system

Cria o design system premium Apple/Ferrari para ser implementado pelo psa-frontend.

## Fases de Execução

### Fase 1: Design Tokens Foundation
**Ações:**
- Criar `apps/web/styles/design-tokens.css` com sistema completo de:
  - Cores (oklch): background hierarchy (5 níveis), accent (primária + variantes), text (3 níveis), semantic (success/warning/error)
  - Tipografia: font-family, font-weight, letter-spacing, line-height
  - Espaçamento: escala 4px base
  - Border radius: xs/sm/md/lg/xl/full
  - Sombras e glassmorphism: 4 níveis de elevation
  - Transições: durations (100/150/200/300/500ms) + easings

**Critério de conclusão:** Tokens completos, zero uso de hex hardcoded no CSS

### Fase 2: Tailwind Config Extension
**Ações:**
- Atualizar `apps/web/tailwind.config.ts` para usar CSS variables como tokens
- Classes utilitárias: `bg-background-base`, `text-primary`, `border-glass`, etc.
- Configurar dark mode via class strategy (não media query)

**Critério de conclusão:** `className="bg-background-elevated text-primary"` funciona em componente

### Fase 3: Component Specifications
**Ações:**
- Para cada componente do PRD, criar spec em `docs/design/components/`:
  - Button: primary, secondary, ghost, danger — todos os estados
  - Input: default, focus, error, disabled — com labels e helper text
  - Card: glass, elevated, flat — com hover states
  - Modal/Sheet: backdrop, entrada, saída
  - Navigation: sidebar, breadcrumb, tabs
  - Badge, Avatar, Skeleton, Toast
- Cada spec inclui: dimensões, cores, estados, responsividade

**Critério de conclusão:** Cada componente spec tem todos os estados documentados

### Fase 4: Layout Architecture
**Ações:**
- Definir layout do dashboard: sidebar + main content area
- Definir layout mobile: bottom navigation + content
- Especificar grid system e breakpoints
- Wireframe de cada tela principal em markdown/ASCII art detalhado

**Critério de conclusão:** Frontend pode implementar sem perguntas sobre posicionamento

### Fase 5: Motion Specification
**Ações:**
- Criar `docs/design/motion.md` com spec de cada animação:
  - Page transitions: slide/fade com duração e easing
  - Component enter/exit: spring physics para cards, ease para modals
  - Micro-interactions: botão press, input focus, hover states
  - Loading states: skeleton shimmer gradient
  - Notificações: toast slideIn + fadeOut

**Critério de conclusão:** Spec suficiente para implementar em Framer Motion sem dúvidas

### Fase 6: HANDOFF Package
**Ações:**
- Criar `docs/design/HANDOFF.md` consolidando: tokens, componentes, layouts, motion
- Incluir exemplos de uso de cada token e componente
- Incluir checklist de implementação para psa-frontend

**Critério de conclusão:** HANDOFF.md é autocontido — psa-frontend não precisa perguntar nada

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Contraste de texto | >= 4.5:1 (WCAG AA) | Browser devtools |
| Componentes especificados | 100% dos usados no PRD | Checklist |
| Design tokens centralizados | 100% (zero hardcoded) | Code review |
