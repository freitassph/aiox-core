# Design System Reference — Pedro Sistema Agente Squad

> Premium design system specifications inspired by Apple and Ferrari aesthetics. Every system built by this squad follows these visual principles.

---

## Core Philosophy

**Apple meets Ferrari**: Clean, functional, and obsessively refined. Every pixel serves a purpose. No decoration without intent. The interface should feel inevitable — like it couldn't be any other way.

### Design Principles

1. **Clarity over cleverness** — Users should never have to guess
2. **Hierarchy through contrast** — Use size, weight, and color to guide attention
3. **Motion with meaning** — Every animation communicates state change or relationship
4. **Consistency with personality** — Uniform patterns, warm tone
5. **Speed as a feature** — Interfaces must feel instant (perceived performance < 100ms)

---

## Color System

### Primary Palette (oklch color space)

```css
:root {
  /* Background layers */
  --color-bg-primary: oklch(98% 0.005 260);      /* Near-white with subtle cool tint */
  --color-bg-secondary: oklch(95% 0.008 260);     /* Soft surface elevation */
  --color-bg-tertiary: oklch(92% 0.01 260);       /* Card/elevated surfaces */

  /* Text hierarchy */
  --color-text-primary: oklch(20% 0.02 260);      /* Headlines, critical text */
  --color-text-secondary: oklch(45% 0.02 260);    /* Body text */
  --color-text-tertiary: oklch(60% 0.02 260);     /* Captions, labels */
  --color-text-disabled: oklch(75% 0.01 260);     /* Disabled state */

  /* Accent (brand color — customizable per client) */
  --color-accent: oklch(55% 0.2 250);             /* Primary action color */
  --color-accent-hover: oklch(50% 0.22 250);      /* Hover state */
  --color-accent-active: oklch(45% 0.24 250);     /* Active/pressed */
  --color-accent-subtle: oklch(55% 0.2 250 / 0.1); /* Subtle backgrounds */

  /* Semantic colors */
  --color-success: oklch(65% 0.18 145);           /* Confirmation, positive */
  --color-warning: oklch(75% 0.18 85);            /* Caution, attention needed */
  --color-danger: oklch(55% 0.22 25);             /* Destructive, errors */
  --color-info: oklch(60% 0.15 230);              /* Informational */

  /* Borders and dividers */
  --color-border: oklch(88% 0.01 260);            /* Subtle separators */
  --color-border-strong: oklch(80% 0.015 260);    /* Active focus states */
}
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: oklch(18% 0.015 260);
    --color-bg-secondary: oklch(22% 0.018 260);
    --color-bg-tertiary: oklch(26% 0.02 260);
    --color-text-primary: oklch(95% 0.005 260);
    --color-text-secondary: oklch(75% 0.01 260);
    --color-text-tertiary: oklch(55% 0.015 260);
    --color-border: oklch(30% 0.015 260);
    --color-border-strong: oklch(40% 0.02 260);
  }
}
```

---

## Typography

### Font Stack

```css
font-family: 'Geist Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-family: 'Geist Mono', 'SF Mono', 'Fira Code', monospace; /* Code/data */
```

### Type Scale

| Name | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `display-lg` | 64px / 4rem | 700 | 1.0 | -0.03em | Hero headlines |
| `display` | 48px / 3rem | 700 | 1.05 | -0.025em | Page titles |
| `h1` | 36px / 2.25rem | 600 | 1.15 | -0.02em | Section headers |
| `h2` | 28px / 1.75rem | 600 | 1.2 | -0.015em | Sub-sections |
| `h3` | 22px / 1.375rem | 600 | 1.3 | -0.01em | Card titles |
| `body-lg` | 18px / 1.125rem | 400 | 1.5 | 0 | Large body text |
| `body` | 16px / 1rem | 400 | 1.55 | 0 | Default body text |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | 0 | Secondary text |
| `caption` | 12px / 0.75rem | 500 | 1.4 | 0.02em | Labels, captions |
| `caption-xs` | 11px / 0.6875rem | 500 | 1.3 | 0.03em | Fine print |

### Font Weight System

| Weight | Value | Usage |
|---|---|---|
| Regular | 400 | Body text, descriptions |
| Medium | 500 | Labels, captions, subtle emphasis |
| Semibold | 600 | Headings, interactive elements |
| Bold | 700 | Display text, strong emphasis |

**Never use**: Italic (accessibility concern), Thin/Light (poor readability)

---

## Spacing System

Base unit: **4px**. All spacing is a multiple of 4.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight gaps (icon + text) |
| `space-2` | 8px | Internal padding (small elements) |
| `space-3` | 12px | Medium internal padding |
| `space-4` | 16px | Standard spacing (cards, sections) |
| `space-5` | 20px | — |
| `space-6` | 24px | Section gaps (mobile) |
| `space-8` | 32px | Section gaps (desktop) |
| `space-10` | 40px | — |
| `space-12` | 48px | Major section gaps |
| `space-16` | 64px | Page-level spacing |
| `space-20` | 80px | Hero spacing |
| `space-24` | 96px | Large hero/landing spacing |

---

## Component Specifications

### Buttons

```
Primary Button:
  Background: --color-accent
  Text: white (oklch(98% 0 0))
  Padding: 12px 24px (md), 10px 20px (sm), 14px 28px (lg)
  Border Radius: 8px (md), 6px (sm), 10px (lg)
  Font: semibold, 14px/16px/18px
  Transition: all 150ms ease
  Hover: darken 5%, translateY(-1px), shadow-lg
  Active: darken 10%, translateY(0)
  Focus: outline 2px --color-accent, offset 2px
  Disabled: opacity 50%, cursor not-allowed, no hover effects

Secondary Button:
  Background: transparent
  Border: 1px solid --color-border-strong
  Text: --color-text-primary
  Hover: background --color-bg-tertiary

Ghost Button:
  Background: transparent
  Text: --color-accent
  Hover: background --color-accent-subtle

Danger Button:
  Same as Primary but with --color-danger
```

### Cards

```
  Background: --color-bg-primary
  Border: 1px solid --color-border
  Border Radius: 12px
  Padding: 24px
  Shadow (hover): 0 4px 12px rgba(0,0,0,0.08)
  Transition: shadow 200ms ease, transform 200ms ease
  Hover: translateY(-2px)
```

### Inputs

```
  Height: 44px (touch target minimum)
  Padding: 0 14px
  Border: 1px solid --color-border
  Border Radius: 8px
  Background: --color-bg-primary
  Focus: border-color --color-accent, ring 2px --color-accent-subtle
  Error: border-color --color-danger
  Disabled: background --color-bg-secondary, opacity 60%
  Label: body-sm, medium weight, margin-bottom 6px
  Helper Text: caption, tertiary text color, margin-top 4px
  Error Text: caption, danger color, margin-top 4px
```

### Badges

```
  Padding: 4px 10px
  Border Radius: 9999px (pill)
  Font: medium, 12px, 0.02em letter-spacing
  Background: --color-accent-subtle
  Text: --color-accent
  
  Variant Success: bg --color-success/10, text --color-success
  VariantWarning: bg --color-warning/10, text --color-warning
  VariantDanger: bg --color-danger/10, text --color-danger
```

---

## Motion & Animation

### Timing Functions

| Name | Cubic Bezier | Usage |
|---|---|---|
| `ease-out-expo` | cubic-bezier(0.16, 1, 0.3, 1) | Enter animations, transitions to visible |
| `ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | Emphasis, micro-interactions |
| `ease-out` | cubic-bezier(0, 0, 0.2, 1) | General purpose exit |
| `spring` | spring(1, 80, 16) | Layout animations, Framer Motion |

### Duration Scale

| Token | Duration | Usage |
|---|---|---|
| `duration-fast` | 100ms | Hover states, cursor feedback |
| `duration-base` | 200ms | Most UI transitions |
| `duration-slow` | 300ms | Page transitions, modals |
| `duration-xslow` | 500ms | Hero animations, onboarding |

### Animation Principles

1. **Origin matters**: Animate from the element's natural position
2. **Stagger siblings**: 50ms delay between sequential elements
3. **Scale + opacity**: Preferred for enter/exit (GPU accelerated)
4. **Never animate**: layout-triggering properties in rapid succession (causes jank)

---

## Iconography

- **Library**: Lucide React (stroke icons, never fill)
- **Default size**: 20px
- **Stroke width**: 1.5 (standard), 2 (small), 1.25 (large)
- **Color**: Inherits from currentColor (text color)
- **Interactive icons**: Cursor pointer, hover scale(1.1) transition

---

## Layout Grid

### Desktop (> 1024px)

- Columns: 12
- Gutter: 24px
- Margin: auto (max-width: 1280px container)

### Tablet (768px — 1024px)

- Columns: 8
- Gutter: 20px
- Margin: 24px

### Mobile (< 768px)

- Columns: 4
- Gutter: 16px
- Margin: 16px

---

## Accessibility Requirements

- **Contrast ratio**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus indicators**: Always visible, never outline: none
- **Touch targets**: Minimum 44x44px
- **Reduced motion**: Respect `prefers-reduced-motion: reduce`
- **Screen readers**: All interactive elements have aria-labels
- **Keyboard navigation**: Full tab order, no mouse-only interactions
- **Error states**: Never color-only; always pair with icon + text

---

*Design system reference for pedro-sistema-agente squad*
*Last updated: 2026-04-05*
