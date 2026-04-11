---
task: pdg-design-packaging
agent: pdg-packaging-designer
description: "Design completo de embalagem — estrutural, gráfico, 3D e especificação de impressão"
inputs: [product-info, category, shelf-context, regulatory-requirements]
outputs: [structural-design, graphic-design, 3d-mockups, print-spec, dieline]
elicit: true
---

# Task: Design Packaging

## Objetivo
Criar o design completo de uma embalagem de produto — desde a estrutura física e dieline até o design gráfico, mockups 3D fotorrealistas e especificação técnica de impressão. A embalagem deve proteger o produto, comunicar a marca, destacar-se na prateleira e cumprir todos os requisitos regulatórios do segmento.

## Processo de Execução

### Phase 1 — Análise do Contexto
1. `{*analyze-product}` — Analisar informações do produto: dimensões, peso, fragilidade, requirements de conservação
2. `{*study-category}` — Estudar convenções visuais da categoria e identificar oportunidades de diferenciação
3. `{*map-shelf-environment}` — Mapear o ambiente de prateleira: concorrentes, cores dominantes, ruído visual
4. `{*extract-regulatory}` — Extrair todos os requisitos regulatórios obrigatórios (tabela nutricional, warnings, símbolos)

Entregável: Packaging Context Report

### Phase 2 — Design Estrutural
1. `{*define-structure}` — Definir tipo de estrutura: caixa rígida, flexible pouch, bottle, tube, blister, etc.
2. `{*create-dieline}` — Criar dieline técnico com medidas exatas, sangria, dobras e abas
3. `{*specify-materials}` — Especificar materiais (cardstock, corrugated, PET, vidro) com gramatura e acabamento
4. `{*validate-protection}` — Validar que a estrutura protege adequadamente o produto
5. `{*validate-shelf-impact}` — Validar visibilidade e impacto na prateleira

Entregável: Structural Design + Dieline

### Phase 3 — Design Gráfico
1. `{*define-face-hierarchy}` — Definir hierarquia visual das faces: primary face (frente), lateral, topo, verso
2. `{*design-primary-face}` — Criar design da face principal: logo, nome do produto, claim, visual hero
3. `{*design-informational-face}` — Criar face informativa: descrição, instruções, ingredients, barcode
4. `{*design-regulatory-faces}` — Criar faces com informações regulatórias conforme legislação
5. `{*apply-brand-system}` — Aplicar cores, tipografia e elementos da marca
6. `{*create-variants}` — Criar variações para diferentes SKUs (sabores, tamanhos, versões)

Entregável: Graphic Design Package

### Phase 4 — Mockups 3D
1. `{*build-3d-model}` — Construir modelo 3D da embalagem a partir do dieline
2. `{*apply-textures}` — Aplicar texturas e materiais realistas (gloss, matte, foil, emboss)
3. `{*setup-lighting}` — Configurar iluminação de estúdio e ambiente
4. `{*render-hero}` — Renderizar imagem hero (ângulo principal, alta resolução)
5. `{*render-angles}` — Renderizar ângulos adicionais: frente, lateral, topo, aberto, em contexto
6. `{*render-shelf-scene}` — Renderizar cena na prateleira junto a concorrentes

Entregável: 3D Mockups (6+ renders)

### Phase 5 — Especificação de Impressão
1. `{*define-color-spec}` — Especificar sistema de cor: CMYK, Pantone spots, tintas especiais
2. `{*define-finishes}` — Especificar acabamentos: verniz localizado, hot stamping, emboss, soft-touch
3. `{*define-printing-process}` — Definir processo de impressão: offset, flexo, digital, rotogravura
4. `{*create-print-ready}` — Preparar arquivo print-ready com layers separados, overprint, trapping
5. `{*write-spec-sheet}` — Criar spec sheet completa para o fornecedor/gráfica

Entregável: Print Specification Package

### Phase 6 — Validação Final
1. Verificar que todos os requisitos regulatórios estão presentes e corretos
2. Validar dieline com tolerâncias de fabricação
3. Revisar especificações de impressão com checklist de preflight
4. Confirmar que mockups 3D refletem fielmente o design final
5. Compilar package completo para aprovação e produção

Entregável: Packaging Design Package (consolidado)

## Comandos Disponíveis
- `{*analyze-product}` — Analisa informações e requisitos do produto
- `{*study-category}` — Estuda convenções da categoria de produto
- `{*map-shelf-environment}` — Mapeia ambiente de prateleira competitivo
- `{*create-dieline}` — Cria dieline técnico com medidas e sangria
- `{*define-face-hierarchy}` — Define hierarquia visual das faces
- `{*build-3d-model}` — Constrói modelo 3D da embalagem
- `{*render-hero}` — Renderiza imagem hero em alta resolução
- `{*define-color-spec}` — Especifica sistema de cor para impressão
- `{*create-print-ready}` — Prepara arquivo print-ready com layers

## Critérios de Conclusão
- [ ] Context report com análise de produto, categoria, prateleira e regulatórios
- [ ] Estrutura definida e justificada
- [ ] Dieline técnico criado com medidas exatas, sangria e dobras
- [ ] Materiais especificados com gramatura e tipo
- [ ] Design gráfico completo em todas as faces (primária, informativa, regulatória)
- [ ] Variações de SKU criadas (se aplicável)
- [ ] Mínimo 6 renders 3D (hero + ângulos + prateleira)
- [ ] Sistema de cor especificado (CMYK + Pantone se necessário)
- [ ] Acabamentos especificados (verniz, foil, emboss, etc.)
- [ ] Processo de impressão definido
- [ ] Arquivo print-ready preparado com layers e overprint
- [ ] Spec sheet para fornecedor completa
- [ ] Todos os requisitos regulatórios verificados e presentes
- [ ] Package consolidado pronto para aprovação
