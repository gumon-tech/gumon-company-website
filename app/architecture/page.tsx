import Reveal from "@/components/Reveal";

export const metadata = { title: "Architecture" };

type CatalogRow = {
  capability: string;
  boundary: "Core" | "Extension" | "Partner";
  interfaces: string;
  purpose: string;
  notes: string;
};

// Platform capability catalog (platform-neutral): describes what the platform provides
// and how boundaries are enforced. Names are intentionally generic.
const catalog: CatalogRow[] = [
  {
    capability: "Identity & access (auth + RBAC conventions)",
    boundary: "Core",
    interfaces: "JWT/OAuth-style flows, policy contracts",
    purpose: "Standardize authentication/authorization across services.",
    notes: "Partners extend domain roles; core owns security boundaries.",
  },
  {
    capability: "Event-driven conventions (streams + webhooks)",
    boundary: "Core",
    interfaces: "Events, queues, webhooks",
    purpose: "Reduce coupling and improve change isolation.",
    notes: "Core defines envelope conventions; partners define event semantics per domain.",
  },
  {
    capability: "Notification pipeline",
    boundary: "Core",
    interfaces: "Adapters, templates, delivery providers",
    purpose: "Provide repeatable notification flow without reinventing plumbing.",
    notes: "Provider adapters may be extensions; core keeps the pipeline stable.",
  },
  {
    capability: "Scheduling & automation",
    boundary: "Core",
    interfaces: "Schedulers, task queues",
    purpose: "Standardize recurring jobs and operational automation.",
    notes: "Avoids per-project cron drift; encourages audited automation.",
  },
  {
    capability: "Storage conventions (idempotency + migrations)",
    boundary: "Core",
    interfaces: "DB schemas, migrations, storage APIs",
    purpose: "Make data handling predictable across modules.",
    notes: "Domain-specific sync/conflict policy remains partner-owned.",
  },
  {
    capability: "CLI + scaffolding",
    boundary: "Core",
    interfaces: "CLI commands, templates",
    purpose: "Reduce setup repetition; make onboarding predictable.",
    notes: "DX is part of infrastructure: clarity reduces fragmentation.",
  },
  {
    capability: "Provider adapters (email/SMS/push gateways)",
    boundary: "Extension",
    interfaces: "Adapter interfaces",
    purpose: "Integrate external providers without polluting the core.",
    notes: "Extensions must remain removable and declare compatibility.",
  },
  {
    capability: "Vertical modules (domain features)",
    boundary: "Partner",
    interfaces: "Partner-defined",
    purpose: "Deliver solution-specific behavior without touching the core.",
    notes: "Gumon will not compete in downstream vertical execution.",
  },
];

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">PLATFORM ARCHITECTURE</p>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="ui-h1">Authority through structure</h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl ui-p">
            Gumon is an open infrastructure foundation for modular systems — designed for consistency, repeatability,
            and ecosystem extensibility without core erosion.
          </p>
        </Reveal>

        {/* Layer model + compatibility */}
        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-6 shadow-soft">
            <div className="ui-kicker">LAYER MODEL</div>
            <h2 className="mt-3 ui-h3">Four logical layers</h2>
            <ol className="mt-5 space-y-4 text-sm md:text-base text-mist">
              <li>
                <span className="text-ink font-semibold">1. Core Foundation</span> — structural conventions, service
                boundaries, version governance.
              </li>
              <li>
                <span className="text-ink font-semibold">2. Service Modules</span> — independent components with clear
                interface contracts and minimal cross-dependency.
              </li>
              <li>
                <span className="text-ink font-semibold">3. Developer Enablement</span> — CLI, scaffolding, workflow
                automation, onboarding clarity.
              </li>
              <li>
                <span className="text-ink font-semibold">4. Ecosystem Extensions</span> — optional add-ons with
                compatibility declarations and no core modification.
              </li>
            </ol>
          </div>

          <div className="lg:col-span-5 card p-6 shadow-soft">
            <div className="ui-kicker">COMPATIBILITY (EXAMPLE)</div>
            <h2 className="mt-3 ui-h3">Declared boundaries</h2>
            <pre className="mt-4 codeblock">{`name: provider-adapter-example
version: 0.3.0
boundary: extension
requires:
  core: ">=1.4 <2.0"
interfaces:
  - notifications.v1
  - events.v2
notes:
  - no core modifications
  - removable without breaking boot
  - declares providers as optional`}</pre>
            <p className="mt-4 ui-small">
              Extensions must declare compatible core versions and interface contracts — mirroring the boundary rules
              used in deployments mapping.
            </p>
          </div>
        </div>

        {/* Capability catalog */}
        <div className="mt-12 card p-6 shadow-soft">
          <div className="ui-kicker">CAPABILITY CATALOG</div>
          <h2 className="mt-3 ui-h3">What the platform provides — and where boundaries apply</h2>
          <p className="mt-4 ui-p max-w-3xl">
            This catalog translates platform architecture into a practical reference. It connects capabilities to
            boundaries (Core / Extension / Partner) so adoption stays repeatable and ecosystem-safe.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-bg1">
            <table className="w-full text-sm">
              <thead className="bg-bg0/50">
                <tr className="text-left text-mist">
                  <th className="px-5 py-3 font-medium">Capability</th>
                  <th className="px-5 py-3 font-medium">Boundary</th>
                  <th className="px-5 py-3 font-medium">Typical interfaces</th>
                  <th className="px-5 py-3 font-medium">Purpose</th>
                  <th className="px-5 py-3 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {catalog.map((row) => (
                  <tr key={row.capability} className="border-t border-line align-top">
                    <td className="px-5 py-4 text-ink whitespace-nowrap">{row.capability}</td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center rounded-full border border-line bg-bg0/40 px-3 py-1 text-xs text-mist">
                        {row.boundary}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-mist">{row.interfaces}</td>
                    <td className="px-5 py-4 text-mist">{row.purpose}</td>
                    <td className="px-5 py-4 text-mist">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-line bg-bg1 p-5">
              <p className="ui-small text-ink">Core</p>
              <p className="ui-small mt-2">Maintained by Gumon. Must remain open, stable, and version-disciplined.</p>
            </div>
            <div className="rounded-2xl border border-line bg-bg1 p-5">
              <p className="ui-small text-ink">Extension</p>
              <p className="ui-small mt-2">
                Optional add-ons/adapters. Must remain removable and declare compatibility.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-bg1 p-5">
              <p className="ui-small text-ink">Partner</p>
              <p className="ui-small mt-2">Delivery and domain logic. Partners own solution-specific behavior.</p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-12 card p-6 shadow-soft">
          <div className="ui-kicker">ARCHITECTURAL PRINCIPLES</div>
          <h2 className="mt-3 ui-h3">Rules that keep the platform coherent</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {[
              ["Separation of responsibility", "Each layer has clear ownership and modification boundaries."],
              ["Version discipline", "Breaking change is structural disruption and requires justification."],
              ["Compatibility clarity", "Extensions declare version ranges and interface contracts to prevent fragmentation."],
              ["Operational neutrality", "Avoid vendor lock-in assumptions; remain portable across environments."],
              ["Repeatability", "If every project differs fundamentally in structure, platform value collapses."],
              ["Documentation as infrastructure", "Onboarding clarity is part of architecture, not a secondary task."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl2 border border-line/20 bg-bg0/30 p-5">
                <div className="text-sm font-semibold">{t}</div>
                <p className="mt-2 text-sm text-mist leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
