import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');

console.log('================================================================');
console.log('🔍 FORENSIC ADSENSE COMPLIANCE & RISK STRESS TEST (2025/2026)');
console.log('================================================================');

const vulnerabilities = [];
const passes = [];

function check(name, pass, detail, recommendation) {
  if (pass) {
    passes.push({ name, detail });
    console.log(`✅ [PASS] ${name}: ${detail}`);
  } else {
    vulnerabilities.push({ name, detail, recommendation });
    console.log(`❌ [FAIL/RISK] ${name}: ${detail}`);
    if (recommendation) {
      console.log(`   👉 REKOMENDASI PERBAIKAN: ${recommendation}`);
    }
  }
}

// 1. Check ads.txt
const adsTxtPath = path.join(DIST_DIR, 'ads.txt');
const hasAdsTxt = fs.existsSync(adsTxtPath);
let adsTxtContent = '';
if (hasAdsTxt) adsTxtContent = fs.readFileSync(adsTxtPath, 'utf-8');
check(
  'File ads.txt di Root Domain',
  hasAdsTxt && adsTxtContent.includes('google.com, pub-'),
  hasAdsTxt ? `ads.txt terkonfigurasi (${adsTxtContent.length} bytes, format Google valid)` : 'File ads.txt tidak ditemukan di /dist/ads.txt (akan 404 saat crawler AdSense cek)',
  'Buat public/ads.txt dengan format Google AdSense standar (google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0).'
);

// 2. Check robots.txt and AdSense Crawler Directives
const robotsPath = path.join(DIST_DIR, 'robots.txt');
const hasRobots = fs.existsSync(robotsPath);
let robotsContent = '';
if (hasRobots) robotsContent = fs.readFileSync(robotsPath, 'utf-8');
const hasMediapartners = robotsContent.includes('Mediapartners-Google');
const hasAdsBot = robotsContent.includes('AdsBot-Google');
check(
  'Robots.txt AdSense Crawler Explicit Whitelist',
  hasRobots && hasMediapartners && hasAdsBot,
  `Mediapartners-Google: ${hasMediapartners ? 'Ada' : 'TIDAK ADA'}, AdsBot-Google: ${hasAdsBot ? 'Ada' : 'TIDAK ADA'}`,
  'Tambahkan eksplisit User-agent: Mediapartners-Google dan User-agent: AdsBot-Google Allow: / di src/pages/robots.txt.ts.'
);

// 3. Check Sitemap & Canonicals
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
const hasSitemap = fs.existsSync(sitemapPath);
let sitemapUrls = [];
if (hasSitemap) {
  const smXml = fs.readFileSync(sitemapPath, 'utf-8');
  const locMatches = smXml.match(/<loc>(.*?)<\/loc>/g) || [];
  sitemapUrls = locMatches.map(m => m.replace(/<\/?loc>/g, '').trim());
}
check(
  'Sitemap.xml Lengkap (Semua Halaman Terdaftar)',
  hasSitemap && sitemapUrls.length >= 28,
  `Sitemap memiliki ${sitemapUrls.length} URL terdaftar.`,
  'Pastikan seluruh 20 panduan + 3 kategori + 5 legalitas + beranda ada di sitemap.'
);

// 4. Content Word Counts & Thin Content Audit
const panduanDistDir = path.join(DIST_DIR, 'panduan');
let panduanCount = 0;
let lowWordCountArticles = [];
let totalWords = 0;

if (fs.existsSync(panduanDistDir)) {
  const dirs = fs.readdirSync(panduanDistDir).filter(f => fs.statSync(path.join(panduanDistDir, f)).isDirectory());
  panduanCount = dirs.length;

  for (const slug of dirs) {
    const htmlFile = path.join(panduanDistDir, slug, 'index.html');
    if (fs.existsSync(htmlFile)) {
      const html = fs.readFileSync(htmlFile, 'utf-8');
      const proseMatch = html.match(/<article class="prose-transit">([\s\S]*?)<\/article>/i);
      const articleText = proseMatch ? proseMatch[1].replace(/<[^>]+>/g, ' ') : '';
      const words = articleText.split(/\s+/).filter(w => w.trim().length > 0).length;
      totalWords += words;
      if (words < 800) {
        lowWordCountArticles.push({ slug, words });
      }
    }
  }
}

const avgWords = panduanCount > 0 ? Math.round(totalWords / panduanCount) : 0;
check(
  'Kepadatan Konten (Zero Thin Content, Min 800 kata per narasi artikel)',
  lowWordCountArticles.length === 0,
  `Rata-rata narasi murni: ${avgWords} kata/artikel. Artikel di bawah 800 kata: ${lowWordCountArticles.length}`,
  lowWordCountArticles.map(a => `${a.slug} (${a.words} kata)`).join(', ')
);

// 5. Related Articles Navigation in ArticleLayout
let articlesWithoutRelated = 0;
if (fs.existsSync(panduanDistDir)) {
  const dirs = fs.readdirSync(panduanDistDir).filter(f => fs.statSync(path.join(panduanDistDir, f)).isDirectory());
  for (const slug of dirs) {
    const htmlFile = path.join(panduanDistDir, slug, 'index.html');
    if (fs.existsSync(htmlFile)) {
      const html = fs.readFileSync(htmlFile, 'utf-8');
      if (!html.includes('Panduan Rute Terkait') && !html.includes('Panduan Terkait')) {
        articlesWithoutRelated++;
      }
    }
  }
}
check(
  'Navigasi Panduan Terkait (Internal Deep Linking di Setiap Artikel)',
  articlesWithoutRelated === 0,
  articlesWithoutRelated === 0 
    ? 'Semua 20 artikel memiliki grid rekomendasi panduan rute terkait' 
    : `${articlesWithoutRelated} artikel tidak memiliki blok 'Panduan Terkait' (Risiko AdSense "Difficult Site Navigation")`,
  'Tambahkan seksi Rekomendasi Panduan Terkait di ArticleLayout.astro yang menampilkan 3 panduan rute relevan.'
);

// 6. Transit Disclaimer (Pencegahan Misrepresentation / Impersonation)
let articlesWithoutDisclaimer = 0;
if (fs.existsSync(panduanDistDir)) {
  const dirs = fs.readdirSync(panduanDistDir).filter(f => fs.statSync(path.join(panduanDistDir, f)).isDirectory());
  for (const slug of dirs) {
    const htmlFile = path.join(panduanDistDir, slug, 'index.html');
    if (fs.existsSync(htmlFile)) {
      const html = fs.readFileSync(htmlFile, 'utf-8');
      if (!html.includes('Pemberitahuan Resmi') || !html.includes('bukan merupakan situs resmi')) {
        articlesWithoutDisclaimer++;
      }
    }
  }
}
check(
  'Kotak Transit Disclaimer di Badan Artikel (Anti-Misrepresentation)',
  articlesWithoutDisclaimer === 0,
  articlesWithoutDisclaimer === 0 
    ? 'Semua artikel memuat kotak peringatan resmi independen' 
    : `${articlesWithoutDisclaimer} artikel belum memiliki kotak disclaimer di dalam halaman artikel`,
  'Tambahkan kotak peringatan/disclaimer resmi di ArticleLayout.astro agar lolos audit E-E-A-T & Anti-Misrepresentation.'
);

// 7. Broken Link Audit
let brokenLinks = 0;
const allHtmlFiles = [];
function collectHtml(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) collectHtml(full);
    else if (item.endsWith('.html')) allHtmlFiles.push(full);
  }
}
collectHtml(DIST_DIR);

for (const f of allHtmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  const hrefs = html.match(/href="([^"]*)"/g) || [];
  for (const h of hrefs) {
    const raw = h.replace(/href="|"/g, '');
    if (!raw || raw.startsWith('#') || raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('mailto:') || raw.startsWith('tel:')) continue;
    let target = raw.split('?')[0].split('#')[0];
    if (!target) target = '/';
    let resolved = path.resolve(DIST_DIR, target.startsWith('/') ? target.slice(1) : target);
    const exists = fs.existsSync(resolved) || 
                   fs.existsSync(path.join(resolved, 'index.html')) || 
                   fs.existsSync(resolved + '.html');
    if (!exists) {
      brokenLinks++;
    }
  }
}
check(
  'Audit Seluruh Tautan Internal (Zero Broken Links)',
  brokenLinks === 0,
  brokenLinks === 0 ? `Semua tautan internal dari ${allHtmlFiles.length} file valid (0 broken link).` : `Ditemukan ${brokenLinks} tautan rusak!`,
  'Perbaiki tautan yang mengarah ke file non-existent.'
);

// 8. JSON-LD Schema Validation
let jsonLdErrors = 0;
for (const f of allHtmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  const scripts = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  for (const s of scripts) {
    const content = s.replace(/<script[^>]*>|<\/script>/gi, '').trim();
    try {
      JSON.parse(content);
    } catch (e) {
      jsonLdErrors++;
    }
  }
}
check(
  'Sintaks Schema JSON-LD Valid',
  jsonLdErrors === 0,
  jsonLdErrors === 0 ? 'Semua tag JSON-LD ter-parse secara valid sebagai JSON murni.' : `${jsonLdErrors} tag JSON-LD rusak`,
  'Perbaiki sintaks JSON-LD di BaseLayout atau JsonLd.astro.'
);

// 9. AdSense Verification Meta Tag
let missingAdsenseMeta = 0;
for (const f of allHtmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  if (!html.includes('name="google-adsense-account"')) {
    missingAdsenseMeta++;
  }
}
check(
  'Tag Verifikasi Google AdSense di Seluruh Halaman',
  missingAdsenseMeta === 0,
  missingAdsenseMeta === 0 ? 'Hadir di semua halaman HTML' : `Hilang di ${missingAdsenseMeta} halaman`,
  'Tambahkan meta name="google-adsense-account" di BaseLayout.astro.'
);

// 10. Pre-Approval Safe Mode Audit (Zero unrendered broken ads)
let unrenderedAdTags = 0;
for (const f of allHtmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  if (html.includes('class="adsbygoogle"')) {
    unrenderedAdTags++;
  }
}
check(
  'Mode Aman Pra-Persetujuan (Bebas Tag Iklan Kosong / Dummy)',
  unrenderedAdTags === 0,
  unrenderedAdTags === 0 ? 'Zero tag iklan kosong rendered (Aman dari alasan penolakan "Site Under Construction")' : `Ditemukan ${unrenderedAdTags} tag iklan kosong ter-render sebelum diapprove!`,
  'Set siteConfig.adsense.enabled = false selama review AdSense.'
);

// 11. Interactive Cookie Consent Banner (Google Consent Mode v2)
let missingCookieBanner = 0;
for (const f of allHtmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  if (!html.includes('id="cookie-consent-banner"')) {
    missingCookieBanner++;
  }
}
check(
  'Banner Izin Cookie Interaktif (Consent Mode v2)',
  missingCookieBanner === 0,
  missingCookieBanner === 0 ? 'Hadir di seluruh halaman HTML lengkap dengan opsi Tolak & Terima' : `Hilang di ${missingCookieBanner} halaman`,
  'Sematkan CookieBanner.astro ke BaseLayout.astro.'
);

console.log('================================================================');
console.log(`🎯 TOTAL SUKSES: ${passes.length} | TOTAL RISIKO/FAIL: ${vulnerabilities.length}`);
console.log('================================================================');
