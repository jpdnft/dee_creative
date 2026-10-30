import { libraryCategories } from "@/content/design-library";
import { availableLibraryArticles, findLibraryCategory, libraryAvailable, libraryMetadata } from "@/lib/design-library";
import { LibraryArticleList, LibraryBreadcrumbs } from "@/components/design-library/library";
import editorial from "@/app/editorial.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return libraryAvailable ? libraryCategories.map(category => ({ category: category.slug })) : []; }
type Props = { params: Promise<{ category: string }> };
export async function generateMetadata({ params }: Props) {
  const category = findLibraryCategory((await params).category);
  return libraryMetadata(category.title, category.description, `/design-library/${category.slug}`);
}
export default async function LibraryCategoryPage({ params }: Props) {
  const category = findLibraryCategory((await params).category);
  return <main id="main"><section className={`section ${editorial.opening}`}><LibraryBreadcrumbs items={[{ name: category.title, path: `/design-library/${category.slug}` }]} /><p className="eyebrow">The Design Library</p><div className={editorial.openingGrid}><h1>{category.title}</h1><div className={editorial.openingCopy}><p>{category.description}</p></div></div></section><section className="section" aria-label={`${category.title} articles`}><LibraryArticleList articles={availableLibraryArticles().filter(article => article.category === category.slug)} /></section></main>;
}
