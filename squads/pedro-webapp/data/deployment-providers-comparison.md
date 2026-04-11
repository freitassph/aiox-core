# Deployment Providers Comparison

> Objective comparison of hosting and deployment platforms for webapps.
> Updated: 2026-04-05 | Maintained by: pedro-webapp squad

---

## 1. Quick Decision Matrix

```
Is it a Next.js app?
  ├── Yes → Vercel (default)
  │   └── Budget concern → Railway or Render

  └── No → What's the stack?
      ├── Static / Astro → Vercel, Netlify, Cloudflare Pages
      ├── React SPA → Vercel, Netlify, Cloudflare Pages
      ├── Full-stack Node → Railway, Render, Fly.io
      ├── Docker container → Railway, Render, Fly.io, AWS
      ├── Python/Django → Railway, Render, Heroku
      ├── Go → Fly.io, Railway, Render
      └── Enterprise (scale) → AWS, GCP, Azure
```

---

## 2. Platform Comparison Table

### 2.1 Frontend / Full-Stack PaaS

| Feature | Vercel | Netlify | Cloudflare Pages |
|---|---|---|---|
| **Type** | PaaS | PaaS | Edge PaaS |
| **Best For** | Next.js, SSR | Static sites, JAMstack | Edge rendering, performance |
| **Free Tier** | Generous | Generous | Very generous |
| **SSR Support** | Excellent (native) | Good (functions) | Good (Workers) |
| **Edge Functions** | ✅ Yes | ✅ Yes | ✅ Native (Workers) |
| **Preview Deploys** | ✅ Unlimited | ✅ Unlimited | ✅ Unlimited |
| **Custom Domains** | ✅ Unlimited | ✅ Unlimited | ✅ Unlimited |
| **Analytics** | ✅ Built-in | ✅ Built-in | ❌ (needs external) |
| **Image Optimization** | ✅ Automatic | ✅ Plugin | ✅ (via Cloudflare) |
| **Database** | ❌ (integrations) | ❌ (integrations) | ❌ (D1, separate) |
| **Bandwidth (Free)** | 100GB | 100GB | Unlimited |
| **Build Minutes** | 6,000/mo | 300/mo | Unlimited (500 builds/day) |
| **Team Seats (Free)** | Unlimited | Unlimited | Unlimited |
| **Pro Price** | $20/seat/mo | $19/seat/mo | $5/seat/mo |
| **Serverless Functions** | ✅ (Edge + Node) | ✅ | ✅ (Workers) |
| **Cron Jobs** | ✅ | ✅ | ✅ |
| **CI/CD** | Git-triggered | Git-triggered | Git-triggered |

### 2.2 Backend / Full-Stack Platforms

| Feature | Railway | Render | Fly.io | Heroku |
|---|---|---|---|---|
| **Type** | Full-stack PaaS | Full-stack PaaS | Container platform | Full-stack PaaS |
| **Best For** | Full-stack apps | Services + static | Containerized apps | Legacy, simple apps |
| **Free Tier** | $5 credit trial | Free tier (limited) | $5 credit | ❌ No free tier |
| **Database Hosting** | ✅ PostgreSQL, Redis, MySQL | ✅ PostgreSQL, Redis | ✅ Via Fly Postgres | ✅ Add-ons |
| **Docker Support** | ✅ Native | ✅ Native | ✅ Native | ✅ Native |
| **Git Deploy** | ✅ Auto | ✅ Auto | ✅ Via flyctl | ✅ Auto |
| **Scaling** | Vertical + horizontal | Vertical + horizontal | Multi-region | Dyno-based |
| **SSL** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Custom Domains** | ✅ Unlimited | ✅ Unlimited | ✅ Unlimited | ✅ |
| **Deploy Regions** | ~10 | ~10 | ~30 | ~10 |
| **Pricing Model** | Usage-based | Usage-based | Usage-based | Dyno-based |
| **Starting Price** | $0.10/GB RAM/hr | $7/mo (instance) | $1.94/256MB | $5/dyno/mo |
| **Background Jobs** | ✅ Cron + services | ✅ Cron + services | ✅ Machines | ✅ Worker dynos |
| **Monitoring** | Basic | Basic | Basic (logs) | Basic + add-ons |

### 2.3 Infrastructure / IaaS

| Feature | AWS | DigitalOcean | Hetzner | GCP |
|---|---|---|---|---|
| **Type** | IaaS (full cloud) | Simplified IaaS | Bare metal / VPS | IaaS (full cloud) |
| **Best For** | Enterprise, scale | SMB, dev teams | Budget max-power | ML/data, GKE |
| **Managed Services** | 200+ | 20+ | Basic | 100+ |
| **Kubernetes** | ✅ EKS | ✅ DOKS | ❌ | ✅ GKE |
| **Managed DB** | ✅ RDS | ✅ Managed DB | ❌ | ✅ Cloud SQL |
| **CDN** | ✅ CloudFront | ✅ Cloudflare int. | ❌ | ✅ Cloud CDN |
| **Starting VM** | $4/mo (t4g.nano) | $4/mo (Basic) | €4/mo (CX11) | $6/mo (e2-micro) |
| **Complexity** | Very High | Low | Low-Medium | High |
| **Learning Curve** | Months | Hours | Hours | Weeks |

---

## 3. VPS Providers Comparison

### 3.1 Budget VPS (Monthly Pricing)

| Provider | CPU | RAM | SSD | Bandwidth | Price/mo | Location |
|---|---|---|---|---|---|---|
| **Hetzner CX11** | 1 vCPU | 2GB | 20GB | 20TB | €3.29 | EU |
| **Hetzner CPX11** | 2 vCPU | 2GB | 40GB | 20TB | €4.51 | EU |
| **DigitalOcean Basic** | 1 vCPU | 1GB | 25GB | 1TB | $4 | US/EU/SG/IN |
| **Linode Nanode** | 1 vCPU | 1GB | 25GB | 1TB | $5 | Global |
| **Vultr Cloud** | 1 vCPU | 1GB | 25GB | 1TB | $5 | 32 locations |
| **OVH Starter** | 1 vCPU | 2GB | 20GB | Unlimited | €3.50 | EU/US/CA |

### 3.2 When to Use VPS vs PaaS

| Scenario | Recommendation | Why |
|---|---|---|
| MVP / prototype | PaaS (Vercel/Railway) | Zero ops, fast iteration |
| Production SaaS (early) | PaaS | Focus on product, not infra |
| Production SaaS (scale) | Hybrid (frontend PaaS + backend VPS) | Cost optimization |
| Enterprise / compliance | IaaS (AWS/GCP) | Full control, audit |
| Simple static site | PaaS (Vercel/Netlify) | Free, instant, global |
| Docker containers | Railway/Render/Fly.io | Easy deploy, managed |
| Custom infra needs | VPS (Hetzner/DO) | Full root access |
| Maximum performance/$ | Hetzner bare metal | Best price-performance |

---

## 4. Deployment Strategies

### 4.1 Strategy Comparison

| Strategy | Downtime | Complexity | Rollback | Best For |
|---|---|---|---|---|
| **Recreate** | Yes (seconds) | Low | Manual | Non-critical apps |
| **Rolling Update** | Zero | Medium | Automatic | Production webapps |
| **Blue-Green** | Zero | High | Instant | Enterprise, compliance |
| **Canary** | Zero | High | Gradual | Large-scale platforms |
| **Feature Flags** | Zero | Medium | Instant | A/B testing, gradual rollout |

### 4.2 Recommended Strategy by Stage

```yaml
startup_mvp:
  platform: Vercel
  strategy: "Push to main → auto deploy"
  environments:
    - preview (auto from PR)
    - production (auto from main)

startup_production:
  platform: Vercel (frontend) + Railway (backend)
  strategy: "Push to main → auto deploy"
  environments:
    - staging (auto from develop)
    - production (auto from main)

enterprise:
  platform: AWS / GCP
  strategy: "Blue-green + feature flags"
  environments:
    - dev (auto from feature branches)
    - staging (auto from develop)
    - production (manual approval from release)
```

---

## 5. Environment Variables Management

### 5.1 Standard Environment Variables

```yaml
# Required for any webapp
required:
  DATABASE_URL: "postgresql://..."
  REDIS_URL: "redis://..."
  AUTH_SECRET: "random-32-char-string"
  NEXT_PUBLIC_APP_URL: "https://app.example.com"
  STRIPE_SECRET_KEY: "sk_live_..."
  STRIPE_WEBHOOK_SECRET: "whsec_..."
  CLERK_SECRET_KEY: "sk_..."
  NODE_ENV: "production"

# Optional / feature-specific
optional:
  SENTRY_DSN: "https://..."
  POSTHOG_API_KEY: "phc_..."
  RESEND_API_KEY: "re_..."
  OPENAI_API_KEY: "sk-..."
  UPLOADTHING_TOKEN: "ut_..."
```

### 5.2 Environment Strategy

| Environment | Purpose | Variables |
|---|---|---|
| `development` | Local dev | Mock services, debug enabled |
| `staging` | Pre-production | Production-like, test keys |
| `production` | Live users | Real keys, monitoring enabled |

---

## 6. Cost Comparison Example

### 6.1 SaaS App (10k users, moderate traffic)

| Provider | Frontend | Backend | Database | Total/mo |
|---|---|---|---|---|
| **Vercel + Railway** | $20 | $30 | $20 (Neon) | **$70** |
| **Railway (all)** | $15 | $20 | $15 | **$50** |
| **Render (all)** | $19 | $25 | $25 | **$69** |
| **AWS (managed)** | $30 | $40 | $50 | **$120** |
| **Hetzner (self-hosted)** | €5 | €5 | €5 | **€15 (~$17)** |
| **DigitalOcean** | $12 | $12 | $15 | **$39** |

*Note: Cheapest ≠ best. PaaS saves 20+ hours/month in ops overhead.*
