---
task: lp-seo-strategy
responsavel: "@lp-seo-specialist"
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



# Task: SEO Strategy — Visibilidade Orgânica

## Objetivo
Definir estratégia de keywords, metadados, Schema.org e otimizações técnicas para máxima visibilidade orgânica na landing page.

## Agente Responsável
`lp-seo-specialist` (Rafael Busca)

## Processo
1. Keyword research (intent transacional/comercial primeiro)
2. Definir title tag + meta description + H1 + H2s
3. Criar Schema JSON-LD completo para o tipo de negócio
4. Verificar Core Web Vitals targets
5. Local SEO se negócio físico/local

## Output Esperado
- `seo-strategy.md` — Keywords + racional
- `on-page-spec.md` — Todas as tags definidas
- `schema-markup.json` — JSON-LD completo
