import "../../../(home)/faq/faq.css";

import FaqKo from "@/components/faq/FaqKo";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ko", "faq").meta);
}

export default function Page() {
  return <FaqKo />;
}
