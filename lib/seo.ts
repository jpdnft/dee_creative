import type { Metadata } from "next";
import { site } from "@/lib/site";

export type ShareImage = { url: string; alt: string; width?: number; height?: number };
export type PageMetadataOptions = { image?: ShareImage; type?: "website" | "article"; publishedTime?: string };

export const defaultShareImage: ShareImage = {
  url: "/images/entry3.jpg",
  alt: "Custom built-in entry in a Portland bungalow by Dee Creative Enterprises",
  width: 1448,
  height: 1086,
};

export function pageMetadata(title: string, description: string, path: string, options: PageMetadataOptions = {}): Metadata {
  const pageUrl = new URL(path, site.url).toString();
  const image = options.image ?? defaultShareImage;
  const imageUrl = new URL(image.url, site.url).toString();
  return {
    title, description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${title} | ${site.name}`, description, url: pageUrl,
      siteName: site.name, locale: "en_US", type: options.type ?? "website",
      images: [{ url: imageUrl, alt: image.alt, width: image.width, height: image.height }],
      ...(options.type === "article" && options.publishedTime ? { publishedTime: options.publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [imageUrl] },
  };
}
