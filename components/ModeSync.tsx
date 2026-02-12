"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function getMode(pathname: string) {
  const p = (pathname || "/").toLowerCase();
  if (p.startsWith("/deployments")) return "field";
  if (p.startsWith("/research")) return "lab";
  return "institutional";
}

export default function ModeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const mode = getMode(pathname);
    // Apply globally so header/footer also adopt the mode
    document.body.setAttribute("data-mode", mode);
  }, [pathname]);

  return null;
}
