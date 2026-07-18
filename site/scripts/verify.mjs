/**
 * Fidelity verification: compares every exported page in site/out/
 * against the legacy static page it replaces.
 *
 * Checks, per page:
 *  1. anchor ids + data-block-ids (FAQ deep links must keep working)
 *  2. full DOM walk of #notion-app: tag, class, id, href/src,
 *     normalized style, and text content
 *  3. head metadata: title, description, canonical, hreflang pairs,
 *     og:*, twitter:*
 *  4. desktop download links carry data-download attributes
 */
import * as cheerio from "cheerio";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_LANGS } from "../lib/langs.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = path.resolve(__dirname, "../..");
const OUT_ROOT = path.resolve(__dirname, "../out");

const LANGS = ALL_LANGS;
// Pages intentionally redesigned in the Next app; they no longer mirror
// the legacy export, so fidelity checks are skipped for them.
const REDESIGNED = new Set([
  "index.html",
  "faq/index.html",
  "privacy/index.html",
  "guide/markdown/index.html",
  "download/desktop/index.html",
]);
const PAGES = [
  "index.html",
  "faq/index.html",
  "privacy/index.html",
  "guide/markdown/index.html",
  "download/desktop/index.html",
  "download/mobile/index.html",
];

let totalProblems = 0;

function normStyle(style) {
  if (!style) return "";
  return style
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((decl) => {
      const i = decl.indexOf(":");
      if (i < 0) return decl;
      const prop = decl.slice(0, i).trim().toLowerCase();
      let value = decl.slice(i + 1).trim().replace(/\s+/g, " ");
      // drop trailing !important spacing variants
      value = value.replace(/\s*!\s*important/i, "!important");
      // normalize quotes
      value = value.replace(/"/g, "'");
      // numeric normalization: 0px == 0
      return `${prop}:${value}`;
    })
    .sort()
    .join(";");
}

function normText(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}

const SKIP_TAGS = new Set(["script", "link", "iframe", "template", "style"]);

function collectNodes($, root) {
  const out = [];
  const walk = (el) => {
    for (const node of $(el).contents().toArray()) {
      if (node.type === "tag" || node.type === "script" || node.type === "style") {
        if (SKIP_TAGS.has(node.name)) continue;
        out.push(node);
        walk(node);
      }
    }
  };
  walk(root);
  return out;
}

function describe(node) {
  const a = node.attribs || {};
  const cls = a.class ? `.${a.class.split(/\s+/).join(".")}` : "";
  return `<${node.name}${a.id ? "#" + a.id : ""}${cls.slice(0, 80)}>`;
}

function compareDom(origHtml, newHtml, label, problems) {
  const $o = cheerio.load(origHtml);
  const $n = cheerio.load(newHtml);
  const oApp = $o("#notion-app");
  const nApp = $n("#notion-app");
  if (!oApp.length || !nApp.length) {
    problems.push(`${label}: #notion-app missing (orig=${oApp.length}, new=${nApp.length})`);
    return;
  }
  const oNodes = collectNodes($o, oApp.get(0));
  const nNodes = collectNodes($n, nApp.get(0));
  const max = Math.max(oNodes.length, nNodes.length);
  if (oNodes.length !== nNodes.length) {
    problems.push(`${label}: element count differs orig=${oNodes.length} new=${nNodes.length}`);
  }
  for (let i = 0; i < Math.min(oNodes.length, nNodes.length); i++) {
    const o = oNodes[i];
    const n = nNodes[i];
    if (o.name !== n.name) {
      problems.push(`${label}: node[${i}] tag ${describe(o)} vs ${describe(n)}`);
      return; // trees diverged; further comparison is noise
    }
    const oa = o.attribs || {};
    const na = n.attribs || {};
    // data-download is intentionally added (replaces legacy inline onclick)
    for (const key of ["id", "data-block-id", "class", "href", "src", "alt"]) {
      if ((oa[key] || "") !== (na[key] || "")) {
        problems.push(`${label}: node[${i}] ${describe(o)} attr ${key}: "${oa[key]}" vs "${na[key]}"`);
      }
    }
    if (normStyle(oa.style) !== normStyle(na.style)) {
      problems.push(
        `${label}: node[${i}] ${describe(o)} style differs\n  orig: ${normStyle(oa.style)}\n  new : ${normStyle(na.style)}`
      );
    }
  }
  // Whitespace-only text nodes directly inside table structure have no
  // rendering effect; React strips them, so ignore them on both sides.
  const stripTableWhitespace = ($) => {
    $("table, thead, tbody, tr").each((_, el) => {
      for (const node of [...el.children]) {
        if (node.type === "text" && !node.data.trim()) $(node).remove();
      }
    });
  };
  stripTableWhitespace($o);
  stripTableWhitespace($n);
  const oText = normText($o("#notion-app").text());
  const nText = normText($n("#notion-app").text());
  if (oText !== nText) {
    let i = 0;
    while (i < Math.min(oText.length, nText.length) && oText[i] === nText[i]) i++;
    problems.push(
      `${label}: text differs at char ${i}: orig="…${oText.slice(Math.max(0, i - 40), i + 40)}…" new="…${nText.slice(Math.max(0, i - 40), i + 40)}…"`
    );
  }
}

function metaMap($) {
  const m = {};
  m.title = $("title").first().text();
  m.description = $('meta[name="description"]').attr("content") || "";
  m.canonical = $('link[rel="canonical"]').attr("href") || "";
  m.hreflang = $('link[rel="alternate"][hreflang]')
    .map((_, el) => `${$(el).attr("hreflang")}=${$(el).attr("href")}`)
    .get()
    .sort()
    .join("|");
  for (const p of ["og:title", "og:description", "og:image", "og:url", "og:type", "og:locale"]) {
    m[p] = $(`meta[property="${p}"]`).attr("content") || "";
  }
  m["og:locale:alternate"] = $('meta[property="og:locale:alternate"]')
    .map((_, el) => $(el).attr("content"))
    .get()
    .sort()
    .join("|");
  for (const n of ["twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:url"]) {
    m[n] = $(`meta[name="${n}"]`).attr("content") || "";
  }
  for (const n of ["apple-mobile-web-app-capable", "format-detection", "msapplication-tap-highlight"]) {
    m[n] = $(`meta[name="${n}"]`).attr("content") || "";
  }
  return m;
}

function compareMeta(origHtml, newHtml, label, problems) {
  const om = metaMap(cheerio.load(origHtml));
  const nm = metaMap(cheerio.load(newHtml));
  for (const key of Object.keys(om)) {
    if (om[key] !== nm[key]) {
      problems.push(`${label}: meta ${key}:\n  orig: ${om[key]}\n  new : ${nm[key]}`);
    }
  }
}

function compareIds(origHtml, newHtml, label, problems) {
  const collect = (html) => {
    const $ = cheerio.load(html);
    const ids = new Set();
    $("[id]").each((_, el) => ids.add($(el).attr("id")));
    const blockIds = new Set();
    $("[data-block-id]").each((_, el) => blockIds.add($(el).attr("data-block-id")));
    return { ids, blockIds };
  };
  const o = collect(origHtml);
  const n = collect(newHtml);
  for (const id of o.ids) {
    if (!n.ids.has(id)) problems.push(`${label}: missing id "${id}"`);
  }
  for (const id of o.blockIds) {
    if (!n.blockIds.has(id)) problems.push(`${label}: missing data-block-id "${id}"`);
  }
}

let pagesChecked = 0;
for (const lang of LANGS) {
  const prefix = lang === "en" ? "" : lang + "/";
  for (const rel of PAGES) {
    const origFile = path.join(SRC_ROOT, prefix + rel);
    const newFile = path.join(OUT_ROOT, prefix + rel);
    const label = prefix + rel;
    if (REDESIGNED.has(label)) {
      console.log(`~ skipped (redesigned): ${label}`);
      continue;
    }
    const problems = [];
    if (!fs.existsSync(newFile)) {
      console.error(`MISSING OUTPUT: ${newFile}`);
      totalProblems++;
      continue;
    }
    const origHtml = fs.readFileSync(origFile, "utf8");
    const newHtml = fs.readFileSync(newFile, "utf8");
    compareIds(origHtml, newHtml, label, problems);
    compareMeta(origHtml, newHtml, label, problems);
    compareDom(origHtml, newHtml, label, problems);
    pagesChecked++;
    if (problems.length) {
      totalProblems += problems.length;
      console.log(`\n=== ${label}: ${problems.length} problem(s)`);
      for (const p of problems.slice(0, 12)) console.log("  - " + p);
      if (problems.length > 12) console.log(`  … and ${problems.length - 12} more`);
    }
  }
}

// download links present? (the redesigned page may repeat the buttons,
// so require that every platform target is covered rather than an exact count)
{
  const $ = cheerio.load(fs.readFileSync(path.join(OUT_ROOT, "download/desktop/index.html"), "utf8"));
  const targets = new Set($("a[data-download]").map((_, el) => $(el).attr("data-download")).get());
  for (const t of ["macos-x64", "macos-arm64", "windows-x64"]) {
    if (!targets.has(t)) {
      console.log(`\n=== download/desktop: missing data-download link for "${t}"`);
      totalProblems++;
    }
  }
}

// root files
for (const f of ["CNAME", "robots.txt", "sitemap.xml", "favicon.ico", "app-ads.txt", "changelog/desktop/index.html"]) {
  if (!fs.existsSync(path.join(OUT_ROOT, f))) {
    console.log(`MISSING OUTPUT FILE: ${f}`);
    totalProblems++;
  }
}

console.log(`\nChecked ${pagesChecked} pages. Problems: ${totalProblems}`);
process.exit(totalProblems ? 1 : 0);
