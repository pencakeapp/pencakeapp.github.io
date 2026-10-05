import "../../../../(home)/guide/markdown/guide.css";

import GuideMarkdownJa from "@/components/guide/GuideMarkdownJa";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ja", "guide-markdown").meta);
}

export default function Page() {
  return <GuideMarkdownJa />;
}
