import { notFound } from "next/navigation";
import { articles } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import styles from "../journal.module.css";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return pageMetadata(article.title, article.description, `/journal/${slug}`);
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const structured = { "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, author: { "@type": "Organization", name: site.legalName }, mainEntityOfPage: `${site.url}/journal/${slug}` };
  return <main id="main"><Breadcrumbs items={[{ name: "Journal", path: "/journal" }, { name: article.title, path: `/journal/${slug}` }]} />{site.url !== "https://example.com" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} />}<article><header className={`section ${styles.articleHeader}`}><a className="text-link" href="/journal">Back to the Journal</a><p className="eyebrow">{article.category}</p><h1>{article.title}</h1><p className={styles.introduction}>{article.introduction}</p></header><div className={styles.articleBody}>{article.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<aside className={styles.related} aria-labelledby="related-services"><p id="related-services" className="eyebrow">Explore the possibilities</p>{article.related.map(link => <a className="text-link" key={link.href} href={link.href}>{link.label}</a>)}</aside></div></article><ProjectInvitation id="article-invitation" heading={<>A question about<br />your <em>room?</em></>} text="A blank wall, an unresolved corner, or a space that needs a different approach. Tell Jim what you’re thinking about." /></main>;
}
