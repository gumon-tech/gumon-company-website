"use client";

import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getNavigation } from "@/lib/navigation";

const platformRoutes = new Set(["/platform", "/developers"]);
const audienceRoutes = new Set(["/partners", "/resources", "/work-and-learn"]);
const companyRoutes = new Set(["/company", "/team"]);

export default function FooterNavigation() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const {
    primaryNavItems,
    workToolLinks,
    communityLinks,
    supportLinks,
    footerSectionLabels,
  } = getNavigation(locale);

  const platformLinks = primaryNavItems.filter((item) => platformRoutes.has(item.href));
  const audienceLinks = primaryNavItems.filter((item) => audienceRoutes.has(item.href));
  const companyLinks = primaryNavItems.filter((item) => companyRoutes.has(item.href));

  return (
    <>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.platform}</div>
        <div className="mt-3 grid gap-2">
          {platformLinks.map((item) => (
            <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
              {item.label}
            </TrackedLink>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.audience}</div>
        <div className="mt-3 grid gap-2">
          {audienceLinks.map((item) => (
            <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
              {item.label}
            </TrackedLink>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.company}</div>
        <div className="mt-3 grid gap-2">
          {companyLinks.map((item) => (
            <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
              {item.label}
            </TrackedLink>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.tools}</div>
        <div className="mt-3 grid gap-2">
          {workToolLinks.map((item) => (
            <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-mist hover:text-ink transition">
              {item.label}
            </TrackedLink>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.community}</div>
        <div className="mt-3 grid gap-2">
          {communityLinks.map((item) => (
            <TrackedLink key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-mist hover:text-ink transition">
              {item.label}
            </TrackedLink>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] tracking-[0.18em] uppercase text-mist">{footerSectionLabels.support}</div>
        <div className="mt-3 grid gap-2">
          {supportLinks.map((item) => (
            <TrackedLink key={item.href} href={item.href} className="text-mist hover:text-ink transition">
              {item.label}
            </TrackedLink>
          ))}
        </div>
      </div>
    </>
  );
}
