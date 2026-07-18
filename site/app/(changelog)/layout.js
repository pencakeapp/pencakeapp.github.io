// Standalone layout for the changelog page — the legacy page was a plain
// HTML document without the notion classes or stylesheets.
export default function ChangelogLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
