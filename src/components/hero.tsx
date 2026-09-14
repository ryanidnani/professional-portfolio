import { Button } from "@/components/ui/button";
import { profile } from "@/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden"
      aria-label="Introduction"
    >
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <p className="hero-rise hero-rise-1 mb-5 max-w-xl text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">
          Portfolio
        </p>
        <h1 className="hero-rise hero-rise-2 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] font-semibold tracking-[-0.04em] text-[var(--ink)]">
          {profile.name}
        </h1>
        <p className="hero-rise hero-rise-3 mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
          {profile.shortBio}
        </p>
        <div className="hero-rise hero-rise-4 mt-10 flex flex-wrap items-center gap-3">
          <Button
            render={<a href="#publications" />}
            size="lg"
            className="rounded-md bg-[var(--ink)] px-5 text-[var(--mist)] hover:bg-[var(--ink)]/90"
          >
            View publications
          </Button>
          <Button
            render={<a href="#projects" />}
            variant="outline"
            size="lg"
            className="rounded-md border-[var(--line-strong)] bg-transparent px-5 text-[var(--ink)] hover:bg-white/40"
          >
            Personal projects
          </Button>
        </div>
      </div>
    </section>
  );
}
