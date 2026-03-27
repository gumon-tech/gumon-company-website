"use client";

import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getNavigation } from "@/lib/navigation";

export default function PrimaryNav() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const { primaryNavItems } = getNavigation(locale);

  return (
    <>
      {primaryNavItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </>
  );
}
