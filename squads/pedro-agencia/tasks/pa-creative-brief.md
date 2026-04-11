---
task: pa-creative-brief
agent: pa-genesis
description: "Criação de brief criativo estratégico que serve como bússola para toda a equipe criativa"
inputs: [brand-strategy, campaign-objectives, target-audience, media-plan, budget]
outputs: [creative-brief, creative-principles, inspiration-moodboard, creative-constraints]
elicit: true
---

# Task: Creative Brief Estratégico

## Purpose

Execute this task with excellence following S+++ standards.

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

## Checklist

- [ ] Task objective clearly defined
- [ ] Required inputs available and validated
- [ ] Execution follows established patterns
- [ ] Output artifacts properly formatted
- [ ] Results communicated to user/orchestrator

## Pre-Conditions

- Task agent is activated and ready
- Required context from previous tasks is available
- User has confirmed this task should be executed

## Objetivo
Criar o brief criativo mais completo e inspirador possível — documento que serve de bússola para toda a equipe criativa, eliminando ambiguidade e maximizando o impacto de cada peça produzida.

## Processo de Execução

### Fase 1 — Imersão Estratégica (Dia 1)
1. `*brief-immersion --inputs brand-strategy,audience,objectives` — absorver toda a estratégia
2. Realizar calls com pa-oracle (brand), pa-quill (copy), pa-canvas (design)
3. Analisar campanhas passadas do cliente: o que funcionou e por quê
4. `*competitor-creative-audit --focus "{{category}}"` — auditar criativos da concorrência

Entregável: Creative Immersion Notes + Competitive Creative Audit

### Fase 2 — Definição do Problema Criativo (Dia 1-2)
5. `*problem-framing --creative true` — enquadrar o problema criativo corretamente
6. O que a audiência pensa/sente/faz hoje?
7. O que queremos que pense/sinta/faça após a campanha?
8. Qual a ÚNICA coisa mais importante a comunicar?
9. `*single-minded-proposition --test true` — definir proposição única de campanha

Entregável: Creative Problem Statement + Single-Minded Proposition

### Fase 3 — Persona Criativa (Dia 2)
10. `*creative-persona --depth psychological` — construir persona criativa profunda
11. Não apenas demographics: estados mentais, aspirações, tensões internas
12. O dia a dia emocional da audiência: medos, desejos, frustrações
13. Como esta campanha se encaixa na vida REAL delas

Entregável: Creative Persona Cards

### Fase 4 — Insight Criativo (Dia 2-3)
14. `*insight-mining --sources "{{sources}}"` — garimpar insights não-óbvios
15. Cultural insights: o que está acontecendo na cultura que é relevante
16. Category insights: o que todos no setor ignoram que a audiência sente
17. Brand insights: verdades únicas da marca que ninguém explorou
18. `*insight-validation --gut-check true` — testar os insights com "e daí?"

Entregável: Creative Insight Document (o "Eureka!")

### Fase 5 — Construção do Brief (Dia 3-4)
19. `*brief-writing --format structured` — construir brief completo
20. Estrutura: Objetivo → Problema → Audiência → Insight → Proposição → Tom → Mandatórios → Metricas
21. Escrever o brief como se fosse ler em voz alta para a equipe
22. `*brief-test --with team` — testar o brief com equipe criativa

Entregável: Creative Brief Documento Final

### Fase 6 — Moodboard e Direção Criativa (Dia 4-5)
23. `*moodboard --style "{{style}}" --format digital` — criar moodboard inspiracional
24. Referências visuais: o que queremos evocar (não copiar)
25. Referências verbais: tom, cadência, vocabulário
26. Anti-referências: o que definitivamente NÃO queremos
27. `*creative-principles --count 5` — definir 5 princípios criativos da campanha

Entregável: Moodboard + Creative Principles

### Fase 7 — Apresentação e Alinhamento (Dia 5)
28. `*brief-presentation --audience creative-team` — apresentar brief para equipe
29. Sessão de perguntas e calibração
30. Documentar interpretações incorretas e corrigir antes da execução

Entregável: Presented + Approved Creative Brief

## Comandos Disponíveis
- `*brief-immersion` — Absorver e sintetizar todos os inputs estratégicos
- `*competitor-creative-audit` — Auditar território criativo da concorrência
- `*problem-framing` — Enquadrar o problema criativo corretamente
- `*single-minded-proposition` — Definir proposição única de campanha
- `*creative-persona` — Construir persona criativa profunda
- `*insight-mining` — Garimpar insights não-óbvios e poderosos
- `*brief-writing` — Escrever brief estruturado e inspirador
- `*moodboard` — Criar moodboard visual e verbal
- `*creative-principles` — Definir princípios criativos da campanha

## Critérios de Conclusão
- [ ] Single-Minded Proposition articulada em 1 frase poderosa
- [ ] Insight criativo genuinamente não-óbvio identificado
- [ ] Brief aprovado por cliente e equipe criativa
- [ ] Moodboard alinhado com direção estratégica
- [ ] Todos os mandatórios documentados
- [ ] Equipe criativa alinhada e inspirada após leitura do brief
