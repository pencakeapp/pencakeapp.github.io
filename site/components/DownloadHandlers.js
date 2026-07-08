"use client";

import { useEffect } from "react";
import { startDesktopDownload } from "@/lib/download";

// Delegated click handler for the desktop download links.
// The legacy pages used inline onclick="downloadMacOS_Intel(); return false;"
// attributes; the extractor converts those to data-download attributes.
export default function DownloadHandlers() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest("a[data-download]");
      if (!a) return;
      e.preventDefault();
      startDesktopDownload(a.getAttribute("data-download"));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
