"use client";

import { useEffect, useRef, useState } from "react";

export default function ToolsMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="btn-ghost"
      >
        Tools
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close tools menu backdrop"
            className="fixed inset-0 top-[72px] z-[100] bg-[rgb(2_5_10/0.32)]"
            onClick={closeMenu}
          />
          <div
            role="menu"
            className="absolute right-0 top-full z-[110] mt-2 w-64 rounded-xl border border-line/45 bg-bg0 p-2 shadow-[0_20px_44px_rgba(2,8,16,0.58)]"
          >
            <div className="grid gap-1">
              <div className="px-3 pt-1 pb-1 text-[10px] tracking-[0.16em] uppercase text-mist">Work Tools</div>
              <a
                href="https://docs.gumon.io/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm text-mist hover:text-ink hover:bg-bg1/60 transition"
            >
              Docs
            </a>
            <a
              href="https://wiki.gumon.io/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm text-mist hover:text-ink hover:bg-bg1/60 transition"
            >
              Knowledge Base
            </a>
            <a
              href="https://work.gumon.io/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm text-mist hover:text-ink hover:bg-bg1/60 transition"
            >
              Gumon Work
            </a>
            <a
              href="https://github.com/gumon-tech"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm text-mist hover:text-ink hover:bg-bg1/60 transition"
              >
                GitHub
              </a>
              <div className="my-1 hr" />
              <div className="px-3 pt-1 pb-1 text-[10px] tracking-[0.16em] uppercase text-mist">Community</div>
              <a
                href="https://dkscenter.gumon.io/th"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 text-sm text-mist hover:text-ink hover:bg-bg1/60 transition"
              >
                DKS Center
              </a>
              <a
                href="https://game.gumon.io/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              className="rounded-lg px-3 py-2 text-sm text-mist hover:text-ink hover:bg-bg1/60 transition"
            >
              Gaming Hub
            </a>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
