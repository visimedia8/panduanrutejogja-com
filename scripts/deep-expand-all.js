import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'content', 'panduan');

const expansions = {
  'rute-jadwal-trans-jogja-koridor-2a-condongcatur-jombor': `

## Analisis Titik Rawan Kepadatan Lalu Lintas (Bottleneck)

Dalam pengoperasian harian Trans Jogja Koridor 2A, terdapat beberapa simpul jalan yang kerap mengalami perlambatan laju armada, terutama pada jam keberangkatan kerja dan kepulangan mahasiswa:
1. **Simpang Empat Kentungan & Ring Road Utara:** Meskipun telah dibangun underpass bawah tanah, pergerakan bus dari Jalan Kaliurang yang hendak menyeberang atau berbelok ke arah selatan kerap tertahan antrean siklus lampu lalu lintas selama 5 hingga 10 menit.
2. **Kawasan Cagar Budaya Kotabaru (Jalan Wardhani):** Kawasan sekolah favorit seperti SMA Negeri 3 Yogyakarta dan SMP Negeri 5 Yogyakarta mengalami lonjakan volume kendaraan penjemput pada pukul 14.30 hingga 16.00 WIB.
3. **Simpang Empat Pingit (Jalan Kyai Mojo):** Titik pertemuan arus kendaraan dari arah barat (Godean) dan pusat kota. Penumpang yang mengejar jadwal keberangkatan bus AKAP di Terminal Jombor disarankan menambahkan estimasi waktu cadangan minimal 20 menit saat melintasi ruas ini.

---

## Perbandingan Biaya: Trans Jogja 2A vs Transportasi Daring

Untuk memberikan gambaran nyata efisiensi pengeluaran komuter, berikut simulasi perbandingan biaya perjalanan dari Terminal Condongcatur menuju Terminal Jombor:
* **Menggunakan Trans Jogja Koridor 2A:** Tarif flat resmi Rp3.600 per orang sekali jalan. Total biaya pulang-pergi (PP) hanya Rp7.200.
* **Menggunakan Ojek Online (Motor):** Tarif dinamis berkisar antara Rp18.000 hingga Rp25.000 sekali jalan (total PP sekitar Rp36.000 – Rp50.000).
* **Menggunakan Taksi Online (Mobil):** Tarif berkisar antara Rp45.000 hingga Rp65.000 sekali jalan pada jam sibuk.
* **Kesimpulan Penghematan:** Memilih Koridor 2A memberikan penghematan anggaran mobilitas hingga lebih dari 80%, sangat signifikan bagi mahasiswa dan pekerja harian yang beraktivitas rutin selama sebulan penuh.

---

## Fasilitas & Aksesibilitas Penumpang Disabilitas

Armada bus yang dioperasikan pada Koridor 2A dilengkapi dengan lantai rendah (*low-deck entry*) pada pintu tengah yang sejajar dengan peron halte permanen bertiket. Di dalam kabin bus, terdapat area khusus untuk satu kursi roda manual serta pegangan tangan (*handrail*) bertekstur anti-selip bagi penumpang lansia. Pramugara bus dilatih untuk membantu membuka jembatan lipat (*ramp*) saat penumpang berkebutuhan khusus hendak menaiki armada.`,

  'rute-lengkap-trans-jogja-koridor-3a-bandara-adisutjipto-giwangan': `

## Integrasi Antarmoda di Halte Adisutjipto & Terminal Giwangan

Koridor 3A dirancang secara khusus untuk menjembatani dua simpul transit terbesar di Yogyakarta:
* **Integrasi Stasiun Maguwo (Sisi Timur):** Penumpang KRL Commuter Line yang tiba dari Solo atau Klaten dapat berjalan kaki melintasi terowongan bawah tanah berpendingin udara (*underpass*) sejauh 80 meter langsung menuju Halte Trans Jogja Adisutjipto. Tanpa perlu menyeberangi jalan raya nasional Solo yang padat kendaraan, penumpang dapat langsung menaiki Koridor 3A menuju kampus UGM atau Ring Road Utara.
* **Integrasi Terminal Giwangan (Sisi Selatan):** Sebagai terminal tipe A terbesar di Yogyakarta, Terminal Giwangan melayani ribuan bus antarkota antarprovinsi (AKAP) dari Jakarta, Bandung, Surabaya, Denpasar, hingga Sumatra. Bus Koridor 3A masuk langsung ke peron jalur dalam terminal, memudahkan pemudik atau wisatawan luar kota melanjutkan perjalanan keliling kota Jogja tanpa harus berurusan dengan calo angkutan liar di luar terminal.

---

## Eksplorasi Cagar Budaya Kotagede via Halte Tegalgendu

Salah satu daya tarik terbesar dari Koridor 3A yang tidak dimiliki koridor lain adalah aksesibilitasnya menuju kawasan cagar budaya **Kotagede**. Begitu turun di Halte Tegalgendu, wisatawan dapat menikmati:
1. **Sentra Kerajinan Perak Tradisional:** Deretan galeri perak berusia puluhan tahun yang memproduksi perhiasan perak filigree khas keraton.
2. **Kompleks Makam Raja-Raja Mataram Islam:** Situs bersejarah pemakaman Panembahan Senopati dan Ki Ageng Pemanahan yang asri dan sarat nilai spiritual.
3. **Kuliner Legendaris Kipo & Kembang Waru:** Kue basah tradisional berbahan tepung ketan, gula jawa, dan kelapa parut yang hanya dapat ditemukan di pasar tradisional Kotagede.

---

## Tips Berkeliling Efisien dengan Koridor 3A

* **Pahami Perbedaan 3A dan 3B:** Ingat bahwa Koridor 3A melaju searah jarum jam (*Adisutjipto ke Jombor lalu Giwangan*), sementara Koridor 3B melaju berlawanan arah jarum jam (*Adisutjipto ke Giwangan lalu Jombor*). Memilih koridor yang tepat akan menghemat waktu perjalanan hingga 40 menit.
* **Waktu Terbaik Naik Bus:** Pukul 09.00 hingga 11.30 WIB merupakan waktu paling lengang dan nyaman untuk menikmati pemandangan kota santai dari balik jendela bus ber-AC.`,

  'panduan-lengkap-jalur-trans-jogja-koridor-4a-4b': `

## Detail Akses Kampus & Kawasan Pemukiman Mahasiswa

Jalur lintasan Koridor 4A dan 4B menjadi urat nadi harian bagi ribuan mahasiswa perantau yang menempuh pendidikan di Yogyakarta. Jalur ini menyisir beberapa pusat universitas ternama:
1. **Universitas Islam Negeri (UIN) Sunan Kalijaga:** Halte UIN di Jalan Timoho dan Jalan Marsda Adisucipto melayani ribuan mahasiswa Fakultas Dakwah, Syariah, Tarbiyah, dan Sains Teknologi.
2. **Universitas Ahmad Dahlan (UAD) Kampus 1 & 2:** Terhubung langsung melalui Halte Glagahsari dan Halte Pamularsih di kawasan Pandeyan.
3. **Universitas Sarjanawiyata Tamansiswa (UST):** Kampus kebangsaan warisan Ki Hadjar Dewantara di Jalan Kusumanegara dapat diakses hanya dengan berjalan 100 meter dari Halte SGM.
4. **Fakultas Kedokteran & Vokasi UGM:** Ujung utara rute Koridor 4A berputar di dekat kawasan Sekip dan Rumah Sakit Dr. Sardjito, memudahkan mobilitas koas dan tenaga medis.

---

## Panduan Membawa Barang Bawaan dari Stasiun Lempuyangan

Bagi penumpang kereta api yang baru tiba di Stasiun Lempuyangan dengan membawa koper atau tas punggung besar (*carrier bag*):
* **Kapasitas Lorong Kabin:** Bus medium Trans Jogja memiliki lebar lorong sekitar 70 cm. Letakkan koper di bawah kursi Anda jika berdimensi kabin (20 inci) atau letakkan di area berdiri berdekatan dengan pintu tengah.
* **Bantu Petugas Menjaga Jalur:** Jangan menaruh tas ransel di atas kursi kosong saat bus dalam kondisi padat penumpang berdiri. Pangku tas Anda demi memberikan kesempatan duduk bagi penumpang lain.
* **Antisipasi Tangga Halte:** Halte Stasiun Lempuyangan adalah halte permanen dengan lantai peron yang rata dengan pintu bus, sehingga Anda tidak perlu mengangkat koper menaiki tangga tinggi.`,

  'panduan-rute-trans-jogja-koridor-5a-5b-ring-road': `

## Nilai Strategis Jalur Lingkar Luar DIY

Jalan Arteri Ring Road Yogyakarta dibangun sebagai sabuk pengaman lalu lintas nasional yang menghubungkan provinsi Jawa Tengah sisi barat (Purworejo, Magelang) dengan sisi timur (Klaten, Solo). Sebelum kehadiran Koridor 5A dan 5B, warga yang ingin bepergian antar-kecamatan pinggiran terpaksa harus menggunakan sepeda motor pribadi di tengah padatnya truk logistik tronton antarkota.

Kehadiran Trans Jogja Koridor 5A dan 5B mengubah paradigma tersebut:
* **Keamanan Maksimal:** Bus BRT beroperasi di jalur lambat atau lajur arteri yang teratur, menghindarkan penumpang dari risiko kecelakaan lalu lintas kendaraan roda dua di jalur cepat Ring Road.
* **Konektivitas Fasilitas Kesehatan:** Koridor ini melintasi beberapa rumah sakit rujukan utama, antara lain RS JIH (Jogja International Hospital) di Ring Road Utara dan RS Queen Latifa di Ring Road Barat.
* **Akses Pusat Perbelanjaan & Hiburan:** Menghubungkan pusat belanja Pakuwon Mall Jogja (Hartono Mall), Monumen Jogja Kembali (Taman Pelangi), dan bioskop di kawasan utara kota.

---

## Panduan Waktu Tempuh & Rekomendasi Jam Perjalanan

* **Waktu Tempuh Total:** Untuk mengelilingi separuh lingkaran Ring Road (Terminal Jombor ke Terminal Giwangan), waktu yang dibutuhkan berkisar antara **35 hingga 45 menit**. Jauh lebih cepat dibandingkan bus kota jalur dalam yang harus menghadapi puluhan lampu merah simpang kota.
* **Jam Lengang Ideal:** Pukul 10.00 hingga 14.00 WIB adalah waktu terbaik untuk menaiki rute ini dengan ketersediaan kursi duduk yang sangat leluasa.`,

  'cara-transit-dan-pindah-bus-trans-jogja': `

## Skenario Praktis Transit Lintas Wilayah DIY

Untuk memahami penerapan transit bebas bayar ganda secara konkret, perhatikan dua skenario perjalanan populer berikut:

### Skenario 1: Dari Candi Prambanan Menuju Kampus UGM
1. Naik bus **Koridor 1A** dari Terminal Prambanan (bayar Rp3.600 via QRIS).
2. Turun di **Halte Transit RS Bethesda / Sudirman** (halte tertutup permanen).
3. Jangan keluar ke trotoar jalan; tunggulah di dalam halte selama 5–10 menit.
4. Naiklah bus **Koridor 2A** yang melintas menuju arah utara (Terban/UGM) tanpa membayar tiket lagi.

### Skenario 2: Dari Bandara YIA (via KA Bandara ke Stasiun Tugu) Menuju Monjali
1. Begitu tiba di Stasiun Tugu, jalan kaki 150 meter ke **Halte Malioboro 1**.
2. Tap kartu e-money Rp3.600 di gate masuk Halte Malioboro 1.
3. Naik bus **Koridor 2A** dan turun di **Halte Transit Terminal Jombor**.
4. Di Terminal Jombor, tetap berada di area peron dan naik bus **Koridor 5A** menuju Halte Monumen Jogja Kembali (Monjali) dengan biaya nol rupiah.

---

## Prosedur Pengaduan Kendala Pembayaran Transit

Jika Anda secara tidak sengaja tertagih dua kali oleh sistem saat berpindah bus di halte permanen:
* Simpan struk fisik dari mesin EDC atau screenshot riwayat transaksi di aplikasi e-wallet Anda.
* Laporkan kepada petugas loket halte atau hubungi layanan pengaduan Dinas Perhubungan DIY via WhatsApp resmi di nomor pengaduan transportasi perkotaan (tertera di stiker dinding kabin bus).
* Petugas loket akan melakukan verifikasi manual nomor kartu atau ID transaksi Anda.`,

  'lokasi-halte-trans-jogja-terdekat-stasiun-tugu-lempuyangan': `

## Rekomendasi Rute Berdasarkan Kawasan Tujuan Penginapan

Bagi pelancong yang baru tiba di Stasiun Tugu atau Lempuyangan, berikut panduan memilih koridor bus yang tepat sesuai lokasi hotel atau homestay Anda:
* **Menuju Kawasan Prawirotaman (Sentra Kafe & Turis Asing):**
  Dari Stasiun Tugu, naik bus **Koridor 3A** dari Halte Malioboro 1, turun di Halte Pojok Beteng Timur atau Halte Menukan di Jalan Parangtritis, lalu jalan kaki 5 menit ke Jalan Prawirotaman.
* **Menuju Kawasan Seturan & Babarsari (Kampus & Kuliner Malam):**
  Dari Stasiun Tugu, naik bus **Koridor 1A**, turun di Halte Janti Utara, lalu lanjutkan perjalanan menggunakan ojek singkat atau Koridor 5A menuju Jalan Seturan Raya.
* **Menuju Kawasan Jalan Kaliurang (Jakal Bawah & Kampus UGM):**
  Dari Stasiun Lempuyangan, naik bus **Koridor 4B** menuju Kotabaru, transit ke **Koridor 2A** di Halte SMPN 5 untuk menuju Jalan C. Simanjuntak atau Halte Kentungan Jakal Km 5.

---

## Jalur Pejalan Kaki & Aksesibilitas Difabel di Sekitar Stasiun

Trotoar pedestrian di sepanjang Jalan Malioboro dan Jalan Margo Utomo telah direvitalisasi total dengan standar ramah disabilitas:
* **Ubin Pemandu Kuning (Guiding Blocks):** Terpasang rapi membimbing penyandang tunanetra mulai dari gerbang keluar timur Stasiun Tugu hingga tepat di depan pintu masuk Halte Malioboro 1.
* **Bebas Hambatan:** Jalur pedestrian telah disterilkan dari parkir liar sepeda motor dan pedagang kaki lima tanpa izin, sehingga wisatawan yang menyeret koper beroda dapat berjalan dengan lancar tanpa guncangan berat.`,

  'cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo': `

## Panduan Membawa Bagasi Koper di KA Bandara

Fasilitas bagasi di dalam rangkaian KA Bandara YIA dirancang khusus mengikuti standar kereta ekspres bandara internasional di dunia:
* **Rak Bagasi Kabin (Overhead Racks):** Terletak di sepanjang bagian atas deretan kursi penumpang, sangat pas untuk menaruh tas ransel ransel harian, tas laptop, kardus bakpia oleh-oleh, dan tas jinjing duffel bag.
* **Rak Koper Besar (Luggage Stacks):** Terletak di dekat pintu masuk setiap gerbong kereta api. Rak bertingkat tiga berbahan baja ini mampu memuat koper ukuran besar (*check-in baggage*) ukuran 24 inci, 28 inci, hingga 32 inci dengan pengaman palang penahan guncangan.
* **Gratis Biaya Bagasi:** Penumpang tidak dikenakan biaya tambahan sepeser pun untuk membawa bagasi koper pribadi ke dalam kabin kereta api, selama barang bawaan tidak membahayakan keselamatan atau berbau menyengat.

---

## Rute Balik: Dari Bandara YIA Menuju Stasiun Tugu Yogyakarta

Prosedur kepulangan dari Bandara YIA menuju pusat kota Jogja sama mudahnya:
1. Setelah mengambil bagasi di sabuk konveyor (*baggage claim carousel*), berjalanlah keluar menuju lobi kedatangan.
2. Ikuti papan petunjuk arah bergambar kereta api bertuliskan **"Stasiun Kereta Api / Train Station"** menuju sayap timur gedung terminal.
3. Tap-in tiket barcode di gate boarding Stasiun YIA.
4. Kereta akan meluncur kencang menembus perbukitan Kulon Progo dan mengantarkan Anda tiba di pusat Malioboro Stasiun Tugu dalam waktu 39 menit saja.`,

  'perbedaan-ka-bandara-yia-reguler-vs-yia-xpress': `

## Simulasi Penghitungan Nilai Tambah & Waktu

Untuk menentukan apakah selisih harga Rp30.000 bernilai sepadan (*worth it*) bagi perjalanan Anda, pertimbangkan perbandingan skenario berikut:
* **Kasus Rombongan Keluarga (4 Orang):**
  * Total Tiket Reguler: 4 x Rp20.000 = **Rp80.000**.
  * Total Tiket Xpress: 4 x Rp50.000 = **Rp200.000**.
  * Selisih biaya sebesar **Rp120.000** dapat dialokasikan untuk anggaran makan siang gudeg atau oleh-oleh di Yogyakarta. Oleh karena itu, bagi rombongan keluarga yang memesan tiket jauh-jauh hari, **KA Reguler adalah opsi paling rasional**.
* **Kasus Pebisnis Solo Traveler yang Mengejar Penerbangan Pagi:**
  * Bila penerbangan Anda berangkat pukul 08.00 WIB pagi, Anda wajib tiba di bandara sebelum pukul 06.30 WIB.
  * Kereta Xpress pukul 05.00 WIB memastikan Anda meluncur non-stop tanpa jeda transit stasiun antara, tiba tepat pukul 05.35 WIB di dalam terminal dengan risiko keterlambatan nol persen. Dalam skenario ini, **investasi Rp50.000 pada KA Xpress memberikan ketenangan pikiran mutlak**.

---

## Kebijakan Pembatalan & Perubahan Jadwal (Reschedule)

* **Pembatalan Tiket:** Dapat diproses melalui aplikasi Access by KAI maksimal 2 jam sebelum waktu keberangkatan dengan dikenakan bea pembatalan sesuai regulasi PT Railink (umumnya pemotongan 25%).
* **Ketinggalan Kereta:** Tiket yang tidak di-scan hingga pintu gate ditutup (5 menit sebelum berangkat) akan otomatis hangus dan tidak dapat di-refund atau dipindahkan ke jam berikutnya.`,

  'rute-jadwal-kereta-prameks-jogja-kutoarjo': `

## Peran Prameks bagi Perekonomian & Mobilitas Aglomerasi

Kereta Api Prameks bukan sekadar sarana transportasi biasa; bagi ribuan warga Kabupaten Purworejo dan Kulon Progo, kereta ini adalah urat nadi kehidupan ekonomi. Setiap harinya, petani buah lokal, pedagang gula kelapa Jenar, guru, ASN, dan tenaga kesehatan mengandalkan Prameks untuk berangkat bertugas di Yogyakarta pada pagi hari dan pulang ke Kutoarjo pada sore hari.

Dengan tarif flat subsidi Rp8.000 yang tidak pernah naik selama bertahun-tahun, Prameks menjadi simbol komitmen pemerintah dalam menjaga daya beli masyarakat di sektor transportasi perkeretaapian bersubsidi.

---

## Panduan Transit Antarmoda di Stasiun Kutoarjo

Stasiun Kutoarjo merupakan stasiun terminus besar dengan fasilitas lengkap:
1. **Sambungan Kereta Api Jarak Jauh:** Penumpang dari Jogja yang hendak menuju Cilacap, Kroya, Purwokerto, Cirebon, atau Bandung dapat berpindah ke kereta api antarkota lintas selatan (seperti KA Kutojaya Selatan, KA Sawunggalih, KA Lodaya, atau KA Malabar) di peron stasiun yang sama.
2. **Koneksi Angkutan Pedesaan:** Di pelataran luar stasiun Kutoarjo tersedia pangkalan mikrobus angkutan pedesaan menuju pusat kota Purworejo, pantai Ketawang, dan kabupaten tetangga Kebumen.`,

  'panduan-naik-bus-damri-bandara-yia-jogja-magelang': `

## Fasilitas Armada & Kenyamanan Penumpang DAMRI YIA

Seluruh armada bus DAMRI pemadu moda yang beroperasi di Bandara YIA dirancang mengutamakan kenyamanan perjalanan jarak jauh:
* **Kabin Ber-AC Bersih:** Dilengkapi sistem sirkulasi udara berfilter HEPA dan pendingin udara ganda yang sejuk merata hingga deret kursi paling belakang.
* **Kursi Ergonomis Reclining:** Jok bus berbalut kulit sintetis dengan tuas reclining sandaran punggung dan ruang kaki (*legroom*) yang lega.
* **Port Pengisian Daya USB:** Tersedia colokan USB port di setiap pilar jendela untuk mengisi daya baterai smartphone penumpang selama perjalanan darat 1,5 hingga 2 jam.
* **Bagasi Terlindung:** Koper-koper besar disimpan rapi di kompartemen bagasi bawah bus yang terkunci aman dan diberi label nomor bagasi oleh kru bus.

---

## Panduan Perjalanan Khusus Rute YIA ke Candi Borobudur

Rute DAMRI YIA menuju Borobudur melintasi jalur Bedoyo–Sermo–Menoreh yang menyajikan panorama alam perbukitan Kulon Progo yang spektakuler:
* Bagi wisatawan mancanegara yang baru mendarat di penerbangan internasional YIA (misalnya dari Singapura atau Kuala Lumpur) dan ingin langsung menginap di resor sekitar Candi Borobudur (seperti Amanjiwo, Plataran, atau homestay Balkondes), bus DAMRI KSPN ini adalah moda resmi paling ekonomis tanpa perlu sewa taksi carter berbiaya ratusan ribu rupiah.`,

  'rute-tarif-angkutan-perintis-teman-bus-sleman-bantul': `

## Skema Pembayaran & Cara Naik Teman Bus DIY

Sistem operasional Teman Bus menerapkan protokol modern tanpa kondektur (*driver-only operation*):
1. **Menunggu di Titik Pemberhentian Bus (TPB):** Berdirilah di rambu TPB resmi yang tersebar di sepanjang jalan pedesaan Sleman dan Bantul. Lambaikan tangan dengan jelas ke arah pengemudi saat bus berwarna merah menyala mulai mendekat.
2. **Naik Melalui Pintu Depan:** Masuklah dengan tertib melalui pintu depan bus.
3. **Melakukan Tap Kartu Elektronik:** Dekatkan kartu e-money (Mandiri e-Money, BCA Flazz, BNI TapCash, atau BRI Brizzi) pada mesin validator yang terpasang di samping kursi pengemudi hingga terdengar bunyi 'bip' sukses dan saldo terpotong.
4. **Mempersiapkan Titik Turun:** Sebelum tiba di halte atau TPB tujuan Anda, tekan tombol bel berwarna merah di tiang pegangan bus untuk memberi sinyal kepada pengemudi agar menepikan armada. Turunlah dengan berhati-hati melalui pintu tengah bus.`,

  'panduan-integrasi-antarmoda-stasiun-tugu-yogyakarta': `

## Fasilitas Difabel & Standar Keamanan di Seluruh Kawasan Stasiun

Sebagai hub transit percontohan di tingkat nasional, Stasiun Tugu telah menerapkan standar aksesibilitas universal yang komprehensif:
* **Fasilitas Kursi Roda & Jalur Landai (Ramp):** Seluruh selasar penghubung antarmoda dirancang dengan kemiringan ramah kursi roda tanpa undakan curam.
* **Lift Khusus Prioritas:** Tersedia lift berkapasitas besar di terowongan underpass bawah tanah untuk memfasilitasi lansia, ibu hamil, dan penumpang disabilitas berpindah peron jalur kereta dengan aman.
* **Sistem Keamanan 24 Jam:** Lebih dari 120 kamera pengawas CCTV beresolusi tinggi mengawasi seluruh sudut stasiun, didukung pos petugas Polisi Khusus Kereta Api (Polsuska) dan sekuriti stasiun yang bersiaga sepanjang hari.
* **Pos Kesehatan & Ruang Laktasi:** Tersedia pos medis darurat dengan tenaga perawat bersertifikat serta ruang menyusui (*nursery room*) yang higienis dan privat bagi ibu yang membawa bayi.`,

  'cara-pembayaran-trans-jogja-emoney-qris-tunai': `

## Mengatasi Kendala Teknis Saat Bertransaksi di Bus Trans Jogja

Meskipun sistem digital telah dirancang sangat handal, pengguna terkadang mengalami kendala teknis di lapangan. Berikut solusi praktisnya:
1. **Jika Saldo E-Money Tidak Cukup Saat di-Tap:**
   Bila kartu e-money Anda berbunyi peringatan saldo kurang di mesin reader bus, jangan panik. Anda dapat langsung mengalihkan pembayaran ke metode **QRIS** menggunakan aplikasi mobile banking atau e-wallet di ponsel Anda.
2. **Jika Sinyal Internet Ponsel Lemah di Halte Tertentu:**
   Beberapa halte di kawasan terluar mungkin mengalami pelemahan sinyal operator seluler tertentu. Untuk mengantisipasinya, selalu simpan minimal 1 kartu fisik e-money perbankan di dalam dompet Anda sebagai dana cadangan darurat.
3. **Masa Berlaku Tiket Perjalanan:**
   Satu kali pembayaran tiket flat Rp3.600 berlaku untuk satu rangkaian perjalanan berkelanjutan. Anda berhak melakukan perpindahan koridor bus sepuasnya selama masih berada di dalam shelter halte transit tertutup tanpa melangkah keluar pintu gerbang turnstile.`,

  'cara-beli-tiket-krl-jogja-solo-access-kai-gotransit': `

## Cara Membatalkan Tiket QR KRL & Kebijakan Pengembalian Dana (Refund)

Jika Anda mendadak membatalkan rencana perjalanan setelah membeli tiket QR KRL di aplikasi Gojek (GoTransit) atau Access by KAI:
* **Pada Fitur GoTransit (Gojek):**
  Buka kembali halaman detail tiket KRL Anda di aplikasi Gojek. Selama kode QR tiket **belum pernah di-scan di gate masuk stasiun**, klik tombol **"Batalkan Tiket"**. Saldo GoPay Anda akan dikembalikan secara instan 100% tanpa potongan biaya administrasi apapun.
* **Batas Waktu Penggunaan:**
  Jika Anda lupa membatalkan dan tidak menggunakan tiket hingga jadwal keberangkatan KRL terakhir di hari tersebut berakhir (pukul 23.59 WIB), sistem akan secara otomatis membatalkan tiket dan mengembalikan saldo ke akun GoPay Anda dalam waktu 1x24 jam kerja.`,

  'panduan-rute-angkutan-umum-jogja-candi-borobudur': `

## Tips Wisata Hemat di Sekitar Kawasan Candi Borobudur

Setelah tiba di Terminal Borobudur menggunakan transportasi umum, maksimalkan liburan Anda dengan panduan berikut:
1. **Manfaatkan Angkutan Wisata Listrik (Shuttle EV):** Di dalam kawasan kompleks taman wisata candi, pengelola menyediakan mobil golf listrik ramah lingkungan untuk mengantar pengunjung dari loket utama menuju pelataran candi.
2. **Kunjungi Candi Pawon & Mendut dengan Sepeda Sewa:** Di sekitar terminal bus Borobudur terdapat banyak persewaan sepeda ontel dengan tarif sewa sekitar Rp20.000 – Rp30.000 per hari. Anda bisa mengayuh sepeda santai menyusuri desa wisata Wanurejo dan mencicipi kuliner khas Mangut Beong Magelang.
3. **Waktu Kunjungan Terbaik:** Datanglah di pagi hari sekitar pukul 07.30 hingga 09.30 WIB untuk menghindari terik matahari siang hari dan mendapatkan pencahayaan foto terbaik pada relief batu candi.`,

  'transportasi-umum-pantai-parangtritis-terminal-giwangan': `

## Rute Wisata Terusan: Dari Parangtritis Menuju Gumuk Pasir & Paralayang

Kawasan pesisir selatan Bantul menyimpan ragam destinasi wisata alam mempesona yang lokasinya berdekatan dengan Pantai Parangtritis:
* **Gumuk Pasir Barchan:** Fenomena bentang alam gundukan pasir pantai langka di Asia Tenggara, terletak hanya 1 kilometer di sebelah barat Parangtritis. Tempat populer untuk mencoba olahraga selancar pasir (*sandboarding*). Anda bisa berjalan santai menyusuri jalan tepi pantai atau naik ojek wisata lokal dari sub-terminal.
* **Bukit Paralayang Watugupit:** Berada di atas tebing karst timur Parangtritis. Menawarkan titik pemandangan terbaik untuk menyaksikan matahari terbenam dari ketinggian tebing yang menghadap langsung ke Samudra Hindia. Dari sub-terminal pantai, tersedia ojek wisata dengan tarif standar yang disepakati paguyuban.`,

  'jam-buka-fasilitas-penitipan-barang-stasiun-tugu': `

## Tips Keamanan Maksimal Menyimpan Barang Berharga

Meskipun fasilitas loker di Stasiun Tugu dijaga sekuriti dan terpantau kamera CCTV selama 24 jam penuh, terapkan pedoman keselamatan berikut:
* **Bawa Barang Berharga Pribadi:** Selalu simpan paspor, kartu identitas KTP, perhiasan emas, uang tunai, dan perangkat laptop utama di dalam tas selempang kecil yang Anda bawa sendiri saat berjalan-jalan di Malioboro.
* **Catat Nomor Loker & Kode PIN:** Jangan hanya mengandalkan ingatan. Catat nomor boks loker Anda dan simpan screenshot kode PIN akses di galeri ponsel Anda atau kirimkan salinannya ke nomor obrolan kerabat Anda untuk mengantisipasi jika ponsel Anda kehabisan daya baterai.
* **Periksa Kembali Sebelum Menutup Pintu:** Pastikan tidak ada barang bawaan Anda yang tertinggal atau terjepit engsel pintu sebelum mengunci loker.`,

  'tips-naik-transportasi-umum-malioboro-wisatawan': `

## Etika & Kebijakan Kawasan Pedestrian Bebas Asap Rokok

Kawasan Jalan Malioboro telah ditetapkan oleh Pemerintah Kota Yogyakarta sebagai **Kawasan Tanpa Rokok (KTR)**:
* Wisatawan dilarang keras merokok di sepanjang trotoar utama pedestrian, bangku santai, maupun di dalam halte bus Trans Jogja.
* Bagi perokok, Pemkot telah menyediakan bilik khusus merokok (*smoking shelter*) di beberapa titik strategis, seperti di pelataran Malioboro Mall, Kompleks Kepatihan, dan Taman Abu Bakar Ali.
* Menjaga kebersihan dengan membuang sampah pada tempat sampah pilah (organik, anorganik, dan residu) yang tersedia setiap jarak 20 meter di sepanjang trotoar Malioboro adalah wujud partisipasi menjaga keasrian Kota Budaya Yogyakarta.`
};

let updated = 0;
for (const [slug, extraText] of Object.entries(expansions)) {
  const filePath = path.join(dir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.trim() + '\n' + extraText.trim() + '\n';
    fs.writeFileSync(filePath, content);
    updated++;
    console.log(`Deep expanded: ${slug}.md`);
  }
}

console.log(`Completed deep expansion for ${updated} articles.`);
