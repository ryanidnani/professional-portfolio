import { Section } from "@/components/section";
import { profile } from "@/content";

export function AboutSection() {
  return (
    <Section id="about">
      <h2 className="section-title">About</h2>
      <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
        {profile.longBio}
      </p>
    </Section>
  );
}
