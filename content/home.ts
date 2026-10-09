export type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  type: "completed" | "concept" | "detail";
};

export const images = {
  possibilities: {
    src: "/images/contemporary-possibilities-concept.png",
    alt: "Light contemporary living room with pale oak integrated shelving, a window seat, and linen seating beside a leafy garden",
    width: 1536,
    height: 1024,
    caption: "A lighter language. The same considered approach.",
    type: "concept",
  },
  idea: {
    src: "/images/idea-threshold-concept.png",
    alt: "Oak doorway framing a quiet study with integrated shelving, a writing desk, and soft window light",
    width: 1024,
    height: 1536,
    caption: "A glimpse of what a space could become.",
    type: "concept",
  },
  library: {
    src: "/images/library-concept.png",
    alt: "Dark walnut home library with floor-to-ceiling shelves, a leather reading chair, and soft window light",
    width: 1536,
    height: 1024,
    caption: "A room for books, and everything they open up.",
    type: "concept",
  },
  listening: {
    src: "/images/listening-room-concept.png",
    alt: "Warm modern listening room with oak record storage, a turntable, and a cognac armchair",
    width: 1536,
    height: 1024,
    caption: "A different architecture. A different kind of retreat.",
    type: "concept",
  },
  nook: {
    src: "/images/reading-nook-concept.png",
    alt: "Oak window seat beside amber leaded glass with linen cushions and a brass reading light",
    width: 1024,
    height: 1365,
    caption: "Light, material, and a place to pause.",
    type: "concept",
  },
} satisfies Record<string, ImageData>;

export const services = [
  { title: "Private libraries & studies", text: "For books, collections, quiet work, and the pleasure of a room that is entirely your own." },
  { title: "Listening rooms & creative spaces", text: "A place for music, making, writing, or retreat—designed around what draws you in." },
  { title: "Architectural focal points", text: "A fireplace wall, integrated shelving, or one considered feature that gives the room its center." },
  { title: "Whole-room transformations", text: "Layout, light, storage, materials, and detail reconsidered as one coherent interior." },
  { title: "Architectural interiors", text: "Design and construction brought together, with the character of the whole home in mind." },
];

export const process = [
  { title: "Discover", text: "Understand you, your home, and what the space needs to do." },
  { title: "Imagine", text: "Explore possibilities in layout, material, light, and architectural character." },
  { title: "Design", text: "Develop the idea into a buildable plan, with scope and budget in view." },
  { title: "Build", text: "Carry the design through construction and coordinate qualified specialty trades." },
  { title: "Finish", text: "Bring the space together through hardware, lighting, objects, and final details." },
];
