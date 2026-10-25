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
      { name: 'Halte Candi Kalasan', location: 'Jl. Solo Km 13', transit: 'Wisata Budaya Candi Kalasan' },
      { name: 'Halte Bandara Adisutjipto', location: 'Kawasan Stasiun Maguwo & Bandara', transit: 'KRL Commuter Line & KA Bandara YIA' },
      { name: 'Halte Maguwoharjo', location: 'Jl. Solo Km 9', transit: 'Transit Koridor 3A, 3B' },
      { name: 'Halte Janti Utara', location: 'Bawah Flyover Janti', transit: 'Transit Koridor 5A' },
      { name: 'Halte UIN Sunan Kalijaga 1', location: 'Jl. Marsda Adisucipto', transit: 'Transit Koridor 4A' },
      { name: 'Halte Lippo Mall Plaza', location: 'Depan Lippo Plaza Jogja', transit: 'Pusat Perbelanjaan' },
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

Trans Jogja Koridor 1A merupakan salah satu jalur tulang punggung (*trunk corridor*) paling vital dalam ekosistem transportasi publik Daerah Istimewa Yogyakarta. Rute ini membentang lurus dari batas timur provinsi di Terminal Prambanan (Kabupaten Sleman) melintasi Jalan Raya Yogyakarta–Solo, menyisir kawasan komersial Babarsari dan Gondokusuman, menembus Stasiun Tugu, dan bermuara langsung di koridor pedestrian Jalan Malioboro hingga Titik Nol Kilometer Yogyakarta.

Bagi kalangan mahasiswa, pekerja komuter harian, maupun wisatawan nusantara dan mancanegara, Koridor 1A adalah pilihan utama karena rutenya sangat efisien, menghubungkan cagar budaya bertaraf dunia Candi Prambanan dengan sentra belanja legendaris Pasar Beringharjo. Dengan armada bus sedang berpendingin udara (*full AC*) yang terawat, lantai bersih, dan tarif bersubsidi, layanan ini memangkas biaya transportasi secara drastis dibandingkan menyewa taksi daring atau mobil rental harian.

---

## Karakteristik Wilayah & Rute yang Dilintasi

Perjalanan Koridor 1A menyusuri koridor jalan nasional dengan dinamika tata guna lahan yang beragam. Berangkat dari Terminal Prambanan, bus bergerak ke barat melintasi kawasan pedesaan agraris Kalasan yang kaya situs candi peninggalan Mataram Kuno, seperti Candi Kalasan dan Candi Sari. 

Setelah melewati pertigaan Raden Ronggo, bus mendekati simpul transportasi udara dan rel di Bandara Adisutjipto dan Stasiun Maguwo. Di titik ini, Koridor 1A menjadi penyelamat bagi penumpang pesawat atau pengguna KRL Commuter Line yang membutuhkan angkutan lanjutan menuju pusat kota Yogyakarta tanpa harus keluar dari area stasiun transit.

Memasuki kawasan perkotaan di bawah *flyover* Janti, rute Koridor 1A mulai menyusuri kawasan pendidikan tinggi dan sentra gaya hidup modern. Bus melintasi depan kampus Universitas Islam Negeri (UIN) Sunan Kalijaga, Lippo Plaza Mall Jogja, bioskop legendaris Empire XXI, hingga Rumah Sakit Bethesda di Jalan Jenderal Sudirman. Dari simpang empat Gramedia Sudirman, bus berbelok ke selatan menuju Jalan Margo Utomo (Jalan Pangeran Mangkubumi), menyuguhkan pemandangan hotel-hotel heritage peninggalan kolonial dan monumen Tugu Pal Putih Yogyakarta yang ikonik.

Pemberhentian klimaks berada di Jalan Malioboro. Bus melintas di lajur khusus transportasi umum dan berhenti berurutan di tiga halte berdesain tertutup (*shelter permanent*):
1. **Halte Malioboro 1 (Grand Inna):** Terletak di ujung utara Malioboro. Titik pemberhentian ini paling pas bagi penumpang yang hendak menuju pintu timur Stasiun Tugu, pusat oleh-oleh Bakpia Pathok, atau menginap di kawasan Sosrowijayan.
2. **Halte Malioboro 2 (Kepatihan):** Berada persis di depan Kompleks Kantor Gubernur DIY (Kepatihan) dan Malioboro Mall. Sangat ideal untuk pelancong yang ingin berbelanja busana kasual dan cinderamata modern.
3. **Halte Malioboro 3 (Pasar Beringharjo):** Berada di ujung selatan, berhadapan langsung dengan Pasar Beringharjo, Museum Benteng Vredeburg, Gedung Agung (Istana Kepresidenan), dan kawasan cagar budaya Titik Nol Kilometer.

---

## Jadwal Keberangkatan, Jam Operasional & Estimasi Waktu Tempuh

Layanan Trans Jogja Koridor 1A beroperasi tanpa henti setiap hari, termasuk hari Minggu dan hari libur nasional keagamaan:
* **Keberangkatan Perdana dari Terminal Prambanan:** Pukul 05.30 WIB pagi.
* **Keberangkatan Armada Terakhir dari Terminal Prambanan:** Pukul 21.00 WIB malam.
* **Armada Terakhir Melintas di Malioboro Menuju Pool:** Sekitar pukul 21.45 hingga 22.00 WIB.
* **Interval Kedatangan Bus (Headway):** Rata-rata berkisar antara 10 hingga 15 menit pada jam sibuk pagi (06.30–08.30 WIB) dan sore (16.00–18.00 WIB). Pada siang hari yang lengang, headway berada pada kisaran 15–20 menit.

Waktu tempuh total dari Terminal Prambanan hingga Halte Malioboro 3 berkisar antara **50 hingga 70 menit** pada kondisi lalu lintas normal. Namun, pada akhir pekan panjang (*long weekend*) atau musim liburan akhir tahun, durasi perjalanan bisa bertambah menjadi 80 hingga 90 menit akibat antrean lampu merah di Simpang Maguwo, simpang UIN Timoho, dan kepadatan pedestrian di pintu masuk Malioboro.

---

## Skema Tarif Resmi & Metode Pembayaran Digital

Sistem pembayaran Trans Jogja menganut mekanisme tarif tetap (*flat fare*), yang artinya jauh atau dekat penumpang dikenakan biaya yang sama:
* **Tarif Umum / Wisatawan:** Rp3.600 per orang untuk satu kali perjalanan.
* **Tarif Pelajar / Mahasiswa DIY Pemegang Kartu Khusus:** Rp2.000 per orang.
* **Anak Balita di Bawah Tinggi 90 cm:** Tidak dikenakan biaya (Gratis).

### Tata Cara Pembayaran di Atas Bus & Halte
1. **Pembayaran Melalui QRIS:** Menggunakan aplikasi GoPay, OVO, DANA, ShopeePay, LinkAja, BCA Mobile, Livin by Mandiri, atau BRImo. Pramugara bus atau petugas halte akan memperlihatkan QR code dinamis di layar mesin EDC portabel, Anda cukup memindai (*scan*) dan menunjukkan notifikasi sukses.
2. **Kartu Uang Elektronik (KUE):** Mandiri e-Money, BCA Flazz, BNI TapCash, dan BRI Brizzi dapat di-tap langsung di mesin validator pintu masuk halte maupun validator genggam di atas armada.
3. **Uang Tunai (Cash):** Pembayaran tunai saat ini hanya dilayani di halte-halte terminus besar (seperti Halte Prambanan, Halte Adisutjipto, dan Halte Malioboro). Pengguna di halte portabel pinggir jalan diwajibkan menggunakan non-tunai.

---

## Panduan Langkah Demi Langkah Naik Koridor 1A dari Prambanan ke Malioboro

Bagi Anda yang baru pertama kali mencoba transportasi umum di Jogja, ikuti instruksi praktis berikut agar perjalanan lancar:
1. **Menuju Halte Prambanan:** Selesai berkeliling Kompleks Candi Prambanan, keluarlah melalui pintu gerbang utama. Berjalanlah ke arah barat menyusuri trotoar sekitar 300 meter menuju Terminal Bus Prambanan.
2. **Pengecekan Saldo:** Pastikan saldo dompet digital atau kartu e-money Anda mencukupi minimal Rp3.600 per penumpang sebelum memasuki gerbang antrean.
3. **Konfirmasi Rute Bus:** Saat bus berwarna biru kombinasi kuning merapat ke peron, pastikan tulisan di papan LED kaca depan bertuliskan **"1A: PRAMBANAN - MALIOBORO"** (bukan 1B yang berputar arah Condongcatur).
4. **Menaiki Bus dengan Tertib:** Dahulukan penumpang yang turun sebelum Anda melangkah masuk. Duduklah di kursi yang tersedia atau berdirilah dengan berpegangan erat pada tali gantungan (*handgrip*) jika kursi penuh.
5. **Menjaga Etika Penumpang:** Berikan kursi prioritas di deret depan bagi ibu hamil, lansia, atau penumpang yang membawa balita. Dilarang merokok, makan makanan berbau menyengat, atau membuang sampah di dalam bus.
6. **Persiapan Turun:** Begitu bus melintasi Jalan Sudirman dan berbelok ke Jalan Margo Utomo, bersiaplah untuk turun. Bila Anda bertujuan ke Stasiun Tugu, turunlah di Halte Malioboro 1. Bila ingin ke Beringharjo, tetaplah duduk hingga Halte Malioboro 3.

---

## Destinasi Wisata & Kuliner Populer di Jalur 1A

* **Candi Kalasan & Candi Sari:** Cagar budaya peninggalan Buddha abad ke-8, turun di Halte Kalasan.
* **Lippo Plaza & Cinema XXI:** Pusat belanja modern dan hiburan, turun di Halte Lippo Plaza.
* **Soto Kadipiro & Gudeg Yu Djum:** Kuliner legendaris di sekitar pusat kota, dapat diakses dari Halte RS Bethesda atau Mangkubumi.
* **Pasar Beringharjo & Benteng Vredeburg:** Sentra belanja batik terbesar dan museum perjuangan kemerdekaan, turun tepat di Halte Malioboro 3.`
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

Trans Jogja Koridor 2A memegang peranan krusial sebagai jembatan penghubung antara dua terminal pengumpan terbesar di belahan utara dan barat Daerah Istimewa Yogyakarta: **Terminal Condongcatur** di Depok, Sleman, dan **Terminal Jombor** di Mlati, Sleman. Berbeda dengan angkutan lingkar luar yang meluncur cepat di jalur arteri Ring Road, Koridor 2A sengaja diarahkan meliuk masuk ke jantung kota. Hal ini dirancang untuk melayani mobilitas para sivitas akademika kampus-kampus besar, pelajar kawasan cagar budaya Kotabaru, serta wisatawan yang ingin menyusuri koridor Malioboro sebelum melanjutkan perjalanan ke arah barat.

Bagi komuter yang tinggal di kawasan pemukiman padat Condongcatur, Seturan, maupun Jalan Kaliurang bawah, Koridor 2A merupakan opsi perjalanan harian yang paling ekonomis, bebas lelah berkendara, dan konsisten dari segi tarif resmi.

---

## Rute Lintasan & Titik Penting yang Dilewati

Lintasan Koridor 2A menawarkan perpaduan pemandangan kota modern, kawasan pendidikan terpadu, dan peninggalan arsitektur kolonial yang memikat:
* **Kawasan Pendidikan Jalan Kaliurang & Terban:** Berangkat dari Terminal Condongcatur, bus melaju ke barat melintasi Ring Road Utara sebelum membelok ke Jalan Kaliurang. Bus berhenti di Halte Kentungan (akses kuliner Jakal) dan Halte RS Mata Dr. Yap di Jalan C. Simanjuntak Terban, yang merupakan pintu masuk strategis menuju Fakultas Teknik, Fakultas MIPA, dan Sekolah Vokasi Universitas Gadjah Mada (UGM).
* **Kawasan Heritage Kotabaru:** Menyusuri Jalan Wardhani dan Jalan Suroto, penumpang disuguhi deretan bangunan bergaya indis (*Indische Empire*), Gereja Katolik Santo Antonius Padua Kotabaru, SMA Negeri 3 Yogyakarta, dan Stadion Kridosono.
* **Jalur Wisata Malioboro:** Bus meluncur lurus menyusuri Jalan Malioboro dan berhenti di Halte Malioboro 1 dan Malioboro 2. Titik ini sangat ramai pada jam makan siang dan sore hari.
* **Kawasan Barat (Ngabean, Wirobrajan, & Pingit):** Melewati Titik Nol Kilometer, bus berbelok ke barat menuju kawasan parkir bus pariwisata Ngabean, menyusuri Jalan Kapten Piere Tendean (Wirobrajan), Jalan HOS Cokroaminoto, melintasi Simpang Empat Pingit, Jalan Kyai Mojo, hingga berakhir di pelataran Terminal Jombor di Jalan Magelang.

---

## Jadwal Operasional & Interval Kedatangan

* **Waktu Beroperasi:** Setiap hari mulai pukul **05.30 WIB hingga 21.30 WIB**.
* **Keberangkatan Awal:** Pukul 05.30 WIB dari Terminal Condongcatur dan Terminal Jombor.
* **Interval Armada (Headway):** Berkisar 12–15 menit di hari biasa, dan 15–20 menit pada jam sibuk akhir pekan.
* **Waktu Tempuh Keseluruhan:** Rata-rata membutuhkan waktu sekitar **60 hingga 75 menit** untuk menuntaskan satu putaran penuh lintasan sepanjang kurang lebih 22 kilometer.

---

## Skema Tarif & Akses Pembayaran Non-Tunai

* **Tarif Flat Reguler:** Rp3.600 per orang untuk umum.
* **Tarif Pelajar/Mahasiswa DIY Berlangganan:** Rp2.000 per orang.
* **Koneksi Pembayaran Digital:** Mendukung pemindaian QRIS via seluruh aplikasi perbankan digital dan e-wallet (GoPay, Dana, ShopeePay, OVO, LinkAja), serta kartu uang elektronik perbankan (e-Money, Flazz, TapCash, Brizzi).

---

## 5 Tips Praktis Naik Koridor 2A

1. **Kenali Pasangannya (Koridor 2B):** Koridor 2A dan 2B beroperasi pada rute yang serupa namun dengan arah putaran berlawanan. Jika Anda hendak bergerak dari Jombor menuju UGM dan Condongcatur lebih cepat, gunakan Koridor 2B agar tidak perlu memutar ke Malioboro terlebih dahulu.
2. **Transit Menuju Borobudur:** Jika Anda hendak berwisata ke Candi Borobudur dengan bus antarkota murah, naiklah Koridor 2A dari Malioboro menuju Terminal Jombor, lalu beralih ke bus jurusan Magelang/Borobudur di peron utara Jombor.
3. **Hindari Jam Macet Pingit:** Simpang Empat Pingit dan Jalan Kyai Mojo kerap mengalami antrean kendaraan pada pukul 16.30 hingga 18.00 WIB. Pertimbangkan berangkat lebih awal jika memiliki jadwal kereta lanjutan.
4. **Transit Gratis di Ngabean:** Halte Ngabean adalah titik transit steril. Jika Anda ingin melanjutkan perjalanan ke arah Bantul atau Pojok Beteng, Anda bisa berpindah ke Koridor 3A, 9, atau 10 tanpa membayar tiket baru selama tidak melangkah keluar halte.
5. **Simpan Bukti Pembayaran Digital:** Jagalah struk EDC atau tampilan layar transaksi QRIS Anda hingga turun dari bus untuk memudahkan verifikasi petugas kondektur.`
);

// 3. Koridor 3A
writeArticle(
  'rute-lengkap-trans-jogja-koridor-3a-bandara-adisutjipto-giwangan',
  {
    title: 'Rute Lengkap Trans Jogja Koridor 3A: Bandara Adisutjipto ke Giwangan',
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
  `## Anatomi Jalur Lingkar Trans Jogja Koridor 3A

Trans Jogja Koridor 3A memegang predikat sebagai salah satu jalur bus terpanjang dan paling komprehensif dalam jaringan BRT perkotaan Yogyakarta. Didesain dengan pola sirkular (*loop line*) searah jarum jam, jalur ini menjahit simpul-simpul mobilitas terpenting mulai dari wilayah timur (Bandara Adisutjipto / Stasiun Maguwo), menyusuri sabuk universitas Ring Road Utara, menembus Terminal Jombor di sudut barat laut, membelah kawasan barat kota, melintasi cagar budaya Kraton dan sentra perak Kotagede, hingga bermuara di gerbang selatan bus antarkota di **Terminal Giwangan**.

Bagi pelancong mandiri bertarif hemat (*budget traveler*), Koridor 3A adalah rute "wisata keliling kota" terbaik. Cukup dengan membayar Rp3.600 satu kali, Anda dapat menikmati panorama perkotaan Yogyakarta dari jendela bus yang sejuk melintasi batas tiga kabupaten sekaligus: Sleman, Kota Yogyakarta, dan Bantul.

---

## Simpul-Simpul Transit Utama yang Terintegrasi

1. **Simpul Adisutjipto & Maguwo:** Berfungsi sebagai gerbang intermoda timur. Penumpang KRL Commuter Line relasi Solo–Jogja yang turun di Stasiun Maguwo dapat melangkah melalui terowongan bawah tanah langsung menuju Halte Trans Jogja Adisutjipto tanpa perlu menyeberang jalan raya Solo yang padat.
2. **Simpul Pendidikan Ring Road Utara & Condongcatur:** Melintasi kampus UPN Veteran Yogyakarta, Universitas Amikom, dan STIE YKPN, menjadikan koridor ini andalan ribuan mahasiswa kos setiap hari.
3. **Simpul Terminal Jombor:** Menghubungkan jalur utara dengan armada bus antarprovinsi tujuan Magelang, Semarang, dan Jakarta.
4. **Simpul Budaya Kotagede & Jokteng:** Melintasi sentra kerajinan perak tertua peninggalan Kesultanan Mataram Islam di Halte Tegalgendu Kotagede.
5. **Simpul Terminal Giwangan:** Terminal tipe A terbesar di DIY yang melayani bus AKAP ke seluruh kota di Pulau Jawa, Bali, hingga Sumatra.

---

## Jadwal, Headway & Dinamika Perjalanan

* **Jam Operasi Harian:** 05.30 hingga 21.30 WIB setiap hari.
* **Interval Armada (Headway):** Rata-rata 10–15 menit pada hari kerja. Pada akhir pekan padat wisata, jeda kedatangan bus bisa mencapai 20 menit di halte-halte pinggiran.
* **Total Waktu Tempuh Satu Putaran:** Berkisar antara **75 hingga 90 menit** untuk rute sepanjang kurang lebih 28 kilometer.
* **Tarif:** Flat Rp3.600 untuk umum, Rp2.000 untuk kartu pelajar DIY, gratis bagi balita.

---

## Panduan Step-by-Step Berwisata Naik Koridor 3A

1. **Mulai dari Stasiun Maguwo / Adisutjipto:** Masuklah ke Halte Adisutjipto melalui underpass stasiun. Lakukan pembayaran non-tunai di loket gate masuk.
2. **Naik Armada Koridor 3A:** Pastikan tulisan di LED depan bus bertuliskan "3A: ADISUTJIPTO - JOMBOR - GIWANGAN".
3. **Eksplorasi Kotagede:** Bila Anda ingin berbelanja perhiasan perak filigree atau mencicipi kuliner legendaris Kipo dan Kembang Waru, turunlah di Halte Tegalgendu.
4. **Melanjutkan ke Giwangan:** Setelah selesai menjelajah Kotagede, masuk kembali ke halte yang sama menuju Terminal Giwangan untuk melanjutkan perjalanan ke destinasi pantai selatan seperti Parangtritis.`
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
      { name: 'Halte Wirosaban', location: 'Dekat RSUD Kota Yogyakarta', transit: 'Akses Fasilitas Kesehatan' },
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
  `## Mengapa Koridor 4A & 4B Sangat Dicari Penumpang Kereta Api?

Bagi para pengguna kereta api jarak jauh kelas ekonomi (seperti KA Bengawan, KA Sri Tanjung, KA Progo, KA Kahuripan) maupun KRL Commuter Line yang turun di **Stasiun Lempuyangan**, Trans Jogja Koridor 4A dan 4B adalah penyelamat anggaran perjalanan. Stasiun Lempuyangan yang berlokasi di Kelurahan Bausasran, Danurejan, kerap dipadati ribuan penumpang setiap hari. Tanpa panduan transportasi yang tepat, penumpang sering terjebak tarif taksi liar yang mahal di pintu keluar stasiun.

Dengan kehadiran Koridor 4A dan 4B, penumpang cukup berjalan beberapa langkah keluar pintu stasiun untuk menaiki bus BRT bertarif subsidi flat Rp3.600 menuju kawasan penginapan Timoho, pusat kuliner Umbulharjo, atau langsung menyambung ke Terminal Bus Giwangan.

---

## Perbedaan Karakter Jalur Koridor 4A dan 4B

Dinas Perhubungan DIY merancang koridor 4 sebagai sistem rute lingkar berpasangan:
* **Koridor 4A (Arah Naik / Searah Jarum Jam):** 
  Berangkat dari Terminal Giwangan melintasi Jalan Pramuka, RSUD Wirosaban, pusat rekreasi XT Square di Umbulharjo, Jalan Menteri Supeno, Jalan Veteran, masuk ke Jalan Timoho (melewati Kampus UIN Sunan Kalijaga dan APMD), melintasi flyover Lempuyangan, dan berhenti di Halte Stasiun Lempuyangan di Jalan Hayam Wuruk. Selanjutnya bus bergerak menuju Kotabaru dan komplek Fakultas Kedokteran UGM.
* **Koridor 4B (Arah Balik / Berlawanan Arah Jarum Jam):**
  Berangkat dari kawasan Kotabaru dan Lempuyangan mengalirkan penumpang ke arah selatan menyusuri Jalan Kusumanegara, Jalan Glagahsari (sentra kos-kosan mahasiswa UAD dan UST), Warungboto, sebelum kembali memasuki peron kedatangan Terminal Giwangan.

---

## Informasi Tarif, Jam Layanan & Fasilitas

* **Jam Layanan:** 05.30 hingga 21.00 WIB setiap hari.
* **Tarif:** Flat Rp3.600 untuk umum via QRIS dan kartu e-money (BCA Flazz, Mandiri e-Money, BNI TapCash, BRI Brizzi). Pelajar bertarif Rp2.000.
* **Waktu Tempuh Giwangan - Lempuyangan:** Sekitar 25 hingga 35 menit pada jam normal, dan hingga 45 menit saat jam padat sekolah dan kerja.

---

## 4 Tips Navigasi di Stasiun Lempuyangan

1. **Titik Halte yang Tepat:** Keluarlah dari pintu selatan Stasiun Lempuyangan (pintu keluar utama). Seberangi jalan Hayam Wuruk di area zebra cross menuju halte permanen bertuliskan "Halte Stasiun Lempuyangan".
2. **Periksa Arah Bus:** Tanyakan kepada pramugara apakah armada yang datang adalah Koridor 4A (menuju UGM) atau 4B (menuju Giwangan).
3. **Koneksi Wisata XT Square:** Bagi penggemar kuliner malam dan wahana foto De Mata Trick Eye Museum, Koridor 4A berhenti tepat di depan kompleks XT Square.
4. **Siapkan Saldo Non-Tunai:** Halte Lempuyangan sangat ramai pada jam kedatangan kereta api; pastikan saldo e-money Anda sudah terisi agar tidak menghambat antrean boarding.`
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
      { name: 'Halte Monjali (Monumen Jogja Kembali)', location: 'Taman Pelangi & Museum Monjali', transit: 'Wisata Edukasi' },
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

Bagi Anda yang ingin bepergian dari Sleman Barat ke Bantul Timur tanpa harus terjebak lampu merah padat dan kepadatan wisatawan di tengah kota Yogyakarta, maka **Trans Jogja Koridor 5A dan 5B** adalah opsi terbaik. Koridor ini beroperasi menyusuri jalan lingkar (*Ring Road*) Yogyakarta secara konsisten dari utara, timur, hingga selatan.

Koridor 5A melayani jalur lingkar searah jarum jam (*clockwise*), sementara Koridor 5B melayani jalur berlawanan arah jarum jam (*counter-clockwise*). Kehadiran kedua koridor ini memberikan solusi transportasi cepat bagi pekerja kawasan industri, akademisi perguruan tinggi di seputar Ring Road, serta masyarakat pinggiran kota.

---

## Karakteristik Jalur Bebas Hambatan Kota

Karena menyusuri jalan arteri lingkar dengan lebar jalan 4 hingga 6 lajur, bus Koridor 5A dan 5B mampu melaju dengan kecepatan jelajah yang lebih stabil dibandingkan koridor perkotaan lainnya. Rute ini menghubungkan simpul-simpul penting:
* **Sektor Utara (Mlati & Ngaglik):** Berangkat dari Terminal Jombor, bus melintasi Monumen Jogja Kembali (Taman Pelangi), Simpang Kentungan (Jalan Kaliurang), dan Simpang Gejayan.
* **Sektor Timur (Depok & Banguntapan):** Melewati kampus terpadu UPN Veteran, RS JIH, kawasan transit Flyover Janti (menghubungkan jalur rel dan bus jalan Solo), dan kawasan Blok O (Museum Pusat TNI AU Dirgantara Mandala).
* **Sektor Selatan (Banguntapan & Giwangan):** Berbelok melintasi Ring Road Selatan menuju Terminal Bus Giwangan.

---

## Jam Operasi, Tarif & Akses Pembayaran

* **Jam Operasional:** Pukul 05.30 hingga 21.00 WIB setiap hari.
* **Tarif Tiket:** Flat Rp3.600 (Umum) / Rp2.000 (Pelajar).
* **Metode Bayar:** Scan QRIS semua e-wallet / mobile banking dan Kartu Uang Elektronik (TapCash, e-Money, Flazz, Brizzi).

---

## Tips Memaksimalkan Koridor 5A & 5B

1. **Jalur Cepat Menuju Wisata Dirgantara:** Jika Anda ingin berkunjung ke Museum Dirgantara Mandala (koleksi pesawat tempur bersejarah terbesar di Indonesia), turunlah di Halte Ketandan / Blok O lalu berjalan kaki atau naik ojek pangkalan sekitar 800 meter ke dalam kompleks pangkalan udara Adisutjipto.
2. **Koneksi Janti Tanpa Macet:** Di Halte Flyover Janti Selatan, Anda bisa berpindah secara mulus ke Koridor 1A jika ingin melanjutkan perjalanan ke Candi Prambanan atau berbelanja di Lippo Plaza.
3. **Pilih Koridor Sesuai Arah:** Perhatikan bahwa 5A bergerak dari Jombor menuju Janti dan Giwangan, sedangkan 5B bergerak dari Giwangan menuju Janti dan Jombor. Jangan sampai terbalik memilih halte di seberang jalan.`
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

Salah satu keunggulan terbesar dari sistem Bus Rapid Transit (BRT) Trans Jogja adalah konsep integrasi rute berjaring (*hub-and-spoke network*). Dengan hanya satu kali membayar tiket flat sebesar Rp3.600, seorang penumpang secara sah dapat menjelajahi seluruh penjuru Daerah Istimewa Yogyakarta—mulai dari Candi Prambanan di timur, Malioboro di tengah, hingga Jombor di barat—asalkan menguasai teknik dan aturan berpindah armada (*transfer/transit*) yang benar.

Namun, di lapangan masih banyak ditemukan wisatawan dan komuter pemula yang salah langkah sehingga terpaksa membayar dua kali atau bahkan tersesat keluar dari area halte steril. Memahami perbedaan antara halte permanen dan halte portabel adalah kunci utama mobilitas hemat di Jogja.

---

## Mengenal 2 Jenis Halte Trans Jogja & Aturan Transitnya

### 1. Halte Permanen (Halte Tertutup / Shelter Barrier)
Halte ini dibangun kokoh di atas trotoar atau pulau jalan khusus. Ciri-cirinya:
* Memiliki dinding kaca atau jeruji baja tertutup dengan pintu geser otomatis yang hanya terbuka saat bus merapat.
* Dilengkapi loket kasir berpintu putar (*turnstile barrier*) dan dijaga oleh petugas tiket (pramugara halte).
* **Aturan Transit Gratis:** Begitu Anda turun dari bus di halte ini, **tetaplah berada di dalam ruang tunggu halte**. Jangan melangkah keluar melewati pintu putar keluar. Selama Anda berada di dalam ruang steril ini, Anda berhak menaiki armada koridor lanjutan manapun tanpa perlu melakukan *tap* kartu atau membayar uang lagi.

### 2. Halte Portabel (Halte Tangga Bordes Terbuka)
Halte portabel berupa konstruksi tangga bordes baja berwarna biru yang ditempatkan di pinggir trotoar jalan sempit yang tidak memungkinkan pembangunan shelter permanen:
* Tidak memiliki dinding penutup, tidak ada pintu geser otomatis, dan tidak dijaga petugas loket tetap.
* Pembayaran tiket dilakukan langsung di atas bus menggunakan mesin EDC portabel kondektur.
* **Aturan Transit:** Saat Anda turun di halte portabel, Anda langsung menginjak trotoar jalan umum (area terbuka non-steril). Sistem Trans Jogja tidak dapat memvalidasi tiket lama Anda, sehingga jika Anda menaiki bus koridor berikutnya dari halte portabel, Anda wajib membayar tarif Rp3.600 kembali.

---

## 4 Halte Transit Utama Paling Direkomendasikan

Bila Anda perlu berganti koridor, sangat disarankan untuk merencanakan transit di salah satu dari 4 halte hub besar berikut:
1. **Halte Transit Terminal Condongcatur:** Hub terbesar di Sleman timur. Melayani pertukaran Koridor 1B, 2A, 2B, 3A, 3B, dan 5B. Ruang tunggu sangat luas dan beratap teduh.
2. **Halte Transit Terminal Jombor:** Hub di sisi barat laut. Melayani pertukaran Koridor 2A, 2B, 5A, dan 8. Sangat strategis untuk penumpang dari arah Muntilan dan Magelang.
3. **Halte Transit Malioboro 1 & 2:** Hub di tengah kawasan pariwisata. Memfasilitasi pertukaran antara Koridor 1A, 2A, 3A, dan Koridor 8.
4. **Halte Transit Terminal Giwangan:** Hub di belahan selatan Yogyakarta. Melayani pertukaran Koridor 3A, 3B, 4A, 4B, 9, dan Koridor 11.

---

## 5 Langkah Sukses Transit Tanpa Bayar Dobel

1. **Rencanakan Titik Temu:** Gunakan peta rute Trans Jogja untuk memastikan titik persilangan koridor awal dan koridor lanjutan Anda berada di **Halte Permanen**.
2. **Sampaikan ke Pramugara:** Saat menaiki bus pertama, sampaikan dengan sopan kepada kondektur: *"Pak/Mbak, saya mau menuju ke Monjali, sebaiknya saya transit di halte permanen mana yang bisa pindah gratis?"*. Petugas akan memberi tahu nama halte transit yang tepat.
3. **Perhatikan Pengumuman Halte:** Dengarkan pengeras suara otomatis di dalam bus yang menyebutkan nama halte berikutnya (*Next Stop Announcement*).
4. **Tetap di Ruang Tunggu:** Saat pintu bus terbuka di halte transit, turunlah ke peron dan cari tempat duduk di dalam halte. Jangan tergesa-gesa melangkah menuju pintu keluar.
5. **Konfirmasi LED Bus Lanjutan:** Ketika bus berikutnya datang, cek papan nomor koridor di kaca depan bus sebelum melangkah masuk.`
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
  `## Akses Transportasi Murah Begitu Turun dari Kereta Api

Stasiun Besar Yogyakarta (Stasiun Tugu) dan Stasiun Lempuyangan merupakan dua pintu gerbang kedatangan kereta api paling sibuk di Daerah Istimewa Yogyakarta. Setiap harinya, puluhan ribu penumpang kereta api jarak jauh antarkota, KRL Commuter Line, maupun KA Bandara YIA menjejakkan kaki di peron kedua stasiun bersejarah ini.

Sayangnya, bagi wisatawan pemula yang baru pertama kali berkunjung ke Kota Gudeg, momen keluar dari pintu stasiun kerap dibayangi kebingungan. Tawaran taksi gelap atau pengemudi angkutan dengan tarif tidak wajar sering kali membingungkan pelancong yang memiliki anggaran terbatas. Padahal, tepat di pelataran dan sekeliling kedua stasiun tersebut telah beroperasi halte bus Trans Jogja berpendingin udara dengan tarif flat subsidi hanya **Rp3.600**.

---

## Panduan Navigasi Halte di Stasiun Tugu Yogyakarta

Stasiun Tugu memiliki dua gerbang keluar dengan orientasi arah yang berbeda. Memilih pintu keluar yang benar akan menghemat langkah kaki Anda:

### 1. Pintu Keluar Sisi Timur (Arah Jalan Malioboro / Margo Utomo) — Paling Direkomendasikan
Pintu keluar timur bermuara langsung pada persimpangan Jalan Margo Utomo dan ujung utara Jalan Malioboro. Dari pintu ini, Anda memiliki 2 opsi halte permanen terdekat:
* **Halte Malioboro 1 (Grand Inna Malioboro):**
  * **Jarak Tempuh:** Hanya sekitar 150 meter (sekitar 2–3 menit jalan kaki santai).
  * **Arah Berjalan:** Begitu melangkah keluar pintu gerbang timur stasiun, beloklah ke kanan menyusuri trotoar pedestrian ke arah selatan. Seberangi jalur penyeberangan zebra cross menuju halte tertutup di depan Hotel Grand Inna Malioboro.
  * **Koridor yang Tersedia:** Koridor **1A** (menuju UIN, Adisutjipto, Kalasan, dan Prambanan), Koridor **2A** (menuju Kotabaru, UGM, dan Jombor), Koridor **3A** (menuju Ngabean, Jokteng, dan Giwangan), serta Koridor **8**.
* **Halte Mangkubumi 1:**
  * **Jarak Tempuh:** Sekitar 200 meter ke arah utara.
  * **Arah Berjalan:** Dari pintu timur, belok ke kiri menyusuri Jalan Margo Utomo ke arah Tugu Jogja. Halte terletak di sisi barat jalan. Sangat pas bila Anda hendak menuju kawasan Palagan atau Monjali.

### 2. Pintu Keluar Sisi Selatan (Arah Jalan Pasar Kembang)
Pintu keluar selatan langsung berhadapan dengan pusat penginapan murah dan kampung turis Sosrowijayan. Terdapat Halte Portabel Pasar Kembang yang melayani bus koridor pengumpan arah barat.

---

## Panduan Navigasi Halte di Stasiun Lempuyangan

Bagi para penumpang kereta api kelas ekonomi bersubsidi, Stasiun Lempuyangan adalah titik pemberhentian utama Anda. Akses Trans Jogja di Lempuyangan jauh lebih praktis dan dekat:
* **Nama Halte:** Halte Stasiun Lempuyangan.
* **Lokasi Persis:** Tepat di seberang pintu gerbang utama stasiun sisi selatan, di Jalan Hayam Wuruk.
* **Jarak Jalan Kaki:** Kurang dari 50 meter (cukup 1 menit melintasi area penyeberangan jalan berpemandu marka kuning).
* **Layanan Koridor:**
  * **Koridor 4A:** Membawa Anda ke arah timur dan selatan menuju kampus UIN Sunan Kalijaga, sentra kuliner XT Square, dan Terminal Induk Giwangan.
  * **Koridor 4B:** Membawa Anda ke arah utara menuju Stadion Kridosono Kotabaru, kawasan belanja Gramedia Sudirman, dan kampus terpadu Universitas Gadjah Mada (UGM).

---

## 4 Tips Penting Berpindah Moda dari Kereta ke Bus

1. **Siapkan Saldo Uang Elektronik Sebelum Turun Kereta:** Jangan tunggu sampai tiba di loket halte untuk mengisi saldo dompet digital atau kartu e-money Anda. Lakukan top up saat masih berada di dalam kereta agar tidak menghambat arus antrean penumpang.
2. **Perhatikan Barang Bawaan Koper:** Bus Trans Jogja memiliki lorong kabin yang cukup lapang untuk koper ukuran kabin (20 inci). Bila Anda membawa koper berukuran sangat besar (28 inci ke atas), berdirilah di dekat pintu keluar bus agar tidak menyulitkan penumpang lain.
3. **Cek Jam Kedatangan Terakhir:** Trans Jogja beroperasi hingga pukul 21.30 WIB. Jika kereta api Anda tiba di atas pukul 21.30 WIB malam, beralihlah ke moda transportasi alternatif seperti taksi resmi berargo atau transportasi daring di pick-up point resmi stasiun.
4. **Tanyakan Petugas Halte:** Bila Anda ragu koridor mana yang tercepat menuju hotel atau tujuan Anda, petugas pramugara halte di Stasiun Tugu dan Lempuyangan selalu siap memberikan panduan rute transit terbaik.`
);

console.log('Category 1 (Expanded 800+ words) written successfully.');
