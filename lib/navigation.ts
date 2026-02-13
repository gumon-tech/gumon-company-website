import {
  communityLinks,
  legalLinks,
  primaryNavItems,
  supportLinks,
  workToolLinks,
} from "@/content/locales/navigation";

export type NavItem = {
  href: string;
  label: string;
};

export { primaryNavItems, workToolLinks, communityLinks, supportLinks, legalLinks };

export const stickyCtaEnabledRoutes = new Set([
  "/",
  "/platform",
  "/developers",
  "/partners",
  "/resources",
  "/company",
  "/team",
]);

export const sitemapRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/platform", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/developers", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/partners", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/resources", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/company", changeFrequency: "monthly" as const, priority: 0.75 },
  { path: "/team", changeFrequency: "monthly" as const, priority: 0.72 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.65 },
  { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/cookies", changeFrequency: "monthly" as const, priority: 0.5 },
];
