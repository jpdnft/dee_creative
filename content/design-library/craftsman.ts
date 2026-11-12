import type { LibraryArticle, LibraryFigure } from "./types.ts";

const figure = (id: string, title: string, brief: string, caption: string, alt: string): LibraryFigure => ({
  id, title, brief, caption,
  alt: alt.replace(/^Proposed /, ""),
  kind: "generated",
  src: `/api/design-library-images/craftsman-${id}.webp`, width: 1536, height: 1024,
  credit: "Image provided by Studio Dee",
  sourceUrl: undefined,
  license: "Generated for Studio Dee; not documentary photography",
  approvedAt: "2026-10-25",
});

export const craftsman: LibraryArticle = {
  slug: "craftsman",
  category: "architectural-styles",
  title: "Craftsman Architecture",
  excerpt: "Reading the roof, the porch, and the rooms within: a guide to a house shaped by materials and the work of making.",
  description: "Explore Craftsman architecture through its Arts and Crafts origins, characteristic exterior details, interior relationships, materials, and thoughtful adaptation.",
  status: "published",
  contentApprovedAt: "2026-10-25",
  publicationAuthorizedAt: "2026-11-11",
  publishedAt: "2026-11-11",
  author: "Dee Creative Enterprises",
  publisher: "Dee Creative Enterprises, LLC",
  lastReviewed: "2026-10-25",
  introduction: "A Craftsman house often makes its first impression through shelter: a roof reaching beyond the walls, a porch with substantial supports, a doorway held back in shade. Before you notice a particular bracket or window, you notice the relationship between the house and the place where you stand. Its character comes from those relationships as much as from its details.",
  snapshot: {
    diagram: "house",
    facts: [
      { label: "When", text: "Especially associated with the early 1900s through the 1920s." },
      { label: "The idea", text: "Architecture, furnishings, and materials considered together; craft made visible." },
      { label: "Look for", text: "A combination of sheltering roof, substantial porch, and expressive woodwork." },
    ],
    features: [
      { label: "A broad roof", text: "A low-pitched roof and deep overhangs establish the silhouette." },
      { label: "Visible details", text: "Exposed rafter tails and brackets give the roof edge its rhythm." },
      { label: "A sheltered porch", text: "Square or tapered posts often meet brick or stone bases." },
    ],
    distinction: "Craftsman describes a design language. Bungalow describes a house form. They often overlap, but one does not guarantee the other.",
    sources: ["pennsylvania", "met", "houston"],
  },
  recognition: {
    section: "materials",
    colors: [
      { name: "Muted green", hex: "#74745f", use: "A subdued, nature-related body color." },
      { name: "Earth brown", hex: "#6b5341", use: "Timber tones and darker painted surfaces." },
      { name: "Warm ochre", hex: "#a18350", use: "An earthy yellow-brown color family." },
      { name: "Brick red", hex: "#914f3f", use: "Masonry color or a restrained accent." },
      { name: "Soft cream", hex: "#e9dfc9", use: "A lighter trim option in an illustrative scheme." },
    ],
    materials: [
      { name: "Wood", detail: "Horizontal siding or shingles outside; trim and cabinetry within." },
      { name: "Brick & stone", detail: "Often visible in porch bases, chimneys, and fireplace surrounds." },
      { name: "Stucco", detail: "Another documented exterior finish; wood cladding is not universal." },
      { name: "Divided-light glass", detail: "Multi-pane windows contribute to the pattern of the facade." },
    ],
    note: "These swatches illustrate color families, not authenticated paint matches or one universal historic palette. Long Beach’s preservation guide describes darker, neutral, and earth-toned finishes historically, and lighter schemes in later use. Color alone does not identify a Craftsman house; judge the form and details together.",
    sources: ["longbeach", "pennsylvania"],
  },
  hero: figure("exterior", "A house beneath its roof", "Landscape 3:2 exterior at pedestrian eye level. Show a plausible early-twentieth-century Craftsman bungalow, broad eaves, visible rafter tails, and a recessed porch with substantial masonry bases. Soft daylight; no exaggerated timber sizes, signage, cars, or invented historic attribution. Prefer a licensed documentary photograph with a verified location; a generated alternative must be captioned as an illustration.", "A broad roof and recessed porch establish the sheltered threshold characteristic of many Craftsman houses.", "Proposed view of a Craftsman bungalow showing broad eaves, a recessed porch, and masonry porch bases."),
  sections: [
    {
      id: "origins", heading: "An argument about how things are made",
      paragraphs: [
        "Craftsman architecture belongs within the wider Arts and Crafts movement, whose British origins involved a critique of industrial labor and the quality of manufactured goods. Writers and designers including John Ruskin and William Morris connected the making of objects with larger questions about work and everyday life. The movement was never simply a prescription for brown wood and handmade tile. It asked what a well-made environment could mean for the people who produced it and lived within it.",
        "In the United States, those ideas took several forms. Gustav Stickley helped give the Craftsman name a recognizable public identity through furniture and The Craftsman magazine, published from 1901 to 1916. His version of domestic design brought furnishings and architecture into the same conversation. The V&A describes American practice as generally more commercial than its European counterparts: an important reminder that shared ideals did not produce identical approaches on either side of the Atlantic.",
      ], sources: ["met", "va"],
    },
    {
      id: "style-and-form", heading: "Craftsman is a style; bungalow is a form",
      paragraphs: [
        "The words overlap so frequently that they can seem interchangeable. They answer different questions. Bungalow describes a house form, commonly low in profile, with a prominent porch. Craftsman describes an architectural language that can appear on a bungalow or on a larger house. Houston’s preservation guidance explicitly identifies Craftsman details on other modest house forms as well. Calling every bungalow a Craftsman erases useful distinctions; calling every Craftsman a bungalow does the same.",
        "When looking at a house, separate its organization from its treatment. First ask about height, roof arrangement, porch, and plan. Then look at the eaves, supports, window divisions, and materials. This two-step reading is more useful than finding one tapered column and assigning a style to the entire building. Alterations can complicate the evidence, so a label should remain open to revision when drawings, photographs, or closer inspection reveal more.",
      ], sources: ["houston", "longmont"],
      figure: figure("porch", "The porch as a room", "Landscape view from the edge of a Craftsman porch toward its entry, including the depth beneath the roof, a substantial support, and space for a chair without obstructing the doorway. Prefer licensed documentary photography with verified building identity. Do not invent an original date or architect. A generated alternative must be labeled as an architectural illustration.", "A porch is easier to understand in depth: roof, supports, and entrance together define the space between street and interior.", "Proposed porch view showing the sheltered route between steps and front door."),
    },
    {
      id: "exterior", heading: "Read the roof before the ornament",
      paragraphs: [
        "Broad overhangs, low-pitched roofs, exposed rafter ends, and substantial porch supports are recurring Craftsman features. The Pennsylvania architectural field guide records variations in roof form, columns, and cladding rather than one mandatory arrangement. A front gable is familiar, but side gables and hipped roofs also occur. Wood shingles and horizontal siding belong to the vocabulary alongside brick, stone, and stucco. The family resemblance matters more than a checklist completed in every example.",
        "Look at the depth of the eave and the shadow it produces. Follow the porch supports downward: do their proportions feel connected to the base and roof above? Notice whether window groups reinforce the house’s horizontal rhythm. These are ways to understand a composition, rather than rules for copying it. A modest house may make its point with very little ornament, while another uses brackets and shaped timber ends more emphatically.",
        "Consider the porch from within as well as from the street. Is there enough depth to sit beside the path to the door? Does a support frame a view or interrupt it? For a proposed alteration, draw the furniture and the route people will take before deciding where a new post belongs. A facade can look balanced on paper while the space behind it feels awkward to occupy. Testing both views helps keep the porch useful.",
        "Visible woodwork can suggest construction without explaining it completely. Before describing a bracket as load-bearing, establish what it actually supports. For a renovation, this distinction becomes practical: an apparently decorative piece may conceal a connection, while an imposing beam may be applied trim. Appearance alone cannot settle a structural question.",
      ], sources: ["pennsylvania"],
      figure: figure("eave", "Where roof meets wall", "Close, oblique view beneath a real Craftsman eave. Show rafter tails, roof plane, wall cladding, and one bracket in intelligible relationship. Avoid claiming structural function without documentation. Use a licensed detail photograph or an explicitly labeled architectural illustration.", "An eave detail makes the relationship between roof, rafters, and wall easier to read; visible form alone does not establish structural function.", "Proposed close view of exposed rafter tails beneath an overhanging roof."),
    },
    {
      id: "interiors", heading: "Rooms with boundaries, and connections",
      paragraphs: [
        "The Pennsylvania guide describes interconnected rooms and an entrance that often leads directly into living space. That is a useful starting point, but it should not be confused with today’s completely open plan. When evaluating an interior, look for the devices that let adjacent spaces communicate while retaining their own scale: an opening, a change in ceiling treatment, or a piece of cabinetry that frames the view.",
        "A built-in bookcase can do more than hold books. Positioned carefully, it gives an opening thickness and makes the transition between rooms feel deliberate. A window seat can turn the edge of a room into an inhabited place. These are useful design possibilities, not proof that every Craftsman house originally contained them. Surviving fabric and reliable records should guide any claim about a particular interior.",
        "For new work, begin with the room’s alignments. A cabinet head that acknowledges a nearby doorway may feel more settled than one chosen solely to maximize storage. Consider the depth of shelves, the passage beside them, and what someone sees from the next room. The aim is a coherent room, not the largest possible collection of recognizable period details.",
      ], sources: ["pennsylvania"],
      figure: figure("rooms", "An opening with depth", "Eye-level interior looking between two connected rooms. Show an intelligible opening framed by restrained woodwork and low bookcases; daylight from a visible window, believable circulation, limited furnishings. Treat as a generated design illustration unless documentary provenance is established. No claim of an original or restored historic interior.", "An opening framed by low cabinetry connects two rooms while preserving a sense of enclosure.", "Interior view through a wood-trimmed opening with low built-in bookcases and a dining room beyond."),
    },
    {
      id: "materials", heading: "Material is part of the composition",
      paragraphs: [
        "Stickley’s Craftsman Farms offers a particularly direct example of material and setting considered together. The museum describes its Log House as using chestnut logs cut from the property and local stone. This is a specific building, not a universal materials schedule for the style. Its value as a reference lies in the relationship between the chosen materials, the place, and the architectural idea.",
        "In an existing house, first identify what is there. Species, finish, previous repairs, and lighting all affect the appearance of wood. Do not assume a dark surface is a deliberate original stain, or that every painted component conceals wood intended for clear finishing. Investigation should precede a stripping or refinishing decision. A sample assessed in the actual room tells you more than a small swatch viewed elsewhere.",
        "The same care applies to color. For a contemporary interpretation, muted greens, clay tones, warm neutrals, or deeper accents can be explored as design choices; they are not an authenticated palette for an individual house. If historical accuracy is the goal, use building-specific evidence and appropriate paint investigation. If adaptation is the goal, judge color beside the actual masonry, timber, daylight, and adjacent rooms.",
      ], sources: ["farms"],
      figure: figure("materials", "Wood, masonry, and reflected light", "Detail composition of wood trim meeting a masonry fireplace surround in a plausible interior. Show junctions, surface texture, and restrained color; no fake sample names or product claims. A caption must distinguish a contemporary illustrative palette from a documented historic one.", "A material study should show how surfaces meet and receive light, rather than imply one universal Craftsman palette.", "Proposed material study of wood trim beside a masonry fireplace surround."),
    },
    {
      id: "examples", heading: "Two examples, different ambitions",
      paragraphs: [
        "The Gamble House in Pasadena demonstrates the reach of a highly individual architectural commission. Designed by Charles and Henry Greene, it belongs to a different scale of patronage from the ordinary neighborhood bungalow. The Gamble House’s own timeline dates the beginning of construction to March 1908 and completion to January 1909. Its broader cultural context includes Japanese influence, discussed in Houston’s account of the Greene brothers’ work. That influence deserves specific attention rather than being treated as a vague synonym for simplicity.",
        "Craftsman Farms in New Jersey offers another point of reference. Stickley initially conceived its main house as a gathering place associated with a proposed farm school, before adapting it for his family. Read alongside the Gamble House, it helps dispel the idea that Craftsman architecture was one fixed plan or price point. For a homeowner, neither example needs to become a shopping list. Study a particular relationship—a threshold, a material transition, a window and its surrounding woodwork—and ask why it works in that building.",
      ], sources: ["huntington", "gamble", "houston", "farms"],
    },
    {
      id: "adaptation", heading: "Carry the logic forward",
      paragraphs: [
        "A useful contemporary interpretation begins with the house you have. Decide what deserves preservation, what is a later alteration, and what daily life now requires. Those questions may lead to a restrained addition, improved lighting, or carefully fitted storage rather than a complete stylistic makeover. Record existing conditions before removing anything; once a detail is gone, a photograph may be the only evidence of how it met its neighbors.",
        "Scale is an especially useful test. A new mantel can borrow the broad outlines of a Craftsman example and still overwhelm a smaller room. A thick casing can look convincing in isolation yet crowd a corner or conflict with a nearby window. Test the proposal through elevations, samples, or a full-size mock-up where appropriate. Look from seated positions as well as from the doorway.",
        "Comfort also depends on things the style label does not resolve: reading light, storage needs, usable passages, and the practicalities of maintenance. Let those needs shape the intervention. Concealed equipment and discreet contemporary lighting can be considered without inventing a historical justification for them. Where new work meets old, aim for a clear, respectful relationship and describe it honestly.",
        "The most useful lesson of Craftsman architecture is a habit of attention. Notice how a roof shelters an entrance, how an opening sets the scale of a room, and how two materials meet. An addition earns its place when those relationships improve. Recognizable details can contribute, but they cannot do that work on their own.",
      ],
    },
  ],
  references: [
    { id: "met", title: "The Arts and Crafts Movement in America", publisher: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/essays/the-arts-and-crafts-movement-in-america", note: "Monica Obniski, 2008. British intellectual origins and the wider American movement." },
    { id: "va", title: "Arts and Crafts: beyond the UK", publisher: "Victoria and Albert Museum", url: "https://www.vam.ac.uk/articles/arts-and-crafts-beyond-the-uk", note: "Stickley, The Craftsman (1901–1916), and the commercial context of American practice." },
    { id: "pennsylvania", title: "Bungalow/Craftsman Style 1900–1930", publisher: "Pennsylvania Historical & Museum Commission", url: "https://www.phmc.state.pa.us/portal/communities/architecture/styles/bungalow.html", note: "Archived architectural field guide: exterior vocabulary, material variation, and connected rooms." },
    { id: "houston", title: "Freeland: Architectural Styles", publisher: "City of Houston", url: "https://www.houstontx.gov/planning/HistoricPres/HistoricPreservationManual/historic_districts/freeland_arch.html", note: "Distinguishes house form from Craftsman details; discusses the Greenes and Japanese influence." },
    { id: "longmont", title: "Bungalow Style", publisher: "City of Longmont", url: "https://longmontcolorado.gov/planning-and-development-services/historic-preservation/bungalow-style/", note: "Bungalow scale and roof/porch variations in a regional preservation context." },
    { id: "farms", title: "History", publisher: "The Stickley Museum at Craftsman Farms", url: "https://www.stickleymuseum.org/history/", note: "Log House materials, original intended use, and adaptation for the Stickley family." },
    { id: "gamble", title: "Construction Begins", publisher: "The Gamble House", url: "https://gamblehouse.org/construction-begins/", note: "Construction chronology: March 1908 to January 1909." },
    { id: "huntington", title: "A New and Native Beauty: The Art and Craft of Greene & Greene", publisher: "The Huntington", url: "https://www.huntington.org/exhibition/new-and-native-beauty-art-and-craft-greene-greene", note: "Gamble House architect attribution and the Greenes’ coordinated architecture and furnishings." },
    { id: "longbeach", title: "Craftsman Style Guide: Paint Colors", publisher: "City of Long Beach", url: "https://www.longbeach.gov/globalassets/lbcd/media-library/documents/planning/historic-preservation/district-maps/guidelines/chapter-4-3_craftsman", note: "Page 12: historical dark, neutral, and earth-toned exterior finishes; lighter later schemes. Swatches here are editorial approximations, not historic color specifications." },
  ],
  related: [],
  furtherReading: [{ title: "What makes a built-in feel like architecture?", href: "/journal/what-makes-a-built-in-feel-like-architecture" }],
};
