import { sitemapRoutes } from "@/lib/navigation";
import { supportedLocales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/siteUrl";
export const dynamic = "force-static";

export default function sitemap() {
  const base = getSiteUrl();
  const now = new Date();

  const localizedRoutes = supportedLocales.flatMap((locale) =>
    sitemapRoutes.map((item) => ({
      url: new URL(item.path === "/" ? `/${locale}/` : `/${locale}${item.path}/`, base).toString(),
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
  );

  const rootRoutes = sitemapRoutes.map((item) => ({
    url: new URL(item.path === "/" ? "/" : `${item.path}/`, base).toString(),
    lastModified: now,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  return [...rootRoutes, ...localizedRoutes];
}
