import "./home.css";

import { EN_SERIF_FONT_CSS } from "@/lib/fonts";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout for the redesigned pages (home, FAQ, guide, privacy,
// download, changelog). Unlike the (en) group, it does not load the legacy
// Notion stylesheets — these pages share home.css as their design system.
// Source Serif Pro is loaded here for the Latin serif (--pc-serif); the
// changelog lives in this group too, so every language's changelog gets it.
export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={EN_SERIF_FONT_CSS} />
      </head>
      <body className="pc-body">{children}</body>
    </html>
  );
}
