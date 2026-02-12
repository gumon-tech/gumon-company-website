export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <p className="ui-kicker">RESEARCH</p>
        <h1 className="ui-h1">Security research framed as engineering clarity.</h1>
        <p className="mt-6 max-w-2xl ui-p">
          Gumon explores AI risk and vulnerability stress testing as research—focused on reliability,
          latency reduction, lighting calibration handling, and secure deployment architecture.
        </p>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 glass rounded-xl2 p-7 shadow-glow overflow-hidden relative">
            <div className="absolute inset-0 opacity-30">
              <img
                src="/assets/selected/government-ncsa-03.png"
                alt="Research"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <div className="text-[11px] tracking-[0.28em] uppercase text-olive">AI Capability</div>
              <div className="mt-4 text-lg font-semibold">Face recognition optimization</div>
              <p className="mt-3 text-sm text-mist leading-relaxed">
                Practical improvements: latency reduction, real-world lighting calibration handling,
                and secure deployment in constrained environments.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 glass rounded-xl2 p-7 shadow-glow">
            <div className="text-[11px] tracking-[0.28em] uppercase text-olive">Principle</div>
            <div className="mt-4 text-lg font-semibold">Research → Prove → Deploy → Share</div>
            <p className="mt-3 text-sm text-mist leading-relaxed">
              This is infrastructure work: measurable proof, institutional deployment, and knowledge
              distribution through the ecosystem.
            </p>
            <div className="mt-6 border-t border-line pt-6 text-xs text-mist leading-relaxed">
              Note: Security and AI narratives are intentionally framed as research. The objective is
              stability and trust, not disruption.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
