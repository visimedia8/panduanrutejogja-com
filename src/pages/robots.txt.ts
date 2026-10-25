import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = async () => {
  const robotsTxt = `# Robots.txt for ${siteConfig.name}
User-agent: *
Allow: /

# Google AdSense Crawler Explicit Whitelist
User-agent: Mediapartners-Google
Allow: /

User-agent: AdsBot-Google
Allow: /

# Google Search Engine Crawler
User-agent: Googlebot
Allow: /

# XML Sitemap Index
Sitemap: ${siteConfig.url}/sitemap.xml
`;

  return new Response(robotsTxt.trim(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
