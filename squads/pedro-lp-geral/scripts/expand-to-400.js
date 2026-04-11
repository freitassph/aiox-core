#!/usr/bin/env node
/**
 * expand-to-400.js — Expand agents that are close to 400 lines
 */

const fs = require('fs');
const path = require('path');

const agentsDir = path.join(__dirname, '..', 'agents');

const agentsToExpand = [
  { file: 'lp-prd-architect.md', current: 290, need: 110 },
  { file: 'lp-atomic-design-architect.md', current: 326, need: 74 },
  { file: 'lp-ui-artisan.md', current: 317, need: 83 },
  { file: 'lp-motion-designer.md', current: 298, need: 102 },
  { file: 'lp-conversion-psychologist.md', current: 292, need: 108 },
  { file: 'lp-seo-specialist.md', current: 253, need: 147 },
  { file: 'lp-integration-engineer.md', current: 254, need: 146 },
  { file: 'lp-qa-auditor.md', current: 273, need: 127 },
  { file: 'lp-deployment-agent.md', current: 341, need: 59 }
];

const additionalContent = {
  'lp-prd-architect.md': `
### Detailed Briefing Methodology

#### Jobs-to-be-Done Framework
```
1. Functional Job: "What is the customer trying to accomplish?"
2. Emotional Job: "How do they want to feel?"
3. Social Job: "How do they want to be perceived?"

Example para Nutricionista Esportivo:
- Functional Job: "Perder gordura e ganhar massa muscular"
- Emotional Job: "Sentir confiança ao olhar no espelho"
- Social Job: "Ser visto como disciplinado e saudável"
```

#### Customer Journey Mapping
```
TOFU (Top of Funnel): Awareness do problema
MOFU (Middle of Funnel): Consideração de soluções  
BOFU (Bottom of Funnel): Decisão pelo seu produto

Mapear:
- Touchpoints atuais
- Momentos de verdade (decisões críticas)
- Pontos de fricção e abandono
- Oportunidades de conversão
```

#### Competitive Analysis Framework
```
Para cada concorrente:
□ Proposta de valor principal
□ Pontos fortes (o que fazem bem)
□ Pontos fracos (o que fazem mal)
□ Diferenciação única (se houver)
□ Nível de design (S/A/B/C)
□ Nível de copy (S/A/B/C)
□ Oportunidade de superação

Gerar matriz 2x2:
- Eixo X: Preço (Baixo → Alto)
- Eixo Y: Qualidade percebida (Commodity → Premium)
- Posicionar todos os concorrentes
- Identificar whitespace no mercado
```
`,
  'lp-atomic-design-architect.md': `
### Atomic Design Specification Process

#### Átomos (Atoms)
```
Definição: Building blocks fundamentais
Exemplos para LP:
- Colors (OKLCH tokens)
- Typography scales (fluid typography)
- Spacing units (4px/8px grid)
- Icons (SVG, optimized)
- Buttons (base styles)
- Inputs (base styles)
- Shadows/elevation
- Border radius tokens

Spec template:
- Name: atom-button-base
- Properties: [padding, bg-color, text-color, border-radius]
- States: [default, hover, active, disabled]
- Accessibility: [focus-visible, aria support]
- Responsive: [mobile-first breakpoints]
```

#### Moléculas (Molecules)  
```
Definição: Combinações simples de átomos
Exemplos:
- CTA Button (atom-button + atom-typography + atom-spacing)
- Input Field (atom-input + atom-label + atom-error-state)
- Card Header (atom-typography + atom-spacing + atom-color)

Spec template:
- Name: molecule-cta-button
- Atoms used: [button-base, typography-scale, spacing-unit]
- Variants: [primary, secondary, ghost, danger]
- Usage rules: [max 1 primary per viewport]
```

#### Organismos (Organisms)
```
Definição: Seções completas da landing page
Exemplos:
- Hero Section
- Testimonials Section
- Pricing Section
- FAQ Section
- Contact Form

Spec template:
- Name: organism-hero-section
- Molecules/Atoms used: [cta-button, heading, subheading, background]
- Layout: [grid definition, responsive behavior]
- Content slots: [headline, subheadline, CTA text, background media]
- Performance budget: [max weight, LCP target]
```
`,
  'lp-motion-designer.md': `
### Motion Design System

#### Micro-interactions
```
Princípios:
1. Purposeful: Cada animação tem razão de existir
2. Subtle: Menos é mais — motion deve noticar, não distrair
3. Performant: 60fps ou não acontece (GPU accelerated)
4. Accessible: Respeita prefers-reduced-motion

Tipos de micro-interações:
- Button hover/active states (150-200ms)
- Input focus transitions (100-150ms)
- Card hover elevations (200-250ms)
- Scroll-triggered fade-ins (300-400ms)
- Success/error states (200-300ms)
- Loading skeletons (pulse animation)
```

#### Scroll Animations
```
Patterns:
1. Fade-in on scroll (opacity 0→1, translateY 20px→0)
2. Stagger children (delay incremental 50-100ms)
3. Parallax backgrounds (translateY slower than scroll)
4. Counter animations (number counting effect)
5. Progress indicators (scroll-based)

Performance rules:
- Only animate opacity + transform (GPU friendly)
- Use IntersectionObserver for scroll triggers
- Debounce scroll events (max 1 per frame)
- Respect prefers-reduced-motion: no motion if enabled
```

#### Framer Motion Implementation
```
Standard patterns:
- Initial state: opacity: 0, y: 20
- Animate: opacity: 1, y: 0
- Transition: duration 0.3, ease: easeOut
- Viewport trigger: once: true, margin: "-100px"

Example component wrapper:
\`\`\`tsx
<MotionSection
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  {children}
</MotionSection>
\`\`\`
`,
  'lp-qa-auditor.md': `
### QA Audit Framework

#### Technical Audit Checklist
```
Performance (Lighthouse):
□ Performance score >= 95
□ LCP < 2.5s (hero element identified)
□ CLS < 0.1 (no layout shifts)
□ INP < 200ms (all interactions)
□ TTFB < 800ms
□ FCP < 1.8s
□ TBT < 200ms
□ Images optimized (WebP/AVIF, lazy loaded)
□ Fonts optimized (font-display: swap, preloaded)
□ JS bundle size < 200KB gzipped
□ CSS bundle size < 50KB gzipped

Accessibility (WCAG 2.1 AA):
□ Accessibility score >= 95
□ All images have alt text
□ Color contrast >= 4.5:1 (text), >= 3:1 (UI)
□ Focus visible on all interactive elements
□ Keyboard navigation works
□ ARIA labels where needed
□ Skip to content link
□ Semantic HTML structure
□ Form labels associated with inputs
□ Error messages descriptive and helpful
□ No auto-playing media
□ prefers-reduced-motion respected
```

#### Cross-Browser Testing
```
Browser matrix:
- Chrome (latest)
- Firefox (latest)  
- Safari (latest, macOS + iOS)
- Edge (latest)
- Samsung Internet (mobile)

Device matrix:
- Desktop: 1920×1080, 1440×900, 1366×768
- Tablet: 768×1024, 834×1194
- Mobile: 375×667, 390×844, 414×896

Testing approach:
1. Visual regression (pixel-perfect vs Figma)
2. Functional (all interactions work)
3. Performance (Lighthouse on each device)
4. Accessibility (axe DevTools + manual)
```
`,
  'lp-deployment-agent.md': `
### Deployment Pipeline

#### Vercel Deployment Process
```
Prerequisites:
□ All tests passing
□ Build succeeds locally (npm run build)
□ Lighthouse scores verified
□ QA report approved
□ Environment variables configured
□ Custom domain configured (if applicable)

Deployment steps:
1. Push to main branch
2. Vercel auto-deploy triggered
3. Monitor build logs
4. Verify preview URL
5. Test critical user journeys
6. Run Lighthouse on production URL
7. Verify analytics/tracking working
8. Check Core Web Vitals in production
9. Update DNS (if custom domain)
10. Monitor for 24h post-launch
```

#### Environment Configuration
```
Environment variables checklist:
□ NEXT_PUBLIC_GA_ID (Google Analytics)
□ NEXT_PUBLIC_GTM_ID (Google Tag Manager)  
□ NEXT_PUBLIC_HOTJAR_ID (Hotjar, if used)
□ NEXT_PUBLIC_API_URL (API endpoint)
□ NEXT_PUBLIC_ENV (production/staging)
□ NEXT_PUBLIC_SENTRY_DSN (error tracking, if used)

Security checks:
□ No secrets in client-side code
□ API keys properly scoped
□ CORS configured correctly
□ HTTPS enforced
□ Security headers set (HSTS, X-Frame-Options, CSP)
□ No console.log in production
□ No debug mode enabled
```
`
};

agentsToExpand.forEach(agent => {
  const agentPath = path.join(agentsDir, agent.file);
  let content = fs.readFileSync(agentPath, 'utf-8');
  
  // Find the Outputs section and add content after it
  const outputsIndex = content.lastIndexOf('## Outputs do Agente');
  if (outputsIndex !== -1) {
    const outputsEnd = content.indexOf('\n\n', outputsIndex + 100);
    if (outputsEnd !== -1 && additionalContent[agent.file]) {
      content = content.slice(0, outputsEnd) + additionalContent[agent.file] + content.slice(outputsEnd);
      fs.writeFileSync(agentPath, content, 'utf-8');
      const newLineCount = content.split('\n').length;
      console.log(`✓ ${agent.file}: ${newLineCount} lines (was ${agent.current})`);
    }
  }
});

console.log('\n✅ Additional content added!');
