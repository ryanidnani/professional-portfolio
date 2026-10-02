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
        "scroll-mt-16 px-5 py-12 sm:px-6 sm:py-14",
        bordered && "border-t border-[var(--line)]",
      )}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}
