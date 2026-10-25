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
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
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
    { host: 'panduanrutejogja.com', path: '/ads.txt' },
    { host: 'panduanrutejogja.com', path: '/robots.txt' },
    { host: 'panduanrutejogja.com', path: '/sitemap.xml' },
    { host: 'panduanrutejogja.com', path: '/kategori/trans-jogja/' },
    { host: 'panduanrutejogja.com', path: '/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo/' },
    { host: 'www.panduanrutejogja.com', path: '/' }
  ];

  console.log('Testing live custom domain endpoints on Cloudflare edge...');
  for (const t of targets) {
    try {
      const res = await fetchHost(t.host, t.path);
      console.log(`[HTTP ${res.status}] https://${t.host}${t.path} -> ${res.title} (${res.length} bytes, server: ${res.headers['server']})`);
    } catch(e) {
      console.error(`[FAIL] https://${t.host}${t.path}: ${e.message}`);
    }
  }
}
run();
