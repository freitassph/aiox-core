# Pedro WebApp Squad

**Squad elite para construção de qualquer webapp moderno.**
Design nível Apple/Ferrari. Backend bulletproof. Deploy automático. Qualidade $1B.

---

## Visão Geral

O `pedro-webapp` cobre todos os tipos de webapp:

- **Landing Pages** — Alta conversão, Lighthouse 100, CRO otimizado
- **Dashboards** — Admin panels, analytics, gestão
- **SaaS Completo** — Auth + Billing + Multi-tenancy + Analytics + Email

---

## Time (17 Agentes)

| Agente | Persona | Especialidade |
|--------|---------|---------------|
| `pwb-maestro` | Maestro | Orquestrador — classifica projeto, ativa agentes na sequência correta |
| `pwb-architect` | Aria | Arquitetura, tech stack, ADRs |
| `pwb-pm` | Morgan | PRD, personas JTBD, user stories |
| `pwb-ux-designer` | Nova | Design system oklch, motion spec, HANDOFF |
| `pwb-frontend` | Pixel | Next.js 15, Server Components, Lighthouse >= 95 |
| `pwb-landing` | Convert | Landing pages de alta conversão, CRO, animações |
| `pwb-seo` | Rank | SEO técnico, Core Web Vitals, OG images via Satori |
| `pwb-backend` | Forge | Hono.js, Clean Architecture, RBAC, multi-tenancy |
| `pwb-data-engineer` | Atlas | PostgreSQL, RLS, Drizzle ORM, schema SaaS |
| `pwb-auth` | Shield | Clerk/Supabase Auth, RBAC, MFA, session security |
| `pwb-billing` | Revenue | Stripe subscriptions, webhooks, feature gating |
| `pwb-email` | Inbox | Resend + React Email, BullMQ, notificações in-app |
| `pwb-analytics` | Lens | PostHog, event taxonomy, feature flags, Sentry |
| `pwb-devops` | Deploy | VPS/Vercel, Docker, CI/CD, monitoramento |
| `pwb-auditor` | Sentinel | Segurança, performance, CRO — auditoria constante |
| `pwb-qa` | Verify | Vitest, Playwright E2E, k6 load testing |
| `pwb-doc-writer` | Scribe | Architecture, API reference, runbook, client guide |

---

## Tasks (13 Tasks)

| Task | Agente | Entrega |
|------|--------|---------|
| `pwb-orchestrate-project` | Maestro | PROJECT.md, blueprint |
| `pwb-gather-requirements` | PM | PRD.md, personas, stories |
| `pwb-design-system` | UX Designer | design-tokens.css, HANDOFF.md |
| `pwb-build-landing` | Landing | Landing page completa |
| `pwb-build-frontend` | Frontend | apps/web/ completo |
| `pwb-build-backend` | Backend | apps/api/ completo |
| `pwb-setup-database` | Data Engineer | migrations, Drizzle schema |
| `pwb-setup-auth` | Auth | middleware, RBAC, pages |
| `pwb-setup-billing` | Billing | Stripe completo, feature gating |
| `pwb-setup-email` | Email | React Email, BullMQ, notificações |
| `pwb-setup-analytics` | Analytics | PostHog, eventos, Sentry |
| `pwb-deploy-vps` | DevOps | VPS/Vercel, CI/CD, monitoring |
| `pwb-audit-system` | Auditor | Audit report completo |

---

## Workflows

### 1. `full-webapp-build` — Do brief ao deploy
Workflow principal. Recebe brief e entrega webapp completo.

```
Brief → Maestro → PM → Architect + UX (paralelo)
→ Data Engineer → Backend → Auth → Billing + Email + Analytics (paralelo)
→ Frontend → Landing → SEO
→ Auditor → QA → DevOps → Doc Writer → DELIVERY.md
```

**Tempo estimado:**
- LANDING: 2-5 dias
- DASHBOARD: 1-2 semanas
- SAAS completo: 3-6 semanas

### 2. `landing-build` — Landing page em 48h
Para criar apenas a landing page de conversão.

### 3. `saas-build` — Adicionar SaaS a projeto existente
Para quando frontend/backend já existe e precisa de auth + billing + analytics.

### 4. `audit-cycle` — Auditoria contínua semanal

---

## Quick Start

```
@pwb-maestro
*orchestrate-project --brief "Preciso de uma landing page para meu SaaS de gestão de clínicas. A página deve comunicar os benefícios, ter seção de pricing (3 planos) e capturar leads."
```

O Maestro vai:
1. Classificar o tipo: LANDING
2. Ativar: PM → UX → Landing + SEO + Analytics → DevOps
3. Gerenciar gates de qualidade
4. Entregar DELIVERY.md com URL e métricas

### Comandos Disponíveis

```bash
# Projeto completo
*orchestrate-project --brief "..."

# Fases individuais
*gather-requirements
*design-system
*build-landing
*build-frontend
*build-backend
*setup-database
*setup-auth
*setup-billing
*setup-email
*setup-analytics
*deploy-vps
*audit-system
```

---

## Tech Stack Default

- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion
- **Backend:** Hono.js, TypeScript, Zod, Drizzle ORM, BullMQ
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **Cache:** Redis (Upstash)
- **Auth:** Clerk (SaaS) ou Supabase Auth (apps simples)
- **Billing:** Stripe (subscriptions, webhooks, portal)
- **Email:** Resend + React Email
- **Analytics:** PostHog + Sentry + Vercel Analytics
- **SEO:** Next.js Metadata API + @vercel/og (Satori)
- **Deploy:** Vercel (frontend) + VPS Hetzner (backend stateful)
- **CI/CD:** GitHub Actions

---

## Padrões de Qualidade

| Padrão | Meta |
|--------|------|
| TypeScript strict (zero `any`) | 100% |
| Test coverage | > 80% |
| Lighthouse Performance | >= 95 |
| Lighthouse SEO | 100 |
| Security issues críticos | 0 |
| RLS em todas as tabelas | 100% |
| API response p95 | < 200ms |
| LCP | < 2.5s |
| Uptime em produção | > 99.9% |

---

## Diferença vs pedro-sistema-agente

| Capacidade | pedro-sistema-agente | pedro-webapp |
|------------|---------------------|-------------|
| Landing pages | ❌ | ✅ Convert + SEO |
| SaaS billing | ❌ | ✅ Stripe completo |
| Auth/RBAC | ❌ | ✅ Clerk/Supabase Auth |
| Email transacional | ❌ | ✅ React Email + Resend |
| Analytics/A-B | ❌ | ✅ PostHog + feature flags |
| RAG/embeddings | ✅ | ❌ |
| WhatsApp API | ✅ | ❌ |
| Google Calendar | ✅ | ❌ |
| AI agents | ✅ | ❌ |

---

*Pedro WebApp Squad — Frontend incrível, backend sólido, SaaS completo.*
*CLI First | Quality $1B | Lighthouse 100*
