export interface Problem {
  no: string;
  title: string;
  description: string;
}

/**
 * Masalah inti yang dihadapi pesantren —
 * divalidasi dari survei 10 pondok pesantren di Tulungagung, Nganjuk, Kediri,
 * Jombang, Tuban, dan Jepara.
 */
export const problemSection = {
  eyebrow: "Masalah yang Kami Temukan",
  title: "Administrasi manual menghambat layanan pesantren",
  highlightWords: ["Administrasi manual"],
  surveyNote:
    "Divalidasi dari survei & wawancara ke 10 pondok pesantren di Tulungagung, Nganjuk, Kediri, Jombang, Tuban, dan Jepara.",
} as const;

export const problems: Problem[] = [
  {
    no: "01",
    title: "Data berserakan di Excel",
    description:
      "Data santri hingga keuangan dicatat di Excel — file menumpuk, versi membingungkan, pelaporan lambat.",
  },
  {
    no: "02",
    title: "Administrasi tidak terintegrasi",
    description:
      "Kepondokan, kemadrasahan, dan keuangan berjalan terpisah. Data ganda dan sulit dilacak lintas bagian.",
  },
  {
    no: "03",
    title: "Ustadz sibuk Administrasi",
    description:
      "Pencatatan kesehatan santri manual tiap hari. Tenaga pendidik kehabisan waktu untuk melayani santri.",
  },
  {
    no: "04",
    title: "Orang tua sulit memantau",
    description:
      "Wali santri tidak punya cara mudah mengetahui kondisi dan progres studi anak selama mondok.",
  },
];

export const solution = {
  eyebrow: "Solusi Kazeem",
  title: "Satu platform terintegrasi",
  description:
    "Kazeem adalah layanan Software as a Service (SaaS) berbasis cloud. Pesantren cukup mendaftar dan langsung menggunakan — tanpa instalasi, tanpa pemeliharaan infrastruktur, tanpa biaya besar di awal.",
  points: [
    "Sistem integrasi manajemen pondok pesantren",
    "Sistem informasi akademik terintegrasi",
    "Ruang komunikasi khusus pengurus",
    "Ruang khusus orang tua memantau studi anak",
  ],
} as const;
