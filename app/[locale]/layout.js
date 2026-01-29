import { Kanit, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

// Styles
import "@/globals.css";

// Fonts - Optimize with display swap for better loading experience
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-kanit",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// Components
import Navbar from "@/components/common/Navbar/navbar";
import Footer from "@/components/common/Footer/footer";

// Import both logo versions
import logoHorizontal from "@/components/common/Navbar/assets/logo-horizontal.png";
import logoVertical from "@/components/common/Navbar/assets/logo-vertical.png";

// SEO Metadata
export const metadata = {
  title:
    "Palestine Tire Center | Premium Tires & Auto Accessories in Palestine, TX",
  description:
    "Palestine Tire Center offers expert tire sales, premium auto accessories, and professional vehicle maintenance in Palestine, Texas. Quality service you can trust. Shop online today!",
  keywords:
    "Palestine Tire Center, tire shop Palestine TX, auto accessories Palestine, tire sales Palestine, car maintenance Palestine, wheel accessories, tire repair Palestine, auto service Palestine TX, vehicle customization, premium tires Palestine",
  authors: [{ name: "Palestine Tire Center" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.palestinetire.com/",
    siteName: "Palestine Tire Center",
    title:
      "Palestine Tire Center | Premium Tires & Auto Accessories in Palestine, TX",
    description:
      "Expert tire sales, premium auto accessories, and professional vehicle maintenance in Palestine, Texas. Quality service you can trust.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Palestine Tire Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palestine Tire Center | Premium Tires & Auto Accessories",
    description:
      "Expert tire sales and premium auto accessories in Palestine, TX",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.palestinetire.com/",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your Google Search Console verification code here
    google: "your-google-verification-code",
  },
};

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Palestine Tire Center",
  image: "https://www.palestinetire.com/images/logo.png",
  "@id": "https://www.palestinetire.com",
  url: "https://www.palestinetire.com",
  telephone: "+1-XXX-XXX-XXXX", // Add your phone number
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address", // Add your address
    addressLocality: "Palestine",
    addressRegion: "TX",
    postalCode: "75801", // Update with your zip code
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.7621, // Update with your coordinates
    longitude: -95.6308,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    // Add your social media links
    "https://www.facebook.com/palestinetire",
    "https://www.instagram.com/palestinetire",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kanit.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y0PB14P14H"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Y0PB14P14H');
    `}
        </Script>
      </head>

      <body
        className={`${inter.className} text-gray-800 mx-auto text-base font-normal antialiased`}
      >
        {/* Navbar */}
        <Navbar logoHorizontal={logoHorizontal} logoVertical={logoVertical} />

        {/* Main content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
