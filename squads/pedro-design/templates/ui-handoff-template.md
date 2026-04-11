# UI Handoff — Handoff de UI para Desenvolvimento

> Documento que transfere o design aprovado para a equipe de desenvolvimento com especificacoes precisas de componentes, interacoes, assets e edge cases.
> Used by: designer, frontend-dev, mobile-dev, QA, PM

---

## Informações do Projeto
**Nome do Projeto:** ___________
**Data:** ___________
**Responsável:** ___________
**Versao:** ___________

---

## 1. Overview

| Campo | Valor |
|---|---|
| Projeto | ___________ |
| Plataforma | [ ] Web [ ] iOS [ ] Android [ ] Cross-platform |
| Framework/Stack | ___________ |
| Design Tool | [ ] Figma [ ] Sketch [ ] XD [ ] Outro: ___________ |
| Link do Arquivo de Design | ___________ |
| Link do Design System | ___________ |
| Link do Repositorio | ___________ |

### Escopo deste Handoff
___________

### Paginas/Telas Inclusas
| # | Pagina/Tela | Status |
|---|---|---|
| 1 | ___________ | [ ] Final [ ] Revisao |
| 2 | ___________ | [ ] Final [ ] Revisao |
| 3 | ___________ | [ ] Final [ ] Revisao |
| 4 | ___________ | [ ] Final [ ] Revisao |
| 5 | ___________ | [ ] Final [ ] Revisao |

### Paginas/Telas Excluídas (fora do escopo)
___________

> note: Antes de iniciar o desenvolvimento, confira cada tela no Figma com este documento. Se houver discrepancia, consulte o designer antes de implementar.

---

## 2. Screen Inventory

| # | Tela | Arquivo/Link | Notas |
|---|---|---|---|
| 1 | ___________ | ___________ | ___________ |
| 2 | ___________ | ___________ | ___________ |
| 3 | ___________ | ___________ | ___________ |
| 4 | ___________ | ___________ | ___________ |
| 5 | ___________ | ___________ | ___________ |
| 6 | ___________ | ___________ | ___________ |
| 7 | ___________ | ___________ | ___________ |
| 8 | ___________ | ___________ | ___________ |

### Breakpoints e Responsividade
| Breakpoint | Largura | Dispositivo Alvo | Notas |
|---|---|---|---|
| Mobile S | 320px | Phones pequenos | ___________ |
| Mobile M | 375px | Phones medios | ___________ |
| Mobile L | 425px | Phones grandes | ___________ |
| Tablet | 768px | Tablets | ___________ |
| Desktop | 1024px | Desktops | ___________ |
| Desktop L | 1440px | Telas grandes | ___________ |

> note: Indique se o design e mobile-first ou desktop-first. Isso orienta a estrategia de CSS.

---

## 3. Component Spec

| # | Componente | Props | Variantes | Estados | Notas |
|---|---|---|---|---|---|
| 1 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 2 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 3 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 4 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 5 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 6 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 7 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 8 | ___________ | ___________ | ___________ | ___________ | ___________ |

### Detalhamento de Componentes Criticos

#### Componente: ___________
| Campo | Valor |
|---|---|
| Nome | ___________ |
| Descricao | ___________ |
| Link no Figma | ___________ |

**Props:**
| Prop | Tipo | Default | Obrigatorio | Descricao |
|---|---|---|---|---|
| ___________ | ___________ | ___________ | [ ] | ___________ |
| ___________ | ___________ | ___________ | [ ] | ___________ |
| ___________ | ___________ | ___________ | [ ] | ___________ |

**Variantes:**
| Variante | Props Especificas | Screenshot/Link |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

**Estados:**
| Estado | Visual | Comportamento |
|---|---|---|
| Default | ___________ | ___________ |
| Hover | ___________ | ___________ |
| Focus | ___________ | ___________ |
| Active/Pressed | ___________ | ___________ |
| Disabled | ___________ | ___________ |
| Loading | ___________ | ___________ |
| Error | ___________ | ___________ |

> note: Componentes ja existentes no design system devem linkar para a documentacao oficial. Nao duplique especificacoes.

---

## 4. Interaction Spec

| # | Gatilho (Trigger) | Animacao/Transicao | Duracao | Easing | Notas |
|---|---|---|---|---|---|
| 1 | ___________ | ___________ | ___________ ms | ___________ | ___________ |
| 2 | ___________ | ___________ | ___________ ms | ___________ | ___________ |
| 3 | ___________ | ___________ | ___________ ms | ___________ | ___________ |
| 4 | ___________ | ___________ | ___________ ms | ___________ | ___________ |
| 5 | ___________ | ___________ | ___________ ms | ___________ | ___________ |
| 6 | ___________ | ___________ | ___________ ms | ___________ | ___________ |

### Easing Reference
| Nome | Cubic-Bezier | Uso |
|---|---|---|
| ___________ | cubic-bezier(___, ___, ___, ___) | ___________ |
| ___________ | cubic-bezier(___, ___, ___, ___) | ___________ |

### Transicoes de Tela
| De | Para | Tipo de Transicao | Duracao | Direcao |
|---|---|---|---|---|
| ___________ | ___________ | [ ] Push [ ] Fade [ ] Slide [ ] Modal | ___________ ms | ___________ |
| ___________ | ___________ | [ ] Push [ ] Fade [ ] Slide [ ] Modal | ___________ ms | ___________ |

### Micro-interacoes
| Elemento | Interacao | Feedback Visual | Duracao |
|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ ms |
| ___________ | ___________ | ___________ | ___________ ms |

> note: Respeite `prefers-reduced-motion`. Se o usuario tem reduzido de movimento ativado, pule ou simplifique animacoes.

---

## 5. Assets

### Lista de Exportacao
| # | Nome do Asset | Formato | Tamanhos | 1x | 2x | 3x | Localizacao |
|---|---|---|---|---|---|---|---|
| 1 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 2 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 3 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 4 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 5 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 6 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 7 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |
| 8 | ___________ | [ ] SVG [ ] PNG [ ] JPG [ ] WebP | ___________ | [ ] | [ ] | [ ] | ___________ |

### Icones
| Nome do Icone | Formato | Tamanho Base | Link |
|---|---|---|---|
| ___________ | [ ] SVG [ ] Icon Font | ___________ | ___________ |
| ___________ | [ ] SVG [ ] Icon Font | ___________ | ___________ |
| ___________ | [ ] SVG [ ] Icon Font | ___________ | ___________ |

### Fonts
| Font Family | Pesos Necessarios | Formato | Licenca | Fonte |
|---|---|---|---|---|
| ___________ | ___________ | [ ] WOFF2 [ ] TTF [ ] OTF | ___________ | ___________ |
| ___________ | ___________ | [ ] WOFF2 [ ] TTF [ ] OTF | ___________ | ___________ |

> note: Prefira SVG para icones e logos (escalaveis). Use WebP ou PNG para fotos. Fontes devem estar em WOFF2 para melhor performance.

---

## 6. Edge Cases

| # | Edge Case | Comportamento Esperado | Tela/Link |
|---|---|---|---|
| 1 | Texto muito longo (overflow) | ___________ | ___________ |
| 2 | Sem dados (empty state) | ___________ | ___________ |
| 3 | Erro de carregamento | ___________ | ___________ |
| 4 | Loading state | ___________ | ___________ |
| 5 | Sem conexao de rede | ___________ | ___________ |
| 6 | Permissoes negadas | ___________ | ___________ |
| 7 | Sessao expirada | ___________ | ___________ |
| 8 | Tela com scroll infinito | ___________ | ___________ |
| 9 | Lista com 1 item vs 1000 itens | ___________ | ___________ |
| 10 | Imagem que nao carrega (fallback) | ___________ | ___________ |
| 11 | Usuario logado vs deslogado | ___________ | ___________ |
| 12 | Formatos de data/moeda (i18n) | ___________ | ___________ |

### Empty States
| Tela | Mensagem | CTA | Ilustracao |
|---|---|---|---|
| ___________ | ___________ | ___________ | [ ] Sim [ ] Nao |
| ___________ | ___________ | ___________ | [ ] Sim [ ] Nao |

### Error States
| Tipo de Erro | Mensagem ao Usuario | Acao Sugerida |
|---|---|---|
| 404 | ___________ | ___________ |
| 500 | ___________ | ___________ |
| Timeout | ___________ | ___________ |
| Sem rede | ___________ | ___________ |

---

## 7. Dev Notes

### Notas Gerais para Desenvolvimento
___________

### Tokens de Design
| Token Category | Arquivo/Link |
|---|---|
| Cores | ___________ |
| Tipografia | ___________ |
| Espacamento | ___________ |
| Sombras | ___________ |
| Border Radius | ___________ |
| Breakpoints | ___________ |

### Dependencias de Terceiros
| Dependencia | Versao | Uso | Licenca |
|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ | ___________ |

### Performance Targets
| Metrica | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Bundle Size Max | ___________ KB |
| Image Budget per Page | ___________ KB |

### Consideracoes de SEO (se aplicavel)
___________

### Consideracoes de Analytics (se aplicavel)
| Evento | Quando Disparar | Dados Enviados |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

---

## 8. Sign-off

| Papel | Nome | Assinatura | Data |
|---|---|---|---|
| Designer | ___________ | ___________ | ___________ |
| Dev Lead | ___________ | ___________ | ___________ |
| QA | ___________ | ___________ | ___________ |
| PM | ___________ | ___________ | ___________ |

---

> note: Este handoff e a fonte de verdade para implementacao. Qualquer mudanca no design apos este handoff deve ser comunicada via changelog e atualizada neste documento. Design e dev devem fazer sync semanal durante a implementacao.

**Documento criado por:** ___________
**Ultima atualizacao:** ___________
**Proxima revisao:** ___________
