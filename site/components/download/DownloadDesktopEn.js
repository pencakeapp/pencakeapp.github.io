import DownloadHandlers from "@/components/DownloadHandlers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { DOWNLOAD_URLS, MAC_VERSION } from "@/lib/download";

// Redesigned English desktop download page, in the home design language.
// The copy is the legacy page verbatim; the download links keep their
// data-download attributes (DownloadHandlers fires the analytics events
// and starts the download), now with the real release URL as an href
// fallback. Section anchors keep their legacy Notion block ids.

const PLATFORMS = [
  { key: "macos-x64", label: "macOS (Intel)" },
  { key: "macos-arm64", label: "macOS (Apple Silicon)" },
  { key: "windows-x64", label: "Windows" },
];

const FEATURES = [
  {
    emoji: "⚡",
    title: "Quick Preview",
    body: (
      <p>
        Preview how your formatting looks instantly with a keyboard shortcut
        during editing.
      </p>
    ),
  },
  {
    emoji: "🔍",
    title: "In-Article Search",
    body: (
      <>
        <p>Easily find the desired information within an article.</p>
        <p>A find-and-replace feature is also available in edit mode.</p>
      </>
    ),
  },
  {
    emoji: "🧭",
    title: "Improved Global Search",
    body: (
      <>
        <p>Quickly search all content within the app using a keyboard shortcut.</p>
        <p>Directly jump to the exact location of search results.</p>
      </>
    ),
  },
  {
    emoji: "📄",
    title: "Export Feature",
    body: <p>Export as PDF or DOCX files.</p>,
  },
];

// Keyboard shortcuts. A string is rendered as keycaps (split on " + " and
// " or "); { prose } is rendered as plain text.
const SHORTCUTS = [
  {
    id: "70a2d40349a243119753765c7c218b33",
    title: "General",
    rows: [
      {
        label: "Edit article",
        mac: { prose: "Double-click at the location you want to edit" },
        win: { prose: "Double-click at the location you want to edit" },
      },
      { label: "In-article search", mac: "⌘ + F", win: "Ctrl + F" },
      { label: "End in-article search", mac: "Esc", win: "Esc" },
      { label: "View as full page", mac: "⌘ + \\", win: "Ctrl + \\" },
      { label: "Exit full page mode", mac: "⌘ + \\", win: "Ctrl + \\" },
      {
        label: "Global search across app",
        mac: "⌘ + K or ⌘ + P",
        win: "Ctrl + K or Ctrl + P",
      },
    ],
  },
  {
    id: "83e48c29dfc64f419193e727b6d3593b",
    title: "Edit Mode",
    rows: [
      { label: "Save and exit", mac: "⌘ + S", win: "Ctrl + S" },
      { label: "Find", mac: "⌘ + F", win: "Ctrl + F" },
      { label: "End find", mac: "Esc", win: "Esc" },
      { label: "Preview", mac: "⌘ + P", win: "Ctrl + P" },
      { label: "Exit preview", mac: "⌘ + P or Esc", win: "Ctrl + P or Esc" },
      { label: "Bold", mac: "⌘ + B", win: "Ctrl + B" },
      { label: "Italic", mac: "⌘ + I", win: "Ctrl + I" },
      { label: "Underline", mac: "⌘ + U", win: "Ctrl + U" },
      { label: "Strikethrough", mac: "⌘ + Shift + S", win: "Ctrl + Shift + S" },
      { label: "Highlight", mac: "⌘ + Shift + H", win: "Ctrl + Shift + H" },
    ],
  },
];

function Keys({ v }) {
  if (typeof v !== "string") {
    return <span className="pc-kbd-prose">{v.prose}</span>;
  }
  return v.split(" or ").map((group, i) => (
    <span className="pc-kbd-group" key={i}>
      {i > 0 && <span className="pc-kbd-sep">or</span>}
      {group.split(" + ").map((key, j) => (
        <span key={j}>
          {j > 0 && <span className="pc-kbd-sep">+</span>}
          <kbd className="pc-kbd">{key}</kbd>
        </span>
      ))}
    </span>
  ));
}

function DownloadButtons({ anchorId }) {
  return (
    <div className="pc-actions pc-dl-actions" id={anchorId}>
      {PLATFORMS.map((p) => (
        <a
          className="pc-btn pc-btn-ghost pc-dl-btn"
          key={p.key}
          href={DOWNLOAD_URLS[p.key]}
          data-download={p.key}
        >
          <span className="pc-dl-glyph" aria-hidden="true">
            ↓
          </span>
          {p.label}
        </a>
      ))}
    </div>
  );
}

export default function DownloadDesktopEn() {
  return (
    <>
      <TopNav />

      <main>
        {/* ——— Title + download ——— */}
        <header className="pc-page-hero">
          <Kicker>Download</Kicker>
          <h1>PenCake Desktop App</h1>
          <p className="pc-hero-sub">
            Write with a minimal design even on your desktop. Boost your
            productivity and creativity.
          </p>
          <DownloadButtons anchorId="f402959fae914869855bb9dc4215b6ab" />
          <p className="pc-platforms">Version {MAC_VERSION}</p>
          <div className="pc-dl-notes">
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                <img
                  src="/assets/images/pencake_icon_40x40.png"
                  alt=""
                  width="18"
                  height="18"
                />
              </span>
              <p>
                The desktop app is a service provided to Premium users. (Free
                users are only able to try out limited features.)
              </p>
            </div>
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                💡
              </span>
              <p>
                The current desktop app is a preview version, not the final
                version, and some features are still under development. As
                development progresses, completed features will be deployed
                sequentially through automatic updates.
              </p>
            </div>
          </div>
        </header>

        {/* ——— Screenshot ——— */}
        <section className="pc-shots-band pc-dl-shot" aria-label="Screenshot of the PenCake desktop app">
          <img
            src="/assets/images/pencake_desktop_screenshot.png"
            alt="PenCake desktop app — stories, articles, and a clean writing view"
            width="1268"
            height="968"
            decoding="async"
          />
        </section>

        {/* ——— Features ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>Only on desktop</Kicker>
            <h2>How It’s Different from the Mobile App</h2>
            <div className="pc-features pc-dl-features">
              {FEATURES.map((f) => (
                <div className="pc-feature" key={f.title}>
                  <div className="pc-feature-emoji" aria-hidden="true">
                    {f.emoji}
                  </div>
                  <h3>{f.title}</h3>
                  {f.body}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— User guide ——— */}
        <section className="pc-part" aria-label="Desktop App User Guide">
          <header className="pc-part-head">
            <div className="pc-kicker-rule" />
            <h2>Desktop App User Guide</h2>
          </header>
          <div className="pc-prose">
            <p>The PenCake desktop app is a service provided to Premium users.</p>
            <p>Free users will experience the following limitations:</p>
            <ul>
              <li>Inability to save articles</li>
              <li>No automatic synchronization</li>
            </ul>
            <p>Premium can be purchased via the mobile version.</p>
            <p>
              After purchase, perform the sync setup in the order: the mobile
              version → the desktop version, to activate your Premium in the
              desktop version.
            </p>
            <p>
              If you’re already using synchronization on the mobile version,
              you just need to set up additional synchronization on the desktop
              version.
            </p>
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                ⚠️
              </span>
              <p>
                Caution: Incorrect synchronization settings may result in data
                loss. If you need help, please contact us at:{" "}
                <a href="mailto:pencake.app@gmail.com">pencake.app@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* ——— Keyboard shortcuts ——— */}
        <section className="pc-part" aria-label="Keyboard Shortcuts">
          <header
            className="pc-part-head"
            id="bfca4b29d3034e53b13d9006e9ae627b"
          >
            <div className="pc-kicker-rule" />
            <h2>Keyboard Shortcuts</h2>
          </header>
          <div className="pc-kbd-tables">
            {SHORTCUTS.map((group) => (
              <div className="pc-kbd-block" key={group.title}>
                <h3 className="pc-kbd-title" id={group.id}>
                  {group.title}
                </h3>
                <table className="pc-kbd-table">
                  <thead>
                    <tr>
                      <th scope="col">
                        <span className="pc-visually-hidden">Action</span>
                      </th>
                      <th scope="col">macOS</th>
                      <th scope="col">Windows</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.rows.map((row) => (
                      <tr key={row.label}>
                        <td>{row.label}</td>
                        <td>
                          <Keys v={row.mac} />
                        </td>
                        <td>
                          <Keys v={row.win} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Changelog ——— */}
        <section className="pc-part" aria-label="Changelog">
          <header className="pc-part-head">
            <div className="pc-kicker-rule" />
            <h2>Changelog</h2>
          </header>
          <nav className="pc-toc pc-dl-toc" aria-label="Release notes">
            <a href="/changelog/desktop/?lang=en">
              <span className="pc-toc-emoji" aria-hidden="true">
                🚀
              </span>
              <span className="pc-toc-label">Desktop Changelog</span>
              <span className="pc-toc-leader" />
              <span className="pc-toc-hint">→</span>
            </a>
          </nav>
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>Start writing at your desk.</h2>
          <p className="pc-cta-sub">
            PenCake Desktop App v{MAC_VERSION} for macOS and Windows.
          </p>
          <DownloadButtons />
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/download/desktop/" />

      <GoogleAnalytics />
      <DownloadHandlers />
    </>
  );
}
