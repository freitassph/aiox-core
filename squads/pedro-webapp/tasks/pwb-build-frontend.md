---
task: Build Frontend
responsavel: "@pwb-frontend"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - handoff: docs/design/HANDOFF.md
  - api_contract: docs/api-contract.md
  - design_tokens: apps/web/styles/design-tokens.css
Saida: |
  - webapp: apps/web/ (completo)
---

# *build-frontend

## Purpose
Implementar o frontend do WebApp utilizando tecnologias modernas para garantir performance, acessibilidade e uma experiência de usuário premium.

## Pre-conditions
- Handoff de design concluído pelo @pwb-ux-designer.
- Contrato de API definido e validado pelo @pwb-backend.

## Checklist
- [ ] Setup do Next.js 15 e Shadcn/ui concluído
- [ ] Layout base e Providers configurados
- [ ] Componentes implementados conforme HANDOFF.md
- [ ] Formulários validados com Zod e React Hook Form
- [ ] Performance Lighthouse validada (Score >= 95)
- [ ] Responsividade e Dark Mode funcionais

## Fases de Execução

### Fase 1: Setup
```bash
# Inicializar Next.js 15
pnpm create next-app@latest apps/web --typescript --tailwind --eslint --app
cd apps/web
pnpm dlx shadcn@latest init
pnpm add framer-motion @tanstack/react-query zustand react-hook-form @hookform/resolvers zod lucide-react next-themes
```

### Fase 2: Layout Base e Providers
- `app/layout.tsx`: fontes Geist, ThemeProvider, QueryProvider, PostHogProvider
- `styles/globals.css`: importar design-tokens.css, configurar dark mode
- `tailwind.config.ts`: estender com tokens

### Fase 3: Rotas por Tipo de Projeto
- LANDING: `app/(marketing)/` com page.tsx + pricing + about + blog
- DASHBOARD: `app/(app)/` com layout protegido + sidebar + header
- SAAS: ambas as estruturas + `app/(auth)/`

### Fase 4: Componentes por HANDOFF
- Implementar cada componente especificado no HANDOFF.md
- Incluir loading states (Skeleton) em todos os componentes async
- Error boundaries em route segments
- Empty states visuais

### Fase 5: Forms e Validação
- React Hook Form + Zod em todos os formulários
- Validação client-side E server-side (não confiar apenas no frontend)
- Feedback visual de erro em cada campo

### Fase 6: Performance
- Hero image com `priority={true}`
- Dynamic imports para charts, editors, componentes pesados
- `next/image` em todas as imagens (nunca `<img>`)
- `next/font` para fontes (nunca link externo)

### Fase 7: Quality Gate
```bash
pnpm lint        # Zero warnings
pnpm typecheck   # Zero erros
pnpm test --run  # Testes passando
pnpm build       # Build sem erros
# Lighthouse manualmente: >= 95 performance
```

## Critério de Conclusão
Build passando, Lighthouse >= 95, mobile responsivo, dark mode funcionando, todos os estados (loading, empty, error) implementados.

## KPIs
| Métrica | Alvo |
|---------|------|
| Lighthouse Performance | >= 95 |
| Lighthouse Accessibility | >= 95 |
| TypeScript `any` | 0 |
| `pnpm build` sem erros | 100% |
