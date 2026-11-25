import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import LegalDocumentPage from "@/components/LegalDocumentPage";
import { fallbackLocale, resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { adsAutomationPaths } from "@/lib/adsAutomationLegal";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { adsAutomationHomeContent } from "@/content/locales/adsAutomationHome";

const path = adsAutomationPaths.home;

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return fallbackLocale;
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, adsAutomationHomeContent);

  return buildPageMetadata({ title: copy.title, description: copy.description, path });
}

export default async function AdsAutomationHomePage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, adsAutomationHomeContent);
  const fallbackNotice = adsAutomationHomeContent[locale] ? null : getFallbackNotice(locale);

  return (
    <LegalDocumentPage
      copy={copy}
      path={path}
      fallbackNotice={fallbackNotice}
      logo={{ src: "/assets/logo/gumon-rose.png", alt: "Gumon logo" }}
    />
  );
}
