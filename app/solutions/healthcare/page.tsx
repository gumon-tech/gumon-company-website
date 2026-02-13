import type { Metadata } from "next";
import LegacyRouteNotice from "@/components/LegacyRouteNotice";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Page Moved",
    description: "หน้านี้ถูกย้ายแล้ว กรุณาไปยังหน้าใหม่ของเว็บไซต์ Gumon",
    path: "/solutions/healthcare",
  }),
  robots: { index: false, follow: true },
};

export default function LegacySolutionDetailPage() {
  return (
    <LegacyRouteNotice
      path="/solutions/healthcare"
      message="หน้ารายละเอียด solution ถูกย้ายแล้ว โปรดเริ่มจากหน้า Platform หรือเลือกเส้นทางใหม่จากหน้า Home"
      primaryHref="/platform"
      primaryLabel="ไปหน้า Platform"
      secondaryHref="/"
      secondaryLabel="กลับหน้า Home"
    />
  );
}
