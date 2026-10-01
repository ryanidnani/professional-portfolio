import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  children,
  className,
  external = href.startsWith("http") || href.startsWith("mailto:"),
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "text-[var(--link)] underline-offset-2 hover:underline focus-visible:outline-none focus-visible:underline",
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
