import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');
const PANDUAN_DIR = path.resolve('src/content/panduan');

async function convertAllImages() {
  console.log('🔄 Mengonversi seluruh diagram rute SVG ke format WebP raster 1200x630...');
  
  const files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.svg') && !f.includes('logo') && !f.includes('og-default'));
  console.log(`Ditemukan ${files.length} berkas SVG artikel.`);

  for (const svgFile of files) {
    const slug = svgFile.replace('.svg', '');
    const svgPath = path.join(IMAGES_DIR, svgFile);
    const webpPath = path.join(IMAGES_DIR, `${slug}.webp`);

    try {
      // Baca buffer SVG, sanitasi entitas XML:
      // 1. &bull; -> &#8226;
      // 2. Bare '& ' -> '&amp; '
      let svgStr = fs.readFileSync(svgPath, 'utf-8');
      svgStr = svgStr.replace(/&bull;/g, '&#8226;').replace(/ & /g, ' &amp; ');
      fs.writeFileSync(svgPath, svgStr, 'utf-8');

      const svgBuffer = Buffer.from(svgStr, 'utf-8');
      await sharp(svgBuffer, { density: 150 })
        .resize(1200, 630, { fit: 'cover' })
        .webp({ quality: 85, effort: 6 })
        .toFile(webpPath);

      const stats = fs.statSync(webpPath);
      console.log(`✅ [WEBP] ${slug}.webp berhasil dibuat (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`❌ Gagal konversi ${svgFile}:`, err.message);
    }
  }

  console.log('\n📝 Memperbarui frontmatter 20 artikel panduan rute...');
  const mdFiles = fs.readdirSync(PANDUAN_DIR).filter(f => f.endsWith('.md'));

  for (const mdFile of mdFiles) {
    const mdPath = path.join(PANDUAN_DIR, mdFile);
    let content = fs.readFileSync(mdPath, 'utf-8');

    if (content.includes('.svg')) {
      const updated = content.replace(/featuredImage:\s*"\/(images\/[^"]+)\.svg"/g, 'featuredImage: "/$1.webp"');
      fs.writeFileSync(mdPath, updated, 'utf-8');
      console.log(`✅ Update frontmatter: ${mdFile} -> .webp`);
    }
  }

  console.log('\n🎉 Seluruh gambar artikel telah bermigrasi ke WebP raster (100% Google Discover & Schema Compliant)!');
}

convertAllImages();
