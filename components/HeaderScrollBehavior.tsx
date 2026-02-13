"use client";

import { useEffect } from "react";

const DESKTOP_MIN_WIDTH = 1280;
const TOP_LOCK_Y = 80;
const SCROLL_DELTA = 8;

export default function HeaderScrollBehavior() {
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const applyState = () => {
      ticking = false;

      const y = window.scrollY;
      const isDesktop = window.innerWidth >= DESKTOP_MIN_WIDTH;

      if (!isDesktop || y <= TOP_LOCK_Y) {
        document.body.classList.remove("header-hidden");
        lastY = y;
        return;
      }

      if (y > lastY + SCROLL_DELTA) {
        document.body.classList.add("header-hidden");
      } else if (y < lastY - SCROLL_DELTA) {
        document.body.classList.remove("header-hidden");
      }

      lastY = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(applyState);
    };

    const onResize = () => {
      window.requestAnimationFrame(applyState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    applyState();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("header-hidden");
    };
  }, []);

  return null;
}
