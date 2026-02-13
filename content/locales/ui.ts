export type UiCopy = {
  menu: string;
  contactTeam: string;
  tools: string;
  workTools: string;
  community: string;
  support: string;
  cookieShort: string;
  cookieNotice: string;
  cookieEssential: string;
  cookieAcceptAll: string;
  resetCookie: string;
  backToTop: string;
  sendEmailAria: string;
  copy: string;
  copied: string;
  language: string;
  teamFilters: {
    all: string;
    leadership: string;
    engineering: string;
    design: string;
    media: string;
  };
};

export const uiCopyByLocale: Record<"th" | "en", UiCopy> = {
  en: {
    menu: "Menu",
    contactTeam: "Contact Team",
    tools: "Tools",
    workTools: "Work Tools",
    community: "Community",
    support: "Support",
    cookieShort: "This site uses essential cookies and optional analytics cookies when you consent.",
    cookieNotice: "Cookie Notice",
    cookieEssential: "Essential only",
    cookieAcceptAll: "Accept all",
    resetCookie: "Reset cookie preferences",
    backToTop: "Top",
    sendEmailAria: "Send email to Gumon",
    copy: "Copy",
    copied: "Copied",
    language: "Language",
    teamFilters: {
      all: "All",
      leadership: "Leadership",
      engineering: "Engineering",
      design: "Design",
      media: "Media",
    },
  },
  th: {
    menu: "เมนู",
    contactTeam: "ติดต่อทีมงาน",
    tools: "เครื่องมือ",
    workTools: "เครื่องมือทำงาน",
    community: "คอมมูนิตี้",
    support: "ช่วยเหลือ",
    cookieShort: "เว็บไซต์นี้ใช้คุกกี้ที่จำเป็น และคุกกี้วิเคราะห์เมื่อคุณยินยอม",
    cookieNotice: "นโยบายคุกกี้",
    cookieEssential: "จำเป็นเท่านั้น",
    cookieAcceptAll: "ยอมรับทั้งหมด",
    resetCookie: "รีเซ็ตการตั้งค่าคุกกี้",
    backToTop: "ด้านบน",
    sendEmailAria: "ส่งอีเมลถึง Gumon",
    copy: "คัดลอก",
    copied: "คัดลอกแล้ว",
    language: "ภาษา",
    teamFilters: {
      all: "ทั้งหมด",
      leadership: "ผู้บริหาร",
      engineering: "วิศวกรรม",
      design: "ดีไซน์",
      media: "มีเดีย",
    },
  },
};
