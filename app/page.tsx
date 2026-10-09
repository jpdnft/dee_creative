import { StudyImage } from "@/components/media/study-image";
import { images, process, services } from "@/content/home";
import { site } from "@/lib/site";

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "GeneralContractor", name: site.legalName, description: site.description, telephone: site.phoneInternational, areaServed: { "@type": "City", name: "Portland, Oregon" }, ...(site.url !== "https://example.com" ? { url: site.url } : {}) };
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-topline"><p className="eyebrow">Portland, Oregon · Design + build</p><p className="hero-note">Spaces with a point of view.<br />Designed around yours.</p></div>
        <div className="hero-title"><h1 id="hero-heading">Imagine what your<br />home could <em>become.</em></h1><div className="hero-intro"><p>Architectural interiors, private libraries, and whole-room transformations—from the first possibility to the final detail.</p><a className="text-link" href="#possibilities">Explore the possibilities</a></div></div>
        <StudyImage image={images.library} priority className="hero-study" />
        <div className="hero-bottom"><span>Considered design. Hands-on execution.</span><a className="text-link" href="/start-a-project">Start a Project</a></div>
      </section>

      <section id="approach" className="section promise" aria-labelledby="promise-heading">
        <div className="promise-aside"><p className="eyebrow">01 / The idea</p><StudyImage image={images.idea} className="idea-study" sizes="(max-width: 760px) 280px, 27vw" /></div>
        <div><h2 id="promise-heading">We don’t simply<br />renovate rooms.<br /><span className="muted">We imagine what they could become—and then build them.</span></h2><div className="promise-copy"><p>A room begins with more than its dimensions. It begins with the way you live, the architecture you inherited, and the possibilities you haven’t quite seen yet.</p><p>We consider design and construction together, so an imaginative idea can become a thoughtful, tangible part of your home.</p></div></div>
      </section>

      <section id="possibilities" className="section possibilities" aria-labelledby="possibilities-heading">
        <div className="section-heading"><p className="eyebrow">02 / Spaces & possibilities</p><h2 id="possibilities-heading">A place for what<br />matters to you.</h2><StudyImage image={images.possibilities} className="possibilities-study" sizes="(max-width: 760px) 100vw, 40vw" /><a className="text-link services-overview-link" href="/services">Explore our services</a></div>
        <div className="service-list">{services.map((service, index) => <details className="service" key={service.title} open={index === 0}><summary><span className="service-number">0{index + 1}</span><h3>{service.title}</h3><span className="expand-mark" aria-hidden="true" /></summary><p>{service.text}</p></details>)}</div>
      </section>

      <section className="context" aria-labelledby="context-heading">
        <StudyImage image={images.listening} />
        <div className="section context-copy"><p className="eyebrow">One approach. Many expressions.</p><h2 id="context-heading">The best version<br />of <em>your</em> home.</h2><div><p>A Craftsman library and a modern listening room ask different questions. So do a collected interior, an old house, and a space that needs a fresh start.</p><p>The answer grows from the architecture, your taste, and what the room needs to do. The thread that connects the work is thoughtfulness, character, and craftsmanship.</p></div></div>
      </section>

      <section className="section moments" aria-labelledby="moments-heading">
        <div className="moments-copy"><p className="eyebrow">03 / The details</p><h2 id="moments-heading">Sometimes,<br />one moment<br />changes the room.</h2><p>Light through old glass. A place to sit beside the window. A found object that belongs as if it were always there.</p><p>Architectural presence doesn’t always need a larger footprint. Sometimes it needs a more considered detail.</p><div className="material-note"><span>Design · Build · Source</span><p>Not everything extraordinary needs to be made from scratch.</p></div></div>
        <StudyImage image={images.nook} className="nook-study" sizes="(max-width: 760px) 100vw, 45vw" />
      </section>

      <section id="process" className="section process" aria-labelledby="process-heading">
        <div className="process-heading"><p className="eyebrow">04 / From possibility to place</p><h2 id="process-heading">An idea, carried through.</h2><p>A clear path from understanding the space to bringing it together. One project leader keeping the idea and the practical details in view.</p></div>
        <ol className="process-list">{process.map((stage, index) => <li key={stage.title}><span className="process-number">0{index + 1}</span><h3>{stage.title}</h3><p>{stage.text}</p></li>)}</ol><a className="text-link services-overview-link" href="/process">See how we work</a>
      </section>

      <section id="studio" className="section studio" aria-labelledby="studio-heading">
        <p className="eyebrow">05 / The studio</p><div><h2 id="studio-heading">Design vision.<br />The ability to build it.</h2><p>Dee Creative Enterprises brings design imagination, hands-on construction, visualization, and project leadership into the same conversation.</p><p>Led by Jim, the studio personally performs appropriate construction and coordinates qualified specialty subcontractors when the scope calls for them. You have a single project leader, from early decisions through execution.</p><a className="text-link services-overview-link" href="/about">Meet the studio</a><div className="license"><span>Dee Creative Enterprises, LLC</span><span>Oregon Residential General Contractor</span><span>CCB #{site.ccb}</span></div></div>
      </section>

      <section id="start-a-project" className="section inquiry" aria-labelledby="inquiry-heading"><p className="eyebrow">Begin with a possibility</p><h2 id="inquiry-heading">What could your<br />space <em>become?</em></h2><p>A room that isn’t working. A library you’ve always wanted. An idea you can’t quite put into words. That’s a good place to begin.</p><div className="inquiry-note"><span>Let’s start a conversation.</span><p><a className="text-link" href={site.phoneHref}>Call Jim at {site.phone}</a></p></div></section>
    </main>
  );
}
