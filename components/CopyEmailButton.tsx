"use client";

import { type MouseEvent, useState } from "react";

export default function CopyEmailButton({
  email,
  className,
  label = "คัดลอก",
  copiedLabel = "คัดลอกแล้ว",
  stopPropagation = false,
}: {
  email: string;
  className?: string;
  label?: string;
  copiedLabel?: string;
  stopPropagation?: boolean;
}) {
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
      aria-label="Copy contact email"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
