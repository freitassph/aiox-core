# Task: Medical Compliance Audit — CFM/CONAR/LGPD Full Audit

## Objetivo
Executar auditoria completa de conformidade em toda a comunicação digital do projeto. Esta task roda em 2 momentos: (1) antes da implementação (copy audit) e (2) antes do lançamento (full site audit).

## Agente Responsável
`cfm-compliance-sentinel` (Dr. Eduardo Leal)

## Inputs
- Copy aprovada pelo médico (para Audit 1)
- Site em staging/preview (para Audit 2)

---

## AUDIT 1 — Copy Compliance (pré-implementação)

### Checklist Aplicado
→ `cfm-2336-2023-checklist.md` (seção copy)

### Processo
```
1. Receber copy completa do medical-copywriter
2. Linha por linha: verificar contra CFM 2.336/2023
3. Verificar especialidade no portal CFM
4. Identificar: Blocker / Major / Minor / Info
5. Emitir relatório categorizado
6. Aguardar correções dos Blockers
7. Re-audit após correções
8. Emitir Copy Compliance Clearance
```

### Output: Copy Compliance Report
```markdown
# Copy Compliance Report — [Projeto] — [Data]
**Auditado por:** Dr. Eduardo Leal (cfm-compliance-sentinel)

## CRM Verificado
CRM-[UF] [Número]: ✅ ATIVO | Nome: [Nome completo] | Especialidade: [Especialidade]

## Issues Encontrados
| # | Localização | Issue | Severidade | Recomendação |
|---|-------------|-------|------------|--------------|

## Status: □ COPY CLEARANCE EMITIDA  □ REVISÃO NECESSÁRIA
```

---

## AUDIT 2 — Full Site Compliance (pré-lançamento)

### Checklists Aplicados
→ `cfm-2336-2023-checklist.md` (completo)
→ `lgpd-health-data-checklist.md` (completo)

### Adicionalmente Verificar no Site ao Vivo
```
□ CRM visível em: hero / sobre / footer — 3 locais mínimos
□ Disclaimer de depoimentos: visível antes dos testemunhos
□ Consentimento LGPD em formulários: funcional (não pré-marcado)
□ Política de Privacidade: link no footer, página carregando
□ Política de Cookies: link no footer, página carregando
□ Cookie banner: aparece em primeira visita, opção de recusar disponível
□ HTTPS: ativo em todo o site
□ Anúncios pagos (Meta/Google): identificados como "Publicidade"
```

### Output: Final Compliance Clearance
```markdown
# COMPLIANCE CLEARANCE — [Projeto]
**Data de emissão:** [Data]
**Válida para:** Lançamento em produção
**Auditor:** Dr. Eduardo Leal | CRM-SP XXXXXX

## Resultado
CFM 2.336/2023: ✅ APROVADO (X/X itens)
LGPD Art. 11: ✅ APROVADO (X/X itens)
CONAR Healthcare: ✅ APROVADO

## Condições
Esta clearance é válida para o site na URL [URL staging] auditada.
Qualquer alteração de copy ou formulários após emissão requer re-audit.

**ASSINADO:** _________________________________ | Data: _______
```

## Critérios de Aceite
```
□ Zero Blockers em qualquer checklist
□ CRM verificado no portal CFM online
□ Compliance Clearance emitida (Audit 1 + Audit 2)
□ Aprovação do médico responsável (assinatura no relatório)
```

## Outputs
- **`/docs/copy-compliance-report.md`** — Relatório da Audit 1
- **`/docs/site-compliance-report.md`** — Relatório da Audit 2
- **`/docs/compliance-clearance.md`** — Clearance final assinada
