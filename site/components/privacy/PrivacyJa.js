import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";
import { phrases, plain } from "@/lib/phrases";

// Redesigned Japanese privacy policy — PrivacyEn/PrivacyKo's layout. The
// legacy Japanese copy (content/ja/privacy.json) is reworded into natural
// Japanese clause for clause against the Korean policy — same clauses, same
// bold spans, nothing added or dropped — with its mistranslations corrected
// (e.g. the Crashlytics line read "conflict errors" for crashes).
// Sections keep their legacy Notion block ids so #deep-links keep working.

const SECTIONS = [
  {
    id: "4d10bba8af6e4b0cac86bdea3e8cba40",
    numeral: "I",
    title: "ユーザーが|作成した|コンテンツ",
  },
  {
    id: "ce1e28abecab4060b06ed1c4ff10ee79",
    numeral: "II",
    title: "Google|ユーザー識別子",
  },
  {
    id: "43eb284a7bb14af6934af4c828831568",
    numeral: "III",
    title: "匿名化された|製品の|使用情報",
  },
];

function PartHead({ section }) {
  return (
    <header className="pc-part-head" id={section.id}>
      <div className="pc-kicker-rule" />
      <h2>
        <span className="pc-part-num">{section.numeral}</span> · {phrases(section.title)}
      </h2>
    </header>
  );
}

export default function PrivacyJa() {
  return (
    <>
      <TopNav home="/ja/" />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>プライバシー</Kicker>
          <h1>
            プライバシー<wbr />ポリシー
          </h1>
          <p className="pc-hero-sub">
            この文書は、Diffathy Incが提供する<wbr />PenCakeの<wbr />プライバシーポリシーです。
          </p>
          <p className="pc-prv-updated">最終改訂日：2020年12月29日</p>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-prv-contents">
          <nav className="pc-toc" aria-label="ポリシーの目次">
            {SECTIONS.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                <span className="pc-prv-toc-num">{s.numeral}</span>
                <span className="pc-toc-label">{plain(s.title)}</span>
                <span className="pc-toc-leader" />
                <span className="pc-toc-hint">→</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ——— I. ユーザーが作成したコンテンツ ——— */}
        <section className="pc-part" aria-label={plain(SECTIONS[0].title)}>
          <PartHead section={SECTIONS[0]} />
          <div className="pc-prose">
            <p>
              <strong>
                PenCakeでユーザーが作成したすべてのコンテンツは、ユーザーのデバイスにのみ保存されます。
              </strong>
              PenCakeは、ユーザーが作成したコンテンツを外部サーバーに送信したり、外部サーバーに保管したりしません。PenCakeは、ユーザーが作成したコンテンツを保管するためのサーバーを別途運用していません。したがって、Diffathy
              Incがユーザーの作成したコンテンツを所有または収集することはありません。
            </p>
            <h3 id="508e11a122f54ec3b734d1ae1044b27b">同期機能を利用する場合</h3>
            <p>
              PenCakeが提供する同期機能を利用する場合、ユーザーが作成したコンテンツは、ユーザーのデバイスに保存されるだけでなく、
              <strong>
                ユーザー本人のアカウントのサードパーティ製クラウドストレージにも保存されます。
              </strong>
              それ以外の場所にユーザーのコンテンツを保管することはありません。
            </p>
            <p>
              ユーザーが複数のデバイスを使用し、各デバイスで同じアカウントのクラウドストレージと同期する場合は、すべてのデバイスに同じユーザーコンテンツが保存されます。
            </p>
            <p>
              PenCakeと同期できるクラウドストレージは、iCloud DriveとGoogle
              Driveです。各クラウドストレージにおける個人情報の取り扱いは、各サービス提供者とユーザーとの間の契約に基づくプライバシーポリシーに従います。
            </p>
          </div>
        </section>

        {/* ——— II. Googleユーザー識別子 ——— */}
        <section className="pc-part" aria-label={plain(SECTIONS[1].title)}>
          <PartHead section={SECTIONS[1]} />
          <div className="pc-prose">
            <p>
              同期の設定のためにGoogle
              Driveにログインする場合、OAuth認証の管理のために、Googleがユーザー識別子を収集します。これに関するGoogleの公式案内は、
              <a href="https://developers.google.com/identity/sign-in/ios/app-privacy">
                こちらの文書
              </a>
              でご確認いただけます。
            </p>
          </div>
        </section>

        {/* ——— III. 匿名化された製品の使用情報 ——— */}
        <section className="pc-part" aria-label={plain(SECTIONS[2].title)}>
          <PartHead section={SECTIONS[2]} />
          <div className="pc-prose">
            <p>
              PenCakeは、ユーザー動向の分析と製品機能の利用分析を通じて製品を改善するため、Googleが提供する
              <a href="https://firebase.google.com/docs/analytics">
                Firebase Analytics
              </a>
              を使用しています。また、アプリの異常終了を分析するために
              <a href="https://firebase.google.com/docs/crashlytics">
                Firebase Crashlytics
              </a>
              を使用しています。そして、製品のリモート構成のために
              <a href="https://firebase.google.com/docs/remote-config">
                Firebase Remote Config
              </a>
              を使用しています。これらのサービスは、ユーザーの身元に結び付かない、匿名化された製品の使用情報を収集します。これらの情報を、前述の目的以外に使用することは一切ありません。たとえば、収集した情報をターゲティング広告の目的で利用したり、提供したりすることはありません。
            </p>
            <p>各サービスが収集する情報は、次のとおりです。</p>
            <h3 id="e50820d6aed2432ea71b79809a4c7938">共通で収集する情報</h3>
            <p>デバイスのモデル、OS、アプリのバンドルID、開発プラットフォーム</p>
            <h3 id="cd01f157114046dba80362997fe8b626">Firebase Analytics</h3>
            <p>
              アプリの起動、アプリのアップデート、セッションの継続時間などの、製品とのインタラクションに関するイベント
            </p>
            <p>アプリインスタンスID、匿名化されたIPアドレスなど</p>
            <p>Vendor identifier（iOS）、Advertising ID（Android）</p>
            <h3 id="82db30433b8d42179c891c6f762bfd0d">Firebase Crashlytics</h3>
            <p>
              クラッシュに関する情報（stack traces、relevant application
              state、custom keys、logs）
            </p>
            <h3 id="342efc7d9dfd4d628d34aa85967072af">Firebase Remote Config</h3>
            <p>追加で収集する情報はありません。</p>
            <p>
              さらに詳しくは、Googleが提供する以下の2つの文書をご参照ください。
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
          <h2>ご不明な点は<wbr />ありますか？</h2>
          <p className="pc-cta-sub">
            💁🏻 お問い合わせは、<wbr />メールにてお願いいたします。
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
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/privacy/" lang="ja" />

      <GoogleAnalytics />
    </>
  );
}
