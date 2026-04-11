#!/bin/bash
# lp-quality-audit.sh — Audit a landing page for quality, performance, and compliance
# Usage: ./lp-quality-audit.sh <landing-page-directory>
#
# Checks:
#   - Design system token usage
#   - Accessibility (WCAG 2.1 AA) markers
#   - LGPD compliance indicators
#   - SEO meta tags
#   - Performance markers (lazy loading, async, etc.)
#   - Copy framework elements (headline, CTA, social proof, urgency)

set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ $# -lt 1 ]; then
    echo "Usage: $0 <landing-page-directory>"
    echo ""
    echo "Audits landing page quality across multiple dimensions:"
    echo "  - Design system adherence"
    echo "  - Accessibility (WCAG 2.1 AA)"
    echo "  - LGPD compliance"
    echo "  - SEO optimization"
    echo "  - Performance markers"
    echo "  - Conversion copy elements"
    exit 1
fi

TARGET="$1"
TOTAL=0
PASS=0
WARN=0
FAIL=0

echo "=============================================="
echo "  Landing Page Quality Audit"
echo "=============================================="
echo "Target: $TARGET"
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo "----------------------------------------------"

check() {
    local name="$1"
    local result="$2"
    TOTAL=$((TOTAL + 1))
    case "$result" in
        pass) echo -e "${GREEN}[PASS]${NC} $name"; PASS=$((PASS + 1)) ;;
        warn) echo -e "${YELLOW}[WARN]${NC} $name"; WARN=$((WARN + 1)) ;;
        fail) echo -e "${RED}[FAIL]${NC} $name"; FAIL=$((FAIL + 1)) ;;
    esac
}

# Design System
echo ""
echo -e "${BLUE}Design System:${NC}"
if grep -rl 'design.token\|design-token\|token.*color\|--color\|--spacing\|--font' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Design tokens referenced" "pass"
else
    check "Design tokens referenced" "warn"
fi

if grep -rl 'atomic\|atom\|molecule\|organism\|template' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Atomic design structure" "pass"
else
    check "Atomic design structure" "warn"
fi

# Accessibility
echo ""
echo -e "${BLUE}Accessibility (WCAG 2.1 AA):${NC}"
if grep -rl 'alt=\|aria-\|role=\|tabindex\|sr.only\|visually.hidden' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Accessibility attributes present" "pass"
else
    check "Accessibility attributes present" "fail"
fi

if grep -rl 'contrast\|color.ratio\|wcag\|aa.compliant' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Contrast ratio references" "pass"
else
    check "Contrast ratio references" "warn"
fi

if grep -rl 'keyboard\|focus\|:focus\|focus.visible\|tab.order' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Keyboard navigation support" "pass"
else
    check "Keyboard navigation support" "warn"
fi

# LGPD Compliance
echo ""
echo -e "${BLUE}LGPD Compliance:${NC}"
if grep -rl 'privac\|lgpd\|consent\|cookie.policy\|dados.*pessoais' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "LGPD references present" "pass"
else
    check "LGPD references present" "fail"
fi

if grep -rl 'cookie.*banner\|cookie.*consent\|banner.*cookie' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Cookie consent mechanism" "pass"
else
    check "Cookie consent mechanism" "warn"
fi

# SEO
echo ""
echo -e "${BLUE}SEO Optimization:${NC}"
if grep -rl 'meta.*description\|og:title\|og:description\|twitter:card\|schema.org' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Meta tags present" "pass"
else
    check "Meta tags present" "fail"
fi

if grep -rl 'h1\|heading.*1\|title.*tag\|canonical' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Heading structure" "pass"
else
    check "Heading structure" "warn"
fi

if grep -rl 'sitemap\|robots\|structured.data\|json.ld' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Structured data / sitemap references" "pass"
else
    check "Structured data / sitemap references" "warn"
fi

# Performance
echo ""
echo -e "${BLUE}Performance:${NC}"
if grep -rl 'lazy\|async\|defer\|preload\|preconnect\|webp\|avif' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Performance optimization markers" "pass"
else
    check "Performance optimization markers" "warn"
fi

if grep -rl 'core.web.vitals\|lcp\|fid\|cls\|inp\|web.vital' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Core Web Vitals references" "pass"
else
    check "Core Web Vitals references" "warn"
fi

# Conversion Copy
echo ""
echo -e "${BLUE}Conversion Copy Elements:${NC}"
if grep -rl 'cta\|call.to.action\|button.*primary\|convert\|sign.up\|subscribe' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "CTA elements present" "pass"
else
    check "CTA elements present" "fail"
fi

if grep -rl 'social.proof\|testimonial\|review\|case.stud\|trust' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Social proof elements" "pass"
else
    check "Social proof elements" "warn"
fi

if grep -rl 'urgency\|scarcity\|limited\|deadline\|offer.*end' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Urgency/scarcity triggers" "pass"
else
    check "Urgency/scarcity triggers" "warn"
fi

# Summary
echo ""
echo "=============================================="
echo "  Audit Summary"
echo "=============================================="
echo "Total checks: $TOTAL"
echo -e "${GREEN}Pass: $PASS${NC}"
echo -e "${YELLOW}Warn: $WARN${NC}"
echo -e "${RED}Fail: $FAIL${NC}"

if [ "$TOTAL" -gt 0 ]; then
    SCORE=$(( (PASS * 10 + WARN * 5) * 100 / (TOTAL * 10) ))
    echo "Quality Score: ${SCORE}%"
fi

if [ "$FAIL" -eq 0 ]; then
    echo -e "${GREEN}Overall: READY FOR LAUNCH${NC}"
    exit 0
elif [ "$FAIL" -le 2 ]; then
    echo -e "${YELLOW}Overall: NEEDS MINOR FIXES${NC}"
    exit 0
else
    echo -e "${RED}Overall: NOT READY — $FAIL critical issue(s)${NC}"
    exit 1
fi
