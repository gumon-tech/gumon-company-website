import type { Metadata } from "next";
import LegacyRouteNotice from "@/components/LegacyRouteNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Moved",
    description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
    path: "/ecosystem",
  }),
  robots: { index: false, follow: true },
};

export default function LegacyEcosystemPage() {
  return (
    <LegacyRouteNotice
      path="/ecosystem"
      message="เนื้อหา ecosystem ถูกย้ายไปรวมในหน้า Company และ Partners ตามโครงสร้างใหม่"
      primaryHref="/company"
      primaryLabel="ไปหน้า Company"
      secondaryHref="/partners"
      secondaryLabel="ไปหน้า Partners"
    />
  );
}
