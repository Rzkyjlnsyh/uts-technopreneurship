import {
  differentiators,
  differentiatorsSection,
  supportingAdvantages,
} from "@/content/differentiators";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function DifferentiatorsSection() {
  return (
    <section id="mengapa" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow={differentiatorsSection.eyebrow}
        title={differentiatorsSection.title}
        description={differentiatorsSection.description}
      />

      <Container>
        <RevealGroup as="div" className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {differentiators.map((item) => (
            <RevealItem key={item.index}>
              <article className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-8">
                <span className="font-mono text-2xl font-extrabold text-gold-500">
                  {item.index}
                </span>
                <h3 className="mt-4 text-balance text-xl font-extrabold leading-snug text-primary-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="mt-12 border-t border-sand-200 pt-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
              Keunggulan lain
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {supportingAdvantages.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800 transition-colors duration-200 hover:border-gold-400 hover:text-primary-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
