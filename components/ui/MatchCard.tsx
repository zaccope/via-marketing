import { GlobeHemisphereEast } from "@phosphor-icons/react/dist/ssr";

/**
 * MatchCard: a small, real mini-preview of the product's International Match
 * surface (not a faked full screenshot). Used to give the hero a product feel.
 */
export default function MatchCard({ className = "" }: { className?: string }) {
  return (
    <div className={`panel w-[19rem] max-w-full p-4 shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-semibold text-aqua">
        <GlobeHemisphereEast size={16} weight="bold" />
        International Match
      </div>

      <ul className="mt-3 space-y-2.5">
        <Person initials="M" name="Mateo, Ecuador" subject="Strong in Economics" />
        <Person initials="A" name="Aiko, Japan" subject="Strong in Physics" />
      </ul>

      <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
        <span className="text-xs text-dim">Matched on Physics and Economics</span>
        <span className="rounded-full bg-aqua/15 px-2.5 py-1 text-xs font-semibold text-aqua">
          Great fit
        </span>
      </div>
    </div>
  );
}

function Person({
  initials,
  name,
  subject,
}: {
  initials: string;
  name: string;
  subject: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-via-glow text-sm font-bold text-white"
        aria-hidden="true"
      >
        {initials}
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-medium text-paper">{name}</span>
        <span className="block truncate text-xs text-dim">{subject}</span>
      </span>
    </li>
  );
}
