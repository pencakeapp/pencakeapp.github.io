import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileDownloadRedirect from "@/components/MobileDownloadRedirect";
import Footer from "@/components/pc/Footer";
import Kicker from "@/components/pc/Kicker";

// Redesigned English landing page. The visual language borrows from the
// app itself: white paper, book serif, quiet gray ink, PenCake's teal cursor.

// Each entry has a .webp and a .jpg sibling — both are produced by
// `npm run screenshots` (scripts/make-screenshots.sh). The extension is left
// off here so the two stay in step.
const SCREENSHOTS = [
  { base: "/assets/images/appstore/screenshot_1", alt: "PenCake app — a beautifully minimal diary list" },
  { base: "/assets/images/appstore/screenshot_2", alt: "PenCake app — a long journal entry in elegant serif typography" },
  { base: "/assets/images/appstore/screenshot_3", alt: "PenCake app — a journal entry with an inserted photo" },
  { base: "/assets/images/appstore/screenshot_4", alt: "PenCake app — the distraction-free editor" },
  { base: "/assets/images/appstore/screenshot_5", alt: "PenCake app — stories that organize your thoughts" },
  { base: "/assets/images/appstore/screenshot_6", alt: "PenCake app — syncing across devices" },
  { base: "/assets/images/appstore/screenshot_7", alt: "PenCake app — themes for your mood" },
  { base: "/assets/images/appstore/screenshot_8", alt: "PenCake app — handwriting-style fonts" },
];

const FEATURES = [
  {
    emoji: "🌿",
    title: "Minimal, yet powerful",
    body: "A clean, quietly refined interface that clears the way for focus and creativity.",
  },
  {
    emoji: "🖋️",
    title: "Effortless writing",
    body: "Open and write. Smooth and responsive, even deep into a long-form draft.",
  },
  {
    emoji: "📚",
    title: "Organized in Stories",
    body: "Group related entries into Stories — a diary, a reading log, a novel in progress.",
  },
  {
    emoji: "☁️",
    title: "Anywhere, anytime",
    body: "Seamless sync across iOS, Android, macOS, and Windows. Continue wherever inspiration strikes.",
  },
  {
    emoji: "🔒",
    title: "Safe and private",
    body: "Auto-save, version history, trash recovery, and Face ID / Touch ID lock. Your words remain yours.",
  },
  {
    emoji: "📖",
    title: "For real writers",
    body: "Markdown, word and character counts, images, and preview — for journals, blogs, novels, and fanfiction.",
  },
];

// Real App Store reviews — verbatim or excerpted at sentence boundaries; non-English
// ones translated by us. Reviewer nicknames are deliberately left out: these are quoted
// without the writers' consent, so cards carry the storefront country, date, and stars instead.
const REVIEWS = [
  {
    title: "Beautiful, minimal, and focused",
    date: "Thu, Jan 18, 2024",
    body: "I browsed, downloaded, and tried a handful of writing apps before finding this one. Many of the other apps available become bloated in both features and aesthetics, whereas PenCake focuses on the innate beauty of text and writing. This allows you the space to simply focus on writing. It’s a wonderful and welcomed break from the attention-grabbing methods in most apps these days. 100% recommended.",
    source: "United States",
    stars: 5,
  },
  {
    title: "My longtime favorite",
    date: "Fri, Jul 10, 2026",
    body: "I’ve been using this app for nearly seven years — for the last few, on the premium version, synced with my PC. I’ve tried so many apps, but this one is my favorite by far. The simple, beautiful design makes me truly want to write. Of course, it works great as a memo app too. I’d be happy if a future update let me freely reorder the articles within a story.",
    source: "Japan",
    stars: 5,
  },
  {
    title: "Such a great experience!",
    date: "Mon, Mar 23, 2026",
    body: "The interface is clean and lovely, and everything is simple to use, so I built a writing habit in no time — I keep wanting to open the app. I’d wanted to write for a long time but was always too lazy; writing here comes with a real sense of accomplishment.",
    source: "Taiwan",
    stars: 5,
  },
  {
    title: "Excellent",
    date: "Thu, Feb 6, 2025",
    body: "I love apps with a clean look. This one is beautiful — and while it seems so simple, it has plenty of features. The menus are well thought out, and the way you browse through notes and the swipe gestures that speed things up are very good. Beautiful fonts, real style, and it’s practical. Another advantage is the option of a lifetime purchase. Well worth the price.",
    source: "Brazil",
    stars: 5,
  },
  {
    title: "Wunderbar!",
    date: "Sat, Oct 15, 2022",
    body: "Searching for a clean, restrained design with sensible but not overloaded features, I found what I was looking for here. This app is wonderfully focused — and in its simplicity, simply beautiful. Brilliant!",
    source: "Germany",
    stars: 5,
  },
  {
    title: "The best app",
    date: "Sat, Jul 25, 2026",
    body: "Honestly… I’ve been using this since the very first release. It was also the first app I ever spent money on, back when I was still a teenager. I have never regretted it. Writing saved me, and it’s still my hobby today. Thank you so much for making an app like this.",
    source: "South Korea",
    stars: 5,
  },
];

const RESOURCES = [
  { emoji: "❓", label: "FAQs", href: "/faq/", hint: "→" },
  { emoji: "👩🏻‍💻", label: "Format Text — Markdown guide", href: "/guide/markdown/", hint: "→" },
  { emoji: "🕐", label: "What’s new — desktop changelog", href: "/changelog/desktop/", hint: "→" },
  { emoji: "🛡️", label: "Privacy Policy", href: "/privacy/", hint: "→" },
  { emoji: "📩", label: "Contact us", href: "mailto:pencake.app@gmail.com", hint: "pencake.app@gmail.com" },
];

function Stars({ n }) {
  return (
    <span className="pc-stars" aria-label={`${n} out of 5 stars`}>
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
        <a className="pc-btn pc-btn-primary" data-download-mobile href="/download/mobile/">
          Get the mobile app
        </a>
        <a className="pc-btn pc-btn-ghost" href="/download/desktop/">
          Download for desktop
        </a>
      </div>
      <p className="pc-platforms">iOS · Android · macOS · Windows</p>
    </>
  );
}

export default function HomeEn() {
  return (
    <>
      <main>
        {/* ——— Hero ——— */}
        <header className="pc-hero">
          <div className="pc-wordmark pc-rise">
            PenCake<span className="pc-cursor">|</span>
          </div>
          <h1 className="pc-rise pc-rise-2">A beautifully minimal space for your thoughts.</h1>
          <p className="pc-hero-sub pc-rise pc-rise-3">
            Journal entries, notes in passing, or the novel you’ve been meaning
            to write — since 2018, people around the world have chosen PenCake
            as their quiet place to write. 2.3 million times so far.
          </p>
          <div className="pc-rise pc-rise-4">
            <DownloadButtons />
          </div>
        </header>

        {/* ——— Screenshots ——— */}
        <section className="pc-shots-band" aria-label="Screenshots of the PenCake app">
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
          <p className="pc-shots-hint">Scroll to browse →</p>
        </section>

        {/* ——— Why PenCake ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>Why PenCake</Kicker>
            <h2>No clutter, no noise — just you and your story.</h2>
            <p className="pc-lead">
              PenCake strips writing back to what matters: a clean page, elegant
              type, and room to think. Writing here feels as natural as writing
              in a real book.
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
              Some features — auto-sync, desktop access, themes, and advanced
              fonts — are part of PenCake Premium. Markdown currently supports
              bold, italic, underline, strikethrough, highlight, headings, and
              horizontal rules.
            </p>
          </div>
        </section>

        {/* ——— Reviews ——— */}
        <section className="pc-section">
          <div className="pc-container-wide">
            <Kicker>From our writers</Kicker>
            <h2>Dear PenCake,</h2>
            <p className="pc-rating">
              <Stars n={5} /> Five-star reviews from around the world
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
          <h2>Your story is waiting.</h2>
          <p className="pc-cta-sub">Free to download — start writing in seconds.</p>
          <DownloadButtons />
        </section>

        {/* ——— Learn more ——— */}
        <section className="pc-section">
          <div className="pc-container">
            <Kicker>Learn more</Kicker>
            <nav className="pc-toc" aria-label="Guides and policies">
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
      <Footer path="/" />

      <GoogleAnalytics />
      <MobileDownloadRedirect lang="en" />
    </>
  );
}
