import { Fragment } from "react";
import { SealCheck, Buildings, ArrowsLeftRight, Plus } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { different } from "@/lib/content";

const pillarIcons = [SealCheck, Buildings, ArrowsLeftRight];

export default function Different() {
  return (
    <Section id="different">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {different.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg leading-relaxed text-dim">{different.body}</p>
        </Reveal>
      </div>

      {/* The three parts read as a formula */}
      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-3">
        {different.pillars.map((p, i) => {
          const Icon = pillarIcons[i];
          return (
            <Fragment key={p.title}>
              <Reveal delay={i * 0.1} className="h-full">
                <article className="card-hover flex h-full flex-col items-center rounded-xl2 border border-line bg-ink-2 p-7 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-via-glow text-white">
                    <Icon size={28} weight="bold" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-paper">{p.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-dim">{p.body}</p>
                </article>
              </Reveal>
              {i < different.pillars.length - 1 && (
                <div className="flex items-center justify-center" aria-hidden="true">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-ink text-aqua">
                    <Plus size={18} weight="bold" />
                  </span>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* The result */}
      <Reveal delay={0.1} className="mt-6">
        <div className="relative overflow-hidden rounded-xl2 border border-line-strong bg-ink-2 p-7 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 120% at 100% 0%, color-mix(in srgb, var(--purple) 22%, transparent), transparent 70%)",
            }}
          />
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <span className="rounded-xl bg-via-primary px-3.5 py-2 font-display text-lg font-bold text-[#06140f]">
              = VIA
            </span>
            <p className="max-w-3xl text-lg leading-relaxed text-paper">{different.closing}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
