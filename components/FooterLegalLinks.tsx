"use client";

import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getNavigation } from "@/lib/navigation";

export default function FooterLegalLinks() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const { legalLinks } = getNavigation(locale);

  return (
    <>
      {legalLinks.map((item) => (
        <TrackedLink key={item.href} href={item.href} className="hover:text-ink transition">
          {item.label}
        </TrackedLink>
      ))}
    </>
  );
}
