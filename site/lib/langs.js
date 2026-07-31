// Single source of truth for the site's languages.
// "en" lives at the root; all others under /<lang>/.
// Node scripts (scripts/extract.mjs, scripts/verify.mjs) import ALL_LANGS
// from here too, so a language is added in exactly one place.
export const DEFAULT_LANG = "en";
export const OTHER_LANGS = ["ko", "ja", "zh-cn", "zh-tw", "de", "es", "pt", "fr", "id"];
export const ALL_LANGS = [DEFAULT_LANG, ...OTHER_LANGS];

// Languages still rendered from the legacy Notion export by the (i18n)
// group. A language leaves this list when its pages are redesigned
// (en lives at the root; ko has its own redesigned route group).
// download/mobile is redesigned for en only, so the (i18n) route keeps
// serving it for every other language (including ko) via OTHER_LANGS.
export const NOTION_LANGS = OTHER_LANGS.filter((lang) => lang !== "ko");

// <html lang> attribute value per language, as on the legacy pages.
// (Defaults to the language key; only the zh variants need explicit casing.)
export const HTML_LANG = {
  en: "en",
  ko: "ko",
  ja: "ja",
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW",
  de: "de",
  es: "es",
  pt: "pt",
  fr: "fr",
  id: "id",
};

export function langPrefix(lang) {
  return lang === DEFAULT_LANG ? "" : `/${lang}`;
}
