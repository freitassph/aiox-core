# Source Tree — Projeto Next.js Medical Landing (S+++ Tier)

```
{project-name}/
├── .env.local                    # Variáveis de ambiente (NUNCA commitar)
├── .env.example                  # Template de variáveis (commitar — sem valores)
├── next.config.ts                # Config Next.js: security headers, images, etc.
├── tailwind.config.ts            # ou globals.css para Tailwind v4 CSS-first
├── tsconfig.json                 # strict: true obrigatório
├── package.json
├── pnpm-lock.yaml
│
├── public/
│   ├── favicon.ico
│   ├── icon.svg                  # App icon
│   ├── og-image.jpg              # Open Graph 1200×630
│   ├── robots.txt
│   └── sitemap.xml               # Gerado por next-sitemap
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (fonts, metadata, providers)
│   │   ├── page.tsx              # Home / Landing page principal
│   │   ├── not-found.tsx         # 404 customizado com brand
│   │   ├── error.tsx             # Error boundary
│   │   ├── sobre/
│   │   │   └── page.tsx          # Sobre o médico / clínica
│   │   ├── especialidades/
│   │   │   ├── page.tsx          # Lista de especialidades
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Página de especialidade individual
│   │   ├── blog/
│   │   │   ├── page.tsx          # Lista de artigos
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Artigo individual
│   │   ├── agendar/
│   │   │   └── page.tsx          # Página dedicada de agendamento
│   │   ├── convênios/
│   │   │   └── page.tsx          # Planos aceitos
│   │   ├── privacidade/
│   │   │   └── page.tsx          # Política de privacidade (LGPD)
│   │   ├── cookies/
│   │   │   └── page.tsx          # Política de cookies
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts      # Form submission handler
│   │       ├── consent/
│   │       │   └── route.ts      # LGPD consent logging
│   │       └── revalidate/
│   │           └── route.ts      # Cache revalidation (webhook)
│   │
│   ├── components/
│   │   ├── atoms/                # Nível 1: unidades indivisíveis
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.stories.tsx
│   │   │   ├── Input/
│   │   │   ├── Badge/
│   │   │   ├── Icon/
│   │   │   ├── Avatar/
│   │   │   ├── Label/
│   │   │   ├── Heading/
│   │   │   ├── Text/
│   │   │   ├── Link/
│   │   │   ├── Alert/
│   │   │   └── Skeleton/
│   │   │
│   │   ├── molecules/            # Nível 2: combinações funcionais
│   │   │   ├── DoctorCard/
│   │   │   ├── ServiceCard/
│   │   │   ├── TestimonialCard/
│   │   │   ├── StatBlock/
│   │   │   ├── FormField/
│   │   │   ├── PhoneContact/
│   │   │   ├── WhatsAppCTA/
│   │   │   ├── CertificationBadge/
│   │   │   ├── InsuranceItem/
│   │   │   ├── NavItem/
│   │   │   └── ConsentCheckbox/
│   │   │
│   │   ├── organisms/            # Nível 3: seções completas
│   │   │   ├── NavigationHeader/
│   │   │   ├── HeroSection/
│   │   │   ├── TrustBar/
│   │   │   ├── DoctorBioSection/
│   │   │   ├── ServicesGrid/
│   │   │   ├── ProcessSteps/
│   │   │   ├── TestimonialsSection/
│   │   │   ├── BookingSection/
│   │   │   ├── FAQAccordion/
│   │   │   ├── LocationSection/
│   │   │   └── FooterComplete/
│   │   │
│   │   ├── templates/            # Nível 4: estruturas de página
│   │   │   ├── SingleDoctorLanding/
│   │   │   ├── MultiDoctorClinic/
│   │   │   ├── SpecialtyPage/
│   │   │   └── BlogPostTemplate/
│   │   │
│   │   └── providers/            # Context providers
│   │       ├── ConsentProvider.tsx    # LGPD consent context
│   │       └── AnalyticsProvider.tsx  # GA4 consent-gated
│   │
│   ├── styles/
│   │   ├── tokens.css            # Design tokens — ÚNICA fonte de verdade
│   │   └── globals.css           # Tailwind imports + resets + overrides
│   │
│   ├── lib/
│   │   ├── schema.ts             # Schema.org generators (MedicalBusiness, etc.)
│   │   ├── analytics.ts          # GA4 event helpers (tipados)
│   │   ├── consent.ts            # LGPD consent management
│   │   ├── metadata.ts           # generateMetadata helpers
│   │   ├── email.ts              # Resend email functions
│   │   └── validations.ts        # Zod schemas compartilhados
│   │
│   ├── content/                  # Dados do projeto (substituir por CMS em V2)
│   │   ├── doctor.ts             # Dados do médico: nome, CRM, bio, foto
│   │   ├── services.ts           # Serviços/especialidades oferecidos
│   │   ├── testimonials.ts       # Depoimentos aprovados (CFM-compliant)
│   │   ├── insurance.ts          # Convênios aceitos
│   │   ├── faq.ts                # Perguntas frequentes
│   │   └── blog/                 # Artigos em MDX
│   │       └── [slug].mdx
│   │
│   ├── types/                    # TypeScript types compartilhados
│   │   ├── doctor.ts
│   │   ├── service.ts
│   │   └── analytics.ts
│   │
│   └── hooks/                    # Custom React hooks
│       ├── useConsent.ts         # LGPD consent state
│       ├── useIntersectionAnim.ts # Scroll animations
│       └── useCountUp.ts         # Stat counter animation
│
├── tests/
│   ├── e2e/                      # Playwright end-to-end
│   │   ├── home.spec.ts
│   │   ├── booking-form.spec.ts
│   │   └── accessibility.spec.ts
│   └── unit/
│       └── components/
│
├── .github/
│   └── workflows/
│       └── medical-site-ci.yml   # CI/CD pipeline
│
└── lighthouse-budget.json        # Budget de performance para CI
```

## Convenções Importantes

```
IMPORTS: sempre absolutos via @/
  ✓ import { Button } from '@/components/atoms/Button'
  ✗ import { Button } from '../../components/atoms/Button'

COMPONENTES: PascalCase
  ✓ DoctorCard.tsx, HeroSection.tsx
  ✗ doctor-card.tsx, hero_section.tsx

ARQUIVOS: kebab-case (exceto componentes)
  ✓ use-consent.ts, schema-generators.ts
  ✗ useConsent.ts (hooks sem componente React)

TIPOS: sempre interface (não type) para props de componente
  ✓ interface DoctorCardProps { ... }
  ✗ type DoctorCardProps = { ... }

EXPORT: named exports para componentes (não default)
  ✓ export const DoctorCard = ...
  ✗ export default DoctorCard

CRM: variável constante em content/doctor.ts, não espalhada pelo código
  ✓ import { DOCTOR_CRM } from '@/content/doctor'
  ✗ hardcode "CRM-SP 123456" em múltiplos lugares
```
