# Web Security Best Practices

> Comprehensive security checklist and patterns for production webapps.
> Updated: 2026-04-05 | Maintained by: pedro-webapp squad

---

## 1. Security Headers

### 1.1 Required HTTP Headers

| Header | Value | Purpose |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Force HTTPS |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` | Prevent clickjacking |
| `X-XSS-Protection` | `0` | Let browser use built-in CSP |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer info |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restrict browser features |
| `Content-Security-Policy` | See 1.2 | Control resource loading |

### 1.2 Content Security Policy (CSP)

```typescript
// Next.js middleware CSP example
const cspHeader = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://img.clerk.com",
  "font-src 'self'",
  "connect-src 'self' https://api.clerk.com https://api.stripe.com",
  "frame-src 'self' https://js.stripe.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ');
```

### 1.3 Next.js Implementation

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '0',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];

export default defineConfig({
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
});
```

---

## 2. Authentication Security

### 2.1 Session Security

| Rule | Implementation |
|---|---|
| **Secure cookies** | `Secure`, `HttpOnly`, `SameSite=Strict` or `Lax` |
| **Session expiry** | Rotate tokens every 24h, absolute expiry 30d |
| **CSRF protection** | Built-in (Next.js), or double-submit cookie pattern |
| **Password requirements** | Min 8 chars, check against breached passwords (haveibeenpwned) |
| **Rate limiting** | Max 5 login attempts per 15 min per IP |
| **MFA** | Require for admin/enterprise accounts |
| **Logout** | Invalidate server-side session, clear cookies |

### 2.2 JWT Best Practices

| Rule | Detail |
|---|---|
| Algorithm | Use `RS256` or `ES256`, never `none` or `HS256` for public keys |
| Expiry | Short-lived (15-60 min), refresh with rotating tokens |
| Payload | Never store sensitive data (passwords, PII) |
| Validation | Always verify signature, issuer, audience, expiry |
| Storage | HTTP-only cookie, NEVER localStorage |

### 2.3 OAuth / Social Login Security

| Rule | Detail |
|---|---|
| State parameter | Always include and verify (CSRF prevention) |
| PKCE | Required for all OAuth flows (even confidential clients) |
| Scope | Request minimum scopes needed |
| Redirect URI | Exact match, never wildcard |
| Token exchange | Server-side only, never expose client secret |

---

## 3. Input Validation & Sanitization

### 3.1 Zod Validation Pattern

```typescript
import { z } from 'zod';

// API endpoint validation
const createUserSchema = z.object({
  body: z.object({
    email: z.string().email().max(255).toLowerCase().trim(),
    name: z.string().min(2).max(100).trim(),
    password: z.string().min(8).max(128),
    role: z.enum(['user', 'admin', 'viewer']).default('user'),
  }),
});

// In API route
export async function POST(req: Request) {
  const body = await req.json();
  const result = createUserSchema.safeParse({ body });
  
  if (!result.success) {
    return Response.json(
      { error: 'Invalid input', details: result.error.flatten() },
      { status: 400 }
    );
  }

  const { email, name, password, role } = result.data.body;
  // ... proceed with validated data
}
```

### 3.2 XSS Prevention Rules

| Context | Rule | Example |
|---|---|---|
| **HTML content** | Escape `<`, `>`, `&`, `"`, `'` | React does this automatically |
| **HTML attributes** | Escape `"`, `'`, `<`, `>` | Use `sanitize-html` for rich text |
| **URLs** | Validate protocol (no `javascript:`) | `URL.canParse()` or schema validation |
| **Inline CSS** | Escape `<`, `>`, `"`, `'` | Avoid inline styles with user data |
| **Templates** | Auto-escape | Never use `v-html` or `dangerouslySetInnerHTML` with user input |

### 3.3 SQL Injection Prevention

| Rule | Implementation |
|---|---|
| **Parameterized queries** | Always use query parameters, never string interpolation |
| **ORM** | Drizzle, Prisma, Kysely handle parameterization |
| **Raw queries** | If needed, use parameterized raw queries |
| **Never concatenate** | ❌ `` `SELECT * FROM users WHERE email = '${email}'` `` |
| **Always parameterize** | ✅ `` `SELECT * FROM users WHERE email = $1` `` |

---

## 4. API Security

### 4.1 Rate Limiting

```typescript
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requests per 10 seconds
  analytics: true,
});

// In API route middleware
export async function rateLimit(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);
  
  if (!success) {
    return Response.json(
      { error: 'Too many requests. Please try again later.' },
      { 
        status: 429,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        },
      }
    );
  }
}
```

### 4.2 Rate Limit Thresholds

| Endpoint Type | Limit | Window |
|---|---|---|
| Authentication (login) | 5 attempts | 15 minutes |
| Password reset | 3 requests | 1 hour |
| Public API (read) | 100 requests | 1 minute |
| Write operations | 30 requests | 1 minute |
| File upload | 10 uploads | 1 hour |
| Email sending | 5 emails | 1 hour |

### 4.3 API Security Checklist

- [ ] Authentication required for all protected endpoints
- [ ] Authorization checked (user can only access own resources)
- [ ] Input validated with Zod (or equivalent)
- [ ] Rate limiting applied
- [ ] CORS configured (not `*` in production)
- [ ] Error messages don't leak internal details
- [ ] Request size limited (`bodySizeLimit`)
- [ ] File uploads validated (type, size, content)
- [ ] Pagination enforced (max 100 items/page)
- [ ] Sensitive endpoints have additional checks (MFA, re-verification)

---

## 5. Data Protection

### 5.1 Encryption at Rest

| Data Type | Method | Notes |
|---|---|---|
| Database | Provider handles (Neon, Supabase, RDS) | Encrypt volume |
| Files / uploads | S3 SSE, Cloudflare R2 SSE | Server-side encryption |
| Secrets | Environment variables, secret manager | Never in code or .env in repo |
| Backups | Encrypted | Same encryption as primary |

### 5.2 Sensitive Data Handling

| Rule | Implementation |
|---|---|
| **PII in logs** | Never log email, name, IP, user ID |
| **API keys** | Environment variables only, never client-side |
| **Payment data** | Never store card numbers (use Stripe tokens) |
| **Passwords** | bcrypt or argon2 only, never plaintext |
| **Data retention** | Delete after purpose fulfilled (LGPD/GDPR) |
| **Anonymization** | Hash or remove PII in analytics |

### 5.3 Database Security

```sql
-- PostgreSQL: Row-Level Security example
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Users can only see their own documents
CREATE POLICY user_documents ON documents
  USING (user_id = auth.uid());

-- Admins can see everything
CREATE POLICY admin_all ON documents
  USING (auth.role() = 'admin');

-- Only owner can update
CREATE POLICY owner_update ON documents
  FOR UPDATE USING (user_id = auth.uid());
```

---

## 6. Dependency Security

### 6.1 Supply Chain Protection

| Practice | Tool | Frequency |
|---|---|---|
| **Audit dependencies** | `npm audit` | Every install |
| **Lock file integrity** | Commit `package-lock.json` | Every change |
| **Automated updates** | Dependabot, Renovate | Weekly |
| **Vulnerability scanning** | Snyk, Socket | CI pipeline |
| **Pin versions** | Exact versions in `package.json` | Always |
| **Review new deps** | Manual review before adding | Every new dependency |

### 6.2 CI Security Pipeline

```yaml
# .github/workflows/security.yml
name: Security Scan
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Audit dependencies
        run: npm audit --audit-level=moderate
      
      - name: Run SAST (CodeQL)
        uses: github/codeql-action/init@v3
        with:
          languages: javascript
      
      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v3
      
      - name: Check for known vulnerabilities
        run: npx audit-ci --moderate
```

---

## 7. OWASP Top 10 (2025) — Webapp Coverage

| # | Risk | Mitigation in pedro-webapp |
|---|---|---|
| 1 | Broken Access Control | RLS + middleware auth checks + RBAC |
| 2 | Cryptographic Failures | HTTPS everywhere, bcrypt passwords, encrypted DB |
| 3 | Injection | Parameterized queries, Zod validation, CSP |
| 4 | Insecure Design | Threat modeling, secure defaults, defense in depth |
| 5 | Security Misconfiguration | Security headers, no debug in prod, minimal perms |
| 6 | Vulnerable Components | Dependabot, `npm audit`, pinned versions |
| 7 | Auth Failures | Clerk/Auth.js, MFA, secure sessions, rate limiting |
| 8 | Data Integrity | Checksums, signed URLs, immutable backups |
| 9 | Logging Failures | Structured logging, no PII, alerting on anomalies |
| 10 | SSRF | Allow-listed URLs, no user-controlled URLs in requests |

---

## 8. Incident Response Checklist

```markdown
## Security Incident Response

### Immediate (0-1 hour)
- [ ] Identify affected systems and scope
- [ ] Revoke compromised keys/tokens
- [ ] Enable additional rate limiting
- [ ] Notify team lead

### Short-term (1-24 hours)
- [ ] Deploy fix for vulnerability
- [ ] Review logs for data exposure extent
- [ ] Determine if user notification required (LGPD 72h)
- [ ] Document timeline

### Post-incident (1-7 days)
- [ ] Write post-mortem
- [ ] Update security tests to prevent recurrence
- [ ] Review and update security policies
- [ ] Schedule security review for all endpoints
```

---

## 9. Security Testing Checklist (Pre-Launch)

- [ ] **Penetration test** — Manual or automated scan of all endpoints
- [ ] **Headers audit** — All security headers present and correct
- [ ] **Auth bypass test** — Try accessing protected routes without auth
- [ ] **IDOR test** — Try accessing other users' resources by changing IDs
- [ ] **SQL injection test** — Try injection on all input fields
- [ ] **XSS test** — Try script injection in all user-facing fields
- [ ] **CSRF test** — Verify CSRF tokens on all state-changing requests
- [ ] **Rate limit test** — Verify rate limiting works on auth and public APIs
- [ ] **Dependency audit** — `npm audit` with zero moderate+ issues
- [ ] **Secrets scan** — No API keys or secrets in code (use `git-secrets`)
- [ ] **CORS test** — Verify CORS doesn't allow `*` or unauthorized origins
- [ ] **Error handling** — Errors don't leak stack traces or internal details
