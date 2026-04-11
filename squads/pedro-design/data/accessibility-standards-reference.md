# Referência de Padrões de Acessibilidade

> Documento de referência completo para o squad pedro-design. Contém diretrizes WCAG 2.1/2.2, níveis de conformidade, requisitos de contraste, tipografia acessível, touch targets, considerações para screen readers e ferramentas de teste.

---

## 1. O que é Acessibilidade Digital?

Acessibilidade digital significa que websites, aplicativos e conteúdos digitais podem ser usados por todas as pessoas, incluindo aquelas com deficiências visuais, auditivas, motoras, cognitivas ou neurológicas.

### Por que Importa

| Fato | Dado |
|---|---|
| **Pessoas com deficiência no mundo** | ~1.3 bilhão (16% da população global) |
| **Pessoas com deficiência no Brasil** | ~45 milhões (23% da população) |
| **Deficiência visual** | 2.2 bilhões com alguma deficiência visual |
| **Idosos (65+)** | ~700 milhões mundialmente — muitos com limitações |
| **Mercado** | Poder de compra de PCD: $13 trilhões mundialmente |
| **Legal** | Lei Brasileira de Inclusão (13.146/2015), eAccessibility Act EU |

---

## 2. WCAG 2.1 e 2.2 — Visão Geral

### Estrutura das Diretrizes

| Nível | Descrição |
|---|---|
| **Princípios** | 4 pilares: Perceptível, Operável, Compreensível, Robusto (POUR) |
| **Diretrizes** | 13 categorias sob os princípios |
| **Critérios de Sucesso** | Regras testáveis (ex: 1.4.3 Contrast) |
| **Níveis de Conformidade** | A (mínimo), AA (padrão), AAA (ideal) |

### Os 4 Princípios POUR

| Princípio | O que Significa | Exemplo |
|---|---|---|
| **Perceptível** | Informação e UI devem ser apresentáveis de formas que o usuário possa perceber | Alt text em imagens, legendas em vídeos |
| **Operável** | Interface deve ser operável por todos | Navegação por teclado, tempo suficiente |
| **Compreensível** | Informação e operação devem ser compreensíveis | Linguagem clara, inputs com labels |
| **Robusto** | Conteúdo deve funcionar com tecnologias atuais e futuras | HTML semântico, ARIA correto |

---

## 3. Níveis de Conformidade

| Nível | Descrição | Impacto |
|---|---|---|
| **A** | Requisitos mínimos — sem isso, inacessível para grupos | Elimina barreiras mais graves |
| **AA** | **Padrão exigido** pela maioria das legislações | Remove barreiras significativas |
| **AAA** | Nível mais alto — ideal, mas nem sempre viável | Máxima acessibilidade possível |

### Requisitos por Nível — Resumo

| Critério | Nível A | Nível AA | Nível AAA |
|---|---|---|---|
| **Contraste texto normal** | Não exigido | 4.5:1 | 7:1 |
| **Contraste texto grande** | Não exigido | 3:1 | 4.5:1 |
| **Navegação por teclado** | Sim | Sim | Sim |
| **Alt text** | Sim | Sim | Sim |
| **Legendas (vídeo)** | Sim (ao vivo não) | Sim (ao vivo também) | Sim + extended |
| **Redirecionamento de tempo** | Sim | Sim | Sim |
| **Sem flashing (3x/s)** | Sim | Sim | Sim |
| **Múltiplas formas de navegar** | Não | Sim | Sim |
| **Sem erros de input** | Sim (identificação) | Sim (sugestão) | Sim (prevenção) |

---

## 4. Contraste de Cores — Requisitos Detalhados

### Tabela de Requisitos WCAG

| Tipo de Texto | Tamanho | Nível AA | Nível AAA |
|---|---|---|---|
| **Texto normal** | Abaixo de 18pt (24px) ou 14pt bold (18.5px) | 4.5:1 | 7:1 |
| **Texto grande** | 18pt+ (24px+) ou 14pt bold+ (18.5px+) | 3:1 | 4.5:1 |
| **UI components** | Ícones, borders, inputs | 3:1 | 3:1 |
| **Gráficos essenciais** | Charts, gráficos de dados | 3:1 | 3:1 |

### Combinações de Cores que Passam/Falham

| Cor do Texto | Cor do Fundo | Razão | WCAG AA (normal) | WCAG AAA (normal) |
|---|---|---|---|---|
| `#000000` | `#FFFFFF` | 21.0:1 | PASS | PASS |
| `#1A1A1A` | `#FFFFFF` | 18.1:1 | PASS | PASS |
| `#333333` | `#FFFFFF` | 12.6:1 | PASS | PASS |
| `#4A4A4A` | `#FFFFFF` | 9.7:1 | PASS | PASS |
| `#555555` | `#FFFFFF` | 8.3:1 | PASS | PASS |
| `#595959` | `#FFFFFF` | 7.0:1 | PASS | PASS (limite AAA) |
| `#666666` | `#FFFFFF` | 5.7:1 | PASS | FAIL |
| `#717171` | `#FFFFFF` | 4.9:1 | PASS | FAIL |
| `#767676` | `#FFFFFF` | 4.5:1 | PASS (limite AA) | FAIL |
| `#777777` | `#FFFFFF` | 4.48:1 | FAIL | FAIL |
| `#808080` | `#FFFFFF` | 3.95:1 | FAIL | FAIL |
| `#FFFFFF` | `#1E3A5F` | 9.2:1 | PASS | PASS |
| `#FFFFFF` | `#0077B6` | 4.8:1 | PASS | FAIL |
| `#FFFFFF` | `#E63946` | 3.9:1 | FAIL | FAIL |
| `#E63946` | `#FFFFFF` | 4.0:1 | FAIL (texto normal) | FAIL |
| `#E63946` | `#000000` | 5.3:1 | PASS | FAIL |
| `#FFBE0B` | `#000000` | 13.1:1 | PASS | PASS |
| `#FFBE0B` | `#333333` | 9.6:1 | PASS | PASS |
| `#2DC653` | `#000000` | 7.1:1 | PASS | PASS (limite) |
| `#3B82F6` | `#FFFFFF` | 3.5:1 | FAIL | FAIL |
| `#1D4ED8` | `#FFFFFF` | 5.8:1 | PASS | FAIL |

### Regras Práticas de Contraste

1. **Nunca usar cinza claro sobre branco** — `#999` e mais claro falha em AA
2. **Links devem ser distinguíveis sem cor** — usar underline ou ícone
3. **Estados de erro não podem ser só vermelho** — adicionar ícone + texto
4. **Background images precisam overlay** — garantir contraste suficiente
5. **Testar sempre no contexto real** — cores podem parecer diferentes em telas

### Estado de Componentes UI

| Estado | Requisito de Contraste | Exemplo |
|---|---|---|---|
| **Botão normal** | Texto 4.5:1, borda 3:1 | Botão com texto legível |
| **Botão hover** | Texto 4.5:1, mudança perceptível | Mudança de cor ou sombra |
| **Botão disabled** | 3:1 para texto (não precisa 4.5:1) | Cinza claro aceitável |
| **Input focado** | Indicador de foco 3:1 | Outline visível |
| **Error state** | Não depender apenas de cor | Texto + ícone + cor |

---

## 5. Tipografia Acessível

### Tamanho Mínimo de Fonte

| Contexto | Tamanho Mínimo | Observação |
|---|---|---|
| **Body text (web)** | 16px (1rem) | Padrão da indústria |
| **Body text (mobile)** | 16px mínimo | Alguns usuários precisam maior |
| **Labels e UI text** | 14px mínimo | Labels de formulários, botões |
| **Caption / notas** | 12px mínimo | Apenas para texto suplementar |
| **Texto grande (WCAG)** | 24px regular ou 18.5px bold | Acima disso = contraste menor exigido |

### Line Height (Altura de Linha) Acessível

| Tipo de Texto | Line Height Mínimo | WCAG |
|---|---|---|
| **Body text** | 1.5 (150%) | WCAG 2.2 - 1.4.12 (AAA) |
| **Headings** | 1.2 | Mais curto para títulos |
| **UI elements** | 1.2-1.3 | Labels, botões |
| **Paragraph spacing** | 2x font-size (200%) | WCAG 2.2 - 1.4.12 (AAA) |

### Fontes Recomendadas para Acessibilidade

| Fonte | Tipo | Por que é Acessível |
|---|---|---|
| **Atkinson Hyperlegible** | Sans-Serif | Projetada pelo Braille Institute |
| **OpenDyslexic** | Sans-Serif | Para dislexia, base mais pesada |
| **Inter** | Sans-Serif | Alta legibilidade, x-height generoso |
| **Source Sans 3** | Sans-Serif | Boa distinção entre caracteres |
| **Arial/Helvetica** | Sans-Serif | Universalmente disponível, testada |
| **Verdana** | Sans-Serif | Letras largas, boa legibilidade |
| **Georgia** | Serif | Serif legível para body text longo |

### Características de Fontes Acessíveis

| Característica | Recomendação | Por quê |
|---|---|---|
| **x-height** | Grande | Letras minúsculas mais legíveis |
| **Abertura de letras** | Ampla | "c" e "e" bem abertos |
| **Distinção de caracteres** | Clara | "I" (i), "l" (L), "1" distintos |
| **Espaçamento** | Generoso | Letras não se tocam |
| **Peso** | Regular ou Medium | Light é difícil de ler |
| **Italic** | Evitar para body | Italic reduz legibilidade |
| **All caps** | Evitar para texto longo | Mais difícil de ler que title case |
| **Letter spacing** | Normal ou +0.02em | Não comprimir texto |

---

## 6. Touch Targets — Tamanhos Mínimos

### Requisitos por Diretriz

| Diretriz | Tamanho Mínimo | Nível |
|---|---|---|
| **WCAG 2.1** | 24 x 24 CSS pixels | AAA (2.5.5) |
| **WCAG 2.2** | 24 x 24 CSS pixels | AA (2.5.8) — mínimo |
| **Apple HIG** | 44 x 44 points | Recomendado |
| **Material Design** | 48 x 48 dp | Recomendado |
| **Microsoft** | 34 x 34 pixels | Mínimo |

### Recomendações Práticas

| Contexto | Tamanho Mínimo | Espaçamento |
|---|---|---|---|
| **Botões primários** | 48 x 48px | 8px+ entre botões |
| **Ícones clicáveis** | 44 x 44px área | Mesmo que ícone seja 24px |
| **Links inline** | Altura de linha + padding | Separar por pelo menos 2-3px |
| **Radio/Checkbox** | 24 x 24px mínimo | 44 x 44px área de toque |
| **Menu items** | 48px altura | 44px mínimo |
| **Bottom nav items** | 48 x 48px | Espaçamento adequado |
| **Form inputs** | 48px altura mínimo | Fácil de tocar |

### Regra Prática

> Se você consegue tocar o elemento com o polegar sem tocar acidentalmente em outro elemento adjacente, o tamanho está adequado.

---

## 7. Considerações para Screen Readers

### HTML Semântico — Base da Acessibilidade

| Elemento | Uso Correto | Alternativa Incorreta |
|---|---|---|
| `<button>` | Elementos clicáveis | `<div onclick>` |
| `<a href>` | Links para navegar | `<span onclick>` |
| `<nav>` | Navegação principal | `<div class="nav">` |
| `<main>` | Conteúdo principal | `<div class="content">` |
| `<h1>` a `<h6>` | Hierarquia de headings | `<div class="heading">` |
| `<label>` | Label de input | `<span>` perto do input |
| `<ul>/<ol>` | Listas | `<div>` com bullets manuais |
| `<table>` | Dados tabulares | `<div>` grid layout |
| `<figure>/<figcaption>` | Imagem com legenda | `<img>` com texto depois |

### ARIA — Quando Usar

| Atributo | Uso | Exemplo |
|---|---|---|
| `aria-label` | Label quando texto visível não existe | `<button aria-label="Fechar menu">` |
| `aria-labelledby` | Referencia elemento que é o label | `<div aria-labelledby="section-title">` |
| `aria-describedby` | Referência a descrição adicional | `<input aria-describedby="email-help">` |
| `aria-hidden="true"` | Esconder de screen readers | `<div aria-hidden="true"> (decorativo)` |
| `aria-expanded` | Estado de elemento expansível | `<button aria-expanded="false">` |
| `aria-live` | Região que atualiza dinamicamente | `<div aria-live="polite">` |
| `aria-current="page"` | Item de navegação ativo | `<a aria-current="page">Home</a>` |
| `role="alert"` | Mensagens de alerta | `<div role="alert">Erro no formulário</div>` |
| `role="dialog"` | Modais e dialogs | `<div role="dialog">` |
| `role="navigation"` | Quando `<nav>` não pode ser usado | `<div role="navigation">` |

### Ordem de Leitura

| Prática | Recomendação |
|---|---|
| **DOM order** | A ordem no HTML deve ser a ordem de leitura |
| **Tab order** | `tabindex="0"` para elementos custom interativos |
| **Nunca usar** | `tabindex` positivo (quebra ordem natural) |
| **Skip links** | Link "Pular para conteúdo principal" no início da página |
| **Heading hierarchy** | H1 -> H2 -> H3, sem pular níveis |

### Texto Alternativo para Imagens

| Tipo de Imagem | Alt Text |
|---|---|
| **Informativa** | Descrever o conteúdo: "Gráfico de vendas Q1 2025 mostrando crescimento de 15%" |
| **Decorativa** | `alt=""` (vazio) — screen reader ignora |
| **Funcional (botão)** | Descrever a ação: `alt="Buscar"` |
| **Texto na imagem** | Incluir o texto: `alt="Promoção: 50% OFF"` |
| **Complexa (gráfico)** | Alt breve + descrição longa em `aria-describedby` ou texto visível |
| **Ícone** | `alt=""` se decorativo, ou label descritivo se funcional |
| **Avatar de usuário** | `alt="Foto de Maria Silva"` |

---

## 8. Acessibilidade por Tipo de Deficiência

### Deficiência Visual

| Tipo | Adaptações Necessárias |
|---|---|
| **Cegueira total** | Screen reader, alt text, HTML semântico, skip links |
| **Baixa visão** | Zoom até 200%, contraste alto, fontes grandes |
| **Daltonismo** | Não depender só de cor, padrões em gráficos, icons de estado |
| **Visão de cores reduzida** | Contraste 7:1+, não usar só cor para informação |

### Deficiência Auditiva

| Tipo | Adaptações Necessárias |
|---|---|
| **Surdez total** | Legendas, transcrições, conteúdo visual alternativo ao áudio |
| **Baixa audição** | Legendas, controle de volume, alertas visuais |
| **Processamento auditivo** | Legendas, texto alternativo a instruções por áudio |

### Deficiência Motora

| Tipo | Adaptações Necessárias |
|---|---|
| **Mobilidade reduzida** | Navegação por teclado, touch targets grandes, tempo estendido |
| **Tremores** | Botões grandes, tolerância a cliques acidentais, undo |
| **Sem uso de mouse** | Navegação 100% por teclado, skip links, focus visível |
| **Controle por voz** | Labels claros, estrutura lógica, landmarks |

### Deficiência Cognitiva

| Tipo | Adaptações Necessárias |
|---|---|
| **Dislexia** | Fontes legíveis, espaçamento adequado, não usar italic |
| **TDAH** | Layout limpo, sem distrações, foco no conteúdo principal |
| **Autismo** | Previsibilidade, sem animações inesperadas, conteúdo claro |
| **Deficiência intelectual** | Linguagem simples, instruções passo a passo, ícones de apoio |

---

## 9. Checklist de Acessibilidade WCAG 2.2 AA

### Perceptível

- [ ] **1.1.1** Alt text em todas as imagens não decorativas
- [ ] **1.2.2** Legendas em todos os vídeos com áudio
- [ ] **1.2.3** Audiodescrição ou transcript para vídeos
- [ ] **1.3.1** Estrutura semântica correta (headings, lists, landmarks)
- [ ] **1.3.2** Ordem de leitura lógica
- [ ] **1.3.3** Informação não transmitida apenas por cor/forma
- [ ] **1.3.4** Orientação não bloqueada (portrait/landscape)
- [ ] **1.3.5** Identidade do input via label
- [ ] **1.4.1** Cor não é o único indicador visual
- [ ] **1.4.2** Controle de áudio automático
- [ ] **1.4.3** Contraste mínimo 4.5:1 (texto normal)
- [ ] **1.4.4** Redimensionamento de texto até 200%
- [ ] **1.4.5** Texto como imagem apenas quando essencial
- [ ] **1.4.10** Reflow sem scroll horizontal em 320px
- [ ] **1.4.11** Contraste de componentes UI 3:1
- [ ] **1.4.12** Line height 1.5, paragraph spacing 2x

### Operável

- [ ] **2.1.1** Tudo operável por teclado
- [ ] **2.1.2** Sem keyboard trap
- [ ] **2.2.1** Ajustar tempo limite
- [ ] **2.2.2** Pausar/parar conteúdo em movimento
- [ ] **2.3.1** Sem flashing mais de 3x por segundo
- [ ] **2.4.1** Skip links
- [ ] **2.4.2** Page titles descritivos
- [ ] **2.4.3** Focus order lógica
- [ ] **2.4.4** Links com propósito claro
- [ ] **2.4.7** Focus indicator visível
- [ ] **2.5.1** Gestos de um dedo
- [ ] **2.5.2** Cancelamento de toque
- [ ] **2.5.3** Label acessível igual ao visível
- [ ] **2.5.7** Arrastar tem alternativa de clique
- [ ] **2.5.8** Touch target mínimo 24x24px

### Compreensível

- [ ] **3.1.1** Idioma da página definido
- [ ] **3.1.2** Idioma de trechos definido
- [ ] **3.2.1** Foco não causa mudança de contexto
- [ ] **3.2.2** Input não causa mudança automática
- [ ] **3.2.3** Navegação consistente
- [ ] **3.2.4** Identificação consistente
- [ ] **3.3.1** Identificação de erros em formulários
- [ ] **3.3.2** Labels e instruções para inputs
- [ ] **3.3.3** Sugestão de correção de erros
- [ ] **3.3.4** Prevenção de erros (confirmar, desfazer)

### Robusto

- [ ] **4.1.1** HTML válido
- [ ] **4.1.2** Nome, papel e valor para componentes custom
- [ ] **4.1.3** Mensagens de status acessíveis (aria-live)

---

## 10. Ferramentas de Teste de Acessibilidade

### Ferramentas Automatizadas

| Ferramenta | Tipo | URL | O que Faz |
|---|---|---|---|
| **axe DevTools** | Browser Extension | deque.com/axe | Audit automatizado no browser |
| **Lighthouse** | Browser DevTools | Chrome DevTools | Audit de performance + a11y |
| **WAVE** | Browser Extension/Website | wave.webaim.org | Visualização de issues na página |
| **Pa11y** | CLI | pa11y.org | Teste automatizado via linha de comando |
| **Accessibility Insights** | Browser Extension | accessibilityinsights.io | Microsoft — audit completo |
| **Stark** | Figma/Sketch Plugin | usestark.com | Contraste, simulação de daltonismo |
| **A11y Color Palette** | Web | a11y-color-palette.com | Verificar paleta |

### Ferramentas de Simulação

| Ferramenta | Uso | URL |
|---|---|---|
| **NoCoffee** | Simular deficiências visuais | Chrome extension |
| **Sim Daltonism** | Simular tipos de daltonismo | macOS app |
| **Color Oracle** | Simular daltonismo em tempo real | colororacle.org |
| **Funkify** | Simular várias deficiências | funkify.org |

### Screen Readers para Teste

| Screen Reader | Plataforma | URL |
|---|---|---|
| **VoiceOver** | macOS / iOS | Built-in (Cmd+F5) |
| **NVDA** | Windows | nvaccess.org (gratuito) |
| **JAWS** | Windows | freedomscientific.com (pago) |
| **TalkBack** | Android | Built-in nas configurações |
| **Narrator** | Windows | Built-in (Win+Ctrl+Enter) |

### Checklists e Guias

| Recurso | URL |
|---|---|
| **WCAG 2.2 Quick Reference** | w3.org/WAI/WCAG22/quickref/ |
| **A11y Project Checklist** | a11yproject.com/checklist/ |
| **Gov.uk Accessibility** | gov.uk/guidance/accessibility-requirements |
| **MDN Accessibility** | developer.mozilla.org/en-US/docs/Web/Accessibility |

---

## 11. Boas Práticas Gerais

### Regras de Ouro

| Regra | Descrição |
|---|---|
| **Sem cor sozinha** | Nunca usar apenas cor para transmitir informação |
| **HTML semântico** | Usar elementos corretos é 80% da acessibilidade |
| **Focus visível** | Usuário de teclado precisa saber onde está |
| **Alt text sempre** | Toda imagem não decorativa precisa de descrição |
| **Labels em inputs** | Todo campo de formulário precisa de label visível |
| **Contraste testado** | Verificar todas as combinações de cor de texto/fundo |
| **Testar com teclado** | Navegar toda a interface só com Tab, Enter, Space, Arrow keys |
| **Testar com screen reader** | Pelo menos VoiceOver (mac) ou NVDA (Windows) |
| **Zoom funciona** | Testar com zoom em 200% |
| **Animação respeitosa** | Respeitar prefers-reduced-motion |

### Erros Comuns

| Erro | Problema | Correção |
|---|---|---|
| Placeholder como único label | Desaparece ao digitar | Label visível + placeholder opcional |
| "Clique aqui" como link | Sem contexto fora da página | "Leia mais sobre X" |
| PDF como conteúdo principal | Inacessível para muitos | HTML como primário, PDF como extra |
| Carousel automático | Timing incontrolável | Manual ou com pausa |
| Menu só com hover | Inacessível por teclado | Hover + focus + click |
| Cor de erro sem ícone | Daltonismo não distingue | Cor + ícone + texto |
| Imagem de texto | Inacessível, não zoom | Texto real + CSS styling |
| Tabindex positivo | Quebra ordem de tab | tabindex="0" ou remover |

---

## 12. Legislação e Regulamentação

| Regulamentação | Região | Ano | Requisitos |
|---|---|---|---|
| **WCAG 2.1 AA** | Internacional | 2018 | Padrão global de referência |
| **WCAG 2.2 AA** | Internacional | 2023 | Atualização com novos critérios |
| **Section 508** | EUA | 2017 (rev.) | WCAG 2.0 AA para governo federal |
| **ADA Title III** | EUA | 1990 (interpretado) | Acessibilidade em lugares públicos (incluindo web) |
| **EAA (European Accessibility Act)** | UE | 2025 | WCAG 2.1 AA para produtos e serviços digitais |
| **Lei Brasileira de Inclusão** | Brasil | 2015 | e-MAG (Modelo de Acessibilidade) |
| **Acessibilidade Digital (Decreto)** | Brasil | 2004/2007 | e-MAG para sites do governo |
| **EN 301 549** | UE | 2021 | WCAG 2.1 AA para procurement público |

---

*Documento criado para o squad pedro-design. Última atualização: Abril 2026.*
