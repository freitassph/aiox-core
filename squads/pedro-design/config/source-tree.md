# Source Tree
**Squad:** pedro-design
**Version:** 2.0

---

## Directory Structure

```
squads/pedro-design/
├── squad.yaml                    # Squad manifest
├── README.md                     # Squad documentation
├── config/
│   ├── design-standards.md       # Design standards and guidelines
│   ├── tech-stack.md             # Technology stack reference
│   └── source-tree.md            # This file
├── agents/
│   ├── pdg-chief.md              # Design Chief & Orchestrator
│   ├── pdg-creative-strategist.md # Creative Strategist
│   ├── pdg-art-director.md       # Art Director
│   ├── pdg-brand-identity.md     # Brand Identity Designer
│   ├── pdg-visual-designer.md    # Visual Designer
│   ├── pdg-typography-master.md  # Typography Specialist
│   ├── pdg-packaging-designer.md # Packaging Designer
│   ├── pdg-ux-designer.md        # UX Designer
│   ├── pdg-design-system.md      # Design System Architect
│   ├── pdg-frontend-designer.md  # Frontend Design Engineer
│   ├── pdg-data-viz-specialist.md # Data Visualization Specialist
│   ├── pdg-ai-image-director.md  # AI Image Director
│   ├── pdg-photo-director.md     # Photography Director
│   ├── pdg-illustration-artist.md # Illustration Artist
│   ├── pdg-mockup-3d-artist.md   # 3D Mockup Artist
│   ├── pdg-motion-designer.md    # Motion Designer
│   ├── pdg-social-media.md       # Social Media Designer
│   ├── pdg-ux-writer.md          # UX Writer
│   ├── pdg-environmental-designer.md # Environmental Designer
│   ├── pdg-game-ui-designer.md   # Game UI Designer
│   ├── pdg-auditor.md            # Design Auditor
│   ├── pdg-print-editorial.md    # Print & Editorial Designer (orphan)
│   └── pdg-slide-designer.md     # Presentation Designer (orphan)
├── tasks/
│   ├── pdg-orchestrate-design.md
│   ├── pdg-develop-creative-strategy.md
│   ├── pdg-art-direct-campaign.md
│   ├── pdg-create-brand-identity.md
│   ├── pdg-create-brandbook.md
│   ├── pdg-create-favicon.md
│   ├── pdg-design-packaging.md
│   ├── pdg-design-unboxing-experience.md
│   ├── pdg-design-ui-screen.md
│   ├── pdg-build-design-system.md
│   ├── pdg-design-data-dashboard.md
│   ├── pdg-generate-ai-image.md
│   ├── pdg-create-photo-8k.md
│   ├── pdg-create-illustration.md
│   ├── pdg-create-mockup.md
│   ├── pdg-create-3d-scene.md
│   ├── pdg-create-motion-spec.md
│   ├── pdg-design-microinteractions.md
│   ├── pdg-create-social-pack.md
│   ├── pdg-create-pitch-deck.md
│   ├── pdg-create-ebook.md
│   ├── pdg-create-wallpaper.md
│   ├── pdg-create-svg-assets.md
│   ├── pdg-design-environment.md
│   ├── pdg-design-game-ui.md
│   ├── pdg-audit-design.md
│   ├── pdg-validate-accessibility.md
│   ├── pdg-audit-design-system.md
│   └── pdg-create-full-identity.md  # Orphan task
├── workflows/
│   ├── brand-identity-workflow.yaml
│   ├── complete-brand-identity-workflow.yaml
│   ├── ui-design-workflow.yaml
│   ├── ai-content-workflow.yaml
│   ├── editorial-production-workflow.yaml
│   ├── mockup-generation-workflow.yaml
│   ├── photography-production-workflow.yaml
│   ├── presentation-design-workflow.yaml
│   ├── creative-strategy-workflow.yaml
│   ├── design-system-build-workflow.yaml
│   ├── packaging-design-workflow.yaml
│   ├── social-campaign-workflow.yaml
│   ├── motion-design-workflow.yaml
│   ├── data-viz-dashboard-workflow.yaml
│   ├── environmental-design-workflow.yaml
│   ├── game-ui-design-workflow.yaml
│   ├── design-audit-workflow.yaml
│   └── multi-platform-asset-workflow.yaml
├── checklists/
│   ├── brand-identity-checklist.md
│   ├── design-quality-checklist.md
│   ├── editorial-quality-checklist.md
│   ├── mockup-quality-checklist.md
│   ├── photography-quality-checklist.md
│   ├── accessibility-audit-checklist.md
│   ├── design-system-compliance-checklist.md
│   ├── packaging-compliance-checklist.md
│   ├── motion-performance-checklist.md
│   ├── social-readiness-checklist.md
│   ├── cross-platform-consistency-checklist.md
│   ├── ai-image-quality-checklist.md
│   └── launch-readiness-checklist.md
├── templates/
│   ├── brand-brief-template.md
│   ├── brand-guidelines-template.md
│   ├── design-brief-template.md
│   ├── design-review-checklist.md
│   ├── mockup-brief-template.md
│   ├── photography-brief-template.md
│   ├── creative-brief-template.md
│   ├── design-system-spec-template.md
│   ├── packaging-spec-template.md
│   ├── motion-spec-template.md
│   ├── social-content-brief-template.md
│   ├── data-viz-brief-template.md
│   ├── environmental-design-brief.md
│   ├── accessibility-report-template.md
│   ├── ui-handoff-template.md
│   └── design-audit-report-template.md
├── data/
│   ├── color-palettes-reference.md
│   ├── typography-pairings-reference.md
│   ├── design-system-catalog.md
│   ├── ai-prompt-archive.md
│   ├── brand-archetypes-catalog.md
│   ├── motion-patterns-library.md
│   ├── social-media-benchmarks.md
│   └── accessibility-standards-reference.md
├── scripts/                      # (empty — declared as [])
└── tools/                        # (empty — declared as [])
```

---

## Key Files Reference

### Manifest
- `squad.yaml` — Source of truth for squad structure

### Config
- `config/design-standards.md` — Design quality standards
- `config/tech-stack.md` — Tools and technologies
- `config/source-tree.md` — This file

### Agents (21 total)
All agents: `agents/pdg-{role}.md`
Each contains: persona, philosophy, operating procedures, commands, quality standards

### Tasks (29 total)
All tasks: `tasks/pdg-{action}.md`
Each contains: frontmatter, objective, execution phases, commands, completion criteria

### Workflows (18 total)
All workflows: `workflows/{name}.yaml`
Each contains: trigger, steps with dependencies, success criteria

### Checklists (13 total)
All checklists: `checklists/{name}.md`
Each contains: frontmatter, categorized checkbox items

### Templates (16 total)
All templates: `templates/{name}.md`
Each contains: structured fill-in-the-blank format

### Data (8 total)
All data: `data/{reference}.md`
Each contains: comprehensive reference material with tables and frameworks

---

## Conventions

### File Naming
- Prefix: `pdg-` for agents and tasks
- Workflow prefix: varies (descriptive)
- Format: kebab-case

### Frontmatter
- Agents: `agent:`, `persona:`, `role:`, `squad:`
- Tasks: `task:`, `agent:`, `description:`, `inputs:`, `outputs:`, `elicit:`
- Checklists: `checklist:`, `responsavel:`, `responsable_type:`, `atomic_layer:`, `applies_to:`

---

**Version:** 2.0
**Last Updated:** 2026-04-05
**Owner:** pdg-chief
