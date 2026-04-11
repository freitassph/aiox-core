---
task: Build Design System
responsavel: "@pdg-design-system"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project: Nome do projeto
  - brand_tokens: Tokens da marca (do pdg-brand-identity ou briefing)
  - components_needed: Lista de componentes necessários
  - framework: React/Next.js (padrão) ou outro
Saida: |
  - tokens/: Design tokens em CSS e JSON
  - components/: Componentes implementados com TypeScript
  - storybook/: Stories de documentação
  - figma-variables: Link para Figma com variáveis configuradas
Checklist:
  - "[ ] Tokens primitivos definidos"
  - "[ ] Tokens semânticos (light + dark)"
  - "[ ] CSS custom properties geradas"
  - "[ ] Figma variables configuradas"
  - "[ ] Atoms implementados (Button, Input, Badge, etc.)"
  - "[ ] Molecules implementados"
  - "[ ] Dark mode funcionando"
  - "[ ] Acessibilidade em todos os componentes"
  - "[ ] Storybook com stories completas"
  - "[ ] TypeScript types exportados"
  - "[ ] Documentação de uso"
---
## Purpose

Complete this design task

## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed



# *build-design-system

Constrói design system completo com tokens, componentes, dark mode, acessibilidade e documentação Storybook.

## Uso

```
*build-design-system --project "meu-produto" --framework nextjs
*build-design-system --project "app-mobile" --components "Button,Input,Modal,Card,Badge,Avatar"
```

## Componentes Entregues (pacote básico)

### Atoms
- Button (6 variants, 5 sizes, loading, icons)
- Input (label, hint, error, icons, disabled)
- Textarea, Select, Checkbox, Radio, Toggle
- Badge, Tag, Chip
- Avatar (sizes, fallback, group)
- Icon wrapper (Lucide)
- Spinner, Skeleton

### Molecules
- InputField (Input + Label + Error)
- SearchInput
- AlertBanner (success, warning, error, info)
- UserAvatar (Avatar + Name + Role)
- EmptyState (icon + title + description + CTA)

### Organisms
- Modal, Drawer, Sheet
- Dropdown, Popover, Tooltip
- DataTable (sorting, pagination, selection)
- Form (with validation)
- Navigation (Header, Sidebar, Bottom Nav)
- Card (Header, Content, Footer)
- Tabs, Accordion

## Estrutura de Arquivos

```
src/
├── tokens/
│   ├── global.ts       (primitive tokens)
│   ├── semantic.ts     (semantic aliases)
│   └── components.ts   (component tokens)
├── styles/
│   ├── globals.css     (CSS custom properties)
│   └── tokens.css      (generated from tokens/)
├── components/
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── ...
└── lib/
    └── utils.ts        (cn() and helpers)
```
