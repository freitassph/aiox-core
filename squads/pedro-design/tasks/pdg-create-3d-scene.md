---
task: pdg-create-3d-scene
agent: pdg-mockup-3d-artist
description: "Cria cena 3D fotorrealista — produto, ambiente e iluminação"
inputs: [product-model, environment-reference, mood, camera-angle]
outputs: [3d-render, lighting-setup, material-spec, variations]
elicit: true
---
## Purpose

Complete this design task

## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed

## Entrada

- Task brief and requirements

## Saida

- Completed deliverables

## Checklist

- [ ] Deliverable completed
- [ ] Quality reviewed



# Task: Create 3D Scene

## Objetivo
Criar cenas 3D fotorrealistas de alta qualidade que apresentem produtos em ambientes contextualizados — com iluminação cuidadosamente configurada, materiais realistas e composição de câmera profissional. O resultado são renders de qualidade fotográfica para uso em marketing, e-commerce, campanhas e materiais de comunicação.

## Processo de Execução

### Phase 1 — Preparação da Cena
1. `{*import-product-model}` — Importar e validar modelo 3D do produto (topologia, UVs, escala)
2. `{*analyze-environment-ref}` — Analisar referência de ambiente e identificar elementos-chave: cenário, atmosfera, objetos contextuais
3. `{*define-mood}` — Definir mood visual: luz natural vs. artificial, warm vs. cool, dramatic vs. soft
4. `{*setup-camera}` — Configurar câmera conforme ângulo especificado: focal length, depth of field, composition

Entregável: Scene Setup Document

### Phase 2 — Modelagem do Ambiente
1. `{*build-environment-geometry}` — Modelar geometria do ambiente: superfícies, paredes, chão, elementos arquitetônicos
2. `{*add-context-objects}` — Adicionar objetos contextuais que reforçam a narrativa do produto
3. `{*create-background}` — Criar background/HDR environment para reflexos e iluminação global
4. `{*validate-scale}` — Validar escala entre produto, objetos e ambiente (proporções realistas)

Entregável: Environment Geometry

### Phase 3 — Materiais e Shading
1. `{*assign-product-materials}` — Atribuir materiais realistas ao produto: metal, glass, plastic, fabric, wood
2. `{*assign-environment-materials}` — Atribuir materiais ao ambiente: concrete, marble, water, foliage
3. `{*configure-pbr-properties}` — Configurar propriedades PBR: albedo, roughness, metallic, normal, displacement
4. `{*add-surface-details}` — Adicionar detalhes de superfície: fingerprints, dust, scratches, imperfections
5. `{*test-material-renders}` — Testar materiais com renders de validação

Entregável: Material Setup

### Phase 4 — Iluminação
1. `{*setup-key-light}` — Posicionar luz principal: tipo (area, spot, sun), intensidade, cor, ângulo
2. `{*setup-fill-light}` — Adicionar luz de preenchimento para suavizar sombras
3. `{*setup-rim-backlight}` — Adicionar backlight/rim light para separação do fundo
4. `{*add-accent-lights}` — Adicionar luzes de acento para destacar detalhes específicos do produto
5. `{*setup-global-illumination}` — Configurar GI/ambient occlusion para iluminação realista
6. `{*fine-tune-exposure}` — Ajustar exposição, contrast e color grading da iluminação

Entregável: Lighting Setup Document

### Phase 5 — Render e Pós-Produção
1. `{*configure-render-settings}` — Configurar settings de render: resolution, samples, denoiser, output format
2. `{*render-hero}` — Renderizar imagem hero em alta resolução (4K mínimo)
3. `{*render-angle-variants}` — Renderizar variações de ângulo de câmera
4. `{*render-lighting-variants}` — Renderizar variações de iluminação (golden hour, studio, moody)
5. `{*post-production}` — Pós-produção: color correction, contrast, sharpness, vignette
6. `{*add-compositing}` — Compositing se necessário: reflections, bloom, chromatic aberration

Entregável: 3D Renders Package

### Phase 6 — Validação e Entrega
1. Verificar fotorrealismo: sombras coerentes, reflexos corretos, materiais convincentes
2. Validar que produto está destacado e legível
3. Confirmar que mood e narrativa visual correspondem ao brief
4. Checar resolução e qualidade de todos os renders
5. Organizar package final com documentação técnica

Entregável: Final 3D Scene Package

## Comandos Disponíveis
- `{*import-product-model}` — Importa e valida modelo 3D do produto
- `{*build-environment-geometry}` — Modela geometria do ambiente
- `{*assign-product-materials}` — Atribui materiais realistas ao produto
- `{*setup-key-light}` — Posiciona luz principal
- `{*configure-render-settings}` — Configura settings de render
- `{*render-hero}` — Renderiza imagem hero em alta resolução
- `{*render-lighting-variants}` — Renderiza variações de iluminação
- `{*post-production}` — Aplica pós-produção: color correction e ajustes

## Critérios de Conclusão
- [ ] Modelo do produto importado e validado (topologia, UVs, escala)
- [ ] Ambiente modelado com geometria e objetos contextuais
- [ ] Escala validada entre produto e ambiente
- [ ] Materiais PBR configurados para produto e ambiente
- [ ] Detalhes de superfície adicionados (imperfeições naturais)
- [ ] Iluminação com 4+ fontes (key, fill, rim, accent)
- [ ] Global illumination configurada
- [ ] Exposição e color grading ajustados
- [ ] Mínimo 1 render hero em 4K+
- [ ] Variações de ângulo renderizadas (mínimo 3)
- [ ] Variações de iluminação renderizadas (mínimo 3)
- [ ] Pós-produção aplicada a todos os renders
- [ ] Fotorrealismo validado (sombras, reflexos, materiais)
- [ ] Produto destacado e legível em todas as cenas
- [ ] Mood e narrativa conforme brief original
- [ ] Lighting setup documentado
- [ ] Material spec documentada
- [ ] Package final organizado com documentação técnica
