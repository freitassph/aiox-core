# Accessibility Checklist — WCAG 2.1 AA

## Percepção
```
□ Contraste texto normal: >= 4.5:1
□ Contraste texto grande (>= 18px / 14px bold): >= 3:1
□ Imagens: alt text descritivo (vazio se decorativas)
□ Vídeos: legendas se houver fala
□ Conteúdo não depende apenas de cor para transmitir informação
□ Animações: prefers-reduced-motion respeitado
```

## Operabilidade
```
□ Tudo navegável via teclado: Tab, Shift+Tab, Enter, Space, Esc
□ Focus visible em todos os elementos interativos
□ Tab order lógico (left-to-right, top-to-bottom)
□ Skip navigation link presente (para screen readers)
□ Touch targets: mínimo 44×44px
□ Sem conteúdo que pisca > 3 vezes/segundo
```

## Compreensibilidade
```
□ lang="pt-BR" no elemento <html>
□ Formulários: labels explicitamente associados a inputs (htmlFor)
□ Erros de formulário: mensagem clara + como corrigir
□ Títulos de página únicos e descritivos
□ Hierarquia de headings lógica (h1 → h2 → h3)
□ Links com texto descritivo (não "clique aqui")
```

## Robustez
```
□ HTML válido (sem erros de markup)
□ ARIA roles corretos (não redundantes ou conflitantes)
□ aria-label em elementos sem texto visível
□ aria-live para conteúdo que muda dinamicamente
□ Modais/drawers: foco preso dentro quando abertos (focus trap)
□ Modais: Esc fecha, foco retorna ao trigger
```
