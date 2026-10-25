import { writeArticle } from './article-helper.js';

// 15. Cara Pembayaran Trans Jogja
writeArticle(
  'cara-pembayaran-trans-jogja-emoney-qris-tunai',
  {
    title: 'Cara Pembayaran Trans Jogja: Kartu E-Money vs QRIS vs Tunai',
    description: 'Panduan lengkap metode pembayaran bus Trans Jogja. Kenali cara bayar non-tunai via QRIS dompet digital, kartu e-money perbankan, kartu berlangganan, serta ketersediaan loket tunai.',
    category: 'tiket-wisata',
    publishDate: '2026-10-22',
    imageAlt: 'Cara Pembayaran Tiket Trans Jogja QRIS dan E Money',
    operationalHours: '05.30 – 21.30 WIB',
    fare: 'Rp3.600 (Umum) / Rp2.000 (Pelajar)',
    routeType: 'Panduan Transaksi Pembayaran',
    halteList: [
      { name: 'Pembayaran QRIS', location: 'Seluruh Bus & Halte Permanen', transit: 'Mendukung Semua E-Wallet & Mobile Banking' },
      { name: 'Kartu Uang Elektronik', location: 'Mesin Tap-On-Bus & Barrier Halte', transit: 'BCA Flazz, Mandiri e-Money, BNI TapCash, BRI Brizzi' },
      { name: 'Kartu Khusus Trans Jogja', location: 'Loket Halte Besar', transit: 'Kartu Reguler & Kartu Pelajar Khusus' },
      { name: 'Loket Tunai Terbatas', location: 'Halte Tertentu (Terminal Jombor, Giwangan, Adisutjipto)', transit: 'Harap Menyiapkan Uang Pas' }
    ],
    faqs: [
      {
        question: 'Apakah satu kartu e-money bisa dipakai untuk rombongan lebih dari satu orang di Trans Jogja?',
        answer: 'Ya, di halte permanen berpintu putar atau mesin portabel kondektur, Anda bisa melakukan tap kartu e-money berkali-kali untuk membayari anggota keluarga atau rombongan Anda.'
      },
      {
        question: 'Apakah aplikasi GoPay, OVO, atau DANA bisa untuk bayar Trans Jogja?',
        answer: 'Sangat bisa. Anda cukup membuka fitur Scan/Bayar QRIS di aplikasi dompet digital Anda, lalu scan QR code yang disodorkan oleh kondektur bus atau petugas loket halte.'
      }
    ]
  },
  `## Era Pembayaran Non-Tunai di Angkutan Perkotaan Jogja

Dinas Perhubungan Daerah Istimewa Yogyakarta bersama operator pengelola bus Trans Jogja (PT Jogja Tugu Trans dan PT Anindya Mitra Internasional) secara masif telah menerapkan digitalisasi penuh pada sistem pemungutan tarif tiket. Transformasi ini sejalan dengan program Gerakan Nasional Non-Tunai (GNNT) yang dicanangkan Bank Indonesia untuk menciptakan sistem transaksi yang lebih cepat, aman, akuntabel, dan higienis.

Bagi warga lokal, mahasiswa, maupun pelancong yang berlibur di Yogyakarta, memahami opsi pembayaran yang sah di bus Trans Jogja adalah hal wajib agar perjalanan Anda tidak terhambat di pintu halte. Saat ini, sistem Trans Jogja mendukung tiga pilar metode pembayaran: **QRIS Dinamis, Kartu Uang Elektronik (KUE) Perbankan, dan Kartu Langganan Khusus**.

---

## Membedah 3 Metode Pembayaran Resmi

### 1. QRIS (Quick Response Code Indonesian Standard) — Opsi Paling Fleksibel
QRIS adalah metode yang paling digemari wisatawan nusantara karena hampir semua orang memiliki aplikasi dompet digital atau mobile banking di ponsel cerdas mereka:
* **Aplikasi yang Didukung:** GoPay, OVO, DANA, ShopeePay, LinkAja, AstraPay, BCA Mobile, Livin by Mandiri, BRImo, BNI Mobile, BSI Mobile, Bank Jateng, dan aplikasi perbankan apa pun yang memiliki fitur scan QRIS.
* **Prosedur Pembayaran:**
  1. Ketika naik ke dalam bus atau memasuki halte permanen, sampaikan kepada petugas kondektur: *"Bayar QRIS untuk 1 orang"* (atau sebutkan jumlah rombongan Anda).
  2. Petugas akan mengetikkan nominal tarif (Rp3.600 per orang) pada mesin EDC portabel, yang kemudian akan memunculkan kode QR di layar mesin.
  3. Buka aplikasi e-wallet Anda, arahkan kamera ke kode QR, masukkan PIN rahasia Anda, dan selesaikan transaksi.
  4. Perlihatkan layar notifikasi "Pembayaran Berhasil" kepada petugas, dan petugas akan menyerahkan struk bukti perjalanan kertas.

### 2. Kartu Uang Elektronik (KUE) Perbankan — Solusi Cepat Tanpa Sinyal
Jika kuota internet Anda habis atau baterai ponsel sedang lemah, kartu uang elektronik fisik adalah penyelamat terbaik:
* **Kartu yang Diterima:** Mandiri e-Money, BCA Flazz, BNI TapCash, dan BRI Brizzi.
* **Prosedur Transaksi:** Tempelkan (*tap*) kartu Anda pada alat reader di gerbang putar halte tertutup atau pada mesin validator portabel yang dipegang pramugara bus hingga lampu indikator menyala hijau dan terdengar bunyi 'bip'.
* **Fleksibilitas Rombongan:** Berbeda dengan KRL yang menerapkan sistem satu kartu untuk satu orang (*single ticket rule*), di Trans Jogja **satu kartu e-money dapat di-tap berkali-kali** untuk membayar seluruh anggota keluarga atau rombongan teman Anda selama saldo di dalam kartu mencukupi.

### 3. Kartu Khusus Trans Jogja Berlangganan
* Diterbitkan khusus bagi pelajar SD, SMP, SMA, dan mahasiswa perguruan tinggi di DIY yang telah mendaftar di kantor Dishub DIY.
* Memberikan tarif diskon bersubsidi sebesar **Rp2.000 per perjalanan**.

---

## Bagaimana dengan Pembayaran Uang Tunai (Cash)?

Penting untuk dicatat bahwa pembayaran menggunakan uang tunai saat ini **sangat dibatasi** dan secara bertahap dihapuskan:
* Di halte-halte terbuka bertangga portabel di pinggir jalan, kondektur bus **tidak melayani pembayaran tunai** dan tidak menyediakan uang kembalian.
* Pembayaran tunai hanya dapat dilayani di beberapa halte transit besar yang memiliki loket kasir manual berdinding kaca (seperti Terminal Jombor, Terminal Giwangan, Halte Adisutjipto, dan Halte Malioboro).
* Oleh karena itu, selalu pastikan Anda memiliki saldo minimal Rp10.000 di e-wallet atau kartu uang elektronik Anda sebelum memulai hari berwisata di Yogyakarta.`
);

// 16. Cara Beli Tiket KRL Jogja - Solo
writeArticle(
  'cara-beli-tiket-krl-jogja-solo-access-kai-gotransit',
  {
    title: 'Cara Membeli Tiket KRL Jogja-Solo Menggunakan Aplikasi Access by KAI & GoTransit',
    description: 'Panduan step-by-step beli tiket KRL Commuter Line Jogja Solo secara online tanpa antre loket. Pilih aplikasi Access by KAI atau fitur GoTransit di aplikasi Gojek.',
    category: 'tiket-wisata',
    publishDate: '2026-10-23',
    imageAlt: 'Cara Beli Tiket KRL Jogja Solo GoTransit Access KAI',
    operationalHours: '24 Jam Pembelian Online (Jadwal Kereta 05.00 - 22.35 WIB)',
    fare: 'Rp8.000',
    routeType: 'Tutorial Tiket Digital',
    halteList: [
      { name: 'Fitur GoTransit (Gojek)', location: 'Aplikasi Smartphone Gojek', transit: 'Metode Pembayaran GoPay / GoPay Later' },
      { name: 'Access by KAI', location: 'Aplikasi Smartphone Resmi PT KAI', transit: 'Metode Pembayaran KAI Pay, QRIS, LinkAja' },
      { name: 'Gate Scanner Stasiun', location: 'Seluruh 13 Stasiun KRL Jogja-Solo', transit: 'Scan Barcode Layar Ponsel' }
    ],
    faqs: [
      {
        question: 'Apakah tiket GoTransit KRL ada batas masa berlakunya?',
        answer: 'Tiket QR GoTransit berlaku pada hari yang sama saat pembelian hingga jam operasional KRL terakhir di hari tersebut berakhir.'
      },
      {
        question: 'Apakah tiket QR KRL bisa dibatalkan (refund)?',
        answer: 'Tiket QR KRL yang belum di-scan di gate masuk stasiun dapat dibatalkan melalui aplikasi sebelum melewati batas waktu operasional hari berjalan.'
      }
    ]
  },
  `## Kemudahan Pembelian Tiket KRL Digital Tanpa Antre

Era mengantre berdesak-desakan di loket stasiun kereta api untuk membeli tiket kertas atau menukar kartu jaminan harian berangsur sirna. Bagi para pengguna moda **KRL Commuter Line relasi Yogyakarta – Solo Balapan – Palur**, PT Kereta Commuter Indonesia (KAI Commuter) telah menghadirkan ekosistem pertiketan digital mutakhir berbasis kode QR (*QR Code Ticketing*).

Kini, Anda cukup memanfaatkan smartphone di genggaman tangan untuk memesan tiket kereta komuter bertarif flat **Rp8.000** hanya dalam hitungan beberapa detik. Dua kanal pemesanan tiket online terpopuler dan terbukti paling handal adalah **GoTransit (di dalam aplikasi Gojek)** dan **Access by KAI**.

---

## Metode 1: Panduan Membeli Tiket via GoTransit (Aplikasi Gojek)

Fitur GoTransit adalah cara paling praktis bagi sebagian besar wisatawan karena tidak memerlukan unduhan aplikasi baru jika Anda sudah terbiasa menggunakan Gojek untuk mobilitas harian:

1. **Buka Aplikasi Gojek:** Pada halaman beranda, pilih menu **GoTransit** (atau ketik "KRL" di kolom pencarian aplikasi).
2. **Pilih Menu "Beli Tiket KRL":** Layar akan menampilkan antarmuka peta rute komuter wilayah Jabodetabek dan Jogja-Solo. Pastikan pilihan wilayah Anda adalah **Jogja – Solo**.
3. **Pilih Stasiun Asal & Stasiun Tujuan:** Masukkan stasiun keberangkatan Anda (contoh: *Yogyakarta / Lempuyangan / Maguwo*) dan stasiun tujuan akhir Anda (contoh: *Solo Balapan / Purwosari / Palur*).
4. **Tentukan Jumlah Tiket:** Anda dapat membeli hingga 4 tiket sekaligus dalam satu kali transaksi jika bepergian bersama keluarga atau teman.
5. **Konfirmasi & Bayar:** Total tarif (Rp8.000 per orang) akan otomatis dipotong dari saldo GoPay Anda.
6. **Mendapatkan Kode Barcode Tiket:** Setelah pembayaran berhasil, aplikasi akan menghasilkan kode QR unik.
7. **Proses Masuk (Tap-In):** Di stasiun keberangkatan, arahkan layar ponsel Anda ke kaca scanner mesin gate masuk KRL. Setelah terdengar suara verifikasi dan palang pintu terbuka, masuklah ke peron.
8. **Proses Keluar (Tap-Out):** Saat tiba di stasiun tujuan, buka kembali aplikasi Gojek dan scan kode QR yang sama di gate keluar stasiun.

---

## Metode 2: Panduan Membeli Tiket via Access by KAI

Aplikasi resmi dari PT Kereta Api Indonesia ini sangat cocok bagi komuter rutin atau pengguna yang juga sering memesan tiket kereta api jarak jauh antarkota:

1. **Buka Aplikasi Access by KAI:** Masuk ke akun KAI Anda dan klik tab menu **Commuter Line**.
2. **Pilih Rute Perjalanan:** Masukkan stasiun asal dan stasiun tujuan di koridor Jogja–Solo.
3. **Pilih Metode Pembayaran:** Anda dapat membayar menggunakan saldo dompet digital *KAI Pay*, saldo LinkAja, atau memindai kode QRIS nasional.
4. **Akses E-Ticket:** Tiket yang berhasil dibeli akan tersimpan rapi pada menu "Tiket Saya", siap digunakan untuk proses boarding di gate stasiun.

---

## 4 Tips Penting Menggunakan Tiket QR di Stasiun

* **Tingkatkan Kecerahan Layar Ponsel:** Sebelum mendekatkan layar ponsel ke mesin scanner turnstile, atur tingkat kecerahan (*brightness*) layar smartphone Anda ke tingkat maksimal agar sensor kamera mesin gate dapat membaca barcode dengan cepat.
* **Tangkapan Layar (Screenshot) Diizinkan:** Jika sinyal seluler di dalam area stasiun melemah, tangkapan layar kode QR yang masih aktif tetap dapat dibaca oleh mesin scanner stasiun.
* **Batas Waktu Berlaku:** Tiket QR KRL berlaku hingga jadwal kereta terakhir pada tanggal pembelian yang sama. Bila tidak digunakan hingga pukul 23.59 WIB, tiket akan hangus otomatis.
* **Perhatikan Gate Khusus QR:** Di beberapa stasiun besar seperti Stasiun Tugu dan Solo Balapan, carilah gate yang memiliki tanda stiker bertuliskan **"Scanner QR Code"** di bagian atas tiang barrier.`
);

// 17. Wisata Borobudur
writeArticle(
  'panduan-rute-angkutan-umum-jogja-candi-borobudur',
  {
    title: 'Panduan Rute Angkutan Umum dari Kota Jogja Menuju Candi Borobudur',
    description: 'Cara hemat dan nyaman menuju Candi Borobudur dari Malioboro atau Stasiun Tugu Jogja naik bus umum, Trans Jogja, DAMRI KSPN, atau bus jurusan Magelang.',
    category: 'tiket-wisata',
    publishDate: '2026-10-23',
    imageAlt: 'Rute Angkutan Umum Jogja ke Candi Borobudur',
    operationalHours: '06.00 – 17.00 WIB',
    fare: 'Rp20.000 – Rp40.000 (Sesuai Moda)',
    routeType: 'Panduan Angkutan Wisata Antar-Kabupaten',
    halteList: [
      { name: 'Stasiun Tugu / Malioboro', location: 'Pusat Kota Jogja', transit: 'Trans Jogja Koridor 2A atau 5A ke Jombor' },
      { name: 'Terminal Jombor (Sleman)', location: 'Jl. Magelang Km 6', transit: 'Pemberangkatan Bus Antarkota & Minibus Borobudur' },
      { name: 'Terminal Muntilan', location: 'Kabupaten Magelang', transit: 'Pemberhentian Antara' },
      { name: 'Terminal Borobudur', location: 'Kawasan Wisata Candi Borobudur', transit: 'Jalan Kaki 500m / Shuttle Listrik Candi' }
    ],
    faqs: [
      {
        question: 'Berapa total biaya angkutan umum dari Malioboro ke Candi Borobudur?',
        answer: 'Total biaya jika naik Trans Jogja (Rp3.600) + Bus Antarkota Jombor-Borobudur (sekitar Rp25.000-Rp30.000) adalah sekitar Rp30.000 hingga Rp35.000 per orang sekali jalan.'
      },
      {
        question: 'Jam berapa bus terakhir dari Terminal Borobudur kembali ke Jogja?',
        answer: 'Bus umum terakhir dari Terminal Borobudur ke Terminal Jombor Jogja biasanya berangkat antara pukul 16.30 hingga 17.00 WIB sore. Pastikan Anda sudah berada di terminal sebelum jam tersebut.'
      }
    ]
  },
  `## Berpetualang ke Candi Borobudur Tanpa Kendaraan Pribadi

Kemegahan Candi Borobudur sebagai mahakarya warisan dunia UNESCO peninggalan Dinasti Syailendra abad ke-8 selalu menjadi magnet pariwisata terkuat di kawasan Jawa Tengah dan Yogyakarta. Secara geografis, candi megah ini terletak di Kecamatan Borobudur, Kabupaten Magelang, Jawa Tengah—berjarak sekitar 42 kilometer ke arah barat laut dari pusat Kota Yogyakarta.

Meskipun secara administratif berada di provinsi yang berbeda, akses transportasi umum dari Kota Gudeg menuju Candi Borobudur telah terhubung dengan sangat baik, teratur, aman, dan ramah di kantong bagi para *backpacker* maupun wisatawan keluarga yang ingin menghemat biaya sewa mobil pribadi.

---

## Opsi Rute Paling Populer: Via Terminal Jombor (Paling Murah)

Skema rute dua tahap via Terminal Jombor adalah jalur paling klasik yang digunakan puluhan ribu pelancong setiap tahunnya:

### Tahap 1: Dari Pusat Kota (Malioboro / Stasiun Tugu) Menuju Terminal Jombor
* Naiklah bus **Trans Jogja Koridor 2A** dari Halte Malioboro 1 atau Halte Malioboro 2 (tarif Rp3.600).
* Bus akan melaju menyusuri kawasan cagar budaya Kotabaru, Terban, Wirobrajan, Pingit, dan mengakhiri perjalanan di peron dalam **Terminal Bus Jombor** (waktu tempuh sekitar 40–50 menit).

### Tahap 2: Dari Terminal Jombor Menuju Terminal Borobudur
* Begitu turun di Terminal Jombor, berjalanlah ke arah peron utara khusus bus antarkota jurusan Magelang.
* Carilah bus sedang (*medium bus*) atau mikrobus yang memiliki plang kaca bertuliskan **"JOGJA – BOROBUDUR LANGSUNG"** (umumnya dioperasikan oleh PO Cemara Tunggal atau armada koperasi angkutan setempat).
* **Tarif Bus:** Berkisar antara **Rp25.000 hingga Rp30.000 per orang**. Bayarkan ongkos secara tunai kepada kondektur saat bus sedang melaju.
* **Rute Perjalanan:** Bus meluncur menyusuri Jalan Raya Magelang, melintasi kota Muntilan, melewati kawasan cagar budaya Candi Mendut dan Candi Pawon, sebelum akhirnya berhenti di pelataran **Terminal Bus Borobudur** (waktu tempuh sekitar 60–75 menit).
* Dari Terminal Borobudur, Anda cukup berjalan kaki santai sejauh 500 meter melintasi deretan kios cinderamata menuju gerbang loket masuk utama Candi Borobudur.

---

## Opsi Rute Alternatif: Minibus DAMRI KSPN Eksekutif

Jika Anda mendambakan kenyamanan lebih tinggi dengan armada berpendingin udara dingin (*full AC*) dan fasilitas kursi reclining:
* Pemerintah mengoperasikan armada minivan Toyota HiAce **DAMRI Kawasan Strategis Pariwisata Nasional (KSPN)**.
* **Titik Keberangkatan:** Pool DAMRI Stasiun Tugu Yogyakarta dan Bandara YIA.
* **Tarif Tiket:** Sekitar Rp30.000 – Rp80.000 per orang. Tiket dapat dipesan secara online melalui aplikasi DAMRI Apps.

---

## 4 Tips Krusial Perjalanan Pulang ke Jogja

1. **Perhatikan Jadwal Bus Pulang Terakhir:** Bus umum reguler dari Terminal Borobudur kembali ke Terminal Jombor Jogja beroperasi mulai pukul 06.00 WIB hingga pemberangkatan terakhir sekitar pukul **16.30 – 17.00 WIB sore**. Jangan sampai Anda tertinggal armada terakhir, karena setelah jam tersebut Anda terpaksa menyewa taksi daring dengan tarif tinggi.
2. **Transit Candi Mendut:** Dalam perjalanan pulang, Anda bisa meminta kondektur untuk menurunkan Anda di depan Candi Mendut untuk berziarah atau berfoto sejenak sebelum naik bus berikutnya.
3. **Bawa Uang Tunai Pecahan Kecil:** Siapkan lembaran uang Rp5.000, Rp10.000, dan Rp20.000 untuk mempermudah transaksi tiket bus pedesaan dan penitipan barang di kawasan candi.`
);

// 18. Wisata Parangtritis
writeArticle(
  'transportasi-umum-pantai-parangtritis-terminal-giwangan',
  {
    title: 'Transportasi Umum Menuju Pantai Parangtritis dari Terminal Giwangan',
    description: 'Panduan lengkap naik bus umum pedesaan / perintis dari Terminal Giwangan Yogyakarta menuju Pantai Parangtritis Bantul. Jam keberangkatan, tarif tiket, dan tips aman.',
    category: 'tiket-wisata',
    publishDate: '2026-10-24',
    imageAlt: 'Transportasi Menuju Pantai Parangtritis dari Giwangan',
    operationalHours: '06.00 – 17.00 WIB',
    fare: 'Rp15.000 – Rp20.000',
    routeType: 'Bus Angkutan Pedesaan / AKDP',
    halteList: [
      { name: 'Terminal Giwangan', location: 'Peron Angkutan Antarkota Dalam Provinsi (AKDP)', transit: 'Koneksi Trans Jogja Seluruh Koridor' },
      { name: 'Jl. Imogiri Barat / Sewon', location: 'Kabupaten Bantul Utara', transit: 'Institut Seni Indonesia (ISI)' },
      { name: 'Kretek Bantul', location: 'Jembatan Kretek Kali Opak', transit: 'Simpang Jalur Lintas Selatan (JLS)' },
      { name: 'Sub-Terminal Parangtritis', location: 'Kawasan Pesisir Pantai Selatan', transit: 'Pantai Parangtritis, Parangkusumo, Gumuk Pasir' }
    ],
    faqs: [
      {
        question: 'Berapa lama perjalanan dari Terminal Giwangan ke Pantai Parangtritis?',
        answer: 'Waktu tempuh normal menggunakan bus umum adalah sekitar 45 hingga 60 menit melintasi Jalan Parangtritis lurus ke arah selatan sejauh 28 kilometer.'
      },
      {
        question: 'Jam berapa bus terakhir dari Parangtritis kembali ke Kota Jogja?',
        answer: 'Bus terakhir dari Parangtritis menuju Giwangan biasanya standby hingga pukul 17.00 WIB menjelang terbenamnya matahari (sunset).'
      }
    ]
  },
  `## Menikmati Pesona Pantai Selatan Yogyakarta dengan Bus Umum

Pantai Parangtritis yang terletak di Kapanewon Kretek, Kabupaten Bantul, merupakan ikon wisata pesisir paling masyhur di Daerah Istimewa Yogyakarta. Terkenal dengan gulungan ombak Samudra Hindia yang bertenaga, hamparan pasir hitam vulkanik yang luas, tebing karst Bukit Paralayang Watugupit yang megah, serta pemandangan matahari terbenam (*sunset*) yang magis, Parangtritis selalu menjadi destinasi wajib bagi wisatawan.

Bagi Anda yang tidak membawa kendaraan pribadi atau enggan menyewa sepeda motor karena faktor keselamatan, Anda tetap dapat menjangkau pantai selatan ini menggunakan **bus umum pedesaan Antarkota Dalam Provinsi (AKDP)** dengan ongkos yang sangat terjangkau.

---

## Panduan Perjalanan Lengkap dari Kota Menuju Parangtritis

Perjalanan menuju pesisir selatan berpusat di terminal induk terbesar Yogyakarta: **Terminal Bus Giwangan**. Berikut langkah-langkah detailnya:

### 1. Menuju Terminal Giwangan dari Pusat Kota
* Dari kawasan Malioboro atau Stasiun Tugu, Anda cukup menaiki bus **Trans Jogja Koridor 3A atau Koridor 4A** (tarif Rp3.600).
* Bus akan mengantarkan Anda masuk langsung ke dalam area peron Terminal Giwangan tanpa perlu menyeberang jalan raya.

### 2. Mencari Peron Bus Jalur Parangtritis
* Di dalam Terminal Giwangan, ikuti papan petunjuk arah menuju jalur keberangkatan **Bus AKDP / Angkutan Pedesaan**.
* Carilah deretan bus sedang (sering dijuluki *bus tuyul* atau mikrobus medium) berwarna hijau atau merah yang memasang papan rute **"JOGJA – PARANGTRITIS PP"**.
* Tidak perlu memesan tiket sebelumnya; Anda cukup langsung menaiki armada yang sedang bersiap di peron dan menunggu bus berangkat.

### 3. Waktu Tempuh & Tarif Resmi
* **Tarif Tiket:** Berkisar antara **Rp15.000 hingga Rp20.000 per orang** untuk sekali jalan. Pembayaran dilakukan secara tunai kepada kondektur saat bus sudah berjalan melintasi Jalan Parangtritis.
* **Waktu Tempuh:** Sekitar **45 hingga 60 menit** untuk menempuh jarak sekitar 28 kilometer melintasi jalan lurus Jalan Parangtritis melewati Sewon, Bantul, dan jembatan ikonik Kali Opak di Kretek.
* **Pemberhentian Akhir:** Bus akan mengakhiri perjalanan di **Sub-Terminal Parangtritis**, yang berlokasi hanya sekitar 200 meter dari bibir pantai dan kawasan Gumuk Pasir Barchan.

---

## Tips Berwisata Aman di Pantai Parangtritis

1. **Jadwal Kepulangan Terakhir:** Bus umum terakhir dari Sub-Terminal Parangtritis menuju Terminal Giwangan Jogja berangkat pada pukul **17.00 – 17.30 WIB**. Jika Anda berniat menikmati pemandangan sunset hingga matahari benar-benar tenggelam (sekitar pukul 17.45 WIB), pastikan Anda sudah memesan transportasi daring kepulangan lebih awal.
2. **Patuhi Rambu Larangan Berenang:** Ombak Pantai Parangtritis memiliki arus bawah laut yang sangat kuat (*rip current*). Sangat dilarang untuk berenang ke tengah laut. Nikmatilah suasana pantai dengan menyusuri tepian pasir, menyewa ATV, atau menaiki andong wisata pesisir.`
);

// 19. Fasilitas Penitipan Barang Stasiun Tugu
writeArticle(
  'jam-buka-fasilitas-penitipan-barang-stasiun-tugu',
  {
    title: 'Jam Buka & Fasilitas Penitipan Barang di Stasiun Tugu Yogyakarta',
    description: 'Informasi lengkap loker otomatis, jasa penitipan koper tas, tarif per jam, jam buka operasional, dan lokasi loker bagasi di Stasiun Tugu Yogyakarta.',
    category: 'tiket-wisata',
    publishDate: '2026-10-24',
    imageAlt: 'Fasilitas Penitipan Barang Loker Stasiun Tugu',
    operationalHours: '24 Jam Penuh',
    fare: 'Mulai Rp20.000 / 3 Jam (Tergantung Ukuran Loker)',
    routeType: 'Fasilitas Stasiun & Utilitas Wisatawan',
    halteList: [
      { name: 'Loker Otomatis Loko Locker', location: 'Hall Pintu Timur Stasiun Tugu', transit: 'Pembayaran QRIS / Cashless' },
      { name: 'Pos Penitipan Bagasi Manual KAI', location: 'Sisi Selatan Dekat Jalur KA Bandara', transit: 'Koper Ekstra Besar & Tas Ransel' },
      { name: 'Shower and Locker KAI', location: 'Kawasan Selasar Malioboro (Depan Stasiun)', transit: 'Fasilitas Mandi Air Panas + Penitipan' }
    ],
    faqs: [
      {
        question: 'Apakah penitipan barang di Stasiun Tugu buka 24 jam?',
        answer: 'Ya, loker otomatis digital di dalam Stasiun Tugu dan fasilitas Shower and Locker di Selasar Malioboro beroperasi melayani penumpang selama 24 jam nonstop.'
      },
      {
        question: 'Berapa tarif penitipan koper di Stasiun Tugu?',
        answer: 'Tarif loker otomatis berkisar antara Rp20.000 hingga Rp50.000 per 3 jam tergantung dimensi ukuran loker (Small, Medium, Large, Extra Large).'
      }
    ]
  },
  `## Solusi Jalan-Jalan di Malioboro Bebas Beban Koper

Salah satu tantangan klasik yang kerap dialami wisatawan kereta api adalah masalah bagasi: Anda tiba di Stasiun Tugu pada pukul 06.00 WIB pagi, sementara waktu *check-in* hotel umumnya baru dibuka pukul 14.00 WIB siang. Sebaliknya, saat hari kepulangan, Anda sudah wajib *check-out* hotel pukul 12.00 WIB, namun jadwal tiket kereta api Anda baru berangkat pukul 21.00 WIB malam.

Membawa-bawa koper dorong berukuran besar atau tas ransel carrier yang berat saat berjalan-jalan menyusuri trotoar Malioboro, Pasar Beringharjo, atau Keraton Yogyakarta tentu sangat melelahkan. Untungnya, kawasan Stasiun Besar Yogyakarta (Stasiun Tugu) kini telah dilengkapi fasilitas modern penitipan barang dan loker pintar digital yang beroperasi selama **24 jam nonstop**.

---

## 3 Pilihan Fasilitas Penitipan Barang di Stasiun Tugu

### 1. Smart Locker Otomatis (Loko Locker Digital)
* **Lokasi Persis:** Tersebar di area hall kedatangan pintu timur (arah Malioboro) dan koridor peron KRL Commuter Line.
* **Cara Kerja:** Sistem loker sepenuhnya digital tanpa kunci fisik konvensional. Pengguna memilih ukuran loker di layar sentuh (*touchscreen*), memasukkan nomor WhatsApp aktif, menentukan durasi sewa, dan melakukan pembayaran instan melalui pemindaian kode QRIS. Setelah pembayaran diverifikasi, pintu loker akan terbuka secara otomatis dan sistem mengirimkan kode PIN pembuka ke ponsel Anda.
* **Ukuran & Tarif Rata-rata:**
  * Ukuran Medium (Cocok untuk ransel & koper kabin 20 inci): Sekitar Rp20.000 – Rp30.000 per 3 jam.
  * Ukuran Extra Large (Cocok untuk koper bagasi besar 28 inci): Sekitar Rp40.000 – Rp50.000 per 3 jam.

### 2. Fasilitas "Shower & Locker" (Selasar Malioboro)
Terletak tepat di sisi timur luar stasiun di kawasan kuliner Selasar Malioboro (dikelola oleh KAI Wisata):
* **Fasilitas Lengkap:** Tidak hanya menitipkan koper secara aman di bawah pengawasan petugas sekuriti 24 jam, fasilitas ini juga menyediakan **kamar mandi mewah ber-AC dengan pemanas air hangat (*water heater*)**, sabun, sampo berkualitas, dan handuk bersih.
* **Sangat Direkomendasikan Bagi:** Penumpang yang baru turun dari kereta api malam dan ingin langsung mandi segar sebelum memulai petualangan keliling kota.

### 3. Penitipan Bagasi Konvensional KAI
Tersedia di dekat loket customer service stasiun sisi selatan, melayani penitipan barang dengan dimensi non-standar seperti kardus oleh-oleh bakpia dalam jumlah banyak, sepeda lipat, atau alat musik.`
);

// 20. Tips Transportasi Malioboro
writeArticle(
  'tips-naik-transportasi-umum-malioboro-wisatawan',
  {
    title: 'Tips Naik Transportasi Umum di Kawasan Malioboro untuk Wisatawan',
    description: 'Panduan cerdas menjelajahi kawasan pedestrian Malioboro, Titik Nol Kilometer, dan Pasar Beringharjo menggunakan bus Trans Jogja, sepeda sewa, dan tips menghindari tarif getok.',
    category: 'tiket-wisata',
    publishDate: '2026-10-24',
    imageAlt: 'Tips Naik Transportasi Umum di Kawasan Malioboro',
    operationalHours: '05.30 – 22.00 WIB',
    fare: 'Hemat & Terjangkau',
    routeType: 'Panduan Wisatawan & Mobilitas Santai',
    halteList: [
      { name: 'Halte Malioboro 1', location: 'Ujung Utara Malioboro', transit: 'Akses Stasiun Tugu & Pusat Oleh-Oleh' },
      { name: 'Halte Malioboro 2', location: 'Tengah Malioboro', transit: 'Kepatihan & Malioboro Mall' },
      { name: 'Halte Malioboro 3', location: 'Ujung Selatan Malioboro', transit: 'Pasar Beringharjo & Benteng Vredeburg' },
      { name: 'Halte Taman Pintar', location: 'Jl. Panembahan Senopati', transit: 'Kraton Yogyakarta & Titik Nol KM' }
    ],
    faqs: [
      {
        question: 'Apakah kendaraan pribadi boleh melintas di Jalan Malioboro?',
        answer: 'Jalan Malioboro menerapkan zona semi-pedestrian. Hanya kendaraan transportasi umum berizin (Trans Jogja), kendaraan darurat, sepeda, dan delman yang boleh melintas secara leluasa.'
      },
      {
        question: 'Bagaimana cara menghindari tarif getok saat naik andong atau becak di Malioboro?',
        answer: 'Selalu tanyakan dan sepakati tarif total secara tegas di awal sebelum menaiki andong atau becak. Untuk andong resmi berstiker paguyuban, tarif keliling Malioboro-Kraton umumnya dipatok standar Rp100.000 s.d Rp150.000 per putaran.'
      }
    ]
  },
  `## Menavigasi Kawasan Pedestrian Malioboro Tanpa Macet

Jalan Malioboro telah bertransformasi secara spektakuler menjadi koridor pedestrian bertaraf internasional. Penataan trotoar yang lebar dengan ubin teraso yang bersih, bangku-bangku besi yang rindang di bawah naungan pohon asam jawa, serta sterilisasi dari parkir liar kendaraan bermotor, menjadikan jalan legendaris ini sangat memikat untuk dijelajahi dengan berjalan kaki.

Namun, karena panjang koridor Malioboro membentang hampir 1,5 kilometer dari batas rel Stasiun Tugu di utara hingga persimpangan Titik Nol Kilometer di selatan, berjalan kaki bolak-balik di bawah terik matahari siang hari bisa sangat menguras tenaga. Memahami dinamika transportasi publik di kawasan ini adalah kunci liburan yang hemat dan menyenangkan.

---

## 5 Strategi Transportasi Terbaik di Malioboro

### 1. Jadikan Trans Jogja sebagai Shuttle Bus Pribadi Anda
Banyak wisatawan tidak menyadari bahwa bus **Trans Jogja** dapat difungsikan layaknya shuttle bus antarpemberhentian di sepanjang Jalan Malioboro:
* Jika kaki Anda lelah setelah berbelanja pakaian di Malioboro Mall (tengah) dan ingin menuju Pasar Beringharjo atau Benteng Vredeburg (selatan), Anda cukup masuk ke Halte Malioboro 2 dan menaiki bus koridor mana pun menuju Halte Malioboro 3 hanya dengan tarif Rp3.600.
* Bus meluncur di lajur khusus yang bebas dari antrean andong delman dan kendaraan darurat.

### 2. Kenali Letak & Fungsi 3 Halte Kunci
* **Halte Malioboro 1 (Utara):** Titik pemberhentian terdekat dengan Stasiun Tugu, sentra hotel Jalan Dagen dan Sosrowijayan, serta pusat bakpia.
* **Halte Malioboro 2 (Tengah):** Akses utama menuju Kompleks Kepatihan (Kantor Gubernur DIY) dan pusat perbelanjaan modern Malioboro Mall.
* **Halte Malioboro 3 (Selatan):** Akses langsung menuju sentra batik Pasar Beringharjo, museum Benteng Vredeburg, Istana Kepresidenan Gedung Agung, dan kawasan Titik Nol Kilometer.

### 3. Tips Aman Naik Andong Delman & Becak Wisata
* Andong wisata dan becak kayuh adalah warisan budaya yang wajib dicoba untuk merasakan suasana klasik Yogyakarta.
* **Hindari Tarif Getok:** Sebelum kaki Anda melangkah naik, **tanyakan dan sepakati tarif secara jelas dan tegas**. Tanyakan: *"Pak, tarif keliling Malioboro sampai Keraton berapa untuk total seluruh penumpang?"*.
* Untuk andong resmi berstiker paguyuban pariwisata, tarif standar satu putaran berkisar antara Rp100.000 hingga Rp150.000 (dapat memuat hingga 4–5 orang).

### 4. Menikmati Suasana Malam Hari di Titik Nol Kilometer
Selepas pukul 18.00 WIB malam, kawasan pedestrian Malioboro hingga Titik Nol Kilometer dihiasi alunan musik syahdu seniman jalanan calung dan gamelan. Manfaatkan bus Trans Jogja Koridor 1A atau 2A yang beroperasi hingga pukul 21.30 WIB untuk kembali ke penginapan Anda tanpa perlu menghadapi tarif taksi jam sibuk.`
);

console.log('Category 3 (Expanded 800+ words) written successfully.');
