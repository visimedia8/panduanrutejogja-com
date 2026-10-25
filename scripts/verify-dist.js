import fs from 'fs';
import path from 'path';

const distDir = path.join(process.cwd(), 'dist');

console.log('=== VERIFYING DIST OUTPUT ===');

// 1. Check sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  console.log(`[PASS] sitemap.xml exists with ${urlMatches.length} URLs.`);
} else {
  console.error('[FAIL] sitemap.xml not found!');
}

// 2. Check robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  console.log('[PASS] robots.txt exists:\n' + robotsContent);
} else {
  console.error('[FAIL] robots.txt not found!');
}

// 3. Check legal pages
const legalPages = ['tentang', 'kontak', 'privacy', 'terms'];
legalPages.forEach(p => {
  const filePath = path.join(distDir, p, 'index.html');
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const hasCanonical = html.includes(`rel="canonical"`);
    console.log(`[PASS] Legal page /${p} exists (hasCanonical: ${hasCanonical}, length: ${html.length} chars).`);
  } else {
    console.error(`[FAIL] Legal page /${p} missing!`);
  }
});

// 4. Check an article HTML for JSON-LD schemas
const sampleArticle = path.join(distDir, 'panduan', 'rute-halte-trans-jogja-koridor-1a-prambanan-malioboro', 'index.html');
if (fs.existsSync(sampleArticle)) {
  const html = fs.readFileSync(sampleArticle, 'utf8');
  const hasArticleSchema = html.includes('"@type":"Article"');
  const hasFaqSchema = html.includes('"@type":"FAQPage"');
  const hasBreadcrumbSchema = html.includes('"@type":"BreadcrumbList"');
  const hasHalteTable = html.includes('Daftar Halte');
  const hasAdSlot = html.includes('adsbygoogle');
  console.log(`[PASS] Sample Article rute-halte-trans-jogja-koridor-1a-prambanan-malioboro:`);
  console.log(`       - Article Schema: ${hasArticleSchema}`);
  console.log(`       - FAQ Schema: ${hasFaqSchema}`);
  console.log(`       - Breadcrumb Schema: ${hasBreadcrumbSchema}`);
  console.log(`       - Halte Table: ${hasHalteTable}`);
  console.log(`       - AdSense Slots: ${hasAdSlot}`);
} else {
  console.error('[FAIL] Sample article not found!');
}

console.log('=== VERIFICATION COMPLETED ===');
