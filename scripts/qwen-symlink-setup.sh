#!/bin/bash
# QWEN SYMLINK SETUP — Centraliza configs de Antigravity + Claude + aiox-core no Qwen
# Rodar uma vez. Após isso, Qwen sempre lê a versão mais recente.
#
# Usage: ./scripts/qwen-symlink-setup.sh [--dry-run] [--cleanup]
#

set -euo pipefail

# =============================================================================
# CONFIG
# =============================================================================
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

QWEN_DIR="$HOME/.qwen"
ANTIGRAVITY_DIR="$HOME/.antigravity"
CLAUDE_DIR="$HOME/.claude"

# Fontes dos agentes
AIOX_AGENTS_DIR="$PROJECT_ROOT/.aiox-core/development/agents"
SQUADS_DIR="$PROJECT_ROOT/squads"

DRY_RUN=false
CLEANUP=false

# =============================================================================
# COLORS & UTILS
# =============================================================================
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

log_info()    { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[✓]${NC} $1"; }
log_warn()    { echo -e "${YELLOW}[!]${NC} $1"; }
log_error()   { echo -e "${RED}[✗]${NC} $1"; }
log_agent()   { echo -e "${MAGENTA}[AGENT]${NC} $1"; }
log_step()    { echo -e "\n${CYAN}=== $1 ===${NC}"; }

die() {
  log_error "$1"
  exit 1
}

# =============================================================================
# ARGUMENT PARSING
# =============================================================================
while [[ $# -gt 0 ]]; do
  case $1 in
    --dry-run)
      DRY_RUN=true
      log_warn "Dry-run mode: no changes will be made"
      shift
      ;;
    --cleanup)
      CLEANUP=true
      shift
      ;;
    -h|--help)
      echo "Usage: $0 [--dry-run] [--cleanup]"
      echo ""
      echo "Options:"
      echo "  --dry-run   Show what would be done without making changes"
      echo "  --cleanup   Remove all symlinks and restore from backup"
      echo "  -h, --help  Show this help message"
      exit 0
      ;;
    *)
      die "Unknown option: $1"
      ;;
  esac
done

# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

# Create symlink safely with validation
# Usage: create_symlink <source> <target> [description]
create_symlink() {
  local source="$1"
  local target="$2"
  local description="${3:-}"

  if $DRY_RUN; then
    echo "  [DRY] Would link: $target → $source"
    return 0
  fi

  # Check if source exists
  if [[ ! -e "$source" ]]; then
    log_warn "Source not found: $source"
    return 1
  fi

  # Remove existing file/symlink at target
  rm -f "$target"

  # Create parent directory if needed
  mkdir -p "$(dirname "$target")"

  # Create symlink
  ln -sf "$source" "$target"

  # Verify symlink is valid (not broken)
  if [[ -L "$target" && ! -e "$target" ]]; then
    log_error "Broken symlink created: $target → $source"
    return 1
  fi

  if [[ -n "$description" ]]; then
    log_success "$description"
  fi
  return 0
}

# Backup file if it exists
# Usage: backup_file <file> <backup_dir>
backup_file() {
  local file="$1"
  local backup_dir="$2"
  local timestamp
  timestamp=$(date +%Y%m%d_%H%M%S)

  if [[ ! -e "$file" ]]; then
    return 0
  fi

  # Skip broken symlinks
  if [[ -L "$file" && ! -e "$file" ]]; then
    log_warn "Skipping broken symlink: $file"
    return 0
  fi

  if $DRY_RUN; then
    echo "  [DRY] Would backup: $file"
    return 0
  fi

  mkdir -p "$backup_dir"
  local basename
  basename=$(basename "$file")
  
  # Handle directories and files differently
  if [[ -d "$file" ]]; then
    cp -r "$file" "$backup_dir/${basename}.${timestamp}.bak"
  else
    cp "$file" "$backup_dir/${basename}.${timestamp}.bak"
  fi
  log_success "Backup: ${basename} → ${basename}.${timestamp}.bak"
}

# Backup agents directory safely (only valid symlinks)
backup_agents_dir() {
  local backup_dir="$QWEN_DIR/backup/agents"
  local timestamp
  timestamp=$(date +%Y%m%d_%H%M%S)
  
  if $DRY_RUN; then
    echo "  [DRY] Would backup agents directory"
    return 0
  fi
  
  if [[ ! -d "$QWEN_DIR/agents" ]]; then
    return 0
  fi
  
  mkdir -p "$backup_dir"
  local agents_backup="$backup_dir/agents.${timestamp}.bak"
  mkdir -p "$agents_backup"
  
  # Copy only valid symlinks and files
  local count=0
  for agent in "$QWEN_DIR/agents"/*; do
    [[ -e "$agent" ]] || continue
    cp -r "$agent" "$agents_backup/"
    ((count++))
  done
  
  if [[ $count -gt 0 ]]; then
    log_success "Backup: $count agents → agents.${timestamp}.bak"
  fi
}

# =============================================================================
# VALIDATION
# =============================================================================
validate_sources() {
  log_step "Validating source directories"

  local has_missing=false

  if [[ ! -d "$ANTIGRAVITY_DIR" ]]; then
    log_warn "Antigravity directory not found: $ANTIGRAVITY_DIR"
    has_missing=true
  else
    log_success "Antigravity: $ANTIGRAVITY_DIR"
  fi

  if [[ ! -d "$CLAUDE_DIR" ]]; then
    log_warn "Claude directory not found: $CLAUDE_DIR"
    has_missing=true
  else
    log_success "Claude: $CLAUDE_DIR"
  fi

  if [[ ! -d "$PROJECT_ROOT" ]]; then
    die "Project root not found: $PROJECT_ROOT"
  else
    log_success "Project: $PROJECT_ROOT"
  fi

  if [[ ! -d "$AIOX_AGENTS_DIR" ]]; then
    log_warn "aiox-core agents not found: $AIOX_AGENTS_DIR"
    has_missing=true
  else
    log_success "aiox agents: $AIOX_AGENTS_DIR"
  fi

  if [[ ! -d "$SQUADS_DIR" ]]; then
    log_warn "Squads directory not found: $SQUADS_DIR"
    has_missing=true
  else
    log_success "Squads: $SQUADS_DIR"
  fi

  if $has_missing; then
    log_warn "Some source directories are missing. Symlinks will be created only for existing sources."
  fi
}

# =============================================================================
# CLEANUP MODE
# =============================================================================
do_cleanup() {
  log_step "Cleanup mode: removing symlinks and restoring from backup"

  if $DRY_RUN; then
    echo "  [DRY] Would remove symlinks and restore from backup"
    return 0
  fi

  # Remove symlinks
  rm -f "$QWEN_DIR/rules.md"
  rm -rf "$QWEN_DIR/rules"
  rm -f "$QWEN_DIR/CLAUDE.md"
  rm -f "$QWEN_DIR/memory/GLOBAL_CONTEXT.md"
  rm -rf "$QWEN_DIR/agents"

  log_success "Symlinks removed"

  # Restore from backup (most recent)
  local backup_dir="$QWEN_DIR/backup"
  if [[ -d "$backup_dir" ]]; then
    log_info "Restoring from backup..."

    # Find most recent backup for each file
    for backup_file in "$backup_dir"/*.bak; do
      [[ -f "$backup_file" ]] || continue
      local basename
      basename=$(basename "$backup_file" .bak)
      # Remove timestamp suffix (YYYYMMDD_HHMMSS)
      local original_name
      original_name=$(echo "$basename" | sed 's/\.[0-9]\{8\}_[0-9]\{6\}$//')
      cp "$backup_file" "$QWEN_DIR/$original_name"
      log_success "Restored: $original_name"
    done
  else
    log_warn "No backup found to restore from"
  fi

  log_success "Cleanup completed"
}

# =============================================================================
# AGENTS SYNC
# =============================================================================
sync_agents() {
  log_step "[3/6] Syncing agents"

  if $DRY_RUN; then
    echo "  [DRY] Would sync agents from aiox-core and squads"
  else
    mkdir -p "$QWEN_DIR/agents"

    # Clear existing agent symlinks (preserve manual additions)
    find "$QWEN_DIR/agents" -type l -name "*.md" -delete 2>/dev/null || true

    local agent_count=0
    local core_count=0
    local squad_count=0

    # ==========================================
    # Agentes principais do aiox-core
    # Source: .aiox-core/development/agents/*.md
    # ==========================================
    if [[ -d "$AIOX_AGENTS_DIR" ]]; then
      log_agent "Syncing core agents from .aiox-core/development/agents/"
      for agent in "$AIOX_AGENTS_DIR"/*.md; do
        [[ -f "$agent" ]] || continue
        local name
        name=$(basename "$agent")
        ln -sf "$agent" "$QWEN_DIR/agents/$name"
        ((core_count++))
        ((agent_count++))
      done
      log_success "Linked $core_count core agents"
    fi

    # ==========================================
    # Agentes dos squads
    # Source: squads/<squad-name>/agents/*.md
    # ==========================================
    if [[ -d "$SQUADS_DIR" ]]; then
      log_agent "Syncing squad agents from squads/"
      for squad_dir in "$SQUADS_DIR"/*/; do
        [[ -d "$squad_dir" ]] || continue
        local squad_name
        squad_name=$(basename "$squad_dir")

        # Skip _example and hidden directories
        [[ "$squad_name" == _example ]] && continue
        [[ "$squad_name" == .* ]] && continue

        # Agentes em squads/<name>/agents/*.md
        if [[ -d "${squad_dir}agents" ]]; then
          for agent in "${squad_dir}agents"/*.md; do
            [[ -f "$agent" ]] || continue
            local agent_name
            agent_name=$(basename "$agent")
            # Naming convention: <squad>__<agent>.md
            ln -sf "$agent" "$QWEN_DIR/agents/${squad_name}__${agent_name}"
            ((squad_count++))
            ((agent_count++))
          done
        fi
      done
      log_success "Linked $squad_count squad agents"
    fi

    log_success "Total agents linked: $agent_count (core: $core_count, squads: $squad_count)"
  fi
}

# =============================================================================
# MAIN SETUP
# =============================================================================
main() {
  log_step "[1/6] Creating backup directories"
  mkdir -p "$QWEN_DIR/backup/rules"
  mkdir -p "$QWEN_DIR/backup/memory"
  mkdir -p "$QWEN_DIR/backup/agents"

  log_step "[2/6] Backing up current files"
  backup_file "$QWEN_DIR/rules.md" "$QWEN_DIR/backup/rules"
  backup_file "$QWEN_DIR/rules" "$QWEN_DIR/backup"
  backup_agents_dir
  backup_file "$QWEN_DIR/memory/GLOBALCONTEXT.md" "$QWEN_DIR/backup/memory"
  backup_file "$QWEN_DIR/memory/GLOBAL_CONTEXT.md" "$QWEN_DIR/backup/memory"
  backup_file "$QWEN_DIR/CLAUDE.md" "$QWEN_DIR/backup"

  # ==========================================
  # RULES.MD (Antigravity → Qwen)
  # ==========================================
  create_symlink "$ANTIGRAVITY_DIR/rules.md" "$QWEN_DIR/rules.md" "rules.md → ~/.antigravity/rules.md"

  # ==========================================
  # RULES/ INDIVIDUAIS (Claude → Qwen)
  # ==========================================
  if $DRY_RUN; then
    echo "  [DRY] Would link: $QWEN_DIR/rules/ → $CLAUDE_DIR/rules/"
  else
    rm -rf "$QWEN_DIR/rules"
    ln -sf "$CLAUDE_DIR/rules" "$QWEN_DIR/rules"
    log_success "rules/ → ~/.claude/rules/"
  fi

  # ==========================================
  # CLAUDE.MD (Claude → Qwen)
  # ==========================================
  create_symlink "$CLAUDE_DIR/CLAUDE.md" "$QWEN_DIR/CLAUDE.md" "CLAUDE.md → ~/.claude/CLAUDE.md"

  # ==========================================
  # GLOBAL_CONTEXT (Antigravity → Qwen memory)
  # ==========================================
  if $DRY_RUN; then
    echo "  [DRY] Would link: $QWEN_DIR/memory/GLOBAL_CONTEXT.md → $ANTIGRAVITY_DIR/memory/GLOBAL_CONTEXT.md"
  else
    rm -f "$QWEN_DIR/memory/GLOBALCONTEXT.md"
    rm -f "$QWEN_DIR/memory/GLOBAL_CONTEXT.md"
    mkdir -p "$QWEN_DIR/memory"
    ln -sf "$ANTIGRAVITY_DIR/memory/GLOBAL_CONTEXT.md" "$QWEN_DIR/memory/GLOBAL_CONTEXT.md"
    log_success "GLOBAL_CONTEXT.md → ~/.antigravity/memory/GLOBAL_CONTEXT.md"
  fi

  # ==========================================
  # AGENTS (aiox-core → Qwen)
  # ==========================================
  sync_agents

  log_step "[4/6] Verifying symlinks"
  echo ""
  echo -e "${CYAN}→ rules.md:${NC}"
  ls -la "$QWEN_DIR/rules.md" 2>/dev/null || echo "  (not created)"

  echo -e "\n${CYAN}→ rules/ (first 5):${NC}"
  ls -la "$QWEN_DIR/rules" 2>/dev/null | head -6 || echo "  (not created)"

  echo -e "\n${CYAN}→ CLAUDE.md:${NC}"
  ls -la "$QWEN_DIR/CLAUDE.md" 2>/dev/null || echo "  (not created)"

  echo -e "\n${CYAN}→ GLOBAL_CONTEXT.md:${NC}"
  ls -la "$QWEN_DIR/memory/GLOBAL_CONTEXT.md" 2>/dev/null || echo "  (not created)"

  echo -e "\n${CYAN}→ agents/ (total):${NC}"
  local total_agents
  total_agents=$(find "$QWEN_DIR/agents" -type l 2>/dev/null | wc -l | tr -d ' ')
  echo "  $total_agents symlinks"

  # List agents by source
  if [[ -d "$QWEN_DIR/agents" ]]; then
    echo -e "\n${CYAN}→ Core agents:${NC}"
    find "$QWEN_DIR/agents" -type l -name "*.md" ! -name "*__*" | wc -l | xargs -I {} echo "  {} agents"

    echo -e "\n${CYAN}→ Squad agents:${NC}"
    find "$QWEN_DIR/agents" -type l -name "*__*" | wc -l | xargs -I {} echo "  {} agents"
  fi

  # Check for broken symlinks
  local broken_count
  broken_count=$(find "$QWEN_DIR" -type l ! -exec test -e {} \; -print 2>/dev/null | wc -l | tr -d ' ')
  if [[ "$broken_count" -gt 0 ]]; then
    log_warn "Found $broken_count broken symlinks in $QWEN_DIR"
    find "$QWEN_DIR" -type l ! -exec test -e {} \; -print 2>/dev/null | head -10 | while read -r link; do
      echo "  BROKEN: $link"
    done
  else
    log_success "No broken symlinks detected"
  fi

  log_step "[5/6] Testing file readability"
  echo ""
  echo -e "${CYAN}--- rules.md (Antigravity) ---${NC}"
  head -5 "$QWEN_DIR/rules.md" 2>/dev/null || echo "  (not readable)"

  echo -e "\n${CYAN}--- CLAUDE.md (Claude) ---${NC}"
  head -5 "$QWEN_DIR/CLAUDE.md" 2>/dev/null || echo "  (not readable)"

  echo -e "\n${CYAN}--- GLOBAL_CONTEXT.md (Antigravity) ---${NC}"
  head -5 "$QWEN_DIR/memory/GLOBAL_CONTEXT.md" 2>/dev/null || echo "  (not readable)"

  log_step "[6/6] Summary"
  echo ""
  echo -e "${GREEN}✅ SETUP CONCLUÍDO${NC}"
  echo ""
  echo "O Qwen agora lê diretamente os arquivos originais do Antigravity, Claude e aiox-core."
  echo "Qualquer atualização neles é refletida automaticamente no Qwen."
  echo ""
  echo "Backup salvo em: $QWEN_DIR/backup/"

  if $DRY_RUN; then
    echo ""
    log_warn "This was a DRY RUN. No changes were made."
    echo "Run without --dry-run to apply changes."
  fi
}

# =============================================================================
# ENTRY POINT
# =============================================================================
if $CLEANUP; then
  validate_sources
  do_cleanup
else
  validate_sources
  main
fi
