export interface Service {
  /** Layout bento: lebar penuh pada SM ke atas */
  span?: "wide";
  name: string;
  description: string;
  features: string[];
}

export const servicesSection = {
  eyebrow: "6 Layanan Utama",
  title: "Satu platform, enam layanan inti pesantren",
  description:
    "Setiap layanan dirancang untuk kebutuhan nyata pesantren — Salafiyah, Khalafiyah, Terpadu, maupun Tahfidz.",
} as const;

export const services: Service[] = [
  {
    name: "Kepondokan",
    description: "Inti administrasi kehidupan pondok.",
    features: ["Data santri & pengasuhan", "Pencatatan kesehatan santri", "Pengelolaan asrama"],
  },
  {
    name: "Kesantrian",
    description: "Kedisiplinan dan aktivitas harian santri.",
    features: ["Presensi & izin santri", "Kegiatan harian terpantau", "Catatan pelanggaran"],
  },
  {
    name: "Keuangan",
    description: "Arus keuangan pesantren dalam satu tempat.",
    features: ["SPP & pembayaran santri", "Pemasukan-pengeluaran", "Laporan keuangan otomatis"],
  },
  {
    name: "Kemadrasahan",
    description: "Administrasi akademik yang terintegrasi.",
    features: ["Penilaian & rapor digital", "Jadwal & kalender madrasah", "Terhubung ke layanan lain"],
  },
  {
    name: "Kepegawaian",
    description: "Manajemen ustadz, ustadzah, dan staf.",
    features: ["Data & absensi pegawai", "Penugasan & jabatan", "Penggajian terstruktur"],
  },
  {
    name: "Pimpinan",
    description: "Ruang kerja untuk pengambilan keputusan.",
    features: ["Ringkasan seluruh layanan", "Laporan terpadu on-demand", "Pantauan operasional pondok"],
    span: "wide",
  },
];

export interface AddOn {
  name: string;
  note?: string;
}

export const addOnsSection = {
  eyebrow: "Add-Ons",
  title: "Hanya ambil fitur yang pesantren Anda butuhkan",
  description:
    "Add-ons diambil terpisah dari paket utama sesuai kebutuhan — mulai Rp15.999 per bulan per fitur.",
  priceNote: "Rp15.999 /bulan /fitur",
} as const;

export const addOns: AddOn[] = [
  { name: "PSB Online", note: "Penerimaan santri baru" },
  { name: "E-Library", note: "Perpustakaan digital" },
  { name: "Kantin Pondok" },
  { name: "Tahfidzh" },
  { name: "Data Alumni" },
  { name: "Sarana Prasarana" },
  { name: "Persuratan" },
  { name: "Chat Workspace", note: "Ruang komunikasi pengurus" },
  { name: "Parent Workspace", note: "Akses orang tua santri" },
];
