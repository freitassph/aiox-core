# Coding Standards — Pedro WebApp Squad

## TypeScript (NON-NEGOTIABLE)

```typescript
// ✓ Correto
interface UserProfile {
  id: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  createdAt: Date;
}

// ✗ Proibido
const user: any = {};
```

- Zero `any` — use `unknown` com type guards ou generics
- `strict: true` + `noUncheckedIndexedAccess: true`
- Interfaces para props, types para unions/intersections
- `as const` para enums e config objects

## Arquitetura Next.js 15

```
app/
├── (marketing)/        # Landing, pricing, blog — Server Components
├── (auth)/             # Login, signup, reset
├── (app)/              # Dashboard e features (authenticated)
│   └── layout.tsx      # Auth guard
├── (api)/              # Route Handlers
└── api/                # Backend API routes
```

- Server Components por padrão — `use client` apenas quando necessário
- `use client` limitado ao mínimo: forms, modais, charts, tooltips
- Loading states com `loading.tsx` e React Suspense
- Error boundaries com `error.tsx`

## Padrão de Componentes

```typescript
// ✓ Componente correto
interface DashboardCardProps {
  title: string;
  value: number | string;
  trend?: { value: number; direction: 'up' | 'down' };
  className?: string;
}

export function DashboardCard({ title, value, trend, className }: DashboardCardProps) {
  return (
    <Card className={cn('p-6', className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && <TrendBadge value={trend.value} direction={trend.direction} />}
      </CardContent>
    </Card>
  );
}
```

## Backend — Clean Architecture

```
routes/         → Hono route handlers (validação Zod, nada mais)
services/       → Business logic (sem HTTP, sem DB direto)
repositories/   → Data access (Drizzle queries)
lib/            → Shared utilities (errors, logger, config)
```

```typescript
// ✓ Route Handler
app.post('/users', zValidator('json', createUserSchema), async (c) => {
  const data = c.req.valid('json');
  const user = await userService.create(data);
  return c.json({ user }, 201);
});

// ✓ Service
async function create(data: CreateUserInput): Promise<User> {
  const existing = await userRepository.findByEmail(data.email);
  if (existing) throw new AppError('USER_ALREADY_EXISTS', { httpStatus: 409 });
  return userRepository.create(data);
}
```

## Error Handling

```typescript
// AppError padronizado
export class AppError extends Error {
  constructor(
    public code: string,
    public options: { httpStatus: number; details?: Record<string, unknown> }
  ) {
    super(code);
  }
}

// Try/catch obrigatório em operações assíncronas
try {
  const result = await stripeService.createSubscription(customerId, priceId);
  return result;
} catch (error) {
  logger.error('Stripe subscription failed', {
    customerId,
    priceId,
    error: error instanceof Error ? error.message : 'Unknown',
  });
  throw new AppError('SUBSCRIPTION_CREATE_FAILED', { httpStatus: 500 });
}
```

## Validação (Zod obrigatório em boundaries)

```typescript
const createSubscriptionSchema = z.object({
  planId: z.enum(['starter', 'pro', 'enterprise']),
  billingCycle: z.enum(['monthly', 'annual']),
  seats: z.number().int().min(1).max(500).optional(),
});
```

## Imports (SEMPRE absolutos)

```typescript
// ✓ Correto
import { useSubscription } from '@/hooks/use-subscription';
import { formatCurrency } from '@/lib/format';
import type { Plan } from '@/types/billing';

// ✗ Proibido
import { useSubscription } from '../../../hooks/use-subscription';
```

## CSS / Tailwind

- Design tokens via CSS variables (`--color-primary`, `--radius`, etc.)
- `cn()` helper obrigatório (clsx + tailwind-merge)
- Cores com oklch para WCAG compliance automático
- Responsive mobile-first: `base → sm → md → lg → xl → 2xl`
- Dark mode via `.dark` class na `<html>`

## Performance

- `next/image` obrigatório para imagens (nunca `<img>` puro)
- `next/font` para fontes (nunca Google Fonts externo)
- Dynamic imports para componentes pesados (charts, editors, maps)
- Bundle analysis antes de cada release (`@next/bundle-analyzer`)

## Acessibilidade (WCAG 2.1 AA)

- Contraste mínimo 4.5:1 (texto normal), 3:1 (texto grande)
- `aria-label` em ícones sem texto visível
- Focus rings visíveis (nunca `outline: none` sem alternativa)
- Navegação por teclado completa
- `role` correto em componentes customizados
