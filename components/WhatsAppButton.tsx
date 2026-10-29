"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getWhatsAppHref, whatsAppCopyByLocale } from "@/content/locales/whatsapp";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = whatsAppCopyByLocale[locale] ?? whatsAppCopyByLocale.en;

  return (
    <a
      href={getWhatsAppHref(locale)}
      target="_blank"
      rel="noopener"
      aria-label={copy.label}
      title={copy.label}
      className="whatsapp-fab"
    >
      <Image src="/assets/social/whatsapp.svg" alt="" width={52} height={52} sizes="52px" decoding="async" />
    </a>
  );
}
