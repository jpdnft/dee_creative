import Image from "next/image";
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
  ["Clarity through conversation", "Jim’s particular strength is helping people navigate complexity. He brings clarity to unfamiliar decisions, explains the reasoning behind recommendations, and keeps the larger goal connected to the details. Thorough questions and an ongoing dialogue are welcome."],
  ["Leadership through the whole project", "Scope, sequencing, sourcing, and coordination are part of the design-build work. Thoughtful execution keeps the architectural idea present in the everyday decisions."],
];

export default function AboutPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "About", path: "/about" }]} />
    <section className={`section ${styles.opening}`} aria-labelledby="about-title"><p className="eyebrow">The studio / Portland, Oregon</p><div className={styles.openingGrid}><h1 id="about-title">The imagination.<br />The hands.<br /><em>The whole idea.</em></h1><div className={styles.openingCopy}><p>A good project benefits from someone who understands both the design idea and the realities of building it.</p><p>Dee Creative Enterprises brings those perspectives together: architectural thinking, practical making, and a clear path from concept through construction.</p></div></div></section>
    <section className={`section ${styles.split} ${styles.studioPortrait}`} aria-labelledby="jim-heading"><div className={styles.portrait}><p className="eyebrow">Meet Jim</p><Image src="/images/jim-dee-portrait.png" alt="Jim Dee, who leads Dee Creative Enterprises" width={1122} height={1402} sizes="(max-width: 760px) 360px, 30vw" /></div><div><h2 id="jim-heading">A creative point of view.<br />A practical way forward.</h2><p>Jim leads Dee Creative Enterprises, a small Portland design-build studio focused on residential transformation. His approach combines design imagination, hands-on construction, technology, communication, and project leadership.</p><p>The work can begin with a room that feels unresolved, an architectural feature you have in mind, or a collection that deserves a place of its own. Understanding the problem—and the person who lives with it—comes first.</p><p>As an Oregon Residential General Contractor, Jim personally performs appropriate construction and coordinates qualified specialty subcontractors where the scope requires them.</p><div className={styles.license}><span>{site.legalName}</span><span>Oregon Residential General Contractor</span><span>CCB #{site.ccb}</span></div></div></section>
    <section className={`section ${styles.split}`} aria-labelledby="experience-heading">
      <div><p className="eyebrow">Experience & craft</p><figure className={styles.projectPhoto}><Image src="/images/sauna.webp" alt="Cedar-lined sauna with tiered benches and traditional sauna accessories" width={512} height={400} sizes="(max-width: 760px) 400px, 30vw" /><figcaption>One of Jim’s early construction projects: a European-inspired sauna with room for 6–8 people, four benches, 100% clear cedar from Montana, and a sauna heater imported from Scandinavia.</figcaption></figure></div>
      <div>
        <h2 id="experience-heading">A background in building.<br />An eye for the details.</h2>
        <p>Jim has been working on construction and design projects since the 1990s, developing broad practical experience across most of the major construction trades. A particular focus has been large-scale built-ins and the architectural details that give an interior its character.</p>
        <p>He also works as a finish carpenter in the Portland area, with considerable experience in high-end homes and amenities. That work calls for close attention to proportion, fit, material transitions, and the final details people see and touch every day.</p>
        <p>This background helps connect the design idea to the practical work of making it: understanding how elements are built, how they meet, and how a considered finish brings the room together.</p>
        <div className={styles.license}><span>Construction & design projects since the 1990s</span><span>Portland-area finish carpentry</span><span>Large-scale built-ins & architectural details</span></div>
      </div>
    </section>
    <section className={`section ${styles.split} ${styles.dark}`} aria-labelledby="project-leadership-heading">
      <div><p className="eyebrow">Project leadership</p><figure className={styles.projectPhoto}><Image src="/images/foyer.jpg" alt="Renovated foyer with metallic gold walls, dark wood stairs, and glazed wood doors" width={500} height={333} sizes="(max-width: 760px) 400px, 30vw" /><figcaption>A home Jim fully renovated, with bold choices including these metallic gold walls. It sold for tens of thousands above recent local comparable sales—an example of the investment potential of distinctive, thoughtful design.</figcaption></figure></div>
      <div>
        <h2 id="project-leadership-heading">Complex projects.<br />Steady leadership.</h2>
        <p>Across a career spanning high-tech, publishing, financial services, and blockchain, Jim has consistently been entrusted with complex projects where the stakes—and the financial responsibilities—were substantial.</p>
        <p>That experience includes multi-million-dollar national projects at Deloitte, blockchain projects generating tens of millions in revenue, mission-critical publishing projects, and leadership of marketing and communications for major international exhibitions.</p>
        <p>He has also completely rehabilitated three of his own homes, from top to bottom. Those projects bring a firsthand understanding of the decisions, coordination, and hands-on work involved in transforming a home.</p>
        <p>Clear communication has been central to that project leadership: helping clients navigate complicated work, making decisions understandable, and keeping people connected to the larger goal. Jim especially enjoys working with clients who value thorough explanations and an ongoing conversation.</p>
        <p>Dee Creative brings that depth of project leadership together with decades of practical building experience, so the creative idea and the work required to deliver it stay connected.</p>
        <a className="text-link" href="/process">See how that experience shapes the process</a>
      </div>
    </section>
    <section className={`section ${styles.notes}`} aria-label="Creative interests">
      <div><h3>A curiosity that extends beyond the job.</h3><p>Outside project work, Jim enjoys making stained glass windows and refinishing furniture. Both offer another way to explore material, light, surface, and the character of objects worth keeping.</p></div>
      <div><h3>Making room for technology, too.</h3><p>Personal technology projects are another creative pursuit. That interest sits naturally alongside hands-on craft, bringing a willingness to experiment, solve unusual problems, and explore how a custom idea could work.</p><a className="text-link" href="/services#art-and-custom-elements">Explore art & custom architectural elements</a></div>
    </section>
    <section className={`section ${styles.principles}`} aria-labelledby="principles-heading"><div><p className="eyebrow">How we think</p><h2 id="principles-heading">Creative thinking.<br />Practical judgment.</h2></div><div>{principles.map(([title, text]) => <article className={styles.principle} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={`section ${styles.imagePair}`} aria-labelledby="context-heading"><StudyImage image={images.nook} sizes="(max-width: 760px) 100vw, 45vw" /><div><p className="eyebrow">A contextual approach</p><h2 id="context-heading">Your home has<br />its own <em>language.</em></h2><p>A historic house, a Craftsman, a contemporary interior, or an eclectic room each brings a different context. The best solution grows from that architecture, your personal taste, and the way the space needs to function.</p><p>The consistent thread is thoughtfulness, architectural character, and craftsmanship. Materials and features worth retaining can be as important as anything new.</p><a className="text-link" href="/services">Explore what we can create</a></div></section>
    <ProjectInvitation id="about-invitation" heading={<>Let’s look at<br />the <em>possibilities.</em></>} text="Tell Jim about the space you have in mind. A thoughtful conversation is the first step toward seeing it differently." />
  </main>;
}
