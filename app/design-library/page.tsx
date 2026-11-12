import Image from "next/image";
import { libraryCategories } from "@/content/design-library";
import { featuredLibraryArticle, libraryMetadata, libraryPreview, libraryShareImage, requireLibrary } from "@/lib/design-library";
import { LibraryBreadcrumbs } from "@/components/design-library/library";
import editorial from "@/app/editorial.module.css";
import styles from "./library.module.css";

export function generateMetadata() {
  const firstImage = libraryCategories.map(category => featuredLibraryArticle(category.slug)?.hero).find(figure => figure?.src);
  return libraryMetadata("The Design Library", "An evolving reference to residential architecture, interiors, materials, and the ideas that shape a home.", "/design-library", { image: libraryShareImage(firstImage) });
}
export default function DesignLibraryPage() {
  requireLibrary();
  return <main id="main" className={styles.landing}>
    <div className={styles.landingMain}>
      <section className={editorial.opening} aria-labelledby="library-title">
        <LibraryBreadcrumbs items={[]} />
        <p className="eyebrow">Architecture / Interiors / Ideas</p>
        <h1 id="library-title">The Design<br /><em>Library.</em></h1>
        <p className={styles.landingLead}>A place to look closely at houses and the rooms within them. Explore the histories, materials, and design decisions that give a home its character.</p>
      </section>
      <section className={styles.categories} aria-label="Library categories">
        {libraryCategories.map((category, index) => { const hero = featuredLibraryArticle(category.slug)?.hero; return <article className={styles.category} key={category.slug}>
          {hero?.src && hero.width && hero.height && <a className={styles.categoryImageLink} href={`/design-library/${category.slug}`} tabIndex={-1} aria-hidden="true"><Image className={styles.categoryImage} src={hero.src} alt="" width={hero.width} height={hero.height} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 66vw, 30vw" unoptimized={libraryPreview} /></a>}
          <p className="eyebrow">0{index + 1}</p>
          <h2><a href={`/design-library/${category.slug}`}>{category.title}</a></h2>
          <p>{category.description}</p>
          <a className="text-link" href={`/design-library/${category.slug}`}>Explore the category</a>
        </article>; })}
      </section>
    </div>
    <aside className={styles.founderNote} aria-labelledby="founder-note-title">
      <Image className={styles.founderPortrait} src="/images/jimdee-headshot.png" alt="Portrait of Jim Dee, founder of Studio Dee" width={1122} height={1402} sizes="(max-width: 760px) 100vw, 32vw" loading="eager" />
      <div className={styles.founderCopy}>
        <p className="eyebrow">A note from the founder</p>
        <h2 id="founder-note-title">Welcome to the <em>possibilities.</em></h2>
        <p>Hi, I&apos;m Jim Dee, founder of Studio Dee. Welcome to my Design Library!</p>
        <p>I&apos;ve created this space for fellow design enthusiasts, curious homeowners, and anyone who appreciates the extraordinary things that can happen when imagination, craftsmanship, and architecture come together.</p>
        <p>My goal is to build a comprehensive, thoughtfully organized collection of design knowledge—rich with history, practical information, visual inspiration, and, above all, exciting ideas. Whether you&apos;re exploring architectural styles, discovering unfamiliar materials, or wondering what makes a particular interior so captivating, I hope you&apos;ll find plenty here to explore.</p>
        <p>But there&apos;s another reason I&apos;m building this library, and it&apos;s a little more personal.</p>
        <p className={styles.founderEmphasis}>I absolutely love ambitious design.</p>
        <p>I&apos;m a designer and licensed general contractor, which means I can help take a project from an initial idea through planning and construction. And yes, I&apos;m happy to tackle the practical stuff—a bathroom renovation, a new deck, a tricky remodeling problem.</p>
        <p>But what really gets my imagination going is the possibility of creating something extraordinary.</p>
        <p>Give me a choice between fifty straightforward projects and one wonderfully complicated, detail-rich transformation that demands creativity, ingenuity, and exceptional craftsmanship, and I&apos;ll choose the latter every time.</p>
        <p>I&apos;m talking about rooms that become experiences. A private library that feels as though it belongs in another century. A listening room designed around the pure pleasure of music. An unusual architectural feature that completely transforms an otherwise ordinary space. A room where the materials, lighting, furnishings, colors, and intricate details all come together to create something truly unforgettable.</p>
        <p>Projects like these aren&apos;t necessarily quick or inexpensive. They demand thought, planning, experimentation, patience, and skilled execution.</p>
        <p>But the results can be so much more than construction. They can become deeply personal works of art—places that simply couldn&apos;t belong to anyone else.</p>
        <p>And that&apos;s what I hope this library will help communicate.</p>
        <p>Yes, I want it to be a genuinely useful reference for anyone interested in design. But I also want it to offer a glimpse into the possibilities that excite me most—and perhaps introduce you to a few ideas you never knew you wanted in your own home.</p>
        <p>So have a look around. Explore a style you&apos;ve never heard of. Discover an architectural detail that catches your eye. Follow an idea down a rabbit hole.</p>
        <p>And if something sparks your imagination, I&apos;d love to hear about it.</p>
        <p>Welcome to the possibilities.</p>
        <p className={styles.founderSignature}>Jim Dee<span>Studio Dee · Portland, Oregon</span></p>
      </div>
    </aside>
  </main>;
}
