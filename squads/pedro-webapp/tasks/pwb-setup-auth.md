---
task: Setup Auth & RBAC
responsavel: "@pwb-auth"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md (definição de roles e permissões)
  - arch: docs/architecture.md (decisão Clerk vs Supabase Auth)
Saida: |
  - middleware: middleware.ts
  - auth_pages: app/(auth)/
  - lib_auth: lib/auth/
  - migrations: supabase/migrations/xxx_auth_schema.sql
---

# *setup-auth

Configurar autenticação, autorização RBAC e gestão de sessão.

## Fases de Execução

### Fase 1: Decisão de Provider
- [ ] SaaS com orgs/teams → Clerk
- [ ] App simples sem multi-org → Supabase Auth
- Documentar decisão em ADR

### Fase 2: Configuração do Provider
**Clerk:**
- Instalar: `pnpm add @clerk/nextjs`
- Configurar `CLERK_SECRET_KEY` e `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- Criar `middleware.ts` com route matcher
- Criar páginas em `app/(auth)/sign-in/` e `app/(auth)/sign-up/`

**Supabase Auth:**
- Configurar `@supabase/ssr` com middleware
- Implementar `createClient()` server-side e client-side
- Configurar OAuth providers (Google, GitHub) no dashboard

### Fase 3: RBAC
- Criar schema de roles e permissions no banco
- Implementar `hasPermission()` helper
- Implementar `requirePermission()` server-side middleware
- RLS helpers: `is_org_member()` e `is_org_admin()`

### Fase 4: Auth Event Logging
- Criar tabela `auth_events`
- Logar: login, logout, password_change, MFA_enabled, suspicious_login
- RLS: apenas admins veem eventos de outros usuários

### Fase 5: Security Hardening
- Rate limiting em `/api/auth/*` (10 req/min)
- Lockout após 5 tentativas (15 min)
- Session revocation em password change
- Cookies: `httpOnly`, `secure`, `sameSite: 'lax'`

### Fase 6: Testes
- Teste: login → acesso correto → logout → redirect
- Teste: acesso sem token → redirect /sign-in
- Teste: permissão insuficiente → 403
- Teste: rate limit → 429

## Critério de Conclusão
Auth funcional, RBAC implementado e testado, RLS ativo, zero secrets hardcoded.

## KPIs
| Métrica | Alvo |
|---------|------|
| Login success rate | > 95% |
| Auth security issues | 0 |
| Cobertura de testes auth | > 90% |
