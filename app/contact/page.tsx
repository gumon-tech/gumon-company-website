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
            <div className="text-[11px] tracking-[0.28em] uppercase text-olive">Email</div>
            <div className="mt-3 text-lg font-semibold">contact@web.gumon.dev</div>
            <p className="mt-2 text-sm text-mist leading-relaxed">
              Replace this with your real inbox. Keep the tone quiet and institutional.
            </p>

            <div className="mt-8 border-t border-line pt-6">
              <div className="text-[11px] tracking-[0.28em] uppercase text-olive">What to include</div>
              <ul className="mt-3 text-sm text-mist list-disc pl-5 space-y-2">
                <li>Environment type (healthcare / government / enterprise)</li>
                <li>Offline constraints, network reliability, and uptime expectations</li>
                <li>Security requirements (encryption, access control, auditing)</li>
                <li>Deployment scale and timeline</li>
              </ul>
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
