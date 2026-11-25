# HANDOFF — gumon.io (ห้อง KGIO)

อัปเดต 2026-11-25 (ล่าสุด commit fb51854)

## ห้องใหม่รับต่อ (2026-11-25 · [KGIO] Gumon Company Website (air))
- **หน้าแรกของแอป /ads-automation/** (781433c · ขึ้นจริง 200 ทั้ง root /en/ /th/) ตาม KMKT หลัง Google ตีกลับว่า home page อยู่หลังหน้า login · เนื้อ `content/locales/adsAutomationHome.ts` · ห้ามใส่ปุ่ม sign in · ลิงก์นโยบายเป็น URL เต็ม https://gumon.io/ads-automation/... (TrackedLink เปลี่ยนลิงก์ภายในเป็น /en/ และตัด / ท้าย) · footer ลิงก์ "Gumon Ads Automation" ชี้หน้านี้แล้ว · LegalDocumentPage มี prop `logo` · รอ KMKT เปลี่ยน home ใน Branding + ส่งตรวจใหม่
- ค้าง: (1) ยืนยันกับ KMKT ว่าไฟล์โลโก้ใน Branding = `gumon-rose.png` (2) หน้า privacy/terms/data-deletion ของแอปยังเขียนว่าลูกค้าอาจให้สิทธิ์ "signing in with Google"/เพิกถอนที่ myaccount.google.com/permissions แต่ระบบจริงใช้ service account ที่ลูกค้าเพิ่มในบัญชี Google Ads (ARCHITECTURE §8) ⇒ ถาม KADS ก่อนแก้ · ถามทั้งสองข้อกับ KMKT แล้ว
- รับงาน "เพิ่มหัวข้อ Gumon Ads Automation ใน /privacy/" ซ้ำจาก KWS ⇒ ตรวจแล้วว่าห้องเดิมทำครบทุกข้อในสเปกแล้ว (c7db270 · รีวิวอิสระ opus/high แล้ว) · หน้าจริง gumon.io/privacy/ และ /ads-automation/privacy/ ตอบ 200 มี #ads-automation · gclid · 8 วัน · 90 วัน · ประโยค Limited Use ⇒ ไม่แก้เนื้อหา · แจ้ง KMKT ให้กดขอ Google ตรวจใหม่

## สถานะตอนปิดห้อง (2026-11-25 · KWS สั่งหยุด · ห้องใหม่รับต่อ)
- เสร็จและขึ้นจริงแล้ว: หน้า Ads Automation สามหน้า (fb51854) ตอบ 200 บน gumon.io ทั้ง root และ /th/ · หัวข้อใน /privacy/#ads-automation (c7db270) · footer ลิงก์หน้า privacy ของแอป · แจ้ง KMKT แล้วให้เปลี่ยน privacy/terms link ใน Google Branding และขอตรวจใหม่
- deploy ล่าสุดผ่านที่ run 45654333414 (หลัง GitHub มีเหตุขัดข้อง 15:55–16:3x UTC ทำให้ deploy ล้ม 3 รอบด้วย 500)
- **ยังไม่เสร็จ (รอ Google):** ผลตรวจ brand verification รอบใหม่ · เมื่อผ่านแล้ว ย่อหัวข้อ "Gumon Ads Automation" ใน /privacy/ (`content/locales/privacyAdsAutomation.ts` + บล็อกใน `app/privacy/page.tsx`) ให้เหลือย่อหน้าสั้น + ลิงก์ไปหน้าแยก (คำสั่ง KMKT: อย่าลบจน Google ผ่าน)
- ถ้า Google ขอหน้าแรกของแอปเฉพาะ: ทำหน้า /ads-automation/ ที่อธิบายแอปและลิงก์ privacy/terms
- ตัวเลขที่ห้องนี้กำหนดเองในหน้า terms/data-deletion (1 เดือน · 30 วัน) ยังไม่มีคนอนุมัติ ⇒ ให้ KMKT/เจ้าของยืนยัน
- ไม่มีงานค้างที่ยังไม่ commit · ไม่มี executor หรืองานเบื้องหลังที่ยังรัน

## หน้ากฎหมาย (ขึ้น main แล้ว · ตรวจหน้าจริงแล้ว)
- **Gumon Ads Automation หน้าแยก** (fb51854 · 25 พ.ย.) `/ads-automation/privacy/` `/ads-automation/data-deletion/` `/ads-automation/terms/` · EN+TH · เนื้อ `content/locales/adsAutomation*.ts` · component กลาง `components/LegalDocumentPage.tsx` (Shop Agent ใช้ตัวเดียวกัน) · privacy ระบุ scope `auth/adwords` + `auth/datamanager` ตามโค้ด KADS ⇒ เพิ่ม scope เมื่อไรต้องแก้หน้า · footer ทุกหน้ามีลิงก์ "Gumon Ads Automation" และ "Gumon Shop Agent" เป็น path ราก (ตรงกับ URL ที่ลงทะเบียนกับ Google/Meta) · Google ตรวจ /privacy/ สองรอบไม่ผ่าน ⇒ KMKT เปลี่ยน privacy link ใน Branding เป็นหน้าแยก · **คงหัวข้อเต็มใน /privacy/#ads-automation ไว้จน Google ผ่าน** แล้วค่อยย่อเหลือย่อหน้าสั้น + ลิงก์ (คำสั่ง KMKT)
- ข้อสัญญาที่หน้า terms/data-deletion ให้ไว้ (ทีมต้องทำตาม): ลบข้อมูลลูกค้าธุรกิจภายใน 1 เดือนหลังเลิกบริการ/ขอ · แจ้งเปลี่ยนข้อกำหนดล่วงหน้า 30 วัน · เลิกบริการแจ้ง 30 วันถ้าไม่มีสัญญา · ลบบันทึกรายคนภายใน 72 ชม. หลังถึงระบบ
- **Gumon Ads Automation บน /privacy/** (c7db270 · 25 พ.ย.) ให้ Google OAuth brand verification ของ Cloud project gumon-ads-automation ⇒ **ห้ามย้าย path /privacy/** (ใส่ใน Branding ของ Google แล้ว) · เนื้อ `content/locales/privacyAdsAutomation.ts` (EN+TH ภาษาอื่นแสดง EN) · anchor `#ads-automation` · ประโยค Limited Use ต้องคำต่อคำ · ข้อเท็จจริงตามระบบจริง: v1 ส่ง gclid อย่างเดียว (ไม่มี gbraid/wbraid) · click id ลบเมื่อส่งสำเร็จหรือ 90 วัน · คลิกที่ไม่มีใครทัก ลบที่ 8 วัน (shop-office `poc/shop-agent/app/measurement.py:65`) · ระบบเปลี่ยนเมื่อไร (เพิ่ม gbraid/wbraid, Meta/TikTok, scope ใหม่) ต้องแก้ไฟล์นี้ด้วย · ส่วนเว็บไซต์เดิมของหน้า privacy ไม่ได้แตะ
- **Gumon Shop Agent** (e08e448 · 30 ต.ค.) `/shop-agent/privacy/` `/shop-agent/data-deletion/` `/shop-agent/terms/` = URL ในหน้า Basic settings ของแอป Meta 1873760646949270 · EN+TH · ห้ามระบุชื่อร้านลูกค้า · ข้อที่ยังเปิด: IDTA ยังไม่เซ็น (หน้าเขียน "ต้องอาศัย" มาตรการ) · ยังไม่รู้ว่า S3 เปิด versioning หรือไม่ · ยังไม่มีขั้นลบซ้ำหลังกู้ข้อมูลสำรอง

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
