import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/site-header";
import { notes } from "../note-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) return { title: "Note not found" };

  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: `${note.title} | Omar Abdesslem`,
      description: note.summary,
      url: `/notes/${note.slug}`,
      siteName: "Omar Abdesslem",
      type: "article",
      authors: ["Omar Abdesslem"],
      images: [{
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Omar Abdesslem — Research & Engineering",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  const related = notes.filter((item) => item.slug !== note.slug);

  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main id="main-content" className="page-container note-page">
        <Link className="text-link" href="/notes">All notes</Link>
        <article aria-labelledby="note-title">
          <header className="note-header">
            <p className="section-label">Project note · {note.topic}</p>
            <h1 id="note-title" className="serif-heading">{note.title}</h1>
            <p className="note-summary muted">{note.summary}</p>
            <p className="note-reading-time muted">{note.readingTime} · Based on the project report</p>
          </header>

          <div className="note-content">
            {note.sections.map((section, index) => (
              <section className="note-section" key={section.heading} aria-labelledby={`note-section-${index}`}>
                <h2 className="serif-heading" id={`note-section-${index}`}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>

          <aside className="note-sources" aria-labelledby="note-sources-title">
            <h2 className="section-label" id="note-sources-title">Source material</h2>
            <p className="muted">This note draws on the linked project report. Follow the source for the full methods, evaluation and limitations.</p>
            {note.sources.map((source) => (
              <a
                key={source.href}
                className="text-link"
                href={source.href}
                target={source.external ? "_blank" : undefined}
                rel={source.external ? "noopener noreferrer" : undefined}
              >
                {source.label}
                {source.external && <span className="sr-only"> (opens in a new tab)</span>}
              </a>
            ))}
          </aside>

          <footer className="note-footer">
            <p className="section-label">The work behind the note</p>
            <Link className="text-link" href={`/projects/${note.projectSlug}`}>{note.projectTitle} case study</Link>
          </footer>
        </article>

        <section className="note-footer" aria-labelledby="more-notes-title">
          <h2 className="serif-heading" id="more-notes-title">More notes from the work.</h2>
          {related.map((item) => (
            <Link className="text-link" key={item.slug} href={`/notes/${item.slug}`}>{item.title}</Link>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
