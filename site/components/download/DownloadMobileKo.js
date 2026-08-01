import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { qrRedirectScript, storeUrl } from "@/lib/stores";

// Redesigned Korean mobile download page — DownloadMobileEn's layout with
// the legacy Korean copy where it exists: the store labels come from the
// legacy page's link rows, the sub is the page's own meta description, and
// the marketing poster is the Korean asset. The QR code carries the Korean
// URL with ?qr=1, so a scan that somehow falls through still lands here.

const STORES = [
  { key: "ios", label: "App Store에서 다운로드" },
  { key: "android", label: "Google Play에서 다운로드" },
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

export default function DownloadMobileKo() {
  return (
    <>
      {/* First thing in the document: a scanning phone is redirected while
          the rest of the page is still being parsed, so it never pays for
          the images and chunks it would only have thrown away. */}
      <script dangerouslySetInnerHTML={{ __html: qrRedirectScript() }} />

      <TopNav home="/ko/" />

      <main>
        {/* ——— Title + store links ——— */}
        <header className="pc-page-hero">
          <Kicker>다운로드</Kicker>
          <h1>PenCake 모바일 앱</h1>
          <p className="pc-hero-sub">
            미니멀한 디자인으로 당신의 이야기에 온전히 집중하세요. 영감을 얻고
            창의성을 높여보세요.
          </p>
          <StoreButtons />
          <p className="pc-platforms">iOS / Android 모두 지원 · 동기화 가능</p>
          <aside className="pc-qr-card">
            <img
              src="/assets/images/pencake_qr_download_mobile_ko.svg"
              alt="PenCake 모바일 앱 다운로드 QR 코드"
              width="128"
              height="128"
            />
            <div className="pc-qr-text">
              <p className="pc-qr-title">지금 컴퓨터로 보고 계신가요?</p>
              <p className="pc-qr-hint">
                휴대폰 카메라로 코드를 스캔하면, 기기에 맞는 스토어가 바로
                열립니다.
              </p>
            </div>
          </aside>
        </header>

        {/* ——— Marketing image ——— */}
        <section
          className="pc-shots-band pc-mdl-shot"
          aria-label="PenCake 모바일 앱 화면"
        >
          <img
            src="/assets/images/pencake_marketing_ko.jpg"
            alt="PenCake — 이야기에 빠져보세요. 세 대의 휴대폰에 담긴 일기 목록, 일기, 사진 일기 화면."
            width="1200"
            height="777"
            decoding="async"
          />
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>당신의 이야기를 언제 어디서나.</h2>
          <p className="pc-cta-sub">
            App Store와 Google Play에서 무료로 다운로드할 수 있습니다.
          </p>
          <StoreButtons />
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/download/mobile/" lang="ko" />

      <GoogleAnalytics />
    </>
  );
}
