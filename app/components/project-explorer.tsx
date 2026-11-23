"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "../projects/project-data";
import { ProjectVisual } from "./project-visual";

const filters = ["All projects", "Machine learning", "Computer vision", "Systems & security", "Energy"] as const;
type Filter = typeof filters[number];

function matches(project: Project, filter: Filter) {
  if (filter === "All projects") return true;
  if (filter === "Computer vision") return ["depth", "representation"].includes(project.visual);
  if (filter === "Systems & security") return ["performance", "security"].includes(project.visual);
  if (filter === "Energy") return ["forecast", "solar"].includes(project.visual);
  return project.visual !== "solar";
}

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All projects");
  const visible = projects.filter(project => matches(project, filter));
  return (
    <>
      <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects by area">{filters.map(item => <button key={item} type="button" className={filter === item ? "filter-button is-active" : "filter-button"} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><p className="project-result-count" role="status">{visible.length} {visible.length === 1 ? "project" : "projects"}</p></div>
      <div className="project-grid archive-grid">{visible.map(project => <article className="project-card" key={project.slug}><Link href={`/projects/${project.slug}`} className="project-visual-link" aria-label={`Explore ${project.title}`}><ProjectVisual kind={project.visual} compact /></Link><div className="project-card-copy"><p className="section-label">{project.category}</p><h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2><p className="muted">{project.summary}</p><ul className="tags" aria-label="Technologies">{project.tags.slice(0,3).map(tag => <li key={tag}>{tag}</li>)}</ul><Link href={`/projects/${project.slug}`} className="text-link">Explore project</Link></div></article>)}</div>
    </>
  );
}
