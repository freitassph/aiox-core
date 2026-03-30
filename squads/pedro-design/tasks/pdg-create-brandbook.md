---
task: Create Brandbook
responsavel: "@pdg-brand-identity"
responsavel_type: agent
atomic_layer: task
elicit: true

Entrada:
  - campo: brand_name
    tipo: string
    origem: User Input
    obrigatorio: true
    validacao: "Nome da marca"
  - campo: brand_platform
    tipo: object
    origem: pdg-create-brand-identity output ou User Input
    obrigatorio: true
    validacao: "Missão, visão, valores, personalidade, posicionamento"
  - campo: logo_files
    tipo: files
    origem: pdg-create-brand-identity output
    obrigatorio: true
    validacao: "SVG master de todas as variações de logo"
  - campo: color_system
    tipo: object
    origem: pdg-create-brand-identity output
    obrigatorio: true
    validacao: "Paleta completa com HEX, RGB, CMYK, Pantone"
  - campo: typography_system
    tipo: object
    origem: pdg-typography-master output
    obrigatorio: true
    validacao: "Fontes, escala, uso"
  - campo: format
    tipo: string
    origem: User Input
    obrigatorio: false
    default: "PDF"
    validacao: "PDF | interactive-PDF | Figma | web"

Saida:
  - campo: brandbook_pdf
    tipo: file
    destino: "brandbook/[brand-name]-brandbook-v1.pdf"
    persistido: true
  - campo: brandbook_sections
    tipo: files
    destino: "brandbook/sections/"
    persistido: true

Checklist:
  - "[ ] Seção 1: Brand Story (missão, visão, valores, personalidade)"
  - "[ ] Seção 2: Logo (todas variações, clear space, tamanho mínimo, usos incorretos)"
  - "[ ] Seção 3: Color System (paleta completa, proporções de uso)"
  - "[ ] Seção 4: Typography (fontes, escala, hierarquia, exemplos)"
  - "[ ] Seção 5: Imagery (estilo fotográfico, ilustração, ícones)"
  - "[ ] Seção 6: Applications (cartão, papel timbrado, social, digital, sinalização)"
  - "[ ] Seção 7: Voice & Tone (exemplos de copy correto × incorreto)"
  - "[ ] Seção 8: Motion & Animation (se aplicável)"
  - "[ ] Cover e miolo com grid consistente"
  - "[ ] PDF exportado em alta resolução (300 DPI para print)"
---

# Create Brandbook

## Purpose

Criar um brandbook completo e profissional que documente toda a identidade visual e verbal de uma marca. O brandbook é a bíblia da marca — qualquer designer, agência ou colaborador que o receba deve conseguir aplicar a marca corretamente sem nenhuma dúvida.

## Padrão de Qualidade

Um brandbook tier S do pedro-design tem:
- Mínimo de 40-80 páginas para marcas completas
- Exemplos visuais de uso correto E incorreto
- Especificações técnicas completas (HEX, RGB, CMYK, Pantone, tamanhos, pesos)
- Aplicações em contextos reais (não só mockups genéricos)
- Linguagem clara, sem jargão desnecessário
- Grid e tipografia impecáveis no próprio documento

## Estrutura Completa

### Seção 1 — Brand Story
```markdown
# Por que existimos

## Nossa Missão
[1-2 frases que definem o propósito operacional]

## Nossa Visão
[Que mundo estamos ajudando a construir]

## Nossos Valores
[3-5 valores com descrição de 1-2 parágrafos cada]

## Nossa Personalidade
[5 adjetivos com explicação de como se manifesta]
```

### Seção 2 — Logo
Cobrir todos os cenários:
- Logo principal (versão preferencial)
- Logo horizontal (se houver)
- Logo stacked/vertical (se houver)
- Símbolo/icon solo (se houver)
- Versão colorida (cores da marca)
- Versão monocromática (preto)
- Versão negativa (branco — para fundos escuros)
- Clear space (área de proteção = X, onde X = altura da letra)
- Tamanho mínimo: 24px digital / 10mm impresso
- 10-15 exemplos de uso INCORRETO com explicação

### Seção 3 — Color System
- Paleta primária + secundária + neutros
- Para cada cor: Nome, HEX, RGB, HSL, CMYK, Pantone
- Exemplos de combinações aprovadas e proporções
- Exemplos de combinações PROIBIDAS
- Uso por contexto: digital, impresso, sinalização

### Seção 4 — Typography
- Família(s) de fonte com link/source
- Hierarquia completa: Display, H1-H4, Body, Caption, Label
- Tamanhos, pesos, line-heights, letter-spacing
- Exemplos em contexto real
- Fontes alternativas (quando a primary não está disponível)
- Fontes PROIBIDAS

### Seção 5 — Imagery
- Estilo fotográfico (adjetivos + exemplos)
- Moodboard de referência
- Estilo de ilustração (se houver)
- Biblioteca de ícones (referência)
- O que NÃO usar (exemplos)

### Seção 6 — Applications
Mínimo 10 aplicações com mockup:
- Cartão de visita (frente + verso)
- Papel timbrado A4
- Envelope
- Email signature
- Social media profiles (foto de perfil + capa)
- Social media post template
- Apresentação / PowerPoint template
- Website / App (se houver)
- Sinalização (se aplicável)
- Embalagem/merch (se aplicável)

### Seção 7 — Voice & Tone
- Adjetivos da voz
- O que a marca diz × não diz
- Exemplos de copy: correto × incorreto por contexto
  (social media, email, atendimento, website)
- Termos específicos da marca

## Execution Steps

### Step 1: Compilar Inputs

```javascript
// Verificar se todos os assets existem
const assets = {
  logos: await checkFiles(['logo.svg', 'logo-horizontal.svg', 'logo-mark.svg']),
  colors: brand_platform.colors,
  fonts: typography_system.fonts,
  voice: brand_platform.personality
};
```

### Step 2: Design do Brandbook

Criar o documento com:
- Template de capa impactante
- Master pages para cada tipo de seção
- Grid consistente (tipicamente 12 colunas, margem 60px)
- Paleta de cores do próprio brandbook = paleta da marca

### Step 3: Preencher Seções

Preencher cada seção com conteúdo real e exemplos visuais de alta qualidade.

### Step 4: Revisar com o pdg-auditor

Antes de entregar, passar pelo `pdg-auditor` com scope "brand-identity".

### Step 5: Export

```
EXPORTS:
brandbook-[marca]-v1-digital.pdf   (RGB, links ativos, qualidade web)
brandbook-[marca]-v1-print.pdf     (CMYK, sangria, 300 DPI)
brandbook-[marca]-v1-cover.png     (capa standalone, 2048x2048)
```

## Error Handling

```yaml
error: MISSING_LOGO_VARIATIONS
cause: Logo não tem todas as variações necessárias
resolution: Solicitar ao pdg-brand-identity que complete as variações
recovery: Criar placeholder visual indicando que a variação está pending

error: MISSING_PANTONE
cause: Cores definidas apenas em HEX, sem Pantone equivalente
resolution: Usar Pantone Bridge para encontrar o match mais próximo
recovery: Documentar "Pantone closest match: PMS XXXX C (not exact)"
```

## Metadata

```yaml
version: 1.0.0
created: 2026-03-25
author: pdg-brand-identity (Strokes)
tags:
  - pedro-design
  - brandbook
  - brand-guidelines
  - brand-identity
  - documentation
```
