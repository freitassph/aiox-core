# Template: Estrutura de Landing Page Médica S+++ Tier

> Estrutura de referência para construção de qualquer landing page médica.
> Adaptar seções conforme especialidade, porte da clínica e objetivo de conversão.
> **Nunca copiar copy deste template — apenas estrutura e instruções.**

---

## ESTRUTURA COMPLETA (ordem otimizada para conversão)

```
[NAVEGAÇÃO]
  │
  ▼
[01] HERO — Above the fold. LCP crítico. Única chance de primeira impressão.
  │
  ▼
[02] TRUST BAR — Credenciais em formato compacto. Reforço imediato de autoridade.
  │
  ▼
[03] SOBRE O MÉDICO — Conexão humana. Quem é, por que confiar.
  │
  ▼
[04] SERVIÇOS — O que trato? Como o paciente busca, não como o médico categoriza.
  │
  ▼
[05] PROCESSO / COMO FUNCIONA — Reduz ansiedade. "Vai ser simples."
  │
  ▼
[06] DEPOIMENTOS — Prova social ética. Outros pacientes já confiaram.
  │
  ▼
[07] AGENDAMENTO — CTA de conversão principal. Menos atrito possível.
  │
  ▼
[08] FAQ — Remove objeções restantes. Responde as dúvidas finais.
  │
  ▼
[09] LOCALIZAÇÃO — Validação de conveniência. "Consigo chegar lá."
  │
  ▼
[FOOTER]
```

---

## [NAVEGAÇÃO] — Sticky Header

```
ELEMENTOS:
├── Logo (esquerda) — 40px altura máxima
├── Nav links (centro, desktop) — máximo 5 links
│   ex: Especialidades | Sobre | Convênios | Blog | Contato
├── Contato rápido (direita, desktop)
│   ├── Telefone: (XX) XXXX-XXXX
│   └── CTA "Agendar Consulta" (btn-primary, small)

MOBILE:
├── Logo (esquerda)
├── CTA WhatsApp (ícone, direita)
└── Hamburger menu (direita)

COMPORTAMENTO:
- Sticky ao scroll
- Fundo: transparente → branco com shadow-sm após 100px scroll
- Transition: 300ms ease-out
```

---

## [01] HERO SECTION

```
OBJETIVO: Responder em < 5 segundos:
  1. "Qual médico/especialidade é este?"
  2. "Por que devo confiar?"
  3. "Como agendar?"

ESTRUTURA:
├── EYEBROW: "[Especialidade] • CRM-[UF] [Número]"
│   (fonte: label-md, tracking-widest, cor: brand-primary)
│
├── H1 HEADLINE: (Fraunces, display-2xl ou display-xl)
│   → NÃO: "Bem-vindo ao consultório do Dr. João"
│   → SIM: "Cuidado especializado do coração para você viver bem"
│   → SIM: "Saúde da pele com diagnóstico preciso e tratamento personalizado"
│   REGRA: Foco no paciente, não no médico. Benefício, não serviço.
│
├── SUBTÍTULO: (body-xl, neutral-700)
│   → 1-2 linhas. Especialidade + localização + diferencial.
│   → ex: "Cardiologista em São Paulo com 18 anos de experiência.
│          Atendimento humanizado com tecnologia de diagnóstico de ponta."
│
├── CTA PRIMÁRIO: "Agendar Consulta" (btn-primary lg)
│   → Ação específica, não genérica
│
├── CTA SECUNDÁRIO: "Falar pelo WhatsApp" (btn-whatsapp md) OU "Ligar agora"
│   → Alternativa para quem prefere contato imediato
│
└── TRUST SIGNALS INLINE:
    ├── ★★★★★ [X] avaliações (link para depoimentos)
    ├── • [X] anos de experiência
    └── • CRM verificado ✓

VISUAL:
- Foto do médico: posição direita, 3:4 portrait, qualidade máxima
- Background: gradiente pearl → branco, textura SVG médica sutil (opacity 0.03)
- Elemento decorativo: forma orgânica brand-primary/8 no canto superior
```

---

## [02] TRUST BAR — Credenciais Compactas

```
OBJETIVO: Reforçar autoridade com 3-5 elementos impactantes

ELEMENTOS (escolher os mais fortes do médico):
├── "18 anos de experiência" (ícone relógio)
├── "4.200+ pacientes atendidos" (ícone usuários)
├── "★ 4.9 — 127 avaliações" (ícone estrela)
├── [Logo SBC] — Membro da Sociedade Brasileira de Cardiologia
├── [Logo AMB] — Especialista registrado AMB
└── "Convênios aceitos: Unimed, Amil, SulAmérica, +15"

VISUAL:
- Fundo: branco
- Border-top e border-bottom: 1px neutral-200
- Padding: 20px vertical
- Separadores: bullet point ou pipe (|)
- Logos: grayscale + opacity 70%
- Números: Fraunces stat-hero, animados ao entrar em viewport
```

---

## [03] SOBRE O MÉDICO

```
OBJETIVO: Criar conexão humana e construir confiança profunda

ESTRUTURA (2 colunas → 1 coluna mobile):

COLUNA ESQUERDA: Foto grande (portrait 3:4, radius-2xl, shadow-xl)
  + overlay sutil com CRM badge na base da foto

COLUNA DIREITA:
├── Eyebrow: "Sobre o Dr. / Dra. [Nome]"
├── H2: Nome + Especialidade (Fraunces heading-xl)
├── CRM Badge: "CRM-SP 123456 | RQE 98765" (monospace)
├── Bio humanizada (3-4 parágrafos):
│   P1: Por que escolheu a medicina/especialidade (história pessoal)
│   P2: Abordagem de atendimento (humanizado, tecnológico, acolhedor)
│   P3: Diferencial real (não genérico)
│   P4: Frase sobre a visão do paciente
│
├── Quote em destaque (DM Serif Display, italic, border-left teal):
│   "[Frase de filosofia do médico sobre saúde/paciente]"
│
├── Timeline de Formação:
│   │ 2005 — Graduação Medicina (Faculdade X)
│   │ 2008 — Residência em [Especialidade] (Hospital Y)
│   │ 2010 — Fellowship em [Sub] (Hospital Z)
│   └─ 2012 — Pós-graduação em [Tema]
│
├── Afiliações (logos pequenos, grayscale):
│   [CFM] [AMB] [SBC] [SBHG]
│
└── CTA: "Agendar com Dr. [Nome]" (btn-primary)
```

---

## [04] SERVIÇOS / ESPECIALIDADES

```
OBJETIVO: Mostrar o que trata na linguagem do paciente

TÍTULO DA SEÇÃO:
├── Eyebrow: "Especialidades"
└── H2: "O que tratamos" (não "Nossos serviços" — mais direto)

GRID: 3 colunas desktop / 2 tablet / 1 mobile

CARD PADRÃO (ServiceCardIcon):
├── Ícone médico SVG (24px, brand-primary, fundo brand-primary-light + radius-xl)
├── Nome do serviço (heading-sm, peso 700)
├── Descrição leiga (body-sm, 2-3 linhas)
├── Tag opcional: "Mais procurado" (badge gold) ou "Novo" (badge sage)
└── Link "Saiba mais →" (texto brand-primary, chevron animado)

COPY EXAMPLE:
  Título: "Problemas de coração" (não "Cardiologia geral")
  Desc: "Diagnóstico e acompanhamento de hipertensão, arritmias,
         insuficiência cardíaca e prevenção de infarto."

FUNDO DA SEÇÃO: neutral-050 (diferencia do hero branco)
```

---

## [05] COMO FUNCIONA / PROCESSO

```
OBJETIVO: Reduzir ansiedade. "Agendar é simples. A consulta é tranquila."

ESTRUTURA: Steps numerados horizontais (desktop) ou verticais (mobile)

EXAMPLE STEPS:
  01. "Agende online ou pelo WhatsApp"
      Escolha a data e horário que funciona para você.

  02. "Receba a confirmação"
      Email e WhatsApp com detalhes e instruções de preparo.

  03. "Venha para a consulta"
      Ambiente acolhedor. Atendimento sem pressa.

  04. "Siga com seu plano de cuidado"
      Diagnóstico claro e tratamento personalizado.

VISUAL: Icons numerados, linha conectora sutil entre steps
FUNDO: Branco ou brand-primary (dark section elegante)
```

---

## [06] DEPOIMENTOS

```
OBJETIVO: Prova social ética. Reforço de confiança via pacientes reais.

DISCLAIMER OBRIGATÓRIO (acima dos depoimentos, visível):
"Os depoimentos a seguir referem-se à experiência de atendimento.
 Resultados clínicos individuais podem variar."

CARD:
├── Aspas decorativas (SVG, brand-primary/20)
├── Texto (body-md, Quote font italic, 3-5 linhas)
├── Separador
├── Nome: "Maria C." (inicial do sobrenome por privacidade)
├── Condição: "Paciente de cardiologia" (genérica)
├── Data: "Março 2026"
└── Rating: ★★★★★ (SVG custom, não emoji)

LAYOUT: Carrossel 1 visível mobile / 2-3 desktop
FUNDO: Surface dark (impacto visual, break de seção)
AUTO-PLAY: NÃO (acessibilidade)
```

---

## [07] AGENDAMENTO

```
OBJETIVO: Conversão principal. Máximo 6 campos. Sem atrito.

TÍTULO:
├── Eyebrow: "Agende sua consulta"
└── H2: "Comece cuidando da sua saúde hoje"

FORMULÁRIO (esquerda, 60% desktop):
├── Nome completo (required)
├── Telefone (required, máscara BR)
├── Email (optional)
├── Plano de saúde (select, required)
├── Motivo da consulta (textarea 3 linhas, required — aviso LGPD inline)
├── Data preferencial (date picker, optional)
└── Consentimento LGPD (checkbox, required)
    "Concordo com o tratamento dos meus dados conforme a Política de Privacidade"
    CTA: "Solicitar Agendamento" (btn-primary lg, full width)

SIDEBAR (direita, 40% desktop):
├── "Ou entre em contato diretamente:"
├── 📞 (XX) XXXX-XXXX — Seg–Sex 8h–18h
├── 💬 Falar pelo WhatsApp (btn-whatsapp)
└── 📍 [Endereço resumido]

FUNDO: neutral-050 com shape decorativo
```

---

## [08] FAQ

```
OBJETIVO: Remover as últimas objeções antes da decisão.

ACCORDION (1 aberto por vez, ou todos fechados):

PERGUNTAS SUGERIDAS:
- "Vocês aceitam [Plano X]?"
- "Como funciona o agendamento online?"
- "Quanto tempo dura a consulta?"
- "Preciso de encaminhamento?"
- "Qual o valor da consulta particular?"
- "O que é [condição principal]?"
- "Quando devo procurar um [especialidade]?"
- "Vocês atendem crianças / idosos / plano X?"

SCHEMA.ORG: FAQPage markup embutido (rich result no Google)
```

---

## [09] LOCALIZAÇÃO

```
CONTEÚDO:
├── H2: "Estamos em [Cidade/Bairro]"
├── Endereço completo
├── Como chegar (metrô, ônibus, estacionamento)
├── Google Maps embed (lazy load)
├── Horários de atendimento (tabela)
└── CTA: "Traçar rota" (link Google Maps)

VISUAL: Mapa (esquerda 60%) | Infos (direita 40%)
```

---

## [FOOTER COMPLETO]

```
ROW 1: Logo + tagline + CRM/RQE
ROW 2: Navegação (Especialidades | Sobre | Convênios | Blog | Contato | Agendar)
ROW 3: Contato (tel | whatsapp | email | endereço)
ROW 4: Convênios (logos mini)
ROW 5: Legal (© | Privacidade | Cookies | Termos | "Gerenciar Cookies")
```
