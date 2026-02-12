import Reveal from "@/components/Reveal";

const nodes = [
  { k: "YCN Capital", v: "Holding Entity (Equity + Governance)" },
  { k: "Gumon Technology", v: "Core IP / R&D / Platform Owner" },
  { k: "Lattesoft", v: "Commercial Solutions Engine" },
  { k: "DKS", v: "Knowledge Distribution Arm" },
  { k: "Zenix", v: "Marketing & Growth Experiments" },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">ECOSYSTEM MODEL</p>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="ui-h1">Infrastructure core. Partner-led expansion.</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl ui-p">
            Gumon governs core IP and platform integrity. Partners operate as the market-facing
            interface, aligned through a non-intrusion boundary and strategic revenue-sharing.
          </p>
        </Reveal>

        <Reveal delay={210}>
          <div className="mt-8 partner-map glass rounded-[28px] p-6 md:p-8 shadow-glow overflow-hidden">
            <div className="relative z-[1] flex flex-wrap gap-3">
              <span className="partner-pill"><span className="dot" />Asia Connect</span>
              <span className="partner-pill"><span className="dot" />AC Academys</span>
              <span className="partner-pill"><span className="dot" />Olufy</span>
              <span className="partner-pill"><span className="dot" />Taitam-D</span>
            </div>
            <div className="relative z-[1] mt-5 flex flex-wrap items-center gap-3">
              <a className="ui-btn" href="/partners">View partner model</a>
              <a className="ui-btn-secondary" href="/deployments">See proof of execution</a>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7">
            <div className="glass rounded-xl2 p-7 shadow-glow">
              <div className="text-xs tracking-[0.28em] uppercase text-mist">Structure</div>
              <div className="mt-5 space-y-4">
                {nodes.map((n) => (
                  <div key={n.k} className="flex items-start gap-4">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-accent/90 shadow-[0_0_0_4px_rgba(143,175,156,0.10)]" />
                    <div>
                      <div className="text-lg font-semibold">{n.k}</div>
                      <div className="mt-1 text-sm text-mist">{n.v}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-line pt-5 text-sm text-mist">
                The model scales execution without diluting the core: Gumon remains the controlled
                engineering backbone while partners scale distribution, market access, and delivery.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass rounded-xl2 p-7 shadow-glow overflow-hidden">
              <div className="text-xs tracking-[0.28em] uppercase text-mist">Governance</div>
              <div className="mt-3 text-xl font-semibold">Non-intrusion partner boundary</div>
              <p className="mt-3 text-sm text-mist leading-relaxed">
                Gumon controls core technology. Partners scale deployments. The result is OEM-grade
                delivery with clear boundaries and sustainable collaboration.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl2 border border-line bg-bg1/40 p-4">
                  <div className="text-xs tracking-[0.28em] uppercase text-mist">Core</div>
                  <div className="mt-2 text-sm text-mist">
                    Platform integrity, security architecture, execution quality, and core IP governance.
                  </div>
                </div>
                <div className="rounded-xl2 border border-line bg-bg1/40 p-4">
                  <div className="text-xs tracking-[0.28em] uppercase text-mist">Partner surface</div>
                  <div className="mt-2 text-sm text-mist">
                    Market interface, distribution, delivery context, and domain expansion—without core intrusion.
                  </div>
                </div>
                <div className="rounded-xl2 border border-line bg-bg1/40 p-4">
                  <div className="text-xs tracking-[0.28em] uppercase text-mist">Alignment</div>
                  <div className="mt-2 text-sm text-mist">
                    Strategic revenue-sharing and measurable delivery outcomes.
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-line pt-5 text-sm text-mist">
                Principle: <span className="text-ink font-semibold">Research → Prove → Deploy → Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
