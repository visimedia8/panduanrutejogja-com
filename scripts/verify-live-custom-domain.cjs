const https = require('https');

function fetchHost(host, path = '/') {
  return new Promise((resolve, reject) => {
    const req = https.request({
      host: '104.21.94.27',
      port: 443,
      path: path,
      method: 'GET',
      servername: host,
      headers: {
        Host: host,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const titleMatch = data.match(/<title>(.*?)<\/title>/);
        resolve({
          status: res.statusCode,
          headers: res.headers,
          title: titleMatch ? titleMatch[1] : (data.substring(0, 40) + '...'),
          length: data.length
        });
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function run() {
  const targets = [
    { host: 'panduanrutejogja.com', path: '/' },
    { host: 'panduanrutejogja.com', path: '/kategori/trans-jogja/' },
    { host: 'panduanrutejogja.com', path: '/kategori/kereta-bandara/' },
    { host: 'panduanrutejogja.com', path: '/kategori/tiket-wisata/' },
    { host: 'panduanrutejogja.com', path: '/panduan/jadwal-tarif-krl-commuter-line-jogja-solo-terbaru/' },
    { host: 'panduanrutejogja.com', path: '/panduan/jam-buka-fasilitas-penitipan-barang-stasiun-tugu/' },
    { host: 'panduanrutejogja.com', path: '/panduan/rute-jadwal-trans-jogja-koridor-2a-condongcatur-jombor/' },
    { host: 'panduanrutejogja.com', path: '/panduan/panduan-rute-trans-jogja-koridor-5a-5b-ring-road/' },
    { host: 'panduanrutejogja.com', path: '/panduan/transportasi-umum-pantai-parangtritis-terminal-giwangan/' },
    { host: 'panduanrutejogja.com', path: '/tentang/' },
    { host: 'panduanrutejogja.com', path: '/redaksi/' },
    { host: 'panduanrutejogja.com', path: '/kontak/' },
    { host: 'panduanrutejogja.com', path: '/sitemap.xml' },
    { host: 'panduanrutejogja.com', path: '/robots.txt' }
  ];

  console.log('Testing live custom domain endpoints on Cloudflare edge...');
  let allPass = true;
  for (const t of targets) {
    try {
      const res = await fetchHost(t.host, t.path);
      const isOk = res.status === 200;
      console.log(`[HTTP ${res.status}] https://${t.host}${t.path} -> ${res.title} (${res.length} bytes, server: ${res.headers['server']})`);
      if (!isOk) allPass = false;
    } catch(e) {
      console.error(`[FAIL] https://${t.host}${t.path}: ${e.message}`);
      allPass = false;
    }
  }

  if (allPass) {
    console.log('\n>>> ALL PRODUCTION ENDPOINTS RETURNED HTTP 200 OK. ZERO DEFECTS. <<<');
  } else {
    process.exit(1);
  }
}

run();
