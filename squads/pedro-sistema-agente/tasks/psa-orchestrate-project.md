---
task: Orchestrate Project
responsavel: "@psa-maestro"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brief: Descrição do projeto em linguagem natural (obrigatório)
  - client_name: Nome do cliente/negócio (opcional)
  - deadline: Prazo estimado (opcional)
Saida: |
  - project_blueprint: docs/PROJECT.md
  - phase_status: docs/PHASE-STATUS.md
  - delivery_report: docs/DELIVERY.md (ao finalizar)
---

# *orchestrate-project

Task principal de orquestração — recebe brief e coordena todos os agentes do início ao fim.

## Fases de Execução

### Fase 1: Brief Analysis
**Ações:**
- Ler brief completo e identificar tipo de sistema
- Classificar complexidade: SIMPLE / STANDARD / COMPLEX
- Identificar: entidades de dados, integrações necessárias, usuários, escala

**Critério de conclusão:** Consegue resumir o sistema em 5 linhas sem ambiguidade

### Fase 2: Clarificação (se necessário)
**Ações:**
- Se há ambiguidades críticas: formular máximo 3 perguntas objetivas
- Aguardar resposta antes de prosseguir
- Atualizar entendimento do brief

**Critério de conclusão:** Zero ambiguidades P0 pendentes

### Fase 3: Criação do Blueprint
**Ações:**
- Criar `docs/PROJECT.md` com: vision, system map, agent roster, data model inicial, integration map, fases
- Criar `docs/PHASE-STATUS.md` com status de cada fase: `PENDING`

**Output:** `docs/PROJECT.md`, `docs/PHASE-STATUS.md`

**Critério de conclusão:** Blueprint aprovado, todas as seções preenchidas

### Fase 4: Execução Sequencial dos Agentes
**Ações:**
- Ativar cada agente na ordem do workflow `full-system-build.yaml`
- Para cada agente: passar contexto necessário, aguardar entregáveis
- Executar gate check após cada agente
- Atualizar `PHASE-STATUS.md` com progresso

**Gate Check por Fase:**
```
psa-pm     → PRD.md completo? Personas? User stories com ACs? → GO/NO-GO
psa-architect → architecture.md? api-contract.md? integration-spec.md? → GO/NO-GO
psa-ux-designer → design-tokens.css? HANDOFF.md? motion.md? → GO/NO-GO
psa-data-engineer → migrations? RLS policies? Drizzle schema? → GO/NO-GO
psa-backend → API rodando? testes passando? OpenAPI spec? → GO/NO-GO
psa-frontend → UI implementada? Lighthouse > 90? → GO/NO-GO
psa-ai-builder → RAG funcionando? Agente respondendo? → GO/NO-GO
psa-integrations → WhatsApp conectado? Webhooks funcionando? → GO/NO-GO
psa-onboarding → Wizard completo? RAG quality > 75%? → GO/NO-GO
psa-devops → Deploy em VPS? SSL? CI/CD? Monitoramento? → GO/NO-GO
psa-qa → Testes passando? Load test OK? → GO/NO-GO
psa-auditor → Zero críticos? Alertas configurados? → GO/NO-GO
```

**Critério de conclusão:** Todos os agentes executaram com GO nos gates

### Fase 5: Delivery Report
**Ações:**
- Criar `docs/DELIVERY.md` com: o que foi construído, URLs, como acessar, como operar, próximos passos
- Atualizar todos os status para COMPLETE

**Output:** `docs/DELIVERY.md`

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Gates aprovados sem retrabalho | > 90% | Contagem de NO-GO por gate |
| Tempo de entrega | Dentro do prazo | Comparar datas |
| Agentes com primeiro GO | > 80% | Número de retornos por gate |
| Zero críticos de segurança | 100% | Relatório psa-auditor |


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
