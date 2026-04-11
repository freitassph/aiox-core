# Design Quality — Prestige S+++ Tier Checklist

## Instruções
Cada item deve ser PASS antes de avançar para implementação ou lançamento.
FAIL em qualquer item CRITICAL = blocker automático.

---

## 1. Brand Archetype Consistency (CRITICAL)
```
□ Brand Archetype foi formalmente declarado e documentado?
□ Paleta de cores vem do archetype correto (não improvisada)?
□ Tipografia do archetype está sendo usada (não fonte padrão do sistema)?
□ Motion profile é coerente com o archetype?
□ Border radius reflete o archetype?
□ Tonalidade das sombras está alinhada com o archetype?
```

## 2. Design Tokens (CRITICAL)
```
□ ZERO valores hardcoded — 100% via CSS custom properties?
□ Todos os tokens semânticos estão sendo usados (não primitivos diretamente)?
□ Contraste texto/fundo >= 4.5:1 em TODOS os pares (WCAG AA)?
□ Contraste em texto grande (>= 18px bold): >= 3:1?
□ Focus ring visível em todos os elementos interativos?
```

## 3. Tipografia
```
□ Hierarquia clara: H1 > H2 > H3 > body (nunca invertida)?
□ H1 único por página?
□ Escala fluid (clamp) aplicada em displays e headings?
□ Line-height adequado (nunca < 1.4 em body text)?
□ Letter-spacing correto por nível?
□ Legibilidade em mobile (body nunca < 16px)?
```

## 4. Espaçamento & Layout
```
□ Grid 8px base sendo respeitado (nenhum valor aleatório)?
□ Section padding Y usando token --section-pad-y (fluid)?
□ Container max-width com padding inline?
□ White space generoso — nunca "apertado" ou "lotado"?
□ Hierarquia de proximidade: elementos relacionados próximos?
```

## 5. Componentes
```
□ Buttons: estados default/hover/active/focus/disabled presentes?
□ CTA principal: visível above the fold em mobile e desktop?
□ Formulários: labels visíveis (não apenas placeholder)?
□ Cards: hover state presente com motion coerente com archetype?
□ Imagens: aspect ratio correto, nunca distorcidas?
□ Icons: SEMPRE outline/stroke, nunca filled?
```

## 6. Mobile First (CRITICAL)
```
□ Layout correto em 375px (iPhone SE)?
□ CTA acessível com polegar (not-too-high, not-too-small)?
□ Touch targets: mínimo 44×44px?
□ Texto nunca cortado em mobile?
□ Imagens não estouradas em mobile?
□ Navegação mobile: menu hamburger funcional?
```

## 7. Motion & Interação
```
□ prefers-reduced-motion respeitado?
□ Animações usam APENAS transform e opacity (GPU-accelerated)?
□ Nenhuma animação em width/height/top/left (causa reflow)?
□ Stagger não excede 150ms por item?
□ Motion perfil coerente com archetype (rápido BOLD, lento LUXURY)?
□ Hover states em todos os elementos clicáveis?
```

## 8. Impressão Visual Geral (S+++ Standard)
```
□ "Uau!" — a primeira impressão causa admiração?
□ Hierarquia visual imediatamente clara (o olho sabe para onde ir)?
□ Consistência total — nenhum elemento "parece de outro site"?
□ Qualidade de Apple/Ferrari/Porsche na percepção visual?
□ Design seria aprovado por um CDO de empresa $1B+?
□ Seria publicado em awwwards.com ou siteinspire.com?
```
