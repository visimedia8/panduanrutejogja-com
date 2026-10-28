const https = require('https');

const BASE_URL = 'https://panduanrutejogja.com';

const urls = [
  '/',
  '/kategori/trans-jogja/',
  '/kategori/kereta-bandara/',
  '/kategori/tiket-wisata/',
  '/tentang/',
  '/redaksi/',
  '/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo/',
  '/panduan/jadwal-tarif-krl-commuter-line-jogja-solo-terbaru/',
  '/panduan/panduan-rute-angkutan-umum-jogja-candi-borobudur/',
  '/panduan/transportasi-umum-pantai-parangtritis-terminal-giwangan/',
  '/images/peta-jaringan-trans-jogja.webp',
  '/images/skematik-multimoda-rel-jogja.webp',
  '/images/panduan-tiket-wisata-jogja.webp',
  '/images/infografis-boarding-ka-bandara-tugu.webp',
  '/images/diagram-13-stasiun-krl-jogja-solo.webp',
  '/images/peta-rute-estafet-borobudur.webp',
  '/images/peta-koridor-selatan-parangtritis.webp',
  '/images/peta-cakupan-observasi-diy.webp',
  '/images/infografis-sop-verifikasi-lapangan.webp'
];

function fetchUrl(path) {
  return new Promise((resolve) => {
    const fullUrl = `${BASE_URL}${path}`;
    https.get(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          contentType: res.headers['content-type'],
          contentLength: res.headers['content-length'] || data.length,
          bodySnippet: data.slice(0, 300),
          fullBody: data
        });
      });
    }).on('error', (err) => {
      resolve({ path, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  console.log(`Starting live DoD audit on ${BASE_URL}...\n`);
  let successCount = 0;
  let total = urls.length;

  for (const path of urls) {
    const res = await fetchUrl(path);
    const isSuccess = res.status === 200;
    if (isSuccess) successCount++;
    console.log(`[${isSuccess ? 'PASS' : 'FAIL'}] ${res.status} | ${path} (${res.contentType || 'unknown'})`);
  }

  console.log(`\n--- CONTENT & GEO-TAGGING VERIFICATION ---`);
  // Inspect specific live pages for geo tags & images
  const tuguRes = await fetchUrl('/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo/');
  const hasGeoRegion = tuguRes.fullBody.includes('name="geo.region" content="ID-YO"');
  const hasGeoPlace = tuguRes.fullBody.includes('name="geo.placename"');
  const hasICBM = tuguRes.fullBody.includes('name="ICBM"');
  const hasContentLocation = tuguRes.fullBody.includes('contentLocation') && tuguRes.fullBody.includes('GeoCoordinates');
  const hasInArticleImage = tuguRes.fullBody.includes('infografis-boarding-ka-bandara-tugu.webp');

  console.log(`Live Tugu Article Geo Region: ${hasGeoRegion ? 'OK' : 'MISSING'}`);
  console.log(`Live Tugu Article Geo Placename: ${hasGeoPlace ? 'OK' : 'MISSING'}`);
  console.log(`Live Tugu Article ICBM: ${hasICBM ? 'OK' : 'MISSING'}`);
  console.log(`Live Tugu Article Schema GeoCoordinates: ${hasContentLocation ? 'OK' : 'MISSING'}`);
  console.log(`Live Tugu Article WebP Infographic: ${hasInArticleImage ? 'OK' : 'MISSING'}`);

  const catRes = await fetchUrl('/kategori/trans-jogja/');
  console.log(`Live Category Wayfinding Banner: ${catRes.fullBody.includes('peta-jaringan-trans-jogja.webp') ? 'OK' : 'MISSING'}`);

  const redaksiRes = await fetchUrl('/redaksi/');
  console.log(`Live Redaksi SOP Infographic: ${redaksiRes.fullBody.includes('infografis-sop-verifikasi-lapangan.webp') ? 'OK' : 'MISSING'}`);

  console.log(`\nRESULT: ${successCount}/${total} URLs returned HTTP 200.`);
  if (successCount === total && hasGeoRegion && hasContentLocation) {
    console.log(`\n>>> DEFINITION OF DONE: 100% VERIFIED LIVE IN PRODUCTION <<<`);
  } else {
    console.error(`\n>>> AUDIT FAILED OR INCOMPLETE <<<`);
    process.exit(1);
  }
}

run();
