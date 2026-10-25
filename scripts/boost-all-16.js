import fs from 'fs';
import path from 'path';

const PANDUAN_DIR = path.resolve('src/content/panduan');

const expansions = {
  'cara-beli-tiket-krl-jogja-solo-access-kai-gotransit.md': `
## Prosedur Pembatalan, Refund, dan Ubah Jadwal Tiket KRL

Salah satu pertanyaan yang sering diajukan calon penumpang adalah bagaimana jika rencana perjalanan berubah setelah tiket KRL dibeli melalui aplikasi digital. Perlu dipahami bahwa tiket KRL Commuter Line memiliki regulasi yang berbeda dengan tiket Kereta Api Jarak Jauh:

1. **Tiket GoTransit (Gojek):** Tiket KRL yang dibeli melalui GoTransit memiliki masa berlaku hingga pukul 23.59 WIB pada tanggal keberangkatan yang dipilih. Jika tiket belum sempat dipindai (*tap-in*) di pintu gerbang stasiun asal, Anda dapat melakukan pembatalan (*cancel order*) langsung dari menu pesanan Gojek. Saldo GoPay Anda akan dikembalikan secara instan (100% tanpa potongan denda) ke dompet digital Anda.
2. **Tiket Aplikasi Access by KAI:** Pembelian QR tiket KRL melalui Access by KAI yang belum digunakan dapat dibatalkan melalui menu histori transaksi sebelum batas waktu masa aktif tiket berakhir. Dana pengembalian akan diproses melalui transfer bank atau dompet digital yang terhubung dalam kurun waktu 1–3 hari kerja.
3. **Mengatasi Tiket Hangus Akibat Salah Stasiun:** Jika Anda salah memilih stasiun tujuan di aplikasi (misalnya memilih turun di Klaten namun terpaksa turun lebih jauh di Stasiun Solo Balapan), Anda cukup mendatangi loket *Penyelarasan Tarif* (Fare Adjustment) di stasiun kedatangan. Petugas loket akan menghitung selisih tarif resmi dan Anda cukup membayar kekurangannya secara tunai atau non-tunai.

## Solusi Teknis Saat Pemindai QR Gate Stasiun Mengalami Kendala

Dalam kondisi jam sibuk (*peak hours*), beberapa penumpang terkadang mendapati kode QR di layar smartphone sulit terbaca oleh mesin pemindai optik di gate otomatis stasiun. Berikut adalah langkah mitigasi cepat yang disarankan oleh petugas stasiun:

- **Tingkatkan Kecerahan Layar Ponsel:** Mesin pemindai optik stasiun membutuhkan kontras cahaya yang tinggi. Pastikan kecerahan layar ponsel Anda disetel minimal 80% sebelum mendekati gate.
- **Jaga Jarak Ideal Pemindaian:** Jangan menempelkan layar ponsel langsung ke kaca pemindai. Berikan jarak sekitar 10 hingga 15 sentimeter agar kamera pemindai dapat menangkap seluruh matriks QR code secara presisi.
- **Hindari Mode Gelap Layar Otomatis:** Beberapa aplikasi dengan tema gelap ekstrim terkadang menurunkan kontras bingkai QR. Pastikan latar belakang QR code tetap putih bersih.
- **Bantuan Petugas Passenger Service:** Jika kode QR tetap tidak terbaca setelah 2 kali percobaan, segera temui petugas *Passenger Service* yang selalu berjaga di samping gate disabilitas. Petugas akan memvalidasi nomor tiket digital Anda menggunakan perangkat pemindai manual stasiun.

## Aturan Membawa Barang Bawaan dan Sepeda di KRL Commuter Line

Untuk memastikan kenyamanan seluruh pengguna, KAI Commuter menetapkan regulasi batas bagasi yang ketat di dalam gerbong kereta:

- **Dimensi Bagasi Bebas Biaya:** Setiap penumpang diperbolehkan membawa barang bawaan dengan dimensi maksimal 100 cm x 40 cm x 30 cm tanpa dikenakan biaya bagasi tambahan. Letakkan barang bawaan di rak bagasi atas peron gerbong secara aman.
- **Regulasi Sepeda:** Hanya sepeda lipat (*folding bike*) dengan diameter roda maksimal 20 inci yang diizinkan masuk ke dalam rangkaian KRL. Sepeda harus dalam kondisi terlipat sempurna sejak memasuki area gate stasiun hingga keluar dari stasiun tujuan. Sepeda non-lipat (MTB/Roadbike) dilarang masuk rangkaian KRL Jogja-Solo demi menjaga kapasitas lorong penumpang.
`,

  'cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo.md': `
## Estimasi Waktu Ideal dan Rekomendasi Kedatangan di Stasiun

Perjalanan menuju Bandara Internasional Yogyakarta (YIA) membutuhkan perhitungan waktu yang sangat cermat untuk menghindari risiko ketinggalan jadwal penerbangan (*missed flight*). Meskipun waktu tempuh KA Bandara YIA Xpress hanya memakan waktu 35 menit dan KA Bandara Reguler 39 menit, Anda wajib memperhitungkan waktu transit di dalam bandara:

1. **Jadwal Keberangkatan Kereta:** Pilihlah jadwal kereta yang tiba di Stasiun Bandara YIA minimal **2 jam sebelum jadwal keberangkatan pesawat rute domestik**, atau **3 jam sebelum keberangkatan rute internasional**. Hal ini krusial karena konter pelaporan tiket (*check-in counter*) maskapai penerbangan umumnya ditutup 45 menit sebelum jadwal lepas landas.
2. **Waktu Tiba di Stasiun Tugu:** Datanglah ke Ruang Tunggu Khusus KA Bandara di Stasiun Tugu (Pintu Barat/Jl. Pasar Kembang) paling lambat 30 menit sebelum jadwal keberangkatan kereta. Pintu masuk (*boarding gate*) KA Bandara akan dibuka 20 menit sebelum kereta diberangkatkan dan akan ditutup tepat 5 menit sebelum kereta melaju demi keselamatan operasional lintasan.
3. **Waktu Jalan Kaki di Bandara YIA:** Setelah kereta merapat di peron Stasiun YIA, penumpang perlu menaiki eskalator/lift penghubung menuju lantai keberangkatan terminal utama. Jarak berjalan kaki dari peron stasiun ke area konter check-in bandara memakan waktu sekitar 5–8 menit melewati jembatan penyeberangan beratap (*skybridge*) yang nyaman dan dilengkapi pendingin udara.

## Fasilitas Ramah Disabilitas, Lansia, dan Penumpang Berkeluarga

Layanan KA Bandara YIA dirancang dengan standar aksesibilitas internasional untuk memfasilitasi seluruh lapisan masyarakat:

- **Peron Sejajar Pintu Kereta (*Level Boarding*):** Ketinggian peron di Stasiun Tugu, Stasiun Wates, dan Stasiun YIA dibuat sejajar sempurna dengan lantai gerbong kereta, sehingga memudahkan pengguna kursi roda, kereta dorong bayi (*stroller*), dan koper beroda besar tanpa hambatan undakan tangga.
- **Lift Prioritas dan Eskalator:** Tersedia lift berkapasitas besar di seluruh stasiun perhentian yang dapat digunakan khusus oleh lansia, ibu hamil, serta penyandang disabilitas.
- **Toilet Khusus dan Ruang Menyusui:** Di dalam rangkaian kereta maupun di ruang tunggu stasiun, tersedia fasilitas toilet disabilitas yang higienis serta ruang laktasi (*nursery room*) yang tenang bagi orang tua yang membawa bayi.
- **Bantuan Porter Resmi Stasiun:** Bagi penumpang dengan jumlah bagasi koper yang banyak, Stasiun Tugu dan Stasiun YIA menyediakan layanan porter berseragam resmi dengan tarif transparan yang siap membantu membawa barang bawaan hingga ke peron kereta atau konter maskapai penerbangan.
`,

  'cara-pembayaran-trans-jogja-emoney-qris-tunai.md': `
## Kebijakan Saldo Minimal Kartu Uang Elektronik Perbankan

Bagi penumpang yang memilih bertransaksi menggunakan kartu uang elektronik (e-Money Mandiri, BCA Flazz, BNI TapCash, BRI Brizzi), pastikan saldo kartu Anda mencukupi sebelum menempelkan kartu (*tapping*) di mesin halte Trans Jogja:

- **Batas Saldo Minimal Transaksi:** Mesin pembaca kartu (*Tap-on-Bus* atau gate halte permanen) mensyaratkan saldo kartu minimal senilai satu kali tarif perjalanan reguler, yaitu **Rp 3.600**. Jika saldo kartu Anda di bawah Rp 3.600, sensor mesin akan mengeluarkan bunyi penolakan (*beep panjang*) dan palang pintu gate tidak akan terbuka.
- **Tidak Melayani Top-Up Saldo di Halte:** Harap dicatat bahwa loket halte Trans Jogja maupun pramugara di dalam bus **tidak menyediakan fasilitas pengisian ulang saldo (*top-up*)** kartu e-money bank. Pastikan Anda telah mengisi saldo melalui aplikasi mobile banking (fitur NFC di smartphone), ATM, atau minimarket waralaba terdekat sebelum menuju ke halte bus.
- **Masa Kedaluwarsa Kartu Bank:** Kartu uang elektronik bank umumnya tidak memiliki masa kedaluwarsa saldo selama chip fisik kartu masih berfungsi normal dan tidak retak atau tertekuk.

## Skema Tarif Khusus Pelajar dan Lansia (Kartu Berlangganan Subsidi DIY)

Pemerintah Daerah D.I. Yogyakarta melalui Dinas Perhubungan memberikan dukungan subsidi khusus bagi kalangan pelajar dan lansia pemegang Kartu Trans Jogja Berlangganan:

1. **Tarif Pelajar (Rp 1.800):** Berlaku bagi pelajar tingkat SD, SMP, SMA/SMK sederajat yang bersekolah di wilayah D.I. Yogyakarta. Untuk mendapatkan tarif khusus ini, siswa harus mendaftarkan kartu berlangganan Trans Jogja di Kantor Dinas Perhubungan DIY atau loket khusus halte terminal (seperti Terminal Giwangan dan Terminal Jombor) dengan melampirkan fotokopi kartu pelajar dan surat keterangan aktif sekolah.
2. **Tarif Khusus Lansia dan Veteran:** Warga lanjut usia (usia 60 tahun ke atas) ber-KTP DIY berhak mendapatkan tarif perjalanan bersubsidi. Pendaftaran kartu lansia memerlukan verifikasi identitas kependudukan untuk aktivasi profil diskon pada chip kartu.
3. **Mekanisme Pindah Bus Gratis:** Pemegang kartu berlangganan Trans Jogja mendapatkan keuntungan bebas biaya transit saat berpindah armada bus dalam kurun waktu 60 menit sejak penempelan kartu pertama, selama penumpang tidak keluar dari jaringan sistem halte resmi.
`,

  'cara-transit-dan-pindah-bus-trans-jogja.md': `
## Daftar Halte Simpul Transit Utama di Seluruh Yogyakarta

Untuk memudahkan perencanaan rute perjalanan Anda, berikut adalah simpul-simpul halte transit utama di Yogyakarta yang memiliki persilangan rute koridor terbanyak:

- **Halte Terminal Giwangan:** Simpul transit selatan terbesar yang mempertemukan Koridor 1A, 2A, 3A, 4A, dan rute lingkar luar. Memiliki area tunggu yang sangat luas, peron bertingkat yang teduh, serta fasilitas toilet umum dan mushola.
- **Halte Terminal Jombor:** Simpul transit utama wilayah utara (Sleman) yang menghubungkan rute lingkar utara, Koridor 2A, 2B, 5A, 5B, serta titik temu bus antar-kota jalur Magelang-Semarang.
- **Halte Terminal Condongcatur:** Pusat integrasi strategis untuk kawasan universitas (UGM, UNY, UPN, Amikom, UII) yang dilewati oleh Koridor 1B, 2A, 2B, 3A, 3B, dan 5A/5B.
- **Halte Taman Pintar & Halte Malioboro:** Pusat transit wisata di jantung kota Yogyakarta yang memudahkan mobilitas wisatawan menuju Keraton Yogyakarta, Titik Nol Kilometer, Pasar Beringharjo, dan Benteng Vredeburg.

## Etika dan Prosedur Keamanan di Halte Transit yang Padat

Saat berpindah bus pada jam-jam sibuk (pukul 06.30–08.30 WIB dan 16.30–18.30 WIB), kondisi halte transit permanen maupun portabel bisa sangat padat. Terapkan prinsip etika bertransportasi publik berikut:

- **Dahulukan Penumpang yang Turun:** Selalu berikan ruang di sisi kanan dan kiri pintu halte agar penumpang di dalam bus yang tiba dapat keluar terlebih dahulu dengan leluasa. Jangan menghalangi pintu tengah bus.
- **Berikan Kursi Prioritas:** Di ruang tunggu halte maupun di dalam bus, prioritaskan tempat duduk bagi ibu hamil, lansia, penyandang disabilitas, serta orang tua yang menggendong balita.
- **Perhatikan Celah Peron (*Mind the Gap*):** Saat melangkah dari lantai halte masuk ke lantai bus Trans Jogja, perhatikan celah kecil antara bibir halte dan pintu bus. Jangan terburu-buru dan hindari bermain smartphone saat melangkah demi mencegah terpeleset.
`,

  'jam-buka-fasilitas-penitipan-barang-stasiun-tugu.md': `
## Komparasi Layanan Penitipan Resmi Stasiun vs Loker Digital Aplikasi

Bagi wisatawan yang tiba di Yogyakarta sebelum jam check-in hotel atau yang harus check-out di siang hari sementara jadwal kereta api kepulangan masih malam hari, fasilitas penitipan bagasi di sekitar Stasiun Tugu menyediakan beberapa alternatif layanan:

1. **Penitipan Bagasi Manual Resmi (Area Dalam Stasiun):** Berlokasi di dekat pintu keluar selatan dan lorong penghubung peron. Layanan ini dijaga oleh petugas berseragam selama 24 jam penuh. Biaya penitipan dihitung berdasarkan ukuran bagasi (tas ransel mulai Rp 15.000–Rp 20.000 per 12 jam, koper ukuran 24–28 inci sekitar Rp 25.000–Rp 35.000 per 12 jam). Penumpang akan diberikan nomor tiket fisik berlaminasi yang wajib dijaga keamanannya hingga waktu pengambilan koper.
2. **Loker Otomatis Digital Berbasis Aplikasi:** Terletak di lorong selasar luar stasiun arah Jalan Pasar Kembang dan selasar Jalan Malioboro. Loker digital ini beroperasi mandiri menggunakan pemindai QR code dari aplikasi smartphone mitra KAI. Keuntungannya adalah fleksibilitas durasi sewa yang bisa dihitung per jam dengan tarif mulai dari Rp 8.000 hingga Rp 15.000/jam, serta sistem kunci elektronik terenkripsi tanpa kunci fisik.
3. **Standar Keamanan dan Pemeriksaan Sinar-X:** Setiap barang bawaan yang akan dititipkan di fasilitas resmi stasiun wajib melalui pemindaian mesin X-Ray atau pemeriksaan visual oleh petugas keamanan internal (Polsuska) untuk memastikan tidak ada zat terlarang atau bahan berbahaya.

## Batasan Barang yang Dilarang Dititipkan di Fasilitas Stasiun

Demi menjaga keselamatan publik dan higienitas area penyimpanan umum, pihak stasiun memberlakukan larangan keras terhadap penitipan barang-barang berikut:

- **Bahan Mudah Meledak dan Terbakar:** Petasan, tabung gas portabel, bensin, zat kimia korosif, dan senjata tajam/api tanpa izin dinas dilarang keras masuk area penitipan.
- **Makanan Berbau Menyengat dan Cepat Basi:** Buah durian, olahan ikan basah tanpa es pendingin, serta makanan berkuah santan yang mudah basi dilarang dititipkan di loker karena dapat merusak aroma loker serta mengotori barang bawaan milik penumpang lain.
- **Hewan Peliharaan Hidup:** Segala jenis hewan peliharaan (kucing, anjing, burung, reptil) dilarang dimasukkan ke dalam loker penitipan bagasi.
- **Uang Tunai dan Dokumen Berharga Bernilai Tinggi:** Pihak pengelola tidak bertanggung jawab atas kehilangan dokumen penting (sertifikat, paspor, perhiasan emas, uang tunai jumlah besar) yang ditinggalkan di dalam koper tanpa deklarasi khusus. Selalu bawa dokumen krusial Anda di dalam tas selempang kecil pribadi.
`,

  'panduan-integrasi-antarmoda-stasiun-tugu-yogyakarta.md': `
## Jalur Pejalan Kaki Terlindung Menuju Halte Trans Jogja Malioboro

Integrasi antara moda kereta api (KRL, KA Jarak Jauh, KA Bandara) dengan bus Trans Jogja di Stasiun Tugu telah ditata ulang secara modern dengan konsep ramah pejalan kaki (*pedestrian-oriented development*):

- **Koneksi Pintu Timur (Sisi Malioboro):** Begitu Anda keluar dari *Gate Pintu Timur* Stasiun Tugu, Anda akan langsung menginjakkan kaki di trotoar teras Malioboro yang beralaskan granit motif khas Yogyakarta. Beloklah ke arah selatan sejauh sekitar 50 meter menyusuri kanopi pejalan kaki pelindung hujan dan panas matahari menuju **Halte Trans Jogja Malioboro 1**.
- **Koneksi Pintu Selatan (Jalan Pasar Kembang):** Jika Anda turun di peron sisi selatan dan keluar melalui Jalan Pasar Kembang, Anda dapat mengakses halte Trans Jogja portabel Stasiun Tugu Selatan untuk menaiki armada koridor rute barat dan selatan tanpa harus memutar jauh ke Jalan Malioboro.
- **Rambu Petunjuk Arah Multibahasa:** Di sepanjang koridor stasiun dan trotoar penghubung, terpasang papan penunjuk arah (*wayfinding signage*) bilingual (Bahasa Indonesia dan Bahasa Inggris) lengkap dengan piktogram visual standar transportasi internasional yang memandu Anda menuju halte bus, pangkalan taksi argo, dan zona penjemputan online.

## Aturan Zona Penjemputan Transportasi Daring (Ojek & Taksi Online)

Untuk mencegah kemacetan parah di ruas Jalan Malioboro dan Jalan Pasar Kembang yang sempit, Pemerintah Kota Yogyakarta bersama operator transportasi daring telah menetapkan zona titik jemput resmi (*pick-up point*):

1. **Titik Jemput Taksi Online (Mobil):** Area penjemputan mobil daring dipusatkan di kantong parkir khusus di Jalan Pasar Kembang sisi barat (eks Lokalisasi Pasar Kembang yang telah direvitalisasi menjadi plaza terbuka) serta area parkir Abu Bakar Ali. Pengemudi mobil dilarang berhenti menjemput di bahu jalan depan pintu utama stasiun untuk menghindari tilang elektronik dan kemacetan.
2. **Titik Jemput Ojek Online (Motor):** Penumpang ojek motor online diarahkan menuju titik kumpul (*shelter ojol*) di ujung barat Jalan Pasar Kembang atau di sisi utara jembatan rel rel kereta api Kleringan. Pastikan Anda telah berada di titik jemput tersebut sebelum memesan pengemudi di aplikasi untuk mempercepat waktu temu.
3. **Layanan Becak Kayuh dan Andong Budaya:** Bagi wisatawan yang ingin menikmati suasana tempo dulu Yogyakarta secara santai menuju hotel atau kawasan Keraton, pangkalan resmi becak kayuh dan andong tradisional berada di sepanjang selasar trotoar depan stasiun dengan kesepakatan ongkos yang wajar sebelum menaiki armada.
`,

  'panduan-lengkap-jalur-trans-jogja-koridor-4a-4b.md': `
## Karakteristik Wilayah Layanan Pendidikan dan Pemerintahan

Jalur Trans Jogja Koridor 4A dan 4B merupakan tulang punggung transportasi di wilayah tenggara dan barat daya Kota Yogyakarta yang menghubungkan berbagai pusat aktivitas strategis:

- **Akses Kawasan Kampus Terpadu:** Rute 4A dan 4B menjadi andalan utama mobilitas harian ribuan mahasiswa menuju Universitas Ahmad Dahlan (UAD Kampus 1, 2, 3, dan Kampus 4 Utama di Ring Road Selatan), Universitas Sarjanawiyata Tamansiswa (UST), Akademi Akuntansi YKPN, dan Institut Seni Indonesia (ISI) cabang Sewon.
- **Akses Kompleks Perkantoran Pemerintah Kota:** Melintasi Jalan Kenari dan kawasan Balai Kota Yogyakarta di Timoho. Jalur ini sangat memudahkan warga masyarakat yang hendak mengurus administrasi kependudukan, perizinan dinas, atau berkunjung ke gedung DPRD Kota Yogyakarta.
- **Akses Wisata Edukasi Kebun Binatang Gembira Loka:** Koridor 4A dan 4B berhenti tepat di halte permanen depan gerbang masuk Kebun Binatang Gembira Loka (Gembira Loka Zoo) di Jalan Kusumanegara, menjadikannya rute bus paling ekonomis dan nyaman bagi rombongan keluarga yang berwisata di hari libur.

## Tips Menghindari Kepadatan di Jam Sibuk Pagi dan Sore

Jalur Jalan Kusumanegara, Jalan Glagahsari, dan Simpang Empat Rejowinangun merupakan titik rawan kepadatan lalu lintas di jam berangkat dan pulang kantor:

- **Antisipasi Headway di Jam Masuk Sekolah (06.45–07.30 WIB):** Pada jam ini, bus koridor 4A/4B sering terisi penuh oleh siswa sekolah dan mahasiswa. Disarankan untuk menaiki bus satu rit lebih awal (sebelum pukul 06.30 WIB) untuk memastikan Anda tiba di tujuan tepat waktu tanpa perlu berdesakan.
- **Kondisi Cuaca Saat Musim Hujan:** Di sepanjang Jalan Kusumanegara terdapat beberapa halte tipe portabel tanpa dinding samping yang lebar. Bawalah payung lipat di dalam tas ransel Anda terutama jika hendak melakukan transit di halte portabel saat musim penghujan.
- **Integrasi Menuju Stasiun Lempuyangan:** Dari koridor 4B, Anda dapat turun di Halte Pasar Sentul atau Halte Sugiyono, lalu menyambung bus koridor 2A atau menggunakan ojek singkat sejauh 1,2 km untuk menjangkau stasiun kereta api ekonomi Lempuyangan.
`,

  'panduan-naik-bus-damri-bandara-yia-jogja-magelang.md': `
## Jadwal, Jalur Alternatif, dan Ketentuan Armada DAMRI YIA

Layanan Perum DAMRI dari Bandara Internasional Yogyakarta (YIA) merupakan salah satu opsi transportasi antarkota paling andal yang menghubungkan bandara pesisir selatan Kulon Progo dengan wilayah aglomerasi Jawa Tengah bagian selatan:

1. **Rute DAMRI YIA Menuju Kota Magelang & Borobudur:** Armada DAMRI menempuh rute YIA – Dekso – Tempel – Muntilan – Terminal Tidar Magelang – Hotel Grand Artos. Beberapa armada juga menyediakan pemberhentian langsung di Pool DAMRI Candi Borobudur. Waktu tempuh rata-rata berkisar antara 90 hingga 115 menit tergantung kelancaran arus lalu lintas di jalur lingkar barat Kulon Progo.
2. **Rute DAMRI YIA Menuju Pool Damri Kota Yogyakarta:** Menghubungkan bandara ke Pool Damri Rajawali (Jalan Ring Road Timur Banguntapan) dan Terminal Condongcatur dengan melintasi Jalan Wates dan Ring Road Selatan. Rute ini sangat cocok bagi penumpang yang rumah atau hotelnya berada di Sleman timur atau Bantul.
3. **Jenis Armada Bus yang Dioperasikan:** DAMRI mengoperasikan armada mikrobus berstandar eksekutif (Toyota HiAce Commuter dan Isuzu Elf) berkapasitas 11–14 penumpang serta bus medium berkapasitas 25–29 penumpang dengan konfigurasi kursi 2-1 atau 2-2 yang dilengkapi pendingin udara (AC), port pengisian daya USB, serta bagasi belakang yang lega.

## Prosedur Pembelian Tiket Digital dan Beli Langsung di Konter

- **Pemesanan Melalui Aplikasi DAMRI Apps:** Calon penumpang dapat memesan tiket DAMRI secara daring hingga H-3 sebelum jadwal penerbangan melalui aplikasi resmi DAMRI Apps yang tersedia di Google Play Store dan Apple App Store. Pembayaran dapat dilakukan via transfer virtual account, QRIS, atau kartu kredit.
- **Pembelian Langsung di Konter Kedatangan YIA:** Bagi penumpang yang tidak sempat memesan daring, konter resmi tiket DAMRI terletak persis di lobi terminal kedatangan internasional/domestik YIA (sebelah konter taksi bandara). Pembayaran di konter bandara melayani metode tunai maupun non-tunai (QRIS / kartu debit).
- **Ketentuan Bagasi Penumpang DAMRI:** Setiap penumpang berhak atas kuota bagasi cuma-cuma seberat maksimal 20 kg untuk diletakkan di ruang bagasi bus, ditambah 1 tas jinjing/ransel kecil di bawah kursi kabin. Bagasi dengan ukuran berlebih atau alat olahraga khusus dapat dikonfirmasi terlebih dahulu ke petugas loket pengawas.
`,

  'panduan-rute-angkutan-umum-jogja-candi-borobudur.md': `
## Komparasi Opsi Moda Transportasi Jogja – Borobudur

Bagi wisatawan mandiri yang mengutamakan efisiensi biaya perjalanan dari Kota Yogyakarta menuju Candi Borobudur di Kabupaten Magelang, terdapat dua metode utama transportasi umum yang paling populer:

| Kriteria Komparasi | Opsi 1: KSPN DAMRI Shuttle | Opsi 2: Bus Estafet (Trans Jogja + Bus AKDP) |
| :--- | :--- | :--- |
| **Titik Keberangkatan** | Stasiun Tugu / Malioboro (Pool Khusus) | Terminal Jombor (via Trans Jogja 2A/2B/5A) |
| **Biaya Total Perjalanan** | Rp 20.000 – Rp 25.000 | Rp 3.600 (TJ) + Rp 15.000 (Bus AKDP) = Rp 18.600 |
| **Waktu Tempuh** | 75 – 90 menit (Langsung via Dekso/Tempel) | 90 – 120 menit (Banyak berhenti di pasar) |
| **Kenyamanan Armada** | Sangat Nyaman (Toyota HiAce Full AC) | Standar Ekonomi (Bus Medium Non-AC) |
| **Kemudahan Pemesanan** | Online via DAMRI Apps / Konter Resmi | Bayar tunai langsung di atas bus ke kondektur |

## Jadwal Operasional Bus Kepulangan dari Terminal Borobudur ke Jogja

Hal penting yang wajib diantisipasi oleh wisatawan adalah jam operasional bus kepulangan (*return trip*) dari Terminal Candi Borobudur menuju Yogyakarta:

- **Bus Terakhir Menuju Terminal Jombor:** Bus medium ekonomi jurusan Borobudur – Yogyakarta dari Terminal Borobudur umumnya beroperasi dari pukul 06.00 WIB hingga **pukul 16.30 WIB**. Setelah pukul 17.00 WIB, armada bus ekonomi sudah tidak diberangkatkan lagi ke Yogyakarta.
- **Layanan Shuttle KSPN DAMRI Malam:** Bagi wisatawan yang menikmati matahari terbenam (*sunset*) di sekitar perbukitan Menoreh atau kawasan Svargabumi dan Punthuk Setumbu, armada shuttle KSPN DAMRI memiliki jadwal keberangkatan terakhir sekitar pukul 18.00–18.30 WIB (selalu lakukan konfirmasi jadwal harian ke petugas konter DAMRI Borobudur saat Anda tiba di pagi hari).
- **Rencana Cadangan Transportasi:** Jika Anda tertinggal jadwal bus terakhir di Borobudur, alternatifnya adalah menaiki angkutan pedesaan/ojek lokal sejauh 8 km menuju Simpang Tiga Muntilan di Jalan Raya Magelang–Jogja, lalu menyetop bus antarkota jurusan Semarang–Jogja atau Surabaya–Jogja yang melintas selama 24 jam penuh.
`,

  'panduan-rute-trans-jogja-koridor-5a-5b-ring-road.md': `
## Analisis Rute Lingkar Luar dan Pusat Rumah Sakit Rujukan

Jalur Trans Jogja Koridor 5A dan 5B memiliki peran vital sebagai penghubung lingkar lingkar (*orbital route*) yang menghubungkan fasilitas layanan kesehatan rujukan tingkat pertama dan pusat teknologi di Yogyakarta:

- **Akses Menuju RSUP Dr. Sardjito & Fakultas Kedokteran UGM:** Koridor 5A berhenti di Halte FK UGM / Sardjito di Jalan Farmako, menjadikannya rute bus paling efisien bagi pasien rawat jalan, tenaga medis, dan akademisi yang hendak berkunjung ke kompleks rumah sakit terbesar di D.I. Yogyakarta tanpa pusing mencari tempat parkir kendaraan pribadi.
- **Akses Rumah Sakit JIH dan RS Hermina:** Melewati kawasan Ring Road Utara di dekat Rumah Sakit "JIH" (Jogja International Hospital) dan RS Hermina Depok Sleman, memudahkan mobilitas warga Sleman timur yang membutuhkan layanan medis terpadu.
- **Pusat Pendidikan Teknologi:** Melintasi kawasan selokan Mataram, Universitas Kristen Duta Wacana, serta simpul pendidikan di Babarsari dan Tambakbayan.

## Prosedur Aman Menyeberang Jalur Cepat Ring Road Menuju Halte

Mengingat armada Trans Jogja Koridor 5A dan 5B melintasi ruas Jalan Ring Road Utara yang memiliki arus lalu lintas kendaraan berkecepatan tinggi, perhatikan aspek keselamatan penyeberangan berikut:

1. **Gunakan Jembatan Penyeberangan Orang (JPO):** Di beberapa titik halte permanen besar (seperti di depan kampus UPN Veteran Yogyakarta dan simpang Condongcatur), pemerintah telah melengkapi trotoar dengan Jembatan Penyeberangan Orang (JPO) yang dilengkapi atap dan tangga landai. Utamakan selalu menyeberang lewat JPO demi keselamatan mutlak.
2. **Manfaatkan Lampu Pelikan (*Pelican Crossing*):** Pada halte yang tidak memiliki JPO, manfaatkan tombol penyeberangan pejalan kaki berlampu lalu lintas di dekat halte. Tekan tombol dan tunggu hingga lampu bagi kendaraan bermotor berubah merah dan lampu pejalan kaki menyala hijau sebelum melangkah.
3. **Jangan Menyeberang Sembarangan di Jalur Cepat:** Ruas Ring Road terbagi menjadi Jalur Cepat (mobil/bus/truk) dan Jalur Lambat (motor). Dilarang keras memanjat pembatas jalan tengah (*median beton*) demi mengejar bus, karena jarak pandang pengemudi kendaraan berkecepatan tinggi sangat terbatas.
`,

  'perbedaan-ka-bandara-yia-reguler-vs-yia-xpress.md': `
## Analisis Komparasi Mendalam: Reguler vs Xpress

Untuk memberikan gambaran yang utuh dan komprehensif bagi calon penumpang KA Bandara YIA, berikut adalah tabel perbandingan spesifikasi layanan antara KA Bandara Reguler dan KA Bandara Xpress:

| Parameter Evaluasi | KA Bandara YIA Reguler | KA Bandara YIA Xpress |
| :--- | :--- | :--- |
| **Harga Tiket Dewasa** | Rp 20.000 per perjalanan | Rp 50.000 per perjalanan |
| **Waktu Tempuh Perjalanan** | 39 Menit (Stasiun Tugu – Stasiun YIA) | 35 Menit (Tanpa berhenti) |
| **Pemberhentian Antara** | Berhenti di Stasiun Wates (1–2 menit) | Langsung *non-stop* ke Bandara YIA |
| **Fleksibilitas Nomor Kursi** | Kursi bebas (*unreserved seating*) | Kursi bertiket terdaftar pada aplikasi |
| **Tingkat Kepadatan Kursi** | Cenderung sangat padat di jam favorit | Cenderung lebih longgar & tenang |
| **Frekuensi Perjalanan** | Sekitar 18–24 perjalanan per hari | Sekitar 6–10 perjalanan per hari |
| **Rekomendasi Penumpang** | Mahasiswa, solo traveler hemat, komuter lokal | Pebisnis, wisatawan koper besar, keluarga |

## Ketentuan Kompensasi Keterlambatan dan Hak Penumpang

KAI Bandara (PT Railink) terikat oleh regulasi Peraturan Menteri Perhubungan Republik Indonesia mengenai standar pelayanan minimum angkutan kereta api bandara:

- **Kebijakan Keterlambatan Operasional:** Jika terjadi kendala operasional lintasan kereta api yang menyebabkan KA Bandara mengalami keterlambatan keberangkatan lebih dari 60 menit akibat kelalaian operasional operator, penumpang berhak membatalkan tiket dan mendapatkan pengembalian bea 100% secara tunai di loket stasiun.
- **Pemberitahuan Dini (*Early Notification*):** Operator wajib mengumumkan informasi gangguan sinyal lintasan atau kendala rangkaian kereta melalui pengeras suara di ruang tunggu stasiun dan pembaruan berkala di media informasi digital stasiun.
- **Tips Memilih Layanan Berdasarkan Beban Koper:** Jika Anda bepergian dengan membawa koper ukuran kabin kecil dan memiliki tenggat waktu penerbangan yang longgar (lebih dari 3 jam sebelum boarding), tiket Reguler seharga Rp 20.000 merupakan pilihan paling ekonomis. Namun jika Anda membawa keluarga dengan balita dan koper besar ukuran bagasi, tiket Xpress seharga Rp 50.000 sangat direkomendasikan karena suasananya yang lebih privat dan ketersediaan ruang penyimpanan bagasi yang lebih leluasa.
`,

  'rute-jadwal-kereta-prameks-jogja-kutoarjo.md': `
## Strategi Pemesanan Tiket H-7 di Aplikasi Access by KAI

Kereta Api Prambanan Ekspres (KA Prameks) rute Yogyakarta – Kutoarjo (PP) merupakan moda kereta api lokal legendaris yang memiliki permintaan tiket (*demand*) sangat tinggi, terutama pada hari Jumat sore, Sabtu, Minggu, serta masa liburan panjang nasional. Mengingat kapasitas angkut tempat duduk dibatasi oleh KAI demi kenyamanan dan keselamatan, berikut strategi jitu agar tidak kehabisan tiket:

1. **Pemesanan Dibuka Tepat H-7:** Tiket KA Prameks mulai dapat dipesan tepat 7 hari sebelum tanggal keberangkatan mulai pukul 00.00 WIB tengah malam melalui aplikasi Access by KAI. Jangan menunda pembelian tiket hingga hari-H perjalanan terutama untuk jadwal keberangkatan pagi (06.37 WIB) dan sore hari (17.50 WIB).
2. **Kapasitas Penumpang Berdiri (Standing Capacity):** Apabila kuota tiket tempat duduk (duduk 100%) telah habis terjual, sistem aplikasi terkadang membuka kuota tambahan tiket tanpa tempat duduk (*tiket berdiri*) maksimal 20% dari kapasitas gerbong. Waktu tempuh perjalanan sekitar 65–75 menit, sehingga pastikan kondisi fisik Anda siap jika terpaksa mengambil tiket berdiri.
3. **Pembelian di Loket Stasiun (Go Show):** Pembelian tiket langsung di loket stasiun (*Go Show*) hanya dilayani mulai 3 jam sebelum jadwal keberangkatan kereta, dan itu pun hanya jika kuota tiket di aplikasi masih tersisa. Sangat tidak disarankan mengandalkan pembelian tiket di loket fisik saat akhir pekan.

## Karakteristik Stasiun Pemberhentian Jalur Prameks

Sepanjang relasi perjalanan dari Stasiun Tugu Yogyakarta menuju Stasiun Kutoarjo di Kabupaten Purworejo, rangkaian KA Prameks berhenti di beberapa stasiun persilangan penting:

- **Stasiun Wates (Kabupaten Kulon Progo):** Simpul perhentian utama di pusat ibu kota Kulon Progo. Penumpang dapat turun di sini untuk mengakses pusat pemerintahan Pemkab Kulon Progo, Alun-Alun Wates, atau berpindah moda ke angkutan pedesaan menuju kawasan perbukitan Menoreh.
- **Stasiun Wojo (Purworejo Timur):** Terletak tepat di perbatasan Purworejo dan Kulon Progo. Dahulu stasiun ini menjadi stasiun transit utama menuju Bandara YIA sebelum jalur rel bandara resmi tersambung.
- **Stasiun Jenar (Purworejo):** Melayani mobilitas warga lokal kecamatan Purwodadi dan Bagelen yang hendak berniaga atau bersekolah di Yogyakarta.
- **Stasiun Kutoarjo (Stasiun Akhir):** Stasiun terminus bertipe pulau besar di barat Kabupaten Purworejo. Di stasiun ini, penumpang dapat melanjutkan perjalanan menaiki Kereta Api Jarak Jauh menuju Kroya, Purwokerto, Bandung, dan Jakarta, atau menyambung angkutan kota/minibus antarkota menuju Kebumen dan Wonosobo.
`,

  'rute-lengkap-trans-jogja-koridor-3a-bandara-adisutjipto-giwangan.md': `
## Integrasi Multimoda Strategis di Kawasan Bandara Adisutjipto

Jalur Trans Jogja Koridor 3A memiliki signifikansi historis dan fungsional yang sangat penting sebagai simpul penghubung kawasan timur D.I. Yogyakarta:

- **Koneksi Stasiun Kereta Api Maguwo:** Halte Trans Jogja Bandara Adisutjipto terhubung langsung melalui terowongan bawah tanah (*underpass pedestrian*) menuju peron Stasiun Maguwo. Penumpang yang turun dari bus Koridor 3A dapat langsung berpindah menaiki KRL Commuter Line relasi Jogja–Solo tanpa perlu keluar ke jalan raya yang ramai.
- **Akses Kawasan Kampus Terpadu Babarsari:** Melintasi pusat kampus ternama di Yogyakarta timur, seperti Universitas Atma Jaya Yogyakarta (UAJY), Universitas Pembangunan Nasional "Veteran" Yogyakarta (UPN), STIE YKPN, dan Institut Teknologi Nasional Yogyakarta (ITNY). Koridor 3A menjadi moda andalan ribuan mahasiswa kos di kawasan Babarsari dan Tambakbayan.
- **Akses Pusat Perbelanjaan dan Rumah Sakit:** Menghubungkan pusat perbelanjaan terbesar Ambarrukmo Plaza (Plaza Ambarrukmo) di Jalan Laksda Adisucipto serta RS Pusat Angkatan Udara Dr. S. Hardjolukito di kawasan Ring Road Timur.

## Estimasi Waktu Tempuh dan Titik Rawan Hambatan Lalu Lintas

Dalam merencanakan perjalanan menaiki bus Trans Jogja Koridor 3A, perhitungkan variabel waktu tempuh berikut:

- **Waktu Tempuh Rata-Rata:** Dalam kondisi lalu lintas normal di luar jam sibuk, perjalanan satu putaran penuh dari Bandara Adisutjipto menuju Terminal Giwangan memakan waktu sekitar 55 hingga 70 menit.
- **Titik Rawan Kemacetan Lalu Lintas:** Hambatan perlambatan laju bus umumnya terjadi di Simpang Tiga Janti (pertemuan flyover dan ring road), Simpang Empat Gejayan/Affandi, dan area putar balik depan Plaza Ambarrukmo terutama pada sore hari akhir pekan saat volume kendaraan wisatawan meningkat pesat.
- **Frekuensi Kedatangan Bus (*Headway*):** Unit armada Trans Jogja di Koridor 3A diberangkatkan dengan interval waktu kedatangan rata-rata 12 hingga 18 menit. Manfaatkan waktu tunggu di halte permanen Adisutjipto yang sejuk dan memiliki layar monitor informasi rute digital.
`,

  'rute-tarif-angkutan-perintis-teman-bus-sleman-bantul.md': `
## Skema Program Buy The Service (BTS) dan Integrasi Aglomerasi

Kehadiran layanan angkutan umum perkotaan berbasis skema *Buy The Service* (BTS) dengan merk dagang Teman Bus di wilayah Daerah Istimewa Yogyakarta merupakan terobosan integrasi transportasi modern:

1. **Pendanaan dan Standar Layanan Pemerintah Pusat:** Skema BTS dibiayai langsung oleh Kementerian Perhubungan Republik Indonesia melalui Direktorat Jenderal Perhubungan Darat, di mana operator swasta dibayar berdasarkan standar kilometer tempuh operasional dengan kewajiban mematuhi standar pelayanan minimum (SPM) yang ketat (AC dingin, ketepatan waktu, kamera pengawas CCTV, dan sensor keselamatan pengemudi).
2. **Konektivitas Wilayah Aglomerasi Pinggiran:** Tidak hanya berputar di pusat kota yang sudah padat, jaringan armada Teman Bus menjangkau simpul pemukiman dan pendidikan di Kabupaten Sleman dan Kabupaten Bantul, seperti rute menuju Candi Prambanan via Kalasan, rute Pakem menuju lereng Gunung Merapi, rute Godean, serta rute menuju sentra batik dan kerajinan Bantul.
3. **Penyelarasan Tarif Non-Tunai:** Tarif perjalanan yang sangat terjangkau (Rp 3.600 untuk umum dan gratis/diskon khusus bagi pelajar, lansia, dan penyandang disabilitas yang telah terdaftar) dapat dibayarkan menggunakan satu kartu uang elektronik perbankan yang sama dengan bus Trans Jogja, menciptakan sistem tarif integrasi yang efisien bagi masyarakat komuter.

## Rute Feeder Pengumpan Menuju Sentra Industri Kreatif dan Desa Wisata

Selain koridor jalan utama, angkutan perintis dan pengumpan di kawasan Bantul dan Sleman juga membuka akses pariwisata berbasis kerakyatan:

- **Sentra Kerajinan Gerabah Kasongan:** Menghubungkan pusat kota dengan kawasan industri kreatif gerabah tanah liat Kasongan di Bantul, memudahkan wisatawan lokal maupun mancanegara yang ingin berburu dekorasi rumah tanpa harus menyewa mobil mahal.
- **Kawasan Wisata Budaya Imogiri:** Angkutan perintis melayani jalur pedesaan menuju kompleks Makam Raja-Raja Mataram Imogiri dan sentra kuliner tradisional Wedang Uwuh, menyokong perekonomian warga lokal di perbukitan selatan Bantul.
- **Aplikasi MitraDarat / Teman Bus Apps:** Penumpang disarankan mengunduh aplikasi digital *Teman Bus* atau *MitraDarat* di smartphone untuk memantau posisi bus secara langsung (*real-time GPS tracking*), melihat estimasi waktu kedatangan armada di halte terdekat, serta memeriksa rute peta koridor yang sedang aktif.
`,

  'tips-naik-transportasi-umum-malioboro-wisatawan.md': `
## Aturan Kawasan Semi Pedestrian Malioboro dan Titik Zebra Cross

Kawasan Jalan Malioboro telah ditetapkan oleh Pemerintah Daerah D.I. Yogyakarta sebagai kawasan semi pedestrian ramah lingkungan dan warisan budaya dunia (Sumbu Filosofi Yogyakarta):

- **Larangan Kendaraan Bermotor Pribadi di Jam Tertentu:** Pada jam-jam tertentu (khususnya program Bebas Kendaraan Bermotor atau car-free night), kendaraan bermotor pribadi dilarang melintasi Jalan Malioboro. Kendaraan yang memiliki izin melintas hanyalah bus Trans Jogja, mobil pemadam kebakaran, ambulans, kendaraan kebersihan, serta andong dan becak wisata tradisional. Hal ini membuat bus Trans Jogja menjadi raja jalanan yang sangat lancar menyusuri lorong Malioboro.
- **Titik Penyeberangan Zebra Cross Resmi:** Menyeberanglah hanya pada marka zebra cross yang telah disediakan di depan Pasar Beringharjo, depan Malioboro Mall, dan di dekat Titik Nol Kilometer. Hindari menyeberang jalan secara mendadak di luar marka penyeberangan demi menjaga ketertiban arus lalu lintas bus.
- **Peta Halte Trans Jogja di Malioboro:** Jalan Malioboro merupakan jalur satu arah (*one way*) dari utara ke selatan yang dilayani oleh tiga halte utama:
  1. **Halte Malioboro 1:** Terletak di ujung utara (dekat Hotel Grand Inna Malioboro dan Stasiun Tugu pintu timur).
  2. **Halte Malioboro 2:** Terletak di tengah kawasan (dekat Malioboro Mall dan Kepatihan kantor Gubernur DIY).
  3. **Halte Malioboro 3:** Terletak di ujung selatan (dekat Pasar Beringharjo, Benteng Vredeburg, dan Titik Nol Kilometer).

## Tips Keamanan dan Menghindari Jebakan Tarif Transportasi Liar

Sebagai destinasi wisata paling padat di Yogyakarta, wisatawan disarankan menerapkan prinsip kehati-hatian ekstra saat beraktivitas di seputar Malioboro:

- **Waspada Barang Bawaan di Halte Padat:** Saat menaiki bus Trans Jogja di Halte Malioboro pada akhir pekan, kondisi lorong bus bisa sangat padat oleh wisatawan. Posisikan tas ransel Anda di bagian depan dada (*chest bag*), dan pastikan resleting kantong dompet serta ponsel selalu dalam genggaman aman Anda untuk menghindari kelalaian barang tertinggal atau aksi pencopetan.
- **Sepakati Tarif Becak dan Andong di Awal:** Jika Anda ingin mencoba sensasi menaiki becak kayuh atau andong wisata dari Malioboro menuju sentra bakpia Pathuk atau Keraton Yogyakarta, pastikan Anda telah menegosiasikan dan menyepakati tarif total secara tegas sebelum duduk di atas armada. Tanyakan apakah tarif tersebut berlaku untuk satu orang atau untuk seluruh rombongan agar tidak terjadi kesalahpahaman saat pembayaran di tempat tujuan.
- **Manfaatkan Petugas Jogoboro:** Jika Anda membutuhkan informasi rute jalan atau mengalami kendala keamanan, jangan ragu untuk menemui petugas *Jogoboro* (Unit Pelaksana Keamanan Kawasan Malioboro berseragam khusus) yang berpatroli ramah di sepanjang pedestrian Malioboro selama 24 jam.
`,

  'transportasi-umum-pantai-parangtritis-terminal-giwangan.md': `
## Karakteristik Bus Antarkota Jalur Jogja – Parangtritis

Perjalanan dari Kota Yogyakarta menuju Pantai Parangtritis di pesisir selatan Kabupaten Bantul dilayani oleh angkutan umum legendaris jenis Bus Antarkota Dalam Provinsi (AKDP) berukuran medium:

- **Pangkalan Keberangkatan di Terminal Giwangan:** Bus jurusan Parangtritis mangkal di jalur pemberangkatan bus AKDP sisi barat Terminal Giwangan. Begitu Anda memasuki terminal penumpang, ikuti papan petunjuk arah peron bus AKDP menuju Parangtritis atau tanyakan ke pos informasi terminal.
- **Tarif Resmi dan Cara Pembayaran:** Tarif tiket bus jurusan Jogja – Parangtritis berkisar antara **Rp 15.000 hingga Rp 20.000** per penumpang untuk sekali perjalanan sejauh sekitar 28 kilometer. Pembayaran dilayani secara tunai langsung di atas bus kepada kondektur setelah bus melaju di jalan raya. Siapkan uang pas (lembaran Rp 10.000 atau Rp 20.000) untuk mempermudah transaksi kondektur.
- **Waktu Tempuh Perjalanan:** Dalam kondisi normal, perjalanan dari Terminal Giwangan menyusuri Jalan Parangtritis lurus ke arah selatan memakan waktu sekitar **50 hingga 65 menit**. Di hari libur akhir pekan, waktu tempuh dapat bertambah sekitar 15–20 menit akibat antrean tiket di Gerbang Retribusi Kawasan Wisata Pantai Parangtritis.

## Rekomendasi Titik Singgah Wisata Sepanjang Jalur Parangtritis

Menariknya, jalur Jalan Parangtritis yang dilalui bus umum ini melewati berbagai destinasi wisata kuliner dan sejarah ikonik yang bisa Anda singgahi:

1. **Sentra Kuliner Sate Klatak Jejeran (Bantul):** Terletak di kilometer 10 Jalan Parangtritis (kawasan Wonokromo). Anda dapat meminta kondektur menurunkan Anda di Simpang Empat Jejeran untuk menikmati hidangan legendaris sate kambing muda berjeruji besi khas Bantul yang sangat tersohor.
2. **Kawasan Sentra Kerajinan Kulit Manding:** Berada di kilometer 11, Manding merupakan pusat kerajinan kulit terpadu yang memproduksi tas, sepatu, jaket, dan ikat pinggang kulit asli berkualitas ekspor dengan harga pengrajin lokal.
3. **Antisipasi Jadwal Bus Terakhir Kepulangan:** Hal paling krusial yang wajib diperhatikan oleh pelancong mandiri adalah jadwal bus terakhir dari Pantai Parangtritis menuju Yogyakarta. Bus AKDP terakhir dari terminal pantai biasanya berangkat sekitar **pukul 16.30 hingga 17.00 WIB**. Jangan menunggu hingga langit gelap jika Anda mengandalkan transportasi umum untuk kembali ke Kota Yogyakarta, kecuali Anda telah memesan penginapan di sekitar pesisir Parangtritis atau menggunakan jasa transportasi daring sewaan.
`
};

console.log('Mengembangkan konten 16 artikel panduan rute...');

for (const [filename, contentToAdd] of Object.entries(expansions)) {
  const filePath = path.join(PANDUAN_DIR, filename);
  if (fs.existsSync(filePath)) {
    const originalContent = fs.readFileSync(filePath, 'utf-8');
    if (!originalContent.includes(contentToAdd.trim().slice(0, 40))) {
      const updatedContent = originalContent.trimEnd() + '\n' + contentToAdd.trim() + '\n';
      fs.writeFileSync(filePath, updatedContent, 'utf-8');
      console.log(`✅ Sukses ekspansi: ${filename}`);
    } else {
      console.log(`ℹ️ Sudah memiliki konten ekspansi: ${filename}`);
    }
  } else {
    console.warn(`⚠️ File tidak ditemukan: ${filePath}`);
  }
}

console.log('Ekspansi selesai!');
