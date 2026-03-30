#!/bin/bash
# QWEN AGENTS WATCHER — Auto-sync quando novos squads/agentes são criados
# Este script monitora mudanças nos squads e atualiza o Qwen automaticamente
#
# Usage: ./scripts/qwen-watch-agents.sh [--background]
#

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
QWEN_DIR="$HOME/.qwen"
SQUADS_DIR="$PROJECT_ROOT/squads"
AIOX_AGENTS_DIR="$PROJECT_ROOT/.aiox-core/development/agents"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() { echo -e "${BLUE}[WATCH]${NC} $1"; }
log_success() { echo -e "${GREEN}[✓]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[!]${NC} $1"; }

# Sync agents function (simplified from main setup script)
sync_agents() {
  mkdir -p "$QWEN_DIR/agents"
  
  # Clear existing agent symlinks
  find "$QWEN_DIR/agents" -type l -name "*.md" -delete 2>/dev/null || true
  
  local agent_count=0
  local core_count=0
  local squad_count=0

  # Core agents
  if [[ -d "$AIOX_AGENTS_DIR" ]]; then
    for agent in "$AIOX_AGENTS_DIR"/*.md; do
      [[ -f "$agent" ]] || continue
      local name=$(basename "$agent")
      ln -sf "$agent" "$QWEN_DIR/agents/$name"
      ((core_count++))
      ((agent_count++))
    done
  fi

  # Squad agents
  if [[ -d "$SQUADS_DIR" ]]; then
    for squad_dir in "$SQUADS_DIR"/*/; do
      [[ -d "$squad_dir" ]] || continue
      local squad_name=$(basename "$squad_dir")
      [[ "$squad_name" == _example ]] && continue
      [[ "$squad_name" == .* ]] && continue

      if [[ -d "${squad_dir}agents" ]]; then
        for agent in "${squad_dir}agents"/*.md; do
          [[ -f "$agent" ]] || continue
          local agent_name=$(basename "$agent")
          ln -sf "$agent" "$QWEN_DIR/agents/${squad_name}__${agent_name}"
          ((squad_count++))
          ((agent_count++))
        done
      fi
    done
  fi

  log_success "Synced $agent_count agents (core: $core_count, squads: $squad_count)"
}

# Check if running in background mode
if [[ "${1:-}" == "--background" ]]; then
  log_info "Starting Qwen Agents Watcher in background..."
  log_info "Watching: $SQUADS_DIR"
  
  # Use fswatch if available, otherwise fallback to polling
  if command -v fswatch &> /dev/null; then
    fswatch -r "$SQUADS_DIR" "$AIOX_AGENTS_DIR" 2>/dev/null | while read -r event; do
      log_info "Change detected: $event"
      sync_agents
    done
  else
    # Polling every 5 seconds
    log_warn "fswatch not found, using polling (5s interval)"
    log_info "Install fswatch for better performance: brew install fswatch"
    
    last_state=$(find "$SQUADS_DIR" "$AIOX_AGENTS_DIR" -name "*.md" -type f 2>/dev/null | wc -l)
    
    while true; do
      sleep 5
      current_state=$(find "$SQUADS_DIR" "$AIOX_AGENTS_DIR" -name "*.md" -type f 2>/dev/null | wc -l)
      
      if [[ "$current_state" != "$last_state" ]]; then
        log_info "Change detected ($last_state → $current_state files)"
        sync_agents
        last_state="$current_state"
      fi
    done
  fi
else
  # One-time sync
  log_info "Running one-time agent sync..."
  sync_agents
  log_success "Agent sync complete!"
fi
