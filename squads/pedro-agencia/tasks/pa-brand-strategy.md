---
task: pa-brand-strategy
agent: pa-oracle
description: "Executa o processo completo de estratégia de marca — do diagnóstico ao brand book"
inputs: [client-brief, market-data, competitor-research]
outputs: [brand-audit, brand-strategy, brand-book, messaging-framework]
elicit: true
---

# Task: Brand Strategy Completa

## Objetivo
Criar a estratégia de marca completa para o cliente, desde diagnóstico até o brand book executável.

## Processo de Execução

### Fase 1 — Brand Audit (Dia 1-2)
Execute `*brand-audit --site "{{client_url}}" --depth full`

Avalie:
- [ ] Posicionamento atual vs. posicionamento desejado
- [ ] Análise do Tom de voz existente
- [ ] Consistência visual da marca
- [ ] Percepção no mercado (menções, reviews, NPS)
- [ ] Score por dimensão (0-100)

### Fase 2 — Audience Intelligence (Dia 2-3)
Execute `*audience-research --brand "{{client}}" --methods survey+interviews+social`

Entregáveis:
- [ ] 3 personas primárias detalhadas (Triple Lens: demo + psycho + behavioral)
- [ ] Jobs to be done mapeados por persona
- [ ] Mapa de dores e aspirações

### Fase 3 — Competitive Mapping (Dia 3-4)
Execute `*competitive-mapping --brand "{{client}}" --competitors "{{competitors}}"`

Entregáveis:
- [ ] Mapa de posicionamento 2x2
- [ ] Gap de diferenciação identificado
- [ ] Espaço branco para o cliente ocupar

### Fase 4 — Brand Identity (Dia 4-7)
Execute `*brand-identity --phase strategy --client "{{client}}"`

Entregáveis:
- [ ] Brand Vision, Mission e Values
- [ ] Brand Personality (5 arquétipos)
- [ ] Brand Voice e Tom (guidelines por situação)
- [ ] Messaging framework por persona e estágio

### Fase 5 — Brand Book (Dia 7-10)
Compile todos os entregáveis no brand book completo.

## Critérios de Conclusão
- [ ] Brand Audit com score e prioridades entregue
- [ ] 3 personas detalhadas com citações reais de pesquisa
- [ ] Positioning statement definido e aprovado pelo cliente
- [ ] Brand book completo com todas as seções
- [ ] Handoff para pa-genesis (brief criativo) e pa-quill (tone of voice)
