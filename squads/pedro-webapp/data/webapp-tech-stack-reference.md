# WebApp Tech Stack Reference

> Comprehensive reference for technology selection across all layers of modern web applications.
> Updated: 2026-04-05 | Maintained by: pedro-webapp squad

---

## 1. Frontend Frameworks

### 1.1 Primary Choices (React Ecosystem)

| Framework | Version | Best For | Pros | Cons | When to Use |
|---|---|---|---|---|---|
| **Next.js** | 15.x | Full-stack React, SSR/SSG, SEO-critical apps | Built-in routing, image optimization, ISR, edge runtime, app router | Server components learning curve, bundle size | Default choice for production webapps and landing pages |
| **Remix** | 2.x | Data-heavy apps, progressive enhancement | Nested routing, optimistic UI, built-in caching, error boundaries | Smaller ecosystem than Next.js, less mature plugins | Apps with complex data mutations and nested layouts |
| **Vite + React SPA** | 5.x | Dashboards, admin panels, internal tools | Fast HMR, simple setup, plugin ecosystem | No SSR out-of-box, SEO limitations | SaaS dashboards behind authentication |

### 1.2 Alternative Frameworks

| Framework | Version | Best For | Notes |
|---|---|---|---|
| **Astro** | 4.x | Content-heavy sites, blogs, marketing pages | Islands architecture, ships zero JS by default | Use for static content pages within webapp |
| **Nuxt (Vue)** | 3.x | Vue-based teams, SSR | Full-featured Vue framework | Only if team has Vue expertise |
| **SvelteKit** | 2.x | Performance-critical apps, small bundles | Compile-time framework, excellent DX | Experimental for production at enterprise scale |

### 1.3 Decision Matrix

```
SEO required + dynamic content → Next.js (App Router)
Behind auth + dashboard → Vite + React SPA
Landing page + static → Astro
Data-heavy forms + workflow → Remix
Team knows Vue → Nuxt
Maximum bundle efficiency → SvelteKit
```

---

## 2. Backend & API Layer

### 2.1 Server-Side Options

| Approach | Technology | Best For | Notes |
|---|---|---|---|
| **Next.js API Routes** | Route Handlers (App Router) | Simple APIs, BFF pattern | Co-located with frontend, shared types |
| **Hono** | 4.x | Edge APIs, microservices | Ultra-lightweight, runs on Cloudflare/Deno/Bun |
| **Express/Fastify** | 5.x / 4.x | Traditional backend, complex APIs | Mature ecosystem, middleware patterns |
| **tRPC** | 10.x | Full-stack TypeScript | End-to-end typesafe, React Query integration |
| **GraphQL + Yoga** | 4.x | Complex data fetching, mobile apps | Schema-first, federation support |

### 2.2 Database ORMs

| ORM | Database | Type Safety | Migration | Notes |
|---|---|---|---|---|
| **Drizzle** | PostgreSQL, MySQL, SQLite | Excellent | Built-in CLI | Modern, lightweight, SQL-like API |
| **Prisma** | PostgreSQL, MySQL, SQLite, MongoDB | Excellent | Migration system | Full-featured, larger bundle |
| **Kysely** | PostgreSQL, MySQL, SQLite | Excellent | Manual migrations | Type-safe query builder, no magic |

### 2.3 Runtime Options

| Runtime | Use Case | Performance | Notes |
|---|---|---|---|
| **Node.js 22 LTS** | Default, traditional servers | Excellent | Largest ecosystem, battle-tested |
| **Bun 1.2** | Fast tooling, simple APIs | Superior | Drop-in Node replacement, native TS |
| **Edge Runtime** | Low-latency APIs, middleware | Fastest cold start | Limited APIs, Vercel/Cloudflare |

---

## 3. Database Layer

### 3.1 Primary Databases

| Database | Type | Best For | Hosting Options |
|---|---|---|---|
| **PostgreSQL 16** | Relational | Default for all structured data | Neon (serverless), Supabase, Railway, Vercel Postgres |
| **MongoDB 7** | Document | Unstructured data, content, catalogs | MongoDB Atlas, Supabase |
| **Redis 7** | Key-Value / Cache | Sessions, caching, rate limiting, queues | Upstash, Redis Cloud |
| **ClickHouse** | OLAP | Analytics, event tracking, dashboards | ClickHouse Cloud |

### 3.2 Specialized Stores

| Store | Type | Use Case |
|---|---|---|
| **Pinecone** | Vector DB | Semantic search, RAG, AI features |
| **Qdrant** | Vector DB | Alternative to Pinecone, self-hostable |
| **Meilisearch** | Full-text search | Site search, product search |
| **Turso (libSQL)** | Embedded SQLite | Edge databases, offline-first |

### 3.3 Database Selection Matrix

```
Structured + relational → PostgreSQL (default)
Documents + flexible schema → MongoDB
Caching + sessions → Redis
Analytics at scale → ClickHouse
Semantic/AI features → Pinecone or Qdrant
Full-text search → Meilisearch
Edge/offline → Turso (libSQL)
```

---

## 4. Authentication & Authorization

### 4.1 Auth Providers

| Provider | Type | Features | Pricing | Notes |
|---|---|---|---|---|
| **Clerk** | Full auth service | Social, MFA, organizations, sessions | Free tier generous | Default for SaaS, excellent DX |
| **Auth.js (NextAuth)** | Open-source library | OAuth, credentials, adapters | Free | More control, self-managed |
| **Supabase Auth** | BaaS auth | Social, email, magic links | Free tier | Good if already using Supabase |
| **WorkOS** | Enterprise auth | SSO, SCIM, directory sync | Paid tiers | B2B SaaS with enterprise clients |

### 4.2 Authorization Patterns

| Pattern | Implementation | Use Case |
|---|---|---|
| **RBAC** | Roles + permissions matrix | Standard SaaS (admin/editor/viewer) |
| **ABAC** | Attribute-based rules | Fine-grained, compliance-heavy apps |
| **RLS (Row-Level Security)** | Database-level policies | Multi-tenant SaaS, data isolation |
| **Organization-based** | Clerk Organizations, workspaces | Team/collaboration products |

---

## 5. Payment & Billing

### 5.1 Payment Processors

| Provider | Features | Fees | Best For |
|---|---|---|---|
| **Stripe** | Subscriptions, one-time, invoicing, tax | 2.9% + $0.30 | Default for SaaS (global) |
| **Mercado Pago** | Local Brazil, PIX, boleto | 2.49% - 4.99% | Brazilian market |
| **Paddle** | Merchant of record, tax handling | 5% + $0.50 | International without tax complexity |

### 5.2 Billing Patterns

| Pattern | Implementation | Notes |
|---|---|---|
| **Subscription (SaaS)** | Stripe Billing + webhooks | Monthly/annual, proration, trials |
| **Usage-based** | Stripe metered billing | Per-seat, per-API-call, per-storage |
| **One-time + upsell** | Stripe checkout + order bumps | Digital products, courses |
| **Free + credit** | Stripe billing + free tier | Freemium with paid upgrades |

---

## 6. Infrastructure & Deployment

### 6.1 Hosting Platforms

| Platform | Type | Best For | Pricing Model |
|---|---|---|---|
| **Vercel** | PaaS (frontend + serverless) | Next.js apps, landing pages | Per-seat + usage |
| **Railway** | PaaS (full-stack) | Backend + database + frontend | Usage-based |
| **Render** | PaaS (full-stack) | Services, static sites, databases | Usage-based |
| **AWS ECS/Fargate** | Container orchestration | Enterprise, custom infrastructure | Pay-per-use |
| **DigitalOcean** | VPS + managed services | Cost-effective servers | Fixed monthly |
| **Hetzner** | Bare metal / VPS | Maximum performance/price | Fixed monthly (EUR) |

### 6.2 CI/CD Options

| Tool | Integration | Notes |
|---|---|---|
| **GitHub Actions** | Native to GitHub | Default choice, YAML workflows |
| **Vercel Deployments** | Automatic on push | Preview deployments, instant |
| **Railway Deploy** | Git-triggered | Automatic rebuilds |
| **Docker + docker-compose** | Self-hosted | Full control, reproducible |

---

## 7. Monitoring & Observability

| Tool | Category | Purpose |
|---|---|---|
| **Sentry** | Error tracking | Frontend + backend error monitoring |
| **Vercel Analytics** | Web vitals | Core Web Vitals, real user metrics |
| **PostHog** | Product analytics | Event tracking, feature flags, session replay |
| **UptimeRobot** | Uptime monitoring | HTTP/ping checks, alerting |
| **Better Stack** | Log management | Centralized logging, incident response |

---

## 8. Performance Benchmarks

| Metric | Target | Critical Threshold |
|---|---|---|
| LCP (Largest Contentful Paint) | < 1.5s | < 2.5s |
| FID (First Input Delay) | < 50ms | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.05 | < 0.1 |
| TTFB (Time to First Byte) | < 200ms | < 800ms |
| Total Bundle Size (JS) | < 150KB gzipped | < 250KB |
| API Response P95 | < 100ms | < 200ms |
| API Response P99 | < 500ms | < 1000ms |
| Page Load (3G) | < 5s | < 10s |

---

## 9. Default Stack (pedro-webapp)

```yaml
frontend:
  framework: Next.js 15 (App Router)
  language: TypeScript (strict)
  styling: Tailwind CSS 4
  state: React hooks + React Query
  forms: React Hook Form + Zod

backend:
  api: Next.js Route Handlers
  orm: Drizzle ORM
  runtime: Node.js 22 LTS

database:
  primary: PostgreSQL 16 (Neon serverless)
  cache: Redis (Upstash)
  analytics: ClickHouse (optional)

auth: Clerk
billing: Stripe
deployment: Vercel
monitoring: Sentry + PostHog
```
