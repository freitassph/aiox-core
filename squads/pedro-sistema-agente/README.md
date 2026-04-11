# 🤖 Pedro Sistema Agente Squad

**Squad elite de construção de sistemas completos end-to-end.**
Qualidade $50M em design e engenharia. Zero tolerância a erros. Auditoria constante.

---

## Visão Geral

O `pedro-sistema-agente` é um squad capaz de construir **qualquer sistema de agentes IA** do zero até produção:

- **Frontend:** Nível Apple/Ferrari — Next.js 15, shadcn/ui, Framer Motion, Lighthouse 100
- **Backend:** Bulletproof — Hono.js, Clean Architecture, TypeScript strict, zero downtime
- **Agentes IA:** RAG completo, tool calling, streaming, anti-alucinação
- **Integrações:** WhatsApp (Evolution API), Google Calendar, APIs externas
- **Deploy:** VPS Docker + Nginx + SSL + CI/CD + Monitoramento 24/7
- **Auditoria:** Segurança, performance, comportamento de agente — contínuos

---

## 👥 Time (14 Agentes)

| Agente | Persona | Especialidade |
|--------|---------|---------------|
| `psa-maestro` | Maestro | Orquestrador central — coordena tudo do brief ao delivery |
| `psa-architect` | Aria | Arquitetura de sistema, tech stack, ADRs |
| `psa-pm` | Morgan | PRD, personas, requisitos, user stories |
| `psa-ux-designer` | Nova | Design system Apple/Ferrari, tokens, motion spec |
| `psa-frontend` | Pixel | Next.js 15, Server Components, Lighthouse 100 |
| `psa-backend` | Forge | Hono.js, Clean Architecture, API bulletproof |
| `psa-data-engineer` | Atlas | Supabase, pgvector, RLS, Drizzle ORM |
| `psa-ai-builder` | Nexus | RAG pipeline, tool calling, prompt engineering |
| `psa-integrations` | Bridge | WhatsApp, Google Calendar, APIs externas |
| `psa-onboarding` | Welcome | Wizard de onboarding, ingestão de documentos |
| `psa-devops` | Deploy | VPS, Docker, CI/CD, monitoramento |
| `psa-auditor` | Sentinel | Segurança, qualidade, performance — auditoria constante |
| `psa-doc-writer` | Scribe | Arquitetura, API docs, runbooks, guia do cliente |
| `psa-qa` | Verify | Unit, E2E, load testing, security scan |

---

## 📋 Tasks (10 Tasks)

| Task | Agente | Entrega |
|------|--------|---------|
| `psa-orchestrate-project` | Maestro | PROJECT.md, blueprint completo |
| `psa-gather-requirements` | PM | PRD.md, personas, user stories |
| `psa-design-system` | UX Designer | design-tokens.css, HANDOFF.md |
| `psa-build-frontend` | Frontend | apps/web/ completo |
| `psa-build-backend` | Backend | apps/api/ completo |
| `psa-setup-database` | Data Engineer | migrations, Drizzle schema, pgvector |
| `psa-build-ai-agents` | AI Builder | agent-service, rag-service, prompts |
| `psa-setup-integrations` | Integrations | WhatsApp, Calendar, APIs externas |
| `psa-deploy-vps` | DevOps | VPS, Docker, CI/CD, monitoramento |
| `psa-audit-system` | Auditor | Audit report, security checklist |

---

## 🔄 Workflows

### 1. `full-system-build` — Do brief ao deploy
O workflow principal. Recebe um brief e entrega o sistema completo em produção.

```
Brief → psa-maestro → psa-pm → psa-architect + psa-ux-designer (paralelo)
→ psa-data-engineer → psa-backend + psa-frontend + psa-ai-builder (paralelo)
→ psa-integrations → psa-onboarding → psa-auditor → psa-qa → psa-devops
→ psa-doc-writer → DELIVERY.md
```

**Tempo estimado:**
- SIMPLE (secretária básica): 1-2 semanas
- STANDARD (clínica completa): 2-4 semanas
- COMPLEX (multi-tenant SaaS): 4-8 semanas

### 2. `ai-agent-build` — Só o núcleo IA
Para quando frontend/backend já existe e você quer adicionar capacidades de agente IA.

### 3. `audit-cycle` — Auditoria contínua
Para sistemas em produção. Executar semanalmente.

---

## 🚀 Quick Start

### Usar o squad

```
@psa-maestro

*orchestrate-project --brief "Preciso de uma secretária IA para minha clínica odontológica. Ela deve responder no WhatsApp, agendar consultas no Google Agenda, responder dúvidas sobre os serviços."
```

O Maestro vai:
1. Analisar o brief
2. Fazer no máximo 3 perguntas de clarificação se necessário
3. Criar o PROJECT.md com o blueprint completo
4. Ativar os agentes na sequência correta
5. Gerenciar gates de qualidade entre cada fase
6. Entregar o DELIVERY.md com URLs e instruções de operação

### Comandos disponíveis

```bash
# Orquestração completa
*orchestrate-project --brief "..."

# Fases individuais
*gather-requirements
*design-system
*build-frontend
*build-backend
*setup-database
*build-ai-agents
*setup-integrations
*deploy-vps
*audit-system
```

---

## 🏗️ Arquitetura do Sistema Gerado

```
{project-name}/
├── apps/
│   ├── web/            # Next.js 15 (App Router)
│   └── api/            # Hono.js (Clean Architecture)
├── packages/
│   ├── database/       # Drizzle ORM schema
│   └── types/          # Shared TypeScript types
├── supabase/
│   └── migrations/     # SQL migrations versionadas
├── infrastructure/
│   ├── docker-compose.prod.yml
│   ├── nginx/
│   └── scripts/
├── .github/workflows/  # CI/CD (lint → test → deploy)
└── docs/
    ├── PROJECT.md
    ├── PRD.md
    ├── architecture.md
    ├── api-reference.md
    ├── runbook.md
    └── DELIVERY.md
```

---

## 🛡️ Padrões de Qualidade

| Padrão | Meta |
|--------|------|
| TypeScript strict (zero `any`) | 100% |
| Testes (coverage) | > 80% |
| Lighthouse Performance | >= 95 |
| Security issues críticos | 0 |
| RLS em todas as tabelas | 100% |
| API response p95 | < 200ms |
| Agente hallucination rate | < 5% |
| Uptime em produção | > 99.9% |

---

## 📊 Tech Stack Default

- **Frontend:** Next.js 15, TypeScript, Tailwind, shadcn/ui, Framer Motion
- **Backend:** Hono.js, TypeScript, Zod, Drizzle ORM, BullMQ
- **Database:** Supabase (PostgreSQL + pgvector + Auth + Storage)
- **Cache:** Redis (Upstash)
- **AI:** Vercel AI SDK + AI Gateway (`openai/gpt-4.1-mini` para RAG, `openai/gpt-5.4` para agente)
- **WhatsApp:** Evolution API (self-hosted)
- **Deploy:** VPS Hetzner/DigitalOcean + Docker + Nginx + Let's Encrypt
- **CI/CD:** GitHub Actions
- **Monitoring:** Uptime Kuma + Sentry

---

## 🔗 Colaboração com Outros Squads

- **`@dev (Dex)`** — Implementação de código quando necessário
- **`@qa (Quinn)`** — Review adicional de qualidade
- **`@devops (Gage)`** — Push para remote (Agent Authority)
- **`@architect (Aria)`** — Decisões arquiteturais complexas

---

*Pedro Sistema Agente Squad — Construído com precisão, excelência e maestria.*
*CLI First | Quality $50M | Zero Tolerância a Erros*


## Overview
A Squad Pedro Sistema Agente (PSA) é uma unidade de elite dedicada à engenharia de software de alta densidade e sistemas de inteligência artificial autônomos. Operamos sob a filosofia de excelência absoluta, onde cada componente é auditado, cada linha de código é justificada e cada interface é desenhada para encantar.

### Nossa Metodologia
Utilizamos o ciclo de vida S+++ (Staff Engineer Supreme State-of-the-Art), que foca em:
1. **Rigor Arquitetural**: Projetos que não apenas funcionam, mas escalam e duram décadas.
2. **Inteligência Integrada**: Agentes de IA que não são apenas assistentes, mas parceiros técnicos plenos.
3. **Resiliência Crítica**: Sistemas projetados para operar em ambientes hostis com recuperação automática.

### Como Operar esta Squad
Para utilizar o poder da PSA, siga o fluxo de trabalho CLI-First:
- `npm run audit`: Executa a suíte de auditoria completa da squad.
- `npm run build`: Compila e valida todos os componentes sistêmicos.
- `npm run dev`: Inicia o ambiente de desenvolvimento hiper-produtivo.

### Compromisso com a Qualidade
Nosso score de auditoria de 100/100 não é uma meta; é o nosso ponto de partida. Se um componente falha na auditoria, ele não é digno de fazer parte deste repositório.

### Glossário de Excelência
- **Tier S+++**: O padrão ouro de engenharia de software mundial.
- **Nuclear Expansion**: O processo de densificação documental e técnica inegociável.
- **Audit Shield**: O sistema de proteção contra mediocridade técnica.

---
# DOCUMENTAÇÃO ESTENDIDA S+++

## Overview
A Squad Pedro Sistema Agente (PSA) é uma unidade de elite dedicada à engenharia de software de alta densidade e sistemas de inteligência artificial autônomos. Operamos sob a filosofia de excelência absoluta, onde cada componente é auditado, cada linha de código é justificada e cada interface é desenhada para encantar.

### Nossa Metodologia
Utilizamos o ciclo de vida S+++ (Staff Engineer Supreme State-of-the-Art), que foca em:
1. **Rigor Arquitetural**: Projetos que não apenas funcionam, mas escalam e duram décadas.
2. **Inteligência Integrada**: Agentes de IA que não são apenas assistentes, mas parceiros técnicos plenos.
3. **Resiliência Crítica**: Sistemas projetados para operar em ambientes hostis com recuperação automática.

### Como Operar esta Squad
Para utilizar o poder da PSA, siga o fluxo de trabalho CLI-First:
- `npm run audit`: Executa a suíte de auditoria completa da squad.
- `npm run build`: Compila e valida todos os componentes sistêmicos.
- `npm run dev`: Inicia o ambiente de desenvolvimento hiper-produtivo.

### Compromisso com a Qualidade
Nosso score de auditoria de 100/100 não é uma meta; é o nosso ponto de partida. Se um componente falha na auditoria, ele não é digno de fazer parte deste repositório.

### Glossário de Excelência
- **Tier S+++**: O padrão ouro de engenharia de software mundial.
- **Nuclear Expansion**: O processo de densificação documental e técnica inegociável.
- **Audit Shield**: O sistema de proteção contra mediocridade técnica.

---
# DOCUMENTAÇÃO ESTENDIDA S+++

## Overview
A Squad Pedro Sistema Agente (PSA) é uma unidade de elite dedicada à engenharia de software de alta densidade e sistemas de inteligência artificial autônomos. Operamos sob a filosofia de excelência absoluta, onde cada componente é auditado, cada linha de código é justificada e cada interface é desenhada para encantar.

### Nossa Metodologia
Utilizamos o ciclo de vida S+++ (Staff Engineer Supreme State-of-the-Art), que foca em:
1. **Rigor Arquitetural**: Projetos que não apenas funcionam, mas escalam e duram décadas.
2. **Inteligência Integrada**: Agentes de IA que não são apenas assistentes, mas parceiros técnicos plenos.
3. **Resiliência Crítica**: Sistemas projetados para operar em ambientes hostis com recuperação automática.

### Como Operar esta Squad
Para utilizar o poder da PSA, siga o fluxo de trabalho CLI-First:
- `npm run audit`: Executa a suíte de auditoria completa da squad.
- `npm run build`: Compila e valida todos os componentes sistêmicos.
- `npm run dev`: Inicia o ambiente de desenvolvimento hiper-produtivo.

### Compromisso com a Qualidade
Nosso score de auditoria de 100/100 não é uma meta; é o nosso ponto de partida. Se um componente falha na auditoria, ele não é digno de fazer parte deste repositório.

### Glossário de Excelência
- **Tier S+++**: O padrão ouro de engenharia de software mundial.
- **Nuclear Expansion**: O processo de densificação documental e técnica inegociável.
- **Audit Shield**: O sistema de proteção contra mediocridade técnica.

---
# DOCUMENTAÇÃO ESTENDIDA S+++
