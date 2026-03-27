import type { Locale } from "@/lib/i18n";

type CopyEmailButtonCopy = { label: string; copied: string; aria: string };
type LegacyRouteNoticeCopy = { kicker: string; heading: string };

export const copyEmailButtonCopyByLocale: Record<Locale, CopyEmailButtonCopy> = {
  th: { label: "คัดลอก", copied: "คัดลอกแล้ว", aria: "คัดลอกอีเมลติดต่อ" },
  en: { label: "Copy", copied: "Copied", aria: "Copy contact email" },
  "zh-CN": { label: "复制", copied: "已复制", aria: "复制联系邮箱" },
  "zh-TW": { label: "複製", copied: "已複製", aria: "複製聯絡電子郵件" },
  ja: { label: "コピー", copied: "コピーしました", aria: "連絡先メールをコピー" },
  ko: { label: "복사", copied: "복사됨", aria: "문의 이메일 복사" },
  vi: { label: "Sao chép", copied: "Đã sao chép", aria: "Sao chép email liên hệ" },
  id: { label: "Salin", copied: "Tersalin", aria: "Salin email kontak" },
  ms: { label: "Salin", copied: "Disalin", aria: "Salin e-mel hubungan" },
  hi: { label: "कॉपी", copied: "कॉपी हो गया", aria: "संपर्क ईमेल कॉपी करें" },
  ar: { label: "نسخ", copied: "تم النسخ", aria: "نسخ بريد التواصل الإلكتروني" },
  he: { label: "העתק", copied: "הועתק", aria: "העתקת כתובת הדוא\"ל ליצירת קשר" },
  es: { label: "Copiar", copied: "Copiado", aria: "Copiar correo de contacto" },
  "pt-BR": { label: "Copiar", copied: "Copiado", aria: "Copiar e-mail de contato" },
  fr: { label: "Copier", copied: "Copié", aria: "Copier l'e-mail de contact" },
  de: { label: "Kopieren", copied: "Kopiert", aria: "Kontakt-E-Mail kopieren" },
  it: { label: "Copia", copied: "Copiato", aria: "Copia e-mail di contatto" },
  nl: { label: "Kopiëren", copied: "Gekopieerd", aria: "Contact-e-mail kopiëren" },
  pl: { label: "Kopiuj", copied: "Skopiowano", aria: "Skopiuj adres e-mail do kontaktu" },
  tr: { label: "Kopyala", copied: "Kopyalandı", aria: "İletişim e-postasını kopyala" },
  ru: { label: "Копировать", copied: "Скопировано", aria: "Скопировать контактный e-mail" },
  uk: { label: "Копіювати", copied: "Скопійовано", aria: "Скопіювати контактну електронну адресу" },
  sv: { label: "Kopiera", copied: "Kopierad", aria: "Kopiera kontaktmejl" },
};

export const legacyRouteNoticeCopyByLocale: Record<Locale, LegacyRouteNoticeCopy> = {
  th: { kicker: "Legacy Route", heading: "หน้านี้ถูกย้ายในโครงสร้างใหม่" },
  en: { kicker: "Legacy Route", heading: "This page has moved in the new structure" },
  "zh-CN": { kicker: "Legacy Route", heading: "此页面已迁移到新结构中" },
  "zh-TW": { kicker: "Legacy Route", heading: "此頁已移至新結構中" },
  ja: { kicker: "Legacy Route", heading: "このページは新しい構成に移動しました" },
  ko: { kicker: "Legacy Route", heading: "이 페이지는 새 구조로 이동되었습니다" },
  vi: { kicker: "Legacy Route", heading: "Trang này đã được chuyển sang cấu trúc mới" },
  id: { kicker: "Legacy Route", heading: "Halaman ini telah dipindahkan ke struktur baru" },
  ms: { kicker: "Legacy Route", heading: "Halaman ini telah dipindahkan ke struktur baharu" },
  hi: { kicker: "Legacy Route", heading: "यह पेज अब नए स्ट्रक्चर में स्थानांतरित कर दिया गया है" },
  ar: { kicker: "Legacy Route", heading: "تم نقل هذه الصفحة إلى البنية الجديدة" },
  he: { kicker: "Legacy Route", heading: "העמוד הזה הועבר למבנה החדש" },
  es: { kicker: "Legacy Route", heading: "Esta página se ha movido a la nueva estructura" },
  "pt-BR": { kicker: "Legacy Route", heading: "Esta página foi movida para a nova estrutura" },
  fr: { kicker: "Legacy Route", heading: "Cette page a été déplacée dans la nouvelle structure" },
  de: { kicker: "Legacy Route", heading: "Diese Seite wurde in die neue Struktur verschoben" },
  it: { kicker: "Legacy Route", heading: "Questa pagina è stata spostata nella nuova struttura" },
  nl: { kicker: "Legacy Route", heading: "Deze pagina is verplaatst naar de nieuwe structuur" },
  pl: { kicker: "Legacy Route", heading: "Ta strona została przeniesiona do nowej struktury" },
  tr: { kicker: "Legacy Route", heading: "Bu sayfa yeni yapıya taşındı" },
  ru: { kicker: "Legacy Route", heading: "Эта страница перенесена в новую структуру" },
  uk: { kicker: "Legacy Route", heading: "Цю сторінку перенесено до нової структури" },
  sv: { kicker: "Legacy Route", heading: "Den här sidan har flyttats till den nya strukturen" },
};

export function getCopyEmailButtonCopy(locale: Locale) {
  return copyEmailButtonCopyByLocale[locale] ?? copyEmailButtonCopyByLocale.en;
}

export function getLegacyRouteNoticeCopy(locale: Locale) {
  return legacyRouteNoticeCopyByLocale[locale] ?? legacyRouteNoticeCopyByLocale.en;
}
