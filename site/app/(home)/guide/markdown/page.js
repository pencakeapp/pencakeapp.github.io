import "./guide.css";

import GuideMarkdownEn from "@/components/guide/GuideMarkdownEn";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("en", "guide-markdown").meta);
}

export default function Page() {
  return <GuideMarkdownEn />;
}
