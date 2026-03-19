# Source Tree — Pedro WebApp Squad

## Estrutura Padrão

```
{project-name}/
├── apps/
│   ├── web/                        # Next.js 15 App
│   │   ├── app/
│   │   │   ├── (marketing)/        # Landing, pricing, blog (public)
│   │   │   │   ├── page.tsx        # Home / Landing
│   │   │   │   ├── pricing/
│   │   │   │   ├── about/
│   │   │   │   └── blog/
│   │   │   ├── (auth)/             # Auth flows
│   │   │   │   ├── sign-in/
│   │   │   │   ├── sign-up/
│   │   │   │   └── reset-password/
│   │   │   ├── (app)/              # Dashboard (authenticated)
│   │   │   │   ├── layout.tsx      # Auth guard + sidebar
│   │   │   │   ├── dashboard/
│   │   │   │   ├── settings/
│   │   │   │   │   ├── profile/
│   │   │   │   │   ├── billing/
│   │   │   │   │   └── team/
│   │   │   │   └── [feature]/      # Feature-specific pages
│   │   │   ├── api/                # Route Handlers
│   │   │   │   ├── auth/
│   │   │   │   ├── billing/
│   │   │   │   │   └── webhook/    # Stripe webhook
│   │   │   │   └── health/
│   │   │   ├── layout.tsx          # Root layout (fonts, providers)
│   │   │   ├── error.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── sitemap.ts          # Dynamic sitemap
│   │   ├── components/
│   │   │   ├── ui/                 # shadcn/ui (auto-generated)
│   │   │   ├── marketing/          # Landing page components
│   │   │   │   ├── hero.tsx
│   │   │   │   ├── features.tsx
│   │   │   │   ├── pricing.tsx
│   │   │   │   ├── testimonials.tsx
│   │   │   │   ├── cta.tsx
│   │   │   │   └── footer.tsx
│   │   │   ├── dashboard/          # App dashboard components
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── header.tsx
│   │   │   │   └── stats-card.tsx
│   │   │   ├── billing/            # Billing UI components
│   │   │   ├── auth/               # Auth UI components
│   │   │   └── shared/             # Shared across marketing + app
│   │   ├── hooks/
│   │   │   ├── use-subscription.ts
│   │   │   ├── use-user.ts
│   │   │   └── use-analytics.ts
│   │   ├── lib/
│   │   │   ├── utils.ts            # cn(), formatters, helpers
│   │   │   ├── constants.ts
│   │   │   └── validations.ts      # Shared Zod schemas
│   │   ├── styles/
│   │   │   ├── globals.css         # Tailwind + CSS variables
│   │   │   └── design-tokens.css   # oklch tokens
│   │   ├── public/
│   │   │   └── og-image.png
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   │
│   └── api/                        # Hono.js Backend (se separado)
│       ├── src/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── repositories/
│       │   ├── lib/
│       │   │   ├── errors.ts
│       │   │   ├── logger.ts
│       │   │   └── config.ts
│       │   └── index.ts
│       └── tsconfig.json
│
├── packages/
│   ├── database/                   # Drizzle ORM
│   │   ├── schema/
│   │   │   ├── users.ts
│   │   │   ├── organizations.ts
│   │   │   ├── subscriptions.ts
│   │   │   └── index.ts
│   │   ├── migrations/
│   │   └── index.ts
│   ├── emails/                     # React Email templates
│   │   ├── templates/
│   │   │   ├── welcome.tsx
│   │   │   ├── subscription-confirm.tsx
│   │   │   ├── password-reset.tsx
│   │   │   └── trial-ending.tsx
│   │   └── index.ts
│   └── types/                      # Shared TypeScript types
│       └── index.ts
│
├── supabase/
│   ├── migrations/
│   │   ├── 001_initial.sql
│   │   ├── 002_auth_schema.sql
│   │   ├── 003_billing_schema.sql
│   │   └── 004_analytics_schema.sql
│   └── seed.ts
│
├── infrastructure/
│   ├── docker-compose.yml          # Development
│   ├── docker-compose.prod.yml     # Production VPS
│   ├── nginx/
│   │   └── nginx.conf
│   └── scripts/
│       ├── deploy.sh
│       └── backup.sh
│
├── .github/
│   └── workflows/
│       ├── ci.yml                  # PR checks
│       └── deploy.yml              # Auto deploy on merge
│
├── docs/
│   ├── PROJECT.md
│   ├── PRD.md
│   ├── architecture.md
│   ├── api-reference.md
│   ├── runbook.md
│   └── DELIVERY.md
│
├── .env.example
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

## Variantes por Tipo de Projeto

### Landing Page Simples
```
apps/web/app/(marketing)/  → apenas
Sem (app)/, sem api/, sem packages/database/
```

### Dashboard / Admin Panel
```
apps/web/app/(app)/        → core
Sem (marketing)/
Sem packages/emails/
```

### SaaS Completo
```
Estrutura completa acima
+ packages/emails/
+ Stripe billing pages
+ Team/Organization management
```
