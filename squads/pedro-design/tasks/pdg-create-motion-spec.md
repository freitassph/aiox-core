---
task: Create Motion Spec
responsavel: "@pdg-motion-designer"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - project: Nome do projeto
  - components: Lista de componentes que precisam de animação
  - personality: Tom de movimento (playful / professional / luxury / energetic)
  - constraints: Performance constraints (mobile-first, low-end devices)
Saida: |
  - motion-spec.md: Especificação completa de todas as animações
  - animation-tokens.ts: Tokens de timing e easing
  - components/: Componentes implementados com animações
Checklist:
  - "[ ] Motion personality definida"
  - "[ ] Timing standards documentados"
  - "[ ] Easing curves definidas"
  - "[ ] Micro-interactions por componente especificadas"
  - "[ ] Page transitions especificadas"
  - "[ ] Loading states animados"
  - "[ ] Scroll animations mapeadas"
  - "[ ] Lottie files (se necessário)"
  - "[ ] Implementação com Framer Motion"
  - "[ ] prefers-reduced-motion implementado"
  - "[ ] Performance verificada (transform/opacity only)"
---

# *create-motion-spec

Especifica e implementa toda a linguagem de movimento do produto: micro-interactions, transições, scroll animations e motion brand.

## Uso

```
*create-motion-spec --project "meu-produto" --personality "professional"
*create-motion-spec --project "app-consumer" --personality "playful" --components "Button,Modal,Card,Page"
```

## Animation Tokens Output

```typescript
export const motionTokens = {
  duration: {
    instant: 0,
    fast: 150,      // micro-interactions
    normal: 300,    // standard UI
    slow: 500,      // deliberate transitions
    pageEnter: 400, // page transitions
  },
  easing: {
    default: [0.25, 0.1, 0.25, 1],     // cubic-bezier ease
    enter: [0, 0, 0.2, 1],              // ease-out
    exit: [0.4, 0, 1, 1],               // ease-in
    spring: { type: 'spring', stiffness: 300, damping: 25 },
    bounce: { type: 'spring', stiffness: 400, damping: 17 },
  },
} as const;
```

## Motion Spec Format

```markdown
# Motion Spec: [Projeto]

## Motion Personality
Timing: [fast/medium/slow]
Easing: [spring/ease-out/custom]
Princípio: [Playful/Professional/Luxury]

## Component Animations
### Button
- Hover: scale(1.01), duration: 150ms, ease-out
- Press: scale(0.97), duration: 100ms, ease-in
- Loading: spinner, duration: 800ms infinite

### Modal
- Open: scale(0.95→1) + opacity(0→1), spring
- Close: scale(1→0.95) + opacity(1→0), 150ms ease-in

## Page Transitions
- Enter: [variant]
- Exit: [variant]

## Scroll Animations
- [Elemento]: [animação + trigger]

## Reduced Motion Fallback
Todas as animações → opacity-only, 150ms
```
