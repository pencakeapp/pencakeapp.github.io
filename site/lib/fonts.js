// Webfonts loaded from the Google Fonts CDN. Google serves them as
// unicode-range slices, so browsers only fetch the glyph ranges a page
// actually renders. display=swap shows system-font text until they load.
// Weights (400/600/700) match the design's serif usage: 400 (headings,
// body quotes), 600 (subheadings), 700 (<strong>).

// Latin serif for the redesigned pages (--pc-serif's first choice).
// To revert to the original system-font serif stack, stop loading this
// and drop "Source Serif Pro" from --pc-serif in home.css (see the
// commented-out original stack there).
export const EN_SERIF_FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap";

// Korean serif — Noto Serif KR (used for Hangul on the Korean pages).
export const KO_SERIF_FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&display=swap";

// Japanese serif — Noto Serif JP (used for kana and kanji on the Japanese
// pages). Loaded only there: Korean pages keep Noto Serif KR, whose Han
// glyphs follow Korean forms.
export const JA_SERIF_FONT_CSS =
  "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&display=swap";
