# Task List: PanduanRuteJogja.com — Yogyakarta Heritage Transit Redesign (/goal)

## Status Overview
- **Goal**: Upgrade website design to industry-specific "Yogyakarta Heritage Transit Pass" system for maximum Google AdSense approval rate and world-class commuter utility.
- **Visual Direction**: Keraton Deep Emerald (`#144234`), Malioboro Plang Signage Motif, Transit Line Badges (`1A`, `2A`, `KRL`, `YIA`), Subway Vertical Halte Track, High-Contrast Alabaster (`#FBFBF9`), and Ticket-Pass Card UI.
- **AdSense Optimization**: Eliminates generic AI/MFA blog appearance, proves human-crafted regional authenticity, ensures WCAG AAA outdoor contrast, and structures distinct non-intrusive Ad containers.
- **Result**: **100% Deployed & Live Verified on Production (HTTP 200 OK)**.

---

## Detailed Execution Steps

### Step 1: Design Tokens & Styling Foundation <!-- id: 401 -->
- [x] Configure authentic transit & heritage palette in `tailwind.config.mjs` (Keraton Forest, Jogja Gold/Amber, Transit Line Colors, Paper Alabaster) <!-- id: 402 -->
- [x] Update `src/styles/global.css` with plang signage borders, ticket punch-notches, and subway line vertical connectors <!-- id: 403 -->

### Step 2: Global Navigation & Plang Signage Header <!-- id: 404 -->
- [x] Redesign `src/components/Header.astro` with heritage plang styling, official verification beacon, and commuter quick-jump hubs <!-- id: 405 -->
- [x] Redesign `src/components/Footer.astro` with deep keraton container, official transit disclaimer, and editorial credentials <!-- id: 406 -->

### Step 3: Homepage High-Utility Redesign (`src/pages/index.astro`) <!-- id: 407 -->
- [x] Replace generic hero with Transit Departure Board & Station Hub Navigator (Malioboro, Tugu, YIA, Giwangan) <!-- id: 408 -->
- [x] Redesign Category Cards into Transit Pass tokens with punch-hole borders and fare highlights <!-- id: 409 -->
- [x] Redesign 20-Route Directory cards with authentic color-coded Line Badges (`1A`, `2A`, `KRL`, `YIA`), intervals, and transfer hubs <!-- id: 410 -->

### Step 4: Article Layout & Transit Subway Track (`src/layouts/ArticleLayout.astro` & `src/components/HalteTable.astro`) <!-- id: 411 -->
- [x] Implement Transit Plang Header and Fast-Facts Route Summary Box at the top of every guide <!-- id: 412 -->
- [x] Transform `src/components/HalteTable.astro` into a visual subway-style stop timeline track with interchange nodes <!-- id: 413 -->
- [x] Refine Transit Disclaimer box and Related Routes ticket grid <!-- id: 414 -->

### Step 5: Category & Legal Pages Polish <!-- id: 415 -->
- [x] Polish `src/pages/kategori/[category].astro` with category route maps and line badges <!-- id: 416 -->
- [x] Ensure `tentang`, `redaksi`, `kontak`, `privacy`, and `terms` match the new visual identity <!-- id: 417 -->

### Step 6: Build, Stress Test & Cloudflare Production Deployment <!-- id: 418 -->
- [x] Execute `npm run build` and assert 30 pages compile with 0 errors <!-- id: 419 -->
- [x] Run `node scripts/adsense-stress-test.js` to ensure 11/11 compliance vectors pass <!-- id: 420 -->
- [x] Deploy static build to Cloudflare Pages `emb` via Wrangler CLI <!-- id: 421 -->
- [x] Run `node scripts/verify-live-custom-domain.cjs` to confirm live production HTTP 200 on `https://panduanrutejogja.com/` <!-- id: 422 -->
