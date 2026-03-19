---
task: Setup Email & Notifications
responsavel: "@pwb-email"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md
  - auth_setup: (Clerk ou Supabase Auth configurado)
  - billing_setup: (Stripe configurado — opcional)
Saida: |
  - email_templates: packages/emails/templates/
  - email_queue: apps/api/src/lib/email-queue.ts
  - email_service: apps/api/src/services/email.service.ts
  - notifications_schema: supabase/migrations/xxx_notifications.sql
  - notifications_ui: apps/web/components/notifications/
---

# *setup-email

Configurar Resend + React Email + fila de emails + notificações in-app.

## Fases de Execução

### Fase 1: Resend Configuration
- Criar conta Resend e verificar domínio
- Configurar DNS: SPF, DKIM, DMARC
- Salvar `RESEND_API_KEY` no ambiente
- Instalar: `pnpm add resend @react-email/components`

### Fase 2: Templates Obrigatórios
Criar todos os templates em `packages/emails/templates/`:
- `welcome.tsx` — boas-vindas após cadastro
- `email-verify.tsx` — verificação de email
- `password-reset.tsx` — reset de senha
- `subscription-confirm.tsx` — assinatura confirmada
- `trial-ending.tsx` — trial acabando em 3 dias
- `payment-failed.tsx` — pagamento falhou
- `team-invite.tsx` — convite para time
- `security-alert.tsx` — login em novo device

### Fase 3: Email Queue com BullMQ
- Configurar worker com retry (3 tentativas, backoff exponencial)
- Rate limiter: máx 50 emails/minuto
- `queueEmail(template, to, data)` helper

### Fase 4: Preferências de Notificação
- Schema: `notification_preferences` com opt-in/opt-out por categoria
- RLS: usuário gerencia apenas suas próprias preferências
- Respeitar preferências antes de enviar (security/billing sempre enviam)

### Fase 5: Notificações In-App
- Schema: `notifications` com leitura/não-leitura
- Supabase Realtime: notificação instantânea no cliente
- UI: ícone de sino com badge de não-lidas
- Hook `useNotifications()` com subscription Realtime

### Fase 6: Deliverability Check
- Testar via mail-tester.com (score >= 9/10)
- Verificar DMARC não tem failures
- Testar cada template: enviar para email real e verificar renderização mobile

## Critério de Conclusão
Todos os templates funcionando, fila com retry, preferências respeitadas, notificações in-app funcionando.

## KPIs
| Métrica | Alvo |
|---------|------|
| Deliverability score | >= 9/10 |
| Email send errors | < 1% |
| Bounce rate | < 2% |
| Template mobile rendering | 100% ok |
