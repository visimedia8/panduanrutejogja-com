const fs = require('fs');
const path = require('path');

const dir = 'src/content/panduan';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const results = [];

for (const f of files) {
  const raw = fs.readFileSync(path.join(dir, f), 'utf-8');
  const parts = raw.split('---');
  const body = parts.slice(2).join('---').trim();
  const words = body.split(/\s+/).filter(Boolean).length;
  const hasTable = body.includes('|') && body.includes('---');
  const timestamps = (body.match(/\b\d{1,2}[:.]\d{2}\b/g) || []);
  const titleMatch = raw.match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : f;
  const promisesJadwal = /jadwal|jam|waktu/i.test(title);

  results.push({
    file: f,
    title,
    words,
    promisesJadwal,
    hasTable,
    timestampCount: timestamps.length,
    isThinByKoray: (promisesJadwal && !hasTable) || words < 1000
  });
}

console.log(JSON.stringify(results, null, 2));
