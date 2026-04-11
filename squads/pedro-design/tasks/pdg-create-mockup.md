---
task: Create Professional Mockup
responsavel: "@pdg-mockup-3d-artist"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: mockup_type
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "device | brand | product | apparel | packaging | poster | scene | wallpaper"
  - campo: brief
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Descrição do mockup desejado"
  - campo: design_asset
    tipo: file
    origem: outros agentes do squad ou User Input
    obrigatorio: false
    validacao: "Design a ser aplicado (PNG/SVG com fundo transparente)"
  - campo: context
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "hero"
    validacao: "hero | lifestyle | dramatic | flat-lay | editorial"
  - campo: output_resolution
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "4K"
    validacao: "HD | 2K | 4K | 8K"
  - campo: variations
    tipo: array
    origem: User Input
    obrigatorio: false
    validacao: "Ex: ['dark', 'light', 'lifestyle', 'flat']"

Saida:
  - campo: mockup_files
    tipo: files
    destino: "mockups/[tipo]/"
    persistido: true
  - campo: mockup_prompt
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Tipo de mockup definido"
  - "[ ] Contexto e mood definidos"
  - "[ ] Composição planejada"
  - "[ ] Iluminação especificada"
  - "[ ] Design asset preparado"
  - "[ ] Resolução de output definida"
  - "[ ] Variações listadas"
  - "[ ] Arquivos nomeados corretamente"
---
## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed



# Create Professional Mockup

## Purpose

Criar mockups fotorrealistas de altíssima qualidade que apresentem produtos, marcas, designs e conceitos de forma convincente. Cada mockup deve fazer o espectador acreditar que está vendo o produto no mundo real.

## Prompts de Mockup por Tipo

### Device Mockup — iPhone

```
PROMPT TEMPLATE:
"Professional product mockup photography,
[IPHONE MODEL] in [COLOR — natural titanium/black/white],
[ORIENTATION — portrait/landscape],
[SCREEN CONTENT — describe app/UI shown],
[SURFACE AND CONTEXT — white marble desk, hand holding, flat lay on wood],
[LIGHTING — soft studio, window light, dramatic],
[CAMERA — Canon R5, 85mm f/2.8],
ultra realistic, [RESOLUTION], sharp focus on device screen,
professional device photography, no reflections on screen,
product advertising quality"

EXEMPLO COMPLETO:
"Professional product mockup photography,
iPhone 15 Pro in natural titanium finish, portrait orientation,
showing a clean fintech mobile app with dashboard data on screen,
placed on a premium white marble surface with subtle natural grain,
small succulent plant in the background slightly blurred,
soft diffused window light from the left, gentle shadow beneath the device,
Canon EOS R5, 50mm f/2.8, shallow depth of field,
ultra realistic, 4K, sharp focus on device and screen,
professional device mockup photography, screen perfectly visible, no glare,
product advertising quality, minimal lifestyle"
```

### Brand Mockup — Business Card

```
PROMPT TEMPLATE:
"Professional business card mockup,
[CARD ORIENTATION — horizontal/vertical], [PAPER TYPE — matte/glossy/textured],
[CARD COLOR AND DESIGN DESCRIPTION],
[ARRANGEMENT — single card, stack, fanned, on surface],
[SURFACE — marble, wood, concrete, leather, fabric],
[PROPS — pen, envelope, plant],
[LIGHTING — overhead, side, diffused],
[COLOR MOOD — warm/cool/neutral],
ultra realistic, [RESOLUTION], sharp focus on card front,
professional stationery photography"
```

### Apparel Mockup — T-Shirt

```
PROMPT TEMPLATE:
"Professional apparel mockup,
[TYPE — t-shirt/hoodie/polo/jacket], [FIT — regular/oversized/slim],
[COLOR — white/black/heather gray/navy/sand],
[DESIGN DESCRIPTION — what's printed, where, size],
[PRESENTATION — ghost mannequin/model/flat lay/hanging],
[BACKGROUND — white seamless/lifestyle/studio],
[LIGHTING — soft studio lighting, even exposure],
ultra sharp fabric texture visible, no wrinkles on design area,
professional apparel photography, [RESOLUTION]"

VARIAÇÕES PADRÃO:
1. White shirt, front, ghost mannequin, white background
2. Black shirt, front, ghost mannequin, dark background
3. Lifestyle: model wearing in urban context
4. Flat lay on wooden surface
5. Detail closeup of the design/print area
```

### Packaging Mockup

```
PROMPT TEMPLATE:
"3D product packaging mockup,
[PACKAGING TYPE — box/pouch/bottle/can/bag],
[SIZE AND SHAPE DESCRIPTION],
[MATERIAL — kraft/glossy/matte/glass/aluminum],
[DESIGN DESCRIPTION — colors, typography, imagery on packaging],
[CONTEXT — white background/lifestyle scene/props],
[LIGHTING — 3-point studio/natural/dramatic],
[CAMERA ANGLE — front/45°/top-down],
photorealistic 3D render, [RESOLUTION], shadow and reflection visible,
product launch quality"
```

### Wallpaper

```
PROMPT TEMPLATE:
"Ultra-high resolution wallpaper,
[SUBJECT — abstract/nature/architecture/brand/art/geometric/space],
[STYLE — photorealistic/digital art/illustration/minimal/dramatic],
[COLOR PALETTE — specify 3-5 dominant colors],
[MOOD — calm/energetic/dark/bright/mystical/corporate],
[COMPOSITION — centered/rule-of-thirds/abstract fill],
[SPECIAL ELEMENTS — particles, light rays, bokeh, textures],
8K resolution (7680x4320), ultra detailed, render quality,
wallpaper aspect ratio,
[ARTIST/STYLE REFERENCE]"

TIPOS DE WALLPAPER POR FORMATO:
Desktop 8K:     7680x4320 (16:9)
Desktop 5K:     5120x2880 (16:9)
Desktop 4K:     3840x2160 (16:9)
Desktop 2K:     2560x1440 (16:9)
MacBook:        2880x1800 (16:10)
Ultra-wide:     3440x1440 (21:9)
iPhone 15 Pro:  2556x1179
iPhone (std):   1170x2532
iPad Pro:       2048x2732
```

## Especificações de Output

```
NOMENCLATURA DE ARQUIVOS:
mockup-[tipo]-[variante]-[resolucao].jpg
mockup-[tipo]-[variante]-[resolucao].png (se transparência necessária)

EXEMPLOS:
mockup-iphone-white-lifestyle-4k.jpg
mockup-tshirt-white-front-ghost-2k.jpg
mockup-business-card-marble-4k.jpg
wallpaper-brand-abstract-8k.jpg
mockup-packaging-bottle-studio-4k.jpg

QUALIDADE:
JPEG: 95-100% quality
PNG: máxima, sem compressão
TIFF: para arquivos master de 8K+
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-mockup-3d-artist (Dimension)
tags:
  - pedro-design
  - mockup
  - 3d
  - product
  - device
  - apparel
  - 8k
```
