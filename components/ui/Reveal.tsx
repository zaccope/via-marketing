import type { ReactNode } from "react";

/**
 * Reveal: a scroll-into-view entrance used consistently across sections.
 *
 * Implemented with zero JavaScript via CSS scroll-driven animations
 * (animation-timeline: view()) defined in globals.css under `.reveal`.
 * Content is visible by default; the animation only enhances where the
 * browser supports it and the user has not requested reduced motion.
 *
 * The `delay` prop is accepted for call-site compatibility but is no longer
 * needed: each element animates as it enters the viewport on its own.
 */
export function Reveal({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  void delay;
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}

/** Wrapper for a group of revealing items (kept for call-site compatibility). */
export function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

/** A single revealing item within a group. */
export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
