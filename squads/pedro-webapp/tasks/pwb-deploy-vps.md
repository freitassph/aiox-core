---
task: Deploy VPS
responsavel: "@pwb-devops"
responsavel_type: agent
atomic_layer: task
Entrada: |
  - codebase: sistema completo e testado
  - domain: domínio configurado com DNS
Saida: |
  - infrastructure: infrastructure/ completo
  - ci_cd: .github/workflows/ completo
  - runbook: docs/runbook.md
  - monitoring: Uptime Kuma + Sentry ativos
---

# *deploy-vps

## Purpose
Providenciar a implantação segura e automatizada do WebApp em ambiente de produção (VPS), garantindo alta disponibilidade, monitoramento e escalabilidade básica.

## Pre-conditions
- Codebase validada e testada integralmente.
- Configurações de domínio e DNS prontas para uso.

## Checklist
- [ ] VPS provisionada e endurecida (Hardening)
- [ ] Certificados SSL (Certbot) ativos e configurados
- [ ] Docker Compose de produção operacional e testado
- [ ] Nginx configurado como proxy reverso com segurança
- [ ] Pipeline de CI/CD (GitHub Actions) integrado e funcional
- [ ] Monitoramento (Uptime Kuma, Sentry) e alertas operacionais

## Fases de Execução

### Fase 1: Provisionar VPS
- Criar servidor (Hetzner CX21 ou DO Droplet)
- Configurar SSH key-only authentication
- Instalar: Docker, Docker Compose, Nginx, Certbot
- Criar usuário `deploy` sem sudo desnecessário

### Fase 2: SSL com Certbot
```bash
certbot --nginx -d api.meuapp.com.br
# Auto-renovação já configurada pelo Certbot
```

### Fase 3: Docker Compose Production
- `docker-compose.prod.yml` com: api, worker, redis, uptime-kuma
- Portas internas (127.0.0.1 only) — Nginx faz o proxy público
- Health checks em todos os serviços
- Restart policy: `unless-stopped`

### Fase 4: Nginx Config
- Proxy reverso para API
- Rate limiting (60r/m)
- Security headers (HSTS, CSP, X-Frame-Options)
- Gzip compression
- HTTP → HTTPS redirect

### Fase 5: GitHub Actions CI/CD
- `ci.yml`: lint + typecheck + test em PRs
- `deploy.yml`: test → build → deploy via SSH em push para main
- Secrets: `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`
- Frontend: deploy automático no Vercel

### Fase 6: Deploy Inicial
```bash
./infrastructure/scripts/deploy.sh
# Verificar: docker compose ps — todos healthy
# Verificar: curl https://api.meuapp.com.br/health
```

### Fase 7: Monitoramento
- Uptime Kuma: monitor para `/health`, frontend URL, Redis TCP
- Alertas: Telegram/Discord para downtime > 1 min
- Sentry: verificar que erros chegam no dashboard
- Backup cron: diário às 3h

### Fase 8: Runbook
Documentar: restart de serviço, rollback, ver logs, aplicar migration de emergência, troubleshooting comum.

## Critério de Conclusão
Deploy funcionando, SSL válido, CI/CD ativo, monitoramento com alerta testado, runbook escrito.

## KPIs
| Métrica | Alvo |
|---------|------|
| SSL válido | ✓ |
| Health check 200 | ✓ |
| Uptime Kuma alerta < 2 min | ✓ |
| Primeiro deploy via CI/CD | ✓ |
