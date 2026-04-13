---
id: pwb-setup-seo
agent: pwb-seo
squad: pedro-webapp
---

# Task: Setup SEO & Performance

**Agent:** pwb-seo (Rank)
**Phase:** 4 — Implementação (pós landing page)

## Purpose

Configurar SEO técnico completo, metadata API, sitemap, robots.txt, JSON-LD structured data e otimizações de Core Web Vitals para score Lighthouse SEO = 100.

## Inputs

- Landing page construída (`apps/web/app/(marketing)/page.tsx`)
- Design system com tokens de tipografia e cores
- Conteúdo da empresa (nome, descrição, keywords, URLs)

## Checklist de Execução

### 1. Metadata API (Next.js 15)
- [ ] `app/layout.tsx` — metadata base com title template
- [ ] `app/(marketing)/page.tsx` — metadata específica da home
- [ ] OG image via `app/opengraph-image.tsx` (ImageResponse)
- [ ] Twitter Card com `twitter: { card: 'summary_large_image' }`

### 2. Arquivos de Rastreamento
- [ ] `app/sitemap.ts` — sitemap dinâmico com todas as rotas públicas
- [ ] `app/robots.ts` — robots.txt com allow/disallow corretos
- [ ] Verificar sitemap indexado via Google Search Console

### 3. JSON-LD Structured Data
- [ ] Schema `Organization` no layout raiz
- [ ] Schema `WebSite` com sitelinks searchbox
- [ ] Schema `Product` ou `SoftwareApplication` se SaaS
- [ ] Schema `FAQPage` se página de FAQ existir

### 4. Core Web Vitals
- [ ] LCP < 2.5s — image prioritization, font preload
- [ ] FID < 100ms — code splitting, lazy loading
- [ ] CLS < 0.1 — reserved space para imagens e fontes
- [ ] TTFB < 600ms — Edge Runtime para páginas estáticas

### 5. Internacionalização (se aplicável)
- [ ] `hreflang` para múltiplos idiomas
- [ ] Canonical URLs configuradas

### 6. Validação Final
- [ ] Lighthouse SEO = 100 (obrigatório)
- [ ] Lighthouse Performance >= 95
- [ ] Structured data validado em schema.org validator
- [ ] Open Graph validado em opengraph.xyz

## Outputs

- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx` (metadata atualizado)
- `components/seo/json-ld.tsx`
- Lighthouse SEO report = 100/100

## Quality Gate

**BLOQUEIO:** Não avançar para deploy sem Lighthouse SEO = 100.
