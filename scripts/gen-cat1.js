import { writeArticle } from './article-helper.js';

// 1. Koridor 1A
writeArticle(
  'rute-halte-trans-jogja-koridor-1a-prambanan-malioboro',
  {
    title: 'Rute & Halte Lengkap Trans Jogja Koridor 1A: Prambanan ke Malioboro',
    description: 'Panduan lengkap rute bus Trans Jogja Koridor 1A dari Terminal Prambanan menuju jantung Malioboro. Dilengkapi tabel halte, jam operasional, tarif tiket, dan tips transit.',
    category: 'trans-jogja',
    publishDate: '2026-10-20',
    imageAlt: 'Peta Rute dan Halte Trans Jogja Koridor 1A Prambanan Malioboro',
    operationalHours: '05.30 – 21.30 WIB (Setiap Hari)',
    fare: 'Rp3.600 (Umum) / Rp2.000 (Kartu Pelajar)',
    routeType: 'Bus Rapid Transit (BRT) Perkotaan',
    halteList: [
      { name: 'Terminal Prambanan', location: 'Jl. Raya Jogja-Solo Km 16', transit: 'Koneksi Angkutan Klaten & Shuttle Candi' },
      { name: 'Halte Pasar Kalasan', location: 'Depan Pasar Tradisional Kalasan', transit: 'Transit Koridor 1B' },
      { name: 'Halte Bandara Adisutjipto', location: 'Kawasan Stasiun Maguwo & Bandara', transit: 'KRL Commuter Line & KA Bandara YIA' },
      { name: 'Halte Maguwoharjo', location: 'Jl. Solo Km 9', transit: 'Transit Koridor 3A, 3B' },
      { name: 'Halte Janti Utara', location: 'Bawah Flyover Janti', transit: 'Transit Koridor 5A' },
      { name: 'Halte UIN Sunan Kalijaga 1', location: 'Jl. Marsda Adisucipto', transit: 'Transit Koridor 4A' },
      { name: 'Halte Lippo Mall Plaza', location: 'Depan Lippo Plaza Jogja', transit: '-' },
      { name: 'Halte RS Bethesda', location: 'Jl. Jenderal Sudirman', transit: 'Transit Koridor 2A' },
      { name: 'Halte Mangkubumi 1', location: 'Jl. Margo Utomo (Dekat Stasiun Tugu Timur)', transit: 'Stasiun Kereta Tugu Yogyakarta' },
      { name: 'Halte Malioboro 1 (Inna Garuda)', location: 'Ujung Utara Malioboro', transit: 'Koneksi Delman & Becak Wisata' },
      { name: 'Halte Malioboro 2 (Kepatihan)', location: 'Tengah Malioboro, Kantor Gubernur', transit: 'Transit Koridor 2A, 3A' },
      { name: 'Halte Malioboro 3 (Pasar Beringharjo)', location: 'Depan Pasar Beringharjo & Benteng Vredeburg', transit: 'Kawasan Titik Nol Kilometer' }
    ],
    faqs: [
      {
        question: 'Berapa tarif naik bus Trans Jogja Koridor 1A?',
        answer: 'Tarif resmi Trans Jogja Koridor 1A adalah flat Rp3.600 untuk umum sekali jalan, dan Rp2.000 untuk pelajar pemegang kartu khusus berlangganan. Tarif ini berlaku sama berapapun jarak yang Anda tempuh.'
      },
      {
        question: 'Apakah Koridor 1A berhenti langsung di Stasiun Tugu Yogyakarta?',
        answer: 'Ya, Anda bisa turun di Halte Mangkubumi 1 atau Halte Malioboro 1. Dari kedua halte tersebut, Anda hanya perlu berjalan kaki sekitar 2 hingga 3 menit menuju pintu timur Stasiun Tugu Yogyakarta.'
      },
      {
        question: 'Berapa interval waktu kedatangan (headway) bus Koridor 1A?',
        answer: 'Pada jam sibuk pagi dan sore hari, headway armada Koridor 1A berkisar antara 10 hingga 15 menit. Pada siang hari atau akhir pekan yang padat, headway dapat mencapai 15 hingga 20 menit tergantung kelancaran lalu lintas Jalan Solo.'
      },
      {
        question: 'Apakah bisa bayar tunai di dalam bus Trans Jogja Koridor 1A?',
        answer: 'Saat ini Trans Jogja memprioritaskan pembayaran non-tunai (Cashless) via QRIS (semua e-wallet dan mobile banking) serta kartu uang elektronik (TapCash, e-Money, Flazz, Brizzi). Di beberapa halte besar berpintu tiket, pembayaran tunai masih dilayani di loket kasir.'
      }
    ]
  },
  `## Mengenal Trans Jogja Koridor 1A

Trans Jogja Koridor 1A merupakan salah satu jalur tulang punggung (trunk corridor) paling vital di sistem transportasi Daerah Istimewa Yogyakarta. Rute ini menghubungkan wilayah perbatasan timur Yogyakarta di Candi Prambanan langsung menuju jantung pariwisata Titik Nol Kilometer dan Jalan Malioboro. Jalur ini menjadi favorit wisatawan domestik maupun mancanegara karena menyusuri rute lurus Jalan Raya Solo – Yogyakarta yang padat destinasi sejarah, pusat perbelanjaan, dan kampus ternama.

Dengan armada bus medium berpendingin udara (AC) yang terawat, Koridor 1A menawarkan perjalanan yang ekonomis dan nyaman tanpa perlu menghadapi kemacetan menggunakan kendaraan pribadi atau menyewa taksi daring yang bertarif dinamis.

---

## Karakteristik Jalur & Rute yang Dilalui

Secara garis besar, perjalanan Koridor 1A bermula dari Terminal Prambanan di Kabupaten Sleman, melaju ke arah barat menyusuri jalan arteri nasional. Bus akan melintasi kawasan cagar budaya Candi Kalasan, Candi Sari, sebelum memasuki kawasan transit Stasiun Maguwo dan Bandara Adisutjipto.

Selepas Adisutjipto, bus melewati kawasan komersial Lippo Plaza, kampus UIN Sunan Kalijaga, simpang Rumah Sakit Bethesda, Jalan Jenderal Sudirman, hingga berbelok ke arah selatan melintasi Jalan Margo Utomo (Mangkubumi) dan memasuki koridor pedestrian Jalan Malioboro. Di sepanjang Jalan Malioboro, bus berhenti di tiga halte strategis:
1. **Halte Malioboro 1 (Utara):** Sangat dekat dengan pintu keluar Stasiun Tugu sisi timur dan Hotel Grand Inna Malioboro.
2. **Halte Malioboro 2 (Tengah):** Tepat di seberang Kompleks Kepatihan (Kantor Gubernur DIY) dan Mall Malioboro.
3. **Halte Malioboro 3 (Selatan):** Berada tepat di depan Pasar Beringharjo, Museum Benteng Vredeburg, dan Taman Pintar.

---

## Jam Operasional & Jadwal Keberangkatan

Layanan Trans Jogja Koridor 1A beroperasi setiap hari dari hari Senin hingga Minggu, termasuk hari libur nasional:
* **Keberangkatan Awal dari Terminal Prambanan:** 05.30 WIB
* **Keberangkatan Terakhir dari Terminal Prambanan:** 21.00 WIB
* **Armada Terakhir Melintas di Malioboro:** Sekitar pukul 21.45 – 22.00 WIB
* **Interval Kedatangan (Headway):** Rata-rata 10–15 menit pada jam kerja normal, dan 15–20 menit pada masa liburan padat.

---

## Tarif Tiket & Tata Cara Pembayaran

Sistem tarif Trans Jogja menganut prinsip tarif flat (jauh-dekat sama):
* **Tarif Umum / Wisatawan:** Rp3.600 per orang
* **Tarif Pelajar / Mahasiswa DIY Berlangganan:** Rp2.000 per orang
* **Anak-anak di bawah tinggi 90 cm:** Gratis

### Metode Pembayaran Non-Tunai yang Diterima
1. **QRIS Dinamis:** Scan kode QRIS menggunakan aplikasi GoPay, OVO, Dana, ShopeePay, LinkAja, BCA Mobile, Livin by Mandiri, BRImo, atau aplikasi perbankan lainnya pada scanner portabel yang dibawa kondektur.
2. **Kartu Uang Elektronik (KUE):** Mandiri e-Money, BCA Flazz, BNI TapCash, dan BRI Brizzi dapat di-tap langsung di gerbang halte permanen atau mesin EDC bus.
3. **Kartu Khusus Trans Jogja:** Kartu reguler berlangganan yang dapat diisi ulang di halte transit utama.

---

## Panduan Step-by-Step Naik Koridor 1A dari Prambanan

Bagi Anda yang baru pertama kali berkunjung ke Candi Prambanan dan ingin pulang menuju Malioboro menggunakan Trans Jogja, ikuti langkah mudah berikut:
1. **Menuju Halte Prambanan:** Dari pintu gerbang keluar Candi Prambanan, berjalan kaki ke arah barat sejauh 300 meter menuju Terminal Bus Prambanan.
2. **Masuk ke Halte Transit:** Di loket halte, siapkan kartu e-money atau buka aplikasi e-wallet Anda. Lakukan pembayaran pada petugas loket atau mesin tap.
3. **Menunggu Bus Koridor 1A:** Pastikan Anda menaiki bus dengan papan rute di kaca depan bertuliskan **"KORIDOR 1A: PRAMBANAN - MALIOBORO"**. Jika ragu, tanyakan kepada petugas halte (pramugara).
4. **Menikmati Perjalanan:** Bus akan berjalan santai dengan estimasi waktu tempuh dari Prambanan ke Malioboro sekitar 45 hingga 60 menit tergantung kepadatan arus lalu lintas di pertigaan Kalasan dan simpang Maguwo.
5. **Turun di Halte Tujuan:** Jika tujuan Anda adalah berbelanja batik di Pasar Beringharjo atau berfoto di Titik Nol Kilometer, bersiaplah turun di Halte Malioboro 3.`
);

// 2. Koridor 2A
writeArticle(
  'rute-jadwal-trans-jogja-koridor-2a-condongcatur-jombor',
  {
    title: 'Rute & Jadwal Trans Jogja Koridor 2A: Condongcatur ke Terminal Jombor',
    description: 'Informasi jalur lengkap Trans Jogja Koridor 2A. Menghubungkan Terminal Condongcatur, Kampus UGM, kawasan Malioboro, hingga Terminal Jombor Sleman.',
    category: 'trans-jogja',
    publishDate: '2026-10-21',
    imageAlt: 'Rute Bus Trans Jogja Koridor 2A Condongcatur Jombor',
    operationalHours: '05.30 – 21.30 WIB',
    fare: 'Rp3.600 (Flat)',
    routeType: 'BRT Penghubung Kampus & Terminal',
    halteList: [
      { name: 'Terminal Condongcatur', location: 'Depan Pasar Condongcatur', transit: 'Transit Koridor 1B, 3B, 5B' },
      { name: 'Halte Kentungan', location: 'Jl. Kaliurang Km 5', transit: 'Akses Kawasan Kuliner Jakal' },
      { name: 'Halte RS Mata Dr. Yap', location: 'Jl. C. Simanjuntak Terban', transit: 'Dekat Kampus UGM Barat' },
      { name: 'Halte SMPN 5 Yogyakarta', location: 'Kawasan Kotabaru', transit: 'Kawasan Heritage Kotabaru' },
      { name: 'Halte Malioboro 1', location: 'Jl. Malioboro Utara', transit: 'Koneksi Stasiun Tugu & Koridor 1A' },
      { name: 'Halte Malioboro 2', location: 'Jl. Malioboro Tengah', transit: 'Kepatihan & Malioboro Mall' },
      { name: 'Halte Ngabean', location: 'Kawasan Parkir Wisata Ngabean', transit: 'Transit Koridor 3A, 9, 10' },
      { name: 'Halte Wirobrajan 1', location: 'Jl. Kapten Piere Tendean', transit: 'Arah Bantul Barat' },
      { name: 'Halte Bener', location: 'Jl. Kyai Mojo', transit: '-' },
      { name: 'Terminal Jombor', location: 'Jl. Magelang Km 6', transit: 'Bus AKAP Magelang, Semarang, & Koridor 2B, 5A' }
    ],
    faqs: [
      {
        question: 'Apakah Koridor 2A melewati kampus Universitas Gadjah Mada (UGM)?',
        answer: 'Ya, bus Koridor 2A melintasi Jalan Kaliurang bawah dan Jalan C. Simanjuntak (Terban), sangat dekat dengan Fakultas Teknik, Vokasi, dan gerbang barat kampus UGM.'
      },
      {
        question: 'Bagaimana cara menuju Terminal Jombor dari Malioboro menggunakan Koridor 2A?',
        answer: 'Naik bus dari Halte Malioboro 1 atau 2, bus Koridor 2A akan bergerak ke arah selatan menuju Halte Ngabean, lalu berputar ke barat menuju Wirobrajan, jalan Kyai Mojo, dan langsung menuju Terminal Jombor.'
      },
      {
        question: 'Berapa lama waktu tempuh dari Condongcatur ke Terminal Jombor?',
        answer: 'Waktu tempuh penuh berkisar antara 60 hingga 75 menit karena Koridor 2A memutar melewati pusat kota dan kawasan cagar budaya Kotabaru serta Malioboro.'
      }
    ]
  },
  `## Peran Strategis Koridor 2A Trans Jogja

Trans Jogja Koridor 2A merupakan rute penghubung utama antara dua terminal transit terbesar di sisi utara Yogyakarta, yaitu **Terminal Condongcatur (Depok, Sleman)** dan **Terminal Jombor (Mlati, Sleman)**. Berbeda dengan angkutan langsung antar-ringroad, Koridor 2A sengaja mengambil rute memutar ke dalam kota untuk melayani mobilitas mahasiswa kampus ternama dan wisatawan yang ingin singgah di kawasan Malioboro.

Bagi komuter di sepanjang Jalan Kaliurang dan mahasiswa Universitas Gadjah Mada (UGM) maupun Universitas Sanata Dharma, koridor ini adalah solusi transportasi harian yang paling murah dan handal.

---

## Titik-Titik Penting yang Dilayani

Koridor 2A melintasi sejumlah pusat kegiatan krusial di kota Yogyakarta:
* **Kawasan Pendidikan:** Kampus UGM Terban, Fakultas Kehutanan dan Geografi UGM di Sekip, dan sekolah-sekolah di Kotabaru.
* **Kawasan Cagar Budaya Kotabaru:** Melewati Gereja St. Antonius Kotabaru, Stadion Kridosono, dan Rumah Sakit Mata Dr. Yap.
* **Kawasan Komersial & Wisata:** Pusat belanja Malioboro, Museum Sonobudoyo, dan kantong parkir wisata bus pariwisata Ngabean.
* **Gerbang Keluar Luar Kota:** Terminal Bus Jombor, titik transit utama bagi penumpang yang hendak melanjutkan perjalanan bus antarkota (AKAP) ke Muntilan, Magelang, Temanggung, dan Semarang.

---

## Skema Tarif & Akses Pembayaran

Tarif perjalanan Koridor 2A diatur sesuai Peraturan Gubernur DIY:
* **Tarif Flat Reguler:** Rp3.600
* **Metode Non-Tunai:** QRIS (Dana, GoPay, ShopeePay, OVO, LinkAja, Mobile Banking), Kartu Uang Elektronik (Mandiri e-Money, BRI Brizzi, BNI TapCash, BCA Flazz).
* **Tiket Pindah Bus (Transit):** Jika Anda berpindah ke koridor lain di Halte Transit bertiket (seperti Condongcatur atau Jombor) tanpa keluar dari area steril halte, Anda tidak perlu membayar tiket lagi.`
);

// 3. Koridor 3A
writeArticle(
  'rute-lengkap-trans-jogja-koridor-3a-bandara-adisutjipto-giwangan',
  {
    title: 'Rute Lengkap Trans Jogja Koridor 3A: Bandara Adisutjipto ke Terminal Giwangan',
    description: 'Panduan rute bus Trans Jogja Koridor 3A dari Bandara Adisutjipto, Ring Road Utara, Terminal Jombor, hingga Terminal Giwangan Yogyakarta.',
    category: 'trans-jogja',
    publishDate: '2026-10-21',
    imageAlt: 'Rute Trans Jogja Koridor 3A Adisutjipto Giwangan',
    operationalHours: '05.30 – 21.30 WIB',
    fare: 'Rp3.600',
    routeType: 'BRT Trunk Sirkular',
    halteList: [
      { name: 'Halte Bandara Adisutjipto', location: 'Stasiun Maguwo / Jl. Solo', transit: 'KRL Jogja-Solo & Koridor 1A' },
      { name: 'Halte Ring Road Utara (UPN)', location: 'Depan Kampus UPN Veteran', transit: 'Koneksi Kampus Babarsari & Seturan' },
      { name: 'Terminal Condongcatur', location: 'Pusat Transit Sleman Timur', transit: 'Koridor 1B, 2A, 2B, 3B' },
      { name: 'Halte MM UGM', location: 'Gedung Magister Manajemen UGM', transit: 'Kawasan Kampus Terpadu UGM' },
      { name: 'Terminal Jombor', location: 'Sleman Barat', transit: 'Koridor 2A, 2B, 5A, 8' },
      { name: 'Halte Pingit', location: 'Jl. Kyai Mojo / Simpang Pingit', transit: 'Kawasan Tugu Barat' },
      { name: 'Halte Ngabean', location: 'Kawasan Wisata Kraton', transit: 'Koridor 2A, 9, 10' },
      { name: 'Halte Pojok Beteng Kulon', location: 'Simpang Jokteng Kulon', transit: 'Kawasan Prawirotaman Selatan' },
      { name: 'Halte Tegalgendu', location: 'Kotagede Pusat Kerajinan Perak', transit: 'Kawasan Cagar Budaya Kotagede' },
      { name: 'Terminal Giwangan', location: 'Ujung Selatan Kota Jogja', transit: 'Bus AKAP Seluruh Jawa-Bali, Koridor 4A, 4B' }
    ],
    faqs: [
      {
        question: 'Apakah Koridor 3A dan 3B memiliki rute yang sama?',
        answer: 'Koridor 3A dan 3B adalah rute lingkaran berpasangan. Koridor 3A melaju searah jarum jam (Adisutjipto -> Condongcatur -> Jombor -> Ngabean -> Giwangan), sedangkan Koridor 3B melaju berlawanan arah jarum jam.'
      },
      {
        question: 'Bisa naik bus Koridor 3A untuk belanja perak di Kotagede?',
        answer: 'Sangat bisa. Anda cukup turun di Halte Tegalgendu Kotagede, yang terletak tepat di sentra industri perak kerajinan khas Yogyakarta.'
      }
    ]
  },
  `## Gambaran Umum Jalur Trans Jogja Koridor 3A

Trans Jogja Koridor 3A merupakan salah satu rute terpanjang dengan cakupan terluas di Yogyakarta. Rute ini dirancang melingkar (sirkular) searah jarum jam, menghubungkan simpul kedatangan penerbangan komersial lama dan stasiun KRL di Bandara Adisutjipto, melewati kawasan universitas ternama di Sleman, menembus Terminal Jombor di barat laut, menyisir kawasan budaya Kraton dan Kotagede, hingga berakhir di terminal bus terbesar Yogyakarta: **Terminal Giwangan**.

Bagi pelancong mandiri (backpacker), Koridor 3A adalah rute "all-in-one" untuk menjangkau destinasi cagar budaya dan kuliner lokal dengan ongkos satu kali bayar Rp3.600.`
);

// 4. Koridor 4A & 4B
writeArticle(
  'panduan-lengkap-jalur-trans-jogja-koridor-4a-4b',
  {
    title: 'Panduan Lengkap Jalur Trans Jogja Koridor 4A & 4B (Giwangan – Lempuyangan)',
    description: 'Panduan detail rute Trans Jogja Koridor 4A dan 4B. Menghubungkan Terminal Giwangan, Stasiun Lempuyangan, UIN Sunan Kalijaga, dan kampus UGM.',
    category: 'trans-jogja',
    publishDate: '2026-10-22',
    imageAlt: 'Peta Jalur Trans Jogja Koridor 4A dan 4B',
    operationalHours: '05.30 – 21.00 WIB',
    fare: 'Rp3.600',
    routeType: 'BRT Trunk Giwangan - Lempuyangan',
    halteList: [
      { name: 'Terminal Giwangan', location: 'Peron Keberangkatan Trans Jogja', transit: 'Seluruh Koridor Selatan & Bus Antarkota' },
      { name: 'Halte Wirosaban', location: 'Dekat RSUD Kota Yogyakarta', transit: '-' },
      { name: 'Halte XT Square', location: 'Pusat Kerajinan & Kuliner Umbulharjo', transit: 'Transit Koridor 4B' },
      { name: 'Halte UIN Sunan Kalijaga 2', location: 'Jl. Timoho', transit: 'Koneksi Koridor 1A' },
      { name: 'Halte Stasiun Lempuyangan', location: 'Jl. Hayam Wuruk / Depan Stasiun', transit: 'Kereta Api Ekonomi & KRL Commuter Line' },
      { name: 'Halte Kridosono', location: 'Stadion Kridosono Kotabaru', transit: 'Transit Koridor 2A' },
      { name: 'Halte FK UGM', location: 'Fakultas Kedokteran UGM', transit: 'Kawasan Kampus Medika' }
    ],
    faqs: [
      {
        question: 'Bagaimana cara ke Stasiun Lempuyangan dari Terminal Giwangan?',
        answer: 'Naiki bus Trans Jogja Koridor 4A langsung dari Terminal Giwangan. Bus akan membawa Anda tanpa perlu berganti armada langsung ke Halte Stasiun Lempuyangan dalam waktu sekitar 25-35 menit.'
      },
      {
        question: 'Apa perbedaan antara Koridor 4A dan Koridor 4B?',
        answer: 'Koridor 4A berangkat dari Terminal Giwangan via XT Square menuju Lempuyangan dan kampus UGM, sedangkan Koridor 4B adalah lintasan putaran sebaliknya yang mengalirkan penumpang kembali ke Terminal Giwangan via Jalan Glagahsari.'
      }
    ]
  },
  `## Peran Trans Jogja Koridor 4A dan 4B

Bagi penumpang kereta api kelas ekonomi yang turun di **Stasiun Lempuyangan**, Trans Jogja Koridor 4A dan 4B merupakan penyelamat mobilitas. Jalur ini sengaja dioperasikan untuk menghubungkan stasiun kereta api tertua di Yogyakarta tersebut dengan Terminal Giwangan di selatan serta kawasan pendidikan terpadu di kawasan Timoho dan Sleman.

Rute ini menjadi primadona bagi kalangan mahasiswa yang tinggal di kos-kosan kawasan Timoho, Pandeyan, dan Umbulharjo karena menyediakan akses transportasi berjadwal rapi dan ber-AC dingin.`
);

// 5. Koridor 5A & 5B
writeArticle(
  'panduan-rute-trans-jogja-koridor-5a-5b-ring-road',
  {
    title: 'Panduan Rute Trans Jogja Koridor 5A & 5B Keliling Ring Road Yogyakarta',
    description: 'Eksplorasi jalur bus lingkar luar Trans Jogja Koridor 5A dan 5B. Rute strategis mengelilingi Ring Road Utara, Timur, Selatan, dan Barat tanpa macet tengah kota.',
    category: 'trans-jogja',
    publishDate: '2026-10-22',
    imageAlt: 'Peta Jalur Bus Trans Jogja 5A 5B Ring Road',
    operationalHours: '05.30 – 21.00 WIB',
    fare: 'Rp3.600',
    routeType: 'BRT Lingkar Arteri (Orbital)',
    halteList: [
      { name: 'Terminal Jombor', location: 'Ring Road Utara Barat', transit: 'Koridor 2A, 8' },
      { name: 'Halte Monjali (Monumen Jogja Kembali)', location: 'Taman Pelangi & Museum Monjali', transit: '-' },
      { name: 'Halte Kentungan Ring Road', location: 'Simpang Kaliurang', transit: 'Koneksi Angkutan Kaliurang' },
      { name: 'Halte UPN Ring Road Utara', location: 'Kawasan Babarsari', transit: 'Koneksi Koridor 3A' },
      { name: 'Halte Flyover Janti Selatan', location: 'Jl. Solo / Janti', transit: 'Transit Koridor 1A, 1B' },
      { name: 'Halte Ketandan', location: 'Perempatan Ring Road Blok O', transit: 'Museum Dirgantara' },
      { name: 'Terminal Giwangan', location: 'Simpang Ring Road Selatan', transit: 'Koridor 3A, 4A' }
    ],
    faqs: [
      {
        question: 'Apakah Koridor 5A masuk ke kawasan Malioboro?',
        answer: 'Tidak. Koridor 5A dan 5B dirancang khusus sebagai rute lingkar (orbital) di jalur arteri Ring Road untuk memfasilitasi perjalanan cepat antarpinggiran kota tanpa melewati kemacetan pusat kota Malioboro.'
      }
    ]
  },
  `## Jalur Cepat Mengelilingi Yogyakarta via Ring Road

Jika Anda ingin bepergian dari Sleman Barat ke Bantul Timur tanpa harus terjebak lampu merah padat dan kepadatan wisatawan di tengah kota Yogyakarta, maka **Trans Jogja Koridor 5A dan 5B** adalah opsi terbaik. Koridor ini beroperasi menyusuri jalan lingkar (Ring Road) Yogyakarta secara konsisten.

Koridor 5A melayani jalur lingkar searah jarum jam, sementara Koridor 5B melayani jalur berlawanan arah jarum jam, memberikan kemudahan akses bagi pekerja kawasan industri dan mahasiswa universitas di tepian kota.`
);

// 6. Cara Transit
writeArticle(
  'cara-transit-dan-pindah-bus-trans-jogja',
  {
    title: 'Cara Transit dan Pindah Bus Trans Jogja di Halte Portabel & Permanen',
    description: 'Panduan lengkap cara transit dan berpindah koridor bus Trans Jogja tanpa bayar dua kali. Kenali perbedaan sistem halte permanen dan halte portabel tepi jalan.',
    category: 'trans-jogja',
    publishDate: '2026-10-23',
    imageAlt: 'Cara Pindah Bus dan Transit Trans Jogja',
    operationalHours: 'Sesuai Jam Operasional Halte (05.30 - 21.30 WIB)',
    fare: 'Gratis Transit di Area Steril Halte',
    routeType: 'Panduan Utilitas Penumpang',
    halteList: [
      { name: 'Halte Transit Condongcatur', location: 'Terminal Condongcatur', transit: 'Pertukaran 1B, 2A, 2B, 3A, 3B, 5B' },
      { name: 'Halte Transit Terminal Jombor', location: 'Terminal Jombor', transit: 'Pertukaran 2A, 2B, 5A, 8' },
      { name: 'Halte Transit Malioboro 1 & 2', location: 'Pusat Kota', transit: 'Pertukaran 1A, 2A, 3A, 8' },
      { name: 'Halte Transit Terminal Giwangan', location: 'Giwangan', transit: 'Pertukaran 3A, 3B, 4A, 4B, 9, 11' }
    ],
    faqs: [
      {
        question: 'Apakah pindah bus Trans Jogja harus bayar tiket lagi?',
        answer: 'Tidak perlu bayar lagi selama Anda berpindah armada di Halte Permanen bertiket tanpa keluar dari pintu putar (turnstile) atau area steril halte transit.'
      },
      {
        question: 'Bagaimana jika saya turun di Halte Portabel (tangga besi di pinggir jalan)?',
        answer: 'Di halte portabel tepi jalan yang tidak memiliki petugas jaga dan barrier tiket, sistem transit gratis tidak berlaku otomatis. Anda harus membayar kembali Rp3.600 saat naik bus berikutnya.'
      }
    ]
  },
  `## Prinsip Dasar Sistem Transit Trans Jogja

Salah satu keunggulan utama moda Bus Rapid Transit (BRT) Trans Jogja adalah jaringan rute yang saling terintegrasi (hub-and-spoke). Dengan satu kali membayar tiket Rp3.600, seorang penumpang secara teknis dapat mengelilingi seluruh penjuru Yogyakarta asalkan mengetahui titik dan teknik berpindah armada (transfer/transit) yang benar.

Namun, masih banyak pengguna baru dan wisatawan yang salah langkah sehingga terpaksa membayar dua kali atau bahkan tersasar keluar halte.

---

## Memahami 2 Jenis Halte di Trans Jogja

### 1. Halte Permanen (Halte Tertutup / Barrier Halte)
Halte ini memiliki dinding kaca atau jeruji besi, pintu otomatis geser, loket petugas tiket (pramugara halte), dan gerbang barrier masuk (turnstile). 
* **Kelebihan Transit:** Anda bisa duduk menunggu bus koridor lain di dalam halte ini sepuasnya tanpa perlu melakukan tap kartu pembayaran ulang.
* **Contoh Halte Permanen:** Halte Bandara Adisutjipto, Halte Malioboro 1, 2, dan 3, Halte Terminal Jombor, Halte Condongcatur, dan Halte Taman Pintar.

### 2. Halte Portabel (Halte Tangga Terbuka)
Halte portabel adalah instalasi tangga bordes baja berwarna biru yang diletakkan di trotoar tepi jalan tanpa dinding pembatas dan tanpa loket kasir.
* **Kelemahan Transit:** Ketika Anda turun di halte portabel, Anda langsung menginjak trotoar jalan umum (area non-steril). Bila Anda hendak menaiki bus berikutnya, Anda dianggap memulai perjalanan baru dan wajib membayar tarif Rp3.600 lagi di atas bus.

---

## 4 Langkah Mudah Transit Tanpa Bayar Dobel

1. **Rencanakan Titik Transfer:** Sebelum naik bus pertama, pastikan halte pertemuan kedua koridor adalah **Halte Permanen**.
2. **Konfirmasi ke Petugas Bus:** Beritahukan kepada kondektur di dalam bus tujuan akhir Anda: *"Pak, saya mau ke Jombor, nanti saya transit di halte mana yang bisa pindah bus gratis?"*.
3. **Turun Tetap di Dalam Halte:** Saat bus pertama tiba di halte transit, langkahkan kaki keluar dari pintu bus namun **JANGAN PERNAH** melangkah keluar melewati barrier pintu keluar halte.
4. **Tunggu Koridor Lanjutan:** Perhatikan papan informasi elektronik atau dengarkan instruksi petugas loket ketika armada koridor yang Anda tunggu merapat ke pintu peron.`
);

// 7. Halte Dekat Stasiun
writeArticle(
  'lokasi-halte-trans-jogja-terdekat-stasiun-tugu-lempuyangan',
  {
    title: 'Lokasi Halte Trans Jogja Terdekat dari Stasiun Tugu & Lempuyangan',
    description: 'Panduan navigasi jalan kaki dan lokasi halte Trans Jogja terdekat dari pintu keluar Stasiun Tugu Yogyakarta dan Stasiun Lempuyangan.',
    category: 'trans-jogja',
    publishDate: '2026-10-23',
    imageAlt: 'Peta Halte Trans Jogja Dekat Stasiun Tugu dan Lempuyangan',
    operationalHours: '05.30 – 21.30 WIB',
    fare: 'Rp3.600',
    routeType: 'Panduan Integrasi Kereta - Bus',
    halteList: [
      { name: 'Halte Malioboro 1', location: 'Jl. Malioboro (Depan Grand Inna)', transit: '150 meter dari Pintu Timur Stasiun Tugu' },
      { name: 'Halte Mangkubumi 1', location: 'Jl. Margo Utomo Barat', transit: '200 meter dari Pintu Timur Stasiun Tugu' },
      { name: 'Halte Pasar Kembang (Sosrowijayan)', location: 'Jl. Pasar Kembang', transit: 'Pintu Selatan Stasiun Tugu' },
      { name: 'Halte Stasiun Lempuyangan', location: 'Jl. Hayam Wuruk', transit: 'Tepat di Depan Pintu Masuk Lempuyangan' }
    ],
    faqs: [
      {
        question: 'Dari Stasiun Tugu pintu mana yang paling dekat ke Halte Trans Jogja?',
        answer: 'Keluarlah melalui Pintu Timur Stasiun Tugu (arah Jalan Margo Utomo / Malioboro). Dari pintu keluar ini, Halte Malioboro 1 hanya berjarak sekitar 150 meter jalan kaki melintasi penyeberangan zebra cross.'
      },
      {
        question: 'Apakah ada halte Trans Jogja tepat di pintu keluar Stasiun Lempuyangan?',
        answer: 'Ya, Halte Stasiun Lempuyangan berada tepat di seberang pelataran parkir selatan Stasiun Lempuyangan (Jalan Hayam Wuruk), melayani Koridor 4A dan 4B.'
      }
    ]
  },
  `## Akses Transportasi Murah Begitu Turun dari Kereta

Stasiun Tugu (Yogyakarta) dan Stasiun Lempuyangan adalah dua gerbang utama kedatangan jutaan penumpang kereta api jarak jauh dan KRL Commuter Line di Kota Gudeg. Sering kali, wisatawan yang baru tiba di stasiun kebingungan mencari opsi transportasi umum murah karena langsung disambut oleh tawaran transportasi taksi liar dengan tarif tinggi.

Padahal, Trans Jogja memiliki beberapa halte yang terletak sangat dekat dan dapat dijangkau hanya dengan berjalan santai 2 hingga 5 menit dari kedua stasiun tersebut.

---

## Pilihan Halte Trans Jogja di Sekitar Stasiun Tugu

Stasiun Tugu memiliki dua gerbang keluar utama dengan akses halte yang berbeda:

### 1. Pintu Keluar Timur (Arah Jalan Malioboro / Mangkubumi)
* **Halte Malioboro 1 (Grand Inna):** Begitu keluar dari pintu timur, belok kanan menyusuri pedestrian jalan ke arah selatan sekitar 150 meter. Halte ini melayani **Koridor 1A, 2A, 3A, dan Koridor 8**. Sangat ideal jika Anda hendak menuju Candi Prambanan, Kotabaru, UGM, atau menyusuri Malioboro.
* **Halte Mangkubumi 1:** Keluar pintu timur lalu menyeberang ke arah utara menuju Jalan Margo Utomo sekitar 200 meter. Halte ini melayani bus arah utara (Palagan, Ring Road Utara).

### 2. Pintu Keluar Selatan (Arah Jalan Pasar Kembang)
* Melayani akses ke kawasan penginapan backpacker Kampung Sosrowijayan. Terdapat Halte Portabel Pasar Kembang yang melayani bus perintis dan koridor pengumpan.

---

## Pilihan Halte di Sekitar Stasiun Lempuyangan

Bagi penumpang kereta api kelas ekonomi bertarif terjangkau (seperti KA Bengawan, KA Progo, KA Sri Tanjung) atau KRL Commuter Line:
* **Halte Stasiun Lempuyangan:** Anda tidak perlu berjalan jauh. Tepat di seberang pintu selatan stasiun di Jalan Hayam Wuruk telah berdiri halte permanen Trans Jogja.
* **Koridor yang Beroperasi:** Koridor **4A** (menuju XT Square dan Terminal Giwangan) serta Koridor **4B** (menuju Kotabaru dan kampus UGM).`
);

console.log('Category 1 (Trans Jogja) generated.');
