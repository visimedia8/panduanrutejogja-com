import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src', 'content', 'panduan');
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Helper to generate frontmatter and body
function writeArticle(slug, data, body) {
  const frontmatter = `---
title: "${data.title.replace(/"/g, '\\"')}"
description: "${data.description.replace(/"/g, '\\"')}"
category: "${data.category}"
publishDate: "${data.publishDate}"
updatedDate: "${data.updatedDate || data.publishDate}"
author: "Tim Redaksi PanduanRuteJogja.com"
featuredImage: "/images/${slug}.svg"
imageAlt: "${data.imageAlt.replace(/"/g, '\\"')}"
operationalHours: "${data.operationalHours}"
fare: "${data.fare}"
routeType: "${data.routeType}"
halteList:
${data.halteList.map(h => `  - name: "${h.name}"
    location: "${h.location || ''}"
    transit: "${h.transit || ''}"`).join('\n')}
faqs:
${data.faqs.map(f => `  - question: "${f.question.replace(/"/g, '\\"')}"
    answer: "${f.answer.replace(/"/g, '\\"')}"`).join('\n')}
---

${body}
`;

  fs.writeFileSync(path.join(contentDir, `${slug}.md`), frontmatter);
  console.log(`Saved: ${slug}.md`);
}

export { writeArticle, contentDir };
