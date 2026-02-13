# Gumon Website KPI Tracking Plan (New IA)

## KPI Goals
1. Increase qualified navigation to `/platform`, `/developers`, `/partners`
2. Increase docs entry from high-intent pages
3. Increase contact intent from core conversion pages

## Event Schema
All tracked events include:
- `event_name`
- `event_category`
- `event_label`
- `event_location`
- `event_href`

Source:
- `lib/analytics.ts`
- `components/TrackedLink.tsx`

## Primary KPI Events

| Event | Category | Trigger | KPI Meaning |
|---|---|---|---|
| `home_primary_cta_click` | `cta` | Home hero -> Platform | Top-funnel platform intent |
| `home_secondary_cta_click` | `navigation` | Home hero -> Developers | Top-funnel builder intent |
| `home_audience_path_click` | `cta` | Home role path cards | Role-path quality |
| `home_partner_outbound_click` | `cta` | Home partner outbound links | Partner trust engagement |
| `home_nextstep_click` | `contact/navigation` | Home final CTA block | Bottom-funnel progression |
| `site_nav_click` | `navigation` | Header/Footer navigation | Navigation quality |
| `header_cta_click` | `contact` | Header contact CTA | Persistent contact intent |
| `header_quicklink_click` | `docs` | Header docs/wiki links | Docs entry from global nav |
| `developers_resource_click` | `docs/navigation` | Developers resource cards | Technical enablement intent |
| `developers_platform_reference_click` | `navigation` | Developers -> Platform | Technical depth exploration |
| `developers_contact_click` | `contact` | Developers next-step contact CTA | Technical consultation intent |
| `partners_knowledge_base_click` | `docs` | Partners knowledge base link | Partner enablement intent |
| `partners_contact_click` | `contact` | Partners contact CTA | Partner lead intent |
| `footer_link_click` | `navigation/contact` | Footer legal/help/contact links | Utility usage |
| `contact_route_click` | `navigation` | Contact routing cards | Intent routing quality |
| `contact_docs_click` | `docs` | Contact page docs links | Pre-sales technical qualification |
| `contact_channel_click` | `contact` | Contact page direct channels | Direct conversion intent |

## KPI Dashboard Spec
- Role-path CTR:
  - `home_audience_path_click / home sessions`
- Docs Entry Rate:
  - (`developers_resource_click` + `header_quicklink_click` + `contact_docs_click`) / relevant sessions
- Contact Intent Rate:
  - (`header_cta_click` + `home_nextstep_click[nextstep-contact]` + `developers_contact_click` + `partners_contact_click` + `contact_channel_click`) / relevant sessions
