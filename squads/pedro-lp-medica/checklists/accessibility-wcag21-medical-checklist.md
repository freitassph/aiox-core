# Checklist WCAG 2.1 AA — Healthcare Accessibility
**Agente:** medical-qa-auditor (Renata Fonseca)
**Referência:** WCAG 2.1 Level AA + Healthcare UX specifics
**Ferramentas:** axe-core, WAVE, VoiceOver (macOS), TalkBack (Android), screen reader manual

---

## 🔴 CRÍTICOS (WCAG Nível A + AA)

### Contraste de Cor
- [ ] Texto normal (< 18px/14px bold): contraste ≥ 4.5:1
- [ ] Texto grande (≥ 18px ou 14px bold): contraste ≥ 3:1
- [ ] Componentes de UI (inputs, botões, ícones): contraste ≥ 3:1
- [ ] Foco visível: anel de foco com contraste ≥ 3:1 vs fundo

### Navegação por Teclado
- [ ] Todos os elementos interativos atingíveis por Tab
- [ ] Ordem de Tab lógica (segue fluxo visual)
- [ ] Skip link "Pular para o conteúdo principal" como 1º elemento focável
- [ ] Foco nunca prende (não-modal contexts)
- [ ] Modais: foco retorna ao elemento disparador ao fechar
- [ ] Dropdowns: fecham com Esc
- [ ] Carrossel/slider: controles de prev/next navegáveis por teclado

### Semântica & ARIA
- [ ] H1 único por página
- [ ] Hierarquia de headings sem pulos (H1→H2→H3, nunca H1→H3)
- [ ] `<main>`, `<header>`, `<nav>`, `<footer>` presentes e únicos
- [ ] `<nav aria-label="Principal">` e `<nav aria-label="Footer">` distintos
- [ ] Ícones decorativos: `aria-hidden="true"`
- [ ] Ícones funcionais sem texto: `aria-label` descritivo
- [ ] Botões com texto descritivo (não "Clique aqui" ou "Saiba mais")
- [ ] Links distinguíveis sem depender apenas de cor

### Formulários
- [ ] Todos os campos têm `<label>` associado (nunca só placeholder)
- [ ] Campos obrigatórios identificados com asterisco + texto "obrigatório"
- [ ] Mensagens de erro: descritivas e próximas ao campo com problema
- [ ] `autocomplete` correto: nome, email, tel, etc.
- [ ] Formulário 100% operável por teclado (incluindo date picker)

### Imagens
- [ ] Imagens de conteúdo: `alt` descritivo e específico
- [ ] Imagens decorativas: `alt=""`
- [ ] Fotos do médico: alt="[Nome] — [Especialidade]"
- [ ] Logos de parceiros: alt="Logo [Nome]"
- [ ] SVG ícones inline: `role="img" aria-label="..."` ou `aria-hidden="true"`

---

## 🟠 OBRIGATÓRIOS WCAG AA

### Redimensionamento
- [ ] Zoom 200%: sem perda de conteúdo ou funcionalidade
- [ ] Zoom 200%: sem scroll horizontal em 320px de referência
- [ ] Texto redimensionável sem dependência de px fixo em containers

### Conteúdo em Movimento
- [ ] Animações auto-play: mecanismo de pause/stop (WCAG 2.2.2)
- [ ] `prefers-reduced-motion`: sem animações decorativas
- [ ] Carrossel: sem auto-play (ou com controle de pause visível)

### Identificação
- [ ] Idioma da página: `<html lang="pt-BR">`
- [ ] Mudança de idioma inline: `lang="en"` em palavras estrangeiras

### Erros & Sugestões
- [ ] Formulários: antes de submeter, usuário pode revisar dados críticos
- [ ] Erro de validação: descreve o problema + sugere correção
- [ ] Timeout: usuário avisado antes de sessão expirar (se aplicável)

---

## 🟡 ESPECÍFICOS PARA HEALTHCARE (WCAG + melhores práticas)

### Idosos (público frequente em sites médicos)
- [ ] Corpo de texto mínimo: 16px (não 14px)
- [ ] CTAs principais: mínimo 48×48px touch target
- [ ] Botões: padding generoso, não apenas ícone (texto junto)
- [ ] Formulários: campos grandes (48px de altura mínima)
- [ ] Contraste extra para informações críticas (CRM, endereço): ≥ 7:1 preferível

### Informações Médicas Críticas
- [ ] Números de telefone e WhatsApp: legíveis sem zoom
- [ ] CRM/RQE: legível, não apenas em rodapé obscuro
- [ ] Endereço: estrutura clara, não uma linha só de texto
- [ ] Horários: formato 24h ou AM/PM consistente

### Documentos & PDFs (se houver)
- [ ] Links para PDF indicam formato: "Download informativo [PDF]"
- [ ] PDFs críticos têm alternativa em HTML quando possível

---

## Ferramentas de Verificação

```
AUTOMATIZADAS:
□ axe-core (Playwright):  pnpm test:a11y
□ WAVE extension:         inspecionar página carregada
□ Lighthouse:             accessibility score ≥ 95

MANUAIS:
□ VoiceOver (macOS):      Command+F5 → navegar pelo site
□ TalkBack (Android):     Volume down + right nav
□ Teclado puro:           desligar mouse, navegar completamente
□ Zoom 200%:              browser zoom, verificar layout

CONTRASTE:
□ Colour Contrast Analyser (App gratuito)
□ Chrome DevTools → CSS Overview → Colors
```

---

## Resultado

```
Auditado por: _______________________________ (Renata Fonseca)
Data: _____________________
Browser/OS testado: _________________________

axe-core Violations: ___/0 críticos (aceito: 0)
Lighthouse Accessibility: _____/100 (mínimo: 95)
Keyboard nav: □ PASS  □ FAIL
Screen reader: □ PASS  □ FAIL
Zoom 200%: □ PASS  □ FAIL

STATUS: □ WCAG 2.1 AA APPROVED  □ REVISÃO NECESSÁRIA
```
