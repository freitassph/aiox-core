# Archive de Prompts para Geração de Imagens IA

> Documento de referência para o squad pedro-design. Contém fórmula de estrutura de prompts, 30+ prompts por categoria, guia de parâmetros e comparação de plataformas.

---

## 1. Fórmula de Estrutura de Prompt

### Template Universal

```
[SUJEITO] + [DESCRIÇÃO DETALHADA] + [AMBIENTE/CENÁRIO] + [ILUMINAÇÃO] + [ESTILO VISUAL] + [ÂNGULO/CÂMERA] + [PARAMETROS]
```

### Elementos Detalhados

| Elemento | O que Incluir | Exemplo |
|---|---|---|
| **Sujeito** | O objeto principal da imagem | "A modern smartphone" |
| **Descrição** | Cor, material, forma, textura | "with a matte black finish and chrome edges" |
| **Ambiente** | Onde o sujeito está | "on a marble table in a minimalist room" |
| **Iluminação** | Tipo, direção, qualidade da luz | "soft natural window light from the left, golden hour" |
| **Estilo** | Referências visuais, época, movimento | "shot on Hasselblad, editorial photography style" |
| **Ângulo/Câmera** | Perspectiva, tipo de lente | "close-up, 85mm lens, shallow depth of field" |
| **Parâmetros** | Configurações da plataforma | `--ar 16:9 --v 6 --style raw --q 2` |

### Prompt Otimizado — Exemplo Completo

```
A modern smartphone with a matte black finish and chrome edges,
resting on a white marble table in a minimalist Scandinavian room,
soft natural window light from the left creating subtle reflections,
golden hour warm tones, shot on Hasselblad medium format,
editorial product photography style, close-up composition,
85mm lens, shallow depth of field with bokeh background
--ar 16:9 --v 6 --style raw --q 2
```

### Modificadores de Qualidade

| Modificador | Efeito |
|---|---|
| `shot on 35mm lens` | Look cinematográfico |
| `shot on 85mm lens` | Retrato/produto com compressão |
| `shot on 24mm lens` | Grande angular, mais contexto |
| `8K resolution` | Alta resolução aparente |
| `photorealistic` | Máximo realismo |
| `cinematic lighting` | Iluminação dramática de cinema |
| `studio lighting` | Iluminação controlada de estúdio |
| `natural light` | Luz natural, orgânica |
| `soft focus` | Foco suave, dreamy |
| `sharp focus` | Nitidez máxima no sujeito |
| `bokeh` | Fundo desfocado com círculos de luz |
| `rule of thirds` | Composição equilibrada |
| `centered composition` | Composição centralizada |
| `minimalist` | Limpo, sem distrações |
| `highly detailed` | Nível de detalhe aumentado |
| `award-winning photography` | Qualidade de foto premiada |

---

## 2. Prompts por Categoria — 30+ Prompts

### 2.1 Product Photography (8 prompts)

**Prompt 1 — Smartphone Premium**
```
A sleek smartphone in deep space gray standing vertically on a brushed
aluminum stand, dark gradient background from charcoal to black, dramatic
rim lighting highlighting the phone edges, product photography, commercial
advertising quality, 45-degree angle, 100mm macro lens, ultra detailed
--ar 4:5 --v 6 --style raw
```

**Prompt 2 — Perfume de Luxo**
```
A crystal perfume bottle with gold cap on a black marble pedestal, rose
petals scattered around, moody dramatic lighting with soft spotlight from
above, luxury product photography, reflection on surface, macro detail
of the glass, elegant and sophisticated composition
--ar 1:1 --v 6 --style raw --q 2
```

**Prompt 3 — Sneaker Lifestyle**
```
A pair of white minimalist sneakers on a concrete staircase, morning
sunlight creating long shadows, urban lifestyle photography, clean and
modern aesthetic, low angle shot looking slightly up, 35mm lens,
streetwear brand campaign style
--ar 4:5 --v 6
```

**Prompt 4 — Watch/Elegance**
```
A luxury mechanical watch with visible movement through exhibition
caseback, resting on dark walnut wood, warm amber spotlight creating
rich reflections, macro product photography, 90mm lens, extreme detail
on gears and craftsmanship, dark moody atmosphere
--ar 16:9 --v 6 --style raw
```

**Prompt 5 — Headphones Tech**
```
Over-ear wireless headphones in midnight blue floating against a gradient
blue background, subtle motion blur on edges to suggest sound waves,
tech product photography, studio lighting with soft rim light, centered
composition, clean modern Apple-style aesthetic
--ar 1:1 --v 6
```

**Prompt 6 — Skincare Natural**
```
Three skincare bottles in pastel pink and white on a travertine stone
platform, surrounded by fresh botanical ingredients (aloe leaves, rose
hips, lavender sprigs), soft diffused natural light, clean beauty brand
photography, overhead flat lay composition, light and airy
--ar 4:5 --v 6
```

**Prompt 7 — Coffee Artisan**
```
A ceramic pour-over coffee dripper in matte black on a wooden counter,
steam rising from the freshly brewed coffee below, warm morning light
streaming through a window, cozy artisan coffee shop atmosphere,
lifestyle product photography, 50mm lens, shallow depth of field
--ar 4:5 --v 6
```

**Prompt 8 — Furniture Minimal**
```
A mid-century modern armchair in cognac leather against a warm off-white
wall, single Monstera plant in terracotta pot beside it, afternoon sun
casting geometric shadows from window frame, interior design photography,
wide angle 24mm, magazine editorial style
--ar 16:9 --v 6 --style raw
```

### 2.2 Lifestyle (7 prompts)

**Prompt 9 — Coworking Moderno**
```
A diverse group of young professionals collaborating around a large
wooden table in a sunlit modern coworking space, laptops and notebooks
scattered, large windows with plants, warm natural light, candid
authentic moment, documentary style photography, 35mm lens
--ar 16:9 --v 6
```

**Prompt 10 — Yoga Wellness**
```
A woman in her 30s practicing yoga in a peaceful studio at sunrise,
warrior pose on a cork yoga mat, golden hour light streaming through
large windows, serene and mindful atmosphere, wellness brand
photography, soft pastel color grading, 50mm lens
--ar 4:5 --v 6
```

**Prompt 11 — Cooking Home**
```
Hands of a person chopping fresh colorful vegetables on a wooden cutting
board, overhead flat lay composition, natural kitchen counter with linen
napkin, warm daylight, authentic home cooking aesthetic, top-down
food photography, natural styling, vibrant fresh ingredients
--ar 1:1 --v 6
```

**Prompt 12 — Travel Adventure**
```
A solo traveler standing on a cliff edge overlooking a dramatic coastal
landscape at sunset, backpack on shoulders, wind-blown hair, epic
cinematic landscape, travel brand campaign photography, wide angle
24mm lens, golden hour with dramatic clouds, sense of freedom
--ar 16:9 --v 6
```

**Prompt 13 — Family Connection**
```
A mother and child reading a book together on a cozy window seat,
rainy day visible through the window, warm indoor lighting from a
table lamp, intimate family moment, lifestyle photography, soft
warm tones, 50mm lens, genuine emotion
--ar 4:5 --v 6
```

**Prompt 14 — Fitness Energy**
```
An athlete mid-workout doing box jumps in an industrial-style CrossFit
gym, chalk dust in the air, dramatic overhead lighting creating strong
shadows, high-energy sports photography, low angle action shot,
24mm lens, dynamic composition, intense and powerful mood
--ar 4:5 --v 6
```

**Prompt 15 — Remote Work**
```
A laptop and coffee cup on a minimalist desk setup with a small potted
succulent, clean white desk against a light gray wall, soft morning light,
minimalist remote work aesthetic, overhead composition, clean and
organized, tech lifestyle photography
--ar 16:9 --v 6
```

### 2.3 Abstract & Backgrounds (6 prompts)

**Prompt 16 — Fluid Gradient**
```
Abstract fluid art background with smooth gradients flowing from deep
purple through electric blue to cyan, organic flowing shapes, glossy
surface appearance, modern web design background, seamless pattern
potential, high resolution, smooth transitions
--ar 16:9 --v 6
```

**Prompt 17 — Geometric Minimal**
```
Minimalist abstract composition with overlapping geometric shapes in
muted earth tones (terracotta, sage, cream, charcoal), bauhaus-inspired,
clean lines and perfect circles, modern art gallery wall aesthetic,
flat design, balanced negative space
--ar 16:9 --v 6 --style raw
```

**Prompt 18 — Paper Cut 3D**
```
Layered paper cut art creating a mountain landscape scene, multiple
layers of colored cardstock in blues and greens creating depth, soft
drop shadows between layers, craft-inspired 3D illustration, warm
lighting from upper right, dimensional paper art
--ar 16:9 --v 6
```

**Prompt 19 — Liquid Metal**
```
Abstract flowing liquid chrome and iridescent shapes morphing in space,
holographic color reflections, futuristic digital art, 3D rendered
appearance, smooth organic forms, contemporary digital design aesthetic,
dark background making metallic surfaces pop
--ar 16:9 --v 6
```

**Prompt 20 — Watercolor Wash**
```
Soft watercolor wash background in pastel blues and pinks bleeding into
each other on textured paper, organic paint bloom edges, gentle and
airy feel, hand-painted appearance with visible paper texture, light
and feminine aesthetic, wedding invitation style
--ar 16:9 --v 6
```

**Prompt 21 — Neon Grid**
```
Retro-futuristic neon grid landscape with glowing magenta lines on a
dark background, synthwave aesthetic, perspective grid receding to
horizon, glowing orb sun setting on the grid line, 80s retro-future
style, digital art, vibrant neon colors against deep dark blue
--ar 16:9 --v 6
```

### 2.4 Illustration (5 prompts)

**Prompt 22 — Flat Corporate**
```
Flat vector illustration of a diverse team of professionals presenting
charts and graphs on a large screen, corporate Memphis illustration
style, bold solid colors with no gradients, simplified human figures
with oversized limbs, clean white background, modern tech company
illustration style
--ar 16:9 --v 6
```

**Prompt 23 — Hand-drawn Organic**
```
Hand-drawn botanical illustration of herbs and flowers in a vintage
scientific illustration style, ink line drawing with watercolor accents,
cream paper background, detailed plant anatomy labels, apothecary
aesthetic, natural history museum illustration style
--ar 4:5 --v 6
```

**Prompt 24 — Isometric Tech**
```
Isometric 3D illustration of a modern smart home with visible rooms
showing IoT devices, solar panels on roof, electric car in garage,
clean vector style with soft shadows, tech startup illustration,
blue and white color palette, detailed miniature furniture
--ar 16:9 --v 6
```

**Prompt 25 — Duotone Portrait**
```
Duotone illustration portrait in the style of Spotify Wrapped, bold
purple and yellow color scheme, halftone dot pattern overlay, modern
graphic illustration, stylized face with simplified features, pop art
influence, poster quality
--ar 4:5 --v 6
```

**Prompt 26 — Children Book**
```
Whimsical watercolor illustration of a friendly fox character in a cozy
forest setting, children's book illustration style, soft pastel colors,
gentle and warm atmosphere, hand-painted texture, storybook quality,
cute and approachable character design
--ar 1:1 --v 6
```

### 2.5 3D Render (5 prompts)

**Prompt 27 — 3D Icon Set**
```
3D rendered icon of a shopping cart in glossy plastic, isometric
view, soft studio lighting with ambient occlusion, clay render style
with subtle pastel colors, clean white background, modern 3D icon
design, high quality render with soft shadows, Spline/Blender style
--ar 1:1 --v 6
```

**Prompt 28 — 3D Abstract Shapes**
```
3D rendered abstract composition with floating geometric shapes (sphere,
torus, cube) in matte pastel colors (pink, blue, yellow, green), soft
gradient background, studio lighting with subtle shadows, modern 3D
art, C4D/Octane render quality, clean minimalist arrangement
--ar 16:9 --v 6
```

**Prompt 29 — 3D Character Mascot**
```
3D rendered cute robot mascot character in glossy white and blue plastic,
friendly expression with big eyes, Pixar-style character design, three
quarter view pose, studio lighting with soft rim light, clean gradient
background, tech startup mascot, high quality character render
--ar 1:1 --v 6
```

**Prompt 30 — 3D Product Mockup**
```
3D rendered isometric smartphone floating above abstract geometric
pedestals in matching colors, app screens visible on display, clean
tech presentation style, soft studio lighting with gradient background
in brand colors, high-end product visualization, Octane render quality
--ar 16:9 --v 6
```

**Prompt 31 — 3D Glass Morphism**
```
3D rendered glassmorphism UI card floating in space, frosted glass
material with colorful gradient orbs visible through it, modern UI
trend, soft lighting creating glass refractions, depth of field blur,
contemporary web design aesthetic, clean and elegant
--ar 16:9 --v 6
```

### 2.6 Architectural & Interior (5 prompts)

**Prompt 32 — Modern Facade**
```
Architectural photography of a modern minimalist house with clean white
volumes, large floor-to-ceiling windows, natural stone accent wall,
surrounded by Japanese garden landscaping, blue hour twilight sky,
warm interior lights visible, architectural digest quality, wide angle
16mm lens, perfectly composed
--ar 16:9 --v 6 --style raw
```

**Prompt 33 — Restaurant Interior**
```
Interior photography of a modern restaurant with exposed brick walls,
industrial pendant lights hanging from high ceiling, warm wood tables
with leather banquette seating, ambient warm lighting, empty restaurant
before service, architectural interior photography, 24mm lens, inviting
atmosphere
--ar 16:9 --v 6
```

**Prompt 34 — Office Space**
```
Modern open-plan office space with biophilic design, living green wall,
natural wood desks, ergonomic chairs, large windows with city view,
abundant natural daylight, architectural photography, wide angle,
clean and inspiring workspace, tech company aesthetic
--ar 16:9 --v 6
```

**Prompt 35 — Retail Store**
```
Interior of a premium concept retail store with minimalist displays,
polished concrete floors, track lighting focused on products, warm
neutral color palette with wood accents, architectural retail
photography, clean organized merchandising, Apple store meets
boutique aesthetic, 24mm lens
--ar 16:9 --v 6
```

**Prompt 36 — Hotel Lobby**
```
Luxury hotel lobby with double-height ceiling, massive contemporary
art installation, plush seating areas with velvet sofas, warm ambient
lighting from sculptural floor lamps, marble floors, architectural
hospitality photography, wide angle, opulent yet welcoming
--ar 16:9 --v 6 --style raw
```

---

## 3. Guia de Parâmetros por Plataforma

### Midjourney

| Parâmetro | Valores | Descrição |
|---|---|---|
| `--ar` | 1:1, 16:9, 4:5, 9:16, 3:2, 2:3 | Aspect ratio (proporção) |
| `--v` | 5, 5.2, 6, 6.1 | Versão do modelo |
| `--style` | raw, default | Estilo de renderização |
| `--q` | 0.25, 0.5, 1, 2 | Qualidade (custo em GPU) |
| `--chaos` | 0-100 | Variedade/diversidade de resultados |
| `--stylize` | 0-1000 | Quão artística a IA deve ser |
| `--seed` | 0-4294967295 | Reprodutibilidade do resultado |
| `--no` | texto | Elementos a evitar |
| `--tile` | — | Pattern sem emenda (seamless) |

**Valores Recomendados Midjourney:**
- Produto: `--v 6 --style raw --q 2 --ar 4:5`
- Paisagem: `--v 6 --ar 16:9 --stylize 250`
- Retrato: `--v 6 --style raw --ar 4:5 --stylize 100`
- Variedade criativa: `--chaos 30-60`
- Consistência: `--seed` fixo + mesmo prompt

### DALL-E 3 (OpenAI/ChatGPT)

| Parâmetro | Valores | Descrição |
|---|---|---|
| `size` | 1024x1024, 1792x1024, 1024x1792 | Dimensões da imagem |
| `style` | vivid, natural | Estilo visual |
| `quality` | standard, hd | Nível de detalhe |

**Dicas DALL-E 3:**
- Funciona melhor com prompts descritivos em linguagem natural
- Menos sensível a parâmetros técnicos que Midjourney
- Excelente para seguir instruções textuais complexas
- `style: vivid` = cores mais saturadas e dramáticas
- `style: natural` = mais realista e orgânico

### Flux (Black Forest Labs)

| Parâmetro | Valores | Descrição |
|---|---|---|
| `aspect_ratio` | 1:1, 16:9, 9:16, 4:3, 3:2 | Proporção |
| `guidance_scale` | 3.0-7.0 | Fidelidade ao prompt |
| `num_inference_steps` | 20-50 | Qualidade/detale |
| `seed` | qualquer | Reprodutibilidade |

**Dicas Flux:**
- Excelente qualidade de texto renderizado na imagem
- Open source, pode rodar localmente
- Flux.1 Pro = melhor qualidade, Flux.1 Dev = open weight
- Menor custo que Midjourney para uso intensivo
- Bom para imagens com texto incorporado

### Stable Diffusion (Local/Reprodução)

| Parâmetro | Valores | Descrição |
|---|---|---|
| `steps` | 20-50 | Passos de geração |
| `cfg_scale` | 5-12 | Adesão ao prompt |
| `sampler` | DPM++ 2M Karras, Euler a | Algoritmo de sampling |
| `width/height` | 512, 768, 1024 | Resolução base |
| `seed` | qualquer | Reprodutibilidade |

**Dicas Stable Diffusion:**
- Controle total rodando localmente
- LoRA models para estilos específicos
- ControlNet para pose, depth, canny edge
- Maior curva de aprendizado, maior controle
- ComfyUI e Automatic1111 são interfaces populares

---

## 4. Comparação de Plataformas

### Tabela Comparativa

| Critério | Midjourney v6 | DALL-E 3 | Flux.1 Pro | Stable Diffusion XL |
|---|---|---|---|---|
| **Realismo** | Excelente | Muito Bom | Excelente | Bom (depende do model) |
| **Texto na imagem** | Bom | Muito Bom | Excelente | Regular |
| **Mãos/dedos** | Bom | Muito Bom | Bom | Variável |
| **Facilidade** | Médio | Fácil | Fácil | Difícil |
| **Custo** | $10-60/mês | $20/mês (ChatGPT+) | Pay-per-use | Gratuito (local) |
| **Velocidade** | 30-60s | 10-20s | 5-15s | Depende da GPU |
| **Customização** | Alta | Baixa | Média | Máxima |
| **Consistência** | Média (seed) | Média | Boa | Alta (com seed + LoRA) |
| **Resolução máx** | ~4096px | 1792x1024 | ~2048px | Ilimitada (upscale) |
| **API disponível** | Não oficial | Sim | Sim | Sim (open source) |
| **Uso comercial** | Sim (plano pago) | Sim | Sim | Sim |

### Quando Usar Cada Plataforma

| Cenário | Plataforma Recomendada | Por quê |
|---|---|---|
| Produto para e-commerce | **Midjourney v6** | Melhor realismo e qualidade |
| Social media rápido | **DALL-E 3** | Fácil, rápido, bom resultado |
| Imagens com texto | **Flux.1 Pro** | Melhor renderização de texto |
| Batch/produção em escala | **Stable Diffusion** | Gratuito, API, customizável |
| Conceito criativo rápido | **DALL-E 3** | Entende prompts naturais |
| Arte estilizada | **Midjourney v6** | Melhor estética artística |
| Retratos realistas | **Midjourney v6** | Melhor anatomia facial |
| Ilustração flat/vector | **DALL-E 3** | Segue melhor instruções de estilo |
| Prototipagem UI | **Flux.1 Pro** | Bom para mockups e UI concepts |
| Treinamento custom | **Stable Diffusion** | Fine-tuning com LoRA possível |

---

## 5. Negative Prompts — O que Evitar

### Negative Prompts Genéricos

```
--no text, watermark, logo, signature, username, blurry, low quality,
deformed hands, extra fingers, mutated, ugly, cropped, oversaturated
```

### Lista de Negative Tokens

| Token | Quando Usar |
|---|---|
| `text, watermark` | Sempre, a menos que texto seja desejado |
| `blurry, low quality` | Sempre para garantir nitidez |
| `deformed, mutated` | Para retratos e figuras humanas |
| `extra fingers, bad hands` | Sempre que houver mãos |
| `ugly, poorly drawn` | Geral, qualidade geral |
| `cropped, out of frame` | Para garantir composição completa |
| `oversaturated` | Quando cores naturais são preferidas |
| `3d, render` | Quando look fotográfico é desejado |
| `cartoon, illustration` | Quando look fotográfico é desejado |
| `photo, realistic` | Quando look ilustração é desejado |

---

## 6. Receitas de Prompt — Quick Reference

### Produto E-commerce

```
[produto] em [cor/material], sobre [superfície], [iluminação de estúdio],
fundo [cor/gradiente], fotografia de produto profissional, [ângulo],
[estilo de marca], --ar 4:5 --v 6 --style raw
```

### Social Media Post

```
[tema principal], [estilo visual vibrante], cores [paleta], design
moderno para Instagram, composição equilibrada, alta qualidade,
--ar 1:1 --v 6 --stylize 250
```

### Hero Banner Website

```
[cena/expansiva], [iluminação dramática], [estilo cinematográfico],
wide angle, high resolution, background for website hero section,
[humor/atmosfera], --ar 21:9 --v 6 --ar 16:9
```

### Ícone/Ilustração 3D

```
3D render de [objeto], material [plástico fosco/metal/vidro],
cores [paleta], fundo branco, iluminação de estúdio suave,
estilo ícone moderno 3D, renderização limpa, --ar 1:1 --v 6
```

### Background/Textura

```
Abstract [tipo: gradient/geometry/pattern] em cores [paleta],
[tipo: suave/vibrante/minimal], seamless pattern, alta resolução,
background design, --ar 16:9 --v 6 --tile
```

---

## 7. Ferramentas Complementares

| Ferramenta | Uso | URL |
|---|---|---|
| **Magnific AI** | Upscale de imagens IA | magnific.ai |
| **Topaz Photo AI** | Upscale + enhancement | topazlabs.com |
| **Krea AI** | Real-time generation + enhancement | krea.ai |
| **Leonardo AI** | Alternative com controle de modelo | leonardo.ai |
| **Clipdrop** | Remove background, relight | clipdrop.co |
| **Photoroom** | Product photography AI | photoroom.com |
| **Midjourney Web** | Versão web do Midjourney | midjourney.com |
| **Playground AI** | Multi-model generation | playgroundai.com |
| **Ideogram** | Imagens com texto excelente | ideogram.ai |
| **Recraft** | Vector + illustration IA | recraft.ai |

---

## 8. Checklist de Qualidade da Imagem Gerada

| Critério | Verificação |
|---|---|
| Resolução adequada ao uso? | Mínimo 1024px para web, 2048px para print |
| Mãos/dedos corretos? | Contar dedos, verificar anatomia |
| Texto legível (se aplicável)? | Sem caracteres fantasmas ou distorcidos |
| Composição equilibrada? | Regra dos terços, espaço negativo |
| Cores consistentes com marca? | Comparar com paleta definida |
| Sem artefatos visuais? | Sem blur estranho, sem distorções |
| Proporcionalidade correta? | Objetos e pessoas com proporções reais |
| Iluminação coerente? | Fonte de luz consistente na cena |
| Uso comercial liberado? | Verificar termos da plataforma usada |

---

*Documento criado para o squad pedro-design. Última atualização: Abril 2026.*
