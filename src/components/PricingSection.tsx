import { plans, pricingNotes, pricingSection } from "@/content/pricing";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/cn";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function PricingSection() {
  return (
    <section id="harga" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow={pricingSection.eyebrow}
        title={pricingSection.title}
        description={pricingSection.description}
      />

      <Container>
        <RevealGroup as="div" className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  plan.highlight
                    ? "border-primary-600 bg-primary-900 text-white shadow-xl shadow-primary-900/20"
                    : "border-sand-200 bg-white",
                )}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-primary-950">
                    Pilihan populer
                  </span>
                )}
                <h3
                  className={cn(
                    "text-lg font-extrabold",
                    plan.highlight ? "text-white" : "text-primary-800",
                  )}
                >
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1.5">
                  {plan.priceMonthly === null ? (
                    <span className="text-4xl font-extrabold">Gratis</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold">
                        {formatRupiah(plan.priceMonthly)}
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          plan.highlight ? "text-primary-200" : "text-ink-500",
                        )}
                      >
                        /bulan
                      </span>
                    </>
                  )}
                </div>
                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    plan.highlight ? "text-primary-100" : "text-ink-500",
                  )}
                >
                  {plan.description}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2.5 text-sm leading-relaxed",
                        plan.highlight ? "text-primary-50" : "text-ink-700",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                          plan.highlight ? "bg-gold-400" : "bg-gold-500",
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    href={plan.cta.href}
                    variant={plan.highlight ? "gold" : "outline"}
                    className="w-full"
                  >
                    {plan.cta.label}
                  </Button>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <ul className="mt-10 flex flex-col gap-2 text-sm text-ink-500 sm:flex-row sm:justify-center sm:gap-8">
            {pricingNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
