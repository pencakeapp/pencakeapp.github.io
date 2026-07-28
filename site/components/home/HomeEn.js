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

// NOTE: placeholder reviews (temporary marketing copy) —
// replace with real user quotes before treating this section as final.
const REVIEWS = [
  {
    title: "It gets out of the way",
    date: "Tue, Mar 3, 2026 9:41 PM",
    body: "I’ve tried every writing app out there. PenCake is the first one that never makes me think about the app itself. I open it, and I’m already writing.",
    author: "Sarah K. — journaling daily since 2021",
    stars: 5,
  },
  {
    title: "My novel lives here",
    date: "Sun, Feb 15, 2026 11:02 PM",
    body: "Eighty thousand words, most of them written on the train. Stories keep my chapters in order, and sync means my desktop always has the latest draft waiting.",
    author: "Daniel M. — first-time novelist",
    stars: 5,
  },
  {
    title: "It feels like paper",
    date: "Wed, Jan 28, 2026 7:15 AM",
    body: "The typography is quietly gorgeous. Writing here feels like writing in a beautiful notebook that happens to back itself up.",
    author: "Yuki — keeps three diaries",
    stars: 5,
  },
  {
    title: "A bedtime ritual",
    date: "Fri, Dec 19, 2025 11:58 PM",
    body: "I write before sleep, and the True Black theme with a serif font turned it into a ritual I look forward to. Premium was worth it for the fonts alone.",
    author: "Amara O. — night writer",
    stars: 4,
  },
  {
    title: "Five years, safely kept",
    date: "Mon, Nov 24, 2025 8:20 PM",
    body: "Version history once saved a whole entry I’d ruined while editing. I trust PenCake with memories I couldn’t replace.",
    author: "Tom H. — writing a diary for his daughter",
    stars: 5,
  },
  {
    title: "Simple for her, powerful for me",
    date: "Sat, Apr 4, 2026 4:44 PM",
    body: "My daughter and I both journal now. She writes about school; I write about her.",
    author: "Elena R. — family journaler",
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
        <a className="pc-btn pc-btn-primary" id="downloadMobile" href="/download/mobile/">
          Get the app
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
            Journal entries, passing notes, or the novel you’ve been meaning to
            write — since 2018, 2.3 million writers have made PenCake their
            quiet place to write.
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
              <Stars n={5} /> Loved by 2.3 million writers around the world
            </p>
            <div className="pc-reviews">
              {REVIEWS.map((r) => (
                <article className="pc-review" key={r.title}>
                  <h3>{r.title}</h3>
                  <div className="pc-review-date">{r.date}</div>
                  <p>{r.body}</p>
                  <div className="pc-review-meta">
                    <span className="pc-review-author">{r.author}</span>
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
