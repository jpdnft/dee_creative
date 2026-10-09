import { pageMetadata } from "@/lib/seo";
import { stages } from "@/content/process";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import styles from "@/app/editorial.module.css";

export const metadata = pageMetadata("Our Design-Build Process", "Discover, imagine, design, build, finish. A considered process for architectural interiors and residential transformations in Portland, Oregon.", "/process");

export default function ProcessPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "Process", path: "/process" }]} />
    <section className={`section ${styles.opening}`} aria-labelledby="process-title"><p className="eyebrow">Process / From possibility to place</p><div className={styles.openingGrid}><h1 id="process-title">A good idea<br />deserves a<br /><em>clear path.</em></h1><div className={styles.openingCopy}><p>Every home asks different questions. A thoughtful process gives us a way to answer them together, from the first conversation through construction and the final details.</p><a className="text-link" href="#stages">Discover the five stages</a></div></div></section>
    <section id="stages" className={`section ${styles.stages}`} aria-label="The five stages of a project">{stages.map((stage, index) => <article className={styles.stage} key={stage.name}><div className={styles.stageLabel}><span>0{index + 1}</span><h2>{stage.name}</h2></div><div><h3>{stage.subtitle}</h3>{stage.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p className={styles.focus}>{stage.focus}</p></div></article>)}</section>
    <section className={`section ${styles.split} ${styles.dark}`} aria-labelledby="leadership-heading"><p className="eyebrow">The thread through it all</p><div><h2 id="leadership-heading">One project leader.<br />A shared understanding.</h2><p>Design, sourcing, and construction involve decisions that affect one another. Having a single project leader means those conversations can stay connected, rather than passing the idea from one discipline to the next.</p><p>Clear communication includes explaining options, costs, and practical tradeoffs—not simply presenting a finished design. The goal is a space that reflects your priorities and a scope you understand.</p><a className="text-link" href="/about">Meet the studio</a></div></section>
    <section className={`section ${styles.notes}`} aria-label="Planning considerations"><div><h3>Budget belongs at the beginning.</h3><p>An early investment discussion helps make design exploration useful. Materials, complexity, specialty work, and existing conditions all affect the scope. We consider those alongside the idea, rather than leaving them until the end.</p></div><div><h3>The house has a say, too.</h3><p>Older homes, retained features, and practical construction requirements can shape a project. Planning makes room for those realities. Timing and the sequence of work are discussed for the specific engagement.</p></div></section>
    <ProjectInvitation id="process-invitation" heading={<>Start with what<br />you want to <em>change.</em></>} text="You don’t need finished plans to begin a conversation. Tell us about the room, the idea, or the question you keep coming back to." />
  </main>;
}
