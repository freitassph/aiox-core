# Coding Standards — Pedro Sistema Agente Squad

## Princípios Absolutos

1. **Zero `any`** — TypeScript strict. Qualquer violação é blocker.
2. **Zod em toda boundary** — request, response, env var, dados externos.
3. **Error handling contextualizado** — nunca `catch (e) { console.log(e) }`.
4. **Imports absolutos** — `@/` para tudo. Proibido `../../../`.
5. **Funções públicas com JSDoc** — parâmetros, retorno, exceções.

## Nomenclatura

| Tipo | Convenção | Exemplo |
|------|-----------|---------|
| Componentes | PascalCase | `AppointmentCard` |
| Hooks | `use` prefix | `useAgentMemory` |
| Arquivos componentes | kebab-case | `appointment-card.tsx` |
| Arquivos utilitários | kebab-case | `format-date.ts` |
| Constantes | SCREAMING_SNAKE_CASE | `MAX_TOKENS_PER_REQUEST` |
| Interfaces | PascalCase + sufixo | `AppointmentCardProps` |
| Types | PascalCase | `AgentMemoryEntry` |
| Enums | PascalCase | `AppointmentStatus` |
| DB tables | snake_case | `patient_appointments` |
| API routes | kebab-case | `/api/v1/agent-sessions` |

## Estrutura de Componente React

```tsx
// 1. Imports na ordem correta
import { type FC } from 'react'                    // core
import { motion } from 'framer-motion'             // external
import { Button } from '@/components/ui/button'    // UI components
import { cn } from '@/lib/utils'                   // utilities
import { useStore } from '@/stores/app-store'      // stores
import { AgentChat } from '@/features/agent/chat'  // features
import '@/styles/component.css'                    // CSS

// 2. Tipos antes do componente
interface ComponentProps {
  required: string
  optional?: number
  children?: React.ReactNode
}

// 3. Componente com export nomeado
export const Component: FC<ComponentProps> = ({ required, optional = 0, children }) => {
  // 4. Hooks no topo
  // 5. Derivações
  // 6. Handlers
  // 7. Return JSX
  return <div>{children}</div>
}
```

## Error Handling

```typescript
// CORRETO
try {
  const result = await supabase.from('agents').select('*').eq('id', agentId)
  if (result.error) throw result.error
  return result.data
} catch (error) {
  logger.error('Failed to fetch agent', {
    operation: 'fetchAgent',
    agentId,
    error: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined,
  })
  throw new AppError('AGENT_FETCH_FAILED', { agentId, httpStatus: 500 })
}

// ERRADO — nunca faça isso
try {
  return await db.query(...)
} catch (e) {
  console.log(e)  // ← blocker
}
```

## API Design (Backend)

```typescript
// Toda rota deve ter: validação Zod, auth check, error handling
app.post('/api/v1/agents/:id/message',
  authMiddleware,
  async (c) => {
    const body = MessageSchema.parse(await c.req.json())
    const { id } = ParamsSchema.parse(c.req.param())
    // ... lógica
  }
)
```

## Variáveis de Ambiente

```typescript
// env.ts — validado uma vez na startup
import { z } from 'zod'

const EnvSchema = z.object({
  SUPABASE_URL: z.string().url(),
  SUPABASE_SERVICE_KEY: z.string().min(1),
  OPENAI_API_KEY: z.string().startsWith('sk-'),
  REDIS_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
})

export const env = EnvSchema.parse(process.env)
```

## Quality Gates (não negociável)

```bash
pnpm lint          # zero warnings
pnpm typecheck     # zero errors
pnpm test          # 100% pass, coverage >= 80%
pnpm build         # zero errors
```

## Commits

```
feat(agent): add memory persistence to agent sessions
fix(rag): resolve embedding dimension mismatch on pgvector insert
perf(api): add Redis cache to frequent clinic API queries
docs(onboarding): update WhatsApp webhook setup guide
```

Sempre referencie story: `feat(backend): implement appointment CRUD [Story 3.2]`
