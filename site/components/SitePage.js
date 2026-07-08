import parse from "html-react-parser";
import { blockHtml } from "@/lib/blocks";
import { loadContent } from "@/lib/content";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NotionBehaviors from "@/components/NotionBehaviors";
import DownloadHandlers from "@/components/DownloadHandlers";
import MobileDownloadRedirect from "@/components/MobileDownloadRedirect";

const CONTENT_MARKER = "<!--__PAGE_CONTENT__-->";

// Renders one legacy notion-export page: the extracted body template with
// the page's content blocks spliced back in, plus the ported client behaviors.
export default function SitePage({ lang, pageKey }) {
  const content = loadContent(lang, pageKey);
  const blocksHtml = content.blocks.map(blockHtml).join("");
  const html = content.bodyTemplate.replace(CONTENT_MARKER, () => blocksHtml);

  return (
    <>
      {parse(html)}
      <GoogleAnalytics />
      <NotionBehaviors />
      {pageKey === "home" && <MobileDownloadRedirect lang={lang} />}
      {pageKey === "download-desktop" && <DownloadHandlers />}
    </>
  );
}
