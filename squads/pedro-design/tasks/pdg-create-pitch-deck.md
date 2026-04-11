---
task: Create Pitch Deck / Presentation
responsavel: "@pdg-slide-designer"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: deck_type
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "pitch-deck | corporate | sales | report | training | keynote | product-launch"
  - campo: company_name
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: content_brief
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Conteúdo ou outline do que deve estar no deck"
  - campo: brand
    tipo: object
    origem: brand system ou User Input
    obrigatorio: false
    validacao: "Cores, fontes, logo da marca"
  - campo: slides_target
    tipo: integer
    origem: User Input
    obrigatorio: false
    default: 12
  - campo: audience
    tipo: string
    origem: User Input
    obrigatorio: false
    validacao: "investors | clients | team | executive | conference | public"
  - campo: export_format
    tipo: array
    origem: User Input
    obrigatorio: false
    default: "['pdf', 'pptx']"

Saida:
  - campo: deck_pdf
    tipo: file
    destino: "[nome]-deck.pdf"
    persistido: true
  - campo: deck_pptx
    tipo: file
    destino: "[nome]-deck.pptx"
    persistido: true
  - campo: deck_slides_png
    tipo: files
    destino: "slides/png/"
    persistido: false
  - campo: speaker_notes
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Story arc definido (problema → solução → evidência → CTA)"
  - "[ ] Master slides criados (capa, conteúdo, full-bleed, data)"
  - "[ ] Máximo 1 ideia por slide"
  - "[ ] Hierarquia visual clara em cada slide"
  - "[ ] Dados visualizados com charts legíveis"
  - "[ ] Fontes não menores que 18pt"
  - "[ ] Consistência de layout e cores"
  - "[ ] Speaker notes adicionadas"
  - "[ ] Export em todos os formatos solicitados"
---
## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed



# Create Pitch Deck / Presentation

## Purpose

Criar apresentações profissionais que contam histórias convincentes. Um deck excepcional tem clareza visual, hierarquia impecável e um arco narrativo que conduz o espectador exatamente até a ação desejada.

## Estruturas por Tipo

### Pitch Deck (Investidores)

```
Slide 1 — COVER
  Empresa + Logo + Tagline (1 frase que define tudo)
  "A empresa que [verbo transformador] para [audiência]"

Slide 2 — PROBLEMA
  Headline: "O problema que custou [$X] ao mercado em [ANO]"
  Visual: diagrama do problema ou dado de impacto enorme
  3 bullets: sintomas do problema (o que as pessoas sentem)

Slide 3 — SOLUÇÃO
  Headline: "[Nome] resolve isso com [mecanismo único]"
  Visual: screenshot, diagrama, produto
  3 bullets: como funciona (simples)

Slide 4 — PRODUTO (Demo)
  Screenshots ou demo flow em 3-5 passos
  "Como funciona em 60 segundos"

Slide 5 — MODELO DE NEGÓCIO
  Como a empresa ganha dinheiro
  Pricing visual (tier table ou modelo claro)

Slide 6 — TRAÇÃO ⭐ (mais importante)
  Gráfico de crescimento
  "De X para Y em Z meses"
  Logos de clientes / métricas principais

Slide 7 — MERCADO
  TAM/SAM/SOM visual
  "Mercado de $[X]B crescendo a [Y]% ao ano"

Slide 8 — COMPETIÇÃO
  Competitive matrix (quadrante ou tabela)
  "Nós somos os únicos que..."

Slide 9 — TIME
  Fotos + nomes + credenciais relevantes (não currículo)

Slide 10 — FINANCEIRO
  Projeção 3 anos (simples, visual)
  Premissas principais

Slide 11 — CAPTAÇÃO
  "Estamos levantando $[X]"
  "Para atingir [milestone] em [timeline]"
  Uso do capital (pie chart simples)

Slide 12 — CTA
  Próximo passo claro
  Contato direto (email, calendly)
```

### Pitch Visual Standards

```
TIPOGRAFIA DO PITCH:
Headline: 36-64px (máximo impacto)
Body: 20-24px (legível projetado)
Data label: 18-20px
Source: 12-14px no rodapé

PROPORÇÕES DE SLIDE:
Imagem/Visual: 40-60% da área
Texto: 30-40% da área
Espaço: 20-30% respiração

PALETA:
Fundo: escuro (navy/charcoal) ou claro (branco)
Acento: cor primária da marca
Texto: branco (fundo escuro) ou quase preto (fundo claro)
Dados: cor de destaque para o número principal
```

## Componentes Visuais

### Data Slide

```
ANATOMIA DE UMA SLIDE DE DADO:
1. HEADLINE = A CONCLUSÃO (não a descrição)
   RUIM: "Métricas de Crescimento Q4 2024"
   BOM: "Crescemos 3x em 90 dias"

2. VISUAL PRINCIPAL = 1 número ou 1 gráfico
   Se número: 80-120px, cor de destaque
   Se gráfico: clean, sem grid lines, cor de destaque na série principal

3. CONTEXTO = 1-2 linhas abaixo
   "De [baseline] para [resultado] em [período]"

4. CREDIBILIDADE = fonte pequena no rodapé
   "Fonte: dados internos, Jan 2024"
```

### Competitive Matrix

```
VISUAL:
Eixo X: Atributo 1 (ex: simplicidade)
Eixo Y: Atributo 2 (ex: poder/recursos)

Competidores: pontos cinzas, nomes pequenos
Nós: ponto colorido, logo/nome em destaque, tamanho maior
Posição: quadrante superior direito (sempre)

NOTA: a matrix deve ser HONESTA mas favorável.
Escolher os eixos que melhor posicionam a empresa.
```

## Speaker Notes Template

```
Slide [X] — [TÍTULO]:
[O que dizer em voz alta — 30-60 segundos]
[Transição para o próximo slide]
[Possíveis perguntas e respostas]
```

## Execution Steps

### Step 1: Story Outline

Antes de qualquer slide, criar o story board em texto:
```
Slide 1: [headline]
Slide 2: [headline]
...
```
Validar com o usuário antes de avançar.

### Step 2: Master Slides

Criar os templates base:
- Cover master
- Content master (título + corpo)
- Full-bleed master (imagem/visual)
- Data master (número ou gráfico dominante)
- Section break master

### Step 3: Build Slides

Um slide por vez, garantindo:
- UMA ideia por slide
- Hierarquia clara
- Visual quando disponível

### Step 4: Visual Sourcing

Identificar slides que precisam de:
- Foto (brief para `pdg-photo-director`)
- Ilustração (brief para `pdg-illustration-artist`)
- Gráfico (criar internamente)
- Ícone (brief para `pdg-illustration-artist`)

### Step 5: Export

```
EXPORT CHECKLIST:
[ ] PDF interativo (links ativos, resolução 72dpi para tela)
[ ] PPTX (fontes embedded, animações preservadas)
[ ] PNG slides (1920x1080, para uso social/email)
[ ] PDF print (se for imprimir, 150dpi)
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-slide-designer (Stage)
tags:
  - pedro-design
  - pitch-deck
  - presentation
  - slides
  - keynote
```
