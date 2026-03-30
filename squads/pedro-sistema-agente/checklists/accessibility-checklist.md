# Accessibility Audit Checklist
**Squad:** pedro-sistema-agente  
**Tier:** S+++

---

## WCAG 2.1 AA Compliance

### Perceivable

#### Text Alternatives
- [ ] All images have alt text
- [ ] Decorative images have empty alt
- [ ] Icons have accessible labels
- [ ] Form inputs have labels
- [ ] Buttons have accessible names
- [ ] SVGs have titles/descriptions

#### Time-Based Media
- [ ] Videos have captions
- [ ] Videos have audio descriptions (if needed)
- [ ] Audio has transcripts
- [ ] Live streams have captions

#### Adaptable Content
- [ ] Proper heading hierarchy (H1-H6)
- [ ] Lists use proper markup
- [ ] Tables have headers
- [ ] Content reflows at 320px
- [ ] Text can be resized to 200%

#### Distinguishable
- [ ] Color contrast ≥ 4.5:1 (text)
- [ ] Color contrast ≥ 3:1 (UI components)
- [ ] Color not sole means of information
- [ ] Text spacing can be adjusted
- [ ] Images of text avoided

---

### Operable

#### Keyboard Accessible
- [ ] All functions keyboard accessible
- [ ] No keyboard traps
- [ ] Focus order is logical
- [ ] Focus visible indicator
- [ ] Skip links provided
- [ ] Custom components keyboard accessible

#### Enough Time
- [ ] No time limits (or can be turned off)
- [ ] Pausing/stopping moving content
- [ ] Session timeout warnings
- [ ] Data saved on re-authentication

#### Seizures
- [ ] No content flashes >3 times/second
- [ ] Animation can be paused
- [ ] Reduced motion option

#### Navigable
- [ ] Page titles descriptive
- [ ] Focus order logical
- [ ] Links have descriptive text
- [ ] Multiple ways to find pages
- [ ] Breadcrumbs or navigation aid
- [ ] Headings and labels descriptive

#### Input Modalities
- [ ] Touch targets ≥ 44x44px
- [ ] No accidental activation
- [ ] Motion actuation can be disabled
- [ ] Pointer gestures not required

---

### Understandable

#### Readable
- [ ] Page language declared
- [ ] Language changes marked
- [ ] Unusual words explained
- [ ] Abbreviations expanded

#### Predictable
- [ ] Consistent navigation
- [ ] Consistent identification
- [ ] No unexpected context changes
- [ ] Forms have clear instructions
- [ ] Error messages helpful

#### Input Assistance
- [ ] Errors identified
- [ ] Error messages in text
- [ ] Suggestions for errors
- [ ] Confirmation for important actions
- [ ] Form data can be reviewed

---

### Robust

#### Compatible
- [ ] Valid HTML
- [ ] ARIA used correctly
- [ ] Name, role, value for custom controls
- [ ] Status messages announced
- [ ] Works with assistive technologies

---

## Testing Tools

### Automated
- [ ] axe DevTools
- [ ] WAVE
- [ ] Lighthouse Accessibility
- [ ] pa11y

### Manual
- [ ] Keyboard-only navigation
- [ ] Screen reader test (NVDA/VoiceOver)
- [ ] Zoom to 200%
- [ ] Color contrast analyzer
- [ ] No CSS test

### User Testing
- [ ] Tested with assistive tech users
- [ ] Feedback incorporated

---

## Audit Results

| Category | Pass | Fail | N/A |
|----------|------|------|-----|
| Perceivable | | | |
| Operable | | | |
| Understandable | | | |
| Robust | | | |

**Overall Compliance:** [ ] AA Compliant [ ] Not Compliant

**Critical Issues:**
1. 
2. 
3. 

---

**Auditor:** _______________  
**Date:** _______________  
**Next Audit:** _______________
