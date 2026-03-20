import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
};

const SITE = "https://www.bsw-tech.com";

export default function SEO({
  title,
  description,
  keywords,
  ogImage = "/og-image.png",
  noindex,
}: Props) {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // Build canonical: strip /de prefix for the "base" path
  const basePath = pathname.replace(/^\/de(\/|$)/, "/");
  const url = `${SITE}${pathname || "/"}`;
  const enUrl = `${SITE}${basePath}`;
  const deUrl = `${SITE}/de${basePath === "/" ? "/" : basePath}`;
  const svUrl = `${SITE}/sv/`;
  const roUrl = `${SITE}/ro/`;
  const ogLocale = lang === "de" ? "de_DE" : "en_GB";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index, follow"} />
      <meta name="author" content="BSW TECH" />
      <meta name="language" content={lang === "de" ? "German" : "English"} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="de" href={deUrl} />
      <link rel="alternate" hrefLang="sv" href={svUrl} />
      <link rel="alternate" hrefLang="ro" href={roUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BSW TECH" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content="de_DE" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="sv_SE" />
      <meta property="og:locale:alternate" content="ro_RO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}${ogImage}`} />
    </Helmet>
  );
}
