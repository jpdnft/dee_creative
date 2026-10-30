import Image from "next/image";
import type { LibraryArticle, LibraryFigure } from "@/content/design-library/types";
import { libraryArticlePath, libraryPreview } from "@/lib/design-library";
import { site } from "@/lib/site";
import styles from "@/app/design-library/library.module.css";

export function LibraryBreadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const trail = [{ name: "Home", path: "/" }, { name: "The Design Library", path: "/design-library" }, ...items];
  const structured = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: trail.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: new URL(item.path, site.url).toString() })) };
  return <><nav aria-label="Breadcrumb" className={styles.breadcrumbs}><ol>{trail.map((item, index) => <li key={item.path}>{index === trail.length - 1 ? <span aria-current="page">{item.name}</span> : <a href={item.path}>{item.name}</a>}</li>)}</ol></nav>{!libraryPreview && site.url !== "https://example.com" && <JsonLd data={structured} />}</>;
}
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export function LibraryPreviewNotice() {
  return libraryPreview ? <aside className={styles.preview} aria-label="Editorial review status">Private editorial preview · Approved and draft articles · Publication on hold</aside> : null;
}
export function LibraryFigureView({ figure, hero = false }: { figure: LibraryFigure; hero?: boolean }) {
  return <figure className={hero ? styles.heroFigure : styles.figure}>
    {figure.kind === "brief" ? <div className={styles.imageBrief}><p className="eyebrow">Image brief / asset pending</p><p className={styles.briefTitle}>{figure.title}</p><p>{figure.brief}</p></div>
      : figure.src && figure.width && figure.height ? <Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} sizes={hero ? "(max-width: 760px) 100vw, 90vw" : "(max-width: 760px) 100vw, 760px"} unoptimized={libraryPreview} preload={hero} /> : null}
    <figcaption>{figure.kind === "brief" ? "Proposed caption: " : figure.kind === "generated" ? "Generated architectural illustration. " : figure.kind === "supplied" ? "Image supplied for editorial review. " : "Documentary photograph. "}{figure.caption}{figure.credit && <> · {figure.credit}</>}{figure.sourceUrl && <> · <a href={figure.sourceUrl}>Image source</a></>}{figure.kind === "documentary" && figure.license && <> · {figure.license}</>}</figcaption>
  </figure>;
}
export function LibrarySourceLinks({ article, ids }: { article: LibraryArticle; ids: string[] }) {
  return <p className={styles.citations}>Sources: {ids.map((id, index) => {
    const reference = article.references.find(item => item.id === id)!;
    return <span key={id}>{index > 0 && "; "}<a href={`#source-${id}`}>{reference.publisher}</a></span>;
  })}</p>;
}
function SnapshotThumbnail({ image }: { image?: LibraryFigure }) {
  if (!image?.src || !image.width || !image.height) return null;
  return <Image className={styles.snapshotThumbnail} src={image.src} alt={`Generated illustration: ${image.alt}`} width={image.width} height={image.height} sizes="108px" unoptimized={libraryPreview} />;
}
export function LibrarySnapshot({ article }: { article: LibraryArticle }) {
  const snapshot = article.snapshot;
  const hasThumbnails = [...snapshot.facts, ...snapshot.features].some(item => item.image);
  return <section className={styles.snapshot} aria-labelledby="at-a-glance"><div className={styles.snapshotHeading}><p className="eyebrow">The short read</p><h2 id="at-a-glance">At a glance</h2></div><dl className={styles.snapshotFacts}>{snapshot.facts.map(fact => <div key={fact.label}><dt><SnapshotThumbnail image={fact.image} />{fact.label}</dt><dd>{fact.text}</dd></div>)}</dl><div className={styles.snapshotRecognition}>
    {snapshot.diagram === "house" && <svg viewBox="0 0 360 220" className={styles.houseDiagram} role="img" aria-labelledby="house-diagram-title house-diagram-description"><title id="house-diagram-title">Three features to look for</title><desc id="house-diagram-description">Schematic house: a broad roof, visible roof details, and a sheltered porch. Numbers match the feature list. Illustration of form only, not a construction drawing.</desc><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M26 94 180 28 334 94 318 102 180 45 42 102Z" fill="var(--paper)" /><path d="M58 99V193H302V99M42 202H318M77 126H283L292 137H68Z" /><path d="M82 137V188H101V137M259 137V188H278V137M78 188H105V202H78ZM255 188H282V202H255ZM164 202V147H197V202M116 148H144V177H116ZM217 148H245V177H217ZM130 148V177M231 148V177M116 161H144M217 161H245" /><path d="M61 96V110M81 87V101M101 79V92M259 79V92M279 87V101M299 96V110" /></g>{[{ x: 180, y: 26, n: "01" }, { x: 310, y: 108, n: "02" }, { x: 88, y: 161, n: "03" }].map(point => <g key={point.n}><circle cx={point.x} cy={point.y} r="15" fill="var(--deep-olive)" /><text x={point.x} y={point.y + 4} textAnchor="middle" fill="var(--ivory)" fontSize="11" fontFamily="var(--sans)">{point.n}</text></g>)}</svg>}
    <ol className={styles.snapshotFeatures}>{snapshot.features.map((feature, index) => feature.image ? <li key={feature.label} className={styles.illustratedFeature}><SnapshotThumbnail image={feature.image} /><div className={styles.snapshotFeatureHeading}><span aria-hidden="true">0{index + 1}</span><h3>{feature.label}</h3></div><p>{feature.text}</p></li> : <li key={feature.label}><span aria-hidden="true">0{index + 1}</span><div><h3>{feature.label}</h3><p>{feature.text}</p></div></li>)}</ol></div><p className={styles.distinction}><strong>One useful distinction</strong>{snapshot.distinction}</p>{hasThumbnails && <p className={styles.snapshotIllustrationNote}>{snapshot.illustrationNote ?? "Thumbnails are generated editorial illustrations."}</p>}<LibrarySourceLinks article={article} ids={snapshot.sources} /></section>;
}
export function LibraryRecognition({ article }: { article: LibraryArticle }) {
  const recognition = article.recognition;
  if (!recognition) return null;
  return <aside className={styles.recognition} aria-labelledby="colors-materials"><p className="eyebrow">A quick recognition guide</p><h3 id="colors-materials">Common colors &amp; materials</h3><ul className={styles.swatches} aria-label="Illustrative color families">{recognition.colors.map(color => <li key={color.name}><span className={styles.swatch} style={{ backgroundColor: color.hex }} aria-hidden="true" /><strong>{color.name}</strong><span>{color.use}</span></li>)}</ul><dl className={styles.materialList}>{recognition.materials.map(material => <div key={material.name}><dt>{material.name}</dt><dd>{material.detail}</dd></div>)}</dl><p className={styles.recognitionNote}>{recognition.note}</p><LibrarySourceLinks article={article} ids={recognition.sources} /></aside>;
}
export function LibraryArticleList({ articles }: { articles: LibraryArticle[] }) {
  return articles.length ? <div className={styles.entries}>{articles.map(article => <article key={article.slug} className={styles.entry}><p className="eyebrow">{libraryPreview && article.status === "approved" ? "Approved · Awaiting publication" : libraryPreview && article.status !== "published" ? "Draft for review" : "Reference essay"}</p><h2><a href={libraryArticlePath(article)}>{article.title}</a></h2><p>{article.excerpt}</p><a className="text-link" href={libraryArticlePath(article)}>Read the article</a></article>)}</div> : <p className={styles.empty}>No articles are published in this category yet.</p>;
}
export function LibraryClosingInvitation() {
  return <aside className={styles.invitation} aria-labelledby="library-invitation"><h2 id="library-invitation">Have a project in mind?</h2><p>Whether you’re restoring a home’s original character or imagining something entirely new, Studio Dee can help bring your ideas to life.</p><a className="text-link" href="/start-a-project">Start a Project</a></aside>;
}
