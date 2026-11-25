import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";
import type { Section as PrivacySection } from "@/content/locales/privacy";

import { adsAutomationPaths, googleUserDataPolicyUrl } from "@/lib/adsAutomationLegal";

type Section = PrivacySection & { links?: { href: string; label: string }[] };

// "Gumon Ads Automation" block on /privacy/. Google OAuth brand verification for the Cloud project
// gumon-ads-automation reviews this page, so the URL must stay /privacy/ and the Limited Use sentence
// must stay word for word. Facts follow the system as built (KADS architecture); change them only with it.

export type PrivacyAdsAutomationCopy = {
  heading: string;
  updated: string;
  intro: string;
  documentsLabel: string;
  documents: { href: string; label: string }[];
  sections: Section[];
};

export const privacyAdsAutomationContent: Partial<Record<Locale, PrivacyAdsAutomationCopy>> = {
  en: {
    heading: "Gumon Ads Automation",
    updated: "Section added: November 25, 2026",
    intro:
      "This section applies to Gumon Ads Automation, the system Gumon Technology uses to manage online advertising for client businesses that hire Gumon. It explains what data the system accesses through Google APIs, and how that data is used, stored, shared and deleted. The sections above cover the gumon.io website.",
    documentsLabel: "Full documents for Gumon Ads Automation:",
    documents: [
      { href: adsAutomationPaths.privacy, label: "Privacy notice" },
      { href: adsAutomationPaths.dataDeletion, label: "Data deletion instructions" },
      { href: adsAutomationPaths.terms, label: "Terms of service" },
    ],
    sections: [
      {
        title: "Who is responsible",
        body: `${companyInfoByLocale.en.legalName} (registration no. ${companyInfoByLocale.en.registrationNumber}) is the data controller together with each client business whose advertising it manages. The client business decides to advertise and to measure the results, and Gumon operates the system and its connection to Google for that client.`,
      },
      {
        title: "Google data the system accesses",
        items: [
          "Google Ads API: the client's own Google Ads account, namely its campaigns and their settings, budgets, and ad performance such as impressions, clicks, cost and conversions. Gumon uses this access to create, change and pause the client's campaigns and to read spend and results.",
          "Google Data Manager API: Gumon sends offline conversions to the client's Google Ads account. Each conversion contains only the Google ad click identifier (gclid), the time of the conversion, the amount paid where there is one, and consent signals.",
          "No names, email addresses, phone numbers or message content are sent to Google or stored by Gumon Ads Automation.",
          "A conversion is sent only when the person who clicked the ad has given consent for advertising data to be used.",
        ],
      },
      {
        title: "How the data is used",
        items: [
          "Only to manage advertising and measure results for the client businesses that hire Gumon.",
          "It is never sold, never used for Gumon's own advertising, and never used to train AI or machine-learning models.",
          "One client's data is never used for another client.",
          "Gumon Ads Automation's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        ],
        links: [{ href: googleUserDataPolicyUrl, label: "Google API Services User Data Policy" }],
      },
      {
        title: "Storage and retention",
        items: [
          "Data is stored on servers managed by Gumon and kept separate for each client: each client has its own database and access credentials, and the system for one client cannot read another client's data.",
          "Click identifiers are deleted as soon as the conversion has been sent successfully, and in any case no later than 90 days after the ad click.",
          "If the person who clicked the ad never sends the business a message, the click identifier is deleted after 8 days and never reaches Google.",
          "After a conversion is sent, only a technical record (a reference number, its status and the date) is kept, for no more than 90 days.",
          "Campaign settings, performance data read from Google Ads, and the reports built from them are kept only while Gumon manages the client's advertising, and are deleted when the client ends the service or asks for deletion, unless the law requires them to be kept longer.",
          "Access credentials are kept in restricted secret storage, connections to Google are encrypted in transit, and only Gumon's technical staff can access the system.",
        ],
      },
      {
        title: "Sharing",
        body:
          "Data is shared only with Google, to run the client's ads and to record conversions in the client's own Google Ads account. The cloud hosting provider that runs Gumon's servers stores it on Gumon's behalf and only on Gumon's instructions. Apart from the client business itself, which receives reports about its own advertising, Gumon does not sell, rent or transfer this data to anyone else, except where the law requires it.",
      },
      {
        title: "Your rights and contact",
        items: [
          "Depending on where you live, you can ask to access or delete data about you, object to its use, or withdraw consent. Because the system holds no names or contact details, please include the business whose ad you clicked and the date of your visit so we can find the record.",
          "Send requests to the client business or to data@gumon.io. We generally acknowledge requests within 72 hours and complete them within legal timelines.",
          "Client businesses can withdraw Gumon's access at any time by removing Gumon's access in their Google Ads account, or, where access was granted by signing in with Google, by revoking Gumon Ads Automation at https://myaccount.google.com/permissions.",
          `Contact: data@gumon.io · ${companyInfoByLocale.en.legalName}, ${companyInfoByLocale.en.address}`,
        ],
      },
    ],
  },
  th: {
    heading: "Gumon Ads Automation",
    updated: "เพิ่มส่วนนี้เมื่อ: 25 พฤศจิกายน 2026",
    intro:
      "ส่วนนี้ใช้กับ Gumon Ads Automation ซึ่งเป็นระบบที่ Gumon Technology ใช้จัดการโฆษณาออนไลน์ให้ธุรกิจลูกค้าที่จ้าง Gumon อธิบายว่าระบบเข้าถึงข้อมูลใดผ่าน Google API และข้อมูลนั้นถูกใช้ จัดเก็บ เปิดเผย และลบอย่างไร ส่วนก่อนหน้านี้ครอบคลุมเว็บไซต์ gumon.io",
    documentsLabel: "เอกสารฉบับเต็มของ Gumon Ads Automation:",
    documents: [
      { href: adsAutomationPaths.privacy, label: "ประกาศความเป็นส่วนตัว" },
      { href: adsAutomationPaths.dataDeletion, label: "วิธีขอลบข้อมูล" },
      { href: adsAutomationPaths.terms, label: "ข้อกำหนดการให้บริการ" },
    ],
    sections: [
      {
        title: "ผู้รับผิดชอบ",
        body: `${companyInfoByLocale.th.legalName} (เลขทะเบียน ${companyInfoByLocale.th.registrationNumber}) เป็นผู้ควบคุมข้อมูลส่วนบุคคลร่วมกับธุรกิจลูกค้าแต่ละรายที่ Gumon จัดการโฆษณาให้ ธุรกิจลูกค้าเป็นผู้ตัดสินใจลงโฆษณาและวัดผล ส่วน Gumon เป็นผู้ดูแลระบบและการเชื่อมต่อกับ Google ให้ลูกค้ารายนั้น`,
      },
      {
        title: "ข้อมูลจาก Google ที่ระบบเข้าถึง",
        items: [
          "Google Ads API: บัญชี Google Ads ของลูกค้าเอง ได้แก่ แคมเปญและการตั้งค่า งบประมาณ และผลของโฆษณา เช่น จำนวนการแสดงผล การคลิก ค่าใช้จ่าย และ conversion Gumon ใช้สิทธิ์นี้เพื่อสร้าง แก้ไข และหยุดแคมเปญของลูกค้า และอ่านค่าใช้จ่ายและผลลัพธ์",
          "Google Data Manager API: Gumon ส่ง conversion แบบออฟไลน์เข้าบัญชี Google Ads ของลูกค้า แต่ละรายการมีเพียงรหัสการคลิกโฆษณาของ Google (gclid) เวลาที่เกิด conversion ยอดที่ชำระถ้ามี และสัญญาณความยินยอม",
          "ไม่มีการส่งชื่อ อีเมล หมายเลขโทรศัพท์ หรือเนื้อหาข้อความไปยัง Google และ Gumon Ads Automation ไม่เก็บข้อมูลเหล่านี้",
          "conversion จะถูกส่งเฉพาะเมื่อผู้ที่คลิกโฆษณาให้ความยินยอมให้ใช้ข้อมูลเพื่อการโฆษณาแล้วเท่านั้น",
        ],
      },
      {
        title: "การใช้ข้อมูล",
        items: [
          "ใช้เพื่อจัดการโฆษณาและวัดผลให้ธุรกิจลูกค้าที่จ้าง Gumon เท่านั้น",
          "ไม่ขาย ไม่ใช้เพื่อการโฆษณาของ Gumon เอง และไม่ใช้ฝึกโมเดล AI หรือ machine learning",
          "ไม่นำข้อมูลของลูกค้ารายหนึ่งไปใช้กับลูกค้ารายอื่น",
          "การใช้และการส่งต่อข้อมูลที่ได้รับจาก Google API ของ Gumon Ads Automation จะเป็นไปตาม Google API Services User Data Policy รวมถึงข้อกำหนด Limited Use",
        ],
        links: [{ href: googleUserDataPolicyUrl, label: "Google API Services User Data Policy" }],
      },
      {
        title: "การจัดเก็บและระยะเวลาการเก็บรักษา",
        items: [
          "ข้อมูลจัดเก็บบนเซิร์ฟเวอร์ที่ Gumon ดูแล และแยกกันสำหรับลูกค้าแต่ละราย โดยลูกค้าแต่ละรายมีฐานข้อมูลและข้อมูลรับรองการเข้าถึงของตนเอง และระบบของลูกค้ารายหนึ่งอ่านข้อมูลของลูกค้ารายอื่นไม่ได้",
          "รหัสการคลิกจะถูกลบทันทีที่ส่ง conversion สำเร็จ และไม่ว่ากรณีใดไม่เกิน 90 วันหลังการคลิกโฆษณา",
          "หากผู้ที่คลิกโฆษณาไม่ได้ส่งข้อความหาธุรกิจเลย รหัสการคลิกจะถูกลบหลัง 8 วัน และไม่ถูกส่งไปยัง Google",
          "หลังส่ง conversion แล้ว ระบบเก็บไว้เพียงบันทึกทางเทคนิค (เลขอ้างอิง สถานะ และวันที่) ไม่เกิน 90 วัน",
          "การตั้งค่าแคมเปญ ข้อมูลผลโฆษณาที่อ่านจาก Google Ads และรายงานที่สร้างจากข้อมูลเหล่านั้น จะเก็บไว้เฉพาะช่วงที่ Gumon จัดการโฆษณาให้ลูกค้า และจะถูกลบเมื่อลูกค้าเลิกใช้บริการหรือขอให้ลบ เว้นแต่กฎหมายกำหนดให้ต้องเก็บนานกว่านั้น",
          "ข้อมูลรับรองการเข้าถึงเก็บในที่เก็บความลับที่จำกัดสิทธิ์ การเชื่อมต่อกับ Google เข้ารหัสระหว่างการรับส่ง และเข้าถึงระบบได้เฉพาะเจ้าหน้าที่เทคนิคของ Gumon",
        ],
      },
      {
        title: "การเปิดเผยข้อมูล",
        body:
          "ข้อมูลถูกเปิดเผยให้ Google เท่านั้น เพื่อให้โฆษณาของลูกค้าทำงานและบันทึก conversion ในบัญชี Google Ads ของลูกค้าเอง ผู้ให้บริการคลาวด์ที่ให้บริการเซิร์ฟเวอร์ของ Gumon จัดเก็บข้อมูลแทน Gumon และตามคำสั่งของ Gumon เท่านั้น นอกจากธุรกิจลูกค้าเองซึ่งได้รับรายงานเกี่ยวกับโฆษณาของตน Gumon ไม่ขาย ให้เช่า หรือส่งต่อข้อมูลนี้ให้ผู้อื่น เว้นแต่กฎหมายกำหนด",
      },
      {
        title: "สิทธิของคุณและช่องทางติดต่อ",
        items: [
          "ขึ้นอยู่กับกฎหมายในที่ที่คุณอาศัยอยู่ คุณสามารถขอเข้าถึงหรือลบข้อมูลเกี่ยวกับคุณ คัดค้านการใช้ข้อมูล หรือถอนความยินยอมได้ เนื่องจากระบบไม่เก็บชื่อหรือข้อมูลติดต่อ โปรดระบุธุรกิจที่คุณคลิกโฆษณาและวันที่เข้าชม เพื่อให้เราค้นหาบันทึกได้",
          "ส่งคำขอถึงธุรกิจลูกค้า หรือที่ data@gumon.io โดยทั่วไปเราตอบรับคำขอภายใน 72 ชั่วโมง และดำเนินการให้เสร็จภายในระยะเวลาที่กฎหมายกำหนด",
          "ธุรกิจลูกค้าถอนสิทธิ์การเข้าถึงของ Gumon ได้ทุกเมื่อ โดยนำสิทธิ์ของ Gumon ออกในบัญชี Google Ads ของตน หรือหากให้สิทธิ์ผ่านการลงชื่อเข้าใช้ด้วย Google ให้เพิกถอน Gumon Ads Automation ที่ https://myaccount.google.com/permissions",
          `ติดต่อ: data@gumon.io · ${companyInfoByLocale.th.legalName} ${companyInfoByLocale.th.address}`,
        ],
      },
    ],
  },
};
