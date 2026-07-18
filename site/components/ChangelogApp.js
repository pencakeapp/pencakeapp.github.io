"use client";

import { useEffect, useState } from "react";
import {
  logs,
  updateHistoryTitle,
  newFeaturesTitle,
  othersTitle,
} from "@/lib/changelog-data";

const DEFAULT_LANG = "en";

// <html lang> value per ?lang= code. Defaults to the code itself;
// only the zh variants need an explicit region/script tag.
const HTML_LANG = { "zh-hans": "zh-CN", "zh-hant": "zh-TW" };

// Ported 1:1 from the legacy /changelog/desktop/ in-browser React app.
// The language comes from the ?lang= query parameter (e.g. ?lang=zh-hans).
export default function ChangelogApp() {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setLang(params.get("lang") || DEFAULT_LANG);
  }, []);

  useEffect(() => {
    if (!lang) return;
    // Reflect the query-selected language on <html lang> (layout renders "en"
    // by default since the language is only known client-side).
    document.documentElement.lang = HTML_LANG[lang] || lang;
    const desired = updateHistoryTitle[lang] || updateHistoryTitle[DEFAULT_LANG];
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

  // Same as the legacy page: nothing is shown until the script runs.
  if (!lang) return null;

  function renderItem(p) {
    const features = p.features && (p.features[lang] || p.features[DEFAULT_LANG]);
    const others = p.others && (p.others[lang] || p.others[DEFAULT_LANG]);

    return (
      <div key={p.version} style={{}}>
        <div style={{ fontSize: 25, fontWeight: "bold" }}>{"v" + p.version}</div>
        <div style={{ paddingTop: 20 }} />
        <div style={{ fontSize: 15, color: "#999999" }}>
          {new Intl.DateTimeFormat(lang).format(new Date(p.releasedAt))}
        </div>
        {features && (
          <>
            <div style={{ paddingTop: 22 }} />
            <div style={{ fontSize: 17, fontWeight: "bold" }}>{`${
              newFeaturesTitle[lang] || newFeaturesTitle[DEFAULT_LANG]
            }`}</div>
            <div style={{ paddingTop: 10 }} />
            <div style={{ fontSize: 15 }}>{features.replaceAll("- ", "     - ")}</div>
          </>
        )}
        {others && (
          <>
            <div style={{ paddingTop: 22 }} />
            <div style={{ fontSize: 17, fontWeight: "bold" }}>{`${
              othersTitle[lang] || othersTitle[DEFAULT_LANG]
            }`}</div>
            <div style={{ paddingTop: 10 }} />
            <div style={{ fontSize: 15 }}>{others.replaceAll("- ", "     - ")}</div>
          </>
        )}
        <div style={{ paddingTop: 50 }} />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 120,
        color: "#323232",
        backgroundColor: "white",
        lineHeight: 1.8,
        fontFamily:
          'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
        WebkitFontSmoothing: "auto",
        whiteSpace: "pre-wrap",
      }}
    >
      <div style={{ flex: 1, maxWidth: 720, paddingLeft: 40, paddingRight: 40 }}>
        <div style={{ fontSize: 60, fontWeight: "bold", marginBottom: -15 }}>{"🚀"}</div>
        <div style={{ fontSize: 45, fontWeight: "bold" }}>
          {updateHistoryTitle[lang] || updateHistoryTitle[DEFAULT_LANG]}
        </div>
        <div style={{ paddingTop: 40 }} />
        {logs.map((p) => renderItem(p))}
      </div>
    </div>
  );
}
