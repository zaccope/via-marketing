import type { ReactNode } from "react";

/**
 * Section: consistent vertical rhythm and a shared content container.
 * VISUAL_DENSITY 4 means generous but not cavernous padding.
 */
export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className={`container-via ${containerClassName}`}>{children}</div>
    </section>
  );
}

/** Eyebrow label. Used sparingly (at most one per three sections). */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-glow">
      <span className="h-1.5 w-1.5 rounded-full bg-glow" aria-hidden="true" />
      {children}
    </span>
  );
}
