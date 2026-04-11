# Design System Specification — Especificação de Design System

> Documento tecnico que define todos os tokens, componentes, padroes e regras de governanca de um design system. Serve como fonte unica de verdade para designers e desenvolvedores.
> Used by: designer, design-system-engineer, frontend-dev, UX-designer

---

## Informações do Projeto
**Nome do Design System:** ___________
**Versao:** ___________
**Data:** ___________
**Responsável:** ___________

---

## 1. Overview

### Visão Geral
___________

### Principios de Design
1. ___________
2. ___________
3. ___________
4. ___________

### Tecnologias e Ferramentas
| Ferramenta | Versao | Uso |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

### Links e Repositorios
| Recurso | URL |
|---|---|
| Repositorio de Componentes | ___________ |
| Figma Library | ___________ |
| Storybook/Docs | ___________ |
| Package Registry | ___________ |

> note: Mantenha este documento versionado junto com o codigo. Cada versao do design system deve ter uma tag correspondente.

---

## 2. Design Tokens

### 2.1 Cores

#### Paleta Primária
| Token Name | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| `--color-primary-50` | ___________ | ___________ | ___________ | Fundo mais claro |
| `--color-primary-100` | ___________ | ___________ | ___________ | Fundo claro |
| `--color-primary-200` | ___________ | ___________ | ___________ | Borda clara |
| `--color-primary-300` | ___________ | ___________ | ___________ | Borda |
| `--color-primary-400` | ___________ | ___________ | ___________ | Icone secundario |
| `--color-primary-500` | ___________ | ___________ | ___________ | Cor principal |
| `--color-primary-600` | ___________ | ___________ | ___________ | Hover |
| `--color-primary-700` | ___________ | ___________ | ___________ | Active |
| `--color-primary-800` | ___________ | ___________ | ___________ | Texto sobre claro |
| `--color-primary-900` | ___________ | ___________ | ___________ | Texto sobre escuro |

#### Paleta Neutra
| Token Name | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| `--color-neutral-0` | ___________ | ___________ | ___________ | Branco puro / Fundo |
| `--color-neutral-50` | ___________ | ___________ | ___________ | Background |
| `--color-neutral-100` | ___________ | ___________ | ___________ | Surface |
| `--color-neutral-200` | ___________ | ___________ | ___________ | Borda |
| `--color-neutral-300` | ___________ | ___________ | ___________ | Placeholder |
| `--color-neutral-400` | ___________ | ___________ | ___________ | Texto secundario |
| `--color-neutral-500` | ___________ | ___________ | ___________ | Texto primario |
| `--color-neutral-600` | ___________ | ___________ | ___________ | Texto sobre claro |
| `--color-neutral-700` | ___________ | ___________ | ___________ | Overlay |
| `--color-neutral-800` | ___________ | ___________ | ___________ | Background escuro |
| `--color-neutral-900` | ___________ | ___________ | ___________ | Preto puro |

#### Cores Semânticas
| Token | Hex | RGB | HSL | Uso |
|---|---|---|---|---|
| `--color-success` | ___________ | ___________ | ___________ | Confirmacoes, sucesso |
| `--color-warning` | ___________ | ___________ | ___________ | Alertas, atencao |
| `--color-error` | ___________ | ___________ | ___________ | Erros, acoes destrutivas |
| `--color-info` | ___________ | ___________ | ___________ | Informacoes, dicas |

> note: Garanta contraste minimo de 4.5:1 para texto normal e 3:1 para texto grande conforme WCAG AA. Verifique com ferramenta de contraste antes de definir.

### 2.2 Tipografia

#### Font Families
| Token | Font Family | Fallback | Uso |
|---|---|---|---|
| `--font-primary` | ___________ | ___________ | Texto corrido, UI |
| `--font-heading` | ___________ | ___________ | Titulos, headings |
| `--font-mono` | ___________ | ___________ | Codigo, dados tecnicos |

#### Type Scale
| Token | Size (px/rem) | Line-Height | Weight | Letter-Spacing | Uso |
|---|---|---|---|---|---|
| `--text-xs` | ___________ | ___________ | ___________ | ___________ | Legenda, nota |
| `--text-sm` | ___________ | ___________ | ___________ | ___________ | Texto pequeno |
| `--text-base` | ___________ | ___________ | ___________ | ___________ | Corpo de texto |
| `--text-lg` | ___________ | ___________ | ___________ | ___________ | Subtitulo |
| `--text-xl` | ___________ | ___________ | ___________ | ___________ | Heading H3 |
| `--text-2xl` | ___________ | ___________ | ___________ | ___________ | Heading H2 |
| `--text-3xl` | ___________ | ___________ | ___________ | ___________ | Heading H1 |
| `--text-4xl` | ___________ | ___________ | ___________ | ___________ | Display |

> note: Use rem como unidade principal para acessibilidade. Defina o base font-size como 16px (1rem).

### 2.3 Espaçamento
| Token | Valor (px) | Valor (rem) | Uso |
|---|---|---|---|
| `--space-0` | 0px | 0rem | Sem espacamento |
| `--space-1` | 4px | 0.25rem | Espacamento minimo |
| `--space-2` | 8px | 0.5rem | Padding interno |
| `--space-3` | 12px | 0.75rem | Padding compacto |
| `--space-4` | 16px | 1rem | Padding padrao |
| `--space-5` | 20px | 1.25rem | Padding medio |
| `--space-6` | 24px | 1.5rem | Padding generoso |
| `--space-8` | 32px | 2rem | Separacao de secoes |
| `--space-10` | 40px | 2.5rem | Gap entre blocos |
| `--space-12` | 48px | 3rem | Margem de secao |
| `--space-16` | 64px | 4rem | Espacamento hero |
| `--space-20` | 80px | 5rem | Espacamento entre paginas |

### 2.4 Sombras
| Token | Valor (box-shadow) | Uso |
|---|---|---|
| `--shadow-none` | none | Sem sombra |
| `--shadow-sm` | ___________ | Elevacao minima (cards flat) |
| `--shadow-md` | ___________ | Elevacao media (dropdowns) |
| `--shadow-lg` | ___________ | Elevacao alta (modais) |
| `--shadow-xl` | ___________ | Elevacao maxima (tooltips, popovers) |
| `--shadow-inner` | ___________ | Sombra interna (inputs focados) |

### 2.5 Bordas
| Token | Valor | Uso |
|---|---|---|
| `--border-none` | none | Sem borda |
| `--border-sm` | 1px solid ___________ | Bordas sutis |
| `--border-md` | 1px solid ___________ | Bordas padrao |
| `--border-lg` | 2px solid ___________ | Bordas enfaticas |

### 2.6 Border Radius
| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | 0px | Sem arredondamento |
| `--radius-sm` | 4px | Elementos pequenos |
| `--radius-md` | 8px | Elementos medios |
| `--radius-lg` | 12px | Cards, modais |
| `--radius-xl` | 16px | Containers grandes |
| `--radius-full` | 9999px | Pills, avatares |

---

## 3. Componentes

### Componente: ___________

| Campo | Valor |
|---|---|
| Nome | ___________ |
| Descricao | ___________ |
| Status | [ ] Draft [ ] Review [ ] Stable [ ] Deprecated |

#### Props
| Prop | Tipo | Default | Obrigatorio | Descricao |
|---|---|---|---|---|
| ___________ | ___________ | ___________ | [ ] | ___________ |
| ___________ | ___________ | ___________ | [ ] | ___________ |
| ___________ | ___________ | ___________ | [ ] | ___________ |

#### Variantes
| Variante | Props Diferentes | Quando Usar |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

#### Estados
| Estado | Visual | Comportamento |
|---|---|---|
| Default | ___________ | ___________ |
| Hover | ___________ | ___________ |
| Focus | ___________ | ___________ |
| Active | ___________ | ___________ |
| Disabled | ___________ | ___________ |
| Loading | ___________ | ___________ |
| Error | ___________ | ___________ |

#### Do
___________

#### Don't
___________

> note: Adicione uma linha de componente para cada item do design system. Use screenshots ou links para o Figma/Storybook.

---

## 4. Patterns

### Pattern: ___________
| Campo | Valor |
|---|---|
| Nome | ___________ |
| Descricao | ___________ |
| Componentes Envolvidos | ___________ |
| Quando Usar | ___________ |
| Quando NAO Usar | ___________ |

**Exemplo de Uso:**
___________

**Implementacao:**
___________

---

## 5. Accessibility Guidelines

### Regras Gerais
| Regra | Especificacao | Verificacao |
|---|---|---|
| Contraste de Cores | Minimo 4.5:1 (AA) para texto normal | ___________ |
| Contraste Texto Grande | Minimo 3:1 (AA) para 18pt+/14pt bold | ___________ |
| Tamanho de Toque | Minimo 44x44px (WCAG 2.5.5) | ___________ |
| Foco Visivel | Indicador de foco claro em todos elementos interativos | ___________ |
| Alt Text | Todas imagens decorativas com alt="" ou sem alt | ___________ |
| ARIA Labels | Todos controles customizados com aria-label | ___________ |
| Ordem de Tab | Sequencia logica e previsivel | ___________ |
| Reducao de Movimento | Respeita `prefers-reduced-motion` | ___________ |

### Checklist de Acessibilidade por Componente
| Componente | Contraste OK | Foco OK | ARIA OK | Teclado OK | Screen Reader OK |
|---|---|---|---|---|---|
| ___________ | [ ] | [ ] | [ ] | [ ] | [ ] |
| ___________ | [ ] | [ ] | [ ] | [ ] | [ ] |

---

## 6. Usage and Governance

### Como Contribuir
1. ___________
2. ___________
3. ___________

### Processo de Adicao de Novo Componente
1. Abrir issue com proposta
2. Apresentar em design review
3. Implementar em branch feature
4. Revisao de codigo + revisao de design
5. Merge e publicacao

### Versionamento
| Versao | Data | Mudancas | Autor |
|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ | ___________ |

### Deprecacao
| Componente | Versao Deprecada | Alternativa | Data Limite |
|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ |

> note: Componentes deprecados devem manter suporte por pelo menos 2 versoes antes de remocao total.

---

**Documento criado por:** ___________
**Ultima atualizacao:** ___________
**Proxima revisao:** ___________
