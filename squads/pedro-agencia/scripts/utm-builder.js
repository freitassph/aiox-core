# UTM Builder Script
**Squad:** pedro-agencia
**Purpose:** Generate standardized UTM parameters for campaign URLs

## Usage
```bash
node scripts/utm-builder.js --source facebook --medium paid --campaign "q1-launch" --content "video-v1" --term "lookalike-1p"
```

## Output
```
https://example.com/landing-page?
  utm_source=facebook&
  utm_medium=paid&
  utm_campaign=q1-launch&
  utm_content=video-v1&
  utm_term=lookalike-1p
```

## Standards
Follows squad UTM structure defined in `data/ad-platform-reference.md`

```javascript
// TODO: Implementation
// Phase 1: UTM template validation
// Phase 2: URL generation
// Phase 3: Batch URL generation from CSV
// Phase 4: URL shortening integration
console.log('UTM Builder — coming in Sprint 2');
```
