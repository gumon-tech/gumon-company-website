import Image from "next/image";
import Reveal from "@/components/Reveal";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type InternshipPhotoCardProps = {
  src: string;
  alt: string;
  chip?: string;
  caption?: string;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
  sizes: string;
  priority?: boolean;
};

export function InternshipPhotoCard({
  src,
  alt,
  chip,
  caption,
  className,
  frameClassName,
  imageClassName,
  sizes,
  priority = false,
}: InternshipPhotoCardProps) {
  return (
    <div className={cx("internship-photo-card group", className)}>
      <div className={cx("internship-photo-frame", frameClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cx("object-cover object-center", imageClassName)}
        />
        <div className="internship-photo-overlay" />
        {chip ? <div className="internship-photo-chip">{chip}</div> : null}
        {caption ? <div className="internship-photo-caption">{caption}</div> : null}
      </div>
    </div>
  );
}

type HeroCollageProps = {
  label: string;
  caption: string;
};

export function InternshipHeroCollage({ label, caption }: HeroCollageProps) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="pointer-events-none absolute inset-x-8 top-8 h-40 rounded-full bg-accent/10 blur-3xl" />
      <Reveal className="relative z-[1]">
        <InternshipPhotoCard
          src="/images/internship/internship-workshop-session.jpg"
          alt="Interns joining a workshop session and discussion together"
          chip={label}
          caption={caption}
          priority
          sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 40vw, 92vw"
          frameClassName="aspect-[4/3] lg:aspect-[11/8]"
          imageClassName="object-[58%_36%] transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
        />
      </Reveal>
    </div>
  );
}

type ShowcaseItem = {
  src: string;
  alt: string;
  chip: string;
  caption: string;
  imageClassName?: string;
};

type InternshipShowcaseProps = {
  kicker: string;
  heading: string;
  description: string;
  items: ShowcaseItem[];
};

export function InternshipShowcase({ kicker, heading, description, items }: InternshipShowcaseProps) {
  const [featured, ...supporting] = items;

  return (
    <section className="mt-12 card p-7 shadow-soft">
      <Reveal>
        <div className="max-w-3xl">
          <p className="ui-kicker">{kicker}</p>
          <h2 className="mt-3 ui-h2">{heading}</h2>
          <p className="mt-4 text-sm md:text-base text-mist leading-relaxed">{description}</p>
        </div>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        {featured ? (
          <Reveal className="h-full">
            <InternshipPhotoCard
              src={featured.src}
              alt={featured.alt}
              chip={featured.chip}
              caption={featured.caption}
              sizes="(min-width: 1280px) 42rem, (min-width: 1024px) 56vw, 92vw"
              className="h-full"
              frameClassName="aspect-[4/3] overflow-hidden lg:h-full lg:aspect-[20/14]"
              imageClassName={cx(
                "transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110",
                featured.imageClassName
              )}
            />
          </Reveal>
        ) : null}

        <div className="grid h-full grid-cols-1 gap-4 lg:grid-rows-2">
          {supporting.map((item, index) => (
            <Reveal key={item.src} delay={(index + 1) * 70} className="h-full">
              <InternshipPhotoCard
                src={item.src}
                alt={item.alt}
                chip={item.chip}
                caption={item.caption}
                sizes="(min-width: 1280px) 24rem, (min-width: 640px) 44vw, 92vw"
                className="h-full"
                frameClassName="aspect-[5/4] overflow-hidden lg:h-full lg:aspect-auto"
                imageClassName={cx(
                  "transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110",
                  item.imageClassName
                )}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
