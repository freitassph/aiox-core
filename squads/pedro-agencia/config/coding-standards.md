# Coding Standards
**Squad:** pedro-agencia
**Version:** 1.0

---

## Purpose
Ensure consistent, high-quality output across all agents and tasks in the pedro-agencia squad.

---

## General Standards

### 1. Communication Style
- **Tone:** Professional, confident, consultative
- **Language:** Portuguese (Brazil) for client deliverables, English for internal documentation
- **Formatting:** Markdown with clear hierarchy (H1 → H4 max)
- **Length:** Concise but comprehensive — no filler, no missing context

### 2. Deliverable Structure
Every deliverable must include:
- [ ] Header: title, squad, version, date
- [ ] Objective / Purpose statement
- [ ] Process / Methodology
- [ ] Findings / Analysis
- [ ] Recommendations / Action Plan
- [ ] Next Steps

### 3. Naming Conventions
- Files: `pa-{descriptive-name}.md` (kebab-case)
- Tasks: `pa-{verb}-{noun}.md`
- Workflows: `wf-{campaign-name}.yaml`
- Agents: `pa-{role-name}.md`

### 4. Quality Bar
- Zero generic advice — all recommendations are specific, actionable, and data-backed
- Every claim supported by evidence or benchmark
- All frameworks cited with source
- Numbers rounded appropriately (no false precision)

### 5. Brand Consistency
- Always reference `config/agency-philosophy.md` for tone and values
- Always reference `config/client-manifesto.md` for client-specific guidelines
- Maintain Tier S+++ standard in every output

### 6. Data & Analytics
- All metrics documented with source and date
- Benchmarks clearly labeled (industry, region, date)
- Charts and tables formatted consistently
- Raw data appended as attachment or link

### 7. Review Process
- Self-review checklist before marking task complete
- Cross-reference with existing deliverables for consistency
- Flag any conflicts or contradictions immediately

---

## Code Standards (for scripts and tools)

### JavaScript / Node.js
- ES6+ syntax
- ESLint with standard config
- JSDoc for all exported functions
- Tests: Jest, minimum 80% coverage

### YAML
- 2-space indentation
- Quotes around strings with special characters
- Comments for complex logic
- Validate against schema before commit

---

**Version:** 1.0
**Last Updated:** 2026-04-05
**Owner:** pa-empire
