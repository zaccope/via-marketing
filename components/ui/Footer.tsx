import Logo from "./Logo";
import { brand, footer } from "@/lib/content";

export default function Footer() {
  const year = 2026; // build-time constant; avoids hydration drift from new Date()
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="container-via py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-dim">{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-paper">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-dim transition-colors hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            {brand.name}. {footer.tagline}
          </p>
          <p>
            &copy; {year} {brand.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
