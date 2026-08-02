import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileDownloadRedirect from "@/components/MobileDownloadRedirect";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";

// Redesigned Korean landing page — HomeEn's layout with the legacy Korean
// copy (content/ko/home.json) and the Korean App Store screenshots.

const SCREENSHOTS = [
  { src: "/assets/images/appstore/screenshot_1_ko.jpg", alt: "PenCake 앱 — 미니멀한 일기 목록" },
  { src: "/assets/images/appstore/screenshot_2_ko.jpg", alt: "PenCake 앱 — 미려한 세리프 서체로 쓴 시" },
  { src: "/assets/images/appstore/screenshot_3_ko.jpg", alt: "PenCake 앱 — 사진을 넣은 여행 일기" },
  { src: "/assets/images/appstore/screenshot_4_ko.jpg", alt: "PenCake 앱 — 방해 없는 글쓰기 화면" },
  { src: "/assets/images/appstore/screenshot_5_ko.jpg", alt: "PenCake 앱 — 생각을 정리해 주는 이야기 목록" },
  { src: "/assets/images/appstore/screenshot_6_ko.jpg", alt: "PenCake 앱 — 야간 모드" },
  { src: "/assets/images/appstore/screenshot_7_ko.jpg", alt: "PenCake 앱 — 다양한 설정 기능" },
];

const FEATURES = [
  {
    emoji: "🌿",
    title: "미니멀하지만 강력한",
    body: "깨끗하고 미적으로 완성도 높은 인터페이스가 집중력과 창의성을 높여줍니다.",
  },
  {
    emoji: "🖋️",
    title: "글이 잘 써지는",
    body: "열면 바로 쓸 수 있는 직관성. 글이 길어져도 느려지지 않는 안정적인 성능.",
  },
  {
    emoji: "📚",
    title: "‘이야기’로 정리",
    body: "관련 있는 글을 ‘이야기’로 묶어 깔끔하게 — 일기장, 독서 기록, 쓰고 있는 소설까지.",
  },
  {
    emoji: "☁️",
    title: "언제 어디서나 글쓰기",
    body: "iOS, Android, macOS, Windows 모든 기기에서 매끄럽게 동기화. 영감이 떠오르는 곳 어디서든 이어 쓰세요.",
  },
  {
    emoji: "🔒",
    title: "안심하고 쓰세요",
    body: "자동 저장, 글 버전 기록, 휴지통 복구, Face ID / Touch ID 잠금까지. 모든 데이터는 전적으로 사용자의 것입니다.",
  },
  {
    emoji: "📖",
    title: "글을 사랑하는 당신에게",
    body: "마크다운, 실시간 글자수, 이미지 삽입, 미리보기 — 일기, 블로그, 웹소설, 팬픽까지 모든 글쓰기에 이상적입니다.",
  },
];

// Real App Store reviews — the same six-card master set as HomeEn (identical
// excerpt boundaries). The South Korean one runs verbatim; the others are
// translated into Korean from the store originals. Reviewer nicknames are
// deliberately left out: these are quoted without the writers' consent, so
// cards carry the storefront country, date, and stars instead. Date lines
// follow the app's Korean entry format without a time of day (reviews carry
// no time data — no fake timestamps).
const REVIEWS = [
  {
    title: "아름답고, 미니멀하고, 집중이 잘돼요",
    date: "2024.01.18 목",
    body: "이 앱을 만나기 전까지 글쓰기 앱이란 앱은 여러 개 받아서 써봤습니다. 다른 앱들은 기능이며 꾸밈이며 자꾸만 비대해지는데, PenCake는 글과 글쓰기 본연의 아름다움에 집중합니다. 덕분에 오롯이 쓰는 일에만 마음을 쏟을 수 있어요. 어떻게든 시선을 붙잡으려 드는 요즘 앱들 사이에서 만난, 참 반가운 휴식 같은 앱입니다. 100% 추천합니다.",
    source: "미국",
    stars: 5,
  },
  {
    title: "오랫동안 애용하고 있습니다",
    date: "2026.07.10 금",
    body: "7년 가까이 쭉 애용해 왔고, 최근 몇 년은 프리미엄을 구입해 PC와 동기화하면서 쓰고 있습니다. 여러 앱을 써봤지만 이 앱이 단연 제일 좋아요. 심플하고 아름다운 디자인이 ‘글을 쓰고 싶다’는 마음을 강하게 불러일으켜 줍니다. 물론 메모 앱으로도 아주 요긴하게 쓰고 있고요. 이야기 안의 글 순서를 자유롭게 바꾸는 기능이 다음 업데이트에 더해지면 기쁘겠습니다.",
    source: "일본",
    stars: 5,
  },
  {
    title: "정말 좋은 경험이에요!",
    date: "2026.03.23 월",
    body: "화면이 깔끔하고 예쁜 데다 조작도 간단해서 금방 글 쓰는 습관이 생겼고, 자꾸만 이 앱을 열어 보고 싶어져요. 글을 쓰고 싶다고 생각한 지는 한참 됐는데 매번 너무 게을렀거든요. 이 앱으로 쓰면 확실한 성취감이 있어요.",
    source: "대만",
    stars: 5,
  },
  {
    title: "훌륭해요",
    date: "2025.02.06 목",
    body: "깔끔한 앱을 좋아하는데, 이 앱은 참 아름다워요. 이렇게 단순해 보이는데도 기능은 많습니다. 메뉴가 잘 짜여 있고, 글 사이를 오가는 방식이나 동작을 빠르게 해 주는 스와이프 제스처도 아주 좋아요. 서체가 아름답고, 스타일이 있고, 실용적입니다. 한 번 결제로 평생 소장할 수 있다는 것도 장점이에요. 가격이 아깝지 않습니다.",
    source: "브라질",
    stars: 5,
  },
  {
    title: "Wunderbar!",
    date: "2022.10.15 토",
    body: "절제된 디자인에 쓸모 있으면서도 과하지 않은 기능, 그런 앱을 찾아 헤매다 여기서 바라던 것을 찾았습니다. 놀랍도록 초점이 또렷한 앱이고, 그 단순함 속에서 그저 아름다워요. 정말 멋집니다!",
    source: "독일",
    stars: 5,
  },
  {
    title: "최고의 어플",
    date: "2026.07.25 토",
    body: "진짜.. 처음 출시 될 때부터 지금까지 써온 사람입니다. 미성년자였을 때 처음으로 어플에 돈 써본 것이기도 했어요. 절대 후회 안 합니다. 글이 절 살렸고 지금도 글쓰기가 취미예요. 이런 어플 만들어주셔서 정말 감사합니다.",
    source: "대한민국",
    stars: 5,
  },
];

const RESOURCES = [
  { emoji: "❓", label: "자주 묻는 질문", href: "/ko/faq/", hint: "→" },
  { emoji: "👩🏻‍💻", label: "서식 지정하기 — 마크다운 가이드", href: "/ko/guide/markdown/", hint: "→" },
  { emoji: "🕐", label: "새로운 소식 — PC 버전 업데이트 기록", href: "/changelog/desktop/?lang=ko", hint: "→" },
  { emoji: "🛡️", label: "개인정보 처리방침", href: "/ko/privacy/", hint: "→" },
  { emoji: "📩", label: "문의하기", href: "mailto:pencake.app@gmail.com", hint: "pencake.app@gmail.com" },
];

function Stars({ n }) {
  return (
    <span className="pc-stars" aria-label={`별점 5점 중 ${n}점`}>
      {"★".repeat(n)}
      {"☆".repeat(5 - n)}
    </span>
  );
}

function DownloadButtons() {
  return (
    <>
      <div className="pc-actions">
        {/* data attribute, not an id: this block is rendered twice
            (hero + closing CTA), and MobileDownloadRedirect has to reach
            both of them. */}
        <a className="pc-btn pc-btn-primary" data-download-mobile href="/ko/download/mobile/">
          모바일 앱 다운로드
        </a>
        <a className="pc-btn pc-btn-ghost" href="/ko/download/desktop/">
          PC 버전 다운로드
        </a>
      </div>
      <p className="pc-platforms">iOS · Android · macOS · Windows</p>
    </>
  );
}

export default function HomeKo() {
  return (
    <>
      <main>
        {/* ——— Hero ——— */}
        <header className="pc-hero">
          <div className="pc-wordmark pc-rise">
            PenCake<span className="pc-cursor">|</span>
          </div>
          <h1 className="pc-rise pc-rise-2">글쓰기에 온전히 집중할 수 있는 미니멀 공간</h1>
          <p className="pc-hero-sub pc-rise pc-rise-3">
            일기도 좋고, 소설도 좋고, 마음속에 담아둔 이야기도 좋습니다 —
            2018년부터 지금까지 전 세계에서 230만 번 선택받은 글쓰기 앱,
            PenCake.
          </p>
          <div className="pc-rise pc-rise-4">
            <DownloadButtons />
          </div>
        </header>

        {/* ——— Screenshots ——— */}
        <section className="pc-shots-band" aria-label="PenCake 앱 스크린샷">
          <div className="pc-shots">
            {SCREENSHOTS.map((shot, i) => (
              <figure className="pc-shot" key={shot.src}>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  width="828"
                  height="1472"
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </figure>
            ))}
          </div>
          <p className="pc-shots-hint">옆으로 넘겨보세요 →</p>
        </section>

        {/* ——— Why PenCake ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>왜 PenCake인가</Kicker>
            <h2>처음 글을 쓰는 사람도, 오랫동안 글을 써온 작가도.</h2>
            <p className="pc-lead">
              군더더기 없이 깔끔한 인터페이스는 오직 글에만 집중할 수 있게
              해주고, 미려한 서체와 자연스러운 줄 간격은 마치 실제 책을 쓰는
              것처럼 즐거운 글쓰기 경험을 선사합니다.
            </p>
            <div className="pc-features">
              {FEATURES.map((f) => (
                <div className="pc-feature" key={f.title}>
                  <div className="pc-feature-emoji" aria-hidden="true">
                    {f.emoji}
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
            <p className="pc-finenote">
              자동 동기화, PC 버전, 테마 및 폰트와 같은 일부 기능은 프리미엄으로
              업그레이드 시 이용 가능합니다. 마크다운은 현재 굵게, 기울임, 밑줄,
              취소선, 형광펜, 소제목, 구분선을 지원합니다.
            </p>
          </div>
        </section>

        {/* ——— Reviews ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>사용자들의 편지</Kicker>
            <h2>PenCake에게,</h2>
            <p className="pc-rating">
              <Stars n={5} /> 세계 곳곳에서 남겨주신 정성스러운 리뷰
            </p>
            <div className="pc-reviews">
              {REVIEWS.map((r) => (
                <article className="pc-review" key={r.title}>
                  <h3>{r.title}</h3>
                  <div className="pc-review-date">{r.date}</div>
                  <p>{r.body}</p>
                  <div className="pc-review-meta">
                    <span className="pc-review-author">{r.source}</span>
                    <Stars n={r.stars} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>당신의 이야기가 기다리고 있어요.</h2>
          <p className="pc-cta-sub">무료로 다운로드하고, 바로 글쓰기를 시작하세요.</p>
          <DownloadButtons />
        </section>

        {/* ——— Learn more ——— */}
        <section className="pc-section">
          <div className="pc-container">
            <Kicker>더 알아보기</Kicker>
            <nav className="pc-toc" aria-label="가이드와 정책">
              {RESOURCES.map((r) => (
                <a href={r.href} key={r.label}>
                  <span className="pc-toc-emoji" aria-hidden="true">
                    {r.emoji}
                  </span>
                  <span className="pc-toc-label">{r.label}</span>
                  <span className="pc-toc-leader" />
                  <span className="pc-toc-hint">{r.hint}</span>
                </a>
              ))}
            </nav>
          </div>
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/" lang="ko" />

      <GoogleAnalytics />
      <MobileDownloadRedirect lang="ko" />
    </>
  );
}
