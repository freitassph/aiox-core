---
task: Setup Billing & Subscriptions
responsavel: "@pwb-billing"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md (planos, preços, modelo de billing)
  - schema: supabase/migrations/ (tabelas de customers, subscriptions)
Saida: |
  - billing_service: apps/api/src/services/billing.service.ts
  - billing_routes: apps/api/src/routes/billing.ts
  - webhook: apps/web/app/api/billing/webhook/route.ts
  - billing_ui: apps/web/app/(app)/settings/billing/
  - pricing_page: apps/web/app/(marketing)/pricing/page.tsx
---

# *setup-billing

Configurar Stripe completo: subscriptions, webhooks, portal do cliente, pricing page.

## Fases de Execução

### Fase 1: Stripe Configuration
- Criar Products e Prices no Stripe Dashboard (ou via API)
- Configurar Webhook endpoint: `https://api.meuapp.com.br/api/billing/webhook`
- Salvar `STRIPE_SECRET_KEY` e `STRIPE_WEBHOOK_SECRET` no ambiente
- Habilitar Stripe Tax (automático)

### Fase 2: Database Schema
- Criar tabelas: `customers`, `subscriptions`, `invoices`, `stripe_webhook_events`
- Índices em `stripe_customer_id`, `stripe_subscription_id`
- RLS: apenas admins de org acessam billing

### Fase 3: Checkout Flow
- Criar checkout session com trial (14 dias por default)
- Redirecionar para Stripe Checkout
- Processar `checkout.session.completed` no webhook
- Criar/atualizar subscription no banco

### Fase 4: Webhook Handler
- Verificar assinatura Stripe (rejeitar se inválida)
- Idempotência: checar `stripe_webhook_events` antes de processar
- Processar: `subscription.created/updated/deleted`, `invoice.paid/payment_failed`
- Retornar 200 para Stripe confirmar recebimento

### Fase 5: Customer Portal
- Implementar `POST /api/billing/portal` → retorna URL do portal Stripe
- Botão "Gerenciar assinatura" em settings/billing

### Fase 6: Feature Gating
- Implementar `PLAN_FEATURES` com limites por plano
- `checkFeatureAccess(userId, feature)` helper
- `requireFeature(feature)` middleware para routes da API
- UI: mostrar upgrade prompt quando feature bloqueada

### Fase 7: Pricing Page
- Implementar toggle monthly/annual (mostrar economia)
- Tier central destacado como "Mais Popular"
- CTA diferente por tier
- FAQ de objeções de pricing

### Fase 8: Dunning
- Email automático quando pagamento falha (template no pwb-email)
- Restrição de acesso após 3 tentativas falhadas

## Critério de Conclusão
Checkout funcionando end-to-end, webhook processando eventos, feature gating ativo, portal do cliente funcional.

## KPIs
| Métrica | Alvo |
|---------|------|
| Webhook processing errors | 0 |
| Billing bugs críticos | 0 |
| Checkout completion rate | > 70% |
