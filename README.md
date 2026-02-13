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

## IA guard check
```bash
npm run check:ia
```
ตรวจว่าหน้า active ไม่มีลิงก์ภายในย้อนกลับไปหน้า legacy routes

## Contact webhook (optional)
ตั้งค่า env สำหรับส่งฟอร์มติดต่อเข้า webhook:
```bash
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://your-webhook-endpoint
```
ถ้าไม่ตั้งค่า หรือ webhook ล้มเหลว ระบบจะ fallback ไป `mailto:contact@gumon.io`

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

## GitHub Pages
1) Repo Settings → Pages → Source: GitHub Actions
2) Ensure `public/CNAME` is configured
