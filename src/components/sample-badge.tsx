import { cn } from "@/lib/utils";

export function SampleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-amber-700/25 bg-amber-50 px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-amber-900/80",
        className,
      )}
    >
      Sample
    </span>
  );
}
