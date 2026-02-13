import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Partners",
  description:
    "แนวทางความร่วมมือสำหรับพาร์ตเนอร์ที่ต้องการขยายงานส่งมอบบนมาตรฐานเดียวกับ Gumon",
  path: "/partners",
});

const partnerModel = [
  {
    title: "Platform by Gumon",
    body: "Gumon พัฒนาแกนเทคโนโลยี เอกสาร และแนวปฏิบัติร่วม",
  },
  {
    title: "Delivery by Partners",
    body: "พาร์ตเนอร์รับผิดชอบ solution design, implementation และผลลัพธ์เชิงธุรกิจของลูกค้า",
  },
  {
    title: "Enablement Together",
    body: "ยกระดับทีมผ่าน playbook, support flow และ learning path ร่วมกัน",
  },
];

const readinessChecklist = [
  "มีทีมส่งมอบหรือทีมที่ปรึกษาที่ดูแลโครงการลูกค้าอย่างต่อเนื่อง",
  "มี capability ด้าน architecture, implementation, และ operation",
  "พร้อมทำงานบนมาตรฐานการส่งมอบร่วม (shared delivery standards)",
  "ต้องการขยายงานหลายโครงการโดยควบคุมคุณภาพได้",
];

const enablementResources = [
  {
    title: "Knowledge Base",
    body: "แนวทางปฏิบัติและฐานความรู้สำหรับการส่งมอบข้ามหลายโครงการ",
    href: "https://wiki.gumon.io/",
    external: true,
  },
  {
    title: "Learning Path",
    body: "เส้นทางฝึกอบรมและรับรองทักษะเพื่อยกระดับทีมส่งมอบ",
    href: "/learning",
    external: false,
  },
  {
    title: "Contact Partner Team",
    body: "เริ่มประเมินโอกาสความร่วมมือเชิงพาณิชย์กับทีม Gumon",
    href: "/contact",
    external: false,
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Partners", path: "/partners" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Audience / Partners</p>
          <h1 className="ui-h1">สำหรับพาร์ตเนอร์: เร่งการส่งมอบเชิงพาณิชย์บนมาตรฐานเดียวกันทั้งเครือข่าย</h1>
          <p className="mt-6 max-w-3xl ui-p">
            โมเดล Partner-only ของ Gumon ช่วยให้ขอบเขตบทบาทไม่ทับซ้อน:
            Gumon โฟกัสแพลตฟอร์มและมาตรฐาน ส่วนพาร์ตเนอร์โฟกัสผลลัพธ์เชิงธุรกิจของลูกค้า.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {partnerModel.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Engagement Focus</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Readiness Checklist</p>
          <h2 className="mt-3 ui-h2">เกณฑ์ความพร้อมเบื้องต้นสำหรับการเริ่มความร่วมมือ</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {readinessChecklist.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Enablement Resources</p>
            <h2 className="mt-3 ui-h2">สิ่งที่ช่วยให้พาร์ตเนอร์ส่งมอบงานได้เร็วและสม่ำเสมอ</h2>
            <div className="mt-5 grid md:grid-cols-3 gap-4">
              {enablementResources.map((item) =>
                item.external ? (
                  <TrackedLink key={item.title} href={item.href} eventName="partners_knowledge_base_click" category="docs" label={`partners-${item.title.toLowerCase().replace(/\s+/g, "-")}`} location="partners.resources" target="_blank" rel="noreferrer" className="route-card block h-full">
                    <h3 className="ui-h3">{item.title}</h3>
                    <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                  </TrackedLink>
                ) : (
                  <TrackedLink key={item.title} href={item.href} eventName="partners_contact_click" category={item.href === "/contact" ? "contact" : "navigation"} label={`partners-${item.title.toLowerCase().replace(/\s+/g, "-")}`} location="partners.resources" className="route-card block h-full">
                    <h3 className="ui-h3">{item.title}</h3>
                    <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                  </TrackedLink>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h3">เริ่มกระบวนการร่วมงานกับทีมพาร์ตเนอร์</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              เมื่อทีมมีความพร้อมตาม checklist แล้ว สามารถเริ่มหารือรูปแบบการส่งมอบ
              และแผน enablement ที่เหมาะกับเป้าหมายทางธุรกิจได้ทันที.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="/contact" eventName="partners_contact_click" category="contact" label="partners-contact-primary" location="partners.next-step" className="btn-primary">คุยกับทีมพาร์ตเนอร์</TrackedLink>
              <TrackedLink href="https://wiki.gumon.io/" eventName="partners_knowledge_base_click" category="docs" label="partners-knowledge-base" location="partners.next-step" target="_blank" rel="noreferrer" className="btn-secondary">เปิด Knowledge Base</TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
