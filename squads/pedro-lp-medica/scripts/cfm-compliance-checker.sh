#!/bin/bash
# cfm-compliance-checker.sh — Check medical landing page against CFM Resolution 2.336/2023
# Usage: ./cfm-compliance-checker.sh <medical-page-directory>
#
# Validates content against CFM advertising rules for physicians.

set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ $# -lt 1 ]; then
    echo "Usage: $0 <medical-page-directory>"
    echo ""
    echo "Validates medical landing page content against CFM Resolution 2.336/2023."
    echo ""
    echo "Checks performed:"
    echo "  - Prohibited claims and guarantees"
    echo "  - Required professional information"
    echo "  - Before/after photo rules"
    echo "  - Testimonial restrictions"
    echo "  - Pricing and commercial rules"
    exit 1
fi

TARGET="$1"
TOTAL=0
PASS=0
WARN=0
FAIL=0

echo "=============================================="
echo "  CFM Compliance Checker"
echo "  Resolution 2.336/2023"
echo "=============================================="
echo "Target: $TARGET"
echo "Date: $(date '+%Y-%m-%d %H:%M:%S')"
echo "----------------------------------------------"

check() {
    local name="$1"
    local result="$2"
    local detail="$3"
    TOTAL=$((TOTAL + 1))
    case "$result" in
        pass)
            echo -e "${GREEN}[PASS]${NC} $name"
            PASS=$((PASS + 1))
            ;;
        warn)
            echo -e "${YELLOW}[WARN]${NC} $name"
            [ -n "$detail" ] && echo "       $detail"
            WARN=$((WARN + 1))
            ;;
        fail)
            echo -e "${RED}[FAIL]${NC} $name"
            [ -n "$detail" ] && echo "       $detail"
            FAIL=$((FAIL + 1))
            ;;
    esac
}

# Required Information
echo ""
echo -e "${BLUE}Required Professional Information:${NC}"

if grep -rl 'CRM\|[0-9]\{4,6\}.*CRM\|registro.*médico\|medical.*registry' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "CRM number displayed" "pass"
else
    check "CRM number displayed" "fail" "CFM requires visible CRM registration number"
fi

if grep -rl 'especialidade\|specialty\|RQE\|registro.*qualificação' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Specialty/RQE referenced" "pass"
else
    check "Specialty/RQE referenced" "warn" "RQE (Registro de Qualificação de Especialista) recommended"
fi

if grep -rl 'nome.*completo\|full.*name.*doctor\|dr\.|dra\.' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Physician full name present" "pass"
else
    check "Physician full name present" "fail" "CFM requires physician identification"
fi

# Prohibited Claims
echo ""
echo -e "${BLUE}Prohibited Claims (Art. 2º, Resolution 2.336/2023):${NC}"

if grep -rli 'garant.*resultado\|guarantee.*result\|100%.*sucesso\|cure.*guaranteed\|resultado.garantido' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "No guaranteed result claims" "fail" "PROHIBITED: CFM forbids guaranteeing results"
else
    check "No guaranteed result claims" "pass"
fi

if grep -rli 'antes.*depois\|before.*after\|resultado.*visual\|visual.result' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Before/after photos compliant" "warn" "Allowed ONLY if educational, not promotional — review context"
else
    check "Before/after photos" "pass" "No before/after content found"
fi

if grep -rli 'melhor.*médico\|best.*doctor\|número.*um\|#1.*physician\|top.*doctor' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "No superlative claims" "fail" "PROHIBITED: CFM forbids 'best doctor', '#1', etc."
else
    check "No superlative claims" "pass"
fi

if grep -rli 'preço.*baixo\|mais.*barato\|cheapest\|discount.*surgery\|desconto.*procedimento' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "No price-based advertising" "warn" "CFM restricts commercial pricing language — review context"
else
    check "No price-based advertising" "pass"
fi

# Medical Ethics
echo ""
echo -e "${BLUE}Medical Ethics Compliance:${NC}"

if grep -rli 'tratamento.*sem.*evidência\|unproven.*treatment\|miracle.*cure\|cura.*milagrosa' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "No unproven treatment claims" "fail" "PROHIBITED: Must use evidence-based language only"
else
    check "No unproven treatment claims" "pass"
fi

if grep -rli 'LGPD\|privacidade\|privacy\|dados.*saúde\|health.*data' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Health data privacy referenced" "pass"
else
    check "Health data privacy referenced" "fail" "LGPD Art. 11 (sensitive data) compliance required"
fi

# CONAR Healthcare Guidelines
echo ""
echo -e "${BLUE}CONAR Healthcare Guidelines:${NC}"

if grep -rli 'testemunho\|testimonial\|depoimento.*paciente\|patient.*review' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Patient testimonials review" "warn" "CONAR restricts patient testimonials for medical procedures — verify compliance"
else
    check "Patient testimonials" "pass" "No testimonial content found"
fi

if grep -rli 'conselho.*regional\|CFM\|CRM\|Código.*Ética.*Médica' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Regulatory body referenced" "pass"
else
    check "Regulatory body referenced" "warn" "Recommended to reference CFM/CRM for credibility"
fi

# Summary
echo ""
echo "=============================================="
echo "  CFM Compliance Summary"
echo "=============================================="
echo "Total checks: $TOTAL"
echo -e "${GREEN}Pass: $PASS${NC}"
echo -e "${YELLOW}Warn: $WARN${NC}"
echo -e "${RED}Fail: $FAIL${NC}"

if [ "$FAIL" -eq 0 ]; then
    echo -e "${GREEN}Overall: CFM COMPLIANT${NC}"
    exit 0
elif [ "$FAIL" -le 2 ]; then
    echo -e "${YELLOW}Overall: CFM REVIEW NEEDED — $FAIL issue(s) require attention${NC}"
    exit 0
else
    echo -e "${RED}Overall: CFM NON-COMPLIANT — $FAIL violation(s) of Resolution 2.336/2023${NC}"
    exit 1
fi
