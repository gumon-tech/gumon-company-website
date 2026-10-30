export type ShopAgentLegalLink = { href: string; label: string };

export type ShopAgentLegalSection = {
  title: string;
  body?: string;
  items?: string[];
  links?: ShopAgentLegalLink[];
};

export type ShopAgentLegalCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  updatedLabel: string;
  updatedAt: string;
  intro: string;
  sections: ShopAgentLegalSection[];
};

export const shopAgentPaths = {
  privacy: "/shop-agent/privacy",
  dataDeletion: "/shop-agent/data-deletion",
  terms: "/shop-agent/terms",
} as const;
