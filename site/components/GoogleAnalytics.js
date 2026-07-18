"use client";

import { useEffect } from "react";

// Ported from the legacy Notion export script: loads gtag.js dynamically.
const GA_ID = "G-ZZNDMTFTKD";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return;
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_ID);
  }, []);

  return null;
}
