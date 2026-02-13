# Gumon Website KPI Tracking Plan

## KPI Goals
1. Increase qualified navigation to role pages (`Developers`, `Partners`, `Investors`).
2. Increase documentation consumption (`docs.gumon.io`, `wiki.gumon.io`).
3. Increase contact intent from high-intent pages.

## Event Schema
All events are sent with:
- `event_name`
- `event_category`
- `event_label`
- `event_location`
- `event_href`

Source implementation:
- `lib/analytics.ts`
- `components/TrackedLink.tsx`

## Primary KPI Events (Implemented)

| Event | Category | Trigger | KPI Meaning |
|---|---|---|---|
| `home_primary_cta_click` | `cta` | Home hero -> Platform | Top-funnel technical interest |
| `home_secondary_cta_click` | `contact` | Home hero -> Contact | Top-funnel contact intent |
| `home_audience_path_click` | `cta` | Home audience cards | Role-based journey selection |
| `home_solution_card_click` | `navigation` | Home solution cards | Solution exploration depth |
| `home_partner_outbound_click` | `cta` | Home partner website clicks | Partner trust engagement |
| `home_nextstep_click` | `contact/navigation` | Home next-step actions | Bottom-funnel progression |
| `developers_resource_click` | `docs/navigation` | Developers resource cards | Docs consumption intent |
| `developers_platform_reference_click` | `navigation` | Developers -> Platform architecture | Technical depth exploration |
| `partners_knowledge_base_click` | `docs` | Partners -> Knowledge Base | Partner enablement interest |
| `partners_contact_click` | `contact` | Partners -> Contact | Partner lead intent |

## KPI Dashboard Spec (Suggested)
- Weekly role-path CTR from Home:
  - `home_audience_path_click / home page views`
- Docs CTR:
  - (`developers_resource_click` where label contains docs/wiki + `partners_knowledge_base_click`) / relevant page views
- Contact Intent Rate:
  - (`home_secondary_cta_click` + `home_nextstep_click[nextstep-contact]` + `partners_contact_click`) / relevant page views

## Data Plumbing Compatibility
Current tracking supports these tools if present on the page:
- Google Analytics (`window.gtag`)
- GTM/Data Layer (`window.dataLayer`)
- Plausible (`window.plausible`)
- PostHog (`window.posthog`)

## Next Phase Recommendations
1. Track `contact@gumon.io` mailto click as a dedicated conversion event.
2. Add server-side conversion capture for contact form submission (if form is introduced).
3. Build monthly funnel report by role (`Developer`, `Partner`, `Investor`).
