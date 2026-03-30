# Web App Quality Checklist
**Squad:** pedro-webapp  
**Tier:** S+++

---

## Performance

### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms  
- [ ] CLS < 0.1
- [ ] TTI < 3.8s

### Loading
- [ ] Critical CSS inlined
- [ ] Images optimized (WebP/AVIF)
- [ ] Lazy loading implemented
- [ ] Code splitting working
- [ ] Bundle size < 500KB

### Caching
- [ ] Static assets cached
- [ ] API responses cached appropriately
- [ ] Service worker configured
- [ ] CDN enabled

---

## Security

### Authentication
- [ ] Secure session management
- [ ] Password requirements enforced
- [ ] MFA available
- [ ] Session timeout configured

### Data Protection
- [ ] HTTPS enforced
- [ ] Input validated
- [ ] Output encoded
- [ ] CSRF protection enabled
- [ ] XSS prevention headers

### Authorization
- [ ] RBAC implemented
- [ ] Resource-level permissions
- [ ] Admin actions logged

---

## Functionality

### Core Features
- [ ] All features working as specified
- [ ] Edge cases handled
- [ ] Error states defined
- [ ] Loading states present

### Forms
- [ ] Validation client-side
- [ ] Validation server-side
- [ ] Error messages clear
- [ ] Success feedback provided
- [ ] Auto-save (if applicable)

### Navigation
- [ ] Breadcrumbs present
- [ ] Back button works
- [ ] Deep linking works
- [ ] 404 page helpful

---

## Responsive Design

### Breakpoints
- [ ] Mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1440px+)

### Touch Targets
- [ ] Buttons > 44x44px
- [ ] Adequate spacing
- [ ] Hover states for desktop

---

## Accessibility

### WCAG 2.1 AA
- [ ] Color contrast adequate
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader compatible
- [ ] Alt text for images
- [ ] Form labels present
- [ ] ARIA attributes correct

---

## Browser Compatibility

### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile
- [ ] iOS Safari
- [ ] Chrome Android
- [ ] Samsung Internet

---

## Testing

### Coverage
- [ ] Unit tests > 80%
- [ ] Integration tests critical paths
- [ ] E2E tests user journeys
- [ ] Visual regression tests

### Manual Testing
- [ ] Happy path tested
- [ ] Edge cases tested
- [ ] Error scenarios tested
- [ ] Performance tested

---

## Documentation

- [ ] README complete
- [ ] API docs current
- [ ] User guide available
- [ ] Changelog updated

---

## Monitoring

- [ ] Error tracking configured
- [ ] Analytics implemented
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] Alerts configured

---

## Go/No-Go Decision

| Category | Status |
|----------|--------|
| Performance | [ ] Go [ ] No-Go |
| Security | [ ] Go [ ] No-Go |
| Functionality | [ ] Go [ ] No-Go |
| Accessibility | [ ] Go [ ] No-Go |
| Testing | [ ] Go [ ] No-Go |

**Overall:** [ ] Approved for Launch [ ] Not Approved

**Blockers:**
1. 
2. 

---

**Reviewer:** _______________  
**Date:** _______________  
**Version:** _______________
