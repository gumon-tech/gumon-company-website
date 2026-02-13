"use client";

import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getCompanyInfo } from "@/lib/companyInfo";
import { getFooterLegal } from "@/content/locales/footer";

export default function FooterLegalLine() {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const companyInfo = getCompanyInfo(locale);
  const copy = getFooterLegal(locale);

  return (
    <>
      {companyInfo.legalName} | {copy.registrationLabel} {companyInfo.registrationNumber}
    </>
  );
}
