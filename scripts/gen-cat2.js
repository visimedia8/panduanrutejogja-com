import { writeArticle } from './article-helper.js';

// 8. KRL Commuter Line Jogja - Solo
writeArticle(
  'jadwal-tarif-krl-commuter-line-jogja-solo-terbaru',
  {
    title: 'Jadwal & Tarif KRL Commuter Line Jogja – Solo Terbaru (Lengkap)',
    description: 'Panduan lengkap jadwal operasional, stasiun pemberhentian, tarif flat Rp8.000, serta cara pembayaran tiket KRL Commuter Line Yogyakarta – Solo Balapan.',
    category: 'kereta-bandara',
    publishDate: '2026-10-21',
    imageAlt: 'Jadwal dan Tarif KRL Commuter Line Jogja Solo',
    operationalHours: '05.00 – 22.35 WIB (Tiap Hari)',
    fare: 'Rp8.000 (Flat Sekali Jalan)',
    routeType: 'Kereta Rel Listrik (KRL) Komuter',
    halteList: [
      { name: 'Stasiun Yogyakarta (Tugu)', location: 'Pusat Kota Jogja (Titik Nol)', transit: 'KA Jarak Jauh, KA Bandara YIA, Trans Jogja' },
      { name: 'Stasiun Lempuyangan', location: 'Kota Yogyakarta Sisi Timur', transit: 'KA Ekonomi & Trans Jogja Koridor 4A/4B' },
      { name: 'Stasiun Maguwo', location: 'Depan Bandara Adisutjipto', transit: 'Trans Jogja 1A, 1B, 3A, 3B' },
      { name: 'Stasiun Brambanan', location: 'Dekat Kawasan Candi Prambanan', transit: 'Angkutan Lokal Sleman & Klaten' },
      { name: 'Stasiun Srowot', location: 'Kabupaten Klaten', transit: '-' },
      { name: 'Stasiun Klaten', location: 'Pusat Kota Klaten', transit: 'KA Jarak Jauh & Angkutan Perkotaan' },
      { name: 'Stasiun Ceper', location: 'Klaten Timur', transit: '-' },
      { name: 'Stasiun Delanggu', location: 'Sentra Beras Delanggu', transit: '-' },
      { name: 'Stasiun Gawok', location: 'Sukoharjo Utara', transit: '-' },
      { name: 'Stasiun Purwosari', location: 'Kota Surakarta Sisi Barat', transit: 'Batik Solo Trans & KA Batara Kresna' },
      { name: 'Stasiun Solo Balapan', location: 'Pusat Kota Surakarta', transit: 'KA Jarak Jauh, KA Bandara Adi Soemarmo' },
      { name: 'Stasiun Solo Jebres', location: 'Surakarta Timur (Kawasan Kampus UNS)', transit: 'KA Ekonomi Timur' },
      { name: 'Stasiun Palur', location: 'Karanganyar Barat', transit: 'Batik Solo Trans Koridor 1 & 2' }
    ],
    faqs: [
      {
        question: 'Berapa harga tiket KRL Jogja-Solo untuk sekali jalan?',
        answer: 'Tarif KRL Commuter Line Jogja - Solo bersifat subsidi flat yaitu Rp8.000 per orang untuk sekali perjalanan, dari stasiun awal mana pun hingga stasiun akhir mana pun.'
      },
      {
        question: 'Apakah bisa beli tiket KRL Jogja-Solo secara tunai di loket?',
        answer: 'Tidak. Pembelian tiket KRL Jogja-Solo sepenuhnya cashless. Penumpang wajib menggunakan Kartu Multi Trip (KMT), Kartu Uang Elektronik perbankan (e-Money, Flazz, TapCash, Brizzi), atau QR Tiket digital via aplikasi Access by KAI atau GoTransit.'
      },
      {
        question: 'Berapa lama waktu tempuh KRL dari Stasiun Tugu Jogja ke Solo Balapan?',
        answer: 'Waktu tempuh rata-rata adalah 1 jam 15 menit hingga 1 jam 20 menit, berhenti tepat waktu di 13 stasiun pemberhentian tanpa terkena macet jalan raya.'
      }
    ]
  },
  `## Revolusi Mobilitas KRL Commuter Line Jogja – Solo

Sejak resmi beroperasi menggantikan KRD Prameks pada awal tahun 2021, layanan **KRL Commuter Line relasi Yogyakarta – Solo Balapan – Palur** telah menjadi urat nadi transportasi paling efisien di wilayah aglomerasi Joglosemar (Jogja-Solo-Semarang). KRL ini dioperasikan oleh PT Kereta Commuter Indonesia (KAI Commuter) menggunakan rangkaian kereta listrik modern berpendingin udara yang bersih, tepat waktu, dan sangat terjangkau.

Bagi komuter pekerja harian yang berdomisili di Klaten atau Solo dan berkantor di Yogyakarta, maupun mahasiswa dan wisatawan yang ingin berakhir pekan di Surakarta, KRL adalah pilihan transportasi nomor satu.

---

## Daftar Stasiun Pemberhentian (13 Stasiun)

Jalur KRL Jogja-Solo membentang sepanjang kurang lebih 60 kilometer dengan 13 stasiun pemberhentian aktif:
1. **Stasiun Yogyakarta (Tugu):** Stasiun awal di DIY, terhubung langsung dengan Malioboro.
2. **Stasiun Lempuyangan:** Stasiun legendaris di Danurejan Yogyakarta.
3. **Stasiun Maguwo:** Terintegrasi langsung dengan Bandara Internasional Adisutjipto dan halte bus Trans Jogja.
4. **Stasiun Brambanan:** Stasiun terdekat untuk mengunjungi Kompleks Percandian Prambanan.
5. **Stasiun Srowot (Klaten)**
6. **Stasiun Klaten:** Stasiun utama pemberhentian kereta jarak jauh di Kabupaten Klaten.
7. **Stasiun Ceper (Klaten)**
8. **Stasiun Delanggu (Klaten)**
9. **Stasiun Gawok (Sukoharjo)**
10. **Stasiun Purwosari (Solo):** Titik transit menuju Jalan Slamet Riyadi dan pusat belanja Solo Square.
11. **Stasiun Solo Balapan (Solo):** Stasiun sentral Kota Solo, terhubung skybridge ke Terminal Tirtonadi.
12. **Stasiun Solo Jebres (Solo):** Stasiun cagar budaya di dekat kawasan Universitas Sebelas Maret (UNS).
13. **Stasiun Palur (Karanganyar):** Stasiun terminus ujung timur relasi KRL.

---

## Pola Jadwal & Frekuensi Keberangkatan

Setiap harinya, KAI Commuter mengoperasikan hingga 24 perjalanan reguler (12 perjalanan pulang-pergi), yang sering ditambah hingga 28-30 perjalanan pada akhir pekan dan masa liburan nasional (peak season):
* **Pagi Hari:** Keberangkatan dimulai pukul 05.05 WIB dari Stasiun Tugu dan 05.00 WIB dari Stasiun Palur.
* **Siang & Sore:** Rata-rata jeda keberangkatan adalah setiap 60 hingga 90 menit sekali.
* **Malam Hari:** Keberangkatan terakhir berkisar pukul 20.16 hingga 22.35 WIB tergantung stasiun asal.

---

## Cara Pembayaran & Tiket Masuk KRL

Untuk dapat melakukan tap-in di gate stasiun, Anda wajib memiliki salah satu media tiket berikut dengan saldo minimal Rp8.000:
1. **Kartu Multi Trip (KMT):** Diterbitkan oleh KAI Commuter, dapat dibeli di seluruh loket stasiun seharga Rp30.000 (termasuk saldo Rp10.000).
2. **Kartu Uang Elektronik Perbankan (KUE):** Mandiri e-Money, BCA Flazz, BNI TapCash, dan BRI Brizzi dapat digunakan langsung tanpa registrasi. Pastikan saldo kartu minimal Rp8.000.
3. **QR Tiket GoTransit (Aplikasi Gojek):** Beli tiket KRL langsung di aplikasi Gojek menu GoTransit, pilih stasiun asal dan tujuan, bayar menggunakan GoPay.
4. **QR Tiket Access by KAI:** Pembelian tiket digital di aplikasi resmi KAI menggunakan saldo KAI Pay atau dompet digital yang terhubung.`
);

// 9. KA Bandara YIA
writeArticle(
  'cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo',
  {
    title: 'Cara Naik KA Bandara YIA dari Stasiun Tugu ke Bandara Kulon Progo',
    description: 'Panduan lengkap naik KA Bandara Internasional Yogyakarta (YIA) dari Stasiun Tugu. Informasi pemesanan tiket, jadwal, fasilitas bagasi, dan estimasi waktu.',
    category: 'kereta-bandara',
    publishDate: '2026-10-21',
    imageAlt: 'Cara Naik Kereta Bandara YIA dari Stasiun Tugu',
    operationalHours: '04.30 – 21.00 WIB',
    fare: 'Rp20.000 (Reguler) / Rp50.000 (Xpress)',
    routeType: 'Kereta Api Bandara Cepat',
    halteList: [
      { name: 'Stasiun Yogyakarta (Tugu)', location: 'Pintu Masuk Khusus KA Bandara (Sisi Selatan)', transit: 'KRL Jogja-Solo, KA Jarak Jauh, Trans Jogja' },
      { name: 'Stasiun Wates', location: 'Pusat Kota Kulon Progo (Hanya Berhenti KA Reguler)', transit: 'Angkutan Lokal Wates & Terminal Pengasih' },
      { name: 'Stasiun Bandara YIA', location: 'Terhubung Langsung Gedung Terminal Keberangkatan', transit: 'Check-in Pesawat Domestik & Internasional' }
    ],
    faqs: [
      {
        question: 'Berapa menit waktu tempuh KA Bandara YIA dari Stasiun Tugu ke Bandara?',
        answer: 'KA Bandara YIA tipe Reguler membutuhkan waktu 39 menit (berhenti di Stasiun Wates), sedangkan KA Bandara tipe Xpress hanya butuh 35 menit non-stop.'
      },
      {
        question: 'Apakah tiket KA Bandara YIA bisa dibeli langsung di stasiun hari H?',
        answer: 'Bisa melalui mesin Vending Machine di Stasiun Tugu, namun SANGAT DISARANKAN memesan H-7 melalui aplikasi Access by KAI atau website reservation.railink.co.id karena tiket KA Bandara sangat cepat habis terjual (sold out).'
      }
    ]
  },
  `## Solusi Transportasi Tercepat Menuju Bandara YIA

Bandara Internasional Yogyakarta (YIA) yang berlokasi di Temon, Kabupaten Kulon Progo, berjarak sekitar 45 kilometer dari pusat Kota Yogyakarta. Jika ditempuh menggunakan mobil atau taksi melalui Jalan Raya Wates, perjalanan dapat memakan waktu antara 1,5 hingga 2,5 jam tergantung kondisi kemacetan di simpang Gamping dan Sentolo.

Hadirnya **KA Bandara YIA** yang dioperasikan oleh PT Railink menjadi penyelamat bagi para pelancong dan pelaku bisnis. Dengan rel layang khusus ganda, kereta ini memangkas waktu perjalanan menjadi hanya **35 hingga 39 menit saja** langsung dari Stasiun Tugu ke dalam gedung terminal keberangkatan bandara.

---

## Lokasi Pintu Masuk di Stasiun Tugu Yogyakarta

Perlu diperhatikan bahwa calon penumpang KA Bandara **tidak masuk melalui pintu utama stasiun**. PT KAI dan Railink menyediakan area keberangkatan khusus:
* **Lokasi Gate:** Berada di sisi barat daya Stasiun Tugu (akses masuk dari Jalan Pasar Kembang, tepat di seberang deretan hotel Sosrowijayan).
* **Fasilitas Ruang Tunggu:** Terdapat ruang tunggu ber-AC khusus, toilet bersih, fasilitas charger ponsel, mesin tiket otomatis (vending machine), dan papan status kedatangan/keberangkatan pesawat real-time.

---

## Prosedur Step-by-Step Naik KA Bandara

1. **Beli Tiket Lebih Awal:** Buka aplikasi *Access by KAI* atau situs web *Railink*, pilih menu KA Bandara, pilih rute Yogyakarta (YK) menuju Bandara YIA, pilih jam keberangkatan minimal 2,5 jam sebelum jadwal boarding pesawat Anda.
2. **Tiba di Stasiun Tugu 30 Menit Sebelum Kereta Berangkat:** Penumpang wajib melakukan boarding paling lambat 15 menit sebelum waktu keberangkatan tertera di tiket. Pintu gate boarding ditutup 5 menit sebelum kereta diberangkatkan.
3. **Scan Barcode Tiket:** Dekatkan kode barcode di ponsel Anda pada scanner mesin gate turnstile.
4. **Masuk ke Peron KA Bandara:** Tunggu di jalur peron khusus. Kereta menggunakan rangkaian KRD hijau toska modern dengan konfigurasi kursi 2-2 yang empuk, rak koper besar, dan colokan listrik di setiap deret kursi.
5. **Tiba di Stasiun YIA:** Begitu turun di Stasiun YIA, Anda hanya perlu menaiki eskalator atau lift selama 2 menit untuk langsung tiba di lobi check-in dan drop bagasi maskapai penerbangan.`
);

// 10. KA Bandara Reguler vs Xpress
writeArticle(
  'perbedaan-ka-bandara-yia-reguler-vs-yia-xpress',
  {
    title: 'Perbedaan KA Bandara YIA Reguler vs YIA Xpress (Waktu Tempuh & Harga)',
    description: 'Bandingkan fasilitas, selisih tarif, kecepatan tempuh, dan kebijakan tiket antara KA Bandara YIA Reguler (Rp20.000) dan YIA Xpress (Rp50.000).',
    category: 'kereta-bandara',
    publishDate: '2026-10-22',
    imageAlt: 'Perbedaan KA Bandara YIA Reguler dan Xpress',
    operationalHours: '04.30 – 21.00 WIB',
    fare: 'Rp20.000 (Reguler) vs Rp50.000 (Xpress)',
    routeType: 'Komparasi Layanan Transportasi Bandara',
    halteList: [
      { name: 'KA Bandara Reguler', location: 'Stasiun Tugu - Wates - Bandara YIA', transit: 'Waktu tempuh 39 menit (Tarif Rp20.000)' },
      { name: 'KA Bandara Xpress', location: 'Stasiun Tugu - Bandara YIA (Direct)', transit: 'Waktu tempuh 35 menit Non-Stop (Tarif Rp50.000)' }
    ],
    faqs: [
      {
        question: 'Kenapa harga tiket KA Bandara Xpress lebih mahal?',
        answer: 'KA Bandara Xpress bertarif Rp50.000 karena layanannya non-stop langsung tanpa berhenti di Stasiun Wates, alokasi kursi lebih eksklusif, serta memberikan fleksibilitas jika tiket reguler telah habis terjual.'
      },
      {
        question: 'Berapa menit selisih waktu tempuh Reguler vs Xpress?',
        answer: 'Selisih waktu tempuh fisik kereta hanya sekitar 4 menit (35 menit untuk Xpress vs 39 menit untuk Reguler). Nilai tambah utama Xpress terletak pada ketersediaan tiket di jam-jam padat (prime time).'
      }
    ]
  },
  `## Memilih Layanan KA Bandara yang Tepat

Banyak pelancong yang bingung ketika melihat dua pilihan KA Bandara di aplikasi Access by KAI: **KA Bandara YIA Reguler** dan **KA Bandara YIA Xpress**. Mengapa harga tiketnya berselisih Rp30.000 padahal jalurnya sama?

Mari kita bedah secara transparan perbedaan spesifikasi teknis dan pertimbangan ekonomisnya agar Anda tidak salah memesan.

---

## Tabel Komparasi Fitur Lengkap

| Parameter Layanan | KA Bandara Reguler | KA Bandara YIA Xpress |
| :--- | :--- | :--- |
| **Harga Tiket** | Rp20.000 | Rp50.000 |
| **Waktu Tempuh** | 39 Menit | 35 Menit (Non-stop) |
| **Stasiun Antara** | Berhenti di Stasiun Wates | Tidak Berhenti (Langsung) |
| **Pemesanan Kursi** | Nomor kursi bebas (bebas pilih saat naik) | Nomor kursi bebas |
| **Kecepatan Habis Tiket** | Sangat Cepat (Habis H-3 s.d H-5) | Cenderung Lebih Tersedia |
| **Rangkaian Kereta** | KRD Railink 4 Kereta | KRD Railink 4 Kereta |

---

## Kapan Anda Harus Memilih KA Reguler?
Pilihlah KA Bandara Reguler jika Anda bepergian secara terencana jauh-jauh hari dan ingin berhemat. Dengan tarif Rp20.000, layanan ini adalah moda transportasi bandara termurah dan paling nyaman di seluruh Indonesia.

## Kapan Anda Wajib Memilih KA Xpress?
Pilihlah KA Xpress jika:
1. Tiket KA Reguler untuk jam penerbangan Anda sudah ludes terjual.
2. Anda membutuhkan jaminan ketepatan waktu non-stop tanpa jeda naik-turun penumpang di Stasiun Wates.
3. Anda memesan tiket mendadak di hari keberangkatan.`
);

// 11. Kereta Prameks
writeArticle(
  'rute-jadwal-kereta-prameks-jogja-kutoarjo',
  {
    title: 'Rute & Jadwal Kereta Prameks Jogja – Kutoarjo PP Terbaru',
    description: 'Panduan lengkap naik KA Prambanan Ekspres (Prameks) relasi Stasiun Tugu Yogyakarta menuju Kutoarjo Purworejo. Tarif subsidi Rp8.000 dan jadwal keberangkatan.',
    category: 'kereta-bandara',
    publishDate: '2026-10-22',
    imageAlt: 'Rute dan Jadwal Kereta Prameks Jogja Kutoarjo',
    operationalHours: '05.25 – 18.27 WIB',
    fare: 'Rp8.000 (Flat)',
    routeType: 'Kereta Rel Diesel (KRD) Lokal',
    halteList: [
      { name: 'Stasiun Yogyakarta (Tugu)', location: 'Kota Yogyakarta', transit: 'KRL Jogja-Solo, KA Jarak Jauh, Trans Jogja' },
      { name: 'Stasiun Wates', location: 'Kabupaten Kulon Progo', transit: 'Angkutan Lokal Wates' },
      { name: 'Stasiun Wojo', location: 'Purworejo Selatan (Akses Timur YIA)', transit: 'Angkutan Perintis Bagelen' },
      { name: 'Stasiun Jenar', location: 'Purworejo', transit: '-' },
      { name: 'Stasiun Kutoarjo', location: 'Pusat Kecamatan Kutoarjo', transit: 'KA Jarak Jauh Lintas Selatan & Angkutan Kebumen' }
    ],
    faqs: [
      {
        question: 'Apakah tiket Prameks bisa dibeli lewat aplikasi KAI?',
        answer: 'Ya, tiket KA Prameks wajib dipesan secara online melalui aplikasi Access by KAI mulai H-7 sebelum keberangkatan dengan tarif flat Rp8.000.'
      },
      {
        question: 'Berapa lama waktu tempuh Prameks dari Jogja ke Kutoarjo?',
        answer: 'Perjalanan memakan waktu sekitar 1 jam 10 menit hingga 1 jam 15 menit untuk menempuh jarak sekitar 64 kilometer.'
      }
    ]
  },
  `## Warisan Legendaris Komuter Prameks

Sebelum hadirnya KRL listrik di jalur Jogja-Solo, **KA Prambanan Ekspres (Prameks)** adalah legenda transportasi komuter Jawa Tengah dan DIY sejak era 1990-an. Saat ini, nama besar Prameks tetap dipertahankan untuk melayani rute lintas barat: **Stasiun Yogyakarta (Tugu) menuju Stasiun Kutoarjo (Kabupaten Purworejo, Jawa Tengah)**.

Kereta diesel ini merupakan pilihan utama warga Purworejo, Kutoarjo, dan Jenar yang bekerja atau menempuh studi di Yogyakarta, maupun sebaliknya.

---

## Jalur & Stasiun Pemberhentian Prameks

Jalur Prameks menyusuri rel selatan Jawa dengan stasiun pemberhentian:
1. **Stasiun Yogyakarta:** Stasiun keberangkatan awal di jantung Kota Gudeg.
2. **Stasiun Wates:** Stasiun utama di ibukota Kabupaten Kulon Progo.
3. **Stasiun Wojo:** Stasiun kecil yang berlokasi strategis di perbatasan Purworejo-Kulon Progo.
4. **Stasiun Jenar:** Pemberhentian di sentra pertanian Purworejo.
5. **Stasiun Kutoarjo:** Stasiun terminus besar yang menjadi simpul kereta api menuju Kebumen, Gombong, Kroya, dan Purwokerto.

---

## Tarif Subsidi & Pembelian Tiket

Pemerintah melalui skema Public Service Obligation (PSO) memberikan subsidi penuh sehingga tarif tiket Prameks dipatok flat **Rp8.000**. Tiket dapat dipesan di aplikasi Access by KAI pada tab "Kereta Lokal".`
);

// 12. Bus DAMRI Bandara YIA
writeArticle(
  'panduan-naik-bus-damri-bandara-yia-jogja-magelang',
  {
    title: 'Panduan Naik Bus DAMRI dari Bandara YIA ke Kota Jogja dan Magelang',
    description: 'Rute lengkap, titik loket peron, jadwal keberangkatan, dan tarif bus DAMRI dari Bandara Internasional Yogyakarta (YIA) menuju pusat Kota Jogja, Sleman, dan Borobudur Magelang.',
    category: 'kereta-bandara',
    publishDate: '2026-10-23',
    imageAlt: 'Bus DAMRI Bandara YIA ke Jogja dan Magelang',
    operationalHours: '06.00 – 21.00 WIB (Menyesuaikan Kedatangan Pesawat)',
    fare: 'Rp60.000 – Rp100.000 (Tergantung Rute Tujuan)',
    routeType: 'Bus Pemadu Moda Bandara (Shuttle)',
    halteList: [
      { name: 'Kawasan Peron Bus Bandara YIA', location: 'Lantai 1 Gedung Parkir YIA', transit: 'Kedatangan Pesawat Domestik/Internasional' },
      { name: 'Pool DAMRI Malioboro / Grand Inna', location: 'Pusat Kota Yogyakarta', transit: 'Trans Jogja & Pusat Wisata' },
      { name: 'Pool DAMRI Sleman City Hall (SCH)', location: 'Jl. Magelang Denggung Sleman', transit: 'Koneksi Sleman Utara' },
      { name: 'Terminal Condongcatur', location: 'Sleman Timur', transit: 'Trans Jogja Koridor 2A, 3B' },
      { name: 'Candi Borobudur / Magelang', location: 'Terminal Borobudur', transit: 'Angkutan Wisata KSPN Borobudur' }
    ],
    faqs: [
      {
        question: 'Di mana letak loket DAMRI di Bandara YIA?',
        answer: 'Loket resmi dan ruang tunggu bus DAMRI berada di Lantai 1 Gedung Parkir YIA (sebelah timur gedung terminal kedatangan).'
      },
      {
        question: 'Berapa tarif DAMRI dari Bandara YIA ke Candi Borobudur?',
        answer: 'Tarif shuttle bus DAMRI relasi Bandara YIA langsung menuju Candi Borobudur (KSPN) adalah sekitar Rp80.000 s.d Rp100.000 per orang.'
      }
    ]
  },
  `## Opsi Transportasi Alternatif Non-Kereta di Bandara YIA

Bagi wisatawan yang membawa banyak barang bawaan koper berukuran besar atau memiliki tujuan langsung ke kota tetangga seperti **Magelang, Temanggung, Wonosobo, atau Purworejo**, bus **DAMRI Bandara YIA** merupakan alternatif terbaik dibandingkan kereta api.

Bus pemadu moda DAMRI beroperasi menggunakan armada minibus medium ber-AC yang nyaman dengan ruang bagasi luas di bagian bawah atau belakang armada.

---

## Pilihan Rute Populer DAMRI Bandara YIA

1. **YIA – Pusat Kota Yogyakarta (Pool DAMRI Malioboro):** Tarif Rp60.000 - Rp70.000. Waktu tempuh 90-120 menit.
2. **YIA – Sleman City Hall (Denggung):** Tarif Rp65.000. Sangat cocok bagi penumpang yang hendak menuju kawasan Sleman utara atau Jalan Magelang.
3. **YIA – Terminal Condongcatur:** Tarif Rp70.000. Memudahkan akses ke universitas di kawasan Babarsari, Seturan, dan Depok.
4. **YIA – Candi Borobudur (Magelang):** Tarif Rp80.000 - Rp100.000 via rute perbukitan Menoreh Kulon Progo yang asri.`
);

// 13. Teman Bus Sleman & Bantul
writeArticle(
  'rute-tarif-angkutan-perintis-teman-bus-sleman-bantul',
  {
    title: 'Rute & Tarif Angkutan Perintis / Teman Bus Wilayah Sleman dan Bantul',
    description: 'Panduan lengkap angkutan perintis Buy The Service (BTS) Teman Bus di wilayah aglomerasi Sleman dan Bantul. Rute pedesaan, halte, dan cara bayar kartu uang elektronik.',
    category: 'kereta-bandara',
    publishDate: '2026-10-23',
    imageAlt: 'Rute Angkutan Perintis Teman Bus Sleman dan Bantul',
    operationalHours: '05.30 – 19.30 WIB',
    fare: 'Rp4.000 – Rp4.500 (Subsidi Kemenhub)',
    routeType: 'Bus Rapid Feeder Aglomerasi',
    halteList: [
      { name: 'Terminal Ngabean', location: 'Kota Yogyakarta', transit: 'Koneksi Trans Jogja Pusat' },
      { name: 'Pasar Seni Gabusan (Bantul)', location: 'Jl. Parangtritis Km 9', transit: 'Sentra Kerajinan Bantul' },
      { name: 'Kawasan Wisata Imogiri', location: 'Makam Raja-Raja Mataram Imogiri', transit: 'Kuliner Wedang Uwuh' },
      { name: 'Terminal Palbapang', location: 'Bantul Kota', transit: 'Angkutan Pedesaan Bantul Barat' },
      { name: 'Pakem / Kaliurang', location: 'Lereng Gunung Merapi Sleman', transit: 'Jeep Wisata Lava Tour' }
    ],
    faqs: [
      {
        question: 'Apakah kartu Trans Jogja bisa digunakan untuk Teman Bus?',
        answer: 'Ya, seluruh kartu uang elektronik perbankan (e-Money, Flazz, Brizzi, TapCash) dan QRIS standar nasional dapat digunakan pada perangkat tap on bus (TOB) Teman Bus.'
      }
    ]
  },
  `## Menjangkau Sudut Pelosok Yogyakarta dengan Teman Bus

Layanan **Teman Bus** di D.I. Yogyakarta merupakan bagian dari program *Buy The Service (BTS)* yang diinisiasi Kementerian Perhubungan Republik Indonesia untuk menghidupkan kembali rute-rute angkutan umum perintis yang selama ini tidak terjangkau oleh bus BRT kota reguler.

Rute perintis ini menghubungkan terminal kota dengan kawasan wisata lereng Merapi (Pakem-Kaliurang), kawasan sentra pengrajin gerabah Kasongan, Pasar Seni Gabusan di Bantul, hingga perbukitan cagar budaya Imogiri.

Dengan armada bus medium rendah emisi berpendingin udara dan kamera pengawas CCTV, Teman Bus memberikan kenyamanan prima bagi masyarakat pinggiran kota dengan tarif bersubsidi.`
);

// 14. Integrasi Antarmoda Stasiun Tugu
writeArticle(
  'panduan-integrasi-antarmoda-stasiun-tugu-yogyakarta',
  {
    title: 'Panduan Integrasi Antarmoda di Stasiun Tugu Yogyakarta (Tugu Hub)',
    description: 'Panduan navigasi integrasi transportasi antarmoda di Stasiun Tugu Yogyakarta. Pertukaran KA Jarak Jauh, KA Bandara YIA, KRL Commuter Line, Trans Jogja, hingga taksi resmi.',
    category: 'kereta-bandara',
    publishDate: '2026-10-24',
    imageAlt: 'Integrasi Antarmoda Stasiun Tugu Yogyakarta',
    operationalHours: '24 Jam (Stasiun Operasional Penuh)',
    fare: 'Sesuai Moda Lanjutan',
    routeType: 'Panduan Hub Transit Terpadu',
    halteList: [
      { name: 'Peron Kereta Jarak Jauh', location: 'Jalur 1 s.d Jalur 6 Stasiun Tugu', transit: 'Eksekutif, Bisnis, Ekonomi Lintas Jawa' },
      { name: 'Peron Khusus KA Bandara', location: 'Sisi Barat Daya Stasiun', transit: 'Railink menuju YIA' },
      { name: 'Peron KRL Commuter Line', location: 'Jalur 1 & Jalur 3 Khusus Komuter', transit: 'KRL ke Solo Balapan & Palur' },
      { name: 'Halte Trans Jogja Malioboro 1', location: '150 meter dari Pintu Timur', transit: 'Koridor 1A, 2A, 3A, 8' }
    ],
    faqs: [
      {
        question: 'Apakah di Stasiun Tugu ada skybridge antar peron?',
        answer: 'Stasiun Tugu memiliki terowongan penyeberangan bawah tanah (underpass pedestrian) modern ber-AC dan lift khusus difabel yang menghubungkan seluruh jalur peron tanpa perlu menyeberangi rel aktif.'
      }
    ]
  },
  `## Stasiun Tugu: Jantung Hub Transportasi Yogyakarta

Stasiun Besar Yogyakarta (lebih akrab disapa **Stasiun Tugu**) adalah mahakarya perkeretaapian peninggalan kolonial Belanda yang kini bertransformasi menjadi salah satu pusat integrasi antarmoda (Transit Hub) tercanggih di Indonesia. 

Di dalam satu kawasan seluas belasan hektar ini, seorang pelancong dapat berpindah moda secara mulus (seamless intermodal transfer) dari kereta api cepat antarkota, kereta rel listrik komuter, kereta bandara internasional, bus rapid transit, hingga angkutan tradisional seperti andong delman dan becak kayuh Malioboro.

---

## 5 Zona Integrasi di Stasiun Tugu

1. **Zona Kereta Api Jarak Jauh:** Melayani kereta eksekutif dan ekonomi lintas Jawa (Argo Wilis, Argo Dwipangga, Taksaka, Lodaya, Sancaka).
2. **Zona KRL Jogja-Solo:** Terletak di peron utara, dilengkapi mesin gate tap-in KMT dan QR code tiket GoTransit.
3. **Zona KA Bandara YIA:** Terletak di sayap barat daya, memiliki ruang tunggu eksklusif dan boarding gate tersendiri.
4. **Zona Bus Trans Jogja:** Terkoneksi via pedestrian pedestrian trotoar Jalan Margo Utomo dan Malioboro.
5. **Zona Transportasi Tradisional & Daring:** Pelataran khusus taksi resmi argo dan titik jemput ojek daring yang tertib di sisi barat.`
);

console.log('Category 2 (Kereta & Bandara) generated.');
