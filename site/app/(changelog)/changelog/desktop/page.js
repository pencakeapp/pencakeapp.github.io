import ChangelogApp from "@/components/ChangelogApp";

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
      "x-default": BASE,
    },
  },
};

export default function Page() {
  return <ChangelogApp />;
}
