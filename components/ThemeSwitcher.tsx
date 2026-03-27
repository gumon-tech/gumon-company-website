"use client";

import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { detectLocaleFromPathname, getUiCopy } from "@/lib/i18n";
import { type ThemePreference } from "@/lib/theme";

const themeOptions: ThemePreference[] = ["system", "dark", "light"];

export default function ThemeSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const locale = detectLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);
  const { preference, setPreference, resolvedTheme } = useTheme();
  const activeMeta = preference === "system" ? copy.theme[resolvedTheme] : null;

  return (
    <div className={className ? `theme-switcher-shell ${className}` : "theme-switcher-shell"}>
      <span className="theme-switcher-label">
        {copy.theme.label}
        {activeMeta ? <span className="theme-switcher-meta">{activeMeta}</span> : null}
      </span>
      <div className="theme-switcher-options" role="group" aria-label={copy.theme.label}>
        {themeOptions.map((option) => {
          const active = preference === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setPreference(option)}
              aria-pressed={active}
              data-active={active}
              className="theme-switcher-option"
            >
              {copy.theme[option]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
