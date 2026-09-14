import { SampleBadge } from "@/components/sample-badge";
import { projects } from "@/content";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[var(--line)] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">Personal projects</p>
        <h2 className="section-title mt-3 max-w-2xl">
          Builds that prove the craft
        </h2>
        <p className="section-lede mt-4">
          Small systems and tools outside formal publication—still meant to be
          used.
        </p>

        <ul className="mt-14 space-y-0">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="grid gap-6 border-t border-[var(--line)] py-10 last:border-b md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-12"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.16em] text-[var(--ink-muted)] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <time className="text-sm text-[var(--accent)] tabular-nums">
                    {project.year}
                  </time>
                  {project.isSample ? <SampleBadge /> : null}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--ink)] md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                  {project.blurb}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-6 md:items-end md:text-right">
                <p className="text-sm text-[var(--ink-muted)]">
                  {project.stack.join(" · ")}
                </p>
                <div className="flex flex-wrap gap-4 md:justify-end">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-[var(--accent)] hover:opacity-80"
                    >
                      Live site
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-[var(--ink)] hover:text-[var(--accent)]"
                    >
                      Repository
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
