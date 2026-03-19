# Coding Standards — Medical Landing Squad

> Padrões de código específicos para projetos de landing page médica.
> Stack: Next.js 15+ App Router · TypeScript 5 · Tailwind CSS v4 · Framer Motion 12

---

## 1. TypeScript — Regras Absolutas

### Strict mode obrigatório

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

### Proibições

- ❌ `any` — Use `unknown` + type guard, ou infer o tipo correto
- ❌ `as unknown as Type` sem justificativa no comentário
- ❌ `!` non-null assertion sem verificação prévia
- ❌ `// @ts-ignore` — Use `// @ts-expect-error` com comentário explicativo

### Padrões obrigatórios

```typescript
// ✅ Props de componente sempre tipadas
interface DoctorCardProps {
  name: string;
  crm: string;
  specialty: string;
  photo?: string;
  className?: string;
}

// ✅ Retorno explícito em funções públicas
export function formatCRM(crm: string, uf: string): string {
  return `CRM-${uf.toUpperCase()} ${crm}`;
}

// ✅ Generics quando necessário
type ServerActionResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };
```

---

## 2. Componentes React — Padrões

### Server vs Client Components

```typescript
// ✅ Server Component (padrão) — sem 'use client'
// src/components/organisms/DoctorBioSection.tsx
import { CRMBadge } from '@/components/atoms/CRMBadge';

export function DoctorBioSection({ doctor }: DoctorBioSectionProps) {
  return <section aria-labelledby="bio-heading">...</section>;
}

// ✅ Client Component — apenas quando necessário (interatividade, browser APIs)
'use client';
// src/components/molecules/WhatsAppButton.tsx
// Motivo: tracking de clique no WhatsApp (GA4 event) requer browser API
```

### Regra: Push 'use client' para baixo

```
❌ Errado: 'use client' no DoctorBioSection inteiro
✅ Correto: 'use client' apenas no WhatsAppTrackingButton interno
```

### JSDoc obrigatório em componentes públicos

```typescript
/**
 * CRM Badge — Exibe o CRM do médico conforme CFM 2.336/2023
 * @param crm - Número do CRM sem formatação (ex: "123456")
 * @param uf - Unidade federativa (ex: "SP")
 * @param variant - Aparência do badge (default | compact | footer)
 * @example <CRMBadge crm="123456" uf="SP" />
 */
export function CRMBadge({ crm, uf, variant = 'default' }: CRMBadgeProps) {}
```

---

## 3. Estrutura de Arquivos — Atomic Design

```
src/
├── components/
│   ├── atoms/           # Elementos indivisíveis
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.stories.tsx  (Storybook, se ativo)
│   │   │   └── index.ts            # re-export limpo
│   │   └── CRMBadge/
│   ├── molecules/       # Combinações de átomos
│   │   └── DoctorCard/
│   ├── organisms/       # Seções completas
│   │   └── HeroSection/
│   └── templates/       # Layout sem dados reais
│       └── SingleDoctorLanding/
├── app/                 # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── (landing)/
│       └── [slug]/
│           └── page.tsx
├── styles/
│   ├── tokens.css       # CSS Custom Properties — FONTE DA VERDADE
│   └── globals.css      # Base styles + @import tokens
└── lib/
    ├── validations/     # Schemas Zod
    ├── actions/         # Server Actions
    └── utils/           # Utilitários puros
```

### Convenções de nomenclatura

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes | PascalCase | `DoctorCard`, `HeroSection` |
| Hooks | `use` prefix | `useWhatsAppTracking` |
| Arquivos componente | PascalCase | `DoctorCard.tsx` |
| Outros arquivos | kebab-case | `format-crm.ts` |
| Constantes globais | SCREAMING_SNAKE_CASE | `CFM_DISCLAIMER_TEXT` |
| CSS variables | `--kebab-case` | `--color-brand-500` |
| Tailwind classes (custom) | kebab-case | `text-brand-primary` |

---

## 4. CSS e Design Tokens

### Regra crítica: Zero hardcode de valores

```tsx
// ❌ Proibido — hardcode
<div style={{ color: '#0d9488', fontSize: '18px' }}>

// ❌ Proibido — valor arbitrário sem token
<div className="text-[#0d9488] text-[18px]">

// ✅ Correto — design tokens via CSS variable
<div className="text-brand-primary text-lg">

// ✅ Correto — inline apenas com token
<div style={{ color: 'var(--color-brand-500)' }}>
```

### Tailwind v4 — CSS-first config

```css
/* tailwind.config.css (NÃO .js/.ts) */
@import "tailwindcss";

@theme {
  --color-brand-primary: var(--color-brand-500);
  --color-depth-page: var(--color-depth-900);
  --font-display: var(--font-fraunces);
  --font-body: var(--font-inter);
}
```

### Ordem de classes Tailwind (prettier-plugin-tailwindcss obrigatório)

```tsx
// ✅ Ordem: layout → spacing → typography → colors → effects → responsive/state
<button className="
  flex items-center justify-center
  px-6 py-3
  text-base font-semibold
  bg-brand-primary text-white
  rounded-lg shadow-md
  transition-all duration-300
  hover:bg-brand-hover hover:shadow-lg
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary
  disabled:opacity-50 disabled:cursor-not-allowed
">
```

---

## 5. Acessibilidade — Obrigatório (WCAG 2.1 AA)

### Padrões de implementação

```tsx
// ✅ Imagens sempre com alt descritivo
<Image
  src={doctor.photo}
  alt={`Foto profissional do ${doctor.name}, ${doctor.specialty}`}
  // alt="" apenas para imagens puramente decorativas
/>

// ✅ Botões com texto ou aria-label
<button aria-label="Agendar consulta via WhatsApp">
  <WhatsAppIcon aria-hidden="true" />
</button>

// ✅ Formulários com labels associados
<label htmlFor="patient-name">Seu nome *</label>
<input id="patient-name" name="name" required aria-required="true" />

// ✅ Links com contexto semântico
<a href="/consulta">Agendar consulta</a>
// ❌ nunca: <a href="/consulta">Clique aqui</a>

// ✅ Headings hierárquicos — H1 único por página
// H1 → H2 → H3, sem pular níveis

// ✅ Focus visible sempre presente
// Nunca: outline: none sem replacement
// Sempre: :focus-visible com ring visível
```

### Contraste mínimo

| Combinação | Contraste mínimo | Target |
|-----------|-----------------|--------|
| Texto normal | 4.5:1 | WCAG AA |
| Texto grande (18px bold / 24px) | 3:1 | WCAG AA |
| Componentes UI (borders, icons) | 3:1 | WCAG AA |
| CRM badge | 4.5:1 | CFM obrigatório |

---

## 6. Compliance CFM/LGPD — Padrões de Código

### CRM Badge — Implementação

```tsx
// src/components/atoms/CRMBadge/CRMBadge.tsx
// OBRIGATÓRIO em Hero, Sobre e Footer — CFM 2.336/2023
export function CRMBadge({ crm, uf }: { crm: string; uf: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-sm
                 text-neutral-200 bg-depth-800 border border-brand-300/30
                 rounded-full px-3 py-1"
      aria-label={`Número de registro médico: CRM-${uf} ${crm}`}
    >
      <span aria-hidden="true">CRM-{uf}</span>
      <span className="font-medium">{crm}</span>
    </span>
  );
}
```

### Formulário de Contato — Consentimento LGPD

```tsx
// OBRIGATÓRIO em todo formulário que coleta dados pessoais/saúde
<div className="flex items-start gap-3">
  <input
    type="checkbox"
    id="lgpd-consent"
    name="lgpdConsent"
    required
    // NUNCA: defaultChecked={true} — viola LGPD Art. 11
    className="mt-1 h-5 w-5 rounded border-neutral-400
               accent-brand-primary cursor-pointer"
    aria-required="true"
    aria-describedby="lgpd-consent-text"
  />
  <label htmlFor="lgpd-consent" id="lgpd-consent-text"
         className="text-sm text-neutral-400">
    Concordo com a{' '}
    <a href="/privacidade" className="text-brand-400 underline">
      Política de Privacidade
    </a>{' '}
    e autorizo o contato para agendamento. Seus dados são tratados conforme
    a LGPD (Lei 13.709/2018).
  </label>
</div>
```

### Schema.org Physician — JSON-LD seguro

```tsx
// src/app/layout.tsx ou page.tsx — Server Component
// Seguro: JSON.stringify de objeto controlado (não de input do usuário)
// Nunca use dangerouslySetInnerHTML com conteúdo dinâmico do usuário
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  "name": doctor.name,          // vem do CMS/DB, não do usuário final
  "medicalSpecialty": doctor.specialtySchemaOrg,
  // ... ver medical-seo-specialist.md para schema completo
};

return (
  <script
    type="application/ld+json"
    // Seguro: dados sanitizados do servidor, não do visitante
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
  />
);
```

---

## 7. Performance — Regras

### Imagens

```tsx
// ✅ next/image sempre para fotos do médico e clínica
import Image from 'next/image';

<Image
  src={doctor.photo}
  alt={`Dr. ${doctor.name}`}
  width={640}
  height={853}       // ratio 3:4 para retratos médicos
  priority           // LCP: apenas para imagem acima do fold
  className="object-cover object-top"
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}
/>
// Fotos abaixo do fold: omitir priority (lazy por padrão no next/image)
```

### Fontes — next/font obrigatório

```typescript
// src/app/layout.tsx — evita FOUT e garante zero layout shift
import { Fraunces, Plus_Jakarta_Sans, Inter } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz', 'WONK', 'SOFT'],
});
// Aplicar variáveis como className no <html>
```

### Server Actions para formulários

```typescript
// src/lib/actions/contact.ts
'use server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^\+?55\d{10,11}$/),
  message: z.string().max(500).optional(),
  lgpdConsent: z.literal(true, {
    errorMap: () => ({ message: 'Consentimento é obrigatório' }),
  }),
});

export async function submitContact(
  formData: FormData
): Promise<ServerActionResult<void>> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message };
  }

  // Envio via Resend ou integração WhatsApp
  return { success: true, data: undefined };
}
```

---

## 8. Testes — Cobertura Mínima

| Área | Cobertura mínima | Framework |
|------|-----------------|-----------|
| Server Actions (formulários) | 100% | Jest + Testing Library |
| Componentes críticos (CRM Badge, forms) | 90% | Testing Library |
| Integração WhatsApp / GA4 | Smoke tests | Jest |
| Acessibilidade | axe-core automático | Playwright |
| Compliance CFM (copy) | Manual + cfm-compliance-sentinel | — |
| Performance | Lighthouse CI ≥ 90 | Playwright |
| Cross-browser | Chrome/Safari/Firefox/Mobile | Playwright |

### Testes de acessibilidade automáticos

```typescript
// tests/a11y/landing.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('landing page passes WCAG 2.1 AA', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
```

---

## 9. Imports — Sempre Absolutos

```typescript
// ✅ Correto — alias @/
import { Button } from '@/components/atoms/Button';
import { DoctorCard } from '@/components/molecules/DoctorCard';
import { submitContact } from '@/lib/actions/contact';
import { formatCRM } from '@/lib/utils/format-crm';

// ❌ Proibido — relativo
import { Button } from '../../../components/atoms/Button';
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

---

## 10. Quality Gates (pre-commit obrigatório)

```bash
# .husky/pre-commit
npm run lint       # ESLint + Tailwind class sort
npm run typecheck  # tsc --noEmit
npm run test       # Jest
npm run build      # Garante zero erros de build
```

```json
// package.json scripts
{
  "lint": "next lint && prettier --check .",
  "typecheck": "tsc --noEmit",
  "test": "jest --passWithNoTests",
  "build": "next build",
  "quality": "npm run lint && npm run typecheck && npm test && npm run build"
}
```

---

*Coding Standards v2.0 — Medical Landing Squad*
*Stack: Next.js 15+ · TypeScript 5 · Tailwind v4 · Framer Motion 12*
