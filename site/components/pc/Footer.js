// Shared footer for the redesigned pages: brand mark, language switcher,
// copyright. `path` is the page's path within a language ("/", "/faq/") so
// each language link points at that language's copy of the current page;
// `lang` marks the current page's language (shown as plain text).
// Language order matches the legacy language callout.
const LANGUAGES = [
  { key: "en", label: "English", prefix: "" },
  { key: "fr", label: "Français", prefix: "/fr" },
  { key: "de", label: "Deutsch", prefix: "/de" },
  { key: "es", label: "Español", prefix: "/es" },
  { key: "pt", label: "Português", prefix: "/pt" },
  { key: "id", label: "Bahasa Indonesia", prefix: "/id" },
  { key: "zh-cn", label: "简体中文", prefix: "/zh-cn" },
  { key: "zh-tw", label: "繁體中文", prefix: "/zh-tw" },
  { key: "ja", label: "日本語", prefix: "/ja" },
  { key: "ko", label: "한국어", prefix: "/ko" },
];

export default function Footer({ path = "/", lang = "en" }) {
  return (
    <footer className="pc-footer">
      <div className="pc-footer-brand">
        <img src="/assets/images/pencake_icon_40x40.png" alt="" width="22" height="22" />
        PenCake
      </div>
      <p className="pc-footer-langs">
        {LANGUAGES.map((l, i) => (
          <span key={l.key}>
            {i > 0 && <span className="pc-footer-sep"> · </span>}
            {l.key === lang ? (
              <span className="pc-current">{l.label}</span>
            ) : (
              <a href={l.prefix + path}>{l.label}</a>
            )}
          </span>
        ))}
      </p>
      <p className="pc-footer-copy">© 2026 PenCake. All rights reserved.</p>
    </footer>
  );
}
