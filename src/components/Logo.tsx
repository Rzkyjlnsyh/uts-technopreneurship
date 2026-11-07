import Image from "next/image";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** Logo mark Kazeem ( hasil crop dari logo resmi, latar transparan). */
export function LogoMark({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={site.logoMark}
      alt="Logo mark Kazeem"
      width={256}
      height={278}
      priority={priority}
      className={cn("h-9 w-auto", className)}
    />
  );
}

/** Logo horizontal pada navbar: mark + wordmark teks. */
export function Logo({
  className,
  textClassName,
}: {
  className?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "text-xl font-extrabold tracking-tight text-primary-800",
          textClassName,
        )}
      >
        Kazeem
      </span>
    </span>
  );
}

/** Logo vertikal penuh (mark + wordmark) — dipakai di footer. */
export function LogoFull({ className }: { className?: string }) {
  return (
    <Image
      src={site.logoFull}
      alt="Logo Kazeem"
      width={640}
      height={805}
      className={cn("h-14 w-auto", className)}
    />
  );
}
