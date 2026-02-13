"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  category: "cta" | "docs" | "contact" | "navigation";
  label: string;
  location: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export default function TrackedLink({
  href,
  eventName,
  category,
  label,
  location,
  className,
  children,
  target,
  rel,
}: TrackedLinkProps) {
  const onClick = () => {
    trackEvent({
      name: eventName,
      category,
      label,
      location,
      href,
    });
  };

  if (isExternalHref(href) || target === "_blank") {
    return (
      <a href={href} target={target} rel={rel} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
