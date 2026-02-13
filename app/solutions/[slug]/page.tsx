import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { getRelatedSolutions, getSolutionBySlug, solutionItems } from "../data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutionItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return buildPageMetadata({
      title: "Solutions",
      description: "โซลูชันของ Gumon ตามบริบทอุตสาหกรรม",
      path: "/solutions",
    });
  }

  return buildPageMetadata({
    title: `${solution.title} Solution`,
    description: solution.summary,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();
  const relatedSolutions = getRelatedSolutions(solution.slug, 2);

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd
        items={[
          { name: "Solutions", path: "/solutions" },
          { name: solution.title, path: `/solutions/${solution.slug}` },
        ]}
      />
      <div className="ui-container">
        <Reveal>
          <p className="ui-kicker">Solutions / {solution.title}</p>
          <h1 className="ui-h1">{solution.title} implementation path</h1>
          <p className="mt-6 max-w-3xl ui-p">{solution.summary}</p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <p className="ui-kicker">Context</p>
            <h2 className="mt-3 ui-h2">โจทย์ที่มักพบในบริบทนี้</h2>
            <p className="mt-4 text-sm md:text-base text-mist leading-relaxed">
              {solution.context}
            </p>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">Implementation Model</p>
            <h2 className="mt-3 ui-h3">แนวทางดำเนินงานที่แนะนำ</h2>
            <ul className="mt-4 grid gap-2 feature-list">
              {solution.model.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Expected Outcomes</p>
          <h2 className="mt-3 ui-h2">ผลลัพธ์ที่ต้องการให้วัดได้จากการใช้งานจริง</h2>
          <ul className="mt-5 grid gap-2 feature-list">
            {solution.outcomes.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Related Solutions</p>
          <h2 className="mt-3 ui-h2">โซลูชันอื่นที่มักพิจารณาร่วมกัน</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {relatedSolutions.map((item) => (
              <TrackedLink
                key={item.slug}
                href={`/solutions/${item.slug}`}
                eventName="solutions_related_click"
                category="navigation"
                label={`solutions-${solution.slug}-to-${item.slug}`}
                location="solutions.detail.related"
                className="route-card block h-full"
              >
                <h3 className="ui-h3">{item.title}</h3>
                <p className="mt-2 text-sm text-mist leading-relaxed">{item.summary}</p>
              </TrackedLink>
            ))}
          </div>
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">Next Step</p>
          <h2 className="mt-3 ui-h2">ต้องการวางแผนเริ่มใช้งานในองค์กรของคุณ</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink
              href="/contact"
              eventName="solutions_detail_cta_click"
              category="contact"
              label={`solutions-${solution.slug}-contact`}
              location="solutions.detail.next-step"
              className="btn-primary"
            >
              คุยกับทีมงาน
            </TrackedLink>
            <TrackedLink
              href="/solutions"
              eventName="solutions_detail_cta_click"
              category="navigation"
              label={`solutions-${solution.slug}-back`}
              location="solutions.detail.next-step"
              className="btn-secondary"
            >
              กลับไป Solutions Hub
            </TrackedLink>
            <TrackedLink
              href="/platform"
              eventName="solutions_detail_cta_click"
              category="navigation"
              label={`solutions-${solution.slug}-platform`}
              location="solutions.detail.next-step"
              className="btn-secondary"
            >
              ดูภาพรวม Platform
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
