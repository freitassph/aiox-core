---
checklist: "Motion Performance Checklist"
responsavel: "@pdg-motion-designer"
responsable_type: agent
atomic_layer: checklist
applies_to:
  - motion-design-review
  - animation-performance-audit
  - video-export-validation
---

# Motion Performance Checklist

Checklist de validacao para performance de motion design. Zero mediocridade tolerada.

## Section 1: Timing
- [ ] Duracao das animacoes segue principios de material motion (200-500ms para transicoes UI)
- [ ] Curvas de easing sao apropriadas ao tipo de movimento (ease-out para entrada, ease-in para saida)
- [ ] Stagger/delay entre elementos em sequencia e consistente
- [ ] Animacoes de microinteracao sao rapidas (100-200ms)
- [ ] Transicoes de pagina respeitam tempo maximo de 500ms
- [ ] Loading animations e spinners sao suaves e nao causam ansiedade
- [ ] Animacoes de feedback (sucesso, erro) sao distintas em timing
- [ ] Loop animations possuem duracao e pausa adequadas
- [ ] Hierarquia de timing respeita importancia dos elementos
- [ ] Timing de animacoes em sequencia cria ritmo coerente

## Section 2: Performance (60fps)
- [ ] Animacoes rodam a 60fps consistentemente em dispositivos alvo
- [ ] Apenas propriedades composited (transform, opacity) sao animadas via CSS
- [ ] will-change e aplicado estrategicamente em elementos animados
- [ ] Nao ha layout thrashing durante animacoes
- [ ] Nao ha recalculate style for reflow durante transicoes
- [ ] Rasterizacao de elementos animados e eficiente
- [ ] Uso de GPU acceleration (translate3d) e verificado
- [ ] Memoria nao vaza por acumulacao de listeners de animacao
- [ ] Animacoes com muitas particulas sao otimizadas ou substituidas por video
- [ ] Profiling de performance (Chrome DevTools Performance) foi realizado
- [ ] Frame drops sao inferiores a 1% em testes
- [ ] Budget de tamanho de arquivo de animacao e respeitado

## Section 3: Accessibility (Reduced Motion)
- [ ] prefers-reduced-motion media query e respeitada
- [ ] Usuarios com reduced motion recebem transicoes simplificadas ou estaticas
- [ ] Animacoes automaticas podem ser pausadas pelo usuario
- [ ] Nao ha conteudo piscante acima de 3Hz (conformidade WCAG 2.3.1)
- [ ] Parallax e desabilitado em modo reduced motion
- [ ] Animacoes de scroll sao desabilitadas em modo reduced motion
- [ ] Video com motion intenso possui versao alternativa estatica
- [ ] Transicoes essenciais para compreensao sao mantidas em reduced motion
- [ ] Documentacao indica quais animacoes sao afetadas por reduced motion
- [ ] Teste com reduced motion ativado foi realizado em todas as telas

## Section 4: Brand Consistency
- [ ] Velocidade e energia das animacoes refletem personalidade da marca
- [ ] Estilo de easing e consistente com a voz da marca (playful vs. serio)
- [ ] Transicoes entre telas seguem padrao visual da marca
- [ ] Microinteracoes reforcam identidade da marca
- [ ] Logo animations seguem guidelines de motion da marca
- [ ] Paleta de cores em animacoes e consistente com brand guidelines
- [ ] Sound design (se aplicavel) segue identidade sonora da marca
- [ ] Nao ha estilos de animacao conflitantes entre diferentes partes do produto
- [ ] Documentacao de motion da marca foi consultada e seguida
- [ ] Animacoes de loading e skeleton screens seguem padrao da marca

## Section 5: Narrative
- [ ] Sequencia de animacao conta uma historia logica e coerente
- [ ] Entrada e saida de elementos possuem causa e efeito claros
- [ ] Transicoes explicam relacoes espaciais entre telas/estados
- [ ] Hierarquia de animacao guia atencao do usuario corretamente
- [ ] Onboarding animations educam sem sobrecarregar
- [ ] Animacoes de celebracao sao proporcionais a conquista
- [ ] Motion design reforca modelo mental do usuario sobre o sistema
- [ ] Transicoes entre estados de dados sao compreensiveis
- [ ] Storyboard ou motion spec foi criado para animacoes complexas
- [ ] Revisao narrativa com stakeholders foi realizada

## Section 6: Platform Optimization
- [ ] Animacoes sao otimizadas para iOS (Core Animation considerations)
- [ ] Animacoes sao otimizadas para Android (Choreographer, RenderThread)
- [ ] Animacoes web utilizam requestAnimationFrame corretamente
- [ ] Lottie/Bodymovin animations sao validadas para cada plataforma
- [ ] Tamanho de arquivos de animacao e otimizado para mobile
- [ ] Fallback para navegadores sem suporte a CSS animations esta presente
- [ ] Animacoes SVG sao otimizadas (path simplification, minify)
- [ ] GIFs sao evitados (preferencia por Lottie, WebP animado, video)
- [ ] WebP animado e priorizado sobre GIF quando suportado
- [ ] Formato de video (se aplicavel) e otimizado para plataforma (H.264, VP9)
- [ ] Animacoes em React Native utilizam Animated API ou Reanimated corretamente
