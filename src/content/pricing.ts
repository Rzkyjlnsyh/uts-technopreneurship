export interface Plan {
  name: string;
  /** Harga per bulan dalam Rupiah; null = gratis. */
  priceMonthly: number | null;
  highlight?: boolean;
  description: string;
  features: string[];
  cta: { label: string; href: string };
}

export const pricingSection = {
  eyebrow: "Harga",
  title: "Sesuaikan dengan kemampuan finansial pesantren",
  description:
    "Model monthly subscription — tidak perlu mengeluarkan dana besar di awal, bebas berhenti tanpa kehilangan banyak biaya. Pembayaran dilakukan setiap awal bulan.",
} as const;

export const plans: Plan[] = [
  {
    name: "Majjanan",
    priceMonthly: null,
    description: "Cobalah fitur Kazeem secara gratis sebelum berlangganan.",
    features: ["5 slot fitur", "Penyimpanan 1 GB", "Aktif satu bulan"],
    cta: { label: "Mulai Gratis", href: "#cta" },
  },
  {
    name: "Alif",
    priceMonthly: 299999,
    highlight: true,
    description: "Pilihan ideal pesantren yang mulai mendigitalisasi layanannya.",
    features: ["Storage hingga 10 GB", "Lebih banyak slot fitur", "Bisa tambah add-ons", "Upgrade kapan saja"],
    cta: { label: "Pilih Paket Alif", href: "#cta" },
  },
  {
    name: "Ba'",
    priceMonthly: 599999,
    description: "Akses seluruh fitur Kazeem untuk pesantren yang ingin maksimal.",
    features: ["Akses seluruh feature Kazeem", "Kapasitas storage lebih besar", "Semua add-ons tersedia"],
    cta: { label: "Pilih Paket Ba'", href: "#cta" },
  },
];

export const pricingNotes = [
  "Add-ons: Rp15.999/bulan per fitur.",
  "Additional maintenance (extra storage, feature, user): Rp9.999 per penambahan.",
] as const;
