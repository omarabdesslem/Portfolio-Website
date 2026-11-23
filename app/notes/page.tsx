import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/site-header";
import { notes } from "./note-data";

export const metadata: Metadata = {
  title: "Notes",
  description: "Technical notes from Omar Abdesslem's projects: efficient geometric transformers, model evaluation and security machine learning.",
  alternates: { canonical: "/notes" },
  openGraph: {
    title: "Notes | Omar Abdesslem",
    description: "A closer look at the choices behind the implementations.",
    url: "/notes",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function NotesPage() {
  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main className="page-container notes-archive" id="main-content">
        <header className="archive-intro">
          <p className="section-label">Thinking through the work</p>
          <h1 className="serif-heading">The choices behind<br /><em>the implementation.</em></h1>
          <p className="muted">Short technical notes on what to optimize, what to measure, and what a result can tell us. Each starts with a project and links back to the original report.</p>
        </header>
        <div className="note-list">
          {notes.map((note) => (
            <article className="note-preview" key={note.slug}>
              <div className="note-preview-meta"><p className="section-label">{note.topic}</p><span>{note.readingTime}</span></div>
              <div><h2><Link href={`/notes/${note.slug}`}>{note.title}</Link></h2><p className="muted">{note.summary}</p><Link className="note-project-link text-link" href={`/projects/${note.projectSlug}`}>From {note.projectTitle}</Link></div>
              <Link className="text-link" href={`/notes/${note.slug}`} aria-label={`Read ${note.title}`}>Read note</Link>
            </article>
          ))}
        </div>
        <p className="notes-archive-footer muted">Looking for the implementation and results? <Link className="text-link" href="/projects">Explore the projects</Link></p>
      </main>
      <SiteFooter />
    </div>
  );
}
