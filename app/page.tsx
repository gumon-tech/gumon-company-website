import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import Image from "next/image";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Gumon Technology คือแพลตฟอร์มเทคโนโลยีสำหรับองค์กรที่ต้องการเริ่มโครงการได้เร็ว คุมมาตรฐานการพัฒนา และส่งมอบระบบได้ต่อเนื่อง",
  path: "/",
});

const signalPills = [
  { label: "รูปแบบแพลตฟอร์ม", value: "Open Core" },
  { label: "สถาปัตยกรรม", value: "โครงสร้าง 3 ชั้น" },
  { label: "เครื่องมือ", value: "Gumon CLI + Docs" },
  { label: "การส่งมอบ", value: "ทำงานร่วมพาร์ตเนอร์" },
];

const foundationBlocks = [
  {
    title: "Application Layer",
    body: "ออกแบบงานธุรกิจให้ทีมพัฒนาแก้ไขและต่อยอดได้ต่อเนื่อง โดยไม่กระทบทั้งระบบ",
  },
  {
    title: "API Service Layer",
    body: "เชื่อมต่อบริการข้ามทีมด้วยมาตรฐานเดียวกัน ลดปัญหางานชนกันและแก้ยากปลายทาง",
  },
  {
    title: "Data Stream Layer",
    body: "รองรับข้อมูลที่ไหลต่อเนื่องสำหรับระบบที่ต้องโตเร็วและยังคงเสถียรภาพ",
  },
];

const roleCards = [
  {
    title: "ทีมพัฒนา",
    body: "เริ่มงานจากมาตรฐานตั้งต้นเดียวกัน ลดเวลาเตรียมระบบ และปล่อยงานได้สม่ำเสมอ",
    href: "/developers",
    cta: "ดูแนวทางสำหรับทีมพัฒนา",
  },
  {
    title: "พาร์ตเนอร์",
    body: "ต่อยอดเชิงพาณิชย์บนโครงสร้างเดียวกัน พร้อมบทบาทการส่งมอบที่ชัดเจน",
    href: "/partners",
    cta: "ดูแนวทางสำหรับพาร์ตเนอร์",
  },
  {
    title: "ผู้บริหาร",
    body: "เห็นภาพรวมแพลตฟอร์ม ความพร้อมทีม และแนวทางใช้งานให้เหมาะกับองค์กร",
    href: "/company",
    cta: "ดูภาพรวมองค์กร",
  },
];

const partners = [
  { name: "Asia Connect Corporation", country: "Thailand", website: "https://www.asiaconnectth.com", short: "AC", logo: "/assets/partners/asia-connect.png" },
  { name: "AC Academys", country: "Thailand", website: "https://acacademys.com", short: "AC", logo: "/assets/partners/ac-academys.png" },
  { name: "Olufy-X", country: "Thailand", website: "https://olufy.com", short: "OX", logo: "/assets/partners/olufy-x.png" },
  { name: "Taitam-D", country: "United Kingdom", website: "https://taitam-d.com", short: "TD", logo: "/assets/partners/taitam-d.png" },
];

const trustStats = [
  { label: "Partner Organizations", value: `${partners.length}+` },
  { label: "Operating Countries", value: `${new Set(partners.map((item) => item.country)).size}` },
];

export default function Page() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">PLATFORM สำหรับการพัฒนาระบบที่ส่งมอบได้จริง</p>
          <h1 className="ui-h1">เริ่มโครงการได้เร็วขึ้น ลดงานซ้ำซ้อน และส่งมอบระบบได้ต่อเนื่องในมาตรฐานเดียวกัน</h1>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon ช่วยรวมวิธีทำงานของทีมให้เป็นระบบเดียว ตั้งแต่การวางโครงสร้าง การเชื่อมต่อบริการ
            ไปจนถึงการปล่อยงานในรอบที่คาดการณ์ได้.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">ปรึกษาทีม Gumon</TrackedLink>
            <TrackedLink href="/platform" className="btn-secondary">ดูโครงสร้างแพลตฟอร์ม</TrackedLink>
          </div>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-3">
          {signalPills.map((pill, index) => (
            <Reveal key={pill.label} delay={index * 60}>
              <div className="glass rounded-xl border border-line/35 px-4 py-3">
                <div className="text-[10px] tracking-[0.2em] uppercase text-mist">{pill.label}</div>
                <div className="mt-2 text-sm font-semibold text-ink">{pill.value}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <Reveal>
            <p className="ui-kicker">Platform Foundation</p>
            <h2 className="mt-3 ui-h2">โครงสร้าง 3 ชั้นที่ช่วยให้ทีมทำงานเร็วขึ้นโดยไม่เสียมาตรฐาน</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {foundationBlocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{block.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Reveal>
            <p className="ui-kicker">Role Paths</p>
            <h2 className="mt-3 ui-h2">เลือกแนวทางที่ตรงกับบทบาทของคุณ แล้วเริ่มงานได้ทันที</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {roleCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{card.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{card.body}</p>
                  <TrackedLink
                    href={card.href}
                    className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink"
                  >
                    {card.cta}
                  </TrackedLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 card p-7 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="ui-kicker">Trusted Partners</p>
              <h2 className="mt-2 ui-h2">เครือข่ายพาร์ตเนอร์ที่ทำงานบนมาตรฐานเดียวกันและส่งมอบได้จริง</h2>
            </div>
            <TrackedLink href="/partners" className="btn-secondary w-fit">ดูแนวทางการร่วมงาน</TrackedLink>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-item">
                <div className="partner-logo-wrap">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={112}
                      height={40}
                      className="partner-logo"
                    />
                  ) : (
                    <div className="partner-logo-fallback" aria-label={`${partner.name} monogram`}>{partner.short}</div>
                  )}
                </div>
                <div>
                  <TrackedLink
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium leading-snug underline underline-offset-4 decoration-accent hover:decoration-ink transition"
                  >
                    {partner.name}
                  </TrackedLink>
                  <div className="text-xs text-mist mt-0.5">{partner.country}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {trustStats.map((item) => (
              <div key={item.label} className="glass rounded-lg border border-line/35 px-3 py-2 text-xs text-mist">
                <span className="text-ink font-semibold">{item.value}</span> {item.label}
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-14 card p-7 shadow-soft">
            <p className="ui-kicker">Next Step</p>
            <h2 className="mt-3 ui-h2">พร้อมวางแผนเริ่มต้นให้โครงการเดินได้จริงในรอบถัดไปหรือยัง</h2>
            <p className="mt-3 text-sm md:text-base text-mist leading-relaxed max-w-3xl">
              ส่งข้อมูลทีมและระบบปัจจุบันของคุณมาได้เลย เราจะช่วยวางแนวทางเริ่มต้นที่เหมาะกับเป้าหมายธุรกิจ
              และข้อจำกัดขององค์กรคุณ.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <TrackedLink href="/contact" className="btn-primary">นัดคุยกับทีมงาน</TrackedLink>
              <TrackedLink href="/resources" className="btn-secondary">ดูข้อมูลเพิ่มเติม</TrackedLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
