import type { LegalDocumentCopy } from "@/lib/legalDocument";

export type ShopAgentLegalCopy = LegalDocumentCopy;

export const shopAgentPaths = {
  privacy: "/shop-agent/privacy",
  dataDeletion: "/shop-agent/data-deletion",
  terms: "/shop-agent/terms",
} as const;
