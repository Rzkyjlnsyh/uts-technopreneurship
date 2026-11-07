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
  title: "Lima mahasiswa Udinus Kediri",
  description:
    "Tim dengan keahlian saling melengkapi — IT, marketing, dan desain — dipimpin oleh seorang Leader yang menumbuhkan kerja sama tim.",
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
    name: "Maritza Indira Arkaputri",
    role: "Hustler",
    expertise: "Social Media & Marketing",
    photo: "/team/maritza-indira-arkaputri.jpg",
  },
  {
    name: "Arika Norma Wahyu Dorroty",
    role: "Hacker",
    expertise: "Database Engineer & Web Developer",
    photo: "/team/arika-norma-wahyu-dorroty.jpg",
  },
  {
    name: "Agung Dwi Prayitno",
    role: "Hipster",
    expertise: "Desainer Grafis & Content Creator",
    photo: "/team/agung-dwi-prayitno.jpg",
  },
];
