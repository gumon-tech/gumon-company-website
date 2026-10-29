import type { Locale } from "@/lib/i18n";

type WhatsAppCopy = { label: string; message: string };

export const whatsAppNumber = "66614722055";

// The prefilled message must stay a plain greeting: the Ops inbox routes messages that start with
// TTDP-, visit/appointment requests or [report] tags to other flows.
export const whatsAppCopyByLocale: Record<Locale, WhatsAppCopy> = {
  th: { label: "คุยกับ Gumon ทาง WhatsApp", message: "สวัสดี Gumon ติดต่อมาจากเว็บไซต์ gumon.io" },
  en: { label: "Chat with Gumon on WhatsApp", message: "Hello Gumon, I am getting in touch from gumon.io." },
  "zh-CN": { label: "通过 WhatsApp 联系 Gumon", message: "你好 Gumon，我是从 gumon.io 网站联系你们的。" },
  "zh-TW": { label: "透過 WhatsApp 聯絡 Gumon", message: "你好 Gumon，我是從 gumon.io 網站聯絡你們的。" },
  ja: { label: "WhatsAppでGumonに連絡", message: "こんにちは、Gumonさん。gumon.io からご連絡しています。" },
  ko: { label: "WhatsApp으로 Gumon에 문의", message: "안녕하세요 Gumon, gumon.io 웹사이트를 보고 연락드립니다." },
  vi: { label: "Trò chuyện với Gumon qua WhatsApp", message: "Xin chào Gumon, tôi liên hệ từ trang gumon.io." },
  id: { label: "Chat dengan Gumon di WhatsApp", message: "Halo Gumon, saya menghubungi dari situs gumon.io." },
  ms: { label: "Sembang dengan Gumon di WhatsApp", message: "Helo Gumon, saya menghubungi melalui laman gumon.io." },
  hi: { label: "WhatsApp पर Gumon से बात करें", message: "नमस्ते Gumon, मैं gumon.io वेबसाइट से संपर्क कर रहा/रही हूँ।" },
  ar: { label: "تواصل مع Gumon عبر واتساب", message: "مرحبًا Gumon، أتواصل معكم من موقع gumon.io." },
  he: { label: "שיחה עם Gumon בוואטסאפ", message: "שלום Gumon, אני פונה אליכם מהאתר gumon.io." },
  es: { label: "Chatea con Gumon por WhatsApp", message: "Hola Gumon, les escribo desde gumon.io." },
  "pt-BR": { label: "Fale com a Gumon pelo WhatsApp", message: "Olá, Gumon! Estou entrando em contato pelo site gumon.io." },
  fr: { label: "Discuter avec Gumon sur WhatsApp", message: "Bonjour Gumon, je vous contacte depuis gumon.io." },
  de: { label: "Mit Gumon über WhatsApp chatten", message: "Hallo Gumon, ich melde mich über gumon.io." },
  it: { label: "Scrivi a Gumon su WhatsApp", message: "Buongiorno Gumon, vi contatto da gumon.io." },
  nl: { label: "Chat met Gumon via WhatsApp", message: "Hallo Gumon, ik neem contact op via gumon.io." },
  pl: { label: "Napisz do Gumon na WhatsApp", message: "Dzień dobry Gumon, piszę ze strony gumon.io." },
  tr: { label: "Gumon ile WhatsApp'ta yazışın", message: "Merhaba Gumon, gumon.io sitesinden ulaşıyorum." },
  ru: { label: "Написать Gumon в WhatsApp", message: "Здравствуйте, Gumon! Пишу вам с сайта gumon.io." },
  uk: { label: "Написати Gumon у WhatsApp", message: "Вітаю, Gumon! Пишу вам із сайту gumon.io." },
  sv: { label: "Chatta med Gumon på WhatsApp", message: "Hej Gumon, jag hör av mig via gumon.io." },
};

export function getWhatsAppHref(locale: Locale) {
  const copy = whatsAppCopyByLocale[locale] ?? whatsAppCopyByLocale.en;
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(copy.message)}`;
}
