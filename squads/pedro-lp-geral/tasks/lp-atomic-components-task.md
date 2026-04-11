---
task: lp-atomic-components
responsavel: "@lp-atomic-design-architect"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

## Purpose
Describe the purpose and goal of this task.

---

## Entrada
```yaml
entrada:
  - campo: input_name
    tipo: string
    obrigatorio: true
    descricao: "Description of input"
```

---

## Saida
```yaml
saida:
  - deliverable: output_name
    formato: markdown
    descricao: "Description of output"
```

---

## Checklist
```
□ Item 1
□ Item 2
□ Item 3
□ Item 4
□ Item 5
```

---

## Pre-conditions
```
- Condition 1 that must be met
- Condition 2 that must be met
```



# Task: Atomic Components — Especificação Completa

## Objetivo
Especificar todos os componentes (átomos → moléculas → organismos) necessários para o projeto antes da implementação. O lp-ui-artisan não implementa nada sem esta especificação.

## Agente Responsável
`lp-atomic-design-architect` (Yuki Tanaka)

## Inputs Necessários
- `brand-archetype-report.md`
- `styles/design-tokens.css`
- `project-scope.md` (seções definidas)

## Processo

### FASE 1 — Inventário de Seções
```
1. Listar todas as seções necessárias (do project-scope.md)
2. Para cada seção: identificar organismos necessários
3. Para cada organismo: identificar moléculas e átomos
4. Criar hierarquia completa: seção → organismo → molécula → átomo
```

### FASE 2 — Especificação de Átomos
```
Para cada átomo:
- Nome e variantes
- Tokens aplicados
- Estados (default, hover, focus, disabled, error, loading)
- Breakpoints críticos
- Acessibilidade: role, aria-*, keyboard, contraste
- Motion: hover animation + entry animation
```

### FASE 3 — Especificação de Moléculas
```
Para cada molécula:
- Composição de átomos
- Props interface (TypeScript)
- Layout (flex/grid) + spacing tokens
- Responsividade
- Estados da molécula
```

### FASE 4 — Especificação de Organismos (Seções)
```
Para cada seção:
- Layout: grid 12 colunas + breakpoints
- Composição de moléculas
- Background (page/surface/card/dark/brand)
- Padding vertical (section-pad-y)
- Motion: stagger de children + entry animation
- Copy placeholders (onde vai cada texto)
- Image/media placeholders
```

## Output Esperado

- `component-specs.md` — Especificações completas de todos os componentes
- `component-inventory.md` — Lista de todos os componentes com contagem e prioridade
- `section-wireframes.md` — Wireframes textuais de cada seção (layout descrito)
- `accessibility-spec.md` — Requisitos de acessibilidade por componente
