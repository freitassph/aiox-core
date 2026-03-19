# Checklist LGPD — Dados Sensíveis de Saúde (Art. 11)
**Agente:** cfm-compliance-sentinel (Dr. Eduardo Leal) + medical-integration-engineer (Lucas Cunha)
**Referência:** Lei 13.709/2018 — Art. 11 (Dados Sensíveis), ANPD Resolução 2/2022
**Critério:** 100% dos itens Blocker PASS

---

## 🔴 BLOCKERS — Site não pode ir ao ar

### Infraestrutura de Segurança
- [ ] HTTPS em TODO o site (incluindo todas as páginas e subdomínios)
- [ ] Certificado SSL válido e não expirado (verificar em ssllabs.com)
- [ ] Formulários: dados em trânsito apenas via HTTPS

### Consentimento em Formulários
- [ ] Checkbox de consentimento explícito em TODOS os formulários de contato
- [ ] Checkbox NÃO pré-marcado (consentimento deve ser ativo)
- [ ] Texto do consentimento menciona: "tratamento de dados de saúde"
- [ ] Link para Política de Privacidade funcional no texto do consentimento
- [ ] Campo "motivo da consulta" identificado como dado sensível no formulário

### Documentação Legal
- [ ] Política de Privacidade publicada e acessível pelo footer
- [ ] Política menciona: dados de saúde como dados sensíveis
- [ ] Política menciona: base legal (consentimento explícito — Art. 11, II, a)
- [ ] Política identifica o DPO/Encarregado (nome ou forma de contato)
- [ ] Política informa prazo de retenção dos dados
- [ ] Política lista subprocessadores (Google Analytics, CRM, etc.)
- [ ] Política de Cookies publicada e acessível
- [ ] Data de última atualização da política presente

### Cookie Consent
- [ ] Banner de cookies implementado (não "pop-up" com apenas "aceitar tudo")
- [ ] Opção de recusar cookies não essenciais disponível
- [ ] Analytics e marketing bloqueados até consentimento
- [ ] Scripts de terceiros (GA4, Meta Pixel) só carregam com consentimento

---

## 🟠 OBRIGATÓRIOS — Corrigir antes de lançamento

### Direitos do Titular
- [ ] Canal para exercício de direitos disponível (email DPO ou formulário)
- [ ] Processo de resposta a DSAR (Data Subject Access Request) definido
- [ ] Prazo de resposta: ≤ 15 dias úteis (conforme ANPD)

### Dados em Repouso
- [ ] Banco de dados com dados de pacientes: criptografado em repouso
- [ ] Backup de dados: criptografado
- [ ] Acesso ao banco: restrito por função (principle of least privilege)

### Retenção e Descarte
- [ ] Dados de agendamento: política de retenção definida (ex: 5 anos)
- [ ] Processo de descarte seguro documentado
- [ ] Logs de formulário: sem dados sensíveis em plaintext

### Cookies e Rastreamento
- [ ] Consentimento: granular (analytics / marketing / funcional)
- [ ] Consentimento: renovação a cada 6 meses
- [ ] "Gerenciar Cookies" acessível pelo footer
- [ ] Cookie list atualizada (incluir todos os cookies de terceiros)

---

## 🟡 BOAS PRÁTICAS LGPD

- [ ] Honeypot anti-spam no formulário (sem dados pessoais extras)
- [ ] Rate limiting em submissão de formulários
- [ ] Log de consentimento: timestamp + versão da política (sem dados pessoais no log)
- [ ] Equipe treinada em LGPD (documentado)
- [ ] Revisão anual da política de privacidade
- [ ] Relatório de Impacto à Proteção de Dados (RIPD) elaborado para site de saúde
- [ ] Processo de notificação à ANPD em caso de incidente de segurança (< 72h)

---

## Verificação de Terceiros

```
Listar todos os serviços de terceiros que recebem dados do site:

Serviço: Google Analytics 4
Dado recebido: Comportamento de navegação (dado sensível indiretamente)
Base legal: Consentimento
Listado na política: □ Sim  □ Não

Serviço: Meta Pixel
Dado recebido: Comportamento de navegação
Base legal: Consentimento
Listado na política: □ Sim  □ Não

Serviço: [Sistema de Agendamento]
Dado recebido: Nome, telefone, motivo (dado sensível de saúde)
Base legal: Consentimento explícito Art. 11 II a
Listado na política: □ Sim  □ Não

Serviço: [Email Marketing / CRM]
Dado recebido: Nome, email, plano de saúde
Base legal: Consentimento
Listado na política: □ Sim  □ Não
```

---

## Resultado da Auditoria LGPD

```
Auditado por: ________________________________
Data: ____________________

Blockers: ___/XX | □ TODOS PASS  □ FALHAS
Obrigatórios: ___/XX | □ TODOS PASS  □ FALHAS

STATUS: □ LGPD CLEARANCE  □ REVISÃO NECESSÁRIA
```
