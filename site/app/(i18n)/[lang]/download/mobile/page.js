import SitePage from "@/components/SitePage";
import { buildMetadata } from "@/lib/metadata";
import { loadContent } from "@/lib/content";
import { OTHER_LANGS } from "@/lib/langs";

export const dynamicParams = false;

export function generateStaticParams() {
  return OTHER_LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return buildMetadata(loadContent(lang, "download-mobile").meta);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <SitePage lang={lang} pageKey="download-mobile" />;
}
