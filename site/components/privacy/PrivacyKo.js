import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned Korean privacy policy — PrivacyEn's layout with the legacy
// Korean copy verbatim (content/ko/privacy.json), bold spans included.
// Sections keep their legacy Notion block ids so #deep-links keep working.

const SECTIONS = [
  {
    id: "f402959fae914869855bb9dc4215b6ab",
    numeral: "I",
    title: "사용자가 작성한 콘텐츠",
  },
  {
    id: "ac228ceb25b8460caf82d8690289516e",
    numeral: "II",
    title: "Google 사용자 식별자",
  },
  {
    id: "3f2674da46d8436dadbb982a67f1e1a4",
    numeral: "III",
    title: "익명화된 제품 사용 정보",
  },
];

function PartHead({ section }) {
  return (
    <header className="pc-part-head" id={section.id}>
      <div className="pc-kicker-rule" />
      <h2>
        <span className="pc-part-num">{section.numeral}</span> · {section.title}
      </h2>
    </header>
  );
}

export default function PrivacyKo() {
  return (
    <>
      <TopNav home="/ko/" />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>개인정보</Kicker>
          <h1>개인정보 처리방침</h1>
          <p className="pc-hero-sub">
            이 문서는 Diffathy Inc에서 서비스하는 PenCake의 개인정보
            처리방침입니다.
          </p>
          <p className="pc-prv-updated">마지막 개정: 2020년 12월 29일</p>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-prv-contents">
          <nav className="pc-toc" aria-label="처리방침 목차">
            {SECTIONS.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                <span className="pc-prv-toc-num">{s.numeral}</span>
                <span className="pc-toc-label">{s.title}</span>
                <span className="pc-toc-leader" />
                <span className="pc-toc-hint">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ——— I. 사용자가 작성한 콘텐츠 ——— */}
        <section className="pc-part" aria-label={SECTIONS[0].title}>
          <PartHead section={SECTIONS[0]} />
          <div className="pc-prose">
            <p>
              <strong>
                PenCake에서 사용자가 작성한 모든 콘텐츠는 사용자 기기에만
                보관됩니다.
              </strong>{" "}
              PenCake는 사용자가 작성한 콘텐츠를 외부 서버로 전송하거나 외부
              서버에 보관하지 않습니다. PenCake는 사용자가 작성한 콘텐츠를
              보관하기 위한 서버를 별도로 운용하지 않습니다. 따라서 Diffathy
              Inc는 사용자가 작성한 콘텐츠를 소유하거나 수집하지 않습니다.
            </p>
            <h3 id="9e8a15b770ad4324af852beeec2ce1c4">
              동기화 기능을 이용하는 경우
            </h3>
            <p>
              PenCake에서 제공하는 동기화 기능을 이용하는 경우, 사용자가
              작성한 콘텐츠는 사용자 기기에 보관될 뿐만 아니라,{" "}
              <strong>
                사용자 본인 계정의 타사 클라우드 저장소에도 보관됩니다.
              </strong>{" "}
              그 외 다른 곳에는 사용자 콘텐츠를 보관하지 않습니다.
            </p>
            <p>
              사용자 기기가 여러 대이고 각 기기에서 동일한 계정의 클라우드
              저장소로 동기화 연결을 하는 경우, 모든 기기에서 동일한 사용자
              콘텐츠를 보관하게 됩니다.
            </p>
            <p>
              PenCake와 동기화 연결이 가능한 클라우드 저장소에는 iCloud
              Drive와 Google Drive가 있습니다. 각 클라우드 저장소와 관련한
              개인정보 처리방침은 각 서비스 제공사와 사용자간의 계약에 의한
              개인정보 처리방침에 귀속됩니다.
            </p>
          </div>
        </section>

        {/* ——— II. Google 사용자 식별자 ——— */}
        <section className="pc-part" aria-label={SECTIONS[1].title}>
          <PartHead section={SECTIONS[1]} />
          <div className="pc-prose">
            <p>
              동기화 설정을 위해 Google Drive에 로그인하는 경우, OAuth 인증
              관리를 위하여 Google이 사용자 식별자를 수집합니다. 이와 관련하여
              Google에서 제공하는 공식 안내는{" "}
              <a href="https://developers.google.com/identity/sign-in/ios/app-privacy">
                이 문서에서
              </a>{" "}
              확인하실 수 있습니다.
            </p>
          </div>
        </section>

        {/* ——— III. 익명화된 제품 사용 정보 ——— */}
        <section className="pc-part" aria-label={SECTIONS[2].title}>
          <PartHead section={SECTIONS[2]} />
          <div className="pc-prose">
            <p>
              PenCake는 사용자 현황 분석과 제품 기능 사용 분석을 통한 제품
              개선을 위하여 Google에서 서비스하는{" "}
              <a href="https://firebase.google.com/docs/analytics">
                Firebase Analytics
              </a>
              를 사용합니다. 또한 비정상적 앱 종료를 분석하기 위해{" "}
              <a href="https://firebase.google.com/docs/crashlytics">
                Firebase Crashlytics
              </a>
              를 사용합니다. 그리고 제품의 원격 구성을 위해{" "}
              <a href="https://firebase.google.com/docs/remote-config">
                Firebase Remote Config
              </a>
              를 사용합니다. 이러한 서비스들은 사용자 신원에 연결되지 않은
              익명화된 제품 사용 정보를 수집합니다. 이러한 정보는 앞서 서술한
              목적 외에 그 어떤 다른 용도로도 사용하지 않습니다. 예를 들면,
              수집한 정보를 타겟팅 광고 용도로 활용하거나 제공하지 않습니다.
            </p>
            <p>각 서비스별로 수집하는 정보는 다음과 같습니다.</p>
            <h3 id="821b98a2e0e34c1ab10ebc387010d3ab">
              공통으로 수집하는 정보
            </h3>
            <p>기기 모델, OS, 앱 번들 ID, 개발 플랫폼</p>
            <h3 id="cc887b0d640b4157994639e52c405b00">Firebase Analytics</h3>
            <p>
              앱 실행, 앱 업데이트, 세션 지속 시간 등의 제품 상호작용 이벤트
            </p>
            <p>앱 인스턴스 식별자, 익명화된 IP 주소 등</p>
            <p>Vendor identifier (iOS), Advertising ID (Android)</p>
            <h3 id="0fecbfeb53884c8aaeefb34ddfbb51dd">Firebase Crashlytics</h3>
            <p>
              충돌 오류와 관련된 정보 (stack traces, relevant application
              state, custom keys, logs)
            </p>
            <h3 id="4c8e83432dd5445ca270e44023cc8406">Firebase Remote Config</h3>
            <p>추가로 수집하는 정보가 없습니다.</p>
            <p>
              더 자세한 내용을 원하는 경우, Google에서 제공하는 아래 두 문서를
              참조해주십시오.
            </p>
            <ul>
              <li>
                <a href="https://firebase.google.com/docs/ios/app-store-data-collection">
                  https://firebase.google.com/docs/ios/app-store-data-collection
                </a>
              </li>
              <li>
                <a href="https://support.google.com/analytics/answer/10285841">
                  https://support.google.com/analytics/answer/10285841
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* ——— Contact ——— */}
        <section className="pc-cta">
          <h2>궁금한 점이 있나요?</h2>
          <p className="pc-cta-sub">
            💁🏻 문의가 필요한 경우 이메일로 연락 부탁드립니다.
          </p>
          <div className="pc-actions">
            <a
              className="pc-btn pc-btn-primary"
              href="mailto:pencake.app@gmail.com"
            >
              이메일 보내기
            </a>
          </div>
          <p className="pc-platforms">pencake.app@gmail.com</p>
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/privacy/" lang="ko" />

      <GoogleAnalytics />
    </>
  );
}
