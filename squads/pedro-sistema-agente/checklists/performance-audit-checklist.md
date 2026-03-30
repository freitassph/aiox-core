# Performance Audit Checklist
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

## Core Web Vitals

### LCP (Largest Contentful Paint)
- [ ] LCP < 2.5s
- [ ] LCP element optimized
- [ ] Server response time < 600ms
- [ ] Resource load delay minimized
- [ ] Element render delay minimized

### FID/INP (Interaction to Next Paint)
- [ ] FID < 100ms (or INP < 200ms)
- [ ] Main thread work minimized
- [ ] Long tasks < 50ms
- [ ] JavaScript execution optimized

### CLS (Cumulative Layout Shift)
- [ ] CLS < 0.1
- [ ] Images have dimensions
- [ ] Embeds have dimensions
- [ ] Web fonts have fallback
- [ ] Dynamic content handled

---

## Loading Performance

### First Contentful Paint
- [ ] FCP < 1.8s
- [ ] Critical CSS inlined
- [ ] Render-blocking resources minimized
- [ ] Font loading optimized

### Time to Interactive
- [ ] TTI < 3.8s
- [ ] JavaScript boot time minimized
- [ ] Third-party code optimized

### Speed Index
- [ ] Speed Index < 3.4s
- [ ] Above-fold content prioritized
- [ ] Lazy loading implemented

---

## Resource Optimization

### Images
- [ ] Modern formats (WebP/AVIF)
- [ ] Responsive images (srcset)
- [ ] Proper sizing
- [ ] Compression applied
- [ ] Lazy loading for below-fold

### JavaScript
- [ ] Code splitting implemented
- [ ] Tree shaking enabled
- [ ] Minification applied
- [ ] Compression (gzip/brotli)
- [ ] Async/defer used appropriately

### CSS
- [ ] Unused CSS removed
- [ ] Critical CSS inlined
- [ ] Minification applied
- [ ] Compression enabled

### Fonts
- [ ] Font display: swap
- [ ] Subset fonts
- [ ] Preload critical fonts
- [ ] System font fallback

---

## Caching

### Browser Caching
- [ ] Cache-Control headers set
- [ ] Service worker configured
- [ ] Asset versioning
- [ ] Stale-while-revalidate

### CDN
- [ ] CDN enabled
- [ ] Edge caching configured
- [ ] Cache invalidation strategy

---

## Network

### Requests
- [ ] Total requests < 100
- [ ] Total size < 2MB
- [ ] HTTP/2 or HTTP/3
- [ ] Connection reuse

### API Performance
- [ ] API response < 200ms (P95)
- [ ] GraphQL query optimization (if applicable)
- [ ] Batching implemented
- [ ] Pagination used

---

## Runtime Performance

### Frame Rate
- [ ] 60fps during animations
- [ ] No jank during scroll
- [ ] Smooth transitions

### Memory
- [ ] No memory leaks
- [ ] Heap size reasonable
- [ ] GC pauses minimal

### Main Thread
- [ ] Main thread work < 3s
- [ ] Long tasks < 50ms
- [ ] Web Workers for heavy tasks

---

## Monitoring

### Real User Monitoring
- [ ] RUM tool configured
- [ ] Core Web Vitals tracked
- [ ] Custom metrics defined
- [ ] Alerts configured

### Lab Testing
- [ ] Lighthouse CI configured
- [ ] WebPageTest scheduled
- [ ] Performance budgets set

---

## Audit Results

| Metric | Measured | Target | Status |
|--------|----------|--------|--------|
| LCP | | < 2.5s | |
| FID/INP | | < 100ms/200ms | |
| CLS | | < 0.1 | |
| FCP | | < 1.8s | |
| TTI | | < 3.8s | |

**Overall Score:** /100

**Critical Issues:**
1. 
2. 
3. 

**Recommendations:**
1. 
2. 
3. 

---

**Auditor:** _______________  
**Date:** _______________  
**Next Audit:** _______________
