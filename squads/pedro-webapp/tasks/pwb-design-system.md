---
task: Design System
responsavel: "@pwb-ux-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md
  - project_type: LANDING | DASHBOARD | SAAS (do PROJECT.md)
Saida: |
  - design_tokens: apps/web/styles/design-tokens.css
  - tailwind_config: apps/web/tailwind.config.ts
  - motion_lib: apps/web/lib/motion.ts
  - handoff: docs/design/HANDOFF.md
---

# *design-system

Criar design system premium com tokens oklch, especificações de componentes e motion spec.

## Fases de Execução

### Fase 1: Color System (oklch)
- Definir 5-6 cores semânticas: primary, background, foreground, card, border, muted
- Dark mode: variações `.dark` para cada token
- Verificar contraste 4.5:1 mínimo
- Salvar em `design-tokens.css`

### Fase 2: Tipografia e Espacamento
- Configurar Geist Sans + Geist Mono via next/font
- Escala de tamanhos: 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72
- Letter-spacing: `-0.02em` em headings
- Line-height: 1.5 para body, 1.2 para headings

### Fase 3: Componentes por Projeto

**LANDING:**
- Hero: gradiente, badge, headline, subheadline, CTAs, social proof
- Feature cards: ícone stroke + título + descrição
- Pricing: toggle mensal/anual, cards com highlight no tier central
- Testimonials: avatar + nome + cargo + empresa + quote
- FAQ: accordion com animação smooth

**DASHBOARD:**
- Sidebar: collapsível, active states, ícones stroke
- Stats cards: valor grande + label + trend indicator
- Data tables: sortable, selectable, paginação
- Charts: Recharts com tema personalizado
- Modais e drawers

**SAAS:**
- Landing + Dashboard combinados
- Onboarding wizard (steps progressivos)
- Settings tabs com seções

### Fase 4: Motion Spec
- `fadeInUp`: elementos que entram na viewport
- `staggerContainer`: grupos de elementos (features, cards)
- `scaleIn`: modais e popovers
- Regras: nunca animar LCP, delay máx 200ms em interações

### Fase 5: HANDOFF.md
Documentar para o pwb-frontend:
- Componentes por seção com animações e variantes
- Breakpoints e comportamento responsivo
- Estados: loading (skeleton), empty, error, success
- Acessibilidade: focus rings, aria-labels, contraste

## Critério de Conclusão
Tokens definidos, HANDOFF.md sem ambiguidades, dark mode funcionando, contraste validado.

## KPIs
| Métrica | Alvo |
|---------|------|
| Contraste mínimo | 4.5:1 |
| Componentes sem especificação | 0 |
| Design tokens sem documentação | 0 |
