import type { Metadata } from "next";
import LegacyRouteNotice from "@/components/LegacyRouteNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Moved",
    description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
    path: "/investors",
  }),
  robots: { index: false, follow: true },
};

export default function LegacyInvestorsPage() {
  return (
    <LegacyRouteNotice
      path="/investors"
      message="เนื้อหาสำหรับผู้บริหารและผู้มีส่วนได้ส่วนเสียถูกรวมในหน้า Company"
      primaryHref="/company"
      primaryLabel="ไปหน้า Company"
      secondaryHref="/contact"
      secondaryLabel="ติดต่อทีมงาน"
    />
  );
}
