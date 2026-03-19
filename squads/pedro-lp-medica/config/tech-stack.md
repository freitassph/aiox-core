# Tech Stack — Medical Landing Squad (2026)

## Framework & Runtime
- **Next.js 15+** (App Router, Server Components por padrão)
- **Node.js 20+** (LTS)
- **TypeScript 5+** (strict mode obrigatório)
- **React 19+** (Server + Client components)

## Styling
- **Tailwind CSS v4** (CSS-first config, OKLCH nativo, container queries)
- **CSS Custom Properties** (design tokens — único source of truth)
- **PostCSS** (com plugins: autoprefixer, cssnano)

## Animações & Motion
- **Framer Motion 12** (layout animations, scroll-driven)
- **CSS nativo** (transitions, animations para casos simples)
- **GSAP** (apenas quando scroll-timeline muito complexo)

## Formulários & Validação
- **React Hook Form 8** (performance-first, sem re-renders)
- **Zod** (schema validation, client + server)
- **Server Actions** (Next.js — mutações sem API route)

## Imagens
- **next/image** (AVIF + WebP automático, lazy, blur placeholder)
- **Cloudinary ou Vercel Blob** (storage de imagens do cliente)

## Tipografia (Variable Fonts)
- **next/font/google** — zero FOUT, self-hosted via CDN Vercel
  - Fraunces (display/hero)
  - Plus Jakarta Sans (headings)
  - Inter (body)
  - JetBrains Mono (CRM badges)
  - DM Serif Display (quotes/depoimentos)

## Analytics & Tracking
- **Google Analytics 4** (consent-gated via CMP própria)
- **Vercel Analytics** (privacy-first, sem cookie)
- **Meta Pixel** (quando solicitado — consent-gated)
- **Hotjar** (heatmaps — consent-gated, opcional)

## SEO
- **next/head metadata** (App Router metadata API)
- **Schema.org** (JSON-LD para MedicalBusiness/Physician)
- **next-sitemap** (sitemap.xml automático)
- **robots.txt** (configuração manual)

## Integrações de Agendamento (por projeto)
- **Doctoralia API** (embed ou deep link)
- **Calendly** (widget embed para clínicas menores)
- **WhatsApp Business** (link + Evolution API para volume)
- **Custom API** (Next.js Route Handlers + Prisma + PostgreSQL)

## Email Transacional
- **Resend** (LGPD-friendly, DX excelente, 3000 emails/mês free)
- **React Email** (templates de email em JSX)

## Segurança
- **next-safe-action** (server actions type-safe)
- **Security headers** (next.config.ts)
- **reCAPTCHA v3** (invisible, formulários)
- **Rate limiting** (Upstash Redis ou middleware Vercel)

## Testes
- **Playwright** (e2e, cross-browser, acessibilidade com axe-playwright)
- **Testing Library** (componentes React)
- **Jest** (unit tests utilitários)
- **Lighthouse CI** (performance em CI/CD)

## Monitoramento
- **Sentry** (error tracking — alertas imediatos)
- **BetterStack / Uptime Robot** (uptime monitoring)
- **Vercel Analytics** (performance + Core Web Vitals)

## DevOps & Deploy
- **Vercel** (hosting, CDN global, preview deploys)
- **GitHub Actions** (CI/CD pipeline)
- **pnpm** (package manager — por padrão do projeto)
- **ESLint** (Flat config + Next.js + Tailwind rules)
- **Prettier** (formatação — integrado ao ESLint)

## NOT INCLUDED (landing pages médicas não precisam de):
- ~~Redis~~ (não necessário para landing page simples)
- ~~Bull/Celery~~ (não necessário)
- ~~FastAPI/Python~~ (Next.js Route Handlers suficiente)
- ~~PostgreSQL~~ (apenas se houver sistema de agendamento próprio)
- ~~Docker~~ (Vercel gerencia o ambiente)

## Requisitos Mínimos de Qualidade
- TypeScript `strict: true`
- ESLint: zero erros, zero warnings
- Cobertura de testes: ≥ 70% em componentes críticos
- Lighthouse Mobile: ≥ 90 em todas as métricas
- axe-core: zero erros críticos de acessibilidade
