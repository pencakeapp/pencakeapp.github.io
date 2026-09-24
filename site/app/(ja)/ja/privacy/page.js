import "../../../(home)/privacy/privacy.css";

import PrivacyJa from "@/components/privacy/PrivacyJa";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ja", "privacy").meta);
}

export default function Page() {
  return <PrivacyJa />;
}
