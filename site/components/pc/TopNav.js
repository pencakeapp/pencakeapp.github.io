// Running head for redesigned subpages: the wordmark as a quiet,
// centered link back to the cover (home).
export default function TopNav() {
  return (
    <nav className="pc-topnav" aria-label="PenCake home">
      <a className="pc-wordmark" href="/">
        PenCake<span className="pc-cursor">|</span>
      </a>
    </nav>
  );
}
