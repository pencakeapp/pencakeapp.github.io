import "../../../../(home)/download/mobile/mobile.css";

import DownloadMobileJa from "@/components/download/DownloadMobileJa";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ja", "download-mobile").meta);
}

export default function Page() {
  return <DownloadMobileJa />;
}
