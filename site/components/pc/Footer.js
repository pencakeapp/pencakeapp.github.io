// Shared footer for the redesigned pages: brand mark, language switcher,
// copyright. `path` is the page's path within a language ("/", "/faq/") so
// each language link points at that language's copy of the current page.
// Language order matches the legacy language callout.
const LANGUAGES = [
  { label: "English", prefix: null },
  { label: "Français", prefix: "/fr" },
  { label: "Deutsch", prefix: "/de" },
  { label: "Español", prefix: "/es" },
  { label: "Português", prefix: "/pt" },
  { label: "Bahasa Indonesia", prefix: "/id" },
  { label: "简体中文", prefix: "/zh-cn" },
  { label: "繁體中文", prefix: "/zh-tw" },
  { label: "日本語", prefix: "/ja" },
  { label: "한국어", prefix: "/ko" },
];

export default function Footer({ path = "/" }) {
  return (
    <footer className="pc-footer">
      <div className="pc-footer-brand">
        <img src="/assets/images/pencake_icon_40x40.png" alt="" width="22" height="22" />
        PenCake
      </div>
      <p className="pc-footer-langs">
        {LANGUAGES.map((l, i) => (
          <span key={l.label}>
            {i > 0 && <span className="pc-footer-sep"> · </span>}
            {l.prefix ? (
              <a href={l.prefix + path}>{l.label}</a>
            ) : (
              <span className="pc-current">{l.label}</span>
            )}
          </span>
        ))}
      </p>
      <p className="pc-footer-copy">© 2026 PenCake. All rights reserved.</p>
    </footer>
  );
}
