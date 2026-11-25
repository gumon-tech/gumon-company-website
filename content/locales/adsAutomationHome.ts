import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import type { LegalDocumentCopy } from "@/lib/legalDocument";
import { adsAutomationPaths, googleUserDataPolicyUrl } from "@/lib/adsAutomationLegal";

// Public home page of the Gumon Ads Automation app (/ads-automation/). Google OAuth brand verification
// for the Cloud project gumon-ads-automation needs an app home page that anyone can read without signing in.
// Keep the app name exact ("Gumon Ads Automation"), name no client businesses, and add no sign-in button.
// Facts follow the system as built (KADS); change them only with the system.

export const adsAutomationHomeContent: Partial<Record<Locale, LegalDocumentCopy>> = {
  en: {
    title: "Gumon Ads Automation",
    description:
      "Gumon Ads Automation is Gumon Technology's internal tool for managing Google Ads campaigns and reporting offline conversions for the client businesses whose marketing Gumon manages.",
    crumb: "Gumon Ads Automation",
    kicker: "Gumon Technology",
    heading: "Gumon Ads Automation",
    updatedLabel: "Last updated",
    updatedAt: "November 25, 2026",
    intro:
      "Gumon Ads Automation is an internal tool that Gumon Technology uses to run Google Ads for the client businesses whose marketing Gumon manages. It is used for client businesses in the United Kingdom. The tool manages campaigns in each client's own Google Ads account and reports bookings and paid visits back to Google so that the client can see which ads work.",
    sections: [
      {
        title: "What the app does",
        items: [
          "Creates, updates and pauses campaigns in the client's own Google Ads account, within the daily and monthly spending limits agreed with the client. The system cannot raise spending above those limits.",
          "Reads campaign spend and performance so that Gumon can report results to the client.",
          "Sends offline conversions (bookings and paid visits that started from an ad click) to the client's Google Ads account. Each conversion contains only the Google click identifier (gclid), the time, the amount paid where there is one, and consent signals. No names, email addresses or phone numbers are sent.",
          "A conversion is sent only when the person who clicked the ad has consented to their data being used for advertising measurement.",
        ],
      },
      {
        title: "Who uses it",
        body:
          "Only Gumon's own staff operate the app, on behalf of client businesses that have hired Gumon and given Gumon access to their Google Ads account. Each client's access is a Gumon user created for that client only (a Google service account), added with the client's permission to the client's own Google Ads account with Standard access. The client can remove it at any time. Client staff receive reports, alerts and approval requests through messaging but do not sign in to the app. It is not offered to the public, and there are no external user accounts or sign-ups.",
      },
      {
        title: "Google APIs used",
        items: [
          "Google Ads API (scope https://www.googleapis.com/auth/adwords): to manage the client's campaigns and budgets and to read reports.",
          "Google Data Manager API (scope https://www.googleapis.com/auth/datamanager): to send offline conversions to the client's Google Ads account.",
          "Gumon Ads Automation's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        links: [{ href: googleUserDataPolicyUrl, label: "Google API Services User Data Policy" }],
      },
      {
        title: "Policies",
        links: [
          { href: `https://gumon.io${adsAutomationPaths.privacy}/`, label: "Privacy notice" },
          { href: `https://gumon.io${adsAutomationPaths.terms}/`, label: "Terms of service" },
          { href: `https://gumon.io${adsAutomationPaths.dataDeletion}/`, label: "Data deletion instructions" },
        ],
      },
      {
        title: "Contact",
        body: `Gumon Ads Automation is owned and operated by ${companyInfoByLocale.en.legalName}. Questions about the app or about your data: data@gumon.io`,
        links: [{ href: "mailto:data@gumon.io", label: "data@gumon.io" }],
      },
    ],
  },
  th: {
    title: "Gumon Ads Automation",
    description:
      "Gumon Ads Automation คือเครื่องมือภายในของ Gumon Technology สำหรับจัดการแคมเปญ Google Ads และส่ง conversion แบบออฟไลน์ให้ธุรกิจลูกค้าที่ Gumon ดูแลการตลาด",
    crumb: "Gumon Ads Automation",
    kicker: "Gumon Technology",
    heading: "Gumon Ads Automation",
    updatedLabel: "อัปเดตล่าสุด",
    updatedAt: "25 พฤศจิกายน 2026",
    intro:
      "Gumon Ads Automation เป็นเครื่องมือภายในที่ Gumon Technology ใช้ดูแล Google Ads ให้ธุรกิจลูกค้าที่ Gumon ดูแลการตลาด โดยใช้กับธุรกิจลูกค้าในสหราชอาณาจักร เครื่องมือนี้จัดการแคมเปญในบัญชี Google Ads ของลูกค้าแต่ละรายเอง และส่งข้อมูลการจองและการเข้ารับบริการที่ชำระเงินแล้วกลับไปยัง Google เพื่อให้ลูกค้าเห็นว่าโฆษณาใดได้ผล",
    sections: [
      {
        title: "แอปนี้ทำอะไร",
        items: [
          "สร้าง แก้ไข และหยุดแคมเปญในบัญชี Google Ads ของลูกค้าเอง ภายในวงเงินใช้จ่ายรายวันและรายเดือนที่ตกลงกับลูกค้า ระบบไม่สามารถใช้จ่ายเกินวงเงินนั้นได้",
          "อ่านค่าใช้จ่ายและผลของแคมเปญ เพื่อให้ Gumon รายงานผลให้ลูกค้า",
          "ส่ง conversion แบบออฟไลน์ (การจองและการเข้ารับบริการที่ชำระเงินแล้วซึ่งเริ่มจากการคลิกโฆษณา) เข้าบัญชี Google Ads ของลูกค้า แต่ละรายการมีเพียงรหัสการคลิกของ Google (gclid) เวลา ยอดที่ชำระถ้ามี และสัญญาณความยินยอม ไม่มีการส่งชื่อ อีเมล หรือหมายเลขโทรศัพท์",
          "conversion จะถูกส่งเฉพาะเมื่อผู้ที่คลิกโฆษณาให้ความยินยอมให้ใช้ข้อมูลเพื่อวัดผลโฆษณาแล้วเท่านั้น",
        ],
      },
      {
        title: "ผู้ใช้งาน",
        body:
          "แอปนี้ใช้งานโดยเจ้าหน้าที่ของ Gumon เท่านั้น ในนามธุรกิจลูกค้าที่จ้าง Gumon และให้สิทธิ์ Gumon เข้าถึงบัญชี Google Ads ของตน สิทธิ์ของลูกค้าแต่ละรายคือผู้ใช้ของ Gumon ที่สร้างไว้สำหรับลูกค้ารายนั้นเท่านั้น (service account ของ Google) ซึ่งเพิ่มเข้าบัญชี Google Ads ของลูกค้าเองในระดับสิทธิ์ Standard โดยได้รับอนุญาตจากลูกค้า และลูกค้านำออกได้ทุกเมื่อ พนักงานของลูกค้าได้รับรายงาน การแจ้งเตือน และคำขออนุมัติผ่านช่องทางข้อความ แต่ไม่ได้ลงชื่อเข้าใช้แอป แอปไม่เปิดให้บุคคลทั่วไปใช้ และไม่มีบัญชีผู้ใช้ภายนอกหรือการสมัครใช้งาน",
      },
      {
        title: "Google API ที่ใช้",
        items: [
          "Google Ads API (scope https://www.googleapis.com/auth/adwords): เพื่อจัดการแคมเปญและงบประมาณของลูกค้า และอ่านรายงาน",
          "Google Data Manager API (scope https://www.googleapis.com/auth/datamanager): เพื่อส่ง conversion แบบออฟไลน์เข้าบัญชี Google Ads ของลูกค้า",
          "การใช้และการส่งต่อข้อมูลที่ได้รับจาก Google API ของ Gumon Ads Automation จะเป็นไปตาม Google API Services User Data Policy รวมถึงข้อกำหนด Limited Use",
        ],
        links: [{ href: googleUserDataPolicyUrl, label: "Google API Services User Data Policy" }],
      },
      {
        title: "นโยบาย",
        links: [
          { href: `https://gumon.io${adsAutomationPaths.privacy}/`, label: "ประกาศความเป็นส่วนตัว" },
          { href: `https://gumon.io${adsAutomationPaths.terms}/`, label: "ข้อกำหนดการให้บริการ" },
          { href: `https://gumon.io${adsAutomationPaths.dataDeletion}/`, label: "วิธีขอลบข้อมูล" },
        ],
      },
      {
        title: "ติดต่อ",
        body: `Gumon Ads Automation เป็นของและดำเนินการโดย ${companyInfoByLocale.th.legalName} สอบถามเกี่ยวกับแอปหรือข้อมูลของคุณ: data@gumon.io`,
        links: [{ href: "mailto:data@gumon.io", label: "data@gumon.io" }],
      },
    ],
  },
};
