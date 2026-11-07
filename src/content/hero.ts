/** Statistik kepercayaan di hero — sumber: Kemenag RI (2023–2024). */
export const heroStats = [
  { value: 41599, suffix: "", label: "pondok pesantren di Indonesia" },
  { value: 4.8, suffix: " juta+", label: "santri yang dikelola", decimals: 1 },
  { value: 46, suffix: "%", label: "pertumbuhan pesantren dalam 4 tahun" },
] as const;

export const hero = {
  eyebrow: "SaaS Manajemen Pondok Pesantren",
  title: "Kelola pondok pesantren tanpa tersiksa oleh administrasi.",
  description:
    "Kazeem menyatukan kepondokan, kesantrian, kepegawaian, kemadrasahan, keuangan, dan pimpinan dalam satu platform berbasis cloud — tanpa instalasi, tanpa tim IT, tanpa menguras waktu ustadz dan pengasuh.",
  primaryCta: { label: "Coba Gratis", href: "#harga" },
  secondaryCta: { label: "Lihat cara kerja", href: "#cara-kerja" },
  /** Kartu layanan yang melayang di sisi kanan hero. */
  preview: {
    browserLabel: "kazeem.web.id",
    statusLabel: "Sistem aktif",
    items: [
      { name: "Kepondokan", note: "Data santri & pengasuhan" },
      { name: "Keuangan", note: "SPP & laporan otomatis" },
      { name: "Kemadrasahan", note: "Akademik terintegrasi" },
    ],
  },
} as const;
