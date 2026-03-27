import type { Locale } from "@/lib/i18n";

type CompanyInfo = {
  legalName: string;
  registrationNumber: string;
  registeredAt: string;
  address: string;
};

export const companyInfoByLocale: Record<Locale, CompanyInfo> = {
  th: {
    legalName: "บริษัท กุมอน เทคโนโลยี จำกัด",
    registrationNumber: "0405566007844",
    registeredAt: "21 ธันวาคม 2023",
    address: "33/4 หมู่ 11 เดอะไนน์ทาวเวอร์ส อาคารเอ ชั้น 35 ถนนพระราม 9 แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310 ประเทศไทย",
  },
  en: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "December 21, 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  "zh-CN": {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023年12月21日",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35楼, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  "zh-TW": {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023年12月21日",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35樓, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  ja: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023年12月21日",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  ko: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "2023년 12월 21일",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35층, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  vi: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 tháng 12, 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Tầng 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  id: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 Desember 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Lantai 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  ms: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 Disember 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Tingkat 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  hi: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 दिसंबर 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  ar: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 ديسمبر 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  he: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 בדצמבר 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Floor 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  es: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 de diciembre de 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Piso 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  "pt-BR": {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 de dezembro de 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35º andar, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  fr: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 décembre 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35e étage, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  de: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21. Dezember 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35. Etage, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  it: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 dicembre 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Piano 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  nl: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 december 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, Verdieping 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  pl: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 grudnia 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35. piętro, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  tr: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 Aralık 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35. Kat, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  ru: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 декабря 2023 года",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35 этаж, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  uk: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 грудня 2023 року",
    address: "33/4 Moo 11, The Nine Towers, Tower A, 35 поверх, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
  sv: {
    legalName: "Gumon Technology Co., Ltd.",
    registrationNumber: "0405566007844",
    registeredAt: "21 december 2023",
    address: "33/4 Moo 11, The Nine Towers, Tower A, våning 35, Rama 9 Road, Huai Khwang, Bangkok 10310, Thailand",
  },
};

export function getCompanyInfo(locale?: Locale): CompanyInfo {
  if (!locale) return companyInfoByLocale.en;
  return companyInfoByLocale[locale] ?? companyInfoByLocale.en;
}

export const companyInfo = companyInfoByLocale.en;
