import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileDownloadRedirect from "@/components/MobileDownloadRedirect";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import { phrases } from "@/lib/phrases";

// Redesigned Japanese landing page — HomeEn/HomeKo's layout with copy
// written for Japanese readers (leaning on the Korean page's phrasing, not
// a word-for-word translation). Headings and short lines only wrap at
// punctuation and <wbr> phrase boundaries (home.css: :lang(ja) keep-all);
// copy strings mark those boundaries with "|" (lib/phrases.js).

// 항목마다 .webp 와 .jpg 가 짝으로 존재한다 — 둘 다 `npm run screenshots`
// (scripts/make-screenshots.sh) 가 만든다. 짝이 어긋나지 않도록 확장자는
// 여기에 적지 않는다.
const SCREENSHOTS = [
  { base: "/assets/images/appstore/screenshot_1_ja", alt: "PenCakeアプリ ― ミニマルな日記の一覧" },
  { base: "/assets/images/appstore/screenshot_2_ja", alt: "PenCakeアプリ ― 美しい明朝体で綴った日記" },
  { base: "/assets/images/appstore/screenshot_3_ja", alt: "PenCakeアプリ ― 写真を添えた旅の日記" },
  { base: "/assets/images/appstore/screenshot_4_ja", alt: "PenCakeアプリ ― 気が散らない執筆画面" },
  { base: "/assets/images/appstore/screenshot_5_ja", alt: "PenCakeアプリ ― 考えを整理できる物語の一覧" },
  { base: "/assets/images/appstore/screenshot_6_ja", alt: "PenCakeアプリ ― デバイス間の同期" },
  { base: "/assets/images/appstore/screenshot_7_ja", alt: "PenCakeアプリ ― 気分で選べるテーマ" },
  { base: "/assets/images/appstore/screenshot_8_ja", alt: "PenCakeアプリ ― 丸ゴシックや手書き風など、多彩なフォント" },
];

const FEATURES = [
  {
    emoji: "🌿",
    title: "ミニマルで、パワフル",
    body: "すっきりと|洗練された画面が、|集中と創造を|そっと支えます。",
  },
  {
    emoji: "🖋️",
    title: "自然と筆が進む",
    body: "開けば|すぐに書ける、|直感的な操作。|長文になっても|重くならない、|安定した動作。",
  },
  {
    emoji: "📚",
    title: "「物語」でまとめる",
    body: "関連する文章を|「物語」ごとに|まとめて、|すっきり整理。|日記帳から|読書記録、|執筆中の小説まで。",
  },
  {
    emoji: "☁️",
    title: "いつでも、どこでも",
    body: "iOS・Android・macOS・Windows、|すべてのデバイスで|スムーズに同期。|ひらめいた|その場所で、|続きを書けます。",
  },
  {
    emoji: "🔒",
    title: "安心して書ける",
    body: "自動保存、|バージョン履歴、|ゴミ箱からの復元、|Face\u00a0ID / Touch\u00a0IDによる|ロックまで。|あなたの言葉は、|あなただけのものです。",
  },
  {
    emoji: "📖",
    title: "日記から小説まで",
    body: "マークダウン、|リアルタイムの|文字数カウント、|画像の挿入、|プレビュー。|日記やブログ、|Web小説、|二次創作まで、|どんな文章にも|なじみます。",
  },
];

// Real App Store reviews — the same six-card master set as HomeEn/HomeKo
// (identical excerpt boundaries). The Japanese one runs verbatim apart from
// whitespace (the store text's stray spaces after 。 are dropped); the others
// are translated into Japanese from the store originals. Reviewer nicknames
// are deliberately left out: these are quoted without the writers' consent,
// so cards carry the storefront country, date, and stars instead. Date lines
// follow the app's Japanese entry format without a time of day (reviews
// carry no time data — no fake timestamps).
const REVIEWS = [
  {
    title: "美しく、ミニマルで、集中できる",
    date: "2024年1月18日(木)",
    body: "このアプリに出会うまで、文章アプリをいくつも探しては、ダウンロードして試してきました。ほかの多くのアプリは機能も装飾も増えていく一方ですが、PenCakeは文字と、書くことそのものが持つ美しさを大切にしています。おかげで、ただ書くことだけに集中できる余白が生まれます。あの手この手で注意を引こうとするアプリばかりの昨今、ほっとひと息つける素敵な存在です。100%おすすめです。",
    source: "アメリカ",
    stars: 5,
  },
  {
    title: "長年愛用しています",
    date: "2026年7月10日(金)",
    body: "7年近くずっと愛用しており、ここ数年はプレミアム版を購入しPCと同期しながら使っています。様々なアプリを試してきましたが、このアプリがダントツで好きです。シンプルで美しいデザインは、「文章を書きたい」と強く思わせてくれます。もちろん、メモアプリとしても大活躍です。物語内の記事を自由に並べ替えられる機能が、今後のアップデートで搭載されると嬉しいです。",
    source: "日本",
    stars: 5,
  },
  {
    title: "使い心地がとてもいい！",
    date: "2026年3月23日(月)",
    body: "画面がすっきりしていてきれいだし、操作もかんたんなので、あっという間に書く習慣が身につきました。ついついこのアプリを開きたくなります。ずっと前から文章を書きたいと思っていたのに、いつも怠けてばかりでした。このアプリで書くと、すごく達成感があります。",
    source: "台湾",
    stars: 5,
  },
  {
    title: "素晴らしい",
    date: "2025年2月6日(木)",
    body: "すっきりした見た目のアプリが大好きです。このアプリはとても美しく、一見シンプルなのに機能がたくさんあります。メニューがよく考えられていて、記事の行き来や、作業を速くしてくれるスワイプ操作も、とても快適です。美しいフォントがそろっていて、おしゃれで実用的。買い切りで購入できるのもうれしいところです。値段に見合う価値は十分あります。",
    source: "ブラジル",
    stars: 5,
  },
  {
    title: "Wunderbar!",
    date: "2022年10月15日(土)",
    body: "飾り気のないデザインと、便利だけれど多すぎない機能。そんなアプリを探していて、ここでようやく見つけました。見事なまでに焦点が絞られていて、そのシンプルさがただただ美しいアプリです。最高です！",
    source: "ドイツ",
    stars: 5,
  },
  {
    title: "最高のアプリ",
    date: "2026年7月25日(土)",
    body: (
      <>
        本当に<span className="pc-ja-punct">……</span>
        リリース当初からずっと使い続けている者です。未成年だったころ、初めてお金を払ったアプリでもありました。まったく後悔していません。書くことに救われて、今も文章を書くのが趣味です。こんなアプリを作ってくださって、本当にありがとうございます。
      </>
    ),
    source: "韓国",
    stars: 5,
  },
];

const RESOURCES = [
  { emoji: "❓", label: "よくある質問", href: "/ja/faq/", hint: "→" },
  { emoji: "👩🏻‍💻", label: "書式を設定する（マークダウンガイド）", href: "/ja/guide/markdown/", hint: "→" },
  { emoji: "🛡️", label: "プライバシーポリシー", href: "/ja/privacy/", hint: "→" },
  { emoji: "📩", label: "お問い合わせ", href: "mailto:pencake.app@gmail.com", hint: "pencake.app@gmail.com" },
];

function Stars({ n }) {
  return (
    <span className="pc-stars" aria-label={`5つ星のうち${n}`}>
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
        <a className="pc-btn pc-btn-primary" data-download-mobile href="/ja/download/mobile/">
          モバイルアプリをダウンロード
        </a>
        <a className="pc-btn pc-btn-ghost" href="/ja/download/desktop/">
          PC版をダウンロード
        </a>
      </div>
      <p className="pc-platforms">iOS · Android · macOS · Windows</p>
    </>
  );
}

export default function HomeJa() {
  return (
    <>
      <main>
        {/* ——— Hero ——— */}
        <header className="pc-hero">
          <div className="pc-wordmark pc-rise">
            PenCake<span className="pc-cursor">|</span>
          </div>
          <h1 className="pc-rise pc-rise-2">
            書くことだけに<wbr />向き合える、<wbr />ミニマルな空間
          </h1>
          <p className="pc-hero-sub pc-rise pc-rise-3">
            今日の日記も、書きかけの小説も、胸にしまってきた言葉も。
            <br />
            2018年から<wbr />世界中で<wbr />280万回<wbr />ダウンロードされてきた、書くための
            <wbr />シンプルなアプリ、PenCake。
          </p>
          <div className="pc-rise pc-rise-4">
            <DownloadButtons />
          </div>
        </header>

        {/* ——— Screenshots ——— */}
        <section className="pc-shots-band" aria-label="PenCakeアプリのスクリーンショット">
          <div className="pc-shots">
            {SCREENSHOTS.map((shot, i) => (
              <figure className="pc-shot" key={shot.base}>
                <picture>
                  <source srcSet={`${shot.base}.webp`} type="image/webp" />
                  <img
                    src={`${shot.base}.jpg`}
                    alt={shot.alt}
                    width="828"
                    height="1534"
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </picture>
              </figure>
            ))}
          </div>
          <p className="pc-shots-hint">横にスクロールしてご覧ください →</p>
        </section>

        {/* ——— Why PenCake ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>なぜ、PenCakeなのか</Kicker>
            <h2>
              書きはじめた<wbr />ばかりの<wbr />人にも、<wbr />長く書き続けてきた<wbr />人にも。
            </h2>
            <p className="pc-lead">
              余計なものを<wbr />置かない画面は、目の前の<wbr />文章だけに
              <wbr />集中させてくれます。美しい書体と、ゆとりある行間。まるで
              <wbr />一冊の本を<wbr />綴っているような、やさしい書き心地です。
            </p>
            <div className="pc-features">
              {FEATURES.map((f) => (
                <div className="pc-feature" key={f.title}>
                  <div className="pc-feature-emoji" aria-hidden="true">
                    {f.emoji}
                  </div>
                  <h3>{f.title}</h3>
                  <p>{phrases(f.body)}</p>
                </div>
              ))}
            </div>
            <p className="pc-finenote">
              {phrases(
                "自動同期、PC版、テーマやフォントなど|一部の機能は、|プレミアムに|アップグレードすると|ご利用いただけます。" +
                  "|マークダウンは現在、|太字・斜体・下線・取り消し線・ハイライト・見出し・区切り線に|対応しています。"
              )}
            </p>
          </div>
        </section>

        {/* ——— Reviews ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>みなさんからの手紙</Kicker>
            <h2>PenCakeへ</h2>
            <p className="pc-rating">
              <Stars n={5} /> 世界各地から寄せられた、心のこもったレビュー
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
          <h2>あなたの物語を、<wbr />ここから。</h2>
          <p className="pc-cta-sub">無料でダウンロードして、すぐに書きはじめられます。</p>
          <DownloadButtons />
        </section>

        {/* ——— Learn more ——— */}
        <section className="pc-section">
          <div className="pc-container">
            <Kicker>もっと詳しく</Kicker>
            <nav className="pc-toc" aria-label="ガイドとポリシー">
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
      <Footer path="/" lang="ja" />

      <GoogleAnalytics />
      <MobileDownloadRedirect lang="ja" />
    </>
  );
}
