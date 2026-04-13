# Pedro WebApp Squad

**Squad elite para construção de qualquer webapp comercial de alta performance.**
Design nível Apple/Ferrari. Backend bulletproof. Deploy automático em VPS. Qualidade Tier S+++.

---

## 📋 Overview (Visão Geral)

O **Pedro WebApp Squad** é uma unidade de engenharia de elite especializada no ciclo completo de produtos digitais modernos. Focado em performance extrema, estética premium e arquitetura resiliente, o squad utiliza as tecnologias mais avançadas do ecossistema Next.js e Supabase para entregar soluções prontas para escala global.

---

## 🏛️ Filosofia e Constituição

Este squad opera sob os princípios da **AIOX Constitution**:

1.  **CLI First**: Toda funcionalidade deve ser operável via CLI. Dashboards são para observação.
2.  **Qualidade Inegociável**: Build, Lint, Typecheck e Auditoria devem estar sempre em 100/100.
3.  **Story-Driven Development**: Todo progresso é rastreado via stories e tasks atômicas.
4.  **No Invention**: Requisitos derivam de fatos técnicos e PRDs, não de suposições.
5.  **Aesthetics of Excellence**: Interfaces que "wowed" no primeiro segundo.

---

## 📁 Estrutura de Diretórios (Directory Structure)

A organização segue o padrão mono-repo funcional para garantir isolamento e escalabilidade:

```text
pedro-webapp/
├── agents/             # Definições de agentes (Markdown >400 linhas)
│   ├── pwb-maestro.md  # Orquestrador central
│   ├── pwb-architect.md# Arquiteto de sistemas
│   └── ...             # Outros 15 agentes especializados
├── tasks/              # Definições de tasks atômicas (Purpose/Checklist)
│   ├── pwb-design-system.md
│   ├── pwb-setup-auth.md
│   └── ...             # 13 tasks fundamentais
├── workflows/          # Orquestração de processos (YAML)
│   ├── full-webapp-build.yaml
│   ├── landing-build.yaml
│   ├── saas-build.yaml
│   └── audit-cycle.yaml
├── scripts/            # Suíte de auditoria e automação CI
│   ├── quality-gate-runner.js
│   ├── agent-line-counter.js
│   └── validate-squad.js
├── docs/               # Documentação técnica e de negócio
│   ├── architecture.md
│   ├── PRD.md
│   └── audit-reports/  # Histórico de qualidade
├── squad.yaml          # Manifesto central do squad
├── package.json        # Comandos de auditoria e dependências
└── README.md           # Este guia de excelência
```

---

## 🛠️ Comandos CLI do Squad (CLI Commands)

Opere o squad diretamente via terminal para máxima eficiência:

### Comandos de Auditoria (Audit & Quality)
```bash
# Executa a auditoria completa (Score 100/100 obrigatório)
npm run audit

# Valida apenas a estrutura do esquema e metadados
npm run validate

# Conta linhas substantivas e verifica seções dos agentes
npm run count-lines
```

### Comandos de Operação (Agent Commands)
Utilize os prefixos para invocar agentes específicos:

```text
@pwb-maestro *orchestrate-project --brief "..."
@pwb-pm *gather-requirements
@pwb-ux-designer *design-system
@pwb-frontend *build-frontend
@pwb-backend *build-backend
@pwb-auditor *audit-system
```

---

## 👥 Time de Elite (17 Agentes)

Cada agente possui mais de 400 linhas de protocolos, glossários e manuais de crises.

| Agente | Persona | Especialidade |
| :--- | :--- | :--- |
| `pwb-maestro` | Maestro | Orquestrador e Classificador de Projetos |
| `pwb-architect` | Aria | Arquitetura, ADRs e Design de Sistemas |
| `pwb-pm` | Morgan | PRD, Personas JTBD e Roadmap |
| `pwb-ux-designer` | Nova | Design System oklch e Motion Spec |
| `pwb-frontend` | Pixel | Next.js 15 e Performance Core Web Vitals |
| `pwb-landing` | Convert | Landing Pages de Alta Conversão e CRO |
| `pwb-seo` | Rank | SEO Técnico e OG Image Automation |
| `pwb-backend` | Forge | Hono.js, Clean Architecture e RBAC |
| `pwb-data-engineer` | Atlas | PostgreSQL, RLS e Drizzle ORM |
| `pwb-auth` | Shield | Clerk/Supabase Auth e Session Security |
| `pwb-billing` | Revenue | Stripe Subscriptions e Feature Gating |
| `pwb-email` | Inbox | Resend + React Email e Fila BullMQ |
| `pwb-analytics` | Lens | PostHog, Feature Flags e Sentry |
| `pwb-devops` | Deploy | VPS, Docker, CI/CD e Monitoramento |
| `pwb-auditor` | Sentinel | Auditoria de Segurança, Código e CRO |
| `pwb-qa` | Verify | Testes E2E (Playwright) e Load Testing |
| `pwb-doc-writer` | Scribe | Documentação Técnica e Runbooks |

---

## 🚀 Workflows de Performance

### 1. `full-webapp-build`
Pipeline ponta-a-ponta para SaaS complexos. Ativa 15+ sub-tasks em sequência lógica para garantir que o backend sustente a estética da interface.

### 2. `landing-build` (Blitz Build)
Foco em velocidade e conversão. Entrega uma página com Lighthouse 100 e SEO perfeito em até 48h.

### 3. `saas-build`
Ideal para injetar Billing e Auth em MVPs que precisam monetizar imediatamente.

---

## 💎 Padrões de Qualidade (KPIs)

| Métrica | Alvo | Ferramenta |
| :--- | :--- | :--- |
| **Audit Score** | 100/100 | `npm run audit` |
| **Lighthouse Perf** | >= 95 | Google Lighthouse |
| **Lighthouse SEO** | 100 | Google Lighthouse |
| **Test Coverage** | > 80% | Vitest / Playwright |
| **API Latency (p95)** | < 200ms | Sentry / Hono |
| **Security Issues** | 0 | pwb-auditor |

---

## 💻 Tech Stack Recomendada

- **Frontend**: Next.js 15, Tailwind CSS 4, shadcn/ui.
- **Backend**: Hono.js, Hono RPC, Drizzle ORM.
- **Data**: Supabase, Redis (Upstash).
- **Security**: Clerk, RLS Nativo, Rate Limiting.
- **Ops**: VPS Hetzner, Docker Compose, GitHub Actions.

---

*© 2026 Pedro WebApp Squad — Excellence in Software Craftsmanship.*
*CLI First | Tier S+++ | Audit Certified*
