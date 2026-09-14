import { SampleBadge } from "@/components/sample-badge";
import { projects } from "@/content";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-[var(--line)] px-5 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="section-title">Personal projects</h2>
        <p className="section-lede mt-2">
          Independent work outside formal publication.
        </p>

        <ul className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {projects.map((project) => (
            <li key={project.id} className="py-7">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-[var(--ink-muted)]">
                <time className="tabular-nums">{project.year}</time>
                {project.isSample ? <SampleBadge /> : null}
              </div>
              <h3 className="mt-2 font-[family-name:var(--font-serif)] text-lg font-semibold text-[var(--ink)]">
                {project.name}
              </h3>
              <p className="mt-3 text-[0.925rem] leading-relaxed text-[var(--ink-soft)]">
                {project.blurb}
              </p>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {project.stack.join(" · ")}
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--link)] hover:underline"
                  >
                    Site
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--link)] hover:underline"
                  >
                    Repository
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
