import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/lib/content";

/**
 * StatBand: market-context numbers, honestly framed as the world IB students
 * already live in (not VIA usage). Plain layout, hairline separators, no cards.
 */
export default function StatBand() {
  return (
    <section className="border-y border-line bg-ink-2/60">
      <div className="container-via py-12">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.12em] text-dim">
            {hero.contextLabel}
          </p>
        </Reveal>
        <dl className="mt-8 grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {hero.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.08}
              className="flex flex-col items-center px-6 py-5 text-center sm:py-0"
            >
              <dt className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="mt-2 max-w-[14rem] text-sm leading-relaxed text-dim">
                {stat.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
