import "./home.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout for the redesigned pages (home, FAQ, guide, privacy,
// download, changelog). Unlike the (en) group, it does not load the legacy
// Notion stylesheets — these pages share home.css as their design system.
export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className="pc-body">{children}</body>
    </html>
  );
}
