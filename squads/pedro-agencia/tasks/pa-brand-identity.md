---
task: pa-brand-identity
agent: pa-oracle
description: "Construção completa de identidade de marca — do propósito ao sistema visual e verbal"
inputs: [brand-audit, business-goals, target-audience, competitive-landscape]
outputs: [brand-strategy, brand-guidelines, identity-system, messaging-framework]
elicit: true
---

# Task: Brand Identity Completo

## Entrada

```yaml
input:
  context: {from orchestrator or previous task}
  parameters: {}
```

## Saida

```yaml
output:
  artifacts: []
  status: completed
  next_task: {determined by workflow}
```

## Pre-Conditions

- Task agent is activated and ready
- Required context from previous tasks is available
- User has confirmed this task should be executed

## Objetivo
Construir uma identidade de marca poderosa, diferenciada e duradoura — com propósito claro, posicionamento único e sistema de identidade que crie reconhecimento e preferência no mercado.

## Processo de Execução

### Fase 1 — Fundação Estratégica (Semana 1)
1. `*brand-purpose --workshop true` — facilitar workshop de propósito com cliente
2. Definir: Por quê existimos além do lucro?
3. Articular: Visão de longo prazo (10 anos)
4. Definir: Missão concreta e verificável
5. `*values-definition --authentic true` — definir 4-6 valores com comportamentos concretos

Entregável: Brand Foundation Document (Propósito + Visão + Missão + Valores)

### Fase 2 — Posicionamento (Semana 1)
6. `*positioning-strategy --framework perceptual-map` — definir posicionamento estratégico
7. Escolher território de marca: racional vs emocional, funcional vs aspiracional
8. Construir Value Proposition única e defensável
9. Definir Unique Brand Position (UBP) em 10 palavras ou menos
10. `*proof-points --category "{{category}}"` — mapear proof points por claim

Entregável: Brand Positioning Document + Perceptual Map

### Fase 3 — Arquitetura de Marca (Semana 1-2)
11. `*brand-architecture --portfolio "{{portfolio}}"` — definir arquitetura (monolítica/endorsada/pluralística)
12. Hierarquia de marca: masterbrand, sub-brands, product brands
13. Relacionamento entre marcas do portfólio

Entregável: Brand Architecture Document

### Fase 4 — Identidade Verbal (Semana 2)
**em colaboração com pa-quill:**
14. `*tone-of-voice --personality "{{personality}}"` — definir tone of voice com 4 dimensões
15. Criar Brand Vocabulary: 20 palavras ON, 20 palavras OFF
16. Definir messaging framework: headline, proof points, tagline options
17. Criar copy guidelines com exemplos e anti-exemplos
18. `*tagline-creation --options 10` — criar e testar 10 opções de tagline

Entregável: Verbal Identity Guide + Messaging Framework

### Fase 5 — Brief de Identidade Visual (Semana 2)
**para pa-canvas:**
19. `*visual-brief --mood strategic` — construir brief criativo estratégico
20. Definir: personalidade visual, moodboard, referências inspiracionais
21. Definir: atributos visuais desejados e indesejados
22. Mapear aplicações prioritárias: digital, impresso, OOH, embalagem

Entregável: Creative Brief para Identidade Visual

### Fase 6 — Sistema de Identidade Visual (Semana 3-4)
**pa-canvas executa, pa-oracle supervisiona:**
23. Logo e variações (positivo, negativo, simplificado, favicon)
24. Paleta de cores primária e secundária com valores precisos
25. Sistema tipográfico: família, pesos, hierarquia
26. Elementos gráficos: ícones, padrões, texturas, fotografias
27. `*brand-applications --channels all` — aplicar em todos os touchpoints

Entregável: Visual Identity System Completo

### Fase 7 — Brand Guidelines (Semana 4)
28. `*brand-guidelines --format pdf+figma` — criar guia completo de marca
29. Do's and Don'ts com exemplos visuais
30. Templates editáveis para cada touchpoint
31. Brand compliance checklist

Entregável: Brand Guidelines PDF + Figma Toolkit

## Comandos Disponíveis
- `*brand-purpose` — Workshop e definição de propósito
- `*values-definition` — Definição de valores com comportamentos
- `*positioning-strategy` — Definição de posicionamento estratégico
- `*brand-architecture` — Definição de arquitetura de marca
- `*tone-of-voice` — Criar guide de tom de voz
- `*tagline-creation` — Gerar e testar opções de tagline
- `*visual-brief` — Criar brief estratégico para identidade visual
- `*brand-applications` — Aplicar identidade em todos os touchpoints
- `*brand-guidelines` — Compilar guia completo de marca

## Critérios de Conclusão
- [ ] Brand Foundation aprovado (propósito, visão, missão, valores)
- [ ] Positioning Statement único e defensável
- [ ] Identidade verbal completa com tom de voz e messaging
- [ ] Identidade visual aprovada em todas as variações
- [ ] Brand Guidelines entregues em PDF e formato editável
- [ ] Templates de todos os touchpoints principais criados
- [ ] Apresentação final aprovada com 90%+ de satisfação
