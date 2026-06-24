import { UsersThree, ChatsCircle, Sparkle } from "@phosphor-icons/react/dist/ssr";
import Section from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { how } from "@/lib/content";

export default function How() {
  return (
    <Section id="how">
      <div className="max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{how.heading}</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 text-lg leading-relaxed text-dim">{how.sub}</p>
        </Reveal>
      </div>

      {/* Bento: one featured tile plus two wide tiles */}
      <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-2">
        {/* Featured: Connect */}
        <RevealItem className="md:col-span-1 md:row-span-2">
          <article className="card-hover relative flex h-full flex-col justify-between overflow-hidden rounded-xl2 border border-line bg-ink-2 p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple/30 blur-3xl"
            />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-via-glow text-white">
                <UsersThree size={26} weight="bold" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold text-paper">
                {how.pillars[0].title}
              </h3>
              <p className="mt-3 leading-relaxed text-dim">{how.pillars[0].body}</p>
            </div>
            <p className="relative mt-8 text-sm font-medium text-aqua">
              {how.pillars[0].key}
            </p>
          </article>
        </RevealItem>

        {/* Collaborate */}
        <WideTile
          className="md:col-span-2"
          Icon={ChatsCircle}
          title={how.pillars[1].title}
          body={how.pillars[1].body}
          tag={how.pillars[1].key}
        />

        {/* Belong */}
        <WideTile
          className="md:col-span-2"
          Icon={Sparkle}
          title={how.pillars[2].title}
          body={how.pillars[2].body}
          tag={how.pillars[2].key}
        />
      </RevealGroup>

      {/* Product surfaces */}
      <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-2.5">
        <span className="mr-1 text-sm font-medium text-dim">Inside VIA:</span>
        {how.surfaces.map((s) => (
          <span
            key={s}
            className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-paper"
          >
            {s}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}

function WideTile({
  className = "",
  Icon,
  title,
  body,
  tag,
}: {
  className?: string;
  Icon: React.ComponentType<{ size?: number; weight?: "bold"; className?: string }>;
  title: string;
  body: string;
  tag: string;
}) {
  return (
    <RevealItem className={className}>
      <article className="card-hover flex h-full items-start gap-5 rounded-xl2 border border-line bg-ink-2 p-7">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.04] text-aqua">
          <Icon size={26} weight="bold" />
        </span>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="font-display text-xl font-semibold text-paper">{title}</h3>
            <span className="rounded-full bg-aqua/12 px-2.5 py-0.5 text-xs font-semibold text-aqua">
              {tag}
            </span>
          </div>
          <p className="mt-2 leading-relaxed text-dim">{body}</p>
        </div>
      </article>
    </RevealItem>
  );
}
