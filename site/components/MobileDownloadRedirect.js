"use client";

import { useEffect } from "react";
import { langPrefix } from "@/lib/langs";

// Ported from the legacy inline script on the landing pages:
// the "Download" button routes to the App Store / Play Store on mobile,
// or to the mobile download page on desktop.
const appStoreLink =
  "https://apps.apple.com/app/id1382218014?utm_source=pencakewebsite&utm_medium=button";
const playStoreLink =
  "https://play.google.com/store/apps/details?id=com.diffathy.bbapp&referrer=utm_source%3Dpencakewebsite%26utm_medium%3Dbutton";

export default function MobileDownloadRedirect({ lang }) {
  useEffect(() => {
    const button = document.getElementById("downloadMobile");
    if (!button) return;

    const desktopLink = `${langPrefix(lang)}/download/mobile/`;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const onClick = (e) => {
      e.preventDefault();
      if (/android/i.test(userAgent)) {
        window.location.href = playStoreLink;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = appStoreLink;
      } else {
        window.location.href = desktopLink;
      }
    };
    button.addEventListener("click", onClick);
    return () => button.removeEventListener("click", onClick);
  }, [lang]);

  return null;
}
