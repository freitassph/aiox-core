---
task: Create Favicon & App Icons
responsavel: "@pdg-visual-designer"
responsavel_type: agent
atomic_layer: task
elicit: false

Entrada:
  - campo: logo_svg
    tipo: file
    origem: pdg-create-brand-identity ou User Input
    obrigatorio: true
    validacao: "SVG do logo ou símbolo da marca"
  - campo: brand_colors
    tipo: object
    origem: brand system
    obrigatorio: true
    validacao: "Cor primária e secundária da marca"
  - campo: background_style
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "brand-color"
    validacao: "brand-color | transparent | white | dark"

Saida:
  - campo: favicon_set
    tipo: files
    destino: "favicon/"
    persistido: true
  - campo: apple_touch_icons
    tipo: files
    destino: "favicon/apple/"
    persistido: true
  - campo: android_icons
    tipo: files
    destino: "favicon/android/"
    persistido: true
  - campo: social_preview
    tipo: file
    destino: "favicon/og-image.png"
    persistido: true
  - campo: html_snippet
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] favicon.ico (16, 32, 48px multi-size)"
  - "[ ] favicon-16x16.png"
  - "[ ] favicon-32x32.png"
  - "[ ] favicon-96x96.png"
  - "[ ] apple-touch-icon-180x180.png"
  - "[ ] apple-touch-icon-167x167.png (iPad)"
  - "[ ] apple-touch-icon-152x152.png"
  - "[ ] android-chrome-192x192.png"
  - "[ ] android-chrome-512x512.png"
  - "[ ] msTile-150x150.png (Windows)"
  - "[ ] og-image.png (1200x630) para redes sociais"
  - "[ ] safari-pinned-tab.svg (SVG monocromático)"
  - "[ ] site.webmanifest gerado"
  - "[ ] HTML <head> snippet gerado"
---

# Create Favicon & App Icons

## Purpose

Criar o conjunto completo de ícones para web, mobile e todas as plataformas. Um favicon completo cobre todos os contextos onde a marca aparece como ícone: browser tab, bookmark, home screen, splash screen.

## Complete Favicon Set

### Tamanhos por plataforma

```
BROWSER FAVICONS:
favicon.ico          → 16x16, 32x32, 48x48 (multi-size ICO)
favicon-16x16.png    → Chrome, Firefox tab
favicon-32x32.png    → Windows taskbar, Safari
favicon-96x96.png    → Google TV, Chrome

APPLE (iOS / macOS Safari):
apple-touch-icon.png               → 180x180 (iOS padrão atual)
apple-touch-icon-180x180.png       → iPhone 6+, iPhone 7+
apple-touch-icon-167x167.png       → iPad Pro
apple-touch-icon-152x152.png       → iPad, iPad mini
apple-touch-icon-120x120.png       → iPhone (legacy)
apple-touch-icon-76x76.png         → iPad mini (legacy)

ANDROID (Chrome, PWA):
android-chrome-192x192.png         → Add to homescreen
android-chrome-512x512.png         → Splash screen, app icon

WINDOWS (Edge, MSEdge tiles):
msTile-144x144.png                 → IE11 pinned site
msTile-150x150.png                 → Windows 8/10 tile

SAFARI PINNED TAB:
safari-pinned-tab.svg              → SVG monocromático preto

OPEN GRAPH / SOCIAL:
og-image.png                       → 1200x630 — link preview
twitter-card.png                   → 1200x600 — Twitter card

PWA MANIFEST:
maskable-icon-512x512.png          → Android adaptive icon (safe zone)
```

### Design por Plataforma

**Ícone principal (favicon):**
```
REGRAS PARA FAVICONS:
- Deve funcionar em 16x16 (muito pequeno!)
- Priorizar o símbolo/ícone da marca, não o wordmark
- Em 16x16: máximo 2-3 formas distintas
- Background geralmente sólido (mais legível que transparente)
- Verificar: como aparece em abas abertas do Chrome?
- Verificar: como aparece em modo escuro do browser?
```

**Apple Touch Icon:**
```
SPECS APPLE:
- Fundo sólido (iOS arredonda os cantos automaticamente)
- Padding interno de ~10% (safe zone para arredondamento)
- Cor de fundo = cor primária da marca ou branco
- Sem cantos arredondados no arquivo (iOS aplica)
- Alta resolução (180px mínimo)
```

**Android Adaptive Icon:**
```
SPECS ANDROID MASKABLE:
- 512x512px
- Safe zone: círculo central de 409x409px (80%)
- Fundo pode ser preenchido até a borda
- Android "mascara" em diferentes formas (círculo, squircle, teardrop)
- Testar em: adaptivefavicon.com
```

### site.webmanifest

```json
{
  "name": "[Brand Name]",
  "short_name": "[Short Name]",
  "description": "[Tagline]",
  "icons": [
    {
      "src": "/favicon/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/favicon/maskable-icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#[primary-color]",
  "background_color": "#[background-color]",
  "display": "standalone",
  "start_url": "/"
}
```

### HTML Head Snippet

```html
<!-- Favicon completo -->
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="167x167" href="/favicon/apple-touch-icon-167x167.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
<link rel="manifest" href="/favicon/site.webmanifest">
<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#[primary-color]">
<link rel="shortcut icon" href="/favicon/favicon.ico">
<meta name="msapplication-TileColor" content="#[primary-color]">
<meta name="msapplication-config" content="/favicon/browserconfig.xml">
<meta name="theme-color" content="#[primary-color]">

<!-- Open Graph -->
<meta property="og:image" content="/favicon/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="/favicon/twitter-card.png">
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-visual-designer (Vignelli)
tags:
  - pedro-design
  - favicon
  - app-icon
  - pwa
  - web
```
