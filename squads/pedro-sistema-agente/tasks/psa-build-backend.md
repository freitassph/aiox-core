---
task: Build Backend
responsavel: "@psa-backend"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - api_contract: docs/api-contract.md (gerado por psa-architect)
  - database_schema: packages/database/schema/ (gerado por psa-data-engineer)
  - integration_spec: docs/integration-spec.md (gerado por psa-architect)
Saida: |
  - api_running: apps/api/ funcionando
  - openapi_spec: docs/api-reference.json
  - test_suite: tests/unit/ + tests/integration/
  - docker_config: apps/api/Dockerfile + docker-compose.yml
---

# *build-backend

Implementa o backend bulletproof: Hono.js, TypeScript strict, Clean Architecture.

## Fases de Execução

### Fase 1: Setup Base
**Ações:**
- Inicializar `apps/api/` com Hono.js + TypeScript strict
- Configurar `tsconfig.json` (strict: true, paths para @/)
- Configurar ESLint + Prettier
- Implementar `src/lib/env.ts` (Zod-validated env vars)
- Implementar `src/lib/logger.ts` (Pino com requestId)
- Implementar `src/lib/errors.ts` (AppError class)
- Implementar `src/lib/redis.ts` (Upstash Redis client)

**Ferramentas:** Hono, Zod, Pino, @upstash/redis

**Critério de conclusão:** `pnpm dev` inicia sem erros, `pnpm typecheck` passa

### Fase 2: Middleware Stack
**Ações:**
- Implementar `requestId` middleware (UUID em todo request)
- Implementar `authMiddleware` (Supabase JWT validation, attach userId)
- Implementar `rateLimitMiddleware` (Redis sliding window)
- Implementar global error handler
- Configurar CORS (origins específicos, não `*`)
- Configurar security headers (helmet-like)

**Critério de conclusão:** Auth middleware rejeita token inválido com 401. Rate limit retorna 429 após limite.

### Fase 3: Database Layer (Repositories)
**Ações:**
- Configurar Drizzle ORM com schema de `packages/database/`
- Implementar repository para cada entidade: `agent-repository`, `conversation-repository`, `message-repository`, `knowledge-base-repository`
- Cada repository tem métodos: findById, findByOrg, create, update, delete (soft)
- Todas as queries têm `limit` máximo para evitar dump acidental

**Critério de conclusão:** Repositories retornam dados corretos em teste manual

### Fase 4: Services Layer
**Ações:**
- Implementar `AgentService`: create, update, delete, getWithConfig
- Implementar `ConversationService`: getOrCreate, addMessage, getHistory
- Implementar `KnowledgeBaseService`: create, addDocument, search (RAG)
- Cada service tem error handling completo e logs estruturados

**Critério de conclusão:** `pnpm test` passa com > 80% coverage nos services

### Fase 5: Routes Layer
**Ações:**
- Implementar todas as routes do `api-contract.md`
- Cada route tem: Zod validation, auth check, rate limit, error handling
- Implementar `/health` endpoint verificando DB + Redis + services externos
- Configurar OpenAPI spec geração automática

**Ferramentas:** Zod, @hono/zod-validator

**Critério de conclusão:** Todos os endpoints respondem corretamente (testado com Insomnia/curl)

### Fase 6: Background Jobs
**Ações:**
- Configurar BullMQ com Redis
- Implementar `embedding-job` (gera embeddings de documentos, rate-limited)
- Implementar `whatsapp-send-job` (retry automático se Evolution API offline)
- Implementar `notification-job` (lembretes de agendamento)

**Critério de conclusão:** Jobs executam e fazem retry automático em caso de falha

### Fase 7: Tests + Docker
**Ações:**
- Vitest unit tests para todos os services (> 80% coverage)
- Supertest integration tests para todos os endpoints críticos
- Criar `Dockerfile` multi-stage (build + production)
- Criar `docker-compose.yml` para desenvolvimento local com Redis

**Critério de conclusão:** `pnpm test` 100% pass. `docker build` sem erros.

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Response time p95 | < 200ms (queries simples) | Pino logs + k6 |
| Test coverage services | > 80% | Vitest coverage report |
| TypeScript errors | 0 | pnpm typecheck |
| ESLint warnings | 0 | pnpm lint |
| Endpoints sem auth | 0 (exceto /health) | Code review psa-auditor |


## Purpose
O propósito desta tarefa é garantir a execução impecável de um módulo específico do sistema Pedro Henrique, seguindo os rigorosos padrões de qualidade S+++.

## Entrada
- Requisitos técnicos detalhados
- Contexto do projeto vindo do Maestro
- Dependências de sistemas externos validadas

## Saida
- Código fonte documentado e testado
- Artefatos de design ou infraestrutura validados
- Relatório de conformidade técnica

## Checklist
- [ ] Validar conformidade com os padrões de código
- [ ] Executar testes de unidade e integração
- [ ] Revisar documentação técnica
- [ ] Obter aprovação do Auditor

## Pre-conditions
- Ambiente de desenvolvimento configurado
- Todas as dependências do agente resolvidas
- Goal da tarefa claramente definido e aceito pela squad
