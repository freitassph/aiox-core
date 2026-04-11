---
task: Setup Integrations
responsavel: "@psa-integrations"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - integration_spec: docs/integration-spec.md (gerado por psa-architect)
  - api_running: apps/api/ (backend ready)
  - credentials: credenciais das APIs externas (cliente fornece)
Saida: |
  - whatsapp_integration: apps/api/src/integrations/evolution-api.ts
  - calendar_integration: apps/api/src/integrations/google-calendar.ts
  - webhook_routes: apps/api/src/routes/webhooks/
  - integration_docs: docs/integrations.md
---

# *setup-integrations

Conecta o sistema com WhatsApp, Google Calendar, e APIs externas do cliente.

## Fases de Execução

### Fase 1: Evolution API Setup (WhatsApp)
**Ações:**
- Verificar se Evolution API está rodando no Docker Compose
- Configurar instance no Evolution API: nome, token, webhook URL
- Implementar `EvolutionApiClient` em `integrations/evolution-api.ts`
- Métodos: `sendMessage`, `sendMediaMessage`, `handleWebhook`
- Implementar verificação de assinatura HMAC no webhook
- Testar: enviar mensagem de teste para número real

**Critério de conclusão:** Mensagem de teste enviada e recebida com sucesso

### Fase 2: Webhook Handler (WhatsApp)
**Ações:**
- Criar route `POST /api/webhooks/whatsapp` com:
  - Verificação de assinatura HMAC obrigatória (rejeitar sem assinatura)
  - Idempotência via Redis (não processar mesma mensagem 2x)
  - Retorno 200 imediato (< 500ms)
  - Enfileirar processamento assíncrono via BullMQ
- Implementar parser de payload: extrair phone, message, attachments
- Testar com payload real do Evolution API

**Critério de conclusão:** Webhook recebe mensagem real, enfileira job, retorna 200 em < 300ms

### Fase 3: Google Calendar OAuth
**Ações:**
- Configurar projeto no Google Cloud Console (ou usar existente do cliente)
- Implementar OAuth 2.0 flow: `/api/integrations/google/authorize` → callback → save tokens
- Implementar `GoogleCalendarService`: `getAvailability`, `createEvent`, `deleteEvent`
- Implementar refresh automático de token expirado
- Armazenar tokens criptografados no Supabase (nunca em texto puro)

**Critério de conclusão:** Usuário consegue conectar Google Calendar, slots de disponibilidade retornados

### Fase 4: External API Adapters (se houver)
**Ações:**
- Para cada API do cliente listada no integration-spec.md:
  - Criar adapter TypeScript com interface padronizada
  - Implementar autenticação específica (API key, OAuth, Basic auth)
  - Implementar todos os métodos necessários com retry
  - Documentar rate limits e comportamento esperado
- Testar cada método com dados reais em staging

**Critério de conclusão:** Todos os adapters funcionando com dados reais

### Fase 5: Circuit Breakers + Fallbacks
**Ações:**
- Implementar circuit breaker para cada integração externa crítica
- Threshold: após 5 falhas em 60 segundos, abrir circuit (stop calling)
- Após 30 segundos, tentar novamente (half-open state)
- Implementar mensagem de fallback quando integração offline

**Critério de conclusão:** Simulação de API offline → sistema responde gracefully sem crash

### Fase 6: Integration Documentation
**Ações:**
- Criar `docs/integrations.md` com:
  - Setup inicial de cada integração (passo a passo com screenshots)
  - Troubleshooting das falhas mais comuns
  - Como reconectar OAuth expirado
  - Limites de rate de cada API

**Critério de conclusão:** Cliente consegue configurar integrações lendo a documentação

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Webhook response time | < 300ms | Pino logs |
| WhatsApp delivery rate | > 98% | Evolution API metrics |
| OAuth token refresh | Automático 100% | Monitorar logs de refresh |
| Circuit breaker test | Funciona em simulação | Teste manual |


## Purpose
O propósito desta tarefa é garantir a execução impecável de um módulo específico do sistema Pedro Henrique, seguindo os rigorosos padrões de qualidade S+++.

## Entrada
- Requisitos técnicos detalhados
- Contexto do projeto vindo do Maestro
- Dependências de sistemas externos validadas

## Saida
- Código fonte documentado e testado
- Artefatos de design ou infraestrutura validados
- Relatório de conformidade técnica

## Checklist
- [ ] Validar conformidade com os padrões de código
- [ ] Executar testes de unidade e integração
- [ ] Revisar documentação técnica
- [ ] Obter aprovação do Auditor

## Pre-conditions
- Ambiente de desenvolvimento configurado
- Todas as dependências do agente resolvidas
- Goal da tarefa claramente definido e aceito pela squad
