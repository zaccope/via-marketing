import { ChartLineUp, ShieldCheck, Detective, Confetti } from "@phosphor-icons/react/dist/ssr";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { schools } from "@/lib/content";

const benefitIcons = [ChartLineUp, ShieldCheck, Detective, Confetti];

export default function Schools() {
  return (
    <section id="schools" className="scroll-mt-24 border-y border-line bg-ink-2 py-20 md:py-28">
      <div className="container-via grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* IMI dashboard sample (real component preview) */}
        <Reveal className="order-2 lg:order-1">
          <div className="panel relative overflow-hidden p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-aqua/15 blur-3xl"
            />
            <div className="relative flex items-center justify-between">
              <h3 className="font-display text-base font-semibold text-paper">{schools.imiLabel}</h3>
              <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-dim">
                {schools.imiNote}
              </span>
            </div>

            <div className="relative mt-5 flex items-end gap-3">
              <span className="font-display text-5xl font-bold text-gradient">71</span>
              <span className="mb-1.5 inline-flex items-center gap-1 text-sm font-semibold text-aqua">
                <ChartLineUp size={16} weight="bold" /> up this term
              </span>
            </div>
            <p className="relative mt-1 text-xs text-dim">Composite index across the three IB pillars</p>

            <ul className="relative mt-6 space-y-4">
              {schools.imiPillars.map((p) => (
                <li key={p.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-paper">{p.name}</span>
                    <span className="font-medium text-dim">{p.value}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-via-primary"
                      style={{ width: `${p.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Copy + benefits */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>{schools.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {schools.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-dim">{schools.body}</p>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2">
            {schools.benefits.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <RevealItem key={b.title} className="flex flex-col gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.04] text-aqua">
                    <Icon size={22} weight="duotone" />
                  </span>
                  <h3 className="font-display font-semibold text-paper">{b.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-dim">{b.body}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
