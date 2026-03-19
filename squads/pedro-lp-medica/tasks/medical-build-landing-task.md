# Task: Medical Landing Page Build — S+++ Tier Implementation

## Objetivo
Implementar a landing page médica completa, seguindo o design system Clinical Luxury, arquitetura Atomic Design, em conformidade CFM/CONAR/LGPD, com performance Core Web Vitals verde e conversão > 4%.

## Agentes Envolvidos
- **`medical-ui-artisan`** (Felipe Torres) — implementação principal
- **`medical-atomic-design-architect`** (Bruno Nakamura) — specs de componentes
- **`medical-design-system`** (Valentina Cruz) — aprovação de design
- **`cfm-compliance-sentinel`** (Dr. Eduardo Leal) — clearance antes do deploy

## Inputs Necessários
- `medical-design-tokens-task` → concluída
- `medical-copy-framework-task` → concluída
- `medical-compliance-audit-task` → concluída (copy aprovada)
- `medical-briefing-task` → concluída (todos os dados do médico)
- Fotos profissionais do médico e clínica (entregues pelo cliente)

---

## Fase 1: Estrutura do Projeto Next.js

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, providers
│   ├── page.tsx            # Home landing page
│   ├── sobre/page.tsx      # Sobre o médico
│   ├── especialidades/
│   │   └── [slug]/page.tsx # Página por especialidade
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── agendar/page.tsx    # Página de agendamento
│   └── api/
│       ├── contact/route.ts  # Form submission
│       └── consent/route.ts  # LGPD consent log
├── components/
│   ├── atoms/              # Botões, inputs, badges, etc.
│   ├── molecules/          # DoctorCard, ServiceCard, etc.
│   ├── organisms/          # HeroSection, BookingSection, etc.
│   └── templates/          # SingleDoctor, MultiClinic, etc.
├── styles/
│   ├── tokens.css          # Design tokens (output medical-design-tokens-task)
│   └── globals.css         # Tailwind v4 + imports
├── lib/
│   ├── schema.ts           # Schema.org generators
│   ├── analytics.ts        # GA4 event helpers
│   └── consent.ts          # LGPD consent management
└── content/
    ├── doctor.ts           # Dados do médico (CRM, bio, etc.)
    ├── services.ts         # Serviços/procedimentos
    └── testimonials.ts     # Depoimentos aprovados
```

---

## Fase 2: Implementação — Seção por Seção

### 2.1 HERO SECTION (Prioridade máxima — LCP crítico)

```
ESTRUTURA:
├── Navigation sticky com CTA "Agendar Consulta"
├── Hero content:
│   ├── EYEBROW: "[Especialidade] | CRM-[UF] [Número]"
│   ├── H1 DISPLAY: Headline principal (Fraunces, fluid type)
│   ├── SUBTÍTULO: Proposta de valor (max 2 linhas)
│   ├── CTA PRIMÁRIO: "Agendar Consulta" (btn-primary lg)
│   ├── CTA SECUNDÁRIO: WhatsApp ou Ligar (btn-ghost)
│   └── TRUST BAR: ★★★★★ X avaliações | X anos | CRM verificado
└── Foto do médico (above the fold, priority=true, preload)

HERO VISUAL S+++ TIER:
- Background: gradiente sutil (pearl → branco) com textura SVG médica minimalista
- Foto: portrait 3:4, posicionada à direita, recortada com elegância
- Elemento decorativo: forma orgânica (blob SVG) em brand-primary/10 no canto
- Trust bar: separada por bullet points, fonte monospace para CRM
- Mobile: stacked (foto acima, texto abaixo) — não cortar a foto

CSS HERO:
.hero {
  background: linear-gradient(
    135deg,
    var(--color-pearl) 0%,
    white 40%,
    var(--brand-primary-light) 100%
  );
  /* SVG pattern médico (heartbeat/cross) com opacity 0.03 */
}

ANIMAÇÃO DE ENTRADA (500ms total):
1. Eyebrow: fade-in 0ms delay
2. H1: fade-up 100ms delay
3. Subtítulo: fade-up 200ms delay
4. CTAs: fade-up 300ms delay
5. Trust bar: fade-up 400ms delay
6. Foto: scale(0.97 → 1) + fade-in 0ms delay (simultâneo)
```

### 2.2 TRUST BAR / CREDENCIAIS

```
POSIÇÃO: logo abaixo do hero (ou dentro)

CONTEÚDO:
├── Stat: "X anos de experiência"
├── Stat: "X+ pacientes atendidos"
├── Stat: "★ X.X (X avaliações)"
├── Logo: [Associação médica] (ex: SBC, CFM)
├── Logo: [Certificação de equipamento]
└── Logo: [Planos aceitos principais]

VISUAL: fundo branco, border-top sutil, logos em grayscale 60% → color no hover
ANIMAÇÃO: counters animam de 0→N quando entram em viewport (IntersectionObserver)
```

### 2.3 SEÇÃO SOBRE O MÉDICO

```
LAYOUT: 2 colunas (foto | conteúdo) → 1 coluna mobile

CONTEÚDO (ordem de trust impact):
├── Foto profissional (portrait grande, radius-2xl, shadow-xl)
├── Nome + Especialidade (Fraunces display)
├── CRM/RQE badge (monospace, obrigatório CFM)
├── Bio humanizada (3-4 parágrafos, sem jargão)
├── Timeline de formação:
│   ├── Faculdade de Medicina
│   ├── Residência
│   ├── Fellowship (se houver)
│   └── Especializações relevantes
├── Publicações científicas (se houver)
├── Afiliações: logos das sociedades médicas
└── CTA: "Agendar com Dr. [Nome]"

VISUAL S+++ TIER:
- Quote da filosofia do médico em DM Serif Display italic
- Border-left teal-600 na quote
- Badges de formação como timeline vertical elegante
- Números de destaque (anos, pacientes) em Fraunces display grande
```

### 2.4 SERVIÇOS / ESPECIALIDADES

```
GRID: 3 colunas desktop → 2 tablet → 1 mobile

CARD STRUCTURE (ServiceCardIcon S+++):
├── Ícone médico SVG stroke (24px, teal-600)
├── Nome do serviço (heading-sm, peso 600)
├── Descrição em linguagem leiga (2-3 linhas, body-sm)
├── Indicador de duração (ex: "Consulta: 50 min")
└── "Saiba mais" (link ghost com chevron)

FILTRO DE ESPECIALIDADE (se multi-especialidade):
- Tabs/chips horizontais para filtrar por categoria
- Transição suave (200ms) entre estados de filtro

VISUAL S+++ TIER:
- Cards com hover: translateY(-6px) + shadow-card-hover
- Ícone tem fundo brand-primary-light (10% opacity) + radius-xl
- Seção com fundo neutral-050 para contrastar com hero branco
- Título da seção: eyebrow "O que tratamos" + H2 display
```

### 2.5 DEPOIMENTOS (Ético-CFM)

```
DISCLAIMER OBRIGATÓRIO (visível):
"Os depoimentos a seguir são sobre qualidade do atendimento.
 Resultados clínicos individuais podem variar."

CARD DEPOIMENTO:
├── Aspas decorativas (svg, brand-primary/20)
├── Texto do depoimento (Quote font, italic)
├── Separador fino
├── Nome do paciente + condição tratada (genérica: "Paciente de cardiologia")
├── Data (mês/ano)
└── Rating stars (se aplicável, fonte verificada: Google/Doctoralia)

LAYOUT: Carrossel com 1 item visível mobile, 2-3 desktop
AUTOPLAY: NÃO (acessibilidade — nunca autoplay sem pause)
FUNDO: Surface dark com texto claro (impacto visual máximo)
```

### 2.6 FORMULÁRIO DE AGENDAMENTO (Conversão)

```
TÍTULO: "Agendar Consulta" — não "Entre em contato" (mais específico = mais conversão)

CAMPOS (mínimo necessário — não sobrecarregar):
├── Nome completo (required)
├── Telefone com máscara BR (required)
├── Email (optional — mas muito útil para confirmação)
├── Plano de saúde (select: lista de convênios + Particular)
├── Motivo da consulta (textarea, 3 linhas — DADO SENSÍVEL: aviso LGPD)
├── Data preferencial (date picker)
└── Como nos conheceu (select: Google / Indicação / Instagram / Outro)

CONSENTIMENTO LGPD (obrigatório):
□ [checkbox] "Concordo com o tratamento dos meus dados conforme a
   Política de Privacidade para fins de agendamento."
   ↳ "Política de Privacidade" é link para modal/página

CTA SUBMIT:
- Botão: "Solicitar Agendamento" (não "Enviar" — mais específico)
- Loading state: texto "Enviando..." + spinner
- Success state: ✓ animado + mensagem de confirmação com próximos passos
- Error state: mensagem clara + como tentar novamente

LAYOUT: Form + sidebar de contato rápido (telefone, WhatsApp, horários)
VISUAL: Card branco com shadow-xl, radius-2xl, padding generoso
```

### 2.7 PERGUNTAS FREQUENTES

```
ESTRUTURA: Accordion elegante (1 aberto por vez, ou todos fechados)

SELEÇÃO DE PERGUNTAS (por intenção de busca):
Transacional: "Vocês aceitam [plano]?" / "Como funciona o agendamento?"
Informacional: "O que é [condição principal]?" / "Quando devo procurar [especialidade]?"
Objeção: "A consulta é cara?" / "Quanto tempo leva o resultado?"

VISUAL S+++ TIER:
- Chevron animado (rotate 180°) ao abrir/fechar
- Separador sutil entre items
- Padding interno generoso (espaço para respirar)
- Schema.org FAQPage markup embutido
```

### 2.8 LOCALIZAÇÃO & CONTATO

```
MAPA: Google Maps embed (lazy load — consentimento funcional)
      Fallback: imagem estática de mapa até consentimento

INFORMAÇÕES:
├── Endereço completo + botão "Como chegar"
├── Telefone(s) com horário de atendimento
├── WhatsApp Business (se disponível)
├── Email (se público)
├── Horário de funcionamento (todos os dias da semana)
└── Transporte público próximo (accessibility)

VISUAL: 2 colunas (mapa | informações) → 1 coluna mobile
```

### 2.9 FOOTER COMPLETO

```
SEÇÕES:
├── Logo + tagline curta + CRM/RQE do responsável
├── Links de navegação (especialidades, sobre, blog, agendamento)
├── Contato rápido (tel + whatsapp + email)
├── Convênios aceitos (logos pequenos)
├── Links legais: Política de Privacidade | Política de Cookies | Termos
└── Copyright + "Gerenciar Cookies" link

CFM COMPLIANCE no footer:
"Dr. [Nome Completo] | CRM-[UF] [Número] | RQE [Número] | [Especialidade]"
"Todos os direitos reservados. Proibida a reprodução sem autorização."
```

---

## Fase 3: Schema.org & Meta

```typescript
// app/layout.tsx — metadata
export const metadata: Metadata = {
  title: { default: '[Especialidade] em [Cidade] | Dr. [Nome] CRM-[UF]', template: '%s | Dr. [Nome]' },
  description: '[Especialidade] com [X] anos de experiência em [Cidade]. CRM [UF] [Número]. Agende sua consulta.',
  keywords: ['[especialidade]', '[cidade]', 'médico', 'consulta', '[condição principal]'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://[dominio].com.br',
    siteName: 'Dr. [Nome] | [Especialidade]',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  verification: { google: '[GSC_VERIFICATION_CODE]' },
};

// Schema.org — página principal
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'Physician'],
  // ... (ver medical-seo-specialist para schema completo)
};
```

---

## Critérios de Aceite (Definition of Done)

```
DESIGN S+++ TIER:
□ Cada seção aprovada por medical-design-system (Valentina)
□ Atomic components seguem specs do medical-atomic-design-architect (Bruno)
□ Nenhum hardcode de cor/spacing (apenas tokens)
□ Animações: todas respeitam prefers-reduced-motion
□ Hover states em todos os elementos interativos
□ Foco visível em todos os controles (keyboard nav testado)

PERFORMANCE:
□ Lighthouse Mobile Performance ≥ 90
□ LCP < 2.5s (mobile 4G simulado)
□ CLS = 0
□ INP < 200ms
□ Imagens: AVIF/WebP, lazy (exceto hero = priority)
□ Fontes: preload + display=swap + size-adjust

COMPLIANCE:
□ Compliance Clearance emitida por cfm-compliance-sentinel (Dr. Eduardo)
□ LGPD: consent em todos os formulários
□ CRM/RQE visível em mínimo 3 locais (header/hero, sobre, footer)
□ Disclaimer em depoimentos

SEO:
□ Schema.org válido (zero erros no Rich Results Test)
□ Meta title/description únicas por página
□ H1 único por página
□ Imagens com alt descriptivo
□ robots.txt e sitemap.xml

ACESSIBILIDADE:
□ axe-core: zero erros críticos
□ Contraste ≥ 4.5:1 em todos os textos
□ Skip link funcionando
□ ARIA labels em todos os ícones
□ Formulário 100% navegável por teclado
```

## Outputs
- **Site publicado** em Vercel com domínio configurado
- **Lighthouse Report** → todas as páginas principais
- **Accessibility Report** → axe-core + teste manual
- **Schema.org Validation** → print do Rich Results Test
- **Compliance Clearance** → assinado pelo cfm-compliance-sentinel
