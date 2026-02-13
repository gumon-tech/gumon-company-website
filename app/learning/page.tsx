import type { Metadata } from "next";
import LegacyRouteNotice from "@/components/LegacyRouteNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Moved",
    description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
    path: "/learning",
  }),
  robots: { index: false, follow: true },
};

export default function LegacyLearningPage() {
  return (
    <LegacyRouteNotice
      path="/learning"
      message="เนื้อหา learning ถูกย้ายไปรวมในเส้นทาง Developers และ Resources"
      primaryHref="/developers"
      primaryLabel="ไปหน้า Developers"
      secondaryHref="/resources"
      secondaryLabel="ไปหน้า Resources"
    />
  );
}
