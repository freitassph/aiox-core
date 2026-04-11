---
task: medical-design-tokens-task
responsavel: "@medical-design-system"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

# Task: Medical Design Tokens — Clinical Luxury System

## purpose
Generate a complete, project-specific design token system based on the Clinical Luxury design system, customized for the medical specialty and brand identity of the client. The output is a production-ready tokens.css file and Tailwind v4 configuration.

## entrada
- Briefing medico completo (output de medical-briefing-task)
- Especialidade medica do projeto
- Fotos e identidade visual existente do cliente
- Preferencia de tonalidade (sobrio vs acolhedor)
- Publico-alvo definido (faixa etaria e perfil)

## saida
- Arquivo /styles/tokens.css com todos os design tokens
- Configuracao Tailwind v4 em /app/globals.css
- Preview visual da paleta de cores
- Relatorio de audit de contraste WCAG 2.1 AA

## checklist
- [ ] tokens.css gerado com todos os tokens necessarios
- [ ] Cores brand personalizadas para a especialidade medica
- [ ] Nenhuma cor hardcodada fora do tokens.css
- [ ] Contraste verificado: texto/fundo >= 4.5:1 em todas as combinacoes
- [ ] Contraste de foco >= 3:1 (WCAG 2.1 AA)
- [ ] Dark section tokens funcionando
- [ ] Reduced motion implementado
- [ ] Tailwind v4 mapeado corretamente
- [ ] Revisado e aprovado por medical-ui-artisan

## pre-conditions
- medical-briefing-task concluida e aprovada
- Especialidade medica e publico-alvo definidos
- Identidade visual ou referenciais de marca coletados do cliente

## Objetivo
Gerar o sistema completo de design tokens do projeto, personalizado para a marca médica específica, usando o design system "Clinical Luxury" como base. Output: arquivo `styles/tokens.css` pronto para implementação.

## Agente Responsável
`medical-design-system` (Valentina Cruz) com input de `medical-prd-architect` (Camila Santos)

## Inputs Necessários
- Briefing médico completo (output de `medical-briefing-task`)
- Especialidade médica do projeto
- Fotos e identidade visual existente (se houver)
- Preferência de tonalidade (mais sóbrio ↔ mais acolhedor)
- Público-alvo (adultos jovens, adultos 40+, idosos, família)

---

## Fase 1: Diagnóstico de Identidade Visual

### 1.1 Entrevista de Identidade
Coletar com o médico/cliente:
```
□ Existe logo? → Sim: extrair paleta base do logo
                  Não: definir paleta do zero pela especialidade
□ Cores que representam a especialidade na mente do paciente:
  Cardiologia → vermelho/rosa (coração) → evitar, usar azul+vermelho sutil
  Neurologia → azul/cinza → profundidade, sofisticação
  Pediatria → cores vibrantes, acolhedoras → azul suave + coral
  Oncologia → roxo/âmbar → esperança, não morte → tons quentes
  Dermatologia → pêssego/nude + verde → pele, natureza
  Ortopedia → azul steel + cinza → estrutura, força
  Ginecologia → rosa + teal → feminino + profissional
  Endocrinologia → azul + dourado → equilíbrio, precisão
□ Adjetivos da marca (escolher 3): [sóbrio, acolhedor, tecnológico,
  humano, exclusivo, acessível, especializado, moderno, clássico]
□ Sites médicos referência que o cliente admira
```

### 1.2 Seleção de Paleta Base
Com base no diagnóstico, personalizar os tokens base do Clinical Luxury:

```css
/* EXEMPLO: Cardiologista especializado, público 45+, tom sóbrio-acolhedor */
/* PRIMARY: Mantém teal-600 como padrão (saúde/confiança universal) */
--color-brand-primary: oklch(46% 0.12 193);     /* teal-600 padrão */

/* EXEMPLO: Dermatologista estética, público 25-40, tom luxo-moderno */
/* PRIMARY: Adaptar para rose-gold + sage */
--color-brand-primary: oklch(52% 0.09 10);      /* rose-sophisticated */
--color-brand-accent: oklch(50% 0.10 153);      /* living sage */

/* REGRA: Nunca usar paleta completamente diferente do Clinical Luxury base
   Apenas ajustar as 3-4 cores primárias. Neutros e semânticas: manter. */
```

---

## Fase 2: Geração dos Tokens (arquivo completo)

### Output: `/styles/tokens.css`

```css
/* ═══════════════════════════════════════════════════
   CLINICAL LUXURY DESIGN TOKENS
   Projeto: [Nome da Clínica/Médico]
   Gerado por: medical-design-system (Valentina Cruz)
   Data: [YYYY-MM-DD]
   Versão: 1.0
   ═══════════════════════════════════════════════════ */

:root {
  /* ─── 1. CORES BRAND (customizadas por projeto) ────── */
  --brand-primary:         oklch([L%] [C] [H]);   /* PREENCHER */
  --brand-primary-hover:   oklch([L-5%] [C] [H]); /* escurecer 5% */
  --brand-primary-light:   oklch([L+35%] [C/3] [H]);
  --brand-secondary:       oklch([L%] [C] [H]);   /* PREENCHER */
  --brand-accent:          oklch([L%] [C] [H]);   /* PREENCHER */

  /* ─── 2. PALETA NEUTRA (warm — não mudar) ──────────── */
  --color-neutral-950: oklch(14% 0.008 90);
  --color-neutral-900: oklch(20% 0.008 90);
  --color-neutral-800: oklch(28% 0.008 90);
  --color-neutral-700: oklch(38% 0.007 90);
  --color-neutral-500: oklch(52% 0.006 90);
  --color-neutral-400: oklch(64% 0.005 90);
  --color-neutral-300: oklch(75% 0.005 90);
  --color-neutral-200: oklch(85% 0.005 90);
  --color-neutral-150: oklch(91% 0.004 90);
  --color-neutral-100: oklch(94% 0.004 90);
  --color-neutral-050: oklch(97% 0.003 90);
  --color-pearl:       oklch(98.5% 0.004 85);

  /* ─── 3. SEMÂNTICAS (não customizar) ───────────────── */
  --color-success-600: oklch(52% 0.15 145);
  --color-success-100: oklch(94% 0.04 145);
  --color-warning-600: oklch(65% 0.14 72);
  --color-warning-100: oklch(95% 0.04 80);
  --color-error-600:   oklch(52% 0.17 22);
  --color-error-100:   oklch(95% 0.04 20);

  /* ─── 4. ALIASES SEMÂNTICOS ─────────────────────────── */
  --bg-page:          var(--color-pearl);
  --bg-surface:       var(--color-neutral-050);
  --bg-card:          white;
  --text-primary:     var(--color-neutral-900);
  --text-secondary:   var(--color-neutral-700);
  --text-tertiary:    var(--color-neutral-500);
  --text-inverse:     white;
  --text-brand:       var(--brand-primary);
  --border-subtle:    var(--color-neutral-200);
  --border-default:   var(--color-neutral-300);
  --border-focus:     var(--brand-primary);

  /* ─── 5. TIPOGRAFIA ─────────────────────────────────── */
  --font-display:   'Fraunces', Georgia, serif;
  --font-heading:   'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body:      'Inter', system-ui, sans-serif;
  --font-mono:      'JetBrains Mono', 'Fira Code', monospace;

  --type-display-2xl: clamp(3.5rem, 6vw + 1rem, 7rem);
  --type-display-xl:  clamp(3rem, 5vw + 0.75rem, 5.5rem);
  --type-display-lg:  clamp(2.5rem, 4vw + 0.5rem, 4.5rem);
  --type-heading-xl:  clamp(2rem, 3vw + 0.5rem, 3.5rem);
  --type-heading-lg:  clamp(1.625rem, 2.5vw, 2.5rem);
  --type-heading-md:  clamp(1.375rem, 2vw, 2rem);
  --type-heading-sm:  clamp(1.125rem, 1.5vw, 1.625rem);
  --type-body-xl:     1.25rem;
  --type-body-lg:     1.125rem;
  --type-body-md:     1rem;
  --type-body-sm:     0.875rem;
  --type-body-xs:     0.8125rem;
  --type-label-lg:    0.9375rem;
  --type-label-md:    0.875rem;
  --type-label-sm:    0.8125rem;
  --type-label-xs:    0.75rem;

  /* ─── 6. ESPAÇAMENTO (8px grid) ─────────────────────── */
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-5:  1.25rem;   /* 20px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */
  --section-pad-y: clamp(4rem, 8vw, 8rem);
  --section-pad-x: clamp(1.5rem, 4vw, 4rem);
  --content-max: 1280px;
  --content-narrow: 760px;

  /* ─── 7. BORDAS & RAIOS ──────────────────────────────── */
  --radius-xs:   2px;
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-3xl:  32px;
  --radius-full: 9999px;

  /* ─── 8. SOMBRAS ─────────────────────────────────────── */
  --shadow-xs:  0 1px 2px 0 oklch(20% 0.06 245 / 0.04);
  --shadow-sm:  0 1px 3px 0 oklch(20% 0.06 245 / 0.06), 0 1px 2px -1px oklch(20% 0.06 245 / 0.04);
  --shadow-md:  0 4px 6px -1px oklch(20% 0.06 245 / 0.07), 0 2px 4px -2px oklch(20% 0.06 245 / 0.04);
  --shadow-lg:  0 10px 15px -3px oklch(20% 0.06 245 / 0.07), 0 4px 6px -4px oklch(20% 0.06 245 / 0.03);
  --shadow-xl:  0 20px 25px -5px oklch(20% 0.06 245 / 0.08), 0 8px 10px -6px oklch(20% 0.06 245 / 0.03);
  --shadow-2xl: 0 25px 50px -12px oklch(20% 0.06 245 / 0.18);
  --shadow-card-hover: 0 20px 40px -8px oklch(20% 0.06 245 / 0.13), 0 8px 16px -4px oklch(20% 0.06 245 / 0.06);
  --shadow-focus: 0 0 0 2px white, 0 0 0 4px var(--brand-primary);

  /* ─── 9. MOTION ──────────────────────────────────────── */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-spring:  cubic-bezier(0.34, 1.32, 0.64, 1);
  --ease-breath:  cubic-bezier(0.37, 0, 0.63, 1);
  --duration-fast:   100ms;
  --duration-normal: 200ms;
  --duration-slow:   300ms;
  --duration-breath: 500ms;
  --duration-long:   700ms;
}

/* ─── DARK SECTIONS (hero/impact) ────────────── */
[data-theme="dark-section"] {
  --bg-page:       oklch(12% 0.055 248);
  --bg-surface:    oklch(16% 0.05 247);
  --bg-card:       oklch(20% 0.045 246);
  --text-primary:  white;
  --text-secondary: oklch(80% 0.02 220);
  --text-tertiary:  oklch(64% 0.02 220);
  --border-subtle:  oklch(100% 0 0 / 0.1);
  --border-default: oklch(100% 0 0 / 0.15);
}

/* ─── REDUCED MOTION ─────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Fase 3: Tailwind Config (v4)

### Output: `tailwind.config.ts` ou `app/globals.css` (v4 CSS-first)

```css
/* Tailwind v4 — CSS-first config em globals.css */
@import "tailwindcss";

@theme {
  /* Mapear tokens para o sistema Tailwind */
  --color-brand-*: initial;
  --color-brand-primary: var(--brand-primary);
  --color-brand-secondary: var(--brand-secondary);
  --color-brand-accent: var(--brand-accent);

  --font-display: var(--font-display);
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);

  --radius-medical-card: var(--radius-xl);
  --radius-medical-btn: var(--radius-full);
  --radius-medical-input: var(--radius-md);
}
```

---

## Critérios de Aceite

```
□ tokens.css gerado com TODOS os tokens necessários
□ Cores brand personalizadas para a especialidade
□ Nenhuma cor hardcodada fora do tokens.css
□ Contraste verificado: texto/fundo ≥ 4.5:1 em todas as combinações
□ Contraste de foco ≥ 3:1 (WCAG 2.1 AA)
□ Dark section tokens funcionando
□ Reduced motion implementado
□ Tailwind v4 mapeado corretamente
□ Revisado e aprovado por medical-ui-artisan antes de implementação
```

## Outputs
- **`/styles/tokens.css`** — Arquivo de tokens completo
- **`/app/globals.css`** — Tailwind v4 theme config
- **Color Palette Preview** — Visual dos tokens gerados
- **Contrast Audit** — Tabela de contraste de todas as combinações críticas
