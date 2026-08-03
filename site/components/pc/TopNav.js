// Running head for redesigned subpages: the wordmark as a quiet,
// centered link back to the cover (that language's home).
export default function TopNav({ home = "/" }) {
  return (
    <nav className="pc-topnav" aria-label="PenCake home">
      <a className="pc-wordmark" href={home}>
        PenCake<span className="pc-cursor">|</span>
      </a>
    </nav>
  );
}
