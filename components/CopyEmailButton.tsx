"use client";

import { type MouseEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { detectLocaleFromPathname } from "@/lib/i18n";
import { getCopyEmailButtonCopy } from "@/content/locales/components";

export default function CopyEmailButton({
  email,
  className,
  label,
  copiedLabel,
  stopPropagation = false,
}: {
  email: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
  stopPropagation?: boolean;
}) {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getCopyEmailButtonCopy(locale);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (event: MouseEvent<HTMLButtonElement>) => {
    if (stopPropagation) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        className ??
        "btn-secondary w-fit"
      }
      aria-label={copy.aria}
    >
      {copied ? copiedLabel ?? copy.copied : label ?? copy.label}
    </button>
  );
}
