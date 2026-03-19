---
task: pa-seo-audit
agent: pa-vertex
description: "Auditoria técnica completa de SEO — diagnóstico, prioridades e plano de ação"
inputs: [website-url, ga4-access, gsc-access, competitors]
outputs: [technical-seo-report, content-audit, backlink-analysis, priority-action-plan]
elicit: true
---

# Task: SEO Audit — Diagnóstico Técnico Completo

## Objetivo

Realizar uma auditoria técnica completa de SEO que revela o estado real do site em todas as dimensões que impactam o ranqueamento orgânico. O diagnóstico cobre desde problemas de infraestrutura técnica até oportunidades de conteúdo e perfil de backlinks.

O output desta task é um documento de inteligência estratégica — não apenas uma lista de erros, mas uma análise priorizada que conecta problemas técnicos a impacto de negócio real. Cada problema identificado recebe um score de prioridade baseado em esforço vs impacto potencial no tráfego.

O plano de ação resultante é executável imediatamente, com responsáveis claros, prazos sugeridos e métricas de sucesso para cada intervenção. O cliente recebe clareza total sobre onde está, por que está nessa posição e exatamente o que fazer para melhorar.

## Processo de Execução

### Fase 1 — Technical Crawl (Dia 1, 3-4h)

1. Configurar ferramenta de crawl com parâmetros do site: `*crawl-setup --url "{{website-url}}" --depth 5 --include-subdomains`
2. Executar crawl completo e exportar relatório de erros: `*crawl-run --export "technical-raw.json" --flag-broken-links --flag-redirects --flag-duplicate-content`
3. Auditar estrutura de URLs — padrões, canonicals, parâmetros dinâmicos: `*url-audit --check-canonicals --check-parameters --check-depth "{{website-url}}"`
4. Verificar sitemap XML — completude, erros, páginas excluídas: `*sitemap-audit --url "{{website-url}}/sitemap.xml" --compare-crawl`
5. Auditar robots.txt — bloqueios, diretivas, compatibilidade: `*robots-audit --url "{{website-url}}/robots.txt" --test-googlebot`
6. Verificar configuração de indexação — meta robots, noindex, crawl budget: `*indexation-audit --connect-gsc "{{gsc-access}}" --find-indexation-issues`
7. Analisar arquitetura de links internos — distribuição de PageRank, orphan pages: `*internal-links-audit --export "link-graph.json" --find-orphans`
8. Checar hreflang e configuração multilíngue se aplicável: `*hreflang-audit --url "{{website-url}}"`

Entregável: `technical-crawl-report.json` com todos os erros técnicos categorizados por tipo e severidade.

---

### Fase 2 — Core Web Vitals & Performance (Dia 1-2, 2-3h)

1. Executar análise de Core Web Vitals via PageSpeed Insights para top 20 páginas: `*cwv-audit --pages "top-20-by-traffic" --device both --export "cwv-report.json"`
2. Auditar LCP — identificar elementos causadores, otimizações de imagem, critical path: `*lcp-audit --url "{{website-url}}" --trace-render-blocking`
3. Analisar CLS — shifts de layout, reserva de espaço para embeds, fontes: `*cls-audit --url "{{website-url}}" --flag-layout-shifts`
4. Verificar INP/FID — JavaScript blocking, event handlers, third-party scripts: `*inp-audit --url "{{website-url}}" --profile-js-execution`
5. Auditar velocidade de servidor — TTFB, CDN, configuração de cache: `*server-speed-audit --url "{{website-url}}" --test-regions "BR,US,EU" --check-cdn`
6. Analisar mobile usability — viewport, tap targets, text legibility: `*mobile-audit --connect-gsc "{{gsc-access}}" --flag-usability-errors`
7. Verificar HTTPS e segurança — certificado, mixed content, HSTS: `*security-audit --url "{{website-url}}" --check-https --check-mixed-content`

Entregável: `performance-audit.md` com scores de CWV por página e lista de otimizações priorizadas por impacto.

---

### Fase 3 — Content Audit (Dia 2, 3-4h)

1. Exportar todas as URLs indexadas do GSC e cruzar com crawl: `*content-inventory --connect-gsc "{{gsc-access}}" --connect-crawl "technical-crawl-report.json" --export "content-inventory.csv"`
2. Classificar conteúdo por performance — impressões, cliques, CTR, posição média: `*content-performance --connect-gsc "{{gsc-access}}" --period 12m --classify "high/medium/low/zero"`
3. Identificar keyword cannibalization — múltiplas páginas competindo pelo mesmo termo: `*cannibalization-audit --inventory "content-inventory.csv" --gsc-data "gsc-export.json"`
4. Auditar qualidade de conteúdo — thin content, duplicate content, content length vs intent: `*content-quality-audit --inventory "content-inventory.csv" --min-word-count 300`
5. Verificar meta tags — title tags, meta descriptions, OG tags, structured data: `*meta-audit --crawl-data "technical-crawl-report.json" --check-schema-markup`
6. Analisar heading structure — hierarquia H1-H6, keyword usage, featured snippet potential: `*heading-audit --crawl-data "technical-crawl-report.json"`
7. Identificar oportunidades de content refresh — páginas caindo no ranking com potencial de recuperação: `*content-decay-audit --connect-gsc "{{gsc-access}}" --period 18m --flag-declining`
8. Mapear gaps de conteúdo vs search intent — queries sem página correspondente: `*intent-gap-audit --connect-gsc "{{gsc-access}}" --connect-ga4 "{{ga4-access}}"`

Entregável: `content-audit.xlsx` com classificação completa do inventário de conteúdo e oportunidades identificadas.

---

### Fase 4 — Backlink Analysis (Dia 2-3, 2-3h)

1. Extrair perfil completo de backlinks de múltiplas fontes: `*backlink-export --url "{{website-url}}" --sources "ahrefs,semrush,majestic" --export "backlinks-raw.json"`
2. Analisar autoridade e qualidade dos domínios referenciadores — DR/DA distribution: `*backlink-quality-audit --data "backlinks-raw.json" --classify-domains`
3. Identificar backlinks tóxicos e spam — score de toxicidade, anchor text manipulation: `*toxic-links-audit --data "backlinks-raw.json" --export "disavow-candidates.txt"`
4. Analisar distribuição de anchor text — natural vs over-optimized: `*anchor-text-audit --data "backlinks-raw.json" --flag-over-optimization`
5. Verificar backlinks perdidos — links removidos nos últimos 6 meses com potencial de recuperação: `*lost-links-audit --data "backlinks-raw.json" --period 6m --export "reclamation-opportunities.csv"`
6. Identificar linking opportunities — sites relevantes do nicho sem backlink: `*link-gap-audit --competitors "{{competitors}}" --url "{{website-url}}" --export "link-gap.csv"`
7. Analisar brand mentions sem link — menções não linkadas que podem ser convertidas: `*brand-mentions-audit --brand "{{brand-name}}" --export "unlinked-mentions.csv"`

Entregável: `backlink-analysis.md` com perfil atual, riscos identificados e oportunidades de link building.

---

### Fase 5 — Competitor SEO Analysis (Dia 3, 2-3h)

1. Mapear visibilidade orgânica dos concorrentes vs site auditado: `*competitor-visibility --url "{{website-url}}" --competitors "{{competitors}}" --export "visibility-comparison.json"`
2. Identificar keywords dos concorrentes não ranqueadas pelo site: `*competitor-keyword-gap --competitors "{{competitors}}" --url "{{website-url}}" --export "keyword-gap.csv"`
3. Analisar perfil de backlinks dos concorrentes — fontes únicas e shared: `*competitor-backlinks --competitors "{{competitors}}" --url "{{website-url}}" --export "backlink-gap.csv"`
4. Auditar estrutura de conteúdo dos concorrentes — tópicos cobertos, formatos, frequência: `*competitor-content-audit --competitors "{{competitors}}" --period 12m`
5. Comparar Core Web Vitals dos concorrentes: `*competitor-cwv --competitors "{{competitors}}" --export "cwv-comparison.json"`
6. Identificar featured snippets dos concorrentes — oportunidades de captura: `*snippet-opportunities --competitors "{{competitors}}" --url "{{website-url}}" --export "snippet-targets.csv"`

Entregável: `competitor-seo-analysis.md` com benchmark de posicionamento e lacunas exploráveis.

---

### Fase 6 — Priority Roadmap (Dia 3-4, 2-3h)

1. Consolidar todos os issues identificados nas fases anteriores em matriz única: `*issue-consolidation --inputs "technical,performance,content,backlinks,competitors" --export "all-issues.json"`
2. Scorar cada issue por impacto potencial no tráfego, esforço de implementação e urgência: `*priority-scoring --issues "all-issues.json" --model "impact-effort-urgency" --export "priority-matrix.json"`
3. Agrupar em sprints de 30/60/90 dias com responsáveis sugeridos: `*roadmap-builder --priorities "priority-matrix.json" --sprints 3 --export "seo-roadmap.yaml"`
4. Calcular projeção de tráfego incremental por sprint baseado em benchmarks do setor: `*traffic-projections --roadmap "seo-roadmap.yaml" --connect-gsc "{{gsc-access}}" --export "projections.json"`
5. Gerar executive summary com top 3 wins rápidos e top 3 iniciativas estratégicas: `*executive-summary --all-data "." --export "seo-executive-summary.md"`
6. Formatar relatório final completo em documento apresentável ao cliente: `*report-compile --template "seo-audit-report" --all-data "." --export "technical-seo-report-final.pdf"`

Entregável: `priority-action-plan.md` com roadmap executável de 90 dias e projeções de resultado.

---

## Comandos Disponíveis

- `*crawl-setup` — Configurar parâmetros de crawl para o domínio
- `*cwv-audit` — Análise de Core Web Vitals via PageSpeed
- `*content-inventory` — Inventário completo de URLs e conteúdo
- `*backlink-export` — Exportação de perfil de backlinks
- `*competitor-visibility` — Comparativo de visibilidade orgânica
- `*priority-scoring` — Scoragem de issues por impacto/esforço
- `*roadmap-builder` — Construção de roadmap priorizado
- `*traffic-projections` — Projeção de tráfego incremental
- `*report-compile` — Compilação do relatório final
- `*executive-summary` — Geração de sumário executivo

## Critérios de Conclusão

- [ ] Technical crawl executado com 100% das URLs do site analisadas
- [ ] Core Web Vitals medidos para todas as páginas de alto tráfego (desktop e mobile)
- [ ] Content audit completo com todas as URLs classificadas por performance
- [ ] Keyword cannibalization identificada e mapeada
- [ ] Perfil de backlinks exportado e toxicidade avaliada
- [ ] Análise competitiva de SEO para todos os concorrentes listados
- [ ] Todos os issues consolidados em priority matrix com scores
- [ ] Roadmap de 90 dias construído com sprints e responsáveis
- [ ] Projeções de tráfego calculadas por sprint
- [ ] Relatório final formatado e pronto para apresentação ao cliente
- [ ] Executive summary com top wins rápidos e iniciativas estratégicas
