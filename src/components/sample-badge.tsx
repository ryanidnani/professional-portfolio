import { cn } from "@/lib/utils";

export function SampleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-stone-300 bg-stone-50 px-1.5 py-0.5 text-[0.65rem] font-medium tracking-wide text-stone-600 uppercase",
        className,
      )}
    >
      Sample
    </span>
  );
}
