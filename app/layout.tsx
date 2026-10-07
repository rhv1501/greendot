import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://greendotbuild.com"),
  title: {
    default: "GreenDot Build & Interiors | Customized Prefab Construction Chennai",
    template: "%s | GreenDot Build & Interiors"
  },
  description: "Predictable, customized prefabricated construction (LGSF, PUF, Hybrid) & interior fit-outs in Chennai & South India. Work backwards from what you want to build with defined scope, agreed cost & planned timeline.",
  keywords: [
    "prefab construction Chennai",
    "prefabricated construction Chennai",
    "customized prefab construction Chennai",
    "LGSF construction Chennai",
    "PUF panel construction Chennai",
    "rooftop room construction Chennai",
    "commercial interiors Chennai",
    "turnkey interiors Chennai",
    "café interior contractor Chennai",
    "farmhouse construction Chennai"
  ],
  authors: [{ name: "GreenDot Build & Interiors" }],
  creator: "GreenDot Build & Interiors",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://greendotbuild.com",
    title: "GreenDot Build & Interiors | Customized Prefab Construction Chennai",
    description: "Customized prefabricated construction (LGSF, PUF) & interior fit-outs in Chennai with defined scope, agreed cost & planned timeline.",
    siteName: "GreenDot Build & Interiors"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#111827] font-sans">
        {/* Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-md bg-[#C85A32] px-4 py-2 text-xs font-bold text-white shadow-lg"
        >
          Skip to main content
        </a>

        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

