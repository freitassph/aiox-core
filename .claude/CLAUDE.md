# Synkra AIOX Project Rules for Claude Code

Este arquivo define as instrucoes de projeto para Claude Code neste repositorio.
As regras globais continuam valendo, mas aqui ficam os contratos locais que o
framework valida.

## Constitution

O AIOX possui uma Constitution formal em `.aiox-core/constitution.md`.
Trabalhe respeitando os principios inegociaveis:

| Artigo | Principio | Severidade |
|--------|-----------|------------|
| I | CLI First | NON-NEGOTIABLE |
| II | Agent Authority | NON-NEGOTIABLE |
| III | Story-Driven Development | MUST |
| IV | No Invention | MUST |
| V | Quality First | MUST |
| VI | Absolute Imports | SHOULD |

## Framework vs Project Boundary

O projeto usa separacao explicita entre framework e runtime.

| Camada | Mutabilidade | Paths |
|--------|--------------|-------|
| L1 | Nunca modificar | `.aiox-core/core/`, `.aiox-core/constitution.md`, `bin/aiox.js`, `bin/aiox-init.js` |
| L2 | Extend-only | `.aiox-core/development/tasks/`, `.aiox-core/development/templates/`, `.aiox-core/development/checklists/`, `.aiox-core/development/workflows/`, `.aiox-core/infrastructure/` |
| L3 | Mutavel com excecoes | `.aiox-core/data/`, `agents/*/MEMORY.md`, `.aiox-core/core-config.yaml` |
| L4 | Runtime do projeto | `docs/stories/`, `packages/`, `tests/`, `scripts/` |

As deny rules em `.claude/settings.json` sao a fonte operacional desta fronteira.

## Sistema de Agentes

Ative agentes com `@agent-name` ou `/AIOX:agents:agent-name`.

| Agente | Escopo |
|--------|--------|
| `@dev` | Implementacao de codigo |
| `@qa` | Testes e qualidade |
| `@architect` | Arquitetura e design tecnico |
| `@pm` | Product Management |
| `@po` | Stories e epics |
| `@sm` | Fluxo e coordenacao |
| `@analyst` | Pesquisa e analise |
| `@data-engineer` | Banco de dados e dados |
| `@ux-design-expert` | UX/UI |
| `@devops` | CI/CD e operacoes de push |
| `@aiox-master` | Orquestracao geral |

Comandos de agentes usam prefixo `*`, por exemplo `*help`, `*task` e `*exit`.

## Workflow Local

- Trabalhe a partir de stories em `docs/stories/`
- Atualize checklist e file list ao concluir trabalho
- Rode `npm run lint`, `npm run typecheck` e `npm test` antes de encerrar mudancas relevantes
- Nao invente requisitos fora dos artefatos existentes
