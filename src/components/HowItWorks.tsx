import { howItWorksSection, steps } from "@/content/howItWorks";
import { RevealGroup, RevealItem } from "./motion/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-white py-20 sm:py-24">
      <SectionHeading
        eyebrow={howItWorksSection.eyebrow}
        title={howItWorksSection.title}
        description={howItWorksSection.description}
      />

      <Container>
        <RevealGroup as="ol" className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <RevealItem as="li" key={step.no}>
              <div className="flex h-full flex-col rounded-xl border border-sand-200 bg-sand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:bg-white">
                <span className="font-mono text-3xl font-extrabold text-primary-200">
                  {step.no}
                </span>
                <h3 className="mt-3 text-base font-bold leading-snug text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
