import Link from "next/link";
import Reveal from "@/components/Reveal";

type CaseStudy = {
  title: string;
  sector: string;
  context: string;
  patterns: string[];
  outcomes: string[];
  mode: "Partner-led delivery" | "Applied research validation";
};

const cases: CaseStudy[] = [
  {
    title: "Multi-site attendance kiosk with resilient sync",
    sector: "Healthcare / Operations",
    context:
      "Field devices with intermittent connectivity, central reporting, and role-based access across multiple locations.",
    patterns: ["Offline-first queue + retry", "Event-driven updates", "Role-based access control", "Audit-friendly data model"],
    outcomes: ["Reduced manual reconciliation", "Consistent check-in behavior across sites", "Operational visibility improved"],
    mode: "Partner-led delivery",
  },
  {
    title: "Offline + online data synchronization for distributed teams",
    sector: "Healthcare / Field teams",
    context:
      "Users operate across mixed environments; data must converge without fragile manual merges.",
    patterns: ["Conflict-aware sync strategy", "Idempotent writes", "Background reconciliation", "Observability hooks"],
    outcomes: ["Lower support burden from sync issues", "Faster field adoption", "Improved continuity under weak networks"],
    mode: "Partner-led delivery",
  },
  {
    title: "Back-office mini ERP with remote operations support",
    sector: "Operations / Internal systems",
    context:
      "A small team needs standardized modules (identity, notifications, scheduling) without reinventing infrastructure per project.",
    patterns: ["Modular services", "Shared identity layer", "Notification pipeline", "Repeatable deployment workflow"],
    outcomes: ["Shorter time-to-start for new modules", "Cleaner ownership boundaries", "Improved long-term maintainability"],
    mode: "Applied research validation",
  },
  {
    title: "Education lab deployment for modern system patterns",
    sector: "Education",
    context:
      "Hands-on learning environment to teach modular architecture using repeatable scaffolding and documented workflows.",
    patterns: ["Scaffolded project templates", "Standard service boundaries", "Documentation-first onboarding"],
    outcomes: ["Faster onboarding for learners", "Consistent workshop delivery", "Reusable teaching assets"],
    mode: "Applied research validation",
  },
  {
    title: "Ecosystem events and partner enablement playbooks",
    sector: "Community / Ecosystem",
    context:
      "Enable teams to adopt platform standards through structured guidance, workshops, and repeatable playbooks.",
    patterns: ["Reference implementations", "Playbook-driven enablement", "Compatibility guidance"],
    outcomes: ["Reduced adoption friction", "More consistent partner delivery", "Clearer support boundaries"],
    mode: "Applied research validation",
  },
  {
    title: "Marketplace-readiness pilots (extensions & compatibility)",
    sector: "Platform / Extensions",
    context:
      "Early validation of plugin/service boundaries with compatibility declarations and version discipline.",
    patterns: ["Compatibility declaration", "Version policy rehearsal", "Extension boundary enforcement"],
    outcomes: ["Lower ecosystem fragmentation risk", "Clearer upgrade/migration path", "More predictable integration"],
    mode: "Applied research validation",
  },
];

const patternIndex = [
  { k: "Offline-first", v: "Operate reliably under intermittent connectivity; reconcile safely." },
  { k: "Event-driven", v: "Reduce coupling between services and improve observability." },
  { k: "Identity & access", v: "Standardized authentication / authorization across modules." },
  { k: "Repeatable workflows", v: "Scaffolding + documentation to reduce setup repetition." },
  { k: "Compatibility discipline", v: "Declare support ranges and avoid ecosystem fragmentation." },
];

type MappingRow = {
  pattern: string;
  capability: string;
  boundary: "Core" | "Extension" | "Partner";
  interfaces: string;
  notes: string;
};

// Platform-neutral mapping: demonstrates how applied patterns connect back to Gumon platform capabilities.
// Names are intentionally generic to avoid implying specific client implementations.
const patternToPlatform: MappingRow[] = [
  {
    pattern: "Offline-first",
    capability: "Storage + sync primitives (data model + idempotency discipline)",
    boundary: "Partner",
    interfaces: "HTTP APIs, background jobs",
    notes: "Core provides storage conventions; delivery teams implement domain sync and conflict policy.",
  },
  {
    pattern: "Event-driven",
    capability: "Data stream conventions + notification pipeline",
    boundary: "Core",
    interfaces: "Events, webhooks, queues",
    notes: "Encourages loose coupling; improves observability and change isolation across services.",
  },
  {
    pattern: "Identity & access",
    capability: "Authentication & access control",
    boundary: "Core",
    interfaces: "JWT/OAuth-style flows, RBAC policies",
    notes: "Standardized identity reduces repeated security work and stabilizes cross-module permissions.",
  },
  {
    pattern: "Repeatable workflows",
    capability: "CLI + scaffolding + reference implementations",
    boundary: "Core",
    interfaces: "CLI commands, templates",
    notes: "Reduces setup repetition and makes onboarding predictable across partners.",
  },
  {
    pattern: "Compatibility discipline",
    capability: "Version policy + compatibility declaration",
    boundary: "Core",
    interfaces: "Manifest files, version ranges",
    notes: "Prevents ecosystem fragmentation; upgrades become governed and testable.",
  },
  {
    pattern: "Scheduling & automation",
    capability: "Scheduling module",
    boundary: "Core",
    interfaces: "Schedulers, task queues",
    notes: "Keeps recurring jobs and automation consistent without reinventing operational tooling.",
  },
  {
    pattern: "Notifications",
    capability: "Notification module",
    boundary: "Core",
    interfaces: "Email/SMS/push adapters",
    notes: "Core defines pipeline; adapters may be extensions depending on channel and provider.",
  },
  {
    pattern: "Profiles & units",
    capability: "Profile + unit management",
    boundary: "Core",
    interfaces: "CRUD APIs",
    notes: "Shared identity-adjacent models reduce duplication across multi-tenant deployments.",
  },
  {
    pattern: "Vertical features",
    capability: "Domain-specific modules",
    boundary: "Partner",
    interfaces: "Partner-defined",
    notes: "Solution logic belongs to partners; Gumon protects the platform boundary to keep the core reusable.",
  },
];

export default function DeploymentsPage() {
  return (
    <main>
      <section className="ui-section">
        <div className="ui-container">
          <Reveal>
            <p className="ui-kicker">Applied work</p>
            <h1 className="ui-h1">Deployments that validate platform discipline</h1>
            <p className="ui-p mt-4 max-w-3xl">
              Gumon is a platform builder — our deployments emphasize <span className="text-ink">patterns</span>,{" "}
              <span className="text-ink">boundaries</span>, and <span className="text-ink">repeatable delivery</span>.
              We describe representative system contexts without exposing sensitive implementation details.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/architecture" className="btn-primary">
                Explore Architecture
              </Link>
              <Link href="/governance" className="btn-secondary">
                Governance Charter
              </Link>
              <Link href="/manifesto" className="btn-ghost">
                Read Manifesto
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ui-section-tight">
        <div className="ui-container">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="ui-h2">What we show here</h2>
                <p className="ui-p mt-3">
                  We focus on <span className="text-ink">architectural patterns</span> and{" "}
                  <span className="text-ink">platform behaviors</span> that demonstrate reuse, stability, and ecosystem
                  readiness.
                </p>
                <div className="mt-5 rounded-2xl border border-line bg-bg1 p-5">
                  <p className="ui-small">
                    Note: Client names and operational specifics may be generalized. The objective is to communicate{" "}
                    platform discipline — not to publish confidential delivery details.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal>
                <div className="grid md:grid-cols-2 gap-5">
                  {cases.map((c) => (
                    <article
                      key={c.title}
                      className="rounded-2xl border border-line bg-bg1 p-5 hover:bg-bg1/80 transition"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="ui-small text-mist">{c.sector}</p>
                          <h3 className="ui-h3 mt-2">{c.title}</h3>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-xs text-mist">
                          {c.mode}
                        </span>
                      </div>

                      <p className="ui-p mt-3 text-mist">{c.context}</p>

                      <div className="mt-4">
                        <p className="ui-small text-mist">Patterns</p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {c.patterns.map((p) => (
                            <li
                              key={p}
                              className="inline-flex items-center rounded-full border border-line bg-bg0/40 px-3 py-1 text-xs text-mist"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <p className="ui-small text-mist">Outcomes</p>
                        <ul className="mt-2 space-y-1 text-sm text-mist">
                          {c.outcomes.map((o) => (
                            <li key={o} className="flex gap-2">
                              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-mist/60 shrink-0" />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="ui-section">
        <div className="ui-container">
          <Reveal>
            <h2 className="ui-h2">Pattern index</h2>
            <p className="ui-p mt-3 max-w-3xl">
              These are recurring patterns across applied deployments. They represent the platform behaviors Gumon is
              optimized to make repeatable.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-bg1">
              <table className="w-full text-sm">
                <thead className="bg-bg0/50">
                  <tr className="text-left text-mist">
                    <th className="px-5 py-3 font-medium">Pattern</th>
                    <th className="px-5 py-3 font-medium">Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  {patternIndex.map((row) => (
                    <tr key={row.k} className="border-t border-line">
                      <td className="px-5 py-4 text-ink">{row.k}</td>
                      <td className="px-5 py-4 text-mist">{row.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10">
              <h2 className="ui-h2">Pattern → Platform mapping</h2>
              <p className="ui-p mt-3 max-w-3xl">
                This mapping shows how recurring deployment patterns connect back to Gumon capabilities and boundary
                rules. It is designed to help partners plan implementations without blurring platform responsibilities.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-bg1">
                <table className="w-full text-sm">
                  <thead className="bg-bg0/50">
                    <tr className="text-left text-mist">
                      <th className="px-5 py-3 font-medium">Pattern</th>
                      <th className="px-5 py-3 font-medium">Gumon capability</th>
                      <th className="px-5 py-3 font-medium">Boundary</th>
                      <th className="px-5 py-3 font-medium">Typical interfaces</th>
                      <th className="px-5 py-3 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patternToPlatform.map((row) => (
                      <tr key={`${row.pattern}-${row.capability}`} className="border-t border-line align-top">
                        <td className="px-5 py-4 text-ink whitespace-nowrap">{row.pattern}</td>
                        <td className="px-5 py-4 text-mist">{row.capability}</td>
                        <td className="px-5 py-4">
                          <span className="inline-flex items-center rounded-full border border-line bg-bg0/40 px-3 py-1 text-xs text-mist">
                            {row.boundary}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-mist">{row.interfaces}</td>
                        <td className="px-5 py-4 text-mist">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="rounded-2xl border border-line bg-bg1 p-5">
                  <p className="ui-small text-ink">Core</p>
                  <p className="ui-small mt-2">
                    Maintained by Gumon. Must remain stable, open, and version-disciplined.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-bg1 p-5">
                  <p className="ui-small text-ink">Extension</p>
                  <p className="ui-small mt-2">
                    Optional add-ons and adapters that must not become mandatory dependencies.
                  </p>
                </div>
                <div className="rounded-2xl border border-line bg-bg1 p-5">
                  <p className="ui-small text-ink">Partner</p>
                  <p className="ui-small mt-2">
                    Delivery / domain logic. Partners own solution-specific behavior and vertical modules.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-bg1 p-6">
              <h3 className="ui-h3">Want to map these patterns to Gumon Core?</h3>
              <p className="ui-p mt-3 max-w-3xl">
                Review the architecture doctrine and governance charter to understand core/extension boundaries, version
                discipline, and ecosystem rules.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/architecture" className="btn-primary">
                  Architecture Doctrine
                </Link>
                <Link href="/governance" className="btn-secondary">
                  Governance Charter
                </Link>
                <Link href="/docs" className="btn-ghost">
                  Documentation
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
