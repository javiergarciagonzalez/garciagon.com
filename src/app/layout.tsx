import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/shared/components/ThemeProvider";
import { Header } from "@/shared/components/Header";
import { Footer } from "@/shared/components/Footer";
import { getBioSummary, PROFILE } from "@/domain/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bio = getBioSummary();

export const metadata: Metadata = {
  metadataBase: new URL("https://garciagon.com"),
  title: {
    default: "Javier García González — Senior Full Stack Engineer",
    template: "%s | Javier García González",
  },
  description: bio,
  keywords: [
    "Senior Full Stack Engineer",
    "TypeScript Specialist",
    "Node.js Backend",
    "CI/CD Build Systems",
    "Autodesk Fusion CI",
    "Distributed Systems",
    "Clean Architecture",
    "Javier Garcia Gonzalez",
    "Seville Spain Remote Engineer",
  ],
  authors: [{ name: PROFILE.name, url: "https://garciagon.com" }],
  creator: PROFILE.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://garciagon.com",
    title: "Javier García González — Senior Full Stack Engineer",
    description: bio,
    siteName: "Javier García González Portfolio",
    images: [
      {
        url: "/images/profile.webp",
        width: 800,
        height: 1000,
        alt: PROFILE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Javier García González — Senior Full Stack Engineer",
    description: bio,
    images: ["/images/profile.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    url: "https://garciagon.com",
    image: "https://garciagon.com/images/profile.webp",
    jobTitle: PROFILE.title,
    worksFor: {
      "@type": "Organization",
      name: PROFILE.currentRole.company,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad Rey Juan Carlos",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universidad Politécnica de Madrid",
      },
    ],
    sameAs: [PROFILE.socials.github, PROFILE.socials.linkedin],
    knowsAbout: [
      "TypeScript",
      "Node.js",
      "Distributed Systems",
      "CI/CD",
      "C++ Build Systems",
      "Cloud Infrastructure",
      "Clean Architecture",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-zinc-800 selection:text-white transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-lg focus:font-mono focus:text-xs focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <div id="top" />
          <Header />
          <div id="main-content" className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
