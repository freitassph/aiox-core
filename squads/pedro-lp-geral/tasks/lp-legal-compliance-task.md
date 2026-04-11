---
task: lp-legal-compliance
responsavel: "@lp-integration-engineer"
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

## Pre-conditions
```
- Condition 1 that must be met
- Condition 2 that must be met
```



# Task: Legal Compliance — LGPD + Regulatórios

## Objetivo
Garantir conformidade LGPD e requisitos legais básicos para qualquer landing page publicada no Brasil.

## Agente Responsável
`lp-integration-engineer` (Lucas Byte) — implementação técnica
Com suporte do cliente para conteúdo legal.

## Checklist LGPD Obrigatório
```
□ Banner de cookies com categorias granulares
□ Consentimento antes de carregar pixels/analytics
□ Política de Privacidade: completa e acessível (link no footer)
□ Termos de Uso (se houver venda ou cadastro)
□ Dados coletados identificados e minimizados
□ CNPJ / razão social visível no rodapé
□ Canal de contato para titulares de dados (DSAR)
□ Retenção de dados documentada
□ Revogação de consentimento: funcional
```

## Regulatórios Adicionais por Setor (quando aplicável)
```
□ Financeiro (CVM/Banco Central): não prometer rentabilidade
□ Saúde (CFM/ANVISA): sem garantias de cura/resultado
□ Educação (MEC): IES regulamentadas mencionar número
□ Alimentação (ANVISA): claims nutricionais regulamentados
□ Jurídico (OAB): sem captação proibida, sem anúncios de honorários
□ Estética/Cosmético (ANVISA): sem claims terapêuticos
```

## Output Esperado
- `lgpd-compliance-report.md` — Checklist auditado
- CMP configurado e funcional na landing
- Política de Privacidade inserida ou aprovada pelo cliente
