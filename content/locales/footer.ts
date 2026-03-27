import type { Locale } from "@/lib/i18n";

export const footerTaglineByLocale: Record<Locale, string> = {
  th: "Open platform สำหรับองค์กรที่ต้องการส่งมอบเทคโนโลยีได้เร็วขึ้น บนมาตรฐานที่ขยายผลได้ต่อเนื่อง",
  en: "Open platform for organizations that need faster technology delivery with standards that scale over time.",
  "zh-CN": "面向需要更快技术交付与可持续标准化扩展的组织的开放平台。",
  "zh-TW": "為需要更快技術交付與可持續擴展標準的組織打造的開放平台。",
  ja: "より速い技術提供と継続的に拡張できる標準を求める組織のためのオープンプラットフォームです。",
  ko: "더 빠른 기술 전달과 지속적으로 확장 가능한 기준을 필요로 하는 조직을 위한 오픈 플랫폼입니다.",
  vi: "Nền tảng mở dành cho các tổ chức cần triển khai công nghệ nhanh hơn với các tiêu chuẩn có thể mở rộng bền vững.",
  id: "Platform terbuka untuk organisasi yang membutuhkan pengiriman teknologi lebih cepat dengan standar yang dapat berkembang secara berkelanjutan.",
  ms: "Platform terbuka untuk organisasi yang memerlukan penyampaian teknologi yang lebih pantas dengan piawaian yang boleh berkembang secara berterusan.",
  hi: "उन संगठनों के लिए ओपन प्लेटफ़ॉर्म जिन्हें तेज़ तकनीकी डिलीवरी और लंबे समय तक बढ़ने योग्य मानकों की आवश्यकता है।",
  ar: "منصة مفتوحة للمؤسسات التي تحتاج إلى تسليم تقني أسرع مع معايير قابلة للتوسع بشكل مستمر.",
  he: "פלטפורמה פתוחה לארגונים הזקוקים למסירה טכנולוגית מהירה יותר עם סטנדרטים שניתן להרחיב לאורך זמן.",
  es: "Plataforma abierta para organizaciones que necesitan una entrega tecnológica más rápida con estándares que escalen de forma sostenible.",
  "pt-BR": "Plataforma aberta para organizações que precisam de entregas tecnológicas mais rápidas com padrões que possam escalar ao longo do tempo.",
  fr: "Une plateforme ouverte pour les organisations qui ont besoin d'une livraison technologique plus rapide avec des standards capables d'évoluer durablement.",
  de: "Eine offene Plattform für Organisationen, die schnellere Technologielieferung mit Standards benötigen, die sich nachhaltig skalieren lassen.",
  it: "Una piattaforma aperta per organizzazioni che hanno bisogno di una delivery tecnologica più rapida con standard che possano scalare nel tempo.",
  nl: "Een open platform voor organisaties die snellere technologielevering nodig hebben met standaarden die duurzaam kunnen meegroeien.",
  pl: "Otwarta platforma dla organizacji, które potrzebują szybszego dostarczania technologii i standardów umożliwiających długofalowe skalowanie.",
  tr: "Daha hızlı teknoloji teslimi ve sürdürülebilir şekilde ölçeklenebilen standartlara ihtiyaç duyan kuruluşlar için açık platform.",
  ru: "Открытая платформа для организаций, которым нужна более быстрая поставка технологий и стандарты, способные устойчиво масштабироваться.",
  uk: "Відкрита платформа для організацій, яким потрібне швидше технологічне впровадження та стандарти, що можуть стабільно масштабуватися.",
  sv: "En öppen plattform för organisationer som behöver snabbare teknikleverans med standarder som kan skalas hållbart över tid.",
};

export const footerLegalByLocale: Record<Locale, { registrationLabel: string }> = {
  th: { registrationLabel: "เลขทะเบียนนิติบุคคล" },
  en: { registrationLabel: "Registration No." },
  "zh-CN": { registrationLabel: "注册号" },
  "zh-TW": { registrationLabel: "公司登記號碼" },
  ja: { registrationLabel: "法人登録番号" },
  ko: { registrationLabel: "법인 등록번호" },
  vi: { registrationLabel: "Số đăng ký" },
  id: { registrationLabel: "Nomor Registrasi" },
  ms: { registrationLabel: "No. Pendaftaran" },
  hi: { registrationLabel: "पंजीकरण संख्या" },
  ar: { registrationLabel: "رقم التسجيل" },
  he: { registrationLabel: "מספר רישום" },
  es: { registrationLabel: "N.º de registro" },
  "pt-BR": { registrationLabel: "Nº de registro" },
  fr: { registrationLabel: "N° d'immatriculation" },
  de: { registrationLabel: "Registernr." },
  it: { registrationLabel: "N. registrazione" },
  nl: { registrationLabel: "Registratienr." },
  pl: { registrationLabel: "Nr rejestracyjny" },
  tr: { registrationLabel: "Kayıt No." },
  ru: { registrationLabel: "Регистрационный номер" },
  uk: { registrationLabel: "Реєстраційний номер" },
  sv: { registrationLabel: "Registreringsnr." },
};

export function getFooterTagline(locale: Locale): string {
  return footerTaglineByLocale[locale] ?? footerTaglineByLocale.en;
}

export function getFooterLegal(locale: Locale): { registrationLabel: string } {
  return footerLegalByLocale[locale] ?? footerLegalByLocale.en;
}
