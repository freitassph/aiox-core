---
checklist: campaign-launch
agent: pa-empire
description: "Checklist completo de pré-lançamento de campanha — zero erro no go-live"
---

# Checklist: Campaign Launch

## Como usar

Execute este checklist 24-48h antes do lançamento. Cada item deve ser verificado e confirmado pelo responsável indicado.
**Não lance sem 100% dos itens críticos (🔴) marcados como ✅.**
Itens 🟡 devem ser resolvidos sempre que possível — documente exceções com justificativa.

---

## 🔴 CRÍTICO — Sem isso, não lança

### Tracking & Analytics
- [ ] GA4 configurado e recebendo dados em tempo real
- [ ] Pixels de conversão instalados e verificados (Meta, Google, TikTok, LinkedIn)
- [ ] Pixel Helper confirmando disparo correto em todas as páginas relevantes
- [ ] UTMs padronizadas e consistentes em todos os links da campanha
- [ ] Convenção de nomenclatura de UTM alinhada com o cliente e documentada
- [ ] Goals de conversão ativados e testados no GA4
- [ ] Funil de conversão configurado e validado
- [ ] Dashboard de campanha criado e compartilhado com stakeholders
- [ ] Alertas de performance configurados (anomalias, quedas de conversão)
- [ ] Tag Manager atualizado e publicado (se aplicável)
- [ ] Cross-domain tracking configurado (se houver múltiplos domínios)
- [ ] Enhanced ecommerce ativo (para campanhas de e-commerce)

### Criativos & Copy
- [ ] Todos os criativos aprovados formalmente pelo cliente (e-mail ou assinatura)
- [ ] Copy revisada por dois pares para erros ortográficos e gramaticais
- [ ] CTAs corretos, claros e consistentes em todos os formatos
- [ ] Assets exportados nas dimensões exatas por plataforma (ver especificações abaixo)
- [ ] Formatos estáticos: JPG/PNG nas resoluções corretas por placement
- [ ] Formatos de vídeo: MP4 com specs de duração, tamanho e codec por plataforma
- [ ] Stories/Reels: 9:16 vertical com safe zones respeitadas
- [ ] Logos e marcas na versão correta e aprovada
- [ ] Legal clearance realizado (direitos de imagem, música, fontes)
- [ ] Disclaimers e fine print presentes onde obrigatórios
- [ ] Versão mobile dos criativos testada em dispositivos reais
- [ ] Criativos free de texto excessivo (Facebook 20% rule verificada)

### Landing Page & Destino
- [ ] URL de destino testada e funcional em desktop e mobile
- [ ] Velocidade de carregamento verificada (PageSpeed Insights > 70 mobile)
- [ ] Formulários de captura testados e enviando dados corretamente
- [ ] Thank you page configurada com pixel de conversão
- [ ] SSL ativo e sem warnings no browser
- [ ] Redirect da landing page correto (sem loops)
- [ ] Conteúdo da landing page alinhado com a promessa dos anúncios (message match)
- [ ] Botões e CTAs funcionando em todos os devices
- [ ] Campos obrigatórios do formulário validados
- [ ] E-mail de confirmação automático configurado (se aplicável)
- [ ] Capacidade do servidor verificada para picos de tráfego esperados

### Paid Media — Setup das Campanhas
- [ ] Estrutura de campanhas, adsets e anúncios revisada e aprovada
- [ ] Segmentações de audiência corretas e salvas
- [ ] Budget diário e total configurados corretamente
- [ ] Lances e bidding strategy definidos e configurados
- [ ] Datas de início e fim corretas
- [ ] Placements selecionados intencionalmente (sem "automatic" sem revisão)
- [ ] Frequency caps configurados
- [ ] Brand safety filters ativados
- [ ] Negative keywords adicionadas (Google/Bing)
- [ ] Ad scheduling configurado conforme estratégia
- [ ] Billing verificado e saldo suficiente nas contas de anúncio
- [ ] Conta de anúncio sem restrições ou pendências
- [ ] Aprovação dos anúncios pelas plataformas verificada
- [ ] Preview de todos os anúncios em todos os placements revisado

### Email Marketing (se aplicável)
- [ ] Lista de envio segmentada e higienizada
- [ ] Spam score verificado (< 3 no Mail-Tester)
- [ ] Teste de renderização em principais clients (Gmail, Outlook, Apple Mail)
- [ ] Links rastreados com UTM e testados
- [ ] Unsubscribe link funcional e conforme LGPD/CAN-SPAM
- [ ] Preheader texto configurado
- [ ] From name e from email corretos
- [ ] Assunto e preview text A/B testados
- [ ] Sequência de automação testada ponta-a-ponta
- [ ] Suppression list atualizada
- [ ] Horário de envio definido e agendado
- [ ] Send test para lista de aprovação enviado e aprovado

### Social Media Orgânico (se aplicável)
- [ ] Posts agendados nas plataformas corretas
- [ ] Horários de publicação otimizados por plataforma
- [ ] Hashtags pesquisadas e aprovadas
- [ ] Menções e tags verificadas
- [ ] Stories e Reels agendados separadamente
- [ ] Bio links atualizados (Linktree ou similar)
- [ ] Conteúdo de suporte (stories de countdown, etc.) agendado
- [ ] Equipe de community management briefada e disponível no lançamento

### PR & Imprensa (se aplicável)
- [ ] Press release revisado e aprovado
- [ ] Lista de jornalistas e veículos segmentada
- [ ] Embargo date confirmado com redações
- [ ] Media kit completo (release, fotos, dados de contato)
- [ ] Porta-voz treinado e disponível para entrevistas
- [ ] FAQ de possíveis perguntas preparado
- [ ] Clipping setup para monitoramento de menções

---

## 🟡 IMPORTANTE — Recomendado

### Otimização & Performance
- [ ] A/B test configurado para pelo menos 1 elemento (headline ou criativo)
- [ ] Audiences lookalike criadas para escala
- [ ] Remarketing audiences prontas para fase 2
- [ ] CPC/CPM benchmarks documentados para comparação
- [ ] Forecast de resultados documentado com equipe

### Operacional
- [ ] Responsável de plantão definido para D+1 do lançamento
- [ ] Escalation path documentado (quem chamar se der problema)
- [ ] Backup de criativos disponível caso algum seja reprovado
- [ ] Documento de war room criado para tracking em tempo real
- [ ] Briefing de lançamento enviado para toda equipe envolvida
- [ ] Cliente informado sobre protocolo de comunicação no dia do lançamento

### Legal & Compliance
- [ ] Política de privacidade atualizada com novos usos de dados
- [ ] Cookie consent configurado
- [ ] LGPD compliance verificado para coleta de dados
- [ ] Regulatório específico do setor verificado (financeiro, saúde, etc.)
- [ ] Contestações e exclusividades contratuais verificadas

### Brand Safety
- [ ] Lista de exclusões de keywords negativas revisada
- [ ] Exclusões de topics/categorias sensíveis configuradas
- [ ] URL blacklist atualizada nas DSPs
- [ ] Brand mention monitoring ativo

### Documentação
- [ ] Campaign playbook atualizado
- [ ] Credenciais de todas as plataformas no vault seguro
- [ ] Contatos de suporte técnico de todas as plataformas mapeados
- [ ] SLA de resposta em caso de problemas definido

---

## Especificações de Assets por Plataforma

### Meta (Facebook & Instagram)
| Placement | Dimensão | Proporção | Tamanho máx |
|-----------|----------|-----------|-------------|
| Feed | 1080x1080 | 1:1 | 30MB |
| Stories / Reels | 1080x1920 | 9:16 | 4GB (vídeo) |
| Feed landscape | 1200x628 | 1.91:1 | 30MB |
| Carrossel | 1080x1080 | 1:1 | 30MB/card |

### Google
| Formato | Dimensão | Tipo |
|---------|----------|------|
| Responsive Display | Múltiplos | JPG/PNG |
| Banner 300x250 | 300x250 | GIF/JPG |
| Leaderboard | 728x90 | GIF/JPG |
| YouTube pre-roll | 1920x1080 | MP4 |

### LinkedIn
| Placement | Dimensão | Proporção |
|-----------|----------|-----------|
| Single Image | 1200x627 | 1.91:1 |
| Carrossel | 1080x1080 | 1:1 |
| Video | 1920x1080 | 16:9 |

### TikTok
| Formato | Dimensão | Duração |
|---------|----------|---------|
| In-Feed | 1080x1920 | 5-60s |
| TopView | 1080x1920 | até 60s |

---

## Protocolo de Go/No-Go

### 24h antes do lançamento
Execute uma revisão completa desta checklist com o lead da campanha.
Documente qualquer item não concluído com responsável e prazo.

### 2h antes do lançamento
Confirmação final dos itens críticos com o cliente.
Status das contas de anúncio (sem pendências).

### Momento do lançamento
- Ativar campanhas de paid media
- Publicar conteúdo orgânico agendado
- Confirmar recebimento de dados no analytics (aguardar 15 min)
- Primeiro checkpoint de performance

### 1h após lançamento
- Verificar impressões iniciais e primeiros cliques
- Confirmar conversões sendo registradas
- Checar se algum anúncio foi reprovado
- Comunicar status ao cliente

### 24h após lançamento
- Primeiro relatório de performance ao cliente
- Ajustes de lances se necessário
- Desativar variações underperformers

---

## ✅ Assinatura de Aprovação

### Equipe Interna
- [ ] **pa-empire (Lead):** Aprovação final de lançamento
  - Responsável: ___________
  - Data/Hora: ___________

- [ ] **Account Manager:** Confirmação de alinhamento com cliente
  - Responsável: ___________
  - Data/Hora: ___________

- [ ] **Creative Lead:** Assets aprovados e exportados
  - Responsável: ___________
  - Data/Hora: ___________

- [ ] **Analytics:** Tracking verificado e funcionando
  - Responsável: ___________
  - Data/Hora: ___________

### Cliente
- [ ] **Cliente:** Sign-off formal de go-live
  - Nome: ___________
  - Cargo: ___________
  - Data/Hora: ___________
  - Meio de aprovação (e-mail/WhatsApp/assinatura): ___________

---

*Checklist version 1.0 | Squad Pedro Agência | pa-empire*
*Última atualização: 2026-03*
