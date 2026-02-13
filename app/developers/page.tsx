import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Developers",
  description:
    "เส้นทางเริ่มต้นสำหรับนักพัฒนาบน Gumon ตั้งแต่ setup จนถึง release ที่ทำซ้ำได้",
  path: "/developers",
});

const steps = [
  "ตั้งค่าสภาพแวดล้อมและสิทธิ์การเข้าถึงตาม baseline ของทีม",
  "สร้าง service จาก template มาตรฐานผ่าน Gumon CLI",
  "เชื่อม API และ event contracts ตาม guideline กลาง",
  "ตั้งค่า CI/CD และ observability เพื่อคุมคุณภาพการส่งมอบ",
  "ออก release รอบแรกพร้อม checklist ที่ทีมใช้ร่วมกัน",
];

const focusAreas = [
  "เริ่มโปรเจกต์ใหม่ได้เร็วขึ้นด้วย baseline เดียวกัน",
  "รักษา code quality และ review quality ข้ามหลายทีม",
  "ขยายจากระบบเดิมสู่หลายบริการโดยคุม technical debt",
];

const supports = [
  {
    title: "Developer Documentation",
    body: "คู่มือเทคนิคสำหรับ quick start, reference APIs และการใช้งานเครื่องมือ",
    href: "https://docs.gumon.io/",
  },
  {
    title: "Knowledge Base",
    body: "แนวทางปฏิบัติการและคู่มือการทำงานร่วมกันใน ecosystem",
    href: "https://wiki.gumon.io/",
  },
  {
    title: "Learning Path",
    body: "เสริมทักษะทีมผ่านหลักสูตรและการรับรองจาก DKS Center",
    href: "/learning",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Developers", path: "/developers" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Audience / Developers</p>
          <h1 className="ui-h1">สำหรับทีมพัฒนา: ลดเวลาตั้งต้นและเร่งการส่งมอบโดยไม่เสียคุณภาพโครงสร้าง</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เส้นทางนี้ออกแบบสำหรับทีมที่ต้องการเริ่มโปรเจกต์ใหม่หรือขยายระบบเดิมให้รองรับหลายบริการ
            โดยยังรักษา convention ร่วม การ review ที่สอดคล้อง และ release cadence ที่คาดการณ์ได้.
          </p>
        </Reveal>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Engagement Focus</p>
          <h2 className="mt-3 ui-h2">เป้าหมายหลักของทีมที่มักเริ่มจากหน้านี้</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {focusAreas.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Readiness Checklist</p>
          <h2 className="mt-3 ui-h2">ลำดับเริ่มต้นที่ทีมส่วนใหญ่ใช้ได้ทันที</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {steps.map((step) => (
              <li key={step}>- {step}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Enablement Resources</p>
            <h2 className="mt-3 ui-h2">แหล่งข้อมูลที่ช่วยให้เริ่มงานได้เร็วขึ้น</h2>
            <div className="mt-5 grid md:grid-cols-3 gap-4">
              {supports.map((item, index) => (
                <Reveal key={item.title} delay={index * 70}>
                  {item.href.startsWith("http") ? (
                    <TrackedLink
                      href={item.href}
                      eventName="developers_resource_click"
                      category="docs"
                      label={`developers-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      location="developers.resources"
                      target="_blank"
                      rel="noreferrer"
                      className="route-card block h-full"
                    >
                      <h3 className="ui-h3">{item.title}</h3>
                      <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                    </TrackedLink>
                  ) : (
                    <TrackedLink
                      href={item.href}
                      eventName="developers_resource_click"
                      category="navigation"
                      label={`developers-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      location="developers.resources"
                      className="route-card block h-full"
                    >
                      <h3 className="ui-h3">{item.title}</h3>
                      <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                    </TrackedLink>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h3">เริ่มต้นจากเอกสารหลักหรือคุยโจทย์กับทีม</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              <li>- ลดเวลาการ setup project และลด error จากการตั้งค่าด้วยมือ</li>
              <li>- ทำ code review ง่ายขึ้นเพราะ conventions ชัดเจน</li>
              <li>- onboard นักพัฒนาใหม่ได้เร็วขึ้น</li>
              <li>- วางแผนขยายบริการได้โดยไม่เพิ่ม technical debt เร็วเกินไป</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <TrackedLink href="https://docs.gumon.io/" eventName="developers_resource_click" category="docs" label="developers-docs-primary" location="developers.next-step" target="_blank" rel="noreferrer" className="btn-primary">
                เปิด Developer Documentation
              </TrackedLink>
              <TrackedLink href="/platform" eventName="developers_platform_reference_click" category="navigation" label="developers-platform-architecture" location="developers.next-step" className="btn-secondary">
                ดูภาพรวม Platform Architecture
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
