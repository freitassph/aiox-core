# Catálogo de Design Systems Notáveis

> Documento de referência para o squad pedro-design. Contém 15+ design systems públicos com princípios, componentes, lições e links.

---

## 1. O que é um Design System?

Um Design System é uma coleção de componentes reutilizáveis, padrões, tokens de design e documentação guiada por padrões e propósito, que permitem equipes construir e manter produtos digitais de forma consistente e eficiente.

### Componentes de um Design System

| Elemento | Descrição | Exemplo |
|---|---|---|
| **Design Tokens** | Variáveis de design (cores, espaçamento, tipografia) | `--color-primary: #1E3A5F` |
| **Componentes** | Elementos de UI reutilizáveis | Button, Input, Modal, Card |
| **Patterns** | Soluções recorrentes de UX | Formulários, navegação, listas |
| **Guidelines** | Regras e melhores práticas | Quando usar modal vs. drawer |
| **Princípios** | Valores e filosofia do sistema | "Clareza antes de tudo" |
| **Icons** | Biblioteca de ícones consistente | 200+ ícones em estilo único |
| **Templates** | Layouts pré-construídos | Dashboard, landing page, settings |

---

## 2. Catálogo de Design Systems Públicos

### 2.1 Material Design 3 (Google)

| Campo | Detalhe |
|---|---|
| **URL** | m3.material.io |
| **Empresa** | Google |
| **Ano de Lançamento** | 2014 (v1), 2021 (v3/Material You) |
| **Componentes** | 100+ componentes |
| **Plataformas** | Android, Web, iOS, Flutter |
| **Princípios** | 1. Personalização dinâmica 2. Flexibilidade 3. Consistência |
| **Destaque** | Cores dinâmicas baseadas no wallpaper (Material You) |
| **Tecnologia** | Material Components (MDC), Jetpack Compose |
| **Design Tokens** | Sim — cores, tipografia, shape, elevation |
| **Open Source** | Sim (GitHub: material-components) |

**Componentes Notáveis:**
- FAB (Floating Action Button) — icônico do Material
- Navigation Drawer e Bottom Navigation
- Chips (filter, choice, input, suggestion)
- Cards (elevated, filled, outlined)

**Lições Aprendidas:**
- Material Design 2 foi criticado por ser "muito Google" — M3 corrigiu com personalização
- A abordagem "one size fits all" não funciona; M3 oferece mais customização
- Elevation com sombras foi substituído por surface tonal em M3

### 2.2 Apple Human Interface Guidelines (HIG)

| Campo | Detalhe |
|---|---|
| **URL** | developer.apple.com/design/human-interface-guidelines |
| **Empresa** | Apple |
| **Ano de Lançamento** | 2013 (iOS 7 redesign) |
| **Componentes** | 80+ componentes nativos |
| **Plataformas** | iOS, iPadOS, macOS, watchOS, tvOS, visionOS |
| **Princípios** | 1. Estética 2. Consistência 3. Integridade 4. Feedback |
| **Destaque** | SF Symbols (2000+ ícones), visão espacial (visionOS) |
| **Tecnologia** | SwiftUI, UIKit |
| **Design Tokens** | Sim — System Colors, Dynamic Type |
| **Open Source** | Não (mas SF Symbols é gratuito) |

**Componentes Notáveis:**
- SF Symbols — 5000+ ícones escaláveis
- NavigationView e TabView
- Sheet e Full Screen Cover
- Haptic Feedback patterns

**Lições Aprendidas:**
- A Apple prioriza acessibilidade nativa em todos os componentes
- Platform-specific é melhor que cross-platform para experiência nativa
- A introdução do visionOS expandiu guidelines para spatial computing

### 2.3 IBM Carbon Design System

| Campo | Detalhe |
|---|---|
| **URL** | carbondesignsystem.com |
| **Empresa** | IBM |
| **Ano de Lançamento** | 2017 |
| **Componentes** | 80+ componentes |
| **Plataformas** | Web, React, Angular, Vue |
| **Princípios** | 1. Work together 2. Obsess over details 3. Ship, iterate, repeat |
| **Destaque** | Foco em enterprise, acessibilidade, data visualization |
| **Tecnologia** | React (carbon-components-react), Web Components |
| **Design Tokens** | Sim — completo, com temas (white, gray 10/80/90/100) |
| **Open Source** | Sim (GitHub: carbon-design-system/carbon) |

**Componentes Notáveis:**
- Data Table avançada com sorting, filtering, batch actions
- Tornado charts e gráficos de dados integrados
- Fluid mode para layouts responsivos
- AI-powered search

**Lições Aprendidas:**
- Design systems enterprise precisam de documentação extensiva
- Temas Gray oferecem alternância entre light/dock com nuances
- Componentes de dados são tão importantes quanto componentes de UI

### 2.4 Shopify Polaris

| Campo | Detalhe |
|---|---|
| **URL** | polaris.shopify.com |
| **Empresa** | Shopify |
| **Ano de Lançamento** | 2016 |
| **Componentes** | 80+ componentes |
| **Plataformas** | Web, React |
| **Princípios** | 1. Put merchants first 2. Earn trust 3. Embrace constraints |
| **Destaque** | Content guidelines excepcionais, UX writing integrado |
| **Tecnologia** | React (@shopify/polaris) |
| **Design Tokens** | Sim — tokens CSS com nomes semânticos |
| **Open Source** | Sim (GitHub: shopify/polaris) |

**Componentes Notáveis:**
- Resource List — padrão Shopify para listar itens
- Bulk Actions pattern
- Empty states com conteúdo educativo
- Settings patterns

**Lições Aprendidas:**
- Content design é tão importante quanto visual design
- "Make color a last resort" — não depender apenas de cor para significado
- Documentação de UX writing é essencial para consistência

### 2.5 Atlassian Design System

| Campo | Detalhe |
|---|---|
| **URL** | atlassian.design |
| **Empresa** | Atlassian |
| **Ano de Lançamento** | 2017 (redesign completo em 2022) |
| **Componentes** | 60+ componentes |
| **Plataformas** | Web, React |
| **Princípios** | 1. Fundamental 2. Familiar 3. Flexible |
| **Destaque** | Padrões de comunicação, tom de voz, iconografia |
| **Tecnologia** | React (@atlaskit) |
| **Design Tokens** | Sim — Design Tokens format |
| **Open Source** | Parcialmente (Atlaskit) |

**Componentes Notáveis:**
- Page layout com sidebar e content area
- Flag (toast notifications)
- Lozenge (status badges)
- Avatar group com overflow

**Lições Aprendidas:**
- Redesenho de 2022 unificou Jira, Confluence, Trello visualmente
- "Don't make me think" aplicado a cada componente
- Padrões de conteúdo ajudam redatores além de designers

### 2.6 GitHub Primer

| Campo | Detalhe |
|---|---|
| **URL** | primer.style |
| **Empresa** | GitHub |
| **Ano de Lançamento** | 2016 |
| **Componentes** | 50+ componentes |
| **Plataformas** | Web, React, CSS |
| **Princípios** | 1. Familiar 2. Conversational 3. Consistent 4. Inclusive |
| **Destaque** | Componentes de código/dados, markdown rendering |
| **Tecnologia** | React, CSS Utilities, Styled System |
| **Design Tokens** | Sim — tokens JSON com aliases |
| **Open Source** | Sim (GitHub: primer/design) |

**Componentes Notáveis:**
- Branch name component
- Timeline (commits, issues)
- Code block com syntax highlighting
- Flash messages

**Lições Aprendidas:**
- Design systems para devs precisam de componentes de código
- Utility classes + components híbrido funciona bem
- "Conversational" como princípio guia é único

### 2.7 Salesforce Lightning Design System

| Campo | Detalhe |
|---|---|
| **URL** | lightningdesignsystem.com |
| **Empresa** | Salesforce |
| **Ano de Lançamento** | 2015 |
| **Componentes** | 80+ componentes |
| **Plataformas** | Web, Lightning Web Components, Aura |
| **Princípios** | 1. Clear 2. Efficient 3. Consistent 4. Beautiful |
| **Destaque** | Foco em produtividade enterprise, CRM patterns |
| **Tecnologia** | Lightning Web Components (LWC) |
| **Design Tokens** | Sim — extensivo, customizável |
| **Open Source** | Sim (CSS framework é gratuito) |

**Componentes Notáveis:**
- DataTable inline editing
- Utility bar
- Activity timeline
- Record detail pages

**Lições Aprendidas:**
- Enterprise precisa de componentes de dados complexos
- LWC mostrou que Web Components nativos funcionam em escala
- Design tokens customizáveis permitem white-label

### 2.8 Microsoft Fluent UI

| Campo | Detalhe |
|---|---|
| **URL** | fluentui.microsoft.com |
| **Empresa** | Microsoft |
| **Ano de Lançamento** | 2020 (sucessor do Office UI Fabric) |
| **Componentes** | 80+ componentes |
| **Plataformas** | Web, React, Windows (WinUI), iOS, Android |
| **Princípios** | 1. Familiar 2. Adaptable 3. Beautiful |
| **Destaque** | Design fluído, motion, profundidade, acrílico |
| **Tecnologia** | React (Fluent UI React v9), Web Components |
| **Design Tokens** | Sim — tokens com fallback chains |
| **Open Source** | Sim (GitHub: microsoft/fluentui) |

**Componentes Notáveis:**
- Persona (avatar + info)
- Teaching bubble (onboarding tooltips)
- Command bar
- DetailsList (tabela avançada)

**Lições Aprendidas:**
- Motion é parte essencial do design, não apenas visual
- Acrylic material (blur + noise) é signature do Fluent
- v9 foi uma reescrita completa com foco em performance

### 2.9 Ant Design (Alibaba/Ant Group)

| Campo | Detalhe |
|---|---|
| **URL** | ant.design |
| **Empresa** | Ant Group (Alibaba) |
| **Ano de Lançamento** | 2015 |
| **Componentes** | 90+ componentes |
| **Plataformas** | Web, React, Vue, Angular |
| **Princípios** | 1. Natural 2. Certain 3. Meaningful 4. Growing |
| **Destaque** | Mais popular design system React do mundo, ecossistema vasto |
| **Tecnologia** | React (antd), Vue (ant-design-vue) |
| **Design Tokens** | Sim — Less variables, CSS variables (v5) |
| **Open Source** | Sim (GitHub: ant-design/ant-design, 95k+ stars) |

**Componentes Notáveis:**
- Table com paginação, sorting, filtering inline
- Form com validação complexa
- Tree Select e Cascader
- ProComponents (templates avançados)

**Lições Aprendidas:**
- Ecossistema (ProComponents, Charts, Tables) agrega mais que UI base
- Popularidade global com foco em enterprise
- v5 migrou para CSS variables de Less

### 2.10 GOV.UK Design System

| Campo | Detalhe |
|---|---|
| **URL** | design-system.service.gov.uk |
| **Empresa** | UK Government (GDS) |
| **Ano de Lançamento** | 2017 |
| **Componentes** | 50+ componentes |
| **Plataformas** | Web (HTML/CSS/JS vanilla) |
| **Princípios** | 1. Start with user needs 2. Do less 3. Design with data |
| **Destaque** | Referência global em acessibilidade e inclusão digital |
| **Tecnologia** | HTML, CSS, JavaScript vanilla |
| **Design Tokens** | Sim — Sass variables |
| **Open Source** | Sim (MIT License) |

**Componentes Notáveis:**
- Date input pattern
- Check your answers pattern
- Task list pattern
- Notification banner

**Lições Aprendidas:**
- Acessibilidade não é feature, é requisito base
- Vanilla HTML/CSS é mais acessível que frameworks pesados
- Research-driven design com usuários reais é essencial
- O modelo foi copiado por 15+ governos mundialmente

### 2.11 Adobe Spectrum

| Campo | Detalhe |
|---|---|
| **URL** | spectrum.adobe.com |
| **Empresa** | Adobe |
| **Ano de Lançamento** | 2019 |
| **Componentes** | 60+ componentes |
| **Plataformas** | Web, React, iOS, Android |
| **Princípios** | 1. Purposeful 2. Coherent 3. Inclusive 4. Human |
| **Destaque** | Consistência entre 30+ produtos Adobe (Photoshop, Illustrator, etc.) |
| **Tecnologia** | React (@adobe/react-spectrum), CSS |
| **Design Tokens** | Sim — extensivo, temas múltiplos |
| **Open Source** | Sim (GitHub: adobe/react-spectrum) |

**Componentes Notáveis:**
- Color area/wheel/slider (foco em design tools)
- Inline editing
- Drag and drop patterns
- Tool panels

**Lições Aprendidas:**
- Unificar 30+ produtos requer tokens extremamente granulares
- Temas (Light, Dark, Lightest, Darkest, Wireframe) são essenciais
- Componentes para ferramentas criativas têm requisitos únicos

### 2.12 Mailchimp Content Patterns

| Campo | Detalhe |
|---|---|
| **URL** | mailchimp.com/about/design-system/ |
| **Empresa** | Mailchimp (Intuit) |
| **Ano de Lançamento** | 2016 (atualizado continuamente) |
| **Componentes** | 40+ componentes |
| **Plataformas** | Web |
| **Princípios** | 1. Clear 2. Concise 3. Human 4. Useful |
| **Destaque** | Personalidade de marca única e forte, UX writing excepcional |
| **Tecnologia** | React, CSS customizado |
| **Design Tokens** | Sim |
| **Open Source** | Não |

**Componentes Notáveis:**
- Illustration system único
- Custom 404 pages
- Empty states com personalidade
- Onboarding flows

**Lições Aprendidas:**
- Personalidade de marca pode coexistir com consistência
- UX writing define a experiência mais que pixels
- Ilustrações proprietárias criam diferenciação

### 2.13 Salesforce Einstein Design System

| Campo | Detalhe |
|---|---|
| **URL** | Integrado ao Lightning Design System |
| **Empresa** | Salesforce |
| **Componentes** | 20+ componentes AI-specific |
| **Princípios** | 1. Transparent AI 2. Helpful 3. Trustworthy |
| **Destaque** | Padrões de UX para interfaces com IA |

### 2.14 Vox Media Chorus

| Campo | Detalhe |
|---|---|
| **URL** | Não público (interno) |
| **Empresa** | Vox Media |
| **Componentes** | 60+ componentes |
| **Princípios** | 1. Content first 2. Responsive 3. Performant |
| **Destaque** | Foco em publicação de conteúdo, performance |

### 2.15 Uber Base Web

| Campo | Detalhe |
|---|---|
| **URL** | baseweb.design |
| **Empresa** | Uber |
| **Ano de Lançamento** | 2018 |
| **Componentes** | 60+ componentes |
| **Plataformas** | Web, React |
| **Princípios** | 1. Accessible 2. International 3. Themeable |
| **Destaque** | Styletron (CSS-in-JS performático), RTL nativo |
| **Tecnologia** | React, Styletron |
| **Design Tokens** | Sim — ThemeProvider |
| **Open Source** | Sim (GitHub: uber/baseweb, 9k+ stars) |

**Componentes Notáveis:**
- Date range picker
- Phone input com country codes (i18n)
- Toast notifications
- Select com virtualização

**Lições Aprendidas:**
- Internacionalização deve ser pensada desde o início (RTL, i18n)
- CSS-in-JS com Styletron mostrou que performance é possível
- Componentes globais precisam de suporte a formatos locais

### 2.16 Shopify Merlin

| Campo | Detalhe |
|---|---|
| **URL** | Interno (Polaris é a versão externa) |
| **Empresa** | Shopify |
| **Componentes** | 100+ (incluindo Polaris + extras internos) |
| **Destaque** | Patterns de commerce, checkout, inventory |

### 2.17 Audi UI Design System

| Campo | Detalhe |
|---|---|
| **URL** | audi.com/ci (parcialmente público) |
| **Empresa** | Audi |
| **Princípios** | 1. Progressive 2. Technical 3. Emotional |
| **Destaque** | Design system automotivo para interfaces de veículos e web |
| **Componentes** | 50+ componentes |

**Lições Aprendidas:**
- Interfaces automotivas têm restrições de segurança críticas
- Dark mode é padrão, não opção, em interfaces de carro
- Minimalismo é necessidade funcional (motorista não pode ler muito)

### 2.18 IBM Carbon for AI

| Campo | Detalhe |
|---|---|
| **URL** | carbondesignsystem.com/guidelines/ai-overview |
| **Empresa** | IBM |
| **Componentes** | 15+ componentes AI-specific |
| **Princípios** | 1. Explainable 2. Controllable 3. Trustworthy 4. Scalable |
| **Destaque** | Padrões para interfaces de IA: confidence indicators, explanation panels |

**Componentes Notáveis:**
- AI confidence indicator (barra de confiança da IA)
- Explainability panel
- Human-in-the-loop controls
- Data bias visualization

**Lições Aprendidas:**
- Interfaces de IA precisam mostrar incerteza, não esconder
- Usuários precisam de controle sobre decisões da IA
- Transparência constrói mais confiança que perfeição aparente

---

## 3. Comparativo de Design Systems

### Por Número de Componentes

| Design System | Componentes | Open Source | Framework Principal |
|---|---|---|---|
| Material Design 3 | 100+ | Sim | Web Components / Compose |
| Ant Design | 90+ | Sim | React |
| Shopify Polaris | 80+ | Sim | React |
| IBM Carbon | 80+ | Sim | React |
| Salesforce Lightning | 80+ | Parcial | LWC |
| Microsoft Fluent UI | 80+ | Sim | React |
| Apple HIG | 80+ | Não | SwiftUI |
| GitHub Primer | 50+ | Sim | React |
| GOV.UK | 50+ | Sim | Vanilla |
| Atlassian | 60+ | Parcial | React |
| Adobe Spectrum | 60+ | Sim | React |
| Uber Base Web | 60+ | Sim | React |
| Mailchimp | 40+ | Não | React |

### Por Maturidade e Adoção

| Design System | Anos Ativo | Empresas Usando | Stars GitHub |
|---|---|---|---|
| Material Design | 12 | Milhares | 18k+ |
| Ant Design | 11 | Milhares | 95k+ |
| Bootstrap* | 14 | Milhões | 170k+ |
| Apple HIG | 13 | Todo ecossistema Apple | N/A |
| IBM Carbon | 9 | Enterprise IBM | 7k+ |
| Shopify Polaris | 10 | Shopify + parceiros | 4k+ |
| GitHub Primer | 10 | GitHub | 27k+ |
| Microsoft Fluent UI | 6 | Microsoft + open source | 16k+ |
| GOV.UK | 9 | Governos do mundo | 5k+ |

*Bootstrap é um framework CSS mas funciona como design system.

---

## 4. Princípios Comuns Entre os Melhores Design Systems

### Top 10 Princípios Recorrentes

| Princípio | Sistemas que Adotam |
|---|---|
| **Acessibilidade** | 14/15 sistemas |
| **Consistência** | 15/15 sistemas |
| **Simplicidade/Clareza** | 12/15 sistemas |
| **Inclusividade** | 10/15 sistemas |
| **Flexibilidade/Customização** | 11/15 sistemas |
| **Baseado em Dados/Research** | 8/15 sistemas |
| **Performance** | 7/15 sistemas |
| **Internacionalização** | 6/15 sistemas |
| **Transparência** | 5/15 sistemas |
| **Personalidade de Marca** | 4/15 sistemas |

---

## 5. Lições Gerais para Criar seu Design System

### O que Funciona

1. **Comece com inventory** — Faça auditoria de todos os componentes existentes antes de criar novos
2. **Design tokens primeiro** — Defina cores, tipografia, espaçamento antes dos componentes
3. **Documente o "porquê"** — Não apenas "como usar", mas "quando usar" e "quando NÃO usar"
4. **Inclua UX writing** — Copy guidelines são tão importantes quanto visual guidelines
5. **Versione tudo** — Semantic versioning para componentes e tokens
6. **Crie playground** — Storybook ou similar para testar componentes isoladamente
7. **Involuva devs desde o dia 1** — Design system não é projeto apenas de design

### O que Evitar

1. **Não copie Material Design cegamente** — Adapte ao seu contexto e marca
2. **Não ignore acessibilidade** — É mais caro adicionar depois
3. **Não c componentes sem documentação** — Componente sem docs é componente que ninguém usa
4. **Não esqueça dark mode** — Tokens bem feitos tornam isso trivial
5. **Não permita shadow IT de design** — Tudo deve passar pelo design system

---

## 6. Ferramentas para Criar Design Systems

| Ferramenta | Uso | URL |
|---|---|---|
| **Figma + Variables** | Design tokens + componentes visuais | figma.com |
| **Storybook** | Documentação e playground de componentes | storybook.js.org |
| **Token Studio** | Gerenciamento de design tokens no Figma | tokenstudio.io |
| **Style Dictionary (Adobe)** | Transformar tokens em código multiplataforma | github.com/amzn/style-dictionary |
| **Chromatic** | Visual testing + review | chromatic.com |
| **Backlight** | Plataforma para documentar design systems | backlight.dev |
| **Zeroheight** | Documentação de design system | zeroheight.com |
| **Specify** | Single source of truth para design tokens | specifyapp.com |

---

*Documento criado para o squad pedro-design. Última atualização: Abril 2026.*
