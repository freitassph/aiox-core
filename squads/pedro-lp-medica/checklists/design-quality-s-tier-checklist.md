# Design Quality S+++ Tier Checklist
**Agente:** medical-design-system (Valentina Cruz) + medical-atomic-design-architect (Bruno Nakamura)
**Quando usar:** Antes de qualquer entrega de componente, seção ou página
**Critério de aprovação:** 100% dos itens CRÍTICOS + ≥ 90% dos itens MAJOR

---

## 🔴 CRÍTICOS — Bloqueiam entrega

### Design Tokens
- [ ] Nenhuma cor hardcodada (hex/rgb/hsl) fora de `tokens.css`
- [ ] Nenhum valor de espaçamento hardcodado (px fora de tokens)
- [ ] Fonte não especificada diretamente (usar variável token)
- [ ] Todos os tokens usados existem em `tokens.css`

### Tipografia
- [ ] H1 usando `--type-display-*` com Fraunces
- [ ] Body text ≥ 16px (accessibility para idosos)
- [ ] Contraste texto/fundo ≥ 4.5:1 (verificar com Contrast Checker)
- [ ] Contraste de texto grande ≥ 3:1 (headings > 24px)
- [ ] Linha máxima de texto: ≤ 75ch (legibilidade)
- [ ] Altura de linha body: ≥ 1.5 (legibilidade)

### Interatividade
- [ ] Todo elemento clicável tem estado `:hover` visível
- [ ] Todo elemento focável tem `:focus-visible` com shadow-focus token
- [ ] Botões têm estado `:active` (scale 0.97 ou equivalente)
- [ ] Elementos desabilitados têm opacity e cursor: not-allowed
- [ ] `prefers-reduced-motion`: zero animações decorativas sem media query

### Acessibilidade Visual
- [ ] Ícones sem texto: `aria-label` presente
- [ ] Imagens de conteúdo: `alt` descritivo presente
- [ ] Imagens decorativas: `alt=""` presente
- [ ] Skip link "Pular para conteúdo" como 1º elemento focável

### Responsividade
- [ ] Layout não quebra em 320px (iPhone SE menor)
- [ ] Nenhum scroll horizontal em qualquer viewport
- [ ] Touch targets ≥ 44×44px (mobile) ou ≥ 48×48px (ideal)
- [ ] Texto legível sem zoom em 320px

---

## 🟠 MAJOR — Devem ser corrigidos antes de review final

### Visual Refinement S+++
- [ ] Whitespace generoso entre seções (≥ clamp(4rem, 8vw, 8rem))
- [ ] Cards têm espaçamento interno consistente (padding: var(--space-6) ou --space-8)
- [ ] Alinhamento baseline consistente em grids de cards
- [ ] Sombras aplicadas com intenção hierárquica (não aleatórias)
- [ ] Border-radius consistente por tipo de elemento (cards: --radius-xl, botões: --radius-full)
- [ ] Grid de seções visualmente equilibrado (sem "buracos" óbvios)

### Tipografia Avançada
- [ ] Eyebrow text presente em seções (tracking widest + uppercase + peso 600)
- [ ] Tamanho de display aumenta em viewports maiores (fluid type aplicado)
- [ ] Destaques numéricos (anos, pacientes) usam Fraunces com opsz ≥ 48
- [ ] Quote de depoimento usa DM Serif Display italic
- [ ] CRM badge usa JetBrains Mono (monospace trust signal)

### Hierarquia Visual
- [ ] Cada seção tem hierarquia clara: eyebrow → heading → corpo → CTA
- [ ] Não mais que 3 pesos de fonte por página
- [ ] Não mais que 2 tamanhos de body text por página
- [ ] CTAs primários bem destacados (não competem entre si)

### Imagens & Mídia
- [ ] Foto do médico: qualidade mínima 1200px, formato WebP
- [ ] Aspect ratios reservados (sem CLS)
- [ ] Blur placeholder para imagens lazy
- [ ] Background textures/SVGs com opacity < 0.05 (não sobrecarregar)

### Animações
- [ ] Entrada de hero: sequência orquestrada (delay incremental por elemento)
- [ ] Scroll animations: only once (não repetir ao scrollar para cima)
- [ ] Hover duration: 150-300ms (não lento demais)
- [ ] Skeleton loading presente em conteúdo dinâmico

---

## 🟡 MINOR — Polimento final (S+++ exige 100% destes também)

### Micro-detalhes
- [ ] WhatsApp CTA tem pulse animation de atenção (sutil)
- [ ] Número de telefone formatado com espaços: (11) 99999-9999
- [ ] Links externos têm ícone de "external link" (pequeno, stroke)
- [ ] Separadores de seção elegantes (não apenas espaço em branco)
- [ ] Hover em logos de parceiros/convênios: grayscale → colorido
- [ ] Star ratings: SVG customizado (não emoji)
- [ ] Formulário: campos têm label acima (nunca só placeholder)
- [ ] Loading buttons: spinner animado coerente com brand
- [ ] Success state: checkmark SVG com stroke-dashoffset animation

### Dark Section (hero/impact)
- [ ] Contraste revisado especificamente para fundo escuro
- [ ] Botões ghost em dark section: borda branca, não teal
- [ ] Textos em dark section: neutros claros, não branco puro

### Especificidades Médicas
- [ ] CRM visível em no mínimo: hero, sobre, footer
- [ ] Trust signals visíveis acima do fold no desktop
- [ ] WhatsApp CTA visível em 320px sem scroll
- [ ] Formulário de agendamento tem no máximo 6 campos obrigatórios

---

## Aprovação Final

```
Verificado por: ________________________________ (Valentina Cruz — medical-design-system)
Data: ____________

Verificado por: ________________________________ (Bruno Nakamura — medical-atomic-design-architect)
Data: ____________

Score Críticos:  ___/XX (exige 100%)
Score Major:     ___/XX (exige ≥ 90%)
Score Minor:     ___/XX (exige ≥ 80%)

STATUS: □ APROVADO S+++ TIER  □ REVISÃO NECESSÁRIA
```
