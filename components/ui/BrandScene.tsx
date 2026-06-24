/**
 * BrandScene: a faithful recreation of the VIA logomark (rising purple sun over
 * green rolling hills, with the purple "via" wave in front) rendered as scalable
 * SVG so it stays crisp and theme-flexible on the dark canvas. This is the
 * brand's documented "abstract, optimistic, future-focused" hero motif, used as
 * the signature visual. Decorative, so it is hidden from assistive tech.
 */
export default function BrandScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 500"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="vs-glow" cx="50%" cy="34%" r="42%">
          <stop offset="0%" stopColor="#ffd6f2" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#d8a8ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7b3ff2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vs-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b794ff" />
          <stop offset="100%" stopColor="#5b21b6" />
        </linearGradient>
        <linearGradient id="vs-hill-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3a6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0d5a4c" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="vs-hill-front" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#33e6d1" />
          <stop offset="100%" stopColor="#22d3a6" />
        </linearGradient>
        <linearGradient id="vs-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9d6bff" />
          <stop offset="55%" stopColor="#7b3ff2" />
          <stop offset="100%" stopColor="#b794ff" />
        </linearGradient>
      </defs>

      {/* sunrise halo */}
      <rect x="0" y="0" width="600" height="380" fill="url(#vs-glow)" />

      {/* the rising sun, partly behind the hills */}
      <circle cx="300" cy="206" r="48" fill="url(#vs-sun)" />

      {/* far hill */}
      <path
        d="M0 248 C120 198 205 212 300 232 C400 252 482 212 600 240 L600 500 L0 500 Z"
        fill="url(#vs-hill-back)"
      />
      {/* near hill */}
      <path
        d="M0 300 C150 258 235 292 322 302 C432 314 512 280 600 300 L600 500 L0 500 Z"
        fill="url(#vs-hill-front)"
        opacity="0.92"
      />

      {/* the purple 'via' wave in front */}
      <path
        d="M-20 372 C55 320 105 320 160 360 C210 396 232 470 300 396 C360 332 392 332 440 364 C492 398 540 396 620 356"
        fill="none"
        stroke="url(#vs-wave)"
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
