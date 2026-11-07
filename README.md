# Kazeem — Landing Page

Landing page resmi untuk **Kazeem** — platform SaaS manajemen pondok pesantren
yang mengintegrasikan kepondokan, kesantrian, kepegawaian, kemadrasahan,
keuangan, dan pimpinan dalam satu sistem berbasis cloud.

## Stack

- **Next.js 16** (App Router, static export — tidak ada server runtime)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (design token di `src/app/globals.css`)
- **Motion** (animasi scroll, counter, tilt kartu tim)

Alamat produksi: https://www.kazeem.web.id

## Aset Brand

Logo resmi sudah diolah dan disimpan di `public/logo/`:

- `kazeem-mark.webp` — logo mark saja (dipakai di navbar)
- `kazeem-logo.webp` — logo vertikal penuh (mark + wordmark, dipakai di footer)

Warna brand di `globals.css` diambil dari logo resmi: biru `#3F5881` dan
emas `#FDB52D`. Path aset dikonfigurasi di `src/content/site.ts`.

## Menjalankan

```bash
npm install
npm run dev        # development di http://localhost:3000
npm run build      # build static ke folder out/
npm run lint       # ESLint
```

Hasil `npm run build` adalah situs statis murni di `out/` — bisa di-host
di Vercel, Netlify, GitHub Pages, atau server statis mana pun.

## Struktur

```
src/
├── app/                 # Layout & halaman utama
│   ├── globals.css      # Design token (warna brand, animasi)
│   ├── layout.tsx       # Metadata & font
│   └── page.tsx         # Komposisi seluruh section
├── components/
│   ├── motion/          # Sistem animasi (Reveal, Counter, TiltCard)
│   ├── ui/              # Primitif (Button, Container, SectionHeading)
│   ├── Logo.tsx         # Brand mark Kazeem
│   └── [Section].tsx    # Section halaman
└── content/             # ← SEMUA teks & data ada di sini
```

**Filosofi: no hardcode.** Semua teks, harga, nama anggota, dan statistik
dikonfigurasi di `src/content/*.ts`. Untuk mengubah konten halaman, edit file
content yang sesuai — tidak perlu menyentuh komponen.

### Section & file content-nya

| Section        | File content                |
| -------------- | --------------------------- |
| Hero           | `content/hero.ts`           |
| Masalah+Solusi | `content/problem.ts`        |
| Layanan+Addons | `content/services.ts`       |
| Cara Kerja     | `content/howItWorks.ts`     |
| Mengapa Berbeda| `content/differentiators.ts`|
| Harga          | `content/pricing.ts`        |
| Bukti Nyata    | `content/validation.ts`     |
| Tim            | `content/team.ts`           |

## Menambah Foto Anggota Tim

Saat ini foto anggota tim berisi **placeholder otomatis** (siluet + inisial
warna brand) yang dapat diganti kapan saja.

1. Taruh foto di `public/team/` (rasio 4:5 direkomendasikan), contoh:
   `public/team/habib-abdullah-faqih.jpg`
2. Buka `src/content/team.ts`, pastikan field `photo` pada anggota bersangkutan
   sudah menunjuk ke `/team/habib-abdullah-faqih.jpg`.
3. Untuk mengubah nama atau keahlian, edit array `members` di file yang sama —
   tidak perlu menyentuh komponen sama sekali.

Bila field `photo` dikosongkan atau file gagal dimuat, halaman otomatis
menampilkan monogram inisial anggota tersebut — tidak ada broken image.

## Catatan Teknis

- **Static export** (`output: "export"`): permukaan serangan minimal,
  tidak ada server yang harus dipertahankan, caching CDN maksimal.
- **Aksesibilitas**: fokus keyboard yang jelas, `prefers-reduced-motion`
  dihormati (animasi otomatis dinonaktifkan), label semantik pada form navigasi.
- **Bahasa**: Bahasa Indonesia, target locale `id_ID`.

## Tim Kazeem

Habib Abdullah Faqih (Hustler) • Moch Adi Setiawan (Hipster) •
Arika Norma Wahyu Dorroty (Hacker) — Udinus Kediri.
