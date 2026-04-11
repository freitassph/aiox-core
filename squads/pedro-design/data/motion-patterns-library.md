# Biblioteca de Padrões de Motion Design

> Documento de referência para o squad pedro-design. Contém princípios de animação, 20+ padrões de motion, curvas de easing com valores cubic-bezier, e guidelines por plataforma.

---

## 1. Princípios de Animação Aplicados a UI

### Os 12 Princípios da Disney Adaptados para UI

| # | Princípio Disney | Aplicação em UI | Exemplo Prático |
|---|---|---|---|
| 1 | **Squash & Stretch** | Elementos que "amassam" ao clicar | Botão que comprime no press |
| 2 | **Anticipation** | Preparação antes da ação principal | Ícone que "recua" antes de expandir |
| 3 | **Staging** | Destacar o elemento mais importante | Dimmer no fundo ao abrir modal |
| 4 | **Straight Ahead / Pose to Pose** | Keyframes definidos vs. animação procedural | Transições de página com estados definidos |
| 5 | **Follow Through** | Elementos que continuam se movendo | Menu que fecha com overshoot |
| 6 | **Slow In & Slow Out** | Easing — começar devagar, acelerar, desacelerar | Quase toda transição de UI |
| 7 | **Arc** | Movimento em arco natural | Floating action button expandindo |
| 8 | **Secondary Action** | Animação secundária reforçando a principal | Ripple effect ao clicar |
| 9 | **Timing** | Velocidade comunica peso/importância | Modal pesado = mais lento, toast = rápido |
| 10 | **Exaggeration** | Exagero sutil para clareza | Pull-to-refresh com stretch |
| 11 | **Solid Drawing** | Manter proporções e volume | Elemento não distorce estranhamente ao mover |
| 12 | **Appeal** | Animações agradáveis de assistir | Microinterações satisfatórias |

### Princípios Fundamentais de Motion em UI (Material Design)

| Princípio | Descrição | Regra Prática |
|---|---|---|
| **Informativo** | Animação comunica o que está acontecendo | O usuário nunca deve perguntar "o que acabou de acontecer?" |
| **Focado** | Uma animação por vez, hierarquia clara | Não animar tudo simultaneamente |
| **Expressivo** | Personalidade e delightful moments | Surpreender positivamente, sem distrair |

---

## 2. Guia de Timing — Durações Recomendadas

### Por Tipo de Movimento

| Tipo de Animação | Duração | Justificativa |
|---|---|---|
| **Microinteração** (hover, tap) | 100-200ms | Feedback instantâneo, sem atraso |
| **Transição de estado** (toggle, expand) | 200-300ms | Perceptível mas não lento |
| **Transição de página** | 300-500ms | Tempo para entender a mudança de contexto |
| **Modal/Drawer entrada** | 300-400ms | Elemento grande precisa de tempo para ser notado |
| **Modal/Drawer saída** | 200-250ms | Saída deve ser mais rápida que entrada |
| **Loading skeleton** | 800-1200ms (loop) | Loop suave e relaxante |
| **Entrada em lista (stagger)** | 50-100ms por item | Cascade visual sem demora total |
| **Parallax scroll** | Linked to scroll | Mesmo timing do scroll do usuário |
| **Toast/Notification** | 300ms in, 200ms out | Entrada notável, saída rápida |
| **Success checkmark** | 400-600ms | Tempo para registrar e celebrar |

### Regra de Percepção Humana

| Duração | Percepção do Usuário |
|---|---|
| **< 100ms** | Instantâneo, sem animação percebida |
| **100-300ms** | Rápido, fluido, responsivo |
| **300-500ms** | Perceptível, natural |
| **500-1000ms** | Notavelmente lento, precisa justificativa |
| **> 1000ms** | Frustrante sem feedback de progresso |
| **> 10000ms** | Usuário abandona a tarefa |

---

## 3. Curvas de Easing — Referência Completa

### O que é Easing?

Easing define a aceleração de uma animação — como a velocidade muda ao longo do tempo. É o fator mais importante para uma animação parecer natural.

### Curvas Essenciais com Valores Cubic-Bezier

#### Standard Easing (Mais Usadas)

| Nome | cubic-bezier | Uso | Sensação |
|---|---|---|---|
| **Ease Out (saída suave)** | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Entrada de elementos | Natural, desacelera no final |
| **Ease In (entrada suave)** | `cubic-bezier(0.4, 0.0, 1, 1)` | Saída de elementos | Acelera ao sair |
| **Standard (Material)** | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Transições padrão | Equilibrada, profissional |
| **Decelerate** | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elementos entrando | Suave, para gradualmente |
| **Accelerate** | `cubic-bezier(0.4, 0.0, 1, 1)` | Elementos saindo | Rápido no final |

#### Easing com Personalidade

| Nome | cubic-bezier | Uso | Sensação |
|---|---|---|---|
| **Bounce** | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Botões, elementos divertidos | Elástico, divertido |
| **Snappy** | `cubic-bezier(0.4, 0.0, 0.2, 1)` | UI moderna | Rápido e preciso |
| **Gentle** | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Apps de wellness/meditação | Suave, relaxante |
| **Sharp** | `cubic-bezier(0.4, 0.0, 0.6, 1)` | Apps de produtividade | Direto, eficiente |

#### Easing Avançadas

| Nome | cubic-bezier | Uso | Sensação |
|---|---|---|---|
| **Anticipation** | `cubic-bezier(0.3, 0, 0, 1)` | Preparação antes de ação | Recuo antes de avançar |
| **Overshoot** | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Elementos elásticos | Passa do ponto e volta |
| **Spring** | `cubic-bezier(0.175, 0.885, 0.32, 1.55)` | Interações táteis | Mola, rebote |
| **Gravity** | `cubic-bezier(0.5, 0, 0.75, 0)` | Elementos caindo | Peso, gravidade natural |

### Curvas da Apple (Human Interface Guidelines)

| Nome | Valor | Uso Apple |
|---|---|---|
| **Default** | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Animações padrão do iOS |
| **Spring** | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Animações com overshoot |
| **Bounce** | Animação keyframe multi-step | Alertas, notificações |
| **Ease In** | `cubic-bezier(0.42, 0, 1, 1)` | Elementos saindo |
| **Ease Out** | `cubic-bezier(0, 0, 0.58, 1)` | Elementos entrando |

### Comparação Visual de Curvas

```
Linear:        ──────────────── (constante, robótica)
Ease In:       ╱─────────────── (lento -> rápido)
Ease Out:      ───────────────╲ (rápido -> lento)
Ease In-Out:   ╱──────────────╲ (lento -> rápido -> lento)
Bounce:        ╱~~╲──────────── (oscila antes de estabilizar)
Anticipation:  ╲  ╱──────────── (recuo -> avanço)
Overshoot:     ─────╲╱──────── (passa do ponto -> volta)
```

---

## 4. 20+ Padrões de Motion Design

### 4.1 Fade In / Fade Out

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento aparece/desaparece através de opacidade |
| **Duração** | 200-300ms |
| **Easing** | Ease Out (entrada), Ease In (saída) |
| **Uso** | Tooltips, overlays, elementos secundários |

```css
.fade-in {
  animation: fadeIn 300ms cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### 4.2 Slide In / Slide Out

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento desliza de uma direção |
| **Duração** | 300-400ms |
| **Easing** | Standard (`0.4, 0.0, 0.2, 1`) |
| **Uso** | Drawer, bottom sheet, notificações |

```css
.slide-in-right {
  animation: slideInRight 350ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

### 4.3 Scale Up / Scale Down

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento cresce ou encolhe |
| **Duração** | 200-300ms |
| **Easing** | Bounce para divertido, Standard para profissional |
| **Uso** | Modal, FAB expand, dropdown, tooltips |

```css
.scale-up {
  animation: scaleUp 250ms cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}

@keyframes scaleUp {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 0; }
}
```

### 4.4 Stagger (Entrada em Cascata)

| Campo | Detalhe |
|---|---|
| **Descrição** | Múltiplos elementos entram sequencialmente |
| **Delay por item** | 50-100ms |
| **Duração por item** | 200-300ms |
| **Uso** | Listas, grids, cards, menu items |

```css
.list-item {
  animation: staggerIn 300ms cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
  animation-delay: calc(var(--index) * 75ms);
  opacity: 0;
}
```

### 4.5 Morph / Shape Shift

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento muda de forma fluidamente |
| **Duração** | 300-500ms |
| **Easing** | Standard ou Anticipation |
| **Uso** | FAB expandindo para sheet, ícone para X |

```css
/* FAB circle -> rectangle morph */
.fab-expand {
  transition: all 400ms cubic-bezier(0.4, 0.0, 0.2, 1);
  border-radius: 50%;
}
.fab-expand.expanded {
  border-radius: 16px;
  width: 100%;
}
```

### 4.6 Bounce

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento overshoot e volta |
| **Duração** | 400-600ms |
| **Easing** | Bounce `cubic-bezier(0.68, -0.55, 0.265, 1.55)` |
| **Uso** | Notificações, badges, elementos divertidos |

```css
.bounce-in {
  animation: bounceIn 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

@keyframes bounceIn {
  0% { transform: scale(0); }
  50% { transform: scale(1.15); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); }
}
```

### 4.7 Shake (Erro)

| Campo | Detalhe |
|---|---|
| **Descrição** | Balanço horizontal indicando erro |
| **Duração** | 400-500ms |
| **Uso** | Formulário inválido, senha incorreta |

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
  20%, 40%, 60%, 80% { transform: translateX(8px); }
}
```

### 4.8 Pulse

| Campo | Detalhe |
|---|---|
| **Descrição** | Escala sutil repetida chamando atenção |
| **Duração** | 1000-2000ms (loop) |
| **Uso** | Indicador de live, recording, atenção necessária |

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}
```

### 4.9 Skeleton Loading

| Campo | Detalhe |
|---|---|
| **Descrição** | Brilho deslizante simulando carregamento |
| **Duração** | 1000-1500ms (loop) |
| **Uso** | Placeholder de conteúdo carregando |

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1500ms infinite;
}
```

### 4.10 Pull to Refresh

| Campo | Detalhe |
|---|---|
| **Descrição** | Stretch e snap ao puxar para atualizar |
| **Duração** | Linked to gesture, snap back: 300ms |
| **Uso** | Listas, feeds, atualizar conteúdo |

### 4.11 Page Transition (Shared Element)

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento compartilhado anima entre páginas |
| **Duração** | 350-450ms |
| **Easing** | Standard Material |
| **Uso** | Lista -> detalhe, card expandido |

### 4.12 Hero Animation (Lottie)

| Campo | Detalhe |
|---|---|
| **Descrição** | Animação vetorial complexa no hero |
| **Duração** | 2000-5000ms |
| **Uso** | Landing page hero, empty states, onboarding |

### 4.13 Parallax Scroll

| Campo | Detalhe |
|---|---|
| **Descrição** | Camadas se movem em velocidades diferentes |
| **Duração** | Linked to scroll |
| **Uso** | Landing pages, storytelling, portfolios |

### 4.14 Reveal on Scroll

| Campo | Detalhe |
|---|---|
| **Descrição** | Elemento aparece ao entrar na viewport |
| **Duração** | 400-600ms |
| **Easing** | Ease Out |
| **Uso** | Landing page sections, features, testimonials |

### 4.15 Count Up (Números)

| Campo | Detalhe |
|---|---|
| **Descrição** | Números incrementam suavemente |
| **Duração** | 1000-2000ms |
| **Easing** | Ease Out (desacelera no valor final) |
| **Uso** | Estatísticas, métricas, dashboard |

### 4.16 Progress Ring

| Campo | Detalhe |
|---|---|
| **Descrição** | Círculo que preenche proporcionalmente |
| **Duração** | 500-1000ms |
| **Uso** | Progresso, loading circular, score |

### 4.17 Accordion Expand/Collapse

| Campo | Detalhe |
|---|---|
| **Descrição** | Conteúdo expande/colapsa suavemente |
| **Duração** | 300ms |
| **Easing** | Standard |
| **Uso** | FAQ, settings, detalhes colapsáveis |

### 4.18 Toggle Switch

| Campo | Detalhe |
|---|---|
| **Descrição** | Knob desliza com background morph |
| **Duração** | 200ms |
| **Easing** | Standard ou Bounce sutil |
| **Uso** | Settings, preferências, dark mode |

### 4.19 Ripple Effect

| Campo | Detalhe |
|---|---|
| **Descrição** | Onda circular expande do ponto de toque |
| **Duração** | 400-600ms |
| **Uso** | Feedback de toque em botões (Material Design) |

### 4.20 Confetti / Celebration

| Campo | Detalhe |
|---|---|
| **Descrição** | Partículas coloridas explodem |
| **Duração** | 2000-3000ms |
| **Uso** | Sucesso, conquista, completion, gamification |

### 4.21 Hover Lift (Card)

| Campo | Detalhe |
|---|---|
| **Descrição** | Card sobe sutilmente + sombra aumenta |
| **Duração** | 200ms |
| **Easing** | Ease Out |
| **Uso** | Cards clicáveis, portfolio items, products |

```css
.card {
  transition: transform 200ms cubic-bezier(0.0, 0.0, 0.2, 1),
              box-shadow 200ms cubic-bezier(0.0, 0.0, 0.2, 1);
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
```

### 4.22 Tab Indicator Slide

| Campo | Detalhe |
|---|---|
| **Descrição** | Indicador desliza para a tab ativa |
| **Duração** | 250-300ms |
| **Easing** | Standard |
| **Uso** | Tab navigation, segmented control |

---

## 5. Platform-Specific Guidelines

### iOS (Apple Human Interface Guidelines)

| Aspecto | Guideline |
|---|---|
| **Duração padrão** | 250-500ms |
| **Easing** | Spring animations (UIViewPropertyAnimator) |
| **Spring Damping** | 0.7-0.9 para natural |
| **Haptics** | Sempre combinar com animações importantes |
| **Page transition** | Horizontal slide com parallax no title |
| **Sheet presentation** | Slide up com card shape (iOS 15+) |
| **API** | `UIView.animate`, `UIViewControllerAnimatedTransitioning`, `withAnimation` (SwiftUI) |

```swift
// SwiftUI spring animation
.animation(.interactiveSpring(
    response: 0.3,
    dampingFraction: 0.8,
    blendDuration: 0.3
))

// UIKit spring
UIView.animate(withDuration: 0.5,
    delay: 0,
    usingSpringWithDamping: 0.8,
    initialSpringVelocity: 0.5,
    options: .curveEaseInOut)
```

### Android (Material Design 3)

| Aspecto | Guideline |
|---|---|
| **Duração padrão** | 200-300ms (micro), 300-500ms (macro) |
| **Easing** | `FastOutSlowIn` (padrão), `LinearOutSlowIn` (entrada), `FastOutLinearIn` (saída) |
| **Entrada** | Fade + scale ou slide from edge |
| **Saída** | Fade ou slide to edge |
| **Shared element** | ChangeBounds + ChangeTransform |
| **API** | `MotionLayout`, `Compose Animation`, `ViewPropertyAnimator` |

```kotlin
// Jetpack Compose
animateEnterExit(
    enter = fadeIn() + expandIn(),
    exit = fadeOut() + shrinkOut()
)

// Material Easing values
val FastOutSlowIn = CubicBezier(0.4f, 0.0f, 0.2f, 1.0f)
val LinearOutSlowIn = CubicBezier(0.0f, 0.0f, 0.2f, 1.0f)
val FastOutLinearIn = CubicBezier(0.4f, 0.0f, 1.0f, 1.0f)
```

### Web (CSS/JavaScript)

| Aspecto | Guideline |
|---|---|
| **Performance** | Animar apenas `transform` e `opacity` |
| **GPU加速** | Usar `will-change: transform` |
| **Evitar** | Animar `width`, `height`, `top`, `left` (causa reflow) |
| **Preferir** | `translateX/Y`, `scale`, `rotate`, `opacity` |
| **API** | CSS transitions, CSS animations, Web Animations API, Framer Motion, GSAP, React Spring |

```css
/* GOOD — GPU accelerated */
.element {
  transition: transform 300ms cubic-bezier(0.4, 0.0, 0.2, 1),
              opacity 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  will-change: transform, opacity;
}

/* BAD — causes layout reflow */
.element {
  transition: width 300ms, height 300ms, top 300ms;
}
```

### Web Libraries Comparison

| Library | Tipo | Melhor Para | Bundle Size |
|---|---|---|---|
| **Framer Motion** | React | Projetos React completos | ~30KB |
| **GSAP** | Vanilla/Qualquer | Animações complexas/timeline | ~25KB (core) |
| **React Spring** | React | Física-based (springs) | ~15KB |
| **CSS Transitions** | CSS | Animações simples | 0KB |
| **Motion One** | Vanilla/Qualquer | Leve, moderna (WAAPI) | ~3KB |
| **AutoAnimate** | Vanilla/React | Auto animations em listas | ~1KB |

---

## 6. Acessibilidade em Motion

### prefers-reduced-motion

Sempre respeitar a preferência do usuário por menos movimento:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Regras de Acessibilidade

| Regra | Descrição |
|---|---|
| **Nunca animar** | Flashing > 3x por segundo (pode causar epilepsia) |
| **Evitar** | Parallax for users with motion sensitivity |
| **Fornecer** | Opção de desativar animações |
| **Manter** | Animação informativa mas não essencial (info deve existir sem animação) |
| **Duração máxima** | 5 segundos para animações auto-play (WCAG 2.2.2) |

---

## 7. Ferramentas de Motion Design

| Ferramenta | Uso | URL |
|---|---|---|
| **Figma (Smart Animate)** | Prototipação de animações UI | figma.com |
| **After Effects** | Animações complexas, Lottie | adobe.com/products/aftereffects |
| **Lottie** | Exportar AE para código | airbnb.io/lottie |
| **Jitter** | Motion design simples no browser | jitter.video |
| **Principle** | Prototipação de interação mac | principleformac.com |
| **ProtoPie** | Protótipos interativos avançados | protopie.io |
| **Rive** | Animações interativas runtime | rive.app |
| **Framer** | Prototipação + código | framer.com |
| **GSAP** | Animação web profissional | greensock.com/gsap |
| **Cubic-bezier.com** | Visualizador de easing | cubic-bezier.com |
| **Easing.co** | Biblioteca de curvas de easing | easing.co |

---

## 8. Checklist de Motion Design

| Critério | Verificação |
|---|---|
| Duração está na faixa recomendada? | Ver tabela de timing |
| Easing é natural (não linear)? | Usar curvas de easing |
| Animação comunica algo útil? | Princípio informativo |
| Não há mais de 1 animação competindo? | Princípio focado |
| Respeita prefers-reduced-motion? | Acessibilidade |
| Usa transform/opacity (web)? | Performance |
| Animação tem propósito claro? | Não animar por animar |
| Entrada é mais lenta que saída? | Padrão perceptual |
| Stagger não demora no total? | Máximo 500ms para lista toda |

---

*Documento criado para o squad pedro-design. Última atualização: Abril 2026.*
