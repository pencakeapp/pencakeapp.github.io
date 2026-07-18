import "../(home)/home.css";

import { KO_SERIF_FONT_CSS } from "@/lib/fonts";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout for the redesigned Korean pages (/ko/...). Same design
// system as the (home) group — home.css — with the document language
// set to Korean, and Noto Serif KR loaded from the Google Fonts CDN
// (--pc-serif prefers it for Hangul; Latin never reaches it).
export default function KoLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={KO_SERIF_FONT_CSS} />
      </head>
      <body className="pc-body">{children}</body>
    </html>
  );
}
