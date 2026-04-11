---
task: Generate AI Image
responsavel: "@pdg-ai-image-director"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brief: Descrição do que deve ser gerado
  - platform: Onde será usado (Instagram, hero, thumbnail, etc.)
  - style: Fotorrealístico / artístico / abstrato / etc.
  - brand: Nome da marca (para consistência de cor/tom)
  - format: Dimensões finais necessárias
  - model: Modelo preferido (auto-selecionado se não especificado)
Saida: |
  - images: Arquivos gerados (upscaled)
  - prompt_archive: Prompts documentados com parâmetros
  - selection_notes: Justificativa de seleção
Checklist:
  - "[ ] Brief analisado e decomposto"
  - "[ ] 5+ referências coletadas"
  - "[ ] 3 variações de prompt criadas"
  - "[ ] Modelo selecionado e justificado"
  - "[ ] Geração: 10-20 imagens na primeira rodada"
  - "[ ] 3-5 candidatos selecionados"
  - "[ ] Iteração nos selecionados"
  - "[ ] Upscale nas melhores"
  - "[ ] Pós-processamento se necessário"
  - "[ ] Prompts arquivados com seeds"
  - "[ ] Entrega organizada por formato"
---

## Purpose

Generate high-quality images using the best AI models with precision prompt engineering, delivering upscaled images organized by platform format with a complete prompt archive for reproducibility.

## Pre-Conditions

- [ ] Image brief clearly defined
- [ ] Target platform and format dimensions specified
- [ ] Brand name provided for color/tone consistency
- [ ] pdg-ai-image-director agent activated
- [ ] Any upstream creative direction tasks completed

# *generate-ai-image

Gera imagens de alta qualidade usando os melhores modelos de IA com prompt engineering de precisão cirúrgica.

## Uso

```
*generate-ai-image --brief "retrato profissional para LinkedIn" --platform linkedin --style realistic
*generate-ai-image --brief "produto cosmético em mármore branco" --platform instagram --brand minha-marca
*generate-ai-image --brief "hero da landing page com pessoa usando laptop" --platform website --format 1920x1080
```

## Seleção Automática de Modelo

| Necessidade | Modelo Selecionado |
|-------------|-------------------|
| Máxima estética artística | Midjourney v7 |
| Texto legível na imagem | Ideogram 2.0 |
| Fotorrealismo extremo | Flux-Pro |
| API/código | DALL-E 3 via OpenAI |
| Controle avançado | SD + ControlNet |
| Consistência de personagem | MJ --cref |
| Budget zero | SD local |

## Formatos de Saída

Os arquivos são entregues em:
- Resolução original gerada
- Upscale para uso final (mínimo 2000px no lado maior)
- Crop por formato de plataforma (quando especificado)

## Prompt Archive Format

```markdown
# [Nome do Projeto] — Prompt Archive
Data: [YYYY-MM-DD]

## Shot 01: [descrição]
**Prompt:**
[prompt completo exato]

**Parâmetros:**
- Modelo: [modelo]
- AR: [ratio]
- Seed: [seed se disponível]
- Stylize: [valor se MJ]

**Resultado:** [rating /5] — [notas de por que foi selecionada ou descartada]
```
