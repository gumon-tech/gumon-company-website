import type { Locale } from "@/lib/i18n";

export type NavItem = {
  href: string;
  label: string;
};

type FooterSectionLabels = {
  platform: string;
  audience: string;
  company: string;
  tools: string;
  community: string;
  support: string;
};

type NavigationSet = {
  primaryNavItems: NavItem[];
  workToolLinks: NavItem[];
  communityLinks: NavItem[];
  supportLinks: NavItem[];
  legalLinks: NavItem[];
  footerSectionLabels: FooterSectionLabels;
};

export const navigationByLocale: Record<"th" | "en", NavigationSet> = {
  th: {
    primaryNavItems: [
      { href: "/platform", label: "แพลตฟอร์ม" },
      { href: "/developers", label: "นักพัฒนา" },
      { href: "/partners", label: "พาร์ตเนอร์" },
      { href: "/resources", label: "ทรัพยากร" },
      { href: "/company", label: "บริษัท" },
      { href: "/team", label: "ทีม" },
    ],
    workToolLinks: [
      { href: "https://docs.gumon.io/", label: "เอกสาร" },
      { href: "https://wiki.gumon.io/", label: "คลังความรู้" },
      { href: "https://work.gumon.io/", label: "Gumon Work" },
      { href: "https://github.com/gumon-tech", label: "GitHub" },
    ],
    communityLinks: [
      { href: "https://dkscenter.gumon.io/th", label: "DKS Center" },
      { href: "https://game.gumon.io/", label: "Gaming Hub" },
    ],
    supportLinks: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "ติดต่อ" },
    ],
    legalLinks: [
      { href: "/privacy", label: "ความเป็นส่วนตัว" },
      { href: "/terms", label: "ข้อกำหนด" },
      { href: "/cookies", label: "คุกกี้" },
    ],
    footerSectionLabels: {
      platform: "แพลตฟอร์ม",
      audience: "กลุ่มผู้ใช้งาน",
      company: "บริษัท",
      tools: "เครื่องมือ",
      community: "คอมมูนิตี้",
      support: "ช่วยเหลือ",
    },
  },
  en: {
    primaryNavItems: [
      { href: "/platform", label: "Platform" },
      { href: "/developers", label: "Developers" },
      { href: "/partners", label: "Partners" },
      { href: "/resources", label: "Resources" },
      { href: "/company", label: "Company" },
      { href: "/team", label: "Team" },
    ],
    workToolLinks: [
      { href: "https://docs.gumon.io/", label: "Docs" },
      { href: "https://wiki.gumon.io/", label: "Knowledge Base" },
      { href: "https://work.gumon.io/", label: "Gumon Work" },
      { href: "https://github.com/gumon-tech", label: "GitHub" },
    ],
    communityLinks: [
      { href: "https://dkscenter.gumon.io/th", label: "DKS Center" },
      { href: "https://game.gumon.io/", label: "Gaming Hub" },
    ],
    supportLinks: [
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
    legalLinks: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/cookies", label: "Cookies" },
    ],
    footerSectionLabels: {
      platform: "Platform",
      audience: "Audience",
      company: "Company",
      tools: "Tools",
      community: "Community",
      support: "Support",
    },
  },
};

export function getNavigation(locale: Locale): NavigationSet {
  return locale === "th" ? navigationByLocale.th : navigationByLocale.en;
}

export const primaryNavItems = navigationByLocale.en.primaryNavItems;
export const workToolLinks = navigationByLocale.en.workToolLinks;
export const communityLinks = navigationByLocale.en.communityLinks;
export const supportLinks = navigationByLocale.en.supportLinks;
export const legalLinks = navigationByLocale.en.legalLinks;
export const footerSectionLabels = navigationByLocale.en.footerSectionLabels;
