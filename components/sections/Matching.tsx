import { PuzzlePiece, Translate, Clock, Check } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { matching } from "@/lib/content";

const factorIcons = [PuzzlePiece, Translate, Clock];

export default function Matching() {
  return (
    <Section id="match" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/12 blur-[120px]"
      />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy + factors */}
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {matching.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-dim">{matching.body}</p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {matching.factors.map((f, i) => {
              const Icon = factorIcons[i];
              return (
                <Reveal as="li" key={f.title} delay={0.12 + i * 0.07} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-aqua">
                    <Icon size={20} weight="bold" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-paper">{f.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-dim">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* The match diagram */}
        <Reveal delay={0.1}>
          <div className="panel relative p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-dim">{matching.note}</p>

            <div className="mt-5 space-y-3">
              <StudentCard data={matching.a} accent="lavender" />

              {/* connector */}
              <div className="relative flex flex-col items-center gap-3 py-1">
                <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-lavender/60 via-glow/50 to-aqua/60" />
                <div className="relative flex flex-wrap justify-center gap-2">
                  {matching.matchOn.map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-ink px-3 py-1 text-xs font-medium text-paper"
                    >
                      <Check size={13} weight="bold" className="text-aqua" />
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <StudentCard data={matching.b} accent="mint" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function StudentCard({
  data,
  accent,
}: {
  data: { label: string; strong: string; needs: string; lang: string; tz: string };
  accent: "lavender" | "mint";
}) {
  const ring = accent === "lavender" ? "bg-via-glow" : "bg-via-primary";
  return (
    <div className="rounded-xl border border-line bg-ink-3 p-4">
      <div className="flex items-center gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${ring} text-sm font-bold text-white`} aria-hidden="true">
          {data.label.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display font-semibold text-paper">{data.label}</p>
          <p className="truncate text-xs text-dim">
            {data.lang} · {data.tz}
          </p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
        <span className="rounded-lg bg-aqua/12 px-3 py-1.5 text-aqua">
          Strong: {data.strong}
        </span>
        <span className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-dim">
          Needs: {data.needs}
        </span>
      </div>
    </div>
  );
}
