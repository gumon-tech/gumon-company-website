import TrackedLink from "@/components/TrackedLink";
import type { Locale } from "@/lib/i18n";
import { pickLocalizedContent } from "@/lib/i18nContent";
import { shopAgentPaths } from "@/lib/shopAgentLegal";
import { shopAgentNoticeByLocale } from "@/content/locales/shopAgentNotice";

export default function ShopAgentNotice({ locale }: { locale: Locale }) {
  const copy = pickLocalizedContent(locale, shopAgentNoticeByLocale);
  const links = [
    { href: shopAgentPaths.privacy, label: copy.privacy },
    { href: shopAgentPaths.dataDeletion, label: copy.dataDeletion },
    { href: shopAgentPaths.terms, label: copy.terms },
  ];

  return (
    <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist leading-relaxed">
      <p>{copy.text}</p>
      <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <TrackedLink href={link.href} className="text-ink underline underline-offset-4 hover:opacity-80 transition">
              {link.label}
            </TrackedLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
