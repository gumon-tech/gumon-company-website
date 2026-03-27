import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { fallbackLocale, resolveLocale, type Locale } from "@/lib/i18n";
import { getFallbackNotice } from "@/content/locales/fallbackNotice";
import {
  workAndLearnContent,
  workAndLearnFormUrl,
  workAndLearnMeta,
} from "@/content/locales/workAndLearn";

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return fallbackLocale;
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const localized = workAndLearnMeta[locale] ?? workAndLearnMeta.en!;
  return buildPageMetadata({
    title: localized.title,
    description: localized.description,
    path: "/work-and-learn",
  });
}

export default async function WorkAndLearnPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = workAndLearnContent[locale] ?? workAndLearnContent.en!;
  const fallbackNotice = workAndLearnContent[locale] ? null : getFallbackNotice(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/work-and-learn" }]} />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">{copy.kicker}</p>
          <h1 className="ui-h1">{copy.heroHeading}</h1>
          <p className="mt-6 max-w-4xl ui-p">{copy.heroBody}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <TrackedLink href={workAndLearnFormUrl} target="_blank" rel="noreferrer" className="btn-primary">
              {copy.primaryCta}
            </TrackedLink>
            <TrackedLink href="#how-it-works" className="btn-secondary">
              {copy.secondaryCta}
            </TrackedLink>
          </div>
        </Reveal>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {copy.heroHighlights.map((item, index) => (
            <Reveal key={item} delay={index * 70}>
              <div className="glass rounded-xl border border-line/35 p-5 h-full text-sm text-mist leading-relaxed">
                {item}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.intakeKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.intakeHeading}</h2>
            <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.intakeBody}</p>
          </div>
          <div className="lg:col-span-5 card p-7 shadow-soft">
            <div className="grid gap-4">
              {copy.intakeDetails.map((item, index) => (
                <Reveal key={item.label} delay={index * 70}>
                  <div className="glass rounded-xl border border-line/35 p-4">
                    <div className="text-xs tracking-[0.16em] uppercase text-mist">{item.label}</div>
                    <div className="mt-2 text-sm md:text-base text-ink">{item.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.introKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.introHeading}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.introBody}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {copy.introPoints.map((item, index) => (
              <Reveal key={item} delay={index * 70}>
                <div className="route-card h-full">
                  <p className="ui-kicker">{copy.introKicker}</p>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div id="how-it-works" className="mt-12 scroll-mt-28">
          <p className="ui-kicker">{copy.howItWorksKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.howItWorksHeading}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.howItWorksIntro}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.howItWorksSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className="route-card h-full">
                  <div className="text-xs tracking-[0.16em] uppercase text-mist">
                    {copy.stepLabel} {index + 1}
                  </div>
                  <h3 className="mt-3 ui-h3">{step.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.workModelKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.workModelHeading}</h2>
            <p className="mt-4 text-sm md:text-base text-mist leading-relaxed">{copy.workModelBody}</p>
            <ul className="mt-5 grid gap-2 feature-list">
              {copy.workModelPoints.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 card p-7 shadow-soft">
            <p className="ui-kicker">{copy.hiringFormatsLabel}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.hiringFormats.map((item) => (
                <div key={item} className="glass rounded-full border border-line/35 px-3 py-2 text-xs text-mist">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 route-card">
              <h3 className="ui-h3">{copy.workModelNoteTitle}</h3>
              <p className="mt-3 text-sm text-mist leading-relaxed">{copy.workModelNoteBody}</p>
            </div>
          </div>
        </div>

        <div id="opportunities" className="mt-12 scroll-mt-28">
          <p className="ui-kicker">{copy.opportunitiesKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.opportunitiesHeading}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.opportunitiesIntro}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.opportunities.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <h3 className="ui-h3">{item.title}</h3>
                  <p className="mt-3 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="ui-kicker">{copy.rolesKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.rolesHeading}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.rolesIntro}</p>
          <div className="mt-6 grid gap-6">
            {copy.roles.map((role, index) => (
              <Reveal key={role.title} delay={index * 50}>
                <div className="card p-7 shadow-soft">
                  <h3 className="ui-h3">{role.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{role.summary}</p>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="route-card h-full">
                      <div className="text-xs tracking-[0.16em] uppercase text-mist">{role.responsibilitiesLabel}</div>
                      <ul className="mt-4 grid gap-2 feature-list">
                        {role.responsibilities.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="route-card h-full">
                      <div className="text-xs tracking-[0.16em] uppercase text-mist">{role.qualificationsLabel}</div>
                      <ul className="mt-4 grid gap-2 feature-list">
                        {role.qualifications.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">{copy.audienceKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.audienceHeading}</h2>
            <ul className="mt-5 grid gap-2 feature-list">
              {copy.audienceItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="card p-7 shadow-soft">
            <p className="ui-kicker">{copy.compensationKicker}</p>
            <h2 className="mt-3 ui-h2">{copy.compensationHeading}</h2>
            <p className="mt-4 text-sm md:text-base text-mist leading-relaxed">{copy.compensationBody}</p>
            <ul className="mt-5 grid gap-2 feature-list">
              {copy.compensationItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.growthKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.growthHeading}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.growthBody}</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {copy.growthPath.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="route-card h-full">
                  <div className="text-xs tracking-[0.16em] uppercase text-mist">{index + 1}</div>
                  <h3 className="mt-3 ui-h3">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.applyKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.applyHeading}</h2>
          <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.applyBody}</p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <TrackedLink href={workAndLearnFormUrl} target="_blank" rel="noreferrer" className="btn-primary">
              {copy.applyPrimaryCta}
            </TrackedLink>
            <p className="text-sm text-mist">{copy.applySecondaryText}</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="ui-kicker">{copy.faqKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.faqHeading}</h2>
          <div className="mt-6 grid gap-4">
            {copy.faqItems.map((item, index) => (
              <details key={item.q} className="route-card" open={index === 0}>
                <summary className="cursor-pointer list-none pr-8 relative text-base font-semibold">
                  {item.q}
                  <span className="absolute right-0 top-0 text-mist">+</span>
                </summary>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
