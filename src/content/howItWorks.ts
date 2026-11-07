export interface Step {
  no: string;
  title: string;
  description: string;
}

export const howItWorksSection = {
  eyebrow: "Cara Kerja",
  title: "Dari daftar sampai berlangganan, semua mandiri",
  description:
    "Langsung gunakan Kazeem setelah mendaftar dan login — tanpa perlu menghubungi admin terlebih dahulu.",
} as const;

export const steps: Step[] = [
  {
    no: "1",
    title: "Pilih paket",
    description: "Buka website Kazeem, pilih paket yang sesuai kebutuhan.",
  },
  {
    no: "2",
    title: "Registrasi",
    description: "Daftarkan pesantren, langsung dapatkan akun.",
  },
  {
    no: "3",
    title: "Login & fitur terbuka",
    description: "Fitur terbuka sesuai paket, jumlah role menyesuaikan.",
  },
  {
    no: "4",
    title: "Berlangganan tiap awal bulan",
    description: "Pembayaran subscription dilakukan setiap awal bulan.",
  },
  {
    no: "5",
    title: "Upgrade kapan saja",
    description: "Naikkan storage, feature, atau seluruh paket saat bertumbuh.",
  },
];
