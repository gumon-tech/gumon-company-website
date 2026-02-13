import { notFound } from "next/navigation";
import { isSupportedLocale, supportedLocales } from "@/lib/i18n";
import { getLocaleMeta } from "@/lib/localeMeta";

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const localeMeta = getLocaleMeta(locale);

  return (
    <div lang={localeMeta.htmlLang} dir={localeMeta.dir}>
      {children}
    </div>
  );
}
