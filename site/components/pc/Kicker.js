// Letterspaced serif section label with a hairline rule above —
// the section-divider motif shared by the redesigned pages.
export default function Kicker({ children }) {
  return (
    <div className="pc-kicker">
      <div className="pc-kicker-rule" />
      <div className="pc-kicker-label">{children}</div>
    </div>
  );
}
