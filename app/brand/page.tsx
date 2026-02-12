const swatches = [
  { k: "Background", v: "#0E1116", note: "Deep graphite base" },
  { k: "Surface", v: "#151E24", note: "Glass surfaces / cards" },
  { k: "Ink", v: "#D6DBD8", note: "Primary text" },
  { k: "Mist", v: "#97A2A0", note: "Secondary text" },
  { k: "Olive (Accent)", v: "#8FAF9C", note: "Institutional accent (quiet)" },
];

const marks = [
  { src: "/assets/logo/gumon-white.png", label: "Institutional (Primary)" },
  { src: "/assets/logo/gumon-slate.png", label: "Field / Execution" },
  { src: "/assets/logo/gumon-olive.png", label: "Research / Lab" },
  { src: "/assets/logo/gumon-black.png", label: "Monochrome dark" },
  { src: "/assets/logo/gumon-rose.png", label: "Limited use / internal" },
];

const dos = [
  "Use the mark as a signal—never as decoration.",
  "Keep whitespace around the mark (at least 0.5× its height).",
  "Prefer wordmark-first in institutional contexts.",
  "Use the correct mode color per context (Institutional / Field / Lab).",
];

const donts = [
  "Do not stretch, skew, rotate, or add effects.",
  "Do not place the mark on busy photos without a veil.",
  "Do not mix multiple mark colors in a single institutional page.",
  "Do not use the pink variant in external institutional materials.",
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <p className="ui-kicker">BRAND</p>
        <h1 className="ui-h1">Identity system (modes, marks, and usage).</h1>
        <p className="mt-6 max-w-2xl ui-p">
          Gumon operates with a single identity, expressed through context modes. The system is designed to
          feel institutional by default—while retaining the brand&apos;s sharp personality when you look closer.
        </p>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 glass rounded-xl2 p-7 shadow-glow">
            <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Marks</div>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {marks.map((m) => (
                <div key={m.label} className="rounded-xl2 border border-line bg-bg1/40 p-4 flex items-center gap-4">
                  <div className="rounded-lg border border-line bg-bg0/60 p-2">
                    <img src={m.src} alt={m.label} className="h-10 w-10" />
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">{m.label}</div>
                    <div className="text-xs text-mist">Use as context signal</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Modes</div>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="rounded-xl2 border border-line bg-bg1/40 p-5">
                  <div className="text-xs tracking-[0.28em] uppercase text-mist">Institutional</div>
                  <div className="mt-2 font-semibold">Default</div>
                  <div className="mt-2 text-xs text-mist leading-relaxed">
                    Website overview, ecosystem, contact, investor and government contexts.
                  </div>
                </div>
                <div className="rounded-xl2 border border-line bg-bg1/40 p-5">
                  <div className="text-xs tracking-[0.28em] uppercase text-mist">Field / Execution</div>
                  <div className="mt-2 font-semibold">Operational proof</div>
                  <div className="mt-2 text-xs text-mist leading-relaxed">
                    Deployments and real environment evidence. Low-contrast tactical tone.
                  </div>
                </div>
                <div className="rounded-xl2 border border-line bg-bg1/40 p-5">
                  <div className="text-xs tracking-[0.28em] uppercase text-mist">Research / Lab</div>
                  <div className="mt-2 font-semibold">Exploration</div>
                  <div className="mt-2 text-xs text-mist leading-relaxed">
                    Research framing, AI risk exploration, and engineering clarity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 glass rounded-xl2 p-7 shadow-glow">
            <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Palette</div>
            <div className="mt-5 space-y-3">
              {swatches.map((s) => (
                <div key={s.k} className="flex items-center justify-between gap-4 rounded-xl2 border border-line bg-bg1/40 p-4">
                  <div>
                    <div className="text-sm font-semibold">{s.k}</div>
                    <div className="text-xs text-mist">{s.note}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg border border-line" style={{ background: s.v }} />
                    <div className="text-xs text-mist">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Do</div>
              <ul className="mt-3 text-sm text-mist list-disc pl-5 space-y-2">
                {dos.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Don&apos;t</div>
              <ul className="mt-3 text-sm text-mist list-disc pl-5 space-y-2">
                {donts.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
