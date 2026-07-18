import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned Korean Markdown guide — GuideMarkdownEn's layout with the
// legacy Korean copy and examples verbatim (content/ko/guide-markdown.json).
// Sections keep their legacy Notion block ids so #deep-links keep working.

// Markdown marker, picked out in teal on the source side.
function S({ children }) {
  return <b className="pc-md-sym">{children}</b>;
}

function Demo({ src, out, labels = false }) {
  return (
    <figure className={"pc-md-demo" + (out ? "" : " pc-md-demo-solo")}>
      <div className="pc-md-side pc-md-src">
        {labels && <div className="pc-md-side-label">이렇게 쓰면</div>}
        <pre>{src}</pre>
      </div>
      {out && (
        <>
          <div className="pc-md-arrow" aria-hidden="true">
            ‣
          </div>
          <div className="pc-md-side">
            {labels && <div className="pc-md-side-label">이렇게 보여요</div>}
            <div className="pc-md-render">{out}</div>
          </div>
        </>
      )}
    </figure>
  );
}

const PARTS = [
  {
    id: "eec48307ed714e078f22348637195b19",
    numeral: "I",
    title: "텍스트 스타일",
    sample: "**굵게**",
  },
  {
    id: "b32f769779df495f811de3f81e949d65",
    numeral: "II",
    title: "제목",
    sample: "# 제목",
  },
  {
    id: "06367406a56c4c15b0d9ee340cb226db",
    numeral: "III",
    title: "구분선",
    sample: "-----",
  },
];

function PartHead({ part }) {
  return (
    <header className="pc-part-head" id={part.id}>
      <div className="pc-kicker-rule" />
      <h2>
        <span className="pc-part-num">{part.numeral}</span> · {part.title}
      </h2>
    </header>
  );
}

export default function GuideMarkdownKo() {
  return (
    <>
      <TopNav home="/ko/" />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>가이드</Kicker>
          <h1>서식 지정하기</h1>
          <p className="pc-hero-sub">
            PenCake는{" "}
            <a href="https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4">
              마크다운(Markdown)
            </a>
            을 사용하여 텍스트 서식을 지정합니다. 마크다운은 기호를 사용하여
            일반 텍스트에 서식을 지정할 수 있는 언어입니다. 마크다운을
            사용하면 빠르고 쉽게 서식을 지정할 수 있습니다.
          </p>
          <p className="pc-md-hint">
            텍스트 서식은 PenCake 3.10 이상에서 지원됩니다.
          </p>
          <div className="pc-note pc-md-intro-note">
            <span className="pc-note-emoji" aria-hidden="true">
              💡
            </span>
            <p>
              PenCake에서는 보다 유연하고 직관적인 서식 편집을 위해 일반적으로
              사용되는 마크다운 문법을 일부 변형하여 적용하였습니다. 따라서
              아래의 마크다운 문법은 PenCake에서만 호환됩니다.
            </p>
          </div>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-md-contents">
          <nav className="pc-toc" aria-label="가이드 목차">
            {PARTS.map((p) => (
              <a href={`#${p.id}`} key={p.id}>
                <span className="pc-md-toc-num">{p.numeral}</span>
                <span className="pc-toc-label">{p.title}</span>
                <span className="pc-toc-leader" />
                <span className="pc-md-toc-hint">{p.sample}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ——— I. 텍스트 스타일 ——— */}
        <section className="pc-part" aria-label="텍스트 스타일">
          <PartHead part={PARTS[0]} />
          <div className="pc-md-list">
            <h3 className="pc-md-sub" id="92aa4a2a058747d7bfd10f44e864a5b5">
              굵게
            </h3>
            <Demo
              labels
              src={
                <>
                  이것은 <S>**</S>굵은 글씨<S>**</S> 입니다.{"\n"}눈이<S>**</S>
                  내리는<S>**</S>밤
                </>
              }
              out={
                <>
                  <p>
                    이것은 <strong>굵은 글씨</strong> 입니다.
                  </p>
                  <p>
                    눈이<strong>내리는</strong>밤
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="bf87bd9bf91744b08ba062087d4e45fd">
              기울임
            </h3>
            <Demo
              src={
                <>
                  이것은 <S>//</S>기울임 글씨<S>//</S> 입니다.{"\n"}눈이
                  <S>//</S>내리는<S>//</S>밤
                </>
              }
              out={
                <>
                  <p>
                    이것은 <em>기울임 글씨</em> 입니다.
                  </p>
                  <p>
                    눈이<em>내리는</em>밤
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="c67922661bc24e6784783c5cb4e66f54">
              굵게와 기울임
            </h3>
            <Demo
              src={
                <>
                  이것은 <S>{"//**"}</S>굵고 기울어진<S>{"**//"}</S> 글씨입니다.
                  {"\n"}이 텍스트는 <S>{"**//"}</S>매우 중요합니다
                  <S>{"**//"}</S>.{"\n"}눈이<S>{"**//"}</S>내리는<S>{"//**"}</S>
                  밤
                </>
              }
              out={
                <>
                  <p>
                    이것은{" "}
                    <strong>
                      <em>굵고 기울어진</em>
                    </strong>{" "}
                    글씨입니다.
                  </p>
                  <p>
                    이 텍스트는{" "}
                    <strong>
                      <em>매우 중요합니다</em>
                    </strong>
                    .
                  </p>
                  <p>
                    눈이
                    <strong>
                      <em>내리는</em>
                    </strong>
                    밤
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="7d1a96369dee40af81c7a21c8b0476dd">
              밑줄
            </h3>
            <Demo
              src={
                <>
                  이것은 <S>__</S>밑줄이 그어진 글씨<S>__</S> 입니다.{"\n"}눈이
                  <S>__</S>내리는<S>__</S>밤
                </>
              }
              out={
                <>
                  <p>
                    이것은 <u>밑줄이 그어진 글씨</u> 입니다.
                  </p>
                  <p>
                    눈이<u>내리는</u>밤
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="0714f69ce7654bf2b468294fc93a7057">
              취소선
            </h3>
            <Demo
              src={
                <>
                  <S>~~</S>지구는 평평하다.<S>~~</S> 지구가 둥글다는 사실은
                  모두 알고 있다.{"\n"}눈이<S>~~</S>내리는<S>~~</S>밤
                </>
              }
              out={
                <>
                  <p>
                    <s>지구는 평평하다.</s> 지구가 둥글다는 사실은 모두 알고
                    있다.
                  </p>
                  <p>
                    눈이<s>내리는</s>밤
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="2e3e5e25984346e5acb85d19e497e9d3">
              형광펜
            </h3>
            <Demo
              src={
                <>
                  이것은 <S>==</S>형광펜으로 강조한 글씨<S>==</S> 입니다.{"\n"}
                  <S>==</S>지구가 둥글다는 사실<S>==</S>은 모두 알고 있다.
                  {"\n"}눈이<S>==</S>내리는<S>==</S>밤
                </>
              }
              out={
                <>
                  <p>
                    이것은 <mark>형광펜으로 강조한 글씨</mark> 입니다.
                  </p>
                  <p>
                    <mark>지구가 둥글다는 사실</mark>은 모두 알고 있다.
                  </p>
                  <p>
                    눈이<mark>내리는</mark>밤
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="cf1a090d655f4a27b3bec6cc2fe4a4ca">
              스타일 조합
            </h3>
            <Demo
              src={
                <>
                  이렇게 <S>{"==//**__~~"}</S>사용하는 것도<S>{"__~~**//=="}</S>{" "}
                  가능합니다.{"\n"}
                  <S>{"**==__"}</S>기호 순서<S>{"==**__"}</S>는 중요하지
                  않습니다.{"\n"}
                  <S>==</S>다른 서식끼리 <S>__</S>교차 지정<S>==</S> 가능합니다.
                  <S>__</S>
                </>
              }
              out={
                <>
                  <p>
                    이렇게{" "}
                    <strong>
                      <em>
                        <u>
                          <s>
                            <mark>사용하는 것도</mark>
                          </s>
                        </u>
                      </em>
                    </strong>{" "}
                    가능합니다.
                  </p>
                  <p>
                    <strong>
                      <u>
                        <mark>기호 순서</mark>
                      </u>
                    </strong>
                    는 중요하지 않습니다.
                  </p>
                  <p>
                    <mark>
                      다른 서식끼리 <u>교차 지정</u>
                    </mark>
                    <u> 가능합니다.</u>
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="a5969ff8eeff4a6db192750b7b98dc0c">
              ❌ 잘못된 사용 예
            </h3>
            <p className="pc-md-p">
              텍스트 스타일은 기호 안쪽 바로 옆에 공백이 있으면 안됩니다.
            </p>
            <Demo
              src={
                <>
                  이것은 <S>**</S> 볼드체<S>**</S>입니다. ❌{"\n"}이것은{" "}
                  <S>//</S>이탤릭체 <S>//</S>입니다. ❌{"\n"}매우{" "}
                  <S>{"//**"}</S> 중요한 <S>{"**//"}</S> 텍스트 ❌
                </>
              }
            />
          </div>
        </section>

        {/* ——— II. 제목 ——— */}
        <section className="pc-part" aria-label="제목">
          <PartHead part={PARTS[1]} />
          <div className="pc-md-list">
            <Demo
              labels
              src={
                <>
                  <S>#</S> 제목 레벨 1{"\n"}
                  <S>##</S> 제목 레벨 2{"\n"}
                  <S>###</S> 제목 레벨 3
                </>
              }
              out={
                <>
                  <div className="pc-md-hl1">제목 레벨 1</div>
                  <div className="pc-md-hl2">제목 레벨 2</div>
                  <div className="pc-md-hl3">제목 레벨 3</div>
                </>
              }
            />
          </div>
        </section>

        {/* ——— III. 구분선 ——— */}
        <section className="pc-part" aria-label="구분선">
          <PartHead part={PARTS[2]} />
          <div className="pc-md-list">
            <Demo
              labels
              src={<S>-----</S>}
              out={<hr className="pc-md-hr" />}
            />
          </div>
        </section>

        {/* ——— Contact ——— */}
        <section className="pc-cta">
          <h2>서식에 대해 궁금한 점이 있나요?</h2>
          <p className="pc-cta-sub">
            궁금한 점이 있으시면 편하게 문의해주세요. 🙂
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

        {/* ——— Colophon ——— */}
        <section className="pc-md-colophon">
          <p className="pc-finenote">
            This document was created by referring to{" "}
            <a href="http://markdownguide.org/">markdownguide.org</a>.
          </p>
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/guide/markdown/" lang="ko" />

      <GoogleAnalytics />
    </>
  );
}
