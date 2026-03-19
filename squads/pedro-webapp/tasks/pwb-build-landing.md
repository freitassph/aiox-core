---
task: Build Landing Page
responsavel: "@pwb-landing"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - handoff: docs/design/HANDOFF.md
  - prd: docs/PRD.md
  - copy: textos aprovados pelo PM
Saida: |
  - landing: apps/web/app/(marketing)/page.tsx
  - components: apps/web/components/marketing/
  - og_image: apps/web/app/opengraph-image.tsx
---

# *build-landing

Construir landing page de alta conversão com Lighthouse 100 e CRO otimizado.

## Fases de Execução

### Fase 1: Setup
- Criar estrutura de rotas em `apps/web/app/(marketing)/`
- Instalar dependências de marketing (framer-motion já instalado)
- Configurar `layout.tsx` com metadata base + JsonLd

### Fase 2: Hero Section
- Headline: < 8 palavras, resultado claro
- CTA principal visível sem scroll em mobile (375px)
- Social proof imediato (avatares + número de usuários)
- Animações com `fadeInUp` — NUNCA no LCP element

### Fase 3: Seções Completas
Implementar na ordem: Hero → Problem → Solution → Features → Testimonials → Pricing → FAQ → CTA Final → Footer

### Fase 4: Performance
- Todas as imagens com `next/image`
- Hero image com `priority={true}`
- Fontes com `next/font`
- OG image via `@vercel/og` (Satori edge function)

### Fase 5: Lighthouse Audit
```bash
pnpm build && pnpm start
# Rodar Lighthouse em http://localhost:3000
# Meta: Performance 100, SEO 100, Accessibility >= 95
```

### Fase 6: Mobile QA
- Testar em 375px (iPhone SE): CTA visível, texto legível
- Testar em 768px (tablet): layout responsivo
- Testar navegação por teclado

## Critério de Conclusão
Lighthouse Performance = 100, SEO = 100, todas as seções implementadas, mobile OK.

## KPIs
| Métrica | Alvo |
|---------|------|
| Lighthouse Performance | 100 |
| Lighthouse SEO | 100 |
| LCP | < 1.8s |
| CTA click-through (estimativa) | > 8% |
