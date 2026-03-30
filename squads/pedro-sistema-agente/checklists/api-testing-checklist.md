# API Testing Checklist
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

## Test Coverage

### Endpoint Coverage
- [ ] All endpoints tested
- [ ] All HTTP methods tested
- [ ] All parameters tested
- [ ] All response codes tested
- [ ] Edge cases covered

### Test Types
- [ ] Unit tests for handlers
- [ ] Integration tests for APIs
- [ ] Contract tests
- [ ] Load tests
- [ ] Security tests

---

## Functional Testing

### Success Scenarios
- [ ] 200 OK responses
- [ ] 201 Created responses
- [ ] 204 No Content responses
- [ ] Correct response body
- [ ] Correct headers

### Error Scenarios
- [ ] 400 Bad Request
- [ ] 401 Unauthorized
- [ ] 403 Forbidden
- [ ] 404 Not Found
- [ ] 409 Conflict
- [ ] 422 Unprocessable Entity
- [ ] 429 Rate Limited
- [ ] 500 Server Error

### Validation Testing
- [ ] Required fields validated
- [ ] Type validation
- [ ] Format validation
- [ ] Range validation
- [ ] Length validation
- [ ] Pattern validation

---

## Authentication Testing

### Token-Based Auth
- [ ] Valid token accepted
- [ ] Invalid token rejected
- [ ] Expired token rejected
- [ ] Missing token rejected
- [ ] Malformed token rejected

### Permission Testing
- [ ] User can access own resources
- [ ] User cannot access others' resources
- [ ] Admin can access all resources
- [ ] Unauthenticated requests rejected

---

## Data Testing

### CRUD Operations
- [ ] Create returns correct response
- [ ] Read returns correct data
- [ ] Update modifies correctly
- [ ] Delete removes correctly
- [ ] Soft delete works (if applicable)

### Data Integrity
- [ ] Data persisted correctly
- [ ] Relationships maintained
- [ ] Cascading works
- [ ] Constraints enforced
- [ ] Transactions atomic

### Query Parameters
- [ ] Filtering works
- [ ] Sorting works
- [ ] Pagination works
- [ ] Search works
- [ ] Field selection works

---

## Performance Testing

### Response Time
- [ ] P50 < 100ms
- [ ] P95 < 200ms
- [ ] P99 < 500ms
- [ ] Timeout configured

### Load Testing
- [ ] Expected load handled
- [ ] Peak load handled
- [ ] Rate limiting works
- [ ] Graceful degradation

### Concurrency
- [ ] Concurrent requests handled
- [ ] No race conditions
- [ ] No deadlocks
- [ ] Consistent results

---

## Contract Testing

### Request Contract
- [ ] Schema validated
- [ ] Content-Type enforced
- [ ] Required fields enforced
- [ ] Deprecation warnings

### Response Contract
- [ ] Schema validated
- [ ] Content-Type correct
- [ ] Versioning works
- [ ] Backward compatible

---

## Security Testing

### Input Security
- [ ] SQL injection prevented
- [ ] XSS prevented
- [ ] Command injection prevented
- [ ] Path traversal prevented

### API Security
- [ ] CORS configured correctly
- [ ] Rate limiting enforced
- [ ] Sensitive data not exposed
- [ ] Error messages safe

---

## Integration Testing

### External Services
- [ ] Third-party APIs mocked
- [ ] Service failures handled
- [ ] Timeouts handled
- [ ] Retry logic works

### Database
- [ ] Connection pooling works
- [ ] Migrations applied
- [ ] Rollback works
- [ ] Seeds work

---

## Documentation Testing

### API Docs
- [ ] Docs match implementation
- [ ] Examples work
- [ ] Schemas accurate
- [ ] Changelog updated

### Error Messages
- [ ] Clear and helpful
- [ ] Consistent format
- [ ] No internal details
- [ ] Actionable

---

## Test Results

| Category | Pass | Fail | Skipped |
|----------|------|------|---------|
| Functional | | | |
| Authentication | | | |
| Data | | | |
| Performance | | | |
| Contract | | | |
| Security | | | |
| Integration | | | |

**Total Tests:** _____  
**Passing:** _____  
**Failing:** _____  
**Coverage:** _____%

**Blocking Issues:**
1. 
2. 
3. 

---

**Tester:** _______________  
**Date:** _______________  
**Status:** [ ] Approved [ ] Blocked
