# Source Tree — Estrutura de Projeto Padrão

```
[nome-do-projeto]/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: fonts, metadata, tokens, Schema JSON-LD
│   │   ├── page.tsx             # Landing page: composição de seções
│   │   ├── sitemap.ts           # Sitemap automático
│   │   ├── robots.ts            # Robots.txt
│   │   └── globals.css          # @import design-tokens + Tailwind directives
│   │
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── icon.tsx
│   │   │   └── typography.tsx
│   │   │
│   │   ├── molecules/
│   │   │   ├── testimonial-card.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── stat-block.tsx
│   │   │   ├── faq-item.tsx
│   │   │   ├── pricing-card.tsx
│   │   │   └── form-field.tsx
│   │   │
│   │   ├── organisms/
│   │   │   ├── header.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── problem-section.tsx
│   │   │   ├── solution-section.tsx
│   │   │   ├── features-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── stats-section.tsx
│   │   │   ├── process-section.tsx
│   │   │   ├── pricing-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   ├── cta-section.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   └── motion/
│   │       ├── animated-section.tsx
│   │       ├── counter-number.tsx
│   │       ├── stagger-children.tsx
│   │       └── parallax-section.tsx
│   │
│   ├── styles/
│   │   └── design-tokens.css    # Gerado por lp-prestige-design-system
│   │
│   └── lib/
│       ├── utils.ts             # cn() helper + formatadores
│       └── schema.ts            # JSON-LD schema builders
│
├── public/
│   ├── images/                  # Imagens estáticas
│   ├── videos/                  # Vídeos (se houver)
│   └── fonts/                   # Fontes auto-hospedadas (se aplicável)
│
├── next.config.ts
├── tailwind.config.ts           # Tokens mapeados
├── tsconfig.json                # strict: true, paths @/*
├── .env.local                   # Variáveis locais (no .gitignore)
├── .env.example                 # Template de variáveis (commitado)
└── package.json
```
