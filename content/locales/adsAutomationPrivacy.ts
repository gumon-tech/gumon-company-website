import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import type { LegalDocumentCopy } from "@/lib/legalDocument";
import { adsAutomationPaths, googleUserDataPolicyUrl } from "@/lib/adsAutomationLegal";

// Privacy notice of the Gumon Ads Automation app (Google OAuth brand verification, Cloud project
// gumon-ads-automation). Facts follow the system as built (KADS architecture, KBOT event contract):
// gclid only, click id deleted on send or 90 days, unclaimed clicks 8 days, per-person forget within
// 72 hours with a 13-month block. Change them only with the system. Keep the Limited Use sentence word for word.

export const adsAutomationPrivacyContent: Partial<Record<Locale, LegalDocumentCopy>> = {
  en: {
    title: "Gumon Ads Automation Privacy Notice",
    description: "How Gumon Ads Automation handles data from Google APIs and from client businesses when Gumon manages their online advertising.",
    crumb: "Ads Automation Privacy",
    kicker: "Gumon Ads Automation",
    heading: "Gumon Ads Automation Privacy Notice",
    updatedLabel: "Last updated",
    updatedAt: "November 25, 2026",
    intro:
      "Gumon Ads Automation is the system Gumon Technology uses to manage online advertising for client businesses that hire Gumon. It manages campaigns in the client's own Google Ads account, and reports bookings and paid visits back to Google so that the client can measure the results of its ads. This notice explains what data the system accesses, how that data is used, stored, shared and deleted, and how you can use your rights. It applies to the client businesses that use the service and to people who click their ads.",
    sections: [
      {
        title: "1. Who is responsible",
        items: [
          `${companyInfoByLocale.en.legalName} (registration no. ${companyInfoByLocale.en.registrationNumber}, Thailand) is the data controller together with each client business whose advertising it manages. The client business decides to advertise and to measure the results, and Gumon operates the system and its connection to Google for that client.`,
          "Gumon and each client business are joint controllers. The client business tells people who visit its website or contact it how their data is used for advertising, and collects any consent that is required. Gumon handles requests sent to data@gumon.io and passes requests for the client to it.",
        ],
      },
      {
        title: "2. Data accessed through Google APIs",
        items: [
          "Google Ads API: the client's own Google Ads account, namely its campaigns and their settings, budgets, and ad performance such as impressions, clicks, cost and conversions. Gumon uses this access to create, change and pause the client's campaigns and to read spend and results.",
          "Google Data Manager API: Gumon sends offline conversions to the client's Google Ads account and receives back only the result of each upload. Each conversion sent contains only the Google ad click identifier (gclid), the time of the conversion, the amount paid where there is one, and consent signals. No names, email addresses or phone numbers are sent.",
          "The system uses only the Google Ads API and Data Manager API permissions. It does not access Gmail, Google Drive, contacts or any other Google service.",
        ],
      },
      {
        title: "3. Google API scopes requested",
        items: [
          "https://www.googleapis.com/auth/adwords (Google Ads API): to view and manage the client's Google Ads campaigns, budgets, bids and reports.",
          "https://www.googleapis.com/auth/datamanager (Google Data Manager API): to send offline conversions to the client's Google Ads account.",
          "The app requests no other scopes. It does not request access to a user's Google profile, email address or other Google account data.",
        ],
      },
      {
        title: "4. Data received from the client business",
        items: [
          "When someone clicks one of the client's ads and arrives at the client's website or chat link, the client's website or messaging system records the Google click identifier (gclid) and the time of the click. It is passed to this system only if that person later books or pays.",
          "When someone who clicked one of the client's ads makes a booking or pays for a visit, the client's messaging system sends the system a conversion record: a reference number, the type of event (booking made or visit paid), the amount paid for a paid visit, the date and time, the Google ad click identifier (gclid) and the person's consent status.",
          "A one-way coded reference to the conversation, used only to find and delete that person's records on request.",
          "Booking and revenue totals for reports, in which small numbers are suppressed so that no individual can be singled out.",
          "The system does not receive names, email addresses, phone numbers, message content or the services a person chose.",
          "Alerts and approval requests for the client's staff are delivered through the client's messaging system. Gumon Ads Automation itself does not store staff phone numbers or email addresses.",
        ],
      },
      {
        title: "5. How the data is used",
        items: [
          "Data is used only to manage advertising and measure results for the client businesses that hire Gumon, namely:",
          "To create, change and pause the client's campaigns within the spending limits the client has approved.",
          "To read spend and results, and to build reports for the client about its own advertising.",
          "To send conversions to Google so that the client can measure and improve its ads.",
          "To send the client's staff alerts and approval requests, such as when spending reaches a limit.",
          "To keep the service secure and to keep a record of every change made to the client's campaigns and of who approved it.",
          "The data is never sold, never used for Gumon's own advertising, never used to train AI or machine-learning models, and one client's data is never used for another client.",
          "Data received from Google APIs is not used for targeted or personalised advertising, not transferred to data brokers or information resellers, and not used to determine creditworthiness or for lending.",
          "Gumon staff read Google Ads data only to provide or support the service for that client, to investigate security problems or misuse, or where the law requires it.",
          "Gumon Ads Automation's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        links: [{ href: googleUserDataPolicyUrl, label: "Google API Services User Data Policy" }],
      },
      {
        title: "6. Legal bases",
        items: [
          "Sending a conversion to Google relies on the consent the person gave on the client's website for advertising data to be used. A conversion is not sent without that consent.",
          "Managing the client's campaigns and reports relies on the contract with the client and on the legitimate interests of Gumon and the client in running and measuring advertising.",
          "Keeping records required by law relies on legal obligations.",
        ],
      },
      {
        title: "7. Storage and security",
        items: [
          "Data is stored on servers managed by Gumon and kept separate for each client: each client has its own database and access credentials, and the system for one client cannot read another client's data.",
          "Access credentials are kept in restricted secret storage, connections to Google are encrypted in transit, and only Gumon's technical staff can access the system.",
          "Every change made through Gumon Ads Automation to a client's campaigns is recorded before it is made.",
        ],
      },
      {
        title: "8. Retention",
        items: [
          "Click identifiers are deleted as soon as the conversion has been sent successfully, and in any case no later than 90 days after the ad click.",
          "If the person who clicked the ad never sends the business a message, the click identifier is deleted after 8 days and never reaches Google.",
          "After a conversion is sent, only a technical record (a reference number, its status and the date) is kept, for no more than 90 days after the event.",
          "If a person asks for deletion, their conversion records are deleted within 72 hours of the request reaching the system, and new records linked to them are blocked for 13 months using a one-way code.",
          "Campaign settings, performance data read from Google Ads, reports and change records are kept only while Gumon manages the client's advertising, and are deleted within one month after the client ends the service or asks for deletion, unless the law requires them to be kept longer. When a client removes Gumon's access, the access credentials stored for that client are deleted within the same period.",
          "Conversions already sent to Google are kept by Google in the client's Google Ads account under Google's own terms. Gumon cannot withdraw them.",
        ],
      },
      {
        title: "9. Sharing and international transfers",
        items: [
          "Data is shared with Google only to run the client's ads and to record conversions in the client's own Google Ads account.",
          "The cloud hosting provider that runs Gumon's servers stores the data on Gumon's behalf and only on Gumon's instructions.",
          "Alerts, approval requests and reports for the client's own staff, which can contain spend and performance figures, are delivered through the client's messaging system (WhatsApp Business Platform, provided by Meta) and by email.",
          "Apart from the client business itself, which receives reports about its own advertising, Gumon does not sell, rent or transfer this data to anyone else, except where the law requires it.",
          "Gumon is based in Thailand, and Google operates in many countries, including the United States. Where UK GDPR or EU GDPR applies and data is transferred to a country without an adequacy decision, the transfer must rely on a safeguard recognised by those laws. You can write to data@gumon.io to ask which safeguard applies.",
        ],
      },
      {
        title: "10. Your rights",
        items: [
          "Depending on where you live, you can ask to access, correct, delete, restrict or object to the use of data about you, receive a copy of it, or withdraw consent.",
          "If you clicked a client's ad, send requests to that business or to data@gumon.io. Because the system holds no names or contact details, please include the business whose ad you clicked and the date of your visit so we can find the records. If we cannot match the records from these details, we will ask you to make the request through the business's chat.",
          "Gumon accesses a client's Google Ads account through a separate user created for that client only (a Google service account), which is added, by the client or by Gumon with the client's permission, as a user in the client's own Google Ads account with Standard access. Clients do not sign in to Gumon Ads Automation with their Google account. A client business can withdraw Gumon's access at any time by removing that user from its Google Ads account (Admin > Access and security > Users).",
          "We generally acknowledge requests within 72 hours and complete them within the time the law sets, which is one month under UK GDPR and EU GDPR.",
          "You can also complain to a data protection authority: in the United Kingdom, the Information Commissioner's Office (ico.org.uk); in Thailand, the Personal Data Protection Committee; in the European Economic Area, the authority in your country.",
        ],
        links: [
          { href: adsAutomationPaths.dataDeletion, label: "How to ask for data to be deleted" },
          { href: "mailto:data@gumon.io", label: "data@gumon.io" },
        ],
      },
      {
        title: "11. Changes to this notice",
        body:
          "We will update this notice, and tell client businesses, before the system starts using Google data in a new way, requests new scopes, or adds new advertising platforms. The date at the top of this page shows the latest version.",
      },
      {
        title: "12. Contact",
        items: [
          "Privacy and data rights: data@gumon.io",
          `${companyInfoByLocale.en.legalName}, ${companyInfoByLocale.en.address}`,
        ],
      },
      {
        title: "Related pages",
        links: [
          { href: adsAutomationPaths.dataDeletion, label: "Gumon Ads Automation data deletion instructions" },
          { href: adsAutomationPaths.terms, label: "Gumon Ads Automation terms of service" },
          { href: "/privacy", label: "Privacy policy for the gumon.io website" },
        ],
      },
    ],
  },
  th: {
    title: "ประกาศความเป็นส่วนตัวของ Gumon Ads Automation",
    description: "วิธีที่ Gumon Ads Automation จัดการข้อมูลจาก Google API และจากธุรกิจลูกค้า เมื่อ Gumon จัดการโฆษณาออนไลน์ให้",
    crumb: "ความเป็นส่วนตัว Ads Automation",
    kicker: "Gumon Ads Automation",
    heading: "ประกาศความเป็นส่วนตัวของ Gumon Ads Automation",
    updatedLabel: "ปรับปรุงล่าสุด",
    updatedAt: "25 พฤศจิกายน 2026",
    intro:
      "Gumon Ads Automation คือระบบที่ Gumon Technology ใช้จัดการโฆษณาออนไลน์ให้ธุรกิจลูกค้าที่จ้าง Gumon ระบบจัดการแคมเปญในบัญชี Google Ads ของลูกค้าเอง และรายงานการจองและการมาใช้บริการที่ชำระเงินแล้วกลับไปยัง Google เพื่อให้ลูกค้าวัดผลโฆษณาได้ ประกาศนี้อธิบายว่าระบบเข้าถึงข้อมูลใด ข้อมูลนั้นถูกใช้ จัดเก็บ เปิดเผย และลบอย่างไร และคุณใช้สิทธิของคุณได้อย่างไร ประกาศนี้ใช้กับธุรกิจลูกค้าที่ใช้บริการ และผู้ที่คลิกโฆษณาของธุรกิจเหล่านั้น",
    sections: [
      {
        title: "1. ผู้รับผิดชอบ",
        items: [
          `${companyInfoByLocale.th.legalName} (เลขทะเบียน ${companyInfoByLocale.th.registrationNumber} ประเทศไทย) เป็นผู้ควบคุมข้อมูลส่วนบุคคลร่วมกับธุรกิจลูกค้าแต่ละรายที่ Gumon จัดการโฆษณาให้ ธุรกิจลูกค้าเป็นผู้ตัดสินใจลงโฆษณาและวัดผล ส่วน Gumon เป็นผู้ดูแลระบบและการเชื่อมต่อกับ Google ให้ลูกค้ารายนั้น`,
          "Gumon และธุรกิจลูกค้าแต่ละรายเป็นผู้ควบคุมข้อมูลร่วมกัน ธุรกิจลูกค้าแจ้งผู้ที่เข้าเว็บไซต์หรือติดต่อธุรกิจว่าข้อมูลของเขาถูกใช้เพื่อการโฆษณาอย่างไร และขอความยินยอมในกรณีที่กฎหมายกำหนด Gumon ดูแลคำขอที่ส่งถึง data@gumon.io และส่งต่อคำขอที่เป็นของลูกค้าให้ลูกค้า",
        ],
      },
      {
        title: "2. ข้อมูลที่เข้าถึงผ่าน Google API",
        items: [
          "Google Ads API: บัญชี Google Ads ของลูกค้าเอง ได้แก่ แคมเปญและการตั้งค่า งบประมาณ และผลของโฆษณา เช่น จำนวนการแสดงผล การคลิก ค่าใช้จ่าย และ conversion Gumon ใช้สิทธิ์นี้เพื่อสร้าง แก้ไข และหยุดแคมเปญของลูกค้าชั่วคราวชั่วคราว และอ่านค่าใช้จ่ายและผลลัพธ์",
          "Google Data Manager API: Gumon ส่ง conversion แบบออฟไลน์เข้าบัญชี Google Ads ของลูกค้า และได้รับกลับมาเพียงผลของการส่งแต่ละครั้ง conversion แต่ละรายการที่ส่งมีเพียงรหัสการคลิกโฆษณาของ Google (gclid) เวลาที่เกิด conversion ยอดที่ชำระถ้ามี และสัญญาณความยินยอม ไม่มีการส่งชื่อ อีเมล หรือหมายเลขโทรศัพท์",
          "ระบบใช้สิทธิ์ของ Google Ads API และ Data Manager API เท่านั้น ไม่เข้าถึง Gmail, Google Drive, รายชื่อผู้ติดต่อ หรือบริการอื่นของ Google",
        ],
      },
      {
        title: "3. ขอบเขตสิทธิ์ (scope) ของ Google API ที่ขอ",
        items: [
          "https://www.googleapis.com/auth/adwords (Google Ads API): เพื่อดูและจัดการแคมเปญ งบประมาณ ราคาประมูล และรายงานในบัญชี Google Ads ของลูกค้า",
          "https://www.googleapis.com/auth/datamanager (Google Data Manager API): เพื่อส่ง conversion แบบออฟไลน์เข้าบัญชี Google Ads ของลูกค้า",
          "แอปไม่ขอ scope อื่น ไม่ขอเข้าถึงโปรไฟล์ Google อีเมล หรือข้อมูลบัญชี Google อื่นของผู้ใช้",
        ],
      },
      {
        title: "4. ข้อมูลที่ได้รับจากธุรกิจลูกค้า",
        items: [
          "เมื่อมีผู้คลิกโฆษณาของลูกค้าและเข้ามายังเว็บไซต์หรือลิงก์แชทของลูกค้า เว็บไซต์หรือระบบรับส่งข้อความของลูกค้าจะบันทึกรหัสการคลิกของ Google (gclid) และเวลาที่คลิก และส่งต่อมายังระบบนี้เฉพาะเมื่อบุคคลนั้นจองหรือชำระเงินในภายหลัง",
          "เมื่อผู้ที่คลิกโฆษณาของลูกค้าจองหรือชำระเงินค่าบริการ ระบบรับส่งข้อความของลูกค้าจะส่งบันทึก conversion มายังระบบ ได้แก่ เลขอ้างอิง ชนิดของเหตุการณ์ (มีการจอง หรือชำระเงินค่าบริการแล้ว) ยอดที่ชำระสำหรับการมาใช้บริการ วันและเวลา รหัสการคลิกโฆษณาของ Google (gclid) และสถานะความยินยอมของบุคคลนั้น",
          "รหัสอ้างอิงบทสนทนาที่แปลงทางเดียว ใช้เพื่อค้นหาและลบบันทึกของบุคคลนั้นเมื่อมีคำขอเท่านั้น",
          "ยอดรวมการจองและรายได้สำหรับรายงาน โดยซ่อนตัวเลขที่น้อยเกินไปเพื่อไม่ให้ระบุตัวบุคคลได้",
          "ระบบไม่ได้รับชื่อ อีเมล หมายเลขโทรศัพท์ เนื้อหาข้อความ หรือบริการที่บุคคลเลือก",
          "การแจ้งเตือนและคำขออนุมัติถึงพนักงานของลูกค้าส่งผ่านระบบรับส่งข้อความของลูกค้า Gumon Ads Automation เองไม่เก็บหมายเลขโทรศัพท์หรืออีเมลของพนักงาน",
        ],
      },
      {
        title: "5. การใช้ข้อมูล",
        items: [
          "ข้อมูลถูกใช้เพื่อจัดการโฆษณาและวัดผลให้ธุรกิจลูกค้าที่จ้าง Gumon เท่านั้น ได้แก่",
          "เพื่อสร้าง แก้ไข และหยุดแคมเปญของลูกค้าชั่วคราว ภายในเพดานค่าใช้จ่ายที่ลูกค้าอนุมัติ",
          "เพื่ออ่านค่าใช้จ่ายและผลลัพธ์ และจัดทำรายงานเกี่ยวกับโฆษณาของลูกค้าเองให้ลูกค้า",
          "เพื่อส่ง conversion ไปยัง Google ให้ลูกค้าวัดผลและปรับปรุงโฆษณาได้",
          "เพื่อส่งการแจ้งเตือนและคำขออนุมัติถึงพนักงานของลูกค้า เช่น เมื่อค่าใช้จ่ายถึงเพดาน",
          "เพื่อรักษาความปลอดภัยของบริการ และเก็บบันทึกทุกการเปลี่ยนแปลงในแคมเปญของลูกค้าและผู้อนุมัติ",
          "ไม่ขายข้อมูล ไม่ใช้เพื่อการโฆษณาของ Gumon เอง ไม่ใช้ฝึกโมเดล AI หรือ machine learning และไม่นำข้อมูลของลูกค้ารายหนึ่งไปใช้กับลูกค้ารายอื่น",
          "ข้อมูลที่ได้รับจาก Google API ไม่ถูกใช้เพื่อโฆษณาแบบเจาะกลุ่มหรือเฉพาะบุคคล ไม่ถูกส่งต่อให้นายหน้าข้อมูลหรือผู้ขายต่อข้อมูล และไม่ถูกใช้ประเมินความน่าเชื่อถือทางการเงินหรือเพื่อการให้สินเชื่อ",
          "เจ้าหน้าที่ของ Gumon อ่านข้อมูล Google Ads เฉพาะเพื่อให้บริการหรือสนับสนุนบริการแก่ลูกค้ารายนั้น เพื่อตรวจสอบปัญหาความปลอดภัยหรือการใช้งานในทางที่ผิด หรือเมื่อกฎหมายกำหนด",
          "การใช้และการส่งต่อข้อมูลที่ได้รับจาก Google API ของ Gumon Ads Automation จะเป็นไปตาม Google API Services User Data Policy รวมถึงข้อกำหนด Limited Use",
        ],
        links: [{ href: googleUserDataPolicyUrl, label: "Google API Services User Data Policy" }],
      },
      {
        title: "6. ฐานทางกฎหมาย",
        items: [
          "การส่ง conversion ไปยัง Google อาศัยความยินยอมให้ใช้ข้อมูลเพื่อการโฆษณาที่บุคคลนั้นให้ไว้บนเว็บไซต์ของลูกค้า หากไม่มีความยินยอมดังกล่าว จะไม่มีการส่ง conversion",
          "การจัดการแคมเปญและรายงานของลูกค้าอาศัยสัญญากับลูกค้า และประโยชน์โดยชอบด้วยกฎหมายของ Gumon และลูกค้าในการทำและวัดผลโฆษณา",
          "การเก็บบันทึกที่กฎหมายกำหนดอาศัยหน้าที่ตามกฎหมาย",
        ],
      },
      {
        title: "7. การจัดเก็บและความปลอดภัย",
        items: [
          "ข้อมูลจัดเก็บบนเซิร์ฟเวอร์ที่ Gumon ดูแล และแยกกันสำหรับลูกค้าแต่ละราย โดยลูกค้าแต่ละรายมีฐานข้อมูลและข้อมูลรับรองการเข้าถึงของตนเอง และระบบของลูกค้ารายหนึ่งอ่านข้อมูลของลูกค้ารายอื่นไม่ได้",
          "ข้อมูลรับรองการเข้าถึงเก็บในที่เก็บความลับที่จำกัดสิทธิ์ การเชื่อมต่อกับ Google เข้ารหัสระหว่างการรับส่ง และเข้าถึงระบบได้เฉพาะเจ้าหน้าที่เทคนิคของ Gumon",
          "ทุกการเปลี่ยนแปลงในแคมเปญของลูกค้าที่ทำผ่าน Gumon Ads Automation ถูกบันทึกก่อนดำเนินการ",
        ],
      },
      {
        title: "8. ระยะเวลาการเก็บรักษา",
        items: [
          "รหัสการคลิกจะถูกลบทันทีที่ส่ง conversion สำเร็จ และไม่ว่ากรณีใดไม่เกิน 90 วันหลังการคลิกโฆษณา",
          "หากผู้ที่คลิกโฆษณาไม่ได้ส่งข้อความหาธุรกิจเลย รหัสการคลิกจะถูกลบหลัง 8 วัน และไม่ถูกส่งไปยัง Google",
          "หลังส่ง conversion แล้ว ระบบเก็บไว้เพียงบันทึกทางเทคนิค (เลขอ้างอิง สถานะ และวันที่) ไม่เกิน 90 วันหลังเหตุการณ์",
          "หากบุคคลขอให้ลบ บันทึก conversion ของบุคคลนั้นจะถูกลบภายใน 72 ชั่วโมงหลังคำขอถึงระบบ และบันทึกใหม่ที่เชื่อมโยงกับบุคคลนั้นจะถูกบล็อกเป็นเวลา 13 เดือนด้วยรหัสทางเดียว",
          "การตั้งค่าแคมเปญ ข้อมูลผลโฆษณาที่อ่านจาก Google Ads รายงาน และบันทึกการเปลี่ยนแปลง จะเก็บไว้เฉพาะช่วงที่ Gumon จัดการโฆษณาให้ลูกค้า และจะถูกลบภายในหนึ่งเดือนหลังลูกค้าเลิกใช้บริการหรือขอให้ลบ เว้นแต่กฎหมายกำหนดให้ต้องเก็บนานกว่านั้น เมื่อลูกค้านำสิทธิ์ของ Gumon ออก ข้อมูลรับรองการเข้าถึงที่เก็บไว้สำหรับลูกค้ารายนั้นจะถูกลบภายในระยะเวลาเดียวกัน",
          "conversion ที่ส่งไปยัง Google แล้ว Google เก็บไว้ในบัญชี Google Ads ของลูกค้าตามข้อกำหนดของ Google เอง Gumon ถอนคืนไม่ได้",
        ],
      },
      {
        title: "9. การเปิดเผยและการส่งข้อมูลไปต่างประเทศ",
        items: [
          "ข้อมูลถูกเปิดเผยให้ Google เท่านั้น เพื่อให้โฆษณาของลูกค้าทำงานและบันทึก conversion ในบัญชี Google Ads ของลูกค้าเอง",
          "ผู้ให้บริการคลาวด์ที่ให้บริการเซิร์ฟเวอร์ของ Gumon จัดเก็บข้อมูลแทน Gumon และตามคำสั่งของ Gumon เท่านั้น",
          "การแจ้งเตือน คำขออนุมัติ และรายงานถึงพนักงานของลูกค้าเอง ซึ่งอาจมีตัวเลขค่าใช้จ่ายและผลโฆษณา ส่งผ่านระบบรับส่งข้อความของลูกค้า (WhatsApp Business Platform ให้บริการโดย Meta) และทางอีเมล",
          "นอกจากธุรกิจลูกค้าเองซึ่งได้รับรายงานเกี่ยวกับโฆษณาของตน Gumon ไม่ขาย ให้เช่า หรือส่งต่อข้อมูลนี้ให้ผู้อื่น เว้นแต่กฎหมายกำหนด",
          "Gumon ตั้งอยู่ในประเทศไทย และ Google ดำเนินงานในหลายประเทศ รวมถึงสหรัฐอเมริกา ในกรณีที่ UK GDPR หรือ EU GDPR ใช้บังคับและมีการส่งข้อมูลไปยังประเทศที่ไม่มีคำวินิจฉัยว่ามีมาตรฐานการคุ้มครองที่เพียงพอ การส่งข้อมูลต้องอาศัยมาตรการคุ้มครองที่กฎหมายเหล่านั้นรับรอง คุณสอบถามได้ที่ data@gumon.io ว่าใช้มาตรการใด",
        ],
      },
      {
        title: "10. สิทธิของคุณ",
        items: [
          "ขึ้นอยู่กับกฎหมายในที่ที่คุณอาศัยอยู่ คุณสามารถขอเข้าถึง แก้ไข ลบ ระงับ หรือคัดค้านการใช้ข้อมูลเกี่ยวกับคุณ ขอรับสำเนาข้อมูล หรือถอนความยินยอมได้",
          "หากคุณคลิกโฆษณาของลูกค้า ส่งคำขอถึงธุรกิจนั้นหรือที่ data@gumon.io เนื่องจากระบบไม่เก็บชื่อหรือข้อมูลติดต่อ โปรดระบุธุรกิจที่คุณคลิกโฆษณาและวันที่เข้าชม เพื่อให้เราค้นหาบันทึกได้ หากจับคู่บันทึกจากข้อมูลนี้ไม่ได้ เราจะขอให้คุณส่งคำขอผ่านแชทของธุรกิจนั้น",
          "Gumon เข้าบัญชี Google Ads ของลูกค้าผ่านผู้ใช้แยกที่สร้างไว้สำหรับลูกค้ารายนั้นเท่านั้น (service account ของ Google) ซึ่งลูกค้า หรือ Gumon โดยได้รับอนุญาตจากลูกค้า เพิ่มเข้าบัญชี Google Ads ของลูกค้าในระดับสิทธิ์ Standard ลูกค้าไม่ได้ลงชื่อเข้าใช้ Gumon Ads Automation ด้วยบัญชี Google ของตน ธุรกิจลูกค้าถอนสิทธิ์ของ Gumon ได้ทุกเมื่อโดยนำผู้ใช้นั้นออกจากบัญชี Google Ads ของตน (เมนู \"ผู้ดูแลระบบ\" (Admin) > \"การเข้าถึงและความปลอดภัย\" (Access and security) > \"ผู้ใช้\" (Users))",
          "โดยทั่วไปเราตอบรับคำขอภายใน 72 ชั่วโมง และดำเนินการให้เสร็จภายในระยะเวลาที่กฎหมายกำหนด ซึ่งภายใต้ UK GDPR และ EU GDPR คือหนึ่งเดือน",
          "คุณยังมีสิทธิร้องเรียนต่อหน่วยงานกำกับดูแลด้านการคุ้มครองข้อมูล ได้แก่ ในสหราชอาณาจักร Information Commissioner's Office (ico.org.uk) ในประเทศไทย สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล และในเขตเศรษฐกิจยุโรป หน่วยงานกำกับดูแลในประเทศของคุณ",
        ],
        links: [
          { href: adsAutomationPaths.dataDeletion, label: "วิธีขอให้ลบข้อมูล" },
          { href: "mailto:data@gumon.io", label: "data@gumon.io" },
        ],
      },
      {
        title: "11. การเปลี่ยนแปลงประกาศนี้",
        body:
          "เราจะปรับปรุงประกาศนี้และแจ้งธุรกิจลูกค้า ก่อนที่ระบบจะเริ่มใช้ข้อมูลจาก Google ในรูปแบบใหม่ ขอ scope ใหม่ หรือเพิ่มแพลตฟอร์มโฆษณาใหม่ วันที่ด้านบนของหน้านี้แสดงฉบับล่าสุด",
      },
      {
        title: "12. ติดต่อ",
        items: [
          "ความเป็นส่วนตัวและสิทธิในข้อมูล: data@gumon.io",
          `${companyInfoByLocale.th.legalName} ${companyInfoByLocale.th.address}`,
        ],
      },
      {
        title: "หน้าที่เกี่ยวข้อง",
        links: [
          { href: adsAutomationPaths.dataDeletion, label: "วิธีขอลบข้อมูลจาก Gumon Ads Automation" },
          { href: adsAutomationPaths.terms, label: "ข้อกำหนดการให้บริการของ Gumon Ads Automation" },
          { href: "/privacy", label: "นโยบายความเป็นส่วนตัวของเว็บไซต์ gumon.io" },
        ],
      },
    ],
  },
};
