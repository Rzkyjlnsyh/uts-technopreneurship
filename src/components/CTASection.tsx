import { cta, site } from "@/content/site";
import { Reveal } from "./motion/Reveal";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function CTASection() {
  return (
    <section id="cta" className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary-900 px-8 py-16 text-center sm:px-12">
            <div
              className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/5"
              aria-hidden="true"
            />
            <div
              className="absolute -left-10 -top-10 h-40 w-40 rounded-2xl bg-gold-400/10"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-100">
                {cta.description}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href={cta.primary.href} size="lg" variant="gold">
                  {cta.primary.label}
                </Button>
                <Button href={cta.secondary.href} size="lg" variant="onDark">
                  {cta.secondary.label}
                </Button>
              </div>
              <p className="mt-8 text-sm text-primary-200">
                Atau kunjungi langsung{" "}
                <a
                  href={site.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gold-400 underline-offset-4 hover:underline"
                >
                  {site.url.replace("https://www.", "")}
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
