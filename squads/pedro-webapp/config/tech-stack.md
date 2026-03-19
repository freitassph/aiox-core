# Tech Stack — Pedro WebApp Squad

## Frontend
- **Framework:** Next.js 15 (App Router, Server Components, Turbopack)
- **Language:** TypeScript strict
- **Styling:** Tailwind CSS 4 + CSS Variables (oklch)
- **Components:** shadcn/ui (Radix primitives)
- **Animations:** Framer Motion (spring physics, layout animations)
- **Forms:** React Hook Form + Zod
- **State:** Zustand (client) + React Query (server state)
- **Icons:** Lucide React (stroke, never fill)
- **Fonts:** Geist Sans + Geist Mono (next/font)
- **Images:** next/image (WebP, lazy, blur placeholder)

## Backend
- **Runtime:** Node.js 20 LTS
- **Framework:** Hono.js (edge-compatible, lightweight)
- **Validation:** Zod (schemas shared frontend ↔ backend)
- **ORM:** Drizzle ORM (TypeScript-first, SQL-native)
- **Queue:** BullMQ + Redis (background jobs: emails, webhooks)
- **Logging:** Pino (structured JSON, requestId, userId)
- **API Docs:** OpenAPI 3.1 (auto-generated via Zod)

## Database
- **Primary:** Supabase (PostgreSQL 16)
- **Auth:** Supabase Auth (OAuth, Magic Link, Phone)
- **Storage:** Supabase Storage (S3-compatible, CDN)
- **Cache:** Redis (Upstash — serverless, pay-per-request)
- **Migrations:** Drizzle Kit + SQL versionadas

## Auth & Identity
- **Primary:** Clerk (SSO, RBAC, orgs, MFA — preferred for SaaS)
- **Alternative:** Supabase Auth + NextAuth.js (simpler apps)
- **JWT:** short TTL (15min) + refresh rotation (30 dias)
- **Roles:** platform_admin → org_admin → member → viewer

## Billing & Payments
- **Primary:** Stripe (subscriptions, one-time, usage-based)
- **Webhooks:** Svix (reliable webhook delivery)
- **Metering:** Stripe Meters API (usage-based billing)
- **Tax:** Stripe Tax (automático)

## Email
- **Provider:** Resend (React Email templates, deliverability-first)
- **Templates:** React Email (TSX → HTML, preview no browser)
- **Tracking:** opens, clicks, bounces via Resend webhooks

## Analytics & Monitoring
- **Product Analytics:** PostHog (events, funnels, A/B testing, feature flags)
- **Error Tracking:** Sentry (frontend + backend, performance traces)
- **Uptime:** Uptime Kuma (self-hosted, alertas Telegram/Slack)
- **Web Analytics:** Vercel Analytics ou Plausible (privacy-first)
- **Performance:** Vercel Speed Insights (Core Web Vitals reais)

## SEO & Marketing
- **Sitemap:** next-sitemap (automático, incrementally built)
- **Structured Data:** schema.org JSON-LD (via next-seo ou custom)
- **OG Images:** @vercel/og (Satori, Edge-rendered)
- **Metadata:** Next.js Metadata API (generateMetadata)

## Deploy
- **Hosting:** Vercel (frontend + edge functions) OU VPS Hetzner/DigitalOcean
- **CI/CD:** GitHub Actions (lint → typecheck → test → build → deploy)
- **Docker:** Docker Compose (VPS deploy, dev environment)
- **SSL:** Let's Encrypt automático (Certbot ou Vercel)
- **CDN:** Vercel Edge Network ou Cloudflare

## Dev Experience
- **Monorepo:** pnpm workspaces (apps/web + apps/api + packages/*)
- **Linting:** ESLint + Prettier (biome como alternativa)
- **Testing:** Vitest (unit) + Playwright (E2E) + Storybook (component)
- **Commit:** Commitlint + Husky (conventional commits)
