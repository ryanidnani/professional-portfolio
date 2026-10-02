import type { ReactNode } from "react";
import { SampleBadge } from "@/components/sample-badge";
import { TextLink } from "@/components/text-link";

export function EntryList({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
      {children}
    </ul>
  );
}

export function Entry({
  year,
  title,
  href,
  isSample,
  children,
}: {
  year: number;
  title: ReactNode;
  href?: string;
  isSample?: boolean;
  children?: ReactNode;
}) {
  return (
    <li className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-4 py-5 sm:grid-cols-[4.25rem_minmax(0,1fr)] sm:gap-x-8 sm:py-6">
      <time className="pt-[0.3rem] text-[0.8125rem] tabular-nums text-[var(--ink-muted)]">
        {year}
      </time>
      <div className="min-w-0">
        <h3 className="font-[family-name:var(--font-serif)] text-[1.05rem] font-semibold leading-snug text-[var(--ink)] sm:text-[1.125rem]">
          {href ? <TextLink href={href}>{title}</TextLink> : title}
          {isSample ? (
            <>
              {" "}
              <SampleBadge />
            </>
          ) : null}
        </h3>
        {children}
      </div>
    </li>
  );
}

export function EntryMeta({ children }: { children: ReactNode }) {
  return (
    <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-[var(--ink-muted)]">
      {children}
    </p>
  );
}

export function EntryNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2.5 text-[0.925rem] leading-relaxed text-[var(--ink-soft)]">
      {children}
    </p>
  );
}
