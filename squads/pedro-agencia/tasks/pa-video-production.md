---
task: pa-video-production
agent: pa-frame
description: "Direção criativa e supervisão de produção de vídeo para campanhas"
inputs: [video-scripts, brand-guidelines, budget, timeline]
outputs: [production-brief, casting-spec, shot-list-detailed, post-production-spec]
elicit: true
---

# Task: Direção Criativa e Supervisão de Produção de Vídeo

## Objetivo

Supervisionar e dirigir criativamente todo o processo de produção de vídeo para campanhas de marketing — da pré-produção à entrega final dos arquivos — garantindo que a visão criativa do script seja executada com excelência técnica, dentro do budget e do prazo estabelecidos.

A direção criativa de vídeo é a ponte entre o conceito no papel e o resultado na tela. O pa-frame atua como diretor criativo e produtor executivo simultâneo: garante que cada decisão de casting, locação, iluminação, figurino e edição reforce a mensagem da campanha e fale à linguagem visual da marca. A qualidade da direção pode transformar um orçamento modesto em resultado de agência premium.

Este processo cobre três fases distintas da produção — pré-produção (planejamento e preparação), produção (filmagem e gravação) e pós-produção (edição, motion e entrega) — com pontos de aprovação em cada fase para garantir alinhamento com o cliente e a estratégia de campanha.

## Processo de Execução

### Fase 1 — Pré-Produção: Planning e Budget (Dia 1-2)

1. `*production-breakdown --script "{{script}}" --budget "{{budget}}"` — quebrar script em necessidades de produção
2. Identificar para cada cena: locação, cast, props, equipamentos, crew necessário
3. `*budget-allocation --total "{{budget}}"` — alocar budget por categoria
    - Crew: 30-40% do budget total (diretor, DP, gaffer, sound, PA)
    - Locação: 15-20% (aluguel, permissões, production design)
    - Cast: 10-20% (atores, modelos, extras, UGC creators)
    - Equipment: 15-20% (câmeras, lenses, grip, lighting, sound)
    - Pós-produção: 15-25% (edição, color, motion, sound design, music)
    - Contingência: 10% obrigatório
4. `*production-schedule --shoot-days "{{days}}" --timeline "{{timeline}}"` — cronograma de produção
5. Definir: dias de pré-produção, dias de filmagem, dias de pós-produção, datas de aprovação
6. `*location-search --type "{{location_type}}" --budget "{{location_budget}}"` — briefing de locações
7. Critérios de locação: brand fit, logística (carga/descarga), luz natural, acústica, acesso
8. `*permits-checklist --locations "{{locations}}"` — verificar necessidade de permissões e seguros

Entregável: Production Breakdown + Budget Allocation + Production Schedule

---

### Fase 2 — Casting e Especificações de Elenco (Dia 2-3)

9. `*casting-brief --persona "{{audience_persona}}" --brand "{{brand}}"` — criar brief de casting
10. O cast deve espelhar o avatar do cliente — não modelos genéricos, mas pessoas com quem a audiência se identifica
11. Definir para cada personagem:
    - Perfil demográfico: idade, gênero, etnia, estilo
    - Perfil psicográfico: personalidade, valores, lifestyle que deve transmitir
    - Habilidades específicas: conduzir, falar fluentemente, demonstrar produto
    - Restrições: tatuagens, idioma, experiência on-camera
12. `*casting-options --roles "{{roles}}"` — definir pool de opções por papel
    - Opção A: Atores profissionais (maior controle, maior custo)
    - Opção B: UGC creators especializados (alta autenticidade, custo moderado)
    - Opção C: Clientes reais da marca (máxima autenticidade, menor controle)
13. `*wardrobe-brief --cast "{{cast}}" --brand "{{brand}}"` — brief de figurino por personagem
14. Figurino deve comunicar: posição social, lifestyle e congruência com o produto
15. `*talent-contracts --type usage-rights` — verificar contratos e direitos de uso de imagem
16. Definir: escopo de uso (digital, TV, OOH), duração, territórios, buyouts

Entregável: Casting Brief + Wardrobe Brief + Rights & Contracts Spec

---

### Fase 3 — Briefing Técnico de Produção (Dia 3-4)

17. `*cinematography-brief --style "{{style}}" --brand "{{brand}}"` — brief de direção de fotografia
18. Definir look visual da campanha:
    - Paleta de cor: quente/fria, saturada/dessaturada, contraste alto/baixo
    - Estilo de iluminação: natural, artificial soft, dramatic, high-key, low-key
    - Profundidade de campo: shallow (foco seletivo) ou deep (tudo em foco)
    - Movimento de câmera: estático e calculado, ou handheld e dinâmico
    - Referências de filmes ou campanhas como referência de look
19. `*equipment-list --look "{{cinematography_style}}"` — lista de equipamentos
    - Câmera body: Sony FX3, RED Komodo, ARRI Alexa (conforme budget)
    - Lentes: primes vs zoom, focal lengths para cada tipo de plano
    - Stabilização: tripé, slider, gimbal, steadicam, drone
    - Iluminação: ARRI SkyPanel, Aputure 600d, Chimera, reflectors
    - Sound: Rode NTG, DPA lavs, Sound Devices mixer
20. `*shot-list-detailed --scenes all` — shot list detalhada com informações técnicas
21. Para cada plano: scene number, shot number, description, focal length, movement, lighting setup, duration
22. `*call-sheet-template --day-1` — template de call sheet por dia de filmagem
23. Call sheet deve incluir: crew, cast, locação, horários, cenas do dia, equipamentos, catering

Entregável: Cinematography Brief + Equipment List + Detailed Shot List + Call Sheet Template

---

### Fase 4 — Supervisão do Dia de Filmagem (Dia de Set)

24. `*pre-shoot-checklist --shoot-day "{{date}}"` — checklist de pré-set
25. Verificar antes de começar a filmar:
    - [ ] Todos os equipamentos funcionando e carregados
    - [ ] Locação preparada e approved
    - [ ] Cast briefado e com wardrobe correta
    - [ ] Props prontos e aprovados
    - [ ] Sound design: verificar ruído ambiente da locação
    - [ ] Monitor externo conectado para referência de framing
26. `*coverage-strategy --scenes "{{scenes_of_day}}"` — estratégia de cobertura por dia
27. Filmar em ordem de locação (não de script) para otimizar logística e luz
28. Mínimo de takes por plano: 3 (wide, medium, close — para edição ter opções)
29. `*performance-direction --actors "{{cast}}"` — direção de performance para atores
30. Técnicas de direção: ação/emoção (dar emoção ao ator, não instrução técnica), adjustments sutis
31. `*on-set-review --frequency per-scene` — review de material no set
32. Não liberar locação sem confirmar que todos os planos necessários foram capturados
33. `*b-roll-checklist --scenes all` — garantir cobertura de b-roll para edição
34. B-roll: mínimo 3x a quantidade de material necessário para a edição final

Entregável: Footage Aprovado + B-Roll Library + Behind the Scenes Assets

---

### Fase 5 — Direção de Pós-Produção (Dia 5-8)

35. `*post-production-brief --editor "{{editor}}"` — brief completo para editor
36. Brief de edição deve incluir:
    - Estrutura narrativa desejada (referência ao script)
    - Ritmo e pacing: cortes lentos e emocionais, ou rápidos e energéticos
    - Referências de edição: campanhas ou filmes com o ritmo desejado
    - Música: track selecionada ou mood para seleção
    - Motion graphics: onde, estilo, paleta
    - Entregáveis: versões (main, 60s, 30s, 15s, stories, square)
37. `*rough-cut-review --version 1` — revisão do primeiro corte
38. Na revisão do rough cut avaliar: ritmo, narrativa, performance de câmera, cobertura
39. `*color-brief --look "{{color_grade_reference}}"` — brief de color grading
40. Color grade define o tom emocional final — definir LUT de referência ou mood visual
41. `*sound-design-brief --music "{{track}}" --sfx true` — brief de sound design
42. Som: música de apoio, sound effects, narração (se houver), mixagem final
43. `*motion-graphics-brief --elements "{{mg_elements}}"` — brief de motion graphics
44. Lower thirds, títulos, animações de produto, CTAs animados
45. `*final-cut-review --version 3` — revisão do corte final antes da entrega

Entregável: Post-Production Brief + Rough Cut Feedback + Final Cut Approved

---

### Fase 6 — Entrega Final e Assets (Dia 8-10)

46. `*deliverables-checklist --formats "{{formats}}"` — checklist de entregáveis
47. Formatos de entrega por plataforma:
    - YouTube: 16:9, 1080p ou 4K, H.264 ou H.265, AAC audio
    - Meta Ads: 1:1, 4:5, 9:16 — versões de 15s, 30s, 60s
    - TikTok: 9:16, 1080x1920, 15-60s
    - LinkedIn: 16:9, 1:1 — versão com captions hard-coded
    - Stories: 9:16, 1080x1920, 15s por story
48. `*caption-export --format srt,vtt` — exportar legendas em formatos padrão
49. `*archive-package --raw-footage true` — pacote de arquivamento
50. Arquivar: footage original, projeto de edição, exports finais, assets de motion
51. `*usage-report --assets "{{assets}}"` — relatório de uso de direitos de imagem
52. Documentar: cast utilizado, músicas, footage licenciado e termos de uso
53. `*delivery-meeting --client true` — reunião de entrega com cliente

Entregável: Assets Finais em Todos os Formatos + Captions + Archive Package + Usage Report

---

## Comandos Disponíveis

- `*production-breakdown` — Quebrar script em necessidades de produção
- `*budget-allocation` — Alocar budget por categoria de produção
- `*production-schedule` — Cronograma de pré-produção, filmagem e pós
- `*location-search` — Briefing e critérios para busca de locações
- `*permits-checklist` — Verificar permissões e seguros necessários
- `*casting-brief` — Brief completo de casting por personagem
- `*wardrobe-brief` — Brief de figurino por personagem
- `*talent-contracts` — Spec de contratos e direitos de imagem
- `*cinematography-brief` — Brief de direção de fotografia e look
- `*equipment-list` — Lista de equipamentos por look desejado
- `*shot-list-detailed` — Shot list com informações técnicas completas
- `*call-sheet-template` — Template de call sheet por dia de filmagem
- `*pre-shoot-checklist` — Checklist de verificação pré-set
- `*coverage-strategy` — Estratégia de cobertura por dia de filmagem
- `*performance-direction` — Diretrizes de direção de performance
- `*on-set-review` — Review de material no set
- `*b-roll-checklist` — Checklist de cobertura de b-roll
- `*post-production-brief` — Brief completo para editor
- `*rough-cut-review` — Revisão do primeiro corte
- `*color-brief` — Brief de color grading
- `*sound-design-brief` — Brief de sound design e mixagem
- `*motion-graphics-brief` — Brief de motion graphics
- `*final-cut-review` — Revisão do corte final
- `*deliverables-checklist` — Checklist de entregáveis por plataforma
- `*caption-export` — Exportar legendas em formatos padrão
- `*archive-package` — Pacote de arquivamento completo
- `*delivery-meeting` — Reunião de entrega com cliente

## Critérios de Conclusão

- [ ] Production breakdown completo com todas as cenas analisadas
- [ ] Budget alocado com 10% de contingência reservado
- [ ] Cronograma de produção aprovado com datas de entrega confirmadas
- [ ] Casting brief elaborado com perfil demográfico e psicográfico por papel
- [ ] Contratos e direitos de imagem de cast definidos antes das filmagens
- [ ] Cinematography brief aprovado com referências visuais
- [ ] Shot list detalhada com informações técnicas por plano
- [ ] Filmagem concluída com cobertura completa de todos os planos + b-roll
- [ ] Post-production brief entregue ao editor com referências e entregáveis
- [ ] Rough cut revisado com feedback documentado
- [ ] Color grade e sound design aprovados
- [ ] Assets finais exportados em todos os formatos por plataforma
- [ ] Captions exportadas em SRT e VTT
- [ ] Archive package organizado e entregue ao cliente
