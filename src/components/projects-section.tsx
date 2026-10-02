import {
  Entry,
  EntryList,
  EntryMeta,
  EntryNote,
} from "@/components/entry-list";
import { Section } from "@/components/section";
import { projects } from "@/content";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-lede mt-2">
        Independent work outside formal publication.
      </p>

      <EntryList>
        {projects.map((project) => (
          <Entry
            key={project.id}
            year={project.year}
            title={project.name}
            href={project.url ?? project.repoUrl}
            isSample={project.isSample}
          >
            <EntryNote>{project.blurb}</EntryNote>
            <EntryMeta>{project.stack.join(" · ")}</EntryMeta>
          </Entry>
        ))}
      </EntryList>
    </Section>
  );
}
