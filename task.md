# Task List: PanduanRuteJogja.com — Forensic AdSense Stress Test & Remediation (/goal)

## Status Overview
- **Goal**: Full-spectrum forensic stress test to uncover and remediate all rejection vectors by Google AdSense (2025/2026 Standards).
- **Result**: **11/11 Verification Vectors Passed with 0 Failure & 0 Risk**.
  - File `public/ads.txt` deployed to root domain with compliant publisher format.
  - `robots.txt` explicitly whitelists `Mediapartners-Google`, `AdsBot-Google`, and `Googlebot`.
  - All 20 articles expanded to **974 words on average of pure narrative prose** (Zero Thin Content, no article < 800 words).
  - Prominent **Transit Disclaimer & Anti-Misrepresentation Notice** box active on all article pages.
  - Interactive **Rekomendasi Panduan Rute Terkait** (Related Articles grid) active across all 20 guides (Zero navigation dead-ends).
  - 100% Internal Link Integrity: 0 broken links across all 30 HTML pages.
  - All Schema JSON-LD syntactically valid JSON.
  - AdSense `<meta name="google-adsense-account">` active in `<head>`.
  - Interactive Cookie Consent Banner (Consent Mode v2) active with `localStorage`.
  - Static HTTP Probe: 16/16 endpoints returned HTTP 200 OK.

---

## Detailed Remediation Breakdown

### Step 1: Root Domain `ads.txt` Deployment <!-- id: 301 -->
- [x] Create `public/ads.txt` with formatted Google AdSense line `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0` <!-- id: 302 -->
- [x] Verify `dist/ads.txt` builds cleanly into static output <!-- id: 303 -->

### Step 2: Crawler Directive Hardening (`robots.txt.ts`) <!-- id: 304 -->
- [x] Add explicit `User-agent: Mediapartners-Google` and `User-agent: AdsBot-Google` `Allow: /` <!-- id: 305 -->
- [x] Whitelist `Googlebot` and verify XML sitemap reference <!-- id: 306 -->

### Step 3: Pure Narrative Prose Expansion (16 Articles) <!-- id: 307 -->
- [x] Expand 16 articles with local operational transit knowledge, peak hours tips, refund rules, and accessibility <!-- id: 308 -->
- [x] Assert in `dist/` that all 20 guides exceed 800 pure narrative words inside `<article class="prose-transit">` (average 974 words) <!-- id: 309 -->

### Step 4: Transit Disclaimer & Anti-Misrepresentation Safeguards <!-- id: 310 -->
- [x] Add prominent Amber Notice in `src/layouts/ArticleLayout.astro` clarifying independent portal status <!-- id: 311 -->
- [x] Emphasize Dishub DIY / PT KAI independent disclaimer in Footer and About page <!-- id: 312 -->

### Step 5: Related Articles Navigation (Anti-Dead End UX) <!-- id: 313 -->
- [x] Inject dynamic `relatedArticles` in `src/pages/panduan/[slug].astro` <!-- id: 314 -->
- [x] Render 3-card responsive grid of related transit guides in `src/layouts/ArticleLayout.astro` <!-- id: 315 -->

### Step 6: Full Build & Forensic Re-Verification <!-- id: 316 -->
- [x] Run `npm run build` (30 pages compiled in 5.07s) <!-- id: 317 -->
- [x] Execute `scripts/adsense-stress-test.js` (11/11 vectors PASS, 0 FAIL) <!-- id: 318 -->
- [x] Execute `scripts/probe-static.js` (16/16 HTTP 200 OK) <!-- id: 319 -->
