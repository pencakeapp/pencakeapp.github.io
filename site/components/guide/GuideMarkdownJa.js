import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned Japanese Markdown guide — GuideMarkdownEn/Ko's layout with
// the legacy Japanese copy (content/ja/guide-markdown.json) reworded into
// natural Japanese. The examples follow the Korean guide: two Japanese
// lines per style, the second ("雪の降る夜") showing a marker mid-phrase,
// in place of the legacy page's English sample lines.
// Sections keep their legacy Notion block ids so #deep-links keep working.

// Markdown marker, picked out in teal on the source side.
function S({ children }) {
  return <b className="pc-md-sym">{children}</b>;
}

function Demo({ src, out, labels = false }) {
  return (
    <figure className={"pc-md-demo" + (out ? "" : " pc-md-demo-solo")}>
      <div className="pc-md-side pc-md-src">
        {labels && <div className="pc-md-side-label">こう書くと</div>}
        <pre>{src}</pre>
      </div>
      {out && (
        <>
          <div className="pc-md-arrow" aria-hidden="true">
            ‣
          </div>
          <div className="pc-md-side">
            {labels && <div className="pc-md-side-label">こう表示されます</div>}
            <div className="pc-md-render">{out}</div>
          </div>
        </>
      )}
    </figure>
  );
}

const PARTS = [
  {
    id: "169a029ac0a34633bd498abf05fcf3bf",
    numeral: "I",
    title: "テキストスタイル",
    sample: "**太字**",
  },
  {
    id: "b022b30c27fb48408c39a22d2fe28586",
    numeral: "II",
    title: "見出し",
    sample: "# 見出し",
  },
  {
    id: "e8d872a65c804927ac70fd426df222a3",
    numeral: "III",
    title: "区切り線",
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

export default function GuideMarkdownJa() {
  return (
    <>
      <TopNav home="/ja/" />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>ガイド</Kicker>
          <h1>書式を設定する</h1>
          <p className="pc-hero-sub">
            PenCakeは、
            <a href="https://ja.wikipedia.org/wiki/Markdown">
              マークダウン（Markdown）
            </a>
            を使って<wbr />テキストの書式を設定します。マークダウンは、記号を使って
            <wbr />プレーンテキストに<wbr />書式を付けられる言語です。マークダウンを使えば、
            <wbr />すばやく簡単に<wbr />書式を設定できます。
          </p>
          <div className="pc-note pc-md-intro-note">
            <span className="pc-note-emoji" aria-hidden="true">
              💡
            </span>
            <p>
              PenCakeでは、より柔軟で直感的に書式を編集できるよう、一般的なマークダウンの文法を一部アレンジして採用しています。そのため、以下の文法はPenCakeでのみ使用できます。
            </p>
          </div>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-md-contents">
          <nav className="pc-toc" aria-label="ガイドの目次">
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

        {/* ——— I. テキストスタイル ——— */}
        <section className="pc-part" aria-label="テキストスタイル">
          <PartHead part={PARTS[0]} />
          <div className="pc-md-list">
            <h3 className="pc-md-sub" id="d203b85829af4824952bc8675d211941">
              太字
            </h3>
            <Demo
              labels
              src={
                <>
                  これは<S>**</S>太字<S>**</S>です。{"\n"}雪の<S>**</S>降る
                  <S>**</S>夜
                </>
              }
              out={
                <>
                  <p>
                    これは<strong>太字</strong>です。
                  </p>
                  <p>
                    雪の<strong>降る</strong>夜
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="fb4d00af68044c16ba9a0a6e46deddf2">
              斜体
            </h3>
            <Demo
              src={
                <>
                  これは<S>//</S>斜体の文字<S>//</S>です。{"\n"}雪の<S>//</S>
                  降る<S>//</S>夜
                </>
              }
              out={
                <>
                  <p>
                    これは<em>斜体の文字</em>です。
                  </p>
                  <p>
                    雪の<em>降る</em>夜
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="94c3e0635c6740a1a91b514248fb151f">
              太字と斜体
            </h3>
            <Demo
              src={
                <>
                  これは<S>{"//**"}</S>太字で斜体<S>{"**//"}</S>の文字です。
                  {"\n"}このテキストは<S>{"**//"}</S>とても重要です
                  <S>{"**//"}</S>。{"\n"}雪の<S>{"**//"}</S>降る<S>{"//**"}</S>
                  夜
                </>
              }
              out={
                <>
                  <p>
                    これは
                    <strong>
                      <em>太字で斜体</em>
                    </strong>
                    の文字です。
                  </p>
                  <p>
                    このテキストは
                    <strong>
                      <em>とても重要です</em>
                    </strong>
                    。
                  </p>
                  <p>
                    雪の
                    <strong>
                      <em>降る</em>
                    </strong>
                    夜
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="f4dd6460c7f44155a47e9eeea681a4c6">
              下線
            </h3>
            <Demo
              src={
                <>
                  これは<S>__</S>下線付きの文字<S>__</S>です。{"\n"}雪の
                  <S>__</S>降る<S>__</S>夜
                </>
              }
              out={
                <>
                  <p>
                    これは<u>下線付きの文字</u>です。
                  </p>
                  <p>
                    雪の<u>降る</u>夜
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="d73c48143ba747679f447b74711140d4">
              取り消し線
            </h3>
            <Demo
              src={
                <>
                  <S>~~</S>地球は平らだ。<S>~~</S>
                  地球が丸いことは、誰もが知っている。{"\n"}雪の<S>~~</S>降る
                  <S>~~</S>夜
                </>
              }
              out={
                <>
                  <p>
                    <s>地球は平らだ。</s>地球が丸いことは、誰もが知っている。
                  </p>
                  <p>
                    雪の<s>降る</s>夜
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="d2dd562d6b5445db989290adbbef8e06">
              ハイライト
            </h3>
            <Demo
              src={
                <>
                  これは<S>==</S>ハイライトで強調した文字<S>==</S>です。{"\n"}
                  <S>==</S>地球が丸いこと<S>==</S>は、誰もが知っている。{"\n"}
                  雪の<S>==</S>降る<S>==</S>夜
                </>
              }
              out={
                <>
                  <p>
                    これは<mark>ハイライトで強調した文字</mark>です。
                  </p>
                  <p>
                    <mark>地球が丸いこと</mark>は、誰もが知っている。
                  </p>
                  <p>
                    雪の<mark>降る</mark>夜
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="2b1230257cd74f2289f7301026a05463">
              スタイルの組み合わせ
            </h3>
            <Demo
              src={
                <>
                  このように<S>{"==//**__~~"}</S>組み合わせること
                  <S>{"__~~**//=="}</S>もできます。{"\n"}
                  <S>{"**==__"}</S>記号の順番<S>{"==**__"}</S>
                  は関係ありません。{"\n"}
                  <S>==</S>異なる書式を<S>__</S>交差させる<S>==</S>こともできます。
                  <S>__</S>
                </>
              }
              out={
                <>
                  <p>
                    このように
                    <strong>
                      <em>
                        <u>
                          <s>
                            <mark>組み合わせること</mark>
                          </s>
                        </u>
                      </em>
                    </strong>
                    もできます。
                  </p>
                  <p>
                    <strong>
                      <u>
                        <mark>記号の順番</mark>
                      </u>
                    </strong>
                    は関係ありません。
                  </p>
                  <p>
                    <mark>
                      異なる書式を<u>交差させる</u>
                    </mark>
                    <u>こともできます。</u>
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="969499be178c4dc995055719db4d3819">
              ❌ 間違った使い方
            </h3>
            <p className="pc-md-p">
              テキストスタイルでは、記号の内側のすぐ隣にスペースを入れないでください。
            </p>
            <Demo
              src={
                <>
                  これは<S>**</S> 太字<S>**</S>です。 ❌{"\n"}これは<S>//</S>
                  斜体 <S>//</S>です。 ❌{"\n"}とても<S>{"//**"}</S> 重要な{" "}
                  <S>{"**//"}</S>テキスト ❌
                </>
              }
            />
          </div>
        </section>

        {/* ——— II. 見出し ——— */}
        <section className="pc-part" aria-label="見出し">
          <PartHead part={PARTS[1]} />
          <div className="pc-md-list">
            <Demo
              labels
              src={
                <>
                  <S>#</S> レベル1の見出し{"\n"}
                  <S>##</S> レベル2の見出し{"\n"}
                  <S>###</S> レベル3の見出し
                </>
              }
              out={
                <>
                  <div className="pc-md-hl1">レベル1の見出し</div>
                  <div className="pc-md-hl2">レベル2の見出し</div>
                  <div className="pc-md-hl3">レベル3の見出し</div>
                </>
              }
            />
          </div>
        </section>

        {/* ——— III. 区切り線 ——— */}
        <section className="pc-part" aria-label="区切り線">
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
          <h2>書式について、<wbr />ご不明な点は<wbr />ありますか？</h2>
          <p className="pc-cta-sub">
            どんなことでも、<wbr />お気軽にお問い合わせください。🙂
          </p>
          <div className="pc-actions">
            <a
              className="pc-btn pc-btn-primary"
              href="mailto:pencake.app@gmail.com"
            >
              メールを送る
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
      <Footer path="/guide/markdown/" lang="ja" />

      <GoogleAnalytics />
    </>
  );
}
