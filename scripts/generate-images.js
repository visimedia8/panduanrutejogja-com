import fs from 'fs';
import path from 'path';

const articles = [
  {
    slug: 'rute-halte-trans-jogja-koridor-1a-prambanan-malioboro',
    category: 'TRANS JOGJA',
    badge: 'KORIDOR 1A',
    title: 'Prambanan — Malioboro',
    color1: '#0284c7',
    color2: '#0369a1',
    iconType: 'bus'
  },
  {
    slug: 'rute-jadwal-trans-jogja-koridor-2a-condongcatur-jombor',
    category: 'TRANS JOGJA',
    badge: 'KORIDOR 2A',
    title: 'Condongcatur — Terminal Jombor',
    color1: '#0284c7',
    color2: '#0f766e',
    iconType: 'bus'
  },
  {
    slug: 'rute-lengkap-trans-jogja-koridor-3a-bandara-adisutjipto-giwangan',
    category: 'TRANS JOGJA',
    badge: 'KORIDOR 3A',
    title: 'Bandara Adisutjipto — Giwangan',
    color1: '#0284c7',
    color2: '#1d4ed8',
    iconType: 'bus'
  },
  {
    slug: 'panduan-lengkap-jalur-trans-jogja-koridor-4a-4b',
    category: 'TRANS JOGJA',
    badge: 'KORIDOR 4A & 4B',
    title: 'Giwangan — Lempuyangan — UGM',
    color1: '#0284c7',
    color2: '#0e7490',
    iconType: 'bus'
  },
  {
    slug: 'panduan-rute-trans-jogja-koridor-5a-5b-ring-road',
    category: 'TRANS JOGJA',
    badge: 'KORIDOR 5A & 5B',
    title: 'Jalur Melingkar Ring Road Jogja',
    color1: '#0284c7',
    color2: '#4338ca',
    iconType: 'bus'
  },
  {
    slug: 'cara-transit-dan-pindah-bus-trans-jogja',
    category: 'TRANS JOGJA',
    badge: 'PANDUAN TRANSIT',
    title: 'Cara Pindah Bus di Halte Transit',
    color1: '#0284c7',
    color2: '#059669',
    iconType: 'route'
  },
  {
    slug: 'lokasi-halte-trans-jogja-terdekat-stasiun-tugu-lempuyangan',
    category: 'TRANS JOGJA',
    badge: 'KONEKSI STASIUN',
    title: 'Halte Dekat Stasiun Tugu & Lempuyangan',
    color1: '#0284c7',
    color2: '#d97706',
    iconType: 'map'
  },
  {
    slug: 'jadwal-tarif-krl-commuter-line-jogja-solo-terbaru',
    category: 'KERETA & BANDARA',
    badge: 'COMMUTER LINE',
    title: 'KRL Jogja — Solo (Jadwal & Tarif)',
    color1: '#4f46e5',
    color2: '#3730a3',
    iconType: 'train'
  },
  {
    slug: 'cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo',
    category: 'KERETA & BANDARA',
    badge: 'KA BANDARA YIA',
    title: 'Stasiun Tugu — Bandara Kulon Progo',
    color1: '#4f46e5',
    color2: '#0284c7',
    iconType: 'train'
  },
  {
    slug: 'perbedaan-ka-bandara-yia-reguler-vs-yia-xpress',
    category: 'KERETA & BANDARA',
    badge: 'KOMPARASI LAYANAN',
    title: 'KA Bandara Reguler vs YIA Xpress',
    color1: '#4f46e5',
    color2: '#b91c1c',
    iconType: 'train'
  },
  {
    slug: 'rute-jadwal-kereta-prameks-jogja-kutoarjo',
    category: 'KERETA & BANDARA',
    badge: 'KA PRAMEKS',
    title: 'Jadwal & Rute Jogja — Kutoarjo',
    color1: '#4f46e5',
    color2: '#7c3aed',
    iconType: 'train'
  },
  {
    slug: 'panduan-naik-bus-damri-bandara-yia-jogja-magelang',
    category: 'KERETA & BANDARA',
    badge: 'BUS DAMRI',
    title: 'DAMRI Bandara YIA ke Kota & Magelang',
    color1: '#4f46e5',
    color2: '#059669',
    iconType: 'bus'
  },
  {
    slug: 'rute-tarif-angkutan-perintis-teman-bus-sleman-bantul',
    category: 'KERETA & BANDARA',
    badge: 'TEMAN BUS DIY',
    title: 'Angkutan Perintis Sleman & Bantul',
    color1: '#4f46e5',
    color2: '#0d9488',
    iconType: 'bus'
  },
  {
    slug: 'panduan-integrasi-antarmoda-stasiun-tugu-yogyakarta',
    category: 'KERETA & BANDARA',
    badge: 'INTERMODA HUB',
    title: 'Integrasi Antarmoda di Stasiun Tugu',
    color1: '#4f46e5',
    color2: '#c026d3',
    iconType: 'map'
  },
  {
    slug: 'cara-pembayaran-trans-jogja-emoney-qris-tunai',
    category: 'TIKET & WISATA',
    badge: 'METODE BAYAR',
    title: 'E-Money vs QRIS vs Tunai di Trans Jogja',
    color1: '#0284c7',
    color2: '#10b981',
    iconType: 'card'
  },
  {
    slug: 'cara-beli-tiket-krl-jogja-solo-access-kai-gotransit',
    category: 'TIKET & WISATA',
    badge: 'TIKET DIGITAL',
    title: 'Beli Tiket KRL: Access KAI & GoTransit',
    color1: '#0284c7',
    color2: '#059669',
    iconType: 'card'
  },
  {
    slug: 'panduan-rute-angkutan-umum-jogja-candi-borobudur',
    category: 'TIKET & WISATA',
    badge: 'WISATA BOROBUDUR',
    title: 'Rute Angkutan Umum Menuju Candi Borobudur',
    color1: '#0284c7',
    color2: '#d97706',
    iconType: 'map'
  },
  {
    slug: 'transportasi-umum-pantai-parangtritis-terminal-giwangan',
    category: 'TIKET & WISATA',
    badge: 'WISATA PARANGTRITIS',
    title: 'Transportasi ke Parangtritis dari Giwangan',
    color1: '#0284c7',
    color2: '#0891b2',
    iconType: 'bus'
  },
  {
    slug: 'jam-buka-fasilitas-penitipan-barang-stasiun-tugu',
    category: 'TIKET & WISATA',
    badge: 'FASILITAS STASIUN',
    title: 'Penitipan Barang & Loker Stasiun Tugu',
    color1: '#0284c7',
    color2: '#475569',
    iconType: 'map'
  },
  {
    slug: 'tips-naik-transportasi-umum-malioboro-wisatawan',
    category: 'TIKET & WISATA',
    badge: 'TIPS WISATAWAN',
    title: 'Tips Keliling Malioboro Tanpa Macet',
    color1: '#0284c7',
    color2: '#e11d48',
    iconType: 'route'
  }
];

const outputDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function getIconSvg(type) {
  switch (type) {
    case 'train':
      return `<rect x="620" y="140" width="120" height="150" rx="20" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-width="4"/>
        <rect x="635" y="155" width="90" height="55" rx="8" fill="#ffffff" fill-opacity="0.25"/>
        <circle cx="650" cy="245" r="10" fill="#38bdf8"/>
        <circle cx="710" cy="245" r="10" fill="#38bdf8"/>
        <path d="M640 290 L620 320 M720 290 L740 320 M610 320 L750 320" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>`;
    case 'bus':
      return `<rect x="620" y="140" width="120" height="145" rx="18" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-width="4"/>
        <rect x="635" y="155" width="90" height="50" rx="8" fill="#ffffff" fill-opacity="0.25"/>
        <circle cx="650" cy="240" r="10" fill="#38bdf8"/>
        <circle cx="710" cy="240" r="10" fill="#38bdf8"/>
        <rect x="645" y="270" width="20" height="8" rx="2" fill="#ffffff" fill-opacity="0.4"/>
        <rect x="695" y="270" width="20" height="8" rx="2" fill="#ffffff" fill-opacity="0.4"/>`;
    case 'card':
      return `<rect x="610" y="150" width="140" height="95" rx="12" fill="#ffffff" fill-opacity="0.12" stroke="#ffffff" stroke-width="4"/>
        <rect x="610" y="180" width="140" height="20" fill="#38bdf8" fill-opacity="0.4"/>
        <rect x="625" y="215" width="35" height="16" rx="4" fill="#fbbf24"/>`;
    case 'map':
    case 'route':
    default:
      return `<path d="M600 240 Q660 160 720 240 T760 180" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-dasharray="8 6"/>
        <circle cx="600" cy="240" r="12" fill="#0284c7" stroke="#ffffff" stroke-width="3"/>
        <circle cx="720" cy="240" r="12" fill="#10b981" stroke="#ffffff" stroke-width="3"/>
        <circle cx="760" cy="180" r="12" fill="#f59e0b" stroke="#ffffff" stroke-width="3"/>`;
  }
}

articles.forEach(art => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420" width="800" height="420">
  <defs>
    <linearGradient id="bg-grad-${art.slug}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="badge-grad-${art.slug}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${art.color1}" />
      <stop offset="100%" stop-color="${art.color2}" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="420" fill="url(#bg-grad-${art.slug})" />
  
  <!-- Circuit & transit line motifs -->
  <path d="M0 60 H800 M0 140 H800 M0 220 H800 M0 300 H800 M0 380 H800" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1.5" />
  <path d="M120 0 V420 M260 0 V420 M400 0 V420 M540 0 V420 M680 0 V420" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1.5" />

  <!-- Metro curve line -->
  <path d="M60 360 C 240 360, 320 280, 500 280 S 700 340, 760 340" fill="none" stroke="${art.color1}" stroke-width="6" stroke-opacity="0.3" />

  <!-- Category & Badge -->
  <rect x="50" y="55" width="160" height="32" rx="16" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <text x="130" y="76" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="11" fill="#94a3b8" text-anchor="middle" letter-spacing="1">
    ${art.category}
  </text>

  <rect x="220" y="55" width="180" height="32" rx="16" fill="url(#badge-grad-${art.slug})" />
  <text x="310" y="76" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
    ${art.badge}
  </text>

  <!-- Big Title -->
  <text x="50" y="160" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="36" fill="#ffffff">
    ${art.title}
  </text>

  <text x="50" y="200" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="16" fill="#94a3b8">
    Panduan Rute &bull; Jam Operasional &bull; Tarif Resmi &bull; Halte Transit
  </text>

  <!-- Route Status Tag -->
  <rect x="50" y="240" width="220" height="42" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.6" />
  <circle cx="72" cy="261" r="5" fill="#10b981" />
  <text x="90" y="267" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13" fill="#e2e8f0">
    Rute Aktif & Terverifikasi
  </text>

  <!-- Right Visual Icon Box -->
  ${getIconSvg(art.iconType)}

  <!-- Footer Watermark -->
  <text x="50" y="375" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="13" fill="#64748b">
    PanduanRuteJogja.com &bull; Inisiatif Utilitas Transportasi Publik DIY
  </text>
</svg>`;

  fs.writeFileSync(path.join(outputDir, `${art.slug}.svg`), svg);
});

console.log(`Generated ${articles.length} SVG banners successfully.`);
