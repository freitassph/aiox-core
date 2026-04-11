# Referência de Paletas de Cores

> Documento de referência completo para o squad pedro-design. Contém teoria de cores, harmonias, paletas prontas, psicologia por indústria e diretrizes de acessibilidade.

---

## 1. Teoria das Cores — Fundamentos

### O Círculo Cromático

O círculo cromático tradicional possui 12 cores organizadas em:

| Categoria | Cores | Descrição |
|---|---|---|
| **Primárias** | Vermelho, Amarelo, Azul | Cores puras que não podem ser criadas por mistura |
| **Secundárias** | Laranja, Verde, Violeta | Mistura de duas primárias |
| **Terciárias** | Vermelho-alaranjado, Amarelo-alaranjado, Azul-esverdeado, etc. | Mistura de primária + secundária adjacente |

### Propriedades da Cor

| Propriedade | Definição | Exemplo |
|---|---|---|
| **Hue (Matiz)** | A cor pura no espectro | Vermelho, azul, verde |
| **Saturation (Saturação)** | Intensidade/pureza da cor | 0% = cinza, 100% = cor pura |
| **Lightness/Brightness (Luminosidade)** | Claridade ou escuridão | 0% = preto, 50% = cor pura, 100% = branco |
| **Alpha/Opacity** | Transparência da cor | 0 = transparente, 1 = opaco |

### Modelos de Cor

| Modelo | Tipo | Uso | Componentes |
|---|---|---|---|
| **RGB** | Aditivo | Telas digitais | Red, Green, Blue (0-255) |
| **HEX** | Aditivo | Web/CSS | #RRGGBB |
| **HSL** | Perceptual | Design UI | Hue (0-360), Saturation (0-100%), Lightness (0-100%) |
| **CMYK** | Subtrativo | Impressão | Cyan, Magenta, Yellow, Key/Black (%) |
| **LAB** | Perceptual | Color matching | L* (luminosidade), a*, b* |

---

## 2. Tipos de Harmonia Cromática

### 2.1 Complementar

Duas cores opostas no círculo cromático. Alto contraste, energia máxima.

| Cor Base | Complementar | Exemplo HEX |
|---|---|---|
| Azul (#1E3A5F) | Laranja (#F28C28) | `#1E3A5F` + `#F28C28` |
| Vermelho (#E63946) | Verde (#2D6A4F) | `#E63946` + `#2D6A4F` |
| Roxo (#7B2CBF) | Amarelo (#FFD60A) | `#7B2CBF` + `#FFD60A` |

**Uso ideal:** CTAs, destaques, elementos que precisam de atenção imediata.

### 2.2 Complementar Dividida (Split-Complementary)

Cor base + duas cores adjacentes à complementar. Contraste com menos tensão.

| Cor Base | Dividida 1 | Dividida 2 |
|---|---|---|
| `#264653` | `#E76F51` | `#E9C46A` |
| `#606C38` | `#BC4749` | `#DDA15E` |

### 2.3 Análoga

Cores adjacentes no círculo (2-5 cores). Harmonioso e sereno.

| Paleta | Cores HEX |
|---|---|
| Oceano | `#0077B6`, `#00B4D8`, `#48CAE4`, `#90E0EF`, `#CAF0F8` |
| Floresta | `#2D6A4F`, `#40916C`, `#52B788`, `#74C69D`, `#95D5B2` |
| Pôr do Sol | `#FF6B6B`, `#FF8E72`, `#FFB347`, `#FFD93D`, #FFE66D` |

### 2.4 Triádica

Três cores equidistantes no círculo (120°). Vibrante e equilibrada.

| Paleta | Cores HEX |
|---|---|
| Primária | `#E63946`, `#457B9D`, `#F4A261` |
| Secundária | `#7209B7`, `#F72585`, `#4CC9F0` |

### 2.5 Tetrádica (Retangular)

Quatro cores em dois pares complementares. Rica e variada.

| Paleta | Cores HEX |
|---|---|
| Rica | `#264653`, `#2A9D8F`, `#E76F51`, `#E9C46A` |

### 2.6 Monocromática

Variações de saturação e luminosidade de uma única matiz.

| Matiz Base | Tons |
|---|---|
| Azul `#1D3557` | `#1D3557`, `#457B9D`, `#A8DADC`, `#F1FAEE` |
| Verde `#2D6A4F` | `#1B4332`, `#2D6A4F`, `#52B788`, `#B7E4C7` |

---

## 3. Paletas Nomeadas — 15+ Paletas Prontas

### 3.1 Paleta "Ocean Depth"

| Função | Cor | HEX |
|---|---|---|
| Primary | Azul profundo | `#0077B6` |
| Secondary | Azul médio | `#00B4D8` |
| Accent | Ciano claro | `#48CAE4` |
| Light | Azul gelo | `#90E0EF` |
| Background | Branco azulado | `#F0F8FF` |
| Dark | Azul marinho | `#023E8A` |

**Uso:** Tecnologia, saúde, finanças, corporativo.

### 3.2 Paleta "Earth & Clay"

| Função | Cor | HEX |
|---|---|---|
| Primary | Terracota | `#E07A5F` |
| Secondary | Verde musgo | `#81B29A` |
| Accent | Dourado | `#F2CC8F` |
| Neutral | Creme | `#F4F1DE` |
| Dark | Marrom escuro | `#3D405B` |

**Uso:** Sustentabilidade, artesanato, orgânicos, arquitetura.

### 3.3 Paleta "Neon Cyberpunk"

| Função | Cor | HEX |
|---|---|---|
| Primary | Magenta neon | `#FF006E` |
| Secondary | Ciano elétrico | `#00F5FF` |
| Accent | Roxo neon | `#8338EC` |
| Highlight | Amarelo neon | `#FFBE0B` |
| Background | Preto azulado | `#0D1B2A` |
| Surface | Cinza escuro | `#1B263B` |

**Uso:** Gaming, tecnologia, eventos, entretenimento noturno.

### 3.4 Paleta "Minimalist Luxury"

| Função | Cor | HEX |
|---|---|---|
| Primary | Preto suave | `#2B2B2B` |
| Secondary | Dourado | `#C9A96E` |
| Accent | Champagne | `#E8DCC4` |
| Light | Off-white | `#FAF8F5` |
| Muted | Cinza quente | `#8C8C8C` |

**Uso:** Luxo, moda, joalheria, hotéis premium.

### 3.5 Paleta "Fresh Garden"

| Função | Cor | HEX |
|---|---|---|
| Primary | Verde folha | `#40916C` |
| Secondary | Verde claro | `#74C69D` |
| Accent | Amarelo-lima | `#D4E09B` |
| Neutral | Bege natural | `#F5F5DC` |
| Dark | Verde floresta | `#1B4332` |

**Uso:** Orgânicos, wellness, meio ambiente, alimentação saudável.

### 3.6 Paleta "Sunset Boulevard"

| Função | Cor | HEX |
|---|---|---|
| Primary | Rosa vibrante | `#FF006E` |
| Secondary | Laranja | `#FB5607` |
| Accent | Amarelo | `#FFBE0B` |
| Gradient 1 | Roxo | `#8338EC` |
| Gradient 2 | Rosa claro | `#FF85A1` |
| Background | Branco quente | `#FFF5F5` |

**Uso:** Lifestyle, beleza, entretenimento, redes sociais.

### 3.7 Paleta "Corporate Trust"

| Função | Cor | HEX |
|---|---|---|
| Primary | Azul corporativo | `#1E3A5F` |
| Secondary | Azul claro | `#4A90D9` |
| Accent | Dourado sutil | `#D4A843` |
| Neutral | Cinza | `#6B7280` |
| Light | Branco gelo | `#F8FAFC` |
| Dark | Quase preto | `#111827` |

**Uso:** Finanças, advocacia, consultoria, governo.

### 3.8 Paleta "Pastel Dream"

| Função | Cor | HEX |
|---|---|---|
| Primary | Rosa pastel | `#FFB5E8` |
| Secondary | Azul pastel | `#B5D8FF` |
| Accent | Lavanda | `#D4B5FF` |
| Warm | Pêssego | `#FFD4B5` |
| Neutral | Branco rosado | `#FFF0F5` |

**Uso:** Infantil, beleza suave, maternidade, confeitaria.

### 3.9 Paleta "Industrial Bold"

| Função | Cor | HEX |
|---|---|---|
| Primary | Vermelho | `#D00000` |
| Secondary | Preto | `#1A1A1A` |
| Accent | Amarelo | `#FFBA08` |
| Neutral | Cinza concreto | `#6C757D` |
| Light | Cinza claro | `#E9ECEF` |

**Uso:** Construção, automotivo, esportes radicais, indústria.

### 3.10 Paleta "Nordic Calm"

| Função | Cor | HEX |
|---|---|---|
| Primary | Azul acinzentado | `#6B8FAD` |
| Secondary | Verde sage | `#A3B18A` |
| Accent | Rosa seco | `#D4A5A5` |
| Neutral | Cinza quente | `#B5B5B5` |
| Light | Branco neve | `#FEFCF8` |
| Dark | Grafite | `#343A40` |

**Uso:** Decoração, lifestyle nórdico, bem-estar, minimalismo.

### 3.11 Paleta "Tropical Vibrant"

| Função | Cor | HEX |
|---|---|---|
| Primary | Verde tropical | `#06D6A0` |
| Secondary | Amarelo | `#FFD166` |
| Accent | Coral | `#EF476F` |
| Contrast | Azul oceano | `#118AB2` |
| Dark | Azul marinho | `#073B4C` |

**Uso:** Turismo, bebidas, fitness, entretenimento tropical.

### 3.12 Paleta "Royal Purple"

| Função | Cor | HEX |
|---|---|---|
| Primary | Roxo real | `#7B2CBF` |
| Secondary | Lavanda | `#C77DFF` |
| Accent | Dourado | `#FFD700` |
| Light | Lilás claro | `#E0AAFF` |
| Dark | Roxo escuro | `#3C096C` |

**Uso:** Criatividade, espiritualidade, premium, educação.

### 3.13 Paleta "Warm Embers"

| Função | Cor | HEX |
|---|---|---|
| Primary | Vermelho quente | `#E63946` |
| Secondary | Laranja queimado | `#E76F51` |
| Accent | Âmbar | `#E9C46A` |
| Neutral | Marrom | `#6B4226` |
| Light | Creme quente | `#FFF3E0` |

**Uso:** Restaurantes, culinária, aconchego, seasonal.

### 3.14 Paleta "Tech Gradient"

| Função | Cor | HEX |
|---|---|---|
| Primary | Azul tech | `#4361EE` |
| Secondary | Roxo | `#7209B7` |
| Accent | Rosa | `#F72585` |
| Highlight | Ciano | `#4CC9F0` |
| Dark | Azul escuro | `#10002B` |
| Surface | Roxo escuro | `#240046` |

**Uso:** SaaS, startups, apps, tecnologia, inovação.

### 3.15 Paleta "Vintage Retro"

| Função | Cor | HEX |
|---|---|---|
| Primary | Mostarda | `#E9C46A` |
| Secondary | Laranja retrô | `#F4A261` |
| Accent | Verde oliva | `#606C38` |
| Warm | Terracota | `#BC6C25` |
| Neutral | Creme | `#FEFAE0` |
| Dark | Marrom | `#283618` |

**Uso:** Vintage, cervejaria artesanal, barbearia, café.

### 3.16 Paleta "Clean Medical"

| Função | Cor | HEX |
|---|---|---|
| Primary | Azul clínico | `#0077B6` |
| Secondary | Verde menta | `#55B8A3` |
| Accent | Azul claro | `#90E0EF` |
| Neutral | Cinza | `#ADB5BD` |
| Light | Branco hospital | `#FFFFFF` |
| Dark | Azul escuro | `#03045E` |

**Uso:** Saúde, clínicas, hospitais, farmacêutica.

### 3.17 Paleta "Bold Education"

| Função | Cor | HEX |
|---|---|---|
| Primary | Azul aprendizado | `#3A86FF` |
| Secondary | Amarelo | `#FFBE0B` |
| Accent | Vermelho | `#E63946` |
| Neutral | Cinza | `#6C757D` |
| Light | Branco | `#FFFFFF` |
| Success | Verde | `#2DC653` |

**Uso:** Educação, e-learning, cursos, escolas.

---

## 4. Psicologia das Cores por Indústria

### Tabela de Cores e Significados

| Cor | Emoções / Associações | Indústrias Ideais | Exemplos de Marcas |
|---|---|---|---|
| **Azul** | Confiança, segurança, calma, profissionalismo | Finanças, tech, saúde, corporativo | Facebook, IBM, Samsung, Pfizer |
| **Vermelho** | Urgência, paixão, energia, fome | Alimentação, entretenimento, varejo | Coca-Cola, Netflix, YouTube, Target |
| **Amarelo** | Otimismo, atenção, felicidade, calor | Alimentação, construção, entretenimento | McDonald's, IKEA, Snapchat |
| **Verde** | Natureza, saúde, crescimento, dinheiro | Orgânicos, finanças, wellness | Starbucks, Whole Foods, Android |
| **Roxo** | Luxo, criatividade, sabedoria, mistério | Beleza, educação, premium | Cadbury, Hallmark, Twitch |
| **Laranja** | Energia, entusiasmo, acessibilidade | Tech, alimentação, esportes | Fanta, Nickelodeon, Harley-Davidson |
| **Rosa** | Feminilidade, romance, doçura, juventude | Beleza, moda, infantil | Barbie, Victoria's Secret, Cosmopolitan |
| **Preto** | Sofisticação, poder, elegância, mistério | Luxo, moda, tecnologia premium | Chanel, Apple, Nike |
| **Branco** | Pureza, simplicidade, limpeza, espaço | Saúde, tecnologia, minimalismo | Apple, Tesla, Zara |
| **Marrom** | Confiabilidade, rusticidade, calor, tradição | Alimentos artesanais, construção, outdoors | UPS, Hershey's, M&M's |
| **Dourado** | Luxo, sucesso, prestígio, qualidade | Joalheria, hotéis premium, finanças premium | Rolex, Oscar, American Express |

### Matriz de Emoção x Cor

| Emoção Desejada | Cores Primárias | Cores de Apoio | Evitar |
|---|---|---|---|
| Confiança | Azul, Azul-marinho | Cinza, Branco | Amarelo forte, Vermelho |
| Urgência | Vermelho, Laranja | Amarelo, Preto | Azul, Verde |
| Luxo | Preto, Dourado | Branco, Roxo | Amarelo, Laranja |
| Natureza | Verde, Marrom | Bege, Azul | Neon, Rosa forte |
| Inovação | Roxo, Azul elétrico | Ciano, Branco | Marrom, Bege |
| Alegria | Amarelo, Laranja | Rosa, Verde-lima | Cinza, Preto |
| Calma | Azul claro, Verde sage | Lavanda, Branco | Vermelho, Laranja forte |
| Autoridade | Preto, Azul-marinho | Dourado, Branco | Pastéis, Amarelo |

---

## 5. Acessibilidade — Razões de Contraste WCAG

### Requisitos WCAG 2.1

| Nível | Texto Normal (abaixo de 18pt) | Texto Grande (18pt+ ou 14pt bold+) |
|---|---|---|
| **AA** | 4.5:1 | 3:1 |
| **AAA** | 7:1 | 4.5:1 |

### Tabela de Contraste — Combinações Comuns

| Cor do Texto | Cor do Fundo | Razão | WCAG AA | WCAG AAA |
|---|---|---|---|---|
| `#000000` | `#FFFFFF` | 21:1 | Pass | Pass |
| `#1D3557` | `#F1FAEE` | 12.5:1 | Pass | Pass |
| `#333333` | `#FFFFFF` | 12.6:1 | Pass | Pass |
| `#4A4A4A` | `#FFFFFF` | 9.7:1 | Pass | Pass |
| `#6B7280` | `#FFFFFF` | 4.6:1 | Pass (normal) | Fail |
| `#718096` | `#FFFFFF` | 4.0:1 | Fail (normal) | Fail |
| `#FFFFFF` | `#1E3A5F` | 9.2:1 | Pass | Pass |
| `#F1FAEE` | `#1D3557` | 12.5:1 | Pass | Pass |
| `#E63946` | `#FFFFFF` | 4.0:1 | Fail (normal) | Fail |
| `#FF006E` | `#000000` | 7.6:1 | Pass | Pass |
| `#FFBE0B` | `#1A1A1A` | 10.4:1 | Pass | Pass |
| `#90E0EF` | `#023E8A` | 4.6:1 | Pass (normal) | Fail |

### Ferramentas de Verificação de Contraste

| Ferramenta | URL | Tipo |
|---|---|---|
| WebAIM Contrast Checker | webaim.org/resources/contrastchecker/ | Web |
| Contrast (macOS app) | contrast.co | App nativo |
| Stark | usestark.com | Plugin (Figma, Sketch) |
| Color Contrast Analyzer | tpgi.com/color-contrast-checker | App desktop |
| A11y Color Palette | a11y-color-palette.com | Web |

---

## 6. Ferramentas para Geração de Paletas

| Ferramenta | URL | Destaque |
|---|---|---|
| **Coolors** | coolors.co | Geração rápida com barra de espaço |
| **Adobe Color** | color.adobe.com | Roda cromática + extração de imagem |
| **Paletton** | paletton.com | Simulação completa de harmonia |
| **Huemint** | huemint.com | Paletas com IA, preview em mockups |
| **Khroma** | khroma.co | IA treinada nas suas preferências |
| **Color Hunt** | colorhunt.co | Paletas curadas pela comunidade |
| **Happy Hues** | happyhues.co | Paletas com contexto real de uso |
| **Culrs** | culrs.com | Paletas prontas categorizadas |
| **AI Colors** | aicolors.co | Geração por prompt de IA |
| **Colormind** | colormind.io | IA com extração de tendências |

---

## 7. Referências Rápidas — Cores em Múltiplos Formatos

### Cores Primárias e seus Valores

| Cor Nome | HEX | RGB | HSL | CMYK |
|---|---|---|---|---|
| Pure Black | `#000000` | 0, 0, 0 | 0, 0%, 0% | 0, 0, 0, 100 |
| Pure White | `#FFFFFF` | 255, 255, 255 | 0, 0%, 100% | 0, 0, 0, 0 |
| Vermelho puro | `#FF0000` | 255, 0, 0 | 0, 100%, 50% | 0, 100, 100, 0 |
| Verde puro | `#00FF00` | 0, 255, 0 | 120, 100%, 50% | 100, 0, 100, 0 |
| Azul puro | `#0000FF` | 0, 0, 255 | 240, 100%, 50% | 100, 100, 0, 0 |
| Amarelo puro | `#FFFF00` | 255, 255, 0 | 60, 100%, 50% | 0, 0, 100, 0 |
| Ciano puro | `#00FFFF` | 0, 255, 255 | 180, 100%, 50% | 100, 0, 0, 0 |
| Magenta puro | `#FF00FF` | 255, 0, 255 | 300, 100%, 50% | 0, 100, 0, 0 |

### Cinzas Neutros — Escala Completa

| Nome | HEX | RGB | Uso Comum |
|---|---|---|---|
| 50 | `#FAFAFA` | 250, 250, 250 | Background alternativo |
| 100 | `#F5F5F5` | 245, 245, 245 | Background secundário |
| 200 | `#EEEEEE` | 238, 238, 238 | Bordas sutis |
| 300 | `#E0E0E0` | 224, 224, 224 | Divisores |
| 400 | `#BDBDBD` | 189, 189, 189 | Texto placeholder |
| 500 | `#9E9E9E` | 158, 158, 158 | Texto secundário |
| 600 | `#757575` | 117, 117, 117 | Texto terciário |
| 700 | `#616161` | 97, 97, 97 | Ícones inativos |
| 800 | `#424242` | 66, 66, 66 | Texto body (fundos claros) |
| 900 | `#212121` | 33, 33, 33 | Texto heading |
| 950 | `#111111` | 17, 17, 17 | Quase preto |

---

## 8. Regras Práticas de Uso de Cor

### Regra 60-30-10

- **60%** — Cor dominante (geralmente neutra: background, superfícies grandes)
- **30%** — Cor secundária (elementos de apoio, seções, cards)
- **10%** — Cor de destaque (CTAs, links, elementos de interação)

### Número de Cores por Projeto

| Tipo de Projeto | Cores Primárias | Neutros | Destaques |
|---|---|---|---|
| Landing page simples | 1 | 3-5 (escala de cinza) | 1-2 |
| Dashboard/SaaS | 1-2 | 5-7 | 2-3 (success, warning, error, info) |
| Brand identity | 1-3 | 3-5 | 1-2 |
| E-commerce | 1-2 | 4-6 | 2-3 |

### Semântica de Cores em UI

| Estado | Cor Recomendada | HEX | Significado |
|---|---|---|---|
| Success | Verde | `#2DC653` ou `#10B981` | Operação concluída |
| Error | Vermelho | `#EF4444` ou `#E63946` | Erro, alerta crítico |
| Warning | Amarelo/Laranja | `#F59E0B` ou `#FB923C` | Atenção, cuidado |
| Info | Azul | `#3B82F6` ou `#0077B6` | Informação neutra |
| Disabled | Cinza | `#9CA3AF` ou `#6B7280` | Elemento inativo |

---

## 9. Tendências de Cores 2025-2026

| Tendência | Descrição | Paleta Típica |
|---|---|---|
| **Warm Neutrals** | Neutros quentes substituindo cinza frio | Bege, creme, off-white |
| **Digital Lavender** | Roxo-lavanda como cor do digital | `#E6E6FA`, `#B8A9C9` |
| **Sage Green** | Verde sage em branding orgânico | `#9CAF88`, `#A3B18A` |
| **Cyber Lime** | Verde-limão vibrante para tech | `#CCFF00`, `#BFFF00` |
| **Apricot Crush** | Laranja-pêssego quente | `#FFB347`, `#FF9A56` |
| **Deep Teal** | Azul-esverdeado profundo | `#006D77`, `#005F73` |
| **Tranquil Blue** | Azul calmo e confiável | `#4A90D9`, `#6BA3D6` |

---

*Documento criado para o squad pedro-design. Última atualização: Abril 2026.*
