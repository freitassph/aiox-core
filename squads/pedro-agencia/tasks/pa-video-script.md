---
task: pa-video-script
agent: pa-frame
description: "Roteiros e scripts para todos os formatos de vídeo de marketing"
inputs: [creative-brief, key-message, format, duration, platform]
outputs: [video-scripts, storyboards, shot-list, production-notes]
elicit: true
---

# Task: Roteiros e Scripts de Vídeo de Marketing

## Objetivo

Criar roteiros, scripts e storyboards completos para todos os formatos de vídeo utilizados em campanhas de marketing — desde reels de 15 segundos até documentários de marca de 5 minutos — com foco em retenção de audiência, engajamento e conversão.

Um script de vídeo de marketing não é apenas texto falado: é uma orquestração de linguagem visual, narrativa emocional, ritmo de edição e call-to-action que deve funcionar com ou sem som (85% dos vídeos em feed são assistidos mutados). O processo aqui garante que cada segundo do vídeo seja justificado, intencional e orientado ao objetivo de conversão ou engajamento.

O pa-frame opera como director-writer híbrido: escreve o script, mapeia cada cena no storyboard, especifica ângulos de câmera, ritmo de edição e considera as particularidades de algoritmo de cada plataforma — porque um vídeo excelente no YouTube pode ser um fracasso no TikTok se não respeitar as convenções de formato e comportamento de cada audiência.

## Processo de Execução

### Fase 1 — Análise do Brief e Definição de Objetivos (Dia 1)

1. `*brief-analysis --brief "{{creative_brief}}"` — análise profunda do creative brief
2. Extrair: objetivo de negócio, mensagem central, audiência primária, plataforma, formato, duração
3. Definir KPIs do vídeo: view rate, VTR (view-through rate), CTR, conversões atribuídas
4. `*platform-guidelines --platform "{{platform}}"` — levantar specs e melhores práticas da plataforma
    - YouTube: algoritmo valoriza retenção > 50%, CTR de thumbnail e engagement
    - TikTok: primeiros 3 segundos são críticos, tendências de som e formato
    - Instagram Reels: hooks visuais, texto na tela, cortes rápidos
    - LinkedIn: tom profissional, captions obrigatórias, primeiros 3s sem som
    - Meta Ads: mobile-first, texto mínimo na imagem, CTA claro antes dos 15s
5. `*audience-behavior --platform "{{platform}}" --persona "{{audience}}"` — como a audiência consome vídeo na plataforma
6. Mapear: onde perdem atenção, o que os mantém assistindo, o que os faz compartilhar
7. Definir: Story spine — setup → tension → resolution

Entregável: Brief Analysis Document + Platform Guidelines + Story Spine

---

### Fase 2 — Estrutura Narrativa e Story Architecture (Dia 1-2)

8. `*story-structure --format "{{format}}" --duration "{{duration}}"` — arquitetura narrativa
9. Estruturas por formato:

**Formato 15-30s (Ads):**
- 0-3s: Hook visual ou pergunta que para o scroll
- 3-10s: Problema ou setup rápido
- 10-20s: Solução + prova visual
- 20-30s: CTA claro e direto

**Formato 60-90s (Reels/TikTok Orgânico):**
- 0-3s: Hook — a promessa do que o vídeo vai entregar
- 3-15s: Contexto — por que isso importa para a audiência
- 15-50s: Desenvolvimento — conteúdo de valor ou narrativa
- 50-70s: Clímax — o momento de maior impacto
- 70-90s: CTA natural integrado ao conteúdo

**Formato 3-5min (YouTube/Documentário de Marca):**
- 0-30s: Cold open que prende sem contexto
- 30-60s: Setup do problema ou da jornada
- 1-3min: Desenvolvimento com evidências, depoimentos, demonstração
- 3-4min: Transformação ou resolução
- 4-5min: CTA e próximos passos

10. `*hook-writing --count 5 --format "{{format}}"` — escrever 5 variações de hook
11. Testar: pergunta direta, afirmação chocante, demonstração visual, identificação com dor, promessa de resultado
12. Selecionar top 2 hooks para teste A/B na produção

Entregável: Story Architecture Document + 5 Hooks Variações

---

### Fase 3 — Redação do Script (Dia 2-4)

13. `*script-write --format "{{format}}" --duration "{{duration}}" --hook "{{selected_hook}}"` — escrever script completo
14. Formato do script: duas colunas — VISUAL (esquerda) e ÁUDIO/COPY (direita)

```
TEMPO      | VISUAL                        | ÁUDIO / TEXTO NA TELA
-----------|-------------------------------|--------------------------------
0:00-0:03  | Close-up produto em uso       | "Você ainda faz isso errado..."
0:03-0:07  | Split screen: before/after    | "Esse método mudou tudo pra mim"
```

15. Regras de copy para vídeo:
    - Frases curtas (máximo 10 palavras por linha de narração)
    - Linguagem conversacional — como se falando 1-a-1 com o cliente ideal
    - Verbos de ação no começo das frases
    - Números específicos são mais críveis que afirmações genéricas
16. `*captions-script --version on-screen` — adaptar script para captions na tela
17. Captions na tela devem destacar palavras-chave, não repetir tudo que é dito
18. `*cta-script --goal "{{conversion_goal}}" --placement end` — escrever CTAs integrados
19. CTA deve surgir naturalmente do conteúdo, não parecer adicionado
20. Revisar: script passa no teste dos 3Cs — Claro, Conciso, Convincente?

Entregável: Script Completo (formato duas colunas) + Versão de Captions + CTAs

---

### Fase 4 — Storyboard (Dia 4-5)

21. `*storyboard-create --script "{{script}}"` — criar storyboard frame a frame
22. Para cada cena definir:
    - Frame/thumbnail (descrição detalhada ou referência visual)
    - Tipo de plano: extreme close-up, close-up, médio, americano, aberto, aéreo
    - Movimento de câmera: estático, pan, tilt, tracking, zoom, handheld
    - Duração em segundos
    - Áudio: narração, texto na tela, música, efeito sonoro
    - Notas de direção: emoção, ritmo, energia
23. `*reference-board --style "{{brand_style}}"` — criar moodboard de referências visuais
24. Incluir: referências de iluminação, color grading, estilo de edição, motion graphics
25. `*storyboard-review --criteria brand,message,pacing` — revisar com critérios de brand, mensagem e ritmo
26. Ritmo de edição: ads mobile-first devem ter corte a cada 2-3s para manter atenção

Entregável: Storyboard Completo + Reference Board Visual

---

### Fase 5 — Shot List e Notas de Produção (Dia 5-6)

27. `*shot-list --storyboard "{{storyboard}}"` — extrair shot list do storyboard
28. Shot list deve incluir para cada cena:
    - Número da cena e take
    - Descrição do plano
    - Equipamento necessário (câmera, lente, estabilizador, drone)
    - Iluminação (natural, softbox, ring light, prática)
    - Props necessários
    - Figurino/wardrobe
    - Locação ou set
    - Estimativa de tempo de filmagem
29. `*production-notes --type pre-production` — notas de pré-produção
30. Documentar: dias de filmagem necessários, crew mínimo, equipamentos críticos
31. `*music-brief --mood "{{mood}}" --duration "{{duration}}"` — brief para seleção de trilha sonora
32. Música: define 60% da emoção do vídeo — especificar BPM, mood, gênero, referências
33. `*voice-over-spec --tone "{{tone}}" --gender "{{gender}}"` — especificações de voice over (se aplicável)
34. Incluir: direção de interpretação, ritmo de fala, emoção predominante, referências de voz

Entregável: Shot List Completa + Production Notes + Music Brief + VO Spec

---

### Fase 6 — Revisão e Aprovação (Dia 6-7)

35. `*script-review --criteria clarity,conversion,brand` — revisão contra critérios
36. Checklist de revisão:
    - [ ] Hook para no scroll nos primeiros 3 segundos?
    - [ ] Mensagem central clara sem depender do som?
    - [ ] Social proof presente (depoimento, número, logo)?
    - [ ] CTA específico e claro?
    - [ ] Duração dentro do spec da plataforma?
    - [ ] Tom de voz alinhado ao brand guidelines?
37. `*script-variations --version ab` — criar variação B para teste
38. Variação B: mesmo objetivo, hook diferente ou ordem de argumentos diferente
39. `*read-through --duration check` — cronometrar leitura do script em voz alta
40. Ajustar se necessário: script de 30s lido deve durar 30s, não 35s ou 25s
41. Compilar pacote de entrega final com todos os documentos

Entregável: Script Aprovado + Variação B + Pacote Completo de Produção

---

## Comandos Disponíveis

- `*brief-analysis` — Análise profunda do creative brief
- `*platform-guidelines` — Specs e melhores práticas por plataforma
- `*audience-behavior` — Comportamento da audiência por plataforma
- `*story-structure` — Arquitetura narrativa por formato e duração
- `*hook-writing` — Escrever variações de hook para teste
- `*script-write` — Redação completa do script
- `*captions-script` — Adaptar script para captions na tela
- `*cta-script` — Escrever CTAs integrados ao conteúdo
- `*storyboard-create` — Criar storyboard frame a frame
- `*reference-board` — Moodboard de referências visuais
- `*shot-list` — Extrair shot list do storyboard
- `*production-notes` — Notas de pré-produção e logística
- `*music-brief` — Brief para seleção de trilha sonora
- `*voice-over-spec` — Especificações de voice over
- `*script-review` — Revisão contra critérios de qualidade
- `*script-variations` — Criar variação B para teste A/B
- `*read-through` — Verificar timing do script

## Critérios de Conclusão

- [ ] Brief analysis completo com objetivo, KPIs e persona documentados
- [ ] Story architecture definida com estrutura adequada ao formato e plataforma
- [ ] Mínimo 5 variações de hook escritas com top 2 selecionados para teste
- [ ] Script completo no formato duas colunas (visual + áudio)
- [ ] Script passa no teste dos 3Cs: Claro, Conciso, Convincente
- [ ] Versão de captions otimizada para visualização sem som
- [ ] Storyboard frame a frame com notas de direção
- [ ] Reference board visual com referências de iluminação e edição
- [ ] Shot list completa com equipamentos, locações e estimativas de tempo
- [ ] Music brief com mood, BPM e referências documentadas
- [ ] Variação B do script para teste A/B
- [ ] Timing verificado — duração do script = duração do vídeo
