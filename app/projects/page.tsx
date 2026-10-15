import { publishedProjects } from "@/content/projects";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { StudyImage } from "@/components/media/study-image";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import editorial from "@/app/editorial.module.css";
import styles from "./projects.module.css";

export const metadata = pageMetadata("Projects — Residential Transformations", "The problems, ideas, and details behind completed residential transformations by Dee Creative Enterprises in Portland, Oregon.", "/projects");

export default function ProjectsPage() {
  if (!site.projectsEnabled) notFound();
  const projects = publishedProjects();
  return <main id="main"><Breadcrumbs items={[{ name: "Projects", path: "/projects" }]} /><section className={`section ${editorial.opening}`} aria-labelledby="projects-title"><p className="eyebrow">Projects / Built by Dee Creative Enterprises</p><div className={editorial.openingGrid}><h1 id="projects-title">A space changed.<br />A story <em>behind it.</em></h1><div className={editorial.openingCopy}><p>The starting problem. The possibility that emerged. The decisions and craftsmanship that brought it together.</p><p>Completed project stories explore the thinking as well as the finished room.</p></div></div></section>
    <section className={`section ${styles.collection}`} aria-label="Completed project collection">{projects.length ? projects.map(project => <article key={project.slug} className={styles.project}><StudyImage image={project.heroImage} /><p className="eyebrow">Completed project{project.location ? ` / ${project.location}` : ""}</p><h2><a href={`/projects/${project.slug}`}>{project.title}</a></h2><p>{project.description}</p><a className="text-link" href={`/projects/${project.slug}`}>Read the project story</a></article>) : <div className={styles.pending}><p className="eyebrow">Completed work</p><h2>Project stories<br />are on their way.</h2><p>We’re preparing the photographs and stories for this collection. In the meantime, explore the design studies for a sense of the possibilities.</p><a className="text-link" href="/concepts">Explore concept studies</a></div>}</section>
    <ProjectInvitation id="projects-invitation" heading={<>What’s the story<br />of <em>your space?</em></>} text="Tell Jim what you want to change, what you’d love to keep, and what you wish the room could become." />
  </main>;
}
