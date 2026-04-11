# Dashboard Patterns Library

> Reusable dashboard patterns, component templates, and data visualization strategies.
> Updated: 2026-04-05 | Maintained by: pedro-webapp squad

---

## 1. Dashboard Layout Patterns

### 1.1 Standard SaaS Dashboard

```
┌─────────────────────────────────────────────────┐
│  Logo    Search     Notifications    UserAvatar  │  ← Top bar
├──────────┬──────────────────────────────────────┤
│          │  KPI Cards (4-across)                │
│ Sidebar  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐        │
│          │  │MRR │ │ARR │ │Churn│ │ NPS│        │  ← KPI Row
│ Nav      │  │$42k│ │$504│ │2.1% │ │ 72 │        │
│ Items    │  └────┘ └────┘ └────┘ └────┘        │
│          │                                      │
│ • Dash   │  ┌──────────────────┐ ┌──────────┐   │
│ • Analytics││  Main Chart      │ │ Side Panel │   │  ← Main + Side
│ • Users  ││  (Line/Area)       │ │ (Top list) │   │
│ • Settings││                  │ │            │   │
│          │  └──────────────────┘ └──────────┘   │
│          │                                      │
│          │  ┌──────────────┐ ┌──────────────┐   │
│          │  │ Recent Activity│ │ Quick Actions│   │  ← Bottom Row
│          │  │ Table         │ │ Buttons      │   │
│          │  └──────────────┘ └──────────────┘   │
└──────────┴──────────────────────────────────────┘
```

### 1.2 Layout Variants

| Pattern | Columns | Best For | Examples |
|---|---|---|---|
| **Classic Sidebar** | Sidebar + main | SaaS admin panels | Stripe, Linear, Vercel |
| **Top Nav** | Full width top nav | Content-heavy, marketing | Notion, Medium |
| **Tabbed** | Horizontal tabs | Complex multi-section | Google Analytics |
| **Card Grid** | No sidebar, cards | Executive dashboards | CEO dashboards |
| **Split View** | Two equal panels | Comparison, drill-down | Analytics with detail |

---

## 2. KPI Card Patterns

### 2.1 Standard KPI Card Structure

```typescript
interface KPICard {
  id: string;
  title: string;           // "Monthly Recurring Revenue"
  value: string;           // "$42,384"
  delta: {                 // Change indicator
    value: number;         // 12.5
    direction: 'up' | 'down' | 'flat';
    period: string;        // "vs last month"
    positive: boolean;     // true = green, false = red
  };
  sparkline?: number[];    // [23, 28, 35, 31, 42]
  icon?: string;           // "trending_up"
  subtitle?: string;       // "Target: $45,000"
  onClick?: () => void;    // Drill-down action
}
```

### 2.2 KPI Card Variants

| Variant | Use Case | Visual |
|---|---|---|
| **Simple** | Single metric | Value + title + delta |
| **Sparkline** | Trend context | Value + mini line chart |
| **Progress** | Goal tracking | Value + progress bar |
| **Comparison** | Benchmark | Value + industry avg |
| **Breakdown** | Multi-part | Value + sub-metrics |
| **Alert** | Threshold breach | Value + warning badge |

### 2.3 KPI Selection Guidelines

```yaml
executive_dashboard:
  max_cards: 6
  metrics: ["revenue", "growth_rate", "churn", "cac", "ltv", "nps"]
  refresh: "daily"

operational_dashboard:
  max_cards: 8
  metrics: ["active_users", "api_calls", "error_rate", "response_time", "uptime", "queue_depth", "conversion_rate", "support_tickets"]
  refresh: "real-time"

product_dashboard:
  max_cards: 6
  metrics: ["mau", "feature_adoption", "session_duration", "retention", "nps", "funnel_completion"]
  refresh: "daily"
```

---

## 3. Chart Patterns

### 3.1 Chart Type Selection

| Data Pattern | Recommended Chart | Why |
|---|---|---|
| Trend over time | Line / Area chart | Shows trajectory clearly |
| Comparison | Bar chart | Easy to compare values |
| Part-to-whole | Donut / Stacked bar | Proportion visualization |
| Distribution | Histogram / Box plot | Spread and outliers |
| Correlation | Scatter plot | Relationship between variables |
| Funnel | Funnel chart | Conversion stages |
| Geographic | Choropleth map | Regional patterns |
| Hierarchy | Treemap | Nested proportions |
| Ranking | Horizontal bar | Leaderboards, rankings |

### 3.2 Recharts Implementation Patterns

```tsx
// Area Chart - Revenue Over Time
<AreaChart data={revenueData}>
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
  <XAxis dataKey="month" stroke="#666" />
  <YAxis stroke="#666" tickFormatter={(v) => `$${v/1000}k`} />
  <Tooltip content={<CustomTooltip />} />
  <Area
    type="monotone"
    dataKey="revenue"
    stroke="#8884d8"
    fill="url(#gradient)"
    strokeWidth={2}
  />
</AreaChart>
```

### 3.3 Chart Library Options

| Library | Type | Best For | Bundle Size |
|---|---|---|---|
| **Recharts** | React SVG | General purpose, simple charts | ~150KB |
| **Chart.js** | Canvas | Performance, many chart types | ~200KB |
| **D3** | SVG/Canvas | Custom, complex visualizations | ~250KB |
| **Apache ECharts** | Canvas | Enterprise dashboards, large datasets | ~500KB |
| **Tremor** | React + Tailwind | Beautiful, minimal charts | ~300KB |
| **Visx** (Airbnb) | React + D3 primitives | Custom-built charts | Modular |

---

## 4. Table Patterns

### 4.1 Data Table Structure

```typescript
interface DataTable {
  columns: Column[];
  data: Record<string, unknown>[];
  features: {
    sorting: boolean;
    filtering: boolean;
    pagination: boolean;
    rowSelection: boolean;
    columnVisibility: boolean;
    columnResizing: boolean;
    globalSearch: boolean;
  };
  meta?: {
    totalRows: number;
    totalPages: number;
    lastUpdated: string;
  };
}
```

### 4.2 Table Library Options

| Library | Features | Bundle | Notes |
|---|---|---|---|
| **TanStack Table** | Headless, full features | ~15KB | Default choice, composable |
| **AG Grid** | Enterprise, massive features | ~500KB | Complex apps, Excel-like |
| **MUI DataGrid** | React, good DX | ~200KB | Needs MUI dependency |

### 4.3 Common Table Patterns

| Pattern | Use Case |
|---|---|
| **Simple list** | < 50 rows, no pagination |
| **Paginated** | > 50 rows, server-side data |
| **Infinite scroll** | Large datasets, progressive loading |
| **Grouped** | Hierarchical data, expand/collapse |
| **Editable** | Inline editing, spreadsheet-like |
| **Virtualized** | 1000+ rows, performance |

---

## 5. Dashboard Feature Patterns

### 5.1 Filters & Controls

```yaml
filter_patterns:
  date_range:
    type: date picker
    presets: ["Today", "7d", "30d", "90d", "YTD", "Custom"]
    default: "30d"

  status:
    type: multi-select dropdown
    options: ["All", "Active", "Pending", "Completed", "Cancelled"]
    default: "All"

  category:
    type: segmented control
    options: ["All", "Category A", "Category B", "Category C"]
    default: "All"

  search:
    type: text input with debounce
    placeholder: "Search..."
    debounce_ms: 300

  owner:
    type: avatar dropdown (multi-select)
    source: users API
    default: "All"
```

### 5.2 Empty States

| Scenario | Pattern | Elements |
|---|---|---|
| No data yet | Illustration + CTA | Image, headline, "Get Started" button |
| No results (filter) | Illustration + clear filters | "No results match filters", "Clear all" |
| Error state | Error message + retry | Error icon, description, "Try again" |
| Loading | Skeleton screens | Animated placeholder blocks |
| Permission denied | Lock + explanation | "You don't have access", "Contact admin" |

---

## 6. Real-Time Update Patterns

### 6.1 Update Strategies

| Pattern | Technology | Latency | Use Case |
|---|---|---|---|
| **Polling** | setInterval / useQuery refetchInterval | 5-30s | Simple dashboards |
| **WebSocket** | Socket.io / native WS | < 1s | Live metrics, chat |
| **SSE** | EventSource / fetch with streaming | < 2s | One-way real-time data |
| **GraphQL Subscriptions** | WebSocket under the hood | < 1s | Full-stack apps with GraphQL |
| **Server-sent cache invalidation** | SWR/mutate + push | < 5s | Optimistic updates |

### 6.2 Implementation Pattern (React Query + WebSocket)

```tsx
// Dashboard with real-time updates
function Dashboard() {
  const { data, refetch } = useQuery({
    queryKey: ['dashboard-metrics'],
    queryFn: fetchMetrics,
    refetchInterval: 30000, // fallback polling
  });

  // WebSocket for real-time updates
  useEffect(() => {
    const ws = new WebSocket('/ws/dashboard');
    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);
      queryClient.setQueryData(['dashboard-metrics'], (old) => ({
        ...old,
        [update.key]: update.value,
      }));
    };
    return () => ws.close();
  }, []);

  return <MetricsDashboard data={data} />;
}
```

---

## 7. Dashboard Accessibility

| Checkpoint | Requirement | Implementation |
|---|---|---|
| Color contrast | WCAG AA (4.5:1 text) | Test with axe DevTools |
| Keyboard navigation | Tab order, focus management | tabIndex, focus-visible styles |
| Screen readers | ARIA labels, live regions | aria-label, aria-live="polite" |
| Chart alternatives | Data tables for charts | Toggle chart/table view |
| Loading states | Announce to screen readers | aria-busy, role="status" |
| Error messages | Accessible error announcements | role="alert", aria-describedby |

---

## 8. Dashboard Component Architecture

```
components/
  dashboard/
    layout/
      DashboardLayout.tsx       # Main shell (sidebar + content)
      DashboardHeader.tsx       # Title, filters, actions
      DashboardGrid.tsx         # Responsive grid container
    cards/
      KPICard.tsx               # Single metric card
      TrendCard.tsx             # Card with sparkline
      ProgressCard.tsx          # Card with progress bar
    charts/
      RevenueChart.tsx          # Area/line chart
      BarChart.tsx              # Comparison chart
      DonutChart.tsx            # Proportion chart
      FunnelChart.tsx           # Conversion funnel
    tables/
      DataTable.tsx             # Reusable data table
      ActivityTable.tsx         # Recent activity list
    filters/
      DateRangePicker.tsx       # Date range control
      FilterBar.tsx             # Combined filters
      SearchInput.tsx           # Debounced search
    shared/
      EmptyState.tsx            # No data / no results
      LoadingSkeleton.tsx       # Skeleton screens
      ErrorBoundary.tsx         # Error fallback
```
