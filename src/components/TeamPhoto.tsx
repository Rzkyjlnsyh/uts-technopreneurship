"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

const ROLE_COLOR: Record<string, string> = {
  Hustler: "bg-primary-100 text-primary-800",
  Hipster: "bg-gold-100 text-gold-800",
  Hacker: "bg-primary-900 text-white",
};

/** Inisial nama untuk monogram — huruf pertama + terakhir. */
function initials(name: string): string {
  const words = name.split(" ").filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0]![0]!.toUpperCase();
  return (words[0]![0]! + words[words.length - 1]![0]!).toUpperCase();
}

/**
 * Foto anggota tim — fallback monogram otomatis bila file foto
 * belum tersedia (cukup taruh foto di public/team/ dan set config).
 */
export function TeamPhoto({
  name,
  photo,
  className,
}: {
  name: string;
  photo?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!photo || failed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-primary-800",
          className,
        )}
        aria-hidden="true"
      >
        <span className="font-mono text-4xl font-extrabold text-gold-400">
          {initials(name)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={photo}
      alt={`Foto ${name}`}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      className={cn(
        "h-full w-full object-cover transition-all duration-500",
        "grayscale group-hover:grayscale-0 group-hover:scale-105",
        className,
      )}
      onError={() => setFailed(true)}
    />
  );
}

export function RoleTag({ role }: { role: string }) {
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-xs font-bold",
        ROLE_COLOR[role] ?? "bg-sand-200 text-ink-700",
      )}
    >
      {role}
    </span>
  );
}
