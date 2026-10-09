import type { ImageData } from "@/content/home";

export type CompletedImage = ImageData & { type: "completed" | "detail" };
export type Project = {
  slug: string;
  title: string;
  description: string;
  status: "completed";
  published: boolean;
  location?: string;
  type: string[];
  heroImage: CompletedImage;
  gallery: CompletedImage[];
  problem: string;
  idea: string;
  design: string;
  build: string;
  details: string;
  result: string;
  services: { label: string; href: string }[];
};

// Add only genuine completed projects with owner-approved facts and photography.
// Keep draft records unpublished; conceptual imagery belongs in content/concepts.ts.
export const projects: Project[] = [];

export function publishedProjects() {
  return projects.filter(project => project.published && project.status === "completed"
    && project.heroImage.type === "completed"
    && project.gallery.every(image => image.type === "completed" || image.type === "detail")
    && [project.problem, project.idea, project.design, project.build, project.details, project.result].every(text => text.trim()));
}
