import "../../../../(home)/guide/markdown/guide.css";

import GuideMarkdownKo from "@/components/guide/GuideMarkdownKo";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ko", "guide-markdown").meta);
}

export default function Page() {
  return <GuideMarkdownKo />;
}
