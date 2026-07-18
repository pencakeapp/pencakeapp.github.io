import "./download.css";

import DownloadDesktopEn from "@/components/download/DownloadDesktopEn";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

// Head metadata still comes from the extracted legacy page (title,
// description, OG/twitter, canonical, hreflang) — only the body is new.
export function generateMetadata() {
  return buildMetadata(loadContent("en", "download-desktop").meta);
}

export default function Page() {
  return <DownloadDesktopEn />;
}
