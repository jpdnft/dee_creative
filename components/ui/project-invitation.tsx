import { site } from "@/lib/site";

export function ProjectInvitation({ id, heading, text }: { id: string; heading: React.ReactNode; text: string }) {
  return <section className="section inquiry" aria-labelledby={id}><p className="eyebrow">Begin a conversation</p><h2 id={id}>{heading}</h2><p>{text}</p><div className="inquiry-note"><a className="text-link" href="/start-a-project">Start a Project</a><p><a className="text-link" href={site.phoneHref}>Call Jim at {site.phone}</a></p></div></section>;
}
