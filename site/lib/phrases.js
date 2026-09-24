// Japanese copy marks phrase boundaries with "|"; phrases() renders each one
// as <wbr>, the only places a keep-all Japanese line may wrap (home.css,
// :lang(ja)). plain() strips the marks for places that don't wrap, such as
// aria-labels and table-of-contents labels.
export function phrases(text) {
  return text.split("|").flatMap((seg, i) => (i ? [<wbr key={i} />, seg] : [seg]));
}

export function plain(text) {
  return text.replaceAll("|", "");
}
