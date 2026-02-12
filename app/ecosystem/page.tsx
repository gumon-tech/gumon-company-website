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
        <p className="ui-kicker">ECOSYSTEM MODEL</p>
        <h1 className="ui-h1">Infrastructure core. Partner-led expansion.</h1>
        <p className="mt-6 max-w-2xl ui-p">
          Gumon governs core IP and platform integrity. Partners operate as the market-facing interface,
          aligned through a non-intrusion boundary and strategic revenue-sharing.
        </p>

        <div className="mt-14 grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 glass rounded-xl2 p-7 shadow-glow">
            <div className="text-[11px] tracking-[0.28em] uppercase text-olive">Structure</div>
            <div className="mt-5 space-y-4">
              {nodes.map((n) => (
                <div key={n.k} className="flex items-start gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-olive" />
                  <div>
                    <div className="font-semibold">{n.k}</div>
                    <div className="text-sm text-mist">{n.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 glass rounded-xl2 p-7 shadow-glow overflow-hidden relative">
            <div className="absolute inset-0 opacity-25">
              <img
                src="/assets/selected/ecosystem-dks-01.png"
                alt="Ecosystem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <div className="text-[11px] tracking-[0.28em] uppercase text-olive">Governance</div>
              <div className="mt-4 text-lg font-semibold">Non-intrusion partner boundary</div>
              <p className="mt-3 text-sm text-mist leading-relaxed">
                Gumon controls core technology. Partners scale deployments. The result is OEM-grade
                delivery with clear boundaries and sustainable collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
