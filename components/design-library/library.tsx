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
    <figcaption>{figure.kind === "brief" ? "Proposed caption: " : figure.kind === "generated" ? "Generated architectural illustration. " : figure.kind === "supplied" ? "" : "Documentary photograph. "}{figure.caption}{figure.credit && <> · {figure.credit}</>}{figure.sourceUrl && <> · <a href={figure.sourceUrl}>Image source</a></>}{figure.kind === "documentary" && figure.license && <> · {figure.license}</>}</figcaption>
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
function ShotgunDogtrotDiagram() {
  return <svg viewBox="0 0 360 220" className={styles.houseDiagram} role="img" aria-labelledby="plan-diagram-title plan-diagram-description">
    <title id="plan-diagram-title">Shotgun and dogtrot plan comparison</title>
    <desc id="plan-diagram-description">At left, three shotgun rooms form a narrow sequence from front to back. At right, two dogtrot rooms sit on either side of an open passage. These are conceptual diagrams, not measured historic plans.</desc>
    <g fill="none" stroke="currentColor" strokeWidth="2"><rect x="48" y="42" width="85" height="45" /><rect x="48" y="87" width="85" height="45" /><rect x="48" y="132" width="85" height="45" /><rect x="217" y="70" width="52" height="104" /><rect x="308" y="70" width="52" height="104" /><path d="M90 25v174m-7-10 7 10 7-10M288 60v139m-7-10 7 10 7-10" strokeDasharray="4 3" /></g>
    <g fill="currentColor" fontSize="11" fontFamily="var(--sans)"><text x="91" y="17" textAnchor="middle">SHOTGUN</text><text x="288" y="17" textAnchor="middle">DOGTROT</text><text x="91" y="210" textAnchor="middle">through rooms</text><text x="288" y="210" textAnchor="middle">between rooms</text></g>
  </svg>;
}
function SplitLevelDiagram() {
  return <svg viewBox="0 0 360 220" className={styles.houseDiagram} role="img" aria-labelledby="split-diagram-title split-diagram-description">
    <title id="split-diagram-title">Tri-level and split-entry sections</title>
    <desc id="split-diagram-description">Conceptual sections, not measured plans. A tri-level has a middle living wing beside upper bedrooms and lower family rooms. A split-entry has a landing between an upper main floor and a lower level, with short stairs up and down.</desc>
    <g fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="90" width="78" height="70" /><rect x="88" y="54" width="76" height="53" /><rect x="88" y="108" width="76" height="52" /><path d="M75 109h12m0 0 12-15m-12 15 12 15" /><rect x="220" y="54" width="115" height="53" /><rect x="220" y="108" width="115" height="52" /><path d="M192 106h27m0 0 16-17m-16 17 16 18" /></g>
    <g fill="currentColor" fontSize="10" fontFamily="var(--sans)" textAnchor="middle"><text x="86" y="23">TRI-LEVEL</text><text x="276" y="23">SPLIT-ENTRY</text><text x="48" y="130">living</text><text x="125" y="85">beds</text><text x="125" y="139">family</text><text x="277" y="85">main floor</text><text x="277" y="139">lower level</text><text x="86" y="194">half flights between wings</text><text x="277" y="194">landing between floors</text></g>
  </svg>;
}
function FarmsteadDiagram() {
  return <svg viewBox="0 0 360 220" className={styles.houseDiagram} role="img" aria-labelledby="farmstead-diagram-title farmstead-diagram-description">
    <title id="farmstead-diagram-title">A farmhouse within its working landscape</title>
    <desc id="farmstead-diagram-description">Conceptual site diagram. A farmhouse connects to a kitchen garden, work yard, barn, and fields by everyday paths. Actual farmsteads vary by region, period, and use.</desc>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><rect x="18" y="38" width="107" height="57" /><path d="M14 38 71 13 129 38" /><rect x="229" y="39" width="105" height="65" /><path d="M225 39 282 13 338 39M71 95v35h211v-26M183 130v58" strokeDasharray="5 4" /><rect x="20" y="147" width="97" height="48" /><path d="M29 155h79m-79 11h79m-79 11h79m-79 11h79" strokeWidth="1" /><rect x="241" y="147" width="94" height="48" /><path d="M264 147v48m24-48v48m23-48v48" strokeWidth="1" /></g>
    <g fill="currentColor" fontSize="10" fontFamily="var(--sans)" textAnchor="middle"><text x="72" y="70">farmhouse</text><text x="282" y="76">barn</text><text x="181" y="123">work yard</text><text x="68" y="211">kitchen garden</text><text x="288" y="211">fields</text></g>
  </svg>;
}
function CapeCodDiagram() {
  const forms = [
    { x: 8, name: "HALF", bays: "3 bays", door: 12, windows: [43, 72] },
    { x: 127, name: "THREE-QUARTER", bays: "4 bays", door: 37, windows: [14, 62, 83] },
    { x: 246, name: "FULL", bays: "5 bays", door: 45, windows: [12, 28, 66, 83] },
  ];
  return <svg viewBox="0 0 360 220" className={styles.houseDiagram} role="img" aria-labelledby="cape-diagram-title cape-diagram-description">
    <title id="cape-diagram-title">Half, three-quarter, and full Cape front elevations</title>
    <desc id="cape-diagram-description">Conceptual elevations, not measured historic drawings. A half Cape has a door near one end and two windows to one side. A three-quarter Cape has an offset door, two windows on one side, and one on the other. A full Cape has a centered door with two windows on each side.</desc>
    {forms.map(form => <g key={form.name} transform={`translate(${form.x} 0)`}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M0 91 53 42 106 91M8 91v88h90V91M8 179h90" /><rect x={form.door} y="132" width="12" height="47" />{form.windows.map(x => <rect key={x} x={x} y="132" width="10" height="19" />)}</g>
      <g fill="currentColor" fontSize="9" fontFamily="var(--sans)" textAnchor="middle"><text x="53" y="22">{form.name}</text><text x="53" y="205">{form.bays}</text></g>
    </g>)}
  </svg>;
}
function TraditionalRoomDiagram() {
  return <svg viewBox="0 0 360 240" className={styles.houseDiagram} role="img" aria-labelledby="traditional-diagram-title traditional-diagram-description">
    <title id="traditional-diagram-title">Six elements in a traditional room</title>
    <desc id="traditional-diagram-description">Conceptual room vignette. Balanced chairs face a central sofa and fireplace; paneling and shelves structure the wall; a wood table, rug, lamps, books, and art add warmth, textiles, and personal objects. Numbered labels match the six selectable features beside the diagram.</desc>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="M17 25v177h326V25M17 192h326M77 25v112M283 25v112M125 25v105M235 25v105M17 84h60m206 0h60" /><rect x="139" y="48" width="82" height="73" /><path d="M131 121h98m-88 0v13h78v-13M159 118V83h42v35M40 45h24v73H40zm256 0h24v73h-24M39 71h26m231 0h25M39 93h26m231 0h25" /><rect x="124" y="160" width="112" height="42" rx="12" /><rect x="31" y="151" width="58" height="49" rx="10" /><rect x="271" y="151" width="58" height="49" rx="10" /><path d="M75 207h210M112 210h136M133 226h94M93 166h20m134 0h20M103 166v-25m154 25v-25" /><ellipse cx="180" cy="216" rx="39" ry="10" /></g>
    {[[180, 25, '01'], [78, 73, '02'], [180, 172, '03'], [180, 215, '04'], [64, 188, '05'], [298, 56, '06']].map(([x, y, n]) => <g key={n}><circle cx={x} cy={y} r="13" fill="var(--deep-olive)" /><text x={x} y={Number(y) + 4} textAnchor="middle" fill="var(--ivory)" fontSize="9" fontFamily="var(--sans)">{n}</text></g>)}
  </svg>;
}
export function LibrarySnapshot({ article }: { article: LibraryArticle }) {
  const snapshot = article.snapshot;
  const hasThumbnails = [...snapshot.facts, ...snapshot.features].some(item => item.image);
  return <section className={styles.snapshot} aria-labelledby="at-a-glance"><div className={styles.snapshotHeading}><p className="eyebrow">The short read</p><h2 id="at-a-glance">At a glance</h2></div><dl className={styles.snapshotFacts}>{snapshot.facts.map(fact => <div key={fact.label}><dt><SnapshotThumbnail image={fact.image} />{fact.label}</dt><dd>{fact.text}</dd></div>)}</dl><div className={styles.snapshotRecognition}>
    {snapshot.diagram === "house" && <svg viewBox="0 0 360 220" className={styles.houseDiagram} role="img" aria-labelledby="house-diagram-title house-diagram-description"><title id="house-diagram-title">Three features to look for</title><desc id="house-diagram-description">Schematic house: a broad roof, visible roof details, and a sheltered porch. Numbers match the feature list. Illustration of form only, not a construction drawing.</desc><g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M26 94 180 28 334 94 318 102 180 45 42 102Z" fill="var(--paper)" /><path d="M58 99V193H302V99M42 202H318M77 126H283L292 137H68Z" /><path d="M82 137V188H101V137M259 137V188H278V137M78 188H105V202H78ZM255 188H282V202H255ZM164 202V147H197V202M116 148H144V177H116ZM217 148H245V177H217ZM130 148V177M231 148V177M116 161H144M217 161H245" /><path d="M61 96V110M81 87V101M101 79V92M259 79V92M279 87V101M299 96V110" /></g>{[{ x: 180, y: 26, n: "01" }, { x: 310, y: 108, n: "02" }, { x: 88, y: 161, n: "03" }].map(point => <g key={point.n}><circle cx={point.x} cy={point.y} r="15" fill="var(--deep-olive)" /><text x={point.x} y={point.y + 4} textAnchor="middle" fill="var(--ivory)" fontSize="11" fontFamily="var(--sans)">{point.n}</text></g>)}</svg>}
    {snapshot.diagram === "shotgun-dogtrot" && <ShotgunDogtrotDiagram />}
    {snapshot.diagram === "split-level" && <SplitLevelDiagram />}
    {snapshot.diagram === "farmstead" && <FarmsteadDiagram />}
    {snapshot.diagram === "cape-cod" && <CapeCodDiagram />}
    {snapshot.diagram === "traditional-room" && <TraditionalRoomDiagram />}
    <ol className={styles.snapshotFeatures}>{snapshot.features.map((feature, index) => feature.image ? <li key={feature.label} className={styles.illustratedFeature}><SnapshotThumbnail image={feature.image} /><div className={styles.snapshotFeatureHeading}><span aria-hidden="true">0{index + 1}</span><h3>{feature.label}</h3></div><p>{feature.text}</p></li> : <li key={feature.label}><span aria-hidden="true">0{index + 1}</span><div><h3>{feature.label}</h3><p>{feature.text}</p></div></li>)}</ol></div><p className={styles.distinction}><strong>One useful distinction</strong>{snapshot.distinction}</p>{hasThumbnails && <p className={styles.snapshotIllustrationNote}>{snapshot.illustrationNote ?? "Thumbnails are generated editorial illustrations."}</p>}<LibrarySourceLinks article={article} ids={snapshot.sources} /></section>;
}
export function LibraryRecognition({ article }: { article: LibraryArticle }) {
  const recognition = article.recognition;
  if (!recognition) return null;
  return <aside className={styles.recognition} aria-labelledby="colors-materials"><p className="eyebrow">A quick recognition guide</p><h3 id="colors-materials">{recognition.colors.length ? "Common colors & materials" : "Common materials"}</h3>{recognition.colors.length > 0 && <ul className={styles.swatches} aria-label="Illustrative color families">{recognition.colors.map(color => <li key={color.name}><span className={styles.swatch} style={{ backgroundColor: color.hex }} aria-hidden="true" /><strong>{color.name}</strong><span>{color.use}</span></li>)}</ul>}<dl className={styles.materialList}>{recognition.materials.map(material => <div key={material.name}><dt>{material.name}</dt><dd>{material.detail}</dd></div>)}</dl><p className={styles.recognitionNote}>{recognition.note}</p><LibrarySourceLinks article={article} ids={recognition.sources} /></aside>;
}
export function LibraryArticleList({ articles }: { articles: LibraryArticle[] }) {
  return articles.length ? <div className={styles.entries}>{articles.map(article => <article key={article.slug} className={styles.entry}><p className="eyebrow">{libraryPreview && article.status === "approved" ? "Approved · Awaiting publication" : libraryPreview && article.status !== "published" ? "Draft for review" : "Reference essay"}</p><h2><a href={libraryArticlePath(article)}>{article.title}</a></h2><p>{article.excerpt}</p><a className="text-link" href={libraryArticlePath(article)}>Read the article</a></article>)}</div> : <p className={styles.empty}>No articles are published in this category yet.</p>;
}
export function LibraryClosingInvitation() {
  return <aside className={styles.invitation} aria-labelledby="library-invitation"><h2 id="library-invitation">Have a project in mind?</h2><p>Whether you’re restoring a home’s original character or imagining something entirely new, Studio Dee can help bring your ideas to life.</p><a className="text-link" href="/start-a-project">Start a Project</a></aside>;
}
