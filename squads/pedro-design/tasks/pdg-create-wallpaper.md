---
task: Create Wallpaper 8K
responsavel: "@pdg-mockup-3d-artist"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: style
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "abstract | brand | nature | space | architecture | minimal | gradient | pattern | photography | 3d-render"
  - campo: brief
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Descrição do wallpaper desejado"
  - campo: color_mood
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "dark"
    validacao: "dark | light | colorful | monochrome | brand-colors"
  - campo: formats
    tipo: array
    origem: User Input
    obrigatorio: false
    default: "['desktop-8k', 'mobile']"
    validacao: "desktop-8k | desktop-4k | desktop-2k | ultrawide | macbook | iphone | ipad"

Saida:
  - campo: wallpaper_files
    tipo: files
    destino: "wallpapers/"
    persistido: true

Checklist:
  - "[ ] Desktop 8K (7680x4320)"
  - "[ ] Desktop 4K (3840x2160)"
  - "[ ] Desktop 2K (2560x1440)"
  - "[ ] Mobile iPhone (2556x1179)"
  - "[ ] Detalhamento máximo na resolução nativa"
  - "[ ] Composição funciona em todos os formatos (crop central)"
---

# Create Wallpaper 8K

## Purpose

Criar wallpapers de altíssima qualidade e resolução para desktop, laptop e mobile. Um bom wallpaper é arte utilizável — deve ser belo sozinho e funcionar como backdrop para o conteúdo do sistema.

## Prompts por Estilo

### Abstract Generative

```
"Ultra-high resolution abstract wallpaper,
[SHAPES — fluid/geometric/organic/fractals],
[COLORS — deep navy blue, electric indigo, subtle gold accents],
[TEXTURE — smooth gradient transitions, subtle noise texture],
[ELEMENTS — flowing liquid metal, light refraction, depth layers],
dreamlike depth, studio quality render,
8K resolution (7680x4320), ultra detailed, HDR-ready,
digital art by [reference: Beeple, refik anadol, julius horsthuis]"
```

### Space / Cosmic

```
"Deep space photography, ultra high resolution,
[SUBJECT — nebula/galaxy/star field/planetary/aurora],
[COLORS — deep black background, electric blues, purples, gold stellar dust],
[COMPOSITION — centered object with expansive background],
[DETAIL — individual stars sharp, cosmic dust visible],
Hubble Space Telescope quality, ESO quality,
8K (7680x4320), astrophotography masterpiece,
HDR, maximum dynamic range"
```

### Minimal / Clean

```
"Minimalist wallpaper,
[SUBJECT — single geometric shape/gradient/texture/single element],
[COLOR PALETTE — maximum 3 colors: background + accent + detail],
[MOOD — serene/focused/professional/calm],
[TEXTURE — subtle noise, grain, or smooth],
extremely clean composition, no clutter,
8K resolution, perfect for productivity desktop background,
designed by [reference: Swiss design, Dieter Rams aesthetic]"
```

### Brand Wallpaper

```
"Brand wallpaper for [BRAND NAME],
[BRAND COLORS — primary: X, secondary: Y],
[STYLE — abstract brand elements/pattern/minimal logo treatment],
[MOOD — professional/energetic/luxury],
subtle brand identity elements, not promotional,
designed as desktop background for team members/clients,
8K resolution, professional digital art"
```

### Architectural

```
"Architectural photography wallpaper,
[BUILDING/SPACE TYPE — brutalist/modernist/classic/contemporary],
[LOCATION or STYLE],
[TIME OF DAY — golden hour/blue hour/night/overcast],
[COMPOSITION — symmetrical/rule-of-thirds/dramatic angle],
[ATMOSPHERE — dramatic shadows/rain reflections/fog/clear sky],
ultra detailed, sharp focus, maximum dynamic range,
8K, Leica M11 + 28mm APO-Summicron quality,
architectural photography by [reference: Hufton+Crow, Iwan Baan]"
```

### Nature / Landscape

```
"[SEASON] landscape photography,
[LOCATION TYPE — mountains/ocean/forest/desert/lake/waterfall],
[ATMOSPHERE — morning mist/storm approaching/golden hour/aurora],
[FOREGROUND ELEMENT — flowers/rocks/grass/water],
[SKY — dramatic clouds/clear/stars/gradient],
National Geographic quality, ultra high resolution,
8K (7680x4320), maximum sharpness,
photographed by [reference: Ansel Adams, Peter Lik, Art Wolfe]"
```

## Formatos e Dimensões

```
DESKTOP:
8K (16:9):   7680 × 4320px   — monitors 8K
5K (16:9):   5120 × 2880px   — Apple Studio Display
4K (16:9):   3840 × 2160px   — 4K monitors
2.5K (16:9): 2560 × 1440px   — QHD monitors
FHD (16:9):  1920 × 1080px   — Full HD monitors

ULTRAWIDE:
3440 × 1440px  — ultrawide 21:9
5120 × 2160px  — ultrawide 21:9 5K
7680 × 3200px  — ultrawide 24:10 8K

APPLE:
MacBook Pro:   3456 × 2160px  — MBP 16" Retina
MacBook Air:   2560 × 1664px  — MBA M2
iMac 5K:       5120 × 2880px

MOBILE:
iPhone 15 Pro: 2556 × 1179px
iPhone 15:     2556 × 1179px
iPhone SE:     1334 × 750px
iPad Pro 13":  2064 × 2752px
iPad Air:      2360 × 1640px
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-mockup-3d-artist (Dimension)
tags:
  - pedro-design
  - wallpaper
  - 8k
  - desktop
  - mobile
```
