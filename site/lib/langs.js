// Single source of truth for the site's languages.
// "en" lives at the root; all others under /<lang>/.
// Node scripts (scripts/extract.mjs, scripts/verify.mjs) import ALL_LANGS
// from here too, so a language is added in exactly one place.
export const DEFAULT_LANG = "en";
export const OTHER_LANGS = ["ko", "ja", "zh-cn", "zh-tw", "de", "es", "pt", "fr"];
export const ALL_LANGS = [DEFAULT_LANG, ...OTHER_LANGS];

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
};

export function langPrefix(lang) {
  return lang === DEFAULT_LANG ? "" : `/${lang}`;
}
