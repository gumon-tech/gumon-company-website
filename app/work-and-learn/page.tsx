import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import {
  InternshipHeroCollage,
  InternshipPhotoCard,
  InternshipShowcase,
} from "@/components/InternshipVisuals";
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

function getVisualCopy(locale: Locale) {
  if (locale === "th") {
    return {
      heroLabel: "Internship Workshop",
      heroCaption: "เรียนรู้และทำงานร่วมกับทีมในบรรยากาศจริง",
      showcaseKicker: "Internship in Action",
      showcaseHeading: "บรรยากาศการฝึกงานจริง",
      showcaseDescription:
        "ภาพบางช่วงที่สะท้อนการเรียนรู้แบบลงมือทำ การทำงานร่วมกัน และบรรยากาศของทีมจริงอย่างพอดี",
      showcaseItems: [
        {
          src: "/images/internship/internship-event-driven-workshop-group.jpg",
          alt: "ภาพกลุ่มผู้เข้าร่วม workshop ของโครงการฝึกงาน",
          chip: "Workshop Cohort",
          caption: "ช่วงเวลาของการเรียนรู้ร่วมกันอย่างมีพลัง",
          imageClassName: "object-[62%_34%]",
        },
        {
          src: "/images/internship/internship-event-driven-workshop-activity.jpg",
          alt: "กิจกรรม workshop แบบลงมือทำจริงของผู้ฝึกงาน",
          chip: "Hands-on Learning",
          caption: "ฝึกคิดและลงมือทำไปพร้อมกัน",
          imageClassName: "object-[54%_42%]",
        },
        {
          src: "/images/internship/internship-team-learning-session.jpg",
          alt: "บรรยากาศผู้ฝึกงานนั่งเรียนรู้ร่วมกันในห้อง session ของทีม",
          chip: "Learning Session",
          caption: "ช่วงเรียนรู้ร่วมกันที่สะท้อนบรรยากาศของทีมจริง",
          imageClassName: "object-[50%_42%]",
        },
      ],
      cultureKicker: "ทีมและการเติบโต",
      cultureHeading: "ไม่ได้ฝึกอยู่ลำพัง แต่ได้เรียนรู้จากการทำงานร่วมกับทีมจริง",
      cultureBody:
        "ประสบการณ์ที่มีคุณค่ามากไม่ได้มาจากแค่งานที่ได้รับ แต่มาจากการได้อยู่ในสภาพแวดล้อมที่มีการสื่อสาร การช่วยกันคิด และการเติบโตไปพร้อมกับคนอื่นจริง ๆ",
      culturePoints: [
        "เห็นวิธีทำงานร่วมกันของทีมในสถานการณ์จริง",
        "ได้รับ feedback และคำแนะนำที่นำไปใช้ต่อได้จริง",
        "สร้างความมั่นใจจากการร่วมงานกับผู้คน ไม่ใช่เพียงทำ assignment คนเดียว",
      ],
      technicalKicker: "Technical Exposure",
      technicalHeading: "ได้สัมผัสหัวข้อเชิงเทคนิคจริง ตั้งแต่วิธีคิดจนถึงบริบทของระบบ",
      technicalBody:
        "เส้นทางนี้เปิดโอกาสให้ผู้ร่วมงานได้เห็นทั้งวิธีทำงานแบบมืออาชีพ การเรียนรู้ผ่าน workshop และการคุยกันด้วยกรอบคิดเชิงระบบที่ใช้จริงในทีมวิศวกรรม",
      technicalHighlights: [
        "Workshop ที่เชื่อมกับการทำงานจริง ไม่ได้แยกขาดจากบริบทของทีม",
        "เห็นภาพแนวคิดอย่าง event-driven systems, backend workflow, cloud และ platform practices",
        "เรียนรู้ทั้งเรื่องเทคนิค วิธีสื่อสาร และมาตรฐานการทำงานร่วมกัน",
      ],
    };
  }

  return {
    heroLabel: "Internship Workshop",
    heroCaption: "Learning and contributing in a real team environment",
    showcaseKicker: "Internship in Action",
    showcaseHeading: "A few moments from real internship work",
    showcaseDescription:
      "A restrained glimpse of how this path looks in practice: real workshops, active participation, and team-based learning.",
    showcaseItems: [
      {
        src: "/images/internship/internship-event-driven-workshop-group.jpg",
        alt: "Intern cohort group after a workshop session",
        chip: "Workshop Cohort",
        caption: "Shared learning energy across the cohort",
        imageClassName: "object-[62%_34%]",
      },
      {
        src: "/images/internship/internship-event-driven-workshop-activity.jpg",
        alt: "Hands-on internship workshop activity",
        chip: "Hands-on Learning",
        caption: "Learning by doing together",
        imageClassName: "object-[54%_42%]",
      },
      {
        src: "/images/internship/internship-kubernetes-workshop-group.jpg",
        alt: "Intern group after a Kubernetes workshop",
        chip: "Technical Session",
        caption: "Exposure to real engineering topics",
        imageClassName: "object-[50%_38%]",
      },
        {
          src: "/images/internship/internship-team-group-photo.jpg",
          alt: "Interns and team members together in a group photo",
          chip: "Team Culture",
          caption: "Working with real people in a real team",
          imageClassName: "object-[50%_34%]",
        },
        {
          src: "/images/internship/internship-team-learning-session.jpg",
          alt: "Interns learning together in a shared team session",
          chip: "Learning Session",
          caption: "A real moment of shared learning in the room",
          imageClassName: "object-[50%_42%]",
        },
      ],
    cultureKicker: "Team And Growth",
    cultureHeading: "Not a solo practice track, but a chance to work with real people in real situations",
    cultureBody:
      "What makes this path meaningful is not only the task scope. It is the environment around the work: feedback, collaboration, responsibility, and the confidence that comes from contributing alongside a real team.",
    culturePoints: [
      "See how teams collaborate in day-to-day delivery situations",
      "Receive feedback that can immediately improve how you work",
      "Build confidence through shared work, not isolated assignments",
    ],
    technicalKicker: "Technical Exposure",
    technicalHeading: "Real technical topics, workshops, and systems thinking are part of the learning environment",
    technicalBody:
      "This path can include exposure to engineering-oriented conversations and workshops, helping interns understand how professional teams think about systems, delivery quality, and practical technical decisions.",
    technicalHighlights: [
      "Workshops are connected to real team context instead of standing apart from it",
      "Exposure can include event-driven thinking, backend workflows, cloud topics, and platform practices",
      "The learning includes technical depth, communication habits, and professional working standards",
    ],
  };
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
  const visual = getVisualCopy(locale);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: copy.crumb, path: "/work-and-learn" }]} />
      <div className="ui-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
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

          <div className="lg:col-span-5">
            <InternshipHeroCollage
              label={visual.heroLabel}
              caption={visual.heroCaption}
            />
          </div>
        </div>

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

        <InternshipShowcase
          kicker={visual.showcaseKicker}
          heading={visual.showcaseHeading}
          description={visual.showcaseDescription}
          items={visual.showcaseItems}
        />

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

          <div className="lg:col-span-4">
            <div className="card p-7 shadow-soft">
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

        <div className="mt-12 card p-7 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="ui-kicker">{visual.technicalKicker}</p>
              <h2 className="mt-3 ui-h2">{visual.technicalHeading}</h2>
              <p className="mt-4 text-sm md:text-base text-mist leading-relaxed">{visual.technicalBody}</p>
              <ul className="mt-5 grid gap-2 feature-list">
                {visual.technicalHighlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={60}>
                <InternshipPhotoCard
                  src="/images/internship/internship-kubernetes-workshop-group.jpg"
                  alt="กลุ่มผู้ฝึกงานหลัง workshop ด้าน Kubernetes และระบบจริง"
                  chip={locale === "th" ? "Cloud / Platform" : "Cloud / Platform"}
                  caption={locale === "th" ? "เรียนรู้จากหัวข้อที่เชื่อมกับระบบจริง" : "Exposure to cloud and platform thinking"}
                  sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 48vw, 92vw"
                  frameClassName="aspect-[16/10]"
                  imageClassName="object-[50%_38%] transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                />
              </Reveal>
            </div>
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

        <div className="mt-12 card p-7 shadow-soft lg:p-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
            <div className="order-2 flex flex-col gap-6 lg:order-1 lg:col-span-7 lg:gap-7">
              <div>
                <p className="ui-kicker">{copy.growthKicker}</p>
                <h2 className="mt-3 ui-h2">{copy.growthHeading}</h2>
                <p className="mt-4 max-w-3xl text-sm md:text-base text-mist leading-relaxed">{copy.growthBody}</p>
              </div>

              <div className="rounded-xl2 border border-line/30 bg-surf/35 p-5 md:p-6">
                <p className="ui-kicker">{visual.cultureKicker}</p>
                <h3 className="mt-3 ui-h3">{visual.cultureHeading}</h3>
                <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{visual.cultureBody}</p>
                <ul className="mt-5 grid gap-2 feature-list">
                  {visual.culturePoints.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Reveal delay={120} className="order-1 lg:order-2 lg:col-span-5 lg:self-stretch">
              <InternshipPhotoCard
                src="/images/internship/internship-team-group-photo.jpg"
                alt="ภาพทีมและผู้ฝึกงานร่วมกันในบรรยากาศที่เป็นกันเองและจริงใจ"
                chip={locale === "th" ? "Team Culture" : "Team Culture"}
                caption={locale === "th" ? "การเติบโตเกิดขึ้นได้ดีเมื่อมีทีมที่พร้อมทำงานและเรียนรู้ไปด้วยกัน" : "Growth becomes more real when the team around you is real"}
                sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 38vw, 92vw"
                frameClassName="aspect-[4/3] lg:aspect-[5/6]"
                imageClassName="object-[50%_34%] transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
              />
            </Reveal>
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
