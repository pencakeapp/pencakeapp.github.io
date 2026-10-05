// Japanese copy marks phrase boundaries with "|"; phrases() renders each one
// as <wbr>, the only places a keep-all Japanese line may wrap (home.css,
// :lang(ja)). plain() strips the marks for places that don't wrap, such as
// aria-labels, table-of-contents labels and document.title.
export function phrases(text) {
  return text.split("|").flatMap((seg, i) => (i ? [<wbr key={i} />, seg] : [seg]));
}

// split/join, not replaceAll: the changelog calls this in the browser, and
// Next's browser targets (Safari 12, Chrome 64) predate replaceAll.
export function plain(text) {
  return text.split("|").join("");
}
