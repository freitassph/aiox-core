---
task: Build AI Agents
responsavel: "@psa-ai-builder"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - prd: docs/PRD.md (agente specs, integrations list)
  - database: packages/database/schema/ (para tipos)
  - api_running: apps/api/ (backend ready)
Saida: |
  - agent_service: apps/api/src/services/agent-service.ts
  - rag_service: apps/api/src/services/rag-service.ts
  - prompts: apps/api/src/config/prompts/
  - eval_report: docs/agent-eval-report.md
---

# *build-ai-agents

Constrói o pipeline RAG completo e o sistema de agentes IA com tool calling.

## Fases de Execução

### Fase 1: RAG Ingestion Pipeline
**Ações:**
- Implementar `KnowledgeIngestionService` em `services/knowledge-ingestion-service.ts`
- Suporte a formatos: PDF (pdf-parse), DOCX (mammoth), TXT, URL (fetch + cheerio)
- Implementar chunking inteligente: por headers → parágrafos → tamanho máximo (512 tokens, 50 overlap)
- Implementar geração de embeddings com retry + rate limit (OpenAI via AI Gateway: `openai/text-embedding-3-small`)
- Implementar save no pgvector via Supabase

**Ferramentas:** pdf-parse, mammoth, AI SDK, Supabase pgvector

**Critério de conclusão:** Upload de PDF resulta em embeddings salvos no pgvector e consultáveis

### Fase 2: RAG Retrieval
**Ações:**
- Implementar `RagService.search()`: query → embedding → match_documents SQL function → formatted context
- Implementar reranking simples: ordenar por similarity score, filtrar por threshold (> 0.78)
- Implementar context assembly: chunks → texto formatado para o system prompt
- Implementar cache de embeddings de query frequentes (Redis, TTL 1h)

**Critério de conclusão:** `ragService.search({ query: 'horário funcionamento', agentId })` retorna contexto relevante

### Fase 3: Prompt Engineering
**Ações:**
- Criar template base em `config/prompts/base-prompt.ts`
- Implementar `buildSystemPrompt(agent, ragContext)` com: persona, regras absolutas, contexto RAG, data/hora atual
- Implementar variantes: prompt para WhatsApp (respostas curtas), para web (pode ser mais detalhado)
- Testar com 20+ edge cases: perguntas fora do domínio, tentativas de jailbreak, perguntas ambíguas

**Critério de conclusão:** Agente nunca inventa informação, nunca quebra persona, responde "não sei" corretamente

### Fase 4: Tool Calling
**Ações:**
- Implementar tools com AI SDK + Zod schemas:
  - `searchKnowledge`: busca na base de conhecimento
  - `checkCalendar`: verifica disponibilidade (chama psa-integrations)
  - `createAppointment`: cria agendamento (requer confirmação explícita do usuário)
  - `getPatientInfo`: busca dados do paciente (se integração de clínica)
- Cada tool tem: description clara, inputSchema Zod, execute function com error handling
- `stopWhen: stepCountIs(10)` para evitar loops infinitos

**Critério de conclusão:** Tool `createAppointment` só executa após confirmar dados com o usuário

### Fase 5: Agent Service + Streaming
**Ações:**
- Implementar `AgentService.processMessage()` com Vercel AI SDK
- Usar model string via AI Gateway (ex: `'openai/gpt-4.1-mini'`)
- Implementar streaming com `streamText` + `toUIMessageStreamResponse()`
- Implementar memory management: busca histórico recente, sumariza se > 10 mensagens
- Implementar métricas: latência, tokens, custo estimado por conversa

**Critério de conclusão:** Resposta em streaming < 3s para queries simples, ferramentas chamadas corretamente

### Fase 6: Evaluation Suite
**Ações:**
- Criar `tests/agent-eval/` com 20+ pares pergunta-resposta esperada
- Implementar métricas automáticas: similarity de resposta, tool calls corretos, tempo
- Executar eval suite e documentar resultados em `docs/agent-eval-report.md`

**Meta mínima de qualidade:**
- Retrieval precision > 80%
- Resposta relevante > 85%
- Tool calls corretos > 95%
- Latência p95 < 4s

**Critério de conclusão:** Eval report gerado, todas as metas atingidas

### Fase 7: Fallback e Limites
**Ações:**
- Implementar fallback quando LLM offline (mensagem de erro amigável)
- Implementar budget guard (alerta se custo mensal projetado > threshold)
- Implementar graceful degradation quando RAG não encontra contexto relevante
- Configurar alertas Sentry para falhas de tool calling

**Critério de conclusão:** Sistema responde de forma útil mesmo sem contexto RAG disponível

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Retrieval similarity threshold | > 0.78 | match_documents results |
| Latência p95 (resposta completa) | < 4s | Pino logs |
| Tool call success rate | > 95% | Agent metrics |
| Alucinação detectada | < 5% | Eval suite |
| Custo por conversa | < $0.01 | Token counting |
