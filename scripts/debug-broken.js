import fs from 'fs';
import path from 'path';

const DIST_DIR = path.resolve('dist');
const allHtmlFiles = [];

function collectHtml(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) collectHtml(full);
    else if (item.endsWith('.html')) allHtmlFiles.push(full);
  }
}
collectHtml(DIST_DIR);

const broken = [];
for (const f of allHtmlFiles) {
  const html = fs.readFileSync(f, 'utf-8');
  const hrefs = html.match(/href="([^"]*)"/g) || [];
  for (const h of hrefs) {
    const raw = h.replace(/href="|"/g, '');
    if (!raw || raw.startsWith('#') || raw.startsWith('http://') || raw.startsWith('https://') || raw.startsWith('mailto:') || raw.startsWith('tel:')) continue;
    
    // Check resolution
    let target = raw.split('?')[0].split('#')[0];
    if (!target) target = '/';
    let resolved = path.resolve(DIST_DIR, target.startsWith('/') ? target.slice(1) : target);
    
    const exists = fs.existsSync(resolved) || 
                   fs.existsSync(path.join(resolved, 'index.html')) || 
                   fs.existsSync(resolved + '.html');
                   
    if (!exists) {
      broken.push({
        from: path.relative(DIST_DIR, f),
        raw,
        target,
        resolved
      });
    }
  }
}

console.log(`Real broken links: ${broken.length}`);
if (broken.length > 0) {
  console.log('Sample real broken links:', JSON.stringify(broken.slice(0, 20), null, 2));
}
