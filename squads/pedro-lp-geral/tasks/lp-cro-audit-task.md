---
task: lp-cro-audit
responsavel: "@lp-conversion-psychologist"
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



# Task: CRO Audit — Otimização de Conversão

## Objetivo
Auditar a landing page implementada nas 7 camadas de conversão e identificar todos os friction points antes do lançamento.

## Agente Responsável
`lp-conversion-psychologist` (Dra. Sofia Cialdini)

## Inputs Necessários
- Site implementado (preview URL)
- `hero-copy.md`
- `sections-copy.md`

## Processo
1. Auditoria above the fold (3 segundos test)
2. Verificar 7 Princípios de Cialdini na página
3. Mapear friction points no funil
4. Verificar Trust Architecture
5. Validar Offer Architecture (Hormozi)
6. Propor A/B test roadmap

## Output Esperado
- `cro-audit.md` — Relatório completo 7 camadas
- `conversion-blockers.md` — Issues priorizados
- `ab-test-roadmap.md` — Plano de testes pós-launch
