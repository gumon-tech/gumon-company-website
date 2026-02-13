import type { Locale } from "@/lib/i18n";

export const footerTaglineByLocale: Record<"th" | "en", string> = {
  th: "Open platform สำหรับองค์กรที่ต้องการส่งมอบเทคโนโลยีได้เร็วขึ้น บนมาตรฐานที่ขยายผลได้ต่อเนื่อง",
  en: "Open platform for organizations that need faster technology delivery with standards that scale over time.",
};

export const footerLegalByLocale: Record<"th" | "en", { registrationLabel: string }> = {
  th: { registrationLabel: "เลขทะเบียนนิติบุคคล" },
  en: { registrationLabel: "Registration No." },
};

export function getFooterTagline(locale: Locale): string {
  return locale === "th" ? footerTaglineByLocale.th : footerTaglineByLocale.en;
}

export function getFooterLegal(locale: Locale): { registrationLabel: string } {
  return locale === "th" ? footerLegalByLocale.th : footerLegalByLocale.en;
}
