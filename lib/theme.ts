export const themeStorageKey = "gumon-theme-preference";

export type ThemePreference = "system" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

export function sanitizeThemePreference(value?: string | null): ThemePreference {
  return value === "dark" || value === "light" || value === "system" ? value : "system";
}

export function resolveTheme(preference: ThemePreference, prefersDark: boolean): ResolvedTheme {
  if (preference === "system") {
    return prefersDark ? "dark" : "light";
  }

  return preference;
}

export function getThemeInitScript() {
  return `
    (() => {
      const root = document.documentElement;
      const storageKey = "${themeStorageKey}";
      const sanitize = (value) => value === "dark" || value === "light" || value === "system" ? value : "system";
      const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

      try {
        const preference = sanitize(window.localStorage.getItem(storageKey));
        const resolvedTheme = preference === "system" ? getSystemTheme() : preference;
        root.dataset.themePreference = preference;
        root.dataset.theme = resolvedTheme;
        root.style.colorScheme = resolvedTheme;
      } catch {
        const resolvedTheme = getSystemTheme();
        root.dataset.themePreference = "system";
        root.dataset.theme = resolvedTheme;
        root.style.colorScheme = resolvedTheme;
      }
    })();
  `;
}
