import "../(home)/home.css";

import { EN_SERIF_FONT_CSS, KO_SERIF_FONT_CSS } from "@/lib/fonts";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout for the redesigned Korean pages (/ko/...). Same design
// system as the (home) group — home.css — with the document language set
// to Korean. Loads both webfonts: Source Serif Pro for Latin glyphs (the
// wordmark and any Latin runs) and Noto Serif KR for Hangul. --pc-serif
// tries Source Serif Pro first (Latin only), then Noto Serif KR (Hangul).
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
        <link rel="stylesheet" href={EN_SERIF_FONT_CSS} />
        <link rel="stylesheet" href={KO_SERIF_FONT_CSS} />
      </head>
      <body className="pc-body">{children}</body>
    </html>
  );
}
