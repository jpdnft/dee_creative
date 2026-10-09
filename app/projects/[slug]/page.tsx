import { notFound } from "next/navigation";
import { publishedProjects } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { StudyImage } from "@/components/media/study-image";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import editorial from "@/app/editorial.module.css";
import styles from "../projects.module.css";

export function generateStaticParams() { return publishedProjects().map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = publishedProjects().find(item => item.slug === slug);
  if (!project) notFound();
  return pageMetadata(project.title, project.description, `/projects/${slug}`);
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = publishedProjects().find(item => item.slug === slug);
  if (!project) notFound();
  const chapters = [["The problem", project.problem], ["The idea", project.idea], ["The design", project.design], ["The build", project.build], ["The details", project.details], ["The result", project.result]];
  return <main id="main"><Breadcrumbs items={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${slug}` }]} /><section className={`section ${editorial.opening}`}><nav className={editorial.breadcrumbs} aria-label="Breadcrumb"><a href="/projects">Projects</a><span aria-hidden="true">/</span><span>Completed project</span></nav><p className="eyebrow">Built by Dee Creative Enterprises{project.location ? ` / ${project.location}` : ""}</p><div className={editorial.openingGrid}><h1>{project.title}</h1><div className={editorial.openingCopy}><p>{project.description}</p><p>{project.type.join(" · ")}</p></div></div></section><div className={editorial.wideImage}><StudyImage image={project.heroImage} priority sizes="100vw" /></div><section className={`section ${editorial.stages}`} aria-label="The project story">{chapters.map(([title, text], index) => <article className={editorial.stage} key={title}><div className={editorial.stageLabel}><span>0{index + 1}</span><h2>{title}</h2></div><div><p>{text}</p></div></article>)}</section>{project.gallery.length > 0 && <section className={`section ${styles.gallery}`} aria-label="Completed project photographs">{project.gallery.map(image => <StudyImage key={image.src} image={image} sizes="(max-width: 760px) 100vw, 50vw" />)}</section>}<section className={`section ${styles.related}`} aria-label="Related services"><p className="eyebrow">Explore related services</p>{project.services.map(service => <a className="text-link" key={service.href} href={service.href}>{service.label}</a>)}</section><ProjectInvitation id="case-study-invitation" heading={<>Imagine your<br />own <em>transformation.</em></>} text="A good project begins with the space you have. Tell Jim what you’re considering." /></main>;
}
