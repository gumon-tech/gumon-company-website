# HANDOFF — gumon.io (ห้อง KGIO)

อัปเดต 2026-10-29 (ล่าสุด commit 1542685)

## ขึ้น main แล้ว (commit 4e889ab, 0db6fc0, 0831d91 · Actions เขียว · ตรวจหน้าจริงบน gumon.io แล้ว)
- **เครือข่ายพาร์ตเนอร์ (รวมพาร์ตเนอร์ + ลูกค้าเป็นรายการเดียว ตามคุณคมเพชร)** `components/PartnerNetworkGrid.tsx` + `content/partnerNetwork.ts` · ไทล์โลโก้ + ชื่อ + ประเทศ · หน้าแรกและ `/partners` · 10 ราย (TH 4, UK 5, Finland 1) · ตัวเลข Partner Organizations / Operating Countries คำนวณจากรายการนี้ · Taitam-D ใช้โลโก้ร้าน (เหรียญทอง) ส่วน Taitam-D Academy London ใช้ตราวงกลมเขียว (คนละโลโก้) · Siam Cruise ลิงก์ Facebook (ยังไม่มีเว็บ) ใช้ไทล์ดำเพราะโลโก้ทองบนดำ · ที่มาของโลโก้ใน `docs/client-logos.md` · ห้ามแก้สี/รูปทรงโลโก้
- **ปุ่ม WhatsApp** `components/WhatsAppButton.tsx` + `content/locales/whatsapp.ts` · wa.me/66614722055 พร้อมคำทักทายตามภาษา · ข้อความต้องไม่ขึ้นต้นด้วย TTDP-, คำขอเข้าชม/นัด, `[แจ้งปัญหา]` `[ร้องเรียน]` `[สอบถาม] รายงาน HR-` (KBOT: ระบบ Ops แยกเส้นทาง) · เบอร์คนนอกถูกเก็บเป็นเรื่องติดต่อใน gumon_inbox (ไม่ทิ้ง) · ในหน้าติดต่อมีปุ่มเพิ่ม
- **ทีมเหลือ 2 คน** (Komphet Meesab, Panitchai Chaenglek) ตามคำสั่งคุณคมเพชร · คนอื่นอยู่ใน `hiddenTeamMembers` ใน `content/locales/team.ts` รูปอยู่ `content/team-hidden/images/` (ไม่ถูกเผยแพร่) · วิธีนำกลับอยู่ในคอมเมนต์ในไฟล์นั้น

## ค้าง (รอบ 2): ภาพประกอบ Gemini
- ติด: Gemini ตอบ "prepayment credits are depleted" ทั้ง gemini-3-pro-image และโมเดลภาพ default (ai.studio ต้องเติมเครดิต · เรื่องเงิน รอคุณคมเพชร)
- แผน: hero หน้าแรก, Platform Foundation, แบนเนอร์ปิดท้าย · ทีละภาพ · ไม่มีตัวหนังสือ/หน้าคน/โลโก้อื่น · แปลง WebP · lazy-load · alt 23 ภาษา ไม่อ้างว่าเป็นสถานที่/ทีมจริง · ทะเบียน provenance (prompt+โมเดล+วันที่+ไฟล์) ใน docs
- ฐาน Lighthouse หน้าแรก gumon.io/en (desktop, ก่อนใส่ภาพ): Performance 71, LCP 7.5 s, น้ำหนักรวม 17 MB (รูปภาคสนามเดิมหนักอยู่แล้ว) · วัดซ้ำหลังใส่ภาพ

## ข้อสังเกต
- หน้าติดต่อช่อง WhatsApp เดิมเขียน "(YCN Group)" ต่อท้ายเบอร์ · ยังไม่ได้แก้
- ตรวจก่อนขึ้น: `npm run check:release` · ดูหน้าจริงจาก `out/` (Reveal ซ่อนเนื้อหาจนเลื่อนถึง · ถ่ายเต็มหน้าด้วย Chrome headless ใส่ `--force-prefers-reduced-motion`)
