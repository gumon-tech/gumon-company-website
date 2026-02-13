import type { Metadata } from "next";

type BuildPageMetadataArgs = {
  title: string;
  description: string;
  path: string;
};

const SITE_NAME = "Gumon Technology";
const DEFAULT_OG_IMAGE = "/assets/from-gumon/gumon_arc.png";

const BASE_KEYWORDS = [
  "Gumon Technology",
  "Open Platform",
  "Software Delivery",
  "Platform Engineering",
  "Developer Platform",
  "Technology Ecosystem",
];

export function buildPageMetadata({ title, description, path }: BuildPageMetadataArgs): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords: BASE_KEYWORDS,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: "Gumon Technology",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
