# Motion Design Specification — Especificação de Motion Design

> Documento que detalha conceito, storyboard, principios de animacao, som e especificacoes de exportacao para qualquer peca de motion design.
> Used by: motion-designer, video-editor, sound-designer, produtor

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
| Titulo da Peca | ___________ |
| Cliente/Marca | ___________ |
| Tipo | [ ] Intro/Logo [ ] Explainer [ ] Social Ad [ ] UI Animation [ ] Presentation [ ] Outro: ___________ |
| Duracao Total | ___________ segundos |
| Aspect Ratio(s) | [ ] 16:9 [ ] 9:16 [ ] 1:1 [ ] 4:5 [ ] Outro: ___________ |
| Idioma | ___________ |
| Plataforma Principal | ___________ |

### Briefing Resumido
___________

### Referencias de Estilo
| Referencia | URL | O que Aplicar |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

> note: Defina o aspect ratio primario primeiro. Se necessario em multiplas razoes, planeje a composicao com safe zones para cada formato.

---

## 2. Concept / Story

### Conceito Criativo
___________

### Narrativa / Story Arc
| Fase | Duracao | Descricao |
|---|---|---|
| Abertura/Hook | ___________ | ___________ |
| Desenvolvimento | ___________ | ___________ |
| Climax/Revelacao | ___________ | ___________ |
| Resolucao/CTA | ___________ | ___________ |

### Mensagem Central
___________

### Emocao Desejada
___________

---

## 3. Storyboard

| Frame # | Tempo (s) | Descricao Visual | Acao/Movimento | Audio/VO | Notas |
|---|---|---|---|---|---|
| 1 | 0:00 - ___________ | ___________ | ___________ | ___________ | ___________ |
| 2 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 3 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 4 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 5 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 6 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 7 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 8 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 9 | ___________ | ___________ | ___________ | ___________ | ___________ |
| 10 | ___________ | ___________ | ___________ | ___________ | ___________ |

> note: Adicione linhas conforme necessario. Cada frame deve ter um thumbnail ou esboco visual anexado se possivel.

### Esbocos/Thumbnails do Storyboard
___________
> note: Anexe imagens ou links para o storyboard visual aqui.

---

## 4. Animation Principles Used

Indique quais dos 12 principios da animacao estao sendo aplicados:

| Principio | Aplicado? | Onde/Como |
|---|---|---|
| 1. Squash & Stretch | [ ] Sim [ ] Nao | ___________ |
| 2. Anticipation | [ ] Sim [ ] Nao | ___________ |
| 3. Staging | [ ] Sim [ ] Nao | ___________ |
| 4. Straight Ahead / Pose to Pose | [ ] Sim [ ] Nao | ___________ |
| 5. Follow Through / Overlapping | [ ] Sim [ ] Nao | ___________ |
| 6. Slow In / Slow Out | [ ] Sim [ ] Nao | ___________ |
| 7. Arc | [ ] Sim [ ] Nao | ___________ |
| 8. Secondary Action | [ ] Sim [ ] Nao | ___________ |
| 9. Timing | [ ] Sim [ ] Nao | ___________ |
| 10. Exaggeration | [ ] Sim [ ] Nao | ___________ |
| 11. Solid Drawing | [ ] Sim [ ] Nao | ___________ |
| 12. Appeal | [ ] Sim [ ] Nao | ___________ |

> note: Nao e necessario usar todos os principios. Escolha os que servem ao conceito e ao ritmo da peca.

---

## 5. Easing Curves

### Curvas de Easing Utilizadas
| Nome do Easing | Funcao | Cubic-Bezier | Uso |
|---|---|---|---|
| ___________ | ___________ | cubic-bezier(___, ___, ___, ___) | ___________ |
| ___________ | ___________ | cubic-bezier(___, ___, ___, ___) | ___________ |
| ___________ | ___________ | cubic-bezier(___, ___, ___, ___) | ___________ |

### Curvas de Referência Comuns
| Nome | Cubic-Bezier | Sensacao |
|---|---|---|
| Ease Out Quad | cubic-bezier(0.25, 0.1, 0.25, 1) | Suave, natural |
| Ease Out Cubic | cubic-bezier(0.33, 1, 0.68, 1) | Rapido no inicio, desacelera |
| Ease Out Back | cubic-bezier(0.34, 1.56, 0.64, 1) | Ultrapassa e volta (bounce sutil) |
| Ease In Out Quad | cubic-bezier(0.42, 0, 0.58, 1) | Aceleracao e desaceleracao suaves |
| Spring | cubic-bezier(0.175, 0.885, 0.32, 1.275) | Elastico, com overshoot |

> note: Para interfaces (UI animation), prefira duracoes entre 150ms-400ms com easings suaves. Evite bounces excessivos em interfaces.

### Duration Reference (UI Animation)
| Tipo de Animacao | Duracao Recomendada |
|---|---|
| Micro-interacao (hover, tap) | 100ms - 200ms |
| Transicao de tela | 250ms - 400ms |
| Entrada de elemento | 300ms - 500ms |
| Loading / Skeleton | 800ms - 1200ms (loop) |
| Modal / Overlay | 200ms - 300ms |

---

## 6. Sound Design

### Trilha Sonora
| Campo | Valor |
|---|---|
| Estilo/Genero | ___________ |
| Mood | ___________ |
| BPM | ___________ |
| Duracao | ___________ |
| Fonte | [ ] Original [ ] Stock [ ] Licenciada |
| Licenca | ___________ |

### Efeitos Sonoros (SFX)
| Frame/Tempo | Efeito | Descricao | Volume | Fonte |
|---|---|---|---|---|
| ___________ | ___________ | ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ | ___________ | ___________ |

### Voice Over (se aplicavel)
| Campo | Valor |
|---|---|
| Idioma | ___________ |
| Genero/Voz | ___________ |
| Tom | ___________ |
| Locutor | ___________ |

#### Script do Voice Over
| Tempo | Texto | Notas de Entonacao |
|---|---|---|
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |
| ___________ | ___________ | ___________ |

> note: Se a peca sera veiculada em plataformas com som desligado por padrao (ex: Instagram feed), garanta que a mensagem funcione sem audio. Adicione legendas sempre.

---

## 7. Export Specs

### Especificações por Plataforma
| Plataforma | Resolucao | FPS | Codec | Formato | Bitrate | Audio |
|---|---|---|---|---|---|---|
| YouTube | 1920x1080 | 30/60 | H.264 | .mp4 | 8-12 Mbps | AAC 192kbps |
| Instagram Feed | 1080x1080 | 30 | H.264 | .mp4 | 4-6 Mbps | AAC 128kbps |
| Instagram Stories/Reels | 1080x1920 | 30 | H.264 | .mp4 | 4-6 Mbps | AAC 128kbps |
| TikTok | 1080x1920 | 30 | H.264 | .mp4 | 4-6 Mbps | AAC 128kbps |
| LinkedIn | 1920x1080 | 30 | H.264 | .mp4 | 5-8 Mbps | AAC 128kbps |
| Twitter/X | 1280x720 | 30 | H.264 | .mp4 | 2-4 Mbps | AAC 128kbps |
| Web (site) | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |
| Apresentacao | ___________ | ___________ | ___________ | ___________ | ___________ | ___________ |

### Master File
| Campo | Valor |
|---|---|
| Resolucao Master | ___________ |
| FPS Master | ___________ |
| Codec Master | [ ] ProRes 422 [ ] DNxHR [ ] Outro: ___________ |
| Formato Master | ___________ |
| Color Space | [ ] sRGB [ ] Rec.709 [ ] DCI-P3 |
| Audio Master | [ ] 48kHz / 24-bit [ ] Outro: ___________ |

### Arquivo de Projeto
| Campo | Valor |
|---|---|
| Software | [ ] After Effects [ ] Premiere [ ] DaVinci Resolve [ ] Figma [ ] Lottie [ ] Outro: ___________ |
| Versao do Software | ___________ |
| Local do Arquivo | ___________ |
| Plugins Utilizados | ___________ |
| Fontes Utilizadas | ___________ |
| Assets Externos | ___________ |

### Checklist de Exportação
| Item | Status |
|---|---|
| Revisao frame a frame completa | [ ] |
| Audio sincronizado e nivelado | [ ] |
| Legendas incluidas (se necessario) | [ ] |
| Safe zones verificadas por formato | [ ] |
| Cores calibradas | [ ] |
| Loop testado (se aplicavel) | [ ] |
| Arquivo de projeto salvo e organizado | [ ] |
| Master exportado | [ ] |
| Versoes por plataforma exportadas | [ ] |

---

## 8. Approvals

| Papel | Nome | Assinatura | Data |
|---|---|---|---|
| Motion Designer | ___________ | ___________ | ___________ |
| Diretor Criativo | ___________ | ___________ | ___________ |
| Cliente/Stakeholder | ___________ | ___________ | ___________ |

---

> note: Antes de entregar, teste a animacao em pelo menos um dispositivo real de cada plataforma alvo (celular, tablet, desktop).

**Documento criado por:** ___________
**Ultima atualizacao:** ___________
**Proxima revisao:** ___________
