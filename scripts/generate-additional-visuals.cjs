const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.resolve('public/images');

const visuals = [
  {
    filename: 'peta-jaringan-trans-jogja',
    tag: 'PETA JARINGAN BRT RESMI DIY',
    title: 'Peta Jaringan Koridor Bus Trans Jogja & Teman Bus',
    subtitle: 'Lintasan Koridor 1A–5B, Simpul Transit Stasiun Tugu, Malioboro, Giwangan & Jombor',
    accentColor: '#059669',
    badgeText: 'KORIDOR 1A – 5B',
    stats: [
      { label: 'TARIF UMUM', val: 'Rp3.600' },
      { label: 'TARIF PELAJAR', val: 'Rp2.000' },
      { label: 'INTEGRASI', val: '1 Jam' },
      { label: 'OPERASIONAL', val: '05.30–21.30' }
    ],
    items: [
      'Koridor 1A: Terminal Prambanan ➔ Bandara Adisutjipto ➔ Stasiun Tugu ➔ Malioboro',
      'Koridor 2A: Condongcatur ➔ Monumen Tugu ➔ Malioboro ➔ Terminal Jombor',
      'Koridor 3A: Bandara Adisutjipto ➔ Ring Road Utara ➔ Terminal Giwangan',
      'Koridor 4A/B: Giwangan ➔ Lempuyangan ➔ Kampus UGM ➔ Ring Road Barat',
      'Koridor 5A/B: Rute Melingkar Penuh Ring Road Jogja & Perintis Sleman-Bantul'
    ]
  },
  {
    filename: 'skematik-multimoda-rel-jogja',
    tag: 'SKEMATIK MULTIMODA REL KOMUTER',
    title: 'Skematik Jalur Rel: KRL Jogja-Solo, KA Bandara YIA & Prameks',
    subtitle: 'Interchange Stasiun Tugu, 13 Stasiun Lin Solo Balapan, dan Jalur Rel Layang Bandara YIA',
    accentColor: '#0891b2',
    badgeText: 'RELASI REL 2026',
    stats: [
      { label: 'KRL JOGJA-SOLO', val: 'Rp8.000' },
      { label: 'KA BANDARA REG', val: 'Rp20.000' },
      { label: 'KA BANDARA XPRESS', val: 'Rp50.000' },
      { label: 'KA PRAMEKS', val: 'Rp8.000' }
    ],
    items: [
      'KA Bandara YIA Reguler: Stasiun Tugu ➔ Wates (transit) ➔ Bandara YIA (39 Menit)',
      'KA Bandara YIA Xpress: Stasiun Tugu ➔ Bandara YIA Non-Stop Direct (35 Menit)',
      'KRL Commuter Line: Tugu ➔ Lempuyangan ➔ Maguwo ➔ Klaten ➔ Solo Balapan ➔ Palur',
      'KA Prameks Komuter: Stasiun Yogyakarta (Tugu) ➔ Wates ➔ Jenar ➔ Kutoarjo PP',
      'Simpul Interchange Utama: Stasiun Tugu Yogyakarta (Koneksi Seluruh Moda)'
    ]
  },
  {
    filename: 'panduan-tiket-wisata-jogja',
    tag: 'PANDUAN PEMBAYARAN & ANGKUTAN WISATA',
    title: 'Panduan Integrasi Antarmoda Wisata & Pembayaran Non-Tunai',
    subtitle: 'Koneksi Candi Borobudur, Prambanan, Parangtritis via DAMRI, KRL & Trans Jogja',
    accentColor: '#d97706',
    badgeText: 'NON-TUNAI / CASHLESS',
    stats: [
      { label: 'QRIS NASIONAL', val: '100% Aktif' },
      { label: 'KARTU BANK', val: 'Flazz/e-Money' },
      { label: 'DAMRI BOROBUDUR', val: 'Rp25.000' },
      { label: 'DAMRI PANTAI', val: 'Rp15.000' }
    ],
    items: [
      'Metode Bayar Trans Jogja: Wajib QRIS (semua e-wallet) atau Kartu Uang Elektronik',
      'Pembelian KRL Commuter: Kartu Multi Trip (KMT), e-Money, TapCash, atau GoTransit',
      'Tiket KA Bandara YIA: Pemesanan resmi H-7 melalui aplikasi Access by KAI / Vending Machine',
      'Shuttle KSPN Borobudur: Bus DAMRI ber-AC dari Terminal Jombor & Bandara YIA',
      'Angkutan Pantai Parangtritis: Bus perintis DAMRI dari peron Terminal Giwangan'
    ]
  },
  {
    filename: 'infografis-boarding-ka-bandara-tugu',
    tag: 'WAYFINDING ALUR STASIUN TUGU',
    title: 'Alur Pintu Masuk, Gate Scanning & Boarding KA Bandara YIA',
    subtitle: 'Gedung Khusus KA Bandara Pintu Selatan (Jl. Pasar Kembang) — Waktu Tap Maks. 10 Menit',
    accentColor: '#0891b2',
    badgeText: 'TERMINAL GATE TUGU',
    stats: [
      { label: 'PINTU MASUK', val: 'Selatan' },
      { label: 'GATE CLOSING', val: 'H-5 Menit' },
      { label: 'WAKTU TEMPUH', val: '35–39 Mnt' },
      { label: 'PLATFORM', val: 'Jalur 1' }
    ],
    items: [
      'Langkah 1: Masuk melalui Gedung Khusus KA Bandara di Jl. Pasar Kembang (Pintu Selatan)',
      'Langkah 2: Cetak boarding pass fisik di Vending Machine atau siapkan QR Access by KAI',
      'Langkah 3: Pindai barcode pada gate otomatis paling lambat 10 menit sebelum keberangkatan',
      'Langkah 4: Menunggu di ruang tunggu berpendingin udara (AC) & fasilitas charging station',
      'Langkah 5: Boarding ke kabin kereta sesuai nomor gerbong begitu pintu peron dibuka'
    ]
  },
  {
    filename: 'diagram-13-stasiun-krl-jogja-solo',
    tag: 'DIAGRAM LIN KRL COMMUTER LINE',
    title: 'Diagram 13 Stasiun Transit KRL Lin Yogyakarta – Solo – Palur',
    subtitle: 'Tarif Flat Subsidi Rp8.000 Sekali Jalan — Waktu Tempuh Rata-Rata 75–80 Menit',
    accentColor: '#dc2626',
    badgeText: 'KRL DAOP 6',
    stats: [
      { label: 'TOTAL STASIUN', val: '13 Titik' },
      { label: 'TARIF FLAT', val: 'Rp8.000' },
      { label: 'DURASI TEMPUH', val: '75–80 Mnt' },
      { label: 'FREKUENSI', val: '24–30 Trip' }
    ],
    items: [
      'Wilayah D.I. Yogyakarta: Stasiun Yogyakarta (Tugu) ➔ Lempuyangan ➔ Maguwo',
      'Batas Wilayah Provinsi: Stasiun Brambanan (Klaten Barat / Candi Prambanan)',
      'Wilayah Kabupaten Klaten: Srowot ➔ Klaten (Transit Utama) ➔ Ceper ➔ Delanggu',
      'Wilayah Sukoharjo: Stasiun Gawok (Pemberhentian Komuter Komersial)',
      'Wilayah Surakarta & Karanganyar: Purwosari ➔ Solo Balapan ➔ Solo Jebres ➔ Palur'
    ]
  },
  {
    filename: 'peta-rute-estafet-borobudur',
    tag: 'PETA RUTE ESTAFET CANDI BOROBUDUR',
    title: 'Peta Rute Estafet Angkutan Umum: Stasiun Tugu ➔ Jombor ➔ Borobudur',
    subtitle: 'Kombinasi Trans Jogja 2A (Rp3.600) + Bus DAMRI KSPN (Rp25.000) — Total Biaya Rp28.600',
    accentColor: '#d97706',
    badgeText: 'ESTAFET WISATA',
    stats: [
      { label: 'TOTAL ONGKOS', val: 'Rp28.600' },
      { label: 'WAKTU TEMPUH', val: '75–90 Mnt' },
      { label: 'TITIK TRANSIT', val: 'Term. Jombor' },
      { label: 'HEADWAY DAMRI', val: '60 Menit' }
    ],
    items: [
      'Tahap 1: Naik Trans Jogja Koridor 2A dari Halte Mangkubumi 1 (sebelah timur Stasiun Tugu)',
      'Tahap 2: Bus melintasi Jl. Margo Utomo & Jl. Magelang langsung menuju Terminal Jombor',
      'Tahap 3: Turun di Terminal Jombor, berjalan 50 meter menuju peron Bus DAMRI KSPN',
      'Tahap 4: Naik armada bus DAMRI medium ber-AC rute Jombor – Candi Borobudur via Tempel',
      'Tahap 5: Turun di Terminal Borobudur, berjalan kaki 300 meter ke pintu loket candi'
    ]
  },
  {
    filename: 'peta-koridor-selatan-parangtritis',
    tag: 'PETA ANGKUTAN KORIDOR SELATAN',
    title: 'Peta Angkutan Umum Menuju Pantai Parangtritis dari Terminal Giwangan',
    subtitle: 'Trans Jogja 3A/4A ke Giwangan ➔ Bus DAMRI Perintis via Jalan Parangtritis (Jl. Paris)',
    accentColor: '#059669',
    badgeText: 'WISATA PANTAI DIY',
    stats: [
      { label: 'BUS TRANS JOGJA', val: 'Rp3.600' },
      { label: 'DAMRI PERINTIS', val: 'Rp15.000' },
      { label: 'JARAK TEMPUH', val: '27 Km' },
      { label: 'WAKTU TEMPUH', val: '50–60 Mnt' }
    ],
    items: [
      'Tahap 1: Dari Malioboro/Pusat Kota naik Trans Jogja Koridor 3A menuju Terminal Bus Giwangan',
      'Tahap 2: Tiba di Terminal Giwangan, menuju ke area peron angkutan pedesaan/perintis selatan',
      'Tahap 3: Naik bus perintis DAMRI atau minibus trayek resmi Giwangan – Parangtritis',
      'Tahap 4: Perjalanan menyusuri Jl. Parangtritis (Jl. Paris) melintasi Sewon, Bantul, dan Kretek',
      'Tahap 5: Turun langsung di Terminal Pantai Parangtritis dekat pos retribusi TPR resmi'
    ]
  },
  {
    filename: 'peta-cakupan-observasi-diy',
    tag: 'CAKUPAN TELEMETRI TRANSPORTASI DIY',
    title: 'Peta Wilayah Jangkauan & Observasi Antarmoda D.I. Yogyakarta',
    subtitle: 'Sleman (Utara & Timur), Kota Yogyakarta (Pusat), Bantul (Selatan), & Kulon Progo (Barat)',
    accentColor: '#1b4d3e',
    badgeText: 'OBSERVASI 4 WILAYAH',
    stats: [
      { label: 'KOTA YOGYAKARTA', val: 'Pusat Transit' },
      { label: 'KAB. SLEMAN', val: 'Kampus & Candi' },
      { label: 'KAB. BANTUL', val: 'Pantai & Pasar' },
      { label: 'KULON PROGO', val: 'Bandara YIA' }
    ],
    items: [
      'Zona 1 Kota Yogyakarta: Kawasan Malioboro, Stasiun Tugu, Stasiun Lempuyangan, Titik Nol KM',
      'Zona 2 Kabupaten Sleman: Koridor Jl. Solo, Prambanan, Terminal Jombor, Kampus UGM/UNY',
      'Zona 3 Kabupaten Bantul: Terminal Bus Giwangan, Ring Road Selatan, Koridor Pantai Parangtritis',
      'Zona 4 Kabupaten Kulon Progo: Bandara Internasional YIA, Stasiun Wates, Jalur Elevated Rel',
      'Integrasi Multimoda: Seluruh simpul dipantau dan diverifikasi langsung oleh analis lapangan'
    ]
  },
  {
    filename: 'infografis-sop-verifikasi-lapangan',
    tag: 'SOP METODOLOGI DEWAN REDAKSI',
    title: 'SOP Verifikasi Faktual Lapangan & Audit Headway Transportasi DIY',
    subtitle: 'Protokol GPS Logging Rambu Halte, Pengujian Transaksi Multi-NFC, dan Sinkronisasi Data Daop 6/Dishub',
    accentColor: '#09231c',
    badgeText: 'STANDAR E-E-A-T',
    stats: [
      { label: 'GPS LOGGING', val: 'Presisi 5m' },
      { label: 'UJI TAP KARTU', val: '4 Bank KUE' },
      { label: 'AUDIT SIKLUS', val: 'Tiap 2 Minggu' },
      { label: 'SLA RALAT', val: '1x24 Jam' }
    ],
    items: [
      'Fase 1 - Observasi Fisik: GPS logging koordinat halte permanen, halte portabel, dan rambu bus',
      'Fase 2 - Uji Transaksi Multi-NFC: Simulasi tapping kartu Mandiri e-Money, Flazz, Brizzi, TapCash, QRIS',
      'Fase 3 - Audit Waktu Tunggu (Chronometer): Pengukuran durasi transit antar-bus dan interval headway',
      'Fase 4 - Sinkronisasi Regulasi: Konfirmasi berkala terhadap Pergub DIY, SK Kemenhub, dan Gapeka Daop 6',
      'Hasil: Panduan independen yang 100% dapat diandalkan dan bebas dari informasi kedaluwarsa'
    ]
  }
];

const esc = (str) => String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildSvg(vis) {
  const statsCols = vis.stats.map((s, idx) => `
    <g transform="translate(${80 + idx * 265}, 280)">
      <rect width="245" height="72" rx="10" fill="#09231c" stroke="#d4af37" stroke-width="1.2" opacity="0.9" />
      <text x="16" y="28" fill="#d4af37" font-size="11" font-weight="bold" font-family="monospace">${esc(s.label)}</text>
      <text x="16" y="56" fill="#ffffff" font-size="20" font-weight="900" font-family="monospace">${esc(s.val)}</text>
    </g>
  `).join('');

  const itemsRows = vis.items.map((it, idx) => `
    <g transform="translate(80, ${380 + idx * 44})">
      <circle cx="12" cy="12" r="7" fill="${vis.accentColor}" stroke="#ffffff" stroke-width="2" />
      <text x="32" y="16" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="500">${esc(it)}</text>
    </g>
  `).join('');

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#051410" />
      <stop offset="60%" stop-color="#0f382c" />
      <stop offset="100%" stop-color="#051410" />
    </linearGradient>
    <pattern id="gridPat" width="24" height="24" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="24" y2="0" stroke="#d4af37" stroke-width="0.5" stroke-opacity="0.12" />
      <line x1="0" y1="0" x2="0" y2="24" stroke="#d4af37" stroke-width="0.5" stroke-opacity="0.12" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#gridPat)" />

  <!-- Outer Heritage Border -->
  <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#d4af37" stroke-width="2" stroke-opacity="0.4" />
  <rect x="30" y="30" width="1140" height="570" rx="12" fill="none" stroke="#d4af37" stroke-width="0.75" stroke-dasharray="6,6" stroke-opacity="0.5" />

  <!-- Header Banner Ribbon -->
  <g transform="translate(80, 65)">
    <rect width="320" height="28" rx="6" fill="#09231c" stroke="${vis.accentColor}" stroke-width="1.5" />
    <text x="160" y="18" fill="#d4af37" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">${esc(vis.tag)}</text>
    <rect x="330" y="0" width="210" height="28" rx="6" fill="${vis.accentColor}" />
    <text x="435" y="18" fill="#ffffff" font-size="11" font-weight="bold" font-family="monospace" text-anchor="middle">${esc(vis.badgeText)}</text>
  </g>

  <!-- Title & Subtitle -->
  <g transform="translate(80, 140)">
    <text x="0" y="24" fill="#ffffff" font-size="30" font-weight="900" font-family="sans-serif">${esc(vis.title)}</text>
    <text x="0" y="60" fill="#cbd5e1" font-size="16" font-family="sans-serif" font-weight="normal">${esc(vis.subtitle)}</text>
  </g>

  <!-- Divider Line -->
  <line x1="80" y1="240" x2="1120" y2="240" stroke="#d4af37" stroke-width="1.5" stroke-opacity="0.3" />

  <!-- Key Metrics Row -->
  ${statsCols}

  <!-- Feature List Items -->
  ${itemsRows}

  <!-- Footer Brand Attribution -->
  <g transform="translate(80, 580)">
    <text x="0" y="0" fill="#94a3b8" font-size="11" font-family="monospace">PANDUANRUTEJOGJA.COM • PORTAL INDEPENDEN TRANSPORTASI PUBLIK D.I. YOGYAKARTA</text>
    <text x="1040" y="0" fill="#d4af37" font-size="11" font-weight="bold" font-family="monospace" text-anchor="end">TERVERIFIKASI REAL-LIFE 2026</text>
  </g>
</svg>
  `;
}

async function run() {
  console.log(`Menghasilkan ${visuals.length} infografis visual teroptimasi untuk panduanrutejogja.com...`);
  
  for (const vis of visuals) {
    const svgContent = buildSvg(vis);
    const svgPath = path.join(IMAGES_DIR, `${vis.filename}.svg`);
    const webpPath = path.join(IMAGES_DIR, `${vis.filename}.webp`);

    fs.writeFileSync(svgPath, svgContent, 'utf-8');

    const svgBuffer = Buffer.from(svgContent, 'utf-8');
    await sharp(svgBuffer, { density: 150 })
      .resize(1200, 630, { fit: 'cover' })
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);

    const stats = fs.statSync(webpPath);
    console.log(`✅ [WEBP] ${vis.filename}.webp dibuat (${Math.round(stats.size / 1024)} KB)`);
  }

  console.log('\nSeluruh infografis berhasil digenerate ke public/images/!');
}

run();
