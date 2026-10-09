import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { inquiriesEnabled } from "@/lib/inquiry";
import { ProjectForm } from "@/components/forms/project-form";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import styles from "@/app/editorial.module.css";

export const metadata = pageMetadata("Start a Project", "Tell Jim about your room, your idea, or the architectural feature you have in mind. Begin a residential design-build conversation in Portland, Oregon.", "/start-a-project");

export default function StartProjectPage() {
  return <main id="main"><Breadcrumbs items={[{ name: "Start a Project", path: "/start-a-project" }]} /><section className={`section ${styles.opening}`} aria-labelledby="inquiry-title"><p className="eyebrow">Start a project / Portland, Oregon</p><div className={styles.openingGrid}><h1 id="inquiry-title">Tell us about<br /><em>the space.</em></h1><div className={styles.openingCopy}><p>A room that isn’t working. A library you’ve always wanted. An idea you need help developing.</p><p>You don’t need finished plans to begin. Share what you know, and we can start with the possibilities.</p><a className="text-link" href={site.phoneHref}>Prefer to talk? Call Jim at {site.phone}</a></div></div></section><section className={`section ${styles.split}`} aria-labelledby="inquiry-form-heading"><div><p className="eyebrow">A starting conversation</p><h2 id="inquiry-form-heading" className={styles.formTitle}>Your home.<br />Your priorities.</h2><p>Jim will review your inquiry and discuss the space, scope, and a suitable next step.</p><a className="text-link" href="/process">See how we work</a></div><ProjectForm enabled={!!inquiriesEnabled()} /></section></main>;
}
