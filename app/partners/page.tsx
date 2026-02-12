import Reveal from "@/components/Reveal";

const partners = [
  {
    name: "Asia Connect (ACC Group)",
    url: "https://www.asiaconnectth.com/",
    mode: "Institutional deployment partner",
    what: [
      "Enterprise ICT, security protection, IoT, robotics, and digital technology platforms",
      "Market-facing institutional delivery with after-sales operations",
    ],
    gumon: [
      "Backend engineering and secure systems execution",
      "Software delivery for Asia Connect and AC Academys operations",
    ],
    why:
      "Gumon operates as the engineering backbone—partners lead market execution while Gumon governs core architecture and quality.",
  },
  {
    name: "AC Academys",
    url: "https://acacademys.com/",
    mode: "Knowledge distribution & learning platform",
    what: ["Online learning platform for courses and training programs"],
    gumon: [
      "Platform stability, integrations, and operational backend",
      "Secure architecture aligned with institutional constraints",
    ],
    why:
      "An ecosystem surface for distribution—Gumon ensures the platform runs like infrastructure, not a marketing site.",
  },
  {
    name: "Olufy-X",
    url: "https://www.olufy.com/",
    mode: "Cloud & infrastructure alliance",
    what: [
      "Modern cloud hosting for developers and growing teams",
      "Cloud VPS with fast provisioning, root access, and SSD NVMe storage",
    ],
    gumon: [
      "Hybrid deployment design and operational architecture",
      "Partner-aligned infrastructure scaling and cloud resell pathways",
    ],
    why:
      "Infrastructure partnership: Gumon builds systems that can scale; Olufy provides the substrate to run them.",
  },
  {
    name: "Taitam-D (Spa & Academy)",
    url: "https://taitam-d.com/",
    mode: "Consumer-facing premium use case (UK)",
    what: [
      "Premium spa in London + academy delivering NVQ/VTCT-administered programs",
      "Real-world environment for productized operations and growth experiments",
    ],
    gumon: [
      "Technology operations across spa + academy systems",
      "Partner collaboration for UK market expansion with growth experiments",
    ],
    why:
      "A high-touch environment where reliability meets experience—Gumon keeps the tech invisible and dependable.",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">PARTNERS</p>
          <h1 className="ui-h1">Partner-led expansion, core governed.</h1>
          <p className="mt-6 max-w-2xl ui-p">
            Gumon is an infrastructure company. Partners operate as market-facing interfaces.
            Gumon governs core architecture, reliability, and execution quality—within a clear non-intrusion boundary.
          </p>
        </Reveal>

        <div className="mt-10 partner-map glass rounded-[28px] p-6 md:p-8 shadow-glow overflow-hidden">
          <div className="relative z-[1] flex flex-wrap gap-3">
            <span className="partner-pill"><span className="dot" />Asia Connect</span>
            <span className="partner-pill"><span className="dot" />AC Academys</span>
            <span className="partner-pill"><span className="dot" />Olufy</span>
            <span className="partner-pill"><span className="dot" />Taitam-D</span>
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          {partners.map((p, i) => (
            <div key={p.name} className="lg:col-span-6">
              <Reveal delay={i * 70}>
                <div className="glass rounded-xl2 p-7 shadow-glow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Alliance</div>
                      <h2 className="mt-2 text-2xl font-semibold">{p.name}</h2>
                      <p className="mt-2 text-sm text-mist">{p.mode}</p>
                    </div>
                    <a
                      className="mode-link text-sm text-mist hover:text-ink underline underline-offset-4 transition"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit →
                    </a>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <div className="rounded-xl2 border border-line bg-bg1/40 p-4">
                      <div className="text-xs tracking-[0.28em] uppercase text-mist">Partner</div>
                      <ul className="mt-3 text-sm text-mist list-disc pl-5 space-y-2">
                        {p.what.map((x) => <li key={x}>{x}</li>)}
                      </ul>
                    </div>
                    <div className="rounded-xl2 border border-line bg-bg1/40 p-4">
                      <div className="text-xs tracking-[0.28em] uppercase text-mist">Gumon</div>
                      <ul className="mt-3 text-sm text-mist list-disc pl-5 space-y-2">
                        {p.gumon.map((x) => <li key={x}>{x}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-line pt-5 text-sm text-mist">
                    <span className="text-ink font-semibold">Why it matters:</span> {p.why}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
