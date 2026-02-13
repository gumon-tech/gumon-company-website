import type { Locale } from "@/lib/i18n";

export const copyEmailButtonCopyByLocale: Record<"th" | "en", { label: string; copied: string; aria: string }> = {
  th: {
    label: "คัดลอก",
    copied: "คัดลอกแล้ว",
    aria: "คัดลอกอีเมลติดต่อ",
  },
  en: {
    label: "Copy",
    copied: "Copied",
    aria: "Copy contact email",
  },
};

export const legacyRouteNoticeCopyByLocale: Record<"th" | "en", { kicker: string; heading: string }> = {
  th: {
    kicker: "Legacy Route",
    heading: "หน้านี้ถูกย้ายในโครงสร้างใหม่",
  },
  en: {
    kicker: "Legacy Route",
    heading: "This page has moved in the new structure",
  },
};

export function getCopyEmailButtonCopy(locale: Locale) {
  return locale === "th" ? copyEmailButtonCopyByLocale.th : copyEmailButtonCopyByLocale.en;
}

export function getLegacyRouteNoticeCopy(locale: Locale) {
  return locale === "th" ? legacyRouteNoticeCopyByLocale.th : legacyRouteNoticeCopyByLocale.en;
}
