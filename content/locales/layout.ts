import type { Locale } from "@/lib/i18n";

type MetadataCopy = {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  openGraphDescription: string;
  twitterDescription: string;
};

type LayoutCopy = {
  siteName: string;
  siteTagline: string;
  contactButton: string;
  faqLabel: string;
  companyInfoLink: string;
  contactEmail: string;
  allRightsReserved: string;
  logoMarkAriaLabel: string;
  metadata: MetadataCopy;
};

const sharedMetadata: MetadataCopy = {
  defaultTitle: "Gumon Technology | Open Platform for Delivery Teams",
  titleTemplate: "%s | Gumon Technology",
  description: "Open technology platform for organizations that need faster software delivery, clearer standards, and sustainable scaling.",
  keywords: [
    "Gumon Technology",
    "Open Platform",
    "Platform Engineering",
    "Software Delivery",
    "Developer Platform",
    "Technology Ecosystem",
  ],
  openGraphDescription: "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
  twitterDescription: "An open platform designed for practical delivery, connecting technology teams, partners, and business growth.",
};

function makeLayoutCopy(copy: Omit<LayoutCopy, "metadata">): LayoutCopy {
  return {
    ...copy,
    metadata: sharedMetadata,
  };
}

export const layoutCopyByLocale: Record<Locale, LayoutCopy> = {
  th: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "ติดต่อ",
    faqLabel: "คำถามที่พบบ่อย",
    companyInfoLink: "ข้อมูลบริษัท",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "สงวนลิขสิทธิ์",
    logoMarkAriaLabel: "โลโก้ Gumon",
  }),
  en: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contact",
    faqLabel: "FAQ",
    companyInfoLink: "Company Info",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "All rights reserved.",
    logoMarkAriaLabel: "Gumon mark",
  }),
  "zh-CN": makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "联系",
    faqLabel: "常见问题",
    companyInfoLink: "公司信息",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "版权所有。",
    logoMarkAriaLabel: "Gumon 标志",
  }),
  "zh-TW": makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "聯絡",
    faqLabel: "常見問題",
    companyInfoLink: "公司資訊",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "版權所有。",
    logoMarkAriaLabel: "Gumon 標誌",
  }),
  ja: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "お問い合わせ",
    faqLabel: "FAQ",
    companyInfoLink: "会社情報",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "All rights reserved.",
    logoMarkAriaLabel: "Gumon ロゴ",
  }),
  ko: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "문의",
    faqLabel: "FAQ",
    companyInfoLink: "회사 정보",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "All rights reserved.",
    logoMarkAriaLabel: "Gumon 로고",
  }),
  vi: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Liên hệ",
    faqLabel: "FAQ",
    companyInfoLink: "Thông tin công ty",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Bảo lưu mọi quyền.",
    logoMarkAriaLabel: "Biểu tượng Gumon",
  }),
  id: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Kontak",
    faqLabel: "FAQ",
    companyInfoLink: "Info perusahaan",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Semua hak dilindungi.",
    logoMarkAriaLabel: "Logo Gumon",
  }),
  ms: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Hubungi",
    faqLabel: "FAQ",
    companyInfoLink: "Maklumat syarikat",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Hak cipta terpelihara.",
    logoMarkAriaLabel: "Logo Gumon",
  }),
  hi: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "संपर्क",
    faqLabel: "FAQ",
    companyInfoLink: "कंपनी जानकारी",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",
    logoMarkAriaLabel: "Gumon लोगो",
  }),
  ar: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "تواصل",
    faqLabel: "الأسئلة الشائعة",
    companyInfoLink: "معلومات الشركة",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "جميع الحقوق محفوظة.",
    logoMarkAriaLabel: "شعار Gumon",
  }),
  he: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "יצירת קשר",
    faqLabel: "שאלות נפוצות",
    companyInfoLink: "פרטי החברה",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "כל הזכויות שמורות.",
    logoMarkAriaLabel: "לוגו Gumon",
  }),
  es: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contacto",
    faqLabel: "FAQ",
    companyInfoLink: "Información de la empresa",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Todos los derechos reservados.",
    logoMarkAriaLabel: "Marca de Gumon",
  }),
  "pt-BR": makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contato",
    faqLabel: "FAQ",
    companyInfoLink: "Informações da empresa",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Todos os direitos reservados.",
    logoMarkAriaLabel: "Marca da Gumon",
  }),
  fr: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contact",
    faqLabel: "FAQ",
    companyInfoLink: "Informations sur l'entreprise",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Tous droits réservés.",
    logoMarkAriaLabel: "Symbole Gumon",
  }),
  de: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Kontakt",
    faqLabel: "FAQ",
    companyInfoLink: "Unternehmensinfo",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Alle Rechte vorbehalten.",
    logoMarkAriaLabel: "Gumon-Zeichen",
  }),
  it: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contatto",
    faqLabel: "FAQ",
    companyInfoLink: "Informazioni aziendali",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Tutti i diritti riservati.",
    logoMarkAriaLabel: "Marchio Gumon",
  }),
  nl: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Contact",
    faqLabel: "FAQ",
    companyInfoLink: "Bedrijfsinformatie",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Alle rechten voorbehouden.",
    logoMarkAriaLabel: "Gumon-logo",
  }),
  pl: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Kontakt",
    faqLabel: "FAQ",
    companyInfoLink: "Informacje o firmie",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Wszelkie prawa zastrzeżone.",
    logoMarkAriaLabel: "Logo Gumon",
  }),
  tr: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "İletişim",
    faqLabel: "FAQ",
    companyInfoLink: "Şirket bilgileri",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Tüm hakları saklıdır.",
    logoMarkAriaLabel: "Gumon logosu",
  }),
  ru: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Контакты",
    faqLabel: "FAQ",
    companyInfoLink: "О компании",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Все права защищены.",
    logoMarkAriaLabel: "Логотип Gumon",
  }),
  uk: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Контакт",
    faqLabel: "FAQ",
    companyInfoLink: "Інформація про компанію",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Усі права захищено.",
    logoMarkAriaLabel: "Логотип Gumon",
  }),
  sv: makeLayoutCopy({
    siteName: "Gumon Technology",
    siteTagline: "Open Source Platform Systems",
    contactButton: "Kontakt",
    faqLabel: "FAQ",
    companyInfoLink: "Företagsinformation",
    contactEmail: "contact@gumon.io",
    allRightsReserved: "Alla rättigheter förbehållna.",
    logoMarkAriaLabel: "Gumon-märke",
  }),
};

export function getLayoutCopy(locale: Locale) {
  return layoutCopyByLocale[locale] ?? layoutCopyByLocale.en;
}

export const layoutCopy = layoutCopyByLocale.en;
