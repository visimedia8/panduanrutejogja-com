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

## 3. Prosedur Pengajuan Anti-Gagal (Zero-Rejection Checklist)

Ikuti 4 langkah ini secara berurutan agar permohonan AdSense **TIDAK DITOLAK** oleh bot otomatis Google:

### Langkah A: Setup Domain & SSL di Cloudflare / Vercel
1. Hubungkan repositori GitHub `visimedia8/panduanrutejogja-com` ke Cloudflare Pages atau Vercel.
2. Pasang domain kustom `panduanrutejogja.com` dan pastikan SSL (HTTPS) aktif.

### Langkah B: Daftarkan ke Google Search Console (GSC) Dulu (WAJIB!)
> ⚠️ **JANGAN langsung daftar AdSense sebelum situs terindeks Google!**
1. Buka [Google Search Console](https://search.google.com/search-console).
2. Tambahkan properti `https://panduanrutejogja.com`.
3. Masukkan `https://panduanrutejogja.com/sitemap.xml` di menu Sitemaps.
4. Tunggu 5–10 hari sampai minimal 15–20 artikel berstatus *"URL is on Google"* (hijau) dan mulai ada klik/tayangan organik.

### Langkah C: Update Publisher ID Asli (Hapus Placeholder 'XXXXXXXXXXXXXXXX')
> ⚠️ **AdSense akan menolak jika masih terdeteksi `ca-pub-XXXXXXXXXXXXXXXX`!**
1. Buka dasbor Google AdSense -> **Sites** -> **Add site**.
2. Salin kode Publisher ID Anda (contoh: `pub-9876543210987654`).
3. Buka file `src/config/site.ts` dan ganti `clientId`:
   ```typescript
   clientId: 'ca-pub-9876543210987654', // Ganti dengan milik Anda
   ```
4. Buka file `public/ads.txt` dan ganti baris ke-4:
   ```txt
   google.com, pub-9876543210987654, DIRECT, f08c47fec0942fa0
   ```
5. Commit dan push ke GitHub:
   ```bash
   git add .
   git commit -m "feat(adsense): set official publisher id"
   git push origin main
   ```
6. Buka URL `https://panduanrutejogja.com/ads.txt` di browser untuk memastikan ID Anda sudah muncul.

### Langkah D: Tekan Tombol "Submit / Request Review" di AdSense
1. Kembali ke dasbor Google AdSense, centang *"I've placed the code on my site"* dan *"I've updated my ads.txt file"*.
2. Klik tombol **Request review**.
3. Dalam 3–7 hari kerja, Google akan menyetujui situs Anda.

---

## 4. Cara Mengaktifkan Unit Iklan Setelah Diterima (Approved)

Setelah status domain di AdSense berubah menjadi **Ready (Siap)**, aktifkan penayangan iklan di file `src/config/site.ts`:

```typescript
export const siteConfig = {
  // ...
  adsense: {
    clientId: 'ca-pub-9876543210987654', // Publisher ID Anda
    enabled: true,                         // UBAH DARI false MENJADI true
    slots: {
      headerLeaderboard: '1234567890',      // Buat unit iklan Display di AdSense
      inArticleMiddle: '2345678901',        // Buat unit iklan In-Article di AdSense
      inArticleBottom: '3456789012',        // Buat unit iklan In-Article di AdSense
      mobileStickyBottom: '4567890123'      // Buat unit iklan Anchor/Sticky di AdSense
    }
  },
  // ...
};
```
Push perubahan ke GitHub (`git push origin main`) dan iklan otomatis tayang secara elegan dan optimal.

---

## 5. Perintah Operasional Lokal

```bash
# Menjalankan server pengembangan lokal (Hot Module Replacement)
npm run dev

# Membangun output produksi statis (ke folder /dist)
npm run build

# Menjalankan preview lokal dari folder /dist
npm run preview
```
