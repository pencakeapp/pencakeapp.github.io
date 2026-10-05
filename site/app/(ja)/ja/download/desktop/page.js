import "../../../../(home)/download/desktop/download.css";

import DownloadDesktopJa from "@/components/download/DownloadDesktopJa";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("ja", "download-desktop").meta);
}

export default function Page() {
  return <DownloadDesktopJa />;
}
