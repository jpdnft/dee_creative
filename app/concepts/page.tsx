import { pageMetadata } from "@/lib/seo";
import { concepts } from "@/content/concepts";
import { StudyImage } from "@/components/media/study-image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import editorial from "@/app/editorial.module.css";
import styles from "./concepts.module.css";

export const metadata = pageMetadata("Concept Studies & Imagined Interiors", "Explore imagined libraries, listening rooms, and architectural moments. Concept studies from Dee Creative Enterprises show possibilities for Portland residential interiors.", "/concepts");

export default function ConceptsPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "Concepts", path: "/concepts" }]} />
    <section className={`section ${editorial.opening}`} aria-labelledby="concepts-title"><p className="eyebrow">Concept studies / Ideas in view</p><div className={editorial.openingGrid}><h1 id="concepts-title">What could this<br />space <em>become?</em></h1><div className={editorial.openingCopy}><p>Sometimes seeing a possibility is the first step toward understanding what you want.</p><p>These imagined interiors explore character, materials, and ways of living. They are concept studies, rather than photographs of completed work.</p><a className="text-link" href="#studies">Explore the studies</a></div></div></section>
    <div id="studies" className={styles.studies}>{concepts.map((study, index) => <section id={study.id} key={study.id} className={`section ${styles.study} ${index === 1 ? styles.reversed : ""}`} aria-labelledby={`${study.id}-title`}><div className={styles.image}><StudyImage image={study.image} priority={index === 0} sizes={index === 0 ? "100vw" : "(max-width: 760px) 100vw, 55vw"} /></div><div className={styles.copy}><p className="eyebrow">0{index + 1} / {study.category}</p><h2 id={`${study.id}-title`}>{study.title}</h2><p>{study.idea}</p><p className={styles.considerations}>{study.considerations}</p><a className="text-link" href={study.service.href}>Explore {study.service.label.toLowerCase()}</a></div></section>)}</div>
    <section className={`section ${editorial.split}`} aria-labelledby="visualization-title"><p className="eyebrow">A tool for conversation</p><div><h2 id="visualization-title">An image starts<br />the discussion.</h2><p>A visualization can help compare an atmosphere, a material direction, or an architectural idea. It is a starting point for a conversation about what suits your home and how you want to use it.</p><p>Turning that idea into a project requires the actual dimensions, existing conditions, specifications, construction requirements, and budget. The design develops in response to those realities, rather than treating an image as a finished plan.</p><a className="text-link" href="/process">See how ideas become buildable</a></div></section>
    <ProjectInvitation id="concepts-invitation" heading={<>Which possibility<br />feels like <em>yours?</em></>} text="A study might suggest a material, a mood, or an entirely different use for a room. Tell Jim what catches your attention, and we can consider it in the context of your home." />
  </main>;
}
