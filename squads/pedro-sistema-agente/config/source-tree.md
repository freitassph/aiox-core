# Source Tree — Pedro Sistema Agente Squad

## Estrutura de Projeto Gerada pelo Squad

```
{project-name}/
├── apps/
│   ├── web/                          # Next.js frontend (App Router)
│   │   ├── app/
│   │   │   ├── (auth)/               # Auth routes (sign-in, sign-up)
│   │   │   ├── (dashboard)/          # Dashboard routes (protegidas)
│   │   │   ├── api/                  # Route Handlers (frontend APIs)
│   │   │   ├── globals.css
│   │   │   └── layout.tsx
│   │   ├── components/
│   │   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── layout/               # Header, Sidebar, Footer
│   │   │   └── features/             # Feature-specific components
│   │   ├── lib/
│   │   │   ├── supabase/             # Supabase client (server + browser)
│   │   │   ├── utils.ts              # cn(), formatters
│   │   │   └── validations/          # Zod schemas (frontend)
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── stores/                   # Zustand stores
│   │   └── styles/                   # Global styles, design tokens
│   │
│   └── api/                          # Hono/Fastify backend
│       ├── src/
│       │   ├── routes/               # API route handlers
│       │   │   ├── agents/           # Agent management routes
│       │   │   ├── auth/             # Auth routes
│       │   │   ├── webhooks/         # WhatsApp, integrations webhooks
│       │   │   └── health/           # Health check routes
│       │   ├── services/             # Business logic layer
│       │   │   ├── agent-service.ts
│       │   │   ├── rag-service.ts
│       │   │   ├── whatsapp-service.ts
│       │   │   └── calendar-service.ts
│       │   ├── repositories/         # Data access layer
│       │   │   ├── agent-repository.ts
│       │   │   └── appointment-repository.ts
│       │   ├── middleware/           # Auth, rate-limit, trace-id
│       │   ├── integrations/         # External API clients
│       │   │   ├── evolution-api.ts  # WhatsApp
│       │   │   ├── google-calendar.ts
│       │   │   └── openai.ts
│       │   ├── jobs/                 # BullMQ background jobs
│       │   ├── lib/
│       │   │   ├── env.ts            # Zod-validated env vars
│       │   │   ├── logger.ts         # Pino logger
│       │   │   ├── redis.ts          # Redis client
│       │   │   └── errors.ts         # AppError class
│       │   └── index.ts              # App entry point
│       └── Dockerfile
│
├── packages/
│   ├── database/                     # Shared database types + Drizzle schema
│   │   ├── schema/
│   │   │   ├── agents.ts
│   │   │   ├── appointments.ts
│   │   │   ├── clients.ts
│   │   │   └── embeddings.ts
│   │   └── migrations/
│   ├── types/                        # Shared TypeScript types
│   └── validators/                   # Shared Zod schemas
│
├── supabase/
│   ├── migrations/                   # SQL migrations (versionadas)
│   ├── seed.sql                      # Dados iniciais
│   └── config.toml                   # Supabase config
│
├── infrastructure/
│   ├── docker-compose.yml            # Dev environment
│   ├── docker-compose.prod.yml       # Produção
│   ├── nginx/
│   │   └── nginx.conf                # Nginx config (SSL, proxy)
│   └── scripts/
│       ├── deploy.sh                 # Deploy script
│       └── backup.sh                 # Backup script
│
├── .github/
│   └── workflows/
│       ├── ci.yml                    # CI: lint + test + build
│       └── deploy.yml                # CD: deploy on main push
│
├── docs/
│   ├── architecture.md               # Diagrama de arquitetura
│   ├── api.md                        # Documentação da API
│   ├── onboarding.md                 # Guia de onboarding do cliente
│   └── runbook.md                    # Runbook operacional
│
├── turbo.json                        # Turborepo config
├── pnpm-workspace.yaml               # pnpm workspaces
├── package.json
├── .env.example
└── README.md
```

## Squad Source Tree

```
squads/pedro-sistema-agente/
├── agents/                     # 14 agentes especializados
├── tasks/                      # 10 tasks detalhadas
├── workflows/                  # 3 workflows orquestrados
├── config/                     # Tech stack, padrões, source tree
├── templates/                  # Templates de documentos
├── checklists/                 # Checklists de qualidade
├── squad.yaml                  # Manifest
├── manifest.yaml               # Metadata
└── README.md                   # Documentação
```
