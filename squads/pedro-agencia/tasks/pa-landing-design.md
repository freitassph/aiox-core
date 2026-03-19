---
task: pa-landing-design
agent: pa-nexus
description: "Design e estrutura de landing pages de alta conversão"
inputs: [copy, brand-guidelines, audience-persona, conversion-goal]
outputs: [landing-page-wireframe, design-spec, mobile-design, handoff-to-dev]
elicit: true
---

# Task: Landing Page Design de Alta Conversão

## Objetivo

Criar o design completo de landing pages orientadas a conversão — da arquitetura de informação ao handoff de desenvolvimento — garantindo que cada elemento visual, hierárquico e interativo trabalhe em direção a uma única meta: converter o visitante em lead ou cliente.

O processo combina princípios de CRO (Conversion Rate Optimization), design de UX persuasivo e boas práticas de performance para entregar páginas que não apenas parecem profissionais, mas que geram resultados mensuráveis. Cada decisão de design deve ser justificada por dados, heurísticas de conversão ou testes anteriores.

A landing page é o ativo de marketing com maior impacto direto em custo por lead e ROAS de campanhas pagas. Um design bem executado pode reduzir o CPL em 40-60% comparado a páginas genéricas. Este processo garante qualidade de agência top tier em cada entrega.

## Processo de Execução

### Fase 1 — CRO Research e Benchmarking (Dia 1)

1. `*cro-research --goal "{{conversion_goal}}" --industry "{{industry}}"` — levantar benchmarks de conversão do segmento
2. Identificar CVR (Conversion Rate) médio da indústria para a oferta: lead, trial, compra, cadastro
3. `*competitor-lp-audit --competitors "{{competitors}}" --depth full` — analisar landing pages de concorrentes diretos
4. Mapear: estrutura, headline patterns, social proof types, CTA language, page length
5. `*heatmap-research --page-type landing --industry "{{industry}}"` — estudar padrões de eye-tracking e scroll depth
6. Documentar: onde usuários olham primeiro, onde perdem atenção, onde convertem
7. `*objection-mapping --persona "{{audience_persona}}" --offer "{{conversion_goal}}"` — mapear objeções do avatar
8. Priorizar top 5 objeções que o design deve endereçar visualmente
9. Definir Value Proposition Matrix: feature → benefit → emotional outcome

Entregável: CRO Research Report + Competitor Analysis + Objection Map

---

### Fase 2 — Arquitetura de Informação e Wireframe (Dia 2-3)

10. `*page-architecture --goal "{{conversion_goal}}" --persona "{{audience_persona}}"` — estruturar hierarquia da página
11. Definir sequência de seções baseada no awareness level do tráfego:
    - Tráfego frio (ads): Hero → Problema → Solução → Prova → CTA → FAQ → CTA final
    - Tráfego morno (email): Hero simplificado → Features → Social proof → CTA
    - Tráfego quente (retargeting): CTA direto → Urgência → Garantia → CTA final
12. `*wireframe-lo --sections "{{sections}}"` — criar wireframe de baixa fidelidade para validação
13. Revisar com critérios LIFT: Value Proposition, Relevance, Clarity, Anxiety, Distraction, Urgency
14. `*wireframe-hi --approved true` — evoluir para wireframe de alta fidelidade
15. Documentar grid system, espaçamentos, breakpoints e componentes reutilizáveis
16. Definir visual hierarchy: H1 → H2 → Body → CTA → Supporting text
17. Mapear todos os elementos interativos: formulários, botões, modais, sticky bars

Entregável: Wireframe Lo-Fi aprovado + Wireframe Hi-Fi com anotações

---

### Fase 3 — Hero Section e Above-the-Fold (Dia 3-4)

18. `*hero-design --headline "{{headline}}" --brand "{{brand}}"` — criar seção hero de alta conversão
19. Above-the-fold DEVE conter: headline clara, sub-headline, visual de suporte, CTA primário
20. Testar 3 variações de headline:
    - Orientada a problema: "Cansado de perder clientes por causa de..."
    - Orientada a resultado: "Aumente suas vendas em X% em 90 dias"
    - Orientada a curiosidade: "O método que empresas como X usam para..."
21. `*visual-hierarchy --section hero` — validar que olho vai direto para CTA
22. Aplicar regra de 5 segundos: visitante deve entender a oferta em < 5 segundos
23. Hero image/video: mostrar produto em uso, resultado desejado ou avatar do cliente
24. `*above-fold-checklist` — validar todos os elementos críticos estão presentes
25. Verificar: headline forte, proposta de valor clara, CTA visível, proof element (selo, star rating, logos)

Entregável: Hero Section Design + 3 Variações de Headline

---

### Fase 4 — Social Proof e Seções de Confiança (Dia 4-5)

26. `*social-proof-design --types "{{proof_types}}"` — desenhar seções de prova social
27. Hierarquia de social proof por impacto:
    - Tier 1: Case studies com números específicos (cliente X aumentou vendas em 137%)
    - Tier 2: Depoimentos em vídeo de clientes reais com nome, foto e cargo
    - Tier 3: Logos de empresas clientes (especialmente reconhecidas)
    - Tier 4: Star ratings + número de avaliações (Google, G2, Trustpilot)
    - Tier 5: Menções em mídia, prêmios, certificações
28. `*testimonial-design --format card` — layout de depoimentos com máximo impacto visual
29. Cada depoimento deve ter: foto real, nome completo, cargo/empresa, resultado específico
30. `*trust-signals --placement strategic` — posicionar trust signals em pontos de abandono
31. Selos de segurança: SSL, garantia, privacidade — críticos próximos a formulários
32. `*credibility-section --elements logos,awards,media` — seção de credibilidade institucional
33. Verificar autenticidade visual: evitar stock photos genéricas, priorizar fotos reais

Entregável: Social Proof Section Designs + Trust Signal Placements

---

### Fase 5 — Estratégia de CTA e Formulários (Dia 5-6)

34. `*cta-strategy --goal "{{conversion_goal}}" --page-length "{{sections}}"` — estratégia de CTAs na página
35. Definir: CTA primário, CTA secundário (micro-conversão) e CTAs de recuperação
36. Posicionamento de CTAs:
    - CTA 1: Above the fold (após hero)
    - CTA 2: Após seção de benefícios
    - CTA 3: Após social proof (maior intensidade)
    - CTA 4: No footer com urgência ou oferta especial
37. `*cta-copy --goal "{{conversion_goal}}"` — criar copy de CTAs orientada a ação e benefício
38. CTAs devem especificar: ação + benefício + velocidade (ex: "Quero Meu Relatório Grátis Agora")
39. `*form-design --fields "{{form_fields}}" --friction low` — design de formulário otimizado
40. Princípio de mínimo atrito: pedir apenas informações absolutamente necessárias
41. Para formulários longos: multi-step com progress bar reduz abandono em até 40%
42. `*urgency-design --type scarcity` — elementos de urgência e escassez quando aplicável
43. Garantias: visual de garantia reduz ansiedade e aumenta conversão — posicionar próximo ao CTA

Entregável: CTA Strategy Document + Form Designs + Urgency Elements

---

### Fase 6 — Mobile-First Design (Dia 6-7)

44. `*mobile-audit --baseline desktop` — identificar elementos que precisam adaptação mobile
45. Regras mobile para alta conversão:
    - CTA deve ser visível sem scroll no mobile (sticky bottom bar quando necessário)
    - Textos: mínimo 16px para body, headlines reduzidas proporcionalmente
    - Imagens: otimizadas para bandwidth mobile, lazy loading configurado
    - Formulários: campos nativos mobile (teclado numérico para telefone, etc.)
    - Botões: mínimo 44px de altura (Apple HIG) para tap targets
46. `*mobile-wireframe --breakpoints 375,768,1440` — wireframes para cada breakpoint
47. Breakpoint 375px (iPhone SE): layout mais crítico, maioria do tráfego pago é mobile
48. Breakpoint 768px (tablet): layout intermediário
49. Breakpoint 1440px (desktop): layout completo
50. `*mobile-cta-strategy --sticky true` — CTA sticky bottom bar para mobile
51. Considerar: scroll depth médio no mobile é 50% menor — conteúdo crítico deve ser antecipado
52. `*tap-target-audit --min-size 44px` — verificar todos os elementos interativos
53. Testar: formulários, CTAs, menus e links têm área de toque adequada

Entregável: Mobile Design Completo em 3 Breakpoints + Mobile CTA Strategy

---

### Fase 7 — Design Spec e Handoff para Dev (Dia 7-8)

54. `*design-spec --output handoff` — gerar especificação técnica completa para desenvolvimento
55. Design Spec deve incluir:
    - Tokens de design: cores (hex), tipografia (família, peso, tamanho, line-height), espaçamentos
    - Grid system: colunas, gutters, margens por breakpoint
    - Componentes: especificação de cada componente reutilizável com estados (default, hover, focus, active, disabled)
    - Assets: lista de imagens, ícones e elementos gráficos com dimensões e formatos
56. `*asset-export --formats webp,svg,png` — exportar todos os assets em formatos otimizados
57. Naming convention: `lp-{section}-{element}-{variant}.{ext}` (ex: `lp-hero-bg-mobile.webp`)
58. `*animation-spec --interactions hover,scroll,form` — documentar micro-interações e animações
59. Animações de entrada: elementos devem aparecer com fade ou slide ao entrar no viewport
60. `*performance-requirements --target lcp-2s fid-100ms cls-0.1` — especificar metas de Core Web Vitals
61. `*ab-test-plan --variants 3 --primary-metric cvr` — documentar plano de teste A/B pós-lançamento
62. `*handoff-meeting --agenda review-spec` — agendar sessão de handoff com dev team

Entregável: Design Spec Completo + Asset Library + Handoff Document + AB Test Plan

---

## Comandos Disponíveis

- `*cro-research` — Pesquisa de benchmarks de conversão por indústria
- `*competitor-lp-audit` — Análise de landing pages de concorrentes
- `*objection-mapping` — Mapeamento de objeções do avatar de cliente
- `*page-architecture` — Estruturar hierarquia e sequência de seções
- `*wireframe-lo` — Wireframe de baixa fidelidade para validação
- `*wireframe-hi` — Wireframe de alta fidelidade com anotações
- `*hero-design` — Criar seção hero de alta conversão
- `*visual-hierarchy` — Validar hierarquia visual por seção
- `*above-fold-checklist` — Checklist de elementos críticos above the fold
- `*social-proof-design` — Design de seções de prova social
- `*testimonial-design` — Layout de depoimentos
- `*trust-signals` — Posicionamento estratégico de trust signals
- `*cta-strategy` — Estratégia de CTAs na página
- `*cta-copy` — Copy de CTAs orientada a benefício
- `*form-design` — Design de formulário de baixo atrito
- `*urgency-design` — Elementos de urgência e escassez
- `*mobile-wireframe` — Wireframes mobile por breakpoint
- `*mobile-cta-strategy` — Estratégia de CTA sticky para mobile
- `*tap-target-audit` — Auditoria de touch targets mobile
- `*design-spec` — Gerar especificação técnica para dev
- `*asset-export` — Exportar assets em formatos otimizados
- `*animation-spec` — Documentar micro-interações e animações
- `*ab-test-plan` — Plano de teste A/B pós-lançamento
- `*handoff-meeting` — Sessão de handoff com time de desenvolvimento

## Critérios de Conclusão

- [ ] CRO Research com benchmarks de conversão da indústria documentados
- [ ] Mapa de objeções com top 5 objeções endereçadas no design
- [ ] Wireframe lo-fi aprovado pelo cliente antes de evoluir para hi-fi
- [ ] Hero section com 3 variações de headline testáveis
- [ ] Social proof com pelo menos Tier 2 (depoimentos com foto e resultado)
- [ ] Estratégia de CTA documentada com posicionamento em cada seção
- [ ] Formulário com mínimo de campos necessários (princípio de baixo atrito)
- [ ] Design mobile-first completo nos breakpoints 375px, 768px e 1440px
- [ ] CTAs mobile visíveis sem scroll (sticky bar quando necessário)
- [ ] Design Spec com todos os tokens, componentes e estados documentados
- [ ] Asset library exportada com naming convention padronizado
- [ ] Plano de teste A/B pós-lançamento com hipóteses documentadas
- [ ] Handoff para dev realizado com reunião de alinhamento
