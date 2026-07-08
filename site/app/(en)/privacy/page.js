import SitePage from "@/components/SitePage";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";

export function generateMetadata() {
  return buildMetadata(loadContent("en", "privacy").meta);
}

export default function Page() {
  return <SitePage lang="en" pageKey="privacy" />;
}
