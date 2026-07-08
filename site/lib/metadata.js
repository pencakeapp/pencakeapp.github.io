// Maps extracted head metadata to the Next.js Metadata API,
// reproducing the legacy pages' title/description/OG/twitter/hreflang/canonical.
export function buildMetadata(meta) {
  const languages = {};
  for (const { hreflang, href } of meta.hreflang || []) {
    languages[hreflang] = href;
  }

  const other = {};
  if (meta.appleMobileWebAppCapable) other["apple-mobile-web-app-capable"] = meta.appleMobileWebAppCapable;
  if (meta.formatDetection) other["format-detection"] = meta.formatDetection;
  if (meta.msapplicationTapHighlight) other["msapplication-tap-highlight"] = meta.msapplicationTapHighlight;
  if (meta.twitter?.url) other["twitter:url"] = meta.twitter.url;

  return {
    title: meta.title ?? undefined,
    description: meta.description ?? undefined,
    alternates: {
      canonical: meta.canonical ?? undefined,
      languages: Object.keys(languages).length ? languages : undefined,
    },
    openGraph: meta.og?.title
      ? {
          title: meta.og.title,
          description: meta.og.description ?? undefined,
          url: meta.og.url ?? undefined,
          type: meta.og.type ?? "website",
          images: meta.og.image ? [meta.og.image] : undefined,
          locale: meta.og.locale ?? undefined,
          alternateLocale: meta.og.localeAlternates?.length ? meta.og.localeAlternates : undefined,
        }
      : undefined,
    twitter: meta.twitter?.card
      ? {
          card: meta.twitter.card,
          title: meta.twitter.title ?? undefined,
          description: meta.twitter.description ?? undefined,
          images: meta.twitter.image ? [meta.twitter.image] : undefined,
        }
      : undefined,
    icons: meta.favicon ? { icon: meta.favicon } : undefined,
    other: Object.keys(other).length ? other : undefined,
  };
}

// Identical viewport across all legacy notion pages.
export const notionViewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};
