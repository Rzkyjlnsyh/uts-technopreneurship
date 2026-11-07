"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Kunci menu mobile saat viewport kembali ke desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const close = () => setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  // Indikator baca halaman — requestAnimationFrame agar tidak boros.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="shrink-0" aria-label={`${site.name} — ke atas`}>
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#cta" size="sm" variant="gold">
              Coba Gratis
            </Button>
          </div>

          {/* Tombol menu mobile — berbasis teks, tanpa ikon */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wide text-primary-800 transition-colors hover:bg-primary-50 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? "Tutup" : "Menu"}
          </button>
        </nav>
      </Container>

      {/* Progress baca halaman */}
      <div className="h-0.5 bg-transparent" aria-hidden="true">
        <div
          className="h-full origin-left bg-gold-400 transition-transform duration-75 ease-linear"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-sand-200 bg-sand-50 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3.5 py-3 text-base font-medium text-ink-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#cta"
                variant="gold"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Coba Gratis
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
