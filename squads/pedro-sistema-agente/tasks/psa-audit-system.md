---
task: Audit System
responsavel: "@psa-auditor"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - codebase: todo o código produzido
  - logs: logs de produção (se já deploy)
  - metrics: métricas do sistema
Saida: |
  - audit_report: docs/audit-report.md
  - security_checklist: docs/security-checklist.md
  - monitoring_config: Uptime Kuma + Sentry configurados
---

# *audit-system

Auditoria completa de segurança, qualidade, performance e comportamento do agente.

## Fases de Execução

### Fase 1: Security Audit
**Ações:**
- Verificar autenticação: TODAS as rotas protegidas?
- Verificar RLS: TODAS as tabelas com políticas?
- Verificar secrets: algum hardcoded no código?
- Verificar CORS: configurado com origins específicos?
- Verificar rate limiting: nas rotas públicas e de auth?
- Verificar inputs: validação Zod em todas as boundaries?
- Verificar outputs: dados sensíveis nos responses/logs?
- Verificar headers: security headers (HSTS, X-Content-Type, etc.)?

**Critério de conclusão:** Zero issues críticos de segurança no relatório

### Fase 2: Code Quality Audit
**Ações:**
- Verificar: zero `any` em TypeScript
- Verificar: error handling em todas as funções assíncronas
- Verificar: imports absolutos (nenhum `../../../`)
- Verificar: JSDoc em todas as funções públicas
- Verificar: testes passando (pnpm test)
- Verificar: lint passando (pnpm lint)
- Verificar: typecheck passando (pnpm typecheck)

**Critério de conclusão:** Todos os quality gates passando

### Fase 3: Performance Audit
**Ações:**
- Executar EXPLAIN ANALYZE nas queries mais frequentes
- Verificar índices usados vs. Seq Scans
- Verificar N+1 queries no código
- Verificar bundle size do frontend
- Executar Lighthouse nas páginas principais
- Verificar resposta da API em condições normais (p95)

**Critério de conclusão:** Zero queries com Seq Scan em tabelas grandes, Lighthouse >= 95

### Fase 4: Agent Behavior Audit
**Ações:**
- Testar 20 cenários com o agente (happy paths + edge cases)
- Verificar: agente inventa informação? (alucinação)
- Verificar: agente quebra persona?
- Verificar: agente cria agendamento sem confirmar?
- Verificar: agente responde em português? (se pt-BR)
- Verificar: agente lida bem com perguntas fora do domínio?
- Documentar todas as falhas encontradas

**Critério de conclusão:** Taxa de alucinação < 5%, comportamento consistente nos 20 testes

### Fase 5: Monitoring Setup Verification
**Ações:**
- Verificar Uptime Kuma: todos os endpoints monitorados?
- Verificar alertas: testados e funcionando?
- Verificar Sentry: capturando erros de produção?
- Verificar logs: estruturados, com requestId, sem dados sensíveis?
- Verificar backup: executando e armazenando corretamente?

**Critério de conclusão:** Simulação de downtime → alerta recebido em < 2 minutos

### Fase 6: Audit Report
**Ações:**
- Compilar `docs/audit-report.md` com:
  - Resumo executivo (PASS/FAIL geral)
  - Issues críticos (blockers)
  - Issues importantes (prazo 48h)
  - Melhorias sugeridas
  - Evidências de cada verificação
- Enviar relatório para psa-maestro com decisão GO/NO-GO

**Critério de conclusão:** Relatório completo, decisão clara documentada

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Issues críticos de segurança | 0 | Security checklist |
| Cobertura de testes | > 80% | Vitest coverage |
| Alucinação do agente | < 5% | Manual testing |
| Response time p95 | < 500ms | Logs |
| Lighthouse scores | >= 95 | Lighthouse report |


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
