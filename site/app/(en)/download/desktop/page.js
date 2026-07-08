import SitePage from "@/components/SitePage";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

export function generateMetadata() {
  return buildMetadata(loadContent("en", "download-desktop").meta);
}

export default function Page() {
  return <SitePage lang="en" pageKey="download-desktop" />;
}
