---
task: lp-design-tokens
responsavel: "@lp-prestige-design-system"
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



# Task: Design Tokens — Prestige Universal Identity

## Objetivo
Gerar o sistema completo de tokens de design adaptado ao Brand Archetype do projeto. Nenhum componente é implementado antes desta task estar concluída.

## Agente Responsável
`lp-prestige-design-system` (Viktor Noir)

## Inputs Necessários
- `briefing-document.md` (completo)
- `brand-archetype-report.md` (archetype declarado)

## Processo

### FASE 1 — Seleção de Paleta (archetype → tokens)
```
1. Aplicar paleta base do archetype identificado
2. Personalizar com cor de marca do cliente (se houver)
3. Validar contraste WCAG 2.1 AA em todos os pares texto/fundo
4. Gerar variações: primary / hover / active / disabled / wash
```

### FASE 2 — Tipografia
```
1. Selecionar fontes do archetype (Google Fonts — zero custo)
2. Definir escala tipográfica com fluid sizing (clamp)
3. Mapear display / heading / body / label / caption
4. Definir tracking e line-height por nível
```

### FASE 3 — Espaçamento, Raios e Sombras
```
1. Confirmar grid 8px base
2. Definir border-radius por archetype (sharp LUXURY → round PLAYFUL)
3. Definir shadow scale (xs → 2xl) com cor da sombra alinhada ao archetype
4. Definir glass morphism tokens (se LUXURY ou BOLD dark)
```

### FASE 4 — Motion Profile
```
1. Selecionar easing functions por archetype
2. Definir duration scale
3. Documentar motion profile completo para lp-motion-designer
```

### FASE 5 — Geração dos Arquivos
```
1. Gerar design-tokens.css (CSS custom properties completas)
2. Gerar design-tokens-template.yaml (para documentação)
3. Gerar brand-identity-report.md (racional de todas as decisões)
```

## Output Esperado

- `styles/design-tokens.css` — Tokens completos prontos para uso no Next.js
- `brand-identity-report.md` — Decisões documentadas com racional
- `typography-spec.md` — Hierarquia tipográfica com exemplos visuais
- `motion-profile.md` — Perfil de animações para lp-motion-designer
- `imagery-guidelines.md` — Diretrizes fotográficas/visuais para o segmento
