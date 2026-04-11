---
checklist: "Design System Compliance Checklist"
responsavel: "@pdg-design-system"
responsable_type: agent
atomic_layer: checklist
applies_to:
  - design-system-review
  - component-library-validation
  - ui-implementation-audit
---

# Design System Compliance Checklist

Checklist de validacao para conformidade com design system. Zero mediocridade tolerada.

## Section 1: Tokens
- [ ] Todas as cores utilizam tokens de design system (sem valores hardcoded)
- [ ] Tokens de espacamento (spacing) sao aplicados consistentemente
- [ ] Tokens de tipografia (font-size, font-weight, line-height) sao utilizados
- [ ] Tokens de borda (border-radius, border-width) seguem a escala definida
- [ ] Tokens de sombra (box-shadow) utilizam valores do sistema
- [ ] Tokens de z-index seguem a escala hierarquica do design system
- [ ] Tokens de breakpoint sao usados em vez de valores arbitrarios
- [ ] Tokens de duracao e easing de animacao seguem padrao definido
- [ ] Nenhum token customizado foi criado sem aprovacao previa
- [ ] Nomes de tokens seguem convencao de nomenclatura do sistema

## Section 2: Components
- [ ] Componentes utilizados sao da biblioteca oficial do design system
- [ ] Variantes de componentes seguem as opcoes documentadas
- [ ] Estados de componente (default, hover, active, disabled, error) estao corretos
- [ ] Tamanhos de componente (sm, md, lg) seguem escala definida
- [ ] Composicoes de componentes seguem padres estabelecidos
- [ ] Componentes customizados foram revisados e aprovados pelo design system team
- [ ] Props/API de componentes seguem contrato documentado
- [ ] Slots e areas de composicao sao utilizados corretamente
- [ ] Componentes acessiveis seguem requisitos de acessibilidade do DS
- [ ] Icones utilizados pertencem ao set oficial do design system
- [ ] Componentes obsoletos (deprecated) nao estao sendo utilizados

## Section 3: Patterns
- [ ] Padroes de layout (grid, flex, stack) seguem convencoes do design system
- [ ] Padroes de formulario (validacao, feedback, agrupamento) estao conformes
- [ ] Padroes de navegacao seguem estrutura definida
- [ ] Padroes de feedback (loading, empty state, error state) estao presentes
- [ ] Padroes de conteudo (cards, listas, tabelas) utilizam componentes corretos
- [ ] Padroes de responsividade seguem breakpoints e estrate gia do DS
- [ ] Padroes de modal/dialog seguem comportamento e acessibilidade definidos
- [ ] Padroes de dados (pagination, sorting, filtering) estao conformes
- [ ] Padroes de onboarding seguem fluxo estabelecido

## Section 4: Documentation
- [ ] Componentes novos ou modificados possuem documentacao atualizada
- [ ] Storybook de componentes esta atualizado e funcional
- [ ] Exemplos de uso de componentes estao documentados
- [ ] Guia de contribuicao ao design system esta acessivel
- [ ] Changelog do design system reflete as alteracoes realizadas
- [ ] Decisoes de design (ADRs) estao documentadas e linkadas
- [ ] Guia de migrao para versoes novas esta disponivel
- [ ] Notas de versao (release notes) foram publicadas

## Section 5: Adoption
- [ ] Versao mais recente do design system esta sendo utilizada
- [ ] Dependencias do design system estao atualizadas no package.json
- [ ] Nao ha copias (copy-paste) de componentes do design system
- [ ] Overrides customizados sao minimos e justificados
- [ ] Equipe realizou treinamento de onboarding do design system
- [ ] Canal de suporte ao design system e conhecido pela equipe
- [ ] Metricas de adesao ao design system estao sendo monitoradas
- [ ] Feedback e issues reportados ao design system team

## Section 6: Governance
- [ ] Solicitacao de novo componente seguiu processo de request definido
- [ ] Revisao de design (design review) foi realizada antes da implementacao
- [ ] Aprovacao do design system team foi obtida para customizacoes
- [ ] Processo de versionamento semantico foi seguido
- [ ] Testes visuais (snapshot/visual regression) estao configurados
- [ ] CI/CD valida compliance com design system automaticamente
- [ ] Design tokens sao versionados e distribuidos via pipeline
- [ ] Politica de deprecacao de componentes foi respeitada
- [ ] Audit de compliance com design system foi realizado nos ultimos 30 dias
- [ ] Lista de componentes aprovados foi consultada antes de criar novos
