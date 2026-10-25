import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const svgPath = path.join(process.cwd(), 'public', 'images', 'og-default.svg');
const pngPath = path.join(process.cwd(), 'public', 'images', 'og-default.png');
const webpPath = path.join(process.cwd(), 'public', 'images', 'og-default.webp');

async function main() {
  const svgBuffer = fs.readFileSync(svgPath);
  
  await sharp(svgBuffer)
    .resize(1200, 630)
    .png({ quality: 90 })
    .toFile(pngPath);
  console.log('Generated og-default.png (1200x630):', fs.statSync(pngPath).size, 'bytes');

  await sharp(svgBuffer)
    .resize(1200, 630)
    .webp({ quality: 85 })
    .toFile(webpPath);
  console.log('Generated og-default.webp (1200x630):', fs.statSync(webpPath).size, 'bytes');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
