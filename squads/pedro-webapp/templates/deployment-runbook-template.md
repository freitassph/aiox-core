# Deployment Runbook Template
**Squad:** pedro-webapp  
**Tier:** S+++

---

# Deployment Runbook

**Application:** [App Name]  
**Environment:** [Production/Staging]  
**Version:** [Version]  
**Date:** [Date]

---

## Pre-Deployment Checklist

### Code Ready
- [ ] All tests passing (CI green)
- [ ] Code review approved
- [ ] No console errors
- [ ] Linting passing
- [ ] Type checking passing
- [ ] Build successful

### Documentation
- [ ] CHANGELOG updated
- [ ] README updated (if needed)
- [ ] API docs current
- [ ] Migration guide ready (if breaking)

### Database
- [ ] Migrations written and tested
- [ ] Backup completed
- [ ] Rollback SQL prepared
- [ ] DBA notified (if needed)

### Configuration
- [ ] Environment variables set
- [ ] Secrets rotated (if needed)
- [ ] Feature flags configured
- [ ] Rate limits configured

### Team Ready
- [ ] Deployment owner assigned
- [ ] On-call engineer ready
- [ ] Stakeholders notified
- [ ] Support team briefed

---

## Deployment Window

| Phase | Start Time | End Time | Owner |
|-------|------------|----------|-------|
| Pre-check | | | |
| Deployment | | | |
| Verification | | | |
| Monitoring | | | |

---

## Deployment Steps

### Phase 1: Pre-Deployment Verification

```bash
# 1. Verify current state
kubectl get pods -n [namespace]
kubectl get deployments -n [namespace]

# 2. Check current version
curl -s https://[app].com/health | jq .version

# 3. Verify no ongoing incidents
[Check monitoring dashboard]
```

- [ ] Current version: _____
- [ ] Pod count: _____
- [ ] No active incidents

### Phase 2: Database Migration

```bash
# 1. Create backup
[Backup command]

# 2. Run migrations
npm run db:migrate

# 3. Verify migration
[Verification command]
```

- [ ] Backup completed: _____
- [ ] Migrations applied: _____
- [ ] Verification passed

### Phase 3: Deploy Backend

```bash
# 1. Update deployment
kubectl set image deployment/[name] [container]=[image]:[tag] -n [namespace]

# 2. Watch rollout
kubectl rollout status deployment/[name] -n [namespace]

# 3. Verify pods
kubectl get pods -n [namespace] -l app=[name]
```

- [ ] Rollout started: _____
- [ ] Rollout completed: _____
- [ ] All pods healthy

### Phase 4: Deploy Frontend

```bash
# 1. Trigger build
[CI/CD command]

# 2. Verify CDN invalidation
[CDN command]

# 3. Check deployment
[Verification URL]
```

- [ ] Build completed: _____
- [ ] CDN invalidated: _____
- [ ] Frontend deployed

### Phase 5: Smoke Tests

```bash
# Run smoke test suite
npm run test:smoke

# Check critical paths
[Curl commands for key endpoints]
```

- [ ] Smoke tests passed
- [ ] Critical paths verified

---

## Verification Checklist

### Health Checks
- [ ] `/health` returns 200
- [ ] `/ready` returns 200
- [ ] Database connected
- [ ] Cache connected
- [ ] External services connected

### Functional Checks
- [ ] Login works
- [ ] Main feature works
- [ ] API responds correctly
- [ ] Frontend loads correctly

### Performance Checks
- [ ] Response time < 200ms
- [ ] No errors in logs
- [ ] Memory usage normal
- [ ] CPU usage normal

---

## Rollback Procedure

### Trigger Rollback If:
- [ ] Error rate > 1%
- [ ] Critical functionality broken
- [ ] Performance degraded > 50%
- [ ] Data corruption detected

### Rollback Steps

```bash
# 1. Stop current deployment
kubectl rollout undo deployment/[name] -n [namespace]

# 2. Verify rollback
kubectl rollout status deployment/[name] -n [namespace]

# 3. Rollback database (if needed)
[Rollback SQL command]

# 4. Verify rollback successful
[Verification commands]
```

### Rollback Verification
- [ ] Previous version running
- [ ] All pods healthy
- [ ] Smoke tests passing
- [ ] Error rate normal

---

## Post-Deployment

### Immediate (First 30 Minutes)
- [ ] Monitor error rates
- [ ] Monitor performance
- [ ] Check user reports
- [ ] Verify metrics normal

### First 24 Hours
- [ ] Continuous monitoring
- [ ] Address any issues
- [ ] Collect metrics
- [ ] Document learnings

### First Week
- [ ] Post-deployment review
- [ ] Update runbook
- [ ] Address technical debt
- [ ] Celebrate!

---

## Monitoring Dashboard

| Metric | Before | After | Status |
|--------|--------|-------|--------|
| Error Rate | | | |
| Response Time (P95) | | | |
| Request Count | | | |
| CPU Usage | | | |
| Memory Usage | | | |

---

## Communication Log

| Time | Update | Channel | Audience |
|------|--------|---------|----------|
| | Deployment started | Slack | Team |
| | Deployment complete | Slack | Team |
| | All clear | Email | Stakeholders |

---

## Sign-Off

| Role | Name | Time | Status |
|------|------|------|--------|
| Deployment Owner | | | [ ] Approved |
| On-Call Engineer | | | [ ] Approved |
| Product Owner | | | [ ] Approved |

---

**Deployment Status:** [ ] Success [ ] Rolled Back  
**Duration:** _____ minutes  
**Issues:** [None/Minor/Major]
