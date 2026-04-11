# Tech Stack
**Squad:** pedro-agencia
**Version:** 1.0

---

## Overview
This document defines the technology stack used by the pedro-agencia squad for delivery, collaboration, and quality assurance.

---

## Core Tools

### Communication & Collaboration
| Tool | Purpose | Access |
|------|---------|--------|
| Slack | Real-time communication | All agents |
| Notion | Knowledge base & documentation | All agents |
| Google Workspace | Documents, Sheets, Slides | All agents |
| Figma | Design collaboration | pa-canvas, pa-nexus, pa-genesis |

### Analytics & Data
| Tool | Purpose | Owner Agent |
|------|---------|-------------|
| Google Analytics 4 | Web analytics | pa-prism |
| Google Tag Manager | Tag management | pa-prism |
| Looker Studio | Dashboard & reporting | pa-prism |
| Hotjar | Heatmaps & session recordings | pa-prism |
| SEMrush | SEO & competitive analysis | pa-vertex |
| Ahrefs | Backlink & keyword research | pa-vertex |

### Advertising Platforms
| Platform | Purpose | Owner Agent |
|----------|---------|-------------|
| Meta Ads Manager | Facebook & Instagram ads | pa-profit |
| Google Ads | Search, Display, Video ads | pa-profit |
| LinkedIn Campaign Manager | B2B advertising | pa-profit |
| TikTok Ads Manager | TikTok advertising | pa-profit |
| Taboola / Outbrain | Native advertising | pa-profit |

### Email & Automation
| Tool | Purpose | Owner Agent |
|------|---------|-------------|
| HubSpot | CRM & email marketing | pa-inbox |
| ActiveCampaign | Automation flows | pa-inbox |
| Mailchimp | Newsletter campaigns | pa-inbox |
| Zapier | Workflow automation | pa-rocket |

### Content & Social Media
| Tool | Purpose | Owner Agent |
|------|---------|-------------|
| Buffer / Hootsuite | Social scheduling | pa-pulse |
| Canva Pro | Quick design templates | pa-canvas |
| Adobe Creative Cloud | Professional design | pa-canvas, pa-frame |
| CapCut / Premiere Pro | Video editing | pa-frame |
| Copy.ai / Jasper | AI copy assistance | pa-quill |

### SEO & Content
| Tool | Purpose | Owner Agent |
|------|---------|-------------|
| Surfer SEO | Content optimization | pa-vertex |
| Clearscope | Content relevance scoring | pa-vertex |
| Screaming Frog | Technical SEO audit | pa-vertex |
| PageSpeed Insights | Performance audit | pa-vertex |

### Project Management
| Tool | Purpose | Owner Agent |
|------|---------|-------------|
| Asana | Task management | pa-empire |
| Monday.com | Project tracking | pa-empire |
| Notion | Documentation & wikis | All agents |

---

## Development & Infrastructure

### Version Control
- **Git** — all scripts, tools, and config files versioned
- **GitHub** — remote repository for squad assets

### Runtime
- **Node.js 20+** — for squad scripts and automation
- **npm** — package management

### AI/ML
- **OpenAI GPT-4+** — content generation, analysis
- **Claude** — long-form content, strategic thinking
- **Midjourney / DALL-E** — image generation (pa-canvas)

---

## Integration Standards

### API Connections
- All platforms accessed via official APIs or approved wrappers
- API keys stored in environment variables (never hardcoded)
- Rate limits monitored and logged

### Data Pipeline
```
Source Platforms → ETL (Zapier/Make) → Data Warehouse (BigQuery) → Visualization (Looker Studio)
```

### Security
- 2FA enabled on all platforms
- Password manager for credential storage
- Quarterly access review and rotation

---

## Approval Process for New Tools

1. **Request** → Agent identifies need and proposes tool
2. **Evaluation** → pa-prism assesses data integration capability
3. **Security Review** → pa-empire approves access level
4. **Onboarding** → Tool added to this document, agent trained
5. **Trial** → 30-day trial with success metrics
6. **Decision** → Adopt, extend, or abandon

---

**Version:** 1.0
**Last Updated:** 2026-04-05
**Owner:** pa-empire
