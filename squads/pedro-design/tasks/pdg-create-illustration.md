---
task: pdg-create-illustration
agent: pdg-illustration-artist
description: "Cria ilustração customizada — vetorial, raster, ou técnica mista"
inputs: [brief, style-reference, brand-colors, dimensions]
outputs: [illustration-files, style-guide, usage-guidelines]
elicit: true
---

# Task: Create Illustration

## Objetivo
Criar ilustrações customizadas que comuniquem visualmente conceitos da marca, produto ou campanha — podendo ser vetorial, raster ou técnica mista. O trabalho abrange desde a concepção e esboço até a arte final em múltiplos formatos, acompanhada de guidelines de uso para garantir consistência nas aplicações futuras.

## Processo de Execução

### Phase 1 — Interpretação do Brief
1. `{*analyze-brief}` — Analisar brief completo: conceito, mensagem, contexto de uso, audiência
2. `{*study-style-references}` — Estudar referências de estilo fornecidas e identificar padrões visuais
3. `{*extract-brand-constraints}` — Extrair restrições da marca: cores obrigatórias, elementos proibidos, tom visual
4. `{*define-technical-reqs}` — Definir requisitos técnicos: dimensões, resoluções, formatos de entrega

Entregável: Illustration Brief Confirmation

### Phase 2 — Conceito e Composição
1. `{*brainstorm-concepts}` — Gerar 5-8 conceitos visuais que traduzam a mensagem do brief
2. `{*evaluate-concepts}` — Avaliar cada conceito por: clareza, originalidade, alinhamento à marca, viabilidade
3. `{*select-direction}` — Selecionar 2-3 conceitos para desenvolver em thumbnail sketches
4. `{*create-thumbnails}` — Criar 6-10 thumbnails por conceito explorando composição e enquadramento
5. `{*refine-composition}` — Refinar a composição mais forte em sketch de média fidelidade

Entregável: Concept Exploration + Selected Composition

### Phase 3 — Desenvolvimento da Ilustração
1. `{*create-line-art}` — Criar arte linear definitiva (vector paths ou line art raster)
2. `{*apply-color-palette}` — Aplicar paleta de cores da marca com hierarquia cromática
3. `{*add-shading-depth}` — Adicionar sombreamento e profundidade conforme estilo definido
4. `{*add-texture-detail}` — Adicionar texturas, grãos ou detalhes artesanais se aplicável
5. `{*refine-elements}` — Refinar cada elemento individual com atenção ao detalhe
6. `{*check-balance}` — Verificar balanço visual, ritmo e pontos focais

Entregável: Illustration Master Art

### Phase 4 — Variações e Adaptações
1. `{*create-size-variants}` — Criar variações de tamanho: hero (full), medium (card), small (icon), favicon
2. `{*create-color-variants}` — Criar variantes de cor: full color, single color, dark mode, light mode
3. `{*create-crop-variants}` — Criar crops alternativos para diferentes aspect ratios (16:9, 4:3, 1:1, 9:16)
4. `{*create-simplified-version}` — Criar versão simplificada para uso em tamanhos reduzidos
5. `{*create-animated-ready}` — Se aplicável, preparar layers separados para animação futura

Entregável: Illustration Variants Package

### Phase 5 — Exportação e Style Guide
1. `{*export-vector}` — Exportar em formatos vetoriais: SVG (web), EPS/AI (print), PDF
2. `{*export-raster}` — Exportar em formatos raster: PNG (transparent), JPG (compressed), WebP
3. `{*export-sizes}` — Exportar em todas as dimensões especificadas no brief
4. `{*create-style-guide}` — Criar guia de estilo da ilustração: cores usadas, técnica, princípios de construção
5. `{*create-usage-guidelines}` — Criar guidelines de uso: do's and don'ts, clear space, tamanho mínimo, contextos proibidos

Entregável: Export Package + Style Guide

### Phase 6 — Revisão Final
1. Verificar qualidade em todos os tamanhos exportados
2. Confirmar alinhamento com brand colors e estilo aprovado
3. Validar que a ilustração comunica a mensagem original do brief
4. Revisar style guide e usage guidelines para clareza
5. Compilar package final organizado

Entregável: Complete Illustration Package

## Comandos Disponíveis
- `{*analyze-brief}` — Analisa brief e extrai requisitos da ilustração
- `{*brainstorm-concepts}` — Gera conceitos visuais
- `{*create-thumbnails}` — Cria thumbnail sketches de composição
- `{*create-line-art}` — Cria arte linear definitiva
- `{*apply-color-palette}` — Aplica paleta de cores da marca
- `{*create-size-variants}` — Cria variações de tamanho
- `{*create-color-variants}` — Cria variantes de cor
- `{*export-vector}` — Exporta em formatos vetoriais
- `{*export-raster}` — Exporta em formatos raster
- `{*create-style-guide}` — Cria guia de estilo da ilustração

## Critérios de Conclusão
- [ ] Brief analisado e requisitos confirmados
- [ ] Mínimo 5 conceitos visuais gerados
- [ ] Composição selecionada e refinada com thumbnail sketches
- [ ] Ilustração master desenvolvida com line art, cores e detalhes
- [ ] Variação de tamanhos criada (hero, medium, small, favicon)
- [ ] Variantes de cor criadas (full color, single color, dark/light)
- [ ] Crops alternativos para diferentes aspect ratios
- [ ] Versão simplificada para tamanhos reduzidos
- [ ] Export em formatos vetoriais (SVG, EPS/AI, PDF)
- [ ] Export em formatos raster (PNG, JPG, WebP)
- [ ] Todas as dimensões especificadas exportadas
- [ ] Style guide criado com técnica, cores e princípios
- [ ] Usage guidelines com do's and don'ts e clear space
- [ ] Qualidade verificada em todos os tamanhos
- [ ] Mensagem original do brief comunicada pela ilustração
- [ ] Package final organizado e pronto para entrega
