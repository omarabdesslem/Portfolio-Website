import Link from "next/link";
import { additionalProjects, selectedProjects, swissgridProject } from "./project-data";

const projects = [...selectedProjects, swissgridProject, ...additionalProjects];

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh bg-white px-6 py-12 text-black sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">PROJECTS</h1>
          <Link
            href="/#projects"
            className="inline-flex h-9 items-center rounded-md border border-black/15 px-3 text-sm font-medium transition-colors hover:bg-black/5"
          >
            Back to home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 flex-1 leading-relaxed">{project.description}</p>
              <div className="mt-5">
                <a
                  href={project.href}
                  target={project.external ? "_blank" : undefined}
                  rel={project.external ? "noopener noreferrer" : undefined}
                  className="inline-flex h-8 min-w-[7.5rem] items-center justify-center rounded-md bg-black px-3 text-xs font-medium text-white transition hover:bg-gray-800"
                >
                  {project.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
