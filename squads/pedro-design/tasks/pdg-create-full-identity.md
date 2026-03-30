---
task: Create Complete Visual Identity
responsavel: "@pdg-chief"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: brand_name
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: brief
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Brief completo: setor, audiência, personalidade, referências, anti-referências"
  - campo: deliverables_scope
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "full"
    validacao: "essential | standard | full | enterprise"
  - campo: industry
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: references
    tipo: array
    origem: User Input
    obrigatorio: false

Saida:
  - campo: brand_strategy
    tipo: document
    destino: "identity/brand-strategy.md"
    persistido: true
  - campo: logo_files
    tipo: files
    destino: "identity/logo/"
    persistido: true
  - campo: color_system
    tipo: document
    destino: "identity/color-system.md"
    persistido: true
  - campo: typography_system
    tipo: document
    destino: "identity/typography.md"
    persistido: true
  - campo: brandbook_pdf
    tipo: file
    destino: "identity/brandbook.pdf"
    persistido: true
  - campo: applications
    tipo: files
    destino: "identity/applications/"
    persistido: true

Checklist:
  - "[ ] Brand Discovery completado"
  - "[ ] Brand Platform documentado (missão, visão, valores, personalidade)"
  - "[ ] Logo: 3 conceitos desenvolvidos"
  - "[ ] Logo: 1 conceito refinado completo com todas as variações"
  - "[ ] Color System: primária + secundária + neutros + semânticas"
  - "[ ] Typography System: fontes selecionadas + escala completa"
  - "[ ] Imagery Style: mood board + diretrizes fotográficas"
  - "[ ] Iconografia: estilo definido + biblioteca base"
  - "[ ] Aplicações: mínimo 8 aplicações com mockup"
  - "[ ] Brandbook PDF completo gerado"
  - "[ ] Voice & Tone documentado"
  - "[ ] Quality gate pelo pdg-auditor"
---

# Create Complete Visual Identity

## Purpose

Orquestrar a criação de uma identidade visual completa do zero, coordenando todos os agentes do squad para entregar uma marca coesa, estratégica e visualmente excepcional.

## Escopos de Entrega

### ESSENTIAL (startup, projeto pessoal):
```
- Brand Platform (missão, visão, valores)
- Logo (1 conceito, 4 variações: cor, P&B, negativo, símbolo)
- Color Palette (primária + 1 secundária + neutros)
- Typography (2 fontes + escala básica)
- Brandbook PDF (20-30 páginas)
- Cartão de visita + papel timbrado + assinatura email
```

### STANDARD (PME, série A):
```
Tudo do ESSENTIAL +
- Logo (2 conceitos apresentados, 1 selecionado + 6 variações)
- Color System completo (4+ cores + escala tonal)
- Typography System (2-3 fontes + escala completa)
- Imagery Style Guide + moodboard
- Iconografia: estilo + 20 ícones base
- Brandbook PDF (40-60 páginas)
- 10 aplicações com mockup
- Social media kit (templates)
```

### FULL (enterprise, serie B+, rebrand):
```
Tudo do STANDARD +
- 3 conceitos de logo apresentados
- Brand Voice completo
- Motion principles
- Design System fundação (tokens)
- Packaging mockup (se produto físico)
- Signage mockup (se espaço físico)
- Brandbook PDF (60-100 páginas)
- 15+ aplicações com mockup
- Guidelines de uso por canal
```

### ENTERPRISE (grandes empresas, IPO, global brand):
```
Tudo do FULL +
- Brand Architecture (se múltiplos produtos/linhas)
- Global adaptations (múltiplos idiomas/culturas)
- Brand Training material
- Digital Asset Management (nomenclatura, organização)
- Brand governance framework
- Launch kit completo
```

## Sequência de Agentes

```
FASE 1 — ESTRATÉGIA (pdg-chief → pdg-brand-identity):
pdg-chief: brief analysis + project brief decomposto
pdg-brand-identity: brand discovery + brand platform

FASE 2 — VISUAL FOUNDATION (pdg-brand-identity + pdg-typography-master):
pdg-brand-identity: logo design (3 conceitos → 1 selecionado + variações)
pdg-brand-identity: color system
pdg-typography-master: font selection + type scale

FASE 3 — SISTEMA VISUAL (pdg-visual-designer):
pdg-visual-designer: linguagem visual completa
pdg-visual-designer: grid system + componentes
pdg-illustration-artist: ícones base + estilo de ilustração

FASE 4 — APLICAÇÕES (múltiplos agentes):
pdg-print-editorial: brandbook, papelaria, ebook
pdg-mockup-3d-artist: mockups de apresentação
pdg-photo-director: mood board fotográfico
pdg-social-media: templates sociais
pdg-slide-designer: template de apresentação

FASE 5 — QUALIDADE (pdg-auditor):
pdg-auditor: audit completo com scope "brand-identity"
pdg-chief: revisão final e síntese
```

## Brand Discovery Template

```markdown
# Brand Discovery — [Nome da Marca]

## ESSÊNCIA
- O que a empresa faz de forma única?
- Qual problema resolve que ninguém mais resolve assim?
- Se fosse uma pessoa famosa, quem seria? Por quê?
- 3 adjetivos que a empresa É
- 3 adjetivos que a empresa NÃO É

## AUDIÊNCIA
- Descreva o cliente ideal (psicografia, não só demografia)
- Qual a transformação que a marca proporciona?
- O que o cliente sente ANTES de conhecer a marca?
- O que o cliente sente DEPOIS?

## POSICIONAMENTO
- 3 maiores competidores diretos
- O que cada um faz bem?
- Qual espaço único esta marca pode ocupar?
- "Somos o único/a que [X] para [Y] de [Z] forma"

## VISÃO
- Onde a marca estará em 5 anos?
- Que impacto quer causar no mundo?
- Se fosse perfectamente bem-sucedida, o que teria mudado?

## REFERÊNCIAS VISUAIS
- Marcas que você admira visualmente (e por quê)
- Marcas no mesmo setor que você respeita
- Estilos que definitivamente NÃO quer

## RESTRIÇÕES
- Tem algum asset existente que DEVE ser mantido?
- Há restrições regulatórias de setor?
- Budget para fontes premium?
- Timeline?
```

## Deliverables Checklist por Escopo

```
LOGO PACKAGE:
[ ] logo-primary.svg (cor, horizontal)
[ ] logo-stacked.svg (cor, vertical — se houver)
[ ] logo-mark.svg (símbolo solo)
[ ] logo-wordmark.svg (texto solo — se houver)
[ ] logo-primary-black.svg (preto)
[ ] logo-primary-white.svg (branco, para fundos escuros)
[ ] logo-primary-reversed.svg (negativo)
[ ] logo-favicon.svg (versão mínima, 16x16-ready)
[ ] logo-usage-guide.pdf

COLOR SYSTEM:
[ ] color-system.md (todos os valores HEX/RGB/CMYK/Pantone)
[ ] color-swatches.pdf (para uso em design tools)

TYPOGRAPHY:
[ ] typography-system.md
[ ] font-files/ (se fontes customizadas)
[ ] type-specimen.pdf

BRANDBOOK:
[ ] [marca]-brandbook-v1.pdf (digital)
[ ] [marca]-brandbook-v1-print.pdf (print-ready)

APPLICATIONS:
[ ] business-card-mockup.jpg
[ ] letterhead-mockup.jpg
[ ] email-signature-code.html
[ ] social-media-kit/ (templates)
[ ] presentation-template.pptx
[ ] [outros conforme escopo]
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-chief (Verso)
tags:
  - pedro-design
  - brand-identity
  - visual-identity
  - full-identity
  - brandbook
```
