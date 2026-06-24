import BrandScene from "@/components/ui/BrandScene";
import MatchCard from "@/components/ui/MatchCard";
import { Reveal } from "@/components/ui/Reveal";
import { brand, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-24"
    >
      {/* brand glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-purple/25 blur-[120px]" />
        <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-glow/12 blur-[120px]" />
      </div>

      <div className="container-via grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm font-medium text-dim">
              <span className="h-1.5 w-1.5 rounded-full bg-glow" aria-hidden="true" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
              {hero.headlinePre}
              <br />
              <span className="text-gradient">{hero.headlineEm}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">{hero.sub}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                {hero.primary}
              </a>
              <a href="#how" className="btn-secondary">
                {hero.secondary}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual: the brand scene + a real product mini-preview */}
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.75rem] border border-line-strong bg-ink-2">
            <BrandScene className="h-full w-full" />
          </div>
          <MatchCard className="animate-float-slow absolute -bottom-6 -left-4 hidden sm:block" />
        </Reveal>
      </div>
    </section>
  );
}
