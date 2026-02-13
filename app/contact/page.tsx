import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import ContactLeadForm from "@/components/ContactLeadForm";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "ติดต่อทีม Gumon สำหรับคำถามด้านเทคนิค ความร่วมมือกับพาร์ตเนอร์ หรือการเริ่มใช้งานแพลตฟอร์ม",
  path: "/contact",
});

const routes = [
  {
    title: "ปรึกษาด้านเทคนิค",
    body: "ต้องการประเมินสถาปัตยกรรม ระบบเดิม หรือแนวทางย้ายระบบ",
    action: "กรอกฟอร์มปรึกษา",
    href: "#contact-form",
  },
  {
    title: "ความร่วมมือกับพาร์ตเนอร์",
    body: "ต้องการหารือรูปแบบความร่วมมือทางธุรกิจและการส่งมอบ",
    action: "ส่งข้อมูลเพื่อนัดคุย",
    href: "#contact-form",
  },
  {
    title: "สอบถามข้อมูลทั่วไป",
    body: "ต้องการรู้จักบริการและแนวทางเริ่มใช้งานแพลตฟอร์ม",
    action: "ติดต่อทีมงาน",
    href: "#contact-form",
  },
];

const socialChannels = [
  {
    name: "LINE OA",
    href: "https://lin.ee/BLe8er3",
    handle: "lin.ee/BLe8er3",
    icon: "line",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/gumon",
    handle: "linkedin.com/company/gumon",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/gumon.tech",
    handle: "facebook.com/gumon.tech",
    icon: "facebook",
  },
] as const;

function SocialIcon({ icon }: { icon: "line" | "linkedin" | "facebook" }) {
  if (icon === "line") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path fill="currentColor" d="M12 2.5c-4.97 0-9 3.37-9 7.53 0 3.73 3.2 6.84 7.52 7.43l-.3 3.58 3.6-3.45h.18c4.97 0 9-3.37 9-7.56 0-4.16-4.03-7.53-9-7.53Z" />
        <path fill="#0b0f15" d="M8.08 12.86H6.4V8.7h1.03v3.22h.65v.94Zm1.83 0H8.88V8.7h1.03v4.16Zm3.05 0h-.9l-1.14-2.07v2.07h-.97V8.7h.92l1.12 2.04V8.7h.97v4.16Zm2.66 0h-2.74V8.7h2.74v.94h-1.72v.67h1.54v.92h-1.54v.69h1.72v.94Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.3 18H5.8v-8h2.5v8ZM7 8.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11 9.1h-2.5v-4c0-1-.4-1.8-1.4-1.8s-1.5.8-1.5 1.8v4H10v-8h2.4v1.1c.4-.7 1.1-1.3 2.4-1.3 1.8 0 3.2 1.2 3.2 3.8v4.4Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
      <path
        fill="currentColor"
        d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.6 1.5-1.6h1.4V4.8c-.2 0-1.1-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.9V11H8v3h2.5v7h3Z"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "Contact", path: "/contact" }]} />
      <div className="ui-container">
        <p className="ui-kicker">Contact / Start Here</p>
        <h1 className="ui-h1">คุยกับทีม Gumon เพื่อเริ่มโครงการให้เร็วและตรงเป้าหมาย</h1>
        <p className="mt-6 max-w-2xl ui-p">
          ระบุโจทย์ของคุณสั้น ๆ แล้วส่งผ่านฟอร์มได้ทันที ทีมจะติดต่อกลับพร้อมแนวทางที่เหมาะกับบริบทองค์กร.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {routes.map((item) => (
            <div key={item.title} className="route-card h-full">
              <h2 className="ui-h3">{item.title}</h2>
              <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
              <TrackedLink href={item.href} className="mt-5 inline-block text-sm text-ink underline underline-offset-4 decoration-accent hover:decoration-ink">
                {item.action}
              </TrackedLink>
            </div>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div id="contact-form" className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Contact Form</p>
            <h2 className="mt-3 ui-h2">ส่งข้อมูลโครงการเพื่อให้ทีมตอบได้ตรงประเด็น</h2>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              ยิ่งข้อมูลชัด ทีมยิ่งประเมินและตอบกลับได้เร็ว ทั้งด้านเทคนิค แผนส่งมอบ และการร่วมงานเชิงธุรกิจ.
            </p>
            <div className="mt-6">
              <ContactLeadForm />
            </div>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Direct Contact</p>
            <h2 className="mt-3 ui-h3">ช่องทางติดต่อหลัก</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <TrackedLink href="mailto:contact@gumon.io" className="card p-4 hover:border-ink/30 transition">
                <div className="text-[11px] tracking-[0.16em] uppercase text-mist">Email</div>
                <div className="mt-1 text-ink">contact@gumon.io</div>
              </TrackedLink>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">Social Media</p>
              <div className="mt-3 grid gap-3 text-sm">
                {socialChannels.map((item) => (
                  <TrackedLink
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="card p-4 hover:border-ink/30 transition flex items-center gap-3"
                  >
                    <div className="h-9 w-9 rounded-full border border-line/40 bg-bg1 flex items-center justify-center text-ink/90">
                      <SocialIcon icon={item.icon} />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-mist">{item.name}</div>
                      <div className="mt-1 text-ink">{item.handle}</div>
                    </div>
                  </TrackedLink>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="ui-kicker">Knowledge Channels</p>
              <div className="mt-3 flex flex-col gap-3">
                <TrackedLink href="https://docs.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">Developer Documentation</TrackedLink>
                <TrackedLink href="https://wiki.gumon.io/" target="_blank" rel="noreferrer" className="btn-secondary">Knowledge Base</TrackedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
