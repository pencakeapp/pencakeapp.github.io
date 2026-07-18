import "./changelog.css";

import ChangelogApp from "@/components/ChangelogApp";
import TopNav from "@/components/pc/TopNav";

const BASE = "https://pencake.app/changelog/desktop/";

export const metadata = {
  title: "Update History",
  alternates: {
    canonical: BASE,
    languages: {
      en: BASE,
      ko: `${BASE}?lang=ko`,
      ja: `${BASE}?lang=ja`,
      "zh-CN": `${BASE}?lang=zh-hans`,
      "zh-TW": `${BASE}?lang=zh-hant`,
      de: `${BASE}?lang=de`,
      es: `${BASE}?lang=es`,
      pt: `${BASE}?lang=pt`,
      fr: `${BASE}?lang=fr`,
      id: `${BASE}?lang=id`,
      "x-default": BASE,
    },
  },
};

// The shell (running head) renders statically; the localized content
// appears once ChangelogApp resolves ?lang= on the client, exactly like
// the legacy in-browser React app.
export default function Page() {
  return (
    <>
      <TopNav />
      <ChangelogApp />
    </>
  );
}
