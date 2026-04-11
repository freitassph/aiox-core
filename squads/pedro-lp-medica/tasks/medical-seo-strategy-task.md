---
task: medical-seo-strategy-task
responsavel: "@medical-seo-specialist"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

# Task: Medical SEO Strategy — Local Search & E-E-A-T

## purpose
Define a complete SEO strategy for the medical landing page including keyword research, URL structure, Schema.org markup, Google Business Profile setup, and an editorial content calendar for organic growth.

## entrada
- Briefing completo com especialidade, cidade e servicos
- Anlise de concorrencia (top 3 ranking para keywords principais)
- Copy da landing page para alinhamento de keywords
- Lista de condicoes tratadas pelo medico

## saida
- Documento /docs/seo-strategy.md com keywords e prioridades
- Arquivo JSON-LD Schema.org completo para implementacao
- Calendario editorial de 6 meses
- Guia de configuracao do Google Meu Negocio

## checklist
- [ ] 10-15 keywords primarias selecionadas com volume e dificuldade
- [ ] Estrutura de URLs mapeada para cada tipo de pagina
- [ ] Schema.org JSON-LD gerado para MedicalBusiness + Physician
- [ ] FAQPage, BreadcrumbList e MedicalCondition incluidos
- [ ] Google Meu Negocio configurado com todas as informacoes
- [ ] Content calendar com 6 artigos Tier 3 definidos

## pre-conditions
- medical-briefing-task concluida
- Especialidade medica, cidade e servicos definidos
- Concorrencia local mapeada

## Objetivo
Definir estratégia completa de SEO para o projeto: keyword research, estrutura de URLs, Schema.org, Google Meu Negócio e content calendar.

## Agente Responsável
`medical-seo-specialist` (Rafael Alves)

## Inputs
- Briefing completo (especialidade, cidade, serviços)
- Análise de concorrência (top 3 ranking para keywords principais)

---

## Fase 1: Keyword Research

### Grupos de Keywords por Intenção

```
TIER 1 — Transacional (agendar):
  "[especialidade] [cidade]"
  "[especialidade] [bairro]"
  "consulta [especialidade] [cidade]"
  "médico [especialidade] aceita [plano]"

TIER 2 — Consideração:
  "melhor [especialidade] [cidade]"
  "[especialidade] quanto custa"
  "[especialidade] particular [cidade]"

TIER 3 — Informacional (captura early stage):
  "[sintoma principal] o que pode ser"
  "[condição principal] tratamento"
  "[condição] médico [cidade]"

→ Selecionar 10-15 keywords primárias para o projeto
→ Volume de busca mínimo: 100 buscas/mês para Tier 1
→ Dificuldade máxima: Domain Rating 40 competível
```

## Fase 2: Estrutura de Conteúdo

```
Mapear keywords para páginas:
  /              → "[especialidade] [cidade]" (Tier 1)
  /sobre/        → "Dr. [Nome] [especialidade]"
  /especialidades/[slug]/ → condições tratadas (Tier 2/3)
  /blog/[slug]/  → keywords informacionais (Tier 3)
  /convenios/    → "[especialidade] que aceita [plano]"
```

## Fase 3: Schema.org Implementation

Gerar JSON-LD completo para:
```
MedicalBusiness + Physician (ver medical-seo-specialist.md para schema completo)
FAQPage (nas páginas com FAQ)
BreadcrumbList (em todas as páginas internas)
MedicalCondition (em páginas de condição)
BlogPosting (em artigos do blog)
```

## Fase 4: Google Meu Negócio

```
□ Categoria primária configurada corretamente
□ Categorias secundárias adicionadas
□ 10+ fotos adicionadas
□ Horários corretos
□ Atributos configurados (convênios)
□ Serviços listados
□ Processo de coleta de reviews implementado
```

## Fase 5: Content Calendar

```
6 artigos para lançamento (Tier 3):
  1. "O que é [condição principal 1]?"
  2. "Sintomas de [condição principal 2]"
  3. "Quando procurar um [especialidade]?"
  4. "Como funciona a consulta de [especialidade]"
  5. "[Condição]: diagnóstico e tratamento"
  6. "[Prevenção relacionada à especialidade]"
```

## Outputs
- **`/docs/seo-strategy.md`** — Keywords + estrutura + prioridades
- **`/docs/schema-org-spec.json`** — JSON-LD completo para implementar
- **`/docs/content-calendar.md`** — 6 meses de pauta editorial
- **`/docs/google-meu-negocio-setup.md`** — Guia de configuração do GMN
