# Design Quality Checklist — pedro-design Squad

Use este checklist antes de qualquer entrega. Todos os itens obrigatórios devem ser ✅.

---

## ✅ Visual Quality (Obrigatório)

- [ ] Hierarquia visual clara — elemento mais importante se destaca em <3s
- [ ] Paleta de cores segue o sistema definido (sem valores arbitrários)
- [ ] Tipografia segue a escala do sistema
- [ ] Espaçamentos são múltiplos de 4 ou 8px
- [ ] White space adequado — nada sufocado
- [ ] Grid aplicado em toda a interface
- [ ] Máximo 2 typefaces por projeto
- [ ] Ícones consistentes (mesmo estilo, mesmo peso)
- [ ] Sombras seguem o sistema (não são arbitrárias)
- [ ] Border radius segue o sistema

---

## ✅ Accessibility (Obrigatório — WCAG 2.1 AA)

- [ ] Contraste de texto ≥ 4.5:1 (14px regular)
- [ ] Contraste de texto ≥ 3:1 (18px+ ou 14px bold)
- [ ] Cor não é o único meio de comunicar informação
- [ ] Focus ring visível em todos os elementos interativos
- [ ] Navegação por teclado funcional
- [ ] alt text em todas as imagens significativas
- [ ] aria-label em ícones sem texto
- [ ] Labels em todos os form inputs
- [ ] Touch targets ≥ 44 × 44px
- [ ] Heading hierarchy correta (h1 > h2 > h3)

---

## ✅ States & Interactions (Obrigatório)

- [ ] Estado default
- [ ] Estado hover
- [ ] Estado active/pressed
- [ ] Estado focus (com focus ring)
- [ ] Estado disabled
- [ ] Estado loading
- [ ] Estado de erro
- [ ] Estado de sucesso
- [ ] Empty state (zero content)
- [ ] Estado com conteúdo máximo

---

## ✅ Responsiveness (Obrigatório)

- [ ] Testado em 375px (mobile)
- [ ] Testado em 768px (tablet)
- [ ] Testado em 1280px (desktop)
- [ ] Imagens responsivas com srcset ou next/image
- [ ] Tipografia legível em mobile
- [ ] Navegação funcional em mobile

---

## ✅ Performance (Obrigatório para digital)

- [ ] Imagens em formato WebP ou AVIF
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Animações usam apenas transform e opacity
- [ ] prefers-reduced-motion implementado
- [ ] Fonts carregadas com next/font ou font-display: swap

---

## ✅ Copywriting (Obrigatório)

- [ ] Sem Lorem ipsum em entregáveis finais
- [ ] CTAs usam voz ativa e verbo de ação
- [ ] Mensagens de erro são específicas e acionáveis
- [ ] Empty states têm instrução clara
- [ ] Hierarquia de copy clara (headline > subtítulo > body)
- [ ] Nenhum jargão técnico exposto ao usuário final

---

## ⭐ Tier S Checklist (Para excelência máxima)

- [ ] Design funciona perfeitamente em dark e light mode
- [ ] Design funciona em escala 1x e Retina (2x)
- [ ] Animações de entrada e saída implementadas
- [ ] Micro-interactions nos elementos críticos
- [ ] Loading states são skeleton screens (não apenas spinner)
- [ ] Erro 404 e 500 têm design customizado
- [ ] Print stylesheet definido (se aplicável)
- [ ] Favicons em todos os tamanhos necessários
- [ ] OG images definidas
- [ ] Storybook stories para todos os componentes
