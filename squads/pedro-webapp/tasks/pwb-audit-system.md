---
task: Audit System
responsavel: "@pwb-auditor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - codebase: todo o código produzido
  - logs: logs de produção (se deploy)
Saida: |
  - audit_report: docs/audit-reports/audit-{date}.md
  - security_checklist: docs/security-checklist.md
---

# *audit-system

Auditoria completa: segurança, qualidade de código, performance, conversão e monitoramento.

## Fases de Execução

### Fase 1: Security Audit
- Rotas protegidas com auth middleware?
- RBAC verificado no service layer?
- RLS em todas as tabelas?
- Inputs validados com Zod em todos os boundaries?
- Secrets hardcoded? (nunca aceitável)
- CORS com origins específicos?
- Rate limiting nas rotas públicas e de auth?
- Stripe webhooks verificados por assinatura?
- Headers de segurança (HSTS, X-Content-Type)?
- Dados sensíveis ausentes nos logs?

**Critério:** Zero issues críticos

### Fase 2: Code Quality Audit
```bash
pnpm typecheck   # deve passar sem erros
pnpm lint        # deve passar sem warnings
pnpm test --run --coverage  # coverage > 80%
pnpm build       # deve passar
```
- Zero `any` em TypeScript?
- Error handling em todas as operações assíncronas?
- Sem imports relativos (`../../../`)?
- Sem `console.log` em produção?

**Critério:** Todos os quality gates passando

### Fase 3: Performance Audit
- Lighthouse Performance >= 95?
- LCP < 2.5s?
- CLS < 0.1?
- INP < 100ms?
- `EXPLAIN ANALYZE` nas queries mais frequentes — sem Seq Scan?
- Bundle chunks > 200KB justificados?
- N+1 queries no código?

**Critério:** Lighthouse >= 95, zero Seq Scans em tabelas grandes

### Fase 4: CRO Audit (se landing page)
- CTA visível sem scroll em mobile?
- Hero comunica resultado em < 5s?
- Social proof imediata?
- FAQ responde objeção principal?
- Eventos PostHog trackando conversões?

**Critério:** Eventos configurados, fluxo de conversão sem fricção

### Fase 5: Billing Audit (se SaaS)
- Webhook com verificação de assinatura?
- Idempotência nos event handlers?
- Feature gating testado por plano?
- Dunning configurado?

**Critério:** Zero bugs em fluxos de pagamento

### Fase 6: Monitoring Audit
- Sentry capturando erros?
- Uptime Kuma com alertas testados?
- Health check respondendo?
- Logs com requestId e userId?

**Critério:** Simulação de downtime → alerta em < 2 min

### Fase 7: Audit Report
Compilar `docs/audit-reports/audit-{date}.md`:
- Decisão: PASS | FAIL | PASS WITH CONCERNS
- Issues críticos (blockers)
- Issues importantes (prazo 48h)
- Melhorias sugeridas
- Evidências por fase

## KPIs
| Métrica | Alvo |
|---------|------|
| Issues críticos de segurança | 0 |
| Test coverage | > 80% |
| Lighthouse Performance | >= 95 |
| API response p95 | < 200ms |
| Zero secrets expostos | 100% |
