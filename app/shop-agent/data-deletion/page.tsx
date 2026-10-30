import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import ShopAgentLegalPage from "@/components/ShopAgentLegalPage";
import { fallbackLocale, resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { shopAgentPaths } from "@/lib/shopAgentLegal";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { shopAgentDataDeletionContent } from "@/content/locales/shopAgentDataDeletion";

const path = shopAgentPaths.dataDeletion;

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return fallbackLocale;
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, shopAgentDataDeletionContent);

  return buildPageMetadata({ title: copy.title, description: copy.description, path });
}

export default async function ShopAgentDataDeletionPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, shopAgentDataDeletionContent);
  const fallbackNotice = shopAgentDataDeletionContent[locale] ? null : getFallbackNotice(locale);

  return <ShopAgentLegalPage copy={copy} path={path} fallbackNotice={fallbackNotice} />;
}
