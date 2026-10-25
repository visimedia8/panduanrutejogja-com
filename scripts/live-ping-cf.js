const urls = [
  'https://emb-9ze.pages.dev/',
  'https://emb-9ze.pages.dev/kategori/trans-jogja/',
  'https://emb-9ze.pages.dev/kategori/kereta-bandara/',
  'https://emb-9ze.pages.dev/kategori/tiket-wisata/',
  'https://emb-9ze.pages.dev/panduan/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro/',
  'https://emb-9ze.pages.dev/panduan/jadwal-tarif-krl-commuter-line-jogja-solo-terbaru/',
  'https://emb-9ze.pages.dev/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo/',
  'https://emb-9ze.pages.dev/tentang/',
  'https://emb-9ze.pages.dev/redaksi/',
  'https://emb-9ze.pages.dev/kontak/',
  'https://emb-9ze.pages.dev/privacy/',
  'https://emb-9ze.pages.dev/terms/',
  'https://emb-9ze.pages.dev/ads.txt',
  'https://emb-9ze.pages.dev/robots.txt',
  'https://emb-9ze.pages.dev/sitemap.xml',
  'https://emb-9ze.pages.dev/images/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro.webp'
];

async function ping() {
  console.log('Testing live production endpoints on Cloudflare Pages (emb-9ze.pages.dev)...');
  let pass = 0;
  for (const u of urls) {
    try {
      const res = await fetch(u);
      console.log(`[HTTP ${res.status}] ${u} (${res.headers.get('content-type') || 'unknown'})`);
      if (res.status === 200) pass++;
    } catch (e) {
      console.error(`[FAIL] ${u}: ${e.message}`);
    }
  }
  console.log(`\nLive Verification Result: ${pass} / ${urls.length} endpoints PASSED HTTP 200 OK.`);
}

ping();
