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

Dinas Perhubungan D.I. Yogyakarta bersama operator Trans Jogja telah mendorong digitalisasi penuh pada sistem pembayaran angkutan umum massal. Hal ini bertujuan untuk meminimalkan antrean di pintu masuk halte, mengurangi risiko kebocoran pendapatan tiket, serta mendukung gerakan nasional non-tunai (cashless society).

Bagi pengguna baru atau wisatawan yang berencana keliling Jogja naik bus Trans Jogja, berikut adalah panduan lengkap opsi pembayaran yang sah dan paling praktis.

---

## 3 Pilihan Metode Pembayaran Resmi

### 1. QRIS (Quick Response Code Indonesian Standard) — Paling Fleksibel
Metode ini adalah yang paling direkomendasikan bagi wisatawan domestik:
* **Aplikasi yang Didukung:** GoPay, OVO, DANA, ShopeePay, LinkAja, AstraPay, serta seluruh mobile banking nasional (BCA, Mandiri, BRImo, BNI, BSI, Bank Jateng, dll).
* **Cara Transaksi:**
  1. Saat naik ke dalam bus atau masuk halte, sampaikan ke kondektur: *"Bayar pakai QRIS untuk 1 orang (atau sebutkan jumlah penumpang)"*.
  2. Petugas akan mencetak struk barcode dinamis dari mesin EDC portabel.
  3. Buka menu scan di aplikasi Anda, arahkan kamera ke kode QR, dan konfirmasi pembayaran Rp3.600.
  4. Tunjukkan layar sukses pembayaran kepada petugas.

### 2. Kartu Uang Elektronik Perbankan (KUE)
Jika Anda tidak memiliki koneksi internet di ponsel atau baterai gawai Anda sedang lemah, kartu fisik e-money adalah penyelamat:
* **Kartu yang Diterima:** Mandiri e-Money, BCA Flazz, BNI TapCash, dan BRI Brizzi.
* **Cara Transaksi:** Tempelkan kartu pada alat reader mesin tap di gate halte atau mesin yang dipegang kondektur hingga terdengar bunyi 'bip' dan saldo Anda terpotong Rp3.600.

### 3. Pembayaran Uang Tunai (Cash)
Pembayaran tunai saat ini **sangat dibatasi** dan hanya dilayani di halte-halte transit besar yang memiliki loket kasir manual. Di atas armada bus portabel, kondektur tidak lagi menyediakan uang kembalian tunai. Oleh karena itu, sangat disarankan untuk selalu menyiapkan e-wallet atau kartu e-money sebelum memulai perjalanan.`
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
  `## Bebas Antre Loket dengan Tiket QR Digital

Masa-masa antre panjang di loket stasiun kereta api untuk membeli tiket kertas atau menukar kartu jaminan kini telah menjadi masa lalu. Bagi Anda pengguna KRL Commuter Line lintas Yogyakarta – Solo, Anda cukup memanfaatkan telepon pintar (smartphone) Anda untuk membeli tiket secara instan dalam hitungan detik.

Dua aplikasi paling populer dan resmi yang menyediakan tiket digital KRL Jogja–Solo adalah **GoTransit (di dalam aplikasi Gojek)** dan **Access by KAI**.

---

## Panduan Membeli Tiket via GoTransit (Gojek)

Fitur GoTransit adalah cara paling praktis bagi kebanyakan pelancong karena tidak memerlukan unduhan aplikasi baru jika Anda sudah memiliki aplikasi Gojek:
1. **Buka Aplikasi Gojek:** Pada halaman utama, klik ikon **GoTransit** (atau cari menu 'Commuter Line').
2. **Pilih Beli Tiket KRL:** Masukkan stasiun keberangkatan Anda (contoh: *Yogyakarta / Lempuyangan*) dan stasiun tujuan (contoh: *Solo Balapan / Palur*).
3. **Pilih Jumlah Penumpang:** Anda bisa membeli hingga 4 tiket sekaligus untuk rombongan.
4. **Lakukan Pembayaran:** Tarif Rp8.000 per orang akan dipotong langsung dari saldo GoPay Anda.
5. **Dapatkan QR Code:** Setelah pembayaran sukses, aplikasi akan menampilkan kode QR tiket.
6. **Scan di Gate Masuk:** Arahkan layar ponsel Anda ke scanner di gate stasiun saat hendak naik kereta, dan scan kembali kode QR yang sama di gate stasiun tujuan saat keluar (tap-out).

---

## Panduan Membeli Tiket via Access by KAI

Aplikasi resmi PT Kereta Api Indonesia ini sangat cocok jika Anda rutin bepergian:
1. Buka aplikasi **Access by KAI**, pilih tab menu **Commuter Line**.
2. Masukkan relasi perjalanan stasiun asal dan tujuan.
3. Lakukan konfirmasi dan pilih metode pembayaran (KAI Pay, QRIS, atau e-wallet).
4. Kode tiket barcode akan tersimpan rapi di tab "Tiket Saya".`
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
  `## Eksplorasi Warisan Dunia Tanpa Kendaraan Pribadi

Candi Borobudur terletak di Kabupaten Magelang, Jawa Tengah, sekitar 42 kilometer di sebelah barat laut Kota Yogyakarta. Meskipun secara administratif berbeda provinsi, akses transportasi umum dari Kota Gudeg ke Candi Borobudur sangat mudah, teratur, dan ramah kantong bagi pelancong mandiri.

Berikut adalah dua skenario rute angkutan umum paling populer yang dapat Anda pilih:

---

## Opsi 1: Rute Bus Reguler via Terminal Jombor (Paling Murah)

1. **Langkah 1 (Malioboro ke Jombor):** Dari Halte Malioboro 1 atau 2, naiki bus **Trans Jogja Koridor 2A** (tarif Rp3.600). Turunlah di pemberhentian akhir: **Terminal Jombor**.
2. **Langkah 2 (Jombor ke Borobudur):** Di Terminal Jombor, berjalanlah ke peron bus antarkota jurusan Magelang / Borobudur. Pilih bus medium (PO Cemara Tunggal atau bus jalur Borobudur langsung).
3. **Tarif Bus Jombor-Borobudur:** Berkisar antara Rp25.000 hingga Rp30.000 per orang dengan waktu tempuh sekitar 60-75 menit.
4. **Langkah 3 (Tiba di Borobudur):** Bus akan mengakhiri perjalanan di **Terminal Bus Borobudur**. Dari terminal, Anda hanya perlu berjalan santai sejauh kurang lebih 500 meter menuju pintu gerbang utama Candi Borobudur.

---

## Opsi 2: DAMRI Kawasan Strategis Pariwisata Nasional (KSPN)
Pemerintah mengoperasikan armada minibus DAMRI KSPN ber-AC dari beberapa titik strategis (seperti Bandara YIA dan Stasiun Tugu) langsung ke pelataran Borobudur dengan tarif Rp30.000 - Rp80.000. Tiket dapat dibeli melalui aplikasi DAMRI Apps atau loket peron.`
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
  `## Berwisata ke Pantai Selatan dengan Angkutan Umum

Pantai Parangtritis adalah ikon wisata pesisir selatan Yogyakarta yang terkenal dengan panorama tebing karst, ombak Samudra Hindia yang megah, serta pemandangan matahari terbenam (sunset) yang memukau.

Meskipun banyak pelancong menyewa sepeda motor, Anda tetap bisa mengunjungi Parangtritis menggunakan transportasi umum bus antarkota dalam provinsi (AKDP) dengan biaya yang sangat murah.

---

## Panduan Perjalanan dari Titik Awal

1. **Menuju Terminal Giwangan:** Dari pusat kota atau Malioboro, naiki Trans Jogja **Koridor 3A, 4A, atau 9** menuju Terminal Bus Giwangan (tarif Rp3.600).
2. **Menuju Peron Jalur Parangtritis:** Di Terminal Giwangan, masuk ke zona peron bus AKDP. Carilah bus medium atau mikrobus bertuliskan rute **"JOGJA – PARANGTRITIS"**.
3. **Tarif dan Waktu Tempuh:** Ongkos bus berkisar antara Rp15.000 hingga Rp20.000 sekali jalan. Pembayaran dilakukan secara tunai kepada kondektur saat bus melaju.
4. **Pemberhentian Akhir:** Bus akan berhenti di Sub-Terminal Parangtritis, hanya berjarak 200 meter dari bibir pantai dan kawasan Gumuk Pasir Barchan.`
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
  `## Solusi Jalan-Jalan di Malioboro Tanpa Beban Koper

Salah satu kendala umum wisatawan yang tiba pagi hari dengan kereta api sebelum jam check-in hotel (pukul 14.00 WIB) atau wisatawan yang sudah check-out hotel namun tiket kereta pulangnya baru berangkat larut malam adalah beban koper dan ransel yang berat.

Stasiun Tugu Yogyakarta kini telah dilengkapi fasilitas modern penitipan barang dan loker pintar digital yang memungkinkan Anda menjelajahi kawasan Malioboro dan Kraton dengan leluasa.

---

## 3 Opsi Penitipan Barang di Area Stasiun Tugu

### 1. Smart Locker Otomatis (Loko Locker)
* **Lokasi:** Tersebar di area hall kedatangan pintu timur dan dekat ruang tunggu peron KRL.
* **Fitur:** Menggunakan sistem loker besi digital dengan kunci PIN atau scan barcode transaksi.
* **Metode Bayar:** 100% Cashless menggunakan QRIS dompet digital.
* **Pilihan Ukuran:** Tersedia ukuran ransel kecil hingga koper bagasi ukuran 28 inci.

### 2. Shower and Locker (Selasar Malioboro)
Terletak persis di sebelah timur pintu keluar Stasiun Tugu di area kuliner Selasar Malioboro. Fasilitas ini tidak hanya menyediakan loker aman berpemandu petugas, tetapi juga menyediakan **kamar mandi bersih ber-AC lengkap dengan pemanas air hangat (water heater)**, sabun, sampo, dan handuk bersih. Sangat cocok untuk menyegarkan diri setelah menempuh perjalanan kereta malam dari Jakarta atau Surabaya.`
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
  `## Malioboro Ramah Pejalan Kaki & Transportasi Publik

Kawasan Jalan Malioboro telah bertransformasi secara spektakuler menjadi koridor pedestrian berstandar internasional. Trotoar yang luas dan rindang dengan bangku-bangku santai, bebas dari parkir liar kendaraan bermotor, menjadikan jalan legendaris ini sangat menyenangkan untuk dijelajahi.

Namun, karena panjang koridor Malioboro mencapai hampir 1,5 kilometer dari Stasiun Tugu hingga Titik Nol Kilometer, memahami sistem transportasi publik di kawasan ini akan menghemat tenaga dan waktu Anda.

---

## 5 Tips Penting Berkeliling Malioboro

1. **Gunakan Bus Trans Jogja sebagai Shuttle Murah:** Jika Anda lelah berjalan kaki dari ujung utara ke selatan, cukup naik Trans Jogja dari Halte Malioboro 1 menuju Halte Malioboro 3 hanya dengan tarif Rp3.600. Bus melaju di lajur khusus yang bebas macet.
2. **Ketahui Letak 3 Halte Kunci:**
   * **Halte Malioboro 1:** Dekat Stasiun Tugu dan sentra bakpia Pathok.
   * **Halte Malioboro 2:** Tepat di jantung pertokoan dan mall.
   * **Halte Malioboro 3:** Akses belanja batik Pasar Beringharjo, museum Benteng Vredeburg, dan cagar budaya Gedung Agung.
3. **Manfaatkan Sepeda Sewa JogjaBike:** Di sepanjang trotoar Malioboro terdapat beberapa shelter persewaan sepeda kayuh digital dengan tarif sewa terjangkau per jam.
4. **Berjalan Kaki di Malam Hari:** Antara pukul 18.00 hingga 21.00 WIB, suasana Malioboro dihiasi alunan musik seniman jalanan yang syahdu. Gunakan sepatu jalan yang nyaman.
5. **Konfirmasi Tarif Transportasi Tradisional:** Jika ingin merasakan sensasi naik andong delman atau becak wisata, pastikan rute tujuan disepakati di muka untuk menjaga kenyamanan liburan Anda.`
);

console.log('Category 3 (Tiket & Wisata) generated.');
