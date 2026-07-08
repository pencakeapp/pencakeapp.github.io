/**
 * Extracts content + metadata from the legacy Notion-export HTML pages
 * into per-language JSON files under site/content/.
 *
 * Fidelity strategy:
 *  - `bodyTemplate`: the page's <body> inner HTML with the
 *    .notion-page-content children replaced by a marker comment, and
 *    scripts / the notion analytics iframe removed (behaviors are
 *    reimplemented as React client components).
 *  - `blocks`: each top-level node of .notion-page-content, verbatim.
 *  - Inline `onclick` download handlers are converted to `data-download`
 *    attributes (handled by a delegated React listener).
 */
import * as cheerio from "cheerio";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_LANGS } from "../lib/langs.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_ROOT = path.resolve(__dirname, "../..");
const OUT_ROOT = path.resolve(__dirname, "../content");

const LANGS = ALL_LANGS;
const PAGES = [
  { key: "home", rel: "index.html" },
  { key: "faq", rel: "faq/index.html" },
  { key: "privacy", rel: "privacy/index.html" },
  { key: "guide-markdown", rel: "guide/markdown/index.html" },
  { key: "download-desktop", rel: "download/desktop/index.html" },
  { key: "download-mobile", rel: "download/mobile/index.html" },
];

const CONTENT_MARKER = "<!--__PAGE_CONTENT__-->";

const ONCLICK_MAP = [
  [/downloadMacOS_Intel\s*\(/, "macos-x64"],
  [/downloadMacOS_AppleSilicon\s*\(/, "macos-arm64"],
  [/downloadWindows\s*\(/, "windows-x64"],
];

function classify(el) {
  const cls = el.attribs?.class || "";
  const m = cls.match(/notion-([a-z_]+)-block/);
  if (m) return m[1];
  if (el.type === "comment") return "comment";
  if (el.type === "text") return "text";
  if (el.name === "br") return "br";
  return el.name || "raw";
}

function extractMeta($) {
  const metaByName = (n) => $(`meta[name="${n}"]`).attr("content") ?? null;
  const metaByProp = (p) => $(`meta[property="${p}"]`).attr("content") ?? null;
  return {
    htmlLang: $("html").attr("lang") ?? null,
    htmlClass: $("html").attr("class") ?? null,
    title: $("title").text() || null,
    description: metaByName("description"),
    viewport: metaByName("viewport"),
    og: {
      title: metaByProp("og:title"),
      description: metaByProp("og:description"),
      image: metaByProp("og:image"),
      url: metaByProp("og:url"),
      type: metaByProp("og:type"),
      locale: metaByProp("og:locale"),
      localeAlternates: $('meta[property="og:locale:alternate"]')
        .map((_, el) => $(el).attr("content"))
        .get(),
    },
    twitter: {
      card: metaByName("twitter:card"),
      title: metaByName("twitter:title"),
      description: metaByName("twitter:description"),
      image: metaByName("twitter:image"),
      url: metaByName("twitter:url"),
    },
    appleMobileWebAppCapable: metaByName("apple-mobile-web-app-capable"),
    formatDetection: metaByName("format-detection"),
    msapplicationTapHighlight: metaByName("msapplication-tap-highlight"),
    hreflang: $('link[rel="alternate"][hreflang]')
      .map((_, el) => ({
        hreflang: $(el).attr("hreflang"),
        href: $(el).attr("href"),
      }))
      .get(),
    canonical: $('link[rel="canonical"]').attr("href") ?? null,
    cssLinks: $('link[rel="stylesheet"]')
      .map((_, el) => ({ href: $(el).attr("href"), media: $(el).attr("media") ?? null }))
      .get(),
    favicon: $('link[rel="icon"]').attr("href") ?? null,
  };
}

function extractPage(file) {
  const html = fs.readFileSync(file, "utf8");
  const $ = cheerio.load(html);

  const meta = extractMeta($);

  // Audit trail: inline scripts + external script srcs before removal.
  const inlineScripts = $("script:not([src])")
    .map((_, el) => $(el).html())
    .get()
    .filter((s) => s && s.trim());
  const scriptSrcs = $("script[src]")
    .map((_, el) => $(el).attr("src"))
    .get();

  // Behaviors are reimplemented in React; strip scripts + notion iframe.
  $("script").remove();
  $('iframe[src*="aif.notion.so"]').remove();

  // Convert inline onclick download handlers to data attributes.
  $("a[onclick]").each((_, el) => {
    const onclick = $(el).attr("onclick") || "";
    for (const [re, action] of ONCLICK_MAP) {
      if (re.test(onclick)) {
        $(el).attr("data-download", action);
        break;
      }
    }
    $(el).removeAttr("onclick");
  });

  const pageContent = $(".notion-page-content").first();
  if (!pageContent.length) throw new Error(`no .notion-page-content in ${file}`);

  const blocks = pageContent
    .contents()
    .toArray()
    .map((node) => ({
      type: classify(node),
      html: $.html(node),
    }));

  pageContent.empty().append(CONTENT_MARKER);

  const bodyTemplate = $("body").html().trim();
  const bodyClass = $("body").attr("class") ?? null;

  return { meta, bodyClass, bodyTemplate, blocks, audit: { inlineScripts, scriptSrcs } };
}

let issues = 0;
for (const lang of LANGS) {
  const prefix = lang === "en" ? "" : lang + "/";
  const outDir = path.join(OUT_ROOT, lang);
  fs.mkdirSync(outDir, { recursive: true });
  for (const page of PAGES) {
    const file = path.join(SRC_ROOT, prefix + page.rel);
    if (!fs.existsSync(file)) {
      console.error(`MISSING: ${file}`);
      issues++;
      continue;
    }
    try {
      const data = extractPage(file);
      fs.writeFileSync(
        path.join(outDir, `${page.key}.json`),
        JSON.stringify(data, null, 2)
      );
      console.log(
        `${lang}/${page.key}: ${data.blocks.length} blocks, scripts=[${data.audit.scriptSrcs.join(", ")}], inline=${data.audit.inlineScripts.length}`
      );
    } catch (e) {
      console.error(`FAIL ${file}: ${e.message}`);
      issues++;
    }
  }
}
process.exit(issues ? 1 : 0);
