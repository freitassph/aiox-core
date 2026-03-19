---
task: Create Social Media Pack
responsavel: "@pdg-social-media"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - brand: Nome e briefing da marca
  - platforms: Lista de plataformas (instagram, linkedin, youtube, tiktok, pinterest)
  - content_type: post / carousel / story / reel-cover / thumbnail
  - topic: Tema do conteúdo
  - assets: Imagens/logos disponíveis
Saida: |
  - social_pack/: Pasta com todos os artefatos
  - captions.md: Legendas e hashtags por plataforma
  - calendar_entry.md: Entrada para calendário de conteúdo
Checklist:
  - "[ ] Brief analisado"
  - "[ ] Plataformas e formatos mapeados"
  - "[ ] Referências de alta performance coletadas"
  - "[ ] 2-3 conceitos visuais criados"
  - "[ ] Design aprovado e finalizado"
  - "[ ] Adaptado para cada plataforma"
  - "[ ] Verificado em mobile (390px)"
  - "[ ] Copy / legendas escritas"
  - "[ ] Exportado em formatos corretos"
  - "[ ] Pasta organizada e entregue"
---

# *create-social-pack

Cria pacote completo de conteúdo visual para redes sociais, adaptado para cada plataforma com dimensões e linguagem corretas.

## Uso

```
*create-social-pack --brand minha-marca --platforms instagram,linkedin --content_type carousel --topic "5 dicas de produtividade"
*create-social-pack --brand minha-marca --platforms instagram --content_type story --topic "lançamento de produto"
*create-social-pack --brand minha-marca --platforms youtube --content_type thumbnail --topic "Como fazer X em 5 minutos"
```

## Plataformas Suportadas

| Plataforma | Formatos | Dimensões |
|------------|----------|-----------|
| Instagram | Feed (1:1, 4:5), Story (9:16), Carrossel | 1080×1080, 1080×1350, 1080×1920 |
| LinkedIn | Post (1.91:1), Documento/Carousel | 1200×628, 1080×1080 |
| YouTube | Thumbnail (16:9) | 1280×720 |
| TikTok | Cover (9:16) | 1080×1920 |
| Pinterest | Pin (2:3) | 1000×1500 |

## Output Structure

```
social-pack-[projeto]-[data]/
├── instagram/
│   ├── feed-post.png
│   ├── story.png
│   └── carousel/
│       ├── slide-01.png
│       ├── slide-02.png
│       └── ...
├── linkedin/
│   └── post.png
├── youtube/
│   └── thumbnail.png
└── captions.md
```
