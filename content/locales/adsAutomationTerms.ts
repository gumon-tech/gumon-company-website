import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import type { LegalDocumentCopy } from "@/lib/legalDocument";
import { adsAutomationPaths } from "@/lib/adsAutomationLegal";

// Terms for client businesses. Spending-limit rules follow the system's ChangeGuard as built:
// automatic changes only reduce spend, new campaigns start paused, limits rise only with written approval.

export const adsAutomationTermsContent: Partial<Record<Locale, LegalDocumentCopy>> = {
  en: {
    title: "Gumon Ads Automation Terms of Service",
    description: "Terms for businesses that hire Gumon Technology to manage their online advertising with Gumon Ads Automation.",
    crumb: "Ads Automation Terms",
    kicker: "Gumon Ads Automation",
    heading: "Gumon Ads Automation Terms of Service",
    updatedLabel: "Last updated",
    updatedAt: "November 25, 2026",
    intro:
      "These terms apply to businesses that hire Gumon Technology to manage their online advertising with Gumon Ads Automation. A business accepts them by accepting Gumon's quote or by granting Gumon access to its advertising account. If your business has a signed service agreement with Gumon, that agreement takes priority where it differs from these terms. In these terms, \"in writing\" includes email and approval through the messaging system Gumon uses with the client.",
    sections: [
      {
        title: "1. The service",
        items: [
          `${companyInfoByLocale.en.legalName} (\"Gumon\") manages advertising campaigns in the client's own advertising accounts, starting with Google Ads.`,
          "The service creates, changes and pauses campaigns, reads spend and results, sends bookings and paid visits back to Google to measure results, sends alerts and approval requests to the client's staff, and provides regular reports.",
          "Gumon decides and carries out changes within the limits in section 3. The client decides its budget and approves its spending limits.",
        ],
      },
      {
        title: "2. Your accounts and access",
        items: [
          "The client owns its Google Ads account, its campaigns and its data.",
          "The client gives Gumon access by adding Gumon to its Google Ads account or by authorising Gumon Ads Automation with Google. Gumon uses that access only for the client's own account.",
          "The client can remove Gumon's access at any time. Gumon cannot manage the campaigns after access is removed.",
          "The client keeps its Google Ads account, billing details and payment method in good standing.",
        ],
      },
      {
        title: "3. Budgets, spending limits and approvals",
        items: [
          "The client approves in writing a daily and a monthly spending limit for each advertising account.",
          "The system will not raise budgets or bids above those limits. Raising a limit requires the client's written approval.",
          "Automatic rules may only reduce spending or pause ads. The one exception is restoring settings the client had already approved, after a planned closure such as a holiday.",
          "New campaigns start paused, and are switched on only within the approved limits.",
          "The system pauses campaigns when spending reaches the approved limits and alerts the client. Google may spend up to twice the daily budget on a single day, and because Google reports spend with a delay, actual spend can briefly exceed a limit.",
          "Google charges all advertising costs to the client's account, including any such short overspend, unless the overspend was caused by Gumon breaching these terms.",
        ],
      },
      {
        title: "4. Advertising costs and fees",
        items: [
          "Google charges advertising costs to the client's Google Ads account under Google's terms.",
          "Gumon's fees for the service are set out in Gumon's quote or service agreement.",
        ],
      },
      {
        title: "5. Client responsibilities",
        items: [
          "Keep business information accurate and up to date, including prices, opening hours and planned closures, because the system uses it to pause or adjust ads.",
          "Make sure the business, its offers and its ads comply with Google's advertising policies and with the law where it advertises.",
          "Show a privacy notice and a consent banner on its website that cover measuring ads and sharing conversion data with Google, and collect the consent the law requires.",
          "Respond to approval requests and alerts within a reasonable time.",
        ],
      },
      {
        title: "6. Results",
        body:
          "Advertising results depend on many things outside Gumon's control, including competition, Google's systems and policy decisions, and demand. Gumon does not guarantee a level of results, rankings, bookings or revenue. Google may reject ads, limit accounts or change its products, and Gumon is not responsible for those decisions.",
      },
      {
        title: "7. Data protection",
        items: [
          "How data is handled is explained in the Gumon Ads Automation privacy notice.",
          "Gumon and the client are joint controllers of the personal data used for measuring ads. The client handles the privacy notice and consent on its own website. Gumon handles requests sent to data@gumon.io.",
          "Gumon uses the client's data only to provide the service to that client, never for another client and never for Gumon's own advertising.",
          "Gumon Ads Automation's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        links: [
          { href: adsAutomationPaths.privacy, label: "Gumon Ads Automation privacy notice" },
          { href: adsAutomationPaths.dataDeletion, label: "Data deletion instructions" },
        ],
      },
      {
        title: "8. Confidentiality",
        body:
          "Each party keeps the other's confidential information private and uses it only for the service. Gumon does not share one client's performance data with any other client.",
      },
      {
        title: "9. Suspension and ending the service",
        items: [
          "Either party may end the service as set out in the service agreement, or, if there is none, by giving 30 days' written notice.",
          "Gumon may pause campaigns or suspend the service straight away where needed for security, to prevent spending above the approved limits, to comply with Google's policies or the law, or if fees remain unpaid after written notice and a reasonable time to pay.",
          "Either party may end the service straight away by written notice if the other party seriously breaches these terms and does not fix the breach within a reasonable time after being asked.",
          "Fees for work already done remain payable when the service ends.",
          "When the service ends, Gumon stops making changes, pauses the campaigns it manages if the client asks, and deletes the client's data as described in the privacy notice. The campaigns remain in the client's own account.",
        ],
      },
      {
        title: "10. Liability",
        items: [
          "Gumon is not liable for indirect or consequential loss, or for lost profit, revenue or business, arising from the service.",
          "Gumon is not liable for actions or decisions of Google, or for problems caused by information the client provided that was inaccurate or out of date.",
          "Nothing in these terms limits any liability that cannot be limited by law.",
        ],
      },
      {
        title: "11. Changes to these terms",
        body:
          "Gumon may update these terms. Gumon will tell clients about material changes at least 30 days before they take effect, and a client may end the service without penalty before then. The date at the top of this page shows the latest version.",
      },
      {
        title: "12. Governing law",
        body:
          "These terms are governed by the laws of Thailand, unless the service agreement says otherwise.",
      },
      {
        title: "13. Contact",
        items: [
          `Legal entity: ${companyInfoByLocale.en.legalName}, registration no. ${companyInfoByLocale.en.registrationNumber}`,
          `Address: ${companyInfoByLocale.en.address}`,
          "General contact: contact@gumon.io",
          "Privacy and data deletion: data@gumon.io",
        ],
      },
    ],
  },
  th: {
    title: "ข้อกำหนดการให้บริการของ Gumon Ads Automation",
    description: "ข้อกำหนดสำหรับธุรกิจที่จ้าง Gumon Technology จัดการโฆษณาออนไลน์ด้วย Gumon Ads Automation",
    crumb: "ข้อกำหนด Ads Automation",
    kicker: "Gumon Ads Automation",
    heading: "ข้อกำหนดการให้บริการของ Gumon Ads Automation",
    updatedLabel: "ปรับปรุงล่าสุด",
    updatedAt: "25 พฤศจิกายน 2026",
    intro:
      "ข้อกำหนดนี้ใช้กับธุรกิจที่จ้าง Gumon Technology จัดการโฆษณาออนไลน์ด้วย Gumon Ads Automation ธุรกิจตกลงตามข้อกำหนดนี้เมื่อตอบรับใบเสนอราคาของ Gumon หรือให้สิทธิ์ Gumon เข้าถึงบัญชีโฆษณาของตน หากธุรกิจของคุณมีสัญญาบริการที่ลงนามกับ Gumon สัญญานั้นมีผลเหนือกว่าในส่วนที่ต่างจากข้อกำหนดนี้ ในข้อกำหนดนี้ \"เป็นลายลักษณ์อักษร\" รวมถึงอีเมลและการอนุมัติผ่านระบบรับส่งข้อความที่ Gumon ใช้กับลูกค้า",
    sections: [
      {
        title: "1. บริการ",
        items: [
          `${companyInfoByLocale.th.legalName} (\"Gumon\") จัดการแคมเปญโฆษณาในบัญชีโฆษณาของลูกค้าเอง โดยเริ่มจาก Google Ads`,
          "บริการนี้สร้าง แก้ไข และหยุดแคมเปญชั่วคราว อ่านค่าใช้จ่ายและผลลัพธ์ ส่งการจองและการมาใช้บริการที่ชำระเงินแล้วกลับไปยัง Google เพื่อวัดผล ส่งการแจ้งเตือนและคำขออนุมัติถึงพนักงานของลูกค้า และจัดทำรายงานเป็นประจำ",
          "Gumon เป็นผู้ตัดสินใจและดำเนินการเปลี่ยนแปลงภายในขอบเขตในข้อ 3 ลูกค้าเป็นผู้กำหนดงบประมาณและอนุมัติเพดานค่าใช้จ่าย",
        ],
      },
      {
        title: "2. บัญชีและสิทธิ์การเข้าถึงของคุณ",
        items: [
          "ลูกค้าเป็นเจ้าของบัญชี Google Ads แคมเปญ และข้อมูลของตน",
          "ลูกค้าให้สิทธิ์ Gumon โดยเพิ่ม Gumon ในบัญชี Google Ads ของตน หรืออนุญาต Gumon Ads Automation ผ่าน Google Gumon ใช้สิทธิ์นั้นกับบัญชีของลูกค้าเองเท่านั้น",
          "ลูกค้านำสิทธิ์ของ Gumon ออกได้ทุกเมื่อ หลังนำสิทธิ์ออกแล้ว Gumon จะจัดการแคมเปญไม่ได้",
          "ลูกค้าดูแลให้บัญชี Google Ads ข้อมูลการเรียกเก็บเงิน และวิธีชำระเงินอยู่ในสถานะใช้งานได้",
        ],
      },
      {
        title: "3. งบประมาณ เพดานค่าใช้จ่าย และการอนุมัติ",
        items: [
          "ลูกค้าอนุมัติเพดานค่าใช้จ่ายรายวันและรายเดือนของแต่ละบัญชีโฆษณาเป็นลายลักษณ์อักษร",
          "ระบบจะไม่เพิ่มงบประมาณหรือราคาประมูลเกินเพดานนั้น การขึ้นเพดานต้องได้รับอนุมัติเป็นลายลักษณ์อักษรจากลูกค้า",
          "กฎอัตโนมัติทำได้เพียงลดค่าใช้จ่ายหรือหยุดโฆษณาชั่วคราว ข้อยกเว้นเดียวคือการคืนค่าที่ลูกค้าเคยอนุมัติไว้แล้วหลังช่วงปิดทำการที่วางแผนไว้ เช่น วันหยุด",
          "แคมเปญใหม่เริ่มต้นในสถานะหยุดชั่วคราว และจะเปิดใช้ภายในเพดานที่อนุมัติเท่านั้น",
          "ระบบหยุดแคมเปญชั่วคราวเมื่อค่าใช้จ่ายถึงเพดานที่อนุมัติและแจ้งเตือนลูกค้า Google อาจใช้จ่ายได้ถึงสองเท่าของงบรายวันในวันเดียว และเนื่องจาก Google รายงานค่าใช้จ่ายล่าช้า ค่าใช้จ่ายจริงอาจเกินเพดานได้ชั่วครู่",
          "Google เรียกเก็บค่าโฆษณาทั้งหมดจากบัญชีของลูกค้า รวมถึงส่วนที่เกินชั่วครู่ดังกล่าว เว้นแต่ส่วนที่เกินเกิดจากการที่ Gumon ผิดข้อกำหนดนี้",
        ],
      },
      {
        title: "4. ค่าโฆษณาและค่าบริการ",
        items: [
          "Google เรียกเก็บค่าโฆษณาจากบัญชี Google Ads ของลูกค้าตามข้อกำหนดของ Google",
          "ค่าบริการของ Gumon เป็นไปตามใบเสนอราคาหรือสัญญาบริการของ Gumon",
        ],
      },
      {
        title: "5. หน้าที่ของลูกค้า",
        items: [
          "ดูแลข้อมูลธุรกิจให้ถูกต้องและเป็นปัจจุบัน รวมถึงราคา เวลาเปิดทำการ และวันปิดที่วางแผนไว้ เพราะระบบใช้ข้อมูลเหล่านี้หยุดหรือปรับโฆษณา",
          "ดูแลให้ธุรกิจ ข้อเสนอ และโฆษณาเป็นไปตามนโยบายโฆษณาของ Google และกฎหมายในพื้นที่ที่ลงโฆษณา",
          "แสดงประกาศความเป็นส่วนตัวและแบนเนอร์ขอความยินยอมบนเว็บไซต์ ที่ครอบคลุมการวัดผลโฆษณาและการส่งข้อมูล conversion ให้ Google และขอความยินยอมตามที่กฎหมายกำหนด",
          "ตอบคำขออนุมัติและการแจ้งเตือนภายในเวลาที่เหมาะสม",
        ],
      },
      {
        title: "6. ผลลัพธ์",
        body:
          "ผลของโฆษณาขึ้นอยู่กับหลายปัจจัยที่อยู่นอกการควบคุมของ Gumon เช่น การแข่งขัน ระบบและการตัดสินใจด้านนโยบายของ Google และความต้องการของตลาด Gumon ไม่รับประกันระดับผลลัพธ์ อันดับ จำนวนการจอง หรือรายได้ Google อาจปฏิเสธโฆษณา จำกัดบัญชี หรือเปลี่ยนแปลงผลิตภัณฑ์ และ Gumon ไม่รับผิดชอบต่อการตัดสินใจเหล่านั้น",
      },
      {
        title: "7. การคุ้มครองข้อมูล",
        items: [
          "การจัดการข้อมูลอธิบายไว้ในประกาศความเป็นส่วนตัวของ Gumon Ads Automation",
          "Gumon และลูกค้าเป็นผู้ควบคุมข้อมูลร่วมกันสำหรับข้อมูลส่วนบุคคลที่ใช้วัดผลโฆษณา ลูกค้าดูแลประกาศความเป็นส่วนตัวและการขอความยินยอมบนเว็บไซต์ของตน Gumon ดูแลคำขอที่ส่งถึง data@gumon.io",
          "Gumon ใช้ข้อมูลของลูกค้าเพื่อให้บริการแก่ลูกค้ารายนั้นเท่านั้น ไม่ใช้กับลูกค้ารายอื่น และไม่ใช้เพื่อการโฆษณาของ Gumon เอง",
          "การใช้และการส่งต่อข้อมูลที่ได้รับจาก Google API ของ Gumon Ads Automation จะเป็นไปตาม Google API Services User Data Policy รวมถึงข้อกำหนด Limited Use",
        ],
        links: [
          { href: adsAutomationPaths.privacy, label: "ประกาศความเป็นส่วนตัวของ Gumon Ads Automation" },
          { href: adsAutomationPaths.dataDeletion, label: "วิธีขอลบข้อมูล" },
        ],
      },
      {
        title: "8. การรักษาความลับ",
        body:
          "แต่ละฝ่ายรักษาข้อมูลลับของอีกฝ่ายและใช้เพื่อการให้บริการเท่านั้น Gumon ไม่เปิดเผยข้อมูลผลโฆษณาของลูกค้ารายหนึ่งให้ลูกค้ารายอื่น",
      },
      {
        title: "9. การระงับและการสิ้นสุดบริการ",
        items: [
          "แต่ละฝ่ายเลิกบริการได้ตามสัญญาบริการ หรือหากไม่มีสัญญา โดยแจ้งเป็นลายลักษณ์อักษรล่วงหน้า 30 วัน",
          "Gumon อาจหยุดแคมเปญชั่วคราวหรือระงับบริการได้ทันทีเมื่อจำเป็นเพื่อความปลอดภัย เพื่อป้องกันค่าใช้จ่ายเกินเพดานที่อนุมัติ เพื่อให้เป็นไปตามนโยบายของ Google หรือกฎหมาย หรือเมื่อค่าบริการค้างชำระหลังได้รับแจ้งเป็นลายลักษณ์อักษรและพ้นระยะเวลาชำระที่เหมาะสม",
          "แต่ละฝ่ายเลิกบริการได้ทันทีโดยแจ้งเป็นลายลักษณ์อักษร หากอีกฝ่ายผิดข้อกำหนดนี้อย่างร้ายแรงและไม่แก้ไขภายในเวลาที่เหมาะสมหลังได้รับแจ้ง",
          "ค่าบริการสำหรับงานที่ทำไปแล้วยังต้องชำระเมื่อบริการสิ้นสุด",
          "เมื่อบริการสิ้นสุด Gumon หยุดการเปลี่ยนแปลง หยุดแคมเปญที่จัดการอยู่ชั่วคราวหากลูกค้าขอ และลบข้อมูลของลูกค้าตามที่อธิบายในประกาศความเป็นส่วนตัว แคมเปญยังคงอยู่ในบัญชีของลูกค้าเอง",
        ],
      },
      {
        title: "10. ความรับผิด",
        items: [
          "Gumon ไม่รับผิดต่อความเสียหายทางอ้อมหรือความเสียหายต่อเนื่อง หรือการสูญเสียกำไร รายได้ หรือธุรกิจ ที่เกิดจากบริการ",
          "Gumon ไม่รับผิดต่อการกระทำหรือการตัดสินใจของ Google หรือปัญหาที่เกิดจากข้อมูลที่ลูกค้าให้ซึ่งไม่ถูกต้องหรือไม่เป็นปัจจุบัน",
          "ข้อกำหนดนี้ไม่จำกัดความรับผิดใดที่กฎหมายไม่อนุญาตให้จำกัด",
        ],
      },
      {
        title: "11. การเปลี่ยนแปลงข้อกำหนด",
        body:
          "Gumon อาจปรับปรุงข้อกำหนดนี้ และจะแจ้งลูกค้าเกี่ยวกับการเปลี่ยนแปลงที่สำคัญล่วงหน้าอย่างน้อย 30 วันก่อนมีผล และลูกค้าเลิกบริการได้โดยไม่มีค่าปรับก่อนวันนั้น วันที่ด้านบนของหน้านี้แสดงฉบับล่าสุด",
      },
      {
        title: "12. กฎหมายที่ใช้บังคับ",
        body: "ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย เว้นแต่สัญญาบริการกำหนดไว้เป็นอย่างอื่น",
      },
      {
        title: "13. ติดต่อ",
        items: [
          `นิติบุคคล: ${companyInfoByLocale.th.legalName} เลขทะเบียน ${companyInfoByLocale.th.registrationNumber}`,
          `ที่อยู่: ${companyInfoByLocale.th.address}`,
          "ติดต่อทั่วไป: contact@gumon.io",
          "ความเป็นส่วนตัวและการลบข้อมูล: data@gumon.io",
        ],
      },
    ],
  },
};
