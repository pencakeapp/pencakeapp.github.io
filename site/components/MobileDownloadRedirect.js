"use client";

import { useEffect } from "react";
import { langPrefix } from "@/lib/langs";
import { detectMobileStore, storeUrl } from "@/lib/stores";

// Ported from the legacy inline script on the landing pages:
// the "Download" button routes to the App Store / Play Store on mobile,
// or to the mobile download page on desktop.
// Delegated like DownloadHandlers, because the redesigned homes repeat the
// button in the closing CTA — binding the id alone would leave that one
// falling through to the desktop page on every device.
const SELECTOR = "#downloadMobile, [data-download-mobile]";

export default function MobileDownloadRedirect({ lang }) {
  useEffect(() => {
    const desktopLink = `${langPrefix(lang)}/download/mobile/`;

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest(SELECTOR);
      if (!a) return;
      e.preventDefault();
      const store = detectMobileStore(navigator.userAgent, navigator.maxTouchPoints);
      window.location.href = store ? storeUrl(store, "button") : desktopLink;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lang]);

  return null;
}
