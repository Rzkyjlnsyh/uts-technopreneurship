import { problems, problemSection, solution } from "@/content/problem";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function ProblemSection() {
  return (
    <section id="masalah" className="bg-white py-20 sm:py-24">
      <SectionHeading
        eyebrow={problemSection.eyebrow}
        title={problemSection.title}
      />

      <Container>
        <Reveal>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
            {problemSection.surveyNote}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
          {/* Daftar masalah — editorial bernomor */}
          <RevealGroup as="ol" className="lg:col-span-7 space-y-7">
            {problems.map((problem) => (
              <RevealItem as="li" key={problem.no}>
                <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-sand-200 pt-7 first:border-t-0 first:pt-0">
                  <span className="font-mono text-sm font-bold text-gold-600">
                    {problem.no}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-snug text-ink-900">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Solusi */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15} className="h-full">
              <div className="flex h-full flex-col rounded-xl bg-primary-900 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
                  {solution.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                  {solution.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-100">
                  {solution.description}
                </p>
                <ul className="mt-auto space-y-3 pt-8">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
