import type { Metadata } from "next";
import LegacyRouteNotice from "@/components/LegacyRouteNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Moved",
    description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
    path: "/team",
  }),
  robots: { index: false, follow: true },
};

export default function LegacyTeamPage() {
  return (
    <LegacyRouteNotice
      path="/team"
      message="ข้อมูลทีมถูกรวมในหน้า Company และช่องทางติดต่อหลักอยู่ที่ Contact"
      primaryHref="/company"
      primaryLabel="ไปหน้า Company"
      secondaryHref="/contact"
      secondaryLabel="ไปหน้า Contact"
    />
  );
}
