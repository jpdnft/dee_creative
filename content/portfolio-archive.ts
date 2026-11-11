import type { PortfolioProject } from "./portfolio";

// Retired from the public portfolio. Image paths record their original public
// locations; the corresponding files are preserved in assets/portfolio-archive/.
export const archivedPortfolio: PortfolioProject[] = [
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
];
