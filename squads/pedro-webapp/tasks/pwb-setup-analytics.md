---
task: Setup Analytics & Monitoring
responsavel: "@pwb-analytics"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - posthog_key: chave de API do PostHog
  - sentry_dsn: DSN do Sentry
Saida: |
  - analytics_lib: apps/web/lib/posthog.tsx
  - monitoring_setup: apps/web/sentry.config.ts
  - feature_flags: (configuradas no PostHog)
---

# *setup-analytics

## Purpose
Configurar e implementar as ferramentas de mensuração de dados, observabilidade de erros e gestão de experimentos (feature flags), garantindo decisões baseadas em dados.

## Pre-conditions
- Definição de KPIs e eventos críticos no PRD.
- Contas ativas no PostHog e Sentry.

## Checklist
- [ ] SDK do PostHog integrado ao Frontend (Auto-capture off)
- [ ] Rastreamento de eventos customizados em fluxos críticos
- [ ] Sentry configurado para captura de erros (Front/Back)
- [ ] Feature Flags habilitadas e testadas
- [ ] Funis de conversão e dashboards criados
- [ ] Monitoramento de performance sistêmica ativo

## Fases de Execução

### Fase 1: PostHog Setup (Frontend)
```bash
pnpm add posthog-js
```
- Criar `providers/posthog-provider.tsx` — usar `capture_pageview: false`
- Chamar `posthog.init` com `api_host` (proxy recomendado)
- Implementar `identify()` após o login do usuário (identidade real)

### Fase 2: Tracking de Eventos (JTBD)
Implementar `capture()` nos eventos definidos pelo PM:
- `user_signed_up`
- `feature_used` (com nome da feature)
- `pricing_viewed`
- `checkout_started`
- `subscription_completed` (importante p/ faturamento)

### Fase 3: Server-side Analytics (API)
- Instalar Node SDK do PostHog
- Capturar eventos em background jobs (faturamento, emails)
- Garantir que `distinct_id` seja consistente entre front e back

### Fase 4: Funneis e Dashboards
- Criar funil de Onboarding em PostHog UI
- Criar funil de Retenção (Week 1, Week 4)
- Criar dashboard executivo para o Pedro (User growth, MRR growth)

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
