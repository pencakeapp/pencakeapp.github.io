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
    title: "진짜 ‘글쟁이’를 위한",
    body: "마크다운, 실시간 글자수, 이미지 삽입, 미리보기 — 일기, 블로그, 웹소설, 팬픽까지 모든 글쓰기에 이상적입니다.",
  },
];

// NOTE: placeholder reviews (temporary marketing copy) —
// replace with real user quotes before treating this section as final.
// Date lines follow the app's Korean entry format ("2018.12.25 수 오후 7:35").
const REVIEWS = [
  {
    title: "앱이 없는 것처럼 느껴져요",
    date: "2026.03.03 화 오후 9:41",
    body: "글쓰기 앱이란 앱은 다 써봤는데, 앱 자체를 의식하지 않게 되는 건 PenCake가 처음이에요. 열면 이미 쓰고 있어요.",
    author: "서연 — 2021년부터 매일 일기",
    stars: 5,
  },
  {
    title: "제 소설은 여기 살아요",
    date: "2026.02.15 일 오후 11:02",
    body: "8만 자 대부분을 지하철에서 썼어요. ‘이야기’ 덕분에 챕터가 순서대로 정리되고, 동기화 덕분에 집에 오면 컴퓨터에 최신 원고가 기다리고 있어요.",
    author: "민준 — 첫 장편을 쓰는 중",
    stars: 5,
  },
  {
    title: "종이에 쓰는 것 같아요",
    date: "2026.01.28 수 오전 7:15",
    body: "서체가 조용히 아름다워요. 알아서 백업까지 해주는 예쁜 공책에 쓰는 기분이에요.",
    author: "하은 — 일기 세 권을 쓰는 중",
    stars: 5,
  },
  {
    title: "잠들기 전의 의식",
    date: "2025.12.19 금 오후 11:58",
    body: "자기 전에 글을 쓰는데, 트루 블랙 테마에 세리프 폰트를 켜니 하루를 마치는 의식이 됐어요. 폰트만으로도 프리미엄 값을 해요.",
    author: "지아 — 밤에 쓰는 사람",
    stars: 4,
  },
  {
    title: "5년의 기록, 안전하게",
    date: "2025.11.24 월 오후 8:20",
    body: "수정하다 통째로 망친 글을 버전 기록이 살려준 적이 있어요. 무엇과도 바꿀 수 없는 기억이라 PenCake에 믿고 맡겨요.",
    author: "도윤 — 딸에게 줄 일기를 쓰는 중",
    stars: 5,
  },
  {
    title: "아이도 나도 쓰는 앱",
    date: "2026.04.04 토 오후 4:44",
    body: "딸과 저 둘 다 일기를 써요. 아이는 학교 이야기를 쓰고, 저는 아이 이야기를 써요.",
    author: "수민 — 가족 일기 중",
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
            일기를 쓰든, 소설을 쓰든, 마음 속 얘기를 풀어쓰든 — 2018년부터
            지금까지 전세계 230만 명이 넘는 사용자가 글쓰기를 위해 PenCake를
            선택했습니다.
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
              <Stars n={5} /> 전세계 230만 명이 넘는 사용자의 글쓰기 공간
            </p>
            <div className="pc-reviews">
              {REVIEWS.map((r) => (
                <article className="pc-review" key={r.title}>
                  <h3>{r.title}</h3>
                  <div className="pc-review-date">{r.date}</div>
                  <p>{r.body}</p>
                  <div className="pc-review-meta">
                    <span className="pc-review-author">{r.author}</span>
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
