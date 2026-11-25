import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ShopAgentNotice from "@/components/ShopAgentNotice";
import TrackedLink from "@/components/TrackedLink";
import { fallbackLocale, resolveLocale, type Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import { privacyContent, privacyMeta } from "@/content/locales/privacy";
import { privacyAdsAutomationContent } from "@/content/locales/privacyAdsAutomation";

async function getLocaleFromParams(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return fallbackLocale;
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const localized = pickLocalizedContent(locale, privacyMeta);

  return buildPageMetadata({
    title: localized.title,
    description: localized.description,
    path: "/privacy",
  });
}

export default async function PrivacyPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocaleFromParams(params);
  const copy = pickLocalizedContent(locale, privacyContent);
  const fallbackNotice = privacyContent[locale] ? null : getFallbackNotice(locale);
  const ads = pickLocalizedContent(locale, privacyAdsAutomationContent);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/privacy" }]} />
      <div className="ui-container max-w-4xl">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-4 ui-small">Last updated: {copy.updatedAt}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <ShopAgentNotice locale={locale} />

        <div className="mt-10 card p-7 shadow-soft space-y-8 text-sm md:text-base text-mist leading-relaxed">
          <p>{copy.intro}</p>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <h2 className="ui-h3 text-ink">{section.title}</h2>
              {section.body ? <p className="mt-2">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-3 grid gap-2">
                  {section.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        <div id="ads-automation" className="mt-10 card p-7 shadow-soft space-y-8 text-sm md:text-base text-mist leading-relaxed scroll-mt-24">
          <h2 className="ui-h2 text-ink">{ads.heading}</h2>
          <p className="ui-small">{ads.updated}</p>
          <p>{ads.intro}</p>
          <div className="rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm">
            <p>{ads.documentsLabel}</p>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {ads.documents.map((doc) => (
                <li key={doc.href}>
                  <TrackedLink href={doc.href} className="text-ink underline underline-offset-4 hover:opacity-80 transition">
                    {doc.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {ads.sections.map((section) => (
            <div key={section.title}>
              <h3 className="ui-h3 text-ink">{section.title}</h3>
              {section.body ? <p className="mt-2">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-3 grid gap-2">
                  {section.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              ) : null}
              {section.links ? (
                <ul className="mt-3 grid gap-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink underline underline-offset-4 hover:opacity-80 transition">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
