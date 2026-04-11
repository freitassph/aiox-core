# Deployment Checklist Reference — Pedro Sistema Agente Squad

> Comprehensive deployment checklist for VPS deployments of systems built by this squad. Every deployment must pass all gates before going live.

---

## Pre-Deployment

### Code Quality Gates

- [ ] `npm run lint` passes with zero errors
- [ ] `npm run typecheck` passes with zero errors
- [ ] `npm test` passes with > 80% coverage
- [ ] No console.log() in production code (except intentional structured logging)
- [ ] No `any` types in TypeScript (strict mode enforced)
- [ ] No unused dependencies in package.json
- [ ] All environment variables documented in `.env.example`
- [ ] Database migrations generated and tested (`supabase db push --dry-run`)

### Security Checks

- [ ] No secrets hardcoded in source code
- [ ] `.env` files in `.gitignore`
- [ ] CORS configured with explicit allowed origins (no `*` in production)
- [ ] Rate limiting enabled on all public endpoints
- [ ] Input validation on all API endpoints (Zod schemas)
- [ ] RLS policies active on all database tables
- [ ] JWT secret rotated from default
- [ ] HTTPS enforced (no HTTP fallback)
- [ ] Security headers configured (HSTS, CSP, X-Frame-Options, etc.)
- [ ] Dependencies scanned for known vulnerabilities (`npm audit`)

### Performance Checks

- [ ] Lighthouse score > 90 on all pages (Performance, Accessibility, SEO, Best Practices)
- [ ] First Contentful Paint < 1.5s on 3G
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images optimized (WebP/AVIF, proper sizing, lazy loading)
- [ ] JavaScript bundle < 250KB gzipped (initial load)
- [ ] CSS < 50KB gzipped
- [ ] Database queries indexed (no N+1, verified with EXPLAIN ANALYZE)
- [ ] Redis caching configured for hot paths

---

## Infrastructure Setup

### VPS Configuration

- [ ] OS: Ubuntu 22.04 LTS or newer
- [ ] SSH key authentication (password auth disabled)
- [ ] Firewall configured (ufw or iptables)
  - [ ] Only ports 22 (SSH), 80 (HTTP), 443 (HTTPS) open
  - [ ] Database port (5432) accessible only from application
  - [ ] Redis port (6379) accessible only from localhost
- [ ] Fail2ban installed and configured
- [ ] Automatic security updates enabled (unattended-upgrades)
- [ ] Swap configured (2GB minimum)
- [ ] Timezone set correctly (UTC for servers)
- [ ] NTP synchronized

### Domain & DNS

- [ ] DNS records configured (A record for domain, CNAME for www)
- [ ] SSL certificate provisioned (Let's Encrypt via Certbot)
- [ ] Auto-renewal configured for SSL (`certbot renew --dry-run`)
- [ ] DNS TTL set appropriately (300s for production, 60s for deploys)
- [ ] Email DNS records configured if needed (MX, SPF, DKIM, DMARC)

### Docker / Process Management

- [ ] Docker & Docker Compose installed (if using containers)
- [ ] OR: PM2 installed and configured (if using process manager)
- [ ] Health check endpoint configured (`/api/health`)
- [ ] Auto-restart on crash configured
- [ ] Log rotation configured (max 100MB per file, 7 files retained)

---

## Database

- [ ] Supabase project created and configured
- [ ] All migrations applied (`supabase db push`)
- [ ] RLS policies tested with different user roles
- [ ] Indexes created on all foreign keys and frequently queried columns
- [ ] Database backup configured (automated, daily)
- [ ] Connection pooler configured (PgBouncer if high traffic)
- [ ] pgvector extension enabled (if using RAG)
- [ ] Seed data applied (if applicable)

---

## Environment Variables

All required environment variables documented and set:

```bash
# Application
NODE_ENV=production
PORT=3000
APP_URL=https://example.com
API_URL=https://api.example.com

# Database
DATABASE_URL=postgresql://...
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

# Auth
JWT_SECRET=<random-64-char-string>
SESSION_SECRET=<random-64-char-string>

# Redis
REDIS_URL=redis://localhost:6379

# OpenAI
OPENAI_API_KEY=sk-...
OPENAI_ORGANIZATION=org-...

# WhatsApp
WHATSAPP_PHONE_NUMBER_ID=...
WHATSAPP_TOKEN=...
WHATSAPP_VERIFY_TOKEN=...

# Monitoring
SENTRY_DSN=https://...
LOG_LEVEL=info
```

---

## Monitoring & Observability

- [ ] Sentry configured and test error sent successfully
- [ ] Health check endpoint responding (`curl https://api.example.com/api/health`)
- [ ] Uptime monitoring configured (external service: UptimeRobot, Better Stack, etc.)
- [ ] Error alerting configured (email/Slack on critical errors)
- [ ] Log aggregation configured (structured JSON logs)
- [ ] Performance metrics tracked (APM or custom)
- [ ] Database query monitoring enabled
- [ ] Resource usage alerts configured (CPU, memory, disk)

---

## Post-Deployment Verification

### Smoke Tests

- [ ] Homepage loads without errors
- [ ] Authentication flow works (login, logout, password reset)
- [ ] Core user journey completed end-to-end (happy path)
- [ ] API health check returns 200
- [ ] WebSocket/real-time connections work (if applicable)
- [ ] WhatsApp integration responds to test message
- [ ] AI agent responds to test query
- [ ] File upload works (if applicable)
- [ ] Email notifications sent correctly (if applicable)
- [ ] Mobile responsive check on 3 viewport sizes

### Rollback Plan

- [ ] Previous version preserved and can be restored
- [ ] Database backup taken before deployment
- [ ] Rollback procedure documented and tested
- [ ] Rollback decision criteria defined (e.g., error rate > 5% in 10 min)

---

## Go/No-Go Decision

| Criteria | Status | Notes |
|---|---|---|
| All pre-deployment checks passed | ⬜ | |
| Security audit clean | ⬜ | |
| Performance targets met | ⬜ | |
| Smoke tests passed | ⬜ | |
| Monitoring active | ⬜ | |
| Rollback plan ready | ⬜ | |
| Team available for support | ⬜ | |

**Decision**: ⬜ GO | ⬜ NO-GO
**Authorized by**: ________________
**Timestamp**: ________________

---

*Deployment reference for pedro-sistema-agente squad*
*Last updated: 2026-04-05*
