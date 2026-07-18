import NotionStylesheets from "@/components/NotionStylesheets";
import { HTML_LANG } from "@/lib/content";
import { notionViewport } from "@/lib/metadata";

export const viewport = notionViewport;

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={HTML_LANG[lang] ?? lang} className="notion-html">
      <body className="notion-body">
        <NotionStylesheets />
        {children}
      </body>
    </html>
  );
}
