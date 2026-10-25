import fs from 'fs';
import path from 'path';

console.log('=== DEEP STRESS TEST AUDIT ===');

// 1. Check Canonical vs Sitemap Trailing Slashes
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

const tentangHtml = fs.readFileSync('dist/tentang/index.html', 'utf8');
const canonicalMatch = tentangHtml.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
const tentangCanonical = canonicalMatch ? canonicalMatch[1] : null;

const articleHtml = fs.readFileSync('dist/panduan/rute-halte-trans-jogja-koridor-1a-prambanan-malioboro/index.html', 'utf8');
const articleMatch = articleHtml.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
const articleCanonical = articleMatch ? articleMatch[1] : null;

console.log('Sitemap URL (/tentang):', sitemapUrls.find(u => u.includes('tentang')));
console.log('HTML Canonical (/tentang):', tentangCanonical);
console.log('Match?', sitemapUrls.find(u => u.includes('tentang')) === tentangCanonical ? 'YES' : 'NO MISMATCH!');

console.log('Sitemap URL (Article 1A):', sitemapUrls.find(u => u.includes('rute-halte-trans-jogja-koridor-1a-prambanan-malioboro')));
console.log('HTML Canonical (Article 1A):', articleCanonical);
console.log('Match?', sitemapUrls.find(u => u.includes('rute-halte-trans-jogja-koridor-1a-prambanan-malioboro')) === articleCanonical ? 'YES' : 'NO MISMATCH!');

// 2. Text Similarity across articles (Jaccard similarity on word 3-grams)
function getTrigrams(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const trigrams = new Set();
  for (let i = 0; i < words.length - 2; i++) {
    trigrams.add(`${words[i]} ${words[i+1]} ${words[i+2]}`);
  }
  return trigrams;
}

function jaccard(setA, setB) {
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const dir = 'src/content/panduan';
const files = fs.readdirSync(dir);
const articleTrigrams = files.map(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const body = content.replace(/^---[\s\S]*?---\s*/, '');
  return { file: f, trigrams: getTrigrams(body) };
});

let highestSim = 0;
let highestPair = [];

for (let i = 0; i < articleTrigrams.length; i++) {
  for (let j = i + 1; j < articleTrigrams.length; j++) {
    const sim = jaccard(articleTrigrams[i].trigrams, articleTrigrams[j].trigrams);
    if (sim > highestSim) {
      highestSim = sim;
      highestPair = [articleTrigrams[i].file, articleTrigrams[j].file];
    }
  }
}

console.log(`Max Jaccard Trigram Similarity between any 2 articles: ${(highestSim * 100).toFixed(1)}% (${highestPair.join(' vs ')})`);

// 3. Check Cookie Consent Banner in HTML
const indexHtml = fs.readFileSync('dist/index.html', 'utf8');
const hasCookieBanner = indexHtml.toLowerCase().includes('cookie') && (indexHtml.includes('consent') || indexHtml.includes('setuju') || indexHtml.includes('kebijakan cookie'));
console.log('Has visible Cookie Consent Banner in HTML:', hasCookieBanner);

// 4. Check AdSense Site Verification Meta Tag / Script in <head>
const hasAdSenseAccountMeta = indexHtml.includes('google-adsense-account');
const hasAdSenseScript = indexHtml.includes('pagead2.googlesyndication.com');
console.log('Has Google AdSense Account Verification Tag in <head>:', hasAdSenseAccountMeta || hasAdSenseScript);

// 5. Check Image formats in OpenGraph tags
const ogImageMatch = indexHtml.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
console.log('OG Image URL:', ogImageMatch ? ogImageMatch[1] : 'NONE');
const isSvgOgImage = ogImageMatch && ogImageMatch[1].endsWith('.svg');
console.log('Is OG Image an SVG file? (SVG fails on WhatsApp/FB/Twitter preview):', isSvgOgImage);
