import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Company",
  description:
    "รู้จัก Gumon Technology แนวคิดขององค์กร และวิธีขับเคลื่อนแพลตฟอร์มเทคโนโลยีสำหรับงานส่งมอบจริง",
  path: "/company",
});

const principles = [
  {
    title: "Open Source by Default",
    body: "แกนหลักของแพลตฟอร์มต้องเปิดและตรวจสอบได้ เพื่อให้ทีมใช้งานต่อได้อย่างมั่นใจในระยะยาว",
  },
  {
    title: "Platform over Projects",
    body: "เราลงทุนกับโครงสร้างที่ใช้ซ้ำได้ ไม่เน้นแก้ปัญหาเฉพาะกิจรายโปรเจกต์",
  },
  {
    title: "Partner-Driven Delivery",
    body: "การส่งมอบปลายทางขับเคลื่อนโดยเครือข่ายพาร์ตเนอร์ เพื่อขยายงานได้อย่างยั่งยืน",
  },
  {
    title: "Evidence-Led Execution",
    body: "ทุกการปรับปรุงอ้างอิงจากข้อมูลหน้างาน ความเห็นจากผู้ใช้งาน และผลลัพธ์ที่ตรวจสอบได้",
  },
];

const operatingModel = [
  "Platform Team: พัฒนา core architecture, standards และ tooling",
  "Enablement System: ขับเคลื่อน docs, playbooks และองค์ความรู้สำหรับทีมใช้งาน",
  "Partner Network: ส่งมอบเชิงพาณิชย์และขยายผลในตลาดจริง",
];

export default function CompanyPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Company", path: "/company" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Company / Overview</p>
          <h1 className="ui-h1">Gumon Technology สร้างโครงสร้างพื้นฐานซอฟต์แวร์ที่ทีมใช้งานได้จริงในงานประจำวัน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            เราเป็นองค์กรเทคโนโลยีที่โฟกัส platform engineering และมาตรฐานการทำงานร่วมกัน
            เพื่อให้ทีมพัฒนาและทีมธุรกิจเดินไปในทิศทางเดียวกันได้เร็วขึ้น.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <div className="route-card h-full">
                <p className="ui-kicker">Principle</p>
                <h2 className="mt-3 ui-h3">{item.title}</h2>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Operating Model</p>
          <h2 className="mt-3 ui-h2">วิธีทำงานขององค์กรที่ออกแบบมาเพื่อขยายผลได้จริง</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {operatingModel.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/platform" className="btn-primary">ดู Platform</Link>
            <Link href="/team" className="btn-secondary">รู้จักทีม</Link>
            <Link href="/contact" className="btn-secondary">คุยกับทีม</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
