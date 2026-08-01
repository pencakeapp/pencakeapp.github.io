import DownloadHandlers from "@/components/DownloadHandlers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { DOWNLOAD_URLS, MAC_VERSION } from "@/lib/download";

// Redesigned Korean desktop download page — DownloadDesktopEn's layout
// with the legacy Korean copy verbatim (content/ko/download-desktop.json)
// and the Korean desktop screenshot. Section anchors keep their legacy
// Notion block ids (shared with the English page in the legacy export).

const PLATFORMS = [
  { key: "macos-x64", label: "macOS (Intel)" },
  { key: "macos-arm64", label: "macOS (Apple Silicon)" },
  { key: "windows-x64", label: "Windows" },
];

const FEATURES = [
  {
    emoji: "⚡",
    title: "빠른 미리보기",
    body: (
      <p>편집 중에 서식이 적용된 모습을 단축키로 즉시 확인할 수 있습니다.</p>
    ),
  },
  {
    emoji: "🔍",
    title: "글 내 검색",
    body: (
      <>
        <p>글 내에서 원하는 정보를 쉽게 찾을 수 있습니다.</p>
        <p>편집 모드에서는 찾기 및 바꾸기 기능도 제공됩니다.</p>
      </>
    ),
  },
  {
    emoji: "🧭",
    title: "편리해진 전체 검색",
    body: (
      <>
        <p>단축키로 빠르게 앱 내 모든 내용을 검색할 수 있습니다.</p>
        <p>검색 결과의 정확한 위치로 바로 이동할 수 있습니다.</p>
      </>
    ),
  },
  {
    emoji: "📄",
    title: "내보내기 기능",
    body: <p>PDF와 DOCX로 내보내기가 가능합니다.</p>,
  },
];

// Keyboard shortcuts. A string is rendered as keycaps (split on " + " and
// " 또는 "); { prose } is rendered as plain text.
const SHORTCUTS = [
  {
    id: "70a2d40349a243119753765c7c218b33",
    title: "일반",
    rows: [
      {
        label: "글 편집",
        mac: { prose: "편집할 위치에서 더블클릭" },
        win: { prose: "편집할 위치에서 더블클릭" },
      },
      { label: "글 내 검색", mac: "⌘ + F", win: "Ctrl + F" },
      { label: "글 내 검색 종료", mac: "Esc", win: "Esc" },
      { label: "전체 페이지로 보기", mac: "⌘ + \\", win: "Ctrl + \\" },
      { label: "전체 페이지로 보기 종료", mac: "⌘ + \\", win: "Ctrl + \\" },
      {
        label: "앱 전체 검색",
        mac: "⌘ + K 또는 ⌘ + P",
        win: "Ctrl + K 또는 Ctrl + P",
      },
    ],
  },
  {
    id: "83e48c29dfc64f419193e727b6d3593b",
    title: "편집 모드",
    rows: [
      { label: "저장하고 나가기", mac: "⌘ + S", win: "Ctrl + S" },
      { label: "찾기", mac: "⌘ + F", win: "Ctrl + F" },
      { label: "찾기 종료", mac: "Esc", win: "Esc" },
      { label: "미리보기", mac: "⌘ + P", win: "Ctrl + P" },
      { label: "미리보기 종료", mac: "⌘ + P 또는 Esc", win: "Ctrl + P 또는 Esc" },
      { label: "굵게", mac: "⌘ + B", win: "Ctrl + B" },
      { label: "기울임", mac: "⌘ + I", win: "Ctrl + I" },
      { label: "밑줄", mac: "⌘ + U", win: "Ctrl + U" },
      { label: "취소선", mac: "⌘ + Shift + S", win: "Ctrl + Shift + S" },
      { label: "형광펜", mac: "⌘ + Shift + H", win: "Ctrl + Shift + H" },
    ],
  },
];

function Keys({ v }) {
  if (typeof v !== "string") {
    return <span className="pc-kbd-prose">{v.prose}</span>;
  }
  return v.split(" 또는 ").map((group, i) => (
    <span className="pc-kbd-group" key={i}>
      {i > 0 && <span className="pc-kbd-sep">또는</span>}
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

export default function DownloadDesktopKo() {
  return (
    <>
      <TopNav home="/ko/" />

      <main>
        {/* ——— Title + download ——— */}
        <header className="pc-page-hero">
          <Kicker>다운로드</Kicker>
          <h1>PenCake PC 버전</h1>
          <p className="pc-hero-sub">
            데스크탑에서도 미니멀한 디자인으로 글을 써보세요. 생산성과
            창의성이 높아집니다.
          </p>
          <DownloadButtons anchorId="f402959fae914869855bb9dc4215b6ab" />
          <p className="pc-platforms">버전 {MAC_VERSION}</p>
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
                PC 버전은 프리미엄 사용자에게 제공되는 서비스입니다. (무료
                사용자는 체험만 가능합니다.)
              </p>
            </div>
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                💡
              </span>
              <p>
                현재 PC 버전은 정식 버전이 아닌 프리뷰 버전이며, 일부 기능은
                아직 개발 중입니다. 개발이 완료된 기능은 자동 업데이트를 통해
                순차적으로 배포됩니다.
              </p>
            </div>
          </div>
        </header>

        {/* ——— Screenshot ——— */}
        <section className="pc-shots-band pc-dl-shot" aria-label="PenCake PC 버전 스크린샷">
          <img
            src="/assets/images/pencake_desktop_screenshot_ko.png"
            alt="PenCake PC 버전 — 이야기 목록과 깔끔한 글쓰기 화면"
            width="1268"
            height="968"
            decoding="async"
          />
        </section>

        {/* ——— Features ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>PC 버전에서만</Kicker>
            <h2>모바일 버전과 이런 점이 달라요</h2>
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
        <section className="pc-part" aria-label="PC 버전 이용 안내">
          <header className="pc-part-head">
            <div className="pc-kicker-rule" />
            <h2>PC 버전 이용 안내</h2>
          </header>
          <div className="pc-prose">
            <p>PenCake의 PC 버전은 프리미엄 사용자에게 제공되는 서비스입니다.</p>
            <p>무료 사용자는 아래의 기능이 제한됩니다.</p>
            <ul>
              <li>글 저장 불가능</li>
              <li>자동 동기화 불가능</li>
            </ul>
            <p>프리미엄은 모바일 버전에서 구입할 수 있습니다.</p>
            <p>
              구입 후, 모바일 버전 → PC 버전 순으로 동기화 설정을 하면 PC
              버전에 프리미엄이 활성화됩니다.
            </p>
            <p>
              이미 모바일 버전에서 동기화를 이용하고 있다면, PC 버전에서만
              추가로 동기화를 설정하면 됩니다.
            </p>
            <div className="pc-note">
              <span className="pc-note-emoji" aria-hidden="true">
                ⚠️
              </span>
              <p>
                주의: 동기화 설정을 잘못할 경우 데이터가 삭제될 수 있으므로,
                도움이 필요하시면 아래 주소로 연락주세요:{" "}
                <a href="mailto:pencake.app@gmail.com">pencake.app@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* ——— Keyboard shortcuts ——— */}
        <section className="pc-part" aria-label="키보드 단축키">
          <header
            className="pc-part-head"
            id="bfca4b29d3034e53b13d9006e9ae627b"
          >
            <div className="pc-kicker-rule" />
            <h2>키보드 단축키</h2>
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
                        <span className="pc-visually-hidden">동작</span>
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
        <section className="pc-part" aria-label="업데이트 기록">
          <header className="pc-part-head">
            <div className="pc-kicker-rule" />
            <h2>업데이트 기록</h2>
          </header>
          <nav className="pc-toc pc-dl-toc" aria-label="업데이트 기록">
            <a href="/changelog/desktop/?lang=ko">
              <span className="pc-toc-emoji" aria-hidden="true">
                🚀
              </span>
              <span className="pc-toc-label">PC 버전 업데이트 기록</span>
              <span className="pc-toc-leader" />
              <span className="pc-toc-hint">→</span>
            </a>
          </nav>
        </section>

        {/* ——— CTA ——— */}
        <section className="pc-cta">
          <h2>이제 PC에서도 이어서 써보세요.</h2>
          <p className="pc-cta-sub">
            macOS와 Windows용 PenCake PC 버전 v{MAC_VERSION}.
          </p>
          <DownloadButtons />
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/download/desktop/" lang="ko" />

      <GoogleAnalytics />
      <DownloadHandlers />
    </>
  );
}
