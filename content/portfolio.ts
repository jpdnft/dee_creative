export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type PortfolioProject = {
  id: string;
  order: number;
  title: string;
  category: string;
  description: string[];
  images: PortfolioImage[];
  tags: string[];
};

// Add a record for each project. Lower order values appear first; image order is
// the order shown within the section. Background tones alternate automatically.
export const portfolio: PortfolioProject[] = [
  {
    id: "cedar-sauna",
    order: 10,
    title: "A cedar retreat, built around ritual.",
    category: "European-inspired sauna",
    description: [
      "One of Jim’s early construction projects explored the sauna as an architectural experience: an inviting threshold, the warmth of timber, and a generous interior designed for shared use.",
      "With room for six to eight people and four benches, the sauna was built with 100% clear cedar from Montana and a heater imported from Scandinavia. Material, scale, and a sense of retreat come together in a space made for slowing down.",
    ],
    images: [
      { src: "/images/saunaentry3.jpg", alt: "Warmly lit sauna entry with a cedar doorway, lounge chair, and integrated towel storage", width: 1536, height: 1024, caption: "The threshold sets the tone for the experience beyond." },
      { src: "/images/sauna3.jpg", alt: "Clear cedar sauna interior with tiered benches and a Scandinavian sauna heater", width: 1448, height: 1086, caption: "Clear Montana cedar, four benches, and space for six to eight." },
    ],
    tags: ["Residential wellness", "Clear cedar", "European influence", "Custom construction"],
  },
  {
    id: "bungalow-entry",
    order: 20,
    title: "An arrival becomes architecture.",
    category: "Portland bungalow / Custom built-in",
    description: [
      "An entry can do more than receive coats and shoes. For this Portland bungalow, Jim designed and built a floor-to-ceiling composition that gives the everyday rituals of coming home an architectural setting.",
      "A built-in armoire anchors the arrangement, joined by a small seating and plant area, coat and shoe cubbies beside the door, and bookshelving above. Entirely custom-designed and made for the home, the unit brings display, storage, and a welcoming focal point into one considered whole.",
    ],
    images: [{ src: "/images/entry3.jpg", alt: "Floor-to-ceiling bungalow entry built-in with an armoire, window seating area, coat and shoe cubbies, and upper bookshelves", width: 1448, height: 1086 }],
    tags: ["Architectural storage", "Bungalow character", "Floor-to-ceiling millwork", "Custom design & build"],
  },
  {
    id: "psychedelic-pie-safe",
    order: 30,
    title: "An old artifact. An unexpected new life.",
    category: "19th-century pie safe / Mixed-media reinvention",
    description: [
      "A nineteenth-century pie safe becomes a highly personal piece of functional art. Jim reimagined its familiar form through a maximalist, psychedelic composition of flowing blue, black, and silver.",
      "He developed the design, painted the piece, and designed and made every custom stained-glass panel. The result brings furniture, pattern, and glasswork together—retaining the presence of an old object while giving it an entirely different voice.",
    ],
    images: [{ src: "/images/armoire3.jpg", alt: "Reimagined nineteenth-century pie safe with flowing blue and silver paintwork and custom stained-glass doors", width: 1448, height: 1086 }],
    tags: ["Furniture reimagined", "Custom stained glass", "Maximalism", "Psychedelic pattern", "Mixed media"],
  },
  {
    id: "metallic-gold-foyer",
    order: 40,
    title: "A confident welcome in metallic gold.",
    category: "Interior color / Residential transformation",
    description: [
      "Metallic gold walls bring a luminous counterpoint to dark woodwork, glazed doors, and the strong lines of the stair. Part of a home Jim fully renovated, this foyer shows how a deliberate color decision can amplify the architecture already present.",
      "The home sold for tens of thousands above recent local comparable sales. Its distinctive character offers an example of the potential in thoughtful, bold design—and a reason to look beyond the expected neutral palette.",
    ],
    images: [{ src: "/images/foyer3.jpg", alt: "Metallic gold foyer walls paired with dark stained wood stairs, leaded-glass doors, and a silver radiator", width: 1448, height: 1086 }],
    tags: ["Bold color", "Metallic finishes", "Retained architecture", "Whole-home renovation"],
  },
  {
    id: "living-room-color-study",
    order: 50,
    title: "The color that brought the room together.",
    category: "Interior painting / Digital color exploration",
    description: [
      "The transformation of this living room began with a deceptively simple question: which wall color would let the whole space feel resolved? Warm brown became the connecting thread between white architectural trim, the fireplace, timber floors, and light upholstery.",
      "To find it, Jim isolated the walls on a separate Photoshop layer and manually explored the color wheel while keeping the rest of the photograph unchanged. When this shade appeared, it was an ‘OMG’ moment. A hands-on digital experiment helped turn a difficult color decision into a clear direction for the interior painting.",
    ],
    images: [{ src: "/images/livingroom3.jpg", alt: "Transformed living room with warm brown walls, white trim and fireplace, timber floors, and neutral seating", width: 1448, height: 1086 }],
    tags: ["Color composition", "Interior painting", "Photoshop visualization", "Architectural character"],
  },
  {
    id: "reclaimed-cedar-shed",
    order: 60,
    title: "A second life for well-found materials.",
    category: "Standalone shed / Reclaimed construction",
    description: [
      "Jim’s first complete standalone shed brought a resourceful approach to 144 square feet of post-and-beam construction. Cedar cladding gives the exterior a warm, cohesive finish, while reclaimed materials throughout tell a story of looking closely at what others might overlook.",
      "The 5-by-5 beams came from a farm outside Portland for very little cost. The sliding door and windows were rescued from a local apartment renovation, where they were destined for disposal. Finding a place for those elements became part of the design itself: a small building shaped by ingenuity, material character, and the pleasure of making something useful from what already exists.",
    ],
    images: [{ src: "/images/shed3.jpg", alt: "Cedar-clad standalone shed with exposed roof beams, large windows, and a sliding glass door opening onto a timber deck", width: 1448, height: 1086 }],
    tags: ["Post-and-beam construction", "Reclaimed materials", "Cedar cladding", "Small-scale architecture"],
  },
  {
    id: "basement-bathroom",
    order: 70,
    title: "An antique finds a new daily purpose.",
    category: "Basement bathroom / Complete remodel",
    description: [
      "An antique buffet became the starting point for a bathroom with a distinctly personal character. Jim adapted the piece to receive a drop-in sink, bringing the warmth and detail of furniture into a room more often defined by standard fixtures.",
      "One of his early remodels, the project extended well beyond the vanity. An unusual layout accommodated a double-width custom tiled shower, built-in shelving, and a large jetted tub, with a safe discreetly integrated behind a wall. Those features sit beyond this view, but the floor offers another example of the thinking behind the work: small-format tile was deliberately chosen for its ability to follow the uneven concrete slab. Its flexibility made for an attractive finish without extensive work to reshape the existing surface—a practical response to the room’s constraints that became part of its character.",
    ],
    images: [{ src: "/images/basementbathroom3.jpg", alt: "Remodeled bathroom with an antique wood buffet adapted as a sink vanity, patterned wallpaper, and recessed wood shelving", width: 1448, height: 1086 }],
    tags: ["Bathroom renovation", "Furniture repurposed", "Custom tilework", "Integrated storage", "Concealed safes"],
  },
  {
    id: "contemporary-garden-gate",
    order: 80,
    title: "An everyday threshold, carefully made.",
    category: "Exterior carpentry / Custom gate",
    description: [
      "Dark horizontal boards framed in natural timber give this gate a clean, contemporary presence. The contrast is simple and deliberate, turning a practical boundary into a considered part of the approach to the home.",
      "Fences, gates, and decks are a regular part of Jim’s work as a carpenter. With a gate, the details behind the appearance matter just as much: its weight, bracing, support, and hardware all need to work together. The aim is an attractive entrance built to stay aligned and move comfortably through years of everyday use.",
    ],
    images: [{ src: "/images/gate3.jpg", alt: "Contemporary garden gate with dark horizontal boards, natural timber framing, and black hardware between two homes", width: 1448, height: 1086 }],
    tags: ["Exterior carpentry", "Contemporary detailing", "Custom gates", "Built for daily use"],
  },
  {
    id: "illuminated-cat-armoire",
    order: 90,
    title: "A small story, told in glass and light.",
    category: "Vintage armoire / Illuminated mixed media",
    description: [
      "Two unequal door panels suggested an unexpected composition: a standing cat on the left, reaching toward a butterfly in the upper-right panel. Jim used that asymmetry to connect the scene across the face of an old armoire, designing and making stained glass that gave the furniture an entirely new identity.",
      "Where the illustration moved beyond the glass, he painted it directly onto the wood, allowing the image to cross the boundaries of the panels. Interior lighting brings the glasswork to life, while new glass handles and a glossy jet-black finish frame the color. The result is an eclectic piece where furniture, illustration, and light become one continuous idea.",
    ],
    images: [{ src: "/images/catarmoire3.jpg", alt: "Glossy black armoire with illuminated multicolored stained-glass panels, a cat-and-butterfly composition, and decorative glass handles", width: 1448, height: 1086 }],
    tags: ["Custom stained glass", "Painted illustration", "Integrated lighting", "Furniture reimagined", "Eclectic design"],
  },
  {
    id: "cellar-refresh",
    order: 100,
    title: "A useful space, brought back into the light.",
    category: "Cellar refresh / Laundry & storage",
    description: [
      "A dingy old cellar needed a practical new chapter as a laundry and storage area. Jim added lighting, mortared the stone walls, and introduced a crisp palette: white masonry, black woodwork and trim, and battleship-gray floors. The contrast makes the room’s rugged construction feel deliberate and gives everyday tasks a brighter setting.",
      "The work also included encapsulating existing asbestos pipe insulation. Area rugs, added afterward and not shown here, softened the experience underfoot. The goal was a cleaner, more inviting utility space, with its cellar character intact—a substantial improvement in how an overlooked part of the home could be used.",
    ],
    images: [{ src: "/images/basement3.jpg", alt: "Refreshed cellar laundry and storage area with white stone walls, black trim, gray floors, and exposed ceiling services", width: 1448, height: 1086 }],
    tags: ["Utility spaces", "Stone masonry", "Purposeful color", "Existing-space renewal"],
  },
  {
    id: "narrow-closet",
    order: 110,
    title: "Small dimensions. Surprising capacity.",
    category: "Narrow closet / Custom storage",
    description: [
      "An exceptionally narrow closet posed a deceptively difficult question: could this space hold anything useful at all? Jim’s answer was to keep the shelving shallow and extend it high, using the available wall area while preserving a path through the closet.",
      "A hanging rail at the back and a series of hooks complete the arrangement. Together, these modest interventions give folded clothing, hanging pieces, and smaller belongings distinct places to live. It is a compact example of a larger design principle: awkward space often has more to offer when its storage is made specifically for it.",
    ],
    images: [{ src: "/images/closet3.jpg", alt: "Very narrow closet fitted with shallow white shelving, high storage, wall hooks, and a hanging rail at the rear", width: 1448, height: 1086 }],
    tags: ["Small-space design", "Custom shelving", "Vertical storage", "Everyday organization"],
  },
  {
    id: "deck-renewal",
    order: 120,
    title: "A familiar framework, thoughtfully renewed.",
    category: "Deck reconstruction / 2026",
    description: [
      "For this 2026 deck project, the client wanted to retain parts of an existing structure, including several painted posts. That request shaped a selective reconstruction, balancing the wish to preserve familiar elements with the scope of work needed to renew the deck around them.",
      "Jim retained the outer shell and selected existing components, then added new joists, decking, railings, stairs, and a roof. The finished work brings a consistent, refreshed appearance to an outdoor space whose starting point was a very specific client brief and budget.",
    ],
    images: [{ src: "/images/deck3.jpg", alt: "Renewed timber deck with new stairs, railings, and overhead structure incorporating retained painted posts", width: 1448, height: 1086 }],
    tags: ["Deck reconstruction", "Selective reuse", "Exterior carpentry", "Client-led priorities"],
  },
  {
    id: "tall-garden-fence",
    order: 130,
    title: "Privacy, with a sense of continuity.",
    category: "Nine-foot fence / Custom exterior work",
    description: [
      "At nine feet high, this fence called for a substantial framework as well as a considered appearance. Jim built it around buried pressure-treated 4-by-6 posts, with pressure-treated 2-by-4 framing to support the generous height.",
      "The design follows the existing fence visible at the left, carrying its horizontal rhythm into the new work. Matching that established language helps the addition feel like part of a cohesive garden boundary, with the structure doing its work quietly behind the finished surface.",
    ],
    images: [{ src: "/images/fence3.jpg", alt: "Tall horizontal-board garden fence with substantial posts, matching the design of an older fence at the left", width: 1448, height: 1086 }],
    tags: ["Privacy fencing", "Substantial framing", "Design continuity", "Exterior carpentry"],
  },
  {
    id: "wood-floor-refresh",
    order: 140,
    title: "The character was already underfoot.",
    category: "Wood flooring / Surface refresh",
    description: [
      "Decades of accumulated dirt and wear had dulled this existing wood floor. Jim used a rented floor machine for a thorough mechanical scuffing—a light surface abrasion—before applying a fresh topcoat.",
      "This was a surface refresh rather than a full sand-back and refinish. The renewed finish brings the wood’s warmth and variation back into focus, showing how a carefully chosen level of intervention can make a meaningful and budget-friendly difference in an aging home.",
    ],
    images: [{ src: "/images/floor3.jpg", alt: "Refreshed wood flooring with a renewed sheen and warm grain surrounding a brick fireplace during interior work", width: 1448, height: 1086 }],
    tags: ["Wood floor refresh", "Surface preparation", "Fresh topcoat", "Retained character"],
  },
  {
    id: "walnut-toned-library",
    order: 150,
    title: "A finish in conversation with the past.",
    category: "Built-in library / Custom stain matching",
    description: [
      "One of Jim’s first built-in libraries began with a material challenge: echo the rich color of the home’s antique burled walnut doors without the expense of building the cases in walnut. He chose pine and approached the finish as an integral part of the design.",
      "By blending several stains, he achieved a tone that connected the new shelving to the existing doors. The result gives the library a sense of belonging within the older interior, using an accessible material and a carefully developed finish to bridge new work and established character.",
    ],
    images: [{ src: "/images/library3.jpg", alt: "Dark-stained floor-to-ceiling pine library shelving filled with books, plants, and collected objects against green walls", width: 1448, height: 1086 }],
    tags: ["Built-in library", "Custom stain matching", "Pine construction", "Historic interiors"],
  },
  {
    id: "renewed-window-nook",
    order: 160,
    title: "A quiet corner earns its place.",
    category: "Window nook / Interior refresh",
    description: [
      "A rarely used nook became an opportunity to create a small, welcoming focal point. Jim added woodwork around the windows, stripped the old wall finish, repainted the area, and installed flooring to bring the space together.",
      "The scope was modest, but the change in atmosphere was substantial. Fresh surfaces and a more defined window surround give this tucked-away corner a sense of care and a reason to spend time there.",
    ],
    images: [{ src: "/images/nook3.jpg", alt: "Refreshed window nook with white painted woodwork, built-in bench seating, red tabletop, and new flooring", width: 1448, height: 1086 }],
    tags: ["Small-space renewal", "Window detailing", "Interior painting", "Cozy corners"],
  },
  {
    id: "window-wall-shelving",
    order: 170,
    title: "A wall made for light and living.",
    category: "Window installation / Integrated shelving",
    description: [
      "A new window became the center of a full wall of shelving, conceived to feel simple, bright, and open. Jim added the framing, installed the window, and built the surrounding shelves as one connected composition.",
      "An integrated light fixture extends its usefulness beyond daylight hours, while discreet openings at the backs of shelves provide routes for cords. The combination makes room for books, plants, and everyday objects without losing the light, organic character of the wall.",
    ],
    images: [{ src: "/images/shelving3.jpg", alt: "White wall-to-wall shelving surrounding a large window, with an integrated light, books, plants, and display objects", width: 1448, height: 1086 }],
    tags: ["Architectural shelving", "Window installation", "Integrated lighting", "Cord management", "Light-filled interiors"],
  },
  {
    id: "ashram-bookcases",
    order: 180,
    title: "Made to meet the walls as they are.",
    category: "Ashram bookcases / Southwestern Pennsylvania",
    description: [
      "At a small ashram in southwestern Pennsylvania, Jim built bookcases for a setting with an unusual constraint: the blue-painted areas around the cases were existing stone. The new woodwork had to accommodate the irregular masonry in place.",
      "Many sections required careful scribing to follow the wall’s contours. A light stain, requested by the ashram, keeps the timber visually distinct against the saturated colors and gives the cases a quiet presence within an expressive room.",
    ],
    images: [{ src: "/images/ashram3.jpg", alt: "Light-stained custom bookcases flanking a blue-painted stone arch in a colorful Pennsylvania ashram interior", width: 1448, height: 1086 }],
    tags: ["Custom bookcases", "Scribed woodwork", "Existing stonework", "Light stain", "Institutional interiors"],
  },
  {
    id: "expressive-interior-painting",
    order: 190,
    title: "Color, with the confidence to stay.",
    category: "Interior painting / Color & metallic finishes",
    description: [
      "Deep green, sun-warmed yellow, and luminous blue give these interiors distinct moods. Jim’s approach to painting welcomes bold color, using the relationship between walls, white trim, wood floors, and available light to give each room a clear identity.",
      "Metallic finishes in the green and blue rooms add another dimension, responding to light as it moves across the walls. Across the three spaces, color becomes part of the architecture: a way to frame a doorway, sharpen a window surround, and make familiar rooms feel newly expressive.",
    ],
    images: [
      { src: "/images/paint3a.jpg", alt: "Bedroom painted deep green with white architectural trim, warm wood furnishings, and a decorative ceiling medallion", width: 1448, height: 1086, caption: "Deep green brings an enveloping richness to a bedroom." },
      { src: "/images/paint3b.jpg", alt: "Sunlit sitting room with warm yellow walls, crisp white window trim, and wood floors", width: 1448, height: 1086, caption: "Warm yellow makes the most of abundant daylight and crisp white trim." },
      { src: "/images/paint3c.jpg", alt: "Bedroom with luminous metallic blue walls, white trim, antique wood furniture, and warm lighting", width: 1448, height: 1086, caption: "Metallic blue gives the wall surface depth and a changing relationship with light. And by the way, that's not some oddball AI glitch with the two doors showing in the background. This was in an old home that actually had two identical closets right next to each other in the far room." },
    ],
    tags: ["Interior painting", "Bold color", "Metallic finishes", "Architectural contrast", "Room transformations"],
  },
  {
    id: "compact-modern-bathroom",
    order: 200,
    title: "Small footprint. A full sense of possibility.",
    category: "Compact bathroom / Complete remodel",
    description: [
      "A very small bathroom became an exercise in making every element earn its place. Jim refurbished a vintage iron tub and set it within a fresh composition of subway tile beneath and around the bath. A streamlined, European-inspired glass bath screen keeps the room visually open, bringing a contemporary counterpoint to the retained tub.",
      "Space-saving IKEA furnishings—including a slim wall-mounted storage cabinet and a shallow sink and vanity—provide everyday function with minimal projection into the room. A new toilet and all-new plumbing completed the practical transformation, while glass shower shelves, thoughtfully placed towel racks, and warm color give the compact interior a generous sense of care. The result is a bathroom whose character and usefulness reach well beyond its dimensions.",
    ],
    images: [
      { src: "/images/bath3a.jpg", alt: "Compact bathroom with a refurbished vintage iron tub, white subway tile, curved glass bath screen, slim dark storage, and warm ochre walls", width: 1448, height: 1086, caption: "A restored iron tub and clear glass screen balance old character with a lighter, modern expression." },
      { src: "/images/bath3b.jpg", alt: "Shallow sink and dark vanity beside a tiled tub with a glass screen, glass shower shelves, and integrated storage in a small bathroom", width: 1448, height: 1086, caption: "Shallow furnishings and carefully placed storage make the most of a very limited footprint." },
    ],
    tags: ["Small-space design", "Bathroom remodeling", "Vintage tub restoration", "Subway tile", "Space-saving storage", "European influence"],
  },
];

export function orderedPortfolio() {
  return [...portfolio].sort((a, b) => a.order - b.order);
}
