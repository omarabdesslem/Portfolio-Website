import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site-header";
import { ProjectExplorer } from "../components/project-explorer";
import { allProjects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected research and engineering projects spanning efficient machine learning, computer vision, energy forecasting and cybersecurity.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main className="page-container project-archive" id="main-content">
        <header className="archive-intro"><p className="section-label">Research & engineering</p><h1 className="serif-heading">A collection of<br /><em>questions explored.</em></h1><p className="muted">From efficient geometric transformers to Swiss electricity forecasts. The problems, the approach, and what the results actually tell us.</p></header>
        <ProjectExplorer projects={allProjects} />
      </main>
      <SiteFooter />
    </div>
  );
}
