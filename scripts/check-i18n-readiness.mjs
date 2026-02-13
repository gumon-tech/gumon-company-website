import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content", "locales");
const SOURCE_DIRS = [path.join(ROOT, "app"), path.join(ROOT, "components")];

const localeFilesWithoutThEnRequirement = new Set([
  "fallbackNotice.ts",
  "languageNames.ts",
]);

function extractSupportedLocales(fileContent) {
  const match = fileContent.match(/export const supportedLocales\s*=\s*\[(?<list>[\s\S]*?)\]\s*as const/);
  if (!match?.groups?.list) {
    return [];
  }
  const locales = [];
  const regex = /"([^"]+)"|'([^']+)'/g;
  let m;
  while ((m = regex.exec(match.groups.list))) {
    locales.push(m[1] ?? m[2]);
  }
  return locales;
}

async function listFilesRecursively(dir, extensions) {
  const out = [];
  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(absolute);
      } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
        out.push(absolute);
      }
    }
  }
  await walk(dir);
  return out.sort((a, b) => a.localeCompare(b));
}

function toRelative(file) {
  return path.relative(ROOT, file).replaceAll(path.sep, "/");
}

async function checkLocaleFileCoverage(issues) {
  const files = await fs.readdir(CONTENT_DIR);
  for (const file of files) {
    if (!file.endsWith(".ts")) continue;
    if (localeFilesWithoutThEnRequirement.has(file)) continue;

    const fullPath = path.join(CONTENT_DIR, file);
    const content = await fs.readFile(fullPath, "utf8");

    const hasTh = /\bth\s*:\s*\{/.test(content);
    const hasEn = /\ben\s*:\s*\{/.test(content);
    if (!hasTh || !hasEn) {
      issues.push(`${toRelative(fullPath)} missing ${!hasTh ? "th" : ""}${!hasTh && !hasEn ? "/" : ""}${!hasEn ? "en" : ""} locale block`);
    }
  }
}

async function checkFallbackNoticeCoverage(issues) {
  const i18nPath = path.join(ROOT, "lib", "i18n.ts");
  const fallbackPath = path.join(CONTENT_DIR, "fallbackNotice.ts");
  const i18nContent = await fs.readFile(i18nPath, "utf8");
  const fallbackContent = await fs.readFile(fallbackPath, "utf8");

  const supportedLocales = extractSupportedLocales(i18nContent).filter((locale) => locale !== "th" && locale !== "en");
  const fallbackKeys = new Set();
  const keyRegex = /(?:^|\n)\s*(?:(["'])(?<qkey>[^"']+)\1|(?<ukey>[A-Za-z][A-Za-z0-9-]*))\s*:/g;
  let m;
  while ((m = keyRegex.exec(fallbackContent))) {
    const key = m.groups?.qkey ?? m.groups?.ukey;
    if (key) {
      fallbackKeys.add(key);
    }
  }

  for (const locale of supportedLocales) {
    if (!fallbackKeys.has(locale)) {
      issues.push(`content/locales/fallbackNotice.ts missing fallback notice for locale: ${locale}`);
    }
  }
}

async function checkHardcodedUiText(issues) {
  const files = [];
  for (const dir of SOURCE_DIRS) {
    files.push(...(await listFilesRecursively(dir, [".tsx"])));
  }

  const attributePattern = /(aria-label|placeholder|title)\s*=\s*["']([^"']*[A-Za-z\u0E00-\u0E7F][^"']*)["']/g;

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const rel = toRelative(file);

    let attrMatch;
    while ((attrMatch = attributePattern.exec(content))) {
      const value = attrMatch[2].trim();
      if (value.startsWith("http") || value.includes("{") || value.length < 2) continue;
      issues.push(`${rel} has hardcoded attribute text: "${value}"`);
    }

  }
}

async function main() {
  const issues = [];

  await checkLocaleFileCoverage(issues);
  await checkFallbackNoticeCoverage(issues);
  await checkHardcodedUiText(issues);

  if (issues.length) {
    console.error("i18n readiness check failed:");
    for (const issue of issues) {
      console.error(`- ${issue}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("i18n readiness check passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
