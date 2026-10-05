"use client";

import { useEffect, useState } from "react";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import {
  logs,
  updateHistoryTitle,
  newFeaturesTitle,
  othersTitle,
} from "@/lib/changelog-data";
import { JA_SERIF_FONT_CSS, KO_SERIF_FONT_CSS } from "@/lib/fonts";
import { langPrefix } from "@/lib/langs";
import { phrases, plain } from "@/lib/phrases";

const DEFAULT_LANG = "en";

// <html lang> value per ?lang= code. Defaults to the code itself;
// only the zh variants need an explicit region/script tag.
const HTML_LANG = { "zh-hans": "zh-CN", "zh-hant": "zh-TW" };

// The site's language folders per ?lang= code — same as the code itself
// except for the zh variants, which the changelog names by script.
const SITE_LANG = { "zh-hans": "zh-cn", "zh-hant": "zh-tw" };

// Language switcher entries. The changelog localizes via ?lang= on a
// single URL (matching the page's hreflang alternates), not per-language
// paths like the rest of the site.
const LANGUAGES = [
  { label: "English", code: null },
  { label: "Français", code: "fr" },
  { label: "Deutsch", code: "de" },
  { label: "Español", code: "es" },
  { label: "Português", code: "pt" },
  { label: "Bahasa Indonesia", code: "id" },
  { label: "简体中文", code: "zh-hans" },
  { label: "繁體中文", code: "zh-hant" },
  { label: "日本語", code: "ja" },
  { label: "한국어", code: "ko" },
];

// ?lang= is user-supplied, so it is checked against this set once, on read,
// and anything else becomes English. Without that, a junk code reaches
// Intl.DateTimeFormat below, which throws RangeError on anything that isn't
// a well-formed language tag (?lang=x) and takes the whole page down with it.
// A Set also keeps inherited keys (?lang=constructor) out of the lookups.
const KNOWN_LANGS = new Set(LANGUAGES.map((l) => l.code || DEFAULT_LANG));

// Where the wordmark goes back to: that language's home, not always the
// English one. Only ever called with a KNOWN_LANGS code, all of which have
// a language folder on the site (en being the root).
function homeHref(lang) {
  return `${langPrefix(SITE_LANG[lang] || lang)}/`;
}

// Log entries are plain strings: "▪ " starts an item, "- " a sub-item.
function parseItems(text) {
  const items = [];
  for (const line of text.split("\n")) {
    if (line.startsWith("▪ ")) {
      items.push({ text: line.slice(2), subs: [] });
    } else if (line.startsWith("- ") && items.length) {
      items[items.length - 1].subs.push(line.slice(2));
    } else if (line.trim()) {
      items.push({ text: line, subs: [] });
    }
  }
  return items;
}

function ItemList({ text }) {
  return (
    <ul className="pc-cl-items">
      {parseItems(text).map((item, i) => (
        <li key={i}>
          {item.text}
          {item.subs.length > 0 && (
            <ul>
              {item.subs.map((sub, j) => (
                <li key={j}>{sub}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

// Redesigned changelog in the home design language: releases as a quiet
// timeline — a teal dot for the latest build, hairline rail down the page.
// The language still comes from the ?lang= query parameter (e.g.
// ?lang=zh-hans), exactly like the legacy in-browser React app.
export default function ChangelogApp() {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    setLang(KNOWN_LANGS.has(requested) ? requested : DEFAULT_LANG);
  }, []);

  useEffect(() => {
    if (!lang) return;
    // Reflect the query-selected language on <html lang> (layout renders "en"
    // by default since the language is only known client-side).
    document.documentElement.lang = HTML_LANG[lang] || lang;
    const desired = plain(updateHistoryTitle[lang] || updateHistoryTitle[DEFAULT_LANG]);
    document.title = desired;
    // Next.js re-applies the static metadata title after hydration,
    // so re-assert the localized title for a moment.
    const observer = new MutationObserver(() => {
      if (document.title !== desired) document.title = desired;
    });
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    const stop = setTimeout(() => observer.disconnect(), 3000);
    return () => {
      clearTimeout(stop);
      observer.disconnect();
    };
  }, [lang]);

  // Same as the legacy page: nothing is shown until the script runs —
  // except the running head, which renders statically (pointing at the
  // root) and re-points at the selected language's home once ?lang= is in.
  if (!lang) return <TopNav />;

  const t = (map) => map[lang] || map[DEFAULT_LANG];
  // releasedAt is a bare calendar date ("2024-12-21", parsed as UTC midnight);
  // format it in UTC so it doesn't shift a day back in negative-offset zones.
  const dateFormat = new Intl.DateTimeFormat(HTML_LANG[lang] || lang, {
    dateStyle: "long",
    timeZone: "UTC",
  });

  return (
    <>
      <TopNav home={homeHref(lang)} />
      {/* This page is shared by every language (?lang=), so the Korean and
          Japanese serif webfonts are only pulled in when that language is
          selected. `precedence` lets React hoist the client-rendered link
          to <head>. */}
      {lang === "ko" && (
        <link rel="stylesheet" precedence="pc-fonts" href={KO_SERIF_FONT_CSS} />
      )}
      {lang === "ja" && (
        <link rel="stylesheet" precedence="pc-fonts" href={JA_SERIF_FONT_CSS} />
      )}
      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero pc-rise">
          <div className="pc-cl-rocket" aria-hidden="true">
            🚀
          </div>
          <Kicker>PenCake Desktop</Kicker>
          <h1>{phrases(t(updateHistoryTitle))}</h1>
        </header>

        {/* ——— Timeline ——— */}
        <section className="pc-cl-timeline">
          <ol className="pc-cl-list">
            {logs.map((p, i) => (
              <li className="pc-cl-log" key={p.version}>
                <div className="pc-cl-rail" aria-hidden="true">
                  <span
                    className={
                      "pc-cl-dot" + (i === 0 ? " pc-cl-dot-latest" : "")
                    }
                  />
                </div>
                <article>
                  <h2 className="pc-cl-ver">{"v" + p.version}</h2>
                  <div className="pc-cl-date">
                    {dateFormat.format(new Date(p.releasedAt))}
                  </div>
                  {p.features && (
                    <>
                      <h3 className="pc-cl-label">{t(newFeaturesTitle)}</h3>
                      <ItemList text={t(p.features)} />
                    </>
                  )}
                  {p.others && (
                    <>
                      <h3 className="pc-cl-label">{t(othersTitle)}</h3>
                      <ItemList text={t(p.others)} />
                    </>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </section>
      </main>

      {/* ——— Footer (?lang= switcher) ——— */}
      <footer className="pc-footer">
        <div className="pc-footer-brand">
          <img
            src="/assets/images/pencake_icon_40x40.png"
            alt=""
            width="22"
            height="22"
          />
          PenCake
        </div>
        <p className="pc-footer-langs">
          {LANGUAGES.map((l, i) => (
            <span key={l.label}>
              {i > 0 && <span className="pc-footer-sep"> · </span>}
              {(l.code || DEFAULT_LANG) === lang ? (
                <span className="pc-current">{l.label}</span>
              ) : (
                <a
                  href={
                    l.code
                      ? `/changelog/desktop/?lang=${l.code}`
                      : "/changelog/desktop/"
                  }
                >
                  {l.label}
                </a>
              )}
            </span>
          ))}
        </p>
        <p className="pc-footer-copy">© 2026 PenCake. All rights reserved.</p>
      </footer>
    </>
  );
}
