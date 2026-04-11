# Data Visualization Brief — Brief de Visualização de Dados

> Documento que orienta a criacao de visualizacoes de dados e dashboards, definindo fontes de dados, audiencia, perguntas-chave, tipos de grafico e requisitos de acessibilidade.
> Used by: data-viz-designer, data-analyst, UX-designer, BI-developer

---

## Informações do Projeto
**Nome do Projeto:** ___________
**Data:** ___________
**Responsável:** ___________
**Versao:** ___________

---

## 1. Project Info

| Campo | Valor |
|---|---|
| Projeto | ___________ |
| Stakeholder/Solicitante | ___________ |
| Area/Departamento | ___________ |
| Prioridade | [ ] Alta [ ] Media [ ] Baixa |
| Prazo | ___________ |

### Contexto do Projeto
___________

### Problema que a Visualizacao Resolve
___________

### Escopo (o que esta INCLUIDO)
___________

### Fora do Escopo (o que NAO esta incluido)
___________

---

## 2. Data Sources

| # | Fonte de Dados | Formato | Frequencia de Atualizacao | Responsavel | Link/Acesso | Qualidade dos Dados | Notas |
|---|---|---|---|---|---|---|---|
| 1 | ___________ | [ ] CSV [ ] API [ ] DB [ ] Planilha [ ] Outro | ___________ | ___________ | ___________ | [ ] Alta [ ] Media [ ] Baixa | ___________ |
| 2 | ___________ | [ ] CSV [ ] API [ ] DB [ ] Planilha [ ] Outro | ___________ | ___________ | ___________ | [ ] Alta [ ] Media [ ] Baixa | ___________ |
| 3 | ___________ | [ ] CSV [ ] API [ ] DB [ ] Planilha [ ] Outro | ___________ | ___________ | ___________ | [ ] Alta [ ] Media [ ] Baixa | ___________ |

### Data Quality Notes
| Fonte | Problemas Conhecidos | Tratamento Necessario |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

### Requisitos de Privacidade e Segurança
| Aspecto | Detalhe |
|---|---|
| Dados Pessoais (LGPD)? | [ ] Sim [ ] Nao — Detalhe: ___________ |
| Dados Confidenciais? | [ ] Sim [ ] Nao — Detalhe: ___________ |
| Anonimizacao Necessaria? | [ ] Sim [ ] Nao — Detalhe: ___________ |
| Nivel de Acesso | ___________ |

> note: Verifique a conformidade com LGPD antes de incluir qualquer dado pessoal na visualizacao. Dados agregados e anonimizados sao preferiveis.

---

## 3. Audience

### Usuario Primário
| Campo | Valor |
|---|---|
| Perfil | ___________ |
| Nivel de Familiaridade com Dados | [ ] Leigo [ ] Intermediario [ ] Avancado |
| Frequencia de Uso | [ ] Diaria [ ] Semanal [ ] Mensal [ ] Sob demanda |
| Dispositivo Principal | [ ] Desktop [ ] Tablet [ ] Celular |
| O que precisa saber? | ___________ |
| O que precisa FAZER com os dados? | ___________ |

### Usuarios Secundários
| Perfil | Nivel | Uso | Necessidade |
|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ | ___________ |

---

## 4. Key Questions

### Perguntas que a Visualizacao Deve Responder
| # | Pergunta | Prioridade | Quem Pergunta | Como Validar a Resposta |
|---|---|---|---|---|
| 1 | ___________ | [ ] Alta [ ] Media | ___________ | ___________ |
| 2 | ___________ | [ ] Alta [ ] Media | ___________ | ___________ |
| 3 | ___________ | [ ] Alta [ ] Media | ___________ | ___________ |
| 4 | ___________ | [ ] Media [ ] Baixa | ___________ | ___________ |
| 5 | ___________ | [ ] Media [ ] Baixa | ___________ | ___________ |

### Decisoes Apoiadas pelos Dados
| Decisao | Quem Decide | Frequencia | Dados Necessarios |
|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ | ___________ |

---

## 5. Chart Selection

| # | Metrica / Dado | Tipo de Grafico | Por que este grafico? | Eixo X | Eixo Y | Filtros | Notas |
|---|---|---|---|---|---|---|---|
| 1 | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |
| 2 | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |
| 3 | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |
| 4 | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |
| 5 | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |
| 6 | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |

### Guia Rapido — Quando Usar Cada Grafico
| Tipo de Grafico | Melhor Para | Evitar Quando |
|---|---|---|
| Linha (Line) | Tendencias ao longo do tempo | Comparar categorias |
| Barras (Bar) | Comparar categorias | Series temporais longas |
| Pizza/Donut | Proporcoes simples (ate 5 fatias) | Muitos itens ou comparacoes precisas |
| Dispersao (Scatter) | Relacao entre 2 variaveis | Dados categoricos |
| Mapa (Map/Choropleth) | Dados geograficos | Sem componente geografico |
| Tabela | Valores exatos, consulta detalhada | Padroes visuais rapidos |
| KPI Card | Metrica unica com meta | Multiplos dados |
| Heatmap | Padroes de densidade | Valores absolutos |

> note: Escolha o grafico mais simples que comunica a mensagem. Se precisa de legenda com mais de 5 itens, considere outra forma de visualizacao.

---

## 6. Dashboard Layout

### Wireframe do Dashboard

| Zona | Conteudo | Proporcao | Notas |
|---|---|---|---|
| Topo (Header) | Titulo, filtros globais, periodo | 100% largura | ___________ |
| Linha 1 — KPIs | Cards de metricas principais | 100% largura | ___________ |
| Linha 2 — Principal | Grafico principal | 66% largura | ___________ |
| Linha 2 — Secundario | Grafico complementar | 33% largura | ___________ |
| Linha 3 — Detalhe | Tabela/dados detalhados | 100% largura | ___________ |

### Filtros e Interatividade
| Filtro | Tipo | Valores | Default | Obrigatorio? |
|---|---|---|---|---|
| Periodo | [ ] Date picker [ ] Dropdown | ___________ | ___________ | [ ] |
| Categoria | [ ] Dropdown [ ] Multi-select | ___________ | ___________ | [ ] |
| Regiao | [ ] Dropdown [ ] Mapa | ___________ | ___________ | [ ] |
| Busca | [ ] Text input | ___________ | — | [ ] |

### Hierarquia de Informacao
1. **Mais importante:** ___________ (deve ser visto em ate 5 segundos)
2. **Importante:** ___________ (investigacao basica)
3. **Detalhe:** ___________ (analise profunda)

> note: Aplique a regra "5-30-5": o usuario entende o essencial em 5 segundos, encontra detalhes relevantes em 30 segundos, e pode explorar profundamente em 5 minutos.

---

## 7. Color Palette

### Cores para Dados
| Cor | HEX | Significado/Use |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

### Cores Semanticas
| Token | HEX | Uso |
|---|---|---|
| Positivo | ___________ | Crescimento, sucesso |
| Negativo | ___________ | Queda, alerta |
| Neutro | ___________ | Baseline, referencia |
| Destaque | ___________ | Chamada de atencao |

### Escalas de Cor
| Tipo | Escala | Uso |
|---|---|---|
| Sequencial (clara -> escura) | ___________ | Intensidade, magnitude |
| Divergente (A -> centro -> B) | ___________ | Desvio, positivo vs negativo |
| Categorical (cores distintas) | ___________ | Categorias sem ordem |

> note: Para dados sequenciais, use uma unica cor variando luminosidade. Para dados divergentes, use cores opostas com ponto central neutro. Garanta que a escala e perceptivel para daltônicos (evite vermelho/verde juntos).

---

## 8. Accessibility Needs

### Checklist de Acessibilidade
| Requisito | Especificacao | Status |
|---|---|---|
| Contraste minimo | 4.5:1 para texto, 3:1 para elementos graficos | [ ] Verificado |
| Daltonismo | Paleta segura para deuteranopia/protanopia | [ ] Verificado |
| Texto alternativo | Descricao textual de cada grafico | [ ] Implementado |
| Navegacao por teclado | Todos filtros e interacoes acessiveis | [ ] Implementado |
| Screen Reader | Titulos e labels descritivos | [ ] Implementado |
| Nao depender so de cor | Padrão + cor + texto/icon | [ ] Verificado |
| Zoom | Funciona em 200% de zoom | [ ] Verificado |
| Reduced Motion | Animacoes respeitam `prefers-reduced-motion` | [ ] Verificado |

### Testes de Acessibilidade
| Teste | Ferramenta | Resultado |
|---|---|---|
| Simulacao Daltonismo | ___________ | [ ] Pass [ ] Fail |
| Contraste | ___________ | [ ] Pass [ ] Fail |
| Screen Reader | ___________ | [ ] Pass [ ] Fail |
| Navegacao Teclado | Manual | [ ] Pass [ ] Fail |

---

## 9. Deliverables

| # | Deliverable | Formato | Dimensoes/Specs | Status |
|---|---|---|---|---|
| 1 | ___________ | [ ] Dashboard interativo [ ] PNG [ ] PDF [ ] SVG [ ] Outro | ___________ | [ ] |
| 2 | ___________ | [ ] Dashboard interativo [ ] PNG [ ] PDF [ ] SVG [ ] Outro | ___________ | [ ] |
| 3 | ___________ | [ ] Dashboard interativo [ ] PNG [ ] PDF [ ] SVG [ ] Outro | ___________ | [ ] |

---

## 10. Timeline

| Milestone | Data | Responsavel | Status |
|---|---|---|---|
| Briefing aprovado | ___________ | ___________ | [ ] |
| Dados coletados e tratados | ___________ | ___________ | [ ] |
| Wireframe de layout | ___________ | ___________ | [ ] |
| Primeira versao do dashboard | ___________ | ___________ | [ ] |
| Revisao com stakeholder | ___________ | ___________ | [ ] |
| Acessibilidade verificada | ___________ | ___________ | [ ] |
| Entrega final | ___________ | ___________ | [ ] |

---

> note: Sempre valide a visualizacao final com pelo menos um usuario real do perfil definido antes de publicar. O que faz sentido para o analista pode nao funcionar para o usuario final.

**Documento criado por:** ___________
**Ultima atualizacao:** ___________
**Proxima revisao:** ___________
