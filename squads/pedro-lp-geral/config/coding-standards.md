# Coding Standards — pedro-lp-geral

## TypeScript
- `strict: true` — não negociável
- Sem `any` — use tipos apropriados ou `unknown` com type guards
- Interfaces para todas as props de componentes
- Tipos explícitos em funções públicas

## React / Next.js
- Server Components por padrão — `'use client'` apenas quando necessário
- `'use client'` o mais abaixo possível na árvore de componentes
- Props imutáveis — sem mutação direta
- Async/await para dados em Server Components

## Imports
- Absolutos com `@/` — nunca relativos `../../../`
- Ordem: React → Next.js → libs externas → components → utils → types → CSS

## Naming
- Componentes: PascalCase
- Arquivos: kebab-case
- Hooks: prefixo `use`
- Constantes: SCREAMING_SNAKE_CASE
- Interfaces: PascalCase sem prefixo `I`

## CSS / Tailwind
- Design tokens via CSS custom properties — nunca hardcoded
- Classes Tailwind para layout e spacing
- CSS Modules apenas quando necessário para animações complexas
- `cn()` helper (clsx + tailwind-merge) para classes condicionais

## Git
- Commits: Conventional Commits (feat/fix/perf/chore/docs)
- Branches: `feature/` `fix/` `chore/`
- PRs: descrição clara com screenshots quando envolve UI

## Performance
- Lazy import para componentes pesados (não above the fold)
- `priority` em next/image apenas no hero (1 imagem por página)
- Sem dependências desnecessárias — verificar bundle size
