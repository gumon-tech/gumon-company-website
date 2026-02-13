import type { Metadata } from "next";
import LegacyRouteNotice from "@/components/LegacyRouteNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Moved",
    description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
    path: "/solutions",
  }),
  robots: { index: false, follow: true },
};

export default function LegacySolutionsPage() {
  return (
    <LegacyRouteNotice
      path="/solutions"
      message="เนื้อหาถูกแยกตามเป้าหมายการใช้งานจริงในหน้า Platform, Developers และ Partners"
      primaryHref="/platform"
      primaryLabel="ไปหน้า Platform"
      secondaryHref="/partners"
      secondaryLabel="ไปหน้า Partners"
    />
  );
}
