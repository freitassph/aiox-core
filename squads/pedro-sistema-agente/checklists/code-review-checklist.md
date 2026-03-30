# Code Review Checklist
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

## Before Review

- [ ] PR description is clear
- [ ] Related issue linked
- [ ] Tests included
- [ ] Documentation updated
- [ ] No WIP in title

---

## Code Quality

### Readability
- [ ] Variable names are descriptive
- [ ] Functions are small and focused
- [ ] Comments explain "why" not "what"
- [ ] No commented-out code
- [ ] Consistent formatting

### Structure
- [ ] Follows project conventions
- [ ] Proper separation of concerns
- [ ] No circular dependencies
- [ ] Imports organized
- [ ] Files appropriately sized

### TypeScript
- [ ] No `any` types
- [ ] Interfaces properly defined
- [ ] Generics used appropriately
- [ ] Union types where helpful
- [ ] Type guards for narrowing

---

## Functionality

### Logic
- [ ] Requirements met
- [ ] Edge cases handled
- [ ] Error handling appropriate
- [ ] No race conditions
- [ ] Async/await used correctly

### Data
- [ ] Input validated
- [ ] Output sanitized
- [ ] Null/undefined handled
- [ ] Database transactions used
- [ ] Caching appropriate

---

## Security

- [ ] No hardcoded secrets
- [ ] SQL injection prevented
- [ ] XSS prevention in place
- [ ] Authentication checks present
- [ ] Authorization verified
- [ ] Sensitive data protected

---

## Performance

- [ ] No unnecessary re-renders
- [ ] Queries optimized
- [ ] Large datasets handled
- [ ] Memory leaks avoided
- [ ] Bundle size considered

---

## Testing

- [ ] Unit tests for new logic
- [ ] Integration tests for APIs
- [ ] Edge cases tested
- [ ] Error scenarios tested
- [ ] Tests are meaningful

---

## Documentation

- [ ] README updated if needed
- [ ] API docs updated
- [ ] JSDoc for complex functions
- [ ] Changelog entry
- [ ] Migration notes (if breaking)

---

## UI/UX (if applicable)

- [ ] Design matches mockups
- [ ] Responsive on all breakpoints
- [ ] Loading states present
- [ ] Error states handled
- [ ] Accessibility considered
- [ ] Animations smooth

---

## Review Decision

- [ ] **Approve** - Ready to merge
- [ ] **Comment** - Minor changes needed
- [ ] **Request Changes** - Significant issues

---

## Common Issues to Flag

### Critical (Must Fix)
- Security vulnerabilities
- Data loss potential
- Breaking changes without migration
- Missing tests for critical paths
- Performance regressions

### Important (Should Fix)
- Code duplication
- Missing error handling
- Unclear variable names
- Inconsistent patterns

### Nice to Have
- Minor formatting issues
- Optimization opportunities
- Documentation improvements

---

**Reviewer:** _______________  
**Date:** _______________  
**PR:** _______________
