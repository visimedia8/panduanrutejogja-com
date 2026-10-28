export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface CategoryInfo {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  color: string;
}

export interface EditorialMember {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  email: string;
}

export const siteConfig = {
  name: 'PanduanRuteJogja.com',
  title: 'PanduanRuteJogja.com — Panduan Lengkap Rute & Transportasi Publik Yogyakarta',
  description: 'Portal independen panduan rute bus Trans Jogja, jadwal KRL Jogja-Solo, KA Bandara YIA, tarif, dan tips transportasi umum di Yogyakarta.',
  url: 'https://panduanrutejogja.com',
  author: 'Tim Redaksi PanduanRuteJogja.com',
  contactEmail: 'kontak@panduanrutejogja.com',
  contactFormEndpoint: (import.meta.env.PUBLIC_FORMSPREE_ENDPOINT as string) || '',
  organization: {
    name: 'Panduan Rute Jogja Media',
    address: 'Jl. Malioboro No. 45, Danurejan, Kota Yogyakarta, D.I. Yogyakarta 55213',
    phone: '+62 821-3890-4500',
    operationalHours: 'Senin – Jumat: 08.30 – 16.30 WIB'
  },
  
  // Google AdSense Configuration
  // CATATAN KEPATUHAN ADSENSE:
  // Selama masa peninjauan (Review Stage), 'enabled' di-set false agar tidak merender
  // tag iklan kosong atau teks dummy yang bisa dianggap "Site Under Construction".
  // Setelah akun Google AdSense di-approve, ubah 'enabled' menjadi true dan masukkan Client ID asli.
  adsense: {
    clientId: 'ca-pub-4090835276472949',
    enabled: false,
    slots: {
      headerLeaderboard: '1234567890',
      inArticleMiddle: '2345678901',
      inArticleBottom: '3456789012',
      mobileStickyBottom: '4567890123'
    }
  },

  // Tim Editorial & E-E-A-T Transparency
  editorialTeam: [
    {
      name: 'Bambang Triyono, S.T.',
      role: 'Pemimpin Redaksi & Pengamat Transportasi Perkotaan',
      expertise: 'Integrasi Multimoda & Rekayasa Lalu Lintas DIY',
      bio: 'Praktisi dan peneliti mobilitas publik di Yogyakarta selama lebih dari 10 tahun. Rutin melakukan audit rute bus Trans Jogja dan simpul transit kereta komuter.',
      email: 'bambang@panduanrutejogja.com'
    },
    {
      name: 'Sekar Saraswati, M.Sc.',
      role: 'Editor Spesialis Kereta Api & Bandara',
      expertise: 'KRL Commuter Line & KA Bandara YIA',
      bio: 'Lulusan Magister Sistem Transportasi UGM. Berpengalaman dalam analisis headway jadwal kereta, kapasitas angkut stasiun, dan integrasi peron bandara.',
      email: 'sekar@panduanrutejogja.com'
    },
    {
      name: 'Dimas Aji Prasetyo',
      role: 'Koordinator Riset & Observasi Lapangan',
      expertise: 'Verifikasi Fisik Halte & Tarif Non-Tunai',
      bio: 'Melakukan peninjauan langsung ke halte permanen, halte portabel, mesin tap-on-bus, serta memetakan aksesibilitas fasilitas bagi pejalan kaki dan wisatawan.',
      email: 'dimas@panduanrutejogja.com'
    }
  ] as EditorialMember[],

  categories: [
    {
      slug: 'trans-jogja',
      name: 'Trans Jogja',
      shortName: 'Bus TJ',
      description: 'Panduan rute koridor, halte transit, jadwal operasional, dan tarif bus Trans Jogja.',
      iconName: 'bus',
      color: 'blue'
    },
    {
      slug: 'kereta-bandara',
      name: 'Kereta & Bandara',
      shortName: 'KRL & KA Bandara',
      description: 'Jadwal KRL Commuter Line Jogja-Solo, KA Bandara YIA, Prameks, dan bus Damri.',
      iconName: 'train',
      color: 'indigo'
    },
    {
      slug: 'tiket-wisata',
      name: 'Tiket & Wisata',
      shortName: 'Tiket & Tips',
      description: 'Metode pembayaran e-money/QRIS, rute angkutan wisata Borobudur, Parangtritis, dan tips hemat.',
      iconName: 'compass',
      color: 'sky'
    }
  ] as CategoryInfo[],

  navItems: [
    { title: 'Beranda', href: '/' },
    { title: 'Trans Jogja', href: '/kategori/trans-jogja' },
    { title: 'KRL & Bandara', href: '/kategori/kereta-bandara' },
    { title: 'Tiket & Wisata', href: '/kategori/tiket-wisata' },
    { title: 'Tim Redaksi', href: '/redaksi' }
  ] as NavItem[],

  legalNavItems: [
    { title: 'Tentang Kami', href: '/tentang' },
    { title: 'Tim Redaksi (E-E-A-T)', href: '/redaksi' },
    { title: 'Hubungi Kami', href: '/kontak' },
    { title: 'Kebijakan Privasi', href: '/privacy' },
    { title: 'Syarat & Ketentuan', href: '/terms' }
  ] as NavItem[]
};
