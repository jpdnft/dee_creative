import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";
import { defaultShareImage } from "@/lib/seo";
import { libraryReleaseAuthorized, localLibraryPreview } from "@/lib/design-library-policy";
import "./globals.css";

export const viewport: Viewport = { themeColor: "#f3f0e9" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Architectural Interiors & Design-Build in Portland | Dee Creative Enterprises", template: "%s | Dee Creative Enterprises" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Imagine what your home could become.", description: site.description, url: "/", siteName: site.name, locale: "en_US", type: "website", images: [defaultShareImage] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: [defaultShareImage.url] },
  // Prevent indexing previews until a real production domain is supplied.
  robots: { index: site.url !== "https://example.com", follow: site.url !== "https://example.com" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const libraryVisible = libraryReleaseAuthorized || localLibraryPreview(process.env.NODE_ENV, process.env.DESIGN_LIBRARY_PREVIEW);
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header libraryVisible={libraryVisible} />{children}<Footer libraryVisible={libraryVisible} /></body><Script id="google-tag-init" strategy="beforeInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}</Script><Script src="https://www.googletagmanager.com/gtm.js?id=GTM-569V8VRS" strategy="beforeInteractive" /></html>;
}
