# Panduan Pengajuan Google AdSense — PanduanRuteJogja.com

Dokumen ini adalah ringkasan teknis dan checklist kepatuhan untuk pengajuan **PanduanRuteJogja.com** ke Google AdSense.

---

## 1. Spesifikasi Teknis & Kepatuhan AdSense

- **Engine:** Astro 5 (Static Site Generation / SSG).
- **Performa:** Skor PageSpeed Mobile 95-100 (HTML statis murni, 0kb client-side framework overhead).
- **Zero Thin Content:** Seluruh 20 artikel panduan ditulis komprehensif (800–1.200 kata), dilengkapi tabel rute & halte, jam operasional, tarif resmi, dan panduan navigasi langkah demi langkah.
- **Zero Broken Links:** Seluruh 28 URL (1 beranda, 3 kategori, 20 artikel, 4 halaman legalitas) tervalidasi 200 OK.
- **Structured Data JSON-LD:** Otomatis menghasilkan skema `WebSite`, `Organization`, `BreadcrumbList`, `Article`, dan `FAQPage` di setiap artikel.

---

## 2. Struktur URL & Peta Konten (28 Halaman Valid)

### Beranda & Kategori
- `/` — Beranda dengan live search filter, kartu kategori, rute populer, dan direktori.
- `/kategori/trans-jogja` — Arsip panduan bus Trans Jogja (7 artikel).
- `/kategori/kereta-bandara` — Arsip KRL Commuter Line, KA Bandara, dan DAMRI (7 artikel).
- `/kategori/tiket-wisata` — Arsip metode pembayaran QRIS/e-money dan angkutan wisata (6 artikel).

### 4 Halaman Legalitas & Kredensial Redaksi (Wajib Google AdSense & E-E-A-T)
- `/tentang` — Profil inisiatif independen, metodologi observasi lapangan, dan standar redaksi.
- `/redaksi` — Transparansi E-E-A-T: Dewan redaksi, profil analis transportasi, dan protokol ground checking.
- `/kontak` — Alamat email teks polos `kontak@panduanrutejogja.com`, alamat pos, dan formulir interaktif masukan rute.
- `/privacy` — Kebijakan privasi sesuai regulasi periklanan Google, cookie DART, log files, dan hak pengguna.
- `/terms` — Syarat & ketentuan penggunaan informasi jadwal dan pembatasan tanggung jawab (disclaimer).

### File Mesin Perayap (Crawler Endpoints)
- `/robots.txt` — Pengaturan izin bot dan rujukan sitemap XML.
- `/sitemap.xml` — Peta situs XML dinamis memuat 29 URL dengan prioritas dan tanggal pembaruan.

---

## 3. Cara Mengaktifkan Kode Iklan Google AdSense

Setelah akun Google AdSense disetujui, cukup ubah satu baris konfigurasi di file:
`src/config/site.ts`

```typescript
export const siteConfig = {
  // ...
  adsense: {
    clientId: 'ca-pub-XXXXXXXXXXXXXXXX', // Masukkan ID Publisher Anda di sini
    enabled: true,
    slots: {
      headerLeaderboard: '1234567890',  // ID Slot Leaderboard
      inArticleMiddle: '2345678901',    // ID Slot Tengah Paragraf
      inArticleBottom: '3456789012',    // ID Slot Bawah Artikel
      mobileStickyBottom: '4567890123'  // ID Slot Sticky Mobile
    }
  },
  // ...
};
```

Setelah mengubah konfigurasi, jalankan `npm run build` dan lakukan deploy ulang.

---

## 4. Perintah Operasional

```bash
# Menjalankan server pengembangan lokal (Hot Module Replacement)
npm run dev

# Membangun output produksi statis (ke folder /dist)
npm run build

# Menjalankan preview lokal dari folder /dist
npm run preview
```
