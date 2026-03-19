---
task: Orchestrate WebApp Project
responsavel: "@pwb-maestro"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brief: descrição do projeto em linguagem natural
Saida: |
  - project_blueprint: docs/PROJECT.md
  - phase_status: docs/PHASE-STATUS.md
---

# *orchestrate-project

Análise do brief, classificação do projeto e criação do blueprint completo.

## Fases de Execução

### Fase 1: Análise do Brief (5 min)
- Ler brief completo
- Identificar: tipo (LANDING | DASHBOARD | SAAS | MICRO), target user, objetivo primário
- Listar ambiguidades críticas (máx 3 perguntas se necessário)
- Nunca inventar features não mencionadas

### Fase 2: Classificação e Stack
Decidir stack baseado no tipo:

| Tipo | Stack | Agentes Ativados |
|------|-------|-----------------|
| LANDING | Next.js 15 + Supabase (email capture) | pm → ux → frontend + landing + seo → devops |
| DASHBOARD | Next.js 15 + Hono.js + Supabase + Clerk | pm → architect → ux → data-eng → backend + frontend + auth → devops |
| SAAS | Full monorepo (todos os 17 agentes) | Workflow completo |
| MICRO | Next.js 15 (estático ou com Server Actions) | ux → frontend → devops |

### Fase 3: Criar PROJECT.md
```markdown
# PROJECT.md — {Nome}
## Tipo: {LANDING | DASHBOARD | SAAS | MICRO}
## Objetivo: {frase clara}
## Stack: {lista}
## Agentes e Sequência: {lista com dependências}
## Entregáveis por Fase: {lista}
## Gates de Qualidade: {critérios por fase}
## Timeline Estimada: {por tipo}
## Riscos Identificados: {lista}
```

### Fase 4: Criar PHASE-STATUS.md
Status inicial de todas as fases como [ ] (não iniciado).

## Critério de Conclusão
PROJECT.md criado com tipo definido, stack escolhida, sequência de agentes clara, sem ambiguidades.

## KPIs
| Métrica | Alvo |
|---------|------|
| Tempo de análise | < 15 min |
| Perguntas de clarificação | <= 3 |
| Features inventadas | 0 |
