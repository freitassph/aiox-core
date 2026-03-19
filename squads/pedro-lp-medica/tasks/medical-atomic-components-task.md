# Task: Medical Atomic Components — Component Library Build

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
