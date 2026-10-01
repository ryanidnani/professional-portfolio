import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  bordered = true,
  children,
}: {
  id: string;
  bordered?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-5 py-14 sm:scroll-mt-[4.5rem] sm:px-6 sm:py-16",
        bordered && "border-t border-[var(--line)]",
      )}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
