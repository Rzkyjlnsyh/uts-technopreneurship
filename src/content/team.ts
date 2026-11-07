export interface Member {
  /** Nama lengkap anggota tim. */
  name: string;
  /** Peran dalam tim Kazeem. */
  role: "Hustler" | "Hipster" | "Hacker";
  /** Bidang keahlian singkat. */
  expertise: string;
  /**
   * Foto anggota — taruh file di `public/team/` lalu tulis path-nya di sini,
   * contoh: "/team/habib.jpg". Jika kosong, monogram inisial yang ditampilkan.
   */
  photo?: string;
}

export const teamSection = {
  eyebrow: "Tim Kazeem",
  title: "Tiga orang, tiga peran utama",
  description:
    "Tim inti Kazeem: Hustler yang mendorong bisnis, Hipster yang merancang pengalaman, dan Hacker yang membangun platform.",
} as const;

export const members: Member[] = [
  {
    name: "Habib Abdullah Faqih",
    role: "Hustler",
    expertise: "Team Leader • Administrasi & Keuangan",
    photo: "/team/habib-abdullah-faqih.jpg",
  },
  {
    name: "Moch Adi Setiawan",
    role: "Hipster",
    expertise: "UI/UX Designer",
    photo: "/team/moch-adi-setiawan.jpg",
  },
  {
    name: "Arika Norma Wahyu Dorroty",
    role: "Hacker",
    expertise: "Database Engineer & Web Developer",
    photo: "/team/arika-norma-wahyu-dorroty.jpg",
  },
];
