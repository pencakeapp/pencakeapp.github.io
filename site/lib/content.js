import fs from "node:fs";
import path from "node:path";

// Loads extracted page content (see scripts/extract.mjs) at build time.
export function loadContent(lang, pageKey) {
  const file = path.join(process.cwd(), "content", lang, `${pageKey}.json`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

// HTML_LANG lives in lib/langs.js (single source of truth); re-exported here
// for the existing import path.
export { HTML_LANG } from "@/lib/langs";
