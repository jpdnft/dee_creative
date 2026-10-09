import type { Metadata } from "next";
import { StudyImage } from "@/components/media/study-image";
import { images } from "@/content/home";
import { considerations, creativeServices, serviceGroups } from "@/content/services";
import editorial from "@/app/editorial.module.css";
import { site } from "@/lib/site";
import styles from "./services.module.css";

const title = "Residential Design-Build & Architectural Interior Services in Portland";
const description = "Private libraries, listening rooms, custom built-ins, architectural focal points, and whole-room transformations. Thoughtful design and construction in Portland, Oregon.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: `${title} | ${site.name}`, description, url: "/services" },
  twitter: { title: `${title} | ${site.name}`, description },
};

export default function ServicesPage() {
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
  ] };
  return (
    <main id="main">
      {site.url !== "https://example.com" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />}
      <section className={`section ${styles.intro}`} aria-labelledby="services-heading">
        <p className="eyebrow">Services · Portland, Oregon</p>
        <div className={styles.introGrid}><h1 id="services-heading">Design first.<br />Construction<br />follows <em>the idea.</em></h1><div className={styles.introCopy}><p>One architectural feature. A room reconsidered. An interior brought together.</p><p>The scale can vary. The approach stays the same: understand the home, find the possibility, and develop a thoughtful way to build it.</p><a className="text-link" href="#engagements">Find your starting point</a></div></div>
      </section>

      <div className={styles.openingImage}><StudyImage image={images.listening} priority sizes="100vw" /></div>

      <section id="engagements" className={`section ${styles.engagements}`} aria-labelledby="engagements-heading">
        <div className={styles.chapter}><p className="eyebrow">The scope of possibility</p><h2 id="engagements-heading">What does your<br />space need?</h2><p>You can arrive with a specific idea or simply a room that isn’t working. These are some of the ways we can help.</p><nav aria-label="Service areas" className={styles.contents}>{serviceGroups.map(group => <a key={group.id} href={`#${group.id}`}><span>{group.number}</span>{group.title}</a>)}</nav></div>
        <div className={styles.serviceStories}>{serviceGroups.map(group => <article id={group.id} key={group.id} className={styles.story}><p className="eyebrow">{group.number} / Design + build</p><h3>{group.title}</h3><p className={styles.lede}>{group.introduction}</p><p>{group.text}</p><p className={styles.details}>{group.details}</p>{group.href && <a className="text-link" href={group.href}>Explore {group.title.toLowerCase()}</a>}</article>)}</div>
      </section>

      <section id="art-and-custom-elements" className={`section ${editorial.principles}`} aria-labelledby="creative-services-heading"><div><p className="eyebrow">Art & custom architectural elements</p><h2 id="creative-services-heading">An idea worth<br />making <em>your own.</em></h2><p className="services-overview-link">Some spaces call for something particular: original glasswork, a mural, or a feature that brings design and technology together.</p></div><div>{creativeServices.map(service => <article className={editorial.principle} key={service.title}><h3>{service.title}</h3><p>{service.text}</p></article>)}</div></section>

      <section className={`section ${styles.considered}`} aria-labelledby="considered-heading"><div className={styles.detailImage}><StudyImage image={images.nook} sizes="(max-width: 760px) 100vw, 42vw" /></div><div className={styles.consideredCopy}><p className="eyebrow">Beyond the obvious</p><h2 id="considered-heading">What stays.<br />What’s found.<br />What comes <em>next.</em></h2>{considerations.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></section>

      <section className={`section ${styles.working}`} aria-labelledby="working-heading"><p className="eyebrow">One idea. A practical path.</p><div><h2 id="working-heading">Imagination, with<br />the details in view.</h2><p>Early conversations establish what you want the room to do, the investment you have in mind, and the scope that makes sense. Design development brings materials, dimensions, visualizations, and construction requirements into focus before the work moves forward.</p><p>As an Oregon Residential General Contractor, Dee Creative Enterprises personally performs appropriate construction and coordinates qualified specialty subcontractors where needed. Clear scope and thoughtful sequencing help carry the idea through the build.</p><a className="text-link" href="/process">Explore our process</a><p className={styles.license}>Oregon Residential General Contractor · CCB #{site.ccb}</p></div></section>

      <section className="section inquiry" aria-labelledby="service-inquiry-heading"><p className="eyebrow">Start with the room</p><h2 id="service-inquiry-heading">You don’t need<br />all the <em>answers.</em></h2><p>Tell us what isn’t working, what you love about your home, or what you’ve always wanted to make room for. We’ll begin there.</p><div className="inquiry-note"><span>Let’s start a conversation.</span><p><a className="text-link" href={site.phoneHref}>Call Jim at {site.phone}</a></p></div></section>
    </main>
  );
}
