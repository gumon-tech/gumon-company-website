import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { solutionItems } from "./data";

export const metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "โซลูชันของ Gumon แยกตามอุตสาหกรรมเพื่อให้เห็นเส้นทางใช้งานจริงและผลลัพธ์ที่วัดได้",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Solutions", path: "/solutions" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Solutions</p>
          <h1 className="ui-h1">โซลูชันตามบริบทธุรกิจ เพื่อส่งมอบได้จริงในโลกหน้างาน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราจัดโครงโซลูชันตามอุตสาหกรรมเพื่อให้ทีมตัดสินใจได้เร็วขึ้นว่าเริ่มจากส่วนไหนของแพลตฟอร์ม
            และควรวางแผนการส่งมอบอย่างไรให้เหมาะกับข้อจำกัดของแต่ละองค์กร.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {solutionItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <TrackedLink
                href={`/solutions/${item.slug}`}
                eventName="solutions_card_click"
                category="navigation"
                label={`solutions-${item.slug}`}
                location="solutions.hub.cards"
                className="route-card block h-full"
              >
                <p className="ui-kicker">Industry Solution</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-3 text-sm text-mist leading-relaxed">{item.summary}</p>
                <p className="mt-3 text-sm leading-relaxed">
                  <span className="font-medium">ดูรายละเอียด implementation path</span>
                </p>
              </TrackedLink>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Next Step</p>
          <h2 className="mt-3 ui-h2">ต้องการประเมินแนวทางที่เหมาะกับองค์กรของคุณ</h2>
          <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
            ทีมงานช่วยวางลำดับเริ่มต้นตามบริบทระบบเดิม ข้อจำกัดของทีม และเป้าหมายการขยายระยะถัดไป.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" eventName="solutions_cta_click" category="contact" label="solutions-hub-contact" location="solutions.hub.next-step" className="btn-primary">
              คุยโจทย์กับทีมงาน
            </TrackedLink>
            <TrackedLink href="/platform" eventName="solutions_cta_click" category="navigation" label="solutions-hub-platform" location="solutions.hub.next-step" className="btn-secondary">
              ดูภาพรวม Platform
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
