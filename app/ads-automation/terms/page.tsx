import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import LegalDocumentPage from "@/components/LegalDocumentPage";
import { fallbackLocale, resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { adsAutomationPaths } from "@/lib/adsAutomationLegal";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { adsAutomationTermsContent } from "@/content/locales/adsAutomationTerms";

const path = adsAutomationPaths.terms;

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return fallbackLocale;
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, adsAutomationTermsContent);

  return buildPageMetadata({ title: copy.title, description: copy.description, path });
}

export default async function AdsAutomationTermsPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, adsAutomationTermsContent);
  const fallbackNotice = adsAutomationTermsContent[locale] ? null : getFallbackNotice(locale);

  return <LegalDocumentPage copy={copy} path={path} fallbackNotice={fallbackNotice} />;
}
