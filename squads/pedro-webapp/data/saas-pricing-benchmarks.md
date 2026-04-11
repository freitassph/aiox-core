# SaaS Pricing Benchmarks Reference

> Market-tested pricing models, tiers, and strategies for SaaS products.
> Updated: 2026-04-05 | Maintained by: pedro-webapp squad

---

## 1. Pricing Models

### 1.1 Model Types

| Model | Description | Best For | Examples |
|---|---|---|---|
| **Flat-Rate** | Single price, all features | Simple products, early stage | Basecamp ($13/mo flat) |
| **Tiered** | 3-4 tiers with feature gating | Most SaaS products | Slack, Notion, Linear |
| **Per-Seat** | Price per user/month | Collaboration tools | Figma, Jira, Slack |
| **Usage-Based** | Pay per API call, GB, action | Infrastructure, APIs | Vercel, Stripe, AWS |
| **Hybrid** | Base + usage overage | Platforms with variable load | Resend, Supabase |
| **Freemium** | Free tier + paid upgrade | Growth-led products | Notion, Figma, Linear |

---

## 2. Tier Structure (Standard SaaS)

### 2.1 Recommended 4-Tier Model

```yaml
tiers:
  free:
    price: $0
    purpose: "Acquisition + activation"
    limits:
      users: 1
      projects: 1
      storage: "500MB"
      features: "core only"
    goal: "Get user to AHA moment"

  starter:
    price: "$19-29/mo"
    purpose: "First monetized tier"
    limits:
      users: 3
      projects: 10
      storage: "5GB"
      features: "core + some advanced"
    target: "Individual creators, small teams"

  pro:
    price: "$49-99/mo"
    purpose: "Revenue driver (60%+ of MRR)"
    limits:
      users: 15
      projects: unlimited
      storage: "50GB"
      features: "all features"
    target: "Growing teams, power users"

  enterprise:
    price: "Custom (starts $299/mo)"
    purpose: "High-ACV deals"
    limits:
      users: unlimited
      storage: unlimited
      features: "all + SSO + SLA + support"
    target: "Large orgs, compliance needs"
```

### 2.2 Per-Seat Pricing Benchmarks

| Category | Starter | Pro | Enterprise |
|---|---|---|---|
| Productivity / Notes | $5-8/user | $10-15/user | $20-30/user |
| Design Tools | $12/user | $30-45/user | $60-80/user |
| Developer Tools | $10/user | $20-30/user | $50-100/user |
| Marketing / Analytics | $20/user | $50-80/user | $150-300/user |
| CRM / Sales | $15/user | $50-80/user | $120-200/user |
| Customer Support | $10/user | $25-50/user | $75-120/user |

---

## 3. Key Metrics & Benchmarks

### 3.1 Revenue Metrics by Stage

| Metric | Early ($0-10k MRR) | Growth ($10k-100k MRR) | Scale ($100k+ MRR) |
|---|---|---|---|
| ARPU | $15-30 | $30-80 | $80-200 |
| Conversion Free→Paid | 2-5% | 5-10% | 10-15% |
| Monthly Churn | 5-8% | 3-5% | 1-3% |
| Gross Margin | 70-80% | 80-85% | 85-90% |
| LTV:CAC | 2:1 | 3:1 | 5:1+ |

### 3.2 Pricing Page Benchmarks

| Metric | Good | Great | Best-in-Class |
|---|---|---|---|
| Pricing page → trial | 5% | 10% | 15%+ |
| Trial → paid | 15% | 25% | 40%+ |
| Annual plan adoption | 30% | 50% | 70%+ |
| Pro tier revenue share | 40% | 60% | 75%+ |

---

## 4. Pricing Psychology & Tactics

### 4.1 Proven Tactics

| Tactic | Impact | Implementation |
|---|---|---|
| **Anchoring** | 20-30% lift | Show Enterprise price first or Pro as "recommended" |
| **Annual discount** | 15-20% of monthly | Offer 2 months free (pay annually) |
| **Decoy tier** | 10-15% lift | Add a tier that makes Pro look like best value |
| **Feature gating** | Drives upgrades | Put most-requested feature behind Pro tier |
| **Usage limits** | Natural upgrade | Generous free, tight Starter, comfortable Pro |
| **Social proof** | 10-20% lift | Show "# of customers on this plan" |
| **Guarantee badge** | Reduces friction | "30-day money back" or "cancel anytime" |

### 4.2 Common Pricing Mistakes

| Mistake | Impact | Fix |
|---|---|---|
| Too many tiers | Decision paralysis | Max 4 tiers (Free, Starter, Pro, Enterprise) |
| Price too low | Revenue left on table, cheap customers | Start at $19+ minimum for Starter |
| Feature parity across tiers | No reason to upgrade | Gate 3-5 features per tier jump |
| No annual option | Cash flow, retention | Always offer 15-20% annual discount |
| Hiding prices | Lost trust, extra friction | Show prices clearly, no "contact us" for Pro |

---

## 5. Brazilian Market Adjustments

### 5.1 BRL Pricing Translation

| USD Tier | BRL Equivalent | Local Adjustment |
|---|---|---|
| $19/mo | R$ 97/mo | ~5.1x multiplier, rounded to 7 |
| $49/mo | R$ 197/mo | ~4x multiplier, competitive |
| $99/mo | R$ 397/mo | ~4x multiplier |
| $299/mo | R$ 997/mo | ~3.3x multiplier (enterprise) |

### 5.2 Local Payment Methods

| Method | Market Share | Notes |
|---|---|---|
| Credit Card | 60% | Installments (parcelado) expected |
| PIX | 25% | Growing fast, instant settlement |
| Boleto | 10% | Declining, still needed for B2B |
| PayPal | 5% | International buyers |

---

## 6. Competitive Analysis Templates

### 6.1 Competitor Pricing Tracker

```yaml
competitors:
  - name: "Competitor A"
    starter: "$29/mo"
    pro: "$79/mo"
    enterprise: "$199/mo"
    model: "per-seat"
    free_tier: true
    annual_discount: "20%"
    differentiators: ["feature X", "integration Y"]

  - name: "Competitor B"
    starter: "$15/mo"
    pro: "$49/mo"
    enterprise: "contact"
    model: "usage-based"
    free_tier: true
    annual_discount: "none"
    differentiators: ["open-source", "self-hostable"]
```

---

## 7. Revenue Projections

### 7.1 Example: SaaS Launch Year 1

| Month | Users | Free | Starter | Pro | Enterprise | MRR |
|---|---|---|---|---|---|---|
| 1-3 | 500 | 400 | 70 | 25 | 5 | $4,235 |
| 4-6 | 2,000 | 1,500 | 320 | 140 | 40 | $20,800 |
| 7-9 | 5,000 | 3,500 | 900 | 450 | 150 | $61,250 |
| 10-12 | 10,000 | 6,500 | 2,000 | 1,100 | 400 | $146,000 |

Assumptions: Free→Paid 8%, Starter $29, Pro $79, Enterprise $299

---

## 8. Pricing API/Webhook Events

### 8.1 Stripe Events to Handle

| Event | Action |
|---|---|
| `checkout.session.completed` | Activate subscription, send welcome |
| `invoice.payment_succeeded` | Update billing records |
| `invoice.payment_failed` | Retry logic, notify user |
| `customer.subscription.updated` | Sync tier change |
| `customer.subscription.deleted` | Grace period, downgrade |
| `customer.subscription.trial_will_end` | Trial expiry nudges |
