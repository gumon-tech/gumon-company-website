import type { Locale } from "@/lib/i18n";

type Direction = "ltr" | "rtl";

type LocaleMeta = {
  dir: Direction;
  htmlLang: string;
};

const rtlLocales = new Set<Locale>(["ar", "he"]);

const localeToHtmlLang: Record<Locale, string> = {
  th: "th",
  en: "en",
  "zh-CN": "zh-CN",
  "zh-TW": "zh-TW",
  ja: "ja",
  ko: "ko",
  vi: "vi",
  id: "id",
  ms: "ms",
  hi: "hi",
  ar: "ar",
  he: "he",
  es: "es",
  "pt-BR": "pt-BR",
  fr: "fr",
  de: "de",
  it: "it",
  nl: "nl",
  pl: "pl",
  tr: "tr",
  ru: "ru",
  uk: "uk",
  sv: "sv",
};

export function getLocaleMeta(locale: Locale): LocaleMeta {
  return {
    dir: rtlLocales.has(locale) ? "rtl" : "ltr",
    htmlLang: localeToHtmlLang[locale],
  };
}
