import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import type { ShopAgentLegalCopy } from "@/lib/shopAgentLegal";

export default function ShopAgentLegalPage({
  copy,
  path,
  fallbackNotice,
}: {
  copy: ShopAgentLegalCopy;
  path: string;
  fallbackNotice: string | null;
}) {
  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path }]} />
      <div className="ui-container max-w-4xl">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-4 ui-small">{copy.updatedLabel}: {copy.updatedAt}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-10 card p-7 shadow-soft space-y-8 text-sm md:text-base text-mist leading-relaxed">
          <p>{copy.intro}</p>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <h2 className="ui-h3 text-ink">{section.title}</h2>
              {section.body ? <p className="mt-2">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-3 grid gap-2">
                  {section.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              ) : null}
              {section.links ? (
                <ul className="mt-3 grid gap-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <TrackedLink href={link.href} className="text-ink underline underline-offset-4 hover:opacity-80 transition">
                        {link.label}
                      </TrackedLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
