# Launch Readiness Checklist — Medical Site
**Agente:** medical-qa-auditor (Renata Fonseca) + medical-deployment-agent (Gabriel Matos)
**Quando usar:** 48h antes do go-live
**Critério:** 100% PASS em todos os itens críticos

---

## ⚕️ COMPLIANCE (Blocker — zero tolerância)
- [ ] CFM Compliance Clearance emitida por cfm-compliance-sentinel
- [ ] LGPD Checklist 100% aprovada
- [ ] CRM/RQE visível em: hero, sobre, footer
- [ ] Todos os formulários com consentimento LGPD funcional
- [ ] Política de Privacidade e Cookies publicadas e linkadas

## 🎨 DESIGN S+++ TIER
- [ ] Design Quality S+++ Checklist aprovada por Valentina + Bruno
- [ ] Revisão final em: iPhone SE, iPhone 15 Pro, Samsung Galaxy S24, iPad, MacBook
- [ ] Dark section (hero/impact) com contraste verificado
- [ ] Animações: todas com prefers-reduced-motion respeitado
- [ ] WhatsApp CTA visível em mobile sem scroll

## ⚡ PERFORMANCE
- [ ] Lighthouse Mobile ≥ 90 (Performance)
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO ≥ 95
- [ ] LCP < 2.5s (mobile 4G simulado — PageSpeed Insights)
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] TTFB < 800ms

## 🔍 SEO TÉCNICO
- [ ] Google Search Console verificado
- [ ] sitemap.xml gerado e acessível
- [ ] robots.txt não bloqueia indexação de páginas principais
- [ ] Schema.org: zero erros no Rich Results Test
- [ ] Meta title e description únicas em todas as páginas
- [ ] Google Analytics 4: tracking events funcionando
- [ ] GA4 Conversion: evento appointment_form_submit configurado

## 🌐 FUNCIONALIDADE
- [ ] Formulário de contato: submissão funciona + email chega
- [ ] Formulário: mensagem de erro em campos obrigatórios
- [ ] Formulário: mensagem de sucesso após envio
- [ ] WhatsApp CTA: link abre no app correto com mensagem pré-preenchida
- [ ] CTA de telefone: funciona no mobile (tel: link)
- [ ] Google Maps embed: carregando (ou fallback estático)
- [ ] Blog (se existente): todos os artigos carregando
- [ ] Todos os links internos: sem 404
- [ ] Imagens: sem 404, todas carregando

## 🔒 SEGURANÇA
- [ ] HTTPS em todo o site
- [ ] Security headers: A+ em securityheaders.com
- [ ] Rate limiting em formulários testado
- [ ] reCAPTCHA funcionando
- [ ] Nenhum dado sensível em console.log de produção
- [ ] .env não exposto em bundle (verificar network tab)

## 📊 MONITORAMENTO
- [ ] Uptime monitoring configurado (BetterStack ou similar)
- [ ] Sentry configurado para error tracking
- [ ] Alertas de downtime configurados (SMS/WhatsApp responsável)
- [ ] Google Analytics 4 funcionando
- [ ] Vercel Analytics ativo

## 📱 CROSS-BROWSER/DEVICE
- [ ] Chrome (Windows/Mac/Android)
- [ ] Safari (iOS/macOS)
- [ ] Firefox
- [ ] Samsung Internet (Android)
- [ ] Edge
- [ ] Zoom 200%: layout funcional sem scroll horizontal

## 📋 CONTEÚDO FINAL
- [ ] Revisão ortográfica completa (português BR)
- [ ] Nenhum texto de placeholder ("Lorem ipsum", "TODO", "PREENCHER")
- [ ] Fotos finais do médico (não placeholders)
- [ ] Endereço e telefone verificados e corretos
- [ ] Horários de funcionamento atualizados
- [ ] Convênios/planos aceitos atualizados

## 🚀 DEPLOY
- [ ] Build de produção sem erros
- [ ] Domínio apontando para Vercel
- [ ] Redirect www ↔ non-www configurado
- [ ] Redirect HTTP → HTTPS configurado
- [ ] 404 customizada (branded, com link para home)
- [ ] Rollback plan documentado

---

## Sign-off

```
QA Auditor: ________________________ (Renata Fonseca) | Data: _______
Deployment: ________________________ (Gabriel Matos)  | Data: _______
CFM Sentinel: ______________________ (Dr. Eduardo)    | Data: _______
Design Review: _____________________ (Valentina Cruz) | Data: _______
Cliente: ___________________________ (Médico/Clínica) | Data: _______

STATUS FINAL: □ GO-LIVE AUTORIZADO  □ AGUARDANDO CORREÇÕES
```
