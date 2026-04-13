# Performance & Core Web Vitals Checklist

> Auditoria de performance para landing pages do squad pedro-lp-geral.

## Lighthouse Performance

- [ ] Performance score >= 95 (mobile)
- [ ] Performance score >= 98 (desktop)
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] INP (Interaction to Next Paint) < 200ms
- [ ] FCP (First Contentful Paint) < 1.8s
- [ ] TTFB (Time to First Byte) < 800ms

## Image Optimization

- [ ] All images use WebP or AVIF format
- [ ] Hero image optimized (< 200KB)
- [ ] Lazy loading on below-fold images
- [ ] Proper srcset with responsive sizes
- [ ] No layout shift from images (explicit width/height)

## JavaScript & CSS

- [ ] No render-blocking resources
- [ ] CSS critical path inlined
- [ ] Non-critical CSS deferred
- [ ] JS minified and tree-shaken
- [ ] Third-party scripts loaded async/defer

## Caching & CDN

- [ ] Static assets cached with immutable headers
- [ ] CDN configured (Vercel Edge or equivalent)
- [ ] Font-display: swap for custom fonts
- [ ] Preconnect to third-party origins

## Monitoring

- [ ] RUM (Real User Monitoring) configured
- [ ] Performance budget defined
- [ ] Alert thresholds set for LCP/CLS/INP

## Pass Criteria

- All items above checked = PASS
- Any item unchecked = FAIL (must fix before deploy)
