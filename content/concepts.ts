import { images, type ImageData } from "@/content/home";

type ConceptStudy = {
  id: string;
  title: string;
  category: string;
  image: ImageData & { type: "concept" };
  idea: string;
  considerations: string;
  service: { label: string; href: string };
};

export const concepts: ConceptStudy[] = [
  {
    id: "collected-library",
    title: "A room for a collected life.",
    category: "Private library",
    image: images.library,
    idea: "Dark walnut shelving gives the room an architectural frame. Books, a reading chair, and a window seat make it a place for both a collection and the everyday pleasure of using it.",
    considerations: "Shelving proportions, window light, concealed storage, and a comfortable place to read would guide the development of a buildable design.",
    service: { label: "Private libraries & studies", href: "/services/private-libraries" },
  },
  {
    id: "listening-retreat",
    title: "An interior tuned to a quieter rhythm.",
    category: "Listening room",
    image: images.listening,
    idea: "Low oak cabinetry and a garden-facing window give music a place within a warm, contemporary interior. The collection becomes part of the room without filling every wall.",
    considerations: "Equipment placement, record capacity, cabinet ventilation, cable access, and acoustic considerations would be explored alongside the room’s atmosphere.",
    service: { label: "Listening rooms & creative spaces", href: "/services/listening-rooms" },
  },
  {
    id: "window-moment",
    title: "A small place to pause.",
    category: "Architectural moment",
    image: images.nook,
    idea: "An oak seat beside amber leaded glass brings light, material, and a simple daily ritual together. A modest corner gains a reason to be used.",
    considerations: "Seat dimensions, access, joinery, glazing condition, and reading light would determine how this moment could belong to a particular home.",
    service: { label: "Architectural focal points", href: "/services/architectural-focal-points" },
  },
];
