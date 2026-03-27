import { companyInfoByLocale } from "@/lib/companyInfo";
import type { Locale } from "@/lib/i18n";

export type Section = {
  title: string;
  body?: string;
  items?: string[];
};

export type PrivacyCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  updatedAt: string;
  intro: string;
  sections: Section[];
};

export const privacyMeta: Partial<Record<Locale, { title: string; description: string }>> = {
  th: {
    title: "Privacy Policy",
    description: "นโยบายความเป็นส่วนตัวของเว็บไซต์ Gumon Technology สำหรับผู้ใช้งานสาธารณะ",
  },
  en: {
    title: "Privacy Policy",
    description: "Privacy Policy for Gumon Technology public website users.",
  },
  "zh-CN": {
    title: "隐私政策",
    description: "Gumon Technology 公共网站用户隐私政策。",
  },
  "zh-TW": {
    title: "隱私權政策",
    description: "Gumon Technology 公開網站使用者的隱私權政策。",
  },
  ja: {
    title: "プライバシーポリシー",
    description: "Gumon Technology 公開サイト向けのプライバシーポリシー。",
  },
  ko: {
    title: "개인정보 처리방침",
    description: "Gumon Technology 공개 웹사이트 이용자를 위한 개인정보 처리방침입니다.",
  },
  vi: {
    title: "Chinh sach quyen rieng tu",
    description: "Chinh sach quyen rieng tu danh cho nguoi dung trang web cong khai cua Gumon Technology.",
  },
  id: {
    title: "Kebijakan Privasi",
    description: "Kebijakan privasi untuk pengguna situs web publik Gumon Technology.",
  },
  ms: {
    title: "Dasar Privasi",
    description: "Dasar privasi untuk pengguna laman web awam Gumon Technology.",
  },
  hi: {
    title: "Privacy Policy",
    description: "Gumon Technology ki public website use karne walon ke liye privacy policy.",
  },
  es: {
    title: "Política de Privacidad",
    description: "Política de privacidad para usuarios del sitio público de Gumon Technology.",
  },
  he: {
    title: "מדיניות פרטיות",
    description: "מדיניות הפרטיות למשתמשי האתר הציבורי של Gumon Technology.",
  },
  fr: {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité pour les utilisateurs du site public de Gumon Technology.",
  },
  de: {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung für Nutzer der öffentlichen Website von Gumon Technology.",
  },
  "pt-BR": {
    title: "Política de Privacidade",
    description: "Política de privacidade para usuários do site público da Gumon Technology.",
  },
  it: {
    title: "Informativa sulla Privacy",
    description: "Informativa sulla privacy per gli utenti del sito pubblico di Gumon Technology.",
  },
  nl: {
    title: "Privacybeleid",
    description: "Privacybeleid voor gebruikers van de openbare website van Gumon Technology.",
  },
  pl: {
    title: "Polityka Prywatności",
    description: "Polityka prywatności dla użytkowników publicznej strony Gumon Technology.",
  },
  tr: {
    title: "Gizlilik Politikasi",
    description: "Gumon Technology genel web sitesi kullanicilari icin gizlilik politikasi.",
  },
  ru: {
    title: "Политика конфиденциальности",
    description: "Политика конфиденциальности для пользователей публичного сайта Gumon Technology.",
  },
  uk: {
    title: "Політика конфіденційності",
    description: "Політика конфіденційності для користувачів публічного сайту Gumon Technology.",
  },
  sv: {
    title: "Integritetspolicy",
    description: "Integritetspolicy för användare av Gumon Technologys publika webbplats.",
  },
  ar: {
    title: "سياسة الخصوصية",
    description: "سياسة الخصوصية لمستخدمي الموقع العام لشركة Gumon Technology.",
  },
};

export const privacyContent: Partial<Record<Locale, PrivacyCopy>> = {
  th: {
    title: "Privacy Policy",
    description: "นโยบายความเป็นส่วนตัวของเว็บไซต์ Gumon Technology สำหรับผู้ใช้งานสาธารณะ",
    crumb: "Privacy Policy",
    kicker: "Privacy Policy",
    heading: "นโยบายความเป็นส่วนตัว",
    updatedAt: "February 13, 2026",
    intro:
      "เว็บไซต์ Gumon Technology ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งาน นโยบายนี้อธิบายว่าข้อมูลใดที่เราเก็บ วิธีใช้ข้อมูล ระยะเวลาการเก็บรักษา และสิทธิของคุณเมื่อใช้เว็บไซต์สาธารณะของเรา",
    sections: [
      {
        title: "1. ขอบเขตนโยบาย",
        items: [
          "นโยบายนี้ครอบคลุมเฉพาะการใช้งานเว็บไซต์สาธารณะของ Gumon และหน้าที่เกี่ยวข้อง",
          "ไม่ครอบคลุมบริการภายนอกที่เชื่อมลิงก์ออกไป เช่นเว็บไซต์เอกสารหรือโซเชียลมีเดีย",
          `ผู้ควบคุมข้อมูลส่วนบุคคลตามนโยบายนี้คือ ${companyInfoByLocale.th.legalName} (เลขทะเบียน ${companyInfoByLocale.th.registrationNumber})`,
        ],
      },
      {
        title: "2. ประเภทข้อมูลที่เราเก็บ",
        items: [
          "ข้อมูลที่คุณกรอกเอง: ชื่อ อีเมล เบอร์โทร หัวข้อ และรายละเอียดที่ส่งผ่านฟอร์มติดต่อ",
          "ข้อมูลเชิงเทคนิค: URL ที่เข้าชม เวลาเข้าใช้งาน หน้าอ้างอิง (referrer) และประเภทอุปกรณ์",
          "ข้อมูลคุกกี้และข้อมูลเพื่อการวัดผลการใช้งานหรือการตลาด (เมื่อได้รับความยินยอม) เช่นข้อมูลจาก Google Analytics หรือ Google Tag Manager",
        ],
      },
      {
        title: "3. วัตถุประสงค์การใช้ข้อมูล",
        items: [
          "ติดต่อกลับและประเมินความต้องการเบื้องต้นของผู้ติดต่อผ่านหน้า Contact",
          "วิเคราะห์ประสิทธิภาพช่องทางการตลาดและพฤติกรรมการใช้งานเว็บไซต์ในภาพรวม",
          "ดูแลความปลอดภัยของระบบ ป้องกันการใช้งานที่ผิดปกติ และรักษาคุณภาพบริการ",
          "วางแผนปรับปรุงบริการและเนื้อหาที่เกี่ยวข้องกับแพลตฟอร์ม Gumon",
        ],
      },
      {
        title: "4. ฐานทางกฎหมายในการประมวลผลข้อมูล",
        items: [
          "ความยินยอมของผู้ใช้งานในกรณีที่ต้องขอความยินยอมก่อน",
          "ความจำเป็นเพื่อให้บริการตามที่ผู้ใช้งานร้องขอผ่านช่องทางติดต่อ",
          "ประโยชน์โดยชอบด้วยกฎหมายในการรักษาความปลอดภัยและพัฒนาคุณภาพบริการ",
        ],
      },
      {
        title: "5. การเปิดเผยข้อมูลต่อบุคคลภายนอก",
        items: [
          "เราไม่ขายข้อมูลส่วนบุคคลให้บุคคลภายนอก",
          "ปัจจุบันผู้ควบคุมข้อมูลคือ Gumon Technology เพียงรายเดียว",
          "ณ วันที่ประกาศนโยบายนี้ เรายังไม่มีการส่งต่อข้อมูลติดต่อไปยังบริษัทในเครือหรือผู้ประมวลผลข้อมูลภายนอกเพื่อกิจกรรมเชิงธุรกิจ",
          "หากในอนาคตมีการใช้งานผู้ให้บริการภายนอกหรือมีการแบ่งปันข้อมูลในกลุ่มบริษัท เราจะปรับปรุงนโยบายนี้ก่อนเริ่มใช้งานจริง",
          "การเปิดเผยข้อมูลจะทำเฉพาะเท่าที่จำเป็นตามวัตถุประสงค์ที่ระบุไว้หรือเมื่อกฎหมายกำหนด",
        ],
      },
      {
        title: "6. การโอนข้อมูลข้ามประเทศ",
        body:
          "ปัจจุบัน Gumon ยังไม่มีการโอนข้อมูลส่วนบุคคลออกไปยังนิติบุคคลอื่นเป็นกิจวัตร อย่างไรก็ตาม เว็บไซต์ของเราเข้าถึงได้จากหลายประเทศ และในอนาคตหากมีความจำเป็นต้องโอนข้อมูลข้ามประเทศ เราจะใช้มาตรการคุ้มครองที่เหมาะสมและปรับปรุงนโยบายนี้ให้ชัดเจนก่อนดำเนินการ",
      },
      {
        title: "7. ระยะเวลาเก็บรักษาข้อมูล",
        items: [
          "ข้อมูลจากแบบฟอร์มติดต่อและอีเมลประสานงาน: โดยทั่วไปไม่เกิน 24 เดือนหลังการติดต่อครั้งล่าสุด",
          "ข้อมูลบันทึกด้านความปลอดภัยของระบบ: โดยทั่วไป 6–12 เดือน",
          "ข้อมูลคุกกี้และการวัดผล: ตามระยะเวลาของเครื่องมือที่ใช้งานและตามตัวเลือกความยินยอมของผู้ใช้",
          "เมื่อครบวัตถุประสงค์แล้ว เราจะลบหรือทำให้ไม่สามารถระบุตัวตนได้",
          "หากต้องการลบข้อมูลก่อนกำหนด สามารถส่งคำขอได้ผ่านอีเมล data@gumon.io",
        ],
      },
      {
        title: "8. ความมั่นคงปลอดภัยของข้อมูล",
        body:
          "เราใช้มาตรการด้านเทคนิคและการบริหารจัดการที่เหมาะสม เพื่อป้องกันการเข้าถึง การเปิดเผย หรือการแก้ไขข้อมูลโดยไม่ได้รับอนุญาต",
      },
      {
        title: "9. สิทธิของเจ้าของข้อมูล",
        items: [
          "คุณสามารถขอเข้าถึง แก้ไข ลบ คัดค้าน หรือจำกัดการใช้ข้อมูลที่เกี่ยวข้องกับคุณ ตามสิทธิที่กฎหมายกำหนด",
          "ช่องทางสำหรับส่งคำขอสิทธิข้อมูล: data@gumon.io (แนะนำระบุหัวข้ออีเมลขึ้นต้นว่า [DSAR])",
          "โดยทั่วไปเราจะตอบรับคำขอเบื้องต้นภายใน 72 ชั่วโมง และดำเนินการให้แล้วเสร็จภายในกรอบเวลาที่กฎหมายกำหนด",
        ],
      },
      {
        title: "10. ข้อมูลเด็กและข้อมูลอ่อนไหว",
        body:
          "เว็บไซต์นี้ไม่ได้ออกแบบมาเพื่อเก็บข้อมูลส่วนบุคคลของผู้เยาว์โดยเฉพาะ และไม่ได้มีวัตถุประสงค์ในการเก็บข้อมูลอ่อนไหวโดยตรง หากพบว่ามีการส่งข้อมูลดังกล่าวเข้ามาโดยไม่ตั้งใจ กรุณาติดต่อเราเพื่อดำเนินการลบ",
      },
      {
        title: "11. การร้องเรียนต่อหน่วยงานกำกับดูแล",
        body:
          "หากคุณเห็นว่าเราไม่ปฏิบัติตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลที่เกี่ยวข้อง คุณมีสิทธิร้องเรียนต่อหน่วยงานกำกับดูแลในเขตอำนาจที่เกี่ยวข้องกับคุณ เช่น สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคลของประเทศไทย",
      },
      {
        title: "12. การเปลี่ยนแปลงนโยบาย",
        body:
          "เราอาจปรับปรุงนโยบายนี้เป็นครั้งคราว โดยจะแสดงวันที่ปรับปรุงล่าสุดบนหน้านี้ เพื่อให้ผู้ใช้งานตรวจสอบได้อย่างโปร่งใส",
      },
      {
        title: "13. ช่องทางติดต่อ",
        items: [
          "คำถามด้านนโยบายและสิทธิข้อมูลส่วนบุคคล: data@gumon.io",
          "ทีมผู้ดูแลข้อมูล: Data Governance & Privacy Office",
          `ชื่อและที่อยู่สำหรับการติดต่อ: ${companyInfoByLocale.th.legalName}, ${companyInfoByLocale.th.address}`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    description: "Privacy Policy for Gumon Technology public website users.",
    crumb: "Privacy Policy",
    kicker: "Privacy Policy",
    heading: "Privacy Policy",
    updatedAt: "February 13, 2026",
    intro:
      "Gumon Technology values your privacy. This policy explains what data we collect, how we use it, retention periods, and your rights when using our public website.",
    sections: [
      {
        title: "1. Scope",
        items: [
          "This policy applies to Gumon public website usage and related pages.",
          "It does not cover third-party services linked from this website, such as external documentation or social media.",
          `The data controller under this policy is ${companyInfoByLocale.en.legalName} (registration no. ${companyInfoByLocale.en.registrationNumber}).`,
        ],
      },
      {
        title: "2. Data We Collect",
        items: [
          "Information you provide directly: name, email, phone, topic, and details sent through contact forms.",
          "Technical data: visited URLs, access time, referrer, and device type.",
          "Cookie and analytics/marketing data (where consent is required), including tools such as Google Analytics or Google Tag Manager.",
        ],
      },
      {
        title: "3. Purposes of Processing",
        items: [
          "To respond to inquiries and assess initial project requirements from Contact submissions.",
          "To analyze website usage and channel performance at an aggregate level.",
          "To protect platform security, detect abnormal usage, and maintain service quality.",
          "To improve services and content related to the Gumon platform.",
        ],
      },
      {
        title: "4. Legal Bases",
        items: [
          "User consent where consent is required.",
          "Necessity to provide requested information or support through contact channels.",
          "Legitimate interests in security and service quality improvement.",
        ],
      },
      {
        title: "5. Data Sharing",
        items: [
          "We do not sell personal data.",
          "At present, Gumon Technology is the sole data controller for this website.",
          "As of this policy date, we do not routinely transfer contact data to affiliates or external processors for business operations.",
          "If external processors or group sharing are introduced in the future, we will update this policy before activation.",
          "Any disclosure is limited to what is necessary for stated purposes or required by law.",
        ],
      },
      {
        title: "6. Cross-border Data Transfers",
        body:
          "Gumon does not currently perform routine international transfers of personal data to other entities. Since the website is globally accessible, if cross-border transfer becomes necessary in the future, we will apply appropriate safeguards and update this policy in advance.",
      },
      {
        title: "7. Retention Periods",
        items: [
          "Contact form and coordination email data: typically up to 24 months after the latest contact.",
          "Security logs: typically 6-12 months.",
          "Cookie and analytics data: based on tool settings and user consent choices.",
          "After retention purposes are fulfilled, data is deleted or anonymized.",
          "You may request earlier deletion via data@gumon.io.",
        ],
      },
      {
        title: "8. Data Security",
        body:
          "We apply appropriate technical and organizational safeguards to protect against unauthorized access, disclosure, or modification.",
      },
      {
        title: "9. Data Subject Rights",
        items: [
          "You may request access, correction, deletion, objection, or restriction of processing in accordance with applicable law.",
          "Submit requests to data@gumon.io (recommended email subject prefix: [DSAR]).",
          "We generally acknowledge requests within 72 hours and complete handling within legal timelines.",
        ],
      },
      {
        title: "10. Children and Sensitive Data",
        body:
          "This website is not designed to intentionally collect children's personal data and is not intended for direct sensitive data collection. If such data is submitted unintentionally, please contact us for removal.",
      },
      {
        title: "11. Regulatory Complaints",
        body:
          "If you believe we do not comply with applicable data protection laws, you may lodge a complaint with the relevant supervisory authority in your jurisdiction.",
      },
      {
        title: "12. Policy Updates",
        body:
          "We may update this policy from time to time and will display the latest update date on this page.",
      },
      {
        title: "13. Contact",
        items: [
          "Privacy and data rights inquiries: data@gumon.io",
          "Responsible team: Data Governance & Privacy Office",
          `Contact name and address: ${companyInfoByLocale.en.legalName}, ${companyInfoByLocale.en.address}`,
        ],
      },
    ],
  },
  "zh-CN": {
    title: "隐私政策",
    description: "Gumon Technology 公共网站用户隐私政策。",
    crumb: "隐私政策",
    kicker: "隐私政策",
    heading: "隐私政策",
    updatedAt: "2026年2月13日",
    intro:
      "Gumon Technology 重视您的隐私。本政策说明我们会收集哪些数据、如何使用这些数据、保存多久，以及您在使用我们公开网站时享有的权利。",
    sections: [
      {
        title: "1. 适用范围",
        items: [
          "本政策适用于 Gumon 公共网站及相关页面的使用。",
          "本政策不适用于从本网站跳转至第三方服务的情况，例如外部文档网站或社交媒体。",
          `本政策项下的个人数据控制者为 ${companyInfoByLocale["zh-CN"].legalName}（注册号：${companyInfoByLocale["zh-CN"].registrationNumber}）。`,
        ],
      },
      {
        title: "2. 我们收集的数据",
        items: [
          "您主动提供的信息：通过联系表单提交的姓名、电子邮件、电话号码、主题及详细内容。",
          "技术数据：访问的 URL、访问时间、来源页面（referrer）以及设备类型。",
          "Cookie 及分析/营销数据（在需要取得同意时），包括 Google Analytics 或 Google Tag Manager 等工具。",
        ],
      },
      {
        title: "3. 处理目的",
        items: [
          "回复咨询，并评估通过 Contact 页面提交的初步需求。",
          "分析网站整体使用情况和渠道表现。",
          "保障平台安全、识别异常使用并维持服务质量。",
          "改进与 Gumon 平台相关的服务与内容。",
        ],
      },
      {
        title: "4. 处理依据",
        items: [
          "在需要征得同意的情况下，以您的同意为依据。",
          "为回应您通过联系渠道提出的请求所必需。",
          "基于我们在安全与服务质量改进方面的合法利益。",
        ],
      },
      {
        title: "5. 数据共享",
        items: [
          "我们不会出售个人数据。",
          "目前，Gumon Technology 是本网站的唯一数据控制者。",
          "截至本政策发布日期，我们不会将联系数据常规性转交给关联公司或外部处理方用于业务运营。",
          "若未来引入外部处理方或集团内部共享，我们会在启用前更新本政策。",
          "任何披露都仅限于实现上述目的所必需的范围，或法律要求的范围。",
        ],
      },
      {
        title: "6. 跨境数据传输",
        body:
          "Gumon 目前不会将个人数据定期跨境传输给其他实体。由于本网站可被全球访问，如未来确有跨境传输需要，我们会采取适当保障措施，并提前更新本政策。",
      },
      {
        title: "7. 保存期限",
        items: [
          "联系表单及协调邮件数据：通常自最近一次联系起最多保存 24 个月。",
          "安全日志：通常保存 6 至 12 个月。",
          "Cookie 及分析数据：取决于工具设置以及您的同意选择。",
          "在保存目的达成后，相关数据将被删除或匿名化。",
          "您也可以通过 data@gumon.io 申请提前删除。",
        ],
      },
      {
        title: "8. 数据安全",
        body:
          "我们采取适当的技术和组织措施，防止未经授权的访问、披露或修改。",
      },
      {
        title: "9. 数据主体权利",
        items: [
          "根据适用法律，您可以请求访问、更正、删除、反对处理或限制处理与您相关的数据。",
          "请将相关请求发送至 data@gumon.io（建议邮件标题加上 [DSAR]）。",
          "我们通常会在 72 小时内确认收到请求，并在法律要求的期限内完成处理。",
        ],
      },
      {
        title: "10. 儿童数据与敏感数据",
        body:
          "本网站并非以收集儿童个人数据为目的，也不用于直接收集敏感数据。如您误提交了此类信息，请联系我们删除。",
      },
      {
        title: "11. 监管投诉",
        body:
          "如果您认为我们未遵守适用的数据保护法律，您可以向您所在司法辖区的相关监管机构提出投诉。",
      },
      {
        title: "12. 政策更新",
        body:
          "我们可能会不时更新本政策，并会在本页显示最新更新日期。",
      },
      {
        title: "13. 联系方式",
        items: [
          "隐私与数据权利相关咨询：data@gumon.io",
          "负责团队：Data Governance & Privacy Office",
          `联系名称与地址：${companyInfoByLocale["zh-CN"].legalName}，${companyInfoByLocale["zh-CN"].address}`,
        ],
      },
    ],
  },
  "zh-TW": {
    title: "隱私權政策",
    description: "Gumon Technology 公開網站使用者的隱私權政策。",
    crumb: "隱私權政策",
    kicker: "隱私權政策",
    heading: "隱私權政策",
    updatedAt: "2026年2月13日",
    intro:
      "Gumon Technology 重視您的隱私。本政策說明我們會蒐集哪些資料、如何使用、保存多久，以及您在使用我們公開網站時享有的權利。",
    sections: [
      {
        title: "1. 適用範圍",
        items: [
          "本政策適用於 Gumon 公開網站及相關頁面的使用。",
          "本政策不適用於由本網站連往第三方服務的情況，例如外部文件網站或社群媒體。",
          `本政策所稱的個人資料控制者為 ${companyInfoByLocale["zh-TW"].legalName}（統一編號／註冊號：${companyInfoByLocale["zh-TW"].registrationNumber}）。`,
        ],
      },
      {
        title: "2. 我們蒐集的資料",
        items: [
          "您主動提供的資料：透過聯絡表單提交的姓名、電子郵件、電話、主題與詳細內容。",
          "技術資料：造訪的網址、存取時間、來源頁面（referrer）以及裝置類型。",
          "Cookie 與分析／行銷資料（在需要取得同意時），包括 Google Analytics 或 Google Tag Manager 等工具。",
        ],
      },
      {
        title: "3. 處理目的",
        items: [
          "回覆諮詢，並評估透過 Contact 頁面提交的初步需求。",
          "分析網站整體使用情況與渠道表現。",
          "維護平台安全、偵測異常使用並維持服務品質。",
          "改善與 Gumon 平台相關的服務與內容。",
        ],
      },
      {
        title: "4. 法律依據",
        items: [
          "在需要取得同意的情況下，以您的同意為依據。",
          "為提供您透過聯絡管道所請求的資訊或支援所必要。",
          "基於我們在安全與服務品質提升方面的合法利益。",
        ],
      },
      {
        title: "5. 資料分享",
        items: [
          "我們不會出售個人資料。",
          "目前，Gumon Technology 是本網站唯一的資料控制者。",
          "截至本政策日期，我們不會定期將聯絡資料轉交給關係企業或外部處理者用於商業營運。",
          "若未來引入外部處理者或集團內共享機制，我們會在啟用前先更新本政策。",
          "任何揭露都僅限於達成既定目的所必要的範圍，或法律要求的範圍。",
        ],
      },
      {
        title: "6. 跨境資料傳輸",
        body:
          "Gumon 目前不會定期將個人資料跨境傳輸給其他實體。由於本網站可供全球使用，如未來確有跨境傳輸需要，我們會採取適當保障措施，並提前更新本政策。",
      },
      {
        title: "7. 保存期間",
        items: [
          "聯絡表單與協調郵件資料：通常自最近一次聯絡起最多保存 24 個月。",
          "安全紀錄：通常保存 6 至 12 個月。",
          "Cookie 與分析資料：依工具設定及您的同意選擇而定。",
          "在保存目的完成後，相關資料將刪除或匿名化。",
          "您也可以透過 data@gumon.io 申請提前刪除。",
        ],
      },
      {
        title: "8. 資料安全",
        body:
          "我們採取適當的技術與組織性措施，以防止未經授權的存取、揭露或變更。",
      },
      {
        title: "9. 資料當事人權利",
        items: [
          "依適用法律，您可以要求存取、更正、刪除、提出異議或限制處理與您有關的資料。",
          "請將相關請求寄送至 data@gumon.io（建議主旨加註 [DSAR]）。",
          "我們通常會在 72 小時內確認收到請求，並於法定期限內完成處理。",
        ],
      },
      {
        title: "10. 兒童資料與敏感資料",
        body:
          "本網站並非為刻意蒐集兒童個人資料而設計，也不以直接蒐集敏感資料為目的。如您誤送出此類資訊，請聯絡我們協助刪除。",
      },
      {
        title: "11. 監管申訴",
        body:
          "若您認為我們未遵守適用的資料保護法律，您可向您所在地司法轄區的相關主管機關提出申訴。",
      },
      {
        title: "12. 政策更新",
        body:
          "我們可能會不定期更新本政策，並會在本頁顯示最新更新日期。",
      },
      {
        title: "13. 聯絡方式",
        items: [
          "隱私與資料權利相關詢問：data@gumon.io",
          "負責團隊：Data Governance & Privacy Office",
          `聯絡名稱與地址：${companyInfoByLocale["zh-TW"].legalName}，${companyInfoByLocale["zh-TW"].address}`,
        ],
      },
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    description: "Gumon Technology 公開サイト向けのプライバシーポリシー。",
    crumb: "プライバシーポリシー",
    kicker: "プライバシーポリシー",
    heading: "プライバシーポリシー",
    updatedAt: "2026年2月13日",
    intro:
      "Gumon Technology はお客様のプライバシーを大切にしています。本ポリシーでは、当社が収集するデータ、その利用目的、保存期間、そして公開サイトをご利用いただく際のお客様の権利について説明します。",
    sections: [
      {
        title: "1. 適用範囲",
        items: [
          "本ポリシーは、Gumon の公開サイトおよび関連ページの利用に適用されます。",
          "外部ドキュメントサイトやソーシャルメディアなど、本サイトからリンクされる第三者サービスには適用されません。",
          `本ポリシーにおける個人データ管理者は ${companyInfoByLocale.ja.legalName}（登録番号 ${companyInfoByLocale.ja.registrationNumber}）です。`,
        ],
      },
      {
        title: "2. 収集するデータ",
        items: [
          "お客様が直接提供する情報：お問い合わせフォームを通じて送信される氏名、メールアドレス、電話番号、件名、詳細情報。",
          "技術データ：閲覧した URL、アクセス時刻、参照元、デバイス種別。",
          "Cookie および分析・マーケティングデータ（同意が必要な場合）。Google Analytics や Google Tag Manager などのツールを含みます。",
        ],
      },
      {
        title: "3. 利用目的",
        items: [
          "お問い合わせへの対応、および Contact ページ経由で送信された初期要件の確認。",
          "サイト全体の利用状況やチャネルの効果分析。",
          "プラットフォームの安全性確保、不正利用の検知、サービス品質の維持。",
          "Gumon プラットフォームに関するサービスやコンテンツの改善。",
        ],
      },
      {
        title: "4. 法的根拠",
        items: [
          "同意が必要な場合におけるユーザーの同意。",
          "お問い合わせ窓口を通じて求められた情報または支援を提供するための必要性。",
          "安全性確保およびサービス品質向上に関する正当な利益。",
        ],
      },
      {
        title: "5. データ共有",
        items: [
          "当社は個人データを販売しません。",
          "現在、このサイトのデータ管理者は Gumon Technology のみです。",
          "本ポリシー日時点では、事業運営のために連絡先データを関連会社や外部処理者へ常時移転していません。",
          "今後、外部処理者やグループ内共有を導入する場合は、開始前に本ポリシーを更新します。",
          "開示は、記載された目的の達成に必要な範囲、または法令で求められる範囲に限られます。",
        ],
      },
      {
        title: "6. 越境データ移転",
        body:
          "Gumon は現在、個人データを他の事業体へ定常的に国外移転していません。本サイトは世界中からアクセス可能であるため、将来越境移転が必要になった場合には、適切な保護措置を講じたうえで事前に本ポリシーを更新します。",
      },
      {
        title: "7. 保存期間",
        items: [
          "お問い合わせフォームおよび調整メールのデータ：通常、最終連絡日から最大 24 か月。",
          "セキュリティログ：通常 6 から 12 か月。",
          "Cookie および分析データ：ツール設定と同意内容に応じます。",
          "保存目的を達成した後、データは削除または匿名化されます。",
          "data@gumon.io への依頼により早期削除を求めることもできます。",
        ],
      },
      {
        title: "8. データセキュリティ",
        body:
          "不正アクセス、漏えい、改ざんを防ぐために、適切な技術的・組織的安全管理措置を講じています。",
      },
      {
        title: "9. データ主体の権利",
        items: [
          "適用法令に基づき、アクセス、訂正、削除、異議申立て、処理制限を求めることができます。",
          "ご依頼は data@gumon.io までお送りください（件名の先頭に [DSAR] を付けることを推奨します）。",
          "通常、72 時間以内に受領を確認し、法令上の期限内に対応します。",
        ],
      },
      {
        title: "10. 子どものデータと要配慮情報",
        body:
          "本サイトは、子どもの個人データを意図的に収集する目的で設計されておらず、要配慮情報を直接収集することも想定していません。誤ってそのような情報を送信した場合は、削除のためご連絡ください。",
      },
      {
        title: "11. 監督機関への申立て",
        body:
          "当社が適用されるデータ保護法を遵守していないとお考えの場合は、お住まいの法域の監督機関へ苦情を申し立てることができます。",
      },
      {
        title: "12. ポリシーの更新",
        body:
          "当社は本ポリシーを随時更新する場合があり、その際はこのページに最新の更新日を表示します。",
      },
      {
        title: "13. お問い合わせ",
        items: [
          "プライバシーおよびデータ権利に関するお問い合わせ：data@gumon.io",
          "担当チーム：Data Governance & Privacy Office",
          `連絡先名称および住所：${companyInfoByLocale.ja.legalName}、${companyInfoByLocale.ja.address}`,
        ],
      },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    description: "Gumon Technology 공개 웹사이트 이용자를 위한 개인정보 처리방침입니다.",
    crumb: "개인정보 처리방침",
    kicker: "개인정보 처리방침",
    heading: "개인정보 처리방침",
    updatedAt: "2026년 2월 13일",
    intro:
      "Gumon Technology는 이용자의 개인정보를 중요하게 생각합니다. 본 방침은 당사가 어떤 데이터를 수집하는지, 어떻게 사용하는지, 얼마나 보관하는지, 그리고 공개 웹사이트 이용 시 이용자가 가지는 권리를 설명합니다.",
    sections: [
      {
        title: "1. 적용 범위",
        items: [
          "본 방침은 Gumon 공개 웹사이트와 관련 페이지 이용에 적용됩니다.",
          "외부 문서 사이트나 소셜 미디어 등 본 웹사이트에서 연결되는 제3자 서비스에는 적용되지 않습니다.",
          `본 방침상 개인정보 처리자는 ${companyInfoByLocale.ko.legalName} (등록번호 ${companyInfoByLocale.ko.registrationNumber})입니다.`,
        ],
      },
      {
        title: "2. 수집하는 데이터",
        items: [
          "이용자가 직접 제공하는 정보: 문의 양식을 통해 제출한 이름, 이메일, 전화번호, 주제 및 상세 내용.",
          "기술 정보: 방문한 URL, 접속 시각, 유입 경로(referrer), 기기 유형.",
          "쿠키 및 분석/마케팅 데이터(동의가 필요한 경우)로서 Google Analytics 또는 Google Tag Manager와 같은 도구를 포함할 수 있습니다.",
        ],
      },
      {
        title: "3. 처리 목적",
        items: [
          "문의에 응답하고 Contact 페이지를 통해 접수된 초기 요구 사항을 검토하기 위해.",
          "웹사이트 이용 현황과 채널 성과를 전체적으로 분석하기 위해.",
          "플랫폼 보안을 유지하고 비정상 사용을 탐지하며 서비스 품질을 보호하기 위해.",
          "Gumon 플랫폼과 관련된 서비스 및 콘텐츠를 개선하기 위해.",
        ],
      },
      {
        title: "4. 처리의 법적 근거",
        items: [
          "동의가 필요한 경우 이용자의 동의.",
          "문의 채널을 통해 요청된 정보 또는 지원을 제공하기 위한 필요성.",
          "보안 유지 및 서비스 품질 향상에 관한 당사의 정당한 이익.",
        ],
      },
      {
        title: "5. 데이터 공유",
        items: [
          "당사는 개인정보를 판매하지 않습니다.",
          "현재 이 웹사이트의 유일한 개인정보 처리자는 Gumon Technology입니다.",
          "본 방침 기준일 현재, 사업 운영을 위해 연락처 데이터를 계열사나 외부 처리자에게 정기적으로 이전하지 않습니다.",
          "향후 외부 처리자 또는 그룹 내 공유가 도입될 경우 실제 적용 전에 본 방침을 업데이트하겠습니다.",
          "모든 제공은 명시된 목적 달성에 필요한 범위 또는 법률상 요구되는 범위로 제한됩니다.",
        ],
      },
      {
        title: "6. 국외 이전",
        body:
          "Gumon은 현재 개인정보를 다른 주체에게 정기적으로 국외 이전하지 않습니다. 다만 웹사이트는 전 세계에서 접근 가능하므로, 향후 국외 이전이 필요해질 경우 적절한 보호조치를 적용하고 사전에 본 방침을 업데이트하겠습니다.",
      },
      {
        title: "7. 보관 기간",
        items: [
          "문의 양식 및 조율 이메일 데이터: 일반적으로 마지막 연락 시점으로부터 최대 24개월.",
          "보안 로그: 일반적으로 6~12개월.",
          "쿠키 및 분석 데이터: 도구 설정과 이용자의 동의 선택에 따릅니다.",
          "보관 목적이 달성되면 데이터는 삭제되거나 익명화됩니다.",
          "data@gumon.io 를 통해 더 이른 삭제를 요청할 수 있습니다.",
        ],
      },
      {
        title: "8. 데이터 보안",
        body:
          "무단 접근, 공개 또는 변경을 방지하기 위해 적절한 기술적·관리적 보호조치를 적용하고 있습니다.",
      },
      {
        title: "9. 정보주체의 권리",
        items: [
          "적용 법률에 따라 열람, 정정, 삭제, 처리 반대 또는 처리 제한을 요청할 수 있습니다.",
          "요청은 data@gumon.io 로 보내 주십시오(메일 제목 앞에 [DSAR] 표기를 권장합니다).",
          "일반적으로 72시간 이내에 접수를 확인하고 법정 기한 내에 처리합니다.",
        ],
      },
      {
        title: "10. 아동 정보 및 민감정보",
        body:
          "본 웹사이트는 아동의 개인정보를 의도적으로 수집하도록 설계되지 않았으며 민감정보를 직접 수집하기 위한 목적도 아닙니다. 이러한 정보가 실수로 제출된 경우 삭제를 위해 당사에 연락해 주십시오.",
      },
      {
        title: "11. 감독기관 신고",
        body:
          "당사가 적용 가능한 개인정보 보호법을 준수하지 않는다고 판단되는 경우, 해당 관할의 감독기관에 민원을 제기할 수 있습니다.",
      },
      {
        title: "12. 방침 변경",
        body:
          "당사는 본 방침을 수시로 업데이트할 수 있으며, 이 페이지에 최신 개정일을 표시합니다.",
      },
      {
        title: "13. 문의처",
        items: [
          "개인정보 및 정보주체 권리 관련 문의: data@gumon.io",
          "담당 팀: Data Governance & Privacy Office",
          `연락처 명칭 및 주소: ${companyInfoByLocale.ko.legalName}, ${companyInfoByLocale.ko.address}`,
        ],
      },
    ],
  },
  vi: {
    title: "Chinh sach quyen rieng tu",
    description: "Chinh sach quyen rieng tu danh cho nguoi dung trang web cong khai cua Gumon Technology.",
    crumb: "Chinh sach quyen rieng tu",
    kicker: "Chinh sach quyen rieng tu",
    heading: "Chinh sach quyen rieng tu",
    updatedAt: "13 thang 2, 2026",
    intro:
      "Gumon Technology ton trong quyen rieng tu cua ban. Chinh sach nay giai thich du lieu nao duoc thu thap, cach chung toi su dung, thoi gian luu tru va quyen cua ban khi su dung trang web cong khai cua chung toi.",
    sections: [
      {
        title: "1. Pham vi ap dung",
        items: [
          "Chinh sach nay ap dung cho viec su dung trang web cong khai cua Gumon va cac trang lien quan.",
          "Chinh sach nay khong ap dung cho cac dich vu ben thu ba duoc lien ket tu trang web nay, nhu tai lieu ben ngoai hoac mang xa hoi.",
          `Ben kiem soat du lieu theo chinh sach nay la ${companyInfoByLocale.vi.legalName} (so dang ky ${companyInfoByLocale.vi.registrationNumber}).`,
        ],
      },
      {
        title: "2. Du lieu chung toi thu thap",
        items: [
          "Thong tin ban cung cap truc tiep: ten, email, so dien thoai, chu de va noi dung gui qua bieu mau lien he.",
          "Du lieu ky thuat: URL da truy cap, thoi gian truy cap, trang gioi thieu va loai thiet bi.",
          "Cookie va du lieu phan tich/marketing (khi can su dong y), bao gom cac cong cu nhu Google Analytics hoac Google Tag Manager.",
        ],
      },
      {
        title: "3. Muc dich xu ly",
        items: [
          "Phan hoi lien he va danh gia nhu cau ban dau duoc gui qua trang Contact.",
          "Phan tich tong quan viec su dung website va hieu qua cac kenh.",
          "Bao ve an toan nen tang, phat hien hanh vi bat thuong va duy tri chat luong dich vu.",
          "Cai thien dich vu va noi dung lien quan den nen tang Gumon.",
        ],
      },
      {
        title: "4. Co so phap ly",
        items: [
          "Su dong y cua nguoi dung trong cac truong hop can xin dong y.",
          "Su can thiet de cung cap thong tin hoac ho tro theo yeu cau qua cac kenh lien he.",
          "Loi ich hop phap cua chung toi trong viec dam bao an toan va nang cao chat luong dich vu.",
        ],
      },
      {
        title: "5. Chia se du lieu",
        items: [
          "Chung toi khong ban du lieu ca nhan.",
          "Hien tai, Gumon Technology la ben kiem soat du lieu duy nhat cua website nay.",
          "Tinh den ngay chinh sach nay duoc ban hanh, chung toi khong thuong xuyen chuyen du lieu lien he cho cong ty lien ket hoac ben xu ly ben ngoai de van hanh kinh doanh.",
          "Neu trong tuong lai co su tham gia cua ben xu ly ben ngoai hoac chia se trong nhom cong ty, chung toi se cap nhat chinh sach nay truoc khi ap dung.",
          "Moi viec tiet lo du lieu chi gioi han trong pham vi can thiet cho muc dich da neu hoac theo yeu cau cua phap luat.",
        ],
      },
      {
        title: "6. Chuyen du lieu xuyen bien gioi",
        body:
          "Hien tai Gumon khong thuc hien viec chuyen du lieu ca nhan thuong xuyen sang cac to chuc khac o nuoc ngoai. Vi website co the duoc truy cap toan cau, neu trong tuong lai can chuyen du lieu xuyen bien gioi, chung toi se ap dung bien phap bao ve phu hop va cap nhat chinh sach nay truoc.",
      },
      {
        title: "7. Thoi gian luu tru",
        items: [
          "Du lieu tu bieu mau lien he va email dieu phoi: thong thuong toi da 24 thang ke tu lan lien he gan nhat.",
          "Nhat ky bao mat: thong thuong 6-12 thang.",
          "Du lieu cookie va phan tich: phu thuoc vao cau hinh cong cu va lua chon dong y cua nguoi dung.",
          "Sau khi muc dich luu tru da hoan thanh, du lieu se duoc xoa hoac an danh.",
          "Ban co the yeu cau xoa som hon qua data@gumon.io.",
        ],
      },
      {
        title: "8. Bao mat du lieu",
        body:
          "Chung toi ap dung cac bien phap ky thuat va to chuc phu hop de bao ve du lieu khoi viec truy cap, tiet lo hoac chinh sua trai phep.",
      },
      {
        title: "9. Quyen cua chu the du lieu",
        items: [
          "Theo phap luat ap dung, ban co the yeu cau truy cap, chinh sua, xoa, phan doi hoac han che xu ly du lieu lien quan den ban.",
          "Gui yeu cau den data@gumon.io (khuyen nghi them [DSAR] o dau tieu de email).",
          "Thong thuong chung toi se xac nhan yeu cau trong vong 72 gio va xu ly trong khung thoi gian theo quy dinh phap luat.",
        ],
      },
      {
        title: "10. Du lieu tre em va du lieu nhay cam",
        body:
          "Website nay khong duoc thiet ke de chu dong thu thap du lieu ca nhan cua tre em va cung khong nham muc dich thu thap truc tiep du lieu nhay cam. Neu thong tin nhu vay duoc gui nham, vui long lien he de chung toi xoa bo.",
      },
      {
        title: "11. Khieu nai toi co quan giam sat",
        body:
          "Neu ban cho rang chung toi khong tuan thu phap luat bao ve du lieu ap dung, ban co the gui khieu nai den co quan giam sat co tham quyen tai khu vuc cua ban.",
      },
      {
        title: "12. Cap nhat chinh sach",
        body:
          "Chung toi co the cap nhat chinh sach nay theo tung thoi diem va se hien thi ngay cap nhat moi nhat tren trang nay.",
      },
      {
        title: "13. Lien he",
        items: [
          "Cau hoi ve quyen rieng tu va quyen du lieu: data@gumon.io",
          "Bo phan phu trach: Data Governance & Privacy Office",
          `Ten va dia chi lien he: ${companyInfoByLocale.vi.legalName}, ${companyInfoByLocale.vi.address}`,
        ],
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    description: "Kebijakan privasi untuk pengguna situs web publik Gumon Technology.",
    crumb: "Kebijakan Privasi",
    kicker: "Kebijakan Privasi",
    heading: "Kebijakan Privasi",
    updatedAt: "13 Februari 2026",
    intro:
      "Gumon Technology menghargai privasi Anda. Kebijakan ini menjelaskan data apa yang kami kumpulkan, bagaimana kami menggunakannya, berapa lama kami menyimpannya, dan hak Anda saat menggunakan situs web publik kami.",
    sections: [
      {
        title: "1. Ruang Lingkup",
        items: [
          "Kebijakan ini berlaku untuk penggunaan situs web publik Gumon dan halaman terkait.",
          "Kebijakan ini tidak mencakup layanan pihak ketiga yang ditautkan dari situs ini, seperti dokumentasi eksternal atau media sosial.",
          `Pengendali data berdasarkan kebijakan ini adalah ${companyInfoByLocale.id.legalName} (nomor registrasi ${companyInfoByLocale.id.registrationNumber}).`,
        ],
      },
      {
        title: "2. Data yang Kami Kumpulkan",
        items: [
          "Informasi yang Anda berikan langsung: nama, email, nomor telepon, topik, dan rincian yang dikirim melalui formulir kontak.",
          "Data teknis: URL yang dikunjungi, waktu akses, referrer, dan jenis perangkat.",
          "Cookie serta data analitik/pemasaran (jika persetujuan diperlukan), termasuk alat seperti Google Analytics atau Google Tag Manager.",
        ],
      },
      {
        title: "3. Tujuan Pemrosesan",
        items: [
          "Menanggapi pertanyaan dan menilai kebutuhan awal yang dikirim melalui halaman Contact.",
          "Menganalisis penggunaan situs web dan kinerja kanal secara agregat.",
          "Menjaga keamanan platform, mendeteksi penggunaan yang tidak wajar, dan mempertahankan kualitas layanan.",
          "Meningkatkan layanan dan konten yang terkait dengan platform Gumon.",
        ],
      },
      {
        title: "4. Dasar Hukum",
        items: [
          "Persetujuan pengguna apabila persetujuan diperlukan.",
          "Kebutuhan untuk menyediakan informasi atau dukungan yang diminta melalui kanal kontak.",
          "Kepentingan yang sah dalam menjaga keamanan dan meningkatkan kualitas layanan.",
        ],
      },
      {
        title: "5. Berbagi Data",
        items: [
          "Kami tidak menjual data pribadi.",
          "Saat ini, Gumon Technology adalah satu-satunya pengendali data untuk situs web ini.",
          "Pada tanggal kebijakan ini, kami tidak secara rutin memindahkan data kontak ke afiliasi atau pemroses eksternal untuk operasional bisnis.",
          "Jika pemroses eksternal atau pembagian dalam grup diperkenalkan di masa depan, kami akan memperbarui kebijakan ini sebelum diterapkan.",
          "Setiap pengungkapan dibatasi pada hal yang diperlukan untuk tujuan yang disebutkan atau diwajibkan oleh hukum.",
        ],
      },
      {
        title: "6. Transfer Data Lintas Batas",
        body:
          "Saat ini Gumon tidak melakukan transfer internasional data pribadi secara rutin ke entitas lain. Karena situs web ini dapat diakses secara global, jika transfer lintas batas diperlukan di masa depan, kami akan menerapkan perlindungan yang sesuai dan memperbarui kebijakan ini terlebih dahulu.",
      },
      {
        title: "7. Jangka Waktu Penyimpanan",
        items: [
          "Data formulir kontak dan email koordinasi: umumnya hingga 24 bulan sejak kontak terakhir.",
          "Log keamanan: umumnya 6-12 bulan.",
          "Data cookie dan analitik: berdasarkan pengaturan alat serta pilihan persetujuan pengguna.",
          "Setelah tujuan penyimpanan terpenuhi, data akan dihapus atau dianonimkan.",
          "Anda dapat meminta penghapusan lebih awal melalui data@gumon.io.",
        ],
      },
      {
        title: "8. Keamanan Data",
        body:
          "Kami menerapkan langkah teknis dan organisasi yang sesuai untuk melindungi data dari akses, pengungkapan, atau perubahan tanpa izin.",
      },
      {
        title: "9. Hak Subjek Data",
        items: [
          "Sesuai hukum yang berlaku, Anda dapat meminta akses, koreksi, penghapusan, keberatan, atau pembatasan pemrosesan atas data yang berkaitan dengan Anda.",
          "Kirim permintaan ke data@gumon.io (disarankan menambahkan [DSAR] di awal subjek email).",
          "Kami umumnya mengakui permintaan dalam 72 jam dan menyelesaikannya dalam batas waktu hukum yang berlaku.",
        ],
      },
      {
        title: "10. Data Anak dan Data Sensitif",
        body:
          "Situs web ini tidak dirancang untuk secara sengaja mengumpulkan data pribadi anak-anak dan tidak ditujukan untuk pengumpulan langsung data sensitif. Jika data tersebut dikirim tanpa sengaja, mohon hubungi kami untuk penghapusan.",
      },
      {
        title: "11. Pengaduan ke Regulator",
        body:
          "Jika Anda menilai kami tidak mematuhi hukum perlindungan data yang berlaku, Anda dapat mengajukan pengaduan ke otoritas pengawas yang relevan di yurisdiksi Anda.",
      },
      {
        title: "12. Pembaruan Kebijakan",
        body:
          "Kami dapat memperbarui kebijakan ini dari waktu ke waktu dan akan menampilkan tanggal pembaruan terbaru di halaman ini.",
      },
      {
        title: "13. Kontak",
        items: [
          "Pertanyaan privasi dan hak data: data@gumon.io",
          "Tim penanggung jawab: Data Governance & Privacy Office",
          `Nama dan alamat kontak: ${companyInfoByLocale.id.legalName}, ${companyInfoByLocale.id.address}`,
        ],
      },
    ],
  },
  ms: {
    title: "Dasar Privasi",
    description: "Dasar privasi untuk pengguna laman web awam Gumon Technology.",
    crumb: "Dasar Privasi",
    kicker: "Dasar Privasi",
    heading: "Dasar Privasi",
    updatedAt: "13 Februari 2026",
    intro: "Gumon Technology menghargai privasi anda. Dasar ini menerangkan data yang kami kumpulkan, cara kami menggunakannya, tempoh simpanan, dan hak anda apabila menggunakan laman web awam kami.",
    sections: [
      { title: "1. Skop", items: ["Dasar ini terpakai kepada penggunaan laman web awam Gumon dan halaman berkaitan.", "Ia tidak meliputi perkhidmatan pihak ketiga yang dipautkan dari laman ini.", `Pengawal data di bawah dasar ini ialah ${companyInfoByLocale.ms.legalName} (nombor pendaftaran ${companyInfoByLocale.ms.registrationNumber}).`] },
      { title: "2. Data yang Kami Kumpulkan", items: ["Maklumat yang anda berikan secara langsung melalui borang hubungan.", "Data teknikal seperti URL yang dilawati, masa akses, referrer, dan jenis peranti.", "Data cookie dan analitik apabila persetujuan diperlukan."] },
      { title: "3. Tujuan Pemprosesan", items: ["Menjawab pertanyaan dan menilai keperluan awal.", "Menganalisis penggunaan laman web secara agregat.", "Menjaga keselamatan platform dan meningkatkan kualiti perkhidmatan."] },
      { title: "4. Asas Undang-undang", items: ["Persetujuan pengguna apabila diperlukan.", "Keperluan untuk memberi maklumat atau sokongan melalui saluran hubungan.", "Kepentingan sah dalam aspek keselamatan dan penambahbaikan perkhidmatan."] },
      { title: "5. Perkongsian Data", items: ["Kami tidak menjual data peribadi.", "Pada masa ini, Gumon Technology ialah satu-satunya pengawal data untuk laman ini.", "Sebarang pendedahan terhad kepada apa yang perlu atau yang diwajibkan oleh undang-undang."] },
      { title: "6. Tempoh Simpanan", items: ["Data borang hubungan biasanya disimpan sehingga 24 bulan selepas hubungan terakhir.", "Log keselamatan biasanya disimpan 6-12 bulan.", "Data akan dipadam atau dinyahpengenalan selepas tujuan simpanan dipenuhi."] },
      { title: "7. Hak Subjek Data", items: ["Anda boleh meminta akses, pembetulan, pemadaman, bantahan, atau sekatan pemprosesan tertakluk pada undang-undang yang terpakai.", "Hantar permintaan ke data@gumon.io dengan subjek [DSAR] jika sesuai.", "Kami lazimnya mengakui permintaan dalam tempoh 72 jam."] },
      { title: "8. Hubungi Kami", items: ["Pertanyaan privasi dan hak data: data@gumon.io", "Pasukan bertanggungjawab: Data Governance & Privacy Office", `Nama dan alamat hubungan: ${companyInfoByLocale.ms.legalName}, ${companyInfoByLocale.ms.address}`] },
    ],
  },
  hi: {
    title: "Privacy Policy",
    description: "Gumon Technology ki public website use karne walon ke liye privacy policy.",
    crumb: "Privacy Policy",
    kicker: "Privacy Policy",
    heading: "Privacy Policy",
    updatedAt: "13 February 2026",
    intro: "Gumon Technology aapki privacy ko mahatva deti hai. Yeh policy batati hai ki hum kaunsa data collect karte hain, use kaise use karte hain, kitni der rakhte hain, aur public website use karte waqt aapke kya rights hote hain.",
    sections: [
      { title: "1. Scope", items: ["Yeh policy Gumon ki public website aur related pages par lagu hoti hai.", "Yeh third-party services par lagu nahin hoti jo is website se linked hain.", `Is policy ke tahat data controller ${companyInfoByLocale.hi.legalName} hai (registration no. ${companyInfoByLocale.hi.registrationNumber}).`] },
      { title: "2. Data We Collect", items: ["Contact forms ke through aap dwara diya gaya data.", "Technical data jaise visited URLs, access time, referrer, aur device type.", "Cookie aur analytics data jahan consent ki zarurat ho."] },
      { title: "3. Purposes of Processing", items: ["Inquiries ka jawab dena aur initial requirements samajhna.", "Website usage ko aggregate level par analyze karna.", "Platform security aur service quality ko maintain karna."] },
      { title: "4. Legal Bases", items: ["Jahan zaruri ho wahan user consent.", "Requested support ya information provide karne ki necessity.", "Security aur quality improvement mein legitimate interests."] },
      { title: "5. Data Sharing", items: ["Hum personal data ko sell nahin karte.", "Abhi ke liye Gumon Technology hi is website ka sole data controller hai.", "Disclosure sirf utni hi hoti hai jitni zaruri ho ya law ke mutabik required ho."] },
      { title: "6. Retention Periods", items: ["Contact-form data aam taur par last contact ke baad 24 months tak rakha jata hai.", "Security logs aam taur par 6-12 months tak.", "Purpose complete hone ke baad data delete ya anonymize kiya jata hai."] },
      { title: "7. Data Subject Rights", items: ["Applicable law ke tahat aap access, correction, deletion, objection, ya restriction request kar sakte hain.", "Requests data@gumon.io par [DSAR] subject prefix ke saath bheji ja sakti hain.", "Hum aam taur par 72 hours ke andar acknowledgment dete hain."] },
      { title: "8. Contact", items: ["Privacy aur data rights inquiries: data@gumon.io", "Responsible team: Data Governance & Privacy Office", `Contact name and address: ${companyInfoByLocale.hi.legalName}, ${companyInfoByLocale.hi.address}`] },
    ],
  },
  es: {
    title: "Política de Privacidad",
    description: "Política de privacidad para usuarios del sitio público de Gumon Technology.",
    crumb: "Política de Privacidad",
    kicker: "Política de Privacidad",
    heading: "Política de Privacidad",
    updatedAt: "13 de febrero de 2026",
    intro: "Gumon Technology valora su privacidad. Esta política explica qué datos recopilamos, cómo los usamos, cuánto tiempo los conservamos y qué derechos tiene al usar nuestro sitio web público.",
    sections: [
      { title: "1. Alcance", items: ["Esta política se aplica al uso del sitio público de Gumon y sus páginas relacionadas.", "No cubre servicios de terceros enlazados desde este sitio.", `El responsable del tratamiento bajo esta política es ${companyInfoByLocale.es.legalName} (número de registro ${companyInfoByLocale.es.registrationNumber}).`] },
      { title: "2. Datos que recopilamos", items: ["Información que usted proporciona mediante formularios de contacto.", "Datos técnicos como URLs visitadas, hora de acceso, referrer y tipo de dispositivo.", "Datos de cookies y analítica cuando el consentimiento sea necesario."] },
      { title: "3. Finalidades del tratamiento", items: ["Responder consultas y evaluar necesidades iniciales.", "Analizar el uso del sitio de forma agregada.", "Mantener la seguridad de la plataforma y mejorar la calidad del servicio."] },
      { title: "4. Bases legales", items: ["Consentimiento del usuario cuando corresponda.", "Necesidad de proporcionar soporte o información solicitada.", "Intereses legítimos relacionados con seguridad y mejora del servicio."] },
      { title: "5. Cesión de datos", items: ["No vendemos datos personales.", "Actualmente, Gumon Technology es el único responsable del tratamiento de este sitio.", "Toda divulgación se limita a lo necesario o a lo exigido por ley."] },
      { title: "6. Conservación", items: ["Los datos de contacto suelen conservarse hasta 24 meses desde el último intercambio.", "Los registros de seguridad suelen conservarse entre 6 y 12 meses.", "Después, los datos se eliminan o anonimizan."] },
      { title: "7. Derechos del titular", items: ["Puede solicitar acceso, rectificación, eliminación, oposición o limitación del tratamiento según la ley aplicable.", "Envíe solicitudes a data@gumon.io con el prefijo [DSAR] si corresponde.", "Normalmente acusamos recibo en un plazo de 72 horas."] },
      { title: "8. Contacto", items: ["Consultas sobre privacidad y derechos de datos: data@gumon.io", "Equipo responsable: Data Governance & Privacy Office", `Nombre y dirección de contacto: ${companyInfoByLocale.es.legalName}, ${companyInfoByLocale.es.address}`] },
    ],
  },
  "pt-BR": {
    title: "Política de Privacidade",
    description: "Política de privacidade para usuários do site público da Gumon Technology.",
    crumb: "Política de Privacidade",
    kicker: "Política de Privacidade",
    heading: "Política de Privacidade",
    updatedAt: "13 de fevereiro de 2026",
    intro: "A Gumon Technology valoriza sua privacidade. Esta política explica quais dados coletamos, como os usamos, por quanto tempo os mantemos e quais direitos você tem ao usar nosso site público.",
    sections: [
      { title: "1. Escopo", items: ["Esta política se aplica ao uso do site público da Gumon e de páginas relacionadas.", "Ela não cobre serviços de terceiros vinculados a partir deste site.", `O controlador de dados sob esta política é ${companyInfoByLocale["pt-BR"].legalName} (registro ${companyInfoByLocale["pt-BR"].registrationNumber}).`] },
      { title: "2. Dados que coletamos", items: ["Informações fornecidas diretamente por você em formulários de contato.", "Dados técnicos como URLs visitadas, horário de acesso, referrer e tipo de dispositivo.", "Dados de cookies e analytics quando houver necessidade de consentimento."] },
      { title: "3. Finalidades do tratamento", items: ["Responder contatos e avaliar necessidades iniciais.", "Analisar o uso do site de forma agregada.", "Manter a segurança da plataforma e melhorar a qualidade do serviço."] },
      { title: "4. Bases legais", items: ["Consentimento do usuário quando necessário.", "Necessidade de fornecer suporte ou informação solicitada.", "Interesses legítimos ligados à segurança e à melhoria do serviço."] },
      { title: "5. Compartilhamento de dados", items: ["Não vendemos dados pessoais.", "Atualmente, a Gumon Technology é a única controladora de dados deste site.", "Qualquer divulgação se limita ao necessário ou ao exigido por lei."] },
      { title: "6. Retenção", items: ["Dados de formulários de contato costumam ser mantidos por até 24 meses após o último contato.", "Logs de segurança costumam ser mantidos por 6 a 12 meses.", "Depois disso, os dados são excluídos ou anonimizados."] },
      { title: "7. Direitos do titular", items: ["Você pode solicitar acesso, correção, exclusão, oposição ou restrição de tratamento conforme a lei aplicável.", "Envie solicitações para data@gumon.io com o prefixo [DSAR], quando aplicável.", "Em geral, confirmamos o recebimento em até 72 horas."] },
      { title: "8. Contato", items: ["Dúvidas sobre privacidade e direitos de dados: data@gumon.io", "Equipe responsável: Data Governance & Privacy Office", `Nome e endereço de contato: ${companyInfoByLocale["pt-BR"].legalName}, ${companyInfoByLocale["pt-BR"].address}`] },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    description: "سياسة الخصوصية لمستخدمي الموقع العام لشركة Gumon Technology.",
    crumb: "سياسة الخصوصية",
    kicker: "سياسة الخصوصية",
    heading: "سياسة الخصوصية",
    updatedAt: "13 فبراير 2026",
    intro: "تقدّر Gumon Technology خصوصيتك. توضح هذه السياسة ما البيانات التي نجمعها، وكيف نستخدمها، ومدة الاحتفاظ بها، وما الحقوق التي تملكها عند استخدام موقعنا العام.",
    sections: [
      { title: "1. النطاق", items: ["تنطبق هذه السياسة على استخدام موقع Gumon العام والصفحات المرتبطة به.", "ولا تنطبق على خدمات الأطراف الثالثة المرتبطة من هذا الموقع.", `مراقب البيانات بموجب هذه السياسة هو ${companyInfoByLocale.ar.legalName} (رقم التسجيل ${companyInfoByLocale.ar.registrationNumber}).`] },
      { title: "2. البيانات التي نجمعها", items: ["المعلومات التي تقدمها من خلال نماذج التواصل.", "البيانات التقنية مثل الروابط التي تمت زيارتها ووقت الوصول والمرجع ونوع الجهاز.", "بيانات ملفات تعريف الارتباط والتحليلات عندما يكون الحصول على الموافقة مطلوباً."] },
      { title: "3. أغراض المعالجة", items: ["الرد على الاستفسارات وتقييم الاحتياجات الأولية.", "تحليل استخدام الموقع بشكل إجمالي.", "الحفاظ على أمن المنصة وتحسين جودة الخدمة."] },
      { title: "4. الأسس القانونية", items: ["موافقة المستخدم عند الحاجة.", "ضرورة تقديم الدعم أو المعلومات المطلوبة.", "المصالح المشروعة المتعلقة بالأمن وتحسين الخدمة."] },
      { title: "5. مشاركة البيانات", items: ["نحن لا نبيع البيانات الشخصية.", "حالياً، Gumon Technology هي الجهة الوحيدة المتحكمة في بيانات هذا الموقع.", "أي إفصاح يقتصر على ما هو ضروري أو مطلوب قانوناً."] },
      { title: "6. فترات الاحتفاظ", items: ["عادة ما يتم الاحتفاظ ببيانات التواصل حتى 24 شهراً بعد آخر تواصل.", "عادة ما يتم الاحتفاظ بسجلات الأمان من 6 إلى 12 شهراً.", "بعد ذلك تُحذف البيانات أو تُزال هويتها."] },
      { title: "7. حقوق أصحاب البيانات", items: ["يمكنك طلب الوصول إلى البيانات أو تصحيحها أو حذفها أو الاعتراض على معالجتها أو تقييدها وفقاً للقانون المعمول به.", "يمكن إرسال الطلبات إلى data@gumon.io مع إضافة [DSAR] عند الاقتضاء.", "نقوم عادة بتأكيد الاستلام خلال 72 ساعة."] },
      { title: "8. التواصل", items: ["استفسارات الخصوصية وحقوق البيانات: data@gumon.io", "الفريق المسؤول: Data Governance & Privacy Office", `اسم وعنوان جهة الاتصال: ${companyInfoByLocale.ar.legalName}، ${companyInfoByLocale.ar.address}`] },
    ],
  },
  he: {
    title: "מדיניות פרטיות",
    description: "מדיניות הפרטיות למשתמשי האתר הציבורי של Gumon Technology.",
    crumb: "מדיניות פרטיות",
    kicker: "מדיניות פרטיות",
    heading: "מדיניות פרטיות",
    updatedAt: "13 בפברואר 2026",
    intro: "Gumon Technology מכבדת את פרטיותך. מדיניות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם, כמה זמן אנו שומרים אותם, ואילו זכויות עומדות לך בעת השימוש באתר הציבורי שלנו.",
    sections: [
      { title: "1. תחולה", items: ["מדיניות זו חלה על השימוש באתר הציבורי של Gumon ובדפים הקשורים אליו.", "היא אינה חלה על שירותי צד שלישי המקושרים מהאתר.", `בקר הנתונים לפי מדיניות זו הוא ${companyInfoByLocale.he.legalName} (מספר רישום ${companyInfoByLocale.he.registrationNumber}).`] },
      { title: "2. נתונים שאנו אוספים", items: ["מידע שאתה מוסר דרך טפסי יצירת קשר.", "נתונים טכניים כגון כתובות URL שנצפו, זמן גישה, referrer וסוג מכשיר.", "נתוני cookies ו-analytics כאשר נדרשת הסכמה."] },
      { title: "3. מטרות העיבוד", items: ["מענה לפניות והערכת צרכים ראשוניים.", "ניתוח שימוש באתר ברמה מצרפית.", "שמירה על אבטחת הפלטפורמה ושיפור איכות השירות."] },
      { title: "4. בסיסים משפטיים", items: ["הסכמת המשתמש כאשר נדרש.", "הצורך לספק תמיכה או מידע שהתבקש.", "אינטרסים לגיטימיים הקשורים לאבטחה ולשיפור השירות."] },
      { title: "5. שיתוף נתונים", items: ["איננו מוכרים נתונים אישיים.", "נכון לעכשיו, Gumon Technology היא בקר הנתונים היחיד של האתר הזה.", "כל גילוי מוגבל למה שנחוץ או למה שנדרש לפי דין."] },
      { title: "6. שמירה", items: ["נתוני יצירת קשר נשמרים בדרך כלל עד 24 חודשים מהקשר האחרון.", "יומני אבטחה נשמרים בדרך כלל בין 6 ל-12 חודשים.", "לאחר מכן הנתונים נמחקים או עוברים אנונימיזציה."] },
      { title: "7. זכויות נושאי מידע", items: ["באפשרותך לבקש גישה, תיקון, מחיקה, התנגדות או הגבלת עיבוד בהתאם לדין החל.", "בקשות ניתן לשלוח ל-data@gumon.io עם הקידומת [DSAR] במידת הצורך.", "בדרך כלל נאשר קבלה בתוך 72 שעות."] },
      { title: "8. יצירת קשר", items: ["פניות בנושא פרטיות וזכויות מידע: data@gumon.io", "הצוות האחראי: Data Governance & Privacy Office", `שם וכתובת ליצירת קשר: ${companyInfoByLocale.he.legalName}, ${companyInfoByLocale.he.address}`] },
    ],
  },
  it: {
    title: "Informativa sulla Privacy",
    description: "Informativa sulla privacy per gli utenti del sito pubblico di Gumon Technology.",
    crumb: "Informativa sulla Privacy",
    kicker: "Privacy Policy",
    heading: "Informativa sulla Privacy",
    updatedAt: "13 febbraio 2026",
    intro: "Gumon Technology attribuisce importanza alla tua privacy. Questa informativa spiega quali dati raccogliamo, come li usiamo, per quanto tempo li conserviamo e quali diritti hai quando utilizzi il nostro sito pubblico.",
    sections: [
      { title: "1. Ambito", items: ["Questa informativa si applica all'uso del sito pubblico Gumon e delle pagine correlate.", "Non copre servizi di terze parti collegati dal sito.", `Il titolare del trattamento è ${companyInfoByLocale.it.legalName} (n. ${companyInfoByLocale.it.registrationNumber}).`] },
      { title: "2. Dati raccolti", items: ["Dati forniti direttamente tramite i moduli di contatto.", "Dati tecnici come URL visitati, orari di accesso, referrer e tipo di dispositivo.", "Dati relativi a cookie e analisi/marketing, ove il consenso sia richiesto."] },
      { title: "3. Finalità", items: ["Rispondere ai contatti e valutare richieste iniziali.", "Analizzare l'uso del sito e migliorare contenuti o servizio.", "Supportare la sicurezza del sistema e prevenire usi anomali."] },
      { title: "4. Base giuridica", items: ["Consenso dell'utente, ove richiesto.", "Necessità di rispondere a una richiesta inviata dall'utente.", "Legittimo interesse alla sicurezza e al miglioramento del servizio."] },
      { title: "5. Condivisione e conservazione", items: ["Non vendiamo dati personali a terzi.", "I dati di contatto sono di norma conservati fino a 24 mesi dall'ultimo scambio.", "I log di sicurezza sono di norma conservati per 6-12 mesi."] },
      { title: "6. Diritti dell'interessato", items: ["Puoi chiedere accesso, rettifica, cancellazione, opposizione o limitazione secondo la legge applicabile.", "Le richieste possono essere inviate a data@gumon.io.", "Di norma forniamo un primo riscontro entro 72 ore."] },
      { title: "7. Contatti", items: ["Domande sulla privacy e richieste sui dati: data@gumon.io", `Dati legali e indirizzo: ${companyInfoByLocale.it.legalName}, ${companyInfoByLocale.it.address}`] },
    ],
  },
  nl: {
    title: "Privacybeleid",
    description: "Privacybeleid voor gebruikers van de openbare website van Gumon Technology.",
    crumb: "Privacybeleid",
    kicker: "Privacy Policy",
    heading: "Privacybeleid",
    updatedAt: "13 februari 2026",
    intro: "Gumon Technology hecht waarde aan je privacy. Dit beleid legt uit welke gegevens we verzamelen, hoe we die gebruiken, hoe lang we ze bewaren en welke rechten je hebt bij gebruik van onze publieke website.",
    sections: [
      { title: "1. Reikwijdte", items: ["Dit beleid geldt voor het gebruik van de publieke Gumon-website en gerelateerde pagina's.", "Het geldt niet voor externe diensten waarnaar wordt gelinkt.", `De verwerkingsverantwoordelijke is ${companyInfoByLocale.nl.legalName} (registratienr. ${companyInfoByLocale.nl.registrationNumber}).`] },
      { title: "2. Gegevens die we verzamelen", items: ["Gegevens die je zelf verstrekt via contactformulieren.", "Technische gegevens zoals bezochte URL's, toegangstijd, referrer en apparaattype.", "Cookie- en analyse/marketinggegevens waar toestemming vereist is."] },
      { title: "3. Doeleinden", items: ["Reageren op contactverzoeken en eerste behoeften beoordelen.", "Websitegebruik analyseren en inhoud of dienstverlening verbeteren.", "Systeembeveiliging ondersteunen en misbruik helpen voorkomen."] },
      { title: "4. Rechtsgrond", items: ["Toestemming van de gebruiker waar nodig.", "Noodzaak om een door de gebruiker gestuurde aanvraag te verwerken.", "Gerechtvaardigd belang bij beveiliging en kwaliteitsverbetering."] },
      { title: "5. Delen en bewaren", items: ["Wij verkopen geen persoonsgegevens aan derden.", "Contactgegevens worden doorgaans tot 24 maanden na het laatste contact bewaard.", "Beveiligingslogs worden doorgaans 6-12 maanden bewaard."] },
      { title: "6. Rechten van betrokkenen", items: ["Je kunt inzage, correctie, verwijdering, bezwaar of beperking aanvragen volgens toepasselijke wetgeving.", "Verzoeken kunnen worden gestuurd naar data@gumon.io.", "We geven normaal gesproken binnen 72 uur een eerste reactie."] },
      { title: "7. Contact", items: ["Vragen over privacy en dataverzoeken: data@gumon.io", `Juridische gegevens en adres: ${companyInfoByLocale.nl.legalName}, ${companyInfoByLocale.nl.address}`] },
    ],
  },
  pl: {
    title: "Polityka Prywatności",
    description: "Polityka prywatności dla użytkowników publicznej strony Gumon Technology.",
    crumb: "Polityka Prywatności",
    kicker: "Privacy Policy",
    heading: "Polityka Prywatności",
    updatedAt: "13 lutego 2026",
    intro: "Gumon Technology szanuje Twoją prywatność. Ta polityka wyjaśnia, jakie dane zbieramy, jak z nich korzystamy, jak długo je przechowujemy i jakie prawa Ci przysługują podczas korzystania z publicznej strony.",
    sections: [
      { title: "1. Zakres", items: ["Polityka dotyczy korzystania z publicznej strony Gumon i powiązanych podstron.", "Nie obejmuje usług zewnętrznych, do których prowadzą linki.", `Administratorem danych jest ${companyInfoByLocale.pl.legalName} (nr ${companyInfoByLocale.pl.registrationNumber}).`] },
      { title: "2. Jakie dane zbieramy", items: ["Dane podawane przez formularze kontaktowe.", "Dane techniczne, takie jak odwiedzane adresy URL, czas dostępu, referrer i typ urządzenia.", "Dane cookie oraz analityczne/marketingowe, gdy wymagana jest zgoda."] },
      { title: "3. Cele", items: ["Odpowiadanie na kontakt i ocena wstępnych potrzeb.", "Analiza korzystania ze strony i poprawa treści lub usługi.", "Wsparcie bezpieczeństwa systemu i zapobieganie nadużyciom."] },
      { title: "4. Podstawa prawna", items: ["Zgoda użytkownika tam, gdzie jest wymagana.", "Konieczność odpowiedzi na zapytanie wysłane przez użytkownika.", "Prawnie uzasadniony interes związany z bezpieczeństwem i poprawą jakości usługi."] },
      { title: "5. Udostępnianie i przechowywanie", items: ["Nie sprzedajemy danych osobowych osobom trzecim.", "Dane kontaktowe przechowujemy zwykle do 24 miesięcy od ostatniego kontaktu.", "Logi bezpieczeństwa przechowujemy zwykle 6-12 miesięcy."] },
      { title: "6. Prawa użytkownika", items: ["Możesz żądać dostępu, sprostowania, usunięcia, sprzeciwu lub ograniczenia zgodnie z prawem.", "Wnioski można wysyłać na data@gumon.io.", "Zwykle potwierdzamy przyjęcie zgłoszenia w ciągu 72 godzin."] },
      { title: "7. Kontakt", items: ["Pytania o prywatność i prawa do danych: data@gumon.io", `Dane prawne i adres: ${companyInfoByLocale.pl.legalName}, ${companyInfoByLocale.pl.address}`] },
    ],
  },
  tr: {
    title: "Gizlilik Politikasi",
    description: "Gumon Technology genel web sitesi kullanicilari icin gizlilik politikasi.",
    crumb: "Gizlilik Politikasi",
    kicker: "Privacy Policy",
    heading: "Gizlilik Politikasi",
    updatedAt: "13 Subat 2026",
    intro: "Gumon Technology gizliliginize onem verir. Bu politika, hangi verileri topladigimizi, bunlari nasil kullandigimizi, ne kadar sakladigimizi ve hangi haklara sahip oldugunuzu aciklar.",
    sections: [
      { title: "1. Kapsam", items: ["Bu politika Gumon'un genel web sitesi ve ilgili sayfalari icin gecerlidir.", "Harici hizmetleri kapsamaz.", `Veri sorumlusu ${companyInfoByLocale.tr.legalName} (kayit no. ${companyInfoByLocale.tr.registrationNumber})'dir.`] },
      { title: "2. Toplanan veriler", items: ["Iletisim formlariyla sagladiginiz veriler.", "Ziyaret edilen URL'ler, erisim zamani, referrer ve cihaz tipi gibi teknik veriler.", "Gerektiginde riza ile kullanilan cookie ve analiz/pazarlama verileri."] },
      { title: "3. Amaclar", items: ["Iletisim taleplerine donmek ve ilk ihtiyaclari degerlendirmek.", "Site kullanimini analiz etmek ve hizmeti iyilestirmek.", "Sistem guvenligini desteklemek ve kotuye kullanimi onlemek."] },
      { title: "4. Hukuki dayanak", items: ["Gerektiginde kullanici rizasi.", "Kullanicinin talebine yanit verme zorunlulugu.", "Guvenlik ve iyilestirme icin mesru menfaat."] },
      { title: "5. Paylasim ve saklama", items: ["Kisisel verileri satmayiz.", "Iletisim verileri genellikle son iletisimden sonra 24 aya kadar saklanir.", "Guvenlik loglari genellikle 6-12 ay saklanir."] },
      { title: "6. Haklariniz", items: ["Yururlukteki hukuka gore erisim, duzeltme, silme, itiraz veya kisitlama talep edebilirsiniz.", "Talepler data@gumon.io adresine gonderilebilir.", "Ilk geri donusu genellikle 72 saat icinde veririz."] },
      { title: "7. Iletisim", items: ["Gizlilik ve veri haklari sorulari: data@gumon.io", `Yasal bilgiler ve adres: ${companyInfoByLocale.tr.legalName}, ${companyInfoByLocale.tr.address}`] },
    ],
  },
  ru: {
    title: "Политика конфиденциальности",
    description: "Политика конфиденциальности для пользователей публичного сайта Gumon Technology.",
    crumb: "Политика конфиденциальности",
    kicker: "Privacy Policy",
    heading: "Политика конфиденциальности",
    updatedAt: "13 февраля 2026",
    intro: "Gumon Technology уважает вашу приватность. В этой политике объясняется, какие данные мы собираем, как используем, как долго храним и какие права есть у вас при использовании публичного сайта.",
    sections: [
      { title: "1. Сфера действия", items: ["Политика применяется к использованию публичного сайта Gumon и связанных страниц.", "Она не распространяется на сторонние сервисы, на которые ведут ссылки.", `Оператор персональных данных: ${companyInfoByLocale.ru.legalName} (рег. номер ${companyInfoByLocale.ru.registrationNumber}).`] },
      { title: "2. Какие данные мы собираем", items: ["Данные, которые вы передаете через контактные формы.", "Технические данные: посещенные URL, время доступа, referrer и тип устройства.", "Cookie data и аналитические/маркетинговые данные там, где требуется согласие."] },
      { title: "3. Цели", items: ["Отвечать на обращения и оценивать первоначальные запросы.", "Анализировать использование сайта и улучшать сервис.", "Поддерживать безопасность системы и предотвращать злоупотребления."] },
      { title: "4. Правовые основания", items: ["Согласие пользователя, когда оно требуется.", "Необходимость ответить на запрос пользователя.", "Законный интерес, связанный с безопасностью и улучшением сервиса."] },
      { title: "5. Передача и хранение", items: ["Мы не продаем персональные данные третьим лицам.", "Контактные данные обычно хранятся до 24 месяцев после последнего контакта.", "Логи безопасности обычно хранятся 6-12 месяцев."] },
      { title: "6. Права субъекта данных", items: ["Вы можете запросить доступ, исправление, удаление, возражение или ограничение в соответствии с законом.", "Запросы можно направлять на data@gumon.io.", "Обычно мы даем первичный ответ в течение 72 часов."] },
      { title: "7. Контакты", items: ["Вопросы о приватности и правах на данные: data@gumon.io", `Юридические данные и адрес: ${companyInfoByLocale.ru.legalName}, ${companyInfoByLocale.ru.address}`] },
    ],
  },
  uk: {
    title: "Політика конфіденційності",
    description: "Політика конфіденційності для користувачів публічного сайту Gumon Technology.",
    crumb: "Політика конфіденційності",
    kicker: "Privacy Policy",
    heading: "Політика конфіденційності",
    updatedAt: "13 лютого 2026",
    intro: "Gumon Technology поважає вашу приватність. У цій політиці пояснюється, які дані ми збираємо, як використовуємо, як довго зберігаємо та які права ви маєте при користуванні публічним сайтом.",
    sections: [
      { title: "1. Сфера дії", items: ["Політика застосовується до використання публічного сайту Gumon і пов'язаних сторінок.", "Вона не поширюється на сторонні сервіси, на які ведуть посилання.", `Контролер персональних даних: ${companyInfoByLocale.uk.legalName} (реєстраційний номер ${companyInfoByLocale.uk.registrationNumber}).`] },
      { title: "2. Які дані ми збираємо", items: ["Дані, які ви надсилаєте через контактні форми.", "Технічні дані: відвідані URL, час доступу, referrer і тип пристрою.", "Cookie data та аналітичні/маркетингові дані там, де потрібна згода."] },
      { title: "3. Цілі", items: ["Відповідати на звернення та оцінювати початкові запити.", "Аналізувати використання сайту й покращувати сервіс.", "Підтримувати безпеку системи та запобігати зловживанням."] },
      { title: "4. Правові підстави", items: ["Згода користувача, де вона необхідна.", "Необхідність відповісти на запит користувача.", "Законний інтерес, пов'язаний із безпекою та покращенням сервісу."] },
      { title: "5. Передача і зберігання", items: ["Ми не продаємо персональні дані третім сторонам.", "Контактні дані зазвичай зберігаються до 24 місяців після останнього контакту.", "Журнали безпеки зазвичай зберігаються 6-12 місяців."] },
      { title: "6. Права суб'єкта даних", items: ["Ви можете запросити доступ, виправлення, видалення, заперечення або обмеження відповідно до закону.", "Запити можна надсилати на data@gumon.io.", "Зазвичай ми надаємо первинну відповідь протягом 72 годин."] },
      { title: "7. Контакти", items: ["Питання щодо приватності та прав на дані: data@gumon.io", `Юридичні дані й адреса: ${companyInfoByLocale.uk.legalName}, ${companyInfoByLocale.uk.address}`] },
    ],
  },
  sv: {
    title: "Integritetspolicy",
    description: "Integritetspolicy för användare av Gumon Technologys publika webbplats.",
    crumb: "Integritetspolicy",
    kicker: "Privacy Policy",
    heading: "Integritetspolicy",
    updatedAt: "13 februari 2026",
    intro: "Gumon Technology värnar om din integritet. Denna policy förklarar vilka uppgifter vi samlar in, hur vi använder dem, hur länge de sparas och vilka rättigheter du har när du använder vår publika webbplats.",
    sections: [
      { title: "1. Omfattning", items: ["Policyn gäller användning av Gumons publika webbplats och relaterade sidor.", "Den gäller inte tredjepartstjänster som länkas från webbplatsen.", `Personuppgiftsansvarig är ${companyInfoByLocale.sv.legalName} (registreringsnummer ${companyInfoByLocale.sv.registrationNumber}).`] },
      { title: "2. Vilka uppgifter vi samlar in", items: ["Uppgifter du lämnar via kontaktformulär.", "Tekniska uppgifter som besökta URL:er, åtkomsttid, referrer och enhetstyp.", "Cookie- och analys/marknadsföringsdata där samtycke krävs."] },
      { title: "3. Syften", items: ["Svara på kontakter och bedöma inledande behov.", "Analysera webbplatsanvändning och förbättra tjänsten.", "Stödja systemsäkerhet och förebygga missbruk."] },
      { title: "4. Rättslig grund", items: ["Användarens samtycke där det krävs.", "Nödvändighet för att hantera en användarförfrågan.", "Berättigat intresse kopplat till säkerhet och tjänsteförbättring."] },
      { title: "5. Delning och lagring", items: ["Vi säljer inte personuppgifter till tredje part.", "Kontaktuppgifter sparas normalt i upp till 24 månader efter senaste kontakt.", "Säkerhetsloggar sparas normalt i 6-12 månader."] },
      { title: "6. Registrerades rättigheter", items: ["Du kan begära åtkomst, rättelse, radering, invändning eller begränsning enligt tillämplig lag.", "Begäranden kan skickas till data@gumon.io.", "Vi återkommer normalt med en första bekräftelse inom 72 timmar."] },
      { title: "7. Kontakt", items: ["Frågor om integritet och datarättigheter: data@gumon.io", `Juridiska uppgifter och adress: ${companyInfoByLocale.sv.legalName}, ${companyInfoByLocale.sv.address}`] },
    ],
  },
};
