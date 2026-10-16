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
];

export function orderedPortfolio() {
  return [...portfolio].sort((a, b) => a.order - b.order);
}
