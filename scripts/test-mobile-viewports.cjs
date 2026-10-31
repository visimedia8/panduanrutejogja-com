const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

// Simple static file server
function serveDist(port) {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.json': 'application/json'
  };

  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath === '/404' || reqPath === '/404/') {
      reqPath = '/404.html';
    } else if (reqPath.endsWith('/')) {
      reqPath += 'index.html';
    } else if (!path.extname(reqPath)) {
      reqPath += '/index.html';
    }

    const filePath = path.join(process.cwd(), 'dist', reqPath);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

const VIEWPORTS = [
  { name: 'Ultra-Small Mobile (iPhone SE 1st)', width: 320, height: 568 },
  { name: 'Standard Android (Galaxy S20)', width: 360, height: 800 },
  { name: 'Standard iPhone (iPhone 8/SE2)', width: 375, height: 667 }
];

const PAGES_TO_TEST = [
  '/',
  '/kategori/trans-jogja/',
  '/kategori/kereta-bandara/',
  '/kategori/tiket-wisata/',
  '/tentang/',
  '/redaksi/',
  '/kontak/',
  '/privacy/',
  '/terms/',
  '/404/',
  '/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo/',
  '/panduan/jadwal-tarif-krl-commuter-line-jogja-solo-terbaru/',
  '/panduan/panduan-rute-angkutan-umum-jogja-candi-borobudur/',
  '/panduan/transportasi-umum-pantai-parangtritis-terminal-giwangan/',
  '/panduan/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro/',
  '/panduan/cara-beli-tiket-krl-jogja-solo-access-kai-gotransit/',
  '/panduan/cara-pembayaran-trans-jogja-emoney-qris-tunai/',
  '/panduan/jam-buka-fasilitas-penitipan-barang-stasiun-tugu/'
];

async function run() {
  const PORT = 4399;
  const server = await serveDist(PORT);
  console.log(`Server started on http://127.0.0.1:${PORT}`);

  const browser = await chromium.launch();
  const results = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n========================================`);
    console.log(`TESTING VIEWPORT: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    });

    for (const urlPath of PAGES_TO_TEST) {
      await page.goto(`http://127.0.0.1:${PORT}${urlPath}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(100);

      const audit = await page.evaluate((vpWidth) => {
        const docWidth = document.documentElement.scrollWidth;
        const bodyWidth = document.body.scrollWidth;
        const windowWidth = window.innerWidth;
        const hasOverflow = docWidth > windowWidth || bodyWidth > windowWidth;

        let overflowingElements = [];
        if (hasOverflow) {
          const allEls = document.querySelectorAll('*');
          allEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.right > windowWidth + 1) {
              const tag = el.tagName.toLowerCase();
              const cls = el.className && typeof el.className === 'string' ? el.className.slice(0, 60) : '';
              const id = el.id ? `#${el.id}` : '';
              overflowingElements.push({
                selector: `${tag}${id}${cls ? '.' + cls.split(' ').join('.') : ''}`,
                right: Math.round(rect.right),
                excess: Math.round(rect.right - windowWidth)
              });
            }
          });
        }

        return {
          windowWidth,
          docWidth,
          bodyWidth,
          hasOverflow,
          overflowAmount: Math.max(0, docWidth - windowWidth, bodyWidth - windowWidth),
          topOffenders: overflowingElements.slice(0, 5)
        };
      }, vp.width);

      if (audit.hasOverflow) {
        console.log(`❌ [OVERFLOW] ${urlPath}`);
        console.log(`   Screen: ${vp.width}px | Page Width: ${audit.docWidth}px (Overflow: +${audit.overflowAmount}px)`);
        audit.topOffenders.forEach(o => {
          console.log(`   -> Offender: <${o.selector}> exceeds right edge by +${o.excess}px`);
        });
        results.push({ viewport: vp.name, path: urlPath, overflow: audit.overflowAmount, offenders: audit.topOffenders });
      } else {
        console.log(`✅ [FIT OK] ${urlPath} (Width: ${audit.docWidth}px / ${vp.width}px)`);
      }
    }

    await page.close();
  }

  await browser.close();
  server.close();

  console.log(`\n========================================`);
  console.log(`SUMMARY: ${results.length} total responsive violations detected across viewports.`);
  console.log(`========================================`);
}

run();
