---
task: Setup Email Transactional
responsavel: "@pwb-email"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - resend_key: chave de API do Resend
  - branding: logos e cores do design system
Saida: |
  - email_templates: react-email/emails/
  - email_lib: apps/api/src/lib/email.ts
---

# *setup-email

## Purpose
Configurar e implementar o sistema de comunicações transacionais (e-mails), garantindo entrega confiável, design responsivo e monitoramento de eventos.

## Pre-conditions
- Domínio configurado com registros SPF/DKIM (via Resend/Postmark).
- Identidade visual e tom de voz definidos.

## Checklist
- [ ] Templates React Email criados (Welcome, Login, Alert)
- [ ] Provider de e-mail integrado (Resend SDK)
- [ ] Lógica de fila (BullMQ) configurada para envios assíncronos
- [ ] Sistema de logs de envio e erros implementado
- [ ] Testes de visualização (responsividade) concluídos
- [ ] Webhooks de entrega e bounce configurados

## Fases de Execução

### Fase 1: Setup React Email
```bash
pnpm add resend @react-email/components @react-email/render
# Criar diretório de templates
mkdir -p packages/email/emails
```

### Fase 2: Desenvolvimento de Templates
Desenvolver componentes React para:
1. `Welcome.tsx`: Onboarding, primeiros passos
2. `MagicLink.tsx`: Login sem senha
3. `PasswordReset.tsx`: Recuperação de conta
4. `SubscriptionSuccess.tsx`: Confirmação de pagamento
5. `SecurityAlert.tsx`: Aviso de login estranho ou mudança de senha

**Regra:** CSS inline (suporte limitado de clients de email), design responsivo, fallback texto puro.

### Fase 3: API Integration
- Criar `lib/email.ts` usando Resend SDK
- Implementar função genérica `sendEmail({ to, subject, template, props })`
- Integrar com BullMQ: Enviar e-mail deve ser um job, nunca bloquear a request da API

### Fase 4: Async Workers
- Criar worker em `apps/api/src/workers/email-worker.ts`
- Processar jobs de e-mail com retry logic em caso de falha de conexão

### Fase 5: Domínio e DNS
- Verificar domínios no dashboard do Resend
- Verificar se SPF, DKIM e DMARC estão "Verified" antes do primeiro envio real

### Fase 6: Testes
- Teste: Disparar e-mail de teste via script → verificar recebimento e layout
- Teste: Simular erro de API do Resend → verificar se o BullMQ faz retry
- Teste: Verificar acessibilidade do e-mail (texto alternativo em imagens)

## Critério de Conclusão
Emails chegando na caixa de entrada (não spam), design responsivo, logic assíncrona com BullMQ operacional.

## KPIs
| Métrica | Alvo |
|---------|------|
| Email delivery rate | > 99% |
| Email open rate (ideal) | > 50% |
| Bounce rate | < 1% |
| Tempo de processamento na fila | < 5s |
| Segredos do Resend em plain text | 0 |
