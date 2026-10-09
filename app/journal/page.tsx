import { articles } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import styles from "./journal.module.css";
import editorial from "@/app/editorial.module.css";

export const metadata = pageMetadata("Journal — Ideas for Considered Interiors", "Notes on architectural details, materials, and residential design decisions from Dee Creative Enterprises in Portland, Oregon.", "/journal");
export default function JournalPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "Journal", path: "/journal" }]} /><section className={`section ${editorial.opening}`} aria-labelledby="journal-title"><p className="eyebrow">Journal / Notes from the studio</p><div className={editorial.openingGrid}><h1 id="journal-title">Look closer.<br />Think <em>differently.</em></h1><div className={editorial.openingCopy}><p>Ideas about rooms, the details that give them character, and the practical questions behind a thoughtful design.</p></div></div></section><section className={`section ${styles.index}`} aria-label="Journal articles">{articles.map(article => <article key={article.slug} className={styles.entry}><p className="eyebrow">{article.category}</p><div><h2><a href={`/journal/${article.slug}`}>{article.title}</a></h2><p>{article.description}</p><a className="text-link" href={`/journal/${article.slug}`}>Read the essay</a></div></article>)}</section></main>;
}
