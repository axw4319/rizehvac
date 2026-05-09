#!/usr/bin/env node
/**
 * register-city.cjs
 *
 * When Agent 1 drops a new city data file at src/data/<slug>.ts (matching
 * the CityData export shape), wire it into src/data/cityRegistry.ts so the
 * dynamic routes (/hvac/<slug>, /ac-repair/<slug>, /hvac-cost/<slug>) and
 * sitemap pick it up.
 *
 * Usage:
 *   node scripts/register-city.cjs <slug>          # add one
 *   node scripts/register-city.cjs --auto           # scan src/data/ + add all
 *
 * Each city file MUST default-export or named-export a CityData object whose
 * variable name matches `<SLUG_UPPER>_CITY` (e.g. PHOENIX_CITY for phoenix.ts).
 */

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "src", "data");
const REGISTRY = path.join(DATA_DIR, "cityRegistry.ts");

function slugToConst(slug) {
  return slug.replace(/-/g, "_").toUpperCase() + "_CITY";
}

function listAvailableCitySlugs() {
  return fs.readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => f.replace(/\.ts$/, ""))
    .filter((slug) => !["types", "cityRegistry", "_cities", "tucson-contractors", "tucson-cost", "tucson-reviews"].includes(slug));
}

function readRegistry() {
  return fs.readFileSync(REGISTRY, "utf8");
}

function writeRegistry(content) {
  fs.writeFileSync(REGISTRY, content);
}

function isAlreadyRegistered(slug) {
  return readRegistry().includes(`"${slug}":`);
}

function fileHasExpectedExport(slug) {
  const filePath = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, "utf8");
  return content.includes(slugToConst(slug));
}

function addCity(slug) {
  if (isAlreadyRegistered(slug)) {
    console.log(`  - ${slug}: already registered, skipping`);
    return false;
  }
  if (!fileHasExpectedExport(slug)) {
    console.warn(`  ✗ ${slug}: file missing or doesn't export ${slugToConst(slug)} — skipping`);
    return false;
  }

  let content = readRegistry();
  const importLine = `import { ${slugToConst(slug)} } from "./${slug}";`;
  const registryLine = `  "${slug}": ${slugToConst(slug)},`;

  if (!content.includes(importLine)) {
    const lastImportIdx = content.lastIndexOf("import ");
    const afterLastImport = content.indexOf("\n", lastImportIdx) + 1;
    content = content.slice(0, afterLastImport) + importLine + "\n" + content.slice(afterLastImport);
  }

  const registryClose = content.indexOf("};", content.indexOf("REGISTRY"));
  content = content.slice(0, registryClose) + registryLine + "\n" + content.slice(registryClose);

  writeRegistry(content);
  console.log(`  ✓ ${slug}: registered`);
  return true;
}

function main() {
  const args = process.argv.slice(2);
  const slugs = args[0] === "--auto" ? listAvailableCitySlugs() : args;
  if (slugs.length === 0) {
    console.error("Usage: node scripts/register-city.cjs <slug> | --auto");
    process.exit(1);
  }
  console.log(`Registering ${slugs.length} cit${slugs.length === 1 ? "y" : "ies"}:`);
  let added = 0;
  for (const slug of slugs) {
    if (addCity(slug)) added++;
  }
  console.log(`\n${added} added. Run \`npm run build\` to verify, then commit + push.`);
}

main();
