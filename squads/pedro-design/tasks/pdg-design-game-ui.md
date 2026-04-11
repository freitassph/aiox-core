---
task: pdg-design-game-ui
agent: pdg-game-ui-designer
description: "Design de UI para jogos — HUD, menus, inventory, feedback systems"
inputs: [game-design-doc, art-style, platform, target-audience]
outputs: [hud-layout, menu-system, interaction-specs, accessibility-config]
elicit: true
---

## Purpose

Design the complete game interface including HUD, menu systems, inventory screens, and feedback visual systems that are immersive, functional, and consistent with the game's artistic style.

## Pre-Conditions

- [ ] Game Design Document available and reviewed
- [ ] Art style defined and approved
- [ ] Target platform and constraints identified
- [ ] pdg-game-ui-designer agent activated
- [ ] Any dependency tasks completed

# Task: Design Game UI

## Entrada
- `game-design-doc`: Document with game genre, mechanics, loops, and progression
- `art-style`: Visual style reference or art direction document
- `platform`: Target platform(s): PC, console, mobile, VR
- `target-audience`: Player demographic and accessibility requirements

## Saida
- `hud-layout`: Complete HUD layout package with all states and variations
- `menu-system`: Full menu system design (main, pause, settings, inventory, dialogs)
- `interaction-specs`: Interaction specifications for navigation, animations, and responsive behavior
- `accessibility-config`: Accessibility configuration including colorblind modes and text scaling

## Checklist
- [ ] GDD analyzed and UI needs identified
- [ ] Platform constraints defined (resolution, input method, safe areas)
- [ ] HUD elements defined and justified
- [ ] Health bar with complete visual feedback
- [ ] Minimap designed with content and icons
- [ ] Ability bar with cooldown indicators
- [ ] HUD layout composed with attention hierarchy
- [ ] Contextual HUD specified (show/hide logic)
- [ ] Main menu designed
- [ ] Pause menu designed
- [ ] Settings menu complete (audio, video, controls, accessibility)
- [ ] Inventory screen with grid and details
- [ ] Skill tree designed (if applicable)
- [ ] Dialog system designed
- [ ] Damage numbers with animation and types
- [ ] Notification system designed
- [ ] Loading screens designed
- [ ] Victory/defeat screens designed
- [ ] Haptic feedback patterns defined
- [ ] UI audio feedback defined
- [ ] Navigation specified (gamepad, keyboard, touch)
- [ ] Transition animations specified
- [ ] Responsive behavior documented
- [ ] State machines defined
- [ ] Implementation guide for engine
- [ ] Colorblind modes configured
- [ ] Text scaling options defined
- [ ] Subtitle options specified
- [ ] Remap controls defined
- [ ] Accessibility configuration documented

## Objetivo
Projetar a interface completa de um jogo — HUD (heads-up display), sistemas de menu, inventário, feedback visual e todos os elementos de UI que o jogador interage durante a experiência. O design deve ser imersivo, funcional e consistente com o estilo artístico do jogo, funcionando perfeitamente na plataforma-alvo.

## Processo de Execução

### Phase 1 — Análise do Game Design
1. `{*analyze-gdd}` — Analisar Game Design Document: gênero, mecânicas, loops de gameplay, progressão
2. `{*identify-ui-needs}` — Identificar todas as necessidades de UI a partir das mecânicas: HUD elements, menus, dialogs
3. `{*study-art-style}` — Estudar estilo artístico do jogo e definir como UI se integra visualmente ao mundo
4. `{*define-platform-constraints}` — Definir restrições de plataforma: resolução, input method (touch, gamepad, keyboard), safe areas

Entregável: Game UI Requirements

### Phase 2 — HUD Design
1. `{*define-hud-elements}` — Definir elementos do HUD: health, mana, score, minimap, ammo, abilities, objectives
2. `{*design-health-bar}` — Design de barra de vida: estilo, posição, feedback visual (dano, regen, critical)
3. `{*design-minimap}` — Design do minimap: forma, conteúdo, icons, zoom level, fog of war
4. `{*design-ability-bar}` — Design de barra de habilidades: cooldown indicators, charge states, ultimate ready
5. `{*design-hud-composition}` — Compor layout completo do HUD com hierarquia de atenção
6. `{*design-contextual-hud}` — Design de HUD contextual que aparece/some conforme a situação

Entregável: HUD Layout Package

### Phase 3 — Menu System
1. `{*design-main-menu}` — Design do menu principal: layout, background, navigation, new game/continue/options
2. `{*design-pause-menu}` — Design do menu de pausa: quick access, resume, quit, settings
3. `{*design-settings-menu}` — Design do menu de configurações: audio, video, controls, accessibility, language
4. `{*design-inventory-screen}` — Design da tela de inventário: grid, slots, item details, equip/unequip
5. `{*design-skill-tree}` — Se aplicável, design da árvore de habilidades/skills
6. `{*design-dialog-system}` — Design do sistema de diálogos: portrait, text box, choices, subtitles

Entregável: Menu System Package

### Phase 4 — Feedback Systems
1. `{*design-damage-numbers}` — Design de números de dano: estilo, animação, tipos (critical, miss, heal)
2. `{*design-notification-system}` — Design de notificações: quest complete, item acquired, achievement unlocked
3. `{*design-loading-screens}` — Design de telas de loading: artwork, tips, progress bar, lore snippets
4. `{*design-victory-defeat}` — Design de telas de vitória e derrota
5. `{*design-haptic-feedback}` — Definir feedback háptico para gamepad: patterns para dano, coleta, navegação
6. `{*design-audio-feedback}` — Definir feedback sonoro da UI: click, select, error, confirm, level-up

Entregável: Feedback Systems Package

### Phase 5 — Especificação de Interação
1. `{*write-navigation-specs}` — Especificar navegação: gamepad focus order, keyboard shortcuts, touch gestures
2. `{*define-animation-specs}` — Definir especificações de animação: menu transitions, panel slides, fades
3. `{*specify-responsive-behavior}` — Especificar comportamento responsivo para diferentes aspect ratios
4. `{*define-state-machines}` — Definir state machines para elementos interativos complexos
5. `{*write-implementation-guide}` — Compilar guia de implementação com specs para engine (Unity, Unreal, Godot)

Entregável: Interaction Specifications

### Phase 6 — Acessibilidade
1. `{*configure-colorblind-modes}` — Configurar modos para daltonismo: color swaps, pattern overlays
2. `{*define-text-scaling}` — Definir text scaling options: 100%, 125%, 150%, 200%
3. `{*specify-subtitle-options}` — Especificar opções de legenda: tamanho, background, speaker names
4. `{*define-remap-controls}` — Definir sistema de remapeamento de controles
5. `{*generate-accessibility-config}` — Gerar configuração de acessibilidade completa documentada

Entregável: Accessibility Configuration

## Comandos Disponíveis
- `{*analyze-gdd}` — Analisa Game Design Document
- `{*identify-ui-needs}` — Identifica necessidades de UI das mecânicas
- `{*define-hud-elements}` — Define elementos do HUD
- `{*design-health-bar}` — Design de barra de vida
- `{*design-minimap}` — Design do minimap
- `{*design-main-menu}` — Design do menu principal
- `{*design-inventory-screen}` — Design da tela de inventário
- `{*design-damage-numbers}` — Design de números de dano
- `{*write-navigation-specs}` — Especifica navegação por gamepad/teclado/touch
- `{*configure-colorblind-modes}` — Configura modos para daltonismo

## Critérios de Conclusão
- [ ] GDD analisado e UI needs identificados
- [ ] Restrições de plataforma definidas (resolução, input, safe areas)
- [ ] Elementos do HUD definidos e justificados
- [ ] Health bar com feedback visual completo
- [ ] Minimap projetado com conteúdo e icons
- [ ] Ability bar com cooldown indicators
- [ ] HUD layout composto com hierarquia de atenção
- [ ] HUD contextual especificado (show/hide logic)
- [ ] Main menu projetado
- [ ] Pause menu projetado
- [ ] Settings menu completo (audio, video, controls, accessibility)
- [ ] Inventory screen com grid e detalhes
- [ ] Skill tree projetado (se aplicável)
- [ ] Dialog system projetado
- [ ] Damage numbers com animação e tipos
- [ ] Notification system projetado
- [ ] Loading screens projetadas
- [ ] Victory/defeat screens projetados
- [ ] Haptic feedback patterns definidos
- [ ] Audio feedback da UI definido
- [ ] Navegação especificada (gamepad, keyboard, touch)
- [ ] Animações de transição especificadas
- [ ] Comportamento responsivo documentado
- [ ] State machines definidas
- [ ] Implementation guide para engine
- [ ] Colorblind modes configurados
- [ ] Text scaling options definidos
- [ ] Subtitle options especificadas
- [ ] Remap controls definidos
- [ ] Accessibility configuration documentada
