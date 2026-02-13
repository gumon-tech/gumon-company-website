"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  detectLocaleFromPathname,
  localizePath,
  stripLocalePrefix,
  supportedLocales,
  type Locale,
  getUiCopy,
} from "@/lib/i18n";
import { languageNamesByLocale } from "@/content/locales/languageNames";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);
  const basePath = useMemo(() => stripLocalePrefix(pathname || "/"), [pathname]);

  const onChange = (nextLocale: Locale) => {
    router.push(localizePath(basePath, nextLocale));
  };

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-line/50 bg-bg1/60 px-2.5 py-1.5 text-xs text-mist">
      <span className="hidden 2xl:inline">{copy.language}</span>
      <select
        aria-label={copy.language}
        value={locale}
        onChange={(event) => onChange(event.target.value as Locale)}
        className="bg-transparent text-ink text-xs focus:outline-none"
      >
        {supportedLocales.map((code) => (
          <option key={code} value={code}>
            {languageNamesByLocale[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
