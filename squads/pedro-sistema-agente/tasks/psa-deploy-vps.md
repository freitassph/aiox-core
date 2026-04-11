---
task: Deploy VPS
responsavel: "@psa-devops"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - apps: apps/ (frontend + backend prontos)
  - infrastructure: infrastructure/ (Docker Compose, scripts)
  - domain: domínio do cliente
  - vps_access: SSH credentials para o servidor
Saida: |
  - production_url: URLs de produção funcionando
  - ci_cd: .github/workflows/ configurado
  - monitoring: Uptime Kuma ativo com alertas
  - runbook: docs/runbook.md atualizado
---

# *deploy-vps

Deploy completo em VPS com Docker, Nginx, SSL, CI/CD e monitoramento.

## Fases de Execução

### Fase 1: Server Provisioning
**Ações:**
- Provisionar VPS (Hetzner CX21 ou DigitalOcean 2vCPU/4GB)
- Criar usuário deploy sem root, adicionar SSH key
- Instalar: Docker, Docker Compose, Nginx, Certbot, Git, curl
- Configurar firewall: somente portas 22 (SSH), 80 (HTTP), 443 (HTTPS) abertas
- Criar diretório `/opt/{project}` com permissões corretas

**Comandos:**
```bash
# No servidor (como root, inicial)
adduser deploy
usermod -aG docker deploy
apt install -y docker.io docker-compose-v2 nginx certbot python3-certbot-nginx
ufw allow 22 && ufw allow 80 && ufw allow 443 && ufw enable
```

**Critério de conclusão:** `ssh deploy@servidor` funciona, Docker rodando

### Fase 2: SSL + Nginx
**Ações:**
- Apontar DNS do domínio para IP do servidor (A record)
- Aguardar propagação DNS (até 5 min)
- Gerar certificados SSL: `certbot --nginx -d dominio.com.br -d api.dominio.com.br`
- Configurar auto-renovação: `certbot renew --dry-run`
- Criar `infrastructure/nginx/nginx.conf` com proxy reverso, SSL, security headers, rate limiting
- Aplicar configuração e testar: `nginx -t && systemctl reload nginx`

**Critério de conclusão:** `https://dominio.com.br` retorna 200 com certificado válido

### Fase 3: Docker Compose Production
**Ações:**
- Criar `.env.prod` no servidor (NUNCA no repositório)
- Criar `infrastructure/docker-compose.prod.yml` com: api, redis, evolution-api, uptime-kuma
- Configurar volumes persistentes para dados
- Configurar restart policies: `restart: unless-stopped`
- Configurar healthchecks para todos os serviços

**Critério de conclusão:** `docker compose -f docker-compose.prod.yml up -d` sem erros, todos healthy

### Fase 4: Database Migrations
**Ações:**
- Instalar Supabase CLI no servidor ou rodar migrations via supabase cloud
- Executar `supabase db push` para aplicar todas as migrations
- Verificar que todas as tabelas foram criadas com RLS habilitado
- Executar seed se necessário

**Critério de conclusão:** `supabase db diff` retorna sem diferenças pendentes

### Fase 5: CI/CD Pipeline
**Ações:**
- Criar `.github/workflows/ci.yml` (lint + typecheck + test em cada PR)
- Criar `.github/workflows/deploy.yml` (deploy automático ao fazer push em main)
- Configurar GitHub Secrets: VPS_HOST, VPS_USER, VPS_SSH_KEY, + todas as env vars de produção
- Pipeline: checkout → install → lint → typecheck → test → build → ssh deploy

**Critério de conclusão:** Push em main dispara deploy automático e completa com sucesso

### Fase 6: Monitoramento
**Ações:**
- Configurar Uptime Kuma (já em Docker Compose)
- Adicionar monitors: API /health, Frontend URL, Evolution API
- Configurar notificações: WhatsApp do cliente + email para downtime
- Configurar alertas de desempenho no Sentry

**Critério de conclusão:** Uptime Kuma verde para todos os monitors, alerta testado recebido

### Fase 7: Smoke Test + Validação Final
**Ações:**
- Acessar URL de produção: carrega corretamente?
- Fazer login com conta de teste
- Enviar mensagem de teste para o agente (WhatsApp + web)
- Verificar logs: sem erros críticos?
- Verificar `/health` endpoint: todos os serviços healthy?

**Critério de conclusão:** Sistema funcional de ponta a ponta em produção

### Fase 8: Runbook
**Ações:**
- Atualizar `docs/runbook.md` com: URLs de produção, como fazer deploy manual, como fazer rollback, como reiniciar serviços, como verificar logs

**Critério de conclusão:** Qualquer dev consegue operar o sistema lendo o runbook

## KPIs e Alvos

| Métrica | Alvo | Como medir |
|---------|------|------------|
| Uptime após deploy | > 99.9% | Uptime Kuma |
| Tempo de deploy CI/CD | < 5 minutos | GitHub Actions |
| SSL válido | 100% | SSL Labs checker |
| Rollback time | < 2 minutos | Testar procedimento |
| Response time /health | < 200ms | curl timing |


## Purpose
O propósito desta tarefa é garantir a execução impecável de um módulo específico do sistema Pedro Henrique, seguindo os rigorosos padrões de qualidade S+++.

## Entrada
- Requisitos técnicos detalhados
- Contexto do projeto vindo do Maestro
- Dependências de sistemas externos validadas

## Saida
- Código fonte documentado e testado
- Artefatos de design ou infraestrutura validados
- Relatório de conformidade técnica

## Checklist
- [ ] Validar conformidade com os padrões de código
- [ ] Executar testes de unidade e integração
- [ ] Revisar documentação técnica
- [ ] Obter aprovação do Auditor

## Pre-conditions
- Ambiente de desenvolvimento configurado
- Todas as dependências do agente resolvidas
- Goal da tarefa claramente definido e aceito pela squad
