"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  CONSENT_CHANGED_EVENT,
  readCookieConsent,
  type CookieConsentLevel,
} from "@/lib/cookieConsent";
import { analyticsConfig } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function injectScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function initGoogleAnalytics(measurementId: string) {
  injectScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`, "gumon-ga-script");
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });
}

function initGoogleTagManager(gtmId: string) {
  if (document.getElementById("gumon-gtm-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  injectScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`, "gumon-gtm-script");
}

export default function AnalyticsBootstrap() {
  const initialized = useRef(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    const gaId = analyticsConfig.gaMeasurementId;
    const gtmId = analyticsConfig.gtmId;

    if (!gaId && !gtmId) return;

    const bootstrap = (level: CookieConsentLevel | null) => {
      if (level !== "all") return;
      setConsentGranted(true);

      if (initialized.current) return;

      if (gaId) initGoogleAnalytics(gaId);
      if (gtmId) initGoogleTagManager(gtmId);
      initialized.current = true;
    };

    bootstrap(readCookieConsent());

    const onConsentChanged = (event: Event) => {
      const customEvent = event as CustomEvent<{ level?: CookieConsentLevel }>;
      bootstrap(customEvent.detail?.level ?? null);
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChanged);
  }, []);

  useEffect(() => {
    if (!initialized.current || !consentGranted || !analyticsConfig.gaMeasurementId || !window.gtag) {
      return;
    }

    const search = searchParams.toString();
    const pagePath = search ? `${pathname}?${search}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
      send_to: analyticsConfig.gaMeasurementId,
    });
  }, [consentGranted, pathname, searchParams]);

  return null;
}
