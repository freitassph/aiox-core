---
task: Create Brand Identity
responsavel: "@pdg-brand-identity"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brand_name: Nome da marca
  - discovery: Respostas do brand discovery (ou brief completo)
  - industry: Setor de atuação
  - references: Referências visuais aprovadas e anti-referências
Saida: |
  - logo-files/: SVG, PNG, EPS em todas as variações
  - brandbook.pdf: Guidelines completas
  - design-tokens.json: Tokens da marca para uso digital
Checklist:
  - "[ ] Brand discovery completo"
  - "[ ] Brand platform definida"
  - "[ ] Análise competitiva feita"
  - "[ ] 3 moodboards apresentados"
  - "[ ] Direção visual escolhida"
  - "[ ] 3 conceitos de logo desenvolvidos"
  - "[ ] Logo aprovado e testado (matrix completo)"
  - "[ ] Sistema de cor definido (todos os valores)"
  - "[ ] Sistema tipográfico definido"
  - "[ ] Mínimo 10 aplicações criadas"
  - "[ ] Brandbook completo (8 capítulos)"
  - "[ ] Tokens digitais exportados"
  - "[ ] Auditoria final com pdg-auditor"
---
## Pre-Conditions

- [ ] Required inputs available
- [ ] Responsible agent activated
- [ ] Task dependencies completed



# *create-brand-identity

Cria identidade visual completa de marca — do zero ao brandbook. Inclui logo, sistema visual, diretrizes e aplicações.

## Uso

```
*create-brand-identity --brand_name "Nexo" --industry fintech
*create-brand-identity --brand_name "Bloom" --industry wellness --references "minimal, clean, natural"
```

## Entregáveis Incluídos

### Logo Package
- Logo principal (horizontal + stacked)
- Variações: colorido, P&B, negativo (branco), transparente
- Favicon (16px, 32px, 180px)
- Formatos: SVG (master), PNG @1x @2x, EPS (impressão)

### Brandbook (PDF + Figma)
1. Brand Story (Purpose, Vision, Values, Personality)
2. Logo (usos corretos, incorretos, clear space, tamanho mínimo)
3. Color System (HEX, RGB, CMYK, Pantone)
4. Typography (famílias, escala, uso)
5. Imagery Style (estilo fotográfico, ilustrações)
6. Iconography (sistema de ícones)
7. Applications (10+ aplicações)
8. Voice & Tone (adjetivos, exemplos)

### Digital Tokens
```json
{
  "brand": {
    "color": {
      "primary": { "value": "#HEX" },
      "secondary": { "value": "#HEX" },
      "neutral": { ... }
    },
    "font": {
      "display": { "family": "..." },
      "body": { "family": "..." }
    }
  }
}
```
