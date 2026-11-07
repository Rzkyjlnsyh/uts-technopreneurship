import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "gold" | "outline" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center overflow-hidden rounded-md font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700",
  gold: "bg-gold-500 text-primary-950 hover:bg-gold-400",
  outline: "border border-primary-300 bg-white text-primary-700 hover:border-primary-500 hover:text-primary-800",
  onDark: "border border-white/30 text-white hover:border-white/80 hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}
