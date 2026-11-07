/**
 * Bukti nyata (social proof) — dipangkas dari Bab 5 & 7 proposal:
 * pengujian produk, jejaring pesantren, dan keselarasan SDGs.
 */

export const validationSection = {
  eyebrow: "Bukti Nyata",
  title: "Sudah divalidasi langsung, bukan sekadar konsep",
} as const;

export const uat = {
  value: 66,
  unit: "responden",
  title: "User Acceptance Testing",
  description:
    "Pengujian UI/UX prototipe dengan variabel ease of use, behavioral intention, dan attitude toward using.",
} as const;

export const pesantrenNetwork = {
  title: "Siap digunakan di pesantren mitra kami",
  description:
    "Tim Kazeem adalah alumni sekaligus pengurus pondok pesantren, dengan jejaring yang sudah turun langsung.",
  items: [
    "Pondok Pesantren Al-Mahrusiyah, Kediri",
    "Pondok Pesantren Roudhotul Hasanain, Kediri",
    "Pondok Pesantren Matlabus Salik, Nganjuk",
  ],
} as const;

export const sdg = {
  number: 4,
  title: "Pendidikan Berkualitas",
  titleEn: "Quality Education",
  description:
    "Dengan manajemen pesantren yang baik, ustadz dan ustadzah punya lebih banyak waktu untuk menyiapkan pembelajaran.",
} as const;
