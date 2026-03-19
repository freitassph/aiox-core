# Design Standards — pedro-design Squad

## Grid & Layout System

### Spacing Scale (4px base grid)
```
4px  → space-1  (micro gaps, icon padding)
8px  → space-2  (small gaps between related elements)
12px → space-3  (compact spacing)
16px → space-4  (standard internal padding)
20px → space-5  (medium gaps)
24px → space-6  (section separation small)
32px → space-8  (component separation)
40px → space-10 (section padding)
48px → space-12 (large section separation)
64px → space-16 (hero sections, major padding)
80px → space-20 (page-level separation)
96px → space-24 (between major sections)
```

### Breakpoints
```
Mobile:  < 640px  (4-col grid, 16px margin, 16px gutter)
Tablet:  640-1024px (8-col grid, 32px margin, 16px gutter)
Desktop: > 1024px (12-col grid, 48px+ margin, 24px gutter)
Wide:    > 1536px (12-col grid, auto margin, max-width 1440px)
```

### Typography Scale
```
Display 2XL: 72px / weight 700-800 / tracking -2px
Display XL:  60px / weight 700-800 / tracking -1.5px
Display LG:  48px / weight 700    / tracking -1px
H1:          36px / weight 700    / tracking -0.5px
H2:          30px / weight 600-700 / tracking -0.25px
H3:          24px / weight 600    / tracking 0
H4:          20px / weight 600    / tracking 0
Body LG:     18px / weight 400    / line-height 1.6
Body MD:     16px / weight 400    / line-height 1.6
Body SM:     14px / weight 400    / line-height 1.5
Caption:     12px / weight 400    / line-height 1.5
Label:       11px / weight 500    / UPPERCASE / tracking 0.4px
```

## Color Philosophy
- Dark Executive as default for products and dashboards
- Background: #0A0A0C (never pure black)
- Never exceed 5 brand colors in a single project
- Always define semantic tokens (bg, text, border, action, feedback)
- Test all colors for WCAG 2.1 AA compliance

## Animation Philosophy
- Duration: 150ms (micro) / 300ms (standard) / 500ms (page)
- Easing: ease-out for entrances, ease-in for exits, spring for delight
- ALWAYS implement prefers-reduced-motion
- Animate only transform and opacity (GPU composited)
- GSAP for complex scroll sequences, Framer Motion for UI components

## Photography Style
- Natural light preferred over flash
- Authentic over stock-generic
- Consistent color grading per project
- Mobile-first composition (portrait crops)

## AI Image Generation Quality Bar
- Minimum: must not look obviously AI-generated for commercial use
- Preferred: photorealistic or stylistically intentional
- Always: prompt archived with seed for reproducibility

## Component Quality Bar
- All variants documented
- All states: default, hover, active, focus, disabled, loading, error
- Full keyboard navigation
- Screen reader tested
- Mobile touch targets ≥ 44px
- Storybook story required for every component
