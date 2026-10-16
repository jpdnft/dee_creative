import Image from "next/image";
import { orderedPortfolio } from "@/content/portfolio";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import editorial from "@/app/editorial.module.css";
import styles from "./portfolio.module.css";

export const metadata = pageMetadata("Portfolio — Spaces, Details & Transformations", "Explore Jim’s construction, custom built-ins, stained glass, furniture, and residential color transformations. Selected work from Dee Creative Enterprises.", "/portfolio");

export default function PortfolioPage() {
  const projects = orderedPortfolio();
  return <main id="main"><Breadcrumbs items={[{ name: "Portfolio", path: "/portfolio" }]} />
    <section className={`section ${editorial.opening}`} aria-labelledby="portfolio-title"><p className="eyebrow">Portfolio / Selected work</p><div className={editorial.openingGrid}><h1 id="portfolio-title">Character,<br />in the <em>making.</em></h1><div className={editorial.openingCopy}><p>A selection of Jim’s construction, custom work, and residential transformations. Different scales and different expressions, connected by an interest in what a space—or an object—could become.</p><a className="text-link" href={`#${projects[0].id}`}>Explore the collection</a></div></div></section>
    {projects.map((project, index) => <section id={project.id} key={project.id} className={`${styles.project} ${index % 2 === 1 ? styles.dark : ""}`} aria-labelledby={`${project.id}-title`}><div className={`section ${styles.inner}`}>
      <div className={styles.projectHeading}><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</p><h2 id={`${project.id}-title`}>{project.title}</h2></div>
      <div className={styles.gallery}>{project.images.map((photo, photoIndex) => <figure key={photo.src} className={project.images.length > 1 ? styles.galleryImage : styles.singleImage}><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 760px) 100vw, 90vw" priority={index === 0 && photoIndex === 0} />{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>)}</div>
      <div className={styles.projectDetails}><p className="eyebrow">The thinking behind the work</p><div>{project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<ul className={styles.tags} aria-label="Project themes">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div></div>
    </div></section>)}
    <ProjectInvitation id="portfolio-invitation" heading={<>What could we<br />make of <em>your space?</em></>} text="A considered room, a distinctive feature, or something entirely your own. Tell Jim what you have in mind." />
  </main>;
}
