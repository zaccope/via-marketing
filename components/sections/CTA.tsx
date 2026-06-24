import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { brand, cta } from "@/lib/content";

export default function CTA() {
  const mailto = `mailto:${brand.email}?subject=${encodeURIComponent(
    "VIA demo request"
  )}&body=${encodeURIComponent(
    "Hi VIA team, I would like to see a demo for our school.\n\nSchool:\nRole:\nApprox. IB cohort size:\n"
  )}`;

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-via">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-ink-2 px-6 py-16 text-center sm:px-12 md:py-20">
            {/* brand glows */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-purple/30 blur-[100px]" />
              <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-glow/18 blur-[100px]" />
            </div>

            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              {cta.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dim">{cta.body}</p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4">
              <a href={mailto} className="btn-primary text-base">
                {cta.primary}
                <ArrowRight size={18} weight="bold" />
              </a>
              <p className="text-sm text-dim">{cta.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
