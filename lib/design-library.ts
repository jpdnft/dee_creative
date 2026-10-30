import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { libraryArticles, libraryCategories } from "@/content/design-library";
import { eligibleLibraryArticles, libraryArticlePath, libraryPublicPaths, libraryReleaseAuthorized, localLibraryPreview } from "./design-library-policy";
import { pageMetadata } from "./seo";

export { libraryArticlePath };
export const libraryPreview = localLibraryPreview(process.env.NODE_ENV, process.env.DESIGN_LIBRARY_PREVIEW);
export const libraryAvailable = libraryReleaseAuthorized || libraryPreview;
export function requireLibrary() { if (!libraryAvailable) notFound(); }
export function availableLibraryArticles() { return eligibleLibraryArticles(libraryArticles, libraryReleaseAuthorized, libraryPreview); }
export function publicLibraryPaths() { return libraryPublicPaths(libraryArticles, libraryCategories, libraryReleaseAuthorized); }
export function findLibraryCategory(slug: string) {
  requireLibrary();
  const category = libraryCategories.find(item => item.slug === slug);
  if (!category) notFound();
  return category;
}
export function findLibraryArticle(category: string, slug: string) {
  findLibraryCategory(category);
  const article = availableLibraryArticles().find(item => item.category === category && item.slug === slug);
  if (!article) notFound();
  return article;
}
export function libraryMetadata(title: string, description: string, path: string): Metadata {
  requireLibrary();
  return { ...pageMetadata(title, description, path), ...(libraryPreview ? { robots: { index: false, follow: false }, openGraph: { title, description, url: path, images: [] }, twitter: { card: "summary", title, description, images: [] } } : {}) };
}
