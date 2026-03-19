# pedro-design Squad

> Squad elite de design em todas as dimensões. Os maiores gênios do design combinados em 12 agentes especializados. Tier S+++ sem compromisso.

## O que este squad faz

Cobre **todas** as frentes de design:

| Frente | Agente | Inspiração |
|--------|--------|-----------|
| Orquestração | `pdg-chief` (Verso) | Paul Rand × Don Norman × Massimo Vignelli |
| UX/UI Completo | `pdg-ux-designer` (Nova) | IDEO × Airbnb Design × Don Norman |
| Visual Design | `pdg-visual-designer` (Vignelli) | Massimo Vignelli × Paul Rand × Jessica Walsh |
| Frontend Premium | `pdg-frontend-designer` (Pixel) | Lea Verou × Una Kravets × Josh Comeau |
| AI Image Generation | `pdg-ai-image-director` (Flux) | Nick St. Pierre × Annie Leibovitz IA |
| Fotografia | `pdg-photo-director` (Frame) | Annie Leibovitz × Richard Avedon × Peter Lindbergh |
| Brand Identity | `pdg-brand-identity` (Brand) | Paul Rand × Aaron Draplin × Pentagram |
| Social Media | `pdg-social-media` (Content) | Gary Vee strategy × Agency BUCK execution |
| Motion Design | `pdg-motion-designer` (Motion) | Buck Design × Gretel × Disney Principles |
| Design System | `pdg-design-system` (Atlas) | Nathan Curtis × Dan Mall × Brad Frost |
| UX Writing | `pdg-ux-writer` (Echo) | Ann Handley × Joanna Wiebe × Google UX Writing |
| Quality Audit | `pdg-auditor` (Sentinel) | Don Norman × Nielsen × Dieter Rams |

## Ativar Agentes

```bash
# Orquestrador — ponto de entrada para qualquer projeto
/pedro-design:agents:pdg-chief

# Design específico
/pedro-design:agents:pdg-ux-designer
/pedro-design:agents:pdg-visual-designer
/pedro-design:agents:pdg-ai-image-director
/pedro-design:agents:pdg-brand-identity
/pedro-design:agents:pdg-social-media
/pedro-design:agents:pdg-motion-designer
/pedro-design:agents:pdg-design-system
/pedro-design:agents:pdg-frontend-designer
/pedro-design:agents:pdg-photo-director
/pedro-design:agents:pdg-ux-writer
/pedro-design:agents:pdg-auditor
```

## Workflows

| Projeto | Workflow |
|---------|---------|
| Identidade visual de marca | `brand-identity-workflow.yaml` |
| Interface / produto digital | `ui-design-workflow.yaml` |
| Campanha de social + AI images | `ai-content-workflow.yaml` |

## Casos de Uso Rápidos

**Quero criar imagens com IA:**
→ `/pedro-design:agents:pdg-ai-image-director` → `*generate-ai-image`

**Quero criar posts para Instagram:**
→ `/pedro-design:agents:pdg-social-media` → `*create-social-pack`

**Quero criar uma identidade visual:**
→ `/pedro-design:agents:pdg-chief` → `*orchestrate "criar brand identity para [marca]"`

**Quero fazer design de uma interface:**
→ `/pedro-design:agents:pdg-chief` → `*orchestrate "design de [produto]"`

**Quero auditar um design existente:**
→ `/pedro-design:agents:pdg-auditor` → `*audit-design`

**Quero implementar um design em código:**
→ `/pedro-design:agents:pdg-frontend-designer`

## Padrões de Qualidade

- Acessibilidade: WCAG 2.1 AA (mínimo obrigatório)
- Performance: LCP < 2.5s, CLS < 0.1
- Animações: `prefers-reduced-motion` sempre implementado
- Design System: compliance > 95%
- AI Images: sempre com prompt archive documentado

## Tech Stack

Ver `config/tech-stack.md` para lista completa de dependências.

## Design Standards

Ver `config/design-standards.md` para grid, tipografia, cores e padrões de animação.

---

*pedro-design Squad v1.0.0 — Tier S+++ | CLI First | Zero Mediocridade*
