import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SmoothScrolling } from "@/components/SmoothScrolling";
import "@/styles/globals.css";
import { siteConfig, organizationSchema, localBusinessSchema } from "@/utils/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "God's Gift Foundation | Detox & Rehabilitation Centre in Howrah",
  description: siteConfig.description,
  keywords: [
    "detox centre in Howrah",
    "rehabilitation centre in Howrah",
    "de addiction centre West Bengal",
    "old age care in Howrah",
    "residential rehabilitation centre",
    "meditation therapy",
    "yoga rehabilitation",
    "mental wellness care",
    "God's Gift Foundation",
  ],
  authors: [{ name: "God's Gift Foundation" }],
  creator: "God's Gift Foundation",
  publisher: "God's Gift Foundation",
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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "God's Gift Foundation | Detox & Rehabilitation Centre in Howrah",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "God's Gift Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "God's Gift Foundation | Detox & Rehabilitation Centre in Howrah",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#16a34a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className="no-scrollbar">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans`}>
        <SmoothScrolling>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
        </SmoothScrolling>
      </body>
    </html>
  );
}
