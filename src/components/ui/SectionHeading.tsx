import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Container>
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {eyebrow && (
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-600">
            {eyebrow}
          </p>
        )}
        <h2 className="text-balance text-3xl font-extrabold leading-[1.15] text-ink-900 sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-ink-500">{description}</p>
        )}
      </div>
    </Container>
  );
}
