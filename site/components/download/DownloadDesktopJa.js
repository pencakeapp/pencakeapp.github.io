import DownloadHandlers from "@/components/DownloadHandlers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { DOWNLOAD_URLS, MAC_VERSION } from "@/lib/download";

// Redesigned Japanese desktop download page — DownloadDesktopEn/Ko's layout
// with the legacy Japanese copy (content/ja/download-desktop.json) reworded
// into natural Japanese, and the Japanese desktop screenshot. Section
// anchors keep their legacy Notion block ids (shared with the English page
// in the legacy export).

const PLATFORMS = [
  { key: "macos-x64", label: "macOS (Intel)" },
  { key: "macos-arm64", label: "macOS (Apple Silicon)" },
  { key: "windows-x64", label: "Windows" },
];

const FEATURES = [
  {
    emoji: "⚡",
    title: "クイックプレビュー",
    body: (
      <p>
        編集中に、<wbr />書式が適用された状態を<wbr />ショートカットで<wbr />すぐに確認できます。
      </p>
    ),
  },
  {
    emoji: "🔍",
    title: "記事内検索",
    body: (
      <>
        <p>記事の中から、<wbr />探している情報を<wbr />かんたんに見つけられます。</p>
        <p>編集モードでは、<wbr />検索と置換も使えます。</p>
      </>
    ),
  },
  {
    emoji: "🧭",
    title: "便利になった全体検索",
    body: (
      <>
        <p>ショートカットで、<wbr />アプリ内のすべての内容を<wbr />すばやく検索できます。</p>
        <p>検索結果の該当箇所へ、<wbr />そのまま移動できます。</p>
      </>
    ),
  },
  {
    emoji: "📄",
    title: "エクスポート機能",
    body: (
      <p>
        PDFとDOCX形式で<wbr />エクスポートできます。
      </p>
    ),
  },
];

// Keyboard shortcuts. A string is rendered as keycaps (split on " + " and
// " または "); { prose } is rendered as plain text.
const SHORTCUTS = [
  {
    id: "70a2d40349a243119753765c7c218b33",
    title: "一般",
    rows: [
      {
        label: "記事の編集",
        mac: { prose: "編集したい位置でダブルクリック" },
        win: { prose: "編集したい位置でダブルクリック" },
      },
      { label: "記事内検索", mac: "⌘ + F", win: "Ctrl + F" },
      { label: "記事内検索を終了", mac: "Esc", win: "Esc" },
      { label: "全画面で表示", mac: "⌘ + \\", win: "Ctrl + \\" },
      { label: "全画面表示を終了", mac: "⌘ + \\", win: "Ctrl + \\" },
      {
        label: "アプリ全体を検索",
        mac: "⌘ + K または ⌘ + P",
        win: "Ctrl + K または Ctrl + P",
      },
    ],
  },
  {
    id: "83e48c29dfc64f419193e727b6d3593b",
    title: "編集モード",
    rows: [
      { label: "保存して退出", mac: "⌘ + S", win: "Ctrl + S" },
      { label: "検索", mac: "⌘ + F", win: "Ctrl + F" },
      { label: "検索を終了", mac: "Esc", win: "Esc" },
      { label: "プレビュー", mac: "⌘ + P", win: "Ctrl + P" },
      { label: "プレビューを終了", mac: "⌘ + P または Esc", win: "Ctrl + P または Esc" },
      { label: "太字", mac: "⌘ + B", win: "Ctrl + B" },
      { label: "斜体", mac: "⌘ + I", win: "Ctrl + I" },
      { label: "下線", mac: "⌘ + U", win: "Ctrl + U" },
      { label: "取り消し線", mac: "⌘ + Shift + S", win: "Ctrl + Shift + S" },
      { label: "ハイライト", mac: "⌘ + Shift + H", win: "Ctrl + Shift + H" },
    ],
  },
];

function Keys({ v }) {
  if (typeof v !== "string") {
    return <span className="pc-kbd-prose">{v.prose}</span>;
  }
  return v.split(" または ").map((group, i) => (
    <span className="pc-kbd-group" key={i}>
      {i > 0 && <span className="pc-kbd-sep">または</span>}
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

export default function DownloadDesktopJa() {
  return (
    <>
      <TopNav home="/ja/" />

      <main>
        {/* ——— Title + download ——— */}
        <header className="pc-page-hero">
          <Kicker>ダウンロード</Kicker>
          <h1>PenCake PC版</h1>
          <p className="pc-hero-sub">
            パソコンでも、<wbr />ミニマルなデザインで<wbr />書いてみませんか。
            <wbr />執筆が、もっとはかどります。
          </p>
          <DownloadButtons anchorId="f402959fae914869855bb9dc4215b6ab" />
          <p className="pc-platforms">バージョン {MAC_VERSION}</p>
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
                PC版はプレミアムユーザー向けのサービスです。（無料ユーザーはお試しのみご利用いただけます。）
              </p>
            </div>
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                💡
              </span>
              <p>
                現在のPC版は正式版ではなくプレビュー版で、一部の機能はまだ開発中です。開発が完了した機能は、自動アップデートで順次お届けします。
              </p>
            </div>
          </div>
        </header>

        {/* ——— Screenshot ——— */}
        <section className="pc-shots-band pc-dl-shot" aria-label="PenCake PC版のスクリーンショット">
          <img
            src="/assets/images/pencake_desktop_screenshot_ja.png"
            alt="PenCake PC版 ― 物語の一覧とすっきりとした執筆画面"
            width="1268"
            height="968"
            decoding="async"
          />
        </section>

        {/* ——— Features ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>PC版だけの機能</Kicker>
            <h2>モバイル版とは、<wbr />ここが違います</h2>
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
        <section className="pc-part" aria-label="PC版のご利用案内">
          <header className="pc-part-head">
            <div className="pc-kicker-rule" />
            <h2>PC版のご利用案内</h2>
          </header>
          <div className="pc-prose">
            <p>PenCakeのPC版は、プレミアムユーザー向けのサービスです。</p>
            <p>無料ユーザーの場合、以下の機能はご利用いただけません。</p>
            <ul>
              <li>記事の保存</li>
              <li>自動同期</li>
            </ul>
            <p>プレミアムは、モバイル版で購入できます。</p>
            <p>
              購入後、モバイル版 → PC版の順に同期を設定すると、PC版でもプレミアムが有効になります。
            </p>
            <p>
              すでにモバイル版で同期を利用している場合は、PC版で同期を設定するだけで使えます。
            </p>
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                ⚠️
              </span>
              <p>
                注意：同期の設定を誤ると、データが削除されるおそれがあります。お困りの際は、以下のアドレスまでご連絡ください。{" "}
                <a href="mailto:pencake.app@gmail.com">pencake.app@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* ——— Keyboard shortcuts ——— */}
        <section className="pc-part" aria-label="キーボードショートカット">
          <header
            className="pc-part-head"
            id="bfca4b29d3034e53b13d9006e9ae627b"
          >
            <div className="pc-kicker-rule" />
            <h2>キーボードショートカット</h2>
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
                        <span className="pc-visually-hidden">操作</span>
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
        <section className="pc-part" aria-label="アップデート履歴">
          <header className="pc-part-head">
            <div className="pc-kicker-rule" />
            <h2>アップデート履歴</h2>
          </header>
          <nav className="pc-toc pc-dl-toc" aria-label="アップデート履歴">
            <a href="/changelog/desktop/?lang=ja">
              <span className="pc-toc-emoji" aria-hidden="true">
                🚀
              </span>
              <span className="pc-toc-label">PC版のアップデート履歴</span>
              <span className="pc-toc-leader" />
              <span className="pc-toc-hint">→</span>
            </a>
          </nav>
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>続きは、<wbr />パソコンでも。</h2>
          <p className="pc-cta-sub">
            macOSとWindowsに対応した、<wbr />PenCake PC版 v{MAC_VERSION}。
          </p>
          <DownloadButtons />
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/download/desktop/" lang="ja" />

      <GoogleAnalytics />
      <DownloadHandlers />
    </>
  );
}
