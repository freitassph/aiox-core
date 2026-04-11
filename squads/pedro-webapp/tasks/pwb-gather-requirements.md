---
task: Gather Requirements
responsavel: "@pwb-pm"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project_blueprint: docs/PROJECT.md
Saida: |
  - prd: docs/PRD.md
  - personas: docs/personas.md
  - stories: docs/stories/
---

# *gather-requirements

## Purpose
Definir a fundação estratégica e técnica do projeto através de requisitos claros e personas validadas.

## Pre-conditions
- Disponibilidade do briefing inicial do projeto.
- Acesso às ferramentas de documentação (Markdown).

## Checklist
- [ ] Personas identificadas e documentadas
- [ ] FRs priorizados (MUST/SHOULD/COULD)
- [ ] NFRs definidos (Performance, Segurança, Acessibilidade)
- [ ] Constraints mapeadas
- [ ] User Stories criadas em `docs/stories/`

Criar PRD completo com personas, requisitos funcionais e não-funcionais.

## Fases de Execução

### Fase 1: Personas (JTBD)
- Identificar 2-3 personas com Job to be Done
- Para cada persona: situação, motivação, resultado desejado, frustração atual

### Fase 2: Functional Requirements
- Listar todos os FRs com prioridade (MUST/SHOULD/COULD)
- Cada FR com critério de aceite Given/When/Then
- Ordenar por prioridade de negócio

### Fase 3: Non-Functional Requirements
- Performance: LCP < 2.5s, API p95 < 200ms
- Acessibilidade: WCAG 2.1 AA
- Segurança: OWASP Top 10
- Disponibilidade: > 99.9%

### Fase 4: Constraints & Out of Scope
- CON-001: deadline, budget, tech constraints
- Explicitamente definir o que é MVP vs pós-MVP

### Fase 5: User Stories
- Criar stories numeradas em `docs/stories/`
- Formato: Como [persona], quero [ação], para [resultado]
- ACs com Given/When/Then

## Critério de Conclusão
PRD sem "a definir", personas documentadas, FRs priorizados, ACs precisos.

## KPIs
| Métrica | Alvo |
|---------|------|
| FRs sem critério de aceite | 0 |
| Ambiguidades abertas | 0 |
| Features inventadas (sem base no brief) | 0 |
