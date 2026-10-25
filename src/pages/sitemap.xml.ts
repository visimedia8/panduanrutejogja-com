import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const panduanEntries = await getCollection('panduan');

  const staticUrls = [
    { url: `${siteConfig.url}/`, changefreq: 'daily', priority: '1.0' },
    { url: `${siteConfig.url}/kategori/trans-jogja/`, changefreq: 'weekly', priority: '0.8' },
    { url: `${siteConfig.url}/kategori/kereta-bandara/`, changefreq: 'weekly', priority: '0.8' },
    { url: `${siteConfig.url}/kategori/tiket-wisata/`, changefreq: 'weekly', priority: '0.8' },
    { url: `${siteConfig.url}/tentang/`, changefreq: 'monthly', priority: '0.6' },
    { url: `${siteConfig.url}/redaksi/`, changefreq: 'monthly', priority: '0.6' },
    { url: `${siteConfig.url}/kontak/`, changefreq: 'monthly', priority: '0.5' },
    { url: `${siteConfig.url}/privacy/`, changefreq: 'monthly', priority: '0.5' },
    { url: `${siteConfig.url}/terms/`, changefreq: 'monthly', priority: '0.5' }
  ];

  const articleUrls = panduanEntries.map((entry) => ({
    url: `${siteConfig.url}/panduan/${entry.slug}/`,
    lastmod: entry.data.updatedDate || entry.data.publishDate,
    changefreq: 'weekly',
    priority: '0.9'
  }));

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
${articleUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
