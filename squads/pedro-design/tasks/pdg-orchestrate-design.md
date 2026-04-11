---
task: Orchestrate Design Project
responsavel: "@pdg-chief"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brief: Descrição do projeto em linguagem natural
  - type: brand | ui | social | ai-images | full-design
  - constraints: Restrições de tempo, assets, marca
Saida: |
  - design-project.md: Blueprint completo do projeto
  - agent-roster: Lista de agentes e sequência de ativação
  - gate-results: Resultado de cada gate de qualidade
Checklist:
  - "[ ] Brief recebido e analisado"
  - "[ ] Ambiguidades identificadas (máx 3 perguntas)"
  - "[ ] DESIGN-PROJECT.md gerado"
  - "[ ] Roster de agentes definido"
  - "[ ] Sequência de ativação planejada"
  - "[ ] Agente 1 ativado com context package"
  - "[ ] Gates de qualidade executados em cada fase"
  - "[ ] Coesão entre entregáveis verificada"
  - "[ ] DESIGN-DELIVERY.md gerado"
---

## Purpose

Act as the central design orchestrator — receive any design brief, decompose it into agents and phases, coordinate execution, and ensure cohesion in the final delivery across all design workflows (brand, UI, social, AI images, full-design).

## Pre-Conditions

- [ ] Design brief received in natural language
- [ ] Project type identified (brand, ui, social, ai-images, full-design)
- [ ] Time, asset, and brand constraints documented
- [ ] pdg-chief agent activated
- [ ] No blocking dependencies from upstream tasks

# *orchestrate-design

O orquestrador central do pedro-design. Recebe qualquer brief de design, decompõe em agentes e fases, coordena a execução e garante coesão na entrega final.

## Uso

```
*orchestrate-design --brief "criar identidade visual para startup de fintech chamada Nexo" --type brand
*orchestrate-design --brief "redesign do dashboard de métricas" --type ui
*orchestrate-design --brief "campanha de lançamento para produto, preciso de imagens IA e posts" --type social
*orchestrate-design --brief "site completo com design system" --type full-design
```

## Tipos de Projeto → Roster

| Type | Agentes Ativados | Workflow |
|------|-----------------|---------|
| `brand` | chief → brand-identity → visual-designer → ux-writer → auditor | brand-identity-workflow |
| `ui` | chief → ux-designer → visual-designer → design-system → frontend-designer → motion-designer → ux-writer → auditor | ui-design-workflow |
| `social` | chief → social-media → ai-image-director → photo-director → ux-writer → auditor | ai-content-workflow |
| `ai-images` | chief → ai-image-director → photo-director → visual-designer → auditor | - |
| `full-design` | Todos os agentes conforme necessário | Todos os workflows |

## Saída do Orquestrador

O pdg-chief gera no início:
```
DESIGN-PROJECT.md (blueprint completo)
├── Objetivo
├── Audiência
├── Entregáveis
├── Direção criativa
├── Agenda de agentes
└── Decisões tomadas
```

E no final:
```
DESIGN-DELIVERY.md (relatório de entrega)
├── Assets entregues (tabela completa)
├── Decisões de design documentadas
├── Como usar os assets
└── Próximos passos recomendados
```
