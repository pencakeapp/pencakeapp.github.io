import GoogleAnalytics from "@/components/GoogleAnalytics";
import FaqDeepLinks from "@/components/faq/FaqDeepLinks";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned Japanese FAQ — FaqEn/FaqKo's layout. The answers follow the
// Korean FAQ question for question, reworded from the legacy Japanese page
// (content/ja/faq.json) into natural Japanese with the app's own UI labels
// (物語・記事・メインメニュー…). Sections and questions keep the legacy
// Japanese Notion block ids so existing #deep-links continue to work.

function Note({ children }) {
  return (
    <div className="pc-faq-note">
      <span className="pc-faq-note-emoji" aria-hidden="true">
        ⚠️
      </span>
      <p>{children}</p>
    </div>
  );
}

const EMAIL_LINE = (
  <p>
    ✉️ <a href="mailto:pencake.app@gmail.com">pencake.app@gmail.com</a>
  </p>
);

const SECTIONS = [
  {
    id: "a8461f6484254d338c0514245c66a57e",
    numeral: "I",
    title: "一般",
    items: [
      {
        id: "30b0c9c751b14b95b7d90426a59c100f",
        q: "書いた文章を、ほかの人に見られることはありますか？",
        a: (
          <p>
            いいえ、見られることはありません。PenCakeは書いた文章をサーバーにアップロードせず、お使いのデバイスにのみ保存します。そのため、人に見せたくない内容も安心して書くことができます。これはPenCakeの最も大きな特徴のひとつです。同期機能を使う場合も、ファイルはご本人のアカウントのGoogle
            ドライブまたはiCloudにのみ保存されるため、ほかの人に見られることはありません。
          </p>
        ),
      },
      {
        id: "5b23a47ce08b4347b537ae7546b45aaa",
        q: "複数のデバイスで、同じアカウントを使ってアプリを利用したいです。",
        a: (
          <p>
            アプリの同期機能を使えば、複数のデバイスを同じクラウドアカウントにつないで利用できます。現在対応しているクラウドストレージは、Google
            ドライブとiCloudです。Google
            ドライブを使えば、AndroidデバイスとAppleデバイスの間でも同期できます。
          </p>
        ),
      },
      {
        id: "77e0e8fb88924451a4736c7a0727199b",
        q: "機種変更をしたり、アプリを削除したりすると、書いた文章はすべて消えてしまいますか？",
        a: (
          <>
            <p>
              はい。同期をしないまま機種変更をしたりアプリを削除したりすると、書いた文章はすべて消えてしまいます。書いた文章はサーバーにアップロードされず、デバイスにのみ保存されるためです。そのため、同期機能のご利用を強くおすすめします。
            </p>
            <p>
              同期をすると、書いた文章がGoogle
              ドライブなどのクラウドストレージにバックアップされます。機種変更やアプリの再インストールをしても、同じクラウドアカウントでもう一度同期すれば、書いた文章をすべて復元できます。
            </p>
            <Note>
              無料版では手動同期のみとなりますので、こまめに
              <code>今すぐ同期</code>ボタンを押して同期してください。
            </Note>
          </>
        ),
      },
      {
        id: "491827fa6f3d48e59c706635378ad0c9",
        q: "パスワードを忘れてしまいました。",
        a: (
          <>
            <p>ご安心ください。メールでご連絡いただければ、お手伝いします。</p>
            {EMAIL_LINE}
          </>
        ),
      },
    ],
  },
  {
    id: "a677b566dd854052aa63aae23f5d0306",
    numeral: "II",
    title: "使い方",
    items: [
      {
        id: "bc2083d8c53e4147b96df71582584931",
        q: "削除した記事は復元できますか？",
        a: (
          <p>
            削除した記事はゴミ箱に一時的に保管され、30日以内であれば復元できます。30日を過ぎると完全に削除されます。ゴミ箱を確認するには、
            <code>メインメニュー</code>ボタンを長押しして
            <code>物語の一覧</code>画面を開き、画面右上の
            <code>メニュー</code>ボタンを押してください。
          </p>
        ),
      },
      {
        id: "adbbdbb86d2d4c488dcc6045b82ec677",
        q: "ゴミ箱が見つかりません。",
        a: (
          <p>
            <code>メインメニュー</code>ボタンを長押しすると、
            <code>物語の一覧</code>画面が開きます。ここで右上の
            <code>メニュー</code>
            ボタンを押すと、ゴミ箱が表示されます。削除した記事は、30日間ゴミ箱に一時的に保管されます。
          </p>
        ),
      },
      {
        id: "2c5cde48ab2548bb95b410e86874741f",
        q: "記事をうっかり書き換えてしまいました。以前のバージョンに戻せますか？",
        a: (
          <p>
            はい、戻せます。<code>記事画面</code>で右下の<code>メニュー</code>
            ボタンを押すと、<code>バージョン履歴</code>
            があります。ここでその記事の変更履歴を確認でき、必要に応じて以前のバージョンに戻すこともできます。変更履歴は、無料版では3日間、プレミアム版では90日間保管されます。
          </p>
        ),
      },
      {
        id: "528a7eaf7362469d96c298388a79de14",
        q: "記事の並び順を変えたいです。",
        a: (
          <p>
            物語のタイトルを長押しすると、並び順を変更できます。現在は、タイトル順（あ→わ）、タイトル順（わ→あ）、新しい順、古い順の4通りから選べます。更新順と番号順も追加できるよう取り組んでいます。記事の順番を自由に入れ替える機能は現在ありませんが、今後必ず追加する予定です。
          </p>
        ),
      },
      {
        id: "cd488c877d2f4fe6befc3b53f3d86d00",
        q: "物語の順番を入れ替えたいです。",
        a: (
          <p>
            <code>メインメニュー</code>ボタンを長押しすると、
            <code>物語の一覧</code>
            が開きます。ここで物語のタイトルを長押ししたまま、好きな位置までドラッグして離すと、物語の順番を入れ替えられます。
          </p>
        ),
      },
      {
        id: "d90756d58aec44048708cc0cb79710d3",
        q: "読みたい物語にすぐ移動したいです。",
        a: (
          <p>
            <code>メインメニュー</code>ボタンを長押しすると、
            <code>物語の一覧</code>
            が開きます。ここで物語のタイトルを押すと、その物語へすぐに移動できます。物語のタイトルを長押しすると順番を入れ替えられるので、あわせてお試しください。
          </p>
        ),
      },
      {
        id: "3adf37e158e94c308640f34910e072d2",
        q: "物語をグループ分けしたいです。フォルダのような機能はありますか？",
        a: (
          <p>
            はい、フォルダ機能があります。<code>メインメニュー</code>
            ボタンを長押しすると、<code>物語の一覧</code>が開きます。ここで左上の
            <code>+</code>
            ボタンを押すと、フォルダを追加できます。フォルダを作成したあと、そのフォルダの下に物語を移動すると、その物語はフォルダに入ります。フォルダを押すと、折りたたんだり開いたりできます。物語を移動するには、物語のタイトルを長押ししたまま、好きな位置までドラッグして離してください。
          </p>
        ),
      },
      {
        id: "d26a5ead9a914fbd9e059f367258e448",
        q: "フォルダの編集や削除はどうすればいいですか？",
        a: <p>フォルダを左右にスワイプすると、編集や削除ができます。</p>,
      },
      {
        id: "cf389d2ef6954fd4b651a498b0e2c743",
        q: "物語を削除するにはどうすればいいですか？",
        a: (
          <p>
            <code>メインメニュー</code> &gt; <code>この物語</code> &gt;{" "}
            <code>物語を削除</code>
            から削除できます。物語に入っていた記事はすべてゴミ箱に一時的に保管され、30日を過ぎると完全に削除されます。
          </p>
        ),
      },
    ],
  },
  {
    id: "30b2a4162f514370bd0bd84fe65770ad",
    numeral: "III",
    title: "プレミアムの購入",
    items: [
      {
        id: "401b2d94b0ba4db4a86efdbce97dbfcf",
        q: "購入を復元しようとすると、購入履歴がないと表示されます。",
        a: (
          <>
            <p>
              Androidで、デバイスのアカウント設定に複数のアカウントが登録されていると、購入履歴をうまく読み込めないことがあります。その場合は、購入に使ったアカウントだけを残してほかのアカウントを一時的に削除し、もう一度購入の復元をお試しください。ご不便をおかけして申し訳ありません。😭
            </p>
            <p>
              AndroidからiPhoneへ、またはiPhoneからAndroidへ機種変更した場合は、アプリストアが異なるため、原則として購入の復元はできません。ただし、アプリの同期機能を使えば、機種変更をしても追加購入なしでプレミアムをご利用いただけます。
            </p>
          </>
        ),
      },
      {
        id: "a8375ae712dd42208c9a4c6e5e2503a8",
        q: "プレミアムを購入しましたが、デバイスごとに追加で購入する必要がありますか？",
        a: (
          <>
            <p>
              いいえ、必要ありません。アプリの同期機能を使えば、書いた文章だけでなく、プレミアムの状態も一緒に同期されます。そのため、今お使いのデバイスと新しいデバイスを同期機能でつなげば、追加で購入しなくても、すべてのデバイスでプレミアムをご利用いただけます。
            </p>
            <p>
              同期機能を使わない場合でも、Androidデバイス同士、またはAppleデバイス同士であれば、購入の復元機能で、追加購入なしにプレミアムをご利用いただけます。
              <code>メニュー</code> &gt; <code>アプリの設定</code> &gt;{" "}
              <code>プレミアム</code>ページを開き、右上の<code>復元</code>
              ボタンを押すと、購入を復元できます。
            </p>
          </>
        ),
      },
      {
        id: "a470ba5a41d24bc5a4d9f9de2b5262c1",
        q: "Androidでプレミアムを購入しましたが、iPhoneでも追加で購入する必要がありますか？",
        a: (
          <>
            <p>
              いいえ、必要ありません。アプリの同期機能を使えば、書いた文章だけでなく、プレミアムの状態も一緒に同期されます。そのため、今お使いのデバイスと新しいデバイスを同期機能でつなげば、追加で購入しなくても、すべてのデバイスでプレミアムをご利用いただけます。ただし、同期をしないまま以前のデバイスを手放した場合は、アプリストアが異なるため、原則として購入の復元はできません。その場合は、メールでご連絡ください。
            </p>
            {EMAIL_LINE}
          </>
        ),
      },
      {
        id: "80efbfef0da84e569fa475af10d58710",
        q: "iPhoneでプレミアムを購入しましたが、Androidでも追加で購入する必要がありますか？",
        a: (
          <>
            <p>
              いいえ、必要ありません。アプリの同期機能を使えば、書いた文章だけでなく、プレミアムの状態も一緒に同期されます。そのため、今お使いのデバイスと新しいデバイスを同期機能でつなげば、追加で購入しなくても、すべてのデバイスでプレミアムをご利用いただけます。ただし、同期をしないまま以前のデバイスを手放した場合は、アプリストアが異なるため、原則として購入の復元はできません。その場合は、メールでご連絡ください。
            </p>
            {EMAIL_LINE}
          </>
        ),
      },
    ],
  },
  {
    id: "9a8f84484be34865832153a6e31723da",
    numeral: "IV",
    title: "同期",
    items: [
      {
        id: "989b0bd611be4e1e9296c62a950fc0da",
        q: "iCloudで同期できないようです。",
        a: (
          <>
            <p>
              iCloudは、ファイルのアップロードとダウンロードを完全にiOSに任せています。問題は、iCloudのアップロードやダウンロードがiOSによって後回しにされたり、止まってしまったりすることがある点です。アプリ側からこれに関与する方法がないため、同期が進まずに遅れてしまうことがあります。ご不便をおかけして申し訳ありません。このような場合は、デバイスのiCloud設定でiCloud
              Driveをオフにし、数秒後にもう一度オンにしてください。次に、Appleの「ファイル」アプリを開いて、iCloud
              Driveにある通常のファイルが表示されるか確認してください。問題がなければ、数分後にPenCakeアプリでもう一度同期をお試しください。
            </p>
            <p>
              より安定した同期をご希望の場合は、Google
              ドライブのご利用をおすすめします。Google
              ドライブでは、ファイルのアップロード/ダウンロードをアプリ側で完全に制御できるため、このような現象は起こりません。なお、Google
              ドライブを使えば、iOSとAndroidの間や、iOSとWindows
              PCの間でも同期できます。
            </p>
          </>
        ),
      },
      {
        id: "5c2b009c646441da9e1db39e153d98fb",
        q: "Google ドライブと同期できたはずなのに、Google ドライブにファイルが見当たりません。",
        a: (
          <>
            <p>
              Google ドライブに同期したデータは、ご自身のアカウントのGoogle
              ドライブ内にある<code>アプリデータフォルダ</code>
              に保存されます。アプリデータフォルダは非表示になっているため中身は見えず、使用容量だけを確認できます。
            </p>
            <p>
              <code>ユーザーフォルダ</code>
              ではなくアプリデータフォルダに保存しているのは、データをできるだけ安全に保管するためです。ユーザーフォルダに保存すると、うっかりファイルを削除したり書き換えたりしてしまうおそれがあるからです。
            </p>
            <p>
              <a href="/ja/download/desktop/">PenCakeのPC版</a>
              を使えば、パソコンで直接文章を書いたり編集したりできます。
            </p>
          </>
        ),
      },
      {
        id: "93eee7fddf6b4345a1c2bd43a3332151",
        q: "Google ドライブに同期したデータの容量を確認したいです。",
        a: (
          <>
            <ol>
              <li>
                パソコンでGoogle ドライブのウェブサイトを開いてください。{" "}
                <a href="https://drive.google.com/">https://drive.google.com/</a>
              </li>
              <li>
                右上の⚙️<code>設定ボタン</code>を押してください。
              </li>
              <li>
                <code>設定</code> &gt; <code>アプリの管理</code>
                を開いてください。
              </li>
              <li>アプリデータフォルダを使用しているアプリの一覧が表示されます。</li>
              <li>
                PenCakeの名前のすぐ下に、同期したデータの容量が表示されます。
              </li>
            </ol>
            <Note>
              <strong>注意：</strong>ここで<code>隠しアプリデータを削除</code>
              を押すと、同期したデータが完全に消えてしまいます。
            </Note>
          </>
        ),
      },
      {
        id: "96212808a0564bfb81ea3fed358be74e",
        q: "[403] storageQuotaExceeded というエラーが表示されます。",
        a: (
          <p>
            このエラーは、ご自身のアカウントのGoogle
            ドライブの容量がいっぱいになっていて、同期できない状態であることを意味します。使用中の容量は
            <a href="https://myaccount.google.com/">Google アカウントのページ</a>
            で確認できます。なお、使用容量はアカウントごとに、Googleのすべてのサービスを合わせて管理されている点にご注意ください。
          </p>
        ),
      },
      {
        id: "57b7477ee23d447695a9dd360607646c",
        q: "iPhoneとAndroidの間でも同期できますか？",
        a: (
          <p>
            はい、できます。Google
            ドライブで同期すれば、デバイスの種類に関係なく同期できます。iCloudはAppleデバイスでしか使えないため、Androidとは同期できませんのでご了承ください。
          </p>
        ),
      },
    ],
  },
  {
    id: "e367c9c182fb48458c937b199c0bd713",
    numeral: "V",
    title: "今後の開発",
    items: [
      {
        id: "814131e3fd6c4cc297c070136542fc0f",
        q: "Windows版やMac版をリリースする予定はありますか？",
        a: (
          <>
            <p>
              はい、PenCakeのPC版はすでにリリースしています！
              <a href="/ja/download/desktop/">こちら</a>からダウンロードできます。
            </p>
            <p>
              まだプレビュー版のため、一部の機能は完全には実装されていない場合があります。あらかじめご了承ください。また、PC版はプレミアムユーザーの方のみご利用いただけます。無料ユーザーの方は、機能が制限された状態でお試しいただけます。
            </p>
          </>
        ),
      },
      {
        id: "2c2221e48d53402caf2ddda7660fc099",
        q: "検索機能がなくて不便です。",
        a: (
          <p>
            ノートアプリでありながら、検索機能がまだないことを大変申し訳なく思っています。次に追加する主要な機能として、検索機能を積極的に検討しています。できるだけ早くご利用いただけるよう努めます。
          </p>
        ),
      },
      {
        id: "8512f0fd76c54876ac2394530073516f",
        q: "太字、斜体、文字サイズ、文字色、ハイライトなどの書式機能がほしいです。",
        a: (
          <>
            <p>
              太字、斜体、ハイライトなどの書式機能はすでにご利用いただけます。編集画面では、キーボードのすぐ上に書式ツールバーがあります。このツールバーを横に一度スワイプすると、書式のオプションが表示されます。
            </p>
            <p>
              PenCakeは書式設定に
              <a href="https://ja.wikipedia.org/wiki/Markdown">マークダウン</a>
              を使用しています。現在対応している書式は、太字、斜体、下線、取り消し線、ハイライト、見出し、区切り線です。文字色の設定にはまだ対応していませんが、今後の追加を積極的に検討しています。
            </p>
          </>
        ),
      },
      {
        id: "63756085448b4a39808fd5b43186b683",
        q: "記事の順番を自由に入れ替えられるようにしてほしいです。",
        a: (
          <p>
            記事の順番を自由に入れ替えられる機能は、今後必ず追加する予定です。ご不便をおかけしますが、当面の方法として、新しい順または古い順で並べた状態で各記事の日付を変更し、順番を調整する方法をおすすめします。タイトル順で並べた状態で、タイトルの先頭に01、02のように番号を付ける方法もおすすめです。
          </p>
        ),
      },
    ],
  },
];

export default function FaqJa() {
  return (
    <>
      <TopNav home="/ja/" />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>ヘルプ</Kicker>
          <h1>よくある質問</h1>
          <p className="pc-hero-sub">
            書いた文章のプライバシーから、使い方、プレミアム、同期まで。
            <wbr />
            PenCakeをつくっている<wbr />私たちが、直接<wbr />お答えします。
          </p>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-faq-contents">
          <nav className="pc-toc" aria-label="FAQの目次">
            {SECTIONS.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                <span className="pc-faq-toc-num">{s.numeral}</span>
                <span className="pc-toc-label">{s.title}</span>
                <span className="pc-toc-leader" />
                <span className="pc-toc-hint">{s.items.length}件の質問</span>
              </a>
            ))}
          </nav>
        </div>

        {/* ——— Q&A ——— */}
        {SECTIONS.map((s) => (
          <section className="pc-faq-part" key={s.id} aria-label={s.title}>
            <header className="pc-faq-part-head" id={s.id}>
              <div className="pc-kicker-rule" />
              <h2>
                <span className="pc-faq-part-num">{s.numeral}</span> · {s.title}
              </h2>
            </header>
            <div className="pc-faq-list">
              {s.items.map((item) => (
                <details className="pc-faq-item" id={item.id} key={item.id}>
                  <summary>
                    <span className="pc-faq-tri" aria-hidden="true" />
                    <h3>{item.q}</h3>
                  </summary>
                  <div className="pc-faq-a">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* ——— Contact ——— */}
        <section className="pc-cta">
          <h2>疑問は<wbr />解決しましたか？</h2>
          <p className="pc-cta-sub">
            ほかにも気になることがあれば、<wbr />お気軽にお問い合わせください 😀
          </p>
          <div className="pc-actions">
            <a className="pc-btn pc-btn-primary" href="mailto:pencake.app@gmail.com">
              メールを送る
            </a>
          </div>
          <p className="pc-platforms">pencake.app@gmail.com</p>
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/faq/" lang="ja" />

      <GoogleAnalytics />
      <FaqDeepLinks />
    </>
  );
}
