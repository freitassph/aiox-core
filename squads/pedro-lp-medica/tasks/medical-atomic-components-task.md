---
task: medical-atomic-components-task
responsavel: "@medical-atomic-design-architect"
responsavel_type: Agent
atomic_layer: Task
elicit: false
---

# Task: Medical Atomic Components — Component Library Build

## purpose
Specify and implement the atomic component library for the medical landing page, following the Brad Frost hierarchy (Atoms to Molecules to Organisms), using design tokens and ensuring accessibility compliance.

## entrada
- tokens.css gerado pela medical-design-tokens-task
- Briefing completo do projeto
- Lista de componentes prioritarios por template (SingleDoctor, MultiClinic, etc.)
- Specs de componentes documentadas pelo medical-atomic-design-architect

## saida
- Diretorio src/components/ com atoms, molecules e organisms implementados
- Component inventory com status de cada componente
- Documentacao visual (Storybook ou equivalente)
- Todos os componentes aprovados no Design Quality Checklist

## checklist
- [ ] Todos os componentes Priority 1 implementados e testados
- [ ] TypeScript sem any, interface de props completa
- [ ] Todas as variantes implementadas (hover/focus/active/disabled/loading)
- [ ] Sem hardcode de cores ou espacamento (apenas design tokens)
- [ ] Reduced motion respeitado em todos os componentes
- [ ] Acessibilidade: contraste + foco + ARIA verificados
- [ ] Responsivo de 320px a 1440px
- [ ] Design Quality S+++ Checklist aprovado

## pre-conditions
- medical-design-tokens-task concluida com tokens.css valido
- Template do projeto definido (SingleDoctor, MultiClinic, etc.)
- medical-atomic-design-architect disponivel para specs

## Objetivo
Especificar e implementar a biblioteca de componentes atômicos para o projeto, seguindo a hierarquia Brad Frost (Átomos → Moléculas → Organismos).

## Agentes Envolvidos
- **`medical-atomic-design-architect`** (Bruno Nakamura) — specs
- **`medical-ui-artisan`** (Felipe Torres) — implementação

## Inputs Necessários
- `medical-design-tokens-task` → tokens.css gerado
- Briefing completo (para saber quais componentes são prioritários)

---

## Fase 1: Inventory & Prioritization

Com base no template selecionado (SingleDoctor/MultiClinic/etc.), listar:

```
PRIORITY 1 — Bloqueiam o build (implementar primeiro):
□ Button (todas as variantes)
□ Input + FormField
□ Heading + Text atoms
□ Icon system (medical SVG set)
□ DoctorCard molecule
□ HeroSection organism
□ NavigationHeader organism
□ BookingSection organism (inclui AppointmentForm)
□ FooterComplete organism

PRIORITY 2 — Implementar na Fase 4:
□ ServiceCard molecule
□ TestimonialCard molecule
□ StatBlock molecule
□ FAQAccordion organism
□ TrustBar organism
□ DoctorBioSection organism

PRIORITY 3 — Post-launch / V2:
□ BlogPreviewGrid
□ TeamGrid
□ LocationSection
□ ProcessSteps
```

## Fase 2: Spec por Componente

Para cada componente, Bruno (Atomic Architect) documenta:

```markdown
### ComponentName

**Tipo:** Átomo / Molécula / Organismo
**Usa:** [lista de atoms/molecules dependentes]
**Variantes:** [variantes necessárias]
**Props obrigatórias:**
  - propName: type — descrição
**Estados:** default / hover / focus / active / disabled / loading
**Responsividade:** [comportamento mobile → desktop]
**Animação:** [spec de animação]
**CFM/Acessibilidade:** [notas específicas]
```

## Fase 3: Implementação

Para cada componente, Felipe (UI Artisan) implementa em:
`src/components/{atoms|molecules|organisms}/{ComponentName}/`

```typescript
// Estrutura mínima de componente
interface ComponentNameProps {
  // props tipadas
}

export const ComponentName = ({ ...props }: ComponentNameProps) => {
  return (
    // JSX com tokens CSS variables, sem hardcode
    // Tailwind classes via cn() utility
    // Acessibilidade nativa (role, aria-*, tabIndex)
  );
};
```

## Critérios de Aceite por Componente
```
□ TypeScript: sem any, interface de props completa
□ Variantes: todas implementadas
□ Estados: hover/focus/active/disabled
□ Design tokens: sem hardcode
□ Reduced motion: respeitado
□ Acessibilidade: contraste + foco + ARIA
□ Responsive: 320px → 1440px
□ Design Quality S+++ Checklist: aprovado
```

## Outputs
- **`src/components/`** — Todos os componentes implementados
- **Component Inventory** — Lista com status de cada componente
- **Storybook** (ou equivalente) — Documentação visual dos componentes
