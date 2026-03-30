# Component Documentation Template
**Squad:** pedro-webapp  
**Tier:** S+++

---

# Component: [Component Name]

**Path:** `components/[path]/[ComponentName].tsx`  
**Version:** 1.0  
**Status:** [Active/Deprecated]

---

## Overview

### Description
[What this component does in 1-2 sentences]

### When to Use
[Situations where this component should be used]

### When Not to Use
[Situations where this component should NOT be used]

---

## Props Interface

```typescript
interface [ComponentName]Props {
  // Required props
  requiredProp: string;
  
  // Optional props
  optionalProp?: number;
  
  // With default
  withDefault?: boolean;
  
  // Callbacks
  onAction?: (data: DataType) => void;
  
  // Children
  children?: React.ReactNode;
}
```

### Props Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `requiredProp` | `string` | Yes | - | Description |
| `optionalProp` | `number` | No | - | Description |
| `withDefault` | `boolean` | No | `true` | Description |
| `onAction` | `function` | No | - | Callback description |
| `children` | `ReactNode` | No | - | Child content |

---

## Usage

### Basic Example

```tsx
import { [ComponentName] } from 'components/[path]';

function Example() {
  return (
    <[ComponentName] requiredProp="value" />
  );
}
```

### With All Props

```tsx
<[ComponentName]
  requiredProp="value"
  optionalProp={42}
  withDefault={false}
  onAction={(data) => console.log(data)}
>
  Child content
</[ComponentName]>
```

### Common Patterns

#### Pattern 1: [Name]
```tsx
// Code example
```

#### Pattern 2: [Name]
```tsx
// Code example
```

---

## Variants

| Variant | Props | Use Case |
|---------|-------|----------|
| Default | - | Standard usage |
| [Variant] | `variant="[name]"` | [Use case] |
| [Variant] | `size="large"` | [Use case] |

---

## States

### Visual States
| State | Props | Description |
|-------|-------|-------------|
| Default | - | Normal state |
| Loading | `loading` | Loading state |
| Disabled | `disabled` | Disabled state |
| Error | `error="message"` | Error state |

### State Examples

```tsx
// Loading state
<[ComponentName] loading />

// Disabled state
<[ComponentName] disabled />

// Error state
<[ComponentName] error="Error message" />
```

---

## Design Tokens

### Spacing
```
padding: var(--space-[size])
margin: var(--space-[size])
gap: var(--space-[size])
```

### Colors
```
background: var(--color-[name])
color: var(--color-[name])
border: var(--color-[name])
```

### Typography
```
font-family: var(--font-[name])
font-size: var(--font-size-[size])
font-weight: var(--font-weight-[weight])
```

---

## Accessibility

### ARIA Attributes
- `role="[role]"` - [Purpose]
- `aria-label` - [When needed]
- `aria-describedby` - [When needed]

### Keyboard Support
| Key | Action |
|-----|--------|
| Enter | Activate |
| Space | Select |
| Escape | Close |

### Screen Reader Support
- [ ] Labels provided
- [ ] Status announced
- [ ] Changes announced

---

## Performance

### Optimization
- [ ] Memoized with `React.memo`
- [ ] Callbacks wrapped with `useCallback`
- [ ] Expensive computations memoized

### Bundle Size
- **Component:** ~[X]KB (gzipped)
- **With dependencies:** ~[X]KB (gzipped)

---

## Testing

### Unit Tests
```tsx
describe('[ComponentName]', () => {
  it('renders correctly', () => {
    // Test
  });

  it('handles click events', () => {
    // Test
  });
});
```

### Test Coverage
- [ ] Renders with required props
- [ ] Handles all variants
- [ ] Handles all states
- [ ] Emits events correctly
- [ ] Accessibility attributes

---

## Dependencies

### Internal
- `components/[Component]`
- `hooks/[hook]`

### External
- `npm-package`

---

## Related Components

- `[RelatedComponent]` - [Relationship]
- `[RelatedComponent]` - [Relationship]

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | | Initial release |

---

**Maintainer:** _______________  
**Last Updated:** _______________
