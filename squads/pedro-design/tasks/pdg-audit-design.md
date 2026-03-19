---
task: Audit Design
responsavel: "@pdg-auditor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - artifact: O que deve ser auditado (Figma URL, código, screenshots)
  - scope: Tipo de auditoria (visual / accessibility / ux / full)
  - context: Produto/marca/projeto (para entender padrões esperados)
Saida: |
  - audit_report.md: Relatório completo com issues classificados
  - action_items: Lista de ações por prioridade
Checklist:
  - "[ ] Contexto do artefato entendido"
  - "[ ] Heurísticas de Nielsen aplicadas"
  - "[ ] Verificação WCAG 2.1 AA"
  - "[ ] Visual quality audit (hierarquia, sistema)"
  - "[ ] Design system compliance check"
  - "[ ] States check (loading, error, empty, success)"
  - "[ ] Copy review"
  - "[ ] Issues classificados por severidade"
  - "[ ] Relatório gerado com sugestões"
---

# *audit-design

Auditoria completa de qualidade de design usando heurísticas de Nielsen, WCAG 2.1 AA, visual consistency e design system compliance.

## Uso

```
*audit-design --artifact figma.com/file/xxx --scope full
*audit-design --artifact ./screenshots/ --scope accessibility
*audit-design --artifact ./components/ --scope visual
```

## Tipos de Auditoria

| Scope | Cobertura |
|-------|-----------|
| `visual` | Hierarquia, tipografia, cor, espaçamento, sistema |
| `accessibility` | WCAG 2.1 AA completo |
| `ux` | 10 Heurísticas de Nielsen |
| `copy` | Microcopy, CTAs, erros, empty states |
| `full` | Tudo acima |

## Severidade de Issues

| Nível | Descrição | Ação |
|-------|-----------|------|
| CRITICAL | Impede uso ou exclui usuários | Blocker — resolver antes de lançar |
| MAJOR | Causa frustração significativa | Alta prioridade |
| MINOR | Prejudica a experiência | Melhorar na próxima iteração |
| COSMETIC | Preferência visual | Opcional |

## Output

O relatório inclui:
- Executive summary com score geral
- Issues por severidade com localização precisa
- Evidência e sugestão de solução para cada issue
- Lista de pontos positivos
- Action items com responsável sugerido
