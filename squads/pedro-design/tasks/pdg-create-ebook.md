---
task: Create Ebook / PDF Editorial
responsavel: "@pdg-print-editorial"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: ebook_type
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "ebook | whitepaper | report | guide | catalog | magazine | manual"
  - campo: title
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: content
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Conteúdo completo ou outline detalhado"
  - campo: brand
    tipo: object
    origem: brand system ou User Input
    obrigatorio: false
    validacao: "Cores, fontes, logo da marca"
  - campo: pages_estimate
    tipo: integer
    origem: User Input
    obrigatorio: false
    default: 20
  - campo: format
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "A4"
    validacao: "A4 | letter | wide-16-9 | square | custom"
  - campo: style
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "modern-clean"
    validacao: "modern-clean | editorial-bold | minimal | corporate | creative"

Saida:
  - campo: ebook_pdf_digital
    tipo: file
    destino: "[nome]-digital.pdf"
    persistido: true
  - campo: ebook_pdf_print
    tipo: file
    destino: "[nome]-print.pdf"
    persistido: true
  - campo: ebook_cover
    tipo: file
    destino: "[nome]-cover.png"
    persistido: true
  - campo: ebook_layout_spec
    tipo: object
    destino: Console
    persistido: false

Checklist:
  - "[ ] Sistema editorial definido (grid, tipografia, cores, componentes)"
  - "[ ] Capa criada (impactante e clara)"
  - "[ ] Índice criado com links clicáveis"
  - "[ ] Páginas de abertura de capítulo criadas"
  - "[ ] Páginas de conteúdo com hierarquia clara"
  - "[ ] Callouts/highlights/quotes estilizados"
  - "[ ] Imagens com captions"
  - "[ ] Data visualizations (se houver)"
  - "[ ] CTA final"
  - "[ ] Página de contato/sobre"
  - "[ ] PDF digital exportado (RGB, links ativos)"
  - "[ ] PDF print exportado (CMYK, 300 DPI)"
---
## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed



# Create Ebook / PDF Editorial

## Purpose

Criar ebooks, whitepapers, guias e documentos PDF com design editorial de alta qualidade. Um ebook bem desenhado aumenta o tempo de leitura, a percepção de valor do conteúdo e a autoridade da marca.

## Sistema Editorial

### Grid por Formato

**A4 Portrait (210x297mm):**
```
Margens:
  Topo: 20mm
  Base: 25mm (folio + numeração)
  Externa: 18mm
  Interna: 22mm (se impresso, encadernação)

Colunas: 1 (dense text) ou 2 (mais dinâmico)
Gutter: 8mm
Baseline grid: 4.5mm (18px equivalente)
```

**Wide 16:9 (1920x1080px / digital):**
```
Margens: 80-100px todos os lados
Colunas: 12 cols / Gutter: 24px
Safe zone para apresentação: 100px adicionais
```

**A5 (148x210mm — ebook compacto):**
```
Margens: 15mm (externa), 18mm (interna)
Coluna única
Ideal para leitura em tablet
```

### Componentes de Página

**1. Chapter Opener:**
```
Layout: Full bleed ou meia página
Elementos:
  - Número do capítulo (grande, display)
  - Título do capítulo
  - Introdução de 2-3 linhas (preview)
  - Visual/foto/ilustração relevante
```

**2. Content Page (standard):**
```
Layout: Grid rígido
Elementos:
  - Headline de seção (H2/H3)
  - Body text com leading confortável
  - Pull quote (quando disponível)
  - Imagem/Ilustração alinhada ao grid
  - Caption (abaixo da imagem)
  - Número de página (folio) + marca
```

**3. Full-Bleed Visual:**
```
Layout: Imagem ocupa 100% da página
Texto: Overlay com fundo semi-opaco ou fora da imagem
Uso: abertura de seção, estatística de impacto
```

**4. Data Spread:**
```
Layout: Infográficos e visualizações ocupam mais espaço que o texto
Elementos: charts, gráficos, diagramas com labels claros
```

**5. Quote/Highlight Box:**
```css
/* Callout box */
background: [brand-color-light]
border-left: 4px solid [brand-primary]
padding: 24px
font-size: 1.1x body
font-style: italic (para quotes de pessoa)
```

**6. CTA Final:**
```
Layout: Último spread do ebook
Elementos:
  - Headline forte (a transformação que o leitor viveu)
  - Próximo passo claro
  - Link/QR code
  - Contato direto
  - Logo e branding
```

### Escala Tipográfica para Ebook

```
Display (número capítulo): 72-96px
H1 (título de capítulo): 36-48px
H2 (seção): 24-28px
H3 (subseção): 18-20px
Body: 11-13px (print) / 16-18px (digital)
Caption: 9-10px (print) / 12-14px (digital)
Pull quote: 18-22px, italic
Folio: 9px
```

## Templates de Capa

### Capa Impactante — 5 estilos:

**1. TYPE-DOMINANT (Tipografia como Hero):**
```
Título enorme (80-120px, occupando 60% da página)
Subtítulo discreto abaixo
Autoria/marca no rodapé
Background: cor sólida da marca ou gradiente simples
Máximo impacto, mínima imagem
```

**2. IMAGE-DOMINANT (Foto como Hero):**
```
Foto full-bleed de alta qualidade
Título em overlay (tipografia em branco com shadow)
Marca no rodapé
Ideal quando a imagem comunica imediatamente o tema
```

**3. SPLIT LAYOUT:**
```
Lado esquerdo: cor sólida + título + branding
Lado direito: imagem ou ilustração
Equilíbrio entre visual e informação
```

**4. MINIMAL (Espaço em branco como luxury):**
```
90% espaço branco
Título no centro, fonte premium
Branding pequeno
Para whitepapers executivos e conteúdo de alto status
```

**5. EDITORIAL COVER (Estilo Revista):**
```
Grid editorial multi-elemento
Headline maior + múltiplas informações
Imagem integrada com tipografia
Para relatórios complexos e publicações recorrentes
```

## Execution Steps

### Step 1: Sistema Editorial

Antes de uma única página, criar:
- Paleta de cores (da marca ou específica para o documento)
- Escala tipográfica (fontes + tamanhos de cada nível)
- Grid (colunas, margens, baseline)
- Componentes reutilizáveis (callout, quote, caption, folio)

### Step 2: Capa e TOC

A capa deve comunicar o valor do conteúdo. Investir tempo aqui.
TOC com links clicáveis no PDF digital.

### Step 3: Content Flow

Seguir o ritmo:
- Não mais de 3 páginas densas seguidas
- Intercalar com visual, estatística, quote
- Cada spread deve ter seu próprio punto focal

### Step 4: Image Direction

Definir brief para `pdg-photo-director` ou `pdg-illustration-artist`:
- Quais páginas precisam de visual
- Estilo consistente com o editorial
- Tamanhos e proporções

### Step 5: Preflight

Antes do export:
- Todas as imagens em 300 DPI no tamanho real
- Fontes embedded
- Links funcionando
- Numeração correta
- Sangria (se print): 3mm em todos os lados

### Step 6: Export

```
PDF DIGITAL:
- Modo: RGB
- Qualidade: Máxima
- Links: ativos e funcionando
- Bookmark: estrutura hierárquica
- Tamanho alvo: <10MB para envio por email

PDF PRINT:
- Modo: CMYK
- Resolução: 300 DPI mínimo
- Sangria: 3mm
- Formato: PDF/X-1a (impressão offset) ou PDF/X-4

CAPA STANDALONE:
- PNG 2048px na dimensão maior
- Para uso em email marketing, landing page, redes sociais
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-print-editorial (Press)
tags:
  - pedro-design
  - ebook
  - pdf
  - editorial
  - print
  - whitepaper
```
