# Launch Readiness Checklist

## Pré-Requisitos (todos PASS antes de deploy)

### Qualidade
```
□ QA Report: sem itens CRITICAL ou HIGH em aberto
□ Lighthouse Mobile Performance >= 90
□ Lighthouse Accessibility >= 90
□ CRO Audit: conversion-blockers resolvidos
□ Design S+++ Checklist: 100% PASS
□ LGPD Compliance: 100% PASS
```

### Técnico
```
□ `npm run build` passa sem erros
□ `npm run typecheck` limpo
□ `npm run lint` limpo
□ Nenhum console.error em produção
□ Variáveis de ambiente configuradas no Vercel (não expostas no código)
□ .env* no .gitignore
```

### Conteúdo
```
□ Nenhum placeholder "[NOME DA EMPRESA]" ou "Lorem ipsum" restante
□ Todas as imagens substituídas (sem placeholders)
□ Todos os links funcionais (não quebrados)
□ Todos os CTAs levam ao destino correto
□ Política de Privacidade: texto final aprovado pelo cliente
□ Termos de Uso (se aplicável): aprovado
```

### SEO
```
□ Title tag: único e otimizado
□ Meta description: presente e atraente
□ H1: único por página
□ sitemap.xml: gerado e acessível em /sitemap.xml
□ robots.txt: configurado corretamente
□ Open Graph: og:image 1200×630, title, description
□ Schema JSON-LD: validado em schema.org/SchemaValidator
```

### Integrações
```
□ GA4: pageview e evento de conversão disparando
□ Meta Pixel: PageView disparando
□ LGPD CMP: banner aparece, aceitar/recusar funciona
□ Formulário: submit funciona → lead chega no CRM/e-mail
□ WhatsApp: link abre no mobile com mensagem pré-preenchida
□ Agendamento (se houver): funcional e testado
```

### Infra
```
□ Domínio: DNS apontado para Vercel
□ HTTPS: certificado válido, sem mixed content
□ www → non-www redirect (ou vice-versa): configurado
□ HTTP → HTTPS redirect: configurado
□ Vercel Project: configurado com Environment Variables
□ UptimeRobot: monitor criado com alertas
```

### Aprovação do Cliente
```
□ Preview URL enviada ao cliente
□ Cliente aprovou: design, copy, funcionalidades
□ Conteúdo final recebido (fotos reais, textos aprovados)
□ Data de lançamento confirmada
```
