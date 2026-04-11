#!/bin/bash
# medical-seo-audit.sh — Audit medical landing pages for healthcare SEO requirements
# Usage: ./medical-seo-audit.sh <medical-page-directory>
#
# Checks healthcare-specific SEO requirements including:
#   - Schema.org MedicalBusiness markup
#   - E-E-A-T signals for YMYL healthcare
#   - Medical specialty keywords
#   - Local SEO for medical practices

set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

if [ $# -lt 1 ]; then
    echo "Usage: $0 <medical-page-directory>"
    echo ""
    echo "Audits medical landing page for healthcare SEO best practices."
    exit 1
fi

TARGET="$1"
TOTAL=0
PASS=0
WARN=0
FAIL=0

echo "=============================================="
echo "  Medical SEO Audit"
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

# Schema.org Medical Markup
echo ""
echo -e "${BLUE}Schema.org Medical Markup:${NC}"

if grep -rl 'schema.org\|json.ld\|application/ld+json\|MedicalBusiness\|Physician' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Schema.org markup present" "pass"
else
    check "Schema.org markup present" "fail" "MedicalBusiness or Physician schema required"
fi

if grep -rl 'medicalSpecialty\|especialidade.*médica' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Medical specialty in schema" "pass"
else
    check "Medical specialty in schema" "warn"
fi

if grep -rl 'address.*clinic\|endereco.*clinica\|geo.*lat\|latitude.*longitude' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Location data in schema" "pass"
else
    check "Location data in schema" "warn"
fi

# E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
echo ""
echo -e "${BLUE}E-E-A-T Signals (YMYL Healthcare):${NC}"

if grep -rl 'formação\|education\|currículo\|credentials\|titulação\|fellowship\|residency' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Physician credentials/education" "pass"
else
    check "Physician credentials/education" "fail" "Critical for healthcare YMYL"
fi

if grep -rl 'experiência\|years.*experience\|anos.*experiência\|[0-9].*anos.*médico' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Years of experience stated" "pass"
else
    check "Years of experience stated" "warn"
fi

if grep -rl 'sociedade.*médica\|member.*society\|fellow.*college\|membro.*associação' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Professional memberships" "pass"
else
    check "Professional memberships" "warn"
fi

if grep -rl 'publicação\|publication\|research\|pesquisa\|artigo.*científico' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Research/publications referenced" "pass"
else
    check "Research/publications referenced" "warn" "Helps establish authority"
fi

# Local SEO
echo ""
echo -e "${BLUE}Local SEO:${NC}"

if grep -rl 'Google.*My.*Business\|Google.*Business.*Profile\|perfil.*empresa' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Google Business Profile references" "pass"
else
    check "Google Business Profile references" "warn"
fi

if grep -rl '[0-9]\{5\}\-[0-9]\{3\}\|CEP\|zip.*code\|bairro.*cidade\|neighborhood.*city' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Full address present" "pass"
else
    check "Full address present" "warn"
fi

if grep -rl 'telefone\|phone\|whatsapp\|\([0-9]\{2\}\).*[0-9]\{5\}' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Contact phone number" "pass"
else
    check "Contact phone number" "fail" "Medical practices must have contact info"
fi

# Content Quality
echo ""
echo -e "${BLUE}Content Quality:${NC}"

if grep -rl 'doença\|disease\|sintoma\|symptom\|tratamento\|treatment\|procedimento\|procedure' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Medical terminology present" "pass"
else
    check "Medical terminology present" "warn"
fi

if grep -rl 'referência.*bibliográfica\|references\|fontes\|sources\|estudo.*científico' "$TARGET" 2>/dev/null | head -1 | grep -q .; then
    check "Scientific references/sources" "pass"
else
    check "Scientific references/sources" "warn" "Recommended for medical content"
fi

# Summary
echo ""
echo "=============================================="
echo "  Medical SEO Summary"
echo "=============================================="
echo "Total checks: $TOTAL"
echo -e "${GREEN}Pass: $PASS${NC}"
echo -e "${YELLOW}Warn: $WARN${NC}"
echo -e "${RED}Fail: $FAIL${NC}"

if [ "$FAIL" -eq 0 ]; then
    echo -e "${GREEN}Overall: SEO READY${NC}"
    exit 0
elif [ "$FAIL" -le 2 ]; then
    echo -e "${YELLOW}Overall: NEEDS MINOR SEO FIXES${NC}"
    exit 0
else
    echo -e "${RED}Overall: SEO NOT READY — $FAIL critical issue(s)${NC}"
    exit 1
fi
