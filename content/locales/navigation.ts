export type NavItem = {
  href: string;
  label: string;
};

export const primaryNavItems: NavItem[] = [
  { href: "/platform", label: "Platform" },
  { href: "/developers", label: "Developers" },
  { href: "/partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
  { href: "/team", label: "Team" },
];

export const workToolLinks: NavItem[] = [
  { href: "https://docs.gumon.io/", label: "Docs" },
  { href: "https://wiki.gumon.io/", label: "Knowledge Base" },
  { href: "https://work.gumon.io/", label: "Gumon Work" },
  { href: "https://github.com/gumon-tech", label: "GitHub" },
];

export const communityLinks: NavItem[] = [
  { href: "https://dkscenter.gumon.io/th", label: "DKS Center" },
  { href: "https://game.gumon.io/", label: "Gaming Hub" },
];

export const supportLinks: NavItem[] = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
];

export const footerSectionLabels = {
  platform: "Platform",
  audience: "Audience",
  company: "Company",
  tools: "Tools",
  community: "Community",
  support: "Support",
};
