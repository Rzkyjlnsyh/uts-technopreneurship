import { members, teamSection } from "@/content/team";
import { site } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "./motion/Reveal";
import { TiltCard } from "./motion/TiltCard";
import { RoleTag, TeamPhoto } from "./TeamPhoto";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";

export function TeamSection() {
  return (
    <section id="tim" className="py-20 sm:py-24">
      <SectionHeading
        eyebrow={teamSection.eyebrow}
        title={teamSection.title}
        description={teamSection.description}
      />

      <Container>
        <RevealGroup as="div" className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <RevealItem key={member.name}>
              <TiltCard className="h-full">
                <article
                  className="group relative h-full overflow-hidden rounded-2xl border border-sand-200 bg-white"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {/* Area foto — rasio konsisten, overlay nama saat hover */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-primary-800">
                    <TeamPhoto name={member.name} photo={member.photo} />

                    {/* Gradient? Tidak — overlay solid semi-transparan */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-primary-950/80 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-mono text-xs text-primary-100">{member.expertise}</p>
                    </div>
                  </div>

                  {/* Identitas */}
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h3 className="text-base font-bold leading-snug text-ink-900">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs text-ink-500">{member.expertise}</p>
                    </div>
                    <RoleTag role={member.role} />
                  </div>
                </article>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-10 text-center text-sm text-ink-500">
            Kategori usaha: {site.category} • Tahapan: {site.stage} • {site.university}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
