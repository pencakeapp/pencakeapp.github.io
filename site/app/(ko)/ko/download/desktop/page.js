import "../../../../(home)/download/desktop/download.css";

import DownloadDesktopKo from "@/components/download/DownloadDesktopKo";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ko", "download-desktop").meta);
}

export default function Page() {
  return <DownloadDesktopKo />;
}
