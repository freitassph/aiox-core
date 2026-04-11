---
task: Setup Database
responsavel: "@psa-data-engineer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md (gerado por psa-pm)
  - architecture: docs/architecture.md (gerado por psa-architect)
Saida: |
  - migrations: supabase/migrations/ (SQL versionado)
  - drizzle_schema: packages/database/schema/ (TypeScript)
  - rag_functions: Funções SQL para busca semântica
  - database_docs: docs/database.md (ERD + documentação)
---

# *setup-database

Cria toda a infraestrutura de dados: schema PostgreSQL, RLS, pgvector, Drizzle ORM.

## Fases de Execução

### Fase 1: ERD Design
**Ações:**
- Ler PRD e listar todas as entidades de negócio
- Mapear relações: um-para-um, um-para-muitos, muitos-para-muitos
- Identificar access patterns (quais queries serão mais frequentes)
- Criar ERD em Mermaid no `docs/database.md`
- Validar ERD com psa-architect antes de escrever SQL

**Ferramentas:** Mermaid (diagramas), análise de PRD

**Critério de conclusão:** ERD aprovado por psa-architect, todas as entidades cobertas

### Fase 2: Schema SQL (Core Tables)
**Ações:**
- Criar `supabase/migrations/001_init_schema.sql`
- Tabelas obrigatórias: organizations, profiles, agents, conversations, messages
- Todas as tabelas com: UUID primary key (gen_random_uuid()), created_at, updated_at, soft delete via `deleted_at`
- Constraints: NOT NULL onde obrigatório, CHECK para enums, FOREIGN KEY com ON DELETE CASCADE ou RESTRICT (analisar cada caso)
- Comentários em todas as colunas não óbvias

**Critério de conclusão:** `supabase db push` executa sem erros

### Fase 3: RAG Tables + pgvector
**Ações:**
- Criar `supabase/migrations/002_rag_schema.sql`
- Tabelas: knowledge_bases, documents, embeddings (VECTOR(1536))
- Habilitar extensão pgvector: `CREATE EXTENSION IF NOT EXISTS vector;`
- Criar índice HNSW para embeddings: `USING hnsw(embedding vector_cosine_ops)`
- Criar função SQL `match_documents` para busca semântica

**Critério de conclusão:** Query `SELECT match_documents(...)` retorna resultados corretamente

### Fase 4: RLS Policies
**Ações:**
- Habilitar RLS em TODAS as tabelas: `ALTER TABLE x ENABLE ROW LEVEL SECURITY;`
- Criar helper function `auth.user_org_id()` para buscar org do usuário autenticado
- Criar políticas de isolamento por organização em cada tabela
- Criar políticas para service_role (bypass para backend)
- Testar: usuário da org A não pode ver dados da org B

**Critério de conclusão:** Teste de isolation passa: query com JWT org A retorna 0 rows de org B

### Fase 5: Índices de Performance
**Ações:**
- Analisar todos os access patterns identificados na Fase 1
- Criar índices compostos para queries mais frequentes
- Índices obrigatórios: (org_id + is_active), (conversation_id + created_at DESC), (agent_id + last_msg_at DESC)
- Documentar cada índice com o motivo

**Critério de conclusão:** EXPLAIN ANALYZE nas queries principais mostra Index Scan (não Seq Scan)

### Fase 6: Drizzle ORM Schema
**Ações:**
- Criar `packages/database/schema/` com schema TypeScript correspondente ao SQL
- Uma arquivo por domínio: `agents.ts`, `conversations.ts`, `embeddings.ts`
- Incluir tipos de relações (Drizzle relations)
- Exportar tipos inferidos: `type Agent = typeof agents.$inferSelect`

**Critério de conclusão:** `pnpm typecheck` passa no packages/database/

### Fase 7: Seed Data
**Ações:**
- Criar `supabase/seed.sql` com dados de demonstração
- Incluir: 1 organização, 1 usuário admin, 1 agente configurado, 5 documentos na base de conhecimento
- Embeddings podem ser mockados no seed (zeros) — RAG real é populado no onboarding

**Critério de conclusão:** `supabase db seed` executa sem erros, dados aparecem no dashboard Supabase

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Todas as tabelas com RLS | 100% | Verificar `pg_tables` com RLS habilitado |
| Query match_documents latência | < 100ms para 100k embeddings | EXPLAIN ANALYZE |
| Migrations reversíveis | 100% (DOWN migration) | Code review |
| Tabelas sem índice em FK | 0 | pg_indexes query |


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
