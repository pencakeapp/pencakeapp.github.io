import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { qrRedirectScript, storeUrl } from "@/lib/stores";

// Redesigned English mobile download page, in the home design language.
// The legacy page carried only the two store links, so the headline, the
// sub, and the closing CTA are new copy (the sub is the page's own meta
// description). Phones get the store links; desktop visitors also get a QR
// card whose code carries ?qr=1, so the scanning phone hops straight to its
// own store — see qrRedirectScript.
//
// That hop runs from an inline script ahead of the page, which means it
// beats GoogleAnalytics' async loader: scans never reach GA, and the Play
// referrer / App Store ct token are where they show up instead.

const STORES = [
  { key: "ios", label: "Download on App Store" },
  { key: "android", label: "Download on Google Play" },
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

export default function DownloadMobileEn() {
  return (
    <>
      {/* First thing in the document: a scanning phone is redirected while
          the rest of the page is still being parsed, so it never pays for
          the images and chunks it would only have thrown away. */}
      <script dangerouslySetInnerHTML={{ __html: qrRedirectScript() }} />

      <TopNav />

      <main>
        {/* ——— Title + store links ——— */}
        <header className="pc-page-hero">
          <Kicker>Download</Kicker>
          <h1>PenCake Mobile App</h1>
          <p className="pc-hero-sub">
            Focus entirely on your story with a minimal design. Gain
            inspiration and boost your creativity.
          </p>
          <StoreButtons />
          <p className="pc-platforms">
            Available on iOS and Android · Sync supported
          </p>
          <aside className="pc-qr-card">
            <img
              src="/assets/images/pencake_qr_download_mobile.svg"
              alt="QR code for downloading the PenCake mobile app"
              width="128"
              height="128"
            />
            <div className="pc-qr-text">
              <p className="pc-qr-title">On your computer right now?</p>
              <p className="pc-qr-hint">
                Scan the code with your phone’s camera — it opens the right
                store for your device.
              </p>
            </div>
          </aside>
        </header>

        {/* ——— Marketing image ——— */}
        <section
          className="pc-shots-band pc-mdl-shot"
          aria-label="PenCake mobile app screens"
        >
          <img
            src="/assets/images/pencake_marketing.jpg"
            alt="PenCake — get lost in your story. A diary list, a journal entry, and a photo entry on three phones."
            width="1200"
            height="777"
            decoding="async"
          />
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>Take your story with you.</h2>
          <p className="pc-cta-sub">
            Free to download on the App Store and Google Play.
          </p>
          <StoreButtons />
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/download/mobile/" />

      <GoogleAnalytics />
    </>
  );
}
