import "./home.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Root layout for the redesigned home page only. Unlike the (en) group,
// it does not load the legacy Notion stylesheets — home has its own CSS.
export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className="pc-body">{children}</body>
    </html>
  );
}
