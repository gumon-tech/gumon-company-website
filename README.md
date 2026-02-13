# Gumon Technology — Company Profile Site (Static)

- Next.js (App Router) + Static Export (`output: "export"`)
- GitHub Pages deployment via Actions
- Custom domain: `web.gumon.dev`

## Local dev
```bash
npm install
npm run dev
```

## Build static export
```bash
npm run build
# output: /out
```

## Current IA
- `/`
- `/platform`
- `/developers`
- `/partners`
- `/resources`
- `/company`
- `/contact`
- `/faq`
- `/privacy`
- `/terms`
- `/cookies`

## Content + KPI docs
- `docs/web-redesign-structure-theme.md`
- `docs/content-matrix.md`
- `docs/kpi-tracking-plan.md`
- `docs/analytics-dashboard-query-spec.md`
- `docs/utm-convention-spec.md`

## GitHub Pages
1) Repo Settings → Pages → Source: GitHub Actions
2) Ensure `public/CNAME` is configured
