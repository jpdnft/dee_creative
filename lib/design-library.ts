import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { libraryArticles, libraryCategories } from "@/content/design-library";
import type { LibraryFigure } from "@/content/design-library/types";
import { eligibleLibraryArticles, libraryArticlePath, libraryPublicPaths, libraryReleaseAuthorized, localLibraryPreview } from "./design-library-policy";
import { pageMetadata, type PageMetadataOptions, type ShareImage } from "./seo";

export { libraryArticlePath };
export const libraryPreview = localLibraryPreview(process.env.NODE_ENV, process.env.DESIGN_LIBRARY_PREVIEW);
export const libraryAvailable = libraryReleaseAuthorized || libraryPreview;
export function requireLibrary() { if (!libraryAvailable) notFound(); }
export function availableLibraryArticles() { return eligibleLibraryArticles(libraryArticles, libraryReleaseAuthorized, libraryPreview); }
const categoryImageArticles: Record<(typeof libraryCategories)[number]["slug"], string> = {
  "architectural-styles": "victorian",
  "house-types-and-forms": "farmhouse",
  "interior-design-styles": "scandinavian",
  "architectural-elements-and-details": "interior-arches-openings",
  "materials-and-finishes": "natural-stone",
  "design-principles-and-philosophies": "biophilic-design",
};
export function featuredLibraryArticle(category: (typeof libraryCategories)[number]["slug"]) {
  const articles = availableLibraryArticles().filter(article => article.category === category);
  return articles.find(article => article.slug === categoryImageArticles[category]) ?? articles[0];
}
export function libraryShareImage(figure?: LibraryFigure): ShareImage | undefined {
  return figure?.src ? { url: figure.src, alt: figure.alt, width: figure.width, height: figure.height } : undefined;
}
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
export function libraryMetadata(title: string, description: string, path: string, options: PageMetadataOptions = {}): Metadata {
  requireLibrary();
  return { ...pageMetadata(title, description, path, options), ...(libraryPreview ? { robots: { index: false, follow: false } } : {}) };
}
