import "../(home)/home.css";

import { EN_SERIF_FONT_CSS, JA_SERIF_FONT_CSS } from "@/lib/fonts";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout for the redesigned Japanese pages (/ja/...). Same design
// system as the (home) group — home.css — with the document language set
// to Japanese. Loads both webfonts: Source Serif Pro for Latin glyphs (the
// wordmark and any Latin runs) and Noto Serif JP for kana and kanji.
// home.css re-points --pc-serif under :lang(ja) so Japanese never falls
// into the Korean serif's Han forms.
export default function JaLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={EN_SERIF_FONT_CSS} />
        <link rel="stylesheet" href={JA_SERIF_FONT_CSS} />
      </head>
      <body className="pc-body">{children}</body>
    </html>
  );
}
