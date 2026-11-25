export type LegalDocumentLink = { href: string; label: string };

export type LegalDocumentSection = {
  title: string;
  body?: string;
  items?: string[];
  links?: LegalDocumentLink[];
};

export type LegalDocumentCopy = {
  title: string;
  description: string;
  crumb: string;
  kicker: string;
  heading: string;
  updatedLabel: string;
  updatedAt: string;
  intro: string;
  sections: LegalDocumentSection[];
};
