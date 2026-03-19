# Tech Stack — Pedro Sistema Agente Squad

## Frontend

- **Framework:** Next.js 15+ (App Router, RSC-first)
- **Language:** TypeScript 5+ (strict mode, zero `any`)
- **Styling:** Tailwind CSS 4 + CSS Variables (oklch color space)
- **Components:** shadcn/ui (customizado, não vanilla)
- **Animations:** Framer Motion 11+
- **State:** Zustand 5 (client state) + React Query 5 (server state)
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React (stroke, never fill)
- **Fonts:** Geist Sans + Geist Mono (next/font)
- **Images:** next/image (WebP, AVIF auto)

## Backend

- **Runtime:** Node.js 20+ (LTS)
- **Framework:** Hono.js (edge-ready, ultra-fast) ou Fastify 5
- **Language:** TypeScript 5+ (strict)
- **Validation:** Zod (todas as boundaries — request/response/env)
- **Auth:** Supabase Auth (JWT) + middleware
- **Cache:** Redis (Upstash) — rate limiting, sessões, cache de queries
- **Queue:** BullMQ (jobs assíncronos, retries automáticos)
- **Logging:** Pino (structured, JSON, trace IDs)
- **Monitoring:** Sentry (erros) + Prometheus/Grafana (métricas)
- **Docs:** OpenAPI 3.1 (auto-gerado, sempre atualizado)

## Database

- **Principal:** Supabase (PostgreSQL 15+)
- **Vector Store:** pgvector (Supabase built-in) para RAG
- **ORM:** Drizzle ORM (type-safe, SQL-first, sem N+1)
- **Migrations:** Supabase CLI (`supabase db push`)
- **RLS:** Row Level Security obrigatório em TODA tabela
- **Backups:** Supabase PITR (Point-in-Time Recovery)

## AI / LLM

- **Provider primário:** OpenAI (GPT-4o-mini para RAG, GPT-4o para raciocínio)
- **Provider alternativo:** Anthropic Claude (Haiku para RAG, Sonnet para agentes)
- **Embeddings:** OpenAI text-embedding-3-small (1536 dims)
- **RAG Framework:** LangChain.js ou custom pipeline (Supabase + pgvector)
- **SDK:** Vercel AI SDK 6+ (streaming, tool calling)
- **Agente Framework:** Custom (para máximo controle) + Vercel AI SDK Agent

## Integrações

- **WhatsApp:** Evolution API (self-hosted) ou Z-API (cloud)
- **Google:** Google Calendar API v3, Gmail API
- **Pagamentos:** Stripe
- **Email:** Resend
- **Storage:** Supabase Storage (S3-compatible)
- **SMS:** Twilio

## Deploy / Infra

- **Frontend:** Vercel (preferred) ou VPS + Nginx
- **Backend:** VPS (Hetzner CX21 ou DigitalOcean) + Docker Compose
- **Container:** Docker + Docker Compose (dev e prod)
- **Proxy:** Nginx (SSL termination, rate limiting)
- **SSL:** Let's Encrypt (certbot auto-renovação)
- **CI/CD:** GitHub Actions (lint → test → build → deploy)
- **Monitoring:** Uptime Kuma (self-hosted)
- **Secrets:** `.env` produção em servidor + GitHub Secrets para CI/CD

## Dev Tools

- **Package Manager:** pnpm (workspaces)
- **Linting:** ESLint 9 + @typescript-eslint
- **Formatting:** Prettier
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Git Hooks:** Husky + lint-staged
- **Commits:** Conventional Commits + commitlint
