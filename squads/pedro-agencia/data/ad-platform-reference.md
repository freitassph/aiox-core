# Ad Platform Quick Reference Guide
**Squad:** pedro-agencia
**Version:** 1.0

---

## Meta Ads (Facebook & Instagram)

### Campaign Objectives
| Objective | Best For | Optimization |
|-----------|----------|-------------|
| Awareness | Reach, brand recall | Impressions, reach |
| Traffic | Link clicks, landing views | Link clicks, landing page views |
| Engagement | Post engagement, video views | Engagement, video views |
| Leads | Lead forms, conversions | Leads, form completions |
| App Promotion | App installs, in-app actions | App installs, app events |
| Sales | Conversions, catalog sales | Purchases, value |

### Ad Formats
- **Single Image:** 1080x1080 (feed), 1080x1920 (stories/reels)
- **Video:** 15s-60s, square or vertical
- **Carousel:** 2-10 cards, 1080x1080 each
- **Collection:** Cover + 4 product tiles
- **Advantage+ Shopping:** Automated creative + audience

### Bidding Strategies
- **Lowest Cost:** Maximize results within budget
- **Cost Cap:** Control CPA with bid cap
- **Bid Cap:** Manual bid control
- **ROAS Target:** Target return on ad spend

### Best Practices
1. Creative refresh every 10-14 days
2. 3-5 ad sets per campaign, 3-4 ads per ad set
3. Use Advantage+ placements unless specific reason
4. Test broad audiences with creative as targeting
5. 20% of budget on testing, 80% on scaling

---

## Google Ads

### Campaign Types
| Type | Placement | Format |
|------|-----------|--------|
| Search | Google SERP | Text ads |
| Display | GDN websites | Image, responsive |
| Video | YouTube | Skippable, non-skippable |
| Shopping | Google Shopping | Product listings |
| Performance Max | All Google inventory | Automated |
| App | Google Play, YouTube | App install/promo |

### Ad Rank Formula
```
Ad Rank = Max CPC × Quality Score
Quality Score = Expected CTR × Ad Relevance × Landing Page Experience
```

### Bidding Strategies
- **Maximize Clicks:** Traffic volume
- **Maximize Conversions:** Conversion volume
- **Target CPA:** Cost per acquisition
- **Target ROAS:** Return on ad spend
- **Maximize Conversion Value:** Revenue optimization
- **Target Impression Share:** Brand visibility

### Best Practices
1. Use responsive search ads (RSAs) with 15 headlines, 4 descriptions
2. Structure campaigns by theme, not match type
3. Use broad match + Smart Bidding for scale
4. Negative keywords updated weekly
5. Quality Score monitored and improved continuously

---

## LinkedIn Ads

### Ad Formats
- **Sponsored Content:** Single image, video, carousel, event
- **Message Ads:** Direct inbox messages
- **Dynamic Ads:** Personalized by profile data
- **Text Ads:** Sidebar, CPC or CPM
- **Conversation Ads:** Multi-path messaging

### Targeting Options
- Job title, function, seniority
- Company size, industry, name
- Skills, groups, interests
- Degree, field of study
- Years of experience

### Best Practices
1. Audience size: 50,000-400,000 for optimal delivery
2. Use Matched Audiences (website retargeting, account list)
3. Creative: professional tone, data-driven messaging
4. Lead Gen Forms outperform landing pages 2-3x
5. CPC benchmark: $5-12, CPL: $50-150

---

## TikTok Ads

### Ad Formats
- **In-Feed Ads:** 5-60s video, full-screen
- **TopView:** First ad in For You feed
- **Brand Takeover:** Splash screen on app open
- **Branded Effects:** AR filters, stickers
- **Branded Hashtag Challenge:** User-generated content
- **Spark Ads:** Boost organic content

### Best Practices
1. First 3 seconds are critical — hook immediately
2. Native feel — polished ads underperform
3. Trending sounds and formats boost engagement
4. 9:16 vertical format only
5. CTA: "Learn More" or "Shop Now" perform best
6. Average CPV: $0.01-0.03, CPM: $3-8

---

## Google Analytics 4 — Key Events

### Recommended Events to Track
| Event | Category | Parameters |
|-------|----------|------------|
| page_view | Engagement | page_location, page_title |
| scroll | Engagement | percent_scrolled |
| click | Engagement | link_url, link_text |
| form_submit | Conversion | form_id, form_destination |
| purchase | Conversion | value, currency, transaction_id |
| add_to_cart | Conversion | value, currency, items |
| begin_checkout | Conversion | value, currency, items |
| sign_up | Conversion | method |
| generate_lead | Conversion | value, currency |
| video_start | Engagement | video_title |
| video_complete | Engagement | video_title |

### UTM Structure
```
utm_source: facebook, google, linkedin, tiktok
utm_medium: paid, organic, social, email, referral
utm_campaign: {product}_{objective}_{month}
utm_content: {creative_variant}_{audience}
utm_term: {keyword_or_interest}
```

---

## Platform Comparison Matrix

| Factor | Meta | Google | LinkedIn | TikTok |
|--------|------|--------|----------|--------|
| Avg. CPC | $0.50-2.00 | $1.00-3.00 | $5.00-12.00 | $0.50-1.50 |
| Avg. CPM | $5-15 | $3-10 | $20-40 | $3-8 |
| Avg. CTR | 1.0-2.0% | 2.0-4.0% | 0.4-0.7% | 0.5-1.5% |
| Best For | Awareness, social | Intent, search | B2B, professionals | Gen Z, viral |
| Min. Budget | $5/day | $5/day | $10/day | $20/day |
| Learning Phase | 50 conv/week | 15 conv/30 days | 30 conv/30 days | N/A |
| Creative Life | 10-14 days | 30-60 days | 14-21 days | 5-7 days |

---

**Version:** 1.0
**Last Updated:** 2026-04-05
**Owner:** pa-profit
