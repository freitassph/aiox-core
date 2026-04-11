#!/bin/bash
# copy-framework-analyzer.sh — Analyze landing page copy against proven frameworks
# Usage: ./copy-framework-analyzer.sh <landing-page-directory>
#
# Evaluates copy against:
#   - AIDA (Attention, Interest, Desire, Action)
#   - PAS (Problem, Agitate, Solve)
#   - FAB (Features, Advantages, Benefits)
#   - 4Cs (Clear, Concise, Compelling, Credible)
#   - Ogilvy principles

set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ $# -lt 1 ]; then
    echo "Usage: $0 <landing-page-directory>"
    echo ""
    echo "Analyzes landing page copy against proven marketing frameworks."
    exit 1
fi

TARGET="$1"

echo "=============================================="
echo "  Copy Framework Analyzer"
echo "=============================================="
echo "Target: $TARGET"
echo "----------------------------------------------"

# Collect all text content
TEXT_FILES=$(find "$TARGET" -name '*.md' -o -name '*.txt' -o -name '*.html' -o -name '*.jsx' -o -name '*.tsx' 2>/dev/null | head -20)

if [ -z "$TEXT_FILES" ]; then
    echo -e "${RED}No content files found${NC}"
    exit 1
fi

# Create temp file with all copy
TEMP_COPY=$(mktemp)
for f in $TEXT_FILES; do
    cat "$f" >> "$TEMP_COPY" 2>/dev/null
done

WORD_COUNT=$(wc -w < "$TEMP_COPY" || echo "0")
LINE_COUNT=$(wc -l < "$TEMP_COPY" || echo "0")

echo "Content analyzed: $WORD_COUNT words, $LINE_COUNT lines"
echo ""

check_framework() {
    local name="$1"
    shift
    local patterns=("$@")
    local found=0
    local total=${#patterns[@]}
    
    for pattern in "${patterns[@]}"; do
        if grep -qi "$pattern" "$TEMP_COPY" 2>/dev/null; then
            found=$((found + 1))
        fi
    done
    
    local pct=0
    if [ "$total" -gt 0 ]; then
        pct=$((found * 100 / total))
    fi
    
    if [ "$pct" -ge 75 ]; then
        echo -e "${GREEN}[STRONG]${NC} $name ($found/$total elements)"
    elif [ "$pct" -ge 50 ]; then
        echo -e "${YELLOW}[PARTIAL]${NC} $name ($found/$total elements)"
    else
        echo -e "${RED}[WEAK]${NC} $name ($found/$total elements)"
    fi
}

# AIDA Framework
echo -e "${BLUE}AIDA Framework:${NC}"
check_framework "AIDA" \
    "headline\|headine\|hero\|attention\|discover\|imagine" \
    "interest\|learn\|understand\|benefit\|why" \
    "desire\|transform\|result\|success\|achieve\|dream" \
    "action\|click\|start\|get.*started\|sign.*up\|buy.*now\|cta"

# PAS Framework
echo ""
echo -e "${BLUE}PAS Framework:${NC}"
check_framework "PAS" \
    "problem\|pain\|struggle\|challenge\|frustrat\|tired.*of" \
    "agitat\|worse\|cost.*you\|lose\|risk\|don.t.*let\|stop.*losing" \
    "solve\|solution\|we.*help\|here.s.*how\|finally\|answer"

# FAB Framework
echo ""
echo -e "${BLUE}FAB Framework:${NC}"
check_framework "FAB" \
    "feature\|functionality\|includes\|comes.*with\|built.*with" \
    "advantage\|better\|faster\|easier\|more.*than\|superior" \
    "benefit\|you.*get\|you.*will\|save\|gain\|result\|outcome"

# 4Cs
echo ""
echo -e "${BLUE}4Cs of Copywriting:${NC}"
check_framework "4Cs" \
    "clear\|simple\|straightforward\|easy.*to.*understand" \
    "concise\|brief\|short\|to.*the.*point" \
    "compelling\|powerful\|irresistible\|must.*have" \
    "credible\|proven\|data\|statistics\|testimonials\|case.*stud"

# Ogilvy Principles
echo ""
echo -e "${BLUE}Ogilvy Principles:${NC}"
check_framework "Ogilvy" \
    "headline\|headine" \
    "specific\|number\|data\|fact\|statistic" \
    "you\|your" \
    "promise\|guarantee\|ensure\|assure" \
    "unique\|only\|exclusive\|first" \
    "testimonials?|review|social.*proof|trusted.*by"

# Schwartz Awareness Levels
echo ""
echo -e "${BLUE}Schwartz Awareness Levels:${NC}"
check_framework "Awareness" \
    "most.*aware\|already.*know\|as.*you.*know" \
    "problem.*aware\|do.*you.*struggle\|have.*you.*noticed" \
    "solution.*aware\|looking.*for\|need.*a.*way" \
    "product.*aware\|our.*solution\|our.*product\|we.*offer" \
    "most.*aware\|pricing\|plan\|package\|upgrade"

rm -f "$TEMP_COPY"

echo ""
echo "----------------------------------------------"
echo "Analysis complete. Review results above."
echo "For best conversion: aim for STRONG in at least 2 frameworks."
