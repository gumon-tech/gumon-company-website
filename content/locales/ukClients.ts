import type { Locale } from "@/lib/i18n";

type UkClientsCopy = { heading: string; roleWebsite: string; roleAcademy: string };

export type UkClient = {
  name: string;
  website: string;
  logo: string;
  width: number;
  height: number;
  role?: "website" | "academy";
};

// Brand names are not translated. Logos are the clients' own, unaltered.
export const ukClients: UkClient[] = [
  {
    name: "Pure Essentials London",
    website: "https://www.pureessentialslondon.com",
    logo: "/assets/clients/pure-essentials-london.png",
    width: 629,
    height: 289,
  },
  {
    name: "Sri Siam Thai Therapy & Wellness",
    website: "https://www.srisiamthaitherapyandwellness.co.uk/",
    logo: "/assets/clients/sri-siam-thai-therapy-wellness.png",
    width: 358,
    height: 360,
  },
  {
    name: "Taitam-D",
    website: "https://taitam-d.com/",
    logo: "/assets/clients/taitam-d-academy-london.png",
    width: 512,
    height: 512,
    role: "website",
  },
  {
    name: "Taitam-D Academy London",
    website: "https://academy.taitam-d.com/",
    logo: "/assets/clients/taitam-d-academy-london.png",
    width: 512,
    height: 512,
    role: "academy",
  },
];

export const ukClientsCopyByLocale: Record<Locale, UkClientsCopy> = {
  th: { heading: "ลูกค้าในสหราชอาณาจักรที่ไว้วางใจ Gumon", roleWebsite: "เว็บไซต์", roleAcademy: "แพลตฟอร์มอะคาเดมี" },
  en: { heading: "Trusted by clients in the United Kingdom", roleWebsite: "Website", roleAcademy: "Academy platform" },
  "zh-CN": { heading: "深受英国客户信赖", roleWebsite: "网站", roleAcademy: "学院平台" },
  "zh-TW": { heading: "深受英國客戶信賴", roleWebsite: "網站", roleAcademy: "學院平台" },
  ja: { heading: "英国のお客様にご信頼いただいています", roleWebsite: "ウェブサイト", roleAcademy: "アカデミー・プラットフォーム" },
  ko: { heading: "영국 고객사가 신뢰합니다", roleWebsite: "웹사이트", roleAcademy: "아카데미 플랫폼" },
  vi: { heading: "Được khách hàng tại Vương quốc Anh tin tưởng", roleWebsite: "Trang web", roleAcademy: "Nền tảng học viện" },
  id: { heading: "Dipercaya klien di Inggris Raya", roleWebsite: "Situs web", roleAcademy: "Platform akademi" },
  ms: { heading: "Dipercayai pelanggan di United Kingdom", roleWebsite: "Laman web", roleAcademy: "Platform akademi" },
  hi: { heading: "यूनाइटेड किंगडम के ग्राहकों का भरोसा", roleWebsite: "वेबसाइट", roleAcademy: "अकादमी प्लेटफ़ॉर्म" },
  ar: { heading: "موثوق به من عملاء في المملكة المتحدة", roleWebsite: "الموقع الإلكتروني", roleAcademy: "منصة الأكاديمية" },
  he: { heading: "זוכה לאמונם של לקוחות בבריטניה", roleWebsite: "אתר", roleAcademy: "פלטפורמת האקדמיה" },
  es: { heading: "Con la confianza de clientes en el Reino Unido", roleWebsite: "Sitio web", roleAcademy: "Plataforma de la academia" },
  "pt-BR": { heading: "Com a confiança de clientes no Reino Unido", roleWebsite: "Site", roleAcademy: "Plataforma da academia" },
  fr: { heading: "La confiance de clients au Royaume-Uni", roleWebsite: "Site web", roleAcademy: "Plateforme de l’académie" },
  de: { heading: "Das Vertrauen von Kunden im Vereinigten Königreich", roleWebsite: "Website", roleAcademy: "Akademie-Plattform" },
  it: { heading: "La fiducia dei clienti nel Regno Unito", roleWebsite: "Sito web", roleAcademy: "Piattaforma dell’accademia" },
  nl: { heading: "Het vertrouwen van klanten in het Verenigd Koninkrijk", roleWebsite: "Website", roleAcademy: "Academieplatform" },
  pl: { heading: "Zaufali nam klienci w Wielkiej Brytanii", roleWebsite: "Strona internetowa", roleAcademy: "Platforma akademii" },
  tr: { heading: "Birleşik Krallık'taki müşteriler bize güveniyor", roleWebsite: "Web sitesi", roleAcademy: "Akademi platformu" },
  ru: { heading: "Нам доверяют клиенты в Великобритании", roleWebsite: "Веб-сайт", roleAcademy: "Платформа академии" },
  uk: { heading: "Нам довіряють клієнти у Великій Британії", roleWebsite: "Вебсайт", roleAcademy: "Платформа академії" },
  sv: { heading: "Betrodd av kunder i Storbritannien", roleWebsite: "Webbplats", roleAcademy: "Akademiplattform" },
};
