export interface CategoryPillarData {
  slug: string;
  pillarTitle: string;
  pillarSubtitle: string;
  overviewHtml: string;
  stats: { label: string; value: string; detail: string }[];
  networkTable: {
    service: string;
    route: string;
    headway: string;
    hours: string;
    fare: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const categoryPillars: Record<string, CategoryPillarData> = {
  'trans-jogja': {
    slug: 'trans-jogja',
    pillarTitle: 'Arsitektur Jaringan BRT Trans Jogja: Tulang Punggung Mobilitas Publik DIY',
    pillarSubtitle: 'Panduan otoritatif koridor, halte transfer steril, integrasi antarmoda, dan regulasi tarif non-tunai berbasis sistem Bus Rapid Transit perkotaan Yogyakarta.',
    overviewHtml: `
      <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p>
          Sistem angkutan massal <strong>Trans Jogja</strong> beroperasi sebagai jaringan <em>Bus Rapid Transit</em> (BRT) percontohan di Daerah Istimewa Yogyakarta sejak awal tahun 2008 di bawah pengawasan Dinas Perhubungan D.I. Yogyakarta dan dikelola oleh PT Anindya Mitra Internasional (AMI) bersama koperasi angkutan setempat. Didesain untuk mengatasi ketergantungan masyarakat terhadap sepeda motor pribadi dan mengurai simpul kemacetan di kawasan aglomerasi perkotaan, jaringan Trans Jogja menghubungkan tiga wilayah administratif utama, yaitu Kota Yogyakarta, Kabupaten Sleman, dan Kabupaten Bantul.
        </p>
        <p>
          Jaringan koridor Trans Jogja terbagi atas koridor utama (<em>trunk corridors</em>) dan koridor lingkar luar (<em>orbital ring road corridors</em>). Koridor utama seperti <strong>Koridor 1A</strong> (Prambanan – Malioboro), <strong>Koridor 2A/2B</strong> (Condongcatur – Malioboro – Jombor), dan <strong>Koridor 3A/3B</strong> (Bandara Adisutjipto – Ring Road – Giwangan) membelah arteri primer pusat kebudayaan, kampus perguruan tinggi, serta sentra niaga. Sementara itu, <strong>Koridor 5A dan 5B</strong> berperan sebagai sabuk lingkar luar yang melintasi jalan arteri Ring Road Utara, Timur, dan Selatan, memungkinkan perpindahan komuter antarpinggiran kota tanpa harus menembus kepadatan di pusat kota Malioboro.
        </p>
        <p>
          Salah satu keunggulan mendasar sistem Trans Jogja adalah penerapan <strong>Sistem Transit Tertutup (Closed-System Transit)</strong>. Pada halte-halte berdesain permanen dengan pintu geser otomatis (seperti Halte Malioboro 1, Halte Transit Ngabean, Halte Terminal Condongcatur, dan Halte Terminal Giwangan), penumpang yang telah membayar tiket masuk di gerbang loket dapat berpindah antar-koridor bus secara gratis tanpa dipungut biaya tambahan, selama penumpang tidak melangkah keluar dari area berbayar (<em>paid area</em>).
        </p>
        <p>
          Dalam aspek transaksi dan tiket, Trans Jogja menerapkan kebijakan pembayaran non-tunai (<em>cashless payment</em>) secara menyeluruh melalui standardisasi kode <strong>QRIS Nasional</strong> dan <strong>Kartu Uang Elektronik (KUE)</strong> perbankan nasional (Mandiri e-Money, BCA Flazz, BNI TapCash, BRI Brizzi). Tarif yang diberlakukan bersifat flat subsidi sebesar <strong>Rp3.600</strong> untuk masyarakat umum sekali jalan berapapun jarak yang ditempuh, serta <strong>Rp2.000</strong> bagi pelajar dan mahasiswa yang menggunakan kartu khusus komuter terdaftar.
        </p>
      </div>
    `,
    stats: [
      { label: 'Total Koridor Aktif', value: '17+ Koridor', detail: 'Menghubungkan Kota, Sleman & Bantul' },
      { label: 'Tarif Flat Bersubsidi', value: 'Rp3.600', detail: 'Diskon Rp2.000 untuk Pelajar DIY' },
      { label: 'Jam Layanan Operasional', value: '05.30 – 21.30', detail: 'Beroperasi 7 Hari Penuh Seminggu' },
      { label: 'Jumlah Halte & Shelter', value: '110+ Halte', detail: 'Halte Permanen & Portabel' },
    ],
    networkTable: [
      { service: 'Koridor 1A', route: 'Terminal Prambanan – Jl. Solo – Stasiun Tugu – Malioboro', headway: '10 – 15 Menit', hours: '05.30 – 21.00 WIB', fare: 'Rp3.600 Flat' },
      { service: 'Koridor 2A', route: 'Condongcatur – UGM – Kotabaru – Malioboro – Terminal Jombor', headway: '12 – 15 Menit', hours: '05.30 – 21.30 WIB', fare: 'Rp3.600 Flat' },
      { service: 'Koridor 2B', route: 'Terminal Jombor – Wirobrajan – Titik Nol – UGM – Condongcatur', headway: '12 – 15 Menit', hours: '05.30 – 21.30 WIB', fare: 'Rp3.600 Flat' },
      { service: 'Koridor 3A', route: 'Adisutjipto – Ring Road Utara – Jombor – Ngabean – Giwangan', headway: '12 – 18 Menit', hours: '05.30 – 21.30 WIB', fare: 'Rp3.600 Flat' },
      { service: 'Koridor 4A', route: 'Terminal Giwangan – Tamansiswa – Lempuyangan – UGM', headway: '15 – 20 Menit', hours: '05.30 – 20.30 WIB', fare: 'Rp3.600 Flat' },
      { service: 'Koridor 5A', route: 'Terminal Jombor – Ring Road Utara – Flyover Janti – Giwangan', headway: '15 – 20 Menit', hours: '05.30 – 20.30 WIB', fare: 'Rp3.600 Flat' },
    ],
    faqs: [
      {
        question: 'Bagaimana cara pindah bus Trans Jogja tanpa harus bayar tiket lagi?',
        answer: 'Pastikan Anda turun di halte bertipe permanen (shelter tertutup dengan loket petugas, seperti di Halte Condongcatur, Jombor, Ngabean, atau Halte Malioboro). Tetaplah berada di dalam ruang tunggu peron dan jangan melangkah keluar melewati gate keluar; Anda dapat langsung menaiki bus koridor lanjutan secara gratis.'
      },
      {
        question: 'Apakah pembayaran bus Trans Jogja bisa menggunakan uang tunai?',
        answer: 'Trans Jogja memprioritaskan metode pembayaran non-tunai (cashless) menggunakan QRIS semua bank/e-wallet serta kartu uang elektronik (e-Money, Flazz, TapCash, Brizzi). Di beberapa halte shelter besar bertiket, pembayaran tunai masih dilayani di loket kasir, namun di halte portabel kondektur hanya memproses transaksi non-tunai.'
      },
      {
        question: 'Apakah rute Trans Jogja menjangkau Bandara YIA di Kulon Progo?',
        answer: 'Tidak. Bus Trans Jogja hanya melayani jaringan dalam aglomerasi perkotaan DIY (Kota Yogyakarta, Sleman, Bantul, dan Bandara lama Adisutjipto). Menuju Bandara Internasional Yogyakarta (YIA) di Kulon Progo, moda transportasi yang tersedia adalah Kereta Api Bandara YIA (Railink) dari Stasiun Tugu atau Bus DAMRI KSPN dari Terminal Giwangan.'
      },
      {
        question: 'Berapa jam operasional layanan bus Trans Jogja setiap harinya?',
        answer: 'Armada bus Trans Jogja beroperasi setiap hari mulai pukul 05.30 WIB pagi hingga pukul 21.30 WIB malam, termasuk pada hari libur nasional dan akhir pekan.'
      }
    ]
  },
  'kereta-bandara': {
    slug: 'kereta-bandara',
    pillarTitle: 'Jalur Rel Komuter & Bandara DIY: Akses Bebas Hambatan Jogja, Solo & YIA',
    pillarSubtitle: 'Pusat informasi resmi KRL Commuter Line Jogja-Solo, KA Bandara YIA Railink, KA Prameks, dan shuttle bus DAMRI terintegrasi Daop 6 Yogyakarta.',
    overviewHtml: `
      <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p>
          Konektivitas berbasis rel di Daerah Istimewa Yogyakarta dan wilayah Solo Raya dikelola oleh PT Kereta Api Indonesia (Persero) Daerah Operasi (Daop) 6 Yogyakarta dan operator KAI Commuter. Koridor rel ini merupakan urat nadi mobilitas antarkota paling modern dan tepat waktu di Indonesia bagian tengah, melayani ratusan ribu penumpang komuter harian, akademisi, pebisnis, dan wisatawan setiap minggunya.
        </p>
        <p>
          Tiga pilar layanan rel utama di kawasan ini meliputi:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>
            <strong>KRL Commuter Line Jogja – Solo:</strong> Jalur kereta rel listrik sepanjang 60 kilometer yang menghubungkan Stasiun Tugu Yogyakarta dengan Stasiun Palur di Surakarta melewati 13 stasiun strategis. Menggantikan peran legendaris KA Prameks diesel sejak 2021, KRL menyediakan 24 hingga 30 jadwal perjalanan harian dengan tarif flat Rp8.000 dan waktu tempuh konsisten hanya 1 jam 8 menit.
          </li>
          <li>
            <strong>Kereta Api Bandara YIA (Yogyakarta International Airport):</strong> Layanan kereta ekspres perintis yang menghubungkan Stasiun Tugu di jantung kota dengan Bandara Internasional Yogyakarta di Kulon Progo. Tersedia opsi <em>KA Bandara Reguler</em> (Rp20.000, waktu tempuh 39 menit via Wates) dan <em>KA Bandara Xpress</em> (Rp50.000, waktu tempuh 35 menit non-stop).
          </li>
          <li>
            <strong>Kereta Api Prambanan Ekspres (KA Prameks):</strong> Kereta diesel relasi Stasiun Tugu Yogyakarta menuju Stasiun Kutoarjo di Kabupaten Purworejo, Jawa Tengah. Beroperasi melayani 4 jadwal perjalanan pulang-pergi setiap hari dengan tarif terjangkau Rp8.000 per perjalanan.
          </li>
        </ul>
        <p>
          Sebagai pelengkap simpul antar-moda di luar jangkauan jalur rel, <strong>Bus DAMRI KSPN</strong> beroperasi dari bandara YIA menuju pusat kota Jogja, Terminal Borobudur, dan Candi Prambanan menggunakan armada minibus Toyota HiAce berpendingin udara penuh, menjamin tidak ada celah perjalanan yang terputus bagi wisatawan.
        </p>
      </div>
    `,
    stats: [
      { label: 'Jarak Lintasan KRL', value: '60+ KM', detail: '13 Stasiun dari Tugu ke Palur' },
      { label: 'Waktu Tempuh KA Bandara', value: '35 – 39 Menit', detail: 'Stasiun Tugu langsung ke Terminal YIA' },
      { label: 'Tarif KRL Flat', value: 'Rp8.000', detail: 'Bayar via GoTransit atau KMT' },
      { label: 'Frekuensi Keberangkatan', value: '50+ Trip/Hari', detail: 'KRL, KA Bandara & Prameks Daop 6' },
    ],
    networkTable: [
      { service: 'KRL Commuter Line', route: 'Yogyakarta – Lempuyangan – Maguwo – Klaten – Solo Balapan – Palur', headway: '30 – 60 Menit', hours: '05.05 – 22.35 WIB', fare: 'Rp8.000 Flat' },
      { service: 'KA Bandara YIA Xpress', route: 'Stasiun Tugu Yogyakarta &harr; Bandara Internasional YIA (Non-Stop)', headway: 'Tiap 60 Menit', hours: '05.00 – 21.00 WIB', fare: 'Rp50.000 Flat' },
      { service: 'KA Bandara YIA Reguler', route: 'Stasiun Tugu &harr; Stasiun Wates &harr; Bandara Internasional YIA', headway: 'Tiap 60 Menit', hours: '04.20 – 20.35 WIB', fare: 'Rp20.000 Flat' },
      { service: 'KA Prameks Kutoarjo', route: 'Stasiun Tugu – Wates – Wojo – Jenar – Kutoarjo (Purworejo)', headway: '4 Trip Tiap Hari', hours: '05.25 – 18.27 WIB', fare: 'Rp8.000 Flat' },
      { service: 'DAMRI Shuttle YIA', route: 'Bandara YIA &harr; Pool Stasiun Tugu / Terminal Borobudur Magelang', headway: '30 – 60 Menit', hours: '06.00 – 19.00 WIB', fare: 'Rp30.000 – Rp80.000' },
    ],
    faqs: [
      {
        question: 'Apakah tiket KA Bandara YIA bisa dibeli langsung di Stasiun Tugu (go show)?',
        answer: 'Bisa, melalui mesin tiket mandiri (Vending Machine) di peron khusus KA Bandara Stasiun Tugu menggunakan QRIS atau kartu debit. Namun, karena kuota kursi KA Bandara sering terjual habis pada jam padat penerbangan, sangat disarankan memesan tiket secara online H-7 melalui aplikasi Access by KAI atau laman reservation.railink.co.id.'
      },
      {
        question: 'Metode pembayaran apa saja yang diterima untuk naik KRL Jogja-Solo?',
        answer: 'Pembayaran tiket KRL Jogja-Solo dapat dilakukan dengan Kartu Multi Trip (KMT) KAI Commuter, Kartu Uang Elektronik perbankan (e-Money, Flazz, Brizzi, TapCash), atau membeli tiket QR digital melalui aplikasi GoTransit (Gojek) dan Access by KAI.'
      },
      {
        question: 'Berapa jeda waktu aman tiba di Stasiun Tugu sebelum jadwal penerbangan di YIA?',
        answer: 'Sediakan jeda waktu minimal 2,5 hingga 3 jam sebelum jadwal boarding pesawat Anda. Waktu tempuh kereta bandara adalah 35–39 menit, dan Anda memerlukan waktu berjalan kaki 5–10 menit menuju area check-in serta proses pemeriksaan keamanan di terminal keberangkatan bandara.'
      },
      {
        question: 'Apakah kereta Prameks dan KRL berangkat dari peron yang sama di Stasiun Tugu?',
        answer: 'KRL Commuter Line berangkat dari peron jalur 3 dan 6 di sayap utara stasiun, sedangkan KA Prameks umumnya diberangkatkan dari peron jalur 1 di sisi selatan stasiun. Ikuti penunjuk arah atau tanyakan pada petugas berseragam di hall utama.'
      }
    ]
  },
  'tiket-wisata': {
    slug: 'tiket-wisata',
    pillarTitle: 'Panduan Tiket, Angkutan Wisata & Utilitas Transportasi Yogyakarta',
    pillarSubtitle: 'Rangkuman praktis metode pembayaran non-tunai, rute bus pedesaan pantai Parangtritis, akses angkutan Candi Borobudur, dan loker penitipan barang stasiun.',
    overviewHtml: `
      <div class="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
        <p>
          Menikmati pesona pariwisata Daerah Istimewa Yogyakarta tidak harus bergantung pada kendaraan pribadi atau sewa mobil berbiaya mahal. Dengan perencanaan rute angkutan umum yang cermat, wisatawan mandiri (*solo backpacker*) maupun keluarga dapat menjelajahi destinasi cagar budaya dan pantai selatan dengan anggaran yang sangat hemat, teratur, dan aman.
        </p>
        <p>
          Kategori <strong>Tiket & Wisata</strong> dirancang sebagai panduan utilitas terpadu yang memecahkan masalah teknis wisatawan di lapangan:
        </p>
        <ul class="list-disc pl-5 space-y-2">
          <li>
            <strong>Standardisasi Pembayaran Non-Tunai (Cashless):</strong> Memandu wisatawan memilih metode transaksi paling efisien antara kartu uang elektronik perbankan fisik (e-Money, Flazz, TapCash, Brizzi) dengan aplikasi dompet digital berbasis pemindaian QRIS dinamis di halte bus dan mesin turnstile stasiun.
          </li>
          <li>
            <strong>Akses Wisata Lintas Batas (Candi Borobudur & Prambanan):</strong> Menguraikan secara mendalam skema angkutan estafet murah via Terminal Jombor menuju Terminal Borobudur di Magelang, serta rute bus langsung Trans Jogja Koridor 1A menuju pelataran Candi Prambanan.
          </li>
          <li>
            <strong>Angkutan Pedesaan Pesisir Selatan (Pantai Parangtritis):</strong> Memberikan panduan menaiki bus Antarkota Dalam Provinsi (AKDP) dari Terminal Giwangan menuju Pantai Parangtritis dan Gumuk Pasir Barchan dengan tarif Rp15.000–Rp20.000 sekali jalan.
          </li>
          <li>
            <strong>Fasilitas Penitipan Koper (Luggage Lockers):</strong> Panduan memanfaatkan loker otomatis pintar 24 jam dan shower room di kawasan Stasiun Tugu dan Selasar Malioboro, membebaskan wisatawan dari beban membawa koper sebelum jam check-in atau setelah check-out hotel.
          </li>
        </ul>
        <p>
          Seluruh data tarif, lokasi halte transit, dan jam operasional angkutan wisata di halaman ini diverifikasi secara berkala langsung oleh tim redaksi kami melalui peninjauan lapangan di simpul-simpul terminal Yogyakarta.
        </p>
      </div>
    `,
    stats: [
      { label: 'Ongkos ke Candi Borobudur', value: 'Rp25.000 – Rp35.000', detail: 'Via Bus Jombor atau DAMRI KSPN' },
      { label: 'Ongkos ke Pantai Parangtritis', value: 'Rp15.000 – Rp20.000', detail: 'Via Bus AKDP Terminal Giwangan' },
      { label: 'Tarif Loker Otomatis Tugu', value: 'Mulai Rp20.000', detail: 'Paket 3 Jam Beroperasi 24 Jam Nonstop' },
      { label: 'Standar Pembayaran', value: '100% Cashless', detail: 'Mendukung QRIS & Kartu Uang Elektronik' },
    ],
    networkTable: [
      { service: 'Bus AKDP Parangtritis', route: 'Terminal Giwangan – Jl. Parangtritis – Kretek – Pantai Parangtritis', headway: '20 – 30 Menit', hours: '06.00 – 17.00 WIB', fare: 'Rp15.000 – Rp20.000' },
      { service: 'Bus AKDP Borobudur', route: 'Terminal Jombor Sleman – Tempel – Muntilan – Terminal Borobudur', headway: '20 – 30 Menit', hours: '06.00 – 16.30 WIB', fare: 'Rp20.000 – Rp25.000' },
      { service: 'DAMRI KSPN Borobudur', route: 'Pool Stasiun Tugu Yogyakarta &harr; Kawasan Wisata Candi Borobudur', headway: 'Sesuai Slot Tiket', hours: '07.00 – 18.00 WIB', fare: 'Rp25.000 – Rp30.000' },
      { service: 'Smart Locker Stasiun Tugu', route: 'Loker Otomatis Pintu Timur & Selasar Malioboro Stasiun Tugu', headway: 'Layanan Mandiri', hours: '24 Jam Nonstop', fare: 'Rp20.000 – Rp50.000 / 3 Jam' },
    ],
    faqs: [
      {
        question: 'Jam berapa bus umum terakhir pulang dari Pantai Parangtritis ke Kota Jogja?',
        answer: 'Bus umum AKDP terakhir dari Sub-Terminal Parangtritis menuju Terminal Giwangan biasanya diberangkatkan maksimal pukul 17.00 hingga 17.30 WIB sore sebelum hari gelap. Pastikan Anda sudah bersiap di sub-terminal sebelum jam tersebut agar tidak tertinggal.'
      },
      {
        question: 'Apakah kartu e-money Jakarta (seperti Flazz BCA atau JakCard) bisa dipakai di Trans Jogja?',
        answer: 'Kartu Flazz BCA, Mandiri e-Money, BNI TapCash, dan BRI Brizzi dapat digunakan 100% di semua bus Trans Jogja dan KRL Jogja-Solo. Namun kartu khusus Pemprov DKI seperti JakCard Bank DKI belum terintegrasi pada mesin validator Trans Jogja.'
      },
      {
        question: 'Di mana tempat menitipkan koper yang aman di sekitar Malioboro?',
        answer: 'Pilihan paling aman adalah loker digital pintar otomatis (Loko Locker) di dalam hall Stasiun Tugu Yogyakarta atau fasilitas Shower and Locker KAI Wisata di Selasar Malioboro yang beroperasi 24 jam dengan pengawasan sekuriti dan kamera CCTV.'
      },
      {
        question: 'Berapa total biaya transportasi umum pulang-pergi dari Malioboro ke Borobudur?',
        answer: 'Total biaya per orang sekitar Rp50.000 hingga Rp70.000 PP, mencakup Trans Jogja Koridor 2A PP (Rp7.200) ditambah bus antarkota Terminal Jombor ke Borobudur PP (sekitar Rp50.000).'
      }
    ]
  }
};
