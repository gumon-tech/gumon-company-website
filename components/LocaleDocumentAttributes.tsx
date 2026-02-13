"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getLocaleMeta } from "@/lib/localeMeta";

export default function LocaleDocumentAttributes() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const meta = getLocaleMeta(locale);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = meta.htmlLang;
    root.dir = meta.dir;
    root.dataset.locale = locale;
  }, [locale, meta.dir, meta.htmlLang]);

  return null;
}
