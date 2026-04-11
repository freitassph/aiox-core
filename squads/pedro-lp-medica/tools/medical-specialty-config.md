# Medical Specialty Configuration Guide

> **Configuration guide for adapting medical landing pages to specific medical specialties** — Used by medical-prd-architect and medical-copywriter to configure tone, compliance, and content per specialty.

---

## Specialty Configurations

### 1. Dermatologia (Dermatology)

| Element | Configuration |
|---------|--------------|
| **Tone** | Clinical + aesthetic balance |
| **Key sections** | Conditions treated, procedures, skin health education |
| **Compliance focus** | CFM Art. 2º (no before/after promotion), ANVISA for products |
| **SEO keywords** | dermatologista, acne, melasma, skincare, dermatologia clínica |
| **Color palette** | Clean whites, soft blues, gold accents (clinical luxury) |
| **CTA** | "Agendar Consulta", "Avaliar Minha Pele" |
| **Social proof** | Credentials, society memberships, published research |
| **LGPD concern** | HIGH — health data (skin conditions, photos) |

### 2. Cirurgia Plástica (Plastic Surgery)

| Element | Configuration |
|---------|--------------|
| **Tone** | Trust + discretion (most regulated specialty) |
| **Key sections** | Procedures (educational), surgeon credentials, facility info |
| **Compliance focus** | CFM STRICT — no promotional before/after, no guarantees |
| **SEO keywords** | cirurgião plástico, rinoplastia, lipoaspiração, SBCP |
| **Color palette** | Premium: black, gold, cream (luxury medical) |
| **CTA** | "Agendar Avaliação", "Conhecer o Procedimento" |
| **Social proof** | SBCP membership, hospital affiliations, years of experience |
| **LGPD concern** | CRITICAL — health data + photographic evidence |

### 3. Cardiologia (Cardiology)

| Element | Configuration |
|---------|--------------|
| **Tone** | Authority, urgency, trust |
| **Key sections** | Conditions (hypertension, arrhythmia), prevention, exams |
| **Compliance focus** | Evidence-based claims only, no cure guarantees |
| **SEO keywords** | cardiologista, coração, hipertensão, arritmia, check-up cardíaco |
| **Color palette** | Deep red (heart), navy, white (clinical trust) |
| **CTA** | "Agendar Check-up Cardíaco", "Prevenir Doenças" |
| **Social proof** | SOCERJ/SBC credentials, hospital affiliations, research |
| **LGPD concern** | HIGH — cardiovascular health data |

### 4. Psiquiatria (Psychiatry)

| Element | Configuration |
|---------|--------------|
| **Tone** | Empathetic, safe, non-judgmental |
| **Key sections** | Conditions treated (anxiety, depression), approach, confidentiality |
| **Compliance focus** | CFM + extra sensitivity on testimonials, medication claims |
| **SEO keywords** | psiquiatra, ansiedade, depressão, TDAH, saúde mental |
| **Color palette** | Calming: soft blues, greens, warm neutrals |
| **CTA** | "Falar com Especialista", "Agendar Consulta" |
| **Social proof** | ABP membership, credentials, years of practice |
| **LGPD concern** | CRITICAL — mental health data (Art. 11, highest protection) |

### 5. Ortopedia (Orthopedics)

| Element | Configuration |
|---------|--------------|
| **Tone** | Active, results-oriented, professional |
| **Key sections** | Specializations (sports, spine, joints), procedures, rehabilitation |
| **Compliance focus** | CFM — no outcome guarantees for surgeries |
| **SEO keywords** | ortopedista, joelho, coluna, ombro, medicina esportiva |
| **Color palette** | Active: blues, greens, energetic accents |
| **CTA** | "Agendar Avaliação Ortopédica", "Voltar a se Movimentar" |
| **Social proof** | SBOT credentials, sports team affiliations, surgical volume |
| **LGPD concern** | HIGH — musculoskeletal health data |

### 6. Oftalmologia (Ophthalmology)

| Element | Configuration |
|---------|--------------|
| **Tone** | Precision, technology, clarity |
| **Key sections** | Procedures (LASIK, cataract), exams, conditions |
| **Compliance focus** | CFM — no "perfect vision" guarantees |
| **SEO keywords** | oftalmologista, LASIK, catarata, visão, exame de vista |
| **Color palette** | Clear: blues, whites, precision greens |
| **CTA** | "Agendar Exame de Vista", "Avaliar Meu Caso" |
| **Social proof** | CBO credentials, technology certifications, procedure count |
| **LGPD concern** | HIGH — ophthalmologic health data |

### 7. Pediatria (Pediatrics)

| Element | Configuration |
|---------|--------------|
| **Tone** | Warm, caring, trustworthy (parents are the audience) |
| **Key sections** | Well-child visits, vaccinations, conditions, emergency info |
| **Compliance focus** | CFM + extra protection for minor data (LGPD Art. 14) |
| **SEO keywords** | pediatra, criança, vacinação, crescimento, desenvolvimento |
| **Color palette** | Warm: soft pastels, friendly colors |
| **CTA** | "Agendar Consulta do Seu Filho", "Conhecer o Consultório" |
| **Social proof** | SBP credentials, hospital affiliations, years with children |
| **LGPD concern** | CRITICAL — minor's health data (requires guardian consent) |

### 8. Odontologia (Dentistry) — *CFO, not CFM, but same squad patterns*

| Element | Configuration |
|---------|--------------|
| **Tone** | Confidence, aesthetics, comfort |
| **Key sections** | Treatments, technology, before/after (CFO rules), financing |
| **Compliance focus** | CFO Resolution 196/2019 (different from CFM) |
| **SEO keywords** | dentista, implante, ortodontia, clareamento, sorriso |
| **Color palette** | Clean: whites, blues, premium golds |
| **CTA** | "Agendar Avaliação", "Transformar Meu Sorriso" |
| **Social proof** | CRO credentials, before/after (CFO-compliant), technology |
| **LGPD concern** | MEDIUM — dental health data |

---

## Specialty Mapping Template

For each new specialty, define:

```yaml
specialty:
  name: ""
  council: ""  # CFM, CRO, COREN, etc.
  council_registration: ""  # CRM, CRO, etc.
  specialty_board: ""  # SBX, SBY, etc.
  tone: ""
  color_palette: []
  key_sections: []
  seo_keywords: []
  cta_primary: ""
  cta_secondary: ""
  compliance_notes: ""
  lgpd_risk_level: ""  # LOW, MEDIUM, HIGH, CRITICAL
  social_proof_type: ""
  prohibited_claims: []
```

---

*Pedro LP Médica Squad — Medical Specialty Configuration Guide v1.0*
*"Cada especialidade tem sua voz. A compliance é universal."*
