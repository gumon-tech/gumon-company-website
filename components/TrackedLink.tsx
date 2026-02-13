"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type TrackedLinkProps = {
  href: string;
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
  className,
  children,
  target,
  rel,
}: TrackedLinkProps) {
  if (isExternalHref(href) || target === "_blank") {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
