---
task: Create SVG Assets
responsavel: "@pdg-illustration-artist"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: asset_type
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "icon | logo | illustration | pattern | character | infographic | decoration"
  - campo: brief
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Descrição do que deve ser criado"
  - campo: style
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "outline"
    validacao: "outline | filled | duotone | gradient | flat | isometric"
  - campo: colors
    tipo: array
    origem: User Input ou brand system
    obrigatorio: false
    validacao: "Array de HEX colors ou 'currentColor'"
  - campo: sizes
    tipo: array
    origem: User Input
    obrigatorio: false
    default: "[24, 48]"
    validacao: "Array de tamanhos em px para export"
  - campo: export_formats
    tipo: array
    origem: User Input
    obrigatorio: false
    default: "['svg', 'png@1x', 'png@2x']"
    validacao: "svg | png@1x | png@2x | png@3x | ico | webp"

Saida:
  - campo: svg_master
    tipo: file
    destino: "assets/svg/[name].svg"
    persistido: true
  - campo: svg_optimized
    tipo: file
    destino: "assets/svg/[name].min.svg"
    persistido: true
  - campo: png_exports
    tipo: files
    destino: "assets/png/"
    persistido: true
  - campo: asset_spec
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] SVG com viewBox correto"
  - "[ ] Paths semânticos (nomeados e agrupados)"
  - "[ ] Funciona em tamanho mínimo (16px)"
  - "[ ] Funciona em monocromático"
  - "[ ] currentColor aplicado onde adequado"
  - "[ ] SVG otimizado (sem metadados desnecessários)"
  - "[ ] PNG exportado nos tamanhos solicitados"
  - "[ ] Acessibilidade: aria-label ou title"
---

# Create SVG Assets

## Purpose

Criar assets vetoriais SVG profissionais com arquitetura limpa, otimizados para uso em web, apps e design systems. Inclui todos os formatos de exportação necessários.

## SVG Architecture Standards

### Template de SVG Profissional

```svg
<!-- ICON — 24x24 -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  aria-hidden="true"
>
  <g id="icon-name">
    <!-- paths aqui -->
  </g>
</svg>

<!-- ILLUSTRATION — com dimensões específicas -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 300"
  width="400"
  height="300"
  role="img"
  aria-labelledby="title-id"
>
  <title id="title-id">Descrição acessível</title>
  <g id="background">...</g>
  <g id="midground">...</g>
  <g id="foreground">...</g>
</svg>
```

### SVG Optimization Checklist

```
REMOVER:
- id="Layer_1" (Illustrator legacy)
- xmlns:xlink (desnecessário em SVG 2)
- x="0px" y="0px" (redundante)
- width/height absolutos (se tiver viewBox)
- Comments do editor (<!-- Created in Illustrator -->)
- Estilos inline desnecessários
- Grupos vazios

MANTER:
- viewBox
- fill/stroke necessários
- id em grupos semânticos
- title/desc para acessibilidade
```

### Especificações por Tipo

**ÍCONES UI (24x24):**
```svg
viewBox="0 0 24 24"
stroke-width="1.5"     <!-- light -->
stroke-width="2"       <!-- regular (padrão) -->
stroke-width="2.5"     <!-- bold -->
stroke-linecap="round"
stroke-linejoin="round"
fill="none"
stroke="currentColor"
```

**ÍCONES GRANDES (48x48 ou 64x64):**
```svg
viewBox="0 0 48 48"
stroke-width="2"
fill="none"
stroke="currentColor"
```

**LOGOS:**
```svg
viewBox="0 0 [width] [height]"
<!-- Sem fill="none" global — logo tem fills -->
<!-- preserve colors exatas da marca -->
```

**ILUSTRAÇÕES:**
```svg
viewBox="0 0 [width] [height]"
<!-- Grupos semânticos: background, elements, foreground -->
<!-- Naming: id="building", id="person", id="tree" -->
```

## Execution Steps

### Step 1: Design do Asset

Criar o asset seguindo:
- Grid apropriado (24x24 para ícones, livre para ilustrações)
- Consistência de estilo com o restante do sistema
- Verificar versão em preto e branco antes de adicionar cor

### Step 2: Otimização SVG

```bash
# Com SVGO (se disponível)
svgo input.svg -o output.min.svg

# Manualmente: remover atributos desnecessários
# Verificar: viewBox está correto?
# Verificar: paths desnecessariamente complexos?
```

### Step 3: Verificação de Qualidade

```
TESTES OBRIGATÓRIOS:
- [ ] Renderiza em 16x16 sem perda de reconhecimento
- [ ] Funciona em preto puro (#000000)
- [ ] Funciona em branco puro (#FFFFFF)
- [ ] Funciona com opacity 50%
- [ ] Tamanho do arquivo aceitável (<5KB para ícone, <50KB para ilustração)
```

### Step 4: Exportação PNG

```
ESPECIFICAÇÕES POR USO:

WEB PADRÃO:
icon@1x.png    → tamanho original (24px para ícone)
icon@2x.png    → 2x (48px para ícone)
icon@3x.png    → 3x (72px para ícone)

SOCIAL MEDIA:
icon-social.png → 1200x1200px (LinkedIn, Facebook)
icon-og.png     → 1200x630px (Open Graph)

APP ICON:
icon-app-512.png   → 512x512
icon-app-1024.png  → 1024x1024

FAVICON:
favicon-16.png   → 16x16
favicon-32.png   → 32x32
favicon-48.png   → 48x48
favicon-64.png   → 64x64
favicon-128.png  → 128x128
favicon-256.png  → 256x256
favicon.ico      → multi-size (16,32,48)
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-illustration-artist (Strokes)
tags:
  - pedro-design
  - svg
  - icons
  - illustration
  - assets
```
