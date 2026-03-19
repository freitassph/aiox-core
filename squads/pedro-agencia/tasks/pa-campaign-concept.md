---
task: pa-campaign-concept
agent: pa-genesis
description: "Desenvolvimento de conceitos criativos de campanha — da big idea à execução estratégica"
inputs: [creative-brief, brand-guidelines, media-plan, budget]
outputs: [creative-concepts, approved-direction, execution-guidelines]
elicit: true
---

# Task: Conceito de Campanha

## Objetivo
Desenvolver 3 conceitos criativos radicalmente diferentes, todos estrategicamente fundamentados, que respondam perfeitamente ao brief — e então escolher e desenvolver a direção vencedora até o nível de execução.

## Processo de Execução

### Fase 1 — Divergência Criativa (Dia 1-3)
1. `*ideation-session --participants all-creative` — sessão de ideação sem censura
2. Gerar 50+ ideias brutas — quantidade antes de qualidade
3. `*concept-clustering --themes true` — agrupar por território criativo
4. Identificar as 10 ideias com maior potencial
5. `*concept-development --top 3` — desenvolver os 3 conceitos mais promissores

Entregável: 3 Creative Concepts (cada um com: Big Idea, Tagline, Hero Execution, Rationale)

### Fase 2 — Desenvolvimento dos Conceitos (Dia 3-5)
Para cada conceito:
6. Big Idea em 1 frase: o que esta campanha vai fazer para a audiência
7. Tagline ou headline mestre da campanha
8. Hero execution: descrição vívida da peça principal (60s film ou key visual)
9. Como se expande: 5 execuções derivadas por canal
10. `*concept-rationale --brief-alignment true` — justificativa estratégica vs brief

Entregável: 3 Creative Concepts Developed

### Fase 3 — Criação de Storyboards (Dia 5-7)
11. `*storyboard --concept "{{concept}}" --format simplified` — storyboard do hero
12. Key visual para cada conceito (mockup de print ad ou digital)
13. Social media mockups: 3 posts por conceito
14. `*campaign-world --concept "{{concept}}"` — criar o "mundo" visual de cada conceito

Entregável: Visual Storyboards + Mockups × 3 Concepts

### Fase 4 — Avaliação e Seleção (Dia 7-8)
15. `*concept-scoring --criteria brief,strategic-fit,executional-strength` — pontuar cada conceito
16. Apresentação interna para pa-oracle (brand fit check)
17. Apresentação para cliente: walk-through de cada conceito
18. `*concept-selection --method vote+rationale` — seleção participativa com rationale

Entregável: Approved Concept Direction

### Fase 5 — Desenvolvimento da Direção Aprovada (Dia 8-12)
19. `*campaign-extension --concept "{{approved}}" --channels all` — expandir para todos os canais
20. Definir: como a big idea se manifesta em cada touchpoint
21. Criar: campaign kit com todos os elementos de execução
22. `*execution-guidelines --format detailed` — guidelines de execução para equipe

Para cada canal:
- **pa-quill**: copy guidelines + voice/tone específico da campanha
- **pa-canvas**: visual guidelines + asset specs por canal
- **pa-frame**: video treatment + roteiro do hero
- **pa-pulse**: social content approach + engagement strategy
- **pa-inbox**: email creative approach + sequence strategy

Entregável: Campaign Direction Document + Execution Guidelines por Canal

### Fase 6 — Aprovação Final (Dia 12-14)
23. `*final-presentation --stakeholders all` — apresentação final para aprovação
24. Ajustes baseados em feedback
25. `*approval-sign-off --legal-review true` — aprovação formal e legal clearance

Entregável: Approved Campaign Direction + Signed Off

## Comandos Disponíveis
- `*ideation-session` — Sessão estruturada de geração de ideias
- `*concept-clustering` — Agrupar ideias por território criativo
- `*concept-development` — Desenvolver conceitos selecionados
- `*storyboard` — Criar storyboard simplificado
- `*concept-scoring` — Pontuar conceitos vs critérios
- `*campaign-extension` — Expandir conceito aprovado para todos os canais
- `*execution-guidelines` — Criar guidelines de execução

## Critérios de Conclusão
- [ ] 3 conceitos distintos desenvolvidos e apresentados
- [ ] Cada conceito com big idea, tagline e hero execution
- [ ] Storyboards/mockups criados para cada conceito
- [ ] Conceito aprovado pelo cliente com sign-off formal
- [ ] Execution guidelines distribuídos para toda a equipe
- [ ] Legal clearance realizado para todos os elementos
