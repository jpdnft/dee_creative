import { availableLibraryArticles, findLibraryArticle, findLibraryCategory, libraryArticlePath, libraryMetadata, libraryPreview } from "@/lib/design-library";
import { site } from "@/lib/site";
import { JsonLd, LibraryArticleList, LibraryBreadcrumbs, LibraryClosingInvitation, LibraryFigureView, LibraryRecognition, LibrarySnapshot } from "@/components/design-library/library";
import styles from "../../library.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return availableLibraryArticles().map(article => ({ category: article.category, slug: article.slug })); }
type Props = { params: Promise<{ category: string; slug: string }> };
export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params;
  const article = findLibraryArticle(category, slug);
  const metadata = libraryMetadata(article.title, article.description, libraryArticlePath(article));
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article" as const, ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}) } };
}
export default async function LibraryArticlePage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const article = findLibraryArticle(categorySlug, slug);
  const category = findLibraryCategory(categorySlug);
  const related = availableLibraryArticles().filter(item => article.related.includes(item.slug) && item.slug !== article.slug);
  const structured = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, author: { "@type": "Organization", name: article.author }, publisher: { "@type": "Organization", name: article.publisher, url: site.url }, datePublished: article.publishedAt, dateModified: article.lastReviewed, mainEntityOfPage: new URL(libraryArticlePath(article), site.url).toString(), ...(article.hero.kind === "documentary" && article.hero.src ? { image: new URL(article.hero.src, site.url).toString() } : {}) };
  return <main id="main">
    {!libraryPreview && site.url !== "https://example.com" && <JsonLd data={structured} />}
    <article>
      <header className={`section ${styles.articleHeader}`}>
        <LibraryBreadcrumbs items={[{ name: category.title, path: `/design-library/${category.slug}` }, { name: article.title, path: libraryArticlePath(article) }]} />
        <p className="eyebrow">{category.title}</p><h1>{article.title}</h1>
        <p className={styles.introduction}>{article.introduction}</p>
        <p className={styles.byline}>By {article.author} · Last reviewed <time dateTime={article.lastReviewed}>{new Date(`${article.lastReviewed}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time></p>
      </header>
      <LibraryFigureView figure={article.hero} hero />
      <div className={styles.body}>
        <LibrarySnapshot article={article} />
        <nav className={styles.contents} aria-label="In this article">
          <p className="eyebrow">In this article</p>
          <ol>{article.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>)}{article.recognition && <li><a href="#colors-materials">{article.recognition.colors.length ? "Common colors & materials" : "Common materials"}</a></li>}</ol>
        </nav>
        {article.sections.map(section => <section id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
          <h2 id={`${section.id}-heading`}>{section.heading}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {article.recognition?.section === section.id && <LibraryRecognition article={article} />}
          {section.figure && <LibraryFigureView figure={section.figure} />}
        </section>)}
        <section aria-labelledby="sources-heading"><h2 id="sources-heading">Sources &amp; further reading</h2><ol className={styles.sources}>{article.references.map(reference => <li id={`source-${reference.id}`} key={reference.id}><a href={reference.url}>{reference.title}</a><span>{reference.publisher}. {reference.note}</span></li>)}</ol></section>
        {(related.length > 0 || article.furtherReading.length > 0) && <section aria-labelledby="related-heading"><h2 id="related-heading">Related reading</h2>{related.length > 0 && <LibraryArticleList articles={related} />}<ul className={styles.further}>{article.furtherReading.map(link => <li key={link.href}><a href={link.href}>{link.title}</a></li>)}</ul></section>}
        <LibraryClosingInvitation />
      </div>
    </article>
  </main>;
}
