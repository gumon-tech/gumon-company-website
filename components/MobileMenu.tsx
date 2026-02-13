"use client";

import { useEffect, useRef, useState } from "react";
import TrackedLink from "@/components/TrackedLink";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handlePointerOutside = (event: MouseEvent | TouchEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("mousedown", handlePointerOutside);
    window.addEventListener("touchstart", handlePointerOutside, { passive: true });
    window.addEventListener("keydown", handleEscape);
    document.body.classList.add("mobile-menu-open");

    return () => {
      window.removeEventListener("mousedown", handlePointerOutside);
      window.removeEventListener("touchstart", handlePointerOutside);
      window.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [open]);

  return (
    <div ref={rootRef} className="mobile-menu xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center rounded-full border border-line/55 bg-bg1/75 px-3.5 py-2 text-sm font-medium text-ink hover:bg-surf/70 transition"
      >
        เมนู
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu backdrop"
            className="mobile-menu-backdrop"
            onClick={closeMenu}
          />
          <div className="mobile-menu-panel">
            <div className="grid gap-3 text-[15px]">
              {navItems.map((item) => (
                <div key={item.href} onClick={closeMenu}>
                  <TrackedLink
                    href={item.href}
                    className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
                  >
                    {item.label}
                  </TrackedLink>
                </div>
              ))}
              <div className="hr" />
              <div className="px-1 text-[11px] tracking-[0.16em] uppercase text-mist">Work Tools</div>
              <a
                href="https://docs.gumon.io/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
              >
                Docs
              </a>
              <a
                href="https://wiki.gumon.io/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
              >
                Knowledge Base
              </a>
              <a
                href="https://work.gumon.io/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
              >
                Gumon Work
              </a>
              <a
                href="https://github.com/gumon-tech"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
              >
                GitHub
              </a>
              <div className="hr" />
              <div className="px-1 text-[11px] tracking-[0.16em] uppercase text-mist">Community</div>
              <a
                href="https://dkscenter.gumon.io/th"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
              >
                DKS Center
              </a>
              <a
                href="https://game.gumon.io/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-mist hover:text-ink hover:bg-bg1/60 transition block"
              >
                Gaming Hub
              </a>
              <div onClick={closeMenu}>
                <TrackedLink href="/contact" className="btn-primary w-full">
                  ติดต่อทีมงาน
                </TrackedLink>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
