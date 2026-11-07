import { footerLinks, site } from "@/content/site";
import { LogoFull } from "./Logo";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-sand-300 bg-sand-100">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <LogoFull />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              Platform SaaS yang menyatukan seluruh administrasi pondok pesantren —
              dari kepondokan hingga keuangan, dengan ruang komunikasi khusus dan akses
              untuk orang tua santri.
            </p>
          </div>

          <nav>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
              Navigasi
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-500 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink-700">
              Terhubung
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={site.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-500 transition-colors hover:text-primary-700"
                >
                  Website resmi
                </a>
              </li>
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-500 transition-colors hover:text-primary-700"
                >
                  Instagram {site.socials.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-sand-300 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>
            © {site.year}–{new Date().getFullYear()} {site.name} • {site.university} •
            Maskot: {site.mascot}
          </p>
          <p>Dibangun dengan Next.js, Tailwind CSS &amp; Motion — static-first.</p>
        </div>
      </Container>
    </footer>
  );
}
