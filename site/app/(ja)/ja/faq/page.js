import "../../../(home)/faq/faq.css";

import FaqJa from "@/components/faq/FaqJa";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ja", "faq").meta);
}

export default function Page() {
  return <FaqJa />;
}
