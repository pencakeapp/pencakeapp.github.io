import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { qrRedirectScript, storeUrl } from "@/lib/stores";

// Redesigned Japanese mobile download page — DownloadMobileEn/Ko's layout.
// The store labels come from the legacy page's link rows, the sub reworks
// the page's own meta description, and the marketing poster is the Japanese
// asset. The QR code carries the Japanese URL with ?qr=1, so a scan that
// somehow falls through still lands here.

const STORES = [
  { key: "ios", label: "App Storeからダウンロード" },
  { key: "android", label: "Google Playからダウンロード" },
];

function StoreButtons() {
  return (
    <div className="pc-actions">
      {STORES.map((s) => (
        <a
          className="pc-btn pc-btn-ghost"
          key={s.key}
          href={storeUrl(s.key, "button")}
        >
          <span className="pc-mdl-glyph" aria-hidden="true">
            ↗
          </span>
          {s.label}
        </a>
      ))}
    </div>
  );
}

export default function DownloadMobileJa() {
  return (
    <>
      {/* First thing in the document: a scanning phone is redirected while
          the rest of the page is still being parsed, so it never pays for
          the images and chunks it would only have thrown away. */}
      <script dangerouslySetInnerHTML={{ __html: qrRedirectScript() }} />

      <TopNav home="/ja/" />

      <main>
        {/* ——— Title + store links ——— */}
        <header className="pc-page-hero">
          <Kicker>ダウンロード</Kicker>
          <h1>PenCake モバイルアプリ</h1>
          <p className="pc-hero-sub">
            ミニマルなデザインで、<wbr />あなたの物語だけに<wbr />集中してみませんか。
            <wbr />ひらめきを、そのまま言葉に。
          </p>
          <StoreButtons />
          <p className="pc-platforms">iOS / Androidに対応 · 同期もできます</p>
          <aside className="pc-qr-card">
            <img
              src="/assets/images/pencake_qr_download_mobile_ja.svg"
              alt="PenCakeモバイルアプリのダウンロード用QRコード"
              width="128"
              height="128"
            />
            <div className="pc-qr-text">
              <p className="pc-qr-title">パソコンでご覧になっていますか？</p>
              <p className="pc-qr-hint">
                スマートフォンのカメラでコードを読み取ると、お使いの機種に合ったストアがすぐに開きます。
              </p>
            </div>
          </aside>
        </header>

        {/* ——— Marketing image ——— */}
        <section
          className="pc-shots-band pc-mdl-shot"
          aria-label="PenCakeモバイルアプリの画面"
        >
          <img
            src="/assets/images/pencake_marketing_ja.jpg"
            alt="PenCake ― あなたの物語に、夢中になろう。日記の一覧、日記、写真付きの日記を映した3台のスマートフォン。"
            width="1200"
            height="777"
            decoding="async"
          />
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>あなたの物語を、<wbr />いつでも、<wbr />どこでも。</h2>
          <p className="pc-cta-sub">
            App StoreとGoogle Playから、<wbr />無料でダウンロードできます。
          </p>
          <StoreButtons />
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/download/mobile/" lang="ja" />

      <GoogleAnalytics />
    </>
  );
}
