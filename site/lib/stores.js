// Mobile app store links + device detection, shared by the home pages'
// "Get the mobile app" button (MobileDownloadRedirect) and the mobile
// download page's QR handoff.
//
// `medium` names how the visitor got here — "button" for a click, "qr" for
// a scan. The two stores read different parameters for that: Play takes the
// whole utm_* string through `referrer`, while App Store Connect ignores
// utm_* and reports only the `ct` campaign token, so both are sent.

const APP_STORE_ID = "1382218014";
const PLAY_PACKAGE = "com.diffathy.bbapp";

export function storeUrl(store, medium) {
  const utm = `utm_source=pencakewebsite&utm_medium=${medium}`;
  return store === "android"
    ? `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}&referrer=${encodeURIComponent(utm)}`
    : `https://apps.apple.com/app/id${APP_STORE_ID}?${utm}&ct=${medium}`;
}

export function detectMobileStore(userAgent, maxTouchPoints = 0) {
  if (/android/i.test(userAgent)) return "android";
  if (/iPad|iPhone|iPod/.test(userAgent)) return "ios";
  // iPadOS 13+ reports a Mac user agent; the touch screen gives it away
  if (/Macintosh/.test(userAgent) && maxTouchPoints > 1) return "ios";
  return null;
}

// The QR code encodes this page's URL with ?qr=1, so a scanning phone can be
// sent straight to its own store. That has to happen before the page paints —
// otherwise the phone downloads a page it was never meant to read — so the
// rules above are repeated here as source text for an inline <script> rather
// than run from a React effect. Keep the two in sync.
// Visits without the flag (search, shared links, crawlers) fall through and
// render the page normally; that is what keeps the URL safe to index.
export function qrRedirectScript() {
  return (
    `(function(){try{` +
    `if(new URLSearchParams(location.search).get("qr")!=="1")return;` +
    `var u=navigator.userAgent||"",t=navigator.maxTouchPoints||0,d=null;` +
    `if(/android/i.test(u))d=${JSON.stringify(storeUrl("android", "qr"))};` +
    `else if(/iPad|iPhone|iPod/.test(u)||(/Macintosh/.test(u)&&t>1))` +
    `d=${JSON.stringify(storeUrl("ios", "qr"))};` +
    `if(d)location.replace(d);` +
    `}catch(e){}})();`
  );
}
