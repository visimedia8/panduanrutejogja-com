const fs = require('fs');

console.log('--- AUDITING DIST OUTPUT ---');

// 1. Check article HTML
const htmlTugu = fs.readFileSync('dist/panduan/cara-naik-ka-bandara-yia-stasiun-tugu-kulon-progo/index.html', 'utf8');
console.log('Tugu Geo Meta Tags:', htmlTugu.match(/<meta name="geo\.[^>]+>/g));
console.log('Tugu ICBM:', htmlTugu.match(/<meta name="ICBM"[^>]+>/g));
console.log('Tugu has infografis-boarding.webp:', htmlTugu.includes('infografis-boarding-ka-bandara-tugu.webp'));
console.log('Tugu has Schema contentLocation:', htmlTugu.includes('contentLocation') && htmlTugu.includes('GeoCoordinates'));

// 2. Check category HTML
const htmlCat = fs.readFileSync('dist/kategori/trans-jogja/index.html', 'utf8');
console.log('Category has peta-jaringan-trans-jogja.webp:', htmlCat.includes('peta-jaringan-trans-jogja.webp'));

// 3. Check redaksi & tentang
const htmlRedaksi = fs.readFileSync('dist/redaksi/index.html', 'utf8');
console.log('Redaksi has infografis-sop:', htmlRedaksi.includes('infografis-sop-verifikasi-lapangan.webp'));

const htmlTentang = fs.readFileSync('dist/tentang/index.html', 'utf8');
console.log('Tentang has peta-cakupan:', htmlTentang.includes('peta-cakupan-observasi-diy.webp'));

// 4. Check KRL, Borobudur, Parangtritis articles
const htmlKrl = fs.readFileSync('dist/panduan/jadwal-tarif-krl-commuter-line-jogja-solo-terbaru/index.html', 'utf8');
console.log('KRL has diagram-13-stasiun:', htmlKrl.includes('diagram-13-stasiun-krl-jogja-solo.webp'));

const htmlBorobudur = fs.readFileSync('dist/panduan/panduan-rute-angkutan-umum-jogja-candi-borobudur/index.html', 'utf8');
console.log('Borobudur has peta-rute-estafet:', htmlBorobudur.includes('peta-rute-estafet-borobudur.webp'));

const htmlParangtritis = fs.readFileSync('dist/panduan/transportasi-umum-pantai-parangtritis-terminal-giwangan/index.html', 'utf8');
console.log('Parangtritis has peta-koridor-selatan:', htmlParangtritis.includes('peta-koridor-selatan-parangtritis.webp'));

console.log('--- ALL DIST CHECKS COMPLETED ---');
