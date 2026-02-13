import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const LOCALES_DIR = path.join(ROOT, "content", "locales");
const OUT_FILE = path.join(ROOT, "docs", "translation", "source-freeze.json");

function sha256(input) {
  return createHash("sha256").update(input).digest("hex");
}

async function listLocaleFiles() {
  const entries = await fs.readdir(LOCALES_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

async function main() {
  const files = await listLocaleFiles();
  const fileSnapshots = [];

  for (const file of files) {
    const absolutePath = path.join(LOCALES_DIR, file);
    const content = await fs.readFile(absolutePath);
    fileSnapshots.push({
      path: `content/locales/${file}`,
      sizeBytes: content.byteLength,
      sha256: sha256(content),
    });
  }

  const bundleFingerprint = sha256(
    fileSnapshots.map((item) => `${item.path}:${item.sha256}`).join("\n"),
  );

  const gitHead = execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();

  const payload = {
    generatedAt: new Date().toISOString(),
    gitHead,
    localeFileCount: fileSnapshots.length,
    bundleSha256: bundleFingerprint,
    files: fileSnapshots,
  };

  await fs.writeFile(OUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote locale freeze snapshot: ${path.relative(ROOT, OUT_FILE)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
