---
task: Setup Billing
responsavel: "@pwb-billing"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md
  - stripe_account: conta ativa no Stripe
Saida: |
  - billing_schema: supabase/migrations/xxx_billing.sql
  - webhook_api: apps/api/src/routes/billing.ts
  - customer_portal: (configurado no Stripe)
---

# *setup-billing

## Purpose
Implementar o sistema de cobrança e gestão de assinaturas, garantindo faturamento correto, segurança em transações e conformidade fiscal.

## Pre-conditions
- Conta Stripe ativa e configurada (Modo Teste).
- Plano de precificação (Pricing) definido no PRD.

## Checklist
- [ ] Schema de Billing criado no banco (customers, subscriptions)
- [ ] Webhook do Stripe implementado com verificação de assinatura
- [ ] Lógica de Checkout Session configurada no Frontend/Backend
- [ ] Customer Portal ativado para gestão de usuários
- [ ] Feature Gating (bloqueio por plano) implementado e testado
- [ ] Eventos de billing (sucesso, falha, cancelamento) logados

## Fases de Execução

### Fase 1: DB Schema
- Criar migração para: `stripe_customers`, `subscriptions`, `prices`, `products`
- Relacionar `customer` com `organization_id` (SaaS) ou `user_id` (Micro/Indie)
- Implementar RLS: Usuário vê apenas sua própria subscrição

### Fase 2: Stripe Setup
- Criar produtos e preços no Stripe Dashboard (Test Mode)
- Configurar `STRIPE_SECRET_KEY` e `STRIPE_WEBHOOK_SECRET`
- Ativar Stripe Customer Portal (branding e funcionalidades)

### Fase 3: Webhook Handler
- Implementar endpoint `/api/webhooks/stripe`
- **Crítico:** Validar assinatura (`stripe.webhooks.constructEvent`)
- Handlers para:
  - `checkout.session.completed` → Criar/Atualizar subscrição
  - `customer.subscription.deleted` → Marcar subscrição como inativa
  - `invoice.payment_failed` → Notificar pwb-email para dunning

### Fase 4: Checkout Flow
- Backend: `createCheckoutSession()` → retornar `url` do Stripe
- Frontend: Botão de upgrade → chamar API → redirect para Stripe

### Fase 5: Feature Gating
- Implementar helper `requireSubscription()` ou similar
- Middleware para rotas premium
- Bloquear UI components baseados no plano (UI gating)

### Fase 6: Testes de Faturamento
- Teste: Assinar com cartão de teste (4242...) → verificar DB subscrição ativa
- Teste: Cancelar subscrição → verificar DB subscrição inativa
- Teste: Falha no pagamento → verificar log de falha
- Teste: Webhook sem assinatura → deve retornar 400

## Critério de Conclusão
Pagamentos funcionando do checkout ao webhook, RLS de billing ativo, feature gating validado.

## KPIs
| Métrica | Alvo |
|---------|------|
| Tempos de resposta webhook | < 500ms |
| Discrepância Stripe vs DB | 0 |
| Segredos do Stripe em plain text | 0 |
