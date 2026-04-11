---
checklist: "Cross-Platform Consistency Checklist"
responsavel: "@pdg-design-system"
responsable_type: agent
atomic_layer: checklist
applies_to:
  - cross-platform-design-review
  - multi-platform-ui-audit
  - responsive-design-validation
---

# Cross-Platform Consistency Checklist

Checklist de validacao para consistencia cross-plataforma. Zero mediocridade tolerada.

## Section 1: Visual Identity
- [ ] Logo e identico em todas as plataformas (web, iOS, Android, desktop)
- [ ] Espacamento ao redor do logo e consistente entre plataformas
- [ ] Ilustracoes sao as mesmas ou equivalentes em todas as plataformas
- [ ] Estilo fotografico e consistente entre plataformas
- [ ] Icones seguem o mesmo estilo visual (outline, filled, duotone)
- [ ] Empty states sao consistentes em mensagem e visual
- [ ] Error states sao visualmente equivalentes entre plataformas
- [ ] Loading states seguem mesmo padrao visual
- [ ] Splash screens e app icons seguem identidade visual da marca
- [ ] Onboarding visual e consistente entre plataformas
- [ ] Dark mode esta disponivel e visualmente equivalente em todas as plataformas
- [ ] Animacoes de transicao sao equivalentes entre plataformas

## Section 2: Typography
- [ ] Font family e a mesma ou equivalente entre plataformas
- [ ] Escala de tamanhos de fonte (type scale) e consistente
- [ ] Hierarquia tipografica (H1, H2, H3, body, caption) e mapeada corretamente
- [ ] Font weights disponiveis sao equivalentes entre plataformas
- [ ] Line height e consistente em relacao ao tamanho da fonte
- [ ] Letter spacing segue padrao consistente
- [ ] Fallback fonts sao especificadas para cada plataforma
- [ ] Texto em idiomas nao-latim (CJK, arabico) renderiza corretamente
- [ ] Truncamento de texto (ellipsis) ocorre nos mesmos pontos
- [ ] Tipografia responsiva se comporta de forma equivalente

## Section 3: Color
- [ ] Cores primarias sao identicas entre plataformas (mesmos valores hex/RGBA)
- [ ] Cores secundarias e de apoio sao consistentes
- [ ] Cores semanticas (sucesso, erro, aviso, info) sao equivalentes
- [ ] Cores de fundo (surface, background) sao consistentes
- [ ] Dark mode palette e equivalente entre plataformas
- [ ] Gradientes possuem mesma direcao e cores entre plataformas
- [ ] Opacidade e transparencia sao aplicadas consistentemente
- [ ] Contraste de cores atende WCAG AA em todas as plataformas
- [ ] Cores de estados interativos (hover, active, focus) sao consistentes
- [ ] Sistema de cores e mapeado corretamente entre CSS, Swift UI, Compose

## Section 4: Layout / Spacing
- [ ] Sistema de grid e consistente entre plataformas
- [ ] Espacamentos (margin, padding, gap) seguem mesma escala
- [ ] Breakpoints de responsividade sao equivalentes entre plataformas
- [ ] Margens de seguranca (safe area) sao respeitadas em mobile
- [ ] Altura minima de elementos interativos e consistente (44px/48px)
- [ ] Proporcoes de cards e containers sao equivalentes
- [ ] Navegacao inferior/superior segue mesmo padrao de posicionamento
- [ ] Layout de formularios e consistente entre plataformas
- [ ] Tabelas e listas seguem mesmo padrao de espacamento
- [ ] Overflows e scroll behavior sao equivalentes

## Section 5: Components
- [ ] Botoes possuem mesmo visual e comportamento entre plataformas
- [ ] Inputs de formulario sao equivalentes em estilo e validacao
- [ ] Cards seguem mesmo design e estrutura
- [ ] Modals/dialogs tem mesmo comportamento e aparencia
- [ ] Tabs e segmentos sao consistentes
- [ ] Dropdowns e selects funcionam de forma equivalente
- [ ] Tooltips e popovers sao consistentes
- [ ] Chips/tags seguem mesmo design
- [ ] Avatares e imagens de perfil sao equivalentes
- [ ] Notificacoes toasts/snackbars seguem mesmo padrao
- [ ] Navegacao por abas/bottom nav e consistente
- [ ] Componentes acessiveis tem mesmo nivel de acessibilidade

## Section 6: Tone
- [ ] Tom de voz de mensagens e consistente entre plataformas
- [ ] Mensagens de erro sao equivalentes em conteudo e tom
- [ ] Mensagens de sucesso seguem mesmo padrao
- [ ] Microcopy (placeholders, labels, hints) e consistente
- [ ] Nomes de acoes (CTAs) sao equivalentes entre plataformas
- [ ] Mensagens de empty state sao consistentes
- [ ] Textos de onboarding sao equivalentes
- [ ] Copy de permissoes (push, location, camera) segue mesmo tom
- [ ] Textos de termos e politicas sao consistentes
- [ ] Nomenclatura de features e funcionalidades e uniforme

## Section 7: Iconography
- [ ] Set de icones e o mesmo entre todas as plataformas
- [ ] Tamanho de icones e consistente em contextos equivalentes
- [ ] Estilo de icones (outline, filled) e uniforme
- [ ] Icones semanticos representam a mesma acao em todas as plataformas
- [ ] Icones de navegacao sao consistentes
- [ ] Icones de status (check, warning, error) sao equivalentes
- [ ] Icones customizados seguem mesmo grid e estilo
- [ ] Icones de redes sociais sao consistentes
- [ ] Fallbacks de icones nao suportados sao tratados
- [ ] Icones SVG/PNG sao otimizados para cada plataforma
- [ ] Icones com texto possuem espacamento consistente
- [ ] Icones interativos possuem mesmo estado hover/active entre plataformas
