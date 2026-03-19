---
task: Setup Database
responsavel: "@pwb-data-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md
  - architecture: docs/architecture.md
  - project_type: LANDING | DASHBOARD | SAAS
Saida: |
  - migrations: supabase/migrations/
  - drizzle_schema: packages/database/schema/
  - seed: supabase/seed.ts
---

# *setup-database

Criar schema PostgreSQL completo com RLS, índices otimizados e schema Drizzle.

## Fases de Execução

### Fase 1: ERD
- Mapear entidades e relacionamentos
- Definir PKs (UUID), FKs com ON DELETE CASCADE
- Identificar campos de busca frequente (para índices)
- Documentar ERD em `docs/DATABASE.md`

### Fase 2: Migrations SQL
Por tipo de projeto:

**LANDING:** `001_waitlist.sql` — emails, source, created_at

**DASHBOARD:**
- `001_users.sql` — users com updated_at trigger
- `002_organizations.sql` — orgs, members, invitations
- `003_core_schema.sql` — entidades do negócio

**SAAS:**
- `001_users.sql`
- `002_organizations.sql`
- `003_billing.sql` — customers, subscriptions, invoices, webhook_events
- `004_notifications.sql` — preferences, notifications
- `005_audit_logs.sql` — audit trail completo

### Fase 3: RLS — Todas as Tabelas
- `ALTER TABLE x ENABLE ROW LEVEL SECURITY` em todas
- Helper functions: `is_org_member()`, `is_org_admin()`
- Policies: SELECT, INSERT, UPDATE, DELETE por tabela
- Testar: tentar acessar dados de outra org → deve falhar

### Fase 4: Índices de Performance
- FK indexes: todo campo `*_id` que referencia outra tabela
- Query indexes: campos usados em WHERE/ORDER BY frequentemente
- Partial indexes para queries com WHERE fixo (ex: `WHERE read_at IS NULL`)

### Fase 5: Drizzle Schema
- TypeScript schema correspondendo ao SQL
- `drizzle.config.ts` configurado
- Testar: `pnpm drizzle-kit push` em dev
- Testar: `pnpm drizzle-kit generate` gera migration correta

### Fase 6: Seed de Development
- Usuários de teste com diferentes roles
- Organizações de exemplo
- Dados realistas para desenvolvimento

## Critério de Conclusão
RLS em todas as tabelas, schema Drizzle sincronizado, seed funcionando, zero Seq Scans em queries frequentes.

## KPIs
| Métrica | Alvo |
|---------|------|
| Tabelas sem RLS | 0 |
| FKs sem índice | 0 |
| Migrations sem rollback possível | 0 |
