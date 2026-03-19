---
task: pa-visual-identity
agent: pa-canvas
description: "Criação do sistema completo de identidade visual — logo, cores, tipografia e aplicações"
inputs: [brand-strategy, verbal-identity, creative-brief, target-audience, competitive-landscape]
outputs: [logo-system, color-palette, typography-system, brand-elements, visual-guidelines]
elicit: true
---

# Task: Identidade Visual Completa

## Objetivo
Criar um sistema de identidade visual que seja instantaneamente reconhecível, estrategicamente fundamentado e aplicável em qualquer mídia — digital, impresso e OOH — com consistência perfeita.

## Processo de Execução

### Fase 1 — Pesquisa e Referências (Dia 1-2)
1. `*visual-research --sector "{{sector}}" --depth competitor` — pesquisa visual do setor
2. Mapear: o que já existe (evitar território visual ocupado)
3. Identificar: tendências visuais relevantes vs atemporais
4. `*moodboard --style brand` — criar moodboards de referência (3 direções)
5. Validar direções com pa-oracle e pa-genesis

Entregável: Visual Research Report + 3 Direction Moodboards

### Fase 2 — Conceito Visual (Dia 2-3)
6. `*visual-concept --brand-personality "{{personality}}"` — traduzir personalidade em linguagem visual
7. Definir: metáfora visual central da marca
8. Explorar: geometria, proporção, movimento, espaço
9. `*concept-sketching --volume 20` — explorar 20+ direções em sketch

Entregável: Visual Concept Document + Sketches

### Fase 3 — Desenvolvimento de Logo (Dia 3-7)
10. `*logo-design --direction "{{concept}}"` — desenvolver logo principal
11. Explorar: logotipo, isotipo, imagotipo e isologo
12. Criar: 5-10 opções refinadas para apresentação
13. `*logo-refinement --selected "{{selected}}"` — refinar logo selecionado
14. Criar variações: horizontal, vertical, simplificado, favicon, ícone de app
15. Testar em: fundo branco, fundo preto, fundo colorido, grayscale
16. `*logo-testing --contexts real-world` — aplicar em contextos reais (mockups)

Entregável: Logo System Completo em Todas as Variações

### Fase 4 — Sistema de Cores (Dia 7-8)
17. `*color-palette --strategy "{{strategy}}"` — desenvolver paleta de cores completa
18. Primária: 1-2 cores principais com valores Hex, RGB, CMYK, Pantone
19. Secundária: 2-4 cores de suporte
20. Neutras: pretos, brancos, cinzas calibrados
21. Funcionais: sucesso, erro, aviso, info (para aplicações digitais)
22. `*color-accessibility --wcag AA` — verificar contraste e acessibilidade WCAG AA
23. `*color-psychology --brief true` — documentar psicologia de cada cor da paleta

Entregável: Color System Completo com Guia de Uso

### Fase 5 — Sistema Tipográfico (Dia 8-9)
24. `*typography-selection --criteria brand-fit,legibility,licensing` — selecionar famílias tipográficas
25. Tipografia primária: headlines e títulos
26. Tipografia secundária: body text e interfaces
27. Tipografia terciária: casos especiais (código, dados, citações)
28. `*type-scale --responsive true` — definir escala tipográfica completa
29. Hierarquia: H1-H6, body, caption, label, button

Entregável: Typography System com Escala e Hierarquia

### Fase 6 — Elementos de Marca (Dia 9-10)
30. `*brand-elements --type graphic` — criar elementos gráficos de suporte
31. Ícones: estilo consistente com a marca
32. Padrões e texturas: para fundos e aplicações
33. Fotografia: diretrizes de estilo, composição, cor, tratamento
34. Ilustrações: estilo se aplicável
35. Mockups de apresentação

Entregável: Brand Elements Library

### Fase 7 — Aplicações e Guidelines (Dia 10-14)
36. `*brand-applications --touchpoints all` — aplicar em todos os touchpoints
37. Digital: site, social media, email, ads, apps
38. Impresso: papelaria, flyers, brochuras, embalagem
39. OOH: outdoor, busdoor, display
40. `*visual-guidelines --format pdf+figma` — criar guia completo

Entregável: Visual Identity Guidelines + Figma Design System

## Comandos Disponíveis
- `*visual-research` — Pesquisa visual do setor e concorrentes
- `*moodboard` — Criar moodboards de direção visual
- `*visual-concept` — Traduzir personalidade em linguagem visual
- `*logo-design` — Desenvolver e refinar sistema de logo
- `*color-palette` — Criar sistema de cores completo
- `*color-accessibility` — Verificar conformidade WCAG
- `*typography-selection` — Selecionar e definir sistema tipográfico
- `*brand-elements` — Criar elementos gráficos de suporte
- `*brand-applications` — Aplicar identidade em todos os touchpoints
- `*visual-guidelines` — Compilar guia de identidade visual

## Critérios de Conclusão
- [ ] Logo aprovado em todas as variações
- [ ] Paleta de cores com valores em todos os sistemas (Hex, RGB, CMYK, Pantone)
- [ ] Acessibilidade WCAG AA confirmada
- [ ] Sistema tipográfico com escala completa
- [ ] Elementos de marca documentados e exportados
- [ ] Aplicações em pelo menos 10 touchpoints diferentes
- [ ] Visual Guidelines em PDF e Figma file compartilhado
