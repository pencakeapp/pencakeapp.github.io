import SitePage from "@/components/SitePage";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";
import { NOTION_LANGS } from "@/lib/langs";

export const dynamicParams = false;

export function generateStaticParams() {
  return NOTION_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(loadContent(lang, "home").meta);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <SitePage lang={lang} pageKey="home" />;
}
