import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import type { LegalDocumentCopy } from "@/lib/legalDocument";
import { adsAutomationPaths } from "@/lib/adsAutomationLegal";

// Deletion behaviour follows the system as built: per-person forget within 72 hours of reaching the
// system with a 13-month one-way block; conversions already uploaded to Google cannot be withdrawn.

export const adsAutomationDataDeletionContent: Partial<Record<Locale, LegalDocumentCopy>> = {
  en: {
    title: "Gumon Ads Automation Data Deletion",
    description: "How to ask for data to be deleted from Gumon Ads Automation, for client businesses and for people who clicked their ads.",
    crumb: "Ads Automation Data Deletion",
    kicker: "Gumon Ads Automation",
    heading: "How to ask for data to be deleted from Gumon Ads Automation",
    updatedLabel: "Last updated",
    updatedAt: "November 25, 2026",
    intro:
      "This page explains how to ask for data to be deleted from Gumon Ads Automation, the system Gumon Technology uses to manage online advertising for its client businesses. There is no charge for a deletion request.",
    sections: [
      {
        title: "If you clicked an ad and contacted a business",
        items: [
          "Ask the business you contacted, for example by sending \"Please delete my data\" in your chat with it, or email data@gumon.io with the subject \"Delete my data\".",
          "If you email us, include the name of the business whose ad you clicked and the date of your visit. The system holds no names or contact details, so this is how we find your records. If we cannot match the records from these details, we will ask you to make the request through the business's chat.",
          "We may ask you to confirm the request from the phone number or chat you used with the business.",
        ],
      },
      {
        title: "If you are a client business",
        items: [
          "Email data@gumon.io from an address your business has registered with Gumon, and say what you want deleted: all of your data, or the data for a particular advertising account.",
          "To stop Gumon's access straight away, remove Gumon's access in your Google Ads account, or, where access was granted by signing in with Google, revoke Gumon Ads Automation at https://myaccount.google.com/permissions.",
          "Your campaigns stay in your own Google Ads account. On request, we pause the campaigns we manage before our access ends.",
        ],
      },
      {
        title: "Timing",
        items: [
          "We generally acknowledge requests within 72 hours.",
          "A person's conversion records are deleted within 72 hours of the request reaching the system.",
          "All requests are completed within one month, the time limit under UK GDPR and EU GDPR, or longer where the law allows it and we tell you why.",
          "We confirm by email, or through the business you contacted, when the deletion is complete.",
        ],
      },
      {
        title: "What is deleted",
        items: [
          "For a person who clicked an ad: the click identifier, the conversion records linked to them, and the one-way coded conversation reference.",
          "For a client business: campaign settings and performance data held by Gumon, reports, change records and the access credentials stored for that business, within one month, unless the law requires them to be kept longer.",
        ],
      },
      {
        title: "What Gumon cannot delete, or must keep",
        items: [
          "Conversions already sent to Google. Once uploaded, they cannot be withdrawn through Google's API. Google keeps them in the client's Google Ads account under Google's own terms. You can manage how Google uses your data at https://myadcenter.google.com and in your Google account settings.",
          "When a person asks for deletion: anonymous booking and revenue totals in reports already made, which do not identify anyone.",
          "A one-way code used to stop new records about you being accepted for 13 months. It cannot be turned back into your details.",
          "Records the law requires Gumon to keep, such as invoices to client businesses.",
          "Copies in backups, which are removed when the backups are replaced.",
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
          { href: adsAutomationPaths.privacy, label: "Gumon Ads Automation privacy notice" },
          { href: adsAutomationPaths.terms, label: "Gumon Ads Automation terms of service" },
          { href: "https://myaccount.google.com/permissions", label: "Google account: third-party access" },
          { href: "https://myadcenter.google.com", label: "Google My Ad Center" },
        ],
      },
    ],
  },
  th: {
    title: "การลบข้อมูลจาก Gumon Ads Automation",
    description: "วิธีขอให้ลบข้อมูลจาก Gumon Ads Automation สำหรับธุรกิจลูกค้า และผู้ที่คลิกโฆษณาของธุรกิจเหล่านั้น",
    crumb: "การลบข้อมูล Ads Automation",
    kicker: "Gumon Ads Automation",
    heading: "วิธีขอให้ลบข้อมูลจาก Gumon Ads Automation",
    updatedLabel: "ปรับปรุงล่าสุด",
    updatedAt: "25 พฤศจิกายน 2026",
    intro:
      "หน้านี้อธิบายวิธีขอให้ลบข้อมูลจาก Gumon Ads Automation ซึ่งเป็นระบบที่ Gumon Technology ใช้จัดการโฆษณาออนไลน์ให้ธุรกิจลูกค้า การขอลบข้อมูลไม่มีค่าใช้จ่าย",
    sections: [
      {
        title: "หากคุณคลิกโฆษณาและติดต่อธุรกิจ",
        items: [
          "ขอให้ธุรกิจที่คุณติดต่อลบข้อมูล เช่น ส่งข้อความ \"ขอให้ลบข้อมูลของฉัน\" ในแชทกับธุรกิจนั้น หรือส่งอีเมลถึง data@gumon.io หัวเรื่อง \"Delete my data\" หรือ \"ขอลบข้อมูล\"",
          "หากส่งอีเมลถึงเรา โปรดระบุชื่อธุรกิจที่คุณคลิกโฆษณาและวันที่เข้าชม เนื่องจากระบบไม่เก็บชื่อหรือข้อมูลติดต่อ ข้อมูลนี้คือวิธีที่เราค้นหาบันทึกของคุณ หากจับคู่บันทึกจากข้อมูลนี้ไม่ได้ เราจะขอให้คุณส่งคำขอผ่านแชทของธุรกิจนั้น",
          "เราอาจขอให้คุณยืนยันคำขอจากหมายเลขโทรศัพท์หรือแชทที่คุณใช้ติดต่อธุรกิจนั้น",
        ],
      },
      {
        title: "หากคุณเป็นธุรกิจลูกค้า",
        items: [
          "ส่งอีเมลถึง data@gumon.io จากอีเมลที่ธุรกิจของคุณลงทะเบียนไว้กับ Gumon และระบุสิ่งที่ต้องการให้ลบ ได้แก่ ข้อมูลทั้งหมดของคุณ หรือข้อมูลของบัญชีโฆษณาใดบัญชีหนึ่ง",
          "หากต้องการหยุดการเข้าถึงของ Gumon ทันที ให้นำสิทธิ์ของ Gumon ออกในบัญชี Google Ads ของคุณ หรือหากให้สิทธิ์ผ่านการลงชื่อเข้าใช้ด้วย Google ให้เพิกถอน Gumon Ads Automation ที่ https://myaccount.google.com/permissions",
          "แคมเปญของคุณยังอยู่ในบัญชี Google Ads ของคุณเอง หากคุณขอ เราจะหยุดแคมเปญที่เราจัดการชั่วคราวก่อนการเข้าถึงของเราสิ้นสุด",
        ],
      },
      {
        title: "ระยะเวลาดำเนินการ",
        items: [
          "โดยทั่วไปเราตอบรับคำขอภายใน 72 ชั่วโมง",
          "บันทึก conversion ของบุคคลจะถูกลบภายใน 72 ชั่วโมงหลังคำขอถึงระบบ",
          "คำขอทั้งหมดดำเนินการเสร็จภายในหนึ่งเดือน ตามระยะเวลาที่ UK GDPR และ EU GDPR กำหนด หรือนานกว่านั้นในกรณีที่กฎหมายอนุญาตและเราแจ้งเหตุผลให้คุณทราบ",
          "เราแจ้งยืนยันทางอีเมล หรือผ่านธุรกิจที่คุณติดต่อ เมื่อการลบเสร็จสิ้น",
        ],
      },
      {
        title: "ข้อมูลที่ถูกลบ",
        items: [
          "สำหรับผู้ที่คลิกโฆษณา: รหัสการคลิก บันทึก conversion ที่เชื่อมโยงกับบุคคลนั้น และรหัสอ้างอิงบทสนทนาที่แปลงทางเดียว",
          "สำหรับธุรกิจลูกค้า: การตั้งค่าแคมเปญและข้อมูลผลโฆษณาที่ Gumon เก็บไว้ รายงาน บันทึกการเปลี่ยนแปลง และข้อมูลรับรองการเข้าถึงที่เก็บไว้สำหรับธุรกิจนั้น ภายในหนึ่งเดือน เว้นแต่กฎหมายกำหนดให้ต้องเก็บนานกว่านั้น",
        ],
      },
      {
        title: "ข้อมูลที่ Gumon ลบไม่ได้ หรือต้องเก็บไว้",
        items: [
          "conversion ที่ส่งไปยัง Google แล้ว เมื่ออัปโหลดแล้วไม่สามารถถอนคืนผ่าน API ของ Google ได้ Google เก็บไว้ในบัญชี Google Ads ของลูกค้าตามข้อกำหนดของ Google เอง คุณจัดการการใช้ข้อมูลของคุณโดย Google ได้ที่ https://myadcenter.google.com และในการตั้งค่าบัญชี Google ของคุณ",
          "เมื่อบุคคลขอให้ลบ: ยอดรวมการจองและรายได้แบบไม่ระบุตัวตนในรายงานที่จัดทำไปแล้ว ซึ่งไม่ระบุตัวบุคคล",
          "รหัสทางเดียวที่ใช้ไม่ให้ระบบรับบันทึกใหม่เกี่ยวกับคุณเป็นเวลา 13 เดือน ซึ่งแปลงกลับเป็นข้อมูลของคุณไม่ได้",
          "บันทึกที่กฎหมายกำหนดให้ Gumon ต้องเก็บ เช่น ใบแจ้งหนี้ถึงธุรกิจลูกค้า",
          "สำเนาในข้อมูลสำรอง ซึ่งจะหมดไปเมื่อข้อมูลสำรองถูกแทนที่",
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
          { href: adsAutomationPaths.privacy, label: "ประกาศความเป็นส่วนตัวของ Gumon Ads Automation" },
          { href: adsAutomationPaths.terms, label: "ข้อกำหนดการให้บริการของ Gumon Ads Automation" },
          { href: "https://myaccount.google.com/permissions", label: "บัญชี Google: การเข้าถึงของบุคคลที่สาม" },
          { href: "https://myadcenter.google.com", label: "Google My Ad Center" },
        ],
      },
    ],
  },
};
