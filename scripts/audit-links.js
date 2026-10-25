import fs from 'fs';
import path from 'path';

const dist = path.join(process.cwd(), 'dist');

function getAllFiles(dir, exts, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, exts, fileList);
    } else if (exts.some(ext => file.endsWith(ext))) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const htmlFiles = getAllFiles(dist, ['.html']);
const broken = [];
let checked = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.matchAll(/href="([^"#]+)(#[^"]*)?"/g);
  for (const match of matches) {
    const h = match[1];
    if (h.startsWith('http') || h.startsWith('mailto:') || h.startsWith('tel:') || h.startsWith('javascript:')) continue;
    checked++;
    let target = path.join(dist, h.startsWith('/') ? h.slice(1) : h);
    if (target.endsWith('/') || !path.extname(target)) {
      const targetIndex = path.join(target, 'index.html');
      const targetHtml = target + '.html';
      if (fs.existsSync(targetIndex)) {
        target = targetIndex;
      } else if (fs.existsSync(targetHtml)) {
        target = targetHtml;
      }
    }
    if (!fs.existsSync(target)) {
      broken.push({ from: path.relative(dist, file), to: h, resolved: path.relative(dist, target) });
    }
  }
});

console.log('Total checked internal links: ' + checked);
console.log('Broken internal links: ' + broken.length);
if (broken.length > 0) {
  console.log('Details:', broken);
}
