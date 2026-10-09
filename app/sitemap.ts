import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/journal";
import { publishedProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.url === "https://example.com" ? [] : [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/projects`, changeFrequency: "monthly", priority: 0.7 },
    ...publishedProjects().map(project => ({ url: `${site.url}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/private-libraries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/listening-rooms`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/architectural-focal-points`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/whole-room-transformations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/architectural-interiors`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/services/design-build`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/concepts`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/process`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/start-a-project`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/journal`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    ...articles.map(article => ({ url: `${site.url}/journal/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
