import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { images } from "@/content/home";
import { StudyImage } from "@/components/media/study-image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import styles from "@/app/editorial.module.css";

export const metadata = pageMetadata("About the Studio", "Meet the thinking behind Dee Creative Enterprises: design imagination, hands-on construction, visualization, and project leadership in Portland, Oregon.", "/about");

const principles = [
  ["Imagination, grounded in making", "Seeing a possibility is the beginning. Understanding materials, fabrication, and construction helps turn that possibility into a room that can actually be built."],
  ["Technology that makes ideas clearer", "Digital visualization, documentation, research, and planning tools can make an unfamiliar idea easier to understand. The purpose is better decisions and clearer communication."],
  ["A conversation about the tradeoffs", "Proportion, function, material, cost, and construction often pull in different directions. Discussing the choices openly helps the design reflect what matters most to you."],
  ["Leadership through the whole project", "Scope, sequencing, sourcing, and coordination are part of the design-build work. Thoughtful execution keeps the architectural idea present in the everyday decisions."],
];

export default function AboutPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "About", path: "/about" }]} />
    <section className={`section ${styles.opening}`} aria-labelledby="about-title"><p className="eyebrow">The studio / Portland, Oregon</p><div className={styles.openingGrid}><h1 id="about-title">The imagination.<br />The hands.<br /><em>The whole idea.</em></h1><div className={styles.openingCopy}><p>A good project benefits from someone who understands both the design idea and the realities of building it.</p><p>Dee Creative Enterprises brings those perspectives together: architectural thinking, practical making, and a clear path from concept through construction.</p></div></div></section>
    <section className={`section ${styles.split} ${styles.portraitless}`} aria-labelledby="jim-heading"><p className="eyebrow">Meet Jim</p><div><h2 id="jim-heading">A creative point of view.<br />A practical way forward.</h2><p>Jim leads Dee Creative Enterprises, a small Portland design-build studio focused on residential transformation. His approach combines design imagination, hands-on construction, technology, communication, and project leadership.</p><p>The work can begin with a room that feels unresolved, an architectural feature you have in mind, or a collection that deserves a place of its own. Understanding the problem—and the person who lives with it—comes first.</p><p>As an Oregon Residential General Contractor, Jim personally performs appropriate construction and coordinates qualified specialty subcontractors where the scope requires them.</p><div className={styles.license}><span>{site.legalName}</span><span>Oregon Residential General Contractor</span><span>CCB #{site.ccb}</span></div></div></section>
    <section className={`section ${styles.principles}`} aria-labelledby="principles-heading"><div><p className="eyebrow">How we think</p><h2 id="principles-heading">Creative thinking.<br />Practical judgment.</h2></div><div>{principles.map(([title, text]) => <article className={styles.principle} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={`section ${styles.imagePair}`} aria-labelledby="context-heading"><StudyImage image={images.nook} sizes="(max-width: 760px) 100vw, 45vw" /><div><p className="eyebrow">A contextual approach</p><h2 id="context-heading">Your home has<br />its own <em>language.</em></h2><p>A historic house, a Craftsman, a contemporary interior, or an eclectic room each brings a different context. The best solution grows from that architecture, your personal taste, and the way the space needs to function.</p><p>The consistent thread is thoughtfulness, architectural character, and craftsmanship. Materials and features worth retaining can be as important as anything new.</p><a className="text-link" href="/services">Explore what we can create</a></div></section>
    <ProjectInvitation id="about-invitation" heading={<>Let’s look at<br />the <em>possibilities.</em></>} text="Tell Jim about the space you have in mind. A thoughtful conversation is the first step toward seeing it differently." />
  </main>;
}
