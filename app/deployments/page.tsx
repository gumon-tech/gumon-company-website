const groups = [
  {
    label: "Healthcare",
    items: [
      { title: "CVM CRA — Multi-site Kiosk Attendance", img: "/assets/selected/healthcare-cvmcra-02.png" },
      { title: "CVM Nopparat — Offline + Online Sync", img: "/assets/selected/healthcare-nopparat-01.png" },
      { title: "Backend Mini ERP + Remote Ops", img: "/assets/selected/healthcare-cvmcra-03.png" },
    ],
  },
  {
    label: "Government & Defence",
    items: [
      { title: "Institutional Training & Engagement", img: "/assets/selected/government-defence-01.jpg" },
      { title: "Operational Environment Evidence", img: "/assets/selected/government-defence-02.jpg" },
      { title: "NCSA — Cybersecurity Authority Engagement", img: "/assets/selected/government-ncsa-02.png" },
    ],
  },
  {
    label: "Education & Ecosystem",
    items: [
      { title: "KMITL Deployment", img: "/assets/selected/education-kmitl-01.png" },
      { title: "DigiTech ASEAN Thailand", img: "/assets/selected/education-digitech-01.png" },
      { title: "Talent Multiplier Network", img: "/assets/selected/ecosystem-woxa-01.png" },
    ],
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <p className="ui-kicker">DEPLOYMENTS</p>
        <h1 className="ui-h1">Proof of execution, not a portfolio.</h1>
        <p className="mt-6 max-w-2xl ui-p">
          Gumon deployments are engineered for institutional constraints: uptime, security,
          offline behavior, and operational recovery. Visuals below are used as evidence,
          not marketing.
        </p>

        <div className="mt-14 space-y-14">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">{g.label}</div>
              <div className="mt-5 grid md:grid-cols-3 gap-5">
                {g.items.map((it) => (
                  <div key={it.title} className="glass rounded-xl2 overflow-hidden shadow-glow">
                    <div className="h-44 bg-bg1">
                      <img src={it.img} alt={it.title} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="p-5">
                      <div className="text-sm font-semibold">{it.title}</div>
                      <div className="mt-2 text-xs text-mist leading-relaxed">
                        Institutional environment • secure architecture • operational reliability
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
