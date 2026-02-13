"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gumon_cookie_consent_v1";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved !== "accepted") {
        // Delay a bit so the banner does not compete with above-the-fold content during initial paint.
        timer = window.setTimeout(() => setVisible(true), 1200);
      }
    } catch {
      timer = window.setTimeout(() => setVisible(true), 1200);
    }
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const acceptCookies = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Ignore storage failures and just hide the banner.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-[80] w-[min(760px,calc(100%-24px))] -translate-x-1/2 rounded-xl2 border border-line/30 bg-bg0/95 px-3 py-2.5 sm:px-4 sm:py-3 shadow-soft backdrop-blur-md">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex min-h-[36px] items-center">
          <p className="text-[11px] sm:text-xs text-mist leading-snug">
            เว็บไซต์นี้ใช้คุกกี้เพื่อการทำงานของระบบ{" "}
            <Link href="/cookies" className="text-ink underline underline-offset-4 decoration-accent hover:decoration-ink transition">
              Cookie Notice
            </Link>
          </p>
        </div>
        <button
          type="button"
          onClick={acceptCookies}
          className="shrink-0 inline-flex items-center justify-center rounded-full border border-transparent px-3.5 py-1.5 text-xs font-semibold text-bg0"
          style={{
            background: "linear-gradient(120deg, rgb(var(--accent)) 0%, rgb(var(--accent2)) 100%)",
            boxShadow: "0 6px 16px rgb(var(--accent) / 0.26)",
          }}
        >
          ยอมรับ
        </button>
      </div>
    </div>
  );
}
