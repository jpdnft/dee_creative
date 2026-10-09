import { pageMetadata } from "@/lib/seo";
import { images } from "@/content/home";
import { StudyImage } from "@/components/media/study-image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ProjectInvitation } from "@/components/ui/project-invitation";
import styles from "@/app/editorial.module.css";

export const metadata = pageMetadata("Private Libraries & Studies in Portland", "Custom home libraries and studies designed around books, work, and reflection. Integrated shelving, reading niches, lighting, and design-build in Portland, Oregon.", "/services/private-libraries");

const details = [
  ["Shelving that belongs to the room", "Floor-to-ceiling bookcases are an architectural decision as much as a storage solution. Depth, spacing, proportions, and the relationship to doors and windows shape how they feel. A library ladder may suit some rooms; clearances and practical access help determine whether it belongs."],
  ["A place to read. A place to work.", "A reading niche, integrated desk, or window seat can make the room useful in different ways. Comfortable seating, work surfaces, outlets, and circulation are considered alongside the larger composition."],
  ["Light with a purpose", "Books, screens, and quiet reading call for different kinds of light. Daylight, task lighting, and ambient light can work together, with qualified specialty trades involved where required. Lighting should support the room’s use as well as its atmosphere."],
  ["Collections, displayed and protected", "Books aren’t always the only collection. Art, objects, and personal pieces may need display space, while paperwork and equipment need somewhere to disappear. Open shelving and concealed storage can create a balance between a collected room and a cluttered one."],
];

const questions = [
  ["Can an awkward room become a library?", "An awkward layout can be a useful starting point. Alcoves, blank walls, and underused corners may offer opportunities for shelving, a desk, or a reading place. We begin with the dimensions, circulation, daylight, and what you need the room to do."],
  ["Does a home library have to look traditional?", "No. A library can be traditional, contemporary, minimal, or eclectic. Materials, proportions, and details should fit the surrounding architecture and your taste, rather than follow a fixed library style."],
  ["Can you incorporate an existing feature or a salvaged piece?", "Yes, where the condition, dimensions, and practical requirements make it suitable. A fireplace, original millwork, antique door, or stained-glass element can inform the design. We consider how it can work with new construction."],
  ["Do I need to know the design before calling?", "You can start with a collection, a room, or simply the wish for a place to read and work. Early conversations help identify the possibilities, investment, and scope before a specific design is developed."],
];

export default function PrivateLibrariesPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: "Private Libraries & Studies", path: "/services/private-libraries" }]} />
    <section className={`section ${styles.opening}`} aria-labelledby="library-title"><nav className={styles.breadcrumbs} aria-label="Breadcrumb"><a href="/services">Services</a><span aria-hidden="true">/</span><span>Private libraries & studies</span></nav><p className="eyebrow">Private libraries & studies / Portland, Oregon</p><div className={styles.openingGrid}><h1 id="library-title">A room for books.<br />A place for<br /><em>yourself.</em></h1><div className={styles.openingCopy}><p>For reading, quiet work, reflection, and the things you’ve collected along the way.</p><p>A home library can be more than a wall of shelves. It can give the whole room a purpose—and make space for the rituals that matter to you.</p><a className="text-link" href="#library-design">Imagine your library</a></div></div></section>
    <div className={styles.wideImage}><StudyImage image={images.library} priority sizes="100vw" /></div>
    <section id="library-design" className={`section ${styles.split}`} aria-labelledby="library-design-heading"><p className="eyebrow">Start with how you live</p><div><h2 id="library-design-heading">The collection.<br />The room.<br />The way you use it.</h2><p>How many books do you have? Are they growing? Do you work here, read here, or want a quiet place apart from the rest of the house? These questions shape the design before we choose a material or draw a bookcase.</p><p>We look at the existing architecture, window light, doorways, and circulation. A library in a Portland Craftsman might draw on retained trim and warm wood. A modern study might call for quieter planes, integrated cabinetry, and fewer visible details. Each deserves its own answer.</p></div></section>
    <section className={`section ${styles.principles}`} aria-labelledby="library-details-heading"><div><p className="eyebrow">Architecture, down to the detail</p><h2 id="library-details-heading">Consider the<br />whole room.</h2></div><div>{details.map(([title, text]) => <article className={styles.principle} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className={`section ${styles.split} ${styles.dark}`} aria-labelledby="library-build-heading"><p className="eyebrow">From idea to installation</p><div><h2 id="library-build-heading">Designed as a room.<br />Built as architecture.</h2><p>Material, joinery, paneling, hardware, and finish choices affect both the character and the practical scope of a library. Existing walls, trim, and floors also influence how new work is integrated. Those details belong in the planning, not just the installation.</p><p>Design development brings dimensions, specifications, visualization, and pricing into focus. Appropriate construction is performed directly, with qualified specialty subcontractors coordinated where needed. The room’s architectural intent stays connected to the build.</p><a className="text-link" href="/process">See how the project takes shape</a></div></section>
    <section className={`section ${styles.faq}`} aria-labelledby="library-questions"><p className="eyebrow">A few starting questions</p><h2 id="library-questions">Before the first shelf.</h2>{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</section>
    <ProjectInvitation id="library-invitation" heading={<>What would your<br />library <em>become?</em></>} text="A spare room, an empty wall, or a collection that has outgrown its shelves. Tell Jim what you have in mind, and we can start exploring the possibilities." />
  </main>;
}
