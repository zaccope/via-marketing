import { Heartbeat, GlobeHemisphereWest, BookOpenText } from "@phosphor-icons/react/dist/ssr";
import Section, { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { problem } from "@/lib/content";

const icons = [BookOpenText, GlobeHemisphereWest, Heartbeat];

export default function Problem() {
  return (
    <Section id="why">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* The statement */}
        <div>
          <Reveal>
            <Eyebrow>{problem.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {problem.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-dim">{problem.body}</p>
          </Reveal>
        </div>

        {/* The three pressures */}
        <ul className="flex flex-col justify-center gap-5">
          {problem.points.map((point, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                as="li"
                key={point.title}
                delay={i * 0.08}
                className="flex gap-4 border-l-2 border-line pl-5"
              >
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-lavender">
                  <Icon size={22} weight="duotone" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper">{point.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-dim">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
