"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import Logo from "./Logo";
import { brand, nav } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // A sentinel at the very top of the page; when it scrolls out of view the
    // nav gains its solid background. Avoids per-frame scroll listeners.
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-12px 0px 0px 0px" }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="container-via flex h-16 items-center justify-between gap-6"
        aria-label="Primary"
      >
        <a href="#top" className="shrink-0" aria-label="VIA home">
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium text-dim transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden text-sm sm:inline-flex">
            {brand.ctaLabel}
          </a>
          <button
            type="button"
            className="btn-secondary px-3 py-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="container-via flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-dim transition-colors hover:bg-white/5 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                {brand.ctaLabel}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
