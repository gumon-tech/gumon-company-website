"use client";

import { usePathname } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getNavigation } from "@/lib/navigation";

const productNotices = [
  { href: "/ads-automation/privacy/", label: "Gumon Ads Automation" },
  { href: "/shop-agent/privacy/", label: "Gumon Shop Agent" },
];

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
      {/* Product notices: plain root paths so they match the URLs registered with Google and Meta. */}
      {productNotices.map((item) => (
        <a key={item.href} href={item.href} className="hover:text-ink transition">
          {item.label}
        </a>
      ))}
    </>
  );
}
