---
task: Setup Analytics & Error Tracking
responsavel: "@pwb-analytics"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md
  - auth: (auth configurado — para identificar usuários)
Saida: |
  - posthog_setup: lib/analytics/posthog.ts
  - event_taxonomy: lib/analytics/events.ts
  - feature_flags: lib/analytics/feature-flags.ts
  - sentry_setup: instrumentation.ts
  - providers: app/providers.tsx
---

# *setup-analytics

Configurar PostHog (analytics + feature flags) e Sentry (error tracking).

## Fases de Execução

### Fase 1: PostHog Setup
- Criar conta PostHog (cloud ou self-hosted)
- Instalar: `pnpm add posthog-js posthog-node`
- Configurar `PostHogProvider` em `app/providers.tsx`
- Desabilitar em dev (`NODE_ENV !== 'production'`)
- Pageview manual (não autocapture)

### Fase 2: Event Taxonomy
Definir todos os eventos do projeto em `lib/analytics/events.ts`:
- Acquisition: Landing Viewed, CTA Clicked, Signup Started/Completed
- Activation: Onboarding Step, First Feature Used
- Retention: Dashboard Viewed, Feature Used
- Revenue: Pricing Viewed, Plan Selected, Subscription Created/Canceled
- Referral: Invite Sent/Accepted

### Fase 3: Identificação de Usuário
- `identifyUser(userId, { email, plan, createdAt })` após login
- `resetAnalytics()` no logout
- Server-side tracking para eventos críticos (billing, signup)

### Fase 4: Funnels e Dashboards
Configurar no PostHog:
- Funnel de signup (Landing → Signup Started → Completed)
- Funnel de ativação (Signup → First Feature Used)
- Funnel de upgrade (Pricing Viewed → Plan Selected → Subscription)
- Dashboard: DAU, MAU, Churn, MRR

### Fase 5: Feature Flags
- Criar flags iniciais: `new-feature-x`, `beta-feature-y`
- Implementar `useFeatureFlag()` hook
- Implementar `getFeatureFlagServer()` para SSR
- Testar com % rollout em 5% dos usuários

### Fase 6: Sentry Setup
- Criar projeto no Sentry (frontend + backend separados)
- Instalar: `pnpm add @sentry/nextjs`
- Configurar `instrumentation.ts` com DSN
- Remover PII em `beforeSend`
- Testar: disparar erro intencional e verificar no dashboard

### Fase 7: Validação
- Evento de teste disparado e aparece no PostHog
- Error de teste aparece no Sentry
- Feature flag funcionando (control vs test)
- Dashboard com métricas básicas configurado

## Critério de Conclusão
PostHog recebendo eventos, Sentry capturando erros, feature flags funcionando, funnels configurados.

## KPIs
| Métrica | Alvo |
|---------|------|
| Event tracking coverage | 100% fluxos críticos |
| Error detection rate | > 95% |
| False positive events | 0 (autocapture desabilitado) |
