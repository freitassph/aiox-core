# Security Audit Checklist
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

## Authentication

### Implementation
- [ ] Secure password hashing (bcrypt/argon2)
- [ ] Password complexity requirements
- [ ] Rate limiting on login
- [ ] Account lockout after failed attempts
- [ ] Secure session management
- [ ] Session timeout configured
- [ ] Session invalidation on logout

### Multi-Factor Authentication
- [ ] MFA available
- [ ] MFA enforced for admin
- [ ] Backup codes provided
- [ ] Recovery process secure

### Token Security
- [ ] JWT properly signed
- [ ] Token expiration set
- [ ] Refresh token rotation
- [ ] Tokens stored securely

---

## Authorization

### Access Control
- [ ] RBAC implemented
- [ ] Principle of least privilege
- [ ] Resource-level permissions
- [ ] Admin actions restricted
- [ ] Vertical privilege escalation prevented
- [ ] Horizontal privilege escalation prevented

### API Security
- [ ] Authentication required
- [ ] Authorization checked per endpoint
- [ ] Rate limiting implemented
- [ ] Input validation
- [ ] Output encoding

---

## Data Protection

### Encryption
- [ ] HTTPS enforced (HSTS)
- [ ] TLS 1.2+ only
- [ ] Data encrypted at rest
- [ ] Sensitive fields encrypted
- [ ] Keys properly managed

### PII Protection
- [ ] PII identified
- [ ] Minimal data collection
- [ ] Data retention policy
- [ ] Secure deletion
- [ ] Right to erasure supported

### Database Security
- [ ] Parameterized queries
- [ ] ORM used safely
- [ ] SQL injection prevented
- [ ] Database user least privilege
- [ ] Sensitive data masked in logs

---

## Input/Output Security

### Input Validation
- [ ] All inputs validated
- [ ] Whitelist validation
- [ ] Type checking
- [ ] Length limits
- [ ] File upload restrictions

### Output Encoding
- [ ] XSS prevention
- [ ] Content-Type headers set
- [ ] CSP headers configured
- [ ] HTML encoding
- [ ] URL encoding

### File Uploads
- [ ] File type validation
- [ ] File size limits
- [ ] Malware scanning
- [ ] Stored outside webroot
- [ ] Secure download

---

## Security Headers

- [ ] Strict-Transport-Security
- [ ] Content-Security-Policy
- [ ] X-Content-Type-Options
- [ ] X-Frame-Options
- [ ] X-XSS-Protection
- [ ] Referrer-Policy
- [ ] Permissions-Policy

---

## Vulnerability Prevention

### OWASP Top 10
- [ ] A01: Broken Access Control
- [ ] A02: Cryptographic Failures
- [ ] A03: Injection
- [ ] A04: Insecure Design
- [ ] A05: Security Misconfiguration
- [ ] A06: Vulnerable Components
- [ ] A07: Auth/Session Failures
- [ ] A08: Software/Data Integrity
- [ ] A09: Logging/Monitoring
- [ ] A10: SSRF

### Dependency Security
- [ ] Dependencies up to date
- [ ] Vulnerability scanning (Snyk/Dependabot)
- [ ] No known vulnerabilities
- [ ] Supply chain security

---

## Logging & Monitoring

### Security Logging
- [ ] Auth events logged
- [ ] Access control events logged
- [ ] Input validation failures logged
- [ ] Security incidents logged
- [ ] Logs protected from tampering

### Monitoring
- [ ] Intrusion detection
- [ ] Anomaly detection
- [ ] Alert thresholds set
- [ ] Incident response plan
- [ ] Regular security reviews

---

## Compliance

### Standards
- [ ] GDPR/LGPD compliance
- [ ] PCI DSS (if handling payments)
- [ ] SOC 2 requirements
- [ ] Industry-specific compliance

### Documentation
- [ ] Security policy documented
- [ ] Data flow diagrams
- [ ] Threat model updated
- [ ] Security runbooks

---

## Audit Results

| Category | Pass | Fail | N/A |
|----------|------|------|-----|
| Authentication | | | |
| Authorization | | | |
| Data Protection | | | |
| Input/Output | | | |
| Headers | | | |
| Vulnerabilities | | | |
| Logging | | | |

**Overall Security Score:** [ ] Secure [ ] Needs Work [ ] Critical Issues

**Critical Vulnerabilities:**
1. 
2. 
3. 

**Remediation Timeline:**
- Critical: 24-48 hours
- High: 1 week
- Medium: 30 days
- Low: 90 days

---

**Auditor:** _______________  
**Date:** _______________  
**Next Audit:** _______________
