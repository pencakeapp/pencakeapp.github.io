// Generates the QR code SVGs for the mobile download pages.
// Run: npm run qr — the committed SVGs are this script's output;
// re-run it (rather than hand-editing them) when a URL changes.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ?qr=1 marks a scan, so the page hops the phone straight to its store
// (lib/stores.js → qrRedirectScript, inlined by DownloadMobileEn/Ko/Ja).
// One target per redesigned language: each code carries that language's
// own URL, so a scan that falls through still lands on the right page.
const TARGETS = [
  {
    url: "https://pencake.app/download/mobile/?qr=1",
    file: "../public/assets/images/pencake_qr_download_mobile.svg",
  },
  {
    url: "https://pencake.app/ko/download/mobile/?qr=1",
    file: "../public/assets/images/pencake_qr_download_mobile_ko.svg",
  },
  {
    url: "https://pencake.app/ja/download/mobile/?qr=1",
    file: "../public/assets/images/pencake_qr_download_mobile_ja.svg",
  },
];

for (const { url, file } of TARGETS) {
  // Ink on transparent — the card behind the QR provides the white.
  const svg = await QRCode.toString(url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 1,
    color: { dark: "#37352f", light: "#0000" },
  });
  const out = path.resolve(__dirname, file);
  await writeFile(out, svg);
  console.log(`${path.relative(process.cwd(), out)} ← ${url}`);
}
