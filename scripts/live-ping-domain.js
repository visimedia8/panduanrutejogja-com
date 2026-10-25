const targets = [
  'https://panduanrutejogja.com',
  'https://panduanrutejogja.com/sitemap.xml',
  'https://panduanrutejogja.com/ads.txt',
  'https://panduanrutejogja.com/robots.txt',
  'https://panduanrutejogja.com/kategori/trans-jogja/',
  'https://panduanrutejogja.com/panduan/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro/',
  'https://panduanrutejogja.com/images/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro.webp',
  'https://www.panduanrutejogja.com'
];

async function testDomain() {
  console.log('Testing live custom domain endpoints (panduanrutejogja.com)...');
  for (const t of targets) {
    try {
      const res = await fetch(t, { redirect: 'follow' });
      console.log(`[HTTP ${res.status}] ${t} -> ${res.url} (${res.headers.get('content-type') || 'unknown'})`);
    } catch (e) {
      console.log(`[WAIT/DNS] ${t}: ${e.message}`);
    }
  }
}

testDomain();
