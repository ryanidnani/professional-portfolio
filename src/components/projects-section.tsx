import { Entry, EntryList, EntryMeta, EntryNote } from "@/components/entry-list";
import { Section } from "@/components/section";
import { TextLink } from "@/components/text-link";
import { projects } from "@/content";
import type { PersonalProject } from "@/content/types";

function projectLinks(project: PersonalProject) {
  return [
    project.url ? { href: project.url, label: "Live project" } : null,
    project.repoUrl ? { href: project.repoUrl, label: "Source code" } : null,
    project.writeUpUrl ? { href: project.writeUpUrl, label: "Write-up" } : null,
  ].filter((link): link is { href: string; label: string } => link !== null);
}

export function ProjectsSection() {
  return (
    <Section id="projects">
      <h2 className="section-title">Projects</h2>

      <EntryList>
        {projects.map((project) => {
          const links = projectLinks(project);

          return (
            <Entry
              key={project.id}
              year={project.year}
              title={project.name}
              isSample={project.isSample}
            >
              <EntryNote>{project.blurb}</EntryNote>
              {links.length > 0 ? (
                <p className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {links.map((link) => (
                    <TextLink key={link.href + link.label} href={link.href}>
                      {link.label}
                    </TextLink>
                  ))}
                </p>
              ) : null}
              <EntryMeta>{project.stack.join(" · ")}</EntryMeta>
            </Entry>
          );
        })}
      </EntryList>
    </Section>
  );
}
