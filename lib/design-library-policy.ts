import type { LibraryArticle } from "../content/design-library/types.ts";

// Publication requires an explicit code change after separate user authorization.
export const libraryReleaseAuthorized = false;

export function localLibraryPreview(environment: string | undefined, setting: string | undefined) {
  return environment === "development" && setting === "true";
}

export function libraryArticleImages(article: LibraryArticle) {
  return [article.hero, ...article.sections.flatMap(section => section.figure ? [section.figure] : []),
    ...[...article.snapshot.facts, ...article.snapshot.features].flatMap(item => item.image ? [item.image] : [])];
}

export function libraryAssetFolder(article: Pick<LibraryArticle, "slug" | "assetFolder">) {
  const folder = article.assetFolder ?? article.slug;
  if (!/^[a-z0-9-]+$/.test(folder)) throw new Error(`Invalid Design Library asset folder: ${folder}`);
  return folder;
}

export function isPublicationReady(article: LibraryArticle) {
  return ["approved", "published"].includes(article.status) && Boolean(article.contentApprovedAt)
    && libraryArticleImages(article)
      .every(image => image.kind !== "brief" && image.approvedAt && image.src && image.width && image.height && image.alt && image.caption && image.credit && image.license && (image.kind === "generated" || image.kind === "supplied" || (image.kind === "documentary" && image.sourceUrl)));
}

export function isPublishedArticle(article: LibraryArticle) {
  return isPublicationReady(article) && article.status === "published" && Boolean(article.publicationAuthorizedAt && article.publishedAt);
}

export function accessibleLibraryImage(articles: readonly LibraryArticle[], filename: string, released: boolean, preview: boolean) {
  if (!/^[a-z0-9-]+\.webp$/.test(filename)) return undefined;
  for (const article of eligibleLibraryArticles(articles, released, preview)) {
    const image = libraryArticleImages(article)
      .find(figure => figure.src === `/api/design-library-images/${filename}`);
    if (image) return { articleSlug: article.slug, articleCategory: article.category, assetFolder: libraryAssetFolder(article), image };
  }
  return undefined;
}

export function libraryAssetTopic(category: LibraryArticle["category"]) {
  if (category === "house-types-and-forms") return "home-types";
  if (category === "architectural-elements-and-details") return "architectural-elements";
  if (category === "design-principles-and-philosophies") return "design-principles";
  return category;
}

export function eligibleLibraryArticles(articles: readonly LibraryArticle[], released: boolean, preview: boolean) {
  return preview ? articles.filter(article => !["planned", "researching"].includes(article.status))
    : released ? articles.filter(isPublishedArticle) : [];
}

export function libraryArticlePath(article: Pick<LibraryArticle, "category" | "slug">) {
  return `/design-library/${article.category}/${article.slug}`;
}

export function libraryPublicPaths(articles: readonly LibraryArticle[], categories: readonly { slug: string }[], released: boolean) {
  if (!released) return [];
  return ["/design-library", ...categories.map(category => `/design-library/${category.slug}`),
    ...eligibleLibraryArticles(articles, released, false).map(libraryArticlePath)];
}
