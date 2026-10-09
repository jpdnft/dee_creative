import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Architectural Interiors & Design-Build in Portland | Dee Creative Enterprises", template: "%s | Dee Creative Enterprises" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Imagine what your home could become.", description: site.description, url: "/", siteName: site.name, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  // Prevent indexing previews until a real production domain is supplied.
  robots: { index: site.url !== "https://example.com", follow: site.url !== "https://example.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /></body></html>;
}
