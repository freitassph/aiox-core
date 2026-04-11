---
checklist: "AI Image Quality Checklist"
responsavel: "@pdg-ai-image-director"
responsable_type: agent
atomic_layer: checklist
applies_to:
  - ai-generated-image-review
  - synthetic-media-validation
  - generative-art-approval
---

# AI Image Quality Checklist

Checklist de validacao para qualidade de imagens geradas por IA. Zero mediocridade tolerada.

## Section 1: Resolution
- [ ] Resolucao minima de saida atende requisito do uso final (web: 1920px, print: 300DPI)
- [ ] Upscaling foi aplicado com algoritmo adequado (ESRGAN, Real-ESRGAN, etc.)
- [ ] Imagem nao apresenta artefatos de upscaling (blur excessivo, halos)
- [ ] Proporcao de aspect ratio esta correta para o uso final
- [ ] DPI/PPI esta configurado corretamente para meio de publicacao
- [ ] Imagem pode ser ampliada em 200% sem degradacao visivel
- [ ] Formato de exportacao e adequado (PNG para lossless, WebP para web)
- [ ] Tamanho de arquivo esta otimizado para distribuicao

## Section 2: Composition
- [ ] Regra dos tercos e composicao foram consideradas
- [ ] Ponto focal da imagem e claro e intencional
- [ ] Espaco negativo e utilizado de forma equilibrada
- [ ] Linhas de forca e fluxo visual sao naturais
- [ ] Proporcoes de elementos na cena sao realistas ou estilisticamente coerentes
- [ ] Perspectiva e consistente dentro da imagem
- [ ] Profundidade de campo e apropriada ao contexto
- [ ] Enquadramento nao corta elementos importantes de forma inadequada
- [ ] Composicao funciona em diferentes aspect ratios se necessario
- [ ] Espaco para texto/overlay foi预留 (se aplicavel ao uso)

## Section 3: Color Accuracy
- [ ] Paleta de cores e consistente com brief criativo
- [ ] Balance de branco e natural e adequado
- [ ] Saturacao e realista ou estilisticamente intencional
- [ ] Tons de pele sao naturais e diversos (quando pessoas sao representadas)
- [ ] Transicoes de cor sao suaves sem banding
- [ ] Cores de marca (se presentes) estao corretas
- [ ] Modo de cor (RGB, CMYK) esta correto para o uso final
- [ ] Perfil de cor (sRGB, Adobe RGB, P3) esta adequado
- [ ] HDR/SDR esta conforme especificacao de entrega

## Section 4: Brand Alignment
- [ ] Estilo visual da imagem esta alinhado com brand guidelines
- [ ] Estetica geral reflete personalidade da marca
- [ ] Cores presentes na imagem sao consistentes com paleta da marca
- [ ] Contexto cenario e apropriado para a marca
- [ ] Representacao de pessoas e alinhada com politica de diversidade da marca
- [ ] Imagem nao contem elementos que conflitam com valores da marca
- [ ] Nivel de realismo/abstracao e adequado para o contexto de marca
- [ ] Uso da imagem faz sentido no ecossistema visual da marca
- [ ] Imagem foi aprovada pelo responsavel de marca (brand manager)

## Section 5: Artifacts Check
- [ ] Maos e dedos sao anatomicamente corretos
- [ ] Olhos e faces sao simetricos e naturais
- [ ] Texto gerado pela IA esta correto ou foi removido
- [ ] Nao ha membros extras ou faltando em figuras humanas/animais
- [ ] Nao ha distorcoes em bordas e contornos de objetos
- [ ] Nao ha pattern repetition ou tiling visivel
- [ ] Nao ha noise ou grain excessivo
- [ ] Nao ha color bleeding entre elementos
- [ ] Sombras sao consistentes com fonte de luz
- [ ] Reflexos sao fisicamente plausiveis
- [ ] Bordas de recorte/mascara sao limpas (se recorte foi feito)
- [ ] Nao ha watermark ou assinatura do modelo de IA
- [ ] Fundo e limpo e sem artefatos de geracao

## Section 6: Legal / Ethical
- [ ] Imagem nao reproduz obra protegida por copyright de terceiros
- [ ] Estilo de artista vivo nao foi copiado intencionalmente sem permissao
- [ ] Imagem nao contem logos ou marcas registradas de terceiros
- [ ] Representacao de pessoas nao viola direitos de personalidade
- [ ] Imagem nao contem conteudo difamatorio ou enganoso
- [ ] Deepfakes ou manipulacao de identidade foram autorizados
- [ ] Uso de dados de treinamento e conforme licenca do modelo
- [ ] Imagem foi verificada por similaridade reverse image search
- [ ] Conformidade com regulacoes locais de IA generativa verificada
- [ ] Imagem nao perpetua estereotipos prejudiciais ou bias

## Section 7: Usage Rights
- [ ] Licenca do modelo de IA permite uso comercial
- [ ] Licenca do modelo de IA permite uso na midia especifica (web, print, TV)
- [ ] Termos de servico do gerador de IA foram revisados e obedecidos
- [ ] Direito autoral da imagem gerada foi documentado e armazenado
- [ ] Metadata de autoria e informacoes de geracao foram preservadas
- [ ] Restricoes de revenda ou redistribuicao da imagem foram verificadas
- [ ] Uso de imagem em campanhas publicitarias e permitido pela licenca
- [ ] Uso de imagem em merchandising e produtos fisicos e permitido
- [ ] Registro de uso foi adicionado ao asset management system
- [ ] Backup do prompt e seed de geracao foi armazenado para reprodutibilidade
