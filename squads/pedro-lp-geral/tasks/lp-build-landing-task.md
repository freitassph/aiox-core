---
task: lp-build-landing
responsavel: "@lp-ui-artisan"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

## Purpose
Describe the purpose and goal of this task.

---

## Entrada
```yaml
entrada:
  - campo: input_name
    tipo: string
    obrigatorio: true
    descricao: "Description of input"
```

---

## Saida
```yaml
saida:
  - deliverable: output_name
    formato: markdown
    descricao: "Description of output"
```

---

## Checklist
```
□ Item 1
□ Item 2
□ Item 3
□ Item 4
□ Item 5
```

---

## Pre-conditions
```
- Condition 1 that must be met
- Condition 2 that must be met
```



# Task: Build Landing Page — Implementação Next.js S+++

## Objetivo
Implementar a landing page completa em Next.js com todos os componentes especificados, copy aprovada e design tokens aplicados. Pixel-perfect conforme specs.

## Agente Responsável
`lp-ui-artisan` (Mateus Ferreira)
`lp-motion-designer` (Lyra Kim) — camada de motion

## Inputs Necessários
- `styles/design-tokens.css`
- `component-specs.md`
- `sections-copy.md`
- `hero-copy.md`
- `seo-strategy.md` (on-page spec)
- `motion-profile.md`

## Processo

### FASE 1 — Setup do Projeto
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
npm install framer-motion
# Copiar design-tokens.css para src/styles/
# Configurar tailwind.config.ts com mapeamento de tokens
# Configurar next.config.ts com otimizações
```

### FASE 2 — Estrutura de Arquivos
```
src/
├── app/
│   ├── layout.tsx        # metadados + fontes + tokens
│   ├── page.tsx          # composição das seções
│   └── globals.css       # @import design-tokens.css
├── components/
│   ├── atoms/            # Button, Input, Badge, Icon, etc.
│   ├── molecules/        # FormField, TestimonialCard, FeatureCard, etc.
│   ├── organisms/        # HeroSection, FeaturesSection, etc.
│   └── motion/           # AnimatedSection, CounterNumber, StaggerChildren
├── styles/
│   └── design-tokens.css
└── lib/
    └── utils.ts          # cn() helper
```

### FASE 3 — Implementação (ordem obrigatória)
```
1. Átomos (Button, Typography, Input, Badge, Icon)
2. Motion components (AnimatedSection, CounterNumber, StaggerChildren)
3. Moléculas (TestimonialCard, FeatureCard, StatBlock, FAQItem)
4. Header + Footer
5. Seções por ordem: Hero → Problem → Solution → Features →
   Testimonials → Stats → Process → Pricing/Offer → FAQ → CTA Final
```

### FASE 4 — Performance Pass
```
□ next/image em todas as imagens (width + height + priority no hero)
□ next/font para todas as fontes (zero layout shift)
□ Dynamic import para componentes pesados (não no viewport inicial)
□ Metadata object completo (title, description, og:*, twitter:*)
□ sitemap.ts e robots.ts gerados
□ Schema JSON-LD inserido no layout.tsx
□ Viewport meta configurado
□ manifest.json (PWA básico)
```

### FASE 5 — Motion Integration (com lp-motion-designer)
```
□ AnimatedSection aplicado em todas as seções
□ Stagger em lists/grids
□ Counter animation em estatísticas
□ Parallax no hero (se LUXURY/BOLD)
□ Hover states em cards e botões
□ prefers-reduced-motion testado
```

## Quality Gate
Antes de entregar para lp-qa-auditor:
```
□ `npm run build` sem erros
□ `npm run typecheck` limpo
□ `npm run lint` limpo
□ Lighthouse mobile >= 90 (mínimo para avançar para QA)
□ Todos os CTAs levam ao destino correto
□ Mobile 375px: layout perfeito, CTA acessível
```

## Output Esperado
- Site implementado completo em Next.js
- `COMPONENTS.md` — Documentação dos componentes criados
- `PERFORMANCE.md` — Lighthouse scores pré-QA
