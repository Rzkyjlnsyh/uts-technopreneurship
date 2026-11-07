import { pesantrenNetwork, sdg, uat, validationSection } from "@/content/validation";
import { Counter } from "./motion/Counter";
import { Reveal } from "./motion/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function ValidationSection() {
  return (
    <section id="bukti" className="bg-white py-20 sm:py-24">
      <SectionHeading eyebrow={validationSection.eyebrow} title={validationSection.title} />

      <Container>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Kartu UAT */}
          <Reveal className="lg:col-span-4">
            <div className="flex h-full flex-col rounded-2xl border border-sand-200 bg-sand-50 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-600">
                {uat.title}
              </p>
              <p className="mt-5 text-6xl font-extrabold leading-none text-primary-700">
                <Counter value={uat.value} />
              </p>
              <p className="text-sm font-medium text-ink-500">{uat.unit}</p>
              <p className="mt-6 text-sm leading-relaxed text-ink-500">
                {uat.description}
              </p>
            </div>
          </Reveal>

          {/* Jejaring pesantren */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-2xl bg-primary-900 p-8 text-white">
              <p className="text-lg font-bold">{pesantrenNetwork.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-100">
                {pesantrenNetwork.description}
              </p>
              <ul className="mt-auto flex flex-col gap-3 pt-8">
                {pesantrenNetwork.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* SDG 4 */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <div className="flex h-full flex-col items-start rounded-2xl bg-gold-400 p-8">
              <span className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-primary-900 text-white">
                <span className="text-[0.6rem] font-bold uppercase tracking-wide">SDGs</span>
                <span className="text-2xl font-extrabold text-gold-400">{sdg.number}</span>
              </span>
              <p className="mt-6 text-base font-extrabold leading-snug text-primary-950">
                {sdg.title}
              </p>
              <p className="text-sm font-medium text-primary-900/70">
                {sdg.titleEn}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-primary-950/80">
                {sdg.description}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
