# Qwen Symlink Setup

Scripts para sincronizar configurações do Qwen com Antigravity, Claude e aiox-core.

## Scripts

### `qwen-symlink-setup.sh`

Cria symlinks entre as configurações de múltiplas IAs no diretório do Qwen.

**Usage:**
```bash
# Setup completo
npm run sync:qwen

# Testar sem aplicar mudanças
npm run sync:qwen:dry-run

# Remover symlinks e restaurar backup
npm run sync:qwen:cleanup
```

**O que faz:**
- `~/.antigravity/rules.md` → `~/.qwen/rules.md`
- `~/.claude/rules/` → `~/.qwen/rules/`
- `~/.claude/CLAUDE.md` → `~/.qwen/CLAUDE.md`
- `~/.antigravity/memory/GLOBAL_CONTEXT.md` → `~/.qwen/memory/GLOBAL_CONTEXT.md`
- `.aiox-core/development/agents/*.md` → `~/.qwen/agents/`
- `squads/*/agents/*.md` → `~/.qwen/agents/`

### `qwen-watch-agents.sh`

Monitora mudanças nos squads e agentes, sincronizando automaticamente.

**Usage:**
```bash
# One-time sync
npm run sync:qwen:watch

# Background watcher (auto-sync)
npm run sync:qwen:watch:bg
```

**Modos:**
- **fswatch**: Usa `fswatch` para detecção instantânea (requer `brew install fswatch`)
- **Polling**: Fallback com polling de 5 segundos

## Auto-Sync (Não Precisa Rodar Manualmente)

Para não precisar rodar o script sempre que criar um squad:

1. **Opção 1 (Recomendada):** Use o watcher em background:
   ```bash
   npm run sync:qwen:watch:bg
   ```

2. **Opção 2:** Adicione ao seu `.zshrc` ou `.bashrc`:
   ```bash
   # Auto-sync Qwen agents quando entrar no projeto
   alias cd-aiox='cd ~/aiox-core && npm run sync:qwen:watch:bg &'
   ```

3. **Opção 3:** Use git hooks (`.git/hooks/post-merge`):
   ```bash
   #!/bin/bash
   cd "$(git rev-parse --show-toplevel)"
   npm run sync:qwen
   ```

## Troubleshooting

**Symlinks quebrados:**
```bash
npm run sync:qwen:cleanup
npm run sync:qwen
```

**Verificar symlinks:**
```bash
ls -la ~/.qwen/agents/ | head -20
```

**Contar agentes:**
```bash
find ~/.qwen/agents -type l | wc -l
```
