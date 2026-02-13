"use client";

import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getFooterTagline } from "@/content/locales/footer";

export default function FooterTagline() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);

  return <>{getFooterTagline(locale)}</>;
}
