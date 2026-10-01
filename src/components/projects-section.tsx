import { SampleBadge } from "@/components/sample-badge";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { projects } from "@/content";

export function ProjectsSection() {
  return (
    <Section id="projects">
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
            <h3 className="mt-2 font-[family-name:var(--font-serif)] text-lg font-semibold leading-snug text-[var(--ink)]">
              {project.url ? (
                <TextLink href={project.url}>{project.name}</TextLink>
              ) : (
                project.name
              )}
            </h3>
            <p className="mt-3 text-[0.925rem] leading-relaxed text-[var(--ink-soft)]">
              {project.blurb}
            </p>
            <p className="mt-3 text-sm text-[var(--ink-muted)]">
              {project.stack.join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
