import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import { shopAgentPaths, type ShopAgentLegalCopy } from "@/lib/shopAgentLegal";

// Meta "Data Deletion Instructions URL" for the Gumon Shop Agent app.
// What is deleted and what is kept follows the Shop Agent's per-person erase as actually built.

export const shopAgentDataDeletionContent: Partial<Record<Locale, ShopAgentLegalCopy>> = {
  en: {
    title: "Gumon Shop Agent Data Deletion",
    description: "How to ask for your personal data to be deleted from Gumon Shop Agent, the WhatsApp service used by shops that Gumon supports.",
    crumb: "Shop Agent Data Deletion",
    kicker: "Gumon Shop Agent",
    heading: "How to delete your data from Gumon Shop Agent",
    updatedLabel: "Last updated",
    updatedAt: "October 30, 2026",
    intro:
      "If you have messaged a shop that uses Gumon Shop Agent on WhatsApp, you can ask for the personal data held about you to be deleted at any time. You do not need an account, and there is no charge.",
    sections: [
      {
        title: "Option 1: Ask on WhatsApp (recommended)",
        items: [
          "Open your WhatsApp chat with the shop.",
          "Send a message such as \"Please delete my data\".",
          "Because the request comes from your own number, this is usually enough to confirm it is you. The shop may ask a short question to confirm the request.",
        ],
      },
      {
        title: "Option 2: Ask by email",
        items: [
          "Email data@gumon.io with the subject \"Delete my data\".",
          "Include the WhatsApp number you used, with the country code, and the name of the shop you messaged.",
          "To protect you, we may ask you to confirm the request by sending a short WhatsApp message from that number.",
          "We pass your request to the shop, usually within 2 working days, tell you it has been passed on, and carry out the deletion on the shop's instructions.",
        ],
      },
      {
        title: "What happens next",
        items: [
          "Deletion is completed within one month of a confirmed request, the time limit under UK GDPR and EU GDPR, and usually much sooner.",
          "The shop confirms to you when the deletion is complete.",
          "If a payment is being processed when you ask, we complete or cancel it first and then delete your data. Upcoming bookings may be cancelled as part of the deletion.",
          "Deletion cannot be undone.",
        ],
      },
      {
        title: "What is deleted",
        items: [
          "Your conversation messages with the shop.",
          "Your customer record: name, phone number, email address, notes and preferences.",
          "Photos, videos and files you sent.",
          "Your details on the shop's marketing contact list.",
          "Personal details in staff notes, summaries and messages about you.",
          "Your name in staff calendar entries for your appointments, where the calendar is still connected to the service.",
        ],
      },
      {
        title: "What may be kept",
        items: [
          "Booking and payment records that the shop must keep for accounting, tax or legal claims. These are kept without your name or phone number, under a coded reference. Gumon could match that reference to your number only if it already knew the number.",
          "Consultation records for treatments you have already received, kept under a coded reference for 7 years after your last visit (for someone under 18, at least until they turn 25) in case of legal claims.",
          "A minimal note that you asked for deletion, so that you are not sent marketing messages again.",
          "Operational logs, kept for up to 13 months.",
          "Messages already delivered to staff phones, which cannot be recalled.",
          "Encrypted backups, until they are replaced by 14 later successful daily backups.",
        ],
      },
      {
        title: "Data that Gumon does not control",
        items: [
          "Messages stored in WhatsApp on your own phone, and data that Meta holds for your WhatsApp account, are managed by WhatsApp. You can delete chats in the app, or delete your WhatsApp account from the app's settings.",
          "If the shop also keeps your details in its own systems, such as a separate booking or payment system, we ask the shop to delete them there too.",
        ],
      },
      {
        title: "Contact",
        items: [
          "Data deletion and privacy requests: data@gumon.io",
          `${companyInfoByLocale.en.legalName}, ${companyInfoByLocale.en.address}`,
        ],
      },
      {
        title: "Related pages",
        links: [
          { href: shopAgentPaths.privacy, label: "Gumon Shop Agent privacy notice" },
          { href: shopAgentPaths.terms, label: "Gumon Shop Agent terms of service" },
        ],
      },
    ],
  },
  th: {
    title: "การลบข้อมูลจาก Gumon Shop Agent",
    description: "วิธีขอให้ลบข้อมูลส่วนบุคคลของคุณจาก Gumon Shop Agent บริการ WhatsApp ที่ร้านซึ่ง Gumon ดูแลใช้งาน",
    crumb: "การลบข้อมูล Shop Agent",
    kicker: "Gumon Shop Agent",
    heading: "วิธีขอลบข้อมูลของคุณจาก Gumon Shop Agent",
    updatedLabel: "ปรับปรุงล่าสุด",
    updatedAt: "30 ตุลาคม 2026",
    intro:
      "หากคุณเคยส่งข้อความหาร้านที่ใช้ Gumon Shop Agent ทาง WhatsApp คุณขอให้ลบข้อมูลส่วนบุคคลของคุณได้ทุกเมื่อ ไม่ต้องมีบัญชีผู้ใช้ และไม่มีค่าใช้จ่าย",
    sections: [
      {
        title: "วิธีที่ 1: ขอทาง WhatsApp (แนะนำ)",
        items: [
          "เปิดแชท WhatsApp ที่คุณคุยกับร้าน",
          "ส่งข้อความ เช่น \"ขอให้ลบข้อมูลของฉัน\"",
          "เนื่องจากคำขอส่งมาจากหมายเลขของคุณเอง โดยทั่วไปจึงเพียงพอที่จะยืนยันว่าเป็นคุณ ร้านอาจถามคำถามสั้น ๆ เพื่อยืนยันคำขอ",
        ],
      },
      {
        title: "วิธีที่ 2: ขอทางอีเมล",
        items: [
          "ส่งอีเมลถึง data@gumon.io หัวเรื่อง \"Delete my data\" หรือ \"ขอลบข้อมูล\"",
          "ระบุหมายเลข WhatsApp ที่คุณใช้ พร้อมรหัสประเทศ และชื่อร้านที่คุณติดต่อ",
          "เพื่อความปลอดภัยของคุณ เราอาจขอให้คุณยืนยันคำขอโดยส่งข้อความ WhatsApp สั้น ๆ จากหมายเลขนั้น",
          "เราส่งต่อคำขอให้ร้าน โดยปกติภายใน 2 วันทำการ แจ้งคุณว่าส่งต่อแล้ว และดำเนินการลบตามคำสั่งของร้าน",
        ],
      },
      {
        title: "ขั้นตอนหลังจากนั้น",
        items: [
          "การลบเสร็จสิ้นภายในหนึ่งเดือนนับจากคำขอที่ยืนยันแล้ว ตามระยะเวลาที่ UK GDPR และ EU GDPR กำหนด และโดยปกติเร็วกว่านั้นมาก",
          "ร้านจะแจ้งยืนยันกับคุณเมื่อการลบเสร็จสิ้น",
          "หากมีการชำระเงินที่กำลังดำเนินการอยู่ขณะที่คุณขอ เราจะดำเนินการให้เสร็จหรือยกเลิกก่อน แล้วจึงลบข้อมูลของคุณ นัดที่กำลังจะมาถึงอาจถูกยกเลิกเป็นส่วนหนึ่งของการลบ",
          "การลบไม่สามารถย้อนกลับได้",
        ],
      },
      {
        title: "ข้อมูลที่ถูกลบ",
        items: [
          "ข้อความในบทสนทนาของคุณกับร้าน",
          "ข้อมูลลูกค้าของคุณ ได้แก่ ชื่อ หมายเลขโทรศัพท์ อีเมล หมายเหตุ และความต้องการต่าง ๆ",
          "รูปภาพ วิดีโอ และไฟล์ที่คุณส่งมา",
          "ข้อมูลของคุณในรายชื่อผู้ติดต่อเพื่อการตลาดของร้าน",
          "ข้อมูลส่วนบุคคลในบันทึก สรุป และข้อความของพนักงานที่เกี่ยวกับคุณ",
          "ชื่อของคุณในรายการปฏิทินของพนักงานสำหรับนัดของคุณ ในกรณีที่ปฏิทินนั้นยังเชื่อมต่อกับบริการอยู่",
        ],
      },
      {
        title: "ข้อมูลที่อาจยังถูกเก็บไว้",
        items: [
          "บันทึกการนัดหมายและการชำระเงินที่ร้านต้องเก็บเพื่อการบัญชี ภาษี หรือการใช้สิทธิเรียกร้องตามกฎหมาย โดยเก็บโดยไม่มีชื่อหรือหมายเลขโทรศัพท์ของคุณ ภายใต้รหัสอ้างอิง ซึ่ง Gumon จะจับคู่รหัสนั้นกับหมายเลขของคุณได้ก็ต่อเมื่อรู้หมายเลขนั้นอยู่แล้วเท่านั้น",
          "บันทึกการปรึกษาของบริการที่คุณได้รับไปแล้ว เก็บภายใต้รหัสอ้างอิงเป็นเวลา 7 ปีนับจากครั้งล่าสุดที่มาใช้บริการ (สำหรับผู้ที่อายุต่ำกว่า 18 ปี อย่างน้อยจนอายุครบ 25 ปี) เผื่อกรณีข้อเรียกร้องทางกฎหมาย",
          "บันทึกขั้นต่ำว่าคุณเคยขอให้ลบ เพื่อไม่ให้มีการส่งข้อความการตลาดถึงคุณอีก",
          "บันทึกการทำงานของระบบ เก็บไม่เกิน 13 เดือน",
          "ข้อความที่ส่งถึงโทรศัพท์ของพนักงานไปแล้ว ซึ่งเรียกคืนไม่ได้",
          "ข้อมูลสำรองที่เข้ารหัสไว้ จนกว่าจะถูกแทนที่ด้วยข้อมูลสำรองรายวันที่สำเร็จอีก 14 ชุด",
        ],
      },
      {
        title: "ข้อมูลที่ไม่อยู่ในการควบคุมของ Gumon",
        items: [
          "ข้อความที่เก็บใน WhatsApp บนโทรศัพท์ของคุณ และข้อมูลที่ Meta เก็บสำหรับบัญชี WhatsApp ของคุณ อยู่ในการดูแลของ WhatsApp คุณลบแชทได้ในแอป หรือลบบัญชี WhatsApp ได้จากการตั้งค่าของแอป",
          "หากร้านเก็บข้อมูลของคุณไว้ในระบบของร้านเองด้วย เช่น ระบบจองหรือระบบชำระเงินที่แยกต่างหาก เราจะขอให้ร้านลบข้อมูลในระบบนั้นด้วย",
        ],
      },
      {
        title: "ติดต่อ",
        items: [
          "คำขอลบข้อมูลและเรื่องความเป็นส่วนตัว: data@gumon.io",
          `${companyInfoByLocale.th.legalName} ${companyInfoByLocale.th.address}`,
        ],
      },
      {
        title: "หน้าที่เกี่ยวข้อง",
        links: [
          { href: shopAgentPaths.privacy, label: "ประกาศความเป็นส่วนตัวของ Gumon Shop Agent" },
          { href: shopAgentPaths.terms, label: "ข้อกำหนดการให้บริการของ Gumon Shop Agent" },
        ],
      },
    ],
  },
};
