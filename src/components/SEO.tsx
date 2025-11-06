import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
};

const SITE = "https://bsw-tech.com";

export default function SEO({
  title,
  description,
  keywords,
  ogImage = "/og-image.png",
  noindex,
}: Props) {
  const { pathname } = useLocation();
  const url = `${SITE}${pathname || "/"}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BSW TECH" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}${ogImage}`} />
    </Helmet>
  );
}
