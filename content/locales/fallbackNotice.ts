import type { Locale } from "@/lib/i18n";

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "此页面暂时提供英文版本。我们正在准备中文内容。",
  "zh-TW": "此頁目前先提供英文版本。我們正在準備中文內容。",
  ja: "このページは現在、英語版でご覧いただけます。日本語版は準備中です。",
  ko: "현재 이 페이지는 영어로 제공되고 있습니다. 한국어 버전도 준비 중입니다.",
  vi: "Trang này hiện đang được hiển thị bằng tiếng Anh. Phiên bản tiếng Việt đang được chuẩn bị.",
  id: "Halaman ini saat ini tersedia dalam bahasa Inggris. Versi bahasa Indonesia sedang disiapkan.",
  ms: "Halaman ini kini tersedia dalam bahasa Inggeris. Versi Bahasa Melayu sedang disediakan.",
  hi: "यह पेज अभी अंग्रेज़ी में उपलब्ध है। हिंदी संस्करण तैयार किया जा रहा है।",
  es: "Esta página está disponible por ahora en inglés. La versión en español está en preparación.",
  fr: "Cette page est actuellement disponible en anglais. Une version française est en préparation.",
  de: "Diese Seite ist derzeit auf Englisch verfügbar. Eine deutsche Version wird vorbereitet.",
  it: "Questa pagina è attualmente disponibile in inglese. La versione italiana è in preparazione.",
  nl: "Deze pagina is momenteel beschikbaar in het Engels. Een Nederlandse versie wordt voorbereid.",
  pl: "Ta strona jest obecnie dostępna po angielsku. Wersja polska jest w przygotowaniu.",
  tr: "Bu sayfa şu anda İngilizce olarak sunulmaktadır. Türkçe sürüm hazırlanmaktadır.",
  ru: "Эта страница пока доступна на английском языке. Русская версия находится в подготовке.",
  uk: "Ця сторінка наразі доступна англійською мовою. Українська версія готується.",
  sv: "Den här sidan finns just nu på engelska. En svensk version håller på att förberedas.",
  "pt-BR": "Esta página está disponível, por enquanto, em inglês. A versão em português do Brasil está em preparação.",
  ar: "هذه الصفحة متاحة حالياً باللغة الإنجليزية. يجري إعداد النسخة العربية.",
  he: "העמוד הזה זמין כרגע באנגלית. גרסה בעברית נמצאת בהכנה.",
};

export function getFallbackNotice(locale: Locale): string | null {
  if (locale === "th" || locale === "en") return null;
  return fallbackNoticeByLocale[locale] ?? fallbackNoticeByLocale.en ?? "This page is currently available in English.";
}
