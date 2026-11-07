import { addOns, addOnsSection, services, servicesSection } from "@/content/services";
import { cn } from "@/lib/cn";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        description={servicesSection.description}
      />

      <Container>
        {/* Bento grid — ukuran kartu bervariasi, tidak seragam */}
        <RevealGroup as="div" className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.name}>
              <article
                className={cn(
                  "group flex h-full flex-col rounded-xl border border-sand-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-900/5",
                  service.span === "wide" && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <h3 className="text-lg font-bold text-primary-800">{service.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-ink-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      {/* Add-ons — pita yang berjalan otomatis (marquee), jeda saat di-hover */}
      <Container id="addons" className="mt-20">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-gold-300 bg-gold-50 p-8 sm:p-10">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
                  {addOnsSection.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-ink-900">
                  {addOnsSection.title}
                </h3>
              </div>
              <p className="shrink-0 rounded-md bg-gold-400 px-3.5 py-2 text-sm font-bold text-primary-950">
                {addOnsSection.priceNote}
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">
              {addOnsSection.description}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="marquee-track relative mt-6 overflow-hidden"
            role="list"
            aria-label="Daftar add-ons Kazeem"
            style={
              {
                "--marquee-duration": "38s",
                "--marquee-gap": "0.625rem",
              } as React.CSSProperties
            }
          >
            <div className="marquee gap-2.5">
              {[...addOns, ...addOns].map((addOn, index) => (
                <span
                  key={`${addOn.name}-${index}`}
                  role="listitem"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-sand-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-900"
                >
                  {addOn.name}
                  {addOn.note && (
                    <span className="text-xs font-normal text-ink-500">{addOn.note}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
