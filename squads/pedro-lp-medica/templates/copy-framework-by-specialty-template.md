# Template: Copy Framework por Especialidade Médica

> **Instrução de uso:** Use este template como base para gerar copy adaptada à especialidade do projeto.
> Substitua os campos em `[colchetes]` com dados do briefing.
> Agente responsável: `medical-copywriter`
> Valide toda copy com `cfm-compliance-sentinel` antes da implementação.

---

## REGRAS UNIVERSAIS DE COPY MÉDICA (CFM 2.336/2023)

### Vocabulário PROIBIDO (blocker automático)

| ❌ Proibido | ✅ Substituto |
|-----------|-------------|
| "Cura garantida" | "Tratamento eficaz" / "Resultados consistentes" |
| "100% de sucesso" | "Alta taxa de satisfação" |
| "Melhor médico" / "Número 1" | "Referência em [especialidade]" |
| "Milagre" / "Revolucionário" | "Abordagem inovadora baseada em evidências" |
| "Aprovado pela ANVISA" (quando não é) | Omitir ou verificar antes |
| "Antes e depois" (plástica/estética, exceto derma) | Texto descritivo de resultado |
| "Elimina definitivamente" | "Trata com eficácia" |
| "Sem dor" (absoluto) | "Procedimento confortável" / "Mínimo desconforto" |
| "Mais barato" | "Atendimento acessível" |
| "Atendo todos os planos" (sem verificar) | Listar planos reais |

### CRM — Exibição Obrigatória (3 locais mínimos)
```
Formato: CRM-[UF] [número] | ex: CRM-SP 123456
Locais: Hero section + Seção Sobre + Footer
```

### Depoimentos — Regras CFM
- ✅ Permitido: experiência emocional ("Senti acolhimento", "Fui bem atendida")
- ✅ Permitido: relato de processo ("Explicou tudo com clareza")
- ❌ Proibido: resultado clínico ("Curei minha diabetes", "Emagreci X kg")
- ❌ Proibido: comparação com outro médico
- Obrigatório: disclaimer visível antes dos depoimentos

---

## SEÇÃO 1 — HERO COPY

### Framework JTBD (Jobs To Be Done)

```
[QUEM] está buscando [TRANSFORMAÇÃO DESEJADA]?
```

**Estrutura do headline:**
```
H1: [Transformação desejada] para [público específico]
    em [cidade/localidade]

Subheadline: [Como o médico entrega isso] + [Diferencial]

CTA: [Ação clara e segura] → "Agendar Consulta" | "Falar pelo WhatsApp"
```

### Exemplos por Especialidade

**Cardiologia:**
> H1: Cuide do seu coração com quem entende de cardiologia em [Cidade]
> Sub: Dr. [Nome], cardiologista com [X] anos de experiência, oferece diagnóstico preciso e acompanhamento personalizado para sua saúde cardiovascular.

**Dermatologia:**
> H1: Pele saudável e tratamentos dermatológicos confiáveis em [Cidade]
> Sub: Dra. [Nome], dermatologista com abordagem personalizada para cada tipo de pele — da prevenção ao tratamento especializado.

**Ortopedia:**
> H1: Volte a viver sem dor com ortopedia especializada em [Cidade]
> Sub: Dr. [Nome], ortopedista focado em diagnóstico preciso e recuperação funcional — do joelho à coluna.

**Endocrinologia:**
> H1: Equilíbrio hormonal e qualidade de vida em [Cidade]
> Sub: Dra. [Nome], endocrinologista especializada em diabetes, tireoide e saúde metabólica com abordagem humanizada.

**Ginecologia/Obstetrícia:**
> H1: Cuidado integral da saúde feminina em todas as fases da vida em [Cidade]
> Sub: Dra. [Nome], ginecologista e obstetra com atendimento acolhedor do pré-natal à menopausa.

**Neurologia:**
> H1: Tratamento neurológico especializado para enxaqueca, AVC e muito mais em [Cidade]
> Sub: Dr. [Nome], neurologista com foco em qualidade de vida e diagnóstico preciso para condições do sistema nervoso.

**Pediatria:**
> H1: Saúde e desenvolvimento do seu filho acompanhados de perto em [Cidade]
> Sub: Dra. [Nome], pediatra com atendimento acolhedor para bebês, crianças e adolescentes — do nascimento à puberdade.

**Psiquiatria:**
> H1: Cuidado com saúde mental que vai além do diagnóstico em [Cidade]
> Sub: Dr. [Nome], psiquiatra com abordagem humanizada e sem estigma — porque saúde mental é saúde.

**Oncologia:**
> H1: Diagnóstico precoce e acompanhamento oncológico especializado em [Cidade]
> Sub: Dra. [Nome], oncologista com equipe multidisciplinar e foco em qualidade de vida durante todo o tratamento.

---

## SEÇÃO 2 — SOBRE O MÉDICO

### Estrutura
```markdown
## Sobre [Dr./Dra. Nome]

[Lead de conexão humana — 1 frase sobre o porquê da medicina]

[Formação e credenciais — 2-3 linhas]

[Foco de atuação — o que trata com excelência]

[Filosofia de atendimento — como trata o paciente]

[Trust signals — dados concretos quando disponíveis]

CRM-[UF] [número] | [Especialidade] | [Sociedade médica]
```

### Exemplo Preenchido (Cardiologia)
```markdown
## Sobre o Dr. [Nome]

Quando [X] anos atrás percebi que poderia ajudar pessoas a viverem mais e melhor cuidando
do coração, soube que essa seria minha missão.

Formado pela [Faculdade], com residência em Cardiologia pelo [Hospital de referência] e
membro da Sociedade Brasileira de Cardiologia (SBC), dedico-me ao diagnóstico preciso e
acompanhamento contínuo de doenças cardiovasculares.

Meu foco é simplificar o que parece complexo: transformar exames e diagnósticos em
um plano claro que você e sua família possam entender e seguir com confiança.

Com [X] anos de atuação, já realizei mais de [X] consultas e [X] exames diagnósticos
acompanhando pacientes em todas as fases — da prevenção ao tratamento ativo.

CRM-SP [número] | Cardiologista | Membro SBC
```

---

## SEÇÃO 3 — SERVIÇOS

### Copy por Tipo de Serviço

#### Consulta / Diagnóstico
```
Título: [Nome do Serviço]
Subtítulo: Diagnóstico preciso para o tratamento certo
Corpo: [O que acontece na consulta] + [Por que é importante] + [Para quem é indicado]
```

#### Procedimento / Exame
```
Título: [Nome do Procedimento]
Subtítulo: [Benefício funcional — não promessa de resultado]
Corpo: [Como é realizado] + [O que avalia/trata] + [Quando é indicado]
Nota CFM: Evitar prometer resultado específico. Descrever o processo.
```

#### Acompanhamento / Seguimento
```
Título: Acompanhamento [Especialidade]
Subtítulo: Monitoramento contínuo para sua saúde
Corpo: [Por que o acompanhamento é essencial] + [Frequência recomendada]
```

### Tabela de Copy por Especialidade

| Especialidade | Tom | Palavras-chave | Frases que ressoam |
|--------------|-----|----------------|-------------------|
| Cardiologia | Sóbrio + acolhedor | pressão, coração, cansaço, palpitações | "seu coração merece atenção especializada" |
| Dermatologia | Moderno + visual | pele, acne, manchas, proteção | "pele que reflete quem você é" |
| Ortopedia | Funcional + direto | dor, movimento, cirurgia, reabilitação | "volte a fazer o que ama" |
| Endocrinologia | Técnico + acolhedor | diabetes, hormônios, tireoide, peso | "equilíbrio que você sente no dia a dia" |
| Ginecologia | Empático + feminino | prevenção, útero, gravidez, menopausa | "sua saúde feminina em boas mãos" |
| Neurologia | Científico + esperançoso | enxaqueca, tontura, Parkinson | "viver melhor apesar do diagnóstico" |
| Pediatria | Otimista + parental | crescimento, vacinação, desenvolvimento | "tranquilidade para você, saúde para seu filho" |
| Psiquiatria | Empático + anti-estigma | ansiedade, depressão, TDAH, sono | "cuidar da mente é cuidar da vida" |
| Oncologia | Humanizado + esperançoso | diagnóstico precoce, tratamento, equipe | "você não enfrenta isso sozinho" |
| Urologia | Profissional + direto | próstata, cálculo, urina, função | "saúde masculina sem tabu" |

---

## SEÇÃO 4 — TRUST BAR (Números e Certificações)

### Formato
```
[Número/Badge] + [Label curto]
```

### Exemplos
```
+[X] anos    → "De experiência clínica"
+[X] mil     → "Pacientes atendidos"
[X]          → "Exames e diagnósticos"
★ [X.X]      → "Avaliação no Google"
[Sociedade]  → "Membro ativo"
```

> ⚠️ Use apenas números reais. Intervalos vagos são permitidos pelo CFM ("mais de 500").
> Proibido: percentuais de sucesso, taxas de cura, comparações com outros médicos.

---

## SEÇÃO 5 — DEPOIMENTOS (Filtro CFM)

### Depoimentos APROVADOS ✅

```
"A Dra. [Nome] me explicou tudo com uma clareza que nenhum médico tinha feito antes.
Me senti acolhida e segura durante todo o processo." — [Nome], [cidade]

"Finalmente encontrei um médico que ouve. O Dr. [Nome] tem uma paciência enorme
e uma dedicação raramente vista." — [Nome], [cidade]

"O atendimento desde a recepção até a consulta foi impecável. Me senti em boas mãos."
— [Nome], [cidade]
```

### Depoimentos REPROVADOS ❌

```
❌ "A Dra. [Nome] curou minha diabetes em 3 meses!" — resultado clínico = proibido
❌ "Emagreci 15kg com o acompanhamento dela!" — resultado quantitativo = proibido
❌ "Muito melhor que o médico que eu tinha antes!" — comparação = proibido
❌ "Garantiu que eu ficaria bem e ficou mesmo!" — promessa = proibido
```

### Disclaimer Obrigatório
```html
<p class="testimonial-disclaimer">
  Os depoimentos a seguir refletem a experiência individual de cada paciente com o
  atendimento. Resultados clínicos variam conforme cada caso.
</p>
```

---

## SEÇÃO 6 — FAQ POR ESPECIALIDADE

### Perguntas Frequentes — Exemplos

**Universais (todas as especialidades):**
- "Como agendar uma consulta com [Dr./Dra. Nome]?"
- "Quais convênios são aceitos?"
- "Quanto tempo dura a consulta?"
- "Como me preparo para a primeira consulta?"
- "O consultório tem estacionamento?"

**Especialidade-específicas:**

| Especialidade | Pergunta-chave |
|--------------|---------------|
| Cardiologia | "Quais são os sinais de alerta que devo observar?" |
| Dermatologia | "Com que frequência devo fazer um check-up dermatológico?" |
| Ortopedia | "Cirurgia é sempre necessária para [condição]?" |
| Endocrinologia | "Preciso de jejum para a consulta de tireoide?" |
| Ginecologia | "Com que frequência devo fazer o Papanicolau?" |
| Psiquiatria | "A consulta é sigilosa? Minha família vai saber?" |
| Pediatria | "A partir de que idade o pediatra acompanha meu filho?" |
| Oncologia | "Quanto tempo leva para receber os resultados dos exames?" |

---

## SEÇÃO 7 — CTA E FORMULÁRIO

### CTAs por Temperatura do Lead

| Temperatura | CTA | Tom |
|-------------|-----|-----|
| Frio (primeiro acesso) | "Saiba mais sobre os serviços" | Informativo |
| Morno (considerando) | "Agendar uma consulta" | Ativo |
| Quente (pronto para agir) | "Falar com a equipe agora" | Urgente suave |

### Microcopy de Formulário

```
Campo nome: "Seu nome completo"
Campo e-mail: "Seu melhor e-mail"
Campo telefone: "WhatsApp com DDD"
Campo assunto: "Como posso ajudá-lo?"
Campo mensagem: "Descreva brevemente o que você precisa"
Botão enviar: "Enviar mensagem" | "Quero agendar" | "Falar com a equipe"

Texto LGPD (obrigatório):
"Ao enviar, você concorda com nossa Política de Privacidade e autoriza o contato
por telefone/WhatsApp para agendamento."

Sucesso:
"Mensagem enviada! Em breve nossa equipe entrará em contato pelo WhatsApp informado."
```

---

## CHECKLIST DE REVISÃO COPY

Antes de entregar ao `cfm-compliance-sentinel`:

- [ ] Nenhuma promessa de resultado clínico
- [ ] CRM visível em 3 locais
- [ ] Depoimentos sem resultado clínico + disclaimer presente
- [ ] Sem superlativo absoluto ("melhor", "único", "nº 1")
- [ ] Especialidade verificada no portal CFM
- [ ] Linguagem acessível (Flesch-Kincaid ≤ 10º grau)
- [ ] Tom adequado à especialidade (ver tabela Seção 3)
- [ ] Headlines focados em transformação, não em procedimento
- [ ] FAQs respondem objeções reais de pacientes
- [ ] Conteúdo informacional diferencia o médico sem denegrir concorrentes

---

*Template v2.0 — Medical Landing Squad | medical-copywriter*
*Validação: cfm-compliance-sentinel (Dr. Eduardo Leal)*
