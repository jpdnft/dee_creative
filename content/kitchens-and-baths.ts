import type { ImageData } from "@/content/home";

export const kitchenBathImages = {
  kitchen: {
    src: "/images/services/kitchen.png",
    alt: "Warm walnut kitchen with cream stone counters, an island, brass fixtures, and wood-trimmed windows",
    width: 1536,
    height: 1024,
    caption: "A place for daily rituals, with every detail working together.",
    type: "concept",
  },
  bath: {
    src: "/images/services/bathroom.png",
    alt: "Quiet bathroom with a walnut vanity, cream stone basin surround, brass fixtures, and a tiled walk-in shower",
    width: 1024,
    height: 1536,
    caption: "Warm materials. Useful storage. A quieter start to the day.",
    type: "concept",
  },
} satisfies Record<string, ImageData>;
