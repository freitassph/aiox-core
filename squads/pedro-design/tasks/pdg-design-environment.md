---
task: pdg-design-environment
agent: pdg-environmental-designer
description: "Design de ambiente espacial — sinalização, wayfinding, experiência física"
inputs: [space-plan, brand-identity, user-flow, accessibility-requirements]
outputs: [environmental-design, signage-system, material-spec, installation-guide]
elicit: true
---

# Task: Design Environment

## Objetivo
Projetar a experiência visual e espacial de um ambiente físico — integrando a identidade da marca ao espaço através de sinalização, wayfinding, materiais e elementos gráficos. O design deve orientar usuários de forma intuitiva, reforçar a marca e criar uma experiência coesa e memorável do espaço.

## Processo de Execução

### Phase 1 — Análise Espacial
1. `{*analyze-space-plan}` — Analisar planta baixa do espaço: dimensões, zonas, circulação, pontos focais
2. `{*map-user-flow}` — Mapear fluxo de usuários pelo espaço: entradas, caminhos, destinos, pontos de espera
3. `{*identify-decision-points}` — Identificar pontos de decisão onde wayfinding é necessário (junctions, entrances, floors)
4. `{*audit-accessibility}` — Auditar requisitos de acessibilidade do espaço: rampas, braille, contraste, altura de sinalização

Entregável: Spatial Analysis Report

### Phase 2 — Estratégia de Wayfinding
1. `{*define-signage-hierarchy}` — Definir hierarquia de sinalização: directional (setas), informational (mapas), identification (nomes), regulatory (regras)
2. `{*create-signage-plan}` — Criar plano de posicionamento de cada placa no espaço com coordenadas
3. `{*define-message-strategy}` — Definir estratégia de mensagens: o que comunicar em cada ponto, em qual idioma
4. `{*design-journey-moments}` — Design de momentos memoráveis no percurso: entrance experience, landmark features

Entregável: Wayfinding Strategy Document

### Phase 3 — Design do Sistema de Sinalização
1. `{*design-directional-signs}` — Design de placas direcionais: formato, suporte, tipografia, ícones, setas
2. `{*design-identification-signs}` — Design de placas de identificação: nomes de salas, departamentos, andares
3. `{*design-informational-signs}` — Design de placas informativas: mapas do espaço, diretórios, horários
4. `{*design-regulatory-signs}` — Design de placas regulatórias: saída, emergência, proibido, acessibilidade
5. `{*design-digital-signs}` — Se aplicável, design de sinalização digital: screens, displays interativos

Entregável: Signage System Design

### Phase 4 — Integração da Marca ao Espaço
1. `{*apply-brand-to-walls}` — Aplicar cor e elementos da marca em paredes e superfícies
2. `{*design-brand-moments}` — Criar momentos de marca no espaço: feature wall, logo installation, branded zone
3. `{*design-environmental-graphics}` — Design de gráficos ambientais: wall decals, floor graphics, ceiling installations
4. `{*specify-lighting-brand}` — Especificar iluminação que reforça a identidade da marca (temperature, accent lighting)

Entregável: Brand Integration Package

### Phase 5 — Especificação de Materiais
1. `{*spec-sign-materials}` — Especificar materiais das placas: ACM, acrílico, metal, madeira, MDF
2. `{*spec-mounting-system}` — Especificar sistemas de montagem: stand-off, flush, suspended, freestanding
3. `{*spec-finishes}` — Especificar acabamentos: pintura, laminado, gravação a laser, impressão UV, silk screen
4. `{*spec-hardware}` — Especificar ferragens e fixações: parafusos, adhesivos, suportes, bases
5. `{*spec-outdoor-vs-indoor}` — Diferenciar especificações para ambiente interno vs. externo (UV, chuva)

Entregável: Material Specification Document

### Phase 6 — Guia de Instalação
1. `{*create-installation-drawings}` — Criar desenhos técnicos de instalação com dimensões e fixações
2. `{*write-installation-steps}` — Escrever sequência de instalação para cada tipo de placa
3. `{*define-maintenance-plan}` — Definir plano de manutenção: limpeza, substituição, atualização
4. `{*create-assembly-guide}` — Criar guia de montagem para elementos complexos
5. `{*compile-final-package}` — Compilar package completo para o instalador/empreiteiro

Entregável: Installation Guide

## Comandos Disponíveis
- `{*analyze-space-plan}` — Analisa planta baixa do espaço
- `{*map-user-flow}` — Mapeia fluxo de usuários pelo espaço
- `{*identify-decision-points}` — Identifica pontos de decisão para wayfinding
- `{*define-signage-hierarchy}` — Define hierarquia de sinalização
- `{*create-signage-plan}` — Cria plano de posicionamento de placas
- `{*design-directional-signs}` — Design de placas direcionais
- `{*apply-brand-to-walls}` — Aplica marca em paredes e superfícies
- `{*spec-sign-materials}` — Especifica materiais das placas
- `{*create-installation-drawings}` — Cria desenhos técnicos de instalação

## Critérios de Conclusão
- [ ] Análise espacial completa com zonas e pontos focais mapeados
- [ ] Fluxo de usuários mapeado com caminhos primários e secundários
- [ ] Pontos de decisão identificados e marcados na planta
- [ ] Requisitos de acessibilidade auditados e listados
- [ ] Hierarquia de sinalização definida (4 tipos)
- [ ] Plano de posicionamento de placas com coordenadas
- [ ] Estratégia de mensagens definida
- [ ] Momentos de jornada projetados
- [ ] Design de placas direcionais
- [ ] Design de placas de identificação
- [ ] Design de placas informativas
- [ ] Design de placas regulatórias
- [ ] Sinalização digital projetada (se aplicável)
- [ ] Marca integrada em paredes e superfícies
- [ ] Brand moments criados no espaço
- [ ] Gráficos ambientais projetados
- [ ] Iluminação de marca especificada
- [ ] Materiais das placas especificados
- [ ] Sistemas de montagem especificados
- [ ] Acabamentos especificados
- [ ] Ferragens e fixações especificadas
- [ ] Especificações diferenciadas indoor/outdoor
- [ ] Desenhos técnicos de instalação criados
- [ ] Sequência de instalação escrita
- [ ] Plano de manutenção definido
- [ ] Guia de montagem para elementos complexos
- [ ] Package completo compilado para instalador
