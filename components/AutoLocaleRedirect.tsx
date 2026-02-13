"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  fallbackLocale,
  getLocalePrefixFromPathname,
  localizePath,
  resolveLocaleFromPriority,
} from "@/lib/i18n";

export default function AutoLocaleRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!pathname || getLocalePrefixFromPathname(pathname)) return;

    const locale = resolveLocaleFromPriority([
      ...navigator.languages,
      navigator.language,
      fallbackLocale,
    ]);

    const nextPath = localizePath(pathname, locale);
    const query = window.location.search ?? "";
    const hash = window.location.hash ?? "";
    const target = `${nextPath}${query}${hash}`;

    if (target !== `${pathname}${query}${hash}`) {
      router.replace(target);
    }
  }, [pathname, router]);

  return null;
}
