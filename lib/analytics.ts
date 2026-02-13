"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
    posthog?: { capture: (eventName: string, properties?: Record<string, unknown>) => void };
  }
}

type TrackEventPayload = {
  name: string;
  category: "cta" | "docs" | "contact" | "navigation";
  label: string;
  location: string;
  href: string;
};

export function trackEvent(payload: TrackEventPayload) {
  if (typeof window === "undefined") return;

  const data = {
    event: "gumon_interaction",
    event_name: payload.name,
    event_category: payload.category,
    event_label: payload.label,
    event_location: payload.location,
    event_href: payload.href,
    ts: Date.now(),
  };

  window.dataLayer?.push(data);

  window.gtag?.("event", payload.name, {
    event_category: payload.category,
    event_label: payload.label,
    page_location: window.location.href,
    destination: payload.href,
    section: payload.location,
  });

  window.plausible?.(payload.name, {
    props: {
      category: payload.category,
      label: payload.label,
      location: payload.location,
      href: payload.href,
    },
  });

  window.posthog?.capture(payload.name, {
    category: payload.category,
    label: payload.label,
    location: payload.location,
    href: payload.href,
    current_url: window.location.href,
  });

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", data);
  }
}
