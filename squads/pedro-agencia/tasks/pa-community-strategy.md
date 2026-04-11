---
task: pa-community-strategy
agent: pa-tribe
description: "Estratégia e construção de comunidade de marca — do zero ao engajamento sustentável"
inputs: [brand-strategy, audience-personas, platforms, business-goals]
outputs: [community-strategy, platform-choice, onboarding-journey, content-program, moderation-protocol]
elicit: true
---

# Task: Estratégia de Comunidade de Marca

## Purpose

Execute this task with excellence following S+++ standards.

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

Desenvolver uma estratégia completa de construção de comunidade que transforme audiência passiva em membros ativos e engajados, conectados entre si e com a marca por um propósito comum. Comunidades fortes não são grupos com muitos membros — são espaços onde pessoas encontram valor genuíno, desenvolvem relações e constroem identidade coletiva em torno de algo que importa para elas.

A estratégia posiciona a comunidade como ativo estratégico de negócio, não como mais um canal de comunicação. Uma comunidade bem construída reduz CAC através de indicações orgânicas, aumenta LTV por maior engajamento com o produto, gera insights contínuos de clientes e cria defensores de marca que amplificam mensagens com credibilidade que nenhum anúncio pago consegue replicar.

O processo define com precisão o posicionamento da comunidade, a escolha de plataforma alinhada ao comportamento do `audience-personas`, a jornada de onboarding do novo membro, o programa de conteúdo que sustenta engajamento de longo prazo e os rituais que criam pertencimento — construindo, desde o primeiro dia, as condições para uma comunidade que cresce de forma autônoma e sustentável.

## Processo de Execução

### Fase 1 — Posicionamento da Comunidade (Dia 1)

1. Analisar `brand-strategy` para identificar o propósito central que a comunidade vai servir
2. Definir a "razão de reunir": o que conecta os membros além da marca
3. Mapear o valor que os membros receberão entre si (peer-to-peer) e da marca
4. Posicionar a comunidade no espectro: suporte, aprendizado, networking, co-criação ou advocacy
5. Definir o que a comunidade NÃO é: estabelecer fronteiras claras de escopo e tom
6. Criar o pitch da comunidade: como convidar alguém em uma frase
7. Executar `*community-positioning --brand "{{brand-strategy}}" --goals "{{business-goals}}"`

Entregável: `community-positioning.md` com propósito, valor, posicionamento e pitch de uma frase

---

### Fase 2 — Seleção de Plataforma (Dia 1-2)

1. Analisar `audience-personas` para mapear onde o público já se reúne e como consome conteúdo
2. Avaliar `platforms` disponíveis contra critérios: controle de dados, custo, features, fricção de entrada
3. Comparar opções: WhatsApp, Discord, Slack, Circle, Mighty Networks, Telegram, Facebook Groups
4. Considerar plataforma principal + plataforma de amplificação (ex: Discord + newsletter)
5. Avaliar capacidade de moderação e gestão da equipe para cada opção
6. Definir plataforma primária com justificativa baseada nos critérios do público
7. Executar `*platform-selection --personas "{{audience-personas}}" --options "{{platforms}}" --criteria control,cost,ux`

Entregável: `platform-choice.md` com análise comparativa, decisão e justificativa por critério

---

### Fase 3 — Jornada do Membro (Dia 2)

1. Mapear o ciclo de vida completo do membro: descoberta, entrada, ativação, engajamento, liderança
2. Definir o processo de onboarding: primeiro passo, boas-vindas, orientação e primeira vitória
3. Criar fluxo de onboarding automatizado para os primeiros 7 dias do novo membro
4. Definir critérios de ativação: o que caracteriza um membro ativo vs. inativo
5. Desenvolver programa de progressão de membros: tiers, badges, reconhecimento por contribuição
6. Criar protocolo de reengajamento para membros que ficam inativos por mais de 30 dias
7. Executar `*member-journey --stages discovery,onboarding,activation,engagement,leadership`

Entregável: `onboarding-journey.md` com fluxo dos primeiros 7 dias, critérios de ativação e progressão

---

### Fase 4 — Programa de Conteúdo (Dia 2-3)

1. Definir pilares de conteúdo alinhados ao propósito da comunidade e interesses do `audience-personas`
2. Criar calendário recorrente de conteúdo: posts semanais, discussões temáticas, desafios mensais
3. Desenvolver formatos de conteúdo que geram participação: perguntas, polls, AMAs, estudos de caso
4. Definir proporção de conteúdo da marca vs. conteúdo dos membros (regra 20/80)
5. Criar templates de posts para os formatos mais usados com orientações de tom
6. Desenvolver programa de curadoria de conteúdo gerado pelos membros (UGC)
7. Executar `*content-program --pillars "{{brand-strategy}}" --cadence weekly --formats discussion,challenge,ama`

Entregável: `content-program.md` com pilares, calendário recorrente, formatos e templates

---

### Fase 5 — Rituais de Comunidade (Dia 3)

1. Criar rituais recorrentes que constroem identidade coletiva e antecipação: welcome wednesday, friday wins
2. Desenvolver evento de comunidade mensal: live, workshop, Q&A ou hackathon
3. Criar programa de reconhecimento de membros: highlights, destaques, member of the month
4. Definir rituais de celebração de marcos: aniversários da comunidade, conquistas coletivas
5. Desenvolver programa de early access ou benefícios exclusivos para membros mais ativos
6. Documentar como os rituais reforçam o posicionamento e o senso de pertencimento
7. Executar `*community-rituals --frequency weekly,monthly --types recognition,events,milestones`

Entregável: `community-rituals.md` com calendário de rituais, programa de reconhecimento e eventos

---

### Fase 6 — Protocolo de Moderação (Dia 3-4)

1. Criar regras da comunidade: o que é permitido, o que não é e por quê
2. Definir processo de moderação: quem modera, quando, com quais ferramentas
3. Desenvolver playbook de moderação: como lidar com spam, conflitos, crises e membros difíceis
4. Criar escalonamento: quando o moderador aciona o gestor, quando o gestor aciona a marca
5. Definir sistema de reports e como cada tipo de report é processado
6. Criar protocolo de crise de reputação dentro da comunidade
7. Executar `*moderation-protocol --rules community-guidelines --escalation 3-tier`

Entregável: `moderation-protocol.md` com regras, playbook de moderação e protocolos de crise

---

### Fase 7 — Mensuração e Estratégia Consolidada (Dia 4-5)

1. Definir métricas de saúde da comunidade: DAU/MAU, taxa de postagem, membros ativos por mês
2. Definir métricas de impacto no negócio: referrals gerados, churn de membros vs. não-membros, NPS
3. Criar dashboard de comunidade com métricas-chave e cadência de revisão
4. Estabelecer metas de crescimento alinhadas aos `business-goals` por trimestre
5. Definir critérios para escalar a comunidade: quando abrir moderadores voluntários, quando criar subcomunidades
6. Consolidar tudo na `community-strategy` e preparar apresentação executiva para o cliente
7. Executar `*community-metrics --health dau,posting-rate,activation --impact referrals,churn,nps`

Entregável: `community-strategy.pdf` completo com estratégia consolidada e plano de lançamento

---

## Comandos Disponíveis

- `*community-positioning` — Definir propósito, posicionamento e pitch da comunidade
- `*platform-selection` — Comparar e selecionar plataforma alinhada ao público e objetivos
- `*member-journey` — Mapear jornada do membro com onboarding e progressão
- `*content-program` — Criar programa de conteúdo com pilares, calendário e formatos
- `*community-rituals` — Desenvolver rituais recorrentes e programa de reconhecimento
- `*moderation-protocol` — Criar regras, playbook de moderação e protocolos de crise
- `*community-metrics` — Definir métricas de saúde e impacto no negócio
- `*launch-plan` — Criar plano de lançamento da comunidade com sequência de ativação

## Critérios de Conclusão

- [ ] Posicionamento da comunidade definido com propósito claro e pitch de uma frase
- [ ] Plataforma selecionada com análise comparativa e justificativa documentada
- [ ] Jornada do membro mapeada com fluxo de onboarding dos primeiros 7 dias
- [ ] Critérios de ativação e programa de progressão de membros definidos
- [ ] Programa de conteúdo criado com pilares, calendário recorrente e templates
- [ ] Rituais de comunidade desenvolvidos com calendário e programa de reconhecimento
- [ ] Protocolo de moderação completo com regras, playbook e escalação de crises
- [ ] Métricas de saúde e impacto no negócio definidas com metas por trimestre
- [ ] Estratégia consolidada em documento final pronto para apresentação ao cliente
