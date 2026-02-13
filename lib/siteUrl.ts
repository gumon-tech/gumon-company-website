const CANONICAL_SITE_URL = "https://gumon.io";

const legacyHosts = new Set(["web.gumon.dev", "www.web.gumon.dev"]);

function normalizeOrigin(input?: string) {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    return new URL(withProtocol).origin;
  } catch {
    return null;
  }
}

export function getSiteUrl() {
  const configured = normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL);
  if (!configured) return CANONICAL_SITE_URL;

  const host = new URL(configured).hostname.toLowerCase();
  if (legacyHosts.has(host)) {
    return CANONICAL_SITE_URL;
  }

  return configured;
}

