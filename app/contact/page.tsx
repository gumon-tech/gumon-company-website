export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <p className="ui-kicker">CONTACT</p>
        <h1 className="ui-h1">Institutional inquiries.</h1>
        <p className="mt-6 max-w-2xl ui-p">
          For deployments, partnerships, or strategic discussions—reach out with context and constraints.
          We will respond with an engineering-first approach.
        </p>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 glass rounded-xl2 p-7 shadow-glow">
            <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Email</div>
            <div className="mt-3 text-lg font-semibold"><a className="mode-link underline underline-offset-4 hover:text-ink transition" href="mailto:contact@gumon.io">contact@gumon.io</a></div>
            <p className="mt-2 text-sm text-mist leading-relaxed">
              Primary channel for institutional inquiries. We respond with an engineering-first approach.
            </p>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] tracking-[0.28em] uppercase text-accent">What to include</div>
              <ul className="mt-3 text-sm text-mist list-disc pl-5 space-y-2">
                <li>Environment type (healthcare / government / enterprise)</li>
                <li>Offline constraints, network reliability, and uptime expectations</li>
                <li>Security requirements (encryption, access control, auditing)</li>
                <li>Deployment scale and timeline</li>
              </ul>
            </div>
          <div className="mt-8 border-t border-line pt-6">
  <div className="text-[11px] tracking-[0.28em] uppercase text-accent">Social</div>
  <div className="mt-3 space-y-2 text-sm text-mist">
    <a className="mode-link underline underline-offset-4 hover:text-ink transition" href="https://www.facebook.com/gumon.tech/" target="_blank" rel="noreferrer">Facebook</a><br/>
    <a className="mode-link underline underline-offset-4 hover:text-ink transition" href="https://www.linkedin.com/company/gumon" target="_blank" rel="noreferrer">LinkedIn</a><br/>
    <a className="mode-link underline underline-offset-4 hover:text-ink transition" href="https://lin.ee/lPdJOxv" target="_blank" rel="noreferrer">LINE OA</a>
  </div>
</div>

          </div>

          <div className="lg:col-span-5 glass rounded-xl2 overflow-hidden shadow-glow">
            <div className="h-full">
              <img
                src="/assets/selected/government-defence-03.jpg"
                alt="Institutional"
                className="w-full h-full object-cover opacity-85"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
