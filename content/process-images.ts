import type { ImageData } from "./home";

export const processImages: Record<string, ImageData> = {
  Discover: { src: "/images/process/discover.png", alt: "An open alcove and original windows in an older room, with daylight revealing its proportions", width: 1536, height: 1024, caption: "Begin with what is already there.", type: "concept" },
  Imagine: { src: "/images/process/imagine.png", alt: "Loose interior sketches and an architectural model on a quiet studio worktable", width: 1024, height: 1536, caption: "Give an idea room to take shape.", type: "concept" },
  Design: { src: "/images/process/design.png", alt: "Measured drawings, timber samples, hardware, and finish materials arranged for design development", width: 1536, height: 1024, caption: "Bring the possibilities into focus.", type: "concept" },
  Build: { src: "/images/process/build.png", alt: "A close view of timber joinery being carefully fitted on a woodworking bench", width: 1536, height: 1024, caption: "Carry the idea through the making.", type: "concept" },
  Finish: { src: "/images/process/finish.png", alt: "A finished olive cabinet with bronze hardware, a stone surface, and thoughtfully placed lighting", width: 1024, height: 1536, caption: "The details that make a space feel resolved.", type: "concept" },
};
