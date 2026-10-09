import { additionalArticles } from "./journal-additions";

export type JournalArticle = {
  slug: string;
  title: string;
  category: string;
  description: string;
  introduction: string;
  sections: { heading: string; paragraphs: string[] }[];
  related: { label: string; href: string }[];
};

// Structured local editorial content; no invented project anecdotes or client claims.
export const articles: JournalArticle[] = [{
  slug: "what-makes-a-built-in-feel-like-architecture",
  title: "What makes a built-in feel like architecture?",
  category: "Architectural details",
  description: "Proportion, alignment, material, and useful detail: how custom cabinetry can feel like part of a room rather than furniture fixed to a wall.",
  introduction: "A built-in can solve a storage problem and still feel strangely separate from the room. Making it feel like architecture starts with the relationships around it, rather than the cabinet alone.",
  sections: [
    { heading: "Start with the room’s lines.", paragraphs: ["Door heads, window sills, ceiling height, existing trim, and the edges of a fireplace all create a framework. A new piece of cabinetry can acknowledge that framework through its height, divisions, and alignments. It doesn’t have to copy every detail, but it should have a considered relationship to them.", "This is one reason a standard unit can look less settled than expected, even when it fits the available width. Its proportions may be answering a manufacturing question rather than the architectural question posed by the room."] },
    { heading: "Give the depth a reason.", paragraphs: ["A bookcase, a record cabinet, and concealed equipment storage need different depths. Shelves that are too deep can hide books in a dark recess. Cabinetry that projects too far can narrow a useful route through the room. A shallow element might preserve circulation but fail to hold what it was designed for.", "Useful dimensions come from the objects and activities involved. Then those dimensions need to be tested against the room’s proportions, the doorways, and the way people move around the space."] },
    { heading: "Consider the edges and transitions.", paragraphs: ["Where does the new work meet the wall, ceiling, floor, or existing trim? Those transitions often determine whether a built-in feels integrated. A deliberate reveal can suit a contemporary interior; a carefully proportioned trim detail may belong in an older house. Neither approach works well when it is simply the accidental gap left at installation.", "Existing surfaces also influence the construction. Walls and floors may not be perfectly straight or level. Planning for those conditions helps the visible design remain intentional when the work is fitted to the actual house."] },
    { heading: "Balance display with the things you hide.", paragraphs: ["Open shelving gives objects presence. Closed storage gives a room somewhere to put the ordinary things of daily life. A useful composition often needs both. The balance depends on whether you are displaying a collection, keeping paperwork nearby, accommodating equipment, or storing items you rarely use.", "A beautiful wall of shelves is less useful if everything placed on it feels like clutter. Thinking about what belongs in view is a design decision, not a finishing task left entirely to the homeowner."] },
    { heading: "Let material and light support the idea.", paragraphs: ["Material has a relationship to scale. A large area of dark wood can give a room depth and enclosure; it can also make a small or poorly lit room feel heavier. Painted cabinetry, a lighter timber, or a smaller intervention may answer a different setting more naturally.", "Lighting affects how shelves, recesses, and objects are perceived. Task light, ambient light, and daylight should be considered together. Equipment access, ventilation, cable routes, and any electrical requirements also belong in the plan before construction begins."] },
    { heading: "Know when the cabinet isn’t the whole answer.", paragraphs: ["A built-in may be exactly what a room needs. But if the seating arrangement, lighting, circulation, and finishes are all working against one another, designing the cabinet in isolation may leave the larger problem unresolved.", "Stepping back to consider the whole room can clarify which element matters most. Sometimes the answer is a full-height library. Sometimes it is a restrained storage wall or a single reading niche. The strongest solution earns its place through the way it improves both the function and the architectural character of the space."] },
  ],
  related: [
    { label: "Architectural focal points & custom built-ins", href: "/services/architectural-focal-points" },
    { label: "Private libraries & studies", href: "/services/private-libraries" },
    { label: "Whole-room transformations", href: "/services/whole-room-transformations" },
  ],
}, ...additionalArticles];
