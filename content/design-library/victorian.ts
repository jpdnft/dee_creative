import type { LibraryArticle, LibraryFigure } from "./types.ts";

const figure = (id: string, title: string, caption: string, alt: string): LibraryFigure => ({
  id, title, caption, alt,
  brief: `Educational architectural illustration: ${title}. A fictional design, not a named building or Studio Dee project.`,
  kind: "generated", src: `/api/design-library-images/victorian-${id}.webp`, width: 1536, height: 1024,
  credit: "Image provided by Studio Dee", license: "Generated for Studio Dee; not documentary photography", approvedAt: "2026-10-25",
});

const thumbnail = (id: string, title: string, alt: string): LibraryFigure => ({
  id: `snapshot-${id}`, title, alt,
  brief: `Small hand-colored engraving-style illustration for the ${title} summary item.`,
  caption: `An editorial illustration for ${title}.`,
  kind: "generated", src: `/api/design-library-images/victorian-snapshot-${id}.webp`, width: 384, height: 256,
  credit: "Image provided by Studio Dee", license: "Generated for Studio Dee; not documentary photography", approvedAt: "2026-10-25",
});

export const victorian: LibraryArticle = {
  slug: "victorian", category: "architectural-styles", title: "Victorian Architecture",
  excerpt: "One era, several architectural languages: how to read the roofs, rooms, and details of a Victorian house.",
  description: "A guide to Victorian residential architecture, from Italianate and Second Empire to Queen Anne, with Pacific Northwest context, identifying features, colors, and materials.",
  status: "approved", contentApprovedAt: "2026-10-25", author: "Dee Creative Enterprises", publisher: "Dee Creative Enterprises, LLC", lastReviewed: "2026-10-25",
  introduction: "A bracket beneath an eave, a bay that turns toward the street, a porch worked into a delicate screen: Victorian houses invite you to look closely. Yet the label tells you less than it first appears to. A quiet Italianate house and a richly textured Queen Anne can both be Victorian. Understanding the difference makes their details more interesting—and decisions about their future more thoughtful.",
  snapshot: {
    illustrationNote: "Thumbnail illustrations are editorial interpretations; Victoria’s portrait is an imagined historical likeness.",
    facts: [
      { label: "When", text: "The name refers to Victoria’s reign, 1837–1901; American style dates overlap and sometimes extend later.", image: thumbnail("when", "When", "An imagined engraved portrait of Queen Victoria wearing a white veil and dark dress.") },
      { label: "The idea", text: "An era of several styles, shared through publications and an expanding market for architectural ornament.", image: thumbnail("idea", "The idea", "An illustrative pattern book showing house designs beside turned wood spindles and a shaped bracket.") },
      { label: "First question", text: "Which Victorian language does this house speak? Start with its roof and overall form.", image: thumbnail("roof", "First question", "A steep gable with patterned shingles and decorative vergeboard beside a lower roof.") },
    ],
    features: [
      { label: "Italianate", text: "Low roof, bracketed cornice, and tall, narrow windows.", image: thumbnail("italianate", "Italianate", "An Italianate house with a low hipped roof, paired brackets, and tall arched windows.") },
      { label: "Second Empire", text: "A mansard roof with a steep lower slope and dormer windows.", image: thumbnail("empire", "Second Empire", "A Second Empire house with a slate-colored mansard roof and dormer windows.") },
      { label: "Queen Anne", text: "An irregular silhouette, projecting bays, porches, and varied wall textures.", image: thumbnail("queen-anne", "Queen Anne", "A Queen Anne house with cross-gables, projecting bay, patterned shingles, and a turned-post porch.") },
    ],
    distinction: "Victorian is an umbrella term, not one style. A tower is not required, and a colorful paint scheme does not establish a house’s age or identity.",
    sources: ["victoria", "italianate", "empire", "queen-anne"],
  },
  recognition: {
    section: "materials-and-color",
    colors: [
      { name: "Warm buff", hex: "#c5ad83", use: "A restrained neutral color family." },
      { name: "Ochre", hex: "#a98645", use: "An earthy yellow-brown for layered schemes." },
      { name: "Olive", hex: "#717451", use: "A muted green, rather than a uniformly bright palette." },
      { name: "Russet", hex: "#884d3c", use: "A deeper red-brown color family." },
      { name: "Deep green", hex: "#34473e", use: "A dark accent option for sash and doors." },
    ],
    materials: [
      { name: "Wood siding & shingles", detail: "Clapboards and patterned shingles can distinguish adjoining wall areas." },
      { name: "Milled wood trim", detail: "Brackets, turned porch elements, and applied boards vary by style." },
      { name: "Brick & stone", detail: "Masonry examples exist; a Victorian house need not be wood-framed." },
      { name: "Glass & plaster", detail: "Decorative glazing in some houses; plaster and finished wood within." },
    ],
    note: "These are illustrative color families, not a single Victorian palette or documented paint matches. Ipswich’s historical color guide distinguishes quieter early schemes from stronger later contrasts. Region, date, style, and surviving evidence matter more than a generic color chart.",
    sources: ["ipswich", "queen-anne", "interiors"],
  },
  hero: figure("exterior", "A Queen Anne reading of the Victorian house", "Cross gables, a projecting bay, patterned shingles, and a light porch screen give this Queen Anne illustration its layered character.", "Olive-painted Queen Anne house with cross gables, a polygonal bay, patterned shingles, and a porch with turned posts."),
  sections: [
    {
      id: "an-era-not-one-style", heading: "An era, rather than a single style",
      paragraphs: [
        "The Victorian era takes its name from Queen Victoria, who reigned in Britain from 1837 to 1901. American architectural usage gathers several nineteenth-century styles beneath that label. Their timelines do not fit neatly inside the reign: Pennsylvania’s architectural field guide, for example, dates Queen Anne from 1880 to 1910. The term is useful as an introduction, but a specific style name usually explains a building more precisely.",
        "That distinction changes how you look. Symmetry, roof shape, window proportions, wall texture, and the treatment of the porch can tell different stories within the same broad period. An ornate bracket is one piece of evidence, not a complete diagnosis. Begin with the whole building, then move closer. A later porch or replacement window may be a chapter in its history rather than a reliable guide to its original design.",
      ], sources: ["victoria", "queen-anne"],
    },
    {
      id: "italianate", heading: "Italianate: the cornice sets the rhythm",
      paragraphs: [
        "Italianate architecture draws on a romantic interpretation of Italian buildings. Its recurring signals are a relatively low roof, a pronounced cornice with brackets, and tall, narrow windows. Elaborate window heads may be arched or framed by small pediments. A square tower belongs to some villa examples, but it is not necessary to identify the broader style. The Pennsylvania guide also records its use in townhouses and commercial buildings as well as freestanding houses.",
        "Read the spacing of brackets and windows together. In a successful composition, the upper edge gives the wall a deliberate finish, while the openings sustain its vertical proportions. A replacement window of a different shape can change that balance even when its dimensions seem only slightly different. For contemporary work, this is a reason to study the entire elevation before choosing trim from an isolated photograph.",
      ], sources: ["italianate"],
      figure: figure("italianate", "The bracketed cornice", "A low roof and bracketed cornice distinguish this Italianate illustration from the steeper Queen Anne silhouette.", "Italianate house with a low hipped roof, paired cornice brackets, tall windows, and a restrained entry porch."),
    },
    {
      id: "second-empire", heading: "Second Empire: start at the mansard",
      paragraphs: [
        "The mansard roof is the clearest starting point for Second Empire architecture. Its steep lower slope, commonly punctuated by dormer windows, allows usable space within the roof. The style takes its name from France’s Second Empire under Napoleon III. It shares some bracketed cornices and other details with Italianate buildings, but the roof gives it a different profile. Decorative dormers and iron cresting may reinforce that silhouette without being present in every example.",
        "When comparing houses, draw the roof outline before drawing any ornament. The exercise makes the difference between a mansard and a conventional steep gable immediately legible. It also helps explain why adding elaborate trim to an unrelated building cannot reproduce the same architectural effect. The form establishes the character that the ornament elaborates.",
      ], sources: ["empire"],
      figure: figure("mansard", "A roof that contains a story", "Dormers occupy the steep lower slope of the mansard in this Second Empire illustration.", "Second Empire house with a slate-colored mansard roof, dormer windows, bracketed cornice, and a small entry porch."),
    },
    {
      id: "queen-anne", heading: "Queen Anne: a composition of projections and textures",
      paragraphs: [
        "Queen Anne is the image many Americans associate most readily with a Victorian house. Look for an irregular roofline, an asymmetrical facade, projecting bays, and a porch that negotiates those changes in form. Patterned shingles or other changes in surface texture can distinguish a gable from the wall beneath it. Some examples have towers, but the style also works at the scale of a modest house. Its identity does not depend on a turret.",
        "The layers matter because they change what you see as you move. A bay catches light from another direction; a porch partly screens the entrance; a change in cladding gives an upper wall a different visual weight. For a homeowner, those relationships are more useful to understand than the idea that Victorian architecture simply means adding more decoration. An overcomplicated paint scheme can make a thoughtful composition harder to read.",
      ], sources: ["queen-anne"],
    },
    {
      id: "other-victorian-languages", heading: "Gothic, Stick, and Shingle: different kinds of emphasis",
      paragraphs: [
        "Gothic Revival turns attention toward steep gables and pointed openings. Clackamas County’s historical guide describes regional houses with jigsawn porch and eave trim, alongside plainer vernacular adaptations. A simple farmhouse may therefore share an architectural lineage with a more elaborate example without carrying the same amount of ornament. The absence of delicate trim today does not, by itself, reveal what was originally present.",
        "Stick style emphasizes bands of applied wood arranged vertically, horizontally, or diagonally across wall surfaces and gables. These lines should not automatically be described as exposed framing: the Pennsylvania guide identifies the stickwork as decorative trim. Shingle style takes another approach, giving greater continuity to the wall surface through wood shingles. Historic Wallingford describes Pacific Northwest examples from the late 1890s and early 1900s, with less emphasis on individually accented details.",
        "These distinctions are useful when a house has been altered. A new layer of siding can conceal a patterned surface; a simplified porch can obscure an earlier rhythm. Before recreating missing ornament, look for photographs or physical evidence of its position and scale. Guessing from a neighbor’s house risks exchanging one building’s character for another’s.",
      ], sources: ["clackamas", "stick", "wallingford"],
      figure: figure("detail", "Pattern made with wood", "Applied boards and a textured gable demonstrate a decorative surface treatment; they are not a diagram of structural framing.", "Close view of a wood-sided Victorian gable with applied trim boards and carefully fitted decorative details."),
    },
    {
      id: "materials-and-color", heading: "Materials and color: give the parts a hierarchy",
      paragraphs: [
        "A Victorian color scheme should help explain the building. Decide which surfaces belong to the body, which elements define edges, and which details deserve emphasis. Giving every molding a separate color can fragment a facade. A smaller number of well-related tones may make its depth and proportions more evident, even when the building contains a great deal of ornament.",
        "Historical palettes were not uniform. Ipswich’s municipal color guide describes relatively restrained early treatments and increasingly varied later schemes, including earth-derived colors and darker accents. Inside, the National Park Service records changing preferences for paint, stains, and clear finishes. For an individual house, a dated photograph or careful finish investigation is more persuasive than a palette marketed under a period name. Distinguish a contemporary interpretation from a restoration to a documented date.",
      ], sources: ["ipswich", "interiors"],
    },
    {
      id: "interiors", heading: "Read the interior as a sequence",
      paragraphs: [
        "An interior deserves the same attention to relationships as the facade. Look at the entrance, the stair, the openings between rooms, and the way trim meets a mantel or a built-in. A staircase can organize a hall visually as well as physically. A pair of doors can make two rooms feel connected while preserving their separate scale. These are observations to make in the actual building, not features guaranteed by a Victorian label.",
        "For adaptation, begin with the activities that need accommodation. A reading room may need better task lighting rather than a removed partition. A dining room may benefit from storage fitted around an existing opening rather than a new wall of unrelated cabinetry. Lay out furniture and circulation before deciding that every boundary is an obstacle. Conversely, an alteration may be useful when the existing arrangement cannot serve the household well. Document what matters before changing it.",
        "Avoid assuming that every interior surface should become either exposed wood or white paint. Surviving finishes and the character of the room should inform the choice. Work with samples viewed beside the actual floor, wall, and daylight; a finish that looks convincing on its own can behave very differently across a whole room.",
      ], sources: ["interiors"],
      figure: figure("interior", "The stair gives the hall its structure", "A stair, door surrounds, and connected openings establish the scale of this illustrative interior without recreating a named historic room.", "Victorian-inspired entrance hall with a wood staircase, turned balusters, plaster walls, and a view into an adjoining room."),
    },
    {
      id: "pacific-northwest", heading: "A Northwest history with local variations",
      paragraphs: [
        "Victorian architecture in the Pacific Northwest belongs to local building histories, not simply to an imported picture-book image. Clackamas County’s guide identifies Italianate houses in Oregon during the 1870s and 1880s, followed by Queen Anne’s popularity in the 1890s. Its account describes how manufactured ornament reached even relatively modest houses. The result was variation in ambition, budget, and detail within the same architectural family.",
        "Two Oregon museum houses offer specific points of reference: the Shelton McMurphey Johnson House in Eugene, built in 1888 and identified by its museum as Queen Anne Revival; and Deepwood in Salem, built in 1894 for Dr. Luke A. Port to a design by William C. Knighton. Deepwood’s own history records later alterations as well. Such buildings are useful precisely because their documented lives are more complicated than one style label. The generated figures in this article do not depict either property.",
      ], sources: ["clackamas", "smj", "deepwood"],
    },
    {
      id: "living-with-the-house", heading: "Living with the house you have",
      paragraphs: [
        "The most useful starting point is a measured account of the building in front of you. Identify its style or combination of styles, distinguish surviving details from replacements, and decide which relationships give it character. A missing bracket, an awkward light fixture, and an impractical kitchen are different problems. They need not all be answered by the same degree of intervention.",
        "New work can be contemporary while acknowledging the house’s scale, alignments, and material transitions. What matters is that the choice has a reason and is described honestly. Study where an addition meets the existing wall, how a new opening sits beside an old one, and whether a storage element respects a room’s usable space. A Victorian house becomes easier to live with when its history informs those decisions without substituting for them.",
      ],
    },
  ],
  references: [
    { id: "victoria", title: "Victoria (r. 1837–1901)", publisher: "The Royal Family", url: "https://www.royal.uk/encyclopedia/victoria-r-1837-1901", note: "Reign dates; architectural style dates are treated separately." },
    { id: "italianate", title: "Italianate Villa/Italianate Style 1840–1885", publisher: "Pennsylvania Historical & Museum Commission", url: "https://www.phmc.state.pa.us/portal/communities/architecture/styles/italianate.html", note: "Bracketed cornices, windows, roofs, and variations in form." },
    { id: "empire", title: "Second Empire/Mansard Style 1860–1900", publisher: "Pennsylvania Historical & Museum Commission", url: "https://www.phmc.state.pa.us/portal/communities/architecture/styles/second-empire.html", note: "French context and identifying mansard/dormer features." },
    { id: "queen-anne", title: "Queen Anne Style 1880–1910", publisher: "Pennsylvania Historical & Museum Commission", url: "https://www.phmc.state.pa.us/portal/communities/architecture/styles/queen-anne.html", note: "Massing, roof, porch, texture, and dissemination." },
    { id: "stick", title: "Stick Style 1860–1890", publisher: "Pennsylvania Historical & Museum Commission", url: "https://www.phmc.state.pa.us/portal/communities/architecture/styles/stick.html", note: "Applied decorative woodwork distinguished from structural framing." },
    { id: "clackamas", title: "A guide to historic building types and architectural styles in Clackamas County", publisher: "Clackamas County", url: "https://www.clackamas.us/planning/historicclackamas.html", note: "Oregon chronology, Gothic vernacular adaptation, and manufactured ornament." },
    { id: "wallingford", title: "Residential Architecture: Styles and Forms", publisher: "Historic Wallingford", url: "https://www.historicwallingford.org/learn/architecture-styles/", note: "Regional Shingle-style examples and emphasis on continuous wall surfaces." },
    { id: "ipswich", title: "Part II: Victorian 1840–1900", publisher: "Ipswich Historical Commission", url: "https://www.ipswichma.gov/DocumentCenter/View/10184/Part-II---Victorian-1840-1900", note: "Historical color-family distinctions. Swatches in this article are illustrative, not exact matches." },
    { id: "interiors", title: "Preservation Brief 28: Painting Historic Interiors", publisher: "National Park Service", url: "https://www.nps.gov/orgs/1739/upload/preservation-brief-28-painting-interiors.pdf", note: "Sara B. Chase. Historic surface/finish variation and investigation. Contemporary design suggestions in this article are editorial analysis." },
    { id: "smj", title: "Memberships: About the House", publisher: "Shelton McMurphey Johnson House", url: "https://smjhouse.org/support/memberships/", note: "Museum identifies the 1888 house as Late Victorian Queen Anne Revival." },
    { id: "deepwood", title: "Families of Deepwood", publisher: "Deepwood Museum & Gardens", url: "https://deepwoodmuseum.org/about/families/", note: "1894 construction for the Port family, Knighton attribution, and later renovations." },
  ],
  related: ["craftsman"], furtherReading: [],
};
