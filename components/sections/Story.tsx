import Image from "next/image";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import Section, { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { story } from "@/lib/content";
import appIcon from "@/public/brand/green-logo.jpeg";

export default function Story() {
  return (
    <Section id="story">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <Eyebrow>{story.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={0.06}>
          <Quotes size={44} weight="fill" className="mt-6 text-lavender/60" aria-hidden="true" />
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="mt-3 font-display text-2xl font-semibold leading-snug text-paper sm:text-3xl">
            {story.quote}
          </blockquote>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-7 flex items-center gap-3">
            <Image
              src={appIcon}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full ring-1 ring-line-strong"
            />
            <div>
              <p className="font-display font-semibold text-paper">{story.attribution}</p>
              <p className="text-sm text-dim">{story.role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-dim">{story.body}</p>
        </Reveal>
      </div>
    </Section>
  );
}
