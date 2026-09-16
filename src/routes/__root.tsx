import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { LanguageProvider, STORAGE_KEY } from "@/lib/i18n";
import { openingHoursJsonLd, SHOP } from "@/lib/shop";
import { asset } from "@/lib/utils";
import appCss from "../styles.css?url";

const SITE_URL = "https://sysopx786.github.io/Sharp-Studios-Website/";
const OG_IMAGE = `${SITE_URL}og.jpg`;
const TITLE = "Sharp Studios LLC | Barbershop in Reading, PA";
const DESCRIPTION =
  "Walk-in barbershop at 157 N 5th St, Reading, PA. Fades, haircuts, kids’ cuts, beard trims, and premium sits. Closed Sunday and Tuesday. Book on Booksy. Se habla español.";

const LANG_BOOTSTRAP = `(function(){try{var k=${JSON.stringify(STORAGE_KEY)};var l=localStorage.getItem(k);if(!l){var m=document.cookie.match(new RegExp("(?:^|; )"+k+"=([^;]*)"));l=m?decodeURIComponent(m[1]):"";}if(l==="es"||l==="en"||l==="pt"){document.documentElement.lang=l==="pt"?"pt-BR":l;document.documentElement.setAttribute("data-lang",l);}}catch(e){}})();`;

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: SHOP.name,
  alternateName: SHOP.shortName,
  url: SHOP.mapsUrl,
  telephone: SHOP.phoneTel,
  image: [OG_IMAGE, `${SITE_URL}images/reels/reel-entrance.jpg`],
  logo: `${SITE_URL}images/logo-crest.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SHOP.address,
    addressLocality: "Reading",
    addressRegion: "PA",
    postalCode: "19601",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.3383225,
    longitude: -75.9276184,
  },
  openingHoursSpecification: openingHoursJsonLd(),
  sameAs: [SHOP.instagramUrl, SHOP.mapsUrl, SHOP.booksyUrl],
  hasMap: SHOP.mapsUrl,
  areaServed: {
    "@type": "City",
    name: "Reading",
    containedInPlace: {
      "@type": "State",
      name: "Pennsylvania",
    },
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { name: "author", content: SHOP.name },
      { name: "geo.region", content: "US-PA" },
      { name: "geo.placename", content: "Reading" },
      { name: "geo.position", content: "40.3383225;-75.9276184" },
      { name: "ICBM", content: "40.3383225, -75.9276184" },
      { name: "theme-color", content: "#0b0b0b" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "es_US" },
      { property: "og:site_name", content: SHOP.name },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: asset("/favicon.svg") },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: asset("/__grok/manifest.webmanifest") },
      { rel: "apple-touch-icon", href: asset("/__grok/icon-180.png") },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP }} />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <LanguageProvider>
            <Outlet />
          </LanguageProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
