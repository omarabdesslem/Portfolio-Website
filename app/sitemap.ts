import type { MetadataRoute } from "next";
import { allProjects } from "./projects/project-data";
import { notes } from "./notes/note-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://omar-abdesslem.ch";

  return [
    { url: origin, priority: 1 },
    { url: `${origin}/projects`, priority: 0.9 },
    { url: `${origin}/notes`, priority: 0.7 },
    ...notes.map((note) => ({
      url: `${origin}/notes/${note.slug}`,
      priority: 0.6,
    })),
    ...allProjects.map((project) => ({
      url: `${origin}/projects/${project.slug}`,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
