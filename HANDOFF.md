# HANDOFF — gumon.io (ห้อง KGIO)

อัปเดต 2026-10-29

## ขึ้น main แล้ว (commit 4e889ab, 0db6fc0, 0831d91 · Actions เขียว · ตรวจหน้าจริงบน gumon.io แล้ว)
- **แถบโลโก้ UK** `components/UkClientsStrip.tsx` + `content/locales/ukClients.ts` · อยู่ใน `/partners` (Trust Proof) และกล่อง Trusted Partners ของหน้าแรก · 4 ราย: Pure Essentials London, Sri Siam Thai Therapy & Wellness, Taitam-D, Taitam-D Academy London · หัวแถบและคำบรรยาย 23 ภาษา · ที่มาของไฟล์โลโก้ + sha256 ใน `docs/client-logos.md` · ห้ามแก้สี/รูปทรงโลโก้ลูกค้า
- **ปุ่ม WhatsApp** `components/WhatsAppButton.tsx` + `content/locales/whatsapp.ts` · wa.me/66614722055 พร้อมคำทักทายตามภาษา · ข้อความต้องไม่ขึ้นต้นด้วย TTDP-, คำขอเข้าชม/นัด, `[แจ้งปัญหา]` `[ร้องเรียน]` `[สอบถาม] รายงาน HR-` (KBOT: ระบบ Ops แยกเส้นทาง) · เบอร์คนนอกถูกเก็บเป็นเรื่องติดต่อใน gumon_inbox (ไม่ทิ้ง) · ในหน้าติดต่อมีปุ่มเพิ่ม
- **ทีมเหลือ 2 คน** (Komphet Meesab, Panitchai Chaenglek) ตามคำสั่งคุณคมเพชร · คนอื่นอยู่ใน `hiddenTeamMembers` ใน `content/locales/team.ts` รูปอยู่ `content/team-hidden/images/` (ไม่ถูกเผยแพร่) · วิธีนำกลับอยู่ในคอมเมนต์ในไฟล์นั้น

## ค้าง (รอบ 2): ภาพประกอบ Gemini
- ติด: Gemini ตอบ "prepayment credits are depleted" ทั้ง gemini-3-pro-image และโมเดลภาพ default (ai.studio ต้องเติมเครดิต · เรื่องเงิน รอคุณคมเพชร)
- แผน: hero หน้าแรก, Platform Foundation, แบนเนอร์ปิดท้าย · ทีละภาพ · ไม่มีตัวหนังสือ/หน้าคน/โลโก้อื่น · แปลง WebP · lazy-load · alt 23 ภาษา ไม่อ้างว่าเป็นสถานที่/ทีมจริง · ทะเบียน provenance (prompt+โมเดล+วันที่+ไฟล์) ใน docs
- ฐาน Lighthouse หน้าแรก gumon.io/en (desktop, ก่อนใส่ภาพ): Performance 71, LCP 7.5 s, น้ำหนักรวม 17 MB (รูปภาคสนามเดิมหนักอยู่แล้ว) · วัดซ้ำหลังใส่ภาพ

## ข้อสังเกต
- หน้าติดต่อช่อง WhatsApp เดิมเขียน "(YCN Group)" ต่อท้ายเบอร์ · ยังไม่ได้แก้
- ตรวจก่อนขึ้น: `npm run check:release` · ดูหน้าจริงจาก `out/` (Reveal ซ่อนเนื้อหาจนเลื่อนถึง · ถ่ายเต็มหน้าด้วย Chrome headless ใส่ `--force-prefers-reduced-motion`)
