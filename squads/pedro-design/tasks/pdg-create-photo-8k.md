---
task: Create Professional Photo 8K
responsavel: "@pdg-photo-director"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: photo_type
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "portrait | product | lifestyle | editorial | architectural | food | fashion | nature | street | abstract"
  - campo: brief
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Descrição detalhada do que deve ser fotografado/criado"
  - campo: style
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "editorial"
    validacao: "editorial | commercial | fashion | documentary | fine-art | advertising"
  - campo: camera_specs
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "Phase One IQ4 150MP"
    validacao: "Especificação da câmera/lente para o prompt IA"
  - campo: output_resolution
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "8K"
    validacao: "4K | 5K | 8K | 12K"
  - campo: color_grading
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "natural-editorial"
    validacao: "natural-editorial | warm-cinematic | muted-film | dark-moody | clean-commercial | vibrant-lifestyle"

Saida:
  - campo: photo_master
    tipo: file
    destino: "photos/[nome]-master.tiff"
    persistido: true
  - campo: photo_web
    tipo: file
    destino: "photos/[nome]-web.jpg"
    persistido: true
  - campo: photo_prompt
    tipo: string
    destino: Console
    persistido: false
  - campo: shot_specs
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Shot list criado com especificações técnicas"
  - "[ ] Câmera e lente especificados no prompt"
  - "[ ] Iluminação definida (natural/studio/tipo)"
  - "[ ] Composição descrita (enquadramento, angle)"
  - "[ ] Color grading definido"
  - "[ ] Resolução 8K especificada"
  - "[ ] Qualidade fotorrealista verificada"
  - "[ ] Formato de output correto para o uso"
---
## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed



# Create Professional Photo 8K

## Purpose

Criar fotografias profissionais de altíssima qualidade — seja através de IA generativa com prompts de precisão fotográfica, ou criando o briefing completo para um fotógrafo humano. Resolução 8K, qualidade de publicação editorial.

## Câmeras e Lentes de Referência

### Medium Format (Máxima Qualidade):
```
Phase One IQ4 150MP — 150 megapixels, resolução máxima disponível
Hasselblad H6D-400c MS — 400 megapixels (multi-shot)
Fujifilm GFX 100S — 102 megapixels
Leica S3 — 64 megapixels

USO: product photography premium, editorial luxury, arquitetura, arte
```

### Full Frame Profissional:
```
Canon EOS R5 — 45MP, full frame mirrorless
Sony A7R V — 61MP, full frame
Nikon Z9 — 45.7MP, flagship mirrorless
Canon 5DS R — 50.6MP (DSLR clássico)

USO: fashion, retrato, photojournalism, produto comercial
```

### Lentes por Uso:
```
85mm f/1.4: Retratos (compressão natural, bokeh perfeito)
50mm f/1.2: Street photography, editorial, "olho humano"
24-70mm f/2.8: Versatilidade, evento, lifestyle
70-200mm f/2.8: Esporte, wildlife, compressão de cena
100mm macro f/2.8: Produto detalhe, beauty, alimentos
16-35mm f/2.8: Arquitetura, paisagem, ambiental
135mm f/2: Retrato editorial (Annie Leibovitz favorita)
```

## Prompts de Alta Precisão por Tipo

### Retrato Profissional
```
PROMPT TEMPLATE:
"Shot with [CAMERA] [FOCAL-LENGTH]mm f/[APERTURE] lens,
[SUBJECT DESCRIPTION] — [AGE, ETHNICITY, EXPRESSION, CLOTHING],
[POSE — head position, body angle, hand placement],
[ENVIRONMENT — background description, context],
[LIGHTING TYPE] — [KEY LIGHT POSITION], [FILL DESCRIPTION], [MOOD],
[COLOR GRADING STYLE], skin tones accurate and natural,
ultra-realistic, [RESOLUTION], sharp focus on eyes,
photographed in the style of [PHOTOGRAPHER REFERENCE]"

EXEMPLO:
"Shot with Canon EOS R5, 85mm f/1.4 lens,
Professional portrait of a confident 35-year-old Brazilian woman,
natural makeup, dark hair, white linen shirt,
three-quarter turn to camera, chin slightly down, direct eye contact, subtle smile,
contemporary studio with seamless gray background, warm bokeh in background,
soft Rembrandt lighting with key light camera-left at 45°, silver reflector fill right,
warm editorial color grade, skin tones accurate,
ultra-realistic, 8K, sharp focus on eyes, shallow depth of field,
photographed in the style of Peter Hurley, Annie Leibovitz"
```

### Product Photography Premium
```
PROMPT TEMPLATE:
"Commercial product photography of [PRODUCT DESCRIPTION],
Shot with Phase One IQ4, [FOCAL-LENGTH]mm [TYPE] lens,
[SURFACE/BACKGROUND — texture, color, props],
[LIGHTING SETUP — key position, type, secondary lights],
[SHADOW STYLE], [REFLECTION TYPE],
hyperrealistic product render, ultra sharp, commercial advertising quality,
[RESOLUTION], [COLOR STYLE],
for [BRAND TYPE] campaign"

EXEMPLO (Skincare premium):
"Commercial product photography of an elegant black glass serum bottle with gold cap,
Shot with Phase One IQ4, 120mm macro lens,
on polished white Calacatta marble with subtle vein texture,
fresh orchid petals scattered around, drops of water on marble,
3-point studio lighting: main softbox 90cm at upper-left 45°,
secondary softbox behind product for rim glow, catch light card below,
deep soft shadow to the right, subtle glass refraction,
hyperrealistic, ultra sharp detail on bottle texture and cap,
8K resolution, clean commercial white tone,
for luxury skincare brand campaign"
```

### Fashion Editorial
```
PROMPT TEMPLATE:
"Fashion editorial photograph,
Shot with [CAMERA] [FOCAL-LENGTH]mm,
[MODEL DESCRIPTION] wearing [OUTFIT DESCRIPTION],
[LOCATION/SETTING], [TIME OF DAY/LIGHT QUALITY],
[POSE/MOVEMENT], [MOOD],
[COLOR GRADE], grain: [light/medium/heavy],
editorial quality, Vogue-level, [RESOLUTION],
photographed by [FASHION PHOTOGRAPHER REFERENCE]"

EXEMPLO:
"Fashion editorial photograph,
Shot with Canon EOS R5, 50mm f/1.4,
A tall, elegant model with strong features wearing a structured charcoal blazer,
floor-length white trousers, minimal jewelry,
standing in a brutalist concrete building with dramatic columns and harsh shadows,
late afternoon harsh sunlight creating graphic shadows across her face and body,
confident stance, direct gaze, one hand touching the column,
muted, high-contrast editorial color grade, medium film grain,
editorial quality, Vogue-level fashion photography, 8K,
photographed by Peter Lindbergh, Helmut Newton influence"
```

### Food Photography
```
PROMPT TEMPLATE:
"[ANGLE — overhead/45°/eye-level] food photography,
[FOOD ITEM] — [PREPARATION STATE], [TEXTURE DESCRIPTION],
[SURFACE — material, color], [PROPS around the dish],
[LIGHTING — natural window/diffused/side light],
[STYLING DETAILS — steam, garnish, sauces],
[MOOD/TONE], sharp focus on food, shallow DOF on background,
[COLOR GRADE], ultra realistic, [RESOLUTION],
food styling by [REFERENCE FOOD STYLIST/PHOTOGRAPHER]"
```

### Landscape / Nature 8K
```
PROMPT TEMPLATE:
"Landscape photography,
Shot with Sony A7R V, [16-35 OR 24-70]mm f/[8-16],
[LOCATION DESCRIPTION — mountains, ocean, forest, desert, urban],
[TIME OF DAY — golden hour, blue hour, midday, storm, night],
[WEATHER/ATMOSPHERE — clear, misty, dramatic clouds, fog],
[COMPOSITIONAL ELEMENT — leading lines, foreground, horizon position],
[LIGHT QUALITY AND DIRECTION],
[COLOR TEMPERATURE — warm/cool/neutral],
long exposure [if water or clouds], ultra sharp, maximum detail,
professional landscape photography, 8K, [PHOTOGRAPHER REFERENCE]"
```

## Color Grading Recipes

### Warm Cinematic (lifestyle, editorial):
```
Temperature: +15-20 (warmer)
Highlights: warm orange tones
Shadows: cool teal/blue shift
Blacks: lifted slightly (filmic)
HSL: boost oranges/yellows, mute blues
Grain: light (ISO 400 film simulation)
```

### Dark & Moody (luxury, fashion):
```
Exposure: -0.3 to -0.5
Contrast: +30
Highlights: -40 (pulled down)
Shadows: +10 (lifted slightly)
Color grade: navy shadows, bronze/gold highlights
Saturation: -15 (muted)
```

### Clean Commercial (product, corporate):
```
Temperature: neutral
White balance: perfect
Highlights: clean, not blown
Shadows: open, visible detail
Skin/product: accurate color reproduction
Saturation: natural +5
Clarity: +10
```

### Film Emulation (editorial, art):
```
Fade blacks (lift blacks to ~15)
Desaturated highlights
Green/yellow-shifted tones
Grain: medium-heavy
Contrast curve: gentle S
HSL: boost greens, mute reds
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-photo-director (Frame)
tags:
  - pedro-design
  - photography
  - 8k
  - ai-photography
  - product-photography
  - editorial
```
