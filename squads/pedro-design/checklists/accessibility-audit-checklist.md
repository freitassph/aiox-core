---
checklist: "Accessibility Audit Checklist"
responsavel: "@pdg-auditor"
responsable_type: agent
atomic_layer: checklist
applies_to:
  - ui-accessibility-review
  - product-design-review
  - frontend-accessibility-qa
---

# Accessibility Audit Checklist

Checklist de validação para auditoria de acessibilidade completa. Zero mediocridade tolerada.

## Section 1: Color & Contrast (WCAG AA)
- [ ] Contraste de texto normal atende ratio minimo de 4.5:1
- [ ] Contraste de texto grande atende ratio minimo de 3:1
- [ ] Contraste de elementos UI (botoes, icones, bordas) atende 3:1
- [ ] Contraste de componentes graficos essenciais atende 3:1
- [ ] Cor nao e o unico meio de transmitir informacao
- [ ] Links sao distinguiveis por algo alem da cor (sublinhado, icon)
- [ ] Estados de foco sao visiveis e com contraste adequado
- [ ] Paleta de cores testada em modo daltonico (protanopia, deuteranopia, tritanopia)
- [ ] Gradientes de fundo nao comprometem legibilidade do texto
- [ ] Imagens com texto embutido possuem contraste suficiente
- [ ] Modo escuro (dark mode) mantem ratios de contraste adequados
- [ ] Indicadores de erro/sucesso/aviso usam cor + icon + texto

## Section 2: Typography
- [ ] Tamanho minimo de fonte para corpo de texto e 16px
- [ ] Altura de linha (line-height) minima de 1.5 para texto corrido
- [ ] Espacamento entre letras (letter-spacing) e ajustavel sem quebrar layout
- [ ] Espacamento entre palavras (word-spacing) e ajustavel
- [ ] Espacamento entre paragrafos (paragraph-spacing) e adequado
- [ ] Texto permanece legivel ate 200% de zoom
- [ ] Fonte utilizada possui boa legibilidade em tamanhos pequenos
- [ ] Pesos de fonte (font-weight) criam hierarquia visual clara
- [ ] Texto em italico nao e usado como unico indicador de enfase
- [ ] Texto justificado e evitado (cria rios de espacamento irregular)
- [ ] Abreviacoes e siglas possuem forma completa disponivel

## Section 3: Navigation & Interaction
- [ ] Navegacao por menus e consistente em todas as paginas
- [ ] Breadcrumbs ou indicador de localizacao estao presentes
- [ ] Ordem de tabulacao segue sequencia logica e intuitiva
- [ ] Links de "pular para conteudo" (skip links) estao disponiveis
- [ ] Targets de toque tem tamanho minimo de 44x44 CSS pixels
- [ ] Espacamento entre targets interativos evita toques acidentais
- [ ] Gestos complexos (multitoque, swipe) possuem alternativa simples
- [ ] Movimentos baseados em path (arrastar) possuem alternativa por botao
- [ ] Nao ha timeouts que causem perda de dados sem aviso previo
- [ ] Sessoes com timeout permitem extensao ou salvamento automatico
- [ ] Redirecionamentos inesperados possuem aviso previo
- [ ] Formularios com multiplas etapas possuem indicador de progresso

## Section 4: Screen Reader
- [ ] Todos os elementos de imagem possuem alt text significativo
- [ ] Imagens decorativas possuem alt="" (vazio)
- [ ] Imagens complexas (graficos, diagramas) possuem descricao longa
- [ ] Atributos ARIA sao usados corretamente quando necessarios
- [ ] Roles ARIA correspondem ao comportamento visual do componente
- [ ] aria-label e aria-labelledby sao aplicados em elementos sem texto visivel
- [ ] aria-describedby referencia descricoes adicionais corretamente
- [ ] aria-live regions sao configuradas para atualizacoes dinamicas
- [ ] aria-hidden e aplicado em elementos decorativos repetitivos
- [ ] Landmarks ARIA (main, nav, search, complementary) estao presentes
- [ ] Formularios possuem labels associados via for/id ou aria-label
- [ ] Mensagens de erro de formulario sao anunciadas por screen reader
- [ ] Tabelas de dados possuem th, scope e caption adequados
- [ ] Icones de fontes (icon fonts) sao escondidos de screen readers
- [ ] Notificacoes toast/alertas sao anunciadas corretamente

## Section 5: Keyboard Navigation
- [ ] Toda funcionalidade e acessavel via teclado (Tab, Enter, Space, Esc)
- [ ] Indicador de foco (focus ring) e sempre visivel e claro
- [ ] Ordem de tabulacao corresponde a ordem visual dos elementos
- [ ] Nao ha armadilhas de foco (focus traps) sem intencionalidade
- [ ] Modais e dialogs prendem foco corretamente e retornam ao disparador
- [ ] Menus dropdown sao operaveis por teclado (setas, Esc)
- [ ] Carrosseis e sliders sao controlaveis por teclado
- [ ] Tabs e acordeoes seguem padrao WAI-ARIA Authoring Practices
- [ ] Arrastar e soltar (drag & drop) possui alternativa por teclado
- [ ] Canvas e elementos customizados possuem fallback de teclado
- [ ] Atalhos de teclado podem ser desativados ou remapeados
- [ ] Nao ha conflito entre atalhos de teclado e de screen reader

## Section 6: Cognitive Accessibility
- [ ] Linguagem e clara, simples e direta (nivel de leitura basico)
- [ ] Instrucoes nao dependem exclusivamente de orientacao espacial ("clique a direita")
- [ ] Formularios agrupam campos relacionados com fieldset/legend
- [ ] Campos de formulario possuem placeholders e labels persistentes
- [ ] Mensagens de erro sao especificas e indicam como corrigir
- [ ] Processos com multiplas etapas possuem progresso visivel
- [ ] Nao ha piscamento de conteudo superior a 3 vezes por segundo
- [ ] Animacoes automaticas podem ser pausadas ou desativadas
- [ ] Layout e previsivel e consistente entre paginas
- [ ] Navegacao e rotulos sao consistentes e familiares
- [ ] Mecanismos de busca, indice e mapa do sitio estao disponiveis
- [ ] Dados de entrada (input) sao lembrados ou pre-preenchidos quando possivel
- [ ] Tempo limite para acoes e ajustavel ou extensivel
- [ ] Controles de sessao e autenticacao sao claros e simples

## Section 7: Testing
- [ ] Teste realizado com pelo menos 2 screen readers diferentes
- [ ] Teste de navegacao completo realizado apenas com teclado
- [ ] Teste de contraste validado com ferramenta automatizada (axe, Lighthouse)
- [ ] Teste de zoom ate 200% realizado sem perda de conteudo ou funcionalidade
- [ ] Teste com emuladores de deficiencia de cor realizado
- [ ] Teste de reflow (320px largura) sem scroll horizontal
- [ ] Teste de focos visiveis realizado em todos os estados interativos
- [ ] Teste com usuarios reais com deficiencia foi conduzido
- [ ] Auditoria WCAG 2.1 Nivel AA completa documentada
- [ ] Relatorio de problemas com severidade e prioridade gerado
- [ ] Testes de regressao de acessibilidade incluidos no CI/CD
- [ ] Ferramenta automatizada de acessibilidade integrada ao pipeline
