---
task: pa-email-sequence
agent: pa-inbox
description: "Criação de sequências de email automatizadas de alta conversão"
inputs: [audience-segment, goal, product-info, brand-voice, triggers]
outputs: [email-sequence, automation-setup, subject-lines, a-b-variants]
elicit: true
---

# Task: Email Sequence — Automação de Alta Conversão

## Objetivo

Criar sequências de email que convertem porque são construídas sobre entendimento profundo do leitor — suas dores, objeções, desejos e o ponto exato da jornada em que se encontra. Cada email da sequência tem um papel preciso: avançar o leitor um passo em direção à conversão sem parecer que está sendo vendido.

A estratégia de sequenciamento usa princípios de psicologia comportamental e copywriting de resposta direta — não apenas boas-práticas genéricas de email marketing. Isso significa que cada transição entre emails é construída com intencionalidade: o que foi dito antes, o que é dito agora e como isso cria momentum em direção à ação desejada.

O output inclui os emails completos (corpo + subject + preview text), as variantes A/B para testes prioritários e a documentação técnica de automação para que o cliente possa implementar a sequência em qualquer plataforma sem depender de consultoria adicional.

## Processo de Execução

### Fase 1 — Audience Mapping (Dia 1, 2h)

1. Definir o perfil psicográfico do segmento — crenças, medos, desejos, linguagem: `*audience-profile --segment "{{audience-segment}}" --goal "{{goal}}" --export "audience-profile.yaml"`
2. Mapear a jornada de awareness do segmento — nível de consciência sobre o problema e a solução: `*awareness-mapping --segment "{{audience-segment}}" --product "{{product-info}}" --export "awareness-levels.yaml"`
3. Identificar as 5 principais objeções que impedem a conversão: `*objection-mapping --segment "{{audience-segment}}" --goal "{{goal}}" --product "{{product-info}}" --export "objections.yaml"`
4. Listar os 5 principais desejos e resultados que o segmento quer alcançar: `*desire-mapping --segment "{{audience-segment}}" --product "{{product-info}}" --export "desires.yaml"`
5. Catalogar linguagem real do segmento — termos, expressões, metáforas que usam: `*voice-of-customer --segment "{{audience-segment}}" --export "voc-language.yaml"`
6. Definir o estado emocional do leitor no momento do trigger: `*emotional-state-mapping --triggers "{{triggers}}" --audience "audience-profile.yaml" --export "trigger-context.yaml"`

Entregável: `audience-dossier.md` com perfil psicográfico completo, mapa de objeções e desejos, linguagem do cliente.

---

### Fase 2 — Sequence Strategy (Dia 1, 2h)

1. Definir o arco narrativo da sequência — estrutura emocional do início ao fim: `*narrative-arc --goal "{{goal}}" --audience "audience-dossier.md" --export "narrative-arc.yaml"`
2. Determinar número ideal de emails e cadência baseados no objetivo e temperatura do lead: `*sequence-structure --goal "{{goal}}" --lead-temperature "{{triggers}}" --export "sequence-structure.yaml"`
3. Mapear o papel de cada email — educação, prova social, objeção, urgência, CTA: `*email-roles --structure "sequence-structure.yaml" --narrative "narrative-arc.yaml" --export "email-map.yaml"`
4. Definir o CTA principal por email — uma ação por email, hierarquia clara: `*cta-mapping --email-map "email-map.yaml" --goal "{{goal}}" --export "cta-plan.yaml"`
5. Planejar gatilhos de comportamento — como o comportamento do leitor modifica a sequência: `*behavioral-triggers --triggers "{{triggers}}" --structure "sequence-structure.yaml" --export "trigger-logic.yaml"`

Entregável: `sequence-blueprint.md` com arco narrativo, papel de cada email, CTAs e lógica de branching comportamental.

---

### Fase 3 — Email Writing (Dia 2-3, 5-6h)

1. Redigir email de boas-vindas/abertura — estabelecer rapport, expectativa e primeira entrega de valor: `*write-email --type welcome --blueprint "sequence-blueprint.md" --voice "{{brand-voice}}" --voc "voc-language.yaml" --export "email-01.md"`
2. Redigir emails de nutrição — entregar valor real enquanto aprofunda a relação com o produto: `*write-email --type nurture --position 2-4 --blueprint "sequence-blueprint.md" --voice "{{brand-voice}}" --export "emails-02-04.md"`
3. Redigir email de objeção — endereçar a objeção número 1 diretamente e transformá-la: `*write-email --type objection-crusher --objections "objections.yaml" --blueprint "sequence-blueprint.md" --export "email-05.md"`
4. Redigir email de prova social — casos de sucesso, depoimentos, dados que validam a decisão: `*write-email --type social-proof --product "{{product-info}}" --desires "desires.yaml" --export "email-06.md"`
5. Redigir email de oferta principal — apresentação do produto com ênfase nos benefícios vs features: `*write-email --type offer --product "{{product-info}}" --goal "{{goal}}" --blueprint "sequence-blueprint.md" --export "email-07.md"`
6. Redigir email de urgência/escassez — elemento de urgência genuíno e justificado: `*write-email --type urgency --product "{{product-info}}" --blueprint "sequence-blueprint.md" --export "email-08.md"`
7. Redigir email de fechamento/último recurso — para não-convertidos, quebrar padrão de leitura: `*write-email --type last-chance --audience "audience-dossier.md" --blueprint "sequence-blueprint.md" --export "email-09.md"`
8. Revisar sequência completa para consistência de voz, progressão narrativa e ritmo: `*sequence-review --emails "email-*.md" --voice "{{brand-voice}}" --blueprint "sequence-blueprint.md"`

Entregável: `email-sequence-complete.md` com todos os emails redigidos, corpo completo, preview text e notas de formatação.

---

### Fase 4 — Subject Line Optimization (Dia 3, 2-3h)

1. Criar 5 variantes de subject line por email usando diferentes frameworks: `*subject-lines --emails "email-sequence-complete.md" --frameworks "curiosity,benefit,urgency,social-proof,question" --export "subject-variants.yaml"`
2. Classificar cada variante por taxa de abertura esperada baseada em benchmarks do setor: `*subject-scoring --variants "subject-variants.yaml" --industry "{{business-goals}}" --export "subject-scores.yaml"`
3. Selecionar variante A (controle) e variante B (challenger) por email para teste: `*ab-selection --scores "subject-scores.yaml" --export "ab-subjects.yaml"`
4. Verificar spam score de cada subject line — evitar termos que ativam filtros: `*spam-check --subjects "ab-subjects.yaml" --export "spam-report.yaml"`
5. Otimizar preview text para cada email — complementar o subject sem repetir: `*preview-text --subjects "ab-subjects.yaml" --emails "email-sequence-complete.md" --export "preview-texts.yaml"`
6. Documentar hipótese e métrica de sucesso para cada teste A/B planejado: `*ab-hypothesis --tests "ab-subjects.yaml" --metric "open-rate" --export "ab-plan.yaml"`

Entregável: `subject-lines-optimized.yaml` com variantes A/B, preview texts, spam scores e hipóteses de teste.

---

### Fase 5 — Automation Setup (Dia 4, 2-3h)

1. Documentar lógica de automação completa — triggers, delays, condições, branches: `*automation-logic --structure "sequence-structure.yaml" --triggers "trigger-logic.yaml" --export "automation-spec.yaml"`
2. Criar diagrama de fluxo visual da sequência — para configuração na plataforma: `*flow-diagram --automation "automation-spec.yaml" --export "automation-flow.svg"`
3. Definir segmentação e tags necessárias na plataforma de email: `*segmentation-spec --audience "{{audience-segment}}" --triggers "{{triggers}}" --export "segmentation-setup.yaml"`
4. Documentar configuração técnica para as principais plataformas — Klaviyo, ActiveCampaign, Mailchimp: `*platform-setup --automation "automation-spec.yaml" --platforms "klaviyo,activecampaign,mailchimp" --export "platform-guides.md"`
5. Definir supressões e exclusões — quem NÃO deve receber cada email: `*suppression-rules --automation "automation-spec.yaml" --export "suppression-spec.yaml"`
6. Criar checklist de QA pré-ativação — testes obrigatórios antes de ir ao ar: `*qa-checklist --sequence "email-sequence-complete.md" --automation "automation-spec.yaml" --export "pre-launch-checklist.md"`

Entregável: `automation-setup.md` com lógica completa, fluxograma e guias de configuração por plataforma.

---

### Fase 6 — A/B Testing & Optimization Plan (Dia 4, 1-2h)

1. Definir roadmap de testes A/B para os primeiros 60 dias — o quê, quando e por quê testar: `*ab-roadmap --sequence "email-sequence-complete.md" --ab-plan "ab-plan.yaml" --export "ab-roadmap.yaml"`
2. Criar variantes de copy para os 3 emails de maior impacto: `*copy-variants --emails "email-02,email-05,email-07" --voice "{{brand-voice}}" --export "copy-variants.md"`
3. Definir tamanho de amostra e duração necessária para cada teste ser estatisticamente válido: `*test-sizing --list-size "{{audience-segment}}" --ab-roadmap "ab-roadmap.yaml" --export "test-sizing.yaml"`
4. Criar template de relatório de performance da sequência — métricas semanais e mensais: `*performance-template --kpis "open-rate,click-rate,conversion-rate,revenue-per-email" --export "performance-report-template.xlsx"`
5. Compilar documento final de entrega — sequência, automação, guias e plano de testes: `*deliverable-compile --all-data "." --template "email-sequence-deliverable" --export "email-sequence-package.pdf"`

Entregável: `a-b-variants.md` e `ab-roadmap.yaml` com roadmap de testes, variantes de copy e template de performance.

---

## Comandos Disponíveis

- `*audience-profile` — Construção de perfil psicográfico do segmento
- `*objection-mapping` — Mapeamento das principais objeções à conversão
- `*narrative-arc` — Definição do arco narrativo da sequência
- `*write-email` — Redação de email por tipo e posição na sequência
- `*subject-lines` — Geração de variantes de subject por framework
- `*spam-check` — Verificação de spam score de subject lines
- `*automation-logic` — Documentação da lógica de automação
- `*flow-diagram` — Geração de diagrama de fluxo da automação
- `*ab-roadmap` — Definição do roadmap de testes A/B
- `*deliverable-compile` — Compilação do pacote final de entrega

## Critérios de Conclusão

- [ ] Perfil psicográfico do segmento completo com objeções, desejos e linguagem mapeados
- [ ] Blueprint da sequência com arco narrativo e papel de cada email definidos
- [ ] Todos os emails redigidos com corpo completo, voz consistente e CTA claro
- [ ] Mínimo 3 variantes de subject line por email com spam score verificado
- [ ] Preview texts otimizados para todos os emails da sequência
- [ ] Variantes A/B selecionadas com hipóteses documentadas para cada teste
- [ ] Lógica de automação documentada com fluxograma e triggers de comportamento
- [ ] Guias de configuração para pelo menos 2 plataformas de email marketing
- [ ] Roadmap de testes A/B para 60 dias com sizing estatístico
- [ ] Template de relatório de performance configurado com KPIs da sequência
