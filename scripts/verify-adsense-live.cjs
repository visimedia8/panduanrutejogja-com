const https = require('https');

function test(path, expect) {
  return new Promise((resolve) => {
    const req = https.request({
      host: '104.21.94.27',
      port: 443,
      path: path,
      method: 'GET',
      servername: 'panduanrutejogja.com',
      headers: {
        Host: 'panduanrutejogja.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        const ok = d.includes(expect);
        console.log(`[HTTP ${res.statusCode}] https://panduanrutejogja.com${path} -> contains "${expect}": ${ok}`);
        resolve(ok && res.statusCode === 200);
      });
    });
    req.on('error', err => {
      console.error(`Error fetching ${path}:`, err.message);
      resolve(false);
    });
    req.end();
  });
}

async function main() {
  console.log('Verifying live AdSense deployment on https://panduanrutejogja.com...');
  const res1 = await test('/ads.txt', 'google.com, pub-4090835276472949, DIRECT, f08c47fec0942fa0');
  const res2 = await test('/', 'ca-pub-4090835276472949');
  const res3 = await test('/', '<meta name="google-adsense-account" content="ca-pub-4090835276472949">');
  const res4 = await test('/', 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4090835276472949');
  
  if (res1 && res2 && res3 && res4) {
    console.log('\n>>> SUCCESS: ALL ADSENSE VERIFICATION TAGS ARE LIVE ON PRODUCTION! <<<');
  } else {
    console.error('\n>>> FAILED: Some tags are missing or failed to fetch. <<<');
    process.exit(1);
  }
}

main();
