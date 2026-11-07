"use client";

import { motion, useReducedMotion } from "motion/react";
import { hero, heroStats } from "@/content/hero";
import { Counter } from "./motion/Counter";
import { Reveal } from "./motion/Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

/** Kartu layanan yang melayang dengan ritme different — SAAT hover berhenti. */
function FloatingCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
        {/* Kolom kiri: pesan utama */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-primary-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-gold-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
              </span>
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance mt-6 text-4xl font-extrabold leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
              {hero.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={hero.primaryCta.href} size="lg" variant="primary">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-sand-200 bg-sand-200 text-center">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-white px-3 py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span
                      className="block text-2xl font-extrabold text-primary-700 sm:text-3xl"
                      aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                    >
                      <Counter
                        value={stat.value}
                        decimals={"decimals" in stat ? stat.decimals : 0}
                        suffix={stat.suffix}
                      />
                    </span>
                    <span className="mt-1 block text-xs leading-tight text-ink-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Kolom kanan: komposisi kartu layanan */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Bingkai browser dengan kartu layanan melayang */}
            <FloatingCard delay={0.15} className="relative rounded-xl border border-sand-300 bg-white p-1.5 shadow-xl shadow-primary-900/10">
              <div className="flex items-center gap-2 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
                <span className="ml-3 inline-flex items-center gap-2 truncate rounded bg-sand-100 px-3 py-1 text-xs font-medium text-ink-500">
                  {hero.preview.browserLabel}
                </span>
              </div>

              <div className="space-y-2.5 p-3 pt-1 sm:p-4">
                {hero.preview.items.map((item, i) => (
                  <FloatingCard
                    key={item.name}
                    delay={0.3 + i * 0.1}
                    className="flex items-center justify-between gap-4 rounded-lg border border-sand-200 bg-sand-50 px-5 py-4 transition-colors duration-200 hover:border-primary-300 hover:bg-primary-50"
                  >
                    <div>
                      <p className="text-base font-bold text-primary-800">{item.name}</p>
                      <p className="mt-0.5 text-sm text-ink-500">{item.note}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-gold-100 px-3 py-1 text-xs font-bold text-gold-700">
                      {hero.preview.statusLabel}
                    </span>
                  </FloatingCard>
                ))}
              </div>
            </FloatingCard>

            {/* Lapisan dekoratif warna solid di belakang */}
            <div
              className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-2xl bg-gold-100"
              aria-hidden="true"
            />
            <div
              className="absolute -left-5 top-8 -z-10 h-24 w-24 rounded-full bg-primary-100"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
