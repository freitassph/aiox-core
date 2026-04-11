---
task: Build Frontend
responsavel: "@psa-frontend"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - design_handoff: docs/design/HANDOFF.md
  - api_contract: docs/api-contract.md
  - prd: docs/PRD.md
Saida: |
  - nextjs_app: apps/web/ (completo e funcional)
  - lighthouse_report: docs/lighthouse-report.md
---

# *build-frontend

Implementa o frontend Next.js 15 pixel-perfect, Server Components first, Lighthouse 100.

## Fases de Execução

### Fase 1: Project Setup
**Ações:**
- Inicializar Next.js 15 com TypeScript, Tailwind, App Router em `apps/web/`
- Configurar `tsconfig.json` (strict: true, paths com @/)
- Instalar shadcn/ui: `npx shadcn@latest init`
- Instalar Geist font via next/font, configurar CSS variables
- Configurar ESLint + Prettier
- Implementar design tokens do HANDOFF.md em `globals.css`
- Configurar tailwind.config.ts com tokens

**Critério de conclusão:** `pnpm dev` inicia, tokens aplicados, `pnpm typecheck` limpo

### Fase 2: Auth Layout
**Ações:**
- Criar `app/(auth)/layout.tsx` — layout sem sidebar, centrado
- Criar `app/(auth)/sign-in/page.tsx` — Server Component com formulário Client
- Criar `app/(auth)/sign-up/page.tsx`
- Implementar Supabase Auth no browser: `@supabase/ssr`
- Redirect automático para /dashboard se autenticado

**Critério de conclusão:** Login funciona, redirect correto, formulário valida com Zod

### Fase 3: Dashboard Layout
**Ações:**
- Criar `app/(dashboard)/layout.tsx` — Server Layout com auth check
- Criar sidebar com navegação (Server Component onde possível)
- Criar header com user menu, notificações
- Implementar mobile layout com bottom navigation
- Implementar Suspense + Skeleton em toda seção com dados

**Critério de conclusão:** Layout responsivo, mobile e desktop, skeleton em loading states

### Fase 4: Feature Pages
**Ações:**
- Implementar cada página do PRD em ordem de prioridade P0 → P1
- Padrão por página: Server Component (data fetch) → Client Component (interatividade)
- React Query para mutations e refetch automático
- Zustand store para UI state (sidebar, modal state)

**Critério de conclusão:** Todas as páginas P0 funcionais e responsivas

### Fase 5: Chat Interface (Agente)
**Ações:**
- Implementar interface de chat web usando Vercel AI SDK `useChat`
- Configurar `DefaultChatTransport` apontando para `/api/chat`
- Renderizar mensagens com AI Elements `<Message>` (markdown, streaming)
- Skeleton durante loading, error state com retry
- Auto-scroll para última mensagem

**Critério de conclusão:** Chat funciona com streaming, markdown renderizado, mobile-friendly

### Fase 6: Animation Pass
**Ações:**
- Adicionar Framer Motion em todos os componentes interativos conforme motion.md
- Page transitions: layout animation entre rotas
- Component animations: cards hover, modal entrada/saída, toast notifications
- Skeleton shimmer animado

**Critério de conclusão:** Animações suaves 60fps, sem layout shift, spring physics nos cards

### Fase 7: Performance + Accessibility
**Ações:**
- Executar Lighthouse: corrigir até Perf >= 95, Acc = 100, Best Practices = 100, SEO = 100
- axe-core: corrigir todos os issues de acessibilidade críticos
- Testar navegação por teclado em todos os formulários e modais
- Verificar: zero imagens sem alt, todos os forms com labels, focus visível

**Critério de conclusão:** Lighthouse report documentado, todos os scores >= 95

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Lighthouse Performance | >= 95 | Lighthouse CLI |
| Lighthouse Accessibility | 100 | Lighthouse CLI |
| LCP | < 2.5s | Core Web Vitals |
| CLS | < 0.1 | Core Web Vitals |
| TypeScript errors | 0 | pnpm typecheck |
| `any` usage | 0 | ESLint |


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
