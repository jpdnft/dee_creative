import { pageMetadata } from "@/lib/seo";
import { kitchenBathImages } from "@/content/kitchens-and-baths";
import { StudyImage } from "@/components/media/study-image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import styles from "@/app/editorial.module.css";

export const metadata = pageMetadata("Kitchen & Bathroom Remodeling in Portland", "Thoughtful kitchen and bathroom design-build in Portland. Layout, cabinetry, tile, finishes, and clear communication from the first conversation through construction.", "/services/kitchens-and-baths");

const priorities = [
  ["Begin with the routines.", "Where do you prepare a meal? What belongs within reach? Where does the bathroom feel crowded? Understanding the small frustrations of daily use helps us focus the plan on improvements you will actually notice."],
  ["Give storage a purpose.", "Cabinetry works best when it is planned around what it holds. Pantry provisions, cookware, towels, and everyday essentials need accessible homes, with proportions and details that belong to the room."],
  ["Let the materials belong.", "Tile, counters, cabinetry, hardware, and color should speak to one another and to the house. We consider their character, maintenance, and relationship with natural and artificial light as part of a coherent interior."],
  ["Choose the scope thoughtfully.", "Some spaces need a complete rethink. Others benefit from retaining a useful layout or a well-made element and improving what surrounds it. We discuss what is worth keeping and where your investment will make the most difference."],
];

export default function KitchensAndBathsPage() {
  return <main id="main">
    <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: "Kitchens & Baths", path: "/services/kitchens-and-baths" }]} />
    <section className={`section ${styles.opening}`} aria-labelledby="kitchen-bath-title">
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><a href="/services">Services</a><span aria-hidden="true">/</span><span>Kitchens & baths</span></nav>
      <p className="eyebrow">Kitchens & baths / Portland, Oregon</p>
      <div className={styles.openingGrid}><h1 id="kitchen-bath-title">Every day,<br />a little more <em>considered.</em></h1><div className={styles.openingCopy}><p>The rooms you use most deserve to work beautifully.</p><p>From a kitchen that makes cooking a pleasure to a bathroom with better light and a sense of calm, we design and build around your routines, your home, and the investment you have in mind.</p><a className="text-link" href="#kitchen-thinking">Start with how you live</a></div></div>
    </section>
    <div className={styles.wideImage}><StudyImage image={kitchenBathImages.kitchen} priority sizes="100vw" /></div>
    <section id="kitchen-thinking" className={`section ${styles.split}`} aria-labelledby="kitchen-heading"><p className="eyebrow">Kitchens / The heart of the everyday</p><div><h2 id="kitchen-heading">Room to cook.<br />Room to come <em>together.</em></h2><p>A kitchen is a working room and a gathering place. Preparation space, appliance placement, circulation, storage, and lighting need to support one another, whether you cook alone or share the room with a busy household.</p><p>Jim brings decades of hands-on building experience and a particular interest in cabinetry and architectural detail. The aim is a kitchen that feels at home in the house, with the practical decisions resolved as carefully as the visible ones.</p></div></section>
    <section className={`section ${styles.imagePair}`} aria-labelledby="bath-heading"><StudyImage image={kitchenBathImages.bath} sizes="(max-width: 760px) 100vw, 45vw" /><div><p className="eyebrow">Baths / A more personal retreat</p><h2 id="bath-heading">A good morning<br />starts <em>here.</em></h2><p>A bathroom can feel generous through a thoughtful arrangement of modest elements: a well-placed vanity, useful shelving, comfortable lighting, and surfaces chosen for the way the room is used.</p><p>We bring tile, fixtures, storage, and finish carpentry into a connected design. A distinctive furniture piece or a carefully chosen color can provide character, while the construction planning addresses the room’s practical demands.</p></div></section>
    <section className={`section ${styles.principles}`} aria-labelledby="priorities-heading"><div><p className="eyebrow">The decisions that matter</p><h2 id="priorities-heading">Beautiful,<br />because it <em>works.</em></h2></div><div>{priorities.map(([title, text]) => <article key={title} className={styles.principle}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={`section ${styles.split} ${styles.dark}`} aria-labelledby="remodel-heading"><p className="eyebrow">A clear path through the remodel</p><div><h2 id="remodel-heading">Many moving parts.<br />One ongoing <em>conversation.</em></h2><p>Kitchens and bathrooms bring design decisions, existing conditions, and several trades into close contact. Scope, selections, construction requirements, and sequencing deserve attention before the work begins.</p><p>Jim personally performs appropriate construction and coordinates qualified specialty trades, including plumbing and electrical work where needed. Preparation, moisture management, ventilation, and permit requirements are considered as part of developing the scope.</p><p>Expect clear explanations, room for questions, and conversations about the choices that affect your home. We discuss the likely disruption and sequence of work so you can plan around the remodel.</p><a className="text-link" href="/process">See how we guide the process</a></div></section>
    <ProjectInvitation id="kitchen-bath-invitation" heading={<>Tell us what<br />could work <em>better.</em></>} text="A kitchen you have outgrown. A bathroom ready for a fresh start. Share the room, your priorities, and what you hope will change." />
  </main>;
}
