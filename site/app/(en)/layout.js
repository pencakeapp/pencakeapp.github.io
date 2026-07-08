import NotionStylesheets from "@/components/NotionStylesheets";
import { notionViewport } from "@/lib/metadata";

export const viewport = notionViewport;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="notion-html">
      <body className="notion-body">
        <NotionStylesheets />
        {children}
      </body>
    </html>
  );
}
