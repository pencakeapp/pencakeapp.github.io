"use client";

import { useEffect } from "react";

// Legacy FAQ deep links point at Notion block ids — #<32 hex chars>, or
// occasionally the dashed uuid form. The redesigned page keeps those ids,
// so resolve the hash, open the matching <details>, scroll to it, and
// flash a quiet highlight.
export default function FaqDeepLinks() {
  useEffect(() => {
    const go = () => {
      let raw = window.location.hash.slice(1);
      try {
        raw = decodeURIComponent(raw);
      } catch {
        // malformed percent-encoding — use the hash as-is
      }
      const id = raw.replace(/-/g, "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      if (el.tagName === "DETAILS") {
        el.open = true;
        el.classList.remove("pc-target");
        void el.offsetWidth; // restart the highlight animation on repeat visits
        el.classList.add("pc-target");
      }
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    };

    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);

  return null;
}
