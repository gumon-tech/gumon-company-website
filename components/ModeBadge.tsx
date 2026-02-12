"use client";

import { usePathname } from "next/navigation";

function getMode(pathname: string) {
  const p = (pathname || "/").toLowerCase();
  if (p.startsWith("/deployments")) return { id: "field", label: "FIELD / EXECUTION" };
  if (p.startsWith("/research")) return { id: "lab", label: "RESEARCH / LAB" };
  return { id: "institutional", label: "INSTITUTIONAL" };
}

export default function ModeBadge() {
  const pathname = usePathname();
  const mode = getMode(pathname);

  return (
    <span
      className="hidden lg:inline-flex items-center gap-2 rounded-full border border-line bg-bg0/30 px-3 py-1 text-[10px] tracking-[0.28em] uppercase text-mist"
      aria-label={`Mode: ${mode.label}`}
      title={mode.label}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] opacity-90" />
      {mode.label}
    </span>
  );
}
