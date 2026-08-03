import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned English Markdown guide, in the home design language. Every
// rule is shown as a small "you write → you get" pair: the source side in
// monospace with the markers picked out in teal, the result side rendered
// in the book serif — like a page from the app itself. The copy and the
// examples are the legacy guide verbatim; sections keep their legacy
// Notion block ids so existing #deep-links continue to work.

// Markdown marker, picked out in teal on the source side.
function S({ children }) {
  return <b className="pc-md-sym">{children}</b>;
}

function Demo({ src, out, labels = false }) {
  return (
    <figure className={"pc-md-demo" + (out ? "" : " pc-md-demo-solo")}>
      <div className="pc-md-side pc-md-src">
        {labels && <div className="pc-md-side-label">You write</div>}
        <pre>{src}</pre>
      </div>
      {out && (
        <>
          <div className="pc-md-arrow" aria-hidden="true">
            ‣
          </div>
          <div className="pc-md-side">
            {labels && <div className="pc-md-side-label">You get</div>}
            <div className="pc-md-render">{out}</div>
          </div>
        </>
      )}
    </figure>
  );
}

const PARTS = [
  {
    id: "b71d763f31cb430a908375fe2c7b30ae",
    numeral: "I",
    title: "Text Styles",
    sample: "**bold**",
  },
  {
    id: "1b0d24c7fe094c37a95c091e39e2fca9",
    numeral: "II",
    title: "Headings",
    sample: "# heading",
  },
  {
    id: "ef61f626ca984880bcd3b2ce64faf36e",
    numeral: "III",
    title: "Horizontal rule",
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

export default function GuideMarkdownEn() {
  return (
    <>
      <TopNav />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>Guide</Kicker>
          <h1>Format Text</h1>
          <p className="pc-hero-sub">
            PenCake uses{" "}
            <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> to
            format text. Markdown is a language that you can add formatting
            elements to plain text using symbols. Markdown makes formatting
            quick and easy.
          </p>
          <div className="pc-note pc-md-intro-note">
            <span className="pc-note-emoji" aria-hidden="true">
              💡
            </span>
            <p>
              In PenCake, for more flexible and intuitive formatting, some
              commonly used Markdown syntax has been modified. Therefore, the
              Markdown syntax below is only compatible with PenCake.
            </p>
          </div>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-md-contents">
          <nav className="pc-toc" aria-label="Guide sections">
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

        {/* ——— I. Text Styles ——— */}
        <section className="pc-part" aria-label="Text Styles">
          <PartHead part={PARTS[0]} />
          <div className="pc-md-list">
            <h3 className="pc-md-sub" id="c7227a6a968045dfadc655d00d9093f7">
              Bold
            </h3>
            <Demo
              labels
              src={
                <>
                  This is <S>**</S>bold text<S>**</S>.{"\n"}Love<S>**</S>and
                  <S>**</S>peace
                </>
              }
              out={
                <>
                  <p>
                    This is <strong>bold text</strong>.
                  </p>
                  <p>
                    Love<strong>and</strong>peace
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="de785d88d0de48ce952a89b1453ffb6a">
              Italic
            </h3>
            <Demo
              src={
                <>
                  This is <S>//</S>italicized text<S>//</S>.{"\n"}Love<S>//</S>
                  and<S>//</S>peace
                </>
              }
              out={
                <>
                  <p>
                    This is <em>italicized text</em>.
                  </p>
                  <p>
                    Love<em>and</em>peace
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="edbf53a69698477689d6864edcf850b6">
              Bold and Italic
            </h3>
            <Demo
              src={
                <>
                  This is <S>{"//**"}</S>bold and italicized<S>{"**//"}</S>{" "}
                  text.{"\n"}This text is <S>{"**//"}</S>really important
                  <S>{"**//"}</S>.{"\n"}Love<S>{"**//"}</S>and<S>{"//**"}</S>
                  peace
                </>
              }
              out={
                <>
                  <p>
                    This is{" "}
                    <strong>
                      <em>bold and italicized</em>
                    </strong>{" "}
                    text.
                  </p>
                  <p>
                    This text is{" "}
                    <strong>
                      <em>really important</em>
                    </strong>
                    .
                  </p>
                  <p>
                    Love
                    <strong>
                      <em>and</em>
                    </strong>
                    peace
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="8c568d178c7b4c279264045201167c61">
              Underline
            </h3>
            <Demo
              src={
                <>
                  This is <S>__</S>underlined text<S>__</S>.{"\n"}Love<S>__</S>
                  and<S>__</S>peace
                </>
              }
              out={
                <>
                  <p>
                    This is <u>underlined text</u>.
                  </p>
                  <p>
                    Love<u>and</u>peace
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="566e818000c44a3584c2097f257dda1a">
              Strikethrough
            </h3>
            <Demo
              src={
                <>
                  <S>~~</S>The world is flat.<S>~~</S> We now know that the
                  world is round.{"\n"}Love<S>~~</S>and<S>~~</S>peace
                </>
              }
              out={
                <>
                  <p>
                    <s>The world is flat.</s> We now know that the world is
                    round.
                  </p>
                  <p>
                    Love<s>and</s>peace
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="92fd37daf5854f8989e739769d36449e">
              Highlight
            </h3>
            <Demo
              src={
                <>
                  This is <S>==</S>highlighted<S>==</S> text.{"\n"}We now know
                  that <S>==</S>the world is round<S>==</S>.{"\n"}Love<S>==</S>
                  and<S>==</S>peace
                </>
              }
              out={
                <>
                  <p>
                    This is <mark>highlighted</mark> text.
                  </p>
                  <p>
                    We now know that <mark>the world is round</mark>.
                  </p>
                  <p>
                    Love<mark>and</mark>peace
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="b8b7d0b14baa45909f019de6222c1171">
              Combination of Styles
            </h3>
            <Demo
              src={
                <>
                  This is <S>{"==//**__~~"}</S>also available<S>{"__~~**//=="}</S>
                  .{"\n"}The <S>{"**==__"}</S>symbols’ order<S>{"==**__"}</S>{" "}
                  does not matter.{"\n"}
                  <S>==</S>It is possible to <S>__</S>cross-specify<S>==</S>{" "}
                  different styles<S>__</S>.
                </>
              }
              out={
                <>
                  <p>
                    This is{" "}
                    <strong>
                      <em>
                        <u>
                          <s>
                            <mark>also available</mark>
                          </s>
                        </u>
                      </em>
                    </strong>
                    .
                  </p>
                  <p>
                    The{" "}
                    <strong>
                      <u>
                        <mark>symbols’ order</mark>
                      </u>
                    </strong>{" "}
                    does not matter.
                  </p>
                  <p>
                    <mark>
                      It is possible to <u>cross-specify</u>
                    </mark>
                    <u> different styles</u>.
                  </p>
                </>
              }
            />

            <h3 className="pc-md-sub" id="51bed89c86af4fafba26ea0aed0eb022">
              ❌ Don’t do this
            </h3>
            <p className="pc-md-p">
              Text styles must not have spaces right next to the inside of the
              symbols.
            </p>
            <Demo
              src={
                <>
                  This is <S>**</S> bold text<S>**</S>. ❌{"\n"}This is{" "}
                  <S>//</S>italicized text <S>//</S>. ❌{"\n"}Really{" "}
                  <S>{"//**"}</S> very <S>{"**//"}</S> important text ❌
                </>
              }
            />
          </div>
        </section>

        {/* ——— II. Headings ——— */}
        <section className="pc-part" aria-label="Headings">
          <PartHead part={PARTS[1]} />
          <div className="pc-md-list">
            <Demo
              labels
              src={
                <>
                  <S>#</S> Heading level 1{"\n"}
                  <S>##</S> Heading level 2{"\n"}
                  <S>###</S> Heading level 3
                </>
              }
              out={
                <>
                  <div className="pc-md-hl1">Heading level 1</div>
                  <div className="pc-md-hl2">Heading level 2</div>
                  <div className="pc-md-hl3">Heading level 3</div>
                </>
              }
            />
          </div>
        </section>

        {/* ——— III. Horizontal rule ——— */}
        <section className="pc-part" aria-label="Horizontal rule">
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
          <h2>Questions about formatting?</h2>
          <p className="pc-cta-sub">
            If you have any questions, please feel free to contact us. 🙂
          </p>
          <div className="pc-actions">
            <a
              className="pc-btn pc-btn-primary"
              href="mailto:pencake.app@gmail.com"
            >
              Write to us
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
      <Footer path="/guide/markdown/" />

      <GoogleAnalytics />
    </>
  );
}
