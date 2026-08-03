import "../../../../(home)/download/mobile/mobile.css";

import DownloadMobileKo from "@/components/download/DownloadMobileKo";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ko", "download-mobile").meta);
}

export default function Page() {
  return <DownloadMobileKo />;
}
