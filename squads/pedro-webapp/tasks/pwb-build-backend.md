---
task: Build Backend API
responsavel: "@pwb-backend"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - api_contract: docs/api-contract.md
  - schema: supabase/migrations/ (schema pronto)
  - auth: (auth configurado)
Saida: |
  - api: apps/api/ (completo)
---

# *build-backend

## Purpose
Implementar uma API robusta e escalável seguindo padrões de Clean Architecture, garantindo segurança e alta performance no processamento de dados.

## Pre-conditions
- Schema do banco de dados (Drizzle/SQL) validado.
- Contrato de API (OpenAPI/docs) definido.

## Checklist
- [ ] Setup do ambiente Hono.js e Drizzle orm concluído
- [ ] Middlewares fundamentais configurados (CORS, Auth, Logs)
- [ ] Rotas e Services implementados conforme contrato
- [ ] Multi-tenancy (RLS/orgId) validado em todos os endpoints
- [ ] Background jobs (BullMQ) configurados para tarefas pesadas
- [ ] Health Check operacional

## Fases de Execução

### Fase 1: Setup
```bash
pnpm create hono@latest apps/api --template nodejs
cd apps/api
pnpm add drizzle-orm @supabase/supabase-js pino bullmq ioredis zod @hono/zod-validator
```

### Fase 2: Estrutura Base
- `src/index.ts`: Hono app com middlewares (cors, secureHeaders, rateLimit, logger)
- `src/lib/errors.ts`: AppError class
- `src/lib/logger.ts`: Pino estruturado com requestId
- `src/lib/db.ts`: Drizzle client
- `src/middleware/auth.ts`: JWT validation middleware
- `src/middleware/error-handler.ts`: Global error handler

### Fase 3: Routes e Services
Por cada resource do api-contract:
1. Route handler: validação Zod, delegar para service
2. Service: business logic, verificação de permissões
3. Repository: queries Drizzle, sem lógica

### Fase 4: Multi-tenancy
- Toda query filtra por `orgId`
- `requireOrgMember` middleware para routes de org
- `requireOrgAdmin` para operações administrativas

### Fase 5: Background Jobs
- BullMQ worker para emails
- BullMQ worker para webhooks de terceiros
- Graceful shutdown: processar jobs pendentes antes de fechar

### Fase 6: Health Check
- `GET /health`: verificar DB + Redis, retornar 200 se saudável, 503 se degradado

### Fase 7: Quality Gate
```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
```

## Critério de Conclusão
API rodando, todos os endpoints do contrato implementados, testes passando, health check funcionando.

## KPIs
| Métrica | Alvo |
|---------|------|
| API p95 latency | < 200ms |
| Test coverage | > 80% |
| TypeScript `any` | 0 |
| Routes sem validação Zod | 0 |
