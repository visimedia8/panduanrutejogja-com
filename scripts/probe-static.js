import http from 'http';
import fs from 'fs';
import path from 'path';

const dist = path.join(process.cwd(), 'dist');
const PORT = 4321;

// Simple static server for testing dist output
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.css': 'text/css',
  '.js': 'application/javascript'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath.endsWith('/')) reqPath += 'index.html';
  else if (!path.extname(reqPath)) {
    if (fs.existsSync(path.join(dist, reqPath, 'index.html'))) {
      reqPath = path.join(reqPath, 'index.html');
    }
  }

  const filePath = path.join(dist, reqPath);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, async () => {
  console.log(`Probe server running on http://127.0.0.1:${PORT}`);
  
  const endpoints = [
    '/',
    '/kategori/trans-jogja',
    '/kategori/kereta-bandara',
    '/kategori/tiket-wisata',
    '/panduan/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro',
    '/panduan/jadwal-tarif-krl-commuter-line-jogja-solo-terbaru',
    '/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo',
    '/panduan/cara-pembayaran-trans-jogja-emoney-qris-tunai',
    '/tentang',
    '/redaksi',
    '/kontak',
    '/privacy',
    '/terms',
    '/404.html',
    '/robots.txt',
    '/sitemap.xml'
  ];

  let successCount = 0;
  for (const ep of endpoints) {
    try {
      const resp = await fetch(`http://127.0.0.1:${PORT}${ep}`);
      const text = await resp.text();
      const status = resp.status;
      const isOk = status === 200 && text.length > 50;
      if (isOk) successCount++;
      console.log(`[${status === 200 ? 'HTTP 200' : 'HTTP ' + status}] ${ep} (${text.length} bytes)`);
    } catch (err) {
      console.error(`[ERROR] ${ep}: ${err.message}`);
    }
  }

  console.log('----------------------------------------------------');
  console.log(`Probe verification: ${successCount} / ${endpoints.length} endpoints PASSED (HTTP 200 OK).`);
  server.close(() => {
    console.log('Probe server stopped cleanly.');
    process.exit(successCount === endpoints.length ? 0 : 1);
  });
});
