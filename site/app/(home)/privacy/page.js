import "./privacy.css";

import PrivacyEn from "@/components/privacy/PrivacyEn";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("en", "privacy").meta);
}

export default function Page() {
  return <PrivacyEn />;
}
