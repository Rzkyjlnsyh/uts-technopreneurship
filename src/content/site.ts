/**
 * Konfigurasi global brand & situs Kazeem.
 * Satu-satunya tempat untuk identitas brand — ubah di sini, tembus ke mana-mana.
 */
export const site = {
  name: "Kazeem",
  url: "https://www.kazeem.web.id",
  title: "Kazeem — Software Manajemen Pondok Pesantren Berbasis SaaS",
  description:
    "Kazeem adalah platform manajemen pondok pesantren yang mengintegrasikan kepondokan, kesantrian, kepegawaian, kemadrasahan, keuangan, dan pimpinan dalam satu sistem berbasis cloud.",
  category: "Bisnis Digital",
  stage: "Tahapan Awal",
  year: 2024,
  university: "Udinus Kediri",
  mascot: "Kama",
  socials: {
    instagram: "https://www.instagram.com/_kazeem.id",
    instagramHandle: "@_kazeem.id",
    website: "https://www.kazeem.web.id",
  },
  /** Aset logo resmi (diolah dari file asli, latar transparan, format webp). */
  logoMark: "/logo/kazeem-mark.webp",
  logoFull: "/logo/kazeem-logo.webp",
} as const;

/** Navigasi utama — urutan ini yang dilihat pengguna di navbar. */
export const nav = [
  { label: "Masalah", href: "#masalah" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Harga", href: "#harga" },
  { label: "Tim", href: "#tim" },
] as const;

export const footerLinks = [
  { label: "Masalah", href: "#masalah" },
  { label: "Layanan Utama", href: "#layanan" },
  { label: "Add-Ons", href: "#addons" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Mengapa Berbeda", href: "#mengapa" },
  { label: "Harga", href: "#harga" },
  { label: "Bukti Nyata", href: "#bukti" },
  { label: "Tim", href: "#tim" },
] as const;

/** Section ajakan bertindak (call to action) utama. */
export const cta = {
  title: "Siap membawa pesantren Anda ke era digital?",
  description:
    "Mulai gratis dengan paket Majjanan, atau pilih paket Alif & Ba' sesuai kebutuhan. Registrasi mandiri — tanpa perlu menghubungi admin terlebih dahulu.",
  primary: { label: "Coba Gratis Sekarang", href: "https://www.kazeem.web.id" },
  secondary: { label: "Lihat harga", href: "#harga" },
} as const;
