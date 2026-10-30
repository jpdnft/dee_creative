import { libraryCategories } from "@/content/design-library";
import { libraryMetadata, requireLibrary } from "@/lib/design-library";
import { LibraryBreadcrumbs } from "@/components/design-library/library";
import editorial from "@/app/editorial.module.css";
import styles from "./library.module.css";

export function generateMetadata() { return libraryMetadata("The Design Library", "An evolving reference to residential architecture, interiors, materials, and the ideas that shape a home.", "/design-library"); }
export default function DesignLibraryPage() {
  requireLibrary();
  return <main id="main"><section className={`section ${editorial.opening}`}><LibraryBreadcrumbs items={[]} /><p className="eyebrow">Architecture / Interiors / Ideas</p><div className={editorial.openingGrid}><h1>The Design<br /><em>Library.</em></h1><div className={editorial.openingCopy}><p>A place to look closely at houses and the rooms within them. Explore the histories, materials, and design decisions that give a home its character.</p></div></div></section><section className={`section ${styles.categories}`} aria-label="Library categories">{libraryCategories.map((category, index) => <article className={styles.category} key={category.slug}><p className="eyebrow">0{index + 1}</p><h2><a href={`/design-library/${category.slug}`}>{category.title}</a></h2><p>{category.description}</p><a className="text-link" href={`/design-library/${category.slug}`}>Explore the category</a></article>)}</section></main>;
}
