# Source Tree
**Squad:** pedro-agencia
**Version:** 1.0

---

## Directory Structure

```
squads/pedro-agencia/
├── squad.yaml                    # Squad manifest (source of truth)
├── README.md                     # Squad documentation
├── config/
│   ├── agency-philosophy.md      # Core philosophy and values
│   ├── client-manifesto.md       # Client-specific guidelines
│   ├── coding-standards.md       # Output quality standards
│   ├── tech-stack.md             # Technology stack reference
│   └── source-tree.md            # This file
├── agents/
│   ├── pa-empire.md              # CEO & Master Orchestrator
│   ├── pa-oracle.md              # Brand Strategist
│   ├── pa-sage.md                # Strategic Consultant
│   ├── pa-genesis.md             # Creative Director
│   ├── pa-quill.md               # Master Copywriter
│   ├── pa-canvas.md              # Art Director & Visual Designer
│   ├── pa-nexus.md               # UX/UI Designer
│   ├── pa-frame.md               # Video Director & Motion Designer
│   ├── pa-profit.md              # Performance Marketing Specialist
│   ├── pa-rocket.md              # Growth Hacker
│   ├── pa-vertex.md              # SEO Specialist
│   ├── pa-inbox.md               # Email Marketing Specialist
│   ├── pa-pulse.md               # Social Media Strategist
│   ├── pa-chronicle.md           # Content Strategist
│   ├── pa-aegis.md               # PR & Communications Specialist
│   ├── pa-compass.md             # Media Planner & Buyer
│   ├── pa-network.md             # Influencer & Partnership Strategist
│   ├── pa-prism.md               # Data Analyst & Growth Analytics
│   ├── pa-catalyst.md            # Sales & Business Development
│   ├── pa-anchor.md              # Account Director & Client Success
│   ├── pa-tribe.md               # Community Manager
│   └── pa-launch.md              # Product Marketer
├── tasks/
│   ├── pa-orchestrate-campaign.md
│   ├── pa-client-onboarding.md
│   ├── pa-brand-audit.md
│   ├── pa-brand-identity.md
│   ├── pa-business-strategy.md
│   ├── pa-competitive-analysis.md
│   ├── pa-creative-brief.md
│   ├── pa-campaign-concept.md
│   ├── pa-sales-copy.md
│   ├── pa-content-copy.md
│   ├── pa-visual-identity.md
│   ├── pa-ad-creatives.md
│   ├── pa-ux-audit.md
│   ├── pa-landing-design.md
│   ├── pa-video-script.md
│   ├── pa-video-production.md
│   ├── pa-paid-media-strategy.md
│   ├── pa-ad-campaign-launch.md
│   ├── pa-growth-strategy.md
│   ├── pa-seo-audit.md
│   ├── pa-seo-strategy.md
│   ├── pa-email-sequence.md
│   ├── pa-social-strategy.md
│   ├── pa-content-calendar.md
│   ├── pa-content-strategy.md
│   ├── pa-pr-strategy.md
│   ├── pa-media-plan.md
│   ├── pa-influencer-strategy.md
│   ├── pa-analytics-audit.md
│   ├── pa-sales-strategy.md
│   ├── pa-community-strategy.md
│   ├── pa-go-to-market.md
│   ├── pa-brand-strategy.md       # Brand strategy deep-dive
│   ├── pa-campaign-full.md       # Full campaign execution task
│   ├── pa-content-engine.md      # Content engine task
│   └── pa-growth-sprint.md       # Growth sprint task
├── workflows/
│   ├── wf-full-campaign.yaml     # Full campaign end-to-end
│   ├── wf-brand-launch.yaml      # Brand launch workflow
│   ├── wf-growth-sprint.yaml     # Growth sprint workflow
│   ├── wf-client-onboarding.yaml # Client onboarding workflow
│   ├── wf-content-machine.yaml   # Content production machine
│   ├── wf-campaign-launch.yaml   # Campaign launch workflow
│   └── wf-onboarding-client.yaml # Client onboarding (alternate)
├── checklists/
│   ├── campaign-launch-readiness.md
│   ├── brand-consistency-check.md
│   ├── pre-flight-qa.md
│   └── ... (additional checklists)
├── templates/
│   ├── creative-brief-template.md
│   ├── campaign-report-template.md
│   ├── brand-guidelines-template.md
│   └── ... (additional templates)
├── data/                         # Reference data and benchmarks
│   ├── industry-benchmarks/      # Benchmarks by industry vertical
│   ├── ad-platform-guides/       # Platform-specific guides
│   ├── seo-reference/            # SEO frameworks and checklists
│   └── brand-archetypes.md       # Brand archetype reference
├── scripts/                      # Automation scripts
│   ├── campaign-report-generator.js
│   ├── benchmark-fetcher.js
│   └── ... (additional scripts)
└── tools/                        # Custom tool configurations
    ├── seo-audit-config.json
    ├── analytics-setup.json
    └── ... (additional tools)
```

---

## Key Files Reference

### Manifest
- `squad.yaml` — The single source of truth for squad structure, agents, tasks, and workflows

### Config
- `config/agency-philosophy.md` — Core values and working principles
- `config/client-manifesto.md` — Client-specific engagement guidelines
- `config/coding-standards.md` — Output quality and naming standards
- `config/tech-stack.md` — Technology stack and tool ownership
- `config/source-tree.md` — This file

### Agent Files
All agents follow the pattern: `agents/pa-{role}.md`
Each agent file contains:
- Persona definition
- Role and responsibilities
- Available commands
- Collaboration protocols
- Quality standards

### Task Files
All tasks follow the pattern: `tasks/pa-{action}.md`
Each task file contains:
- YAML frontmatter (task, agent, inputs, outputs, elicit)
- Objective statement
- Process of execution (phased)
- Available commands
- Criteria for completion

### Workflow Files
All workflows follow the pattern: `workflows/wf-{name}.yaml`
Each workflow file contains:
- Trigger definition
- Sequential and parallel steps
- Agent assignments
- Success criteria

---

## Conventions

### File Naming
- Prefix: `pa-` for all squad-specific files
- Workflow prefix: `wf-` for workflows
- Format: kebab-case (`my-descriptive-name.md`)

### Frontmatter
- All task files MUST have YAML frontmatter
- All workflow files use YAML structure natively
- All agent files use YAML frontmatter

### Versioning
- Squad version incremented on manifest changes
- Individual files track their own version in footer
- Changelog maintained in README.md

---

**Version:** 1.0
**Last Updated:** 2026-04-05
**Owner:** pa-empire
