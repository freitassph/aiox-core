---
task: medical-copy-framework-task
responsavel: "@medical-copywriter"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

# Task: Medical Copy Framework — Copy Humanizada CFM-Compliant

## Objetivo
Produzir TODA a copy da landing page médica: headlines, subtítulos, descrições de serviço, textos de seções, CTAs, FAQ e depoimentos. Copy 100% aprovada pelo médico e em conformidade com CFM/CONAR.

## Agentes Envolvidos
- **`medical-copywriter`** (Marina Silveira) — produção principal
- **`medical-briefing-strategist`** (Dra. Ana Claudia) — estratégia e posicionamento
- **`cfm-compliance-sentinel`** (Dr. Eduardo) — revisão de conformidade

## Inputs Necessários
- Briefing completo aprovado
- Compliance Risk Map da especialidade
- SEO keyword strategy (para otimizar copy)

---

## Fase 1: Posicionamento & Voz da Marca (medical-briefing-strategist)

### 1.1 Definir Tom de Comunicação

```
ESPECTRO DE TOM (escolher posição):
  Técnico ←──────────────────────────→ Acolhedor
  Formal  ←──────────────────────────→ Casual
  Direto  ←──────────────────────────→ Narrativo

RESULTADO PARA [ESPECIALIDADE]:
  Ex: Cardiologista 55+ anos: Tom sóbrio-humano, mais formal que casual
  Ex: Dermatologista estética 25-40: Tom modern-acolhedor, menos técnico
  Ex: Pediatra: Tom acolhedor-otimista, linguagem parental
```

### 1.2 Proposta de Valor Única (PVU)
```
Template: "Para [paciente específico] que [problema/necessidade],
            Dr. [Nome] oferece [solução] com [diferencial único]"

Exemplo (cardiologia):
  "Para quem quer cuidar do coração sem sentir que está num consultório frio,
   Dr. Pedro Almeida oferece diagnóstico cardíaco completo
   com atenção individualizada e linguagem que você entende."
```

---

## Fase 2: Copy das Seções

### 2.1 Hero Copy (Mais Crítico — 5 segundos para converter)

```
FRAMEWORK "JTBD HERO":
  WHO:    Quem é o paciente (implícito no headline)
  WHAT:   O que o médico trata (especialidade clara)
  BENEFIT: Por que o paciente se beneficia (não features)
  WHERE:  Localização (para SEO local + confiança)

HEADLINE H1 (Fraunces, 7-10 palavras):
  ❌ "Bem-vindo ao consultório do Dr. João Silva"
  ❌ "Médico cardiologista com 15 anos de experiência"
  ✓  "Seu coração cuidado com precisão e humanidade em São Paulo"
  ✓  "Dermatologia que vai além da estética — cuide da sua pele de verdade"
  ✓  "Ortopedia para você voltar a se mover sem dor"

SUBTÍTULO (body-xl, 1-2 linhas):
  Complementar o headline com: especialidade + localização + diferencial
  "Consultas e exames em [Bairro], [Cidade]. Dr. [Nome], CRM-[UF] [Número]."
  NÃO repetir o headline. Adicionar informação concreta.

CTA PRIMÁRIO (btn-primary):
  ✓ "Agendar minha consulta"
  ✓ "Marcar consulta"
  ✓ "Quero agendar"
  ❌ "Clique aqui"
  ❌ "Saiba mais"
  ❌ "Entre em contato"

CTA SECUNDÁRIO:
  ✓ "Falar pelo WhatsApp"
  ✓ "Ligar agora: (11) 9999-9999"
```

### 2.2 Sobre o Médico

```
ESTRUTURA EMOCIONAL (não só curriculum):

Parágrafo 1 — HISTÓRIA (por que medicina/especialidade):
  "Quando [evento ou motivação pessoal], compreendi que [insight].
   Desde então, [o que faz de diferente]."
  ⚠️ Evitar clichê: "sempre gostei de ajudar pessoas"

Parágrafo 2 — ABORDAGEM (como trata):
  "Na minha consulta, [o que o paciente pode esperar]."
  Linguagem: "você" (direto ao paciente), não "os pacientes"

Parágrafo 3 — DIFERENCIAL (o que me separa):
  Fatos concretos: anos, formação, tecnologia, tempo de consulta
  NÃO: "sou o melhor", "único" (CFM proíbe comparação)

Parágrafo 4 — VISÃO (o que defende sobre saúde):
  Quote que vira elemento visual em DM Serif Display italic
  Ex: "Saúde não é ausência de doença. É qualidade de vida."
```

### 2.3 Serviços / Condições Tratadas

```
COPY POR SERVIÇO — Template:
  Nome: [Como o PACIENTE chama, não como o médico nomeia]
    Ex: "Dor no joelho" em vez de "Condropatia patelar"
    Ex: "Pressão alta" em vez de "Hipertensão arterial sistêmica"

  Descrição (max 3 linhas):
    O que é + quem afeta + o que o médico faz
    "A pressão alta afeta 1 em cada 3 brasileiros adultos.
     Diagnóstico precoce e acompanhamento regular reduzem
     significativamente o risco de complicações cardíacas."

  ⚠️ CFM: NUNCA usar "cura", "elimina", "garante"
  ✓ Usar: "reduz risco", "melhora qualidade de vida", "auxilia no controle"
```

### 2.4 Depoimentos (Ético — CFM Art. de Publicidade)

```
SELEÇÃO (trabalhar com depoimentos reais do cliente):
  ✓ ACEITAR: "O atendimento foi muito humanizado, me senti acolhida"
  ✓ ACEITAR: "Consultório muito bem equipado e equipe simpática"
  ✓ ACEITAR: "Doutor explicou tudo com muita clareza e paciência"
  ✗ RECUSAR: "Curei minha diabetes com o tratamento do Dr. João"
  ✗ RECUSAR: "Voltei a caminhar depois de 6 meses de tratamento"
  ✗ RECUSAR: "Emagreci 20kg com o protocolo dele"

DISCLAIMER obrigatório no copy:
  "Os depoimentos abaixo referem-se à experiência de atendimento.
   Resultados clínicos individuais podem variar."
```

### 2.5 FAQ — Perguntas Frequentes

```
CATEGORIAS DE PERGUNTAS:

Transacional (dúvidas de processo):
  "Vocês aceitam [plano]?"
  "Como funciona o agendamento online?"
  "Qual o tempo médio de consulta?"
  "Preciso de encaminhamento para consultar?"
  "Qual o valor da consulta particular?"

Informacional (condição/doença):
  "O que é [condição principal]?"
  "Quais são os sintomas de [condição]?"
  "Quando devo procurar um [especialidade]?"

Logística:
  "Vocês têm estacionamento?"
  "O consultório é acessível para cadeirante?"
  "Quanto tempo antes devo chegar para a consulta?"

ESTILO DE RESPOSTA:
  Direta, linguagem leiga, máx 3-4 linhas por resposta
  NUNCA: "Sim!" ou "Claro!" (informal demais)
  NUNCA: diagnóstico ou orientação clínica específica
  SEMPRE: redirecionar para consulta quando a pergunta pede orientação médica
```

### 2.6 CTAs por Seção

```
MAPEAMENTO DE CTAs:
  Hero:           "Agendar minha consulta" (primary)
  Sobre médico:   "Agendar com Dr. [Nome]" (primary)
  Serviços:       "Saiba mais sobre [serviço]" (ghost) ou "Agendar" (primary)
  Depoimentos:    "Veja mais avaliações" (ghost) → link Google
  Formulário:     "Solicitar agendamento" (primary, não genérico)
  Localização:    "Como chegar" (ghost) + "Agendar agora" (primary)

REGRA: Máximo 2 CTAs primários acima do fold. Depois, 1 por seção.
       CTAs secundários (ghost) podem repetir mais.
```

---

## Fase 3: Revisão de Compliance (cfm-compliance-sentinel)

Cada linha de copy passa pelo checklist CFM:
- Nenhuma promessa de resultado
- CRM mencionado em contextos corretos
- Depoimentos sem resultado clínico
- Linguagem sem sensacionalismo

---

## Critérios de Aceite

```
□ Headlines com foco no paciente (não no médico)
□ H1 contém especialidade + benefício + localização implícita
□ Copy revisada linha a linha pelo cfm-compliance-sentinel
□ Compliance Clearance emitida
□ Copy aprovada pelo médico responsável (assinatura + data)
□ Nenhum placeholder ("INSERIR AQUI", "TBD") no copy final
□ FAQ com respostas para as top 3 objeções identificadas no briefing
□ Tone of voice consistente em todas as seções
```

## Outputs
- **`/content/copy/hero-copy.md`** — Headlines e CTAs
- **`/content/copy/about-copy.md`** — Bio e textos do médico
- **`/content/copy/services-copy.md`** — Todos os serviços
- **`/content/copy/testimonials-approved.md`** — Depoimentos validados
- **`/content/copy/faq-copy.md`** — Q&A completo
- **`/docs/copy-compliance-clearance.md`** — Aprovação CFM assinada
