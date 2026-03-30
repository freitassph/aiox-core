# Deployment Checklist
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

## Pre-Deployment

### Code Ready
- [ ] All tests passing
- [ ] Code review approved
- [ ] No console errors
- [ ] Linting passing
- [ ] Type checking passing

### Documentation
- [ ] CHANGELOG updated
- [ ] README updated (if needed)
- [ ] API docs current
- [ ] Migration guide (if breaking)

### Database
- [ ] Migrations written
- [ ] Migrations tested locally
- [ ] Backup strategy confirmed
- [ ] Rollback plan ready

### Configuration
- [ ] Environment variables documented
- [ ] Secrets rotated (if needed)
- [ ] Feature flags configured
- [ ] Rate limits set

---

## Deployment Day

### Final Checks
- [ ] Staging deployment verified
- [ ] Smoke tests passing
- [ ] Monitoring dashboards ready
- [ ] Team notified
- [ ] Rollback procedure reviewed

### Deployment Steps
1. [ ] Create deployment branch
2. [ ] Run database migrations
3. [ ] Deploy backend
4. [ ] Verify backend health
5. [ ] Deploy frontend
6. [ ] Verify frontend
7. [ ] Run smoke tests
8. [ ] Monitor error rates

### Post-Deployment
- [ ] All health checks green
- [ ] Error rates normal
- [ ] Performance metrics normal
- [ ] User reports normal
- [ ] Logs look healthy

---

## Rollback Criteria

Trigger rollback if:
- [ ] Error rate > 1%
- [ ] Critical functionality broken
- [ ] Performance degraded > 50%
- [ ] Data corruption detected
- [ ] Security issue discovered

---

## Rollback Procedure

1. [ ] Notify team of rollback decision
2. [ ] Stop current deployment
3. [ ] Restore previous version
4. [ ] Rollback database (if needed)
5. [ ] Verify rollback successful
6. [ ] Document incident
7. [ ] Schedule post-mortem

---

## Monitoring (First 24 Hours)

| Metric | Baseline | Current | Status |
|--------|----------|---------|--------|
| Error Rate | | | |
| Response Time | | | |
| CPU Usage | | | |
| Memory Usage | | | |
| Request Count | | | |

---

## Communication

- [ ] Internal team notified
- [ ] Stakeholders updated
- [ ] Status page updated (if needed)
- [ ] Support team briefed
- [ ] Customer communication (if needed)

---

## Post-Deployment

### Within 24 Hours
- [ ] Monitor continuously
- [ ] Address any issues
- [ ] Collect metrics
- [ ] Document learnings

### Within 1 Week
- [ ] Post-deployment review
- [ ] Update runbooks
- [ ] Address technical debt
- [ ] Celebrate success!

---

**Deployer:** _______________  
**Date:** _______________  
**Version:** _______________  
**Status:** [ ] Success [ ] Rolled Back
