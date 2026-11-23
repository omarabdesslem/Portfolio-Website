import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "../../components/project-visual";
import { ProjectResults } from "../../components/project-results";
import { SiteFooter, SiteHeader } from "../../components/site-header";
import { allProjects } from "../project-data";
import { notes } from "../../notes/note-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Omar Abdesslem`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      siteName: "Omar Abdesslem",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Omar Abdesslem — Research & Engineering" }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = allProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  const related = allProjects.filter((item) => item.featured && item.slug !== project.slug).slice(0, 2);
  const projectNote = notes.find((note) => note.projectSlug === project.slug);

  return (
    <div className="site-shell" id="top">
      <SiteHeader />
      <main id="main-content" className="page-container case-study">
        <div className="case-study-breadcrumb">
          <Link href="/projects" className="text-link">All work</Link>
          <span aria-hidden="true"> / </span>
          <span>{project.title}</span>
        </div>

        <header className="case-study-header">
          <p className="section-label">{project.category}</p>
          <h1 className="serif-heading">{project.title}</h1>
          <p className="case-study-lead">{project.description}</p>
          <p className="case-study-context muted">{project.context}</p>
          <ul className="project-tags" aria-label="Technologies and topics">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </header>

        <div className="case-study-visual">
          <ProjectVisual kind={project.visual} />
        </div>

        <div className="case-study-body">
          <div className="case-study-narrative">
            <section className="case-study-section" aria-labelledby="challenge-title">
              <h2 id="challenge-title" className="serif-heading">The question</h2>
              <p>{project.challenge}</p>
            </section>
            <section className="case-study-section" aria-labelledby="approach-title">
              <h2 id="approach-title" className="serif-heading">The approach</h2>
              <ul className="case-study-steps">
                {project.approach.map((step) => <li key={step}>{step}</li>)}
              </ul>
            </section>
            {project.contribution && (
              <section className="case-study-section" aria-labelledby="contribution-title">
                <h2 id="contribution-title" className="serif-heading">My contribution</h2>
                <p>{project.contribution}</p>
              </section>
            )}
            <section className="case-study-section" aria-labelledby="result-title">
              <h2 id="result-title" className="serif-heading">The result</h2>
              <p>{project.outcome}</p>
            </section>
            <ProjectResults kind={project.visual} />
            {project.caveat && (
              <section className="case-study-caveat" aria-labelledby="context-title">
                <h2 id="context-title">Reading the result in context</h2>
                <p>{project.caveat}</p>
              </section>
            )}
          </div>

          <aside className="case-study-sidebar" aria-label="Project sources and result">
            {project.metric && (
              <div className="case-study-metric">
                <p className="case-study-metric-value">{project.metric.value}</p>
                <p>{project.metric.label}</p>
                <p className="muted">{project.metric.note}</p>
              </div>
            )}
            <div className="case-study-sources">
              <p className="section-label">Explore the work</p>
              {project.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  className="text-link"
                  target={source.external ? "_blank" : undefined}
                  rel={source.external ? "noopener noreferrer" : undefined}
                >
                  {source.label}
                  {source.external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              ))}
            </div>
          </aside>
        </div>

        {projectNote && (
          <aside className="case-study-note" aria-labelledby="project-note-title">
            <p className="section-label">A closer look at the decision</p>
            <h2 className="serif-heading" id="project-note-title"><Link href={`/notes/${projectNote.slug}`}>{projectNote.title}</Link></h2>
            <p className="muted">{projectNote.summary}</p>
            <Link className="text-link" href={`/notes/${projectNote.slug}`}>Read the project note</Link>
          </aside>
        )}

        {related.length > 0 && (
          <section className="case-study-related" aria-labelledby="related-title">
            <div className="section-heading-row">
              <h2 id="related-title" className="serif-heading">Keep exploring.</h2>
              <Link href="/projects" className="text-link">All projects</Link>
            </div>
            <div className="case-study-related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="case-study-related-link">
                  <span className="section-label">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="muted">{item.summary}</p>
                  <span className="text-link">Read case study</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
