# Campaign Report Generator
**Squad:** pedro-agencia
**Purpose:** Generate standardized campaign performance reports from multi-platform data

## Usage
```bash
node scripts/campaign-report-generator.js --campaign "Q1 Launch" --platforms meta,google --output reports/
```

## Input Format
Accepts JSON data files or CSV exports from:
- Meta Ads Manager
- Google Ads
- Google Analytics 4
- LinkedIn Campaign Manager
- TikTok Ads Manager

## Output
- Markdown report with performance summary
- CSV with raw data
- Recommendations section

## Dependencies
- Node.js 20+
- csv-parser (npm)
- markdown-table (npm)

```javascript
// TODO: Implementation
// Phase 1: Define data schema
// Phase 2: Build platform adapters
// Phase 3: Create report template engine
// Phase 4: Add recommendation engine
console.log('Campaign Report Generator — coming in Sprint 2');
```
