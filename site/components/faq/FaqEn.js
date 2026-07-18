import GoogleAnalytics from "@/components/GoogleAnalytics";
import FaqDeepLinks from "@/components/faq/FaqDeepLinks";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";
import TopNav from "@/components/pc/TopNav";

// Redesigned English FAQ, in the home page's design language: the page
// reads like a book's Q&A appendix — a table of contents with roman
// numerals, part dividers, and questions that open like the app's toggles.
// The copy is the legacy FAQ verbatim; sections and questions keep their
// legacy Notion block ids so existing #deep-links continue to work.

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
    id: "9d4304c7231f4ecb90e29942f0ae83ad",
    numeral: "I",
    title: "General",
    items: [
      {
        id: "3e6eaae9d0c94152b74454560d5c36f4",
        q: "Is my writing visible to others?",
        a: (
          <p>
            No, no one else can see your entries. PenCake does not upload your
            content to any server—it is stored only on your device. This means
            you can write anything, even personal content, without worrying
            about others seeing it. This is one of PenCake’s most important
            features. Even when you use the sync function, your files are saved
            only to your own Google Drive or iCloud account. No one else,
            including us, has access to them.
          </p>
        ),
      },
      {
        id: "ed9bf12a61484060ac568091d4e58663",
        q: "Can I use the app on multiple devices with the same account?",
        a: (
          <p>
            Yes, you can. By using the app’s sync feature, you can connect
            multiple devices through the same cloud storage account. PenCake
            currently supports Google Drive and iCloud. If you use Google
            Drive, you can sync across different platforms—including Android,
            iOS, Windows, and macOS.
          </p>
        ),
      },
      {
        id: "4be845820ec9490b93617301bc91c98c",
        q: "Will I lose my entries if I change my phone or delete the app?",
        a: (
          <>
            <p>
              Yes, if you don’t use the sync feature, all of your entries will
              be lost. This is because your entries are not uploaded to any
              server—they are stored only on your device. That’s why we
              strongly recommend enabling sync.
            </p>
            <p>
              If you sync, your entries will be backed up to the cloud storage
              of your choice, such as Google Drive. So even if you switch
              phones or reinstall the app, you can restore all your entries by
              reconnecting to the same cloud account.
            </p>
            <Note>
              With the free version, only manual synchronization is available,
              so we recommend tapping the <code>Sync Now</code> button
              regularly to keep your data up to date.
            </Note>
          </>
        ),
      },
      {
        id: "ae5c6615b9944c999f8298954a4e4f40",
        q: "I forgot my password.",
        a: (
          <>
            <p>Don’t worry — just send us an email and we’ll help you recover it.</p>
            {EMAIL_LINE}
          </>
        ),
      },
    ],
  },
  {
    id: "001fcb85b41b4d6ba812be4328cd437e",
    numeral: "II",
    title: "How to Use",
    items: [
      {
        id: "ea8493f483de43d4b6426aa4424ffd94",
        q: "Can I restore deleted entries?",
        a: (
          <p>
            Yes. Deleted entries are temporarily moved to the Trash and can be
            restored within 30 days. After 30 days, they are permanently
            deleted. To access the Trash, long-press the <code>main menu</code>{" "}
            button to open the <code>story list</code>, then tap the{" "}
            <code>menu</code> button in the top right corner of the screen.
          </p>
        ),
      },
      {
        id: "6006864c1f8d4a9e8e3a88bc7c96d9ae",
        q: "I can’t find the Trash.",
        a: (
          <p>
            To access the Trash, long-press the <code>main menu</code> button
            to open the <code>story list</code>. Then, tap the <code>menu</code>{" "}
            button in the top right corner. Deleted entries are stored in the
            Trash for 30 days before they are permanently deleted.
          </p>
        ),
      },
      {
        id: "884e67945f2a431da2ca47c062f5c1c1",
        q: "I accidentally edited an entry. Can I revert to a previous version?",
        a: (
          <p>
            Yes, you can. Tap the <code>menu</code> button in the bottom-right
            corner of the <code>entry screen</code> to access{" "}
            <code>Version History</code>. There, you can view all past changes
            to the entry and, if needed, revert to a previous version. Change
            history is stored for 3 days in the free version and 90 days in the
            Premium version.
          </p>
        ),
      },
      {
        id: "7705a65e95ef48cf8f02354605b45fdb",
        q: "Can I change the sort order of entries?",
        a: (
          <p>
            Yes. To change the sort order, long-press a story title. Currently,
            four sorting options are available: alphabetical, reverse
            alphabetical, newest first, and oldest first. We’re also planning
            to add sorting by last edited and by number. At the moment, it’s
            not possible to manually rearrange entries, but we hope to support
            that in a future update.
          </p>
        ),
      },
      {
        id: "4732421313f04af38721f3fce4fb79f6",
        q: "Can I change the order of stories?",
        a: (
          <p>
            Yes. Long-press the <code>main menu</code> button to open the{" "}
            <code>story list</code>. Then, long-press a story title and drag it
            to reorder the list however you like.
          </p>
        ),
      },
      {
        id: "3bb1654e8fa541d4aa95dc162c2d2fc1",
        q: "How can I quickly jump to a specific story?",
        a: (
          <p>
            Long-press the <code>main menu</code> button to open the{" "}
            <code>story list</code>. Then, tap the title of the story you want
            to open. You can also change the order of stories by long-pressing
            a story title and dragging it to a new position.
          </p>
        ),
      },
      {
        id: "7d43cf87e1264d76839abb743b9e243d",
        q: "Can I organize stories into folders?",
        a: (
          <p>
            Yes, PenCake supports folders. Long-press the <code>main menu</code>{" "}
            button to open the <code>story list</code>. Tap the <code>+</code>{" "}
            button in the upper-left corner to create a new folder. Once the
            folder is created, you can move a story into it by long-pressing
            the story title and dragging it underneath the folder. Tap a folder
            to collapse or expand it.
          </p>
        ),
      },
      {
        id: "77c7e2dc521a424a97a2a1ed77fcdd7e",
        q: "How can I edit or delete a folder?",
        a: <p>Simply swipe the folder left or right to edit or delete it.</p>,
      },
      {
        id: "06d7df01fb1b4642bce45038d3384935",
        q: "How can I delete a story?",
        a: (
          <p>
            You can delete a story by going to <code>Main Menu</code> &gt;{" "}
            <code>This Story</code> &gt; <code>Remove Story</code>. All entries
            within the story will be moved to the Trash and kept there for 30
            days. After that, they’ll be permanently deleted.
          </p>
        ),
      },
    ],
  },
  {
    id: "c5928561d29146958c50dc4327bc930a",
    numeral: "III",
    title: "Restoring Premium",
    items: [
      {
        id: "26345e7e73684fe9960f61938d896009",
        q: "When I try to restore my purchase, it says there’s no purchase history.",
        a: (
          <>
            <p>
              On Android, if multiple Google accounts are registered on your
              device, the system may not be able to retrieve the correct
              purchase history from Google Play. To resolve this, temporarily
              remove all other accounts except the one used for the purchase,
              then try restoring again. We apologize for the inconvenience.
              This issue is related to how Google Play handles multiple
              accounts. 🙏
            </p>
            <p>
              If you’re switching between Android and iPhone (or vice versa),
              please note that purchases can’t be transferred across platforms
              due to differences between app stores. However, if you use the
              sync feature, you can still use Premium on your new device
              without making another purchase.
            </p>
          </>
        ),
      },
      {
        id: "5727cbaccd894c9fbef68f7dc3eba25f",
        q: "I purchased Premium. Do I need to purchase it again for each device?",
        a: (
          <>
            <p>
              No, you don’t. If you use the app’s sync feature, not only your
              entries but also your Premium status will be synced. By linking
              your current device with another using sync, you can access
              Premium on all of your devices without buying it again.
            </p>
            <p>
              Even if you don’t use sync, you can still restore your Premium on
              other Android or Apple devices without an additional purchase by
              using the Restore Purchase function. To do this, go to{" "}
              <code>Menu</code> &gt; <code>Settings</code> &gt;{" "}
              <code>Premium</code>, and tap the <code>Restore</code> button in
              the top right corner.
            </p>
          </>
        ),
      },
      {
        id: "f403f6cd04b147d290554dc4cd812de7",
        q: "I purchased Premium on Android. Do I need to buy it again on iPhone?",
        a: (
          <>
            <p>
              No. If you use the app’s sync feature, both your entries and
              Premium status will carry over. By linking your current device
              with a new one using sync, you can use Premium across all
              platforms without repurchasing it. However, if you’ve already
              disposed of your previous device without syncing, the app stores
              are different, and purchases cannot be transferred between
              platforms. In that case, please contact us by email for
              assistance.
            </p>
            {EMAIL_LINE}
          </>
        ),
      },
      {
        id: "e40902ffa83e445a91e25d202af0bc07",
        q: "I purchased Premium on iPhone. Do I need to buy it again on Android?",
        a: (
          <>
            <p>
              No. If you use the app’s sync feature, both your entries and
              Premium status will carry over. By linking your current device
              with a new one using sync, you can use Premium across all
              platforms without repurchasing it. However, if you’ve already
              disposed of your previous device without syncing, the app stores
              are different, and purchases cannot be transferred between
              platforms. In that case, please contact us by email for
              assistance.
            </p>
            {EMAIL_LINE}
          </>
        ),
      },
    ],
  },
  {
    id: "a5a50884547d4f5eb0e872666dfb6d29",
    numeral: "IV",
    title: "Synchronization",
    items: [
      {
        id: "078a22a774684838a0d37fd5af37656b",
        q: "iCloud sync doesn’t seem to work. What should I do?",
        a: (
          <>
            <p>
              iCloud sync is fully managed by iOS, including file uploads and
              downloads. Unfortunately, iOS may sometimes delay or even pause
              these transfers. Since the app can’t control this behavior, sync
              may appear delayed or stuck.
            </p>
            <p>We apologize for the inconvenience. Here’s what you can try:</p>
            <ol>
              <li>
                Go to your device’s iCloud settings, turn off iCloud Drive,
                wait a few seconds, then turn it back on.
              </li>
              <li>
                Open the Files app and confirm that you can see your general
                files in iCloud Drive.
              </li>
              <li>
                If everything looks normal, try syncing again in the PenCake
                app after a few minutes.
              </li>
            </ol>
            <p>
              If you prefer more stable synchronization, we recommend using
              Google Drive. Unlike iCloud, Google Drive allows the app to
              directly manage file uploads and downloads, so this issue doesn’t
              occur. Also, with Google Drive, you can sync not only between iOS
              and Android, but even with Windows PCs.
            </p>
          </>
        ),
      },
      {
        id: "f6052d5960f44f80a9d203216e2c6b65",
        q: "I synced to Google Drive, but I don’t see any files there. Why?",
        a: (
          <>
            <p>
              The data synced to Google Drive is stored in the{" "}
              <code>App Data Folder</code>, a hidden area within your Google
              Drive. You won’t see the files directly, but you can check the
              amount of storage being used.
            </p>
            <p>
              This folder is used instead of the regular{" "}
              <code>User-Accessible Folder</code> to keep your data safe—saving
              it in the user folder could allow accidental deletion or
              modification.
            </p>
            <p>
              The <a href="/download/desktop/">PenCake desktop app</a> allows
              you to write and edit entries directly on your computer.
            </p>
          </>
        ),
      },
      {
        id: "b426de7b41b64df78c013b6ca99813f0",
        q: "How can I check the size of data synced to Google Drive?",
        a: (
          <>
            <ol>
              <li>
                Go to the desktop version of Google Drive:{" "}
                <a href="https://drive.google.com/">https://drive.google.com/</a>
              </li>
              <li>
                Click the ⚙️ <code>Settings</code> icon in the top-right corner.
              </li>
              <li>
                Select <code>Settings</code> &gt; <code>App Management</code>.
              </li>
              <li>You’ll see a list of apps that use the App Data Folder.</li>
              <li>
                Under PenCake, the amount of data being used will be displayed.
              </li>
            </ol>
            <Note>
              <strong>CAUTION:</strong> If you click{" "}
              <code>Delete Hidden App Data</code> here, all synced data will be
              permanently deleted!
            </Note>
          </>
        ),
      },
      {
        id: "1babefd5663c4d10ade889a399fb87bb",
        q: "I’m getting a [403] storageQuotaExceeded error. What does it mean?",
        a: (
          <p>
            This error means that synchronization can’t proceed because your
            Google Drive storage is full. You can check your current storage
            usage on your{" "}
            <a href="https://myaccount.google.com/">Google Account page</a>.
            Please note that your storage is shared across all Google services
            (such as Gmail, Google Photos, and Drive), and is managed as a
            single total capacity.
          </p>
        ),
      },
      {
        id: "025e3bfb40a54a418e6a3f3def0a01a0",
        q: "Can I sync between iPhone and Android?",
        a: (
          <p>
            Yes, you can. If you use Google Drive for sync, it works across
            both iPhone and Android devices. However, iCloud is only available
            on Apple devices, so it cannot be used for syncing with Android.
          </p>
        ),
      },
    ],
  },
  {
    id: "1bcb2acb5dd040d8a7c43a8ab9bebcdb",
    numeral: "V",
    title: "Future Plans",
    items: [
      {
        id: "1f4c495fba834a5ebfad53edcedfb4d1",
        q: "Are there any plans to release a PC or Mac version?",
        a: (
          <>
            <p>
              Yes — the desktop version of PenCake is already available! You
              can download it <a href="/download/desktop/">here</a>.
            </p>
            <p>
              Please note that it’s still a preview version, so some features
              may not be fully implemented yet. Also, the desktop app is
              available only for Premium users, though free users can try it
              with limited functionality.
            </p>
          </>
        ),
      },
      {
        id: "79ebd8aa2d914a87b144f8f8c838750d",
        q: "It’s inconvenient that there’s no in-entry search. Will it be added?",
        a: (
          <p>
            We understand—it can be frustrating not to have an in-entry search
            feature yet. We’re actively considering this as one of the next
            major features and will do our best to make it available as soon as
            possible.
          </p>
        ),
      },
      {
        id: "5501df8ea3ce4faa9f73e73042996bf4",
        q: "I’d like to have formatting options like bold, italic, size, color, and highlight.",
        a: (
          <>
            <p>
              Formatting features such as bold, italic, and highlight are
              already available. In the editor, you’ll find a formatting
              toolbar just above the keyboard. Swipe it sideways once to reveal
              the formatting options.
            </p>
            <p>
              PenCake uses{" "}
              <a href="https://en.wikipedia.org/wiki/Markdown">Markdown</a> for
              formatting. Currently supported features include: bold, italic,
              underline, strikethrough, highlight, headings, and horizontal
              rules. Text color formatting is not yet supported, but we’re
              actively considering adding it in the future.
            </p>
          </>
        ),
      },
      {
        id: "730b8ef869c5446792fa154e9202c97d",
        q: "I wish I could freely change the order of entries.",
        a: (
          <p>
            We’re planning to add a feature that allows you to freely reorder
            entries in the future. In the meantime, you can manually control
            the order by adjusting the dates of your entries (in chronological
            view). Alternatively, adding numbers like 01, 02, etc. to the
            beginning of each title can help sort them in a specific order when
            using title-based sorting.
          </p>
        ),
      },
    ],
  },
];

export default function FaqEn() {
  return (
    <>
      <TopNav />

      <main>
        {/* ——— Title ——— */}
        <header className="pc-page-hero">
          <Kicker>Support</Kicker>
          <h1>Frequently asked questions</h1>
          <p className="pc-hero-sub">
            Everything about privacy, everyday use, Premium, and sync —
            answered by the people who make PenCake.
          </p>
          <p className="pc-faq-hint">
            Tap <span className="pc-faq-hint-tri">‣</span> next to a question
            to view the answer.
          </p>
        </header>

        {/* ——— Contents ——— */}
        <div className="pc-faq-contents">
          <nav className="pc-toc" aria-label="FAQ sections">
            {SECTIONS.map((s) => (
              <a href={`#${s.id}`} key={s.id}>
                <span className="pc-faq-toc-num">{s.numeral}</span>
                <span className="pc-toc-label">{s.title}</span>
                <span className="pc-toc-leader" />
                <span className="pc-toc-hint">{s.items.length} questions</span>
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
                    <span className="pc-faq-tri" aria-hidden="true">
                      ‣
                    </span>
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
          <h2>Still have questions?</h2>
          <p className="pc-cta-sub">
            We’re happy to help — feel free to email us anytime. 😊
          </p>
          <div className="pc-actions">
            <a className="pc-btn pc-btn-primary" href="mailto:pencake.app@gmail.com">
              Write to us
            </a>
          </div>
          <p className="pc-platforms">pencake.app@gmail.com</p>
        </section>
      </main>

      {/* ——— Footer ——— */}
      <Footer path="/faq/" />

      <GoogleAnalytics />
      <FaqDeepLinks />
    </>
  );
}
